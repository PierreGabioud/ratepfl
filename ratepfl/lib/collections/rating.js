Ratings = new Mongo.Collection('ratings');

Meteor.methods({

	changeRating : function(ratedID, newRating, type){
		console.log("Changing rating of nb hours");
		if(!Meteor.userId()){
			console.log("Need to be connected");
		}else{

			console.log("Updating rating of this dude "+Meteor.userId()+"on this ratedID "+ratedID+" to new value = "+newRating);


				if(type=="hours"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingHours: newRating}}, {upsert: true});
				}else if(type =="teacher"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingTeacher: newRating}}, {upsert: true});
				}
				else if(type =="difficulty"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingDifficulty: newRating}}, {upsert: true});
				}
				else if(type =="interest"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingInterest: newRating}}, {upsert: true});
				}
				else if(type =="usefulness"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingUsefulness: newRating}}, {upsert: true});
				}

		}
	},
	removeRating: function(ratedID, ratingType){
			if(!Meteor.userId()){
			console.log("Need to be connected");
		}else{

			console.log("Removing rating of this dude "+Meteor.userId()+"on this ratedID "+ratedID+" to new value = ");


				if(ratingType=="ratingHours"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingHours: null}}, {upsert: true});
				}else if(ratingType =="ratingTeacher"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingTeacher: null}}, {upsert: true});
				}
				else if(ratingType =="ratingDifficulty"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingDifficulty: null}}, {upsert: true});
				}
				else if(ratingType =="ratingInterest"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingInterest: null}}, {upsert: true});
				}
				else if(ratingType =="ratingUsefulness"){
						Ratings.update({userID: Meteor.userId(), ratedID: ratedID}, {$set: {ratingUsefulness: null}}, {upsert: true});
				}

		}
	}
});


Ratings.getRating = function(userID) {
		return Ratings.findOne({userID: userID});
	}