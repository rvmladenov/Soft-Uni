<?php
if(isset($_POST['submit']) && !empty($_POST['input']))
{
    $input = strtolower($_POST['input']);
//    preg_split("/[\s,]*\\\"([^\\\"]+)\\\"[\s,]*|" . "[\s,]*'([^']+)'[\s,]*|" . "[\s,]+/", $search_expression, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
    $result = preg_split('/[\W\s]+/', $input, 0, PREG_SPLIT_NO_EMPTY);
    $result = array_count_values($result);
    $result = array_filter($result);

//    arsort($result); // Will sort the Array
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Word Mapping</title>
</head>
<body>
<form method="post">
    <p>Enter Tags:</p>
    <div><textarea name="input"><?= isset($_POST['input']) ? $_POST['input'] : ''; ?></textarea></div>
    <div><input type="submit" value="Count Words" name="submit" /></div>
</form>
<?php
if(isset($result)) {
    echo '<table border="1px"><tbody>';
    foreach($result as $key => $val) {
        echo "<tr><td>$key</td><td>$val</td></tr>";
    }
    echo '</tbody></table>';
}
?>
</body>
</html>