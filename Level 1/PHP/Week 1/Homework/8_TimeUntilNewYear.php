<?php
$now = time();
$lastDayOfYear = mktime(23, 59, 59, 12, 31, 2014);

$seconds = $lastDayOfYear - $now;
$minutes = intval($seconds/60);
$hours = intval($minutes/60);
$days  = intval($hours/24);
$timeLeft = date('G:i:s', $seconds);

echo "Hours until new year : {$hours}<br />";
echo "Minutes until new year : {$minutes}<br />";
echo "Seconds until new year : {$seconds}<br />";

echo "Days:Hours:Minutes:Seconds {$days}:{$timeLeft}";