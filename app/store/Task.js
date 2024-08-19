// app/store/Task.js
Ext.define('manag.store.Task', {
    extend: 'Ext.data.Store',
    alias: 'store.task',
    model: 'manag.model.Task',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/api/tasks', 
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
