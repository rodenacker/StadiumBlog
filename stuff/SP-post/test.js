var ss_form = { account: "MzawMDE1NzI0AwA", formID: "M0gzTDE1MzfSTUo1StU1sUhK001KNE7TNbcwtzQ3sLBINTdMAQA" };
ss_form.width = "100%";
ss_form.domain = "app-3QN8IOA3RO.marketingautomation.services";
!(function (e) {
    var t,
        n,
        o,
        r,
        i,
        a,
        d,
        c,
        s,
        l = Math.random().toString(36).substring(7),
        m = document.referrer,
        h = [],
        u = function () {
            var i;
            if (e.target_id) {
                if (!(i = document.getElementById(e.target_id))) return;
                if (i.getAttribute("ssformAdded")) return;
                i.setAttribute("ssformAdded", 1);
            } else e.polling = !1;
            e.intervalId && !e.polling && (clearInterval(e.intervalId), (e.intervalId = 0));
            var a = (function (e) {
                if (e) {
                    var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
                    return t ? unescape(t[2]) : null;
                }
                return document.cookie;
            })("__ss_tk");
            "http:" === window.location.protocol && h.push("_noSsl=1"), a && h.push("_tk=" + a);
            var c = h.length ? h.join("&") : "",
                m = "instance=" + l,
                u = [
                    "<iframe",
                    'id="' + (s = "ssf_" + n) + '"',
                    'data-form-id="' + n + '"',
                    'data-instance-id="' + l + '"',
                    'src="' + d + t + "/" + n + ("" !== c ? "?" + c + "&" + m : "?" + m) + '"',
                    'style="overflow-y: auto;"',
                    'frameborder="0"',
                    'height="' + (r || 1e3) + '"',
                    'width="' + (o || 500) + '"',
                    "></iframe>",
                ].join(" ");
            console.log(u);
            i ? (i.innerHTML = u) : document.write(u),
                "function" != typeof window.postMessage &&
                    setInterval(function () {
                        window.location.hash.match(/^#redirectURL=(.*)/) && (window.top.location = RegExp.$1);
                    }, 500);
        },
        f = function (e) {
            var t = e.data;
            if (t && "redirect" === t.action && t.url) {
                if ("/" === t.url.charAt(0)) {
                    var o = document.createElement("a");
                    if (((o.href = window.top.location), "pages.services" === o.hostname)) {
                        var r = o.pathname.split("/", 2);
                        2 === r.length && -1 === t.url.indexOf(r[1]) && (t.url = "/" + r[1] + t.url);
                    }
                }
                window.top.location = t.url;
            } else if (t && t.formID && t.formID === n && (null === t.instanceID || void 0 === t.instanceID || t.instanceID === l)) {
                var i = '[data-form-id="' + n + '"][data-instance-id="' + l + '"]';
                (c = document.querySelector(i)) || (c = document.getElementById(s)),
                    t.force ? (c.height = t.height || c.height) : (c.height = Math.max(t.height, c.height)),
                    c.parentNode &&
                        ((c.parentNode.style.minHeight = t.height + "px"),
                        c.parentNode.parentNode && (c.parentNode.parentNode.style.minHeight = t.height + "px"));
            }
        };
    !(function () {
        if (((t = e.account), (n = e.formID), (o = e.width || "100%"), (r = 200), (i = e.domain), (a = e.hidden), (d = "https://"), t && n && i)) {
            if (((d += i ? i + "/prospector/form/" : "app.sharpspring.com/prospector/form/"), a))
                for (var c in a) a.hasOwnProperty(c) && h.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            m && h.push("rf__sb=" + encodeURIComponent(m)),
                void 0 !== window.addEventListener
                    ? window.addEventListener("message", f, !1)
                    : void 0 !== window.attachEvent && window.attachEvent("onmessage", f),
                "complete" !== document.readyState && e.target_id
                    ? document.addEventListener
                        ? document.addEventListener("DOMContentLoaded", function () {
                              e.intervalId = setInterval(function () {
                                  u();
                              }, 100);
                          })
                        : document.attachEvent("onreadystatechange", function () {
                              "complete" === document.readyState && u();
                          })
                    : u();
        } else console && console.warn && console.warn("It seems that the embed code was not implemented correctly. ");
    })();
})(ss_form);
