// gets buttons to output their value to text container

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
  const text = document.querySelector("#textBox");
  const orderImg = document.getElementById("orderImg");
  const payButton = document.querySelector(".payButton");
  const payItem = document.querySelector(".payItem");

  orderImg.style.height = "40%";
  text.style.margin = "70px 0 20px 0";

  event.preventDefault();
  $("#textInput").hide();
  $("#descriptionBox").hide();

  let match =
    options.drinks.find((element) => element.code === input.value) ||
    options.chocolates.find((element) => element.code === input.value) ||
    options.chips.find((element) => element.code === input.value);

  if (input.value === match.code) {
    text.innerHTML = `You have selected: <br/> <br/> ${
      match.name + ":"
    }  <br/>     ${match.price + " euro"}`;
    orderImg.src = `${match.src}`;

    payButton.style.display = "block";
    payItem.innerHTML = `${match.name + ":"} &nbsp;&nbsp;  ${match.price + " euro"} `;
  }
}

// reloads text

$("#delete").click(function () {
  location.reload(true);
});
