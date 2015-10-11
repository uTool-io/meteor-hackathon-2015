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
                offeredBy: user._id,
                offeredAt: now,
                openTrade: false,
                cancelOffer: {}
            });
        }
    },
    acceptOffer: function (offerId) {
        check(offerId, String);

        var offer = Offers.findOne(offerId);

        if (offer && !offer.cancelOffer) {
            Offers.update(offerId, {$set: {openTrade: true}});
            //@TODO: insert offerId into trades collection
        }
        if (offer.cancelOffer) {
            throw new Meteor.Error('offer-cancelled', 'The offerId ' + offerId + ' was cancelled.');
        } else {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        }
    },
    cancelOffer: function (offerId, cancelAttributes) {
        check(offerId, String);

        var offer = Offers.findOne(offerId);

        if (offer) {
            Offers.update(offerId, {$set: {cancelOffer: cancelAttributes, openTrade: false}});
            //@TODO: if offerId === tradeId => remove from trades collection
        } else {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        }
    }
});