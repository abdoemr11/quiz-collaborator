<?php

require_once "User.php";

$user = new User();
$questions = $user->retrive_all_questions();
$quest_array = [];
foreach ($questions as $quest)
{
//    $quest->print_question();
//    print_r ($quest->to_arr());
//    print(json_encode($quest->to_arr()));
//    print("<br>");
    $quest_array[]= $quest->to_arr();
}
echo(json_encode(($quest_array)));