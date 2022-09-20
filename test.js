  var number_a = document.getElementById('number_a');
        var number_b = document.getElementById('number_b');
        number_a.addEventListener('change', function () {
            number_a = number_a.value;

        })
        number_b.addEventListener('change', function () {
            number_b = number_b.value;

        })


        var btn_kq = document.getElementById('btn_kq');
btn_kq.addEventListener('click', function () {
    if (!isNaN(number_a) && !isNaN(number_b)) {

        var c = 0;
        if (number_a == 0) {
            document.getElementById('result').innerHTML = 'Phương trình vô nghiệm';
        }
        else {
            c += -number_b / number_a;
            document.getElementById('result').innerHTML = 'x = ' + c;
        }
    }
    else
        document.getElementById('result').innerHTML = 'x =';
});