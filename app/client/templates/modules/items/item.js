Template.item.events({
    'click .ui.card .image': function (event) {
        event.preventDefault();

        var itemId = this._id;
        console.log(itemId);
    }
});