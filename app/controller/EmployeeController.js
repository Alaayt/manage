Ext.define('manag.controller.EmployeeController', {
    extend: 'Ext.app.Controller',
    refs: [
        { ref: 'employeeGrid', selector: 'employee-grid' }
    ],
    init: function() {
        this.control({
            'employee-grid button[text=Add Employee]': {
                click: this.onAddEmployee
            }
        });
    },
    onAddEmployee: function() {
        // منطق لإضافة موظف جديد
        Ext.Msg.alert('Action', 'Add Employee button clicked');
    }
});
