Meteor.methods({
    likeItem: function (itemId, userId) {
        check(itemId, String);
        check(userId, String);

        var created = new Date();

        if (itemId === null) {
            throw new Meteor.Error('item-must-exist', 'Item does not exist in Items Collection.');
        } else {
            Likes.insert({
                itemId: itemId,
                userId: userId,
                created: created
            });
        }
    },
    dislikeItem: function (itemId) {
        check(itemId, String);

        Items.remove(itemId);
    }
});