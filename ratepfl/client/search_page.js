Template.searchPage.helpers({
    results: function () {
        return Courses.find({}).fetch().splice(0, Session.get('query').length)
    },
});

Template.searchPage.events({

});