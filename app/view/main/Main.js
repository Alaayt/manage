Ext.define('manag.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'manag.view.employee.Grid',
        'manag.view.customer.Grid',
        'manag.view.task.Grid'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'employee-grid',
            flex: 1,
            margin: '0 5 0 0' 
        },
        {
            xtype: 'customer-grid',
            flex: 1,
            margin: '0 5'
        },
        {
            xtype: 'task-grid',
            flex: 1,
            margin: '0 0 0 5'
        }
    ]
});
