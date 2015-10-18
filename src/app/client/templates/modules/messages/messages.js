Template.messages.onCreated(function () {
    var self = this;
    self.autorun(function () {
        // @TODO subscribe by userId
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
        self.subscribe('messages');
    });
});

Template.messages.helpers({
    messages: function () {
        var userId = Meteor.user()._id;

        return Messages.find({senderId: userId}, {sort: {createdAt: -1}});
    }
});
