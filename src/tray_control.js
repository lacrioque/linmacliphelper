var newSetViaTray = function(callback){
        if(callback===undefined){
            callback = function(){return true;}
        }
          setNewClipItem();
          openConfirmation('save');
          callback();
    },
    openWindowResetTray = function(){
                                win.show();
    },
    showAllSavedClips = function(){
        var clips = [], item;
        _.each(usedNumbers, function(nummer){
            item = {
                'label': 'Clip '+nummer, 
                'tooltip': savedClips[nummer], 
                click: function(){getClipItemData(nummer);}
                    };
              clips.push(item); 
        });
        if(clips.length == 0) {
            return [];
        } else {
            return clips;
        }
        
    },
    openConfirmation = function(type){
		var screen = gui.Screen.screens[0],
            new_win = gui.Window.open('confirm.html#'+type+'#'+nummer_aktuell,{
            'frame': false,
            'toolbar': false,
            'width': 240,
            'height': 60,
            'position': "center",
            "window": {
                "resizable": false,
                'always-on-top': true,
                'show_in_taskbar': false
              }
          }),
		  x = (screen.bounds.width-280), y = (10);
		  new_win.moveTo(x, y).focus();
          new_win.on('close',function(){this.hide();});
          setTimeout(function(){new_win.close(true);}, 3500);
    },
    closeCompletely = function(){
        gui.App.closeAllWindows();
    },
    loadMenu = function(){
    var menu = new gui.Menu(),
        submenu = new gui.Menu(),
        clippers = showAllSavedClips();
        
        menu.append(new gui.MenuItem({ 
            type: 'normal', 
            label: 'Clip speichern',
            click: function(){newSetViaTray(reloadMenue);}
        }));
         menu.append(new gui.MenuItem({ 
            type: 'normal', 
            label: 'Programm öffnen',
            click: openWindowResetTray
        }));
        
        _.each(clippers, function(clip,i){
            submenu.append(new gui.MenuItem(clip));
        });
        
        menu.append(new gui.MenuItem({
            label : "Clip zurückholen",
            submenu : submenu
        }));
    
        menu.append(new gui.MenuItem({ 
            type: 'normal', 
            label: 'Schließen',
            click: closeCompletely
        }));  
        return menu;
    },
    reloadMenue = function(){
        tray.menu = loadMenu();
    };

win.on('loaded', function(){
      tray = new gui.Tray({ icon: '/css/icon.png' });
        tray.menu = loadMenu();
        tray.on('click', function(){
            newSetViaTray(reloadMenue);
        });
});


win.on('minimize', function() {
      // Hide window
      this.hide();
      // Show tray
    });