var _ = require('underscore'),
    gui = require('nw.gui'),
    os = require('os'),
    clipboard = gui.Clipboard.get(),
    win = gui.Window.get(),
    tray = null,
    Mustache = require('mustache'),
    freeNumbers = [1,2,3,4,5,6,7,8,9],    
    usedNumbers = [],    
    nummer_aktuell,
    savedClips = {},
    controlKey = process.platform == "darwin" ? "Meta" : "Ctrl",
    getClipdata = function(){
        var retval =  clipboard.get('text');
        if(retval === '---'){
            return "";
        } else {
            return retval;
        }
    },
    setClipdata = function(data){
        if(typeof(data) !== "string" ){
            try{
                data = JSON.stringify(data);
            } catch(e){ 
                if(e) return false;
            }
        }
        
        
        clipboard.set(data, 'text');
    },
    triggerWarn = function(text){
        if(tray === null){
            $('body').append('<div class="warning">'+text+'</div>');
            setTimeout(function(){$('.warning').fadeOut(1000, function(){$(this).remove();})}, 1500);
        } else {
            openConfirmation('nospace');
        }
    },
    resetClipNumber = function(nummer){
        if( _.contains(usedNumbers, nummer)){
            usedNumbers = _.difference(usedNumbers, [nummer]);
            freeNumbers.push(nummer);
            freeNumbers.sort(function(a,b){return a-b});
        }
    },
    resetClipComplete = function(nummer){
        $('.single_field[name="'+nummer+'"]').find('.clip_content').text('---');
         resetClipNumber(nummer);
         delete savedClips[nummer];
    };
    setNewClipItem = function(){
        var clipData = getClipdata(),
            nummer = freeNumbers.shift();
        if(nummer === undefined){
            triggerWarn('Keine Freien Plätze mehr übrig');
            return false;
        }
        usedNumbers.push(nummer);
        nummer_aktuell = nummer;
        $('.single_field[name="'+nummer+'"]').find('.clip_content').text(clipData);
        savedClips[nummer]=clipData;
    },
    removeMarkedClipItems = function(){
        _.each($('.delete_clipfield'), function(item,i){
            if($(item).prop('checked')){ 
                $(item).closest('.single_field').find('.clip_content').text('---'); 
                $(item).prop('checked', false);
                resetClipNumber($(item).data('nummer'));
            }
        
        });
    },
        
    getClipItemData = function(nummer){
        setClipdata(savedClips[nummer]);
    };

