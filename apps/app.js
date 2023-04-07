

// file connections

async function IncludeJavascript(filename){
  var script = await document.createElement('script');
  // <script src=""
  script.src = await filename;
  return new Promise((resolve,reject)=>{
      script.onload = ()=>{
          resolve()
      }
      document.body.appendChild(script);
  })
}

IncludeJavascript("./apps/menu.js") // import  
IncludeJavascript("./apps/items.js") // import
// IncludeJavascript("./apps/text.js") // import





// gets buttons to output their value to text container

document.addEventListener("DOMContentLoaded", function () {  // on load
  let textbox = document.querySelector("#textInput");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      textbox.value += this.value;
    });
  });
});


// enables number buttons after letter button is clicked

function enabler() {
  var x = document.getElementsByClassName("number");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].disabled = false;
  }
}
  

const payButton = document.querySelector(".payButton");
const payContent = document.querySelector(".payContent");


// puts value's into specified strings

  function getValue(event) {
  let input = document.getElementsByTagName("input")[0];
  const text = document.querySelector("#textBox");
  const orderImg = document.getElementById("orderImg");

  orderImg.style.height = "40%";
  text.style.margin = "70px 0 20px 0";

  
  event.preventDefault();
  $("#textInput").hide();
  $("#descriptionBox").hide();


  let match = (options.drinks.find(element => (element.code === input.value))) 
  || (options.chocolates.find(element => (element.code === input.value)))
  || (options.chips.find(element => (element.code === input.value)))


  if (input.value === match.code) {

  text.innerHTML = `You have selected: <br/> <br/> ${(match.name) + ":"}  <br/>     ${(match.price) + " euro"}`;
  orderImg.src = `${(match.src)}`;

  payButton.style.display = "block";
  } /* else {
    text.innerHTML = `Please enter valid combination`;
  } */
  };


  // payment button

  payButton.addEventListener ("click", function() {
    payContainer.style.display = "block";
  });



// closes payment pop up

const closeButton = document.querySelector(".close");

closeButton.onclick = function() {
  payContainer.style.display = "none";
}

// when user clicks outside of payment pop up it closes as well

window.onclick = function(event) {
  if (event.target == payContainer) {
    payContainer.style.display = "none";
  }
}



// reloads text

$("#delete").click(function () {
  location.reload(true);
});
