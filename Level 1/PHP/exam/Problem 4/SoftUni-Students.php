<?php
$students = $_GET['students'];
$column = $_GET['column'];
$order = $_GET['order'];

$studentsArr = preg_split('/[\r\n]/', $students, -1, PREG_SPLIT_NO_EMPTY);

foreach($studentsArr as $studentKey => $studentVal) {
    $studentsArr[$studentKey] = $studentKey + 1 .', ' . $studentsArr[$studentKey];
}

$whatToSortIndex = 0;
switch($column) {
    case 'username':
        $whatToSortIndex = 1;
        break;
    case 'result':
        $whatToSortIndex = 4;
        break;
}

usort($studentsArr, function($a, $b) {
    global $whatToSortIndex;
    global $order;
    $aArr = explode(', ', $a);
    $aWhat = trim($aArr[$whatToSortIndex]);

    $bArr = explode(', ', $b);
    $bWhat = trim($bArr[$whatToSortIndex]);

    if($order == 'ascending') {
        return $aWhat > $bWhat;
    }
    else {
        return $aWhat <= $bWhat;
    }
});

echo '<table><thead><tr><th>Id</th><th>Username</th><th>Email</th><th>Type</th><th>Result</th></tr></thead>';
for($j = 0; $j < count($studentsArr); $j++) {
    $studentItems = explode(', ', $studentsArr[$j]);
    echo "<tr><td>" . htmlspecialchars(trim($studentItems[0])) . "</td><td>" .
        htmlspecialchars($studentItems[1]) . "</td><td>" .
        htmlspecialchars($studentItems[2]) . "</td><td>" .
        htmlspecialchars($studentItems[3]) . "</td><td>" .
        htmlspecialchars($studentItems[4]) . "</td></tr>";
}
echo '</table>';