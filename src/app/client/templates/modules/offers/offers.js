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
        var userId = Meteor.user()._id;

        return Offers.find({$or: [ { createdBy: userId }, { selectedItemOwner: userId} ], status: {pending: true, accepted: false, cancelled: false}}, {sort: {createdAt: -1}});
    },
    userOffers: function () {
        var userId = Meteor.user()._id;
        return Offers.find({createdBy: userId, status: {pending: true, accepted: false, cancelled: false}}, {sort: {createdAt: -1}});
    }
});
