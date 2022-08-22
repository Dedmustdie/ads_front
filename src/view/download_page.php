<?php

$files = $_FILES['files'];

for ($index = 0; $index < count($files['name']); $index++) {
    move_uploaded_file($files["tmp_name"][$index], 'view/images/' . $files["name"][$index]);
}

header("Location: " . 'http://localhost/1');