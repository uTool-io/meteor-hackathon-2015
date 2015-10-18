Template.userItems.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('userItems', this.userId);
    });
});

Template.userItems.helpers({
    userItems: function () {
        var userId = Meteor.user()._id;
        return Items.find({ownerId: userId}, {sort: {submitted: -1}});
    }
});