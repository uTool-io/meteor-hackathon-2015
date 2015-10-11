Template.tradeItem.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});

Template.tradeItem.helpers({
    trades: function () {
      return Trades.find();
    }
});

Template.tradeItem.events({
  'click #complete-trade': function(event) {
    event.preventDefault();
    Trades.update({}, {set: {completedTrade: 'true'}})
    var tradeStatus = $('#close-trade').attr('id')
    console.log(tradeStatus)
  }
});
