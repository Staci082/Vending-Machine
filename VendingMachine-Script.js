


// gets buttons to output their value to textbox
document.addEventListener('DOMContentLoaded', function() {
   let textbox = document.querySelector("#textInput");
   let buttons = document.querySelectorAll(".btn");
   
   buttons.forEach(function(btn) {
     btn.addEventListener("click", function(e) {
       textbox.value += this.value + " ";
     });
   });
 });



function scrollUp()
{
   menuCont.scrollBy(0,20);
}

function scrollDown()
{
   menuCont.scrollBy(0,-20);
}

$('#delete').click(function() {
   location.reload(true);
});