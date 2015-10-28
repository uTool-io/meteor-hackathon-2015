Template.messageForm.events({
    'submit .ui.message.form': function (event) {
        event.preventDefault();

        var offerId = FlowRouter.getParam('offerId'),
            $message = $(event.target).find('.field .message'),
            messageAttributes = {
                offerId: offerId,
                message: $message.val()
            };

        // @TODO: offerId determines where messages will show
        console.log(messageAttributes);
    }
});
