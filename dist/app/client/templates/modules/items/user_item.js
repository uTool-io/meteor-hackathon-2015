Template.userItem.events({
    'click .item': function (event) {
        event.preventDefault();

        var item = document.getElementById(this._id);
        $(item).toggleClass('active');
    }
});