Ext.define('manag.controller.CustomerController', {
    extend: 'Ext.app.Controller',
    refs: [
        { ref: 'customerGrid', selector: 'customer-grid' }
    ],
    init: function() {
        this.control({
            'customer-grid button[text=Add Customer]': {
                click: this.onAddCustomer
            }
        });
    },
    onAddCustomer: function() {
        // منطق لإضافة عميل جديد
        Ext.Msg.alert('Action', 'Add Customer button clicked');
    }
});
