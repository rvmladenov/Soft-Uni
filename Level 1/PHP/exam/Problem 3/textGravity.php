<?php
$text = trim($_GET['text']);
$lineHeight = $_GET['lineLength'];
if($lineHeight > 0 && $lineHeight < 31 && strlen($text) > 0 && strlen($text) < 1001) {
    $charsArr = str_split($text);

    $arr = [];
    $charPos = 0;
    $rows = ceil(count($charsArr)/$lineHeight);

    for($row = 0; $row < $rows; $row++) {
        for($cell = 0; $cell < $lineHeight; $cell++) {
            if(!isset($charsArr[$charPos])) {
                $arr[$row][$cell] = ' ';
            } else {
                $arr[$row][$cell] = $charsArr[$charPos];
            }
            $charPos++;
        }
    }
    for($row = $rows-1; $row >= 0; $row--) {
        $tempRow = $row;

        for($cell = 0; $cell < $lineHeight; $cell++) {
            if($arr[$row][$cell] == ' ') {
                $tempRow = $row;
                while($tempRow > -1) {
                    if($arr[$tempRow][$cell] != ' ') {
                        $arr[$row][$cell] = $arr[$tempRow][$cell];
                        $arr[$tempRow][$cell] = ' ';
                        $tempRow = $row;
                        break;
                    }
                    $tempRow--;
                }
            }
        }
    }
    echo '<table>';
    for($row = 0; $row < $rows; $row++) {
        echo '<tr>';
        for($cell = 0; $cell < $lineHeight; $cell++) {
            echo '<td>';
            echo htmlspecialchars($arr[$row][$cell]);
            echo '</td>';
        }
        echo '</tr>';
    }
    echo '<table>';
}