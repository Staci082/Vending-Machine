// variables


 /*
document.getElementById('A').value 
document.getElementById('B').value 
document.getElementById('C').value 
document.getElementById('D').value 
document.getElementById('E').value 
document.getElementById('1').value 
document.getElementById('2').value 
document.getElementById('3').value
document.getElementById('4').value 
document.getElementById('5').value 
*/

// event listeners

// btn.addEventListener("click", getChoice, true);


// functions

document.addEventListener('DOMContentLoaded', function() {
   let textbox = document.querySelector("#textInput");
   let buttons = document.querySelectorAll(".btn");
   
   buttons.forEach(function(btn) {
     btn.addEventListener("click", function(e) {
       textbox.value += this.value;
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