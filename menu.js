

menu.addeventListener('hover', () => {
  const lowerText = document.querySelector("#descriptionBox");
  const menu = document.querySelector("#itemContainer");

  
})

function getValue(event) {
  let input = document.getElementsByTagName("input")[0];

  let match = (drinks.find(element => (element.code === input.value)))


  if (input.value === match.code); `${(match.name)}`;

  text.innerHTML = `You have selected: <br/> ${(match.name) + " :"}  <br/>     ${(match.price) + " euro"}`;
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