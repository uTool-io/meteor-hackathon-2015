Template.messageForm.events({
    'submit .ui.message.form': function (event) {
        event.preventDefault();

        var offerId = FlowRouter.getParam('offerId'),
            $message = $(event.target).find('.field .message'),
            messageAttributes = {
                offerId: offerId,
                message: $message.val()
            };

        Meteor.call('sendMessage', messageAttributes, function(error) {
           if (error) {
               return console.error(error.reason);
           } else {
               $message.val('');
           }
        });
    }
});
