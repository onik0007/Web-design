function validation(){

var fname=document.forms["MPForm"]["firstName"].value;

var lname=document.forms["MPForm"]["lastName"].value;

var constcy=document.forms["MPForm"]["constituency"].value;

var mail=document.forms["MPForm"]["email"].value;

var pwd=document.forms["MPForm"]["password"].value;

var pwdCfm=document.forms["MPForm"]["passwordConfirm"].value;

if (fname==""){
	window.alert("Please enter first name");
	fname.focus();
	return false;
}

if (lname==""){
	window.alert("Please enter last name");
	lname.focus();
	return false;
}

if (constcy==""){
	window.alert("Please Enter constituency");
	constcy.focus();
	return false;
}

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(MPForm.mail.value))
  {
    return (true);
  }
  else{
    window.alert("You have entered an invalid email address!");
    mail.focus();
    return (false);}

if (yearofServ== null){
	window.alert("Please enter Year of service!");
	yearofServ.focus();

if (pwd== ""){
	window.alert("Please enter password!");
	pwd.focus();
	return(false);
}
if (pwdCfm==""){
	window.alert("Please re-enter password!");
	pwdcfm.focus();
	return(false);

}

if (pwd.value != pwdCfm.value) {
     window.alert("Passwords do not match.");
     pwd.focus();
    return false;
        }

	return true;

}