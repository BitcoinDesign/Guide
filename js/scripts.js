
var searchData = null;
var searchDataLoading = false;
var searchIndex = null;
var searchOverlayVisible = false;
var mobileMenuVisible = false;
var figmaEmbeds = [];

function toggleMenu() {
  if(mobileMenuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

function showMenu() {
  var header = document.getElementById("site-header");
  mobileMenuVisible = true;
  header.classList.add('-active');

  if(searchOverlayVisible) {
    hideSearchOverlay();
  }
};

function hideMenu() {
  var header = document.getElementById("site-header");
  mobileMenuVisible = false;
  header.classList.remove('-active');
};

function toggleSearch() {
  if(searchOverlayVisible) {
  	hideSearchOverlay();
  } else {
  	showSearchOverlay();
  }
};

function showSearchOverlay() {
	searchOverlayVisible = true;

  var searchBox = document.getElementById("toggled-search");
  searchBox.classList.add('-active');

  var searchInput = document.getElementById("search-input");
  searchInput.focus();

  var searchTrigger = document.getElementById("search-trigger");
  searchTrigger.classList.add('-active');

  document.addEventListener('click', clickOutsideSearchOverlay);

  if(mobileMenuVisible) {
    hideMenu()
  }
}

function hideSearchOverlay() {
	searchOverlayVisible = false;

  var searchBox = document.getElementById("toggled-search");
  searchBox.classList.remove('-active');

  var searchTrigger = document.getElementById("search-trigger");
  searchTrigger.classList.remove('-active');

  document.removeEventListener('click', clickOutsideSearchOverlay);
}

function clickOutsideSearchOverlay(event) {
  var searchBox = document.getElementById("toggled-search");
  var searchTrigger = document.getElementById("search-trigger");

  if(searchOverlayVisible && (!searchBox.contains(event.target) && !searchTrigger.contains(event.target))) {
    hideSearchOverlay();
  }
}

function loadSearchData() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			searchData = JSON.parse(request.responseText);

			searchIndex = lunr(function () {
	      this.field('id');
	      this.field('title', { boost: 10 });
	      this.field('author');
	      this.field('category');
	      this.field('content');
	    });

	    for (var key in searchData) { // Add the data to lunr
	      searchIndex.add({
	        'id': key,
	        'title': searchData[key].title,
	        'author': searchData[key].author,
	        'category': searchData[key].category,
	        'content': searchData[key].content
	      });
	    }

			console.log('searchData', searchData, searchIndex);
		}
	};

	request.open('GET', siteConfig.baseUrl + 'search-data.json');
	request.send();
};

function handleSearchInput(event) {
  var searchInput = document.getElementById("search-input");

  if(event.key == 'Escape') {
    hideSearchOverlay();
  } else {
    if(searchDataLoading === false) {
      searchDataLoading = true;
      loadSearchData();
    } else if(searchIndex) {
      var results = searchIndex.search(searchInput.value); // Get lunr to perform a search
      displaySearchResults(searchInput, results);
    }

    var searchBox = document.getElementById("toggled-search");
    var form = searchBox.getElementsByTagName('form')[0];
    form.action = '/search.html?query=' + encodeURIComponent(searchInput);
  }
}

function displaySearchResults(searchInput, results) {
  var searchResults = document.getElementById('search-results');

  if (results.length) { // Are there any results?
    var appendString = '';
    var item;
    var maxVisible = 5;

    for(var i = 0; i < Math.min(maxVisible, results.length); i++) {  // Iterate over the results
      item = searchData[results[i].ref];
      
      appendString += '<li><a href="' + item.url + '">';
      appendString += '<h3>' + item.title + '</h3>';
      appendString += '<p>' + item.content.substring(0, 150) + '...</p>';
      appendString += '</a></li>';
    }

    if(results.length > maxVisible) {
      appendString += '<li><a href="/search.html?query=' + encodeURIComponent(searchInput) + '"><h3>View all ' + results.length + ' results</h3></a></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li><h3>Sorry, no results...</h3></li>';
  }

  searchResults.style.display = 'block';
}

function toggleSecondaryNav(event) {
  var target = event.target;
  var navListItem = target;
  while(navListItem && !navListItem.classList.contains('nav-list-item')) {
    navListItem = navListItem.parentNode;
  }

  if(navListItem.classList.contains('-active')) {
    navListItem.classList.remove('-active');
  } else {
    navListItem.classList.add('-active');
  }
}

function captureFigmaEmbeds() {
  var elements = document.getElementsByClassName("figma-embed");
  var embed, iframe;
  for(var i=0; i<elements.length; i++) {
    embed = elements[i];
    iframe = embed.getElementsByTagName('iframe')[0];

    figmaEmbeds.push({
      element: embed,
      parent: embed.parentElement,
      iframe: iframe,
      width: parseInt(iframe.getAttribute('width')),
      height: parseInt(iframe.getAttribute('height'))
    });
  }
}

function resizeFigmaEmbed(embed) {
  var transform = '';
  var newWidth = 'auto';
  var newHeight = 'auto';

  var style = window.getComputedStyle(embed.parent, null);
  var maxWidth = parseInt(style.getPropertyValue('width').split('px').join(''));
  var maxHeight = window.innerHeight - 200;

  if(maxWidth < embed.width) {
    var scale = maxWidth / embed.width;
    transform = 'scale('+scale+', '+scale+') translate(-50%, -50%)';

    newWidth = embed.width * scale;
    newHeight = embed.height * scale;
  }

  if(newWidth == 'auto' || newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = maxHeight * embed.width / embed.height;

    scale = maxHeight / embed.height;
    transform = 'scale('+scale+', '+scale+') translate(-50%, -50%)';
  }

  embed.iframe.style.transform = transform;
  embed.element.style.height = newHeight + (newHeight == 'auto' ? '' : 'px');
}

function resizeFigmaEmbeds() {
  for(var i=0; i<figmaEmbeds.length; i++) {
    resizeFigmaEmbed(figmaEmbeds[i]);
  }
}

window.addEventListener("resize", function(event) {
  resizeFigmaEmbeds();
})

document.addEventListener("DOMContentLoaded", function(event) {
  var searchInput = document.getElementById("search-input");
  if(searchInput) {
    searchInput.addEventListener('keyup', handleSearchInput);
  }

  var navTrigger = document.getElementById("nav-trigger");
  if(navTrigger) {
    navTrigger.addEventListener('click', toggleMenu);
  }

  var secondaryNavListExpander = document.getElementsByClassName("nav-list-expander");
  for(var i=0; i<secondaryNavListExpander.length; i++) {
    secondaryNavListExpander[i].addEventListener('click', toggleSecondaryNav);
  }
  
  captureFigmaEmbeds();
  resizeFigmaEmbeds();
});