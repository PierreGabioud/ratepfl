Meteor.publish('courses', function(){
	return Courses.find({});
});

Meteor.publish('ratings', function(){
	return Ratings.find({});
});

Meteor.publish('comments', function(){
	return Comments.find({});
});