Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading'
	// notFoundTemplate: 'notFound'
});



Router.route('/', {
	name: 'homePage',
	template: 'homePage',
	waitOn: function(){
		Meteor.subscribe("courses");
		Meteor.subscribe("sections");
	},
	data: function(){
		return {
			courses: Courses.find({}),
			sections: Sections.find({})
		}
	}
});


Router.route('/course/:_id', {
	name:'coursePage',
	template: 'coursePage',
	waitOn: function(){
		Meteor.subscribe("singleCourse", this.params._id);
		Meteor.subscribe("comments", this.params._id);
	},
	data: function(){
		return {
			course: Courses.findOne({}),
			comments: Comments.find({}, {sort: {upvote: -1}})
		};
	}
});


Router.route('/courses', {
	name:'courseList',
	template:'courseList',
	waitOn: function(){
		Meteor.subscribe("courses");
	},
	data: function(){
		return {
			courses: Courses.find({})
		};
	}
})

