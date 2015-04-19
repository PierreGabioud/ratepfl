Comments = new Mongo.Collection('comments');

Meteor.methods(
    {
        newComment: function(courseID, comment, subpartID)
        {
            if (comment == undefined || comment.length == 0)
                return;

            Comments.insert(
                {
                    courseID: courseID,
                    userID: Meteor.userId(),
                    subpartID: subpartID,
                    content: comment,
                    timestamp: new Date().getTime(),
                    upvotes: 0,
                    downvotes: 0
                })
        },
        deleteComment: function(commentID)
        {
            if(Comments.find({userID: Meteor.userId(), _id: commentID}).count() > 0)
                Comments.remove({_id: commentID});
        }
    })