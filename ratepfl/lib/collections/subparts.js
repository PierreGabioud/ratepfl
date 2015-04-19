Subparts = new Mongo.Collection('subparts');

Meteor.methods(
    {
        addSubpart: function(courseID, name)
        {
            if (name == undefined || name.length == 0)
                return;

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
            var lastReport = Reports.find({itemID: subpartID, userID: Meteor.userId()}).fetch()

            if(lastReport.length > 0)
                return;

            Meteor.call("reportItem", Meteor.userId(), subpartID);

            Subparts.update({_id: subpartID}, { $inc: { reports: 1}});

            var curr = Subparts.find({_id: subpartID}).fetch();

            if(curr.length > 0 && curr[0].reports >= 3)
            {
                Subparts.remove({_id: subpartID});
                Comments.remove({subpartID: subpartID});

                Meteor.call("itemDeleted", subpartID);


                // for client only, return to the general section
                if (Meteor.isClient)
                    Session.set(KEY_SUBPART, undefined);
            }
        }
    });
