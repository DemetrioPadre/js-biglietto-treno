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
const partialTicket = kmNeeded * 0.21;
console.log(parzialTicket);

//sconto rispetto all età

let sconto20 = partialTicket * 0.2;
let sconto40 = partialTicket * 0.4;


let ticket = 0;

//calcolo del prezzo del bigliettp
if (age < 18) {
    ticket = partialTicket - sconto20;
} else if (age > 65) {
    ticket = partialTicket - sconto40;

} else {
    ticket = partialTicket;

}


//stampato in html

ticketPrice.innerText = ' Il prezzo del biglietto è ' + ticket.toFixed(2) + '€';

//alert
alert(' Il prezzo del biglietto è ' + ticket.toFixed(2) + '€');







