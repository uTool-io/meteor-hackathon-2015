Meteor.methods({
    sendMessage: function (messageAttributes) {
        check(messageAttributes, Object);

        var now = new Date(),
            user = Meteor.user();

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to send a message.');
        }
        if (!messageAttributes.message) {
            throw new Meteor.Error('no-message', 'You need to write a message before sending.');
        }
        if (!messageAttributes.offerId) {
            throw new Meteor.Error('trade-id-undefined', 'This offer is no longer open, cannot send the message.');
        }
        if (!messageAttributes.receiverId) {
            throw new Meteor.Error('receiver-id-undefined', 'The user you\'re attempting to message does not exist.');
        } else {
            var message = _.extend(_.pick(messageAttributes, 'message', 'offerId', 'receiverId', 'receiverName'), {
                senderId: user._id,
                senderName: user.profile.name,
                createdAt: now
            });

            var messageId = Messages.insert(message);

            return messageId;
        }
    }
});
