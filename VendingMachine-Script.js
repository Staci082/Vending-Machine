


// gets buttons to output their value to textbox
document.addEventListener('DOMContentLoaded', function() {
   let textbox = document.querySelector("#textInput");
   let buttons = document.querySelectorAll(".btn");
   
   buttons.forEach(function(btn) {
     btn.addEventListener("click", function(e) {
       textbox.value += this.value;
     });
   });
 });


 // puts value's into specified strings 

 function getValue() {
   let input = document.getElementsByTagName("input")[0];
   let textbox =  document.getElementById("makeChoice");

   switch (true) {
      case (input.value) === "B1": 
         textbox.innerHTML = "lime soda";
      break;

      default: 
      alert("out of stock");
      break;
 }
 }

 
/* function scrollUp()
{
   menuCont.scrollBy(0,20);
}

function scrollDown()
{
   menuCont.scrollBy(0,-20);
}
*/

$('#delete').click(function() {
   location.reload(true);
});