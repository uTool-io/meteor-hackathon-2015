Template.contacts.events({
  'click #foobar': function() {
    console.log('click event works')
    Meteor.call("foo", function (error) {
      // identify the error
      if (error && error.error === "logged-out") {
        // show a nice error message
        Session.set("errorMessage", "Please log in to see PI.");
      }
    });
  }
});
