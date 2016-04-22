// Use TDD and write functions that:
//
//     find the seller of the cheapest oranges;
//     return the prices and sellers of apples, order ascending by price;
//     return the prices and sellers of apples, order descending by price;
//     return the cheapest fruit;
//     return the seller of the fruit with the lowest price;
//     return all the shops that sell oranges.
//

var cheapestOranges = require('../cheapestOranges');
var appleSellersAsc = require('../appleSellersAsc');
var assert = require('assert');
var shops = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
};
//     find the seller of the cheapest oranges;
describe("Tests for fruition", function() {
  it("should find the seller of the cheapest oranges", function() {
    var result = cheapestOranges(shops);
    assert.equal(result, "chockers");
  });
  //     return the prices and sellers of apples, order ascending by price;
  it("should find the prices and sellers of apples, order ascending by price", function() {
    var result = appleSellersAsc(shops);
    result2 = {
      "chockers": 5,
      "woolingsworth": 4,
      "kwakspar": 4,
      "shopwrong": 2
    };
    assert.deepEqual(result, result2);
  });

});
