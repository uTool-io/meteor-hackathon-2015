Meteor.startup(function () {
    Items._ensureIndex({'ownerId': 1});
    Offers._ensureIndex({'offeredBy': 1});
    Trades._ensureIndex({'offerId': 1});
    Messages._ensureIndex({'senderId': 1});
});