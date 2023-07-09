(() => {
    var At = Object.create;
    var ze = Object.defineProperty;
    var Tt = Object.getOwnPropertyDescriptor;
    var Et = Object.getOwnPropertyNames;
    var Mt = Object.getPrototypeOf,
        xt = Object.prototype.hasOwnProperty;
    var Lt = (e, i) => () => (i || e((i = {
        exports: {}
    }).exports, i), i.exports);
    var It = (e, i, s, r) => {
        if (i && typeof i == "object" || typeof i == "function")
            for (let o of Et(i)) !xt.call(e, o) && o !== s && ze(e, o, {
                get: () => i[o],
                enumerable: !(r = Tt(i, o)) || r.enumerable
            });
        return e
    };
    var kt = (e, i, s) => (s = e != null ? At(Mt(e)) : {}, It(i || !e || !e.__esModule ? ze(s, "default", {
        value: e,
        enumerable: !0
    }) : s, e));
    var je = Lt((bi, fe) => {
        (function (e, i) {
            var s = i(e, e.document, Date);
            e.lazySizes = s, typeof fe == "object" && fe.exports && (fe.exports = s)
        })(typeof window < "u" ? window : {}, function (i, s, r) {
            "use strict";
            var o, n;
            if (function () {
                    var d, u = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        fastLoadedClass: "ls-is-cached",
                        iframeLoadMode: 0,
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    n = i.lazySizesConfig || i.lazysizesConfig || {};
                    for (d in u) d in n || (n[d] = u[d])
                }(), !s || !s.getElementsByClassName) return {
                init: function () {},
                cfg: n,
                noSupport: !0
            };
            var a = s.documentElement,
                p = i.HTMLPictureElement,
                m = "addEventListener",
                g = "getAttribute",
                v = i[m].bind(i),
                S = i.setTimeout,
                Y = i.requestAnimationFrame || S,
                I = i.requestIdleCallback,
                b = /^picture$/i,
                te = ["load", "error", "lazyincluded", "_lazyloaded"],
                Q = {},
                Ie = Array.prototype.forEach,
                ie = function (d, u) {
                    return Q[u] || (Q[u] = new RegExp("(\\s|^)" + u + "(\\s|$)")), Q[u].test(d[g]("class") || "") && Q[u]
                },
                se = function (d, u) {
                    ie(d, u) || d.setAttribute("class", (d[g]("class") || "").trim() + " " + u)
                },
                he = function (d, u) {
                    var y;
                    (y = ie(d, u)) && d.setAttribute("class", (d[g]("class") || "").replace(y, " "))
                },
                ye = function (d, u, y) {
                    var M = y ? m : "removeEventListener";
                    y && ye(d, u), te.forEach(function (E) {
                        d[M](E, u)
                    })
                },
                re = function (d, u, y, M, E) {
                    var _ = s.createEvent("Event");
                    return y || (y = {}), y.instance = o, _.initEvent(u, !M, !E), _.detail = y, d.dispatchEvent(_), _
                },
                be = function (d, u) {
                    var y;
                    !p && (y = i.picturefill || n.pf) ? (u && u.src && !d[g]("srcset") && d.setAttribute("srcset", u.src), y({
                        reevaluate: !0,
                        elements: [d]
                    })) : u && u.src && (d.src = u.src)
                },
                ne = function (d, u) {
                    return (getComputedStyle(d, null) || {})[u]
                },
                ke = function (d, u, y) {
                    for (y = y || d.offsetWidth; y < n.minSize && u && !d._lazysizesWidth;) y = u.offsetWidth, u = u.parentNode;
                    return y
                },
                oe = function () {
                    var d, u, y = [],
                        M = [],
                        E = y,
                        _ = function () {
                            var C = E;
                            for (E = y.length ? M : y, d = !0, u = !1; C.length;) C.shift()();
                            d = !1
                        },
                        x = function (C, T) {
                            d && !T ? C.apply(this, arguments) : (E.push(C), u || (u = !0, (s.hidden ? S : Y)(_)))
                        };
                    return x._lsFlush = _, x
                }(),
                ce = function (d, u) {
                    return u ? function () {
                        oe(d)
                    } : function () {
                        var y = this,
                            M = arguments;
                        oe(function () {
                            d.apply(y, M)
                        })
                    }
                },
                pt = function (d) {
                    var u, y = 0,
                        M = n.throttleDelay,
                        E = n.ricTimeout,
                        _ = function () {
                            u = !1, y = r.now(), d()
                        },
                        x = I && E > 49 ? function () {
                            I(_, {
                                timeout: E
                            }), E !== n.ricTimeout && (E = n.ricTimeout)
                        } : ce(function () {
                            S(_)
                        }, !0);
                    return function (C) {
                        var T;
                        (C = C === !0) && (E = 33), !u && (u = !0, T = M - (r.now() - y), T < 0 && (T = 0), C || T < 9 ? x() : S(x, T))
                    }
                },
                Ne = function (d) {
                    var u, y, M = 99,
                        E = function () {
                            u = null, d()
                        },
                        _ = function () {
                            var x = r.now() - y;
                            x < M ? S(_, M - x) : (I || E)(E)
                        };
                    return function () {
                        y = r.now(), u || (u = S(_, M))
                    }
                },
                Pe = function () {
                    var d, u, y, M, E, _, x, C, T, F, D, B, mt = /^img$/i,
                        gt = /^iframe$/i,
                        wt = "onscroll" in i && !/(gle|ing)bot/.test(navigator.userAgent),
                        ht = 0,
                        ae = 0,
                        z = 0,
                        X = -1,
                        Ue = function (c) {
                            z--, (!c || z < 0 || !c.target) && (z = 0)
                        },
                        Re = function (c) {
                            return B == null && (B = ne(s.body, "visibility") == "hidden"), B || !(ne(c.parentNode, "visibility") == "hidden" && ne(c, "visibility") == "hidden")
                        },
                        yt = function (c, w) {
                            var A, L = c,
                                N = Re(c);
                            for (C -= w, D += w, T -= w, F += w; N && (L = L.offsetParent) && L != s.body && L != a;) N = (ne(L, "opacity") || 1) > 0, N && ne(L, "overflow") != "visible" && (A = L.getBoundingClientRect(), N = F > A.left && T < A.right && D > A.top - 1 && C < A.bottom + 1);
                            return N
                        },
                        Fe = function () {
                            var c, w, A, L, N, P, j, H, G, J, W, K, $ = o.elements;
                            if ((M = n.loadMode) && z < 8 && (c = $.length)) {
                                for (w = 0, X++; w < c; w++)
                                    if (!(!$[w] || $[w]._lazyRace)) {
                                        if (!wt || o.prematureUnveil && o.prematureUnveil($[w])) {
                                            le($[w]);
                                            continue
                                        }
                                        if ((!(H = $[w][g]("data-expand")) || !(P = H * 1)) && (P = ae), J || (J = !n.expand || n.expand < 1 ? a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370 : n.expand, o._defEx = J, W = J * n.expFactor, K = n.hFac, B = null, ae < W && z < 1 && X > 2 && M > 2 && !s.hidden ? (ae = W, X = 0) : M > 1 && X > 1 && z < 6 ? ae = J : ae = ht), G !== P && (_ = innerWidth + P * K, x = innerHeight + P, j = P * -1, G = P), A = $[w].getBoundingClientRect(), (D = A.bottom) >= j && (C = A.top) <= x && (F = A.right) >= j * K && (T = A.left) <= _ && (D || F || T || C) && (n.loadHidden || Re($[w])) && (u && z < 3 && !H && (M < 3 || X < 4) || yt($[w], P))) {
                                            if (le($[w]), N = !0, z > 9) break
                                        } else !N && u && !L && z < 4 && X < 4 && M > 2 && (d[0] || n.preloadAfterLoad) && (d[0] || !H && (D || F || T || C || $[w][g](n.sizesAttr) != "auto")) && (L = d[0] || $[w])
                                    } L && !N && le(L)
                            }
                        },
                        O = pt(Fe),
                        qe = function (c) {
                            var w = c.target;
                            if (w._lazyCache) {
                                delete w._lazyCache;
                                return
                            }
                            Ue(c), se(w, n.loadedClass), he(w, n.loadingClass), ye(w, Oe), re(w, "lazyloaded")
                        },
                        bt = ce(qe),
                        Oe = function (c) {
                            bt({
                                target: c.target
                            })
                        },
                        _t = function (c, w) {
                            var A = c.getAttribute("data-load-mode") || n.iframeLoadMode;
                            A == 0 ? c.contentWindow.location.replace(w) : A == 1 && (c.src = w)
                        },
                        vt = function (c) {
                            var w, A = c[g](n.srcsetAttr);
                            (w = n.customMedia[c[g]("data-media") || c[g]("media")]) && c.setAttribute("media", w), A && c.setAttribute("srcset", A)
                        },
                        St = ce(function (c, w, A, L, N) {
                            var P, j, H, G, J, W;
                            (J = re(c, "lazybeforeunveil", w)).defaultPrevented || (L && (A ? se(c, n.autosizesClass) : c.setAttribute("sizes", L)), j = c[g](n.srcsetAttr), P = c[g](n.srcAttr), N && (H = c.parentNode, G = H && b.test(H.nodeName || "")), W = w.firesLoad || "src" in c && (j || P || G), J = {
                                target: c
                            }, se(c, n.loadingClass), W && (clearTimeout(y), y = S(Ue, 2500), ye(c, Oe, !0)), G && Ie.call(H.getElementsByTagName("source"), vt), j ? c.setAttribute("srcset", j) : P && !G && (gt.test(c.nodeName) ? _t(c, P) : c.src = P), N && (j || G) && be(c, {
                                src: P
                            })), c._lazyRace && delete c._lazyRace, he(c, n.lazyClass), oe(function () {
                                var K = c.complete && c.naturalWidth > 1;
                                (!W || K) && (K && se(c, n.fastLoadedClass), qe(J), c._lazyCache = !0, S(function () {
                                    "_lazyCache" in c && delete c._lazyCache
                                }, 9)), c.loading == "lazy" && z--
                            }, !0)
                        }),
                        le = function (c) {
                            if (!c._lazyRace) {
                                var w, A = mt.test(c.nodeName),
                                    L = A && (c[g](n.sizesAttr) || c[g]("sizes")),
                                    N = L == "auto";
                                (N || !u) && A && (c[g]("src") || c.srcset) && !c.complete && !ie(c, n.errorClass) && ie(c, n.lazyClass) || (w = re(c, "lazyunveilread").detail, N && _e.updateElem(c, !0, c.offsetWidth), c._lazyRace = !0, z++, St(c, w, N, L, A))
                            }
                        },
                        Ct = Ne(function () {
                            n.loadMode = 3, O()
                        }),
                        $e = function () {
                            n.loadMode == 3 && (n.loadMode = 2), Ct()
                        },
                        de = function () {
                            if (!u) {
                                if (r.now() - E < 999) {
                                    S(de, 999);
                                    return
                                }
                                u = !0, n.loadMode = 3, O(), v("scroll", $e, !0)
                            }
                        };
                    return {
                        _: function () {
                            E = r.now(), o.elements = s.getElementsByClassName(n.lazyClass), d = s.getElementsByClassName(n.lazyClass + " " + n.preloadClass), v("scroll", O, !0), v("resize", O, !0), v("pageshow", function (c) {
                                if (c.persisted) {
                                    var w = s.querySelectorAll("." + n.loadingClass);
                                    w.length && w.forEach && Y(function () {
                                        w.forEach(function (A) {
                                            A.complete && le(A)
                                        })
                                    })
                                }
                            }), i.MutationObserver ? new MutationObserver(O).observe(a, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (a[m]("DOMNodeInserted", O, !0), a[m]("DOMAttrModified", O, !0), setInterval(O, 999)), v("hashchange", O, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (c) {
                                s[m](c, O, !0)
                            }), /d$|^c/.test(s.readyState) ? de() : (v("load", de), s[m]("DOMContentLoaded", O), S(de, 2e4)), o.elements.length ? (Fe(), oe._lsFlush()) : O()
                        },
                        checkElems: O,
                        unveil: le,
                        _aLSL: $e
                    }
                }(),
                _e = function () {
                    var d, u = ce(function (_, x, C, T) {
                            var F, D, B;
                            if (_._lazysizesWidth = T, T += "px", _.setAttribute("sizes", T), b.test(x.nodeName || ""))
                                for (F = x.getElementsByTagName("source"), D = 0, B = F.length; D < B; D++) F[D].setAttribute("sizes", T);
                            C.detail.dataAttr || be(_, C.detail)
                        }),
                        y = function (_, x, C) {
                            var T, F = _.parentNode;
                            F && (C = ke(_, F, C), T = re(_, "lazybeforesizes", {
                                width: C,
                                dataAttr: !!x
                            }), T.defaultPrevented || (C = T.detail.width, C && C !== _._lazysizesWidth && u(_, F, T, C)))
                        },
                        M = function () {
                            var _, x = d.length;
                            if (x)
                                for (_ = 0; _ < x; _++) y(d[_])
                        },
                        E = Ne(M);
                    return {
                        _: function () {
                            d = s.getElementsByClassName(n.autosizesClass), v("resize", E)
                        },
                        checkElems: E,
                        updateElem: y
                    }
                }(),
                ue = function () {
                    !ue.i && s.getElementsByClassName && (ue.i = !0, _e._(), Pe._())
                };
            return S(function () {
                n.init && ue()
            }), o = {
                cfg: n,
                autoSizer: _e,
                loader: Pe,
                init: ue,
                uP: be,
                aC: se,
                rC: he,
                hC: ie,
                fire: re,
                gW: ke,
                rAF: oe
            }, o
        })
    });
    var De = {
        modules: {
            shareModule: {
                handled: 0,
                moduleRequired: 1,
                moduleLoaded: 0,
                fbShareSdk: "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId="
            }
        },
        imagePaths: {
            logo: "/static-assets/images/svg/logo.svg?v={{IMGVERSION}}",
            defaultImage: "/static-assets/images/lazy.png",
            defaultProfileImage: "static-assets/images/profile-picture.png?v={{IMGVERSION}}",
            playerThumbImage: "/static-assets/images/players/{{PLAYERID}}.png?v={{IMGVERSION}}",
            countryFlag: "/static-assets/images/flags/{{COUNTRYID}}.png?v={{IMGVERSION}}",
            player: "/static-assets/images/players/{{PLAYER}}.png?v={{IMGVERSION}}",
            teamFlag: "/static-assets/images/countries/{{COUNTRYID}}.png?v={{IMGVERSION}}",
            defaultAvatarImage: "/static-assets/images/cssimages/default-user.png?v={{IMGVERSION}}",
            jerseyImage: "/static-assets/images/cssimages/profile-jersey.png?v={{IMGVERSION}}",
            supportStaff: "/static-assets/images/support-staff/{{ID}}.png?v={{IMGVERSION}}"
        },
        externalFiles: {
            poll: "/static-assets/build/js/pollListing.js",
            galleryHydrator: "/static-assets/build/js/galleryHydrator.js"
        },
        poll: {
            get: "/apiv4/polllisting?pagenumber=1&itemnumber=10&entityrole_mapid={{ENTITYID}}",
            submit: "/apiv4/submitpoll"
        },
        new_poll: {
            get: "/apiv4/anonymouspolllisting?pagenumber=1&itemnumber=10&entityrole_mapid={{ENTITYID}}",
            submit: "/apiv4/submitpoll"
        },
        captcha: {
            sitekey: "6LdGSk0jAAAAAJFbgHx-wVyd4M5L_7Y_NHSa1GZW"
        },
        index: {
            "/": "/static-assets/build/js/subscribeNewsLetter.js",
            "/contact-us": "/static-assets/build/js/contactUsForm.js",
            "/foundation/contact-us": "/static-assets/build/js/contactUs.js",
            "/register": "/static-assets/build/js/loginRegisterProfile.js",
            "/login": "/static-assets/build/js/loginRegisterProfile.js",
            "/reset-password": "/static-assets/build/js/loginRegisterProfile.js",
            "/profile": "/static-assets/build/js/loginRegisterProfile.js",
            "/academy/registration": "/static-assets/build/js/interestForm.js",
            "/foundation/donation": "/static-assets/build/js/donation.js",
            "/foundation/donation/status": "/static-assets/build/js/donationTransactionStatus.js",
            "/membership": "/static-assets/build/js/membership.js",
            "/royals-matchday-scoop": "/static-assets/build/js/matchdayScoop.js",
            "/membership/status": "/static-assets/build/js/membershipStatus.js",
            listingLayout01: "/static-assets/build/js/listing01.js",
            "/campaigns/rr-fan-army-2023": "/static-assets/build/js/campaignPage.js",
            "/campaigns/test-quiz-campaign": "/static-assets/build/js/pollModule.js",
            "/campaigns/rajasthan-day-contest": "/static-assets/build/js/dayContestModule.js",
            "/campaigns/reverse-longest-six-test": "/static-assets/build/js/reversePollModule.js"
        },
        vue: "/static-assets/build/js/vue.min.js",
        api: {
            getProfileUser: "/apiv4/auth/getProfile",
            getMembershipCouponDetails: "/apiv3/getDiscountCouponDetails",
            updateProfileUser: "/apiv4/auth/updateProfile",
            logout: "/apiv4/auth/signout",
            login: "/apiv4/auth/signin",
            register: "/apiv4/auth/register",
            sendOtp: "/apiv4/auth/sendotp",
            verifyOtp: "/apiv4/auth/verifyotp",
            checkUserExist: "/apiv4/auth/checkuserexist",
            forgotPwd: "/apiv4/auth/ForgotPassword",
            resetPwd: "/apiv4/auth/resetpassword",
            deleteUserProfile: "/apiv4/auth/deleteuseraccount",
            sendRecoveryEmail: "/apiv4/auth/sendrecoveryemail",
            recoverUserAccount: "/apiv4/auth/recoveruseraccount",
            listingApi: "/apiv4/listing?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent={{EXCLUDEENT}}&pgnum={{PGNUM}}&inum=10&pgsize={{PGSIZE}}",
            favPlayerListingApi: "/apiv4/assetlisting?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent=&pgnum={{PGNUM}}&inum={{PGSIZE}}&pgsize={{PGSIZE}}&asset_id={{PLAYER_ID}}&asset_type_id=25",
            campaignRegisterUser: "/apiv4/insertcontactuserdetails"
        },
        apis: {
            countries: "/apiv4/getcountrystatecity",
            playersList: "/cricket/static/json/iplfeeds/{{LANG}}{{TEAM_ID}}_all_players_{{SERIES_ID}}.json",
            form: "/apiv4/commonform",
            states: "/apiv4/getcountrystatecity?country_id=101",
            player: "/cricket/static/json/{{PLAYERID}}_json_profile.json",
            donationInsertCartDetails: "/apiv3/InsertcartDetails",
            donationInitiateTransaction: "/apiv3/InitiateTransaction",
            productList: "/apiv4/getProductlisting?pgnum={{PGNUM}}&inum={{INUM}}&pgsize={{PGSIZE}}&entities={{ENTITIES}}&otherent={{OTHERENT}}&p_searchkeyword=",
            donationPaymentResponseSync: "/apiv3/PaymentResponseSync",
            membershipPaymentResponseSync: "/apiv3/PaymentResponseSync"
        },
        pollApi: {
            get: "/functions/fansentiments?asset_id={{ASSET_ID}}",
            post: "/functions/fansentiments"
        },
        redirectUrl: "/foundation/donation"
    };
    var we = kt(je());
    var ve = (e, i, s) => {
        s || (s = 365);
        let r = new Date;
        r.setTime(r.getTime() + s * 24 * 60 * 60 * 1e3);
        let o = e + "=" + i + "; path=/; expires=" + r.toUTCString();
        document.cookie = o
    };
    var Se = e => {
        let i = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        return i == "" ? void 0 : i
    };
    var Pt = e => {
            let i = Object.keys(e);
            return i.length ? "?" + i.map(s => encodeURIComponent(s) + "=" + encodeURIComponent(e[s])).join("&") : ""
        },
        Ce = async (e, i, s = {}) => await (await fetch(e, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...s
            },
            body: JSON.stringify(i)
        })).json(), He = async (e, i, s = {}) => {
            i != null && (e += Pt(i));
            let o = await (await fetch(e, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    ...s
                }
            })).json();
            return o.content ? o.content : o
        }, Ae = e => {
            let i = e + "=",
                s = document.cookie.split(";");
            for (let r = 0; r < s.length; r++) {
                let o = s[r].trim();
                for (; o.charAt(0) == " ";) o = o.substring(1);
                if (o.indexOf(i) == 0) return o.substring(i.length, o.length)
            }
            return ""
        }, Z = e => {
            let i = Ae(e);
            if (!me(i)) try {
                return JSON.parse(i)
            } catch {
                return JSON.parse(decodeURIComponent(i).replace(/\n/g, ""))
            }
        }, pe = e => {
            ve(e, "", -1)
        }, Ut = e => e == null || e === "", me = e => typeof e == "string" ? Ut(e) : e == null;
    var Je = (e = "", i = {}) => {
        console.log(`Event : ${e}`), console.log("Data :", i);
        let s = i;
        s.membership_event = e;
        let r = {
            event: "membership",
            membership_data: s
        };
        window.dataLayer && window.dataLayer.push(r)
    };
    var Ge = () => {
            var e = document.getElementsByTagName("head")[0],
                i = document.createElement("script");
            i.src = `https://www.google.com/recaptcha/api.js?render=${window.webConfig.captcha.sitekey}`, i.defer = !0, e.appendChild(i)
        },
        Ve = () => {
            function e() {
                var g = window.navigator.userAgent,
                    v = window.navigator.platform,
                    S = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                    Y = ["Win32", "Win64", "Windows", "WinCE"],
                    I = ["iPhone", "iPad", "iPod"],
                    b = null;
                return S.indexOf(v) !== -1 ? b = "Mac OS" : I.indexOf(v) !== -1 ? b = "iOS" : Y.indexOf(v) !== -1 ? b = "Windows" : /Android/.test(g) ? b = "Android" : !b && /Linux/.test(v) && (b = "Linux"), b
            }
            var i = navigator.userAgent,
                s, r = "" + parseFloat(navigator.appVersion),
                o = parseInt(navigator.appVersion, 10),
                n, a, p, m = e();
            return (a = i.indexOf("OPR")) != -1 ? (s = "Opera", r = i.substring(a + 4), (a = i.indexOf("Version")) != -1 && (r = i.substring(a + 8))) : (a = i.indexOf("Edg")) != -1 ? (s = "Microsoft Edge", r = i.substring(a + 4)) : (a = i.indexOf("MSIE")) != -1 ? (s = "Microsoft Internet Explorer", r = i.substring(a + 5)) : (a = i.indexOf("Chrome")) != -1 ? (s = "Chrome", r = i.substring(a + 7)) : (a = i.indexOf("Safari")) != -1 ? (s = "Safari", r = i.substring(a + 7), (a = i.indexOf("Version")) != -1 && (r = i.substring(a + 8))) : (a = i.indexOf("Firefox")) != -1 ? (s = "Firefox", r = i.substring(a + 8)) : (n = i.lastIndexOf(" ") + 1) < (a = i.lastIndexOf("/")) && (s = i.substring(n, a), r = i.substring(a + 1), s.toLowerCase() == s.toUpperCase() && (s = navigator.appName)), (p = r.indexOf(";")) != -1 && (r = r.substring(0, p)), (p = r.indexOf(" ")) != -1 && (r = r.substring(0, p)), o = parseInt("" + r, 10), isNaN(o) && (r = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), {
                browserName: s,
                fullVersion: r,
                majorVersion: o,
                os: m
            }
        };
    async function Be(e) {
        let i = Z("_URC"),
            s = i.is_first_login,
            r = await He(window.webConfig.api.getProfileUser, e);
        return i = Z("_URC"), i.is_first_login = s, ve("_URC", encodeURIComponent(JSON.stringify(i))), r
    }
    async function We(e) {
        return Ce(window.webConfig.api.logout, e)
    }
    async function Ze(e) {
        return Ce(window.webConfig.api.recoverUserAccount, e)
    }
    var U = window.clientConfig ? window.clientConfig.timeOutConfig : !1,
        Rt = U && U.initializeWebJs && U.initializeWebJs.timeout || 2e3,
        Ye = U && U.initializeWebJs && U.initializeWebJs.filesToExclude || !1,
        Ft = U && U.lazySizes && U.lazySizes.timeout || 2e3,
        qt = U && U.modifyClasslist && U.modifyClasslist.bodyTimeout || 1500,
        Ot = U && U.initializeMoengage && U.initializeMoengage.timeout || 3e3;
    we.default.cfg.init = !1;
    setInterval(() => {
        window.lazySizes.cfg.lazyClass = "lazy", we.default.init()
    }, Ft);
    window.lazySizes = we.default;
    window.webConfig = De;
    window.analyticsObj = {
        type: "",
        event: "",
        action: "",
        category: "",
        label: "",
        value: "",
        url: "",
        title: "",
        extra: ""
    };
    window.userCookie = Z("_URC");
    var Qe = !1,
        Te = document.documentElement,
        V = document.querySelector(".scroll-top"),
        ee = document.querySelector(".waf-component.waf-loader");
    xe();
    Le();
    window.prefix = "";
    window.location.origin.includes("localhost") && (window.prefix = "");
    window.addEventListener("resize", () => {
        xe(), Le()
    });

    function xe() {
        let e = window.innerHeight * .01;
        Te.style.setProperty("--vh", e + "px")
    }

    function Le() {
        let e = Te.clientWidth * .01;
        Te.style.setProperty("--vw", e + "px")
    }
    var $t = () => {
            V && V.querySelector(".scroll-top-btn").addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })
        },
        it = () => {
            if (V) {
                let e = V.querySelector(".scroll-top-btn");
                window.scrollY > 200 ? (window.innerHeight + window.scrollY >= document.body.offsetHeight, V && (V.style.display = "flex", e.style.display = "flex")) : V && (V.style.display = "none", e.style.display = "none")
            }
        };
    window.scrollToTopFunction = it;
    var zt = () => {
            window.onscroll = () => {
                it()
            }
        },
        Dt = () => {
            try {
                let e = [];
                window.queryParamsToAdd && (e = window.queryParamsToAdd.split(",")), window.currentUrlParams = {};
                let i = window.location.search;
                if (i) {
                    let r = new URLSearchParams(i.split("?")[1]);
                    for (let [o, n] of r.entries()) window.currentUrlParams[o] = n
                }
                window.currentQueryString = "";
                let s;
                Object.keys(window.currentUrlParams).forEach((r, o) => {
                    e.includes(r) && (s ? window.currentQueryString += `&${r}=${window.currentUrlParams[r]}` : (window.currentQueryString = `?${r}=${window.currentUrlParams[r]}`, s = !0))
                })
            } catch (e) {
                console.log("error", e)
            }
        },
        jt = () => {
            setTimeout(() => {
                let e = window.location.origin;
                try {
                    document.querySelectorAll("a").forEach((i, s) => {
                        i.getAttribute("href") && i.getAttribute("href").includes("https") && ge(i.getAttribute("href"), window.currentQueryString) && i.setAttribute("href", ge(i.getAttribute("href"), window.currentQueryString))
                    })
                } catch (i) {
                    console.log(i)
                }
            }, 500)
        },
        Ht = () => {
            document.querySelector(".si-waf-widget") && window.loadJS("/static-assets/build/js/init.js?v=" + window.jsVersion)
        };
    window.webConfig = JSON.parse(JSON.stringify(window.webConfig).replaceAll("{{IMGVERSION}}", window.imgVersion).replaceAll("{{JSVERSION}}", window.jsVersion).replaceAll("{{FEEDVERSION}}", window.feedVersion).replaceAll("{{PREFIX}}", window.prefix));
    window.isMobile = !1;
    var Jt = () => {
            let e = Ve();
            e.os === "iOS" && (document.body.classList.add("ios"), window.isIOS = !0), window.device_type = e.type ? e.type : "", window.browser = e.browserName ? e.browserName : "", window.browser_version = e.fullVersion ? e.fullVersion : "", window.os = e.os ? e.os : "", window.country = "", window.state = "", window.city = "", window.webAttributes = {
                device_type: window.device_type,
                browser: window.browser,
                browser_version: window.browser_version,
                "operating system": window.os,
                country: window.country,
                state: window.state,
                city: window.city
            }, window.deviceAttributes = {
                os_type: "",
                os_version: "",
                app_name: "",
                app_version: "",
                device_type: "",
                city: "",
                country: ""
            }
        },
        R = (e, i) => {
            var s = document.createElement("script");
            s.type = "application/javascript", s.src = e, document.body.appendChild(s), s.onload = () => {
                i && i()
            }
        };
    window.loadJS = R;
    var st = () => {
        let e = document.querySelectorAll(".social-share"),
            i = Array.from(e);
        for (let s = 0; s < i.length; s++)
            if (i[s].getAttribute("data-shown-up-front") && i[s].getAttribute("data-shown-up-front") === "true" && !window.isMobile) {
                let p = function (m) {
                        webConfig.modules.shareModule.moduleLoaded || R("/static-assets/build/js/sharingModule.js?v=" + window.jsVersion, () => {
                            webConfig.modules.shareModule.moduleLoaded = !0
                        })
                    },
                    r = i[s].querySelector(".icon-facebook"),
                    o = i[s].querySelector(".icon-twitter"),
                    n = i[s].querySelector(".icon-whatsapp"),
                    a = i[s].querySelector(".icon-copylink");
                r.addEventListener("click", p(r)), o.addEventListener("click", p(o)), n.addEventListener("click", p(n)), a.addEventListener("click", p(a))
            } else i[s].getAttribute("eventBind") || (i[s].addEventListener("click", function (r) {
                i[s].setAttribute("eventBind", "true"), i[s].querySelector(".share-icon") && i[s].querySelector(".share-icon").tagName === "BUTTON" && (i.forEach(o => {
                    i[s] != o && o.classList.contains("active") && (o.classList.remove("active"), o.querySelector(".share-icon") && o.querySelector(".share-icon").tagName === "BUTTON" && o.querySelector(".share-icon").getAttribute("aria-expanded") === "true" && o.querySelector(".share-icon").setAttribute("aria-expanded", "false"))
                }), i[s].querySelector(".share-icon").setAttribute("aria-expanded", "true")), window.shareClickBtn = this, window.sharedClickedElem = r, webConfig.modules.shareModule.moduleLoaded ? typeof sharingModule < "u" && new sharingModule : (R("/static-assets/build/js/sharingModule.js?v=" + window.jsVersion, () => {}), i[s].classList.add("share-loading"), webConfig.modules.shareModule.moduleLoaded = !0)
            }), i[s].querySelector(".close").addEventListener("click", r => {
                r.preventDefault(), r.stopPropagation(), i[s].querySelector(".share-icon").setAttribute("aria-expanded", "false")
            }))
    };
    window.bindShareEvents = st;
    var Gt = () => {
            window.isMobile = /iphone|ipod|android|nokia|blackberry|BB10|bada|tizen|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())
        },
        Vt = () => {
            let e = new URLSearchParams(window.location.search),
                i = Object.fromEntries(e.entries()),
                {
                    webview: s,
                    platform_type: r,
                    token: o
                } = i;
            window.webViewConfig = {
                isWebView: s || !1,
                platform: r || "web",
                token: o || ""
            }
        },
        rt = () => {
            document.querySelectorAll("button").forEach(e => {
                e.getAttribute("data-expanded") || e.getAttribute("no-click") || e.getAttribute("aria-expanded") && (e.setAttribute("data-expanded", !0), e.addEventListener("click", function (i) {
                    i.stopPropagation(), i.preventDefault(), e.classList.contains("btn-scorestrip-toggle") && document.body.classList.toggle("bottom-scorestrip");
                    let s = e.getAttribute("aria-expanded");
                    document.querySelectorAll(".primary-nav-link.active-link").length && s === "false" && e.closest("li") && ![...e.closest("li").classList].includes("secondary-nav-link") && Ee(), Wt(i.currentTarget) && Ee(), Bt(i.currentTarget);
                    let o = s === "true" ? "false" : s === "false" ? "true" : "";
                    if (nt(i.currentTarget, o), e.classList.contains("btn-site-hamburger") && (o === "true" ? document.querySelector("html").classList.add("no-scroll") : document.querySelector("html").classList.remove("no-scroll")), o)
                        if (o === "true" && e.classList.contains("social-icon")) {
                            if (e.parentElement.parentElement.parentElement.parentElement.click(), navigator.share) return;
                            e.setAttribute("aria-expanded", o), window.shareIconToOpen = e
                        } else if (o === "true" && e.parentElement && e.parentElement.classList && e.parentElement.classList.contains("social-share")) {
                        if (e.parentElement.click(), navigator.share) return;
                        e.setAttribute("aria-expanded", o)
                    } else e.setAttribute("aria-expanded", o);
                    if (e.getAttribute("aria-controls") === "playerMore") {
                        let n = document.querySelector(".waf-player.widget-layout-06 .layout-wrapper .waf-head");
                        n && (o === "true" ? n.classList.add("active") : n.classList.remove("active"))
                    }
                    if (e.classList.contains("waf-accordion-trigger")) {
                        let n = e.getAttribute("aria-controls");
                        o === "true" ? document.getElementById(n) && document.getElementById(n).removeAttribute("hidden") : document.getElementById(n) && document.getElementById(n).setAttribute("hidden", "")
                    }
                }))
            })
        },
        ge = (e, i) => (i = decodeURIComponent(i), e && e.includes("?") && (i = i.replace("?", "&")), e += i);
    window.appendQueryParams = ge;
    var nt = (e, i) => {
            try {
                let s = e.parentElement,
                    r = "active-link";
                if (!s || s.tagName != "LI") return;
                i == "true" ? s.classList.add(r) : s.classList.remove(r)
            } catch (s) {
                console.log(s)
            }
        },
        Bt = e => {
            try {
                if (e.classList.contains("btn-site-hamburger") && e.getAttribute("aria-expanded") == "false") {
                    document.querySelector(".site-nav .primary-nav-link.submenu button").setAttribute("aria-expanded", "true"), document.querySelector(".site-nav .primary-nav-link.submenu").classList.add("active-link");
                    return
                }
            } catch (i) {
                console.log(i)
            }
        };
    window.handleButtonAttributes = rt;
    var Wt = e => {
            try {
                return e.nextElementSibling.tagName != "UL" || e.classList.contains("disableClose")
            } catch {
                return !0
            }
        },
        Ee = () => {
            document.querySelectorAll("button").forEach(e => {
                e.classList.contains("btn-hamburger") || e.classList.contains("waf-accordion-trigger") || (e.setAttribute("aria-expanded", "false"), nt(e, "false"))
            })
        };
    window.closeAllMenus = Ee;

    function Zt() {
        try {
            let e = document.getElementById("toggleTheme"),
                i = localStorage.getItem("theme") || "light";
            i == "light" && (e.checked = !1), i == "dark" && (document.body.classList.add("dark-mode"), e.checked = !0), e.addEventListener("click", function (s) {
                let r = "dark";
                s.currentTarget.checked ? document.body.classList.add("dark-mode") : (r = "light", document.body.classList.remove("dark-mode")), localStorage.setItem("theme", r)
            })
        } catch (e) {
            console.log(e)
        }
    }
    Zt();
    var Yt = () => {
            let e = location.pathname;
            window.webConfig && window.webConfig.index && window.webConfig.index[e] ? R(window.webConfig.index[e] + "?v=" + window.jsVersion, () => {}) : document.querySelector(".waf-campaign-template-1") ? R(window.webConfig.index["/campaigns/rr-fan-army-2023"] + "?v=" + window.jsVersion, () => {}) : document.querySelector(".waf-campaign-template-2") ? R(window.webConfig.index["/campaigns/test-quiz-campaign"] + "?v=" + window.jsVersion, () => {}) : document.querySelector(".waf-campaign-template-3") ? R(window.webConfig.index["/campaigns/rajasthan-day-contest"] + "?v=" + window.jsVersion, () => {}) : document.querySelector(".waf-campaign-template-4") && R(window.webConfig.index["/campaigns/reverse-longest-six-test"] + "?v=" + window.jsVersion, () => {}), window.listingSelectorList && window.listingSelectorList.length && window.location.pathname != "/profile" && (window.listingLayout01 ? R("/static-assets/build/js/listing01.js?v=" + window.jsVersion, () => {}) : R(window.webConfig.externalFiles.listing + "?v=" + window.jsVersion, () => {}))
        },
        Qt = () => {
            ee && (ee.classList.add("waf-loading"), ee.style.display = "flex", document.querySelector("html").classList.add("no-scroll"))
        },
        Xt = () => {
            ee && (ee.classList.remove("waf-loading"), ee.style.display = "none", document.querySelector("html").classList.remove("no-scroll"))
        };
    window.showLoader = Qt;
    window.hideLoader = Xt;
    var Kt = () => {
            window.addEventListener("scroll", () => {
                window.scrollY === 0 ? document.body.classList.remove("sticky") : document.body.classList.add("sticky")
            })
        },
        ot = () => {
            if (!window.Vue) window.loadJS(window.webConfig.vue + "?v=" + window.jsVersion, () => {
                let e = [];
                document.querySelector(".site-content.site-poll") && e.push("poll"), document.querySelector(".waf-component.waf-newsletter") && e.push("subscribe"), e.forEach(i => {
                    window.webConfig.externalFiles[i] && R(window.webConfig.externalFiles[i] + "?v=" + window.jsVersion, () => {})
                })
            });
            else {
                let e = [];
                document.querySelector(".site-content.site-poll") && e.push("poll"), ["/press-clippings"].includes(window.location.pathname) && e.push("pressRelease"), e.forEach(i => {
                    R(window.webConfig.externalFiles[i] + "?v=" + window.jsVersion, () => {})
                })
            }
        },
        at = async () => {
            Ge(), setTimeout(() => {
                grecaptcha && grecaptcha.ready(function () {
                    grecaptcha.execute(`${window.webConfig.captcha.sitekey}`, {
                        action: "submit"
                    }).then(async function (e) {
                        let i = document.querySelectorAll(".logoutButton") || document.querySelectorAll(".user-logout");
                        i && i.forEach(n => {
                            n.classList.add("loading")
                        });
                        let r = {
                            data: {
                                user_guid: Z("_URC").user_guid,
                                captcha: e
                            }
                        };
                        if (console.log(r, "payLoad-----------------"), (await We(r)).data.status === "1") {
                            console.log("mo logout"), lt();
                            try {
                                Moengage && Moengage.destroy_session()
                            } catch {
                                console.log("Moengage Not found")
                            }
                            location.href = window.currentQueryString ? `/${window.currentQueryString}` : "/"
                        }
                        i && i.forEach(n => {
                            n.classList.remove("loading")
                        })
                    })
                })
            }, 1e3)
        };
    window.logout = at;
    var lt = (e = "", i = !1) => {
            let s = {
                event: "userInfo",
                user_data: {
                    user_id: e,
                    login_status: i
                }
            };
            window.dataLayer && window.dataLayer.push(s)
        },
        ei = async () => {
            if (!window.userCookie) return;
            let i = {
                    token: window.userCookie.user_guid
                },
                s = await Be(i);
            if (["1"].includes(s.data.status)) {
                let b = s.data.user || {},
                    te = b.mobile_no ? `${b.country_code}${b.mobile_no}` : "";
                lt(te, !0)
            }
            if (ui(), window.profileData = s, window.listingSelectorList && window.listingSelectorList.length && window.location.pathname == "/profile" && (window.listingLayout01 ? R("/static-assets/build/js/listing01.js?v=" + window.jsVersion, () => {}) : R(window.webConfig.externalFiles.listing + "?v=" + window.jsVersion, () => {})), me(s) || s && me(s.data)) {
                Ke();
                return
            }
            if (s.status == 0 || s.status == 500 || s.data.status == 0 || s.status == 401) {
                Ke();
                return
            }
            let r = document.querySelectorAll(".hideAfterLogin"),
                o = document.querySelectorAll(".showAfterLogin"),
                n = document.querySelectorAll(".logoutButton");
            r && r.length && r.forEach(b => {
                b.style.display = "none"
            }), o && o.length && o.forEach(b => {
                b.style.display = ""
            }), n && n.length && n.forEach(b => {
                b.addEventListener("click", at)
            });
            let a = document.querySelectorAll(".profileImageTargetContainer") || document.querySelectorAll(".login-wrap"),
                p = document.querySelectorAll(".userNameTarget") || document.querySelectorAll(".user-name .btn-text"),
                m = document.querySelectorAll(".mobileUserNameTarget") || document.querySelectorAll(".user-name .btn-text"),
                {
                    first_name: g,
                    last_name: v,
                    social_user_image: S,
                    social_user_name: Y
                } = s.data.user;
            window.social_user_name = Y, window.social_user_image = S;
            let I;
            a.forEach(async b => {
                if (I = S != "" ? S : b.querySelector("img") ? b.querySelector("img").getAttribute("data-default-img") : "", I) {
                    let te = S ? +new Date : +window.imgVersion,
                        Q = I.includes("?") ? "&" : "?";
                    I = I + Q + "v=" + te, await ti(I) ? I = "" : (b.querySelector("img") && b.querySelector("img").setAttribute("src", I), b.querySelector("img") && b.querySelector("img").setAttribute("data-src", I), b.querySelector("img").style.display = "")
                }
                I || (b.querySelector("img").style.display = "none", b.querySelector(".temp-user").innerText = ii(), b.querySelector(".temp-user").style.display = "")
            }), p.forEach(b => {
                b.innerText = `${g}`.trim()
            })
        }, ti = async e => {
            try {
                let i = {
                        type: "image/png"
                    },
                    s = [];
                e = e.includes("http") ? e : window.location.origin + e, s.push(Xe(window.location.origin + webConfig.imagePaths.defaultImage, i)), s.push(Xe(e, i));
                let [r, o] = await Promise.all(s);
                return r == o
            } catch (i) {
                return console.log(i), !1
            }
        }, Xe = (e, i) => new Promise(s => {
            let r = new Image;
            r.crossOrigin = "Anonymous", r.onload = () => {
                let o = document.createElement("canvas"),
                    n = o.getContext("2d"),
                    a;
                o.height = r.naturalHeight, o.width = r.naturalWidth, n.drawImage(r, 0, 0), a = o.toDataURL(i), s(a)
            }, typeof e == "string" ? r.src = e : r.src = e.src
        }), ii = () => {
            try {
                let e = userCookie.first_name.split("")[0] || "",
                    i = userCookie.last_name.split("")[0] || "";
                return e.toUpperCase() + i.toUpperCase()
            } catch (e) {
                console.log(e)
            }
        };

    function Ke() {
        pe("_URC"), pe("_USC"), setTimeout(() => {
            location.reload()
        }, 1e3)
    }
    var si = () => {
            window.applyShowcaseSwiper && new Swiper(window.applyShowcaseSwiper.selector, window.applyShowcaseSwiper.swiperConfig)
        },
        ri = () => {
            let e = Ae("loginmessageinfo");
            e && (ct("Email already exists."), pe("loginmessageinfo"), window.loginMessageInfo = e, console.log("cookie deleted loginmessageinfo"))
        },
        ni = async () => {
            let e = Se("recover");
            if (e) {
                window.recoveryKey = e;
                let s = await Ze({
                    data: {
                        verification_key: e,
                        platform_version: 1,
                        platform_type: "1",
                        device_name: "web"
                    }
                });
                s && s.data && s.data.message && ct(s.data.message)
            }
        }, ct = e => {
            try {
                let i = document.querySelector(".commonMessagePopup");
                if (!i) return;
                let s = i.querySelector(".messageContent");
                s && e && (s.innerText = e);
                let r = i.querySelector("button");
                r && r.addEventListener("click", () => {
                    i.style.display = "none", document.querySelector("html").classList.remove("no-scroll")
                }), i.style.display = "", document.querySelector("html").classList.add("no-scroll")
            } catch (i) {
                console.log(i)
            }
        }, oi = () => {
            window.location.pathname.includes("press-clippings") && document.addEventListener("click", function (e) {
                let i = document.querySelector(".modal-window");
                e.target.className === "btn-close" && (document.querySelector('button[aria-expanded="true"]').setAttribute("aria-expanded", !1), i.style.display = "none", document.querySelector("html").classList.remove("no-scroll")), setTimeout(() => {
                    let s = document.querySelector('article button[aria-expanded="true"]');
                    if (s) {
                        let r = s.getAttribute("data-article-guid"),
                            n = document.querySelector(`article[data-article-guid="${r}"]`).getAttribute("data-popup-data-src");
                        i.style.display = "flex", document.querySelector("html").classList.add("no-scroll");
                        let a = i.querySelector("img");
                        a.setAttribute("data-src", n), a.setAttribute("src", n), document.querySelector(".btn-close").setAttribute("aria-expanded", !0)
                    }
                }, 100)
            }, !0)
        }, ai = () => {
            try {
                if (document.querySelector(".waf-component.waf-detail.waf-gallery-page")) {
                    let e = window.photoSwiperOptions[window.isMobile ? "mobile" : "web"].preview;
                    if (e && !e.prevent_direct) {
                        let i = new window.Swiper(".preview-swiper", e);
                        document.querySelector(".waf-gallery-page").addEventListener(window.isMobile ? "touchend" : "click", s => {
                            let r = document.querySelector(".modal-window");
                            s.target.className === "btn-close" ? (document.querySelector('button[aria-expanded="true"]').setAttribute("aria-expanded", !1), r.style.display = "none", document.querySelector("html").classList.remove("no-scroll")) : setTimeout(() => {
                                let o = document.querySelector('.article-gallery-item button[aria-expanded="true"]');
                                if (!(s.target.classList.contains("swiper-button-prev") || s.target.classList.contains("swiper-button-next"))) {
                                    if (o && s.target.tagName === "BUTTON") {
                                        let n = o.getAttribute("data-img-idx");
                                        r.style.display = "flex", document.querySelector("html").classList.add("no-scroll"), i.slideTo(n), i.update(), setTimeout(() => {
                                            i.update()
                                        }, 300), setTimeout(() => {
                                            i.update()
                                        }, 500), window.photoModalSwiper = i
                                    }
                                    document.querySelector(".btn-close").setAttribute("aria-expanded", !0)
                                }
                            }, 100)
                        }, !0)
                    }
                    webConfig.externalFiles.galleryHydrator && window.loadJS(webConfig.externalFiles.galleryHydrator + "?v=" + window.jsVersion)
                }
            } catch (e) {
                console.log("e---", e)
            }
        }, li = () => {
            try {
                let n = function () {
                        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                    },
                    a = function (m) {
                        e || m.addEventListener("mouseover", () => {
                            r.querySelector(".article-item-active") && r.querySelector(".article-item-active").classList.remove("article-item-active"), m.classList.add("article-item-active")
                        })
                    },
                    p = function (m) {
                        e || m.addEventListener("mouseover", () => {
                            i.querySelector(".article-item-active") && i.querySelector(".article-item-active").classList.remove("article-item-active"), m.classList.add("article-item-active")
                        })
                    },
                    e = n(),
                    i = document.querySelector(".home-tv-list"),
                    s = document.querySelectorAll(".home-tv-list .article-item"),
                    r = document.querySelector(".tv-list-page"),
                    o = document.querySelectorAll(".tv-list-page .article-item");
                s && (s[0] && s[0].classList.add("article-item-active"), s.forEach(p)), o && (o[0] && o[0].classList.add("article-item-active"), o.forEach(a))
            } catch {}
        };
    window.pressClippingModalToggle = oi;
    var ci = () => {
            try {
                setTimeout(() => {
                    document.querySelectorAll(".filter-section .more-filters a") && document.querySelectorAll(".filter-section .more-filters a").length && (document.querySelectorAll(".filter-section .more-filters a").forEach(e => e.addEventListener("click", i => {
                        i.preventDefault(), window.selectedHref = i.target.getAttribute("href");
                        let s = document.querySelector(".waf-select-box.active");
                        window.defaultFilter || (window.defaultFilter = s.querySelector(".selected-title .title").textContent), s.querySelector(".selected-title .title").textContent = i.target.textContent
                    })), document.querySelectorAll(".filter-section .more-filters button").forEach(e => {
                        e.addEventListener("click", i => {
                            let s = e.getAttribute("aria-label");
                            s === "Apply Filters" ? window.selectedHref && window.location.pathname !== window.selectedHref && (window.location.href = window.selectedHref) : s === "Reset Filters" && document.querySelector(".filter-section .more-filters .btn-cancel").click()
                        })
                    }), document.querySelector(".filter-section .more-filters .btn-cancel").addEventListener("click", () => {
                        window.selectedHref = "", window.defaultFilter && (document.querySelector(".more-filters .waf-select-box .selected-title .title").textContent = window.defaultFilter, window.defaultFilter = null)
                    }))
                }, 1500)
            } catch {}
        },
        ui = () => {
            try {
                if (!Se("social-login")) return;
                let i = Z("_URC"),
                    s = {
                        text: "Login",
                        page_name: "Login Screen",
                        page_url: window.location.href
                    };
                if (Je("user_login", s), setTimeout(() => {}, 100), i.is_first_login == 1) {
                    window.location.href = `/profile${window.currentQueryString}`;
                    return
                }
            } catch (e) {
                console.log(e)
            }
        },
        Me = () => {
            window.subscriberIdTimer = window.subscriberIdTimer || 1e3, window.subscriberIdCount = window.subscriberIdCount || 0, window._aimtellGetSubscriberID && !window.factSubscriberId && window.subscriberIdCount < 4 ? ut() : setTimeout(() => {
                window.subscriberIdTimer = window.subscriberIdTimer * 2, window.subscriberIdCount = window.subscriberIdCount + 1, Me()
            }, window.subscriberIdTimer)
        },
        ut = () => {
            try {
                window._aimtellGetSubscriberID().then(e => {
                    window.factSubscriberId = e
                }).catch(e => {
                    Me()
                })
            } catch {
                Me()
            }
        },
        di = () => {
            Qe || (Qe = !0, window.detailScriptsToLoad && window.detailScriptsToLoad.split("|||").forEach(e => {
                e && window.loadJS(e)
            }))
        },
        fi = () => {
            try {
                document.querySelectorAll(".onpage-modal").forEach(e => {
                    e.addEventListener("click", () => {
                        e.querySelector(".modal-window").style.display = "flex", document.querySelector("html").classList.add("no-scroll")
                    }), e.querySelector(".btn-close").addEventListener("click", () => {
                        e.querySelector(".modal-window").style.display = "none", document.querySelector("html").classList.remove("no-scroll")
                    })
                })
            } catch (e) {
                console.log(e)
            }
        },
        pi = () => {
            try {
                let e = document.querySelector(".hasTabsClick");
                if (!e) return;
                e.querySelector("#tab1").addEventListener("click", () => {
                    e.querySelector("#tab1").classList.add("active"), e.querySelector("#tab2").classList.remove("active"), e.querySelector('[data-tab-id="tab2"]').style.display = "none", e.querySelector('[data-tab-id="tab1"]').style.display = ""
                }), e.querySelector("#tab2").addEventListener("click", () => {
                    e.querySelector("#tab2").classList.add("active"), e.querySelector("#tab1").classList.remove("active"), e.querySelector('[data-tab-id="tab1"]').style.display = "none", e.querySelector('[data-tab-id="tab2"]').style.display = ""
                })
            } catch (e) {
                console.log(e)
            }
        },
        mi = () => {
            let e = document.querySelector("#scrollIndicatorButton");
            if (e) {
                if (window.location.pathname !== "/") {
                    e.style.display = "none";
                    return
                }
                e && e.addEventListener("click", () => {
                    let i = document.querySelector(".waf-row-showcase").clientHeight,
                        s = document.querySelector(".header-wrap").clientHeight;
                    window.scrollTo(0, i - s)
                })
            }
        },
        dt = () => {
            let e = document.querySelector('[widget-id="si-scorestrip-widget-layout-07"]');
            if (e) {
                let i = e.getAttribute("data-match-state"),
                    s = e.getAttribute("data-check-state");
                i && s && (s.includes(i) ? document.querySelector("body").classList.add("score-card") : document.querySelector("body").classList.remove("score-card"))
            }
        },
        ft = () => {
            let e = new URLSearchParams(window.location.search),
                i = Object.fromEntries(e.entries()),
                {
                    platform_id: s
                } = i,
                r = window.location.href,
                o = n => {
                    let a = n.composedPath ? n.composedPath() : n.path;
                    for (let p = 0; p < 10; p++) {
                        let m = a[p];
                        if (m.getAttribute("link")) return m
                    }
                };
            i.webview && (window.teamListingWebView = n => {
                if (console.log("here teamListingWebView", n), s == 2) try {
                    window.mobileApp = window.mobileApp || {}, window.mobileApp.teamListingWebView(n)
                } catch (a) {
                    console.log("Error teamListingWebView Msg Android:", a)
                } else if (s == 3) try {
                    window.webkit.messageHandlers.teamListingWebView.postMessage(n)
                } catch (a) {
                    console.log("Error teamListingWebView Msg IOS:", a)
                }
            }, s == 2 ? window.addEventListener("click", n => {
                if (r.includes("/teams?")) {
                    let a = n.target,
                        p = `${window.location.origin}${a.getAttribute("link")}?webview=true`,
                        m = a.getAttribute("title");
                    if (m) {
                        let g = {
                            menu_id: 11,
                            display_title: m,
                            menu_icon: "menu_icon_11",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: p
                        };
                        window.teamListingWebView(JSON.stringify(g))
                    }
                } else if (r.includes("/teams/") && r.includes("/squad?")) {
                    let a = n.target,
                        p = a.getAttribute("data-name"),
                        m = a.getAttribute("data-id"),
                        g = a.getAttribute("link");
                    if (a && p && m && g) {
                        let v = {
                            menu_id: 12,
                            display_title: p,
                            menu_icon: "menu_icon_12",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${g}?webview=true`
                        };
                        window.squadListingWebView(JSON.stringify(v))
                    }
                } else if (r.includes("schedule-fixtures-results?")) {
                    let a = n.target,
                        p = o(n),
                        m = a.getAttribute("link") || p.getAttribute("link"),
                        g = a.getAttribute("data-title") || p.getAttribute("data-title"),
                        v = a.getAttribute("data-title-short") || p.getAttribute("data-title-short");
                    if (m && g && v) {
                        let S = {
                            menu_id: 9,
                            display_title: g,
                            display_title_short: v,
                            menu_icon: "menu_icon_9",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.fixturesPageWebView(JSON.stringify(S))
                    } else if (m && g && !v) {
                        let S = {
                            menu_id: 9,
                            display_title: g,
                            display_title_short: g,
                            menu_icon: "menu_icon_9",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.fixturesPageWebView(JSON.stringify(S))
                    }
                } else if (r.includes("/stats?")) {
                    let a = n.target,
                        p = n.path[1],
                        m = a.getAttribute("link") || p.getAttribute("link"),
                        g = a.getAttribute("data-title") || p.getAttribute("data-title");
                    if (m && g) {
                        let v = {
                            menu_id: 14,
                            display_title: g,
                            menu_icon: "menu_icon_14",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.statsListingPageWebView(JSON.stringify(v))
                    }
                }
            }) : s == 3 && window.addEventListener("click", function (n) {
                if (r.includes("/teams?")) try {
                    let a = n.target,
                        p = `${window.location.origin}${a.getAttribute("link")}?webview=true`,
                        m = a.getAttribute("title");
                    if (m) {
                        let g = {
                            menu_id: 11,
                            display_title: m,
                            menu_icon: "menu_icon_11",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: p
                        };
                        window.teamListingWebView(JSON.stringify(g))
                    }
                } catch (a) {
                    console.log(a), window.teamListingWebView(JSON.stringify(a))
                } else if (r.includes("/teams/") && r.includes("/squad?")) {
                    let a = n.target,
                        p = a.getAttribute("data-name"),
                        m = a.getAttribute("data-id"),
                        g = a.getAttribute("link");
                    if (a && p && m && g) {
                        let v = {
                            menu_id: 12,
                            display_title: p,
                            menu_icon: "menu_icon_12",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${g}?webview=true`
                        };
                        window.squadListingWebView(JSON.stringify(v))
                    }
                } else if (r.includes("schedule-fixtures-results?")) try {
                    let a = n.target,
                        p = n.composedPath()[1],
                        m = a.getAttribute("link") || p.getAttribute("link"),
                        g = a.getAttribute("data-title") || p.getAttribute("data-title"),
                        v = a.getAttribute("data-title-short") || p.getAttribute("data-title-short");
                    if (m && g && v) {
                        let S = {
                            menu_id: 9,
                            display_title: g,
                            display_title_short: v,
                            menu_icon: "menu_icon_9",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.fixturesPageWebView(JSON.stringify(S))
                    } else if (m && g && !v) {
                        let S = {
                            menu_id: 9,
                            display_title: g,
                            display_title_short: g,
                            menu_icon: "menu_icon_9",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.fixturesPageWebView(JSON.stringify(S))
                    }
                } catch (a) {
                    console.log(a), window.fixturesPageWebView(JSON.stringify(a))
                } else if (r.includes("/stats?")) {
                    let a = n.target,
                        p = n.composedPath()[1],
                        m = a.getAttribute("link") || p.getAttribute("link"),
                        g = a.getAttribute("data-title") || p.getAttribute("data-title");
                    if (m && g) {
                        let v = {
                            menu_id: 14,
                            display_title: g,
                            menu_icon: "menu_icon_14",
                            is_visible: !0,
                            is_bottom_bar: !0,
                            has_interaction: !0,
                            is_webview: !0,
                            in_app_browser: !0,
                            is_external_webview: !1,
                            webview_url: `${window.location.origin}${m}?webview=true`
                        };
                        window.statsListingPageWebView(JSON.stringify(v))
                    }
                }
            }), window.disableAllHref())
        };
    window.disableAllHref = () => {
        let e = document.querySelectorAll("a");
        for (let i = 0; i < e.length; i++) {
            let s = e[i],
                r = s.getAttribute("href"),
                o = s.getAttribute("data-islink");
            r && !o && (document.querySelectorAll("a")[i].setAttribute("link", r), document.querySelectorAll("a")[i].removeAttribute("href"))
        }
    };
    window.addLiveScoreClass = dt;
    var gi = (e, i) => {
            document.body.classList[i](e)
        },
        wi = () => {
            (function (e, i, s, r, o, n, a, p) {
                e.moengage_object = o, t = {}, q = function (m) {
                    return function () {
                        (e.moengage_q = e.moengage_q || []).push({
                            f: m,
                            a: arguments
                        })
                    }
                }, f = ["track_event", "add_user_attribute", "add_first_name", "add_last_name", "add_email", "add_mobile", "add_user_name", "add_gender", "add_birthday", "destroy_session", "add_unique_user_id", "moe_events", "call_web_push", "track", "location_type_attribute"], h = {
                    onsite: ["getData", "registerCallback"]
                };
                for (k in f) t[f[k]] = q(f[k]);
                for (k in h)
                    for (l in h[k]) t[k] == null && (t[k] = {}), t[k][h[k][l]] = q(k + "." + h[k][l]);
                n = i.createElement(s), a = i.getElementsByTagName(s)[0], n.async = 1, n.src = r, a.parentNode.insertBefore(n, a), e.moe = e.moe || function () {
                    return p = arguments[0], t
                }, n.onload = function () {
                    p && (e[o] = moe(p))
                }
            })(window, document, "script", "https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js", "Moengage"), Moengage = moe(window.clientConfig.trackingConfig.moengage)
        },
        et = () => {
            Dt(), jt(), ge(), Gt(), Jt(), Ht(), st(), Yt(), rt(), $t(), zt(), xe(), Le(), Kt(), si(), ri(), ni(), ai(), ci(), ut(), di(), fi(), pi(), dt(), setTimeout(() => {
                ot(), ft()
            }, 1e3), Vt(), setTimeout(() => {
                li()
            }, 100), mi(), setTimeout(() => {
                gi("load-bg-pattern", "add")
            }, qt), setTimeout(() => {
                let {
                    trackingConfig: e
                } = window.clientConfig;
                e && e.moengage && (wi(), ei())
            }, Ot)
        },
        tt = () => {
            let e = window.location.pathname;
            Ye && Ye.includes(e) ? (et(), ot(), ft()) : setTimeout(() => {
                et()
            }, Rt)
        };
    document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive" ? tt() : document.addEventListener("DOMContentLoaded", () => {
        tt()
    });
})();