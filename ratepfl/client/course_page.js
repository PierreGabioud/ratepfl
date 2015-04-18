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