const payButton = document.querySelector(".payButton");
let coinButton = document.querySelectorAll(".coinButton");
let payContent = document.querySelector(".payContent");
let coinsTotal = document.querySelector("#total");
let coinsLeft = document.querySelector("#left");
let coinsReturn = document.querySelector("#return");



const closeButton = document.querySelector(".close");
const reset = document.querySelector("#reset");

const coins = [
  {
    id: 15,
    name: "2euro",
    value: 2,
    src: "./images/2euro.png",
  },
  {
    id: 16,
    name: "1euro",
    value: 1,
    src: "./images/1euro.png",
  },
  {
    id: 17,
    name: "50cent",
    value: 0.5,
    src: "./images/50cent.png",
  },
  {
    id: 18,
    name: "20cent",
    value: 0.2,
    src: "./images/20cent.png",
  },
  {
    id: 19,
    name: "10cent",
    value: 0.1,
    src: "./images/10cent.png",
  },
  {
    id: 20,
    name: "5cent",
    value: 0.05,
    src: "./images/5cent.png",
  },
];

// payment button

payButton.addEventListener("click", function () {
  payContainer.style.display = "block";

});

 /* coinButton.addEventListener("click", function () {
});  */

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

document.addEventListener("DOMContentLoaded", function () {
  // on load
  let textbox = document.querySelector("#textInput");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      textbox.value += this.value;
    });
  });
});

// STILL HAVE TO TEST

$("#reset").click(function () {
  location.reload(true);
});
