Template.offerModal.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
    });

    Session.setDefault('offerModal', false);
});

Template.offerModal.events({
    'click #cancelOffer': function (event) {
        event.preventDefault();
        console.log('closed modal ' + this._id);

        Session.set('offerModal', false);
    },
    'click #createOffer': function (event) {
        event.preventDefault();

        var offeredItemId = $('.offered.user.item.image').attr('id'),
            selectedItemId = this._id;

        Meteor.call('createOffer', selectedItemId, offeredItemId, function (error) {
            if (error) {
                console.error('createOffer method failed: ' + error.reason);
            } else {
                console.log('Offered item ' + offeredItemId + 'for selected item ' + selectedItemId);
                Session.set('offerModal', false);
            }
        });
    }
});