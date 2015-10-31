Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
                fieldNames.length == 1 && fieldNames[0] == 'read';
    }
});

createCommentNotification = function(comment) {
    var offer = Comments.findOne(offer.offerId);

    // @TODO: getReceiver() =>
    // if currentUser/senderId !== selectedItemOwner
    //   receiverId = selectedItemOwner
    // else
    //   if currentUser/senderId !== offeredItemOwner
    //      receiverId = offeredItemOwner

    if (comment.senderId !== offer.selectedItemOwner || comment.senderId !== offer.selectedItemOwner) {

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
};
