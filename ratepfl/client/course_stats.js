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
  }
});


Template.courseStats.rendered = function () {
  setTimeout(function() {
   $('ul.tabs').tabs();
  }, 200);
}