let appTitle = "Kodeloftet Recap";
//Finn elementet du ønsker å plasere nye elementer under
let bodyElement = document.querySelector("body");
//lag det nye elementet
let mainTitleElement = document.createElement("h1");
// Og konfigurer det
mainTitleElement.textContent =
  // Sett det inn i dokumentet
  bodyElement.append(mainTitleElement);

let imageList = [
  {
    name: "Sommer i bergen",
    artist: "Tor fisker",
    src: "images/summer.jpg",
  },

  {
    Name: "HotDog",
    artist: "Fredrik",
    src: "images/hotdog.jpg",
  },
];

for (let image of imageList) {
  let imageElement = createImageCard(image);
  bodyElement.append(imageElement);
}

let imageElementB = createImageCard(image2);
bodyElement.append(imageElementB);

function createImageCard(image) {
  //<img height="200" src="images/summer.jpg"/>
  let imageShowcaseElement = document.createElement("img");
  // <img />
  imageShowcaseElement.src = image.src;
  // <img src= "images/summer.jpg" />
  imageShowcaseElement.height = 200;
  // <img height= src="images/summer.jpg" />

  return imageShowcaseElement;
}
