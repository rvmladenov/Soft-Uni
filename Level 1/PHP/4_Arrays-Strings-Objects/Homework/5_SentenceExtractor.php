<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sentence Extractor</title>
</head>
<body>
<form method="post">
    <textarea name="text"><?= isset($_POST['text']) ? $_POST['text'] : ''; ?></textarea><br>
    <input type="text" name="word" value="<?= isset($_POST['word']) ? $_POST['word'] : ''; ?>" /><br>
    <input type="submit" name="submit" value="Filter"/>
</form>
<?php
if (isset($_POST['submit'])) {
    $word = $_POST['word'];
    $sentences = preg_split('/(?<=[!.?])\s*/', $_POST['text'], -1, PREG_SPLIT_NO_EMPTY);
    for($i=0; $i<count($sentences); $i++) {
        $sentence = $sentences[$i];
        if(preg_match("/ $word .*[.?!]+$/", $sentence)) {
            echo "$sentence<br />";
        }
    }
}
?>
</body>
</html>