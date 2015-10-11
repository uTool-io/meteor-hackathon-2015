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
                offerredBy: user._id,
                offeredAt: now,
                openTrade: false,
                cancelOffer: {}
            });
        }
    },
    acceptOffer: function (offerId) {
        check(offerId, String);

        var offer = Offers.findOne(offerId);

        if (offer) {
            Offers.update(offerId, {$set: {openTrade: true}});
            //@TODO: insert offerId into trades collection
        } else {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        }
    },
    cancelOffer: function (offerId, cancelAttributes) {
        check(offerId, String);

        var offer = Offers.findOne(offerId);

        if (offer) {
            Offers.update(offerId, {$set: {cancelOffer: cancelAttributes}});
            //@TODO: if offerId === tradeId => remove from trades collection
        } else {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        }
    }
});