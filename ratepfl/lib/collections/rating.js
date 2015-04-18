Ratings = new Mongo.Collection('ratings');

Meteor.methods({

	changeRating : function(){
		console.log("Changing rating");
		if(!Meteor.userId()){
			console.log("Need to be connected");
		}else{

			console.log("Updating rating to of this dude on this ratedID");

		}
	}

});