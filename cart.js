'use-strict';

var myapp = angular.module('skapp', [])
  .controller('SkbuyCon', BuyCon)
  .controller('SkboughtCon', BoughtCon)
  .service('CartService', CartService)

BuyCon.$inject = ['CartService'];
function BuyCon(CartService){
  var skbuycon = this;
  skbuycon.addToBuy = function(){
    CartService.addToBuy(index);
  };
  skbuycon.tobuy = CartService.getBuy();
}

BoughtCon.$inject = ['CartService'];
function BoughtCon(CartService){
  var skbcon = this;
  skbcon.addToBought = function(){
    CartService.addToBought(index);
  };
  skbcon.bought = CartService.getBought();
}

function CartService(){
  var service = this;
  var tobuy = [{name: "Apple", quant: "10"}, {name: "Cookies", quant: "4"}, {name: "Chips", quant: "6"}, {name: "Mango", quant: "4"}];
  var bought = [];

  service.addToBought(index){
    /*var item = {
      name: iname,
      quant: iquant
    };*/
    bought.push(tobuy[index]);
    tobuy.splice(index, 1);
  };

  service.addToBuy(index){
    /*var item = {
      name: iname,
      quant: iquant
    };*/
    tobuy.push(bought[index]);
    bought.splice(index, 1);
  };

  service.getBuy(){
    return tobuy;
  };

  service getBought(){
    return bought;
  }
}
