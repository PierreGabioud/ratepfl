Reports = new Mongo.Collection('reports');

Meteor.methods(
    {
        reportItem: function(userID, itemID)
        {
            Reports.insert(
                {
                    userID: userID,
                    itemID: itemID,
                    timestamp: new Date().getTime()
                });
        },
        itemDeleted: function(itemID)
        {
            Reports.remove({itemID: itemID});
        }
    });