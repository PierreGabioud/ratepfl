Meteor.publish('courses', function(){
	return Courses.find({}, {$sort: {title:1}});
});

Meteor.publish('singleCourse', function(id){
	console.log("ID of single course : "+id);
	return Courses.find({_id: id});
});



Meteor.publish('comments', function(courseID){
	return Comments.find({courseID: courseID}, {sort: {upvote: 1}});
});
Meteor.publish('commentsForUser', function(userID){
	return Comments.find({userID: userID});
});

Meteor.publish('sections', function(){
  return Sections.find({});
});

Meteor.publish("ratings", function(parentID){
	console.log("Meteor user id = "+this.userId);

	return Ratings.find({ratedID: parentID});
});

Meteor.publish("allRatings", function(){
	return Ratings.find();
});

Meteor.publish('allComments', function(){
	return Comments.find({});
});

Meteor.publish("ratingsForUser", function(userID){
	return Ratings.find({userID: userID})
});

Meteor.publish('upvotesForUser', function(userID){
	return Upvotes.find({userID: userID});
});

Meteor.publish('subpartForCourse', function(courseID){
	return Subparts.find({courseID: courseID});
});

Meteor.publish('reports', function(){
	return Reports.find({});
});