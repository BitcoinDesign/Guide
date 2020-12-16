
var searchPageData = null;
var searchPageDataLoading = false;
var searchPageIndex = null;

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
      searchData = JSON.parse(request.responseText);

      searchPageIndex = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('category');
        this.field('content');
      });

      for (var key in searchData) { // Add the data to lunr
        searchPageIndex.add({
          'id': key,
          'title': searchData[key].title,
          'author': searchData[key].author,
          'category': searchData[key].category,
          'content': searchData[key].content
        });
      }

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
  } else if(searchPageIndex) {
    var results = searchPageIndex.search(searchInput.value); // Get lunr to perform a search
    displaySearchPageResults(searchInput, results);
  }
}

function displaySearchPageResults(searchInput, results) {
  var searchResults = document.getElementById('search-page-results');

  if (results.length) { // Are there any results?
    var appendString = '';
    var item;

    var content, contentBits, k, index;
    for(var i = 0; i < results.length; i++) {  // Iterate over the results
      item = searchData[results[i].ref];

      // Strip Jekyll includes.
      contentBits = item.content.split('{%');
      for(k=0; k<contentBits.length; k++) {
        index = contentBits[k].indexOf('%}');
        if(index !== -1) {
          contentBits[k] = contentBits[k].substring(index+2);
        }
      }
      content = contentBits.join('').substring(0, 150);

      appendString += '<li><a href="' + item.url + '">';
      appendString += '<h3>' + item.title + '</h3>';
      appendString += '<p>' + content + '...</p>';
      appendString += '</a></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li><h3>Sorry, no results...</h3></li>';
  }

  searchResults.style.display = 'block';
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
});