Template.item.events({
    'click #toggleOfferModal': function (event) {
        event.preventDefault();

        Session.set('offerModal', this._id);
        $('body').addClass('zeroflow');
    }
});
