Meteor.methods({
    likeItem: function (itemId, buyerId) {
        check(itemId, String);
        check(buyerId, String);

        var now = new Date();

        if (itemId === null) {
            throw new Meteor.Error('item-must-exist', 'Item does not exist in Items Collection.');
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