function Pizza (topping, size) {
  this.toppings = topping;
  this.size = size;
}
Pizza.prototype.cost = function () {
  var total = this.toppings + this.size;
  return total
};
