var newSetViaTray = function(){
          setNewClipItem();
          openConfirmation('save');
    },
    openWindowResetTray = function(){
                                win.show();
                                tray.remove();
                                tray = null;
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
            new_win = gui.Window.open('confirm.html#'+type+'#'+nummer_aktuell,{
            'frame': false,
            'toolbar': false,
            'width': 240,
            'height': 100,
            'position': "mouse",
            "window": {
                "resizable": false,
                'always-on-top': true,
                'show_in_taskbar': false
              }
          });
          new_win.on('close',function(){this.hide();});
          setTimeout(function(){new_win.close(true);}, 3500);
    },
    closeCompletely = function(){
        gui.App.closeAllWindows();
    };

win.on('minimize', function() {
      // Hide window
      this.hide();
    
      // Show tray
      tray = new gui.Tray({ icon: '/css/icon.png' });
    
        var menu = new gui.Menu(),
            submenu = new gui.Menu(),
            clippers = showAllSavedClips();
        menu.append(new gui.MenuItem({ 
            type: 'normal', 
            label: 'Clip speichern',
            click: newSetViaTray
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
        tray.menu = menu;

    });