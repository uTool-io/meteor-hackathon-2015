Template.registerHelper('offerModalToggled', function() {
    return Session.get('offerModal') === this._id;
});
