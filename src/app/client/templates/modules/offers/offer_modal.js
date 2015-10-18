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
            offer = Items.findOne({_id: offeredItemId});

        var selectedItem = {
            selectedItemId: this._id,
            selectedItemOwner: this.ownerId,
            selectedItemOwnerName: this.ownerName,
            selectedItemImage: this.image,
            selectedItemTitle: this.title
        };

        var offeredItem = {
            offeredItemId: offer._id,
            offeredItemOwner: offer.ownerId,
            offeredItemOwnerName: offer.ownerName,
            offeredItemImage: offer.image,
            offeredItemTitle: offer.title
        };


        Meteor.call('createOffer', selectedItem, offeredItem, function (error) {
            if (error) {
                return throwError(error.reason);
            } else {
                Session.set('offerModal', false);
                $('body').removeClass('zeroflow');
            }
        });

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);

            // show this result but route anyway
            if (result.postExists)
                throwError('This link has already been posted');

            Router.go('postPage', {_id: result._id});
        });
    }
});
