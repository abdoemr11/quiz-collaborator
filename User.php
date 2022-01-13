<?php
require_once "DataBase.php";
class User
{
    private $data_base;

    function __construct()
    {

        $this->data_base = new DataBase();
    }
    public function addQuestion($question_owner, $question_text)
    {
        $this->data_base.insert_question($question_owner, $question_text);
    }
    public function addAnswer($question_id, $answer_text, $answer_image)
    {
        $this->data_base.insert_answer($question_id, $answer_text, $answer_image);
    }
    public function retrive_all_questions()
    {
        $this->data_base.query_all_questions();
    }
}
