// app/store/Employee.js
Ext.define('manag.store.Employee', {
    extend: 'Ext.data.Store',
    alias: 'store.employee',
    model: 'manag.model.Employee',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/api/employees', 
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
