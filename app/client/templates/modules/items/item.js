Template.item.events({
    'click #toggleOfferModal': function (event) {
        event.preventDefault();

        Session.set('offerModal', this._id);
    },
    'click #likeItem': function (event) {
        //@TODO: Create a likeItem button in item template
        event.preventDefault();

        var likedItemId = this._id,
            userId = Meteor.user()._id;;

        Meteor.call('likeItem', likedItemId, userId, function (error) {
            if (error) {
                console.error('likeItem method failed: ' + error.reason);
            } else {
                console.log('Item ' + likedItemId + ' added to likes by user ' + userId);
                // show confirmation of like
            }
        });
    }
});
