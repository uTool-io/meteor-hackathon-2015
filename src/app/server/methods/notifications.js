Meteor.methods({
    createCommentNotification: function(commentAttributes) {

        console.log('method invoked, SAHN!');

        //var now = new Date(),
        //    user = Meteor.user(),
        //    offer = Offers.findOne(offer.offerId);
        //
        //if (user !== offer.selectedItemOwner) {
        //
        //    Notifications.insert({
        //        receiverId: offer.selectedItemOwner,
        //        receiverName: offer.selectedItemOwnerName,
        //        commenterId: offer.offeredItemId,
        //        commenterName: offer.offeredItemOwnerName,
        //        read: false
        //    });
        //}
        //if (user != offer.offeredItemOwner) {
        //    Notifications.insert({
        //        receiverId: offer.offeredItemOwner,
        //        receiverName: offer.offeredItemOwnerName,
        //        commenterId: offer.selectedItemId,
        //        commenterName: offer.selectedItemOwnerName,
        //        read: false
        //    });
        //}

    // if currentUser/senderId !== selectedItemOwner
    //   receiverId = selectedItemOwner
    // else
    //   if currentUser/senderId !== offeredItemOwner
    //      receiverId = offeredItemOwner
    }
});
