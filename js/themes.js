let themes = [
  {
    // Template
    copyBackgroundColor: "",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "",
    bitcoinLogoOutlineColor: "#000",
    titleFillColor: "#FFF",
    titleOutlineColor: "#000",
    descriptionFillColor: "#000",
    button1FillColor: "",
    button1OutlineColor: "#000",
    button1LabelFillColor: "#000",
    button2FillColor: "",
    button2OutlineColor: "#000",
    button2LabelFillColor: "#000",
    backgroundImagePath: 'url("/assets/images/home/banner/template.jpg")',
    backgroundImagePathRetina: 'url("/assets/images/home/banner/template@2x.jpg")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/template-mobile.jpg")',
    backgroundImagePathMobileRetina: 'url("/assets/images/home/banner/template-mobile@2x.jpg")',
    backgroundImageColor: "#fbfbfb",
    flipLayoutOnMobile: false,
    author: "Template",
    authorLink: "https://github.com/BitcoinDesign/Guide/pull/27"
  },
  {
    // Bridging bitcoin
    copyBackgroundColor: "#F7931A",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#000",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#000",
    titleOutlineColor: "",
    descriptionFillColor: "#000",
    button1FillColor: "#FFF",
    button1OutlineColor: "#000",
    button1LabelFillColor: "#000",
    button2FillColor: "",
    button2OutlineColor: "#000",
    button2LabelFillColor: "#000",
    backgroundImagePath: 'url("/assets/images/home/banner/header-theme-1-bridging-bitcoin.png")',
    backgroundImagePathRetina: 'url("/assets/images/home/banner/header-theme-1-bridging-bitcoin@2x.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/header-theme-1-bridging-bitcoin-mobile.png")',
    backgroundImagePathMobileRetina: 'url("/assets/images/home/banner/header-theme-1-bridging-bitcoin-mobile@2x.png")',
    backgroundImageColor: "#F7931A",
    flipLayoutOnMobile: false,
    author: "Alexa Aker",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/45"
  },
  {
    // 3D abstract
    copyBackgroundColor: "#64EBFC",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#F7931A",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#F7931A",
    titleOutlineColor: "#F7931A",
    descriptionFillColor: "#000",
    button1FillColor: "#F7931A",
    button1OutlineColor: "#F7931A",
    button1LabelFillColor: "#FFF",
    button2FillColor: "#F7931A",
    button2OutlineColor: "#F7931A",
    button2LabelFillColor: "#FFF",
    backgroundImagePath: 'url("/assets/images/home/banner/header-theme-2-3d-abstract.png")',
    backgroundImagePathRetina: 'url("/assets/images/home/banner/header-theme-2-3d-abstract@2x.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/header-theme-2-3d-abstract-mobile.png")',
    backgroundImagePathMobileRetina: 'url("/assets/images/home/banner/header-theme-2-3d-abstract-mobile@2x.png")',
    backgroundImageColor: "#64EBFC",
    flipLayoutOnMobile: false,
    author: "Gabor Magyar",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/143"   
  }
];

var shuffleArray = function(array) {
    var i = array.length - 1;
    for(; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
};

shuffleArray(themes);

var currentThemeIndex = null;
var applyNextTheme = function() {
    currentThemeIndex++;

    if(currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
    }

    applyTheme(currentThemeIndex);
}

var applyTheme = function(themeIndex) {
    currentThemeIndex = themeIndex;

    var theme = themes[themeIndex];

    document.documentElement.style.setProperty('--copy-background-color', theme.copyBackgroundColor);
    document.documentElement.style.setProperty('--title-fill-color', theme.titleFillColor);
    document.documentElement.style.setProperty('--title-outline-color', theme.titleOutlineColor);
    document.documentElement.style.setProperty('--description-fill-color', theme.descriptionFillColor);
    document.documentElement.style.setProperty('--button-1-fill-color', theme.button1FillColor);
    document.documentElement.style.setProperty('--button-1-outline-color', theme.button1OutlineColor);
    document.documentElement.style.setProperty('--button-1-label-fill-color', theme.button1LabelFillColor);
    document.documentElement.style.setProperty('--button-2-fill-color', theme.button2FillColor);
    document.documentElement.style.setProperty('--button-2-outline-color', theme.button2OutlineColor);
    document.documentElement.style.setProperty('--button-2-label-fill-color', theme.button2LabelFillColor);
    document.documentElement.style.setProperty('--background-image-path', theme.backgroundImagePath);
    document.documentElement.style.setProperty('--background-image-path-retina', theme.backgroundImagePathRetina);
    document.documentElement.style.setProperty('--background-image-path-mobile', theme.backgroundImagePathMobile);
    document.documentElement.style.setProperty('--background-image-path-mobile-retina', theme.backgroundImagePathMobileRetina);
    document.documentElement.style.setProperty('--background-image-color', theme.backgroundImageColor);

    var logoPath = document.getElementById('banner-bitcoin-logo-path');
    if(logoPath) {
        logoPath.setAttribute('fill', theme.bitcoinLogoFillColor);
        logoPath.setAttribute('stroke', theme.bitcoinLogoOutlineColor);
    }

    var banner = document.getElementById('home-banner');
    if(banner) {
        if(theme.flipLayoutOnMobile) {
            banner.classList.add('-flip-on-mobile');
        } else {
            banner.classList.remove('-flip-on-mobile');
        }
    }

    var author = document.getElementById('home-banner-info-author');
    if(author) {
        author.innerText = theme.author;
        author.setAttribute('href', theme.authorLink);
    }
};

applyTheme(0);

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    var banner = document.getElementById('home-banner');

    if(banner) {
        applyTheme(0);

        var bannerNext = document.getElementById('home-banner-info-next');
        if(bannerNext) {
            bannerNext.addEventListener('click', function(event) {
                event.preventDefault();

                applyNextTheme();
            });
        }
    }
});
