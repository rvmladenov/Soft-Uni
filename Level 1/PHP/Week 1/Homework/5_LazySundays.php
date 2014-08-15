<?php

$currentDate = date('Y-m');

$sunday = strtotime("first sunday of {$currentDate}-01");

do {
    echo date('jS F, Y', $sunday)."<br />";
    $sunday = strtotime("+7 days", $sunday);
}
while($currentDate >= date('Y-m', $sunday));
