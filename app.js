const currency = document.getElementById('curency');
const currencyInp = document.getElementById('curency_input');
const worth = document.getElementById('worth');
const worthInp = document.getElementById('worth_input');

// getData();

function getData() {
    // console.log(currency.value);
    // console.log(currencyInp.value);
    // console.log(worth.value);
    // console.log(worthInp.value);

    fetch(`https://v6.exchangerate-api.com/v6/3b52f787ed2e43e1b7c1a101/latest/${currency.value}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data.conversion_rates);
        const rate = data.conversion_rates[worth.value];
        // console.log(rate);
        // console.log(worth.value);
        worthInp.value = (+rate * +currencyInp.value).toFixed(4);

        exchange.innerHTML = `${currencyInp.value} ${currency.value} = ${worthInp.value} ${worth.value}`;
    })
}

