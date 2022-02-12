<?php
require_once "User.php";
$user = new User();
//check comming question

if(!(isset($_POST["question-text"])&& isset($_POST["question-owner"])))
    throw new Exception("not all question attribute are filled");
$user->addQuestion($_POST["question-owner"], $_POST["question-text"]);