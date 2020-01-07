// a class that defines how a coffee machine shall work
class CoffeeMachine {
  constructor() {
    //egenskaper(substantiv)
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.amountOfCoffee = 0;
    this.numberOfCups = 0;
    this.insertedMoney = 0;
    this.pressStart = false;
    this.dispenseACup = false;
    this.dispenseBlackCoffee = 0;
   
    this.brewTheCoffee = false;
    //Thomas extra
    //this.coffeePerCup = 20;
  }
  //metoder(verb)
  plugIn() {
    this.pluggedIn = true;
  }
  connectToWater() {
    this.connectedToWater = true;
  }
  fillWithCoffee(amount) {
    //amount in gram
    this.amountOfCoffee += amount;
  }
  fillWithCups(amount) {
    //amount (number of cups)
    this.numberOfCups += amount;
  }

  //user choice
  insertMoney(inserted) {
    this.insertedMoney += inserted;
  }
  pressStartButton() {
    this.pressStart = true;
  }
  // internals
  dispenseCup(amount) {
    this.dispenseACup += amount ;
  }
  dispenseCoffeeGround(amount) {
    this.dispenseBlackCoffee += amount

  }
  receivingCupOfCoffee() {

  }
}

//export the coffeemachine class
module.exports = CoffeeMachine;
