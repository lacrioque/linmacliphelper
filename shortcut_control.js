
var shortcuts = [],
    shortcut_global = {
    add : function(control_string, onActive, options){
        var shortcut_to_add;
        var option = {
            key : control_string,
            active : function(){
                onActive();
            },
            failed : function(msg){
                console.log(msg);
            }
        };
        shortcut_to_add = new gui.Shortcut(option);
        gui.App.registerGlobalHotKey(shortcut_to_add);
        shortcuts.push(shortcut_to_add);
    }
};

shortcut_global.add(controlKey+"+Alt+c", function(){
    openWindowResetTray();
}, {});

shortcut_global.add(controlKey+"+Alt+v", function(){
    setNewClipItem();
}, {});

shortcut.add(controlKey+"+Shift+X",function() {
    win.showDevTools();
});
shortcut.add(controlKey+"+Shift+Y",function() {
    win.closeDevTools()
});
shortcut.add(controlKey+"+Shift+R",function() {
    win.reloadDev()
});
shortcut.add(controlKey+"+V",function() {
    setNewClipItem();
});

var array = _.range(10);
array.shift();

_.each(array, function(number){

shortcut_global.add(controlKey+"+"+number, function(){
    getClipItemData(number);
},{});

});

/*

shortcut.add(controlKey+"+1", function(){
    getClipItemData(1);
}, {'propagate':true});Functions

shortcut.add(controlKey+"+2", function(){
    getClipItemData(2);
}, {'propagate':true});

shortcut.add(controlKey+"+3", function(){
    getClipItemData(3);
}, {'propagate':true});

shortcut.add(controlKey+"+4", function(){
    getClipItemData(4);
}, {'propagate':true});

shortcut.add(controlKey+"+5", function(){
    getClipItemData(5);
}, {'propagate':true});

shortcut.add(controlKey+"+6", function(){
    getClipItemData(6);
}, {'propagate':true});

shortcut.add(controlKey+"+7", function(){
    getClipItemData(7);
}, {'propagate':true});

shortcut.add(controlKey+"+8", function(){
    getClipItemData(8);
}, {'propagate':true});

shortcut.add(controlKey+"+9", function(){
    getClipItemData(9);
}, {'propagate':true});

*/