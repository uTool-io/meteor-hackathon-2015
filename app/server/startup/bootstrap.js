Meteor.startup(function() {
   if (Meteor.users.find().count() === 0) {
       var user1 = Accounts.createUser({
           'username': 'user1',
           'password': 'user1',
           'profile': {
               'name': 'User1',
               'email': 'user1@user.com'
           }
       });
       var user2 = Accounts.createUser({
           'username': 'user2',
           'password': 'user2',
           'profile': {
               'name': 'User2',
               'email': 'user2@user.com'
           }
       });
   }

   if (Posts.find().count() === 0) {
       var now = new Date();
       var user1 = Meteor.users.findOne(user1);

       Posts.insert({
           title: '',
           thumbnail: '',
           userId: user1._id,
           author: user1.username,
           submitted: now
       });
   }
});
