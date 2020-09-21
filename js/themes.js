let themes = [
  {
    // person
    copyBackgroundColor: "#6490E3",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#FFF",
    bitcoinLogoOutlineColor: "", 
    titleFillColor: "#FFF",
    titleOutlineColor: "transparent",
    descriptionFillColor: "#FFF",
    button1FillColor: "#FFF",
    button1OutlineColor: "#FFF",
    button1LabelFillColor: "#6490E3",
    button2FillColor: "#FFF",
    button2OutlineColor: "#FFF",
    button2LabelFillColor: "#6490E3",
    backgroundImagePath: 'url("/assets/images/home/banner/person.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/person.png")',
    backgroundImageColor: '#FFF',
    flipLayoutOnMobile: false,
    author: "Pla Hol Derce",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/11"
  },
  {
    // alexa
    copyBackgroundColor: "#F7931A",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#000",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#000",
    titleOutlineColor: "transparent",
    descriptionFillColor: "#000",
    button1FillColor: "#FFF",
    button1OutlineColor: "#000",
    button1LabelFillColor: "#000",
    button2FillColor: "#F7931A",
    button2OutlineColor: "#000",
    button2LabelFillColor: "#000",
    backgroundImagePath: 'url("/assets/images/home/banner/alexa.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/alexa-mobile.png")',
    backgroundImageColor: '#FFF',
    flipLayoutOnMobile: false,
    author: "Alexa Aker",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/11"
  },
  {
    // clear
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
    backgroundImagePath: "",
    backgroundImagePathMobile: "",
    backgroundImageColor: "#fbfbfb",
    flipLayoutOnMobile: false,
    author: "Holder of Places",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/11"
  },
  {
    // rollercoaster
    copyBackgroundColor: "#9ABBC2",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg", 
    bitcoinLogoFillColor: "#FFF",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#FFF",
    titleOutlineColor: "transparent",
    descriptionFillColor: "#FFF",
    button1FillColor: "#FFF",
    button1OutlineColor: "",
    button1LabelFillColor: "#9ABBC2",
    button2FillColor: "#FFF",
    button2OutlineColor: "",
    button2LabelFillColor: "#9ABBC2",
    backgroundImagePath: 'url("/assets/images/home/banner/rollercoaster.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/rollercoaster-mobile.png")',
    backgroundImageColor: "#FFF",
    flipLayoutOnMobile: true,
    author: "Place Holder",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/11"
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
    document.documentElement.style.setProperty('--background-image-path-mobile', theme.backgroundImagePathMobile);
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
    applyTheme(0);

    document.getElementById('banner-bitcoin-logo-svg').addEventListener('click', function() {
        applyNextTheme();
    });

    document.getElementById('home-banner-info-next').addEventListener('click', function() {
        applyNextTheme();
    });
});
