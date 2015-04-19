Template.courseList.helpers({
	getCourses: function () {
		return _.sortBy(this.courses, function(el){
			return el.title;
		});
	}
});

Template.courseList.events({
	'click .courseRow': function () {
		console.log(this._id);
		Session.set("courseID", this._id);
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


