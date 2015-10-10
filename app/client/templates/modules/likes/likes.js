Template.likes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('likes');
    });
});

Template.likes.helpers({
    likes: function () {
        var likes = [],
            likedItems = Likes.find({}, {sort: {liked: -1}});

        likedItems.forEach(function (likedItem) {
            var item = Items.findOne({_id: likedItem.itemId});

            likedItem.title = item.title;
            likedItem.image = item.image;

            likes.push(likedItem);
        });

        console.log(likes);

        return likes;
    }
});