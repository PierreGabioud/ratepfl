Template.courseHist.helpers({
	histogram : function() {
		console.log("Selected chart: "+Session.get("chartType"));

		var ratings = _.pluck(Ratings.find({}).fetch(), Session.get("chartType"));
        var counts = _.countBy(ratings)


		var coef = 1;
		var offset=0;
		if(Session.get("chartType") == "ratingHours"){
			console.log(34);
			coef = 2;
			offset = -2;
		}else{
			coef = 1;
			offset= 0;
		}
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
                text: "Histogram"
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
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
                name: 'genre',
                data: vals
            }]

       }) ;



  }
});
