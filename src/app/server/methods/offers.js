Meteor.methods({
    createOffer: function (selectedItem, offeredItem) {
        check(selectedItem, {
            selectedItemId: String,
            selectedItemOwner: String,
            selectedItemOwnerName: String,
            selectedItemImage: String,
            selectedItemTitle: String
        });
        check(offeredItem, {
            offeredItemId: String,
            offeredItemOwner: String,
            offeredItemOwnerName: String,
            offeredItemImage: String,
            offeredItemTitle: String
        });

        var now = new Date(),
            user = Meteor.user(),
            duplicateOffer = Offers.findOne({selectedItemId: selectedItem.selectedItemId, offeredItemId: offeredItem.offeredItemId, status: {cancelled: false}});

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to make an offer.');
        }
        if (duplicateOffer) {
            throw new Meteor.Error('this-offer-already-exists', 'This offer was already made.');
        } else {
            var offer = _.extend(selectedItem, offeredItem, {
                createdBy: user._id,
                createdAt: now,
                status: {
                    pending: true,
                    accepted: false,
                    cancelled: false
                }
            });

            var offerId = Offers.insert(offer);

            return {
                _id: offerId
            };
        }
    },
    acceptOffer: function (offerId, offerAttributes) {
        check(offerId, String);

        // @TODO: refactor to match new createOffer method
        var user = Meteor.user(),
            offer = Offers.findOne(offerId),
            offerStatus = typeof offer.cancelOffer,
            tradeStatus = offer.openTrade;

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to accept the offer.');
        }
        if (!offer) {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        }
        if (offerStatus === 'object') {
            throw new Meteor.Error('offer-cancelled', 'The offerId ' + offerId + ' was already cancelled.');
        }
        if (tradeStatus) {
            throw new Meteor.Error('offer-trade-open', 'The offerId ' + offerId + ' is already open for trading in the Trades collection');
        } else {
            Offers.update(offerId, {$set: {openTrade: true}});
        }
    },
    counterOffer: function (offerId, offerAttributes) {
        // @TODO: create counterOffer method and event
    },
    cancelOffer: function (offerId, cancelAttributes) {
        check(offerId, String);

        // @TODO: refactor to match new createOffer method

        var user = Meteor.user(),
            offer = Offers.findOne(offerId);

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to cancel the offer.');
        }
        if (!offer) {
            throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
        } else {
            Offers.update(offerId, {$set: {cancelOffer: cancelAttributes, openTrade: false}});
            //@TODO: if offerId === tradeId => remove from trades collection
        }
    }
});
