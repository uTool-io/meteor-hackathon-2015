Template.messageForm.events({
    'submit .ui.message.form': function (event) {
        event.preventDefault();

        var $message = $(event.target).find('.field .message'),
            offerId = FlowRouter.getParam('offerId'),
            offer = Offers.findOne(offerId),
            receiverId = offer.selectedItemOwner,
            receiverName = offer.selectedItemOwnerName,
            messageAttributes = {
                message: $message.val(),
                offerId: offerId,
                receiverId: receiverId,
                receiverName: receiverName
            };

        // @TODO: check if current user is either selectedItemOwner or offeredItemOwner
        // to determine who the receiver of message will be
        console.log(messageAttributes);
    }
});
