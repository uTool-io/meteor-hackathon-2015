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
        var offerId = FlowRouter.getParam('offerId');

        return Messages.find({offerId: offerId}, {sort: {createdAt: -1}});
    }
});
