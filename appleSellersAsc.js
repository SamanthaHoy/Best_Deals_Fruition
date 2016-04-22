  //     return the prices and sellers of apples, order ascending by price;

  module.exports = function(shopnames) {
    var shopnames = {
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

    var appleMap = {};

    for (i in shopnames){
      if (shopnames[i].apples){
        appleMap[i] = shopnames[i].apples;
      }
    }
    console.log(appleMap)
    var sortedKeys = Object.keys(appleMap).sort(function(a,b){
      return appleMap[a]-appleMap[b]
    })

    console.log(sortedKeys);
    
    // appleMap.sort(function(a,b){
    //   return a.shopnames - b.shopnames;
    // })
    // var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
    // keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
    // alert(keysSorted);     // bar,me,you,foo
  }
