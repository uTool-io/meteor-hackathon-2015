Template.offers.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
    });
});

Template.offers.helpers({
    offers: function () {
        var allOffers = [],
            offers = Offers.find({}, {sort: {offeredAt: -1}}),
            userId = Meteor.user()._id;

        offers.forEach(function (offer) {
            var selectedItem = Items.findOne({_id: offer.selectedItemId}),
                offeredItem = Items.findOne({_id: offer.offeredItemId});

            offer.selectedItemOwnerId = selectedItem.ownerId;
            offer.selectedItemOwnerName = selectedItem.ownerName;
            offer.offeredItemOwnerId = offeredItem.ownerId;
            offer.offeredItemOwnerName = offeredItem.ownerName;

            allOffers.push(offer);
        });

        return allOffers;
    }
});
