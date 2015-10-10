Meteor.publishComposite('items', {
    find: function () {
        return Items.find();
    },
    children: [{
        find: function (item) {
            return Meteor.users.find({_id: item.userId}, {fields: {profile: 1}});
        }
    }]
});

Meteor.publishComposite('item', function (id) {
    check(id, String);
    return {
        find: function () {
            return Items.find({_id: id});
        },
        children: [{
            find: function (item) {
                return Meteor.users.find({_id: item.userId}, {fields: {profile: 1}});
            }
        }]
    }
});
