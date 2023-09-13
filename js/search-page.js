
var searchPageData = null;
var searchPageDataLoading = false;
var searchPageIndex = null;
var searchTipsVisible = false;

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

function loadSearchPageData() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      // console.log('request', request.responseText)

      var start = 578680
      var offset = 500
      var bits = request.responseText.substr(start-offset, start+offset);
      console.log('bits', bits)
      searchData = JSON.parse(request.responseText);

      searchPageIndex = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('category');
        this.field('content');

        for (var key in searchData) { // Add the data to lunr
          this.add({
            'id': key,
            'title': searchData[key].title,
            'author': searchData[key].author,
            'category': searchData[key].category,
            'content': searchData[key].content
          });
        }
      });

      var searchInput = document.getElementById("search-page-input");
      var searchTerm = searchInput.value;
      if(searchTerm && searchTerm.length > 0) {
        handleSearchPageInput();
      }
    }
  };

  request.open('GET', siteConfig.baseUrl + 'search-data.json');
  request.send();
};

function handleSearchPageInput() {
  var searchInput = document.getElementById("search-page-input");

  if(searchPageDataLoading === false) {
    searchPageDataLoading = true;
    loadSearchPageData();
  } else if(searchPageIndex && searchInput.value.length > 0) {
    var term = searchInput.value;

    // Make search fuzzy for simple terms
    if(term.indexOf(' ') === -1) {
      term = term + '~1'
    }

    // Get lunr to perform a search
    try {
      var results = searchPageIndex.search(term);

      var highestScore, lowestScore
      if(results.length > 2) {
        highestScore = results[0].score;
        lowestScore = results[results.length - 1].score;

        var medianScore = results[Math.round(results.length/2)].score;
        var scoreSum = 0;
        for(var i=0; i<results.length; i++) {
          scoreSum += results[i].score;
        }
        var averageScore = scoreSum / results.length;
      }

      displaySearchPageResults(searchInput, results, lowestScore, highestScore);
    } catch(error) {
      console.log('Search error', term, error);
    }
  }
}

function displaySearchPageResults(searchInput, results, lowestScore, highestScore) {
  var searchResults = document.getElementById('search-page-results');

  if (results.length) { // Are there any results?
    var appendString = '';
    var item, result;
    var green = [0, 166, 82]
    var gray = [222, 222, 222]

    var content, contentBits, k, index, colorPosition, color;
    for(var i = 0; i < results.length; i++) {  // Iterate over the results
      result = results[i];
      item = searchData[result.ref];

      if(item.title.length == 0) {
        continue
      }

      // Strip Jekyll includes.
      contentBits = item.content.split('{%');
      for(k=0; k<contentBits.length; k++) {
        index = contentBits[k].indexOf('%}');
        if(index !== -1) {
          contentBits[k] = contentBits[k].substring(index+2);
        }
      }
      content = contentBits.join('').substring(0, 150).trim();

      // Content includes the page title at the start. Remove it.
      if(content.indexOf(item.title) === 0) {
        content = content.substr(item.title.length)
      }

      // Calculate a color of how good of a match it is
      // Green - best match
      // Grey - worst match
      // Result can also be somewhere in between
      colorPosition = (result.score - lowestScore)/(highestScore - lowestScore)
      color = {
        r: Math.round(gray[0] - Math.abs(gray[0] - green[0])*colorPosition),
        g: Math.round(gray[1] - Math.abs(gray[1] - green[1])*colorPosition),
        b: Math.round(gray[2] - Math.abs(gray[2] - green[2])*colorPosition)
      }

      appendString += '<li><a href="' + item.url + '#:~:text=' + encodeURIComponent(searchInput.value) + '">';
      appendString += '<h3>' + item.title;
      if(lowestScore && highestScore) {
        appendString += '<span style="background-color: rgba('+color.r+','+color.g+','+color.b+');"></span>';
      }
      appendString += '</h3>';
      appendString += '<p>' + content + '...</p>';
      appendString += '</a></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li class="no-results"><h3>Sorry, no results...</h3></li>';
  }

  searchResults.style.display = 'block';
}

function toggleSearchTips() {
  searchTipsVisible = !searchTipsVisible;
  var searchTips = document.getElementById('search-tips');
  var searchTipsContent = document.getElementById('search-tips-content');
  var searchTipsButton = searchTips.getElementsByTagName('button')[0];

  searchTipsButton.setAttribute('aria-expanded', searchTipsVisible);

  if(searchTipsVisible) {
    searchTipsContent.removeAttribute('hidden');
  } else {
    searchTipsContent.setAttribute('hidden', true);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var searchInput = document.getElementById("search-page-input");

  if(searchInput) {
    searchInput.addEventListener('keyup', handleSearchPageInput);

    var searchTerm = getQueryVariable('query');
    if(searchTerm) {
      searchInput.setAttribute("value", searchTerm);

      loadSearchPageData();
    }
  }

  var searchTips = document.getElementById('search-tips');
  var searchTipsButton = searchTips.getElementsByTagName('button')[0];
  searchTipsButton.addEventListener('click', toggleSearchTips);
});
