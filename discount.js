function discount(price, quantity)
{ if (price > 500 || quantity > 50) return 25;
  if (price > 300 && quantity > 10) return 20; 
  if (price > 300 && quantity < 10) return 15
  if (price > 50) return 10; else return 0;}
module.exports = discount; 