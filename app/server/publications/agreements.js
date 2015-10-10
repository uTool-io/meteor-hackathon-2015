Meteor.publish('agreements', function () {
    return Agreements.find();
});