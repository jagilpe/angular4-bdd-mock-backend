Feature: List the shop's products
  As a user of the shop
  I should get a list of products

  Scenario: An empty products list
    Given the shop has no product
    When I go to the product list page
    Then I should get an empty list message

  @pending
  Scenario: Get a list of products
    Given the shop has three products
    When I go to the product list page
    Then I should not get an empty list message
    And the product list has:
      | name      |
      | Product 1 |
      | Product 2 |
      | Product 3 |
