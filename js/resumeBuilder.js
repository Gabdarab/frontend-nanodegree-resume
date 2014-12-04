
var bio={
	"name":"Gabor Darvasi",
	"role":"Research Assistant",
	"contacts": {
		"E-mail":"darvasi@bwl.lmu.de",
		"Mobile":"+49 176 4560 8402",
		"Location":"Munich"
	},
	"picURL":"http://www.ecm.bwl.uni-muenchen.de/personen/mitarbeiter/darvasi/gabor.jpg",
	"welcome":"Welcome to my Resume!",
	"skills":["Math","Pricing","German","Strategy"
	]
};

var work={
    "jobs": [
        {
            "position": "Consultant",
            "employer": "SKP",
            "years": "2012 to 2014",
            "city": "Munich",
            "description":"aaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbccccccccccccccccddddddddddddddddddddddddddddddd"
        },
        {
            "position": "Research Assistant",
            "employer": "LMU",
            "years": "2014 to 2018",
            "city": "Munich",
            "description":"eeeeeeeeeeeeeeeeeeeefffffffffffffffffffggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhh"
        }
    ]
};

var education={
    "schools": [
        {
            "name": "U of Heidelberg",
            "years": "2005 to 2011",
            "city": "Heidelberg",
            "degree": "Master's degree"
        },
        {
            "name": "U of Munich",
            "years": "2014 to 2018",
            "city": "Munich",
            "degree": "PhD"
        }
    ]
};

var projects={
		"Title":"Social influence on purchasing decisions",
		"Dates":"2014 to 2015",
		"Description":"Empirical study on an experimental mobile app",
		"picURL":"http://egnyt.com/wp-content/uploads/2014/02/mobile-marketing-sports-1.jpg"
};




	
//general info	
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedPic=HTMLbioPic.replace("%data%",bio.picURL);
//$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//skills at a glance
if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills;
	formattedSkills=HTMLskills.replace("%data%",bio.skills[0])
	$("#skills").append(formattedSkills);
	
	
	formattedSkills=HTMLskills.replace("%data%",bio.skills[1])
	$("#skills").append(formattedSkills);
	
	
	formattedSkills=HTMLskills.replace("%data%",bio.skills[2])
	$("#skills").append(formattedSkills);
	
	
	formattedSkills=HTMLskills.replace("%data%",bio.skills[3])
	$("#skills").append(formattedSkills);
};

//work info function
function displayWork(){
	for (item in work.jobs){
	
		$("#workExperience").append(HTMLworkStart)

		var formattedEmployerTitle;
		formattedEmployerTitle=HTMLworkEmployer.replace("%data%",work.jobs[item].employer)+HTMLworkTitle.replace("%data%",work.jobs[item].position);
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates;
		formattedDates=HTMLworkDates.replace("%data%",work.jobs[item].years);
		$(".work-entry:last").append(formattedDates);
	
		var formattedLocation;
		formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[item].city);
		$(".work-entry:last").append(formattedLocation);
	
		var formattedDescription;
		formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[item].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();




$("#main").append(internationalizeButton);


//projects section. Eigentlich müsste ich auch hier eine Schleife
//benutzen wie bei "work"
projects.display=function(){

	$("#projects").append(HTMLprojectStart);
	
	var formattedHTMLprojectTitle;
	formattedHTMLprojectTitle=HTMLprojectTitle.replace("%data%",projects.Title);
	$(".project-entry").append(formattedHTMLprojectTitle);
	
	var formattedHTMLprojectDates;
	formattedHTMLprojectDates=HTMLprojectDates.replace("%data%",projects.Dates);
	$(".project-entry").append(formattedHTMLprojectDates);

	var formattedHTMLprojectDescription;
	formattedHTMLprojectDescription=HTMLprojectDescription.replace("%data%",projects.Description);
	$(".project-entry").append(formattedHTMLprojectDescription);
	
	var formattedHTMLprojectImage;
	formattedHTMLprojectImage=HTMLprojectImage.replace("%data%",projects.picURL);
	$(".project-entry").append(formattedHTMLprojectImage);
	
};

projects.display();

$("#mapDiv").append(googleMap);









/*

var name="Gabor Darvasi";
var formattedName=HTMLheaderName.replace("%data%",name);

var role="Research Assistant";
var formattedRole=HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedPic=HTMLbioPic.replace("%data%",bio.picURL);
//$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedSchoolName=HTMLschoolName.replace("%data%",school.name);
$("#education").prepend(HTMLschoolStart);
$("#education").append(formattedSchoolName);

var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.employer);
var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.position);
$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);

*/



