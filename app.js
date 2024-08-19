// managApp/app.js
Ext.application({
    extend: 'manag.Application',

    name: 'manag',

    requires: [
        // This will automatically load all classes in the manag namespace
        // so that application classes do not need to require each other.
        'manag.*'
    ],

    // The name of the initial view to create.
    mainView: 'manag.view.main.Main'
});
