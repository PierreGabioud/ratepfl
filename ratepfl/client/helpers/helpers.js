
Template.registerHelper('formatDate', function(date){

	return moment(date).locale('zh-cn').fromNow();
});

