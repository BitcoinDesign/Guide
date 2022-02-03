
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

function handleUnitsAndSymbolsFormatterInput() {
  var amount = ref.unitsAndSymbolsFormatterInput.value;

  var formats = [
    ['Germany', 'de-DE', 'EUR'],
    ['Polen', 'pl', 'EUR'],
    ['Liechtenstein', 'el-LI', 'CHF'],
    ['Switzerland', 'de-CH', 'CHF'],
    ['United States', 'en-US', 'USD'],
    ['Japan', 'jp-JP', 'JPY'],
    ['Israel', 'il', 'ILS']
  ];

  var html = '', format, formatted;
  for(var i=0; i<formats.length; i++) {
    format = formats[i];
    formatted  = Intl.NumberFormat(
      format[1],
      {
        style: "currency",
        currency: format[2]
      }
    ).format(amount);
    html += '<div><p>'+format[0]+'</p><p>'+format[2]+'</p><p>'+formatted+'</p></div>';
  }

  ref.unitsAndSymbolsFormatterTable.innerHTML = html;
};

function setupUnitsAndSymbolsFormatter() {
  ref.unitsAndSymbolsFormatter =  document.getElementById("units-and-symbols-formatter");

  if(ref.unitsAndSymbolsFormatter) {
    ref.unitsAndSymbolsFormatterInput =  document.getElementById("units-and-symbols-formatter-input");
    ref.unitsAndSymbolsFormatterTable =  document.getElementById("units-and-symbols-formatter-table");

    ref.unitsAndSymbolsFormatterInput.addEventListener('keyup', handleUnitsAndSymbolsFormatterInput);

    handleUnitsAndSymbolsFormatterInput();
  }
}

function handleModalImageLinkClick(e) {
    e.preventDefault();

    var caption, imgTag;

    if(e.target.closest('svg')) imgTag = e.target.closest('figure').querySelector('img');
    else imgTag = e.target;

    imgTag.closest('figure').childNodes.forEach(function(child){
        if(child.tagName === 'FIGCAPTION') {
            if(child.querySelector('p').innerHTML !== 'Expand image') caption = child.querySelector('p').outerHTML;
        }
    });

    if( !document.getElementById('modal-image-container') ) {
        ref.modalImageContainer = document.createElement('div');
        ref.modalImageContainer.classList.add('modal-image-container', 'hidden', 'loading');
        ref.modalImageContainer.setAttribute('id', 'modal-image-container');
        var modalImageInner = document.createElement('div');
        modalImageInner.classList.add('modal-image-inner');
        ref.modalImage = document.createElement('img');
        ref.modalImage.classList.add('modal-image');
        var modalTop = document.createElement('div');
        modalTop.classList.add('modal-image-top');
        var modalBottom = document.createElement('div');
        modalBottom.classList.add('modal-image-bottom');
        var modalClose = document.createElement('span');
        modalClose.classList.add('modal-image-close');
        var modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-image-overlay');
        ref.modalCaption = document.createElement('div');
        ref.modalCaption.classList.add('modal-image-caption');
        ref.modalImageLoading = document.createElement('div');
        ref.modalImageLoading.classList.add('modal-image-loading');
        ref.modalImageContainer.appendChild(modalOverlay);
        modalImageInner.appendChild(ref.modalImage);
        modalImageInner.appendChild(ref.modalCaption);
        modalTop.appendChild(modalClose);
        ref.modalImageContainer.appendChild(modalTop);
        modalImageInner.appendChild(ref.modalImageLoading);
        ref.modalImageContainer.appendChild(modalImageInner);
        ref.modalImageContainer.appendChild(modalBottom);
        document.getElementById('top').appendChild(ref.modalImageContainer);
        [modalClose, modalTop, modalBottom, modalOverlay].forEach(function(element){
            element.addEventListener('click', closeModal);
        });
    }

    var mobile = window.innerWidth < 640;

    ref.modalImageContainer.classList.add('loading');
    if(mobile && imgTag.dataset.modalWidthMobile && imgTag.dataset.modalHeightMobile) ref.modalImageDimensions = [imgTag.dataset.modalWidthMobile, imgTag.dataset.modalHeightMobile];
    else if(imgTag.dataset.modalWidth && imgTag.dataset.modalHeight) ref.modalImageDimensions = [imgTag.dataset.modalWidth, imgTag.dataset.modalHeight];
    else ref.modalImageDimensions = [imgTag.getAttribute('width'), imgTag.getAttribute('height')];
    ref.modalImage.setAttribute('width', ref.modalImageDimensions[0]);
    ref.modalImage.setAttribute('height', ref.modalImageDimensions[1]);

    if(caption) {
        ref.modalCaption.innerHTML = caption;
        ref.modalCaption.classList.remove('hidden');
    }
    else {
        ref.modalCaption.innerHTML = '';
        ref.modalCaption.classList.add('hidden');
    }

    ref.modalImageAspectRatio = ref.modalImageDimensions[0] / ref.modalImageDimensions[1];
    resizeModal(true);

    setTimeout(function(){
        ref.modalImageContainer.classList.remove('hidden');
    }, 100);

    var img,
        modalLink = imgTag.closest('.modal-image-link');
    if(mobile && modalLink.dataset.modalImageMobile) img = modalLink.dataset.modalImageMobile;
    else img = modalLink.getAttribute('href');

    var request = new Request(img);
    fetch(request)
        .then(response => {
            return response.blob()
        })
        .then(blob => {
            ref.modalImage.setAttribute('src', URL.createObjectURL(blob));
            setTimeout(function(){
                ref.modalImageContainer.classList.remove('loading');
            }, 100);
        });
}

function resizeModal(force = false) {
    if(ref.modalImageContainer && (force || !ref.modalImageContainer.classList.contains('hidden'))){
        var width, height;
        var margins = window.innerWidth < 1024 ? 30 : 60;
        if(ref.modalImageAspectRatio < (window.innerWidth / (window.innerHeight - 120))) {
            ref.modalImageContainer.classList.add('portrait');
            height = window.innerHeight - 120 - document.getElementsByClassName('modal-image-caption')[0].offsetHeight;
            width = height * ref.modalImageAspectRatio;
        }
        else {
            ref.modalImageContainer.classList.remove('portrait');
            width = window.innerWidth - margins;
            height = width / ref.modalImageAspectRatio;
        }
        ref.modalImage.style.width = width + 'px';
        ref.modalImage.style.height = height + 'px';
    }
}

function closeModal(){
    ref.modalImageContainer.classList.add('hidden');
}

window.addEventListener("resize", function(event) {
  resizeFigmaEmbeds();
  resizeModal();
})

document.addEventListener("DOMContentLoaded", function(event) {
  ref.header =  document.getElementById("site-header");
  ref.siteNav =  document.getElementById('site-nav');
  ref.navTrigger = document.getElementById("nav-trigger");
  ref.searchBox = document.getElementById("toggled-search");
  ref.searchInput = document.getElementById("search-input");
  ref.searchTrigger = document.getElementById("search-trigger");
  ref.searchResults = document.getElementById('search-results');
  ref.modalImageLinks = document.querySelectorAll('.modal-image-link, .modal-indicator svg');

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

  setupUnitsAndSymbolsFormatter();

  for(var i = 0; i < ref.modalImageLinks.length; i++) {
      ref.modalImageLinks[i].addEventListener('click', handleModalImageLinkClick);
  }
});
