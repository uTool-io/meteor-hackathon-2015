Template.item.events({
    'click #toggleCard': function (event) {
        event.preventDefault();

        console.log('toggle card helper based on id ' + this._id);
    },
    'click #likeItem': function (event) {
        //@TODO: Create a likeItem button in item template
        event.preventDefault();

        var selectedItemId = this._id,
            offeredItemId = 'test';

        Meteor.call('likeItem', itemId, buyerId, function (error) {
            if (error) {
                console.error('Like Item method failed: ' + error.reason);
            } else {
                console.log('Item ' + itemId + ' added to likes by user ' + buyerId);
                // show confirmation of like
            }
        });
    },
    'click #createOffer': function (event) {
        //@TODO: Move this event to userItem template
        event.preventDefault();

<<<<<<< HEAD
        //@TODO: move to like button event
        //Meteor.call('likeItem', itemId, buyerId, function (error) {
        //    if (error) {
        //        console.error('Like Item method failed: ' + error.reason);
        //    } else {
        //        console.log('Item ' + itemId + ' added to likes by user ' + buyerId);
        //        // show confirmation of like
        //    }
        //});
    },
    'click #toggle': function(e) {
      e.preventDefault();
      Session.set('cardToggle', this._id);
      store the card
      have a variable
      showClass =
      console.log(cardToggle);
    }
});




Template.item.helpers({
    userItems: function () {
        var userId = Meteor.user()._id;
        return Items.find({ownerId: userId}, {sort: {submitted: -1}});
    },
    hideCard: function() {
      return "hide";
=======
        var selectedItemId = this._id,
            offeredItemId = 'test';

        Meteor.call('createOffer', selectedItemId, offeredItemId, function (error) {
            if (error) {
                console.error('Create Offer method failed: ' + error.reason);
            } else {
                console.log('Offered item ' + offeredItemId + 'for selected item ' + selectedItemId);
            }
        });
>>>>>>> 2e95d2f6436b2b291263a3ffea4582c9eeefe44e
    }
});
