Meteor.publish('items', function () {
    return Items.find();
});

Meteor.publish('userItems', function (userId) {
    return Items.find({ownerId: userId});
});

Meteor.publish('item', function (itemId) {
    check(itemId, String);
    return Items.find({_id: itemId});
});
