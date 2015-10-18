Meteor.publish('offers', function () {
    //check(selector, Object);
    return Offers.find({});
});

Meteor.publish('userOffers', function (userId) {
    check(offerId, String);
    return Offers.find({createdBy: userId});
});

Meteor.publish('offer', function (offerId) {
    check(offerId, String);
    return Offers.find({_id: offerId});
});
