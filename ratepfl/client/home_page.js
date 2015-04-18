Template.homePage.helpers({
  getSections: function () {
    return this.sections;
  }
});

Template.homePage.rendered = function () {
  setTimeout(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }, 200);
}