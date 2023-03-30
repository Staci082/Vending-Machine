

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

IncludeJavascript("menu.js") // import  
IncludeJavascript("variables.js") // import
// IncludeJavascript("textBtns.js") // import

window.onload = ()=>{ // html event
    
  console.log(message)
  console.log(GetName('John Doe'))
  console.log(menu)

}


// variables

const submit = document.getElementById("check");
const text = document.querySelector("#textBox");

// gets buttons to output their value to text container

document.addEventListener("DOMContentLoaded", function () {
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
  

// puts value's into specified strings

  function getValue(event) {
  let input = document.getElementsByTagName("input")[0];

  event.preventDefault();
  $("#textInput").hide();

  let match = (drinks.find(element => (element.code === input.value)))


  if (input.value === match.code); `${(match.name)}`;

  text.innerHTML = `You have selected: <br/> ${(match.name) + " :"}  <br/>     ${(match.price) + " euro"}`;
}
// else {
//   output.innerHTML = "Out of stock" ;




// reloads text

$("#delete").click(function () {
  location.reload(true);
});