//import our program in this case an instance of a coffee machine 
//so that we can run unit test methods
//(en punkt = samma map som jag redan är i, två punkter = grund mappen (skrivbordsmappen))
let CoffeeMachine = require('../index.js');
let myMachine = new CoffeeMachine();




// export the step-defintions (tests) 
//so that cucumber can read and use them
module.exports = function () {


 this.Given(/^that the machine is plugged in$/,

  function () {
   //tell the machine that it is plugged in
   myMachine.plugIn();
   //check if the property pluggedIn is true
   //detta funkar också: assert(myMachine.pluggedIn)
   assert.strictEqual(myMachine.pluggedIn, true,
    'expected the property plugIn to be true'


   )
   // test 1(pluggedIn) klart
  });


 this.Given(/^that water is availble$/, function () {
  // tell the machine to connect to water
  myMachine.connectToWater();
  // check if the property connectedToWater is true
  assert.strictEqual(myMachine.connectedToWater, true,
   "expected the property connectedToWater to be true after calling the connectedToWater() method ");
 });

 this.When(/^that the machine has enough ground coffee$/, function () {
  myMachine.fillWithCoffee(10);
  myMachine.fillWithCoffee(20);


  assert.isAtLeast(myMachine.amountOfCoffee, 13,
   "expected the property amountOfCoffee to be true after calling the fillWithCoffee method");

 });

 this.Given(/^the machine has enough plastic cups$/, function () {
  myMachine.fillWithCups(5);
  myMachine.fillWithCups(5);

  assert.isAtLeast(myMachine.numberOfCups,10 ,
   "expected the property of numberOfCups to be true after calling the fillWithCups ")
 });

 this.Given(/^the user inserts a 10kr coin$/, function () {
  myMachine.insertMoney(5);
  myMachine.insertMoney(5);
  assert.strictEqual(myMachine.insertedMoney, 10,
   "expected property insertMoney to be true after calling the method insertedMoney ");
 });

 this.When(/^presses a start button$/, function () {
  myMachine.pressStartButton();
  assert.strictEqual(myMachine.pressStart, true, "expected property pressStartButton to be true after calling the method pressStartButton ");
 });

 this.Then(/^the machine dispenses a cup/, function () {
  myMachine.dispenseCup(1);
  assert.strictEqual(myMachine.dispenseACup, 1);

 });
  
  this.Then(/^the machine dispenses the right amount of coffee into a brewing pot$/,
    function () {
      myMachine.dispenseCoffeeGround(13)
      assert.strictEqual(myMachine.dispenseBlackCoffee,13)
  });

}

