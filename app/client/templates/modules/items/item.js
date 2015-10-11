Template.item.events({
    'click .ui.card .image': function (event) {
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

        //@TODO: move to like button event
        //Meteor.call('likeItem', itemId, buyerId, function (error) {
        //    if (error) {
        //        console.error('Like Item method failed: ' + error.reason);
        //    } else {
        //        console.log('Item ' + itemId + ' added to likes by user ' + buyerId);
        //        // show confirmation of like
        //    }
        //});
    }
});