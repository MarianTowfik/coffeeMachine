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
    Then the user receieves a cup of <cupOfCoffee>


    Examples:
      | rightAmount | coffeeType   | cupOfCoffee |
      | 10          | Black coffee | coffee      |
      | 20          | Espresso     | coffee      |
      | 30          | Cappuccino   | coffee      |

  Scenario Outline: failed payment(cash)

    When the user inserts the <wrongAmount> of cash
    And chooses the coffee type <coffeeType>
    And presses start
    Then the user does not receieves a cup of <cupOfCoffee>


    Examples:

      | wrongAmount | coffeeType   | cupOfCoffee | 
      | 9           | Black coffee | coffee      | 
      | 19          | Espresso     | coffee      |  
      | 29          | Cappuccino   | coffee      | 


  Scenario Outline: right amount (SEK card)
    When the user inserts the <cardPayment>
    And chooses the coffee type <coffeeType>
    And presses start
    Then the user receieves a cup of <cupOfCoffee>


    Examples:

      | cardPayment | coffeeType   | cupOfCoffee |
      | 10          | Black coffee | coffee      |
      | 20          | Espresso     | coffee      |
      | 30          | Cappuccino   | coffee      |



  Scenario Outline: failed payment(SEK card)
    When the user inserts the <failedCardPayment> amount
    And chooses the coffee type <coffeeType>
    And presses start
    Then the user does not receieves a cup of <cupOfCoffee>



    Examples:

      | failedCardPayment | coffeeType   | cupOfCoffee | 
      | 9                 | Black coffee | coffee      | 
      | 19                | Espresso     | coffee      | 
      | 29                | Cappuccino   | coffee      | 


  Scenario Outline: The machine is missing something
    Given that the user has selected <coffeeType>
    And there is not enough of <missing>
    When you press the start button
    Then the machine displays <error>

    Examples: coffeeType
      | coffeeType   | missing       | error                                                   |
      | Black Coffee | ground coffee | "not enough ground coffee, please refill ground coffee" |
      | Espresso     | water         | "could not find water, please contact support"          |
      | Cappuccino   | milk          | "not enough milk, please refill milk"                   |
      | Black Coffee | water         | "could not find water, please contact support"          |
      | Espresso     | coffee        | "not enough ground coffee, please refill ground coffee" |
      | Cappuccino   | coffee        | "not enough ground coffee, please refill ground coffee" |
      | Cappuccino   | water         | "could not find water, please contact support"          |
      | Black Coffee | cup           | "not enough cups in the machine, please refill cups "   |
      | Espresso     | cup           | "not enough cups in the machine, please refill cups "   |
      | Cappuccino   | cup           | "not enough cups in the machine, please refill cups "   |