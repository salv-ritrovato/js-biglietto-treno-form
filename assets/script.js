const button = document.getElementById('generate');
const userKilometers = document.getElementById('kilometers');
const userAge = document.getElementById('age');

button.addEventListener('click', function () {

    let price = parseFloat(userKilometers.value) * 0.21;
    let offer;

    if (userAge.value === 'minor') {
        price = price - (price * 20) / 100;
        offer = 'Offerta Minorenni';
    } else if (userAge.value === 'old') {
        price = price - (price * 40) / 100;
        offer = 'Offerta Anziani';
    } else {
        offer = 'Standard';
    }

    console.log("Offerta:", offer);
    console.log("Prezzo finale:", price);
});