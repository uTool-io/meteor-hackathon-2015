Meteor.methods({

// @TODO: Trades schema
// create a createTrade method and call it in acceptOffer method
// Trades.insert({
//    offerId: offerId, //see offers for examples on getting data from this id
//    createdAt: new Date(),
//    tradeFinal: false  //feel free to change to a better var
// });

 createTrade: function(offerId) {
    check(offerId, String);
    var now = new Date();
        if (offerId) {
          Trades.insert({
             offerId: offerId,
             createdAt: now,
             tradeVerdict: false
           });
         } else {
              console.log('whats a matta w/ you?')
          }
      }
  });
