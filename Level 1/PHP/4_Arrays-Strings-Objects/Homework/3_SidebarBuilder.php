<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sidebar Builder</title>
    <style>
        aside {
            background: linear-gradient(#cedcec 50%, #a5bfe2 0%,  #a5bfe2 100%); /* Standard syntax */
            border: 2px solid #6c6b6a;
            border-radius: 15px;
            margin: 5px 0;
            padding: 0 10px;
            width: 200px;
        }
        h2 {
            border-bottom: 1px solid #000;
        }
        aside a {
            color: inherit;
        }
    </style>
</head>
<body>
<form method="post">
    Categories:
    <input type="text" name="categories" value="<?= isset($_POST['categories']) ? $_POST['categories'] : ''; ?>" /><br>
    Tags:
    <input type="text" name="tags" value="<?= isset($_POST['tags']) ? $_POST['tags'] : ''; ?>" /><br>
    Months:
    <input type="text" name="months" value="<?= isset($_POST['months']) ? $_POST['months'] : ''; ?>" /><br>
    <input type="submit" value="Generate"/>
</form>
<?php if (isset($_POST['categories'])) : ?>
    <aside>
        <h2>Categories</h2>
        <ul>
            <?php foreach (explode(', ', $_POST['categories']) as $category) : ?>
                <li><a href="#"><?= $category; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </aside>
<?php endif; ?>
<?php if (isset($_POST['tags'])) : ?>
    <aside>
        <h2>Tags</h2>
        <ul>
            <?php foreach (explode(', ', $_POST['tags']) as $tag) : ?>
                <li><a href="#"><?=$tag?></a></li>
            <?php endforeach; ?>
        </ul>
    </aside>
<?php endif; ?>
<?php if (isset($_POST['months'])) : ?>
    <aside>
        <h2>Months</h2>
        <ul>
            <?php foreach (explode(', ', $_POST['months']) as $month) : ?>
                <li><a href="#"><?=$month?></a></li>
            <?php endforeach; ?>
        </ul>
    </aside>
<?php endif; ?>
</body>
</html>