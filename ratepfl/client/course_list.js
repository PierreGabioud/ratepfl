Template.courseList.helpers({
	getCourses: function () {
		return this.courses;
	}
});

Template.courseList.events({
	'click .courseRow': function () {
		console.log(this._id);
		Router.go('/course/'+this._id);
	},
	'mouseover .courseRow': function(e){
			var classColor = "green lighten-5";
		$(e.target).closest("li").addClass(classColor);
	},
	'mouseleave .courseRow': function(e){
		var classColor = "green lighten-5";
		$(e.target).closest("li").removeClass(classColor);
	}
});


