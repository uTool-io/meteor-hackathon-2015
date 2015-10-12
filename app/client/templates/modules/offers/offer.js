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

        var now = new Date(),
            userId = Meteor.user()._id,
            offerId = this._id

        Meteor.call('acceptOffer', offerId, function (error) {
            if (error) {
                console.error('acceptOffer method failed: ' + error.reason);
            } else {
              }
            });

// @TODO: send to trades/:tradeId + filter out offers if openTrade true
                FlowRouter.go('trades/:tradeId');
            }
        });
