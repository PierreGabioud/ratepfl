Template.homePage.helpers({
  getSections: function () {
    return this.sections;
  },

  connectedUser: function () {
    return Meteor.user().emails[0].address;
  },
  nbRated: function() {
    return Ratings.find({userID: Meteor.userId()}).count();
  },
  commentsNb: function() {
    return Comments.find({userID: Meteor.userId()}).count();
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