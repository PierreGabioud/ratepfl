
Template.registerHelper('formatDate', function(date){

	return moment(date).locale('zh-cn').format('HH[h]mm, DD/MM');
});

