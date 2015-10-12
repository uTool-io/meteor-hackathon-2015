Meteor.methods({
    createTrade: function (offerId) {
        check(offerId, String);
        var now = new Date(),
            user = Meteor.user();

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to create a trade.');
        }
        if (!offerId) {
            throw new Meteor.Error('offerId-does-not-exist', 'The offerId ' + offerId + ' no longer exists in the Offers collection');
        } else {
            Trades.insert({
                offerId: offerId,
                ownerId: user._id,
                createdAt: now,
                tradeVerdict: false
            });
        }
    }
});
