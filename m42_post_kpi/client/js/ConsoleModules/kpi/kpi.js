define(function (require, exports, module) {
    function Kpi(div) {
        this.div = $(div);
        this.params = {
            url : 'http://localhost:8080/ajax/post_kpi.ashx?json=',
            data : 'action=getlist'
        };
    }
    Kpi.prototype = {
        getAllList : function () {
            var that = this,
                wrap = this.div.find('.aj-block-kpi-list');
            this.ajax(1, function (rows) {
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
                _.each(rows.rows, function (item) {
                    html.push(template({
                        item : item
                    }));
                });
                html.push("</tbody></table>");
                wrap.append(html.join(''));
            });
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
    view.table = ["<tr>",
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
        "                <li><a href=\"#\">删除</a></li>",
        "                <li><a href=\"#\">修改</a></li>",
        "            </ul>",
        "        </div>",
        "    </td>",
        "</tr>"].join("");
});