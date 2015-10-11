// Meteor.methods({
//
//   // Scenario: Accept a trade
//   //
//   //   Given I have a new trade
//   //   When I accept the offered item
//   //   Then the item should have a status of 'closed' and "successful"
//
//   acceptTrade: function(offerId, date) {
//     //   Given I have a new trade
//     //   When I accept the offered item
//     //   Then the item should have a status of 'closed' and "successful"
//     openTrade = Offers.findOne(openTrade);
//     if openTrade = true {
//       Trades.update()
//     }
//     confirmTrade =
//     if confirm = 1 {
//       Offers.insert({
//           op
//       })
//     }
//   }
//
//   // Scenario: Decline a trade
//   //
//   //   Given I have a new trade
//   //   When I decline the offered item
//   //   Then the item should have a status of 'closed' and 'denied'
//
//     createOffer: function (selectedItemId, offeredItemId) {
//         check(selectedItemId, String);
//         check(offeredItemId, String);
//
//         var now = new Date(),
//             user = Meteor.user();
//
//         if (!user) {
//             throw new Meteor.Error('user-not-logged-in', 'You need to login to make an offer.');
//         } else {
//             Offers.insert({
//                 selectedItemId: selectedItemId,
//                 offeredItemId: offeredItemId,
//                 offeredBy: user._id,
//                 offeredAt: now,
//                 openTrade: false,
//                 cancelOffer: {}
//             });
//         }
//     },
//     acceptOffer: function (offerId) {
//         check(offerId, String);
//
//         var offer = Offers.findOne(offerId);
//
//         if (offer) {
//             Offers.update(offerId, {$set: {openTrade: true}});
//             //@TODO: insert offerId into trades collection
//         } else {
//             throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
//         }
//     },
//     cancelOffer: function (offerId, cancelAttributes) {
//         check(offerId, String);
//
//         var offer = Offers.findOne(offerId);
//
//         if (offer) {
//             Offers.update(offerId, {$set: {cancelOffer: cancelAttributes}});
//             //@TODO: if offerId === tradeId => remove from trades collection
//         } else {
//             throw new Meteor.Error('undefined-offer-id', 'The offerId ' + offerId + ' cannot be found in the Offers collection.');
//         }
//     }
// });
