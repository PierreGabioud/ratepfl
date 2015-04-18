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
	for (var i = 0; i <=10; i++) {
		Sections.insert({
			name: 'Section ' + i
		});


	};
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

}



