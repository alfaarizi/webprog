<?php
if (count($_POST) > 0) {
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $taj = $_POST['taj'] ?? '';
    $age = $_POST['age'] ?? '';
    $gender = $_POST['gender'] ?? '';

    $errors = [];

    if (trim($fullname) === '')
        $errors['fullname'] = 'The fullname is required!';
    else if (count(explode(' ', trim($fullname))) < 2)
        $errors['fullname'] = 'The fullname must be at least two words!';

    if ( !filter_var(trim($email), FILTER_VALIDATE_EMAIL)) $errors['email'] = 'The eamil must be in the correct format!';

    if (  !(1 < $age && $age <= 99) ) $errors['age'] = 'The age has to be between 2 to 99';
    // $valid_taj = '^\d{3} \d{3} \d{3}$';
    // if ( !filter_var(trim($taj), FILTER_VALIDATE_REGEXP, $valid_taj)) $errors['taj'] = 'The taj must be in the correct format!';

    // var_dump($_POST); 
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
</head>

<body>
    <?php
    if (count($_POST) > 0 && count($errors) == 0) {
        echo "<span style='color: green'>Registration Completed!</span>";
    
        $errors = [];
        $fullname = "";
        $email = "";
        $taj = "";
        $age = "";
        $gender = "";

        /*
        <?php
$string = "Match this string";
var_dump(filter_var($string, FILTER_VALIDATE_REGEXP,
array("options"=>array("regexp"=>"/^M(.*)/"))))
?>
        */

    }
    ?>
    <form action="" method="post">
        Name: <input type="text" name="fullname" value="<?= $fullname ?? '' ?>"> <?= $errors['fullname'] ?? '' ?><br>
        Email: <input type="email" name="email" value="<?= $email ?? '' ?>">  <?= $errors['email'] ?? '' ?><br>
        Taj: <input type="text" name="taj" value="<?= $taj ?? '' ?>"> <?= $errors['taj'] ?? ''?><br>
        Age: <input type="text" name="age" value="<?= $age ?? '' ?>"> <?= $errors['age'] ?? ''?><br>
        Gender: 
        <select name="gender" value="<?= $gender ?? '' ?>">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select> <?= $errors['gender'] ?? ''?><br><br>
    
        <button type=" submit">Registration</button>
    </form>
</body>

</html>