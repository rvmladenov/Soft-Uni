<?php
if(isset($_GET['list']) && isset($_GET['maxSize'])
    && $_GET['maxSize'] <= 1000
    && $_GET['maxSize'] >= 1) {
    $list = trim($_GET['list']);
    $maxSize = $_GET['maxSize'];

    $textAr = explode("\n", $list);
    $listSplitted = array_filter($textAr, 'trim');

    echo '<ul>';
    foreach($listSplitted as $listItem) {
        $result = trim($listItem);

        if(strlen($result) > $maxSize) {
            $result = substr($result, 0, $maxSize) . '...';
        }

        echo '<li>' . htmlspecialchars($result) . '</li>';
    }
    echo '</ul>';
}