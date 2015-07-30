$(document).ready(function(){
    $('.controlKey').text(controlKey);
    $('#new_field').on('click', function(){setNewClipItem(); reloadMenue();});
    $('#rm_tagged_fields').on('click',function(){removeMarkedClipItems(); reloadMenue();});
    $('.take_this').on('click', function(){
        getClipItemData($(this).data('nummer'));
    });
    $('a[target=_blank]').on('click', function(){
   require('nw.gui').Shell.openExternal( this.href );
   return false;
});
});
