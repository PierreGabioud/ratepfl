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