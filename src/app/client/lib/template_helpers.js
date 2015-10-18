Template.registerHelper('offerModalToggled', function () {
    return Session.get('offerModal') === this._id;
});

Template.registerHelper('acceptedPhoto', function () {
    return Session.get('acceptedPhoto');
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).fromNow();
});
