Meteor.publish('items', function () {
    return Items.find();
});

Meteor.publish('userItems', function (ownerId) {
    return Items.find({ownerId: ownerId});
});

Meteor.publish('item', function (itemId) {
    check(itemId, String);
    return Items.find({_id: itemId});
});