Meteor.methods({
    postComment: function (commentAttributes) {
        check(commentAttributes, {
            offerId: String,
            comment: String
        });

        var now = new Date(),
            user = Meteor.user(),
            offer = Offers.findOne(commentAttributes.offerId);

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to send a message.');
        }
        if (!offer) {
            throw new Meteor.Error('offer-id-undefined', 'This offer is no longer open, cannot send the message.');
        }
        if (!commentAttributes.comment) {
            throw new Meteor.Error('no-message', 'You need to write your comment before posting.');
        } else {
            var comment = _.extend(_.pick(commentAttributes, 'offerId', 'comment'), {
                senderId: user._id,
                senderName: user.profile.name,
                createdAt: now
            });



            var commentId = Comments.insert(comment);

            return commentId;
        }
    }
});
