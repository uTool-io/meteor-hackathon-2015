Template.items.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('items');
    });
});

Template.items.helpers({
    items: function () {
        var userId = Meteor.user()._id;

        return Items.find({ownerId: { $not: userId}}, {sort: {submitted: -1}});
    }
});