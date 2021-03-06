define(function (require, exports, module) {
    function Kpi(div) {
        this.div = $(div);
        this.params = {
            url: '/ajax/post_kpi.ashx?json=',
            data: 'action=getlist'
        };
        this.listWrap = this.div.find('.aj-block-kpi-list');
        this.addPanel = this.div.find('.aj-block-kpi-save-panel');
        this.postSysno = _.urlParams('postsysno');   // null if not defined
        this.post = null;       // 关于 某条post 的全部数据
        this.init();
        this.event();
    }
    Kpi.prototype = {
        init: function () {
            var that = this;
            this.initQueryAndAddForm();
        },
        dealWithCurrentPost: function () {
            var that = this;
            var post = ajax.post,
                radios = this.addPanel.find('input[name="editor_which"]');
            if (post) {
                that.addPanel.find('.aj-post-title').html(post['post_title']);
                if (post.in_email === "") {
                    radios.eq(0).hide();
                }
                if (post.validete_user === "") {
                    radios.eq(1).hide();
                }
                if (post.in_email === "" && post.validete_user === "") {
                    that.addPanel.hide();
                }
            }
        },
        initQueryAndAddForm: function () {
            var that = this,
                queryForm = that.div.find('.aj-block-kpi-get-via-email-form')[0],
                addForm = that.div.find(".aj-block-kpi-save-form")[0];
            queryForm['postsysno'].value = that.postSysno;
            queryForm['pageFrom'].value = 1;
            queryForm['pageSize'].value = 20;
            addForm['postsysno'].value = that.postSysno;

            this.getEditorsList();
            this.initDatePick();
            this.dealWithCurrentPost();
        },
        ifisAdmin: function (fn) {
            fn(ajax.isadmin);
        },
        event: function () {
            var that = this;
            this.div.on('click', '.aj-update', function () {
                var params = $.parseJSON($(this).parents('.aj-tr').attr('data-aj-params'));
                that.fillUpdateForm(params);
            });

            this.div.on("aj.showoptionsifadmin", function () {
                that.ifisAdmin(function (isadmin) {
                    if (isadmin) {
                        that.div.addClass('admin');
                    }
                });
            });
            // 提交update表单
            this.div.find('.aj-block-kpi-update-form').on('submit', function (e) {
                e.preventDefault();
                var data = $(this).serialize(),
                    info = $(this).find('.aj-info'),
                    form = this;
                if ($(form).hasClass('aj-is-ajaxing')) {
                    return false;
                }
                $(form).addClass('aj-is-ajaxing');

                $.ajax({
                    url: that.params.url + '&action=update',
                    data: data,
                    dataType: 'json',
                    success: function (json) {
                        info.html('提交成功');
                    },
                    error: function (err) {
                        info.html('提交失败');
                    },
                    complete: function () {
                        $(form).removeClass('aj-is-ajaxing');
                        form.reset();
                        form['sysno'].value = -1;
                    }
                });
            });

            // 提交 save 表单
            this.div.find('.aj-block-kpi-save-form').on('submit', function (e) {
                e.preventDefault();
                var data = $(this).serialize(),
                    info = $(this).find('.aj-info'),
                    form = this;
                if ($(form).hasClass('aj-is-ajaxing')) {
                    return false;
                }
                $(form).addClass('aj-is-ajaxing');

                $.ajax({
                    url: that.params.url + '&action=save',
                    data: data,
                    dataType: 'json',
                    success: function (json) {
                        if (json.error_code == "0") {
                            info.html('提交成功');
                            form.reset();
                        } else {
                            info.html(json.error_msg);
                            form.reset();
                        }
                    },
                    error: function (err) {
                        info.html('提交失败');
                    },
                    complete: function () {
                        $(form).removeClass('aj-is-ajaxing');
                    }
                });
            });

            // 获取某个 得分者 或者 值得买 的一段时间内  所有记录
            this.div.find('.aj-block-kpi-get-via-email-form').on('submit', function (e) {
                e.preventDefault();

                // query
                that.getList();

                // get total kpi
                if (this['email'].value !== '') {
                    that.getTotalKpiOf(this['email'].value, function (kpi) {
                        that.div.find('.his_total_kpi').html(kpi.total);
                    });
                } else {
                    that.div.find('.duration_kpi').html("");
                    that.div.find('.his_total_kpi').html("");
                }
            });

            this.div.find('.aj-block-kpi-get-via-email-form').trigger('submit');
            that.div.trigger("aj.showoptionsifadmin");

        },
        getList: function () {
            var form = this.div.find('.aj-block-kpi-get-via-email-form')[0],
                data = $(form).serialize(),
                action,
                that = this,
                info = $(form).find('.aj-info');
            var haveEmail = $.trim(form['email'].value) !== '',
                havePostsysno = $.trim(form['postsysno'].value) !== '';

            _.ajWait(that.div);

            action = '&action=getlist';
            if (haveEmail) {
                action = '&action=getlistOf';
            }
            if (havePostsysno) {
                action = '&action=GetListByPostsysno';
            }
            if (haveEmail && havePostsysno) {
                action = '&action=GetListByPostsysnoAndEmail';
            }
            $.ajax({
                url: that.params.url + action,
                data: data,
                dataType: 'json',
                success: function (rows) {
                    for (var i = 0; i < rows.rows.length; i++) {
                        switch (parseInt(rows.rows[i].editorType)) {
                            case 1:
                                rows.rows[i].editorTypeWho = "编辑者";
                                break;
                            case 2:
                                rows.rows[i].editorTypeWho = "审核者";
                                break;
                            case 3:
                                rows.rows[i].editorTypeWho = "管理员";
                                break;
                            default:
                                rows.rows[i].editorTypeWho = "未知";
                                break;
                        };
                    }
                    //                    _.each(rows.rows, function (item) {
                    //                        switch (item.editorType) {
                    //                            case "1":
                    //                                item.editorTypeWho = "编辑者";
                    //                                break;
                    //                            case "2":
                    //                                item.editorTypeWho = "审核者";
                    //                                break;
                    //                        };

                    //                    });
                    that.listWrap.html(that.renderList(rows.rows));
                    if (form['email'].value !== '') {
                        var duration_kpi = 0;
                        _.each(rows.rows, function (item) {
                            duration_kpi += parseInt(item.score);
                        });
                        that.div.find('.duration_kpi').html(duration_kpi);
                    }
                },
                complete: function () {
                    _.ajNoWait(that.div);
                }
            });


        },
        renderList: function (rows) {
            var template = _.template(view.table);
            var html = [];
            html.push("<table class='table aj-kpi-list-table'>");
            html.push(["<thead>",
                "            <tr>",
                "                <th>sysno</th>",
                "                <th>值得买编号</th>",
                "                <th>得分人</th>",
                "                <th>得分</th>",
                "                <th>得分理由</th>",
                //"                <th>得分类型</th>",
                "                <th>谁得分</th>",
                "                <th>打分时间</th>",
                "                <th class='show-for-admin'>更多操作</th>",
                "            </tr>",
                "        </thead>"].join(""));
            html.push("<tbody>");
            if (rows.length > 0) {
                _.each(rows, function (item) {
                    item.params = JSON.stringify(item);
                    if (item.ratingTime !== "") {
                        item.dateShow = _.dateShow(item.ratingTime);
                    } else {
                        item.dateShow = "";
                    }
                    html.push(template({
                        item: item
                    }));
                });
            } else {
                html.push("<tr class='aj-tr'><td colspan='6'>没有KPI记录, 你可以在下面的添加面板添加记录.</td></tr>");
            }
            html.push("</tbody></table>");
            return html.join('');
        },
        //        getAllList : function () {
        //            var that = this,
        //                wrap = this.listWrap;
        //            this.ajax(1, function (rows) {
        //                var innerHTML = that.renderList(rows.rows);
        //                wrap.append(innerHTML);
        //            });
        //        },
        fillUpdateForm: function (params) {
            var panel = this.div.find('.aj-block-kpi-update-panel'),
                form = this.div.find('.aj-block-kpi-update-form')[0];
            for (var key in params) {
                if (form[key]) {
                    form[key].value = params[key];
                }
            }
            form = $(form);
            panel.find('.aj-title').html(params['postTitle']);
            form.find('.aj-info').html("");
            panel.show();
            if (!panel.hasClass('aj-is-draggable')) {
                panel.addClass('.aj-is-draggable');
                panel.draggable();
            }
        },
        ajax: function (way, fn, err) {
            var data = {},
                that = this;
            _.ajWait(that.listWrap);
            way = Number(way);
            switch (way) {
                case 1: // 获取所有列
                    data['action'] = 'getlist';
                    break;
            }
            $.ajax({
                url: that.params.url,
                data: data,
                dataType: 'json',
                success: function (json) {
                    fn && fn(json);
                },
                error: function () {
                    err && err();
                },
                complete: function () {
                    _.ajNoWait(that.listWrap);
                }
            });
        },
        getEditorsList: function () {
            var rows = ajax.editors.rows;
            var html = this.renderUserList(rows);
            this.div.find('.aj-qmm-editors-list').html(html);
        },
        renderUserList: function (users) {
            var back = [];
            back.push("<select name='editor'>");
            _.each(users, function (user) {
                back.push("<option value='" + user.email + "'>" + user.name + "</option>");
            });
            back.push("</select>");
            return back.join("");
        },
        getTotalKpiOf: function (email, fn) {
            var that = this;
            $.ajax({
                url: that.params.url + '&action=gettotalkpiof',
                data: 'email=' + email,
                dataType: 'json',
                success: function (json) {
                    var kpi = {
                        total: json.total_kpi
                    };
                    fn && fn(kpi);
                },
                error: function () {

                }
            });
        },
        initDatePick: function () {
            var queryForm = this.div.find('.aj-block-kpi-get-via-email-form')[0];
            var from,
                end,
                now = new Date();
            from = now.getFullYear() + '-' + (now.getMonth() + 1) + '-01';
            end = now.toLocaleDateString().replace(/\//g, '-');
            queryForm['beginTime'].value = from;
            queryForm['endTime'].value = end;
        }
    };
    var mid = $('#aj-container'),
        blocks = mid.find('.aj-block'),
        div = mid.find('.aj-block-kpi');
    var view = {};
    blocks.hide();
    div.show();

    var kpi = new Kpi(div);
    view.table = ["<tr class='aj-tr' data-aj-params='<%=item.params%>'>",
        "    <td><%=item.sysno%></td>",
        "    <td><a target='_blank' href='<%=item.postUrl%>'><%=item.postTitle%></a></td>",
        "    <td><%=item.realName%></td>",
        "    <td><%=item.score%></td>",
        "    <td><%=item.scoreReason%></td>",
        //"    <td><%=item.scoreType%></td>",
        "    <td><%=item.editorTypeWho%></td>",
        "    <td title='<%=item.ratingTime%>'><%=item.ratingTime%></td>",
        "    <td class='show-for-admin'>",
        "        <div class=\"btn-group\">",
        "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">",
        "                操作<span class=\"caret\"></span>",
        "            </button>",
        "            <ul class=\"dropdown-menu\">",
        "                <li class='aj-update'><a href=\"#\">修改</a></li>",
        "            </ul>",
        "        </div>",
        "    </td>",
        "</tr>"].join("");
});