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
        $(".dropdown-button").dropdown();

    },
    'click #search': function () {
        console.log("search switch")
        var s = Session.get('searching') || false;

        Session.set('searching', !s);

        if(s)
            Router.go(Session.get('prev_route'));
    },
    'focus #search-field': function (){
        Session.set('prev_route', Router.current().url);
    },
    'keyup #search-field': function (event) {
        var query = event.target.value;
        Session.set('query', query);

        if(query.length > 0)
            Router.go('/search')
        else
        {
            Router.go(Session.get('prev_route'));
        }

    }
});

Template.navbar.rendered = function () {
	$(".button-collapse").sideNav();
};
