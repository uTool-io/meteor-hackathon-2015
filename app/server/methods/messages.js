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
        } else {
            var message = _.extend(_.pick(messageAttributes, 'message', 'peerId'), {
                ownerId: user._id,
                createdAt: now
            });

            var messageId = Messages.insert(message);

            return messageId;
        }
    }
});