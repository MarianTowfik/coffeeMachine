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
    this.dispenseGroundCoffee = 0;
    this.dispenseTheWater = 0;
    this.dispenseTheBrewedCoffee = 0;
    this.brewTheCoffee = false;
    this.receivingACupOfCoffee = false;
    this.insertedCMoney = 0;
    this.amountOfCappuccino = 0;
    this.amountOfSteamedWater = 0;
    this.dispenseTheCappuccinoBase = 0;
    this.enoughMilkToSteam = false;
    this.heatTheWater = false;
    this.steamTheMilk = 0;
    this.dispenseTheFoamedMilk = 0;
    
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
    this.dispenseGroundCoffee += amount;

  }

  dispenseWater(amount) {
    this.dispenseTheWater += amount;
  }

  brewCoffee() {
    this.brewTheCoffee = true;
  }
  dispenseBrewedCoffee(amount){
    this.dispenseTheBrewedCoffee += amount; 
  }

  receivingCupOfCoffee() {
    this.receivingACupOfCoffee = true;
  }

  insertCMoney(amount) {
    this.insertedCMoney += amount;
  }

  dispenseCappuccino(amount) {
   this.amountOfCappuccino += amount;
  }
  dispenseSteamedWater(amount) {
    this.amountOfSteamedWater += amount;
  }

  dispenseCappuccinoBase(amount) {
    this.dispenseTheCappuccinoBase += amount
  }
  
  enoughMilk() {
    this.enoughMilkToSteam = true;
  }
  
  
  heatWater() {
    this.heatTheWater = true;
  }

  steamMilk(amount) {
    this.steamTheMilk += amount;
  }
  dispenseFoamedMilk(amount) {
    this.dispenseTheFoamedMilk += amount;
  }


}

//export the coffeemachine class
module.exports = CoffeeMachine;
