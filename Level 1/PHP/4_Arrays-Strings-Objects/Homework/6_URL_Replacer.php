<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>URL Replacer</title>
</head>
<body>
<form method="post">
    <textarea name="text"><?= isset($_POST['text']) ? $_POST['text'] : ''; ?></textarea><br>
    <input type="submit" value="Replace"/>
</form>
<?php
if (isset($_POST['text'])) {
    $text = ($_POST['text']);
    $text = str_replace('</a>', '<b>[/URL]</b>', $text);
    $text = preg_replace('/<a href=(\'|")(.*?)(\'|")>/', '<b>[URL=\2]</b>', $text);
    echo $text;
}
?>
</body>
</html>