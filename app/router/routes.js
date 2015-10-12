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
    action: function (context) {
        BlazeLayout.render('layout', {
            content: 'post'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/trades', {
    name: 'trades',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'trades'
        });
        GAnalytics.pageview();
    }
});

// @TODO: Add dynamic URL
FlowRouter.route('/trades/trade', {
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