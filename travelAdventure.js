/*
Ethan Palmer
CIS-2140-VO01
Due 3/21/22
*/
$(document).ready(function() {
  var price;
  var total;
  var upgrade;
  var fees;
$(".hotel").hide(); //hide buttons on load
$(".select").hide();
//Show price on click
$('.show').on('click', function showPrice() {
price = $(this).val();
upgrade = (75/100) * price;
fees = (7.5/100) * price;
total = parseInt(price) + fees;
$(this).closest('li').append("<div id='display'><div>$" + price + " + $" + fees.toFixed(2) +" fees</div><div>Total: $" + total.toFixed(2) + "</div></div>");
$(this).closest("ul").find(".select").show();
$(this).closest("ul").find(".hotel").show();
$(this).closest(".destinations").append("<div>... Or add 7 more nights for $" + upgrade +" <button class='hotel'>Add on</button></div>");
$(this).hide();
});
//Display updated price after hotel upgrade
$('.destinations').on('click', '.hotel',function showHotel() {
  //find value of nearest hidden button
  price = $(this).closest(".destinations").find(".show").val();
  fees = (7.5/100) * price; //update redundant info
  upgrade = (75/100) * price;
  total = parseInt(price) + fees + upgrade;
  $(this).closest(".destinations").find("#display").html("<div id='display'><div>$" + price + " + $" + fees.toFixed(2) +" fees</div><div>7 Added Nights: $" + upgrade + "</div><div>Total: $" + total.toFixed(2) + "</div></div>");
  $(this).closest("div").remove();
});
//Show thank you on click
$('.select').on('click', function showThanks() {
  window.location.href="thankyou.html";
});
});
