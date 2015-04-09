function pythagorean() {
    var a = parseFloat($('#pytha').val());
    var b = parseFloat($('#pythb').val());
    $('#pythoutput').html("C = " + Math.sqrt((a*a)+(b*b)));
}

$('#pythaction').click(pythagorean);


function quadratic() {
    var a = parseFloat($('#quada').val());
    var b = parseFloat($('#quadb').val());
    var c = parseFloat($('#quadc').val());
    var x1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    var x2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    var output1 = "The first x intercept is " + x1;
    var output2 = "The second x intercept is " + x2;
    $('#quadoutput').html([output1, output2].join(', '));
}

$('#quadaction').click(quadratic);


function factorcalc() {
    var a = parseInt($('#factor').val());
    var numarray = [];
        n = 1;
        while (n <= a) {
            if ((a / n) % 1 == 0) {
               numarray.push(n);
             }
            n += 1;
        }
    var numarrayspaced = numarray.join(', ')
    $('#factoroutput').html("The factors are " + numarrayspaced);
}


$('#factoraction').click(factorcalc);




