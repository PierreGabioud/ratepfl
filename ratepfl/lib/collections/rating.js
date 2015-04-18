Ratings = new Mongo.Collection('ratings');

Meteor.methods({

	changeRatingTeaching : function(ratedID, newRating){
		console.log("Changing rating");
		if(!Meteor.userId()){
			console.log("Need to be connected");
		}else{

			console.log("Updating rating to of this dude "+Meteor.userId()+"on this ratedID "+ratedID);

			Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingTeacher: newRating}});
		}
	},
	changeRatingHours : function(ratedID, newRating){
		console.log("Changing rating of nb hours");
		if(!Meteor.userId()){
			console.log("Need to be connected");
		}else{

			console.log("Updating rating to of this dude "+Meteor.userId()+"on this ratedID "+ratedID);

			Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingHours: newRating}});
		}
	}

});