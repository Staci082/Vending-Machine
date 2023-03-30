/*

const menuWrapper = document.querySelector('#menuWrapper');
const menuItems = options.drinks["img"];


menuItems.forEach(item => {

  const menuItem = document.createElement('div');
    menuItem.classList.add('item');
    const image = document.createElement('img');
    image.src = `${(options..img)}`
    menuItem.appendChild(image);
    menuWrapper.appendChild(menuItem);
});



  const upButton = document.createElement('img');
  const downButton = document.createElement('img');
  upButton.classList.add('menuBtns');
  downButton.classList.add('menuBtns');
*/


  // WORKING DON'T THROW AWAY

 /*  upButton.addEventListener('click', () => {
    menuWrapper.style.transform = `translateY(calc(${menuWrapper.style.transform || '0px'} + 110px))`;
  });
  downButton.addEventListener('click', () => {
    menuWrapper.style.transform = `translateY(calc(${menuWrapper.style.transform || '0px'} - 110px))`;
  });
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


