const payButton = document.querySelector(".payButton");
let payContent = document.querySelector(".payContent");
const closeButton = document.querySelector(".close");
const reset = document.querySelector("#resetButton")

// payment button

payButton.addEventListener("click", function () {
  payContainer.style.display = "block";
});

// closes payment pop up

closeButton.onclick = function () {
  payContainer.style.display = "none";
};

// when user clicks outside of payment pop up it closes as well

window.onclick = function (event) {
  if (event.target == payContainer) {
    payContainer.style.display = "none";
  }
};




// STILL HAVE TO TEST

$("#reset").click(function () {
    location.reload(true);
  });