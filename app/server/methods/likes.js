Meteor.methods({
    likeItem: function (itemId, userId) {
        check(itemId, String);
        check(userId, String);

        if (itemId === null) {
            throw new Meteor.Error('item-must-exist', 'Item does not exist in Items Collection.');
        } else {
            Likes.insert({
                itemId: itemId,
                userId: userId
            });
        }
    },
    dislikeItem: function (itemId) {
        check(itemId, String);

        Items.remove(itemId);
    }
});