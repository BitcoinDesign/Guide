let themes = [
  {
    // person
    copyBackgroundColor: "#6490E3",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#FFF",
    bitcoinLogoOutlineColor: "", 
    titleFillColor: "#FFF",
    titleOutlineColor: "#FFF",
    descriptionFillColor: "#FFF",
    slackButtonFillColor: "#FFF",
    slackButtonOutlineColor: "#FFF",
    slackButtonLabelFillColor: "#6490E3",
    githubButtonFillColor: "#FFF",
    githubButtonOutlineColor: "#FFF",
    githubButtonLabelFillColor: "#6490E3",
    backgroundImagePath: 'url("/assets/images/home/banner/person.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/person.png")',
    flipLayoutOnMobile: true,
  },
  {
    // alexa
    copyBackgroundColor: "#F7931A",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#000",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#000",
    titleOutlineColor: "#000",
    descriptionFillColor: "#000",
    slackButtonFillColor: "#FFF",
    slackButtonOutlineColor: "#000",
    slackButtonLabelFillColor: "#000",
    githubButtonFillColor: "#F7931A",
    githubButtonOutlineColor: "#000",
    githubButtonLabelFillColor: "#000",
    backgroundImagePath: 'url("/assets/images/home/banner/alexa.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/alexa-mobile.png")',
    flipLayoutOnMobile: true,
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
    slackButtonFillColor: "",
    slackButtonOutlineColor: "#000",
    slackButtonLabelFillColor: "#000",
    githubButtonFillColor: "",
    githubButtonOutlineColor: "#000",
    githubButtonLabelFillColor: "#000",
    backgroundImagePath: "",
    backgroundImagePathMobile: "", 
    flipLayoutOnMobile: true,
  },
  {
    // rollercoaster
    copyBackgroundColor: "#9ABBC2",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg", 
    bitcoinLogoFillColor: "#FFF",
    bitcoinLogoOutlineColor: "#FFF",
    titleFillColor: "#FFF",
    titleOutlineColor: "#FFF",
    descriptionFillColor: "#FFF",
    slackButtonFillColor: "#FFF",
    slackButtonOutlineColor: "",
    slackButtonLabelFillColor: "#9ABBC2",
    githubButtonFillColor: "#FFF",
    githubButtonOutlineColor: "",
    githubButtonLabelFillColor: "#9ABBC2",
    backgroundImagePath: 'url("/assets/images/home/banner/rollercoaster.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/rollercoaster-mobile.png")',
    flipLayoutOnMobile: true
  }
  
]

var theme = themes[Math.floor(Math.random()*themes.length)]

document.documentElement.style.setProperty('--copy-background-color', theme.copyBackgroundColor);
document.documentElement.style.setProperty('--title-fill-color', theme.titleFillColor);
document.documentElement.style.setProperty('--title-outline-color', theme.titleOutlineColor);
document.documentElement.style.setProperty('--description-fill-color', theme.descriptionFillColor);
document.documentElement.style.setProperty('--slack-button-fill-color', theme.slackButtonFillColor);
document.documentElement.style.setProperty('--slack-button-outline-color', theme.slackButtonOutlineColor);
document.documentElement.style.setProperty('--slack-button-label-fill-color', theme.slackButtonLabelFillColor);
document.documentElement.style.setProperty('--github-button-fill-color', theme.githubButtonFillColor);
document.documentElement.style.setProperty('--github-button-outline-color', theme.githubButtonOutlineColor);
document.documentElement.style.setProperty('--github-button-label-fill-color', theme.githubButtonLabelFillColor);
document.documentElement.style.setProperty('--background-image-path', theme.backgroundImagePath);
document.documentElement.style.setProperty('--background-image-path-mobile', theme.backgroundImagePathMobile);