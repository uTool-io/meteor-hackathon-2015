Meteor.methods({
    createCommentNotification: function (commentAttributes) {

        console.log('method invoked, SAHN!');

        var createdAt = new Date(),
            user = Meteor.user(),
            offer = Offers.findOne(commentAttributes.offerId);
            comment = Comments.findOne();
        //console.log(user);
        //console.log(comment.senderId);
        console.log(offer);
        console.log(offer.selectedItemOwner);
        console.log(offer.offeredItemOwner);

        /*
        If the current user is the sender,
        Then the receiver is the ____

        If the sender is equal to the selectedItemOwner
        Then the receiver is offeredItemOwner

        If the sender is equal to the offeredItemOwner
        Then the receiver is selectedItemOwner

        selectedItemOwner = Person who selected item
        offeredItemOwner = Person who offered the item



        */
        if (senderId !== offer.selectedItemOwner) {
            console.log('the receiver is' + offer.selectedItemOwnerName);

            Notifications.insert({
                receiverId: offer.selectedItemOwner,
                receiverName: offer.selectedItemOwnerName,
                commenterId: offer.offeredItemId,
                commenterName: offer.offeredItemOwnerName,
                read: false
            });
        }
        else {
            if (user !== offer.offeredItemOwner) {
                console.log('the sender is offer.offeredItemOwnerName');

                Notifications.insert({
                    receiverId: offer.offeredItemOwner,
                    receiverName: offer.offeredItemOwnerName,
                    commenterId: offer.selectedItemId,
                    commenterName: offer.selectedItemOwnerName,
                    read: false
                });
            }

        }
    }
});
