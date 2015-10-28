Template.commentForm.events({
    'submit .ui.comment.form': function (event) {
        event.preventDefault();

        var offerId = FlowRouter.getParam('offerId'),
            $comment = $(event.target).find('.field .input'),
            commentAttributes = {
                offerId: offerId,
                comment: $comment.val()
            };

        Meteor.call('postComment', commentAttributes, function(error) {
           if (error) {
               return console.error(error.reason);
           } else {
               $comment.val('');
           }
        });
    }
});
