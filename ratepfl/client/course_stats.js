Template.courseStats.helpers({
  getSections: function () {
    console.log(this.comments.fetch());
    return this.comments.fetch();
  }
});

Template.courseStats.events({
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
  },
  'click .linkTabChart': function(e,t){
    e.preventDefault();
    Session.set("chartType", $(e.target).data("type"));
  }
});


Template.courseStats.rendered = function () {
  Session.set("chartType", "ratingHours");
  setTimeout(function() {
   $('ul.tabs').tabs();
  }, 200);
}


