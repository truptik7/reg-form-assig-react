<?php
 
// Importing DBConfig.php file.
include 'dbconfig.php';
 
// Creating connection.
$con = mysqli_connect($servername,$username,$password,$dbname);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$name = $obj['name'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];
 
// Populate FirstName from JSON $obj array and store into $FirstName.
$FirstName = $obj['FirstName'];

// Populate LastName from JSON $obj array and store into $LastName.
$LastName = $obj['LastName'];

// Populate Address from JSON $obj array and store into $Address.
$Address = $obj['Address'];

// Populate Phone_no from JSON $obj array and store into $Phone_no.
$PhoneNo = $obj['PhoneNo'];

// Populate One_word from JSON $obj array and store into $One_word.
$OneWord = $obj['OneWord'];

// Populate Hobbies from JSON $obj array and store into $Hobbies.
$Hobbies = $obj['Hobbies'];

// Populate about from JSON $obj array and store into $about.
$about = $obj['about'];

// Populate programmer from JSON $obj array and store into $programmer.
$programmer = $obj['programmer'];




//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM user_details WHERE email='$email'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into user_details (name,email,password,FirstName,LastName,Address,PhoneNo,OneWord,Hobbies,about,programmer) values ('$name','$email','$password','$FirstName','$LastName','$Address','$PhoneNo','$OneWord','$Hobbies','$about','$programmer')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);
?>