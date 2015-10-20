define(function (require, exports, module) {
    function Kpi(div) {
        this.div = $(div);
        this.params = {
            url : 'http://localhost:8080/ajax/post_kpi.ashx?json=',
            data : 'action=getlist'
        };
        this.listWrap = this.div.find('.aj-block-kpi-list');
        this.event();
    }
    Kpi.prototype = {
        event : function () {
            var that = this;
            this.div.on('click', '.aj-update', function () {
                var params = $.parseJSON($(this).parents('.aj-tr').attr('data-aj-params'));
                that.fillUpdateForm(params);
            });

            // 提交update表单
            this.div.find('.aj-block-kpi-update-form').on('submit', function (e) {
                e.preventDefault();
                var data = $(this).serialize();
                $.ajax({
                    url : that.params.url + '&action=update',
                    data : data,
                    dataType : 'json',
                    success : function (json) {
                        info.html('提交成功');
                    },
                    error : function (err) {
                        info.html('提交失败');
                    }
                });
            });

            // 提交 save 表单
            this.div.find('.aj-block-kpi-save-form').on('submit', function (e) {
                e.preventDefault();
                var data = $(this).serialize(),
                    info = $(this).find('.aj-info');
                $.ajax({
                    url : that.params.url + '&action=save',
                    data : data,
                    dataType : 'json',
                    success : function (json) {
                        info.html('提交成功');
                    },
                    error : function (err) {
                        info.html('提交失败');
                    }
                });
            });

            // 获取某个 得分者 的一段时间内  所有记录
            this.div.find('.aj-block-kpi-get-via-email-form').on('submit', function (e) {
                e.preventDefault();
                var data = $(this).serialize(),
                    info = $(this).find('.aj-info');
                $.ajax({
                    url : that.params.url + '&action=getlistOf',
                    data : data,
                    dataType : 'json',
                    success : function (rows) {
                        that.listWrap.html(that.renderList(rows.rows));
                    },
                    error : function () {

                    }
                });
            });
        },
        renderList : function (rows) {
            var template = _.template(view.table);
            var html = [];
            html.push("<table class='table'>");
            html.push(["<thead>",
                "            <tr>",
                "                <th>sysno</th>",
                "                <th>值得买编号(postsysno)</th>",
                "                <th>得分人(editor)</th>",
                "                <th>得分(score)</th>",
                "                <th>得分理由(scoreReason)</th>",
                "                <th>得分类型(scoreType)</th>",
                "                <th>打分人(ratingAdmin)</th>",
                "                <th>打分时间(ratingTime)</th>",
                "                <th>更多操作</th>",
                "            </tr>",
                "        </thead>"].join(""));
            html.push("<tbody>");
            _.each(rows, function (item) {
                item.params = JSON.stringify(item);
                item.dateShow = 
                html.push(template({
                    item : item
                }));
            });
            html.push("</tbody></table>");
            return html.join('');
        },
        getAllList : function () {
            var that = this,
                wrap = this.listWrap;
            this.ajax(1, function (rows) {
                var innerHTML = that.renderList(rows.rows);
                wrap.append(innerHTML);
            });
        },
        fillUpdateForm : function (params) {
            var panel = this.div.find('.aj-block-kpi-update-panel'),
                form = this.div.find('.aj-block-kpi-update-form')[0];
            for (var key in params) {
                form[key].value = params[key];
            }
        },
        ajax : function (way, fn, err) {
            var data = {},
                that = this;
            way = Number(way);
            switch (way) {
                case 1 : // 获取所有列
                    data['action'] = 'getlist';
                    break;
            }
            $.ajax({
                url : that.params.url,
                data : data,
                dataType : 'json',
                success : function (json) {
                    fn && fn(json);
                },
                error : function () {
                    err && err();
                }
            });
        }
    };
    var mid = $('#aj-container'),
        blocks = mid.find('.aj-block'),
        div = mid.find('.aj-block-kpi');
    var view = {};
    blocks.hide();
    div.show();

    var kpi = new Kpi(div);
    kpi.getAllList();
    view.table = ["<tr class='aj-tr' data-aj-params='<%=item.params%>'>",
        "    <td><%=item.sysno%></td>",
        "    <td><%=item.postsysno%></td>",
        "    <td><%=item.editor%></td>",
        "    <td><%=item.score%></td>",
        "    <td><%=item.scoreReason%></td>",
        "    <td><%=item.scoreType%></td>",
        "    <td><%=item.ratingAdmin%></td>",
        "    <td><%=item.ratingTime%></td>",
        "    <td>",
        "        <div class=\"btn-group\">",
        "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">",
        "                操作<span class=\"caret\"></span>",
        "            </button>",
        "            <ul class=\"dropdown-menu\">",
        "                <li class='aj-delete'><a href=\"#\">删除</a></li>",
        "                <li class='aj-update'><a href=\"#\">修改</a></li>",
        "            </ul>",
        "        </div>",
        "    </td>",
        "</tr>"].join("");
});