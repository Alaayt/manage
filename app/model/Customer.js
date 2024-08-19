Ext.define('manag.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'contact', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' }
    ]
});
