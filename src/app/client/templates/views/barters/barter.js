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

        if (offer.selectedItemOwner === Meteor.userId() || offer.offeredItemOwner === Meteor.userId()) {
            return true;
        } else {
            return false;
        }
    }
});
