Template.searchPage.helpers({
    results: function () {

        var ret = _.filter(Courses.find({}).fetch(), function(elem){return match(Session.get('query'), elem.title)})
        Session.set('result_lentgh', ret.length);

        var toReturn = ret.splice(0, 10);
        Session.set('result_lentgh_shown', toReturn.length);


        return toReturn;
    },
    resultsNb: function() {
        return "Showing " + Session.get('result_lentgh_shown') + " of " + Session.get('result_lentgh');
    },
    semesterName: function(){
        return SEMESTER_NAMES[this.semester-1];
    },
});

var match  = function(search, text) {

    search = search.toUpperCase();
    text = text.toUpperCase();

    var j = -1; // remembers position of last found character

    // consider each search character one at a time
    for (var i = 0; i < search.length; i++) {
        var l = search[i];
        if (l == ' ') continue;     // ignore spaces

        j = text.indexOf(l, j+1);     // search for character & update position
        if (j == -1) return false;  // if it's not found, exclude this item
    }
    return true;
}