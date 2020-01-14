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


  this.Given(/^that the machine has enough ground coffee$/, function () {
    myMachine.fillWithCoffee(1000)
    assert.isAtMost(myMachine.amountOfCoffee, 1000,)
  });



  this.Given(/^the machine has enough plastic cups$/, function () {
    myMachine.fillWithCups(50);
    myMachine.fillWithCups(50);

    assert.isAtLeast(myMachine.numberOfCups, 100,
      "expected the property of numberOfCups to be true after calling the fillWithCups ")
  });

<<<<<<< HEAD
  this.Given(/^the machine dispenses the right amount of black coffee into a brewing pot$/,
    function () {
      myMachine.dispenseBlackCoffee(13)
      assert.isAtMost(myMachine.rightAmountOfBlackCoffee,13)
  });


  this.Given(/^the machine dispenses the right amount of water into a brewing pot$/,
    function () {
      myMachine.dispenseWater(2)
      assert.strictEqual(myMachine.dispenseTheWater, 2);
=======
  this.Given(/^the user inserts a 10kr coin$/, function () {
    myMachine.insertMoney(5);
    myMachine.insertMoney(5);
    assert.strictEqual(myMachine.insertedMoney, 10,
      "expected property insertMoney to be true after calling the method insertedMoney ");
>>>>>>> parent of a9fdb09... något nytt, idek what anymore
  });




  this.When(/^presses a start button$/, function () {
    myMachine.pressStartButton();
    assert.strictEqual(myMachine.pressStart, true, "expected property pressStartButton to be true after calling the method pressStartButton ");
  });

  this.Then(/^the machine dispenses a cup/, function () {
    myMachine.dispenseCup(1);
    assert.isAtLeast(myMachine.dispenseACup, 1);

  });

  
  this.Then(/^the machine brews the coffee$/, function () {
    myMachine.brewCoffee()
    assert.strictEqual(myMachine.brewTheCoffee, true);
  });

  

  this.Then(/^the user recieves a cup of coffee\.$/,
    function () {
      myMachine.receivingCupOfCoffee()
      assert.strictEqual(myMachine.receivingACupOfCoffee, true);
    });

<<<<<<< HEAD
=======

this.When(/^the user inserts (\d+)kr$/,
  function (arg1) {
    myMachine.insertCMoney(20)
    assert.isAtMost(myMachine.insertedCMoney, 20);
  });

  this.When(/^the machine has enough milk$/, function () {
    myMachine.enoughMilk()
    assert.strictEqual(myMachine.enoughMilkToSteam, true);
  });
>>>>>>> parent of a9fdb09... något nytt, idek what anymore
  
  

  
  
<<<<<<< HEAD
=======
  this.When(/^the user inserts (\d+)kr cash$/,
    function (arg1) {
      myMachine.insertMoneyC(30)
      assert.isAtMost(myMachine.insertedMoneyC, 30);
    });
  this.When(/^the machine heats the water to get the steam to the milk$/,
    function () {
      myMachine.heatWater()
      assert.strictEqual(myMachine.heatTheWater, true);
  });
>>>>>>> parent of a9fdb09... något nytt, idek what anymore





}


