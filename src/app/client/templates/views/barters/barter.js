Template.barter.onCreated(function () {
    var self = this,
        offerId = FlowRouter.getParam('offerId');
    self.autorun(function () {
        self.subscribe('offer', offerId);
    });
});

Template.barter.helpers({
    authorized: function () {
        var offerId = FlowRouter.getParam('offerId'),
            offer = Offers.findOne(offerId);

        console.log(offer);
        console.log(offer.selectedItemOwner);
        console.log(offer.offeredItemOwner);
        console.log(Meteor.userId());
        console.log(offer.selectedItemOwner || offer.offeredItemOwner === Meteor.userId());

        if (offer.selectedItemOwner || offer.offeredItemOwner === Meteor.userId()) {
            return true;
        } else {
            return false;
        }
    }
});
