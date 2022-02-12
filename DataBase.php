<?php
require_once "Question.php";
class DataBase
{
    private mysqli $conn;

    public function __construct()
    {

        $this->conn= new mysqli("quizcollaborator.mysql.database.azure.com", "abdo", "123ASDzx", "antenna");
        if($this->conn->connect_error) die("Fatal error");

    }
    public function insert_question($question_owner, $question_text)
    {
        $stmt = $this->conn->prepare("INSERT INTO `antenna`.`questions` (`question_owner`, `question_text`) VALUES (?,?);");
        $stmt->bind_param('ss',$question_owner, $question_text);
        $stmt->execute();
        $stmt->close();


    }

    public function insert_answer($question_id, $answer_text, $answer_image)
    {
        $stmt = $this->conn->prepare("INSERT INTO `antenna`.`answers` (`answer_text`, `answer_image`, `question_id`) VALUES (?, ?, ?);");
        $stmt->bind_param('sss',$answer_text,$answer_image,$question_id);
        $stmt->execute();
        $stmt->close();
    }

    public function query_all_questions()
    {
        $query = "select * from questions;";
        $result = $this->conn->query($query);
        $questions =[];
        while($row = $result->fetch_assoc())
        {
            $questions[] = new Question($row["question_id"], $row["question_owner"], $row["question_text"]);
        }
        $query = "select answer_text, answer_image from answers where question_id = ?;";
        $stmt = $this->conn->prepare($query);

        $stmt->bind_param('s',$binded_question_id);
        foreach($questions as $quest) {
            $binded_question_id = $quest->question_id;
            $stmt->execute();
            $result = $stmt->get_result();
            while ($row = $result->fetch_row())
            {
                $quest->add_answer($row[0], $row[1]);
            }
           // $quest->print_question();
        }
        return $questions;

    }

}