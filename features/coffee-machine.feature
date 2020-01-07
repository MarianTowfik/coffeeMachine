Feature: 
 As a coffee buyer 
 I want a basic machine that 
 I can put a 10kr in 
 and get a black cup of coffee back. 
 because I crave caffeine.


 Scenario:
  Given that the machine is plugged in
  And that water is availble 
  And that the machine has enough ground coffee 
  And the machine has enough plastic cups
  When the user inserts a 10kr coin 
  And presses a start button
  Then the machine dispenses a cup
  And the machine dispenses the right amount of coffee into a brewing pot
  And the machine dispenses the right amount of water into a brewing pot
  And the machine brews the coffee
  And the machine dispenses the brewed coffee in to the dispensed cup
  Then the user recieves a cup of coffee.


