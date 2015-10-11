Meteor.publish('items', function(){
    return Items.find();
});

Meteor.publish('item', function(id) {
    check(id, String);
    return Items.find({_id: id});
});