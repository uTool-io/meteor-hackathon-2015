Template.tradeDetails.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var tradeId = FlowRouter.getParam('tradeId');
        // @TODO subscribe by userId
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});