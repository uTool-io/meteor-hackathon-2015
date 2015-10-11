Template.userItem.events({
    'click .user.item.image': function (event) {
        event.preventDefault();

        var item = document.getElementById(this._id);
        $(item).toggleClass('offered');
    }
});