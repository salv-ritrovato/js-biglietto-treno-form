const button = document.getElementById('generate');
// Constant variables of the form, input and table ID
const trainForm = document.getElementById('fill');
const userName = document.getElementById('name');
const userKilometers = document.getElementById('kilometers');
const userAge = document.getElementById('age');
const tableBody = document.getElementById('table-body');

// Add an event listener to prevent it from losing user data with automatic page reload and update the table with user data and random generated numbers
// Generating random numbers for "Offerta", "Carrozza" and "Codice CP" with Math.random
// Calculating price based on userAge and userKilometers
// Generating new td inside the tbody with .innerHTML

trainForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(userName.value, userKilometers.value, userAge.value);
    let offer;
    let carriage = Math.floor(Math.random() * 6 + 1);
    let code = Math.floor(Math.random() * 9999 + 1);
    let price = parseFloat(userKilometers.value) * 0.21;
    if (userAge.value === 'minor') {
        price = price - (price * 20) / 100;
        offer = 'Offerta Minorenni';
        console.log("20% di sconto!");
    } else if (userAge.value === 'old') {
        price = price - (price * 40) / 100;
        offer = 'Offerta Anziani';
        console.log("40% di sconto!");
    } else {
        offer = 'Standard';
        console.log("Nessuno sconto applicato");
    }
    console.log(offer, carriage, code, price);
    tableBody.innerHTML += `
                        <tr>
                            <td>${userName.value}</td>
                            <td>${offer}</td>
                            <td>${carriage}</td>
                            <td>${code}</td>
                            <td>${price.toFixed(2)}</td>
                        </tr>
                            `
})
