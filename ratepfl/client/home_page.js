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
  },

  bestComment: function(){
    var comments = Comments.find({userID: Meteor.userId()}).fetch();
    var bestComment = _.max(comments, function(el){
      console.log("upvotes = "+el.upvotes);
      return el.upvotes
    });



    if(bestComment){
      console.log("ParentID = "+bestComment.courseID);

        var parentTitle = Courses.findOne({_id: bestComment.courseID});



        if(parentTitle){
          console.log("COmment content = "+bestComment.content);
          return {
            content: bestComment.content,
            parentTitle: parentTitle.title,
            upvotes: bestComment.upvotes
          };
        }
    }

  },

  myFeed: function () {
    var courseNlabel = _.object(_.map(Courses.find({}).fetch(), function(e){return [e._id, [e.label, e.title]]}));
    var subpartNames = _.object(_.map(Subparts.find({}).fetch(), function(e){return [e._id, e.name]}));
    console.log(subpartNames);
    //console.log(courseNlabel);
    var myComments = _.object(_.map(Comments.find({userID: Meteor.userId()}).fetch(), function(e){return [e._id, [e.content, e.courseID, e.subpartID]]}));
    //console.log(myComments);
    var myCommentsIDs = _.keys(myComments);
    //console.log(myCommentsIDs);
    var upvotesToMe = _.map(_.sortBy(Upvotes.find({commentID: {$in: myCommentsIDs}, type: 1}).fetch(), function(e){return -e.timestamp}),function(e)
      {
        return {
          msg: elipse(myComments[e.commentID][0]),
          timestamp: e.timestamp,
          label: courseNlabel[myComments[e.commentID][1]][0],
          title: courseNlabel[myComments[e.commentID][1]][1],
          subpart: subpartNames[myComments[e.commentID][2]],
          _id: myComments[e.commentID][1]
        }
      });
    //console.log(upvotesToMe);

    return upvotesToMe.splice(0, 14);

  },

  lastComments: function(){
      var comments = Comments.find({userID: Meteor.userId()}, {limit: 3});
      console.log("NUMBER OF COMMENTS : "+comments);
      return comments;
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

var ELIPSE_SIZE = 40;
var elipse = function(s) {
  return s.length < ELIPSE_SIZE-3 ? s: s.slice(0, ELIPSE_SIZE) + "..."
}