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
    this.amountOfCoffeeBeans = 0;
    this.amountOfSteamedMilk = 0;
    this.dispenseTheEspresso = 0;
    this.enoughMilkToSteam = false;
    this.insertedMoneyC = 0;
    this.heatTheWater = false;
    this.steamTheMilk = 0;
    this.dispenseTheSteamedMilk = 0;


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
    this.dispenseACup += amount;
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
  dispenseBrewedCoffee(amount) {
    this.dispenseTheBrewedCoffee += amount;
  }

  receivingCupOfCoffee() {
    this.receivingACupOfCoffee = true;
  }

  insertCMoney(inserted) {
    this.insertedCMoney = inserted;
  }
  enoughMilk() {
    this.enoughMilkToSteam = true;
  }

  dispenseCoffeeBeans(amount) {
    this.amountOfCoffeeBeans += amount;
  }
  dispenseMilksteamed(amount) {
    this.amountOfSteamedMilk += amount;
  }

  dispenseEspresso(amount) {
    this.dispenseTheEspresso += amount
  }

  insertMoneyC(inserted) {
    this.insertedMoneyC += inserted;
  }
  heatWater() {
    this.heatTheWater = true;
  }

  steamMilk(amount) {
    this.steamTheMilk += amount;
  }
  dispenseSteamedMilk(amount) {
    this.dispenseTheSteamedMilk += amount;
  }

  //paymentTenKr(amount)
  //this.paymentTenKrSuccess = amount;


}

//export the coffeemachine class
module.exports = CoffeeMachine;
