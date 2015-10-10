Template.items.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('items');
    });
});

Template.items.helpers({
    items: function () {
        return Items.find({}, {sort: {submitted: -1}});
    }
});