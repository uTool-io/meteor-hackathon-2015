Template.registerHelper('cardToggled', function() {
    return Session.get('cardToggled') === this._id;
    console.log(this._id);
});
