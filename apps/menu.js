

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

// item description on hover toggle

$("#item1").hover(
  function () {
    $("#des1").show();
  },
  function () {
    $("#des1").hide();
  }
);
$("#item2").hover(
  function () {
    $("#des2").show();
  },
  function () {
    $("#des2").hide();
  }
);
$("#item3").hover(
  function () {
    $("#des3").show();
  },
  function () {
    $("#des3").hide();
  }
);
$("#item4").hover(
  function () {
    $("#des4").show();
  },
  function () {
    $("#des4").hide();
  }
);
$("#item5").hover(
  function () {
    $("#des5").show();
  },
  function () {
    $("#des5").hide();
  }
);
