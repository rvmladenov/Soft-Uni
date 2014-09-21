<?php
$html = $_GET['html'];

$pattern = '/(<div)(.*\s*.*\s*(id\s*=\s*"(.+)">)(.*\s*.*\s*))(<\/div>).+(<!\-\-\s*.*\s*-->)/i';

$htmlResult = preg_replace($pattern, '<${4}>${5}</${4}>',$html);
echo $htmlResult;