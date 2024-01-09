


//Chiedere all utente i km da percorrere
const kmNeeded = prompt('numero di km che devi percorrere');
console.log(kmNeeded);

//Chiedere all utente la sua età
const age = prompt(' quanti anni hai?');
console.log(age);


//Costo km al cent
const cent = 0.21;
console.log(cent);

//prezzo del biglietto
const ticket = kmNeeded * cent;
console.log(ticket);




if (age < 18) {
    const sconto = parseInt(prompt('ticket' - '20%'));

} else if (age > 65) {
    const sconto = parseInt(prompt('ticket' - '40%');

} else {

}

// alert('il biglietto costa' + ticket);




