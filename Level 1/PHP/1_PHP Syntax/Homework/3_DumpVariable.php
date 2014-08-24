<?php

$input = isset($argv[1]) ? $argv[1] : 1.234;

if(is_numeric($input)) :
    var_dump($input);
else :
    gettype($input);
endif;