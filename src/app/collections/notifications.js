Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
                fieldNames.length == 1 && fieldNames[0] == 'read';
    }
});
<<<<<<< HEAD

createCommentNotification = function(comment) {
    console.log("invocation worked");
    var offer = Comments.findOne(offer.offerId);

    var now = new Date(),
        user = Meteor.user(),
        offer = Offers.findOne(offer.offerId);

    if (user !== offer.selectedItemOwner) {

        Notifications.insert({
            receiverId: offer.selectedItemOwner,
            receiverName: offer.selectedItemOwnerName,
            commenterId: offer.offeredItemId,
            commenterName: offer.offeredItemOwnerName,
            read: false
        });
    }
    if (user != offer.offeredItemOwner) {
        Notifications.insert({
            receiverId: offer.offeredItemOwner,
            receiverName: offer.offeredItemOwnerName,
            commenterId: offer.selectedItemId,
            commenterName: offer.selectedItemOwnerName,
            read: false
        });
    }
};
=======
>>>>>>> notifications
