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
    //Upvotes.find({userID: userID, commentID: commentID}).fetch();

    Upvotes.insert(
        {
            userID: userID,
            commentID: commentID,
            timestamp: new Date().getTime(),
            type: vote
        });

    Comments.update({_id: commentID}, { $inc: { upvotes: vote, downvotes: -vote }});
};