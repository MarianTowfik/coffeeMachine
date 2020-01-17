// a class that defines how a coffee machine shall work
class CoffeeMachine {
  constructor() {
    //egenskaper(substantiv)
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.amountOfCoffee = 0;
    this.numberOfCups = 0;
    this.dispenseACup = false;
    this.brewTheCoffee = false;
    this.rightAmountOfBlackCoffee = 0;
    this.dispenseTheWater = 0;
    this.dispensedCoffee = 0;
    this.heatedWater = false;
    this.steamedMilk = false;
    this.addTheSteamedMilk = false;
    this.insertedCash = ('');
    this.chosenBlackCoffee = false;
    this.pressedStart = false;
    this.receivedCoffee = false;
    this.chosenEspresso = false;
    this.chosenCappuccino = false;
    this.payedWithCard = 0;
    this.notEnoughCash = 0;
    this.selectedBlackCoffee = false;
    this.notReceivingAnyCoffee = false;
    this.theErrorMessage = false;


    


  }
  //metoder(verb)
  plugIn() {
    this.pluggedIn = true;
  }
  connectToWater() {
    this.connectedToWater = true;
  }
  fillWithCoffee(amount) {
    // 1000g
    //amount in gram
    this.amountOfCoffee = + amount;
  }
  fillWithCups(amount) {
    //amount (number of cups)
    this.numberOfCups += amount;
  }
  dispenseCup() {
      this.dispenseACup = true;

  }

  brewCoffee() {
    this.brewTheCoffee = true;


  }


  dispenseBlackCoffee(amount) {
    this.rightAmountOfBlackCoffee = amount;
  }

  dispenseWater(amount) {
    this.dispenseTheWater = amount;
  }

  dispenseCoffee(amount) {
    this.dispensedCoffee = amount;
  }
  heatWater() {
    this.heatedWater = true;
  }


  steamMilk() {
    this.steamedMilk = true;
  }

  addSteamedMilk() {
    this.addTheSteamedMilk = true;
  }


  insertCash(amount) {
    this.insertedCash = amount;
  }

  chooseBlackCoffee() {
    this.chosenBlackCoffee = true;
  }

  chooseEspresso() {
    this.chosenEspresso = true;
  }
  chooseCappuccino() {
    this.chosenCappuccino = true;
  }


  pressStart() {
    this.pressedStart = true;
  }

  receiveCoffee() {
    this.receivedCoffee = true;
  }

  notHaveCash(amount) {
    this.notEnoughCash = amount;
  }
  
  selectBlackCoffee() {
      this.selectedBlackCoffee = true;
  }
  
  notReceiveCoffee() {
    this.notReceivingAnyCoffee = true;
  }
  
  errorMessage() {
    let notEnoughCash = this.notEnoughCash;
    let insertedCash = this.insertedCash;
    let theErrorMessage 
    if (insertedCash >= notEnoughCash)
      this.theErrorMessage = true;
    return theErrorMessage;
    
  }
  
  payWithCard(amount) {
    this.payedWithCard = amount;
  }



}

//export the coffeemachine class
module.exports = CoffeeMachine;
