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

// customize fields

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        displayName: 'Username',
        minLength: 3,
        required: true
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
        displayName: 'Email',
    },
    {
        _id: 'username_and_email',
        type: 'text',
        required: true,
        displayName: 'Username or Email',
        placeholder: 'Username or Email'
    },
    {
        _id: 'password',
        type: 'password',
        required: true,
        minLength: 6,
        displayName: 'Password',
        placeholder: 'Password'
    }
]);