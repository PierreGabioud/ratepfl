Comments = new Mongo.Collection('comments');

Meteor.methods(
    {
        newComment: function(courseID, comment, timestamp)
        {
            Comments.insert(
                {
                    courseID: courseID,
                    content: comment,
                    upvotes: 0,
                    downvotes: 0
                })
        }
    })