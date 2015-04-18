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
	zeroToTen: function(){
		return [1,2,3,4,5,6,7,8,9,10,11];
	},
	getNbHoursColor: function(){

		if(Session.get("nbHoursRating")){
			return (Number(this) <= Session.get("nbHoursRating")) ? "red-text text-darken-3" : "black-text";
		}else{
			var value = Ratings.findOne({});
			if(value){
					return ( Number(this) <= value.ratingHours) ? "red-text text-darken-3" : "black-text";
			}
		}
	},
	getNbHours: function(){
		if(Session.get("nbHoursRating")){
			return Session.get("nbHoursRating")*2 -2;
		}else{
			var value = Ratings.findOne({});
			if(value){
				return value.ratingHours * 2 -2;

			}
		}
	},
	getTeacherRatingColor: function(){
			if(!Session.get("teacherRating")){
					var value = Ratings.findOne({});
					if(value){
						return (Number(this) <= value.ratingTeacher ) ? "green-text text-darken-3" : "black-text";
					}
			}else{
				return (Number(this) <= Session.get("teacherRating")) ? "green-text text-darken-3" : "black-text";
			}
	},
	getTeacherComment: function(){
		var rating=0;
		if(Session.get("teacherRating")){
			rating = Session.get("teacherRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingTeacher;
		}

		if(rating == 10){
			return "BEST TEACHER EVAH";
		}else if(rating > 8 ){
			return "Pretty awesome!";
		}else if(rating > 5){
			return "Allright";
		}else if(rating > 3){
			return "Maah";
		}else{
			return "STAHP";
		}
	},
	getHoursComment: function(){
		var rating=0;
		if(Session.get("nbHoursRating")){
			rating = Session.get("nbHoursRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingHours;
		}
		

		if(rating > 11){
			return "BIG DATA?";
		}else if(rating > 8 ){
			return "Wtf";
		}else if(rating > 5){
			return "Wow";
		}else if(rating > 3){
			return "Maah";
		}else if(rating >1){
			return "Go Study!";
		}else{
			return "Nice";
		}
	},

	lightenUpvote: function(){
		var vote = Upvotes.find({userID: "userIDgoesHere", commentID: this._id}).fetch()
		return (vote.length > 0 && vote[0].type == 1)? "" : "text-lighten-4";
	},
	lightenDownvote: function(){
		var vote = Upvotes.find({userID: "userIDgoesHere", commentID: this._id}).fetch()
		return (vote.length > 0 && vote[0].type == -1)? "" : "text-lighten-4";
	},
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
	'click .teacherRating': function(e, t){

		//console.log($(e.target).data("teacherrating")+" and courseID = "+t.data.course._id);

		Meteor.call("changeRatingTeaching", t.data.course._id, $(e.target).data("teacherrating"));
	},
	'click .nbhoursrating': function(e,t){
		Meteor.call("changeRatingHours", t.data.course._id, $(e.target).data("nbhoursrating"))
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
