var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
	var database = [{username : "a", firstname : "a", lastname : "a", email : "A", country : "r", gender : "f", address : "a", password : "a", right : "a"},{username : "b", firstname : "a", lastname : "a", email : "A", country : "r", gender : "f", address : "a", password : "a",right : "a"}];
//var database =[{username : "a",password :"a"},{username:"b",password :"b"}];
function enterdata()
{
	var username = document.getElementById("username").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var temp_country = document.getElementById("country");
	var country = temp_country.options[temp_country.selectedIndex].text;
	var mf = document.getElementById("gendermale").checked;
	if (mf == false)
		var gender = "female";
	else
		var gender = "male";
	var address = document.getElementById("address").value;
	var password = document.getElementById("password").value;

	alert(gender) ;
	database.push({username: username,firstname : firstname, lastname :lastname,email : email,country :country,gender :gender,address : address, password : password, right : "t"});
	alert(database.length);
}


function validate(){
//var username = document.getElementById("username").value;
//var password = document.getElementById("password").value;
//if ( username == "a" && password == "a"){
//alert ("Login successfully");
//window.location.href = "/home/ankitade/Downloads/myApp/client/templates/signup.html"; // Redirecting to other page.
//window.open("/home/ankitade/Downloads/myApp/client/templates/pc.html");
//return false;
//}
//else{
//attempt --; Decrementing by one.
//alert("You have left "+attemptr+" attempt;");
// Disabling fields after 3 attempts.
//if( attempt == 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;
//return false;
//}
//}

window.open("/home/ankitade/Downloads/myApp/client/templates/pc.html");
return false;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var valid = false;

//var unArray = ["Philip", "George", "Sarah", "Michael"];  // as many as you like - no comma after final entry
//var pwArray = ["Password1", "Patssword2", "Password3", "Password4"];  // the corresponding passwords;

for (var i=0; i <database.length; i++) {
if ((username == database[i].username) && (password == database[i].password)) {
valid = true;
break;
}
}
if (valid==true){
alert("yes");
window.location = "templates/home.html";
}
else
{
	alert("Unsuccessful");
}

}
