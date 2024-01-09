const ticketPrice = document.getElementById('main-title');


//Chiedere all utente i km da percorrere
const kmNeeded = prompt('numero di km che devi percorrere');
console.log(kmNeeded);

//Chiedere all utente la sua età
const age = prompt(' quanti anni hai?');
console.log(age);


// //Costo km al cent
// const cent = 0.21;
// console.log(cent);



//prezzo del biglietto
const parzialTicket = kmNeeded * 0.21;
console.log(parzialTicket);

//sconto rispetto all età

let sconto20 = parzialTicket * 0.2;
let sconto40 = parzialTicket * 0.4;


let ticket = 0;

//calcolo del prezzo del bigliettp
if (age < 18) {
    ticket = parzialTicket - sconto20;



} else if (age > 65) {
    ticket = parzialTicket - sconto40;

} else {
    ticket = parzialTicket;

}


//stampato in html

ticketPrice.innerText = ' Il prezzo del biglietto è' + ticket + '€';

//alert
alert(' Il prezzo del biglietto è' + ticket + '€');







