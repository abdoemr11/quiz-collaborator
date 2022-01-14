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
        if(!$this->answers)
            return;
        foreach($this->answers as $ans)
            print $ans->answer_text . $ans->answer_image;
    }

}