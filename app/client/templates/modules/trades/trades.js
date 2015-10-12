Template.trades.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('trades');
    });
});

Template.trades.helpers({
    trades: function () {
        var userId = Meteor.user()._id;
        return Trades.find({ownerId: userId, tradeVerdict: false}, {sort: {createdAt: -1}});
    }
});