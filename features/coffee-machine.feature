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
    Then the user recieves a cup of <cupOfCoffee>


    Examples:
      | rightAmount | cardPayment | coffeeType   | cupOfCoffee |
      | 10          | 0           | Black coffee | 1           |
      | 20          | 0           | Espresso     | 1           |
      | 30          | 0           | Cappuccino   | 1           |

  Scenario Outline: failed payment(cash)

    When the user inserts the <wrongAmount>
    And chooses the beverage <coffeeType>
    And presses start button
    Then the user recieves a cup of <cupOfCoffee>


    Examples:

      | wrongAmount | cardPayment | coffeeType | cupOfCoffee  | cup |
      | 9           | 0           | 0          | Black coffee | 0   |
      | 19          | 0           | 0          | Espresso     | 0   |
      | 29          | 0           | 0          | Cappuccino   | 0   |


  Scenario Outline: right amount (SEK card)
    When the user inserts the <cardPayment>
    And inserts <cash>
    And chooses the beverage <coffeeType>
    And presses start button
    Then the user recieves a cup of <cupOfCoffee>


    Examples:

      | cash | cardPayment | coffeeType | cupOfCoffee  | cup |
      | 0    | 10          | 0          | Black coffee | 0   |
      | 0    | 20          | 0          | Espresso     | 0   |
      | 0    | 30          | 0          | Cappuccino   | 0   |



  Scenario Outline: failed payment(SEK card)
    When the user inserts the<failedCardPayment>
    And inserts <cash>
    And chooses the beverage <coffeeType>
    And presses start button
    Then the user recieves a cup of <cupOfCoffee>
    And the user recives a <error> message


    Examples:

      | cash | failedCardPayment | coffeeType | cupOfCoffee  | cup | error                             |
      | 0    | 9                 | 0          | Black coffee | 0   | "card declined, not enough money" |
      | 0    | 19                | 0          | Espresso     | 0   | "card declined, not enough money" |
      | 0    | 29                | 0          | Cappuccino   | 0   | "card declined, not enough money" |


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