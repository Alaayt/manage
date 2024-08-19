// managApp/modern/src/view/main/Main.js
Ext.define('manag.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'manag.view.employee.Grid',
        'manag.view.customer.Grid',
        'manag.view.task.Grid'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Employees',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
                xtype: 'employee-grid'
            }]
        },{
            title: 'Customers',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'customer-grid'
            }]
        },{
            title: 'Tasks',
            iconCls: 'x-fa fa-tasks',
            layout: 'fit',
            items: [{
                xtype: 'task-grid'
            }]
        }
    ]
});
