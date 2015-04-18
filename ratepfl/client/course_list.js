Template.courseList.helpers({
	getCourses: function () {
		return this.courses;
	}
});

Template.courseList.events({
	'click .courseRow': function () {
		console.log(this._id);
		Router.go('/course/'+this._id);
	}
});