Template.offerModal.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
    });

    Session.setDefault('offerModal', false);
    $('body').addClass('zeroflow');
});

Template.offerModal.events({
    'click #cancelOffer': function (event) {
        event.preventDefault();
        console.log('closed modal ' + this._id);

        Session.set('offerModal', false);
        $('body').removeClass('zeroflow');
    },
    'click #createOffer': function (event) {
        event.preventDefault();

        var offeredItemId = $('.user.selection .active.item').attr('id'),
            selectedItemId = this._id,
            selectedItemOwnerId = this.ownerId;


        Meteor.call('createOffer', selectedItemId, selectedItemOwnerId, offeredItemId, function (error) {
            if (error) {
                console.error('createOffer method failed: ' + error.reason);
            } else {
                Session.set('offerModal', false);
                $('body').removeClass('zeroflow');
            }
        });
    }
});