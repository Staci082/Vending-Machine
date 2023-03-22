const submit = document.getElementById("check");
// const numbers = document.querySelector(".number");
// const letters = document.querySelector(".letter");

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
  const output = document.getElementById("textBox");

  event.preventDefault();
  $("#textInput").hide();
  switch (true) {
    case input.value === "B1":
      output.innerHTML = "You have selected:  " + "<br/>" + "<br/>" + "lime soda &nbsp; $ 1.5";
      break;
    case input.value === "B2":
      output.innerHTML = "You have selected:  " + "<br/>" + "<br/>" + "pineapple soda &nbsp; $ 1.5";
      break;
    case input.value === "B3":
      output.innerHTML = "You have selected:  " + "<br/>" + "<br/>" + "cola drink &nbsp; $ 1.5";
      break;
    case input.value === "B4":
      output.innerHTML = "You have selected:  " + "<br/>" + "<br/>" + "energy drink &nbsp; $ 2";
      break;
    case input.value === "B5":
      output.innerHTML = "You have selected:  " + "<br/>" + "<br/>" + "jungle drink &nbsp; $ 2";
      break;

    default:
      output.innerHTML = "out of stock";
      break;
  }
}

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

// reloads screen

$("#delete").click(function () {
  location.reload(true);
});
