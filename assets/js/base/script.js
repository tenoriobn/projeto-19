import updateErrorMessage from "./updateErrorMessage.js";
import calculation from "./calculation.js";

const tipOptions = document.querySelectorAll('#tip-container button');
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("numberOfPeople");
const errorMessagePeople = document.getElementById("error-message-people");
const errorMessageBill = document.getElementById("error-message-bill");

const buttonReset = document.getElementById("button-reset");

let currentTipValue = 15;

buttonReset.addEventListener("click", () => {
    billInput.value = '';
    numberOfPeopleInput.value = '';
    tipAmount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    customTip.value = '';
})

tipOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault();
        currentTipValue = parseFloat(option.value);
        calculation(billInput, numberOfPeopleInput, currentTipValue, tipAmount, total);
        updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill)
    });
});

const customTip = document.getElementById("customTip");
customTip.addEventListener('change', () => {
    currentTipValue = parseFloat(customTip.value);
    calculation(billInput, numberOfPeopleInput, currentTipValue, tipAmount, total);
    updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill)
});

billInput.addEventListener('input', () => {
    calculation(billInput, numberOfPeopleInput, currentTipValue, tipAmount, total);

    if (billInput.value) {
        billInput.classList.remove("border-red", "border-2");
        errorMessageBill.classList.add("hidden");
    }

    updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill)
});

numberOfPeopleInput.addEventListener('input', () => {
    calculation(billInput, numberOfPeopleInput, currentTipValue, tipAmount, total);

    if (numberOfPeopleInput.value) {
        numberOfPeopleInput.classList.remove("border-red", "border-2");
        errorMessagePeople.classList.add("hidden");
    }

    updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill)
});