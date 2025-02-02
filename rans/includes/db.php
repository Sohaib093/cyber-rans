<?php
// Include the configuration file that contains the database connection parameters
require_once "config.php";

//Try to establish a connection to Mysql database using pdo
try{
    $pdo=new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} CATCH(PDOException $e){
    die("ERROR: COULD NOT CONNECT" . $e->getMessage());
}
?>