Subparts = new Mongo.Collection('subparts');

Meteor.methods(
    {
        addSubpart: function(courseID, name)
        {
            Subparts.insert(
                {
                    userID: Meteor.userId(),
                    courseID: courseID,
                    timestamp: new Date().getTime(),
                    name: name,
                    reports: 0
                });
        },
        reportSubpart: function(subpartID)
        {
            var curr = Subparts.find({_id: subpartID}).fetch();

            Subparts.update({_id: subpartID}, { $inc: { reports: 1}});

            if(curr.length > 0 && curr[0].reports >= 3)
            {
                Subparts.remove({_id: subpartID});
            }
        }
    });
