<?php

class DataBase
{
    private $mysqli;
    public function __construct()
    {

        $this->mysqli = mysqli_connect("localhost", "root", "123ASDZX", "antenna");
        if($this->mysqli)
            echo("connected succesfully");
        else
            echo mysqli_error($this->mysqli);
    }
}