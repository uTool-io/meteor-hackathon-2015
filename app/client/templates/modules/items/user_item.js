Template.userItem.events({
    'click .ui.user.image': function (event) {
        event.preventDefault();

        var item = document.getElementById(this._id);
        $(item).toggleClass('offered');
    }
});