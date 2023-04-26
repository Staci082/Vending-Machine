const payButton = document.querySelector(".payButton");
let coinButtons = document.querySelectorAll(".coinButton");
let payContent = document.querySelector(".payContent");
let coinsTotal = document.querySelector("#total");
let coinsLeft = document.querySelector("#left");
let coinsReturn = document.querySelector("#return");

let currentAmount = 0;

const closeButton = document.querySelector(".close");
const reset = document.querySelector("#reset");


// payment button

payButton.addEventListener("click", () => {
    payContainer.style.display = "block";
});

function addCoinValue(coin) {
    console.log(coin);
    currentAmount += coin;
    coinsTotal.innerHTML = currentAmount;
}

document.querySelector("#coinContainer").addEventListener("click", (e) => {

    addCoinValue(Number(e.target.getAttribute("value")))
});

// closes payment pop up

closeButton.onclick = () => {
    payContainer.style.display = "none";
};

// when user clicks outside of payment pop up it closes as well

window.onclick = (event) => {
    if (event.target == payContainer) {
        payContainer.style.display = "none";
    }
};
