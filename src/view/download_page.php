<?php

$files = $_FILES['images'];
if (!is_dir(__DIR__ . '/images')) {
    mkdir(__DIR__ . '/images', 0777, true);
}

for ($index = 0; $index < count($files['name']); $index++) {
    move_uploaded_file($files["tmp_name"][$index], 'view/images/' . $files["name"][$index]);
}

header("Location: " . 'http://localhost/1');