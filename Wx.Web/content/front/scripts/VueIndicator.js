!
function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n(require("Vue")) : "function" == typeof define && define.amd ? define("VueIndicator", ["Vue"], n) : "object" == typeof exports ? exports.VueIndicator = n(require("vue")) : e.VueIndicator = n(e.vue)
} (this,
function(e) {
    return function(e) {
        function n(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, n),
            o.loaded = !0,
            o.exports
        }
        var t = {};
        return n.m = e,
        n.c = t,
        n.p = "/lib/",
        n(0)
    } ([function(e, n, t) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = (t(6), t(1)),
        r = i(o),
        s = t(7),
        c = i(s),
        p = c["default"].extend(t(3)),
        u = void 0;
        c["default"].use(r["default"]),
        n["default"] = {
            open: function(e) {
                u || (u = new p({
                    el: document.createElement("div")
                })),
                u.visible || ("string" == typeof e ? (u.text = e, u.spinnerType = "snake") : "[object Object]" === Object.prototype.toString.call(e) ? (u.text = e.text || "", u.spinnerType = e.spinnerType || "snake") : (u.text = "", u.spinnerType = "snake"), u.$appendTo(document.body), (function() {
                    u.visible = !0
                })())
            },
            close: function() {
                u && (function() {
                    u.visible = !1
                })()
            }
        }
    },
    function(e, n, t) { !
        function(n, t) {
            e.exports = t()
        } (this,
        function() {
            return function(e) {
                function n(i) {
                    if (t[i]) return t[i].exports;
                    var o = t[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                    };
                    return e[i].call(o.exports, o, o.exports, n),
                    o.loaded = !0,
                    o.exports
                }
                var t = {};
                return n.m = e,
                n.c = t,
                n.p = "/dist/",
                n(0)
            } ([function(e, n, t) {
                e.exports = t(21)
            },
            function(e, n, t) {
                var i, o;
                i = t(2),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }),
                n["default"] = {
                    computed: {
                        spinnerColor: function() {
                            return this.color || this.$parent.color || "#ccc"
                        },
                        spinnerSize: function() {
                            return (this.size || this.$parent.size || 28) + "px"
                        }
                    },
                    props: {
                        size: Number,
                        color: String
                    }
                }
            },
            function(e, n) {
                e.exports = '<div class=kebab-spinner-double-bounce :style="{\n    width: spinnerSize,\n    height: spinnerSize\n  }"> <div class=kebab-spinner-double-bounce-bounce1 :style="{ backgroundColor: spinnerColor }"></div> <div class=kebab-spinner-double-bounce-bounce2 :style="{ backgroundColor: spinnerColor }"></div></div>'
            },
            function(e, n) {
                e.exports = '<div class="kebab-spinner-fading-circle circle-color-{{_uid}}" :style="{\n    width: spinnerSize,\n    height: spinnerSize\n  }"> <style>.circle-color-{{_uid}} > div::before { background-color: {{ spinnerColor }}; }</style> <div class="is-circle1 kebab-spinner-fading-circle-circle"></div> <div class="is-circle2 kebab-spinner-fading-circle-circle"></div> <div class="is-circle3 kebab-spinner-fading-circle-circle"></div> <div class="is-circle4 kebab-spinner-fading-circle-circle"></div> <div class="is-circle5 kebab-spinner-fading-circle-circle"></div> <div class="is-circle6 kebab-spinner-fading-circle-circle"></div> <div class="is-circle7 kebab-spinner-fading-circle-circle"></div> <div class="is-circle8 kebab-spinner-fading-circle-circle"></div> <div class="is-circle9 kebab-spinner-fading-circle-circle"></div> <div class="is-circle10 kebab-spinner-fading-circle-circle"></div> <div class="is-circle11 kebab-spinner-fading-circle-circle"></div> <div class="is-circle12 kebab-spinner-fading-circle-circle"></div></div>'
            },
            function(e, n) {
                e.exports = "<div class=kebab-spinner-snake :style=\"{\n  'border-top-color': spinnerColor,\n  'border-left-color': spinnerColor,\n  'border-bottom-color': spinnerColor,\n  'height': spinnerSize,\n  'width': spinnerSize\n  }\"></div>"
            },
            function(e, n) {
                e.exports = "<div class=kebab-spinner-triple-bounce> <div class=kebab-spinner-triple-bounce-bounce1 :style=bounceStyle></div> <div class=kebab-spinner-triple-bounce-bounce2 :style=bounceStyle></div> <div class=kebab-spinner-triple-bounce-bounce3 :style=bounceStyle></div></div>"
            },
            function(e, n, t) {
                var i, o;
                t(15),
                i = t(11),
                o = t(3),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n, t) {
                var i, o;
                t(16),
                i = t(12),
                o = t(4),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n, t) {
                var i, o;
                t(17),
                i = t(13),
                o = t(5),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n, t) {
                var i, o;
                t(18),
                i = t(14),
                o = t(6),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n, t) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e: {
                        "default": e
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = t(1),
                r = i(o);
                n["default"] = {
                    name: "double-bounce",
                    mixins: [r["default"]]
                }
            },
            function(e, n, t) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e: {
                        "default": e
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = t(1),
                r = i(o);
                n["default"] = {
                    name: "fading-circle",
                    mixins: [r["default"]]
                }
            },
            function(e, n, t) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e: {
                        "default": e
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = t(1),
                r = i(o);
                n["default"] = {
                    name: "snake",
                    mixins: [r["default"]]
                }
            },
            function(e, n, t) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e: {
                        "default": e
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = t(1),
                r = i(o);
                n["default"] = {
                    name: "triple-bounce",
                    mixins: [r["default"]],
                    computed: {
                        spinnerSize: function() {
                            return (this.size || this.$parent.size || 28) / 3 + "px"
                        },
                        bounceStyle: function() {
                            return {
                                width: this.spinnerSize,
                                height: this.spinnerSize,
                                backgroundColor: this.spinnerColor
                            }
                        }
                    }
                }
            },
            function(e, n) {},
            function(e, n) {},
            function(e, n) {},
            function(e, n) {},
            function(e, n) {
                e.exports = "<span><component :is=spinner></component></span>"
            },
            function(e, n, t) {
                var i, o;
                i = t(22),
                o = t(19),
                e.exports = i || {},
                e.exports.__esModule && (e.exports = e.exports["default"]),
                o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
            },
            function(e, n, t) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e: {
                        "default": e
                    }
                }
                var o = t(20),
                r = i(o);
                e.exports = {
                    Spinner: r["default"],
                    install: function(e) {
                        e.component(r["default"].name, r["default"])
                    }
                }
            },
            function(e, n, t) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = ["snake", "double-bounce", "triple-bounce", "fading-circle"],
                o = function(e) {
                    return "[object Number]" === {}.toString.call(e) ? (i.length <= e && (console.warn("'" + e + "' spinner not found, use the default spinner."), e = 0), i[e]) : ( - 1 === i.indexOf(e) && (console.warn("'" + e + "' spinner not found, use the default spinner."), e = i[0]), e)
                };
                n["default"] = {
                    name: "mt-spinner",
                    computed: {
                        spinner: function() {
                            return "spinner-" + o(this.type)
                        }
                    },
                    components: {
                        SpinnerSnake: t(9),
                        SpinnerDoubleBounce: t(7),
                        SpinnerTripleBounce: t(10),
                        SpinnerFadingCircle: t(8)
                    },
                    props: {
                        type: {
                            "default": 0
                        },
                        size: {
                            type: Number,
                            "default": 28
                        },
                        color: {
                            type: String,
                            "default": "#ccc"
                        }
                    }
                }
            }])
        })
    },
    function(e, n) {
        e.exports = "<div class=mint-indicator v-show=visible transition=mint-indicator> <div class=mint-indicator-wrapper :style=\"{ 'padding': text ? '20px' : '15px' }\"> <mt-spinner class=mint-indicator-spin :type=convertedSpinnerType :size=32></mt-spinner> <span class=mint-indicator-text v-show=text>{{ text }}</span> </div> <div class=mint-indicator-mask></div></div>"
    },
    function(e, n, t) {
        var i, o;
        t(5),
        i = t(4),
        o = t(2),
        e.exports = i || {},
        e.exports.__esModule && (e.exports = e.exports["default"]),
        o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
    },
    function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n["default"] = {
            data: function() {
                return {
                    visible: !1
                }
            },
            computed: {
                convertedSpinnerType: function() {
                    switch (this.spinnerType) {
                    case "double-bounce":
                        return 1;
                    case "triple-bounce":
                        return 2;
                    case "fading-circle":
                        return 3;
                    default:
                        return 0
                    }
                }
            },
            props: {
                text: String,
                spinnerType: {
                    type: String,
                    "default": "snake"
                }
            }
        }
    },
    function(e, n) {},
    function(e, n) {},
    function(n, t) {
        n.exports = e
    }])
});