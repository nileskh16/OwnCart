'use-strict';

angular.module('skapp', [])
  .controller('SkbuyCon', BuyCon)
  .controller('SkboughtCon', BoughtCon)
  .service('CartService', CartService)

BuyCon.$inject = ['CartService'];
function BuyCon(CartService){
  var skbuycon = this;
  skbuycon.addToBought = function(index){
    CartService.addToBought(index);
  };
  skbuycon.tobuy = CartService.getBuy();
  skbuycon.bstyle = {
    color: 'green',
    align: 'center'
  }

}

BoughtCon.$inject = ['CartService'];
function BoughtCon(CartService){
  var skbcon = this;
  skbcon.addToBuy = function(index){
    CartService.addToBuy(index);
  };
  skbcon.bought = CartService.getBought();
  skbcon.bstyle = {
    color: 'green',
    align: 'center'
  }
}

function CartService(){
  var service = this;
  var tobuy = [{name: "Apple", quant: "10"}, {name: "Cookies", quant: "4"}, {name: "Chips", quant: "6"}, {name: "Spaceman Cad", quant: "4"}, {name: "Walmart Coupons", quant: "4"}, {name: "Mango", quant: "4"}, {name: "Xperia Z5 Premium", quant: 5}];
  var bought = [];

  service.addToBought = function(index){
    /*var item = {
      name: iname,
      quant: iquant
    };*/
    bought.push(tobuy[index]);
    tobuy.splice(index, 1);
  };

  service.addToBuy = function(index){
    /*var item = {
      name: iname,
      quant: iquant
    };*/
    tobuy.push(bought[index]);
    bought.splice(index, 1);
  };

  service.getBuy = function(){
    return tobuy;
  };

  service.getBought = function(){
    return bought;
  }
}
