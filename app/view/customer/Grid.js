Ext.define('manag.view.customer.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'customer-grid',
    title: 'Customer List',
    header: {
        style: {
            backgroundColor: '#1F7A8C', // خلفية العنوان
            color: '#FFF', // لون النص
            fontSize: '16px' // حجم الخط
        }
    },
    store: {
        type: 'customer'
    },
    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Contact', dataIndex: 'contact', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    tbar: [
        { text: 'Add Customer', handler: 'onAddCustomer' }
    ]
});