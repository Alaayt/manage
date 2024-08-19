// app/store/Customer.js
Ext.define('manag.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'store.customer',
    model: 'manag.model.Customer',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/api/customers', 
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
