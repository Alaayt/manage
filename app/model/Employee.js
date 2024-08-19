Ext.define('manag.model.Employee', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'position', type: 'string' },
        { name: 'department', type: 'string' },
        { name: 'email', type: 'string' }
    ]
});
