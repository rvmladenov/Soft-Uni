<?php

$input = isset($argv[1]) ? (int)$argv[1] : 1234;
$input = $input > 987 ? 987 : $input;

/**
 * Will return "true" if $val has no repeating digits
 * @param integer
 * @return boolean
 */
function isNonRepeatedNumber($val) {
    $val = (string)$val;
    if(strlen($val) == strlen(count_chars($val, 3))) {
        return true;
    }
    return false;
}

$first3DigitNumber = 102;
$result = [];

for($i = $first3DigitNumber; $i <= $input; $i++) {
    if(isNonRepeatedNumber($i)) {
        $result[] = $i;
    }
}

echo count($result) > 0 ? implode(',', $result) : 'no';