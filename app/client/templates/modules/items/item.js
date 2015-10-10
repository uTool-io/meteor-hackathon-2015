Template.item.events({
    'click .ui.card .image': function (event) {
        event.preventDefault();

        var itemId = this._id,
            userId = Meteor.user()._id;

        Meteor.call('likeItem', itemId, userId, function (error) {
            if (error) {
                console.error('Like Item method failed: ' + error.reason);
            } else {
                console.log('Item ' + itemId + ' added to likes by user ' + userId);
            }
        });
    }
});