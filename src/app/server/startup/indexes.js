Meteor.startup(function () {
    Items._ensureIndex({'ownerId': 1});
    Offers._ensureIndex({'createdBy': 1});
    Messages._ensureIndex({'senderId': 1});
});
