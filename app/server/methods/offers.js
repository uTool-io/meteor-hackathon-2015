Meteor.methods({
    createOffer: function (selectedItemId, offeredItemId) {
        check(selectedItemId, String);
        check(offeredItemId, String);

        var now = new Date(),
            user = Meteor.user();

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to make an offer.');
        } else {
            Offers.insert({
                selectedItemId: selectedItemId,
                offeredItemId: offeredItemId,
                offeredAt: now,
                tradeItems: false
            });
        }
    },
    acceptOffer: function (offerId) {
        check(offerId, String);

        var offer = Offers.findOne(offerId);

        if (offer) {
            Offers.update(offerId, {$set: {tradeItems: true}});
            // insert to trades collection
        } else {
            throw new Meteor.Error('offer-does-not-exist', 'This offer no longer exists.');
        }
    },
    cancelOffer: function (offerId) {
        check(offerId, String);

        Offers.remove(offerId);
    }
});