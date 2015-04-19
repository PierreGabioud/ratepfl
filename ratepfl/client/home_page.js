Template.homePage.helpers({
  getSections: function () {
    return this.sections;
  },
  connectedUser: function () {
    return Meteor.user() ? Meteor.user().emails[0].address : "Stranger";
  },
  nbRated: function() {
    return Ratings.find({userID: Meteor.userId()}).count();
  },
  commentsNb: function() {
    return Comments.find({userID: Meteor.userId()}).count();
  },
  upvotesNb: function() {
    return Upvotes.find({userID: Meteor.userId(), type: 1}).count()
  },
  myCourses: function() {
    var rates = _.map(Ratings.find({userID: Meteor.userId()}).fetch(), function(e){return e.ratedID});
    var courses = _.uniq(_.map(Comments.find({userID: Meteor.userId()}).fetch(), function(e){return e.courseID}).concat(rates));

    console.log(courses);

    return Courses.find({ '_id': {$in:courses}});
  }
});

Template.homePage.events({
  'click .sectionYear': function (e) {
    Router.go('/section/'+this.name+'/'+$(e.target).data('year'));
  },
  'mouseover .sectionYear': function(e){
      var classColor = "green lighten-5";
    $(e.target).closest("li").addClass(classColor);
  },
  'mouseleave .sectionYear': function(e){
    var classColor = "green lighten-5";
    $(e.target).closest("li").removeClass(classColor);
  }
});


Template.homePage.rendered = function () {
  setTimeout(function() {
      $('.collapsible').collapsible({
        accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }, 1000);
}