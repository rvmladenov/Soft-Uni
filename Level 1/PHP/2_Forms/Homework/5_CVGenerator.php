<?php
/**
 * This task can be made in a different and a better way, but I don't have time so
 * the code is a little messy :)
 */

function validateOnlyLetters($value) {
    if(preg_match("/^[\w]{2, 20}+$]/", $value)) {
        return true;
    } else {
        return false;
    }
}


if(isset($_POST['submit'])) {
    $errors = [];

    if(!validateOnlyLetters($_POST['firstName'])) {
        array_push($errors, 'First Name must be only letters between 2 and 20 characters');
    }

    if(!validateOnlyLetters($_POST['lastName'])) {
        array_push($errors, 'Last Name must be only letters between 2 and 20 characters');
    }

    // Languages



}


?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title></title>
</head>
    <body>
        <?php if(!isset($errors) || count($errors) > 0) :
            require_once('./cvGenerator/input.html');
        else:
            require_once('./cvGenerator/preview.html');
        endif; ?>
    </body>
</html>