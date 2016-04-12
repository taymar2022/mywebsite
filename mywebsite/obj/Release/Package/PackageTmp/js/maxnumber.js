<html>
<head>
  <title>Untitled</title>
</head>

<body>
<h1> Find the greatest number! </h1>

First number:  <input type="number" name="num1"><br>
Second number: <input type="number" name="num2"><br>
Third number:  <input type="number" name="num3"><br>
Fourth number: <input type="number" name="num4"><br>
Fifth number:  <input type="number" name="num5"><br>

<button id="calcBtn" >Calculate</button>
<div id="result1"></div>

<script   src="https://code.jquery.com/jquery-2.2.2.min.js"   integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI="   crossorigin="anonymous"></script>

<script>

$('#calcBtn').click(function(){


var a = $('input[name=num1]').val();
var b = $('input[name=num2]').val();
var c = $('input[name=num3]').val();
var d = $('input[name=num4]').val();
var e = $('input[name=num5]').val();

if (a > b && a > c && a > d && a > e) {
$('#result1').text(a + " is the greatest number"); 
}
else if (b > a & b > c && b > d && b > e) {
$('#result1').text(b + " is the greatest number");
}
else if  (c > a && c > b && c > d && c > e) {
$('#result1').text(c + " is the greatest number");
}
else if (d > a && d > b && d > c && d > e) {
$ ('#result1').text(d + " is the greatest number");
} 
else if (e > a && e > b && e > c && e > d) { 
$('#result').text(e + " is the greatest number");
}
});
</script>
</body>
</html>