Meteor.methods({
    sendMessage: function (messageAttributes) {
        check(messageAttributes, {
            offerId: String,
            message: String
        });

        var now = new Date(),
            user = Meteor.user(),
            offer = Offers.findOne(messageAttributes.offerId);

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to send a message.');
        }
        if (!offer) {
            throw new Meteor.Error('trade-id-undefined', 'This offer is no longer open, cannot send the message.');
        }
        if (!messageAttributes.message) {
            throw new Meteor.Error('no-message', 'You need to write a message before sending.');
        } else {
            var message = _.extend(_.pick(messageAttributes, 'offerId', 'message'), {
                senderId: user._id,
                senderName: user.profile.name,
                createdAt: now
            });

            var messageId = Messages.insert(message);

            return messageId;
        }
    }
});
