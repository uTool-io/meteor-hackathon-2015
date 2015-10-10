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
            userId: husam._id,
            username: husam.username,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'Old Guitar',
            image: '/images/items/husam/lespaul.jpg',
            userId: husam._id,
            username: husam.username,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'New Guitar',
            image: '/images/items/husam/lespaul.jpg',
            userId: damir._id,
            username: damir.username,
            submitted: now,
            likes: 0
        });

        Items.insert({
            title: 'Broken Guitar',
            image: '/images/items/husam/lespaul.jpg',
            userId: damir._id,
            username: damir.username,
            submitted: now,
            likes: 0
        });
    };
});
