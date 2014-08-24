<?php
if(isset($_POST['submit']))
{
    $result = explode(', ', $_POST['input']);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Print Tags</title>
    </head>
    <body>
        <form method="post">
            <p>Enter Tags:</p>
            <input type="text" name="input" />
            <input type="submit" value="Submit" name="submit" />
        </form>
        <?php
        if(isset($result)) {
            for($i = 0; $i < count($result); $i++) {
                echo "{$i} : {$result[$i]}<br />";
            }
        }
        ?>
    </body>
</html>