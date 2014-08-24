<?php
session_start();
/** Valid HTML5 tags, taken from www.w3school.com */
$htmlTagsList = ['!DOCTYPE', 'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo',
'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del',
'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1',
'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label',
'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol',
'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section',
'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot',
'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'];
$score = isset($_SESSION['score']) ? $_SESSION['score'] : 0;

if(isset($_POST['submit'])) {
    if(array_search($_POST['tag'], $htmlTagsList) != false) {
        $score++;
        $_SESSION['score'] = $score;
        $answerMessage = 'Valid HTML tag!';
    } else {
        $answerMessage = 'Invalid HTML tag!';
    }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>HTML Tags Counter</title>
    </head>
    <body>
        <form action="" method="post">
            <div><label for="tag">Enter HTML tags:</label></div>
            <div>
                <input type="text" id="tag" name="tag" />
                <input type="submit" name="submit" value="Submit" />
            </div>
            <?php if(isset($answerMessage)) : ?>
            <div>
                <h1><?= $answerMessage; ?></h1>
                <h1>Score: <?= $score; ?></h1>
            </div>
            <?php endif; ?>
        </form>
    </body>
</html>