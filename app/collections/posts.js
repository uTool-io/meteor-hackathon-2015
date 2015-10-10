Posts = new Mongo.Collection('posts');

Posts.helpers({
    getUser: function () {
        return Meteor.users.findOne({_id: this.userId});
    }
});