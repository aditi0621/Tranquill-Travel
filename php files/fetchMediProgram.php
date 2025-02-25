<?php
header('Access-Control-Allow-Origin: *');
         $con = new mysqli("localhost","root","","tranquill");
	      $result= $con->query("SELECT * FROM medi WHERE program = 'Beginner'");    
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
?>