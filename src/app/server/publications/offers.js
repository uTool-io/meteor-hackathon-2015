Meteor.publish('offers', function () {
    return Offers.find();
});

Meteor.publish('offer', function (offerId) {
    check(offerId, String);
    return Offers.find({_id: offerId});
});
