
const containerD = document.querySelector(".itemContainer");
const options = {
  drinks: [
    {
      id: 1,
      name: "lime soda",
      price: 1.5,
      code: "B1",
      src: "./images/lime.png",
      description: "lime soda &nbsp; € 1.5 &nbsp; B 1",
    },
    {
      id: 2,
      name: "pineapple soda",
      price: 1.5,
      code: "B2",
      src: "./images/pineapple.png",
      description: "pineapple soda &nbsp; € 1.5 &nbsp; B 2",
    },
    {
      id: 3,
      name: "cola drink",
      price: 1.5,
      code: "B3",
      src: "./images/cola.png",
      description: "cola drink &nbsp; € 1.5 &nbsp; B 3",
    },
    {
      id: 4,
      name: "energy drink",
      price: 2.0,
      code: "B4",
      src: "./images/energy.png",
      description: "energy drink &nbsp; € 2.0 &nbsp; B 4",
    },
    {
      id: 5,
      name: "jungle drink",
      price: 2.0,
      code: "B5",
      src: "./images/jungle.png",
      description: "jungle drink &nbsp; € 2.0 &nbsp; B 5",
    },
    {
      id: 6,
      name: "mystery drink",
      price: 2.0,
      code: "E2",
      src: "./images/mystery.png",
      description: "mystery drink &nbsp; € 2.0 &nbsp; E 2",
    },
  ],
  chocolates: [
    {
      id: 7,
      name: "candy bar",
      price: 1.5,
      code: "C1",
      src: "./images/redbar.png",
      description: "candy bar &nbsp; € 1.5 &nbsp; C 1",
    },
    {
      id: 8,
      name: "nutty bar",
      price: 1.5,
      code: "C2",
      src: "./images/yellowbar.png",
      description: "nutty bar &nbsp; € 1.5 &nbsp; C 2",
    },
    {
      id: 9,
      name: "fruity bar",
      price: 1.5,
      code: "C3",
      src: "./images/pinkbar.png",
      description: "fruity bar &nbsp; € 1.5 &nbsp; C 3",
    },
    {
      id: 10,
      name: "chocolate bar",
      price: 1.5,
      code: "C4",
      src: "./images/brownbar.png",
      description: "chocolate bar &nbsp; € 1.5 &nbsp; C 4",
    },
  ],
  chips: [
    {
      id: 11,
      name: "salt chips",
      price: 2.0,
      code: "A1",
      src: "./images/redchips.png",
      description: "salt chips &nbsp; € 2.0 &nbsp; A 1",
    },
    {
      id: 12,
      name: "tortilla chips",
      price: 2.0,
      code: "A2",
      src: "./images/yellowchips.png",
      description: "tortilla chips &nbsp; € 2.0 &nbsp; A 2",
    },
    {
      id: 13,
      name: "paprika chips",
      price: 2.0,
      code: "A3",
      src: "./images/greenchips.png",
      description: "paprika chips &nbsp; € 2.0 &nbsp; A 3",
    },
    {
      id: 14,
      name: "cheesy chips",
      price: 2.0,
      code: "A4",
      src: "./images/pinkchips.png",
      description: "cheesy chips &nbsp; € 2.0 &nbsp; A 4",
    },
  ],
};


options.drinks.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";

  const img = document.createElement("img");
  img.src = item.src;
  img.style.height = "14vh";

  div.appendChild(img);

  containerD.appendChild(div);

});
/* const descriptionBox = querySelector("#descriptionBox");
  const description = document.createElement("div");
  
  descriptionBox.appendChild(description);
  descriptionBox.innerHTML = item.description; */



  
/* const items = options.map((image) => {
    const container = document.getElementById("itemContainer");
    return `<img src="${image.url}" alt="${image.name}" />`;      
});

// add the image divs to the container
const imageContainer = document.getElementById("itemContainer");
imageContainer.innerHTML = items.join("hello");  */




// WORKING DON'T THROW AWAY

/*  upButton.addEventListener('click', () => {
    itemContainer.style.transform = `translateY(calc(${itemContainer.style.transform || '0px'} + 110px))`;
  });
  downButton.addEventListener('click', () => {
    itemContainer.style.transform = `translateY(calc(${itemContainer.style.transform || '0px'} - 110px))`;
  });
*/

/* 
function addItems(menuItem) {
  const menu = document.querySelector('#menuContainer');
  const column = document.createElement('div');
  menu.append(column)
}

menuItem.drinks.forEach((url) => {
  menuItem.setAttribute('data-url', drinks.url);
})

options.forEach((menuItem) => addItems(menuItem));
*/


/*
function createImageHTML(image) {
  return `
    <img src="${image.src}" alt="${image.name}" class="item">
  `;
}

function renderCarousel(options) {
  const carousel = document.querySelector("#itemContainer");
  const startIndex = currentImageIndex;
  const endIndex = currentImageIndex + 5;
  const visibleImages = options.drinks.slice(startIndex, endIndex);
  const imagesHTML = visibleImages.map(createImageHTML).join("");
  carousel.innerHTML = imagesHTML;
}

renderCarousel(options);

let currentImageIndex = 0;

function nextImage() {
  if (currentImageIndex + 5 < images.length) {
    currentImageIndex += 1;
    renderCarousel(options);
  }
}

function previousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
    renderCarousel(options);
  }
}
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);
*/ 
