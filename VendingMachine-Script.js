// gets buttons to output their value to text container

document.addEventListener("DOMContentLoaded", function () {
  let textbox = document.querySelector("#textInput");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      textbox.value += this.value;
    });
  });
});

// puts value's into specified strings

function getValue() {
  let input = document.getElementsByTagName("input")[0];
  let textbox = document.getElementById("#makeChoice");
 // let textbox = document.querySelector("#makeChoice");

  switch (true) {
    case input.value === "B1":
      textbox.innerText = "lime soda";
     // textbox.textContent = "lime soda";
     // $("#makeChoice").html("lime soda");
      break;
    case input.value === "B2":
      alert("pineapple soda");
      break;
    case input.value === "B3":
      alert("cola drink");
      break;
    case input.value === "B4":
      alert("energy drink");
      break;
    case input.value === "B5":
      alert("jungle drink");
      break;

    default:
      alert("out of stock");
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

/* function scrollUp()
{
   menuCont.scrollBy(0,20);
}

function scrollDown()
{
   menuCont.scrollBy(0,-20);
}
*/

// reloads screen

$("#delete").click(function () {
  location.reload(true);
});
