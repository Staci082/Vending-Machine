
const itemContainer = document.querySelector(".itemContainer");
const desContainer = document.querySelector("#descriptonContainer");
const itemCount = 14;


// buttons 

let upButton = document.querySelector("#up");
let downButton = document.querySelector("#down");


// products

const options = {
  drinks: [
    {
      id: 1,
      name: "lime soda",
      price: 1.5,
      code: "B1",
      src: "./images/lime.png",
      description: "lime soda &nbsp; € 1.5 &nbsp; B 1",
    },
    {
      id: 2,
      name: "pineapple soda",
      price: 1.5,
      code: "B2",
      src: "./images/pineapple.png",
      description: "pineapple soda &nbsp; € 1.5 &nbsp; B 2",
    },
    {
      id: 3,
      name: "cola drink",
      price: 1.5,
      code: "B3",
      src: "./images/cola.png",
      description: "cola drink &nbsp; € 1.5 &nbsp; B 3",
    },
    {
      id: 4,
      name: "energy drink",
      price: 2.0,
      code: "B4",
      src: "./images/energy.png",
      description: "energy drink &nbsp; € 2.0 &nbsp; B 4",
    },
    {
      id: 5,
      name: "jungle drink",
      price: 2.0,
      code: "B5",
      src: "./images/jungle.png",
      description: "jungle drink &nbsp; € 2.0 &nbsp; B 5",
    },
    {
      id: 6,
      name: "mystery drink",
      price: 2.0,
      code: "E2",
      src: "./images/mystery.png",
      description: "mystery drink &nbsp; € 2.0 &nbsp; E 2",
    },
  ],
  chocolates: [
    {
      id: 7,
      name: "candy bar",
      price: 1.5,
      code: "C1",
      src: "./images/redbar2.png",
      description: "candy bar &nbsp; € 1.5 &nbsp; C 1",
    },
    {
      id: 8,
      name: "nutty bar",
      price: 1.5,
      code: "C2",
      src: "./images/yellowbar2.png",
      description: "nutty bar &nbsp; € 1.5 &nbsp; C 2",
    },
    {
      id: 9,
      name: "fruity bar",
      price: 1.5,
      code: "C3",
      src: "./images/pinkbar2.png",
      description: "fruity bar &nbsp; € 1.5 &nbsp; C 3",
    },
    {
      id: 10,
      name: "chocolate bar",
      price: 1.5,
      code: "C4",
      src: "./images/brownbar2.png",
      description: "chocolate bar &nbsp; € 1.5 &nbsp; C 4",
    },
  ],
  chips: [
    {
      id: 11,
      name: "salt chips",
      price: 2.0,
      code: "A1",
      src: "./images/redchips.png",
      description: "salt chips &nbsp; € 2.0 &nbsp; A 1",
    },
    {
      id: 12,
      name: "tortilla chips",
      price: 2.0,
      code: "A2",
      src: "./images/yellowchips.png",
      description: "tortilla chips &nbsp; € 2.0 &nbsp; A 2",
    },
    {
      id: 13,
      name: "paprika chips",
      price: 2.0,
      code: "A3",
      src: "./images/greenchips.png",
      description: "paprika chips &nbsp; € 2.0 &nbsp; A 3",
    },
    {
      id: 14,
      name: "cheesy chips",
      price: 2.0,
      code: "A4",
      src: "./images/pinkchips.png",
      description: "cheesy chips &nbsp; € 2.0 &nbsp; A 4",
    },
  ],
};




// creating the img's

function createMenuImage(item) {
  let div = document.createElement("div");
  div.className = "item";

  let img = document.createElement("img");
  img.src = item.src;
  img.style.height = "14vh";

  div.appendChild(img);

  itemContainer.appendChild(div);
};


// retrieving img's

options.drinks.forEach(item => createMenuImage(item))
options.chocolates.forEach(item => createMenuImage(item))
options.chips.forEach(item => createMenuImage(item))


// scrolling menu

itemContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  itemContainer.scrollTop = evt.deltaY;
});

upButton.addEventListener("click", () => itemContainer.scrollTop -= 900)


downButton.addEventListener("click", () => itemContainer.scrollTop += 900)


// getting the js variable for the buttons AFTER creating it above
// const orderImg = document.querySelectorAll("#orderImg");
// const textBox = document.querySelectorAll("#textBox");
// 
// // function for getting sprite related texts to appear
// function addMenuItemText(items) {
//     textBox.innerHTML = `Name: ${items.name} </br></br></br></br></br> Class: ${items.role} </br></br></br></br></br> ${items.description}`;
// }
// 
// // getting buttons to show sprites + text on click
// item.forEach(() => {
//     document.addEventListener("hover", (e) => {
//         e.preventDefault();
//         if (e.target.className === "item") {
//             let sprite = options.find((items) => items.id === e.target.id);
//             orderImg.src = items.src;
//             addSpriteText(sprite);
//         }
//     });
// });




/* const descriptionBox = querySelector("#descriptionBox");
  const description = document.createElement("div");
  
  descriptionBox.appendChild(description);
  descriptionBox.innerHTML = item.description; */


