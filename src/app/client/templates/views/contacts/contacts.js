Meteor.startup(function () {
    // The correct way
    document.addEventListener("deviceready", onDeviceReady, false);
    console.log('deviceready')
    var myContact = navigator.contacts.create({"displayName": "Test User"}, contactSuccess);
    console.log(myContact);
});
