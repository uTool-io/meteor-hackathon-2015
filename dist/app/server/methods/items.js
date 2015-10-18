Meteor.methods({
    postItem: function (itemAttributes) {
        check(itemAttributes, Object);

        var now = new Date(),
            user = Meteor.user(),
            duplicateItem = Items.findOne({$or: [{title: itemAttributes.title}, {image: itemAttributes.image}]});

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to login to post an item.');
        }
        if (!itemAttributes.title) {
            throw new Meteor.Error('item-needs-title', 'You need to create a title for your item.');
        }
        if (!itemAttributes.image) {
            throw new Meteor.Error('item-needs-image', 'You need an image for your item.');
        }
        if (duplicateItem) {
            throw new Meteor.Error('item-attributes-already-exist', 'One or more of your item attributes already exist.');
        } else {
            var item = _.extend(_.pick(itemAttributes, 'title', 'image'), {
                ownerId: user._id,
                ownerName: user.profile.name,
                submitted: now,
                likes: 0
            });

            var itemId = Items.insert(item);

            return itemId;
        }
    },
    updateItem: function () {
        // @TODO: create updateItem method and modules
    },
    removeItem: function () {
        // @TODO: create removeItem method and event
        // add removed object to itemId
        // with date object removed
        // $not: {removed: typeof 'object'}
        // else remove === false
    }
});