import{_ as t,a as n,b as r,c as e,i as o,s,d as a,S as c,T as f,t as u,h as i,j as l,o as h,k as p,l as v,f as g,p as d,q as m,D as R,R as y,E,C as b,u as j,m as x}from"./client.79a19791.js";function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var a=n(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return r(this,o)}}function q(t,n,r){var e=t.slice();return e[1]=n[r],e}function L(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(s),this.h()},l:function(t){n=i(t,"LI",{});var o=l(n);r=i(o,"A",{rel:!0,href:!0});var a=l(r);e=h(a,s),a.forEach(p),o.forEach(p),this.h()},h:function(){v(r,"rel","prefetch"),v(r,"href",o="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&v(r,"href",o)},d:function(t){t&&p(n)}}}function $(t){for(var n,r,e,o,s,a=t[0],c=[],m=0;m<a.length;m+=1)c[m]=L(q(t,a,m));return{c:function(){n=R(),r=f("h1"),e=u("Recent posts"),o=R(),s=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(p),n=E(t),r=i(t,"H1",{});var a=l(r);e=h(a,"Recent posts"),a.forEach(p),o=E(t),s=i(t,"UL",{class:!0});for(var f=l(s),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(p),this.h()},h:function(){document.title="Blog",v(s,"class","svelte-1frg2tf")},m:function(t,a){g(t,n,a),g(t,r,a),d(r,e),g(t,o,a),g(t,s,a);for(var f=0;f<c.length;f+=1)c[f].m(s,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(a=t[0],e=0;e<a.length;e+=1){var o=q(t,a,e);c[e]?c[e].p(o,r):(c[e]=L(o),c[e].c(),c[e].m(s,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=a.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),t&&p(o),t&&p(s),x(c,t)}}}function k(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var C=function(n){t(f,c);var r=B(f);function f(t){var n;return e(this,f),n=r.call(this),o(a(n),t,A,$,s,{posts:0}),n}return f}();export default C;export{k as preload};
