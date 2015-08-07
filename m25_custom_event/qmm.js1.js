(function(a) {
    a.fn.Jdropdown = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({
                event: "mouseover",
                current: "hover",
                delay: 0
            },
            b || {}),
            e = "mouseover" == d.event ? "mouseout": "mouseleave";
            a.each(this,
            function() {
                var b = null,
                f = null,
                g = !1;
                a(this).bind(d.event,
                function() {
                    if (g) clearTimeout(f);
                    else {
                        var e = a(this);
                        b = setTimeout(function() {
                            e.addClass(d.current),
                            g = !0,
                            c && c(e)
                        },
                        d.delay)
                    }
                }).bind(e,
                function() {
                    if (g) {
                        var c = a(this);
                        f = setTimeout(function() {
                            c.removeClass(d.current),
                            g = !1
                        },
                        d.delay)
                    } else clearTimeout(b)
                })
            })
        }
    }
})(jQuery);

(function(a) {
    a.fn.dropdown = function(b, c) {
        var b = a.extend({
            className: "item",
            current: "hover",
            enterDelay: 10,
            leaveDelay: 300,
            onmouseleave: null
        },
        b);
        a.each(this,
        function() {
            function d() {
                function a(a, b) {
                    return (b.y - a.y) / (b.x - a.x)
                }
                var b = g.offset(),
                c = {
                    x: b.left,
                    y: b.top
                },
                d = {
                    x: b.left + g.outerWidth(),
                    y: c.y
                },
                e = {
                    x: b.left,
                    y: b.top + g.outerHeight()
                },
                f = {
                    x: b.left + g.outerWidth(),
                    y: e.y
                };
                if (loc = i[i.length - 1], prevLoc = i[0], !loc) return 0;
                if (prevLoc || (prevLoc = loc), prevLoc.x < b.left || prevLoc.x > f.x || prevLoc.y < b.top || prevLoc.y > f.y) return 0;
                if (j && loc.x == j.x && loc.y == j.y) return 0;
                var h = d,
                k = f,
                l = a(loc, h),
                m = a(prevLoc, h),
                n = a(loc, k),
                o = a(prevLoc, k);
                return m > l && n > o ? prevLoc.x - c.x < 25 ? 0 : (j = loc, 300) : (j = null, 0)
            }
            var e, f, g = a(this),
            h = g.find("." + b.className),
            i = [],
            j = null,
            k = 3,
            l = !1;
            g.bind("mouseenter",
            function() {
                clearTimeout(e)
            });
            var m = null,
            n = null;
            g.bind("mouseleave",
            function() {
                l && (e = setTimeout(function() {
                    h.removeClass(b.current)
                },
                b.leaveDelay)),
                b.onmouseleave && b.onmouseleave(),
                m = null
            }),
            h.bind("mouseenter",
            function() {
                var e = a(this),
                g = this,
                i = function() {
                    m = jQuery.inArray(g, h),
                    h.removeClass(b.current),
                    e.addClass(b.current),
                    l = !0,
                    c && c(e)
                };
                f = setTimeout(function() {
                    0 == d(e) && (i(), clearTimeout(n))
                },
                b.enterDelay),
                n = setTimeout(function() {
                    m != jQuery.inArray(g, h) && i()
                },
                700)
            }),
            h.bind("mouseleave",
            function() {
                a(this),
                clearTimeout(f),
                clearTimeout(n)
            }),
            a(document).mousemove(function(a) {
                i.push({
                    x: a.pageX,
                    y: a.pageY
                }),
                i.length > k && i.shift()
            })
        })
    }
})(jQuery);

$(function() {
    var e = $("#_QMM_ALLSORT").outerWidth(),
    f = $("#_QMM_ALLSORT").outerHeight();

    $("#_QMM_ALLSORT").dropdown({
        delay: 0,
        onmouseleave: function() {
            $("#_QMM_ALLSORT .item").removeClass("hover")
        }
    },
    function(a) {});

    $("#categorys-2013").Jdropdown({
        delay: 200
    },
    function(a) {});
});