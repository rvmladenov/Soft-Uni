<?php
$name = isset($argv[1]) ? $argv[1] : 'Gosho';
$phone = isset($argv[2]) ? $argv[2] : '0882-321-423';
$age = isset($argv[3]) ? $argv[3] : '24';
$address = isset($argv[4]) ? $argv[4] : 'Hadji Dimitar';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>HTML Table</title>
        <style>
            table {
                border-collapse: collapse;
                text-align: right;
            }
            table, tr, td {
                padding: 5px;
                border: 1px solid #000;
            }
            td:first-child {
                background-color: orange;
                text-align: left;
            }
        </style>
    </head>
    <body>
        <table>
            <tbody>
                <tr><td>Name</td><td><?= $name; ?></td></tr>
                <tr><td>Phone Number</td><td><?= $phone; ?></td></tr>
                <tr><td>Age</td><td><?= $age; ?></td></tr>
                <tr><td>Address</td><td><?= $address; ?></td></tr>
            </tbody>
        </table>
    </body>
</html>
