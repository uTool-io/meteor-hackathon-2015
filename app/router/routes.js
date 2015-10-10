FlowRouter.route('/', {
    name: 'root',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'root'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/post', {
    name: 'post',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'post'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/trade', {
    name: 'trade',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'trade'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/search', {
    name: 'search',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'search'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function () {
        BlazeLayout.render('layout', {
            content: 'profile'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout', {
            content: 'redirect'
        });
        GAnalytics.pageview();
    }
};