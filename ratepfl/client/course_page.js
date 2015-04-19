SEMESTER_NAMES = ['Autumn Semester', 'spring semester'];

KEY_SUBPART = "selected_subpart";

Template.coursePage.rendered = function () {
	Session.set("sortMode", "new");
	Session.set('displayStats', false);
};


Template.coursePage.helpers({
	course: function(){
		return this.course;
	},
	comments: function(){
		if(Session.get("sortMode") == "best"){
			return _.sortBy(Comments.find({subpartID: Session.get(KEY_SUBPART)}).fetch(), function(o) {
				return o.downvotes - o.upvotes;
			});
		}
		else{
			return _.sortBy(Comments.find({subpartID: Session.get(KEY_SUBPART)}).fetch(), function(o) {
				return -1 * o.timestamp;
			});
		}


	},
	commentCountForPart: function(){
		return Comments.find({subpartID: this._id}).count();
	},
	commentCountForGeneral: function(){
		return Comments.find({subpartID: undefined}).count();
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
		console.log("RATING TEACHER "+Session.get("teacherRating"));

		if(Session.get("teacherRating")){
			rating = Session.get("teacherRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingTeacher;
		}

		var comments = ["...", ":|", "Meeh", "Beuhh", "Average", "Alright", "Good", "Very good!", "Awesome!", "BEST TEACHER EVAH"];
		if(rating){
			return comments[rating-1];
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

		var comments = [h+"Nice", h+"Chillax", h+"Relax", h+"Average", h+"Long", h+";(", h+";(", h+";(", h+"Too much", h+"Nolife"];

			if(rating){
				return comments[rating-1];
			}
			

	},
	getDifficultyComment: function(){
		var rating=0;
		if(Session.get("difficultyRating")){
			rating = Session.get("difficultyRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingDifficulty;
		}

		console.log("RAINTdd "+rating);

		var comments = ["lol", "VERY easy", "Very easy", "Easy", "Average", "Kinda hard", "Pretty hard", "Hard", "Very hard", "HARDCORE"];
		if(rating){
			return comments[rating-1];
		}
	},
	getInterestComment: function(){
		var rating=0;

		if(Session.get("interestRating")){
			rating = Session.get("interestRating");
		}else{
			var val = Ratings.findOne({});
			if(val) rating = val.ratingInterest;
		}
		var comments = ["SHS boring", "Good night", "Very boring", "Boring", "Not so interesting", "Alright", "Interesting", "Very interesting", "SUPER interesting", "∞ interesting"];
		if(rating){
			return comments[rating-1];
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

		var comments = ["Überuseless", "Useless", "Pretty useless", "sort of useless", "Neutral", "Kinda useleful", "Useful", "Very useful", "VERY useful", "Überuseful"];
		if(rating){
			return comments[rating-1];
		}	
	},

	displayStats: function(){
		return Session.get('displayStats');
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
		return Session.get(KEY_SUBPART) == this._id;
	},
	activeSubpartGeneral: function(){
		var selected = Session.get(KEY_SUBPART);
		return selected == undefined ? "active":"";
	},
	currentSubpart: function(){
		return Subparts.findOne({supartID: Session.get(KEY_SUBPART)})
	}
});


Template.coursePage.events({
	'mouseover .nbhoursrating': function (e) {
		Session.set("nbHoursRating", $(e.target).data("nbhoursrating"));
	},
	'mouseover .teacherRating': function(e){
		console.log("YOYOYO");
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
			var subpartID = Session.get(KEY_SUBPART);

			// send add request to the server
			Meteor.call("newComment", courseID, comment, subpartID);

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

		"click .statsBtn": function() {
			Session.set('displayStats', !Session.get('displayStats'));
		},

		"submit .new-subpart": function(event)
		{
			event.preventDefault();
			Meteor.call("addSubpart", this.course._id, event.target.subpart.value)

			// empty form
			event.target.reset();
			$('#modal-add-subpart').closeModal();
		},
		"click .subpart": function()
		{
			Session.set(KEY_SUBPART, this._id);
		},
		"click .subpart-general": function()
		{
			Session.set(KEY_SUBPART, undefined);
		},
		"click .report-subpart": function()
		{
			Meteor.call("reportSubpart", Session.get(KEY_SUBPART));
		},
		"click": function()
		{
			//TODO god forgive me for this horrible hack
			setTimeout(function(){$('.modal-trigger').leanModal()}, 1000);
		}

});

Template.coursePage.rendered = function () {
  setTimeout(function() {
  	console.log("DONE");
  	//$('.modal-trigger').leanModal();
  	 $('.modal-trigger').leanModal();

  }, 1000);
}
