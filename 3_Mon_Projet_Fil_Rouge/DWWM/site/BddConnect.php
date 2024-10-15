<?php
$bdd = new PDO(
    'mysql:host=localhost;dbname=leguman',
    'root',
    '',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);