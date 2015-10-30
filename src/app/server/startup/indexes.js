Meteor.startup(function () {
    Items._ensureIndex({'ownerId': 1});
    Offers._ensureIndex({'createdBy': 1});
    Comments._ensureIndex({'offerId': 1});
});
