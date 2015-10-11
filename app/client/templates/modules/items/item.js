Template.item.events({
    'click #toggleCard': function (event) {
        event.preventDefault();

        console.log('toggle card helper based on id ' + this._id);
    },
    'click #likeItem': function (event) {
        //@TODO: Create a likeItem button in item template
        event.preventDefault();

        var selectedItemId = this._id,
            offeredItemId = 'test';

        Meteor.call('likeItem', itemId, buyerId, function (error) {
            if (error) {
                console.error('Like Item method failed: ' + error.reason);
            } else {
                console.log('Item ' + itemId + ' added to likes by user ' + buyerId);
                // show confirmation of like
            }
        });
    },
    'click #createOffer': function (event) {
        //@TODO: Move this event to userItem template
        event.preventDefault();

        var selectedItemId = this._id,
            offeredItemId = 'test';

        Meteor.call('createOffer', selectedItemId, offeredItemId, function (error) {
            if (error) {
                console.error('Create Offer method failed: ' + error.reason);
            } else {
                console.log('Offered item ' + offeredItemId + 'for selected item ' + selectedItemId);
            }
        });
    }
});