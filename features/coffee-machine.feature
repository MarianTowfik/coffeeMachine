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
  And the machine dispenses the right amount of coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine dispenses a cup


 Scenario: Cappuccino
  And the machine heats the water to get the steam to the milk
  And the machine has steamed the milk

 Scenario Outline:
  When the user inserts <rightAmount> kr in cash
  When the user inserts the
  And chooses the coffee type <coffeeType>
  And presses start
  Then the machine should serve a cup of <coffeeType>
  And the user recieves a cup of coffee.

  Examples:
   | rightAmount | cardPayment | coffeeType   |cupOfCoffee
   | 1           | 0           | Black coffee | 1 |
   | 20          | 0           | Espresso     | 1 |
   | 30          | 0           | Cappuccino   | 1 |



