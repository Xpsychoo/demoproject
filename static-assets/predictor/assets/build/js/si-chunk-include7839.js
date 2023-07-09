!function(e){function r(r){for(var n,u,i=r[0],c=r[1],s=r[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(r);p.length;)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={9:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"static/js/"+({1:"Home",2:"Leaderboard",3:"Matches",4:"Menu",5:"NoMatch",6:"Rules",7:"Terms"}[e]||e)+"."+{1:"9b26b41b",2:"4ff18f66",3:"1d346a72",4:"dc1dc683",5:"bf70b306",6:"bcdd4201",7:"583355b5"}[e]+".chunk.js"}(e);var c=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,t[1](c)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/static-assets/predictor/assets/build/",u.oe=function(e){throw console.error(e),e};var i=this["webpackJsonppredictor-engine-app"]=this["webpackJsonppredictor-engine-app"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var s=0;s<i.length;s++)r(i[s]);var l=c;t()}([])
 var loadJS = function (path) {
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        document.body.appendChild(script);
    }
    loadJS("/static-assets/predictor/assets/build/static/js/vendor.69692d1f.chunk.js")
    loadJS("/static-assets/predictor/assets/build/static/js/main.99fa26f5.chunk.js")
    if (typeof Object.assign != 'function') {
        // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, "assign", {
          value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
              throw new TypeError('Cannot convert undefined or null to object');
            }
      
            var to = Object(target);
      
            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];
      
              if (nextSource != null) { // Skip over if undefined or null
                for (var nextKey in nextSource) {
                  // Avoid bugs when hasOwnProperty is shadowed
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          },
          writable: true,
          configurable: true
        });
      }