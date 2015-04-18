Meteor.publish('courses', function(){
	return Courses.find({});
});

Meteor.publish('singleCourse', function(id){
	console.log("ID of single course : "+id);
	return Courses.find({_id: id});
});

Meteor.publish('ratings', function(){
	return Ratings.find({});
});

Meteor.publish('comments', function(courseID){
	return Comments.find({courseID: courseID});
});

Meteor.publish('sections', function(){
  return Sections.find({});
});