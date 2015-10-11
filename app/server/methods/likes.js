Meteor.methods({
    likeItem: function (likedItemId, likedBy) {
        check(likedItemId, String);
        check(likedBy, String);

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
                likedItemId: likedItemId,
                likedBy: likedBy,
                likedAt: now
            });
        }
    },
    unlikeItem: function (itemId) {
        check(itemId, String);

        Items.remove(itemId);
    }
});