Meteor.publish('offers', function () {
    return Offers.find();
});

Meteor.publish('userOffers', function (userId) {
    return Offers.find({createdBy: userId});
});

Meteor.publish('offer', function (offerId) {
    check(offerId, String);
    return Offers.find({_id: offerId});
});
