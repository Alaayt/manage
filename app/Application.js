Ext.define('manag.Application', {
    extend: 'Ext.app.Application',

    name: 'managApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        // أي منطق تهيئة هنا
        console.log('Application launched');
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
