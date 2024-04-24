<?php
$data = [
  [
    "y" => 10,
    "width" => 40,
    "color" => "red"
  ],
  [
    "y" => 30,
    "width" => 50,
    "color" => "lime"
  ],
  [
    "y" => 50,
    "width" => 20,
    "color" => "aqua"
  ],
  [
    "y" => 70,
    "width" => 60,
    "color" => "orange"
  ],
]
?>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="150" >
<?php 
    foreach ($data as $rect) {
        $y = $rect['y'];
        $width = $rect['width'];
        $color = $rect['color'];
        echo "<rect width=\"$width\" height=\"15\" x=\"10\" y=\"$y\" fill=\"$color\" />"; 
    }   
?>
</svg>

<!-- Task 2
Create a PHP program that can display the nth Fibonacci number. The program should recieve the input number via the n GET parameter in the URL.

if the parameter is present display the nth Fibonacci number on the screen.
if no parameter is given display the following brief explanation on the usage of the program:
To calculate the nth Fibonacci number add this to the url (replacing `value` with the your input): `?n=value`
A Fibonacci number is calculated by the following formula:

Fib(1) = 0
Fib(2) = 1
Fib(n) = Fib(n-1) + Fib(n-2) for any `n` > 1 -->

<!-- 0 1 1 2 3 5 8 -->

<?php 
function fib(int $n){
    if ($n <= 0) return 0;
    if ($n == 1) return 0;
    return $n == 2 ? 1 : fib($n - 1) + fib($n - 2);
}

if (isset($_GET['n'])) 
{
    $num = $_GET['n'];
    echo "<p> fib($num) = " . fib($num) . " </p><br>";
} else {
    echo "<p> To calculate the nth Fibonacci number add this to the url (replacing `value` with the your input): `?n=value` </p><br>";
}

?>

