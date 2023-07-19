const payButton = document.querySelector(".payButton");
let coinButtons = document.querySelectorAll(".coinButton");
let payContent = document.querySelector(".payContent");
let coinsLeft = document.querySelector("#left");
let coinsTotal = document.querySelector("#total");
let coinsReturn = document.querySelector("#return");

let startAmount = 0;
let currentAmount = 0;

const closeButton = document.querySelector(".close");
const reset = document.querySelector("#reset");

// payment button
payButton.addEventListener("click", () => {
    payContainer.style.display = "block";
});

// getting value from coins
function addCoinValue(coin) {
    currentAmount += coin;

    let roundedAmount =
        Math.round((currentAmount + Number.EPSILON) * 100) / 100;

    // coinsTotal.concat(roundedAmount);
    coinsTotal.innerText = "total: " + roundedAmount;
}

// make coin buttons do their thang
document.querySelector("#coinContainer").addEventListener("click", (e) => {
    addCoinValue(Number(e.target.getAttribute("value")));
});



/* function coinMath() {

    coinsLeft(match.price) - roundedAmount = (update coinsLeft)

    if (roundedAmount >= coinsLeft(match.price)) {
        add difference to coinsReturn
    }
} */



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
