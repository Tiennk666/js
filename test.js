var btn_kq = document.getElementById("btn_kq");
btn_kq.addEventListener("click", function () {
  var number_a = document.getElementById("number_a").value;
    var number_b = document.getElementById("number_b").value;
  if (!isNaN(number_a) && !isNaN(number_b)) {
   
    if (number_a == 0) {
      document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
    } else {
     
      document.getElementById("result").innerHTML = "x = " +  -number_b / number_a;
    }
  } else document.getElementById("result").innerHTML = "x =";
});
