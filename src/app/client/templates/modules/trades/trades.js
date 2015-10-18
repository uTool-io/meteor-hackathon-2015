Template.trades.onCreated(function () {
    var self = this;
    self.autorun(function () {
        // @TODO subscribe by userId
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});

Template.trades.helpers({
    trades: function () {
        var userId = Meteor.user()._id,
            trades = Trades.find({ownerId: userId, tradeVerdict: false}, {sort: {createdAt: -1}}),
            offers = [],
            items = [];

        trades.forEach(function (trade) {
            var offerId = Offers.findOne({_id: trade.offerId});

            trade.selectedItemId = offerId.selectedItemId;
            trade.offeredItemId = offerId.offeredItemId;

            offers.push(trade);
        });

        offers.forEach(function (offer) {
            var selectedItem = Items.findOne({_id: offer.selectedItemId}),
                offeredItem = Items.findOne({_id: offer.offeredItemId});

            offer.selectedItemTitle = selectedItem.title;
            offer.selectedItemImage = selectedItem.image;
            offer.selectedItemOwnerId = selectedItem.ownerId;
            offer.selectedItemOwnerName = selectedItem.ownerName;
            offer.offeredItemTitle = offeredItem.title;
            offer.offeredItemImage = offeredItem.image;
            offer.offeredItemOwnerId = offeredItem.ownerId;
            offer.offeredItemOwnerName = offeredItem.ownerName;

            items.push(offer);
        });

        return items;
    }
});