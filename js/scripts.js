// Business Logic
function Pizza (size) {
  this.toppings = [];
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

// User Interface Logic
$(function() {
  var size = parseInt($("#sizes").val());
  var toppingsTotal = parseFloat($("#toppings").val());
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza(size);
    $("#toppingsSection").show();
    $("#sizeSection").hide();
    $("button#addToppings").click(function() {
      pizza.toppings.push(toppingsTotal);
      console.log(pizza.toppings);
    });
  });
});
