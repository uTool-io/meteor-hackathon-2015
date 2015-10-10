Items = new Mongo.Collection('items');

Items.helpers({
    'items': function() {
        return Items.find({}, {sort: {submitted: -1}});
    },
    getUser: function () {
        return Meteor.users.findOne({_id: this.userId});
    }
});