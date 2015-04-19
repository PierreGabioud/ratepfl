Template.courseDist.helpers({
  histogram : function() {
    console.log("Selected chart: "+Session.get("chartType"));

    // var ratings = _.filter(_.pluck(Ratings.find({}).fetch(), Session.get("chartType") ),
    //   function(el){
    //     return el!=undefined;
    //   }
    //   );
    //average for each course
    var ratings = _.map(_.groupBy(_.filter(Ratings.find({}).fetch(), function(o) {
      return o[Session.get("chartType")]!=undefined;
    }), 'ratedID'), function(o){
      return mean(_.pluck(o, Session.get("chartType")));
    });
    console.log('ratings: ' + ratings);


    var counts = _.countBy(ratings);

    var coef = 1;
    var offset=0;
    if(Session.get("chartType") == "ratingHours"){
      coef = 2;
      offset = -2;
      ratings=_.map(ratings, function(val) {
        return 2*val - 2;
      });
    }

    console.log(ratings);
    if (ratings.length > 1) {
      var average = mean(ratings);
    } else {
      var average = ratings[0] || 0;
    }




    var title = "";
    if(Session.get("chartType") == "ratingHours") title="Number of hours per week";
    else if(Session.get("chartType") == "ratingTeacher") title="Quality of the teaching";
    else if(Session.get("chartType") == "ratingDifficulty") title="Difficulty of the course";
    else if(Session.get("chartType") == "ratingInterest") title="Interest";
    else if(Session.get("chartType") == "ratingUsefulness") title="Usefulness";

    var vals = [];
    var cats = [];

    for (var i=1; i<=10; i++) {
      cats.push((i*coef+offset).toString());
      vals.push(counts[i.toString()] || 0);
    }
    console.log(cats);


    $('#charting').highcharts({


      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: "Average: "+ average.toFixed(2)+" over "+ratings.length +
        " course" + ((ratings.length == 1)? '': 's')
      },
      tooltip: {
        pointFormat: '<b></b>'
      },
      xAxis: {
        categories: cats,
        crosshair: true
      },

      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        type: 'column',
        name: title,
        data: vals
      }]

    }) ;



  }
});

function mean (vals) {
  return _.reduce(vals, function(a,b){
    console.log(a+b);
      return a+b;
    }, 0) / vals.length;
}
