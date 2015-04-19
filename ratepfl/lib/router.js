
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});



Router.route('/', {
	name: 'homePage',
	template: 'homePage',
	waitOn: function(){
		Meteor.subscribe("courses");
		Meteor.subscribe("sections");

		Meteor.subscribe("commentsForUser", Meteor.userId());
		Meteor.subscribe("ratingsForUser", Meteor.userId());
		Meteor.subscribe("upvotesForUser", Meteor.userId());
	},
	data: function(){
		return {
			courses: Courses.find({_id:"df"}),
			sections: Sections.find({})
		}
	}
});

Router.route('/section/:section/:year', {
	name: 'courseList',
	template: 'homePage',
	waitOn: function(){
		Meteor.subscribe("courses");
		Meteor.subscribe("sections");

		Meteor.subscribe("commentsForUser", Meteor.userId());
		Meteor.subscribe("ratingsForUser", Meteor.userId());
		Meteor.subscribe("upvotesForUser", Meteor.userId());

	},
	data: function(){
		return {
			courses: Courses.find({
				section: this.params.section,
				year: parseInt(this.params.year)
			}),
			sections: Sections.find({})
		}
	}
});


Router.route('/login', {
	name: 'login',
	template: 'login'
});


Router.route('/course/:_id', {
	name:'coursePage',
	template: 'coursePage',
	waitOn: function(){
		Meteor.subscribe("singleCourse", this.params._id);
		Meteor.subscribe("comments", this.params._id);
		Meteor.subscribe("ratings", this.params._id);
		Meteor.subscribe("upvotesForUser", Meteor.userId());
		Meteor.subscribe("subpartForCourse", this.params._id);
		Meteor.subscribe("reports");
	},
	data: function(){
		return {
			course: Courses.findOne({}),
			comments: Comments.find({}),
			ratings: Ratings.find({}),
			subparts: Subparts.find({})
		};
	}
});

Router.route('/search', {
	name:'searchPage',
	template: 'searchPage',
	waitOn: function(){
		Meteor.subscribe("courses");
	},
	data: function(){
		return {
			course: Courses.find({})
		};
	}
});

//On before actions
Router.onBeforeAction(function(){
	if(!Meteor.userId()){
		console.log("Not logged in, redirecting to inscription page");
		this.render('login');
	}
	else{
		console.log("User logged in, let's go for it");
		this.next();

	}
},
{ only: ['searchPage', 'coursePage', 'courseList', 'homePage'] });


/*
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
*/

