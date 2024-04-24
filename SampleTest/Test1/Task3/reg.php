<?php 
    $name = $_POST['name'] ?? '';
    $age = $_POST['age'] ?? '';

    if(count($_POST) > 0){
        $errors = [];

        if(trim($name) === ' '){
            $errors['name'] = 'Name field is mandatory!';
        }else if ( count(explode(' ', trim($name))) < 2 ) {
            $errors['name'] = 'Name should contain at least two words!';
        }

        if(filter_var($age, FILTER_VALIDATE_INT) === false ){
            $errors['age'] = 'Age must be an integer!';
        } else if (intval($age) < 1) {
            $errors['age'] = 'Age must be a positive number!';
        }

        $errors = array_map(fn($err) => "<span style='color: red'>$err</span>", $errors);

        if( count($errors) == 0){
            $reg = json_decode(file_get_contents("data.json"), true);
            $reg[$name] = [
                "name" => $name,
                "age" => $age
            ];
            file_put_contents("data.json", json_encode($reg, JSON_PRETTY_PRINT));
            $name = '';
            $age = '';
        }

    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <?php if(count($_POST) > 0 && count($errors) == 0): ?>
        <span style='color: green'>Succesfully saved!</span><br>
    <?php endif; ?>
    <form action="reg.php" method="post">
        Name: <input type="text" name="name" value="<?= $name ?>" /> <?= $errors['name'] ?? '' ?> <br>
        Age: <input type="text" name="age" value="<?= $age ?>" /> <?= $errors['age'] ?? '' ?> <br>
        <button type="submit">Add student</button>
    </form>
</body>
</html>