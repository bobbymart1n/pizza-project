function Pizza (size) {
  this.toppings = [0.5, 0.5];
  this.size = size;
}
Pizza.prototype.cost = function () {
  var cost = 0;
  this.toppings.map(function(topping) {
    cost += topping
  });
  var total = cost + this.size;
  return total
};
