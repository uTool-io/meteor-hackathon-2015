Template.offerDetails.onCreated(function () {
    var self = this,
        offerId = FlowRouter.getParam('offerId');
    self.autorun(function () {
        self.subscribe('offer', offerId);
    });
});

Template.offerDetails.helpers({
   offer: function () {
       var offerId = FlowRouter.getParam('offerId'),
           offer = Offers.findOne({_id: offerId});
       return offer;
   }
});
