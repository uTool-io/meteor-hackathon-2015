Template.offers.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});

Template.offers.helpers({
    offers: function () {
        var userId = Meteor.user()._id,
            objectType = typeof 'object',
            offers = Offers.find({selectedItemOwner: userId, openTrade: false, cancelOffer: 'undefined', $or: [ {openTrade: false}, {cancelOffer: objectType} ]}, {sort: {offeredAt: -1}}),
            allOffers = [];

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

            allOffers.push(offer);
        });

        return allOffers;
    },
    userOffers: function () {
        var userId = Meteor.user()._id;
        return Offers.find({createdBy: userId, status: {pending: true, accepted: false, cancelled: false}}, {sort: {createdAt: -1}});
    }
});
