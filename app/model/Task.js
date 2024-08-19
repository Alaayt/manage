// app/model/Task.js
Ext.define('manag.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'dueDate', type: 'date' },
        { name: 'employeeId', type: 'int' },
        { name: 'customerId', type: 'int' }
    ]
});
