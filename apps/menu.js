

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
