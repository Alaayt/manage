Ext.define('manag.view.task.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'task-grid',
    title: 'Task List',
    header: {
        style: {
            backgroundColor: '#A31621', // خلفية العنوان
            color: '#FFF', // لون النص
            fontSize: '16px' // حجم الخط
        }
    },
    store: {
        type: 'task'
    },
    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Description', dataIndex: 'description' },
        { text: 'Status', dataIndex: 'status' },
        { text: 'Due Date', dataIndex: 'dueDate', xtype: 'datecolumn', format: 'Y-m-d' },
        { text: 'Employee ID', dataIndex: 'employeeId' },
        { text: 'Customer ID', dataIndex: 'customerId' }
    ],
    tbar: [
        { text: 'Add Task', handler: 'onAddTask' }
    ]
});
