  

shortcut.add("Ctrl+Shift+X",function() {
    win.showDevTools();
});
shortcut.add("Ctrl+Shift+Y",function() {
    win.closeDevTools()
});
shortcut.add("Ctrl+Shift+R",function() {
    win.reloadDev()
});
shortcut.add("Ctrl+V",function() {
    setNewClipItem();
});

shortcut.add("Ctrl+1", function(){
    getClipItemData(1);
}, {'propagate':true});

shortcut.add("Ctrl+2", function(){
    getClipItemData(2);
}, {'propagate':true});

shortcut.add("Ctrl+3", function(){
    getClipItemData(3);
}, {'propagate':true});

shortcut.add("Ctrl+4", function(){
    getClipItemData(4);
}, {'propagate':true});

shortcut.add("Ctrl+5", function(){
    getClipItemData(5);
}, {'propagate':true});

shortcut.add("Ctrl+6", function(){
    getClipItemData(6);
}, {'propagate':true});

shortcut.add("Ctrl+7", function(){
    getClipItemData(7);
}, {'propagate':true});

shortcut.add("Ctrl+8", function(){
    getClipItemData(8);
}, {'propagate':true});

shortcut.add("Ctrl+9", function(){
    getClipItemData(9);
}, {'propagate':true});

