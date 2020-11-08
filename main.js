const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function validateForm(){
var x=[document.forms["myform"]["User"].value,document.forms["myform"]["password"].value];
var y={
}
	if (x[0]==""||x[0]=="Username"||x[0]!="admin") {
		alert("Username must be filled out");
		return false;
	}
	if (x[1]==""||x[1]=="¨Password"||x[1]!="admin") {
		alert("Password must be filled out");
		return false;
	}

	
}
