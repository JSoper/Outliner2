
Ext.define('MyApp.controller.ExtlinerController', {
    extend: 'Ext.app.Controller',

    onPlusToolClick: function(tool, e, options) {
        console.log( "onToolClick", tool.type );
        var record = Ext.create('MyApp.model.ExtlinerRowModel');
        var store = Ext.getStore('ExtlinerTreeStore')
        store.addRecord
    },

    onMinusToolClick: function(tool, e, options) {
        console.log( "onToolClick", tool.type );
    },

    onSaveToolClick: function(tool, e, options) {
        console.log( "onToolClick", tool.type );
    },

    init: function(application) {
        this.control({
            "tool[type=plus]": {
                click: this.onPlusToolClick
            },
            "tool[type=minus]": {
                click: this.onMinusToolClick
            },
            "tool[type=save]": {
                click: this.onSaveToolClick
            }
        });
    }

});
