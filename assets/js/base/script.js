const tipOptions = document.querySelectorAll('#tip');
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
    option.addEventListener('click', () => {
        currentTipValue = parseFloat(option.value);
        calculation();
        updateErrorMessage();
    });
});

const customTip = document.getElementById("customTip");
customTip.addEventListener('change', () => {
    currentTipValue = parseFloat(customTip.value);
    calculation();
    updateErrorMessage();
});

billInput.addEventListener('input', () => {
    calculation();

    if (billInput.value) {
        billInput.classList.remove("border-red", "border-2");
        errorMessageBill.classList.add("hidden");
    }

    updateErrorMessage();
});

numberOfPeopleInput.addEventListener('input', () => {
    calculation();

    if (numberOfPeopleInput.value) {
        numberOfPeopleInput.classList.remove("border-red", "border-2");
        errorMessagePeople.classList.add("hidden");
    }

    updateErrorMessage();
});

function calculation() {
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

function updateErrorMessage() {
    if (!numberOfPeopleInput.value) {
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

window.addEventListener('load', () => {
    calculation();
});

/*
    Refatorar lógica e retruturar (aproveitar pra ir entender o que é o que e ir comentando)***
    Obter valor de acordo com as opções de Selectt Tip %*****
    Obter valor de acordo com o Select Tip `Custom`*****


    Pensar em uma ordem, por exemplo:
        {
            Só vai calcular se o input Bill estiver preenchid, o input tip tiver selecionado 
                e o número de pessoas definido, podendo ser clicado na ordem que for.
        }
        
        Se o `Select Tip` não tiver sido escolhido ou coloca um padrão de 0% ou colcoar um alerta pedindo pra selecioanr

    Por fim, renderizar os resultados no `Tip Amount` e `Total`

    O botão `reset` vai deixar tudo zerado sem reiniciar a página.


*/



/*

//Pegando os inputs `obrigatórios`
const formFields = document.querySelectorAll("[required]");
//Pegando cada `input` obrigatório.
formFields.forEach((input) => {
    //Aplicando evento de blur em cada input que ao ser desfocado 'chama a função `checkField`.
    input.addEventListener("blur", () => checkField())
});

// Aqui estou pegando os filhos de `tip` que são as `option` (como é option talvez n funcione pro input)
const tipOptions = document.querySelectorAll('#tip option');

// Aqui estou pegando o `texto` da `option` dentro de forEach pra usar esse valor na função `checkfield`
let selectedTipValue = "";
let selectedCustomTipValue = "";

// Agora estou pegando a lista de `options` que cada `option` vai executar algo
tipOptions.forEach(option => {
    // quero que cada option tenha um evento de `click`
    option.addEventListener('click', () => {
        // E pegue a variável `selectedTipValue` e deposite nela o texto do botão clicado.
        selectedTipValue = option.textContent;
        console.log(selectedTipValue)
    });
});

const customTip = document.getElementById('customTip');

customTip.addEventListener("blur", () => {
    selectedCustomTipValue = customTip.value;
    console.log(selectedCustomTipValue);
})

// Função checkfield que pega o valor dos inputs e faz o caculo
function checkField() {
    // Aqui estou pegando o valor com decimais do input `bill`
    const billValue = parseFloat(document.getElementById('bill').value)
    // Aqui estou pegando o valor inteira do input `numberOfPeopleValue`
    const numberOfPeopleValue = parseInt(document.getElementById('numberOfPeople').value)

    // Estabeleço aa condição de fazer algo, só se os dois input não estiverem vazio.
    if(billValue !== "" && numberOfPeopleValue !== "") {
        // A porcentagem inicia em zero e armazena os valores dentro da condição trazendo pra fora.
        let tipPercentage = 0;

        // Utilizei `endsWidth(%)` pra conferir se `%` é o último caractere de `selectedTipValue`
        // Se for, retornara true e executara a instrução para os botões diferenciando do Customizado.
        if (selectedTipValue.endsWith('%')) {
            // Aqui estou pegando o valor com decimais e o slice remove o último caractere que é o %.
            tipPercentage = parseFloat(selectedTipValue.slice(0, -1));

            // Nessa variável estou fazendo o cálculo dos `inputs` e da `option` *Valor da gorjeta*
            const tipAmountPerPerson = (billValue * tipPercentage) / 100 / numberOfPeopleValue;
            // Nessa variável estou fazendo o cálculo dos `inputs` e da `option` *Valor da conta*
            const totalPerPerson = (billValue + (billValue * tipPercentage) / 100) / numberOfPeopleValue;

            // Agora faço com que os resultados das variáveis tenham apenas duas casas decimais
            console.log(tipAmountPerPerson.toFixed(2))
            console.log(totalPerPerson.toFixed(2))

        // Se a opção anterior falhar e o selectedTipValue seja igual a `Custom`
        // ela irá fazer o calculo com base no valor do input e não da `option`
        } else if (selectedCustomTipValue !== "") {
            // Aqui estou pegando o valor com decimais e o slice remove o último caractere que é o %.
            tipPercentage = parseFloat(selectedCustomTipValue);

            // Nessa variável estou fazendo o cálculo dos `inputs` e da `option` *Valor da gorjeta*
            const tipAmountPerPerson = (billValue * tipPercentage) / 100 / numberOfPeopleValue;
            // Nessa variável estou fazendo o cálculo dos `inputs` e da `option` *Valor da conta*
            const totalPerPerson = (billValue + (billValue * tipPercentage) / 100) / numberOfPeopleValue;

            // Agora faço com que os resultados das variáveis tenham apenas duas casas decimais
            console.log(tipAmountPerPerson.toFixed(2))
            console.log(totalPerPerson.toFixed(2))
        }
    }
}


*/