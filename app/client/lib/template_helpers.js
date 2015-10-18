Template.registerHelper('offerModalToggled', function () {
    return Session.get('offerModal') === this._id;
});

Template.registerHelper('acceptedPhoto', function () {
    return Session.get('acceptedPhoto');
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).fromNow();
});


// 
// Meteor.startup(function(){
//   if(Meteor.isClient) {
//     document.addEventListener("deviceready", onDeviceReady, true);
//     function onDeviceReady() {
//       console.log('device is ready');
//         var myContact = navigator.contacts.create({"displayName": "Test User"});
//         myContact.note = "This contact has a note.";
//         console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
//     }
//     console.log(navigator.contacts);
//   }
// });
