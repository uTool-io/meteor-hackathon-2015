Template.tradeItem.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
    });
});
