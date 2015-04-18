SEMESTER_NAMES = ['Autumn Semester', 'spring semester'];

Template.coursePage.helpers({
	course: function(){
		return this.course;
	},
	comments: function(){
		return this.comments;
	},
	semesterName: function(){
		return SEMESTER_NAMES[this.semester-1];
	},
	commentsNb : function(){
		return Comments.find({courseID: this._id}).count()
	},
	oneToTen: function(){
		return [1,2,3,4,5,6,7,8,9,10];
	},
	getNbHoursColor: function(){

		if(!Session.get("nbHoursRating")){
			return(this.ratingHours <= Session.get("nbHoursRating")) ? "red-text text-darken-3" : "black-text";
		}
		return (Number(this) <= Session.get("nbHoursRating")) ? "red-text text-darken-3" : "black-text";
	},
	getTeacherRatingColor: function(){
		// console.log(Number(this)+" vs "+Session.get("teacherRating"));
		return (Number(this) <= Session.get("teacherRating")) ? "green-text text-darken-3" : "black-text";
	},
	getTeacherComment: function(){
		if(Session.get("teacherRating") > 8){
			return "BEST TEACHER EVAH";
		}else if(Session.get("teacherRating") >5 ){
			
		}
	}
});


Template.coursePage.events({
	'mouseover .nbhoursrating': function (e) {
		//console.log($(e.target).data("nbhours"));
		// console.log("hoer");
		Session.set("nbHoursRating", $(e.target).data("nbhoursrating"));
	},
	'mouseleave .nbHoursHeader': function(e){
		console.log("Mouse leave");
		Session.set("nbHoursRating", "");
	},
	'mouseover .teacherRating': function(e){
		// console.log($(e.target).data("teacherrating"));
		Session.set("teacherRating", $(e.target).data("teacherrating"));
	},
	'mouseleave .teacherHeader': function(e){
		console.log("Mouse leave");
		Session.set("teacherRating", "");
	},
	'click .teacherRating': function(e){
		console.log($(e.target).data("teacherrating"));
		Meteor.call("changeRating");
	}
});


Template.coursePage.events(
	{
		"submit .new-comment": function(event)
		{
			var courseID = this.course._id;
			var comment = event.target.comment.value;
			var timestamp = new Date().getTime();

			// send add request to the server
			Meteor.call("newComment", courseID, comment, timestamp);

			// empty form
			event.target.reset();
			$('#modal-add-comment').closeModal();

			return false;
		},
		"click .upvote": function()
		{
			Meteor.call("upvote", "userIDgoesHere", this._id)
		},
		"click .downvote": function()
		{
			Meteor.call("downvote", "userIDgoesHere", this._id)
		}
	
});
