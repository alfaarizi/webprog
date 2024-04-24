<?php
    function fact_c($n) {
        $r = 1;
        for($i=2; $i <= $n; $i++ ) {
            $r *= $i;
        }
        return $r;
    }

    function fact_rec($n){
        return $n > 1 ? $n * fact_rec($n-1) : 1;
    }

    function fact_tailrec($n, $res = 1){
        return $n == 0 || $n == 1 ? $res : fact_tailrec($n - 1, $n * $res);
    }

    function headings($n){
        return $n == 0 ? "" : "<h$n>Header $n</$n>".headings($n - 1);
    }

    function headings2($n, $res = 1){
        return $n == $res - 1 ? "" : "<h$res>Header $res</$res>".headings2($n, $res + 1);
    }





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 8 - Basics of PHP</title>
</head>
<body>
    <!-- <?php echo "<h1>Hello World!</h1>"?> -->
    <h3>Task 1 - Factorial Function</h3>
    <p>The result is : <?=fact_c(3)?> </p>
    <p>The result is (recursive) : <?=fact_rec(3)?> </p>
    <p>The result is (tail-recursive) : <?=fact_tailrec(3)?> </p>
    
    <h3>Task 2  - Headings</h3>
    <?= headings(4) ?>
    <?php for($i = 1; $i <= 6; $i++) echo "<h$i>Header $i</$i>" ?>
    
    <h3>Task 3 - List generation</h3>
    <ol>
        <?php for($i = 0; $i <= 6; $i++): ?>
            <li> <?=fact_tailrec($i)?> </li>
        <?php endfor; ?>
    </ol>

    <h3>Array to map and filter</h3>
    <?php $array = [1,2,3,4,5,6]?>
    <?php print_r(array_filter($array, fn($x) => $x % 2 == 0)); ?>
    



</body>
</html>