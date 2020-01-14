Feature:
 As a coffee buyer
 I want a basic machine that
 I can put a 10kr in
 and get a black cup of coffee back.
 because I crave caffeine.

 Background: coffeeMachine
  Given that the machine is plugged in
  And that the machine has enough ground coffee
  And that water is availble
  And the machine has enough plastic cups
<<<<<<< HEAD
  And the machine dispenses a cup
  

 Scenario: black coffee
  And the machine dispenses the right amount of black coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine brews the coffee

 Scenario: espresso

  And the machine dispenses the right amount of coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine brews the coffee

 Scenario: Cappuccino
  And the machine dispenses the right amount of coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine brews the coffee
  And the machine heats the water to get the steam to the milk
  And the machine has steamed the milk
  And the machine adds the steamed milk on top of the coffee

 Scenario Outline: right amount (cash)
  When the user inserts <rightAmount> kr in cash
  And chooses the coffee type <coffeeType>
  And presses start
  Then the machine should serve a cup of <coffeeType>
  And the user recieves a cup of coffee.

  Examples:
   | rightAmount | cardPayment | coffeeType   | cupOfCoffee |
   | 10          | 0           | Black coffee | 1           |
   | 20          | 0           | Espresso     | 1           |
   | 30          | 0           | Cappuccino   | 1           |

 Scenario Outline: failed payment(cash)

  When the user inserts the<wrongAmount>
  And chooses the beverage <coffeeType>
  And presses start button
  Then the machine should serve the user a cup of <coffeeType>
  And the user recieves the cup of coffee.


  Examples:

   | wrongAmount | cardPayment | coffeeType | cupOfCoffee  | cup |
   | 9           | 0           | 0          | Black coffee | 0   |
   | 19          | 0           | 0          | Espresso     | 0   |
   | 29          | 0           | 0          | Cappuccino   | 0   |


#kort, mjölk och kaffe slut

=======
  And presses a start button
  Then the machine dispenses a cup
  Then the user recieves a cup of coffee.
 Scenario: Black coffee
  When the user inserts a 10kr coin
  And the machine dispenses the right amount of coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine brews the coffee
  And the machine dispenses the brewed coffee in to the dispensed cup

 Scenario: Espresso
  When the user inserts 20kr
  And the machine has enough milk
  And the machine dispenses the right amount of grounded coffee beans into a brewing pot
  And the machine dispenses the right amount of steamed milk into a brewing pot
  And the machine brews the coffee
  And the machine dispenses the brewed espresso in to the dispensed cup

 Scenario: Cappuccino
  When the user inserts 30kr cash
  And the machine heats the water to get the steam to the milk
  And the machine has steamed the milk
  And the machine has dispensed the steamed milk into the cup of coffee
>>>>>>> parent of a9fdb09... något nytt, idek what anymore
