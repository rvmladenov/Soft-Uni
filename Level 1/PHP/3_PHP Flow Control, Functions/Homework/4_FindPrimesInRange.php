<!DOCTYPE html>
<?php
if(isset($_POST['submit'])) {

    function isPrime($number)
    {
        if($number == 2) {
            return true;
        } elseif($number <= 1 || $number % 2 == 0) {
            return false;
        } else {
            for ($i = 3; $i <= ceil(sqrt($number)); $i += 2) {
                if ($number % $i == 0) {
                    return false;
                }
            }
            return true;
        }
    }

    $start = $_POST['start'];
    $end = $_POST['end'];
    $numbers = array();

    for($i = $start; $i <= $end ;$i++) {
        if(isPrime($i)) {
            $numbers[] = "<span class='prime'>{$i}</span>";
        }
        else {
            $numbers[] = "<span>{$i}</span>";
        }
    }

    $result = implode(', ', $numbers);
}
?>
<html>
<head>
    <title>Find Primes In Range</title>
    <style>
        span.prime {
            font-weight: bold;
        }
    </style>
</head>
<body>
<form action="" method="post">
    <label for="">Starting Index:</label>
    <input type="text" name="start" id="start" value="<?= isset($_POST['start']) ? $_POST['start'] : '' ?>" />

    <label for="end">End</label>
    <input type="text" name="end" id="end" value="<?= isset($_POST['end']) ? $_POST['end'] : '' ?>" />

    <input type="submit" name="submit" value="Submit"/>
</form>
<div id="result">
    <?php
    if(isset($result)) {
        echo $result;
    }
    ?>
</div>
</body>
</html>