


function f1(){
  var x = document.getElementById("i2").value;
  var z = document.getElementById("i3").value;

  var select = document.getElementById("ss");
  var y = select.options[select.selectedIndex].value;

  var total = (x*y)/100*z;
  total = Math.round(total * 100) / 100;
 total = total.toFixed(2);
   document.getElementById("dem").innerHTML = "TIP AMOUNT";

    document.getElementById("demo").innerHTML = "$" + total;
    document.getElementById("sv").innerHTML = "each";

}
