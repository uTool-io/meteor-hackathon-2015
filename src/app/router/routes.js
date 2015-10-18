FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

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

FlowRouter.route('/barters', {
    name: 'barters',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'barters'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/barters/:offerId', {
    name: 'barter',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'barter'
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
    action: function () {
        BlazeLayout.render('layout', {
            content: 'profile'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/contacts', {
    name: 'contacts',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'contacts'
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
