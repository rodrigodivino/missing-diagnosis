import{S as e,i as a,s as t,K as s,u as o,t as r,c as n,v as l,d as i,j as c,f as u,g as d,a as m,k as h,m as p,l as f,o as v,x as b,h as g,P as E,J as x,C as w,F as q,B as T,Q as y,E as I,q as L,e as O,y as N,z as M,A,D as C,r as P}from"./client.d559b0e3.js";import"./index.404f3a73.js";import H from"./Tutorial.821d657b.js";import{J as z,q as $,a as D}from"./json-url-single.6357a0ae.js";function B(e,a,t){const s=e.slice();return s[16]=a[t],s}function k(e,a,t){const s=e.slice();return s[19]=a[t],s}function U(e){let a,t;return{c(){a=s("h2"),t=r("ATENÇÃO: Esta questão possui 5 imagens. Use a barra de rolagem para ver todas."),this.h()},l(e){a=n(e,"H2",{class:!0});var s=i(a);t=c(s,"ATENÇÃO: Esta questão possui 5 imagens. Use a barra de rolagem para ver todas."),s.forEach(u),this.h()},h(){d(a,"class","mobile-warn svelte-6xf4xx")},m(e,s){m(e,a,s),h(a,t)},d(e){e&&u(a)}}}function S(e){let a,t;return{c(){a=s("h2"),t=r("ATENÇÃO: Esta questão possui 2 imagens. Use a barra de rolagem para ver todas."),this.h()},l(e){a=n(e,"H2",{class:!0});var s=i(a);t=c(s,"ATENÇÃO: Esta questão possui 2 imagens. Use a barra de rolagem para ver todas."),s.forEach(u),this.h()},h(){d(a,"class","mobile-warn svelte-6xf4xx")},m(e,s){m(e,a,s),h(a,t)},d(e){e&&u(a)}}}function W(e){let a,t,v,b,g,E,x,w,q,T,y,I=e[19].optionText+"";return{c(){a=s("input"),b=o(),g=s("label"),E=r(I),x=o(),q=s("br"),this.h()},l(e){a=n(e,"INPUT",{type:!0,id:!0,name:!0,value:!0}),b=l(e),g=n(e,"LABEL",{for:!0});var t=i(g);E=c(t,I),x=l(t),t.forEach(u),q=n(e,"BR",{}),this.h()},h(){d(a,"type","radio"),d(a,"id",t=e[19].id),d(a,"name","answer"),a.__value=v=e[19].id,a.value=a.__value,e[12][0].push(a),d(g,"for",w=e[19].id)},m(t,s){m(t,a,s),a.checked=a.__value===e[7],m(t,b,s),m(t,g,s),h(g,E),h(g,x),m(t,q,s),T||(y=p(a,"change",e[11]),T=!0)},p(e,s){16&s&&t!==(t=e[19].id)&&d(a,"id",t),16&s&&v!==(v=e[19].id)&&(a.__value=v,a.value=a.__value),128&s&&(a.checked=a.__value===e[7]),16&s&&I!==(I=e[19].optionText+"")&&f(E,I),16&s&&w!==(w=e[19].id)&&d(g,"for",w)},d(t){t&&u(a),e[12][0].splice(e[12][0].indexOf(a),1),t&&u(b),t&&u(g),t&&u(q),T=!1,y()}}}function F(e){let a,t,p,f,v,b;return{c(){a=s("div"),t=s("p"),p=r("Leia o enunciado e as alternativas para ter uma idéia da questão."),f=o(),v=s("p"),b=r('Quando estiver pronto, clique em "começar" para mostrar a visualização.'),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=i(a);t=n(s,"P",{});var o=i(t);p=c(o,"Leia o enunciado e as alternativas para ter uma idéia da questão."),o.forEach(u),f=l(s),v=n(s,"P",{});var r=i(v);b=c(r,'Quando estiver pronto, clique em "começar" para mostrar a visualização.'),r.forEach(u),s.forEach(u),this.h()},h(){d(a,"class","button-wrapper svelte-6xf4xx")},m(e,s){m(e,a,s),h(a,t),h(t,p),h(a,f),h(a,v),h(v,b)},d(e){e&&u(a)}}}function j(e){let a,t,o,l,f;return{c(){a=s("div"),t=s("button"),o=r("Começar"),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=i(a);t=n(s,"BUTTON",{type:!0,class:!0});var r=i(t);o=c(r,"Começar"),r.forEach(u),s.forEach(u),this.h()},h(){d(t,"type","button"),d(t,"class","active-button svelte-6xf4xx"),d(a,"class","button-wrapper svelte-6xf4xx")},m(s,r){m(s,a,r),h(a,t),h(t,o),l||(f=p(t,"click",e[9]),l=!0)},p:v,d(e){e&&u(a),l=!1,f()}}}function K(e){let a,t,o,l;return{c(){a=s("button"),t=r("Confirmar e continuar"),this.h()},l(e){a=n(e,"BUTTON",{type:!0,class:!0});var s=i(a);t=c(s,"Confirmar e continuar"),s.forEach(u),this.h()},h(){d(a,"type","button"),d(a,"class","finish-button svelte-6xf4xx")},m(s,r){m(s,a,r),h(a,t),o||(l=p(a,"click",e[10]),o=!0)},p:v,d(e){e&&u(a),o=!1,l()}}}function R(e){let a,t;return{c(){a=s("img"),this.h()},l(e){a=n(e,"IMG",{src:!0,width:!0}),this.h()},h(){a.src!==(t=e[16])&&d(a,"src",t),d(a,"width","100%")},m(e,t){m(e,a,t)},p(e,s){8&s&&a.src!==(t=e[16])&&d(a,"src",t)},d(e){e&&u(a)}}}function J(e){let a,t,p,E,x,w,q,T,y,I,L,O,N=`${e[5]}/${e[6]} - ${e[2]}`,M="nullity"===e[1]&&e[0].includes("Q6"),A="nullity"===e[1]&&e[0].includes("Q4"),C=M&&U(),P=A&&S(),H=e[4],z=[];for(let a=0;a<H.length;a+=1)z[a]=W(k(e,H,a));let $=!e[8]&&F(),D=!e[8]&&j(e),J=e[8]&&e[7]&&K(e),_=e[3],V=[];for(let a=0;a<_.length;a+=1)V[a]=R(B(e,_,a));return{c(){a=s("header"),t=s("h2"),p=r(N),E=o(),C&&C.c(),x=o(),P&&P.c(),w=o(),q=s("form");for(let e=0;e<z.length;e+=1)z[e].c();T=o(),$&&$.c(),y=o(),D&&D.c(),I=o(),J&&J.c(),L=o(),O=s("div");for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){a=n(e,"HEADER",{});var s=i(a);t=n(s,"H2",{});var o=i(t);p=c(o,N),o.forEach(u),E=l(s),C&&C.l(s),x=l(s),P&&P.l(s),w=l(s),q=n(s,"FORM",{class:!0});var r=i(q);for(let e=0;e<z.length;e+=1)z[e].l(r);r.forEach(u),T=l(s),$&&$.l(s),y=l(s),D&&D.l(s),I=l(s),J&&J.l(s),L=l(s),O=n(s,"DIV",{class:!0});var d=i(O);for(let e=0;e<V.length;e+=1)V[e].l(d);d.forEach(u),s.forEach(u),this.h()},h(){d(q,"class","options svelte-6xf4xx"),d(O,"class","image-wrapper svelte-6xf4xx"),b(O,"inactive",!e[8])},m(e,s){m(e,a,s),h(a,t),h(t,p),h(a,E),C&&C.m(a,null),h(a,x),P&&P.m(a,null),h(a,w),h(a,q);for(let e=0;e<z.length;e+=1)z[e].m(q,null);h(a,T),$&&$.m(a,null),h(a,y),D&&D.m(a,null),h(a,I),J&&J.m(a,null),h(a,L),h(a,O);for(let e=0;e<V.length;e+=1)V[e].m(O,null)},p(e,[t]){if(100&t&&N!==(N=`${e[5]}/${e[6]} - ${e[2]}`)&&f(p,N),3&t&&(M="nullity"===e[1]&&e[0].includes("Q6")),M?C||(C=U(),C.c(),C.m(a,x)):C&&(C.d(1),C=null),3&t&&(A="nullity"===e[1]&&e[0].includes("Q4")),A?P||(P=S(),P.c(),P.m(a,w)):P&&(P.d(1),P=null),144&t){let a;for(H=e[4],a=0;a<H.length;a+=1){const s=k(e,H,a);z[a]?z[a].p(s,t):(z[a]=W(s),z[a].c(),z[a].m(q,null))}for(;a<z.length;a+=1)z[a].d(1);z.length=H.length}if(e[8]?$&&($.d(1),$=null):$||($=F(),$.c(),$.m(a,y)),e[8]?D&&(D.d(1),D=null):D?D.p(e,t):(D=j(e),D.c(),D.m(a,I)),e[8]&&e[7]?J?J.p(e,t):(J=K(e),J.c(),J.m(a,L)):J&&(J.d(1),J=null),8&t){let a;for(_=e[3],a=0;a<_.length;a+=1){const s=B(e,_,a);V[a]?V[a].p(s,t):(V[a]=R(s),V[a].c(),V[a].m(O,null))}for(;a<V.length;a+=1)V[a].d(1);V.length=_.length}256&t&&b(O,"inactive",!e[8])},i:v,o:v,d(e){e&&u(a),C&&C.d(),P&&P.d(),g(z,e),$&&$.d(),D&&D.d(),J&&J.d(),g(V,e)}}}function _(e,a,t){const s=E();let{id:o}=a,{group:r}=a,{questionText:n}=a,{questionImages:l}=a,{options:i}=a,{index:c}=a,{maxIndex:u}=a,d=null,m=!1,h=null,p=null;return e.$$set=e=>{"id"in e&&t(0,o=e.id),"group"in e&&t(1,r=e.group),"questionText"in e&&t(2,n=e.questionText),"questionImages"in e&&t(3,l=e.questionImages),"options"in e&&t(4,i=e.options),"index"in e&&t(5,c=e.index),"maxIndex"in e&&t(6,u=e.maxIndex)},e.$$.update=()=>{1&e.$$.dirty&&console.log(o)},[o,r,n,l,i,c,u,d,m,function(){h=(new Date).getTime(),t(8,m=!0)},function(){const e=(new Date).getTime();p=(e-h)/1e3,s("complete",{answer:d,elapsedTime:p,id:o})},function(){d=this.__value,t(7,d)},[[]]]}class V extends e{constructor(e){super(),a(this,e,_,J,t,{id:0,group:1,questionText:2,questionImages:3,options:4,index:5,maxIndex:6})}}const{document:X}=y;function G(e,a,t){const s=e.slice();return s[39]=a[t],s[38]=t,s}function Y(e,a,t){const s=e.slice();return s[36]=a[t],s[38]=t,s}function Q(e){let a,t,s=$,o=[];for(let a=0;a<s.length;a+=1)o[a]=se(G(e,s,a));const r=e=>w(o[e],1,1,()=>{o[e]=null});return{c(){for(let e=0;e<o.length;e+=1)o[e].c();a=O()},l(e){for(let a=0;a<o.length;a+=1)o[a].l(e);a=O()},m(e,s){for(let a=0;a<o.length;a+=1)o[a].m(e,s);m(e,a,s),t=!0},p(e,t){if(32771&t[0]){let n;for(s=$,n=0;n<s.length;n+=1){const r=G(e,s,n);o[n]?(o[n].p(r,t),T(o[n],1)):(o[n]=se(r),o[n].c(),T(o[n],1),o[n].m(a.parentNode,a))}for(I(),n=s.length;n<o.length;n+=1)r(n);q()}},i(e){if(!t){for(let e=0;e<s.length;e+=1)T(o[e]);t=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)w(o[e]);t=!1},d(e){g(o,e),e&&u(a)}}}function Z(e){let a;function t(e,a){return e[2]?re:oe}let s=t(e),o=s(e);return{c(){o.c(),a=O()},l(e){o.l(e),a=O()},m(e,t){o.m(e,t),m(e,a,t)},p(e,r){s===(s=t(e))&&o?o.p(e,r):(o.d(1),o=s(e),o&&(o.c(),o.m(a.parentNode,a)))},i:v,o:v,d(e){o.d(e),e&&u(a)}}}function ee(e){let a;function t(e,a){return e[4]?de:ue}let s=t(e),o=s(e);return{c(){o.c(),a=O()},l(e){o.l(e),a=O()},m(e,t){o.m(e,t),m(e,a,t)},p(e,r){s===(s=t(e))&&o?o.p(e,r):(o.d(1),o=s(e),o&&(o.c(),o.m(a.parentNode,a)))},i:v,o:v,d(e){o.d(e),e&&u(a)}}}function ae(e){let a,t,s,o;const r=[pe,he],n=[];function l(e,a){return e[0]?1:0}return a=l(e),t=n[a]=r[a](e),{c(){t.c(),s=O()},l(e){t.l(e),s=O()},m(e,t){n[a].m(e,t),m(e,s,t),o=!0},p(e,o){let i=a;a=l(e),a===i?n[a].p(e,o):(I(),w(n[i],1,1,()=>{n[i]=null}),q(),t=n[a],t?t.p(e,o):(t=n[a]=r[a](e),t.c()),T(t,1),t.m(s.parentNode,s))},i(e){o||(T(t),o=!0)},o(e){w(t),o=!1},d(e){n[a].d(e),e&&u(s)}}}function te(e){let a,t;return a=new V({props:{group:e[0],index:e[1]+1,maxIndex:$.length,id:e[39].id,options:e[39].options,questionImages:e[39].questionImages[e[0]],questionText:e[39].questionText}}),a.$on("complete",e[15]),{c(){N(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,s){A(a,e,s),t=!0},p(e,t){const s={};1&t[0]&&(s.group=e[0]),2&t[0]&&(s.index=e[1]+1),1&t[0]&&(s.questionImages=e[39].questionImages[e[0]]),a.$set(s)},i(e){t||(T(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function se(e){let a,t,s=e[38]===e[1]&&te(e);return{c(){s&&s.c(),a=O()},l(e){s&&s.l(e),a=O()},m(e,o){s&&s.m(e,o),m(e,a,o),t=!0},p(e,t){e[38]===e[1]?s?(s.p(e,t),2&t[0]&&T(s,1)):(s=te(e),s.c(),T(s,1),s.m(a.parentNode,a)):s&&(I(),w(s,1,1,()=>{s=null}),q())},i(e){t||(T(s),t=!0)},o(e){w(s),t=!1},d(e){s&&s.d(e),e&&u(a)}}}function oe(e){let a,t,f,v,b,E,x,w,q,T,y=D,I=[];for(let a=0;a<y.length;a+=1)I[a]=ne(Y(e,y,a));function L(e,a){return e[9]?ie:le}let O=L(e),N=O(e);return{c(){a=s("h1"),t=r("Marque abaixo as opções com as quais você mais se identificou durante o uso da\r\n                        visualização:"),f=o(),v=s("form");for(let e=0;e<I.length;e+=1)I[e].c();b=o(),N.c(),E=o(),x=s("button"),w=r("Continuar"),this.h()},l(e){a=n(e,"H1",{});var s=i(a);t=c(s,"Marque abaixo as opções com as quais você mais se identificou durante o uso da\r\n                        visualização:"),s.forEach(u),f=l(e),v=n(e,"FORM",{class:!0});var o=i(v);for(let e=0;e<I.length;e+=1)I[e].l(o);o.forEach(u),b=l(e),N.l(e),E=l(e),x=n(e,"BUTTON",{class:!0});var r=i(x);w=c(r,"Continuar"),r.forEach(u),this.h()},h(){d(v,"class","svelte-1bt6b6c"),d(x,"class","qualitative-finish svelte-1bt6b6c")},m(s,o){m(s,a,o),h(a,t),m(s,f,o),m(s,v,o);for(let e=0;e<I.length;e+=1)I[e].m(v,null);e[32](v),m(s,b,o),N.m(s,o),m(s,E,o),m(s,x,o),h(x,w),q||(T=p(x,"click",e[17]),q=!0)},p(e,a){if(0&a){let t;for(y=D,t=0;t<y.length;t+=1){const s=Y(e,y,t);I[t]?I[t].p(s,a):(I[t]=ne(s),I[t].c(),I[t].m(v,null))}for(;t<I.length;t+=1)I[t].d(1);I.length=y.length}O===(O=L(e))&&N?N.p(e,a):(N.d(1),N=O(e),N&&(N.c(),N.m(E.parentNode,E)))},d(t){t&&u(a),t&&u(f),t&&u(v),g(I,t),e[32](null),t&&u(b),N.d(t),t&&u(E),t&&u(x),q=!1,T()}}}function re(e){let a,t,f,v,b,g,E,x,w,q,T,y,I,L,O,N,M,A,C,P,H,z,$,D,B,k,U,S,W=e[13]&&ce();return{c(){a=s("h3"),t=r("Escreva abaixo comentários sobre o que você achou de POSITIVO durante o uso da visualização.\r\n                        Escreva no mínimo uma frase no campo abaixo."),f=o(),v=s("label"),b=o(),g=s("textarea"),E=o(),x=s("br"),w=s("br"),q=s("br"),T=o(),y=s("h3"),I=r("Escreva abaixo comentários sobre o que você achou de NEGATIVO durante o uso da visualização.\r\n                        Escreva no mínimo uma frase no campo abaixo."),L=o(),O=s("label"),N=o(),M=s("textarea"),A=o(),W&&W.c(),C=o(),P=s("br"),H=o(),z=s("p"),$=r("Após preencher os campos, clique no botão abaixo para prosseguir."),D=o(),B=s("button"),k=r("Continuar"),this.h()},l(e){a=n(e,"H3",{});var s=i(a);t=c(s,"Escreva abaixo comentários sobre o que você achou de POSITIVO durante o uso da visualização.\r\n                        Escreva no mínimo uma frase no campo abaixo."),s.forEach(u),f=l(e),v=n(e,"LABEL",{for:!0}),i(v).forEach(u),b=l(e),g=n(e,"TEXTAREA",{required:!0,id:!0,class:!0}),i(g).forEach(u),E=l(e),x=n(e,"BR",{}),w=n(e,"BR",{}),q=n(e,"BR",{}),T=l(e),y=n(e,"H3",{});var o=i(y);I=c(o,"Escreva abaixo comentários sobre o que você achou de NEGATIVO durante o uso da visualização.\r\n                        Escreva no mínimo uma frase no campo abaixo."),o.forEach(u),L=l(e),O=n(e,"LABEL",{for:!0}),i(O).forEach(u),N=l(e),M=n(e,"TEXTAREA",{required:!0,id:!0,class:!0}),i(M).forEach(u),A=l(e),W&&W.l(e),C=l(e),P=n(e,"BR",{}),H=l(e),z=n(e,"P",{});var r=i(z);$=c(r,"Após preencher os campos, clique no botão abaixo para prosseguir."),r.forEach(u),D=l(e),B=n(e,"BUTTON",{class:!0});var d=i(B);k=c(d,"Continuar"),d.forEach(u),this.h()},h(){d(v,"for","positive"),g.required=!0,d(g,"id","positive"),d(g,"class","svelte-1bt6b6c"),d(O,"for","negative"),M.required=!0,d(M,"id","negative"),d(M,"class","svelte-1bt6b6c"),d(B,"class","open-finish svelte-1bt6b6c")},m(s,o){m(s,a,o),h(a,t),m(s,f,o),m(s,v,o),m(s,b,o),m(s,g,o),e[30](g),m(s,E,o),m(s,x,o),m(s,w,o),m(s,q,o),m(s,T,o),m(s,y,o),h(y,I),m(s,L,o),m(s,O,o),m(s,N,o),m(s,M,o),e[31](M),m(s,A,o),W&&W.m(s,o),m(s,C,o),m(s,P,o),m(s,H,o),m(s,z,o),h(z,$),m(s,D,o),m(s,B,o),h(B,k),U||(S=p(B,"click",e[24]),U=!0)},p(e,a){e[13]?W||(W=ce(),W.c(),W.m(C.parentNode,C)):W&&(W.d(1),W=null)},d(t){t&&u(a),t&&u(f),t&&u(v),t&&u(b),t&&u(g),e[30](null),t&&u(E),t&&u(x),t&&u(w),t&&u(q),t&&u(T),t&&u(y),t&&u(L),t&&u(O),t&&u(N),t&&u(M),e[31](null),t&&u(A),W&&W.d(t),t&&u(C),t&&u(P),t&&u(H),t&&u(z),t&&u(D),t&&u(B),U=!1,S()}}}function ne(e){let a,t,p,f,b,g,E,x,w,q,T,y,I,L,O,N,M,A,C,P,H,z,$,D,B,k,U,S,W,F,j,K,R,J,_,V,X,G,Y,Q=e[36].questionnaireText+"";return{c(){a=s("label"),t=r(Q),p=o(),f=s("ul"),b=s("li"),g=s("input"),x=o(),w=s("label"),q=r("Discordo Bastante"),T=o(),y=s("li"),I=s("input"),O=o(),N=s("label"),M=r("Discordo"),A=o(),C=s("li"),P=s("input"),z=o(),$=s("label"),D=r("Neutro"),B=o(),k=s("li"),U=s("input"),W=o(),F=s("label"),j=r("Concordo"),K=o(),R=s("li"),J=s("input"),V=o(),X=s("label"),G=r("Concordo Bastante"),Y=o(),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=i(a);t=c(s,Q),s.forEach(u),p=l(e),f=n(e,"UL",{class:!0});var o=i(f);b=n(o,"LI",{class:!0});var r=i(b);g=n(r,"INPUT",{type:!0,name:!0,value:!0,class:!0}),x=l(r),w=n(r,"LABEL",{class:!0});var d=i(w);q=c(d,"Discordo Bastante"),d.forEach(u),r.forEach(u),T=l(o),y=n(o,"LI",{class:!0});var m=i(y);I=n(m,"INPUT",{type:!0,name:!0,value:!0,class:!0}),O=l(m),N=n(m,"LABEL",{class:!0});var h=i(N);M=c(h,"Discordo"),h.forEach(u),m.forEach(u),A=l(o),C=n(o,"LI",{class:!0});var v=i(C);P=n(v,"INPUT",{type:!0,name:!0,value:!0,class:!0}),z=l(v),$=n(v,"LABEL",{class:!0});var E=i($);D=c(E,"Neutro"),E.forEach(u),v.forEach(u),B=l(o),k=n(o,"LI",{class:!0});var L=i(k);U=n(L,"INPUT",{type:!0,name:!0,value:!0,class:!0}),W=l(L),F=n(L,"LABEL",{class:!0});var H=i(F);j=c(H,"Concordo"),H.forEach(u),L.forEach(u),K=l(o),R=n(o,"LI",{class:!0});var S=i(R);J=n(S,"INPUT",{type:!0,name:!0,value:!0,class:!0}),V=l(S),X=n(S,"LABEL",{class:!0});var _=i(X);G=c(_,"Concordo Bastante"),_.forEach(u),S.forEach(u),Y=l(o),o.forEach(u),this.h()},h(){d(a,"class","statement svelte-1bt6b6c"),d(g,"type","radio"),d(g,"name",E=e[36].id),g.value="strong_disagree",d(g,"class","svelte-1bt6b6c"),d(w,"class","svelte-1bt6b6c"),d(b,"class","svelte-1bt6b6c"),d(I,"type","radio"),d(I,"name",L=e[36].id),I.value="disagree",d(I,"class","svelte-1bt6b6c"),d(N,"class","svelte-1bt6b6c"),d(y,"class","svelte-1bt6b6c"),d(P,"type","radio"),d(P,"name",H=e[36].id),P.value="neutral",d(P,"class","svelte-1bt6b6c"),d($,"class","svelte-1bt6b6c"),d(C,"class","svelte-1bt6b6c"),d(U,"type","radio"),d(U,"name",S=e[36].id),U.value="agree",d(U,"class","svelte-1bt6b6c"),d(F,"class","svelte-1bt6b6c"),d(k,"class","svelte-1bt6b6c"),d(J,"type","radio"),d(J,"name",_=e[36].id),J.value="strong_agree",d(J,"class","svelte-1bt6b6c"),d(X,"class","svelte-1bt6b6c"),d(R,"class","svelte-1bt6b6c"),d(f,"class","likert svelte-1bt6b6c")},m(e,s){m(e,a,s),h(a,t),m(e,p,s),m(e,f,s),h(f,b),h(b,g),h(b,x),h(b,w),h(w,q),h(f,T),h(f,y),h(y,I),h(y,O),h(y,N),h(N,M),h(f,A),h(f,C),h(C,P),h(C,z),h(C,$),h($,D),h(f,B),h(f,k),h(k,U),h(k,W),h(k,F),h(F,j),h(f,K),h(f,R),h(R,J),h(R,V),h(R,X),h(X,G),h(f,Y)},p:v,d(e){e&&u(a),e&&u(p),e&&u(f)}}}function le(e){let a,t;return{c(){a=s("p"),t=r("Quando terminar de marcar as respostas, clique no botão abaixo:")},l(e){a=n(e,"P",{});var s=i(a);t=c(s,"Quando terminar de marcar as respostas, clique no botão abaixo:"),s.forEach(u)},m(e,s){m(e,a,s),h(a,t)},p:v,d(e){e&&u(a)}}}function ie(e){let a,t,o,l,p=D.length+"";return{c(){a=s("p"),t=r("Para prosseguir, marque uma resposta em todas as "),o=r(p),l=r("\r\n                            perguntas."),this.h()},l(e){a=n(e,"P",{class:!0});var s=i(a);t=c(s,"Para prosseguir, marque uma resposta em todas as "),o=c(s,p),l=c(s,"\r\n                            perguntas."),s.forEach(u),this.h()},h(){d(a,"class","warn svelte-1bt6b6c")},m(e,s){m(e,a,s),h(a,t),h(a,o),h(a,l)},p:v,d(e){e&&u(a)}}}function ce(e){let a,t;return{c(){a=s("p"),t=r("Por favor, escreva no mínimo uma frase em cada um dos campos."),this.h()},l(e){a=n(e,"P",{class:!0});var s=i(a);t=c(s,"Por favor, escreva no mínimo uma frase em cada um dos campos."),s.forEach(u),this.h()},h(){d(a,"class","warn svelte-1bt6b6c")},m(e,s){m(e,a,s),h(a,t)},d(e){e&&u(a)}}}function ue(e){let a,t;return{c(){a=s("h3"),t=r("O seu resultado está sendo gerado. Aguarde...")},l(e){a=n(e,"H3",{});var s=i(a);t=c(s,"O seu resultado está sendo gerado. Aguarde..."),s.forEach(u)},m(e,s){m(e,a,s),h(a,t)},p:v,d(e){e&&u(a)}}}function de(e){let a,t,f,v,b,g,E,x,w,q,T,y,I,L,O,N,M,A,C,H,z,$,D,B,k,U,S,W,F=e[10]&&me();return{c(){a=s("div"),t=s("h1"),f=r("Para finalizar:"),v=o(),b=s("h2"),g=r('Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),E=o(),x=s("h3"),w=r("Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o\r\n                        design da visualização."),q=o(),T=s("label"),y=o(),I=s("textarea"),L=o(),O=s("button"),N=r("Copiar para Área de Transferência"),M=o(),A=s("p"),C=r("Envie os resultados através de qualquer cliente e-mail. O botão abaixo é um atalho para abrir o\r\n                        cliente padrão com o e-mail pronto para envio."),H=o(),z=s("button"),$=r("Abrir Cliente de e-mail"),D=o(),B=s("button"),k=r("Ok, já enviei o e-mail."),U=o(),F&&F.c(),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=i(a);t=n(s,"H1",{});var o=i(t);f=c(o,"Para finalizar:"),o.forEach(u),v=l(s),b=n(s,"H2",{});var r=i(b);g=c(r,'Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),r.forEach(u),E=l(s),x=n(s,"H3",{});var d=i(x);w=c(d,"Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o\r\n                        design da visualização."),d.forEach(u),q=l(s),T=n(s,"LABEL",{for:!0}),i(T).forEach(u),y=l(s),I=n(s,"TEXTAREA",{readonly:!0,id:!0,value:!0,class:!0}),i(I).forEach(u),L=l(s),O=n(s,"BUTTON",{class:!0});var m=i(O);N=c(m,"Copiar para Área de Transferência"),m.forEach(u),M=l(s),A=n(s,"P",{});var h=i(A);C=c(h,"Envie os resultados através de qualquer cliente e-mail. O botão abaixo é um atalho para abrir o\r\n                        cliente padrão com o e-mail pronto para envio."),h.forEach(u),H=l(s),z=n(s,"BUTTON",{class:!0});var p=i(z);$=c(p,"Abrir Cliente de e-mail"),p.forEach(u),D=l(s),B=n(s,"BUTTON",{class:!0});var P=i(B);k=c(P,"Ok, já enviei o e-mail."),P.forEach(u),U=l(s),F&&F.l(s),s.forEach(u),this.h()},h(){d(T,"for","result"),I.readOnly=!0,d(I,"id","result"),I.value=e[4],d(I,"class","svelte-1bt6b6c"),d(O,"class","copy-button svelte-1bt6b6c"),d(z,"class","send-email-button svelte-1bt6b6c"),d(B,"class","email-confirmation svelte-1bt6b6c"),d(a,"class","final-flex svelte-1bt6b6c")},m(s,o){m(s,a,o),h(a,t),h(t,f),h(a,v),h(a,b),h(b,g),h(a,E),h(a,x),h(x,w),h(a,q),h(a,T),h(a,y),h(a,I),e[29](I),h(a,L),h(a,O),h(O,N),h(a,M),h(a,A),h(A,C),h(a,H),h(a,z),h(z,$),h(a,D),h(a,B),h(B,k),h(a,U),F&&F.m(a,null),S||(W=[p(O,"click",e[16]),p(z,"click",e[23]),p(B,"click",e[18])],S=!0)},p(e,t){16&t[0]&&(I.value=e[4]),e[10]?F||(F=me(),F.c(),F.m(a,null)):F&&(F.d(1),F=null)},d(t){t&&u(a),e[29](null),F&&F.d(),S=!1,P(W)}}}function me(e){let a,t;return{c(){a=s("h1"),t=r("Fim do teste. Muito obrigado por sua participação!")},l(e){a=n(e,"H1",{});var s=i(a);t=c(s,"Fim do teste. Muito obrigado por sua participação!"),s.forEach(u)},m(e,s){m(e,a,s),h(a,t)},d(e){e&&u(a)}}}function he(e){let a,t;return a=new H({props:{url1:"https://www.youtube.com/embed/tremKl7AFK8",url2:"proposed"===e[0]?"https://www.youtube.com/embed/Y3TJnNavvoo":"https://www.youtube.com/embed/QNOJhRkYoPQ",url3:"proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/D4pCgo4Yjhw"}}),a.$on("ready",e[22]),{c(){N(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,s){A(a,e,s),t=!0},p(e,t){const s={};1&t[0]&&(s.url2="proposed"===e[0]?"https://www.youtube.com/embed/Y3TJnNavvoo":"https://www.youtube.com/embed/QNOJhRkYoPQ"),1&t[0]&&(s.url3="proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/D4pCgo4Yjhw"),a.$set(s)},i(e){t||(T(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function pe(e){let a,t,f,b,g,E,x,w,q,T,y,I,L,N,M,A,C,P,H,z,$,D,B,k,U,S,W,F,j,K,R,J,_,V,X,G,Y,Q,Z,ee,ae,te,se,oe,re,ne,le=e[11]&&fe(e);return{c(){a=s("h1"),t=r("Teste de Usabilidade de Visualizações de Dados Faltantes"),f=o(),b=s("h2"),g=r("Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),E=o(),x=s("ul"),w=s("li"),q=r("Este teste de usabilidade contém 14 questões de múltipla escolha."),T=o(),y=s("li"),I=r("Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com\r\n                    alternativas de múltipla escolha."),L=o(),N=s("li"),M=r("Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),A=o(),C=s("li"),P=r("O teste dura cerca de 30 minutos."),H=o(),z=s("li"),$=r("Estamos testando a visualização, e não você! não há respostas certas ou erradas."),D=o(),B=s("li"),k=r("Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),U=o(),S=s("h2"),W=r("Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),F=o(),j=s("h3"),K=r("Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),R=o(),J=s("iframe"),V=o(),X=s("h3"),G=r("Para prosseguir, "),Y=s("a"),Q=r("acesse este\r\n                link"),Z=r(" e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),ee=o(),ae=s("button"),te=r("Já acessei a planilha, li as instruções, e\r\n                voltei"),se=o(),le&&le.c(),oe=O(),this.h()},l(e){a=n(e,"H1",{});var s=i(a);t=c(s,"Teste de Usabilidade de Visualizações de Dados Faltantes"),s.forEach(u),f=l(e),b=n(e,"H2",{class:!0});var o=i(b);g=c(o,"Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),o.forEach(u),E=l(e),x=n(e,"UL",{});var r=i(x);w=n(r,"LI",{});var d=i(w);q=c(d,"Este teste de usabilidade contém 14 questões de múltipla escolha."),d.forEach(u),T=l(r),y=n(r,"LI",{});var m=i(y);I=c(m,"Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com\r\n                    alternativas de múltipla escolha."),m.forEach(u),L=l(r),N=n(r,"LI",{});var h=i(N);M=c(h,"Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),h.forEach(u),A=l(r),C=n(r,"LI",{});var p=i(C);P=c(p,"O teste dura cerca de 30 minutos."),p.forEach(u),H=l(r),z=n(r,"LI",{});var v=i(z);$=c(v,"Estamos testando a visualização, e não você! não há respostas certas ou erradas."),v.forEach(u),D=l(r),B=n(r,"LI",{});var _=i(B);k=c(_,"Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),_.forEach(u),r.forEach(u),U=l(e),S=n(e,"H2",{class:!0});var re=i(S);W=c(re,"Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),re.forEach(u),F=l(e),j=n(e,"H3",{});var ne=i(j);K=c(ne,"Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),ne.forEach(u),R=l(e),J=n(e,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),i(J).forEach(u),V=l(e),X=n(e,"H3",{});var ie=i(X);G=c(ie,"Para prosseguir, "),Y=n(ie,"A",{href:!0,target:!0});var ce=i(Y);Q=c(ce,"acesse este\r\n                link"),ce.forEach(u),Z=c(ie," e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),ie.forEach(u),ee=l(e),ae=n(e,"BUTTON",{class:!0});var ue=i(ae);te=c(ue,"Já acessei a planilha, li as instruções, e\r\n                voltei"),ue.forEach(u),se=l(e),le&&le.l(e),oe=O(),this.h()},h(){d(b,"class","mobile-warn svelte-1bt6b6c"),d(S,"class","mobile-warn svelte-1bt6b6c"),d(J,"width","560"),d(J,"height","315"),J.src!==(_="https://www.youtube.com/embed/zSX0nXWKgfs")&&d(J,"src","https://www.youtube.com/embed/zSX0nXWKgfs"),d(J,"title","YouTube video player"),d(J,"frameborder","0"),d(J,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),J.allowFullscreen=!0,d(Y,"href","https://docs.google.com/spreadsheets/d/1UHNYK-Cty8Q8gpMsUXawd98lxwn0mkMhMYj9F9Os7EE/edit?usp=sharing"),d(Y,"target","”_blank”"),d(ae,"class","planilha-button svelte-1bt6b6c")},m(s,o){m(s,a,o),h(a,t),m(s,f,o),m(s,b,o),h(b,g),m(s,E,o),m(s,x,o),h(x,w),h(w,q),h(x,T),h(x,y),h(y,I),h(x,L),h(x,N),h(N,M),h(x,A),h(x,C),h(C,P),h(x,H),h(x,z),h(z,$),h(x,D),h(x,B),h(B,k),m(s,U,o),m(s,S,o),h(S,W),m(s,F,o),m(s,j,o),h(j,K),m(s,R,o),m(s,J,o),m(s,V,o),m(s,X,o),h(X,G),h(X,Y),h(Y,Q),h(X,Z),m(s,ee,o),m(s,ae,o),h(ae,te),m(s,se,o),le&&le.m(s,o),m(s,oe,o),re||(ne=p(ae,"click",e[19]),re=!0)},p(e,a){e[11]?le?le.p(e,a):(le=fe(e),le.c(),le.m(oe.parentNode,oe)):le&&(le.d(1),le=null)},i:v,o:v,d(e){e&&u(a),e&&u(f),e&&u(b),e&&u(E),e&&u(x),e&&u(U),e&&u(S),e&&u(F),e&&u(j),e&&u(R),e&&u(J),e&&u(V),e&&u(X),e&&u(ee),e&&u(ae),e&&u(se),le&&le.d(e),e&&u(oe),re=!1,ne()}}}function fe(e){let a,t,f,b,g,E,x,w,q,T;return{c(){a=s("h3"),t=r("O meu grupo é:"),f=o(),b=s("button"),g=r("P"),E=o(),x=s("button"),w=r("N"),this.h()},l(e){a=n(e,"H3",{});var s=i(a);t=c(s,"O meu grupo é:"),s.forEach(u),f=l(e),b=n(e,"BUTTON",{class:!0});var o=i(b);g=c(o,"P"),o.forEach(u),E=l(e),x=n(e,"BUTTON",{class:!0});var r=i(x);w=c(r,"N"),r.forEach(u),this.h()},h(){d(b,"class","group-button P-button svelte-1bt6b6c"),d(x,"class","group-button N-button svelte-1bt6b6c")},m(s,o){m(s,a,o),h(a,t),m(s,f,o),m(s,b,o),h(b,g),m(s,E,o),m(s,x,o),h(x,w),q||(T=[p(b,"click",e[20]),p(x,"click",e[21])],q=!0)},p:v,d(e){e&&u(a),e&&u(f),e&&u(b),e&&u(E),e&&u(x),q=!1,P(T)}}}function ve(e){let a,t,r,c,h;const p=[ae,ee,Z,Q],f=[];function v(e,a){return e[5]?0:e[14]?1:e[3]?2:3}return r=v(e),c=f[r]=p[r](e),{c(){a=o(),t=s("div"),c.c(),this.h()},l(e){x('[data-svelte="svelte-j0f8p3"]',X.head).forEach(u),a=l(e),t=n(e,"DIV",{class:!0});var s=i(t);c.l(s),s.forEach(u),this.h()},h(){X.title="Usability Testing",d(t,"class","container svelte-1bt6b6c")},m(e,s){m(e,a,s),m(e,t,s),f[r].m(t,null),h=!0},p(e,a){let s=r;r=v(e),r===s?f[r].p(e,a):(I(),w(f[s],1,1,()=>{f[s]=null}),q(),c=f[r],c?c.p(e,a):(c=f[r]=p[r](e),c.c()),T(c,1),c.m(t,null))},i(e){h||(T(c),h=!0)},o(e){w(c),h=!1},d(e){e&&u(a),e&&u(t),f[r].d()}}}function be(e,a,t){let s,o;const r=z("lzw");let n=null,l=(Math.random().toString(),[]),i=0,c=null,u=!1,d=!1,m=!0;r.decompress("woXCsHF1YW50aXRhxIZ2ZUTEiWHCnsKDwqbEhHN3ZXLCoWLCq2VsYXBzZWRUaW1lw4tAMMKKfsO5w5siw5HComlkwqVRMS1pacSRxJPElcSXZMSaxJzEnsSgxKLEpMOLP8OwBBjCk3TCvGrEr2TCpMSzxLXEuG7ElMSWwqHEvMSbxJ3En8ShxKPEpT_DtMOdLxrCn8K-d8WMxLI3xLXEt8SSxZLEusWVxL3FmMWAxZvFg8OlcMKjw5cKPXHFjMWOMsWQxarFk8S7xa7Ev8WaxYI_w7xiTcOSw7HCqcO8xbpRxafFqcS5xZTFlsS-xZnFgcWcw64cwqwIMSbDqcWlUcW8xLbFkcW_xa3Fl8aCxpbFg8OxP3zDrcKRaHPGnzTFqMajxaxjxoHGlcWxxYTGrWhywrAhxo0zxb3GkcaAxqbGuMaEw6_FocK-dsOIwrTGjcayxpDFq8WUxrbHhcWwxoTDqMa7xr3Gv8SwxLLHgcaixb7FrMaTxa_Gg8SlQATCl8KNT8OfO2TGnzbGs8efx5LGt8eVxZzDs1PDt8OOw5kWwofGjTXHgseRx4TGlMezxYPDtMK0OVgQYk7Gn8e9x57Hg8alyIHHo8WDw7YMScK6XjU_xo3HrmnCr8SCYWzEh8SJacSLxI3EiMKawoLFunN1czHHsHLCp25ldXRyyJ_IqMSwwqTIqnMyyK7CpWFncmVlyLfFjci6M8iuyLDIssi0yLbIqcirNMiuwqhkaXPIv8mByYPJjXM1yZDJksmUyYDJgsmEyLnIqzbJiMixyLPItWzJoMi6N8mbyZPJlcmfyZg4yazJncmWyanIqznJssmuyZfHm8i6MTDJpMmKyafCrWTEiWVDb21wbGV0xKDCszI4LzA1LzIwMjEgMTU6NTY6NDnCpcmAb3VwyLB1bMigdHnCpsirxJZJRMKzMC4yOTPKtTI0MTfKujPKnTExNg").then(e=>{console.log("resultado: ",e)});let h,p=null,f=null,v=null,b=!1;let g=null;let E=!1;let x=null;let w=null,q=null,T=!1;return e.$$.update=()=>{if(2&e.$$.dirty[0]&&t(3,s=i>=$.length),33554444&e.$$.dirty[0]&&t(14,o=s&&u&&d),503316481&e.$$.dirty[0]&&d){const e=(new Date).toLocaleString();r.compress({quantitativeData:l,qualitativeData:h,dateCompleted:e,group:n}).then(a=>{t(4,c=JSON.stringify({quantitativeData:l,qualitativeData:h,dateCompleted:e,group:n,positiveRemarks:w,negativeRemarks:q}))})}},[n,i,u,s,c,m,p,f,v,b,g,E,x,T,o,function(e){l.push(e.detail),t(1,i+=1)},function(){p.select(),p.setSelectionRange(0,99999),document.execCommand("copy")},function(){const e=D.map(e=>e.id).map(e=>({id:e,answer:x.elements[e].value}));e.map(e=>e.answer).every(e=>""!==e)?(t(9,b=!1),t(26,h=e),t(2,u=!0)):t(9,b=!0)},function(){t(10,g=!0)},function(){t(11,E=!0)},function(){t(0,n="proposed")},function(){t(0,n="nullity")},function(){t(5,m=!1)},function(){const e="mailto:rodrigodivino.ufpa@gmail.com?&subject=Teste de Usabilidade&body="+p.value;window.open(e)},function(){t(27,w=f.value),t(28,q=v.value),console.log(f.value),console.log(v.value),f.value.length>1&&v.value.length>1?(t(13,T=!1),t(25,d=!0)):t(13,T=!0)},d,h,w,q,function(e){L[e?"unshift":"push"](()=>{p=e,t(6,p)})},function(e){L[e?"unshift":"push"](()=>{f=e,t(7,f)})},function(e){L[e?"unshift":"push"](()=>{v=e,t(8,v)})},function(e){L[e?"unshift":"push"](()=>{x=e,t(12,x)})}]}export default class extends e{constructor(e){super(),a(this,e,be,ve,t,{},[-1,-1])}}
