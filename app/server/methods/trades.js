Meteor.methods({

 createTrade: function(offerId) {
    check(offerId, String);

    var now = new Date();
        offer = Offers.findOne(offerId);

          Trades.insert({
             offerId: offerId,
             createdAt: now,
             tradeVerdict: false
           });
      }
  });
