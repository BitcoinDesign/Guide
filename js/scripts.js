
var searchData = null;
var searchDataLoading = false;
var searchIndex = null;
var searchOverlayVisible = false;
var mobileMenuVisible = false;

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
});