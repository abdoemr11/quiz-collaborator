<?php
require_once "Answer.php";
class Question
{
    private $answers;
    public function __construct(
        public $question_id,
        public $question_owner,
        public $question_text
    ){
//        print($this->question_id. " ". $this->question_owner. " " . $this->question_text . "\n");
    }
    public function add_answer( $text, $image)
    {
        $this->answers[] = new Answer( $text, $image);
    }
    public function print_question()
    {
        print $this->question_id . $this->question_owner . $this->question_text;
        if($this->answers)
            foreach($this->answers as $ans)
            print $ans->answer_text . $ans->answer_image;
        print "<br>";
    }
    public function to_arr()
    {
        $quest =  ["id" =>$this->question_id];
        $quest += ["owner" =>$this->question_owner];
        $quest += ["text" =>$this->question_text];
        $answers = [];
        if($this->answers)
            foreach($this->answers as $ans)
            {
                $answers[] = array("text" => $ans->answer_text, "image" =>$ans->answer_image);

            }
        $quest["answers"] = $answers;
        return $quest;

    }

}