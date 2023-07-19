export default function updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill) {
    const errorClassList = ["border-red", "focus:border-red", "border-2"];
    const removeBorderErro = "focus:border-strongCyan";
    const addDisplayHidden = "hidden";
    const lowValueError = "Can't be zero";
    const NotANumberError = "Invalid value";

    // Reset all error styles and hide error messages
    numberOfPeopleInput.classList.remove(...errorClassList);
    numberOfPeopleInput.classList.add(removeBorderErro);
    errorMessagePeople.classList.add(addDisplayHidden);
    billInput.classList.remove(...errorClassList);
    billInput.classList.add(removeBorderErro);
    errorMessageBill.classList.add(addDisplayHidden);

    if (!numberOfPeopleInput.value || numberOfPeopleInput.value < 1) {
        numberOfPeopleInput.classList.add(...errorClassList);
        errorMessagePeople.textContent = lowValueError;
        errorMessagePeople.classList.remove(addDisplayHidden);
    } else if (isNaN(numberOfPeopleInput.value)) {
        numberOfPeopleInput.classList.add(...errorClassList);
        errorMessagePeople.textContent = NotANumberError;
        errorMessagePeople.classList.remove(addDisplayHidden);
    }

    if (!billInput.value || billInput.value < 1) {
        billInput.classList.add(...errorClassList);
        errorMessageBill.textContent = lowValueError;
        errorMessageBill.classList.remove(addDisplayHidden);
    } else if (isNaN(billInput.value)) {
        billInput.classList.add(...errorClassList);
        errorMessageBill.textContent = NotANumberError;
        errorMessageBill.classList.remove(addDisplayHidden);
    }
}