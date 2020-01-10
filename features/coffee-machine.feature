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
  And presses a start button
  Then the machine dispenses a cup
  Then the user recieves a cup of coffee.
 Scenario: Black coffee
  When the user inserts 10kr cash
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
  When the user inserts 30kr SEK
  And the machine heats the water to get the steam to the milk
  And the machine has steamed the milk
  And the machine has dispensed the steamed milk into the cup of coffee
  

