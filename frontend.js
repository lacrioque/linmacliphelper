$(document).ready(function(){
    
    $('#new_field').on('click', function(){setNewClipItem();});
    $('#rm_tagged_fields').on('click',function(){removeMarkedClipItems();});
    $('.take_this').on('click', function(){
        getClipItemData($(this).data('nummer'));
    });
});