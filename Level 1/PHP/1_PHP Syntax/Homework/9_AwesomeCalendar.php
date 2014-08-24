<?php
$year = 2014;

if(isset($_GET['year']) && is_numeric($_GET['year'])) {
    $year = $_GET['year'];
}

$monthsNames = [
    'January' => 'Януари',
    'February' => 'Февруари',
    'March'=>'Март',
    'April'=>'Април',
    'May'=>'Май',
    'June'=>'Юни',
    'July'=>'Юли',
    'August'=>'Август',
    'September'=>'Септември',
    'October' => 'Октомври',
    'November' => 'Ноември',
    'December' => 'Декември'
];

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Awesome Calendar</title>
        <style>
            body {
                text-align: center;
                font-size: 14px;
                font-weight: bold;
                font-family: Arial;
            }
            table{
                margin: 15px 10px;
            }
            th:last-child {
                color: red;
            }
            caption, th {
                border-bottom: 1px solid #000;
            }
            #calendar {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            input[type="number"] {
                font-size: 4.2em;
                margin: 0em;
                padding: 0 100px;
                border: 0;
            }
        </style>
    </head>
    <body>
        <form action="" method="get" id="year">
            <input type="number" value="<?= $year; ?>" name="year" onchange="this.form.submit()" />
        </form>
        <hr />
        <section id="calendar">
            <?php for($month = 1; $month <= 12; $month++) : ?>
            <table>
                <caption><?= $monthsNames[date('F', strtotime($year . "-" . $month))]; ?></caption>
                <tr>
                    <th>По</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пе</th>
                    <th>Сб</th>
                    <th>Не</th>
                </tr>
                <?php
                $totalDaysOfMonth = date('t', strtotime($year . "-" . $month));
                $whiteSpacesOfFirstWeek = date('N', strtotime($year . "-" . $month)) - 1;

                echo '<tr>';
                for($day = 1; $day <= $totalDaysOfMonth; $day++) :

                    // Fills the empty fields of the first week of each month
                    if($day == 1) {
                        for($iEmpty = 0; $iEmpty < $whiteSpacesOfFirstWeek; $iEmpty++) {
                            echo "<td>&nbsp;</td>";
                        }
                    }

                    echo "<td>{$day}</td>";

                    // Closes the end of the month
                    if($day == $totalDaysOfMonth) {
                        echo '</tr>';
                        break;
                    }

                    // Closes the end of the week
                    if(($whiteSpacesOfFirstWeek + $day) % 7 == 0) {
                        echo '</tr><tr>';
                    }
                ?>
                <?php endfor; ?>
            </table>
            <?php endfor; ?>
        </section>
    </body>
</html>