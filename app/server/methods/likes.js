Meteor.methods({
    likeItem: function (itemId, buyerId) {
        check(itemId, String);
        check(buyerId, String);

        var now = new Date(),
            user = Meteor.user(),
            existingItem = Likes.findOne({itemId: itemId});

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to like an item.');
        }
        //if (itemId === existingItemId) {
        //    throw new Meteor.Error('item-already-liked', 'You already liked this item.');
        //}
        if (itemId === undefined) {
            throw new Meteor.Error('item-id-undefined', 'Item does not exist in Items Collection.');
        } else {
            Likes.insert({
                itemId: itemId,
                buyerId: buyerId,
                liked: now
            });
        }
    },
    unlikeItem: function (itemId) {
        check(itemId, String);

        Items.remove(itemId);
    }
});