Items = new Mongo.Collection('items');

Items.helpers({
    getUser: function () {
        return Meteor.users.findOne({_id: this.userId});
    }
});