function Pizza (topping) {
  this.toppings = topping;
}
Pizza.prototype.cost = function () {
  var total = this.toppings;
  return total
};
