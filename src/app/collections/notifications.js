Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
                fieldNames.length == 1 && fieldNames[0] == 'read';
    }
});

createCommentNotification = function(comment) {
<<<<<<< HEAD
    var offer = Comments.findOne(offer.offerId);

    // @TODO: getReceiver() =>
=======

    var now = new Date(),
        user = Meteor.user(),
        offer = Offers.findOne(offer.offerId);

<<<<<<< HEAD
    if (currentUser !== selectedItemOwner) {
        receiverId =
        }
>>>>>>> 6f8b215afaeda301591b0e2824d8fb56dea9c39d
=======
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

>>>>>>> notifications
    // if currentUser/senderId !== selectedItemOwner
    //   receiverId = selectedItemOwner
    // else
    //   if currentUser/senderId !== offeredItemOwner
    //      receiverId = offeredItemOwner
<<<<<<< HEAD

<<<<<<< HEAD
    if (comment.senderId !== offer.selectedItemOwner || comment.senderId !== offer.selectedItemOwner) {

=======
>>>>>>> 6f8b215afaeda301591b0e2824d8fb56dea9c39d
    Notifications.insert({


        //Needs: offer user + selected user
        //    - Given I'm on the trade view
        //    - And I have a new message
        //    - Then I should be able to click into the message
        //    - And see:
        //        - Who sent it
        //        - The item it's about
        // */
        userId: offer.userId,
        itemId: offer.itemId,
        read: false
    });
    }
=======
>>>>>>> notifications
};
