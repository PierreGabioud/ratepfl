Meteor.publish('courses', function(){
	return Courses.find({});
});

Meteor.publish('singleCourse', function(id){
	console.log("ID of single course : "+id);
	return Courses.find({_id: id});
});



Meteor.publish('comments', function(courseID){
	return Comments.find({courseID: courseID});
});


