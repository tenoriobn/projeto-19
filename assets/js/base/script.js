let selectedTipValue = "";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((input) => {
    input.addEventListener("blur", () => checkField(input))
});

const optionElements = document.querySelectorAll('#tip option');

optionElements.forEach(option => {
    option.addEventListener('click', function() {
        selectedTipValue = option.textContent;
    });
});

function checkField(input) {
    const billValue = parseFloat(document.getElementById('bill').value)
    const numberOfPeopleValue = parseInt(document.getElementById('numberOfPeople').value)

    if(billValue !== "" && numberOfPeopleValue !== "") {
        let tipPercentage = 0;

        if (selectedTipValue.endsWith('%')) {
            tipPercentage = parseFloat(selectedTipValue.slice(0, -1));

            const tipAmountPerPerson = (billValue * tipPercentage) / 100 / numberOfPeopleValue;
            const totalPerPerson = (billValue + (billValue * tipPercentage) / 100) / numberOfPeopleValue;

            console.log(tipAmountPerPerson.toFixed(2))
            console.log(totalPerPerson.toFixed(2))
        } else if (selectedTipValue === "Custom") {
            const customTipInput = document.getElementById('customTip');
            tipPercentage = parseFloat(customTipInput.value);
            
            const tipAmountPerPerson = (billValue * tipPercentage) / 100 / numberOfPeopleValue;
            const totalPerPerson = (billValue + (billValue * tipPercentage) / 100) / numberOfPeopleValue;
            console.log(tipAmountPerPerson.toFixed(2))
            console.log(totalPerPerson.toFixed(2))
        }
    }
}