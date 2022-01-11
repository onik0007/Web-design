<?php
$firstname= $_POST['firstName'];
$lastname= $_POST['lastName'];
$constcy= $_POST['constituency'];
$email= $_POST['email'];
$yrs_service= $_POST['yearServ'];
$password= $_POST['password'];
$salt= mt_rand();
$password_digest=md5($salt.$password);

//connects to the database server using the items in the parameters
$conn= new mysqli('localhost', 'comp2190SA','2190Sem1','MPMgmtDB');
//selects data from the database for displaying
$sql ='SELECT * FROM Representatives';
$result= mysqli_query($conn,$sql);
$rep= mysqli_fetch_all($result, MYSQLI_ASSOC);

//inserts data into the database
$sql= "INSERT INTO Representatives ( first_name, last_name, constituency, email, yrs_service, password_digest, salt)
VALUES ('$firstname', '$lastname', '$constcy','$email', '$yrs_service', '$password_digest', '$salt')";

//test if the data is added to the database or not
if ($conn-> query($sql) === TRUE){
	echo "record successfully created";

}
else{
	echo "an Error has occured: ".$sql."<br>".$conn->error;
}

// display all the data in a table format
$display ='<link rel="stylesheet" type="text/css" href="styles/p3.css">
<div>
	<table>
	<tr>
	<th>First Name</th>
	<th>Last Name</th>
	<th>Constituency</th>
	<th>Email</th>
	<th>Years of Service</th>
	<th>Password Digest</th>
	<th> Salt</th>
	</tr>';
// collect all the previously added data from the database
foreach ($result as $row) {
	$display .='<tr>
	<td>' .$row['first_name'].'</td>
	<td>' .$row['last_name'].'</td>
	<td>' .$row['constituency'].'</td>
	<td>' .$row['email'].'</td>
	<td>' .$row['yrs_service'].'</td>
	<td>' .$row['password_digest'].'</td>
	<td>' .$row['salt'].'</td>';
}
//displays a table of the items in the database
print($display);
//closes server connection 
mysqli_close($conn);

?>