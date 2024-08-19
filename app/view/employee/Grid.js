Ext.define('manag.view.employee.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employee-grid',
    title: 'Employee List',
    header: {
        style: {
            backgroundColor: '#053C5E', // خلفية العنوان
            color: '#FFF', // لون النص
            fontSize: '16px' // حجم الخط
        }
    },
    
    store: {
        type: 'employee'
    },
    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Position', dataIndex: 'position', flex: 1 },
        { text: 'Department', dataIndex: 'department', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 }
    ],
    tbar: [
        { text: 'Add Employee', handler: 'onAddEmployee' }
    ],

});
