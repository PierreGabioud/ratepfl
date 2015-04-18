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
	},
	data: function(){
		return {
			courses: Courses.find({}),
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
console.log("done"+Courses);
		return {

		course: Courses.findOne({}),
		comments: Comments.find({})
		};
	}
});

