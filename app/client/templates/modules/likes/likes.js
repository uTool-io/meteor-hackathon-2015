Template.likes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('likes');
    });
});

Template.likes.helpers({
    likes: function () {
        return Likes.find({}, {sort: {liked: -1}});
    }
});