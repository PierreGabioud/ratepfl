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
		}
	})