var getRandomBetween = function(min, max){
      return Math.floor(Math.random().toFixed(4) * (max+1 - min)) + min;
}



//Courses.remove({});


if(Courses.find().count() <2){
	for (var i = 0; i <=10; i++) {

		Courses.insert({
			section: "Computer Science",
			title: "Cours de test "+i,
			label: "CS"+getRandomBetween(200,400),
			semester: getRandomBetween(1,2),
			credits: getRandomBetween(4,7),
			teacher: "Michael Jordan",
			overallrating: 8.6,
			year:getRandomBetween(1,4)

		});


	};
}


function createCourse(title, courseID, section, credits, teacher, year, semester){
	if( !Courses.findOne({title:title}) ){

		Courses.insert({
			section: section,
			title: title,
			label: courseID,
			semester: semester,
			credits: credits,
			teacher: teacher,
			overallrating: 0,
			year:year
		});
	}
}


createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);

createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);
createCourse("Big Data", "CS-422", "Computer Science", 7, "Christopher Koch", 4, 2);






















var courseID = Courses.findOne({})._id;


//Comments.remove({});

if(Comments.find().count() == 0){
	for (var i = 0; i <=50; i++) {

		Comments.insert({
			courseID: courseID,
			content: "Rien à branler de ce cours de merde " + i,
			upvotes: getRandomBetween(0,10),
			downvotes: getRandomBetween(0,10),
			timestamp: getRandomBetween(0,1000)
		});


	};
}

if(Sections.find().count() == 0){
	Sections.insert({
		name: 'Computer Science'
	});
	Sections.insert({
		name: 'Mechanical Engineering'
	});
	Sections.insert({
		name: 'Chemistry'
	});
	Sections.insert({
		name: 'Material Sciences'
	});
	Sections.insert({
		name: 'Mathematics'
	});
	Sections.insert({
		name: 'Physics'
	});
	Sections.insert({
		name: 'Mathematics'
	});
	Sections.insert({
		name: 'Civil Engineering'
	});
	Sections.insert({
		name: 'Architecture'
	});
	Sections.insert({
		name: 'Environmental Engineering'
	});
	Sections.insert({
		name: 'Electrical Engineering'
	});
	Sections.insert({
		name: 'Microengineering'
	});
	


}

if(Meteor.users.findOne({_id: "CaiM7wLtSax3uMiA8"})){
	console.log("creating pierre");


if( !Ratings.findOne({userID: "CaiM7wLtSax3uMiA8"}) ){


			Ratings.insert({

				userID: "CaiM7wLtSax3uMiA8",
				ratedID: courseID,
				ratingHours:getRandomBetween(2,10),
				ratingTeacher: getRandomBetween(1,10),
				ratingDifficulty: getRandomBetween(1,10),
				ratingInterest: getRandomBetween(1,10)

			});


}

if(!Ratings.findOne({userID : "abcdefg"})){

	console.log("ADDING RATINGS");

	for (var i = 0; i <= 56; i++) {

		Ratings.insert({
			userID: "abcdefg",
			ratedID: "F4tzgTo2nWvoXegY8",
				ratingHours:getRandomBetween(4,10),
				ratingTeacher: getRandomBetween(1,9),
				ratingDifficulty: getRandomBetween(5,10),
				ratingInterest: getRandomBetween(5,10),
				ratingUsefulness: getRandomBetween(2,10),
		});
		
	};
}

}



}
