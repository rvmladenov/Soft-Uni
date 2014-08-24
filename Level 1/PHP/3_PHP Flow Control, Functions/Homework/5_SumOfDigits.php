<?php
// Sample: 1111, 2222, 3333, 4444, asdf
if (isset($_POST["submit"]) && !empty($_POST["numbers"])) {
    $numbers = explode(', ', $_POST["numbers"]);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Sum of Digits</title>
</head>
<body>
<form method="post">
    <label for="numbers">Input string:</label>
    <input type="text" name="numbers" id="numbers" />
    <input type="submit" name="submit" />
</form>
<?php
    if(isset($numbers)){
        echo "<table border=\"1\">";
        foreach ($numbers as $number) {
            echo "<tr><td>$number</td><td>";
            if (ctype_digit($number)) {
                echo array_sum(str_split($number));
            } else {
                echo "I cannot sum that";
            }
            echo "</td></tr>";
        }
        echo "</table>";
    }
?>
</body>
</html>