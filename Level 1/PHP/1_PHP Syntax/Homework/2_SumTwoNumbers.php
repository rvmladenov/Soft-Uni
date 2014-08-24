<?php

/** Za da pusne6 scripta prez conzolota:
 * 1. Otvori papkata, v koqto e faila
 * 2. Napiti  "php 2_SumTwoNumbers.php parvoChilo vtoroChislo", kato predi tova si vkarai patq do PHP v "Path" promenlivata v "Environment Variables"
 */

$firstNumber = isset($argv[1]) ? $argv[1] : 2;
$secondNumber = isset($argv[2]) ? $argv[2] : 5;
echo '$firstNumber + $secondNumber' . " = {$firstNumber} + {$secondNumber} = " . number_format($firstNumber + $secondNumber, 2);