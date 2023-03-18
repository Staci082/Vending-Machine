


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

 function getValue() {
   let input = document.getElementsByTagName("input")[0];

   switch (true) {
      case input.value === "B1":
         alert("lime soda");
         break;

      default: 
      alert("error");
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