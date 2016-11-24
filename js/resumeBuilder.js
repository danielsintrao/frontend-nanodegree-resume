

 //$("#main").append("Daniel Sintrão");

 var awesomeToughts = "I am Daniel and I'm AWESOME";

 	console.log(awesomeToughts);

 var funThoughts = awesomeToughts.replace("AWESOME" , "FUN");

 	//console.log(awesomeToughts);
 	//console.log(funThoughts);

 	$('#main').append(funThoughts);

//----------------------- PART 2 ----------------------------- //

var name = "Daniel Sintrão";
var role = "Front End Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

