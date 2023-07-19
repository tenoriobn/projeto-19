export default function calculation(billInput, numberOfPeopleInput, currentTipValue, tipAmount, total) {
    const bill = parseFloat(billInput.value);
    const numberOfPeople = parseFloat(numberOfPeopleInput.value);

    if (bill > 0 && numberOfPeople > 0) {
        let tipPercentage = currentTipValue;

        if (isNaN(tipPercentage) || tipPercentage < 0) {
            tipPercentage = 0;
        }

        const tipAmountPerPerson = (bill * tipPercentage - 1) / 100 / numberOfPeople;
        const totalPerPerson = (bill + (bill * tipPercentage) / 100) / numberOfPeople;

        tipAmount.innerHTML = '$' + tipAmountPerPerson.toFixed(2);
        total.innerHTML = '$' + totalPerPerson.toFixed(2);
    } else {
        tipAmount.innerHTML = '$0.00';
        total.innerHTML = '$0.00';
    }
}