Meteor.methods({
    createOffer: function (selectedItem, offeredItem) {
        check(selectedItem, {
            selectedItemId: String,
            selectedItemOwner: String,
            selectedItemOwnerName: String,
            selectedItemImage: String,
            selectedItemTitle: String,
        });
        check(offeredItem, {
            offeredItemId: String,
            offeredItemOwner: String,
            offeredItemOwnerName: String,
            offeredItemImage: String,
            offeredItemTitle: String,
        });

        var now = new Date(),
            duplicateOffer = Offers.findOne({selectedItemId: selectedItem.selectedItemId, offeredItemId: offeredItem.offeredItemId, status: {cancelled: false}}),
            user = Meteor.user();

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
    acceptOffer: function (offerId) {
        check(offerId, String);

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

            // Moved this call to client in offer event - click .accept.offer.button
            // nested inside the acceptOffer call - when it passes, it calls createTrade
            // if that passes, it routes to /trade
            // you can remove this after reading
            //Meteor.call('createTrade', offerId, function (error) {
            //  console.error('createTrade method failed: ' + error.reason);
            //});
        }
    },
    cancelOffer: function (offerId, cancelAttributes) {
        check(offerId, String);

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
