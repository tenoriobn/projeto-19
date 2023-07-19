export default function updateErrorMessage(numberOfPeopleInput, billInput, errorMessagePeople, errorMessageBill) {
    if (!numberOfPeopleInput.value || numberOfPeopleInput.value < 1) {
        numberOfPeopleInput.classList.add("border-red", "border-2");
        errorMessagePeople.classList.remove("hidden");
    } else {
        numberOfPeopleInput.classList.remove("border-red", "border-2");
        errorMessagePeople.classList.add("hidden");
    }

    if (!billInput.value) {
        billInput.classList.add("border-red", "border-2");
        errorMessageBill.classList.remove("hidden");
    } else {
        billInput.classList.remove("border-red", "border-2");
        errorMessageBill.classList.add("hidden");
    }
}