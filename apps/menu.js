
/* const container = document.querySelector("#menuContainer");
const menu  = document.createElement("div");
let items = document.querySelectorAll(options.drinks.img);

container.appendChild(menu);



const items = document.querySelectorAll(".item");

items.addeventListener('mouseover', mouseOver);
 
function mouseOver(){
  const lowerText = document.querySelector("#descriptionBox");

  let match = (options.drinks.find(element.description)) 
  lowerText.src = `${(match.description)}`

}  


  if (input.value === match.code); `${(match.name)}`;

  text.innerHTML = `You have selected: <br/> ${(match.name) + " :"}  <br/>     ${(match.price) + " euro"}`;
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


