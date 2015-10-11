Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        var userHusam = Accounts.createUser({
            'username': 'husam',
            'password': 'husam1',
            'profile': {
                'name': 'Husam Machlovi',
                'email': 'hmachlovi@gmail.com'
            }
        });
        var userDamir = Accounts.createUser({
            'username': 'damir',
            'password': 'damir1',
            'profile': {
                'name': 'Damir Vazgird',
                'email': 'dvazgird@gmail.com'
            }
        });
    };

    var now = new Date(),
        husam = Meteor.users.findOne(userHusam),
        damir = Meteor.users.findOne(userDamir);

    if (Items.find().count() === 0) {

        Items.insert({
            title: 'Les Paul Custom',
            image: '/images/items/husam/lespaul.jpg',
            ownerId: husam._id,
            ownerName: husam.profile.name,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'Old Guitar',
            image: '/images/items/husam/lespaul.jpg',
            ownerId: husam._id,
            ownerName: husam.profile.name,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'New Guitar',
            image: '/images/items/husam/lespaul.jpg',
            ownerId: damir._id,
            ownerName: damir.profile.name,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'Broken Guitar',
            image: '/images/items/husam/lespaul.jpg',
            ownerId: damir._id,
            ownerName: damir.profile.name,
            submitted: now,
            likes: 0
        });
    };

    if (Trades.find().count() === 0) {

      Trades.insert({
          selectedItemId: '/images/items/damir/bass.jpg',
          selectedItemOwnerId: '',
          selectedItemOwnerName: 'Damir',
          offeredItemId: '/images/items/husam/lespaul.jpg',
          offeredBy: husam._id,
          ownerName: 'Husam',
          offeredAt: now,
          confirmTrade: '',
          cancelOffer: {}
      });
    };
});
