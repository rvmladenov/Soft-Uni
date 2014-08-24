<?php
if(isset($_POST['submit'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $age = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_NUMBER_INT);
    $porno = filter_input(INPUT_POST, 'porno', FILTER_SANITIZE_SPECIAL_CHARS);

    $message = "My name is {$name}. I am {$age} years old. I am {$porno}.";
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Form Data</title>
        <style>
            input[type="text"] {
                border: 1px solid lightgray;
            }
            input[type="text"]:first-child {
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body>
        <form action="" method="post">
            <input type="text" name="name" placeholder="Name.." /><br />
            <input type="text" name="age" placeholder="Age.." /><br />
            <input type="radio" name="porno" id="male" checked value="male" /> <label for="male">Male</label><br />
            <input type="radio" name="porno" id="female" value="female" /> <label for="female">Female</label><br />
            <input type="submit" name="submit" value="Изпращане" />
        </form>
        <?= isset($message) ? "<p>$message</p>" : ''; ?>
    </body>
</html>