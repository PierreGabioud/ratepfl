Upvotes = new Mongo.Collection('upvotes');

Meteor.methods(
    {
        downvote: function(userID, commentID)
        {
            setVote(userID, commentID, -1)
        },

        upvote: function(userID, commentID)
        {
            setVote(userID, commentID, 1)
        }
    });

setVote = function(userID, commentID, vote)
{
    var previous = Upvotes.find({userID: userID, commentID: commentID}).fetch();

    if (previous.length > 0)
    {
        var previousVote = previous[0].type;

        if (previousVote != vote)
        {
            Upvotes.update({userID: userID, commentID: commentID}, { $set: {type: vote}});
            Comments.update({_id: commentID}, { $inc: { upvotes: vote, downvotes: -vote }});
        }
        else
        {
            Upvotes.remove({userID: userID, commentID: commentID})
            Comments.update({_id: commentID}, { $inc: { upvotes: vote==1? -1:0, downvotes:  vote==-1? -1:0 }});
        }

    }
    else
    {
        Upvotes.insert(
            {
                userID: userID,
                commentID: commentID,
                timestamp: new Date().getTime(),
                type: vote
            });


        Comments.update({_id: commentID}, { $inc: { upvotes: vote==1? 1:0, downvotes:  vote==-1? 1:0 }});

    }


};