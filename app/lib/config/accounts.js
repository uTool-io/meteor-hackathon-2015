AccountsTemplates.configure({
    defaultLayout: 'layout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'login',
    layoutTemplate: 'layout',
    layoutRegions: {},
    contentRegion: 'content'
});