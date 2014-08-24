<?php
if(isset($_POST['submit']))
{
    $result = explode(', ', $_POST['input']);
    $result = array_count_values($result);
    arsort($result);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>More Frequent Tag</title>
        <style>
            ul {
                list-style: none;
            }
        </style>
    </head>
    <body>
    <form method="post">
        <p>Enter Tags:</p>
        <input type="text" name="input" />
        <input type="submit" value="Submit" name="submit" />
    </form>
    <?php
    if(isset($result)) {
        echo '<ul>';
        foreach($result as $key => $val) {
            echo "<li>$key : $val times</li>";
        }
        echo '</ul>';
    }
    ?>
    </body>
</html>