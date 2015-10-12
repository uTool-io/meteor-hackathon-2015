Template.tradePreview.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});

Template.tradePreview.helpers({
    trades: function () {
      return Trades.find();
    }
});
