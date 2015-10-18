Template.post.onCreated(function () {
    Session.setDefault('acceptedPhoto', false);
})

Template.post.onRendered(function () {
    Session.set('acceptedPhoto', false);
});