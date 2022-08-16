<?php

//var_dump($_FILES);
// Getting uploaded file
$files = $_FILES['files'];
var_dump($_FILES['files']);
//var_dump($files);
// Uploading in "uplaods" folder
foreach ($files as $file ) {
    move_uploaded_file($file["tmp_name"], __DIR__ . '/uploads/' . $file["name"]);
}

// Redirecting back
//header("Location: " . $_SERVER["HTTP_REFERER"]);