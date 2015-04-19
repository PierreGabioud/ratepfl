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
        }
    })