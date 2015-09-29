$(function () {
    var table = $('.aj-table');
    function Table(t) {
        this.t = t;
        this.init();
    }
    Table.prototype = {
        init : function () {
            this.yanshi();
            //-----
            this.event();
        },
        yanshi : function () {
            var tr = this.t.find('.aj-tr'),
                num = 10;
            while (num--) {
                this.t.append(tr.clone());
            }
        },
        event : function () {
            var allBtn = this.t.find('.choose-all'),
                that = this;
            allBtn.on('click', function () {
                var bool;
                if ($(this).is(':checked')) {
                    bool = true;
                } else {
                    bool = false;
                }
                that.selectAllToggle(bool);
            });
            this.t.on('click', '.check-one', function () {
                that.renderForm();
            });
        },
        selectAllToggle : function (bool) {
            if (bool) {
                this.t.find('.check-one').each(function () {
                    this.checked = true;
                });
            } else {
                this.t.find('.check-one').each(function () {
                    this.checked = false;
                });
            }
        },
        renderForm : function () {
            this.t.find('.check-one').each(function () {
                if (this.checked) {
                    $(this).parents('.aj-tr').addClass('aj-select');
                } else {
                    $(this).parents('.aj-tr').removeClass('aj-select');
                }
            });
        }
    };

    new Table(table);
});
//
//{
//    arr : [
//        {
//            item_id : 190283,
//            comment_id : 12841
//        },
//        {
//            item_id : 190283,
//            comment_id : 12841
//        }
//    ]
//}
