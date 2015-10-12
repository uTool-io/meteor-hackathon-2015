Meteor.methods({

// @TODO: Trades schema
// create a createTrade method and call it in acceptOffer method
// Trades.insert({
//    offerId: offerId, //see offers for examples on getting data from this id
//    createdAt: new Date(),
//    tradeFinal: false  //feel free to change to a better var
// });

 createTrade: function(offerId) {
   Trades.insert({
     offerId: offerId,
     createdAt: new Date(),
     tradeVerdict: false
   })
 }
});
