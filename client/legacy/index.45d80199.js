import{_ as e,a,b as n,c as t,i as o,s,d as i,S as r,T as c,D as u,t as l,h as f,E as d,j as m,o as v,k as p,l as h,f as g,p as b,r as x,q as E,u as y,F as q,C as w,m as T,Z as I,R as L,K as M,N as O,J as C,a1 as N,M as z,B as A,e as H,G as P,H as U,I as D,L as k,v as B}from"./client.f464e225.js";import"./index.9a519ca0.js";import W from"./Tutorial.8847281b.js";import{q as $}from"./questions.81cd2d16.js";import{J as S}from"./json-url-single.0721899b.js";function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,s=a(e);if(t){var i=a(this).constructor;o=Reflect.construct(s,arguments,i)}else o=s.apply(this,arguments);return n(this,o)}}function j(e,a,n){var t=e.slice();return t[16]=a[n],t}function F(e,a,n){var t=e.slice();return t[19]=a[n],t}function K(e){var a,n;return{c:function(){a=c("h2"),n=l("ATENÇÃO: Esta questão possui 5 imagens. Use a barra de rolagem para ver todas."),this.h()},l:function(e){a=f(e,"H2",{class:!0});var t=m(a);n=v(t,"ATENÇÃO: Esta questão possui 5 imagens. Use a barra de rolagem para ver todas."),t.forEach(p),this.h()},h:function(){h(a,"class","mobile-warn svelte-6xf4xx")},m:function(e,t){g(e,a,t),b(a,n)},d:function(e){e&&p(a)}}}function _(e){var a,n;return{c:function(){a=c("h2"),n=l("ATENÇÃO: Esta questão possui 2 imagens. Use a barra de rolagem para ver todas."),this.h()},l:function(e){a=f(e,"H2",{class:!0});var t=m(a);n=v(t,"ATENÇÃO: Esta questão possui 2 imagens. Use a barra de rolagem para ver todas."),t.forEach(p),this.h()},h:function(){h(a,"class","mobile-warn svelte-6xf4xx")},m:function(e,t){g(e,a,t),b(a,n)},d:function(e){e&&p(a)}}}function J(e){var a,n,t,o,s,i,r,y,q,w,T,I=e[19].optionText+"";return{c:function(){a=c("input"),o=u(),s=c("label"),i=l(I),r=u(),q=c("br"),this.h()},l:function(e){a=f(e,"INPUT",{type:!0,id:!0,name:!0,value:!0}),o=d(e),s=f(e,"LABEL",{for:!0});var n=m(s);i=v(n,I),r=d(n),n.forEach(p),q=f(e,"BR",{}),this.h()},h:function(){h(a,"type","radio"),h(a,"id",n=e[19].id),h(a,"name","answer"),a.__value=t=e[19].id,a.value=a.__value,e[12][0].push(a),h(s,"for",y=e[19].id)},m:function(n,t){g(n,a,t),a.checked=a.__value===e[7],g(n,o,t),g(n,s,t),b(s,i),b(s,r),g(n,q,t),w||(T=x(a,"change",e[11]),w=!0)},p:function(e,o){16&o&&n!==(n=e[19].id)&&h(a,"id",n),16&o&&t!==(t=e[19].id)&&(a.__value=t,a.value=a.__value),128&o&&(a.checked=a.__value===e[7]),16&o&&I!==(I=e[19].optionText+"")&&E(i,I),16&o&&y!==(y=e[19].id)&&h(s,"for",y)},d:function(n){n&&p(a),e[12][0].splice(e[12][0].indexOf(a),1),n&&p(o),n&&p(s),n&&p(q),w=!1,T()}}}function Z(e){var a,n,t,o,s,i;return{c:function(){a=c("div"),n=c("p"),t=l("Leia o enunciado e as alternativas para ter uma idéia da questão."),o=u(),s=c("p"),i=l('Quando estiver pronto, clique em "começar" para mostrar a visualização.'),this.h()},l:function(e){a=f(e,"DIV",{class:!0});var r=m(a);n=f(r,"P",{});var c=m(n);t=v(c,"Leia o enunciado e as alternativas para ter uma idéia da questão."),c.forEach(p),o=d(r),s=f(r,"P",{});var u=m(s);i=v(u,'Quando estiver pronto, clique em "começar" para mostrar a visualização.'),u.forEach(p),r.forEach(p),this.h()},h:function(){h(a,"class","button-wrapper svelte-6xf4xx")},m:function(e,r){g(e,a,r),b(a,n),b(n,t),b(a,o),b(a,s),b(s,i)},d:function(e){e&&p(a)}}}function G(e){var a,n,t,o,s;return{c:function(){a=c("div"),n=c("button"),t=l("Começar"),this.h()},l:function(e){a=f(e,"DIV",{class:!0});var o=m(a);n=f(o,"BUTTON",{type:!0,class:!0});var s=m(n);t=v(s,"Começar"),s.forEach(p),o.forEach(p),this.h()},h:function(){h(n,"type","button"),h(n,"class","active-button svelte-6xf4xx"),h(a,"class","button-wrapper svelte-6xf4xx")},m:function(i,r){g(i,a,r),b(a,n),b(n,t),o||(s=x(n,"click",e[9]),o=!0)},p:y,d:function(e){e&&p(a),o=!1,s()}}}function X(e){var a,n,t,o;return{c:function(){a=c("button"),n=l("Confirmar e continuar"),this.h()},l:function(e){a=f(e,"BUTTON",{type:!0,class:!0});var t=m(a);n=v(t,"Confirmar e continuar"),t.forEach(p),this.h()},h:function(){h(a,"type","button"),h(a,"class","finish-button svelte-6xf4xx")},m:function(s,i){g(s,a,i),b(a,n),t||(o=x(a,"click",e[10]),t=!0)},p:y,d:function(e){e&&p(a),t=!1,o()}}}function Q(e){var a,n;return{c:function(){a=c("img"),this.h()},l:function(e){a=f(e,"IMG",{src:!0,width:!0}),this.h()},h:function(){a.src!==(n=e[16])&&h(a,"src",n),h(a,"width","100%")},m:function(e,n){g(e,a,n)},p:function(e,t){8&t&&a.src!==(n=e[16])&&h(a,"src",n)},d:function(e){e&&p(a)}}}function V(e){for(var a,n,t,o,s,i,r,x,I,L,M,O,C="".concat(e[5],"/").concat(e[6]," - ").concat(e[2])+"",N="nullity"===e[1]&&e[0].includes("Q6"),z="nullity"===e[1]&&e[0].includes("Q4"),A=N&&K(),H=z&&_(),P=e[4],U=[],D=0;D<P.length;D+=1)U[D]=J(F(e,P,D));for(var k=!e[8]&&Z(),B=!e[8]&&G(e),W=e[8]&&e[7]&&X(e),$=e[3],S=[],R=0;R<$.length;R+=1)S[R]=Q(j(e,$,R));return{c:function(){a=c("header"),n=c("h2"),t=l(C),o=u(),A&&A.c(),s=u(),H&&H.c(),i=u(),r=c("form");for(var e=0;e<U.length;e+=1)U[e].c();x=u(),k&&k.c(),I=u(),B&&B.c(),L=u(),W&&W.c(),M=u(),O=c("div");for(var f=0;f<S.length;f+=1)S[f].c();this.h()},l:function(e){a=f(e,"HEADER",{});var c=m(a);n=f(c,"H2",{});var u=m(n);t=v(u,C),u.forEach(p),o=d(c),A&&A.l(c),s=d(c),H&&H.l(c),i=d(c),r=f(c,"FORM",{class:!0});for(var l=m(r),h=0;h<U.length;h+=1)U[h].l(l);l.forEach(p),x=d(c),k&&k.l(c),I=d(c),B&&B.l(c),L=d(c),W&&W.l(c),M=d(c),O=f(c,"DIV",{class:!0});for(var g=m(O),b=0;b<S.length;b+=1)S[b].l(g);g.forEach(p),c.forEach(p),this.h()},h:function(){h(r,"class","options svelte-6xf4xx"),h(O,"class","image-wrapper svelte-6xf4xx"),q(O,"inactive",!e[8])},m:function(e,c){g(e,a,c),b(a,n),b(n,t),b(a,o),A&&A.m(a,null),b(a,s),H&&H.m(a,null),b(a,i),b(a,r);for(var u=0;u<U.length;u+=1)U[u].m(r,null);b(a,x),k&&k.m(a,null),b(a,I),B&&B.m(a,null),b(a,L),W&&W.m(a,null),b(a,M),b(a,O);for(var l=0;l<S.length;l+=1)S[l].m(O,null)},p:function(e,n){var o=w(n,1)[0];if(100&o&&C!==(C="".concat(e[5],"/").concat(e[6]," - ").concat(e[2])+"")&&E(t,C),3&o&&(N="nullity"===e[1]&&e[0].includes("Q6")),N?A||((A=K()).c(),A.m(a,s)):A&&(A.d(1),A=null),3&o&&(z="nullity"===e[1]&&e[0].includes("Q4")),z?H||((H=_()).c(),H.m(a,i)):H&&(H.d(1),H=null),144&o){var c;for(P=e[4],c=0;c<P.length;c+=1){var u=F(e,P,c);U[c]?U[c].p(u,o):(U[c]=J(u),U[c].c(),U[c].m(r,null))}for(;c<U.length;c+=1)U[c].d(1);U.length=P.length}if(e[8]?k&&(k.d(1),k=null):k||((k=Z()).c(),k.m(a,I)),e[8]?B&&(B.d(1),B=null):B?B.p(e,o):((B=G(e)).c(),B.m(a,L)),e[8]&&e[7]?W?W.p(e,o):((W=X(e)).c(),W.m(a,M)):W&&(W.d(1),W=null),8&o){var l;for($=e[3],l=0;l<$.length;l+=1){var f=j(e,$,l);S[l]?S[l].p(f,o):(S[l]=Q(f),S[l].c(),S[l].m(O,null))}for(;l<S.length;l+=1)S[l].d(1);S.length=$.length}256&o&&q(O,"inactive",!e[8])},i:y,o:y,d:function(e){e&&p(a),A&&A.d(),H&&H.d(),T(U,e),k&&k.d(),B&&B.d(),W&&W.d(),T(S,e)}}}function Y(e,a,n){var t=I(),o=a.id,s=a.group,i=a.questionText,r=a.questionImages,c=a.options,u=a.index,l=a.maxIndex,f=null,d=!1,m=null;return e.$$set=function(e){"id"in e&&n(0,o=e.id),"group"in e&&n(1,s=e.group),"questionText"in e&&n(2,i=e.questionText),"questionImages"in e&&n(3,r=e.questionImages),"options"in e&&n(4,c=e.options),"index"in e&&n(5,u=e.index),"maxIndex"in e&&n(6,l=e.maxIndex)},e.$$.update=function(){1&e.$$.dirty&&console.log(o)},[o,s,i,r,c,u,l,f,d,function(){m=(new Date).getTime(),n(8,d=!0)},function(){var e=(new Date).getTime();t("complete",{answer:f,elapsedTime:(e-m)/1e3,id:o})},function(){f=this.__value,n(7,f)},[[]]]}var ee=function(a){e(c,r);var n=R(c);function c(e){var a;return t(this,c),a=n.call(this),o(i(a),e,Y,V,s,{id:0,group:1,questionText:2,questionImages:3,options:4,index:5,maxIndex:6}),a}return c}(),ae=[{questionnaireText:"Eu usaria essa visualização caso precisasse",id:"sus1"},{questionnaireText:"Achei a visualização desnecessariamente complexa",id:"sus2"},{questionnaireText:"Achei a visualização fácil de usar",id:"sus3"},{questionnaireText:"Acho que que eu precisaria de suporte técnico para me ajudar a usar",id:"sus4"},{questionnaireText:"Achei que os elementos visuais foram bem utilizados",id:"sus5"},{questionnaireText:"Achei que a visualização tinha muita inconsistência",id:"sus6"},{questionnaireText:"Acredito que muitas pessoas aprenderiam a usar essa visualização rapidamente",id:"sus7"},{questionnaireText:"Achei que a visualização é complicada de se usar",id:"sus8"},{questionnaireText:"Me senti bastante confiante usando a visualização",id:"sus9"},{questionnaireText:"Eu precisaria praticar bastante antes de usar a visualização em análises",id:"sus10"}];function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,s=a(e);if(t){var i=a(this).constructor;o=Reflect.construct(s,arguments,i)}else o=s.apply(this,arguments);return n(this,o)}}var te=N.document;function oe(e,a,n){var t=e.slice();return t[30]=a[n],t[29]=n,t}function se(e,a,n){var t=e.slice();return t[27]=a[n],t[29]=n,t}function ie(e){for(var a,n,t=$,o=[],s=0;s<t.length;s+=1)o[s]=fe(oe(e,t,s));var i=function(e){return M(o[e],1,1,(function(){o[e]=null}))};return{c:function(){for(var e=0;e<o.length;e+=1)o[e].c();a=H()},l:function(e){for(var n=0;n<o.length;n+=1)o[n].l(e);a=H()},m:function(e,t){for(var s=0;s<o.length;s+=1)o[s].m(e,t);g(e,a,t),n=!0},p:function(e,n){if(2051&n[0]){var s;for(t=$,s=0;s<t.length;s+=1){var r=oe(e,t,s);o[s]?(o[s].p(r,n),C(o[s],1)):(o[s]=fe(r),o[s].c(),C(o[s],1),o[s].m(a.parentNode,a))}for(z(),s=t.length;s<o.length;s+=1)i(s);O()}},i:function(e){if(!n){for(var a=0;a<t.length;a+=1)C(o[a]);n=!0}},o:function(e){o=o.filter(Boolean);for(var a=0;a<o.length;a+=1)M(o[a]);n=!1},d:function(e){T(o,e),e&&p(a)}}}function re(e){for(var a,n,t,o,s,i,r,E,q,w,I=ae,L=[],M=0;M<I.length;M+=1)L[M]=de(se(e,I,M));function O(e,a){return e[6]?ve:me}var C=O(e),N=C(e);return{c:function(){a=c("h1"),n=l("Marque abaixo as opções com as quais você mais se identificou durante o uso da visualização:"),t=u(),o=c("form");for(var e=0;e<L.length;e+=1)L[e].c();s=u(),N.c(),i=u(),r=c("button"),E=l("Continuar"),this.h()},l:function(e){a=f(e,"H1",{});var c=m(a);n=v(c,"Marque abaixo as opções com as quais você mais se identificou durante o uso da visualização:"),c.forEach(p),t=d(e),o=f(e,"FORM",{class:!0});for(var u=m(o),l=0;l<L.length;l+=1)L[l].l(u);u.forEach(p),s=d(e),N.l(e),i=d(e),r=f(e,"BUTTON",{class:!0});var h=m(r);E=v(h,"Continuar"),h.forEach(p),this.h()},h:function(){h(o,"class","svelte-y15ne"),h(r,"class","qualitative-finish svelte-y15ne")},m:function(c,u){g(c,a,u),b(a,n),g(c,t,u),g(c,o,u);for(var l=0;l<L.length;l+=1)L[l].m(o,null);e[23](o),g(c,s,u),N.m(c,u),g(c,i,u),g(c,r,u),b(r,E),q||(w=x(r,"click",e[13]),q=!0)},p:function(e,a){if(0&a){var n;for(I=ae,n=0;n<I.length;n+=1){var t=se(e,I,n);L[n]?L[n].p(t,a):(L[n]=de(t),L[n].c(),L[n].m(o,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=I.length}C===(C=O(e))&&N?N.p(e,a):(N.d(1),(N=C(e))&&(N.c(),N.m(i.parentNode,i)))},i:y,o:y,d:function(n){n&&p(a),n&&p(t),n&&p(o),T(L,n),e[23](null),n&&p(s),N.d(n),n&&p(i),n&&p(r),q=!1,w()}}}function ce(e){var a;function n(e,a){return e[3]?he:pe}var t=n(e),o=t(e);return{c:function(){o.c(),a=H()},l:function(e){o.l(e),a=H()},m:function(e,n){o.m(e,n),g(e,a,n)},p:function(e,s){t===(t=n(e))&&o?o.p(e,s):(o.d(1),(o=t(e))&&(o.c(),o.m(a.parentNode,a)))},i:y,o:y,d:function(e){o.d(e),e&&p(a)}}}function ue(e){var a,n,t,o,s=[xe,be],i=[];function r(e,a){return e[0]?1:0}return a=r(e),n=i[a]=s[a](e),{c:function(){n.c(),t=H()},l:function(e){n.l(e),t=H()},m:function(e,n){i[a].m(e,n),g(e,t,n),o=!0},p:function(e,o){var c=a;(a=r(e))===c?i[a].p(e,o):(z(),M(i[c],1,1,(function(){i[c]=null})),O(),(n=i[a])?n.p(e,o):(n=i[a]=s[a](e)).c(),C(n,1),n.m(t.parentNode,t))},i:function(e){o||(C(n),o=!0)},o:function(e){M(n),o=!1},d:function(e){i[a].d(e),e&&p(t)}}}function le(e){var a,n;return(a=new ee({props:{group:e[0],index:e[1]+1,maxIndex:$.length,id:e[30].id,options:e[30].options,questionImages:e[30].questionImages[e[0]],questionText:e[30].questionText}})).$on("complete",e[11]),{c:function(){P(a.$$.fragment)},l:function(e){U(a.$$.fragment,e)},m:function(e,t){D(a,e,t),n=!0},p:function(e,n){var t={};1&n[0]&&(t.group=e[0]),2&n[0]&&(t.index=e[1]+1),1&n[0]&&(t.questionImages=e[30].questionImages[e[0]]),a.$set(t)},i:function(e){n||(C(a.$$.fragment,e),n=!0)},o:function(e){M(a.$$.fragment,e),n=!1},d:function(e){k(a,e)}}}function fe(e){var a,n,t=e[29]===e[1]&&le(e);return{c:function(){t&&t.c(),a=H()},l:function(e){t&&t.l(e),a=H()},m:function(e,o){t&&t.m(e,o),g(e,a,o),n=!0},p:function(e,n){e[29]===e[1]?t?(t.p(e,n),2&n[0]&&C(t,1)):((t=le(e)).c(),C(t,1),t.m(a.parentNode,a)):t&&(z(),M(t,1,1,(function(){t=null})),O())},i:function(e){n||(C(t),n=!0)},o:function(e){M(t),n=!1},d:function(e){t&&t.d(e),e&&p(a)}}}function de(e){var a,n,t,o,s,i,r,x,E,q,w,T,I,L,M,O,C,N,z,A,H,P,U,D,k,B,W,$,S,R,j,F,K,_,J=e[27].questionnaireText+"";return{c:function(){a=c("label"),n=l(J),t=u(),o=c("ul"),s=c("li"),i=c("input"),r=u(),x=c("label"),E=l("Discordo Bastante"),q=u(),w=c("li"),T=c("input"),I=u(),L=c("label"),M=l("Discordo"),O=u(),C=c("li"),N=c("input"),z=u(),A=c("label"),H=l("Neutro"),P=u(),U=c("li"),D=c("input"),k=u(),B=c("label"),W=l("Concordo"),$=u(),S=c("li"),R=c("input"),j=u(),F=c("label"),K=l("Concordo Bastante"),_=u(),this.h()},l:function(e){a=f(e,"LABEL",{class:!0});var c=m(a);n=v(c,J),c.forEach(p),t=d(e),o=f(e,"UL",{class:!0});var u=m(o);s=f(u,"LI",{class:!0});var l=m(s);i=f(l,"INPUT",{type:!0,name:!0,value:!0,class:!0}),r=d(l),x=f(l,"LABEL",{class:!0});var h=m(x);E=v(h,"Discordo Bastante"),h.forEach(p),l.forEach(p),q=d(u),w=f(u,"LI",{class:!0});var g=m(w);T=f(g,"INPUT",{type:!0,name:!0,value:!0,class:!0}),I=d(g),L=f(g,"LABEL",{class:!0});var b=m(L);M=v(b,"Discordo"),b.forEach(p),g.forEach(p),O=d(u),C=f(u,"LI",{class:!0});var y=m(C);N=f(y,"INPUT",{type:!0,name:!0,value:!0,class:!0}),z=d(y),A=f(y,"LABEL",{class:!0});var Z=m(A);H=v(Z,"Neutro"),Z.forEach(p),y.forEach(p),P=d(u),U=f(u,"LI",{class:!0});var G=m(U);D=f(G,"INPUT",{type:!0,name:!0,value:!0,class:!0}),k=d(G),B=f(G,"LABEL",{class:!0});var X=m(B);W=v(X,"Concordo"),X.forEach(p),G.forEach(p),$=d(u),S=f(u,"LI",{class:!0});var Q=m(S);R=f(Q,"INPUT",{type:!0,name:!0,value:!0,class:!0}),j=d(Q),F=f(Q,"LABEL",{class:!0});var V=m(F);K=v(V,"Concordo Bastante"),V.forEach(p),Q.forEach(p),_=d(u),u.forEach(p),this.h()},h:function(){h(a,"class","statement svelte-y15ne"),h(i,"type","radio"),h(i,"name",e[27].id),i.value="strong_disagree",h(i,"class","svelte-y15ne"),h(x,"class","svelte-y15ne"),h(s,"class","svelte-y15ne"),h(T,"type","radio"),h(T,"name",e[27].id),T.value="disagree",h(T,"class","svelte-y15ne"),h(L,"class","svelte-y15ne"),h(w,"class","svelte-y15ne"),h(N,"type","radio"),h(N,"name",e[27].id),N.value="neutral",h(N,"class","svelte-y15ne"),h(A,"class","svelte-y15ne"),h(C,"class","svelte-y15ne"),h(D,"type","radio"),h(D,"name",e[27].id),D.value="agree",h(D,"class","svelte-y15ne"),h(B,"class","svelte-y15ne"),h(U,"class","svelte-y15ne"),h(R,"type","radio"),h(R,"name",e[27].id),R.value="strong_agree",h(R,"class","svelte-y15ne"),h(F,"class","svelte-y15ne"),h(S,"class","svelte-y15ne"),h(o,"class","likert svelte-y15ne")},m:function(e,c){g(e,a,c),b(a,n),g(e,t,c),g(e,o,c),b(o,s),b(s,i),b(s,r),b(s,x),b(x,E),b(o,q),b(o,w),b(w,T),b(w,I),b(w,L),b(L,M),b(o,O),b(o,C),b(C,N),b(C,z),b(C,A),b(A,H),b(o,P),b(o,U),b(U,D),b(U,k),b(U,B),b(B,W),b(o,$),b(o,S),b(S,R),b(S,j),b(S,F),b(F,K),b(o,_)},p:y,d:function(e){e&&p(a),e&&p(t),e&&p(o)}}}function me(e){var a,n;return{c:function(){a=c("p"),n=l("Quando terminar de marcar as respostas, clique no botão abaixo:")},l:function(e){a=f(e,"P",{});var t=m(a);n=v(t,"Quando terminar de marcar as respostas, clique no botão abaixo:"),t.forEach(p)},m:function(e,t){g(e,a,t),b(a,n)},p:y,d:function(e){e&&p(a)}}}function ve(e){var a,n,t,o,s=ae.length+"";return{c:function(){a=c("p"),n=l("Para prosseguir, marque uma resposta em todas as "),t=l(s),o=l("\r\n                        perguntas."),this.h()},l:function(e){a=f(e,"P",{class:!0});var i=m(a);n=v(i,"Para prosseguir, marque uma resposta em todas as "),t=v(i,s),o=v(i,"\r\n                        perguntas."),i.forEach(p),this.h()},h:function(){h(a,"class","warn svelte-y15ne")},m:function(e,s){g(e,a,s),b(a,n),b(a,t),b(a,o)},p:y,d:function(e){e&&p(a)}}}function pe(e){var a,n;return{c:function(){a=c("h3"),n=l("O seu resultado está sendo gerado. Aguarde...")},l:function(e){a=f(e,"H3",{});var t=m(a);n=v(t,"O seu resultado está sendo gerado. Aguarde..."),t.forEach(p)},m:function(e,t){g(e,a,t),b(a,n)},p:y,d:function(e){e&&p(a)}}}function he(e){var a,n,t,o,s,i,r,E,y,q,w,T,I,L,M,O,C,N,z,A,H,P,U,D,k,W,$,S,R=e[7]&&ge();return{c:function(){a=c("div"),n=c("h1"),t=l("Para finalizar:"),o=u(),s=c("h2"),i=l('Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),r=u(),E=c("h3"),y=l("Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o design da visualização."),q=u(),w=c("label"),T=u(),I=c("textarea"),L=u(),M=c("button"),O=l("Copiar para Área de Transferência"),C=u(),N=c("p"),z=l("Envies os resultados através de qualquer cliente e-mail. O botão abaixo é um atalho para abrir o cliente padrão com o e-mail pronto para envio."),A=u(),H=c("button"),P=l("Abrir Cliente de e-mail"),U=u(),D=c("button"),k=l("Ok, já enviei o e-mail."),W=u(),R&&R.c(),this.h()},l:function(e){a=f(e,"DIV",{class:!0});var c=m(a);n=f(c,"H1",{});var u=m(n);t=v(u,"Para finalizar:"),u.forEach(p),o=d(c),s=f(c,"H2",{});var l=m(s);i=v(l,'Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),l.forEach(p),r=d(c),E=f(c,"H3",{});var h=m(E);y=v(h,"Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o design da visualização."),h.forEach(p),q=d(c),w=f(c,"LABEL",{for:!0}),m(w).forEach(p),T=d(c),I=f(c,"TEXTAREA",{readonly:!0,id:!0,value:!0,class:!0}),m(I).forEach(p),L=d(c),M=f(c,"BUTTON",{class:!0});var g=m(M);O=v(g,"Copiar para Área de Transferência"),g.forEach(p),C=d(c),N=f(c,"P",{});var b=m(N);z=v(b,"Envies os resultados através de qualquer cliente e-mail. O botão abaixo é um atalho para abrir o cliente padrão com o e-mail pronto para envio."),b.forEach(p),A=d(c),H=f(c,"BUTTON",{class:!0});var x=m(H);P=v(x,"Abrir Cliente de e-mail"),x.forEach(p),U=d(c),D=f(c,"BUTTON",{class:!0});var B=m(D);k=v(B,"Ok, já enviei o e-mail."),B.forEach(p),W=d(c),R&&R.l(c),c.forEach(p),this.h()},h:function(){h(w,"for","result"),I.readOnly=!0,h(I,"id","result"),I.value=e[3],h(I,"class","svelte-y15ne"),h(M,"class","copy-button svelte-y15ne"),h(H,"class","send-email-button svelte-y15ne"),h(D,"class","email-confirmation svelte-y15ne"),h(a,"class","final-flex svelte-y15ne")},m:function(c,u){g(c,a,u),b(a,n),b(n,t),b(a,o),b(a,s),b(s,i),b(a,r),b(a,E),b(E,y),b(a,q),b(a,w),b(a,T),b(a,I),e[22](I),b(a,L),b(a,M),b(M,O),b(a,C),b(a,N),b(N,z),b(a,A),b(a,H),b(H,P),b(a,U),b(a,D),b(D,k),b(a,W),R&&R.m(a,null),$||(S=[x(M,"click",e[12]),x(H,"click",e[19]),x(D,"click",e[14])],$=!0)},p:function(e,n){8&n[0]&&(I.value=e[3]),e[7]?R||((R=ge()).c(),R.m(a,null)):R&&(R.d(1),R=null)},d:function(n){n&&p(a),e[22](null),R&&R.d(),$=!1,B(S)}}}function ge(e){var a,n;return{c:function(){a=c("h1"),n=l("Fim do teste. Muito obrigado por sua participação!")},l:function(e){a=f(e,"H1",{});var t=m(a);n=v(t,"Fim do teste. Muito obrigado por sua participação!"),t.forEach(p)},m:function(e,t){g(e,a,t),b(a,n)},d:function(e){e&&p(a)}}}function be(e){var a,n;return(a=new W({props:{url1:"https://www.youtube.com/embed/tremKl7AFK8",url2:"proposed"===e[0]?"https://www.youtube.com/embed/Wk8dOZucPaU":"https://www.youtube.com/embed/QNOJhRkYoPQ",url3:"proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/D4pCgo4Yjhw"}})).$on("ready",e[18]),{c:function(){P(a.$$.fragment)},l:function(e){U(a.$$.fragment,e)},m:function(e,t){D(a,e,t),n=!0},p:function(e,n){var t={};1&n[0]&&(t.url2="proposed"===e[0]?"https://www.youtube.com/embed/Wk8dOZucPaU":"https://www.youtube.com/embed/QNOJhRkYoPQ"),1&n[0]&&(t.url3="proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/D4pCgo4Yjhw"),a.$set(t)},i:function(e){n||(C(a.$$.fragment,e),n=!0)},o:function(e){M(a.$$.fragment,e),n=!1},d:function(e){k(a,e)}}}function xe(e){var a,n,t,o,s,i,r,E,q,w,T,I,L,M,O,C,N,z,A,P,U,D,k,B,W,$,S,R,j,F,K,_,J,Z,G,X,Q,V,Y,ee,ae,ne,te,oe,se,ie=e[8]&&Ee(e);return{c:function(){a=c("h1"),n=l("Teste de Usabilidade de Visualizações de Dados Faltantes"),t=u(),o=c("h2"),s=l("Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),i=u(),r=c("ul"),E=c("li"),q=l("Este teste de usabilidade contém 14 questões de múltipla escolha."),w=u(),T=c("li"),I=l("Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com alternativas de múltipla escolha."),L=u(),M=c("li"),O=l("Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),C=u(),N=c("li"),z=l("O teste dura cerca de 30 minutos."),A=u(),P=c("li"),U=l("Estamos testando a visualização, e não você! não há respostas certas ou erradas."),D=u(),k=c("li"),B=l("Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),W=u(),$=c("h2"),S=l("Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),R=u(),j=c("h3"),F=l("Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),K=u(),_=c("iframe"),J=u(),Z=c("h3"),G=l("Para prosseguir, "),X=c("a"),Q=l("acesse este\r\n                link"),V=l(" e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),Y=u(),ee=c("button"),ae=l("Já acessei a planilha, li as instruções, e\r\n                voltei"),ne=u(),ie&&ie.c(),te=H(),this.h()},l:function(e){a=f(e,"H1",{});var c=m(a);n=v(c,"Teste de Usabilidade de Visualizações de Dados Faltantes"),c.forEach(p),t=d(e),o=f(e,"H2",{class:!0});var u=m(o);s=v(u,"Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),u.forEach(p),i=d(e),r=f(e,"UL",{});var l=m(r);E=f(l,"LI",{});var h=m(E);q=v(h,"Este teste de usabilidade contém 14 questões de múltipla escolha."),h.forEach(p),w=d(l),T=f(l,"LI",{});var g=m(T);I=v(g,"Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com alternativas de múltipla escolha."),g.forEach(p),L=d(l),M=f(l,"LI",{});var b=m(M);O=v(b,"Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),b.forEach(p),C=d(l),N=f(l,"LI",{});var x=m(N);z=v(x,"O teste dura cerca de 30 minutos."),x.forEach(p),A=d(l),P=f(l,"LI",{});var y=m(P);U=v(y,"Estamos testando a visualização, e não você! não há respostas certas ou erradas."),y.forEach(p),D=d(l),k=f(l,"LI",{});var oe=m(k);B=v(oe,"Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),oe.forEach(p),l.forEach(p),W=d(e),$=f(e,"H2",{class:!0});var se=m($);S=v(se,"Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),se.forEach(p),R=d(e),j=f(e,"H3",{});var re=m(j);F=v(re,"Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),re.forEach(p),K=d(e),_=f(e,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),m(_).forEach(p),J=d(e),Z=f(e,"H3",{});var ce=m(Z);G=v(ce,"Para prosseguir, "),X=f(ce,"A",{href:!0,target:!0});var ue=m(X);Q=v(ue,"acesse este\r\n                link"),ue.forEach(p),V=v(ce," e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),ce.forEach(p),Y=d(e),ee=f(e,"BUTTON",{class:!0});var le=m(ee);ae=v(le,"Já acessei a planilha, li as instruções, e\r\n                voltei"),le.forEach(p),ne=d(e),ie&&ie.l(e),te=H(),this.h()},h:function(){h(o,"class","mobile-warn svelte-y15ne"),h($,"class","mobile-warn svelte-y15ne"),h(_,"width","560"),h(_,"height","315"),_.src!=="https://www.youtube.com/embed/zSX0nXWKgfs"&&h(_,"src","https://www.youtube.com/embed/zSX0nXWKgfs"),h(_,"title","YouTube video player"),h(_,"frameborder","0"),h(_,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),_.allowFullscreen=!0,h(X,"href","https://docs.google.com/spreadsheets/d/1UHNYK-Cty8Q8gpMsUXawd98lxwn0mkMhMYj9F9Os7EE/edit?usp=sharing"),h(X,"target","”_blank”"),h(ee,"class","planilha-button svelte-y15ne")},m:function(c,u){g(c,a,u),b(a,n),g(c,t,u),g(c,o,u),b(o,s),g(c,i,u),g(c,r,u),b(r,E),b(E,q),b(r,w),b(r,T),b(T,I),b(r,L),b(r,M),b(M,O),b(r,C),b(r,N),b(N,z),b(r,A),b(r,P),b(P,U),b(r,D),b(r,k),b(k,B),g(c,W,u),g(c,$,u),b($,S),g(c,R,u),g(c,j,u),b(j,F),g(c,K,u),g(c,_,u),g(c,J,u),g(c,Z,u),b(Z,G),b(Z,X),b(X,Q),b(Z,V),g(c,Y,u),g(c,ee,u),b(ee,ae),g(c,ne,u),ie&&ie.m(c,u),g(c,te,u),oe||(se=x(ee,"click",e[15]),oe=!0)},p:function(e,a){e[8]?ie?ie.p(e,a):((ie=Ee(e)).c(),ie.m(te.parentNode,te)):ie&&(ie.d(1),ie=null)},i:y,o:y,d:function(e){e&&p(a),e&&p(t),e&&p(o),e&&p(i),e&&p(r),e&&p(W),e&&p($),e&&p(R),e&&p(j),e&&p(K),e&&p(_),e&&p(J),e&&p(Z),e&&p(Y),e&&p(ee),e&&p(ne),ie&&ie.d(e),e&&p(te),oe=!1,se()}}}function Ee(e){var a,n,t,o,s,i,r,E,q,w;return{c:function(){a=c("h3"),n=l("O meu grupo é:"),t=u(),o=c("button"),s=l("P"),i=u(),r=c("button"),E=l("N"),this.h()},l:function(e){a=f(e,"H3",{});var c=m(a);n=v(c,"O meu grupo é:"),c.forEach(p),t=d(e),o=f(e,"BUTTON",{class:!0});var u=m(o);s=v(u,"P"),u.forEach(p),i=d(e),r=f(e,"BUTTON",{class:!0});var l=m(r);E=v(l,"N"),l.forEach(p),this.h()},h:function(){h(o,"class","group-button P-button svelte-y15ne"),h(r,"class","group-button N-button svelte-y15ne")},m:function(c,u){g(c,a,u),b(a,n),g(c,t,u),g(c,o,u),b(o,s),g(c,i,u),g(c,r,u),b(r,E),q||(w=[x(o,"click",e[16]),x(r,"click",e[17])],q=!0)},p:y,d:function(e){e&&p(a),e&&p(t),e&&p(o),e&&p(i),e&&p(r),q=!1,B(w)}}}function ye(e){var a,n,t,o,s,i=[ue,ce,re,ie],r=[];function l(e,a){return e[4]?0:e[10]?1:e[2]?2:3}return t=l(e),o=r[t]=i[t](e),{c:function(){a=u(),n=c("div"),o.c(),this.h()},l:function(e){L('[data-svelte="svelte-j0f8p3"]',te.head).forEach(p),a=d(e),n=f(e,"DIV",{class:!0});var t=m(n);o.l(t),t.forEach(p),this.h()},h:function(){te.title="Usability Testing",h(n,"class","container svelte-y15ne")},m:function(e,o){g(e,a,o),g(e,n,o),r[t].m(n,null),s=!0},p:function(e,a){var s=t;(t=l(e))===s?r[t].p(e,a):(z(),M(r[s],1,1,(function(){r[s]=null})),O(),(o=r[t])?o.p(e,a):(o=r[t]=i[t](e)).c(),C(o,1),o.m(n,null))},i:function(e){s||(C(o),s=!0)},o:function(e){M(o),s=!1},d:function(e){e&&p(a),e&&p(n),r[t].d()}}}function qe(e,a,n){var t,o,s=S("lzw"),i=null,r=(Math.random().toString(),[]),c=0,u=null,l=!1,f=!0;s.decompress("woXCsHF1YW50aXRhxIZ2ZUTEiWHCnsKDwqbEhHN3ZXLCoWLCq2VsYXBzZWRUaW1lw4tAMMKKfsO5w5siw5HComlkwqVRMS1pacSRxJPElcSXZMSaxJzEnsSgxKLEpMOLP8OwBBjCk3TCvGrEr2TCpMSzxLXEuG7ElMSWwqHEvMSbxJ3En8ShxKPEpT_DtMOdLxrCn8K-d8WMxLI3xLXEt8SSxZLEusWVxL3FmMWAxZvFg8OlcMKjw5cKPXHFjMWOMsWQxarFk8S7xa7Ev8WaxYI_w7xiTcOSw7HCqcO8xbpRxafFqcS5xZTFlsS-xZnFgcWcw64cwqwIMSbDqcWlUcW8xLbFkcW_xa3Fl8aCxpbFg8OxP3zDrcKRaHPGnzTFqMajxaxjxoHGlcWxxYTGrWhywrAhxo0zxb3GkcaAxqbGuMaEw6_FocK-dsOIwrTGjcayxpDFq8WUxrbHhcWwxoTDqMa7xr3Gv8SwxLLHgcaixb7FrMaTxa_Gg8SlQATCl8KNT8OfO2TGnzbGs8efx5LGt8eVxZzDs1PDt8OOw5kWwofGjTXHgseRx4TGlMezxYPDtMK0OVgQYk7Gn8e9x57Hg8alyIHHo8WDw7YMScK6XjU_xo3HrmnCr8SCYWzEh8SJacSLxI3EiMKawoLFunN1czHHsHLCp25ldXRyyJ_IqMSwwqTIqnMyyK7CpWFncmVlyLfFjci6M8iuyLDIssi0yLbIqcirNMiuwqhkaXPIv8mByYPJjXM1yZDJksmUyYDJgsmEyLnIqzbJiMixyLPItWzJoMi6N8mbyZPJlcmfyZg4yazJncmWyanIqznJssmuyZfHm8i6MTDJpMmKyafCrWTEiWVDb21wbGV0xKDCszI4LzA1LzIwMjEgMTU6NTY6NDnCpcmAb3VwyLB1bMigdHnCpsirxJZJRMKzMC4yOTPKtTI0MTfKujPKnTExNg").then((function(e){console.log("resultado: ",e)}));var d,m=null,v=!1;var p=null;var h=!1;var g=null;return e.$$.update=function(){if(2&e.$$.dirty[0]&&n(2,t=c>=$.length),1048580&e.$$.dirty[0]&&n(10,o=t&&l),2097157&e.$$.dirty[0]&&t){var a=(new Date).toLocaleString();s.compress({quantitativeData:r,qualitativeData:d,dateCompleted:a,group:i}).then((function(e){n(3,u=JSON.stringify({quantitativeData:r,qualitativeData:d,dateCompleted:a,group:i}))}))}},[i,c,t,u,f,m,v,p,h,g,o,function(e){r.push(e.detail),n(1,c+=1)},function(){m.select(),m.setSelectionRange(0,99999),document.execCommand("copy")},function(){var e=ae.map((function(e){return e.id})).map((function(e){return{id:e,answer:g.elements[e].value}}));e.map((function(e){return e.answer})).every((function(e){return""!==e}))?(n(6,v=!1),n(21,d=e),n(20,l=!0)):n(6,v=!0)},function(){n(7,p=!0)},function(){n(8,h=!0)},function(){n(0,i="proposed")},function(){n(0,i="nullity")},function(){n(4,f=!1)},function(){var e=m.value,a="mailto:rodrigodivino.ufpa@gmail.com?&subject="+encodeURIComponent("Teste de Usabilidade")+"&body="+encodeURIComponent(e);window.open(a,"_blank").focus()},l,d,function(e){A[e?"unshift":"push"]((function(){n(5,m=e)}))},function(e){A[e?"unshift":"push"]((function(){n(9,g=e)}))}]}var we=function(a){e(c,r);var n=ne(c);function c(e){var a;return t(this,c),a=n.call(this),o(i(a),e,qe,ye,s,{},[-1,-1]),a}return c}();export default we;
