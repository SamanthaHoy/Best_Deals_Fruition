//     find the seller of the cheapest oranges;
//
module.exports = function(shopnames) {
    // var shops = JSON.parse(text);
  // console.log(shops);
  var lowestShopmap = {};
  var lowestShop = "";
  var first = true ;
  for (var i in shopnames) {
    if (shopnames[i].oranges) { // defined , has a value
      if (first) {
        lowestShopmap['oranges'] = shopnames[i].oranges ;
        first = false;
      }
      if (shopnames[i].oranges < lowestShopmap.oranges){
         lowestShopmap['oranges'] = shopnames[i].oranges;
         lowestShop = i;
      }
    }
  }
  console.log("The shop with the cheapest oranges is :" + lowestShop);
  return lowestShop;
}
