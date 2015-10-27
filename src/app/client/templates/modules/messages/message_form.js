Template.messageForm.events({
   'submit .ui.message.form': function(event, template) {
       event.preventDefault();

       console.log('message form submit');
   }
});
