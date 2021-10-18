
var searchData = null;
var searchDataLoading = false;
var searchIndex = null;
var searchOverlayVisible = false;
var mobileMenuVisible = false;
var figmaEmbeds = [];
var ref = {};

function toggleMenu() {
  if(mobileMenuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

function updateNavAccessibility() {
  var isMobile = window.innerWidth <= 375;

  ref.navTrigger.setAttribute("aria-hidden", !isMobile);
  ref.siteNav.setAttribute("aria-hidden", isMobile);

  if(isMobile) {
    ref.siteNav.setAttribute("hidden", "hidden");
  }
}

function showMenu() {
  mobileMenuVisible = true;

  // Update nav trigger accessibility properties
  ref.navTrigger.setAttribute("aria-expanded", true);

  // Update nav menu accessibility properties
  ref.siteNav.removeAttribute("hidden");

  setTimeout(function() {
    ref.header.classList.add('-active');
  }, 5);

  if(searchOverlayVisible) {
    hideSearchOverlay();
  }
};

function hideMenu() {
  mobileMenuVisible = false;
  ref.header.classList.remove('-active');

  // Update nav trigger accessibility properties
  ref.navTrigger.setAttribute("aria-expanded", false);

  setTimeout(function() {
    ref.siteNav.setAttribute("hidden", "hidden");
  }, 400);
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

  ref.searchBox.classList.add('-active');
  ref.searchBox.removeAttribute("aria-hidden");

  ref.searchInput.focus();

  ref.searchTrigger.classList.add('-active');
  ref.searchTrigger.setAttribute("aria-pressed", true);

  document.addEventListener('click', clickOutsideSearchOverlay);

  if(mobileMenuVisible) {
    hideMenu()
  }
}

function hideSearchOverlay() {
	searchOverlayVisible = false;

  ref.searchBox.classList.remove('-active');
  ref.searchBox.setAttribute("aria-hidden", true);

  ref.searchTrigger.classList.remove('-active');
  ref.searchTrigger.setAttribute("aria-pressed", false);

  document.removeEventListener('click', clickOutsideSearchOverlay);
}

function clickOutsideSearchOverlay(event) {
  if(searchOverlayVisible && (!ref.searchBox.contains(event.target) && !ref.searchTrigger.contains(event.target))) {
    hideSearchOverlay();
  }
}

function loadSearchData() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			searchData = JSON.parse(request.responseText);

			searchIndex = lunr(function() {
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
		}
	};

	request.open('GET', siteConfig.baseUrl + 'search-data.json');
	request.send();
};

function handleSearchInput(event) {
  if(event.key == 'Escape') {
    hideSearchOverlay();
  } else {
    if(searchDataLoading === false) {
      searchDataLoading = true;
      loadSearchData();
    } else if(searchIndex) {
      var results = searchIndex.search(ref.searchInput.value); // Get lunr to perform a search
      displaySearchResults(ref.searchInput.value, results);
    }

    var form = ref.searchBox.getElementsByTagName('form')[0];
    form.action = '/search.html?query=' + encodeURIComponent(ref.searchInput);
  }
}

function displaySearchResults(searchInput, results) {
  if (results.length) { // Are there any results?
    var appendString = '';
    var item;
    var maxVisible = 5;

    var content, contentBits, k, index;
    for(var i = 0; i < Math.min(maxVisible, results.length); i++) {  // Iterate over the results
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

    if(results.length > maxVisible) {
      appendString += '<li><a href="/search.html?query=' + encodeURIComponent(searchInput) + '"><h3>View all ' + results.length + ' results</h3></a></li>';
    }

    ref.searchResults.innerHTML = appendString;
  } else {
    ref.searchResults.innerHTML = '<li><h3>Sorry, no results...</h3></li>';
  }

  ref.searchResults.style.display = 'block';
}

function toggleSecondaryNav(event) {
  var target = event.target;
  var navListItem = target;
  while(navListItem && !navListItem.classList.contains('nav-list-item')) {
    navListItem = navListItem.parentNode;
  }

  if(navListItem.classList.contains('-active')) {
    navListItem.classList.remove('-active');
    navListItem.setAttribute('aria-expanded', false);
  } else {
    navListItem.classList.add('-active');
    navListItem.setAttribute('aria-expanded', true);
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
  ref.header =  document.getElementById("site-header");
  ref.siteNav =  document.getElementById('site-nav');
  ref.navTrigger = document.getElementById("nav-trigger");
  ref.searchBox = document.getElementById("toggled-search");
  ref.searchInput = document.getElementById("search-input");
  ref.searchTrigger = document.getElementById("search-trigger");
  ref.searchResults = document.getElementById('search-results');

  updateNavAccessibility();

  if(ref.searchInput) {
    ref.searchInput.addEventListener('keyup', handleSearchInput);
  }

  if(ref.navTrigger) {
    ref.navTrigger.addEventListener('click', toggleMenu);
  }

  var secondaryNavListExpander = document.getElementsByClassName("nav-list-expander");
  for(var i=0; i<secondaryNavListExpander.length; i++) {
    secondaryNavListExpander[i].addEventListener('click', toggleSecondaryNav);
  }
  
  captureFigmaEmbeds();
  resizeFigmaEmbeds();
});