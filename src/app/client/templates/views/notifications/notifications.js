Template.notifications.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('notifications', this.userId);
    });
});
