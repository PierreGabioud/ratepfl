Template.commentsDist.helpers({
  histogram : function() {

    console.log('AAAAAA')
    //average for each course
    var ratings = _.map(_.groupBy(_.filter(Comments.find({}).fetch(), function(o) {
      return o.courseID!=undefined;
    }), 'courseID'), function(o){
      console.log(o);
      return o.length;
    });
    console.log('ratings: ' + ratings);


    console.log(ratings);
    if (ratings.length > 1) {
      var average = mean(ratings);
    } else {
      var average = ratings[0] || 0;
    }




    var title = "Number of comments";

    var vals = [];
    var cats = [];

    var max = _.max(ratings);
    console.log('max' + max);

    var max_steps = 30;

    var counts = _.countBy(_.map(ratings, function(o) {
      return Math.round(o/max*max_steps);
    }));


    for (var i=1; i<=max_steps; i++) {
      cats.push((i/max_steps*max).toFixed(0).toString());
      vals.push(counts[i.toString()] || 0);
    }

    console.log(counts);


    $('#commentsDist').highcharts({
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
                groupPadding: 0,
                pointPadding: 0,
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
