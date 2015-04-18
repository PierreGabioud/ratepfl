Template.navbar.helpers({
    user: function () {
        return Meteor.user();
    },
    userName: function() {
        return this.emails[0].address;
    },
});

Template.navbar.events({
    'click #logout': function () {
        Meteor.logout();
    },
});

Template.navbar.rendered = function () {
	$(".button-collapse").sideNav();
};
