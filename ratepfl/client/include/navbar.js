Template.navbar.helpers({
    user: function () {
        return Meteor.user();
    },
    userName: function() {
        return this.emails[0].address;
    },
    searching: function() {
        return Session.get('searching');
    }
});

Template.navbar.events({
    'click #logout': function () {
        Meteor.logout();
    },
    'click #search': function () {
        console.log("search switch")
        var s = Session.get('searching') || false;
        Session.set('searching', !s);
        Router.go('/')
    },
    'keyup #search-field': function (event) {
        var query = event.target.value;
        Session.set('query', query);

        if(query.length > 0)
            Router.go('/search')
        else
            Router.go('/')
    }
});

Template.navbar.rendered = function () {
	$(".button-collapse").sideNav();
};
