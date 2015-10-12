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

        Meteor.call('cancelOffer', offerId, cancelAttributes, function (error) {
            if (error) {
                console.error('cancelOffer method failed: ' + error.reason);
            } else {
                console.log('Cancelled offer ' + offerId);
            }
        });
    },
    'click .counter.offer.button': function (event) {
        event.preventDefault();

        var offerId = this._id;

        console.log('counter offer clicked ' + offerId);

        // @TODO: toggle offerModal true
        // if cancelCounter => offerModal false
        // if createCounter => call createOffer method
        //     reverse selectedItemId with offeredItemId
        //     call cancelOffer method on offerId
    },
    'click .accept.offer.button': function (event) {
        event.preventDefault();

        var now = new Date(),
            userId = Meteor.user()._id,
            offerId = this._id;

        Meteor.call('acceptOffer', offerId, function (error) {
            if (error) {
                console.error('acceptOffer method failed: ' + error.reason);
            } else {
                Meteor.call('createTrade', offerId, function (error) {
                    if (error) {
                       console.error('createTrade method failed: ' + error.reason);
                    } else {
                        // @TODO: send to trades/:tradeId + filter out offers if openTrade true
                        FlowRouter.go('trades/:tradeId');
                    }
                });
            }
        });
    }
});
