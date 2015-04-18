if(Courses.find().count() == 0){
	for (var i = 0; i <=10; i++) {
		
		Courses.insert({
			title: "Cours de test "+i,
			credits: 7,
			teacher: "Michael Jordan"


		});


	};
}



if(Comments.find().count() == 0){
	for (var i = 0; i <=50; i++) {
		
		Comments.insert({
			courseID: "AiNDK3y8HehQBrkTD",
			content: "Rien à branler de ce cours de merde"


		});


	};
}

