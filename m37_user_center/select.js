$(function () {
    var data = [],
        table = $('.aj-table'),
        dataContainer = $('#HiddenField1');
    $('.choose-all').on('click', function () {
        $(document).trigger('aj.changeModel');
    });
    table.on('click', '.aj-tr', function () {
        $(document).trigger('aj.changeModel');
    });


    $(document).on('aj.changeModel', function () {
        var trs = table.find('.aj-tr');
        data = [];
        trs.each(function () {
            if ($(this).find('.check-one:checked').length > 0) {
                data.push({
                    'comment_id' : $(this).attr('comment_id'),
                    'item_id' : $(this).attr('item_id')
                });
            }
        });
        console.log(JSON.stringify(data));
        dataContainer.val(JSON.stringify(data))
    });
});