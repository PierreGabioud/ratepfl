Comments = new Mongo.Collection('comments');

Meteor.methods(
    {
        newComment: function(courseID, comment)
        {
            Comments.insert(
                {
                    courseID: courseID,
                    userID: Meteor.userId(),
                    content: comment,
                    timestamp: new Date().getTime(),
                    upvotes: 0,
                    downvotes: 0
                })
        }
    })