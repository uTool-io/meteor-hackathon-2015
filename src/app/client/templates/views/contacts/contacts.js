Meteor.startup(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    console.log('deviceready')
    var myContact = navigator.contacts.create({"displayName": "Test User"}, contactSuccess);
    console.log(myContact);
});
