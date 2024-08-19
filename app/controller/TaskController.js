Ext.define('manag.controller.TaskController', {
    extend: 'Ext.app.Controller',
    refs: [
        { ref: 'taskGrid', selector: 'task-grid' }
    ],
    init: function() {
        this.control({
            'task-grid button[text=Add Task]': {
                click: this.onAddTask
            }
        });
    },
    onAddTask: function() {
        // منطق لإضافة مهمة جديدة
        Ext.Msg.alert('Action', 'Add Task button clicked');
    }
});
