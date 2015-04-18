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
		Meteor.subscribe("singlecourse", this.params.id);
		Meteor.subscribe("comments", this.params.id);
	},
	data: function(){
		return {
		courses: Courses.findOne({}),
		comments: Comments.find({_id:this.params.id})
		}
	}
});

