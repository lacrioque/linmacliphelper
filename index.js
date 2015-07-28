var _ = require('underscore'),
    gui = require('nw.gui'),
    clipboard = gui.Clipboard.get(),
    Mustache = require('mustache'),
    freeNumbers = [1,2,3,4,5,6,7,8,9],    
    usedNumbers = [],    
    getClipdata = function(){
        return clipboard.get('text');
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
    setNewClipItem = function(){
        var clipData = getClipdata(),
            nummer = freeNumbers.shift();
        usedNumbers.push(nummer);
        console.log($('.single_field[name="'+nummer+'"]'));
        console.log(usedNumbers);
        console.log(freeNumbers);
        $('.single_field[name="'+nummer+'"]').find('.clip_content').text(clipData);
    },
    removeMarkedClipItems = function(){
        _.each($('.delete_clipfield'), function(item,i){
            if($(item).prop('checked')){ 
                $(item).closest('.single_field').find('.clip_content').text('---'); 
                $(item).prop('checked', false);
            }
        
        });
    },
    getClipItemData = function(nummer){
         var clipContent =  $('.single_field[name="'+nummer+'"]').find('.clip_content').text();
        setClipdata(clipContent);
    };



