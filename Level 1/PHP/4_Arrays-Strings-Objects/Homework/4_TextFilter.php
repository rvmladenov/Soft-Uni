<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Text Filter</title>
</head>
<body>
<form method="post">
    <textarea name="text"><?= isset($_POST['text']) ? $_POST['text'] : ''; ?></textarea><br>
    <input type="text" name="bans" value="<?= isset($_POST['bans']) ? $_POST['bans'] : ''; ?>" /><br>
    <input type="submit" name="submit" value="Filter"/>
</form>
<?php
if (isset($_POST['submit'])) {
    $banned = explode(', ', $_POST['bans']);
    $text = $_POST['text'];
    for($i=0; $i<count($banned); $i++) {
        $word = $banned[$i];
        $text = str_replace($word, str_repeat('*', strlen($word)), $text);
    }
    echo "<p>$text</p>";
}
?>
</body>
</html>