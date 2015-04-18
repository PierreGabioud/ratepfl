Meteor.publish('courses', function(){
	return Courses.find({});
});