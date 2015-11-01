Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
                fieldNames.length == 1 && fieldNames[0] == 'read';
    }
});

createCommentNotification = function(comment) {

    // @TODO: getReceiver() =>

    var now = new Date(),
        user = Meteor.user(),
        offer = Offers.findOne(offer.offerId);

    if (currentUser !== selectedItemOwner) {
        receiverId =
        }
    // if currentUser/senderId !== selectedItemOwner
    //   receiverId = selectedItemOwner
    // else
    //   if currentUser/senderId !== offeredItemOwner
    //      receiverId = offeredItemOwner

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
