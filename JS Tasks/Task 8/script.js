/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


/*function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = () => this.a + this.b;
    this.subtraction = () => this.a - this.b;
    this.multiplication = () => this.a * this.b;
    this.division = () => this.a / this.b;
}

const object = new Calculator(5, 6);
const sum = new Calculator(10, 20);
const division = new Calculator(20, 10);
console.log(object);
console.log(object.multiplication());
*/

function Calculator(a, b) {
    this.sum = a + b;
    this.subtraction = a - b;
    this.multiplication = a * b;
    this.division = a / b;
}

const dalyba = new Calculator(50, 5);
console.log(dalyba.division);