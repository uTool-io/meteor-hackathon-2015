Template.offer.events({
    'click .cancel.offer.button': function (event) {
        event.preventDefault();

        var now = new Date(),
            userId = Meteor.user()._id,
            offerId = this._id,

            offer = document.getElementById(offerId),
            cancelAttributes = {
                cancelledBy: userId,
                cancelledAt: now
            };
                        console.log (offerId);
        Meteor.call('cancelOffer', offerId, cancelAttributes, function (error) {
            if (error) {
                console.error('cancelOffer method failed: ' + error.reason);
            } else {
                console.log('Cancelled offer ' + offerId);
            }
        });
    },
    'click .accept.offer.button': function (event) {
        event.preventDefault();

        // var offerId = this._id;
        // console.log(offerId);
        // check(offerId, String);
        offerId = Meteor.user()._id;
        console.log(offerId);

        Meteor.call('acceptOffer', offerId, function (error) {
            if (error) {
                console.error('acceptOffer method failed: ' + error.reason);
            } else {

                Trades.update({
                  offerId: offerId,
                  createdAt: new Date(),
                  tradeVerdict: false
                });
                console.log(offerId);
                console.log(createdAt);
                console.log(tradeVerdict);

// @TODO: send to trades/:tradeId + filter out offers if openTrade true
                FlowRouter.go('trades/:tradeId');
            }
            ;
        });
    }
});
