<!-- Task 1 -->
<?php
$shapes = [
  [
    'type'    => 'rect',
    'params'  => [
      'x' => 0,
      'y' => 0,
      'width' => 50,
      'height' => 50,
      'rx' => 10,
    ]
  ],
  [
    'type'    => 'line',
    'params'  => [
      'x1' => 60,
      'y1' => 100,
      'x2' => 80,
      'y2' => 120,
      'stroke' => 'red',
    ]
  ],
  [
    'type'    => 'line',
    'params'  => [
      'x1' => 80,
      'y1' => 120,
      'x2' => 150,
      'y2' => 50,
      'stroke' => 'red',
    ]
  ],
  [
    'type'    => 'circle',
    'params'  => [
      'cx' => 150,
      'cy' => 100,
      'r' => 20,
    ]
  ],
];
?>

<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
<?php 
    foreach ($shapes as $id => $ls) {
        $type = $ls['type'];
        echo "<$type ";
        foreach($ls['params'] as $att => $val){
            echo "$att=\"$val\" ";
        }
        echo "/>";
    }
?>
</svg>

<!-- Task 2 -->
<?php 
$students = [
    ['name' => 'Student1', 'age' => 20],
    ['name' => 'Student2', 'age' => 10],
    ['name' => 'Student3', 'age' => 30],
    ['name' => 'Student4', 'age' => 20],
    ['name' => 'Student5', 'age' => 10],
];
?>

<ul>
<?php
foreach ($students as $id => $ls){
    $name = $ls['name'];
    $age = $ls['age'];
    echo "<li>$name ($age)</li>";
}
?>
</ul>

<?php 
function generateStudent($arr){
    $ls = [];
    foreach ($arr as $student) $ls[] = "<li>" . $student['name']. ' (' . $student['age'] . ')' . "</li>";
    return $ls;
}

echo "<ul>";
if ( isset($_GET['age']) ) 
{
    $targetAge = $_GET['age'];
    foreach ($students as $id => $ls){
        $name = $ls['name'];
        $age = $ls['age'];
        if ($targetAge == $age) echo "<li>$name ($age)</li>";
    }
}
else {
    foreach ( generateStudent($students) as $student ) echo $student;
}
echo "</ul>";
?>




