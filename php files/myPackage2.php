<?php
header('Access-Control-Allow-Origin: *');
         $con = new mysqli("localhost","root","","tranquill");
	      $result= $con->query("SELECT * FROM custinfo");    
          while($r= $result->fetch_object())
          {
            $row[]=$r;
          }
           echo json_encode($row);
?>