Template.contacts.events({
  'click #foobar': function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log(navigator.contacts);
}

    console.log('click event works')

    var myContact = navigator.contacts.create({"displayName": "Test User"}, contactSuccess);
    console.log(myContact);

    Meteor.call("foo", function (error) {
      // identify the error
      if (error && error.error === "logged-out") {
        // show a nice error message
        Session.set("errorMessage", "Please log in to see PI.");
      }
    });
  }
});
