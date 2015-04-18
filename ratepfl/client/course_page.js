SEMESTER_NAMES = ['Autumn Semester', 'spring semester'];

Template.coursePage.rendered = function () {
	Session.set("sortMode", "new");
};


Template.coursePage.helpers({
	course: function(){
		return this.course;
	},
	comments: function(){
		if(Session.get("sortMode") == "best"){
			return _.sortBy(this.comments.fetch(), function(o) {
				return o.downvotes - o.upvotes;
			});
		}
		else{
			return _.sortBy(this.comments.fetch(), function(o) {
				return -1 * o.timestamp;
			});
		}


	},
	getUnderline: function(sortMode){
		if(sortMode == Session.get("sortMode")){
			return "underline";
		}
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
		return [1,2,3,4,5,6,7,8,9,10];
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
	getDifficultyRatingColor: function(){

		if(!Session.get("difficultyRating")){
			var value = Ratings.findOne({});
			if(value){
						return (Number(this) <= value.ratingDifficulty ) ? "orange-text text-darken-3" : "black-text";
			}
			}else{
				return (Number(this) <= Session.get("difficultyRating")) ? "orange-text text-darken-3" : "black-text";
			}
		},
		getInterestRatingColor: function(){

		if(!Session.get("interestRating")){
			var value = Ratings.findOne({});
			if(value){
						return (Number(this) <= value.ratingInterest ) ? "pink-text text-darken-3" : "black-text";
			}
			}else{
				return (Number(this) <= Session.get("interestRating")) ? "pink-text text-darken-3" : "black-text";
			}
		},
		getUsefulnessRatingColor: function(){

		if(!Session.get("usefulnessRating")){
			var value = Ratings.findOne({});
			if(value){
						return (Number(this) <= value.ratingUsefulness ) ? "blue-text text-darken-3" : "black-text";
			}
			}else{
				return (Number(this) <= Session.get("usefulnessRating")) ? "blue-text text-darken-3" : "black-text";
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
			return "Fantastic!";

		}
		else if(rating > 7 ){
			return "Awesome!";
		}
		else if(rating > 6 ){
			return "Pretty awesome!";

		}
		else if(rating > 5){
			return "Alright";
		}else if(rating > 3){
			return "Maah";
		}else if(rating == 1){
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

		var h = (rating*2-2)+"h ";


		if(rating > 10){
			return h+"BIG DATA?";
		}
		else if(rating > 9 ){
			return h+"Oh God";
		}
		else if(rating > 8 ){
			return h+"Wtf";
		}
		else if(rating > 7){
			return h+"WOW";
		}
		else if(rating > 6){
			return h+"Wow";
		}

		else if(rating > 5){
			return h+"Wow";
		}else if(rating > 3){
			return h+"Maah";
		}else if(rating >1){
			return h+"Go Study!";
		} else if(rating == 1){
			return h+"Nice";
		}

	},
	getDifficultyComment: function(){
		var rating=0;
		console.log("SEETING = "+Session.get("difficultyRating"));

		if(Session.get("difficultyRating")){
			rating = Session.get("difficultyRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingDifficulty;
		}

		console.log("RATING = "+rating);

		if(rating > 9){
			return "HARDCORE";
		}else if(rating > 8 ){
			return "Very hard";
		}else if(rating > 7){
			return "Hard";
		}
		else if(rating > 6){
			return "Pretty hard";
		}

		else if(rating > 5){
			return "Kinda hard";
		}else if(rating > 4){
			return "Average";
		}else if(rating >3){
			return "Easy";
		}
		else if(rating >2){
			return "Very easy";
		}
		else if(rating >1){
			return "VERY easy";
		}else if(rating ==1){
			return "lol";
		}
	},
	getInterestComment: function(){
		var rating=0;
		console.log("SEETING = "+Session.get("interestRating"));

		if(Session.get("interestRating")){
			rating = Session.get("interestRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingInterest;
		}

		console.log("RATING = "+rating);

		if(rating > 9){
			return "∞ interesting";
		}else if(rating > 8 ){
			return "SUPER interesting";
		}else if(rating > 7){
			return "Very interesting";
		}
		else if(rating > 6){
			return "Interesting";
		}

		else if(rating > 5){
			return "Alright";
		}else if(rating > 4){
			return "Not so interesing";
		}else if(rating >3){
			return "Boring";
		}
		else if(rating >2){
			return "Very boring";
		}
		else if(rating >1){
			return "Good night";
		}else if(rating == 1){
			return "SHS boring";
		}
	},
	getUsefulnessComment: function(){
		var rating=0;
		console.log("SEETING = "+Session.get("usefulnessRating"));

		if(Session.get("usefulnessRating")){
			rating = Session.get("usefulnessRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingUsefulness;
		}

		console.log("RATING = "+rating);

		if(rating > 9){
			return "∞ interesting";
		}else if(rating > 8 ){
			return "SUPER interesting";
		}else if(rating > 7){
			return "Very interesting";
		}
		else if(rating > 6){
			return "Interesting";
		}

		else if(rating > 5){
			return "Alright";
		}else if(rating > 4){
			return "Not so interesing";
		}else if(rating >3){
			return "Boring";
		}
		else if(rating >2){
			return "Very boring";
		}
		else if(rating >1){
			return "Good night";
		}else if(rating == 1) {
			return "SHS boring";
		}
	},



	lightenUpvote: function(){
		var vote = Upvotes.find({userID: Meteor.userId(), commentID: this._id}).fetch()
		return (vote.length > 0 && vote[0].type == 1)? "" : "text-lighten-4";
	},
	lightenDownvote: function(){
		var vote = Upvotes.find({userID: Meteor.userId(), commentID: this._id}).fetch()
		return (vote.length > 0 && vote[0].type == -1)? "" : "text-lighten-4";
	},

	activeSubpart: function(){
		return Session.get("selected-subpart") == this._id ? "active": "";
	},
	activeSubpartGeneral: function(){
		var selected = Session.get("selected-subpart");
		return (selected == undefined)? "active":"";
	}
});


Template.coursePage.events({
	'mouseover .nbhoursrating': function (e) {
		Session.set("nbHoursRating", $(e.target).data("nbhoursrating"));
	},
	'mouseover .teacherRating': function(e){
		Session.set("teacherRating", $(e.target).data("teacherrating"));
	},
	'mouseover .difficultyRating': function(e){
		Session.set("difficultyRating", $(e.target).data("difficultyrating"));
	},
	'mouseover .interestRating': function(e){
		Session.set("interestRating", $(e.target).data("interestrating"));
	},
	'mouseover .usefulnessRating': function(e){
		Session.set("usefulnessRating", $(e.target).data("usefulnessrating"));
	},

	'mouseleave .nbHoursHeader': function(e){
		Session.set("nbHoursRating", "");
	},
	'mouseleave .teacherHeader': function(e){
		Session.set("teacherRating", "");
	},
	'mouseleave .difficultyHeader': function(e){
		Session.set("difficultyRating", "");
	},
	'mouseleave .interestHeader': function(e){
		Session.set("interestRating", "");
	},
	'mouseleave .usefulnessHeader': function(e){
		Session.set("usefulnessRating", "");
	},

	'click .teacherRating': function(e, t){
		Meteor.call("changeRating", t.data.course._id, $(e.target).data("teacherrating"), "teacher");
	},
	'click .nbhoursrating': function(e,t){
		Meteor.call("changeRating", t.data.course._id, $(e.target).data("nbhoursrating"), "hours")
	},
	'click .difficultyRating': function(e,t){
		Meteor.call("changeRating", t.data.course._id, $(e.target).data("difficultyrating"), "difficulty")
	},
	'click .interestRating': function(e,t){
		Meteor.call("changeRating", t.data.course._id, $(e.target).data("interestrating"), "interest")
	},
	'click .usefulnessRating': function(e,t){
		Meteor.call("changeRating", t.data.course._id, $(e.target).data("usefulnessrating"), "usefulness")
	},

	'click .new-button': function(e,t){
		Session.set("sortMode", "new");
	},
	'click .best-button': function(e,t){
		Session.set("sortMode", "best");
	}
});


Template.coursePage.events(
	{
		"submit .new-comment": function(event)
		{
			event.preventDefault();
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
			Meteor.call("upvote", Meteor.userId(), this._id)
		},
		"click .downvote": function()
		{
			Meteor.call("downvote", Meteor.userId(), this._id)
		},


		"submit .new-subpart": function(event)
		{
			console.log("adding");
			Meteor.call("addSubpart", this.course._id, event.target.subpart.value)
		},
		"click .subpart": function()
		{
			Session.set("selected-subpart", this._id);
		},
		"click .subpart-general": function()
		{
			Session.set("selected-subpart", undefined);
		}

});

Template.coursePage.rendered = function () {
  setTimeout(function() {
  	console.log("DONE");
  	//$('.modal-trigger').leanModal();
  	 $('.modal-trigger').leanModal();

  }, 1000);
}
