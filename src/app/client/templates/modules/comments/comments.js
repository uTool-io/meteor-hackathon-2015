Template.comments.onCreated(function () {
    var self = this;
    self.autorun(function () {
        // @TODO subscribe by userId
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
        self.subscribe('comments');
    });
});

Template.comments.helpers({
    comments: function () {
        var offerId = FlowRouter.getParam('offerId');

        return Comments.find({offerId: offerId}, {sort: {createdAt: -1}});
    },
    commentsCount: function() {
        var offerId = FlowRouter.getParam('offerId');

        return Comments.find({offerId: offerId}).count();
    }
});
