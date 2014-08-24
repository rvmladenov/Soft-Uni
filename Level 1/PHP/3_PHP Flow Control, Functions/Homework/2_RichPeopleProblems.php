<!DOCTYPE html>
<?php
if(isset($_POST['submit']) && $_POST['cars'] != '') {
    $allCars = explode(', ', $_POST['cars']);

    $allColors = array('aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy',
        'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow');
}
?>
<html>
<head>
    <title>Rich People`s Problems</title>
    <style>
        table {
            margin-top:40px;
        }
        td, th {
            padding:5px;
        }
    </style>
</head>
<body>
<form action="" method="post">
    <label for="cars">Enter Cars</label>
    <input type="text" name="cars" id="cars"/>
    <input type="submit" name="submit" value="Show Results"/>
</form>
<?php if(isset($_POST['submit']) && $_POST['cars'] != '') : ?>
<table border="1">
    <thead>
    <tr>
        <th>Car</th>
        <th>Color</th>
        <th>Count</th>
    </tr>
    </thead>
    <tbody>
    <?php
        for($i = 0; $i < count($allCars) ;$i++) {
            $color = $allColors[rand(0, 16)];
            $count = rand(1, 5);
            echo "<tr><td>{$allCars[$i]}</td><td>{$color}</td><td>{$count}</td></tr>";
        }
    endif; ?>
    </tbody>
</table>
</body>
</html>