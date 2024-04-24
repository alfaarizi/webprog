<?php 
    $date = $_POST['date'] ?? '';

    if (count($_POST) > 0){
        $errors = [];

        if(trim($date) === ''){
            $errors['date'] = 'Date must not be empty!';
        } else if (strtotime($date) === false) {
            $errors['date'] = 'Date must be in the correct format!';
        } else if (strtotime("now") < strtotime($date)) {
            $errors["date"] = 'Date must be earlier than the current date!';
        }

        $errors = array_map(fn($err) => "<span style='color: red'>$err</span>", $errors);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Driving Licence Expiration</title>
</head>
<body>
    <?php if(count($_POST) > 0 && count($errors) == 0): ?>
        <?php $expiryDate = strtotime($date . ' +10 years'); ?>
        <?php if ($expiryDate > strtotime("now")): ?>
            <?php $expiryDateSpan = gmdate("y-m-d", $expiryDate); ?>
            <span style='color: green'><?= $expiryDateSpan ?></span><br>
            <?php $date = ''; ?>
        <?php else : ?>
            <span style='color: red'>Expired</span><br>
            <?php $date = ''; ?>
        <?php endif; ?>
    <?php endif; ?>
    <form action="" method="post">
        Date of issue: <input type="date" name="date" value="<?= $date ?>"> <?= $errors['date'] ?? '' ?> <br>
        <button type="submit">Send</button>
    </form>
</body>
</html>
