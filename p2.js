
//changes the colour of textfield if validation requirements aren't met
function change(name){
return  document.getElementById(name).style.backgroundColor = "red";
}
function changebk(name){
return  document.getElementById(name).style.backgroundColor = "white";
}

//validates the form to see if the requirements are met
function validateForm() {
  var fname = document.forms["mpForm"]["firstName"].value;
  var lname=document.forms["mpForm"]["lastName"].value;
  var constcy=document.forms["mpForm"]["constituency"].value;
  var yearofServ=document.forms["mpForm"]["yearServ"].value;
  var mail=document.forms["mpForm"]["email"].value;
  var pwd=document.forms["mpForm"]["password"].value;
  var pwdCfm = document.forms["mpForm"]["passwordConfirm"].value;
	
	//checks the text field to see if it was left empty
  if (fname == "") {
    alert("Name must be filled out");
    change("fname");
   	setTimeout(function(){changebk("fname");},3000 );
    return false;
  }
  //checks the text field to see if it was left empty
  if (lname==""){
  	alert("Last Name must be filled out");
  	change("lname");
   	setTimeout(function(){changebk("lname");},3000 );
  	return false;
  }
  //checks the text field to see if it was left empty
  if (constcy==""){
	 alert("Please Enter constituency");
	 change("constcy");
   	setTimeout(function(){changebk("constcy");},3000 );
	return false;}
	
	//checks the text field to see if it was left empty
	if (yearofServ== "" || yearofServ<=0 || yearofServ>50){
	alert("Please enter Year of service between 0 and 50");
	change("yearofServ");
   	setTimeout(function(){changebk("yearofServ");},3000 );
	return false;
	}
	 // uses regex to test an email to see if it a valid email
	 if (!(mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
  {
    alert("You have entered an invalid email address!");
    change("mail");
   	setTimeout(function(){changebk("mail");},3000 );
    return false;
}
//checks the text field to see if it was left empty
if (pwd== ""){
	alert("Please enter password!");
	change("pwd");
   	setTimeout(function(){changebk("pwd");},3000 );
	return false;
}
//checks the text field to see if it was left empty
if (pwdCfm==""){
	alert("Please re-enter password!");
	change("pwdCfm");
   	setTimeout(function(){changebk("pwdCfm");},3000 );
	return false;
}
//compares password
if (pwd!= pwdCfm) {
   alert("Passwords do not match.");
    return false;
        }
  else{
  return true;}

}