<?php
if (isset($_POST["submit"]) && !empty($_POST["string"])) {
    $string = $_POST["string"];
    $result = '';

    switch($_POST["function"]) {
        case 'checkPalindrome':
            $normalizedString = strtolower(preg_replace("/[^A-Za-z0-9]/", "", $string));
            $result = "{$string} is " . ($normalizedString == strrev($normalizedString) ? "" : "not ") . "a palindrome!";
            break;
        case 'reverseString':
            $result = strrev($string);
            break;
        case 'splitString':
            $result = implode(" ", str_split($string));
            break;
        case 'hashString':
            $result = crypt($string);
            break;
        case 'shuffleString':
            $result = str_shuffle($string);
            break;
        default:
            $result = "<div>Invalid function selected.</div>";
            break;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Modify String</title>
</head>
<body>
<form method="post">
    <input type="text" name="string" placeholder="Enter your string" value="<?= isset($_POST['string']) ? $_POST['string'] : ''; ?>"/>
    <input type="radio" name="function" value="checkPalindrome" id="checkPalindrome" <?= (isset($_POST['function']) && $_POST['function'] == 'checkPalindrome') ? 'checked' : '' ?>/>
    <label for="checkPalindrome">Check Palindrome</label>
    <input type="radio" name="function" value="reverseString" id="reverseString" <?= (isset($_POST['function']) && $_POST['function'] == 'reverseString') ? 'checked' : '' ?>/>
    <label for="reverseString">Reverse String</label>
    <input type="radio" name="function" value="splitString" id="splitString"<?= (isset($_POST['function']) && $_POST['function'] == 'splitString') ? 'checked' : '' ?>/>
    <label for="splitString">Split</label>
    <input type="radio" name="function" value="hashString" id="hashString"<?= (isset($_POST['function']) && $_POST['function'] == 'hashString') ? 'checked' : '' ?>/>
    <label for="hashString">Hash String</label>
    <input type="radio" name="function" value="shuffleString" id="shuffleString"<?= (isset($_POST['function']) && $_POST['function'] == 'shuffleString') ? 'checked' : '' ?>/>
    <label for="shuffleString">Shuffle String</label>
    <input type="submit" name="submit"/>
</form>
<?= isset($result) ? $result : ''; ?>
</body>
</html>