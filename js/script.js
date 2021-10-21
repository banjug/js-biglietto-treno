// chiedere il numero di chilometri

let distance = parseInt(prompt("Inserisci il numero di chilometri che devi percorrere"));

// chiedere l'età
let age = parseInt(prompt("Inserisci la tua età"));

// calcolare il prezzo del biglietto (km * 0.21 euro)
let price = distance * .21;
// mostra sempre i primi due decimali
price = (Math.round(price * 100) / 100).toFixed(2);

console.log(distance);
console.log(age);
console.log(price);

// calcolare lo sconto (se < 18 -20%, se >65 -40%)

let finalPrice;

if (age < 18) {
    finalPrice = price - (price * .2);
} else if (age > 65) {
    finalPrice = price - (price * .4);
} else {
    finalPrice = price;
}

// mostra solo i primi due decimali
finalPrice = Math.round(finalPrice * 100) / 100;
console.log(finalPrice);

// mostrare all'utente il prezzo finale del biglietto

if (age < 18) {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto sarebbe stato di ${price} &euro;, ma grazie al tuo sconto studente il prezzo finale &egrave; di ${finalPrice} &euro;`;
} else if (age > 65) {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto sarebbe stato di ${price} &euro;, ma grazie al tuo sconto anziani il prezzo finale &egrave; di ${finalPrice} &euro;`;
} else {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto &egrave; di ${price} &euro;`;
}