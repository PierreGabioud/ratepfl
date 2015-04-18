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

Meteor.publish('sections', function(){
  return Sections.find({});
});

Meteor.publish("ratings", function(parentID){
	console.log("Meteor user id = "+this.userId);

	return Ratings.find({ratedID: parentID, userID: this.userId});
});