//Courses.remove({});


if(Courses.find().count() == 0){
	for (var i = 0; i <=10; i++) {
		
		Courses.insert({
			title: "Cours de test "+i,
			credits: 7,
			teacher: "Michael Jordan",
			overallrating: 8.6

		});


	};
}


//Comments.remove({});

if(Comments.find().count() == 0){
	for (var i = 0; i <=50; i++) {
		
		Comments.insert({
			courseID: "2Tu8o4FPqjo53LWE9",
			content: "Rien à branler de ce cours de merde",
			upvotes: 5

		});


	};
}

