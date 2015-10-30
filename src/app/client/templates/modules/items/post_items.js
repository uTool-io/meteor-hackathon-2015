Template.postItems.events({
    'click #postItem': function (event) {
        event.preventDefault();

        var acceptedPhoto = Session.get('acceptedPhoto');

        var itemAttributes = {
            title: $('.title.input').val(),
            image: acceptedPhoto
        };

        console.log(itemAttributes);

        var postItem = Meteor.call('postItem', itemAttributes, function(error, id) {
            if (error) {
                return console.error('The postItem method returned an error: ' + error.reason);
            } else {
                FlowRouter.go('/');
            }
        });
    }
});