Meteor.publish('courses', function(){
	return Courses.find({});
});

Meteor.publish('ratings', function(){
	return Ratings.find({});
});