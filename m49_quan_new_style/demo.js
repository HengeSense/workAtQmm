/**
 * Created by james on 2015/11/7.
 */
define(function () {
    $(function () {
        try {
            $('.aj-quan-new-320').each(function () {
                var desc = $(this).find('.aj-mid .aj-desc'),
                    text = desc.text().replace(/\s\n/g, ""),
                    char = '',
                    charCode,
                    arr = [{
                        ch : null,
                        all : []
                    }],
                    str = '',
                    html = '';
                for (var i = 0; i < text.length; i++) {
                    char = text.charAt(i);
                    charCode = text.charCodeAt(i);
                    if (charCode > 255) {
                        str = {
                            ch : true,
                            char : char
                        };
                    } else {
                        str = {
                            ch : false,
                            char : char
                        };
                    }
                    if (str.ch === arr[arr.length - 1].ch) {
                        arr[arr.length - 1].all.push(str.char);
                    } else {
                        arr.push({
                            ch : str.ch,
                            all : [str.char]
                        });
                    }
                }
                $.each(arr, function () {
                    if (this.ch) {
                        html += this.all.join("");
                    } else {
                        html += "<em>" + this.all.join("") + "</em>";
                    }
                });
                desc.html(html);
            });
        }catch(ex) {}
    });
});
