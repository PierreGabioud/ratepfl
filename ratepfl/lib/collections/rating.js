Ratings = new Mongo.Collection('ratings');

Meteor.methods({

	changeRating : function(){
		console.log("Changing rating");
	}

});