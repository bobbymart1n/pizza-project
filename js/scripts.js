// Business Logic
function Pizza () {
  this.toppings = [];
  this.size;
  this.total;
}
Pizza.prototype.cost = function () {
  var cost = 0;
  this.toppings.map(function(topping) {
    cost += topping
  });
  var total = cost + this.size;
  this.total = total;
};

// User Interface Logic
$(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    $("#pizzaForm").show();
    $("#orderStarter button").hide();
    $("button#addToppings").click(function() {
      var toppingsPrice = parseFloat($("#toppings").val());
      if (toppingsPrice === 0) {
        $(".error").show();
        $("#toppings").addClass('error-border');
      } else if(toppingsPrice === 0.5) {
        $(".error").hide();
        $("#toppings").removeClass('error-border');
        pizza.toppings.push(toppingsPrice);
        $("#orderConfirmation ul").append('<li>' + $("#toppings option:selected").text() + '</li>');
        $("#toppings").val(0);
      }
    });
    $("#order").click(function() {
      var size = parseInt($("#sizes").val());
      if(size === 0) {
        $(".error").show();
      } else {
        $(".error").hide();
        pizza.size = size;
        pizza.cost();
        $("#totalCost").text(pizza.total);
      }
    });
  });
});
