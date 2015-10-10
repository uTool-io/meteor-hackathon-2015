Template.item.events({
    'click .ui.card .image': function (event) {
        event.preventDefault();

        var itemId = this._id,
            userId = Meteor.user()._id;
        console.log(itemId + ' ' + userId);
    }
});