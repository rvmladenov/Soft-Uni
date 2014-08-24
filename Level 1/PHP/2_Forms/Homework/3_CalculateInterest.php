<?php


if(isset($_POST['submit'])) {
    if($_POST['amount'] == '' || $_POST['curr'] == ''
        || $_POST['interestAmount'] == '' || $_POST['months']  == '') {
        $errors = 'All fields are mandatory !';
    } else {
        $percentPerMonth = $_POST['interestAmount'] / 12;
        $result = $_POST['amount'];
        for($i = 0; $i < $_POST['months']; $i++) {
            $result += $result*($percentPerMonth/100);
        }

        $result = number_format($result, 2);
        switch($_POST['curr']) {
            case 'usd':
                $result = '$ ' . $result;
            break;
            case 'euro':
                $result = "&euro; " . $result;
            break;
            case 'bgn':
                $result = $result .' лв';
            break;
        }

    }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Calculate Interest</title>
    </head>
    <body>

        <form action="" method="POST">
            <div>
                <label for="amount">Enter amount</label>
                <input type="text" name="amount" id="amount" />
            </div>
            <div>
                <input type="radio" name="curr" checked value="usd" />USD
                <input type="radio" name="curr" value="euro" />EUR
                <input type="radio" name="curr" value="bgn" />BGN
            </div>
            <div>
                <label for="interestAmount">Compound Interest Amount</label>
                <input type="text" name="interestAmount" id="interestAmount" />
            </div>
            <div>
                <select name="months">
                    <option value="6">6 Months</option>
                    <option value="12">1 Year</option>
                    <option value="24">2 Years</option>
                    <option value="60">5 Years</option>
                </select>
                <input type="submit" name="submit" value="Calculate" />
                <?php
                if(isset($errors)) {
                    echo $errors;
                } else if(isset($result)) {
                    echo $result;
                }
                ?>
            </div>
        </form>
    </body>
</html>