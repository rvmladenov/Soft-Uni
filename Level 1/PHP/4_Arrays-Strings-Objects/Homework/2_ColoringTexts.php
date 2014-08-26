<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Coloring Texts</title>
    <style>
        .even {
            color: red;
        }
        .odd {
            color: blue;
        }
    </style>
</head>
<body>
<form method="post">
    <textarea name="text"><?= isset($_POST['text']) ? $_POST['text'] : ''; ?></textarea><br>
    <input type="submit" name="submit" value="Color text"/>
</form>
<?php
if (isset($_POST['submit'])) {
    $text = $_POST['text'];
    for ($i = 0; $i < strlen($text); $i++) {
        if (ord($text[$i]) % 2 == 0) {
            echo "<span class='even'>$text[$i]</span> ";
        } else {
            echo "<span class='odd'>$text[$i]</span> ";
        }
    }
}
?>
</body>
</html>