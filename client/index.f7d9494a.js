import{S as e,i as a,s,K as t,u as o,t as r,c as i,v as n,d as l,j as c,f as u,g as d,a as h,k as m,m as p,l as v,o as f,x as g,h as b,P as E,J as x,C as y,F as q,B as w,Q as T,E as I,q as L,e as M,y as z,z as C,A as O,D as A,r as N}from"./client.2a929d2c.js";import"./index.404f3a73.js";import H from"./Tutorial.95344ea4.js";import{q as D}from"./questions.69fda8b5.js";import{J as $}from"./json-url-single.6483d160.js";function K(e,a,s){const t=e.slice();return t[15]=a[s],t}function P(e,a,s){const t=e.slice();return t[18]=a[s],t}function S(e){let a,s,f,g,b,E,x,y,q,w,T,I=e[18].optionText+"";return{c(){a=t("input"),g=o(),b=t("label"),E=r(I),x=o(),q=t("br"),this.h()},l(e){a=i(e,"INPUT",{type:!0,id:!0,name:!0,value:!0}),g=n(e),b=i(e,"LABEL",{for:!0});var s=l(b);E=c(s,I),x=n(s),s.forEach(u),q=i(e,"BR",{}),this.h()},h(){d(a,"type","radio"),d(a,"id",s=e[18].id),d(a,"name","answer"),a.__value=f=e[18].id,a.value=a.__value,e[11][0].push(a),d(b,"for",y=e[18].id)},m(s,t){h(s,a,t),a.checked=a.__value===e[5],h(s,g,t),h(s,b,t),m(b,E),m(b,x),h(s,q,t),w||(T=p(a,"change",e[10]),w=!0)},p(e,t){4&t&&s!==(s=e[18].id)&&d(a,"id",s),4&t&&f!==(f=e[18].id)&&(a.__value=f,a.value=a.__value),32&t&&(a.checked=a.__value===e[5]),4&t&&I!==(I=e[18].optionText+"")&&v(E,I),4&t&&y!==(y=e[18].id)&&d(b,"for",y)},d(s){s&&u(a),e[11][0].splice(e[11][0].indexOf(a),1),s&&u(g),s&&u(b),s&&u(q),w=!1,T()}}}function W(e){let a,s,p,v,f,g;return{c(){a=t("div"),s=t("p"),p=r("Leia o enunciado e as alternativas para ter uma idéia da questão."),v=o(),f=t("p"),g=r('Quando estiver pronto, clique em "começar" para mostrar a visualização.'),this.h()},l(e){a=i(e,"DIV",{class:!0});var t=l(a);s=i(t,"P",{});var o=l(s);p=c(o,"Leia o enunciado e as alternativas para ter uma idéia da questão."),o.forEach(u),v=n(t),f=i(t,"P",{});var r=l(f);g=c(r,'Quando estiver pronto, clique em "começar" para mostrar a visualização.'),r.forEach(u),t.forEach(u),this.h()},h(){d(a,"class","button-wrapper svelte-1eh2sst")},m(e,t){h(e,a,t),m(a,s),m(s,p),m(a,v),m(a,f),m(f,g)},d(e){e&&u(a)}}}function k(e){let a,s,o,n,v;return{c(){a=t("div"),s=t("button"),o=r("Começar"),this.h()},l(e){a=i(e,"DIV",{class:!0});var t=l(a);s=i(t,"BUTTON",{type:!0,class:!0});var r=l(s);o=c(r,"Começar"),r.forEach(u),t.forEach(u),this.h()},h(){d(s,"type","button"),d(s,"class","active-button svelte-1eh2sst"),d(a,"class","button-wrapper svelte-1eh2sst")},m(t,r){h(t,a,r),m(a,s),m(s,o),n||(v=p(s,"click",e[7]),n=!0)},p:f,d(e){e&&u(a),n=!1,v()}}}function B(e){let a,s,o,n;return{c(){a=t("button"),s=r("Confirmar e continuar"),this.h()},l(e){a=i(e,"BUTTON",{type:!0,class:!0});var t=l(a);s=c(t,"Confirmar e continuar"),t.forEach(u),this.h()},h(){d(a,"type","button"),d(a,"class","finish-button svelte-1eh2sst")},m(t,r){h(t,a,r),m(a,s),o||(n=p(a,"click",e[8]),o=!0)},p:f,d(e){e&&u(a),o=!1,n()}}}function U(e){let a,s;return{c(){a=t("img"),this.h()},l(e){a=i(e,"IMG",{src:!0,width:!0}),this.h()},h(){a.src!==(s=e[15])&&d(a,"src",s),d(a,"width","100%")},m(e,s){h(e,a,s)},p(e,t){2&t&&a.src!==(s=e[15])&&d(a,"src",s)},d(e){e&&u(a)}}}function F(e){let a,s,p,E,x,y,q,w,T,I,L=`${e[3]}/${e[4]} - ${e[0]}`,M=e[2],z=[];for(let a=0;a<M.length;a+=1)z[a]=S(P(e,M,a));let C=!e[6]&&W(),O=!e[6]&&k(e),A=e[6]&&e[5]&&B(e),N=e[1],H=[];for(let a=0;a<N.length;a+=1)H[a]=U(K(e,N,a));return{c(){a=t("header"),s=t("h2"),p=r(L),E=o(),x=t("form");for(let e=0;e<z.length;e+=1)z[e].c();y=o(),C&&C.c(),q=o(),O&&O.c(),w=o(),A&&A.c(),T=o(),I=t("div");for(let e=0;e<H.length;e+=1)H[e].c();this.h()},l(e){a=i(e,"HEADER",{});var t=l(a);s=i(t,"H2",{});var o=l(s);p=c(o,L),o.forEach(u),E=n(t),x=i(t,"FORM",{class:!0});var r=l(x);for(let e=0;e<z.length;e+=1)z[e].l(r);r.forEach(u),y=n(t),C&&C.l(t),q=n(t),O&&O.l(t),w=n(t),A&&A.l(t),T=n(t),I=i(t,"DIV",{class:!0});var d=l(I);for(let e=0;e<H.length;e+=1)H[e].l(d);d.forEach(u),t.forEach(u),this.h()},h(){d(x,"class","options svelte-1eh2sst"),d(I,"class","image-wrapper svelte-1eh2sst"),g(I,"inactive",!e[6])},m(e,t){h(e,a,t),m(a,s),m(s,p),m(a,E),m(a,x);for(let e=0;e<z.length;e+=1)z[e].m(x,null);m(a,y),C&&C.m(a,null),m(a,q),O&&O.m(a,null),m(a,w),A&&A.m(a,null),m(a,T),m(a,I);for(let e=0;e<H.length;e+=1)H[e].m(I,null)},p(e,[s]){if(25&s&&L!==(L=`${e[3]}/${e[4]} - ${e[0]}`)&&v(p,L),36&s){let a;for(M=e[2],a=0;a<M.length;a+=1){const t=P(e,M,a);z[a]?z[a].p(t,s):(z[a]=S(t),z[a].c(),z[a].m(x,null))}for(;a<z.length;a+=1)z[a].d(1);z.length=M.length}if(e[6]?C&&(C.d(1),C=null):C||(C=W(),C.c(),C.m(a,q)),e[6]?O&&(O.d(1),O=null):O?O.p(e,s):(O=k(e),O.c(),O.m(a,w)),e[6]&&e[5]?A?A.p(e,s):(A=B(e),A.c(),A.m(a,T)):A&&(A.d(1),A=null),2&s){let a;for(N=e[1],a=0;a<N.length;a+=1){const t=K(e,N,a);H[a]?H[a].p(t,s):(H[a]=U(t),H[a].c(),H[a].m(I,null))}for(;a<H.length;a+=1)H[a].d(1);H.length=N.length}64&s&&g(I,"inactive",!e[6])},i:f,o:f,d(e){e&&u(a),b(z,e),C&&C.d(),O&&O.d(),A&&A.d(),b(H,e)}}}function j(e,a,s){const t=E();let{id:o}=a,{questionText:r}=a,{questionImages:i}=a,{options:n}=a,{index:l}=a,{maxIndex:c}=a,u=null,d=!1,h=null,m=null;return e.$$set=e=>{"id"in e&&s(9,o=e.id),"questionText"in e&&s(0,r=e.questionText),"questionImages"in e&&s(1,i=e.questionImages),"options"in e&&s(2,n=e.options),"index"in e&&s(3,l=e.index),"maxIndex"in e&&s(4,c=e.maxIndex)},[r,i,n,l,c,u,d,function(){h=(new Date).getTime(),s(6,d=!0)},function(){const e=(new Date).getTime();m=(e-h)/1e3,t("complete",{answer:u,elapsedTime:m,id:o})},o,function(){u=this.__value,s(5,u)},[[]]]}class _ extends e{constructor(e){super(),a(this,e,j,F,s,{id:9,questionText:0,questionImages:1,options:2,index:3,maxIndex:4})}}let J=[{questionnaireText:"Eu usaria essa visualização caso precisasse",id:"sus1"},{questionnaireText:"Achei a visualização desnecessariamente complexa",id:"sus2"},{questionnaireText:"Achei a visualização fácil de usar",id:"sus3"},{questionnaireText:"Acho que que eu precisaria de suporte técnico para me ajudar a usar",id:"sus4"},{questionnaireText:"Achei que os elementos visuais foram bem utilizados",id:"sus5"},{questionnaireText:"Achei que a visualização tinha muita inconsistência",id:"sus6"},{questionnaireText:"Acredito que muitas pessoas aprenderiam a usar essa visualização rapidamente",id:"sus7"},{questionnaireText:"Achei que a visualização é complicada de se usar",id:"sus8"},{questionnaireText:"Me senti bastante confiante usando a visualização",id:"sus9"},{questionnaireText:"Eu precisaria praticar bastante antes de usar a visualização em análises",id:"sus10"}];const{document:X}=T;function Z(e,a,s){const t=e.slice();return t[29]=a[s],t[28]=s,t}function G(e,a,s){const t=e.slice();return t[26]=a[s],t[28]=s,t}function R(e){let a,s,t=D,o=[];for(let a=0;a<t.length;a+=1)o[a]=ae(Z(e,t,a));const r=e=>y(o[e],1,1,()=>{o[e]=null});return{c(){for(let e=0;e<o.length;e+=1)o[e].c();a=M()},l(e){for(let a=0;a<o.length;a+=1)o[a].l(e);a=M()},m(e,t){for(let a=0;a<o.length;a+=1)o[a].m(e,t);h(e,a,t),s=!0},p(e,s){if(2051&s){let i;for(t=D,i=0;i<t.length;i+=1){const r=Z(e,t,i);o[i]?(o[i].p(r,s),w(o[i],1)):(o[i]=ae(r),o[i].c(),w(o[i],1),o[i].m(a.parentNode,a))}for(I(),i=t.length;i<o.length;i+=1)r(i);q()}},i(e){if(!s){for(let e=0;e<t.length;e+=1)w(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)y(o[e]);s=!1},d(e){b(o,e),e&&u(a)}}}function V(e){let a,s,v,g,E,x,y,q,w,T,I=J,L=[];for(let a=0;a<I.length;a+=1)L[a]=se(G(e,I,a));function M(e,a){return e[6]?oe:te}let z=M(e),C=z(e);return{c(){a=t("h1"),s=r("Marque abaixo as opções com as quais você mais se identificou durante o uso da visualização:"),v=o(),g=t("form");for(let e=0;e<L.length;e+=1)L[e].c();E=o(),C.c(),x=o(),y=t("button"),q=r("Continuar"),this.h()},l(e){a=i(e,"H1",{});var t=l(a);s=c(t,"Marque abaixo as opções com as quais você mais se identificou durante o uso da visualização:"),t.forEach(u),v=n(e),g=i(e,"FORM",{class:!0});var o=l(g);for(let e=0;e<L.length;e+=1)L[e].l(o);o.forEach(u),E=n(e),C.l(e),x=n(e),y=i(e,"BUTTON",{class:!0});var r=l(y);q=c(r,"Continuar"),r.forEach(u),this.h()},h(){d(g,"class","svelte-6vyh9h"),d(y,"class","qualitative-finish svelte-6vyh9h")},m(t,o){h(t,a,o),m(a,s),h(t,v,o),h(t,g,o);for(let e=0;e<L.length;e+=1)L[e].m(g,null);e[22](g),h(t,E,o),C.m(t,o),h(t,x,o),h(t,y,o),m(y,q),w||(T=p(y,"click",e[13]),w=!0)},p(e,a){if(0&a){let s;for(I=J,s=0;s<I.length;s+=1){const t=G(e,I,s);L[s]?L[s].p(t,a):(L[s]=se(t),L[s].c(),L[s].m(g,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=I.length}z===(z=M(e))&&C?C.p(e,a):(C.d(1),C=z(e),C&&(C.c(),C.m(x.parentNode,x)))},i:f,o:f,d(s){s&&u(a),s&&u(v),s&&u(g),b(L,s),e[22](null),s&&u(E),C.d(s),s&&u(x),s&&u(y),w=!1,T()}}}function Y(e){let a;function s(e,a){return e[3]?ie:re}let t=s(e),o=t(e);return{c(){o.c(),a=M()},l(e){o.l(e),a=M()},m(e,s){o.m(e,s),h(e,a,s)},p(e,r){t===(t=s(e))&&o?o.p(e,r):(o.d(1),o=t(e),o&&(o.c(),o.m(a.parentNode,a)))},i:f,o:f,d(e){o.d(e),e&&u(a)}}}function Q(e){let a,s,t,o;const r=[ce,le],i=[];function n(e,a){return e[0]?1:0}return a=n(e),s=i[a]=r[a](e),{c(){s.c(),t=M()},l(e){s.l(e),t=M()},m(e,s){i[a].m(e,s),h(e,t,s),o=!0},p(e,o){let l=a;a=n(e),a===l?i[a].p(e,o):(I(),y(i[l],1,1,()=>{i[l]=null}),q(),s=i[a],s?s.p(e,o):(s=i[a]=r[a](e),s.c()),w(s,1),s.m(t.parentNode,t))},i(e){o||(w(s),o=!0)},o(e){y(s),o=!1},d(e){i[a].d(e),e&&u(t)}}}function ee(e){let a,s;return a=new _({props:{index:e[1]+1,maxIndex:D.length,id:e[29].id,options:e[29].options,questionImages:e[29].questionImages[e[0]],questionText:e[29].questionText}}),a.$on("complete",e[11]),{c(){z(a.$$.fragment)},l(e){C(a.$$.fragment,e)},m(e,t){O(a,e,t),s=!0},p(e,s){const t={};2&s&&(t.index=e[1]+1),1&s&&(t.questionImages=e[29].questionImages[e[0]]),a.$set(t)},i(e){s||(w(a.$$.fragment,e),s=!0)},o(e){y(a.$$.fragment,e),s=!1},d(e){A(a,e)}}}function ae(e){let a,s,t=e[28]===e[1]&&ee(e);return{c(){t&&t.c(),a=M()},l(e){t&&t.l(e),a=M()},m(e,o){t&&t.m(e,o),h(e,a,o),s=!0},p(e,s){e[28]===e[1]?t?(t.p(e,s),2&s&&w(t,1)):(t=ee(e),t.c(),w(t,1),t.m(a.parentNode,a)):t&&(I(),y(t,1,1,()=>{t=null}),q())},i(e){s||(w(t),s=!0)},o(e){y(t),s=!1},d(e){t&&t.d(e),e&&u(a)}}}function se(e){let a,s,p,v,g,b,E,x,y,q,w,T,I,L,M,z,C,O,A,N,H,D,$,K,P,S,W,k,B,U,F,j,_,J,X,Z,G,R,V,Y=e[26].questionnaireText+"";return{c(){a=t("label"),s=r(Y),p=o(),v=t("ul"),g=t("li"),b=t("input"),x=o(),y=t("label"),q=r("Discordo Bastante"),w=o(),T=t("li"),I=t("input"),M=o(),z=t("label"),C=r("Discordo"),O=o(),A=t("li"),N=t("input"),D=o(),$=t("label"),K=r("Neutro"),P=o(),S=t("li"),W=t("input"),B=o(),U=t("label"),F=r("Concordo"),j=o(),_=t("li"),J=t("input"),Z=o(),G=t("label"),R=r("Concordo Bastante"),V=o(),this.h()},l(e){a=i(e,"LABEL",{class:!0});var t=l(a);s=c(t,Y),t.forEach(u),p=n(e),v=i(e,"UL",{class:!0});var o=l(v);g=i(o,"LI",{class:!0});var r=l(g);b=i(r,"INPUT",{type:!0,name:!0,value:!0,class:!0}),x=n(r),y=i(r,"LABEL",{class:!0});var d=l(y);q=c(d,"Discordo Bastante"),d.forEach(u),r.forEach(u),w=n(o),T=i(o,"LI",{class:!0});var h=l(T);I=i(h,"INPUT",{type:!0,name:!0,value:!0,class:!0}),M=n(h),z=i(h,"LABEL",{class:!0});var m=l(z);C=c(m,"Discordo"),m.forEach(u),h.forEach(u),O=n(o),A=i(o,"LI",{class:!0});var f=l(A);N=i(f,"INPUT",{type:!0,name:!0,value:!0,class:!0}),D=n(f),$=i(f,"LABEL",{class:!0});var E=l($);K=c(E,"Neutro"),E.forEach(u),f.forEach(u),P=n(o),S=i(o,"LI",{class:!0});var L=l(S);W=i(L,"INPUT",{type:!0,name:!0,value:!0,class:!0}),B=n(L),U=i(L,"LABEL",{class:!0});var H=l(U);F=c(H,"Concordo"),H.forEach(u),L.forEach(u),j=n(o),_=i(o,"LI",{class:!0});var k=l(_);J=i(k,"INPUT",{type:!0,name:!0,value:!0,class:!0}),Z=n(k),G=i(k,"LABEL",{class:!0});var X=l(G);R=c(X,"Concordo Bastante"),X.forEach(u),k.forEach(u),V=n(o),o.forEach(u),this.h()},h(){d(a,"class","statement svelte-6vyh9h"),d(b,"type","radio"),d(b,"name",E=e[26].id),b.value="strong_disagree",d(b,"class","svelte-6vyh9h"),d(y,"class","svelte-6vyh9h"),d(g,"class","svelte-6vyh9h"),d(I,"type","radio"),d(I,"name",L=e[26].id),I.value="disagree",d(I,"class","svelte-6vyh9h"),d(z,"class","svelte-6vyh9h"),d(T,"class","svelte-6vyh9h"),d(N,"type","radio"),d(N,"name",H=e[26].id),N.value="neutral",d(N,"class","svelte-6vyh9h"),d($,"class","svelte-6vyh9h"),d(A,"class","svelte-6vyh9h"),d(W,"type","radio"),d(W,"name",k=e[26].id),W.value="agree",d(W,"class","svelte-6vyh9h"),d(U,"class","svelte-6vyh9h"),d(S,"class","svelte-6vyh9h"),d(J,"type","radio"),d(J,"name",X=e[26].id),J.value="strong_agree",d(J,"class","svelte-6vyh9h"),d(G,"class","svelte-6vyh9h"),d(_,"class","svelte-6vyh9h"),d(v,"class","likert svelte-6vyh9h")},m(e,t){h(e,a,t),m(a,s),h(e,p,t),h(e,v,t),m(v,g),m(g,b),m(g,x),m(g,y),m(y,q),m(v,w),m(v,T),m(T,I),m(T,M),m(T,z),m(z,C),m(v,O),m(v,A),m(A,N),m(A,D),m(A,$),m($,K),m(v,P),m(v,S),m(S,W),m(S,B),m(S,U),m(U,F),m(v,j),m(v,_),m(_,J),m(_,Z),m(_,G),m(G,R),m(v,V)},p:f,d(e){e&&u(a),e&&u(p),e&&u(v)}}}function te(e){let a,s;return{c(){a=t("p"),s=r("Quando terminar de marcar as respostas, clique no botão abaixo:")},l(e){a=i(e,"P",{});var t=l(a);s=c(t,"Quando terminar de marcar as respostas, clique no botão abaixo:"),t.forEach(u)},m(e,t){h(e,a,t),m(a,s)},p:f,d(e){e&&u(a)}}}function oe(e){let a,s,o,n,p=J.length+"";return{c(){a=t("p"),s=r("Para prosseguir, marque uma resposta em todas as "),o=r(p),n=r("\r\n                        perguntas."),this.h()},l(e){a=i(e,"P",{class:!0});var t=l(a);s=c(t,"Para prosseguir, marque uma resposta em todas as "),o=c(t,p),n=c(t,"\r\n                        perguntas."),t.forEach(u),this.h()},h(){d(a,"class","warn svelte-6vyh9h")},m(e,t){h(e,a,t),m(a,s),m(a,o),m(a,n)},p:f,d(e){e&&u(a)}}}function re(e){let a,s;return{c(){a=t("h3"),s=r("O seu resultado está sendo gerado. Aguarde...")},l(e){a=i(e,"H3",{});var t=l(a);s=c(t,"O seu resultado está sendo gerado. Aguarde..."),t.forEach(u)},m(e,t){h(e,a,t),m(a,s)},p:f,d(e){e&&u(a)}}}function ie(e){let a,s,v,f,g,b,E,x,y,q,w,T,I,L,M,z,C,O,A,H,D,$,K=e[7]&&ne();return{c(){a=t("div"),s=t("h1"),v=r("Para finalizar:"),f=o(),g=t("h2"),b=r('Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),E=o(),x=t("h3"),y=r("Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o design da visualização."),q=o(),w=t("label"),T=o(),I=t("textarea"),L=o(),M=t("button"),z=r("Copiar para Área de Transferência"),C=o(),O=t("button"),A=r("Ok, já enviei o e-mail."),H=o(),K&&K.c(),this.h()},l(e){a=i(e,"DIV",{class:!0});var t=l(a);s=i(t,"H1",{});var o=l(s);v=c(o,"Para finalizar:"),o.forEach(u),f=n(t),g=i(t,"H2",{});var r=l(g);b=c(r,'Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de\r\n                        Usabilidade"'),r.forEach(u),E=n(t),x=i(t,"H3",{});var d=l(x);y=c(d,"Os dados contém informações apenas sobre as questões do teste.\r\n                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o design da visualização."),d.forEach(u),q=n(t),w=i(t,"LABEL",{for:!0}),l(w).forEach(u),T=n(t),I=i(t,"TEXTAREA",{readonly:!0,id:!0,value:!0,class:!0}),l(I).forEach(u),L=n(t),M=i(t,"BUTTON",{class:!0});var h=l(M);z=c(h,"Copiar para Área de Transferência"),h.forEach(u),C=n(t),O=i(t,"BUTTON",{class:!0});var m=l(O);A=c(m,"Ok, já enviei o e-mail."),m.forEach(u),H=n(t),K&&K.l(t),t.forEach(u),this.h()},h(){d(w,"for","result"),I.readOnly=!0,d(I,"id","result"),I.value=e[3],d(I,"class","svelte-6vyh9h"),d(M,"class","copy-button svelte-6vyh9h"),d(O,"class","email-confirmation svelte-6vyh9h"),d(a,"class","final-flex svelte-6vyh9h")},m(t,o){h(t,a,o),m(a,s),m(s,v),m(a,f),m(a,g),m(g,b),m(a,E),m(a,x),m(x,y),m(a,q),m(a,w),m(a,T),m(a,I),e[21](I),m(a,L),m(a,M),m(M,z),m(a,C),m(a,O),m(O,A),m(a,H),K&&K.m(a,null),D||($=[p(M,"click",e[12]),p(O,"click",e[14])],D=!0)},p(e,s){8&s&&(I.value=e[3]),e[7]?K||(K=ne(),K.c(),K.m(a,null)):K&&(K.d(1),K=null)},d(s){s&&u(a),e[21](null),K&&K.d(),D=!1,N($)}}}function ne(e){let a,s;return{c(){a=t("h1"),s=r("Fim do teste. Muito obrigado por sua participação!")},l(e){a=i(e,"H1",{});var t=l(a);s=c(t,"Fim do teste. Muito obrigado por sua participação!"),t.forEach(u)},m(e,t){h(e,a,t),m(a,s)},d(e){e&&u(a)}}}function le(e){let a,s;return a=new H({props:{url1:"https://www.youtube.com/embed/tremKl7AFK8",url2:"proposed"===e[0]?"https://www.youtube.com/embed/CTSj3WZtrcE":"https://www.youtube.com/embed/a717CoK6Kng",url3:"proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/O8rTLRKxsK0"}}),a.$on("ready",e[18]),{c(){z(a.$$.fragment)},l(e){C(a.$$.fragment,e)},m(e,t){O(a,e,t),s=!0},p(e,s){const t={};1&s&&(t.url2="proposed"===e[0]?"https://www.youtube.com/embed/CTSj3WZtrcE":"https://www.youtube.com/embed/a717CoK6Kng"),1&s&&(t.url3="proposed"===e[0]?"https://www.youtube.com/embed/bxCIW4HtZkM":"https://www.youtube.com/embed/O8rTLRKxsK0"),a.$set(t)},i(e){s||(w(a.$$.fragment,e),s=!0)},o(e){y(a.$$.fragment,e),s=!1},d(e){A(a,e)}}}function ce(e){let a,s,v,g,b,E,x,y,q,w,T,I,L,z,C,O,A,N,H,D,$,K,P,S,W,k,B,U,F,j,_,J,X,Z,G,R,V,Y,Q,ee,ae,se,te,oe,re,ie,ne=e[8]&&ue(e);return{c(){a=t("h1"),s=r("Teste de Usabilidade de Visualizações de Dados Faltantes"),v=o(),g=t("h2"),b=r("Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),E=o(),x=t("ul"),y=t("li"),q=r("Este teste de usabilidade contém 14 questões de múltipla escolha."),w=o(),T=t("li"),I=r("Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com alternativas de múltipla escolha."),L=o(),z=t("li"),C=r("Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),O=o(),A=t("li"),N=r("O teste dura cerca de 30 minutos."),H=o(),D=t("li"),$=r("Estamos testando a visualização, e não você! não há respostas certas ou erradas."),K=o(),P=t("li"),S=r("Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),W=o(),k=t("h2"),B=r("Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),U=o(),F=t("h3"),j=r("Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),_=o(),J=t("iframe"),Z=o(),G=t("h3"),R=r("Para prosseguir, "),V=t("a"),Y=r("acesse este\r\n                link"),Q=r(" e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),ee=o(),ae=t("button"),se=r("Já acessei a planilha, li as instruções, e\r\n                voltei"),te=o(),ne&&ne.c(),oe=M(),this.h()},l(e){a=i(e,"H1",{});var t=l(a);s=c(t,"Teste de Usabilidade de Visualizações de Dados Faltantes"),t.forEach(u),v=n(e),g=i(e,"H2",{class:!0});var o=l(g);b=c(o,"Importante: Este teste de usabilidade não é compatível com dispositivos móveis.\r\n                Certifique-se de estar em um computador ou notebook."),o.forEach(u),E=n(e),x=i(e,"UL",{});var r=l(x);y=i(r,"LI",{});var d=l(y);q=c(d,"Este teste de usabilidade contém 14 questões de múltipla escolha."),d.forEach(u),w=n(r),T=i(r,"LI",{});var h=l(T);I=c(h,"Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com alternativas de múltipla escolha."),h.forEach(u),L=n(r),z=i(r,"LI",{});var m=l(z);C=c(m,"Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem."),m.forEach(u),O=n(r),A=i(r,"LI",{});var p=l(A);N=c(p,"O teste dura cerca de 30 minutos."),p.forEach(u),H=n(r),D=i(r,"LI",{});var f=l(D);$=c(f,"Estamos testando a visualização, e não você! não há respostas certas ou erradas."),f.forEach(u),K=n(r),P=i(r,"LI",{});var X=l(P);S=c(X,"Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final."),X.forEach(u),r.forEach(u),W=n(e),k=i(e,"H2",{class:!0});var re=l(k);B=c(re,"Importante: Não pule os vídeos, e leia as informações de cada página do teste com\r\n                calma."),re.forEach(u),U=n(e),F=i(e,"H3",{});var ie=l(F);j=c(ie,"Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade."),ie.forEach(u),_=n(e),J=i(e,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),l(J).forEach(u),Z=n(e),G=i(e,"H3",{});var le=l(G);R=c(le,"Para prosseguir, "),V=i(le,"A",{href:!0,target:!0});var ce=l(V);Y=c(ce,"acesse este\r\n                link"),ce.forEach(u),Q=c(le," e siga as instruções da planilha. Quando retornar, clique no botão abaixo."),le.forEach(u),ee=n(e),ae=i(e,"BUTTON",{class:!0});var ue=l(ae);se=c(ue,"Já acessei a planilha, li as instruções, e\r\n                voltei"),ue.forEach(u),te=n(e),ne&&ne.l(e),oe=M(),this.h()},h(){d(g,"class","mobile-warn svelte-6vyh9h"),d(k,"class","mobile-warn svelte-6vyh9h"),d(J,"width","560"),d(J,"height","315"),J.src!==(X="https://www.youtube.com/embed/zSX0nXWKgfs")&&d(J,"src","https://www.youtube.com/embed/zSX0nXWKgfs"),d(J,"title","YouTube video player"),d(J,"frameborder","0"),d(J,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),J.allowFullscreen=!0,d(V,"href","https://docs.google.com/spreadsheets/d/1UHNYK-Cty8Q8gpMsUXawd98lxwn0mkMhMYj9F9Os7EE/edit?usp=sharing"),d(V,"target","”_blank”"),d(ae,"class","planilha-button svelte-6vyh9h")},m(t,o){h(t,a,o),m(a,s),h(t,v,o),h(t,g,o),m(g,b),h(t,E,o),h(t,x,o),m(x,y),m(y,q),m(x,w),m(x,T),m(T,I),m(x,L),m(x,z),m(z,C),m(x,O),m(x,A),m(A,N),m(x,H),m(x,D),m(D,$),m(x,K),m(x,P),m(P,S),h(t,W,o),h(t,k,o),m(k,B),h(t,U,o),h(t,F,o),m(F,j),h(t,_,o),h(t,J,o),h(t,Z,o),h(t,G,o),m(G,R),m(G,V),m(V,Y),m(G,Q),h(t,ee,o),h(t,ae,o),m(ae,se),h(t,te,o),ne&&ne.m(t,o),h(t,oe,o),re||(ie=p(ae,"click",e[15]),re=!0)},p(e,a){e[8]?ne?ne.p(e,a):(ne=ue(e),ne.c(),ne.m(oe.parentNode,oe)):ne&&(ne.d(1),ne=null)},i:f,o:f,d(e){e&&u(a),e&&u(v),e&&u(g),e&&u(E),e&&u(x),e&&u(W),e&&u(k),e&&u(U),e&&u(F),e&&u(_),e&&u(J),e&&u(Z),e&&u(G),e&&u(ee),e&&u(ae),e&&u(te),ne&&ne.d(e),e&&u(oe),re=!1,ie()}}}function ue(e){let a,s,v,g,b,E,x,y,q,w;return{c(){a=t("h3"),s=r("O meu grupo é:"),v=o(),g=t("button"),b=r("P"),E=o(),x=t("button"),y=r("N"),this.h()},l(e){a=i(e,"H3",{});var t=l(a);s=c(t,"O meu grupo é:"),t.forEach(u),v=n(e),g=i(e,"BUTTON",{class:!0});var o=l(g);b=c(o,"P"),o.forEach(u),E=n(e),x=i(e,"BUTTON",{class:!0});var r=l(x);y=c(r,"N"),r.forEach(u),this.h()},h(){d(g,"class","group-button P-button svelte-6vyh9h"),d(x,"class","group-button N-button svelte-6vyh9h")},m(t,o){h(t,a,o),m(a,s),h(t,v,o),h(t,g,o),m(g,b),h(t,E,o),h(t,x,o),m(x,y),q||(w=[p(g,"click",e[16]),p(x,"click",e[17])],q=!0)},p:f,d(e){e&&u(a),e&&u(v),e&&u(g),e&&u(E),e&&u(x),q=!1,N(w)}}}function de(e){let a,s,r,c,m;const p=[Q,Y,V,R],v=[];function f(e,a){return e[4]?0:e[10]?1:e[2]?2:3}return r=f(e),c=v[r]=p[r](e),{c(){a=o(),s=t("div"),c.c(),this.h()},l(e){x('[data-svelte="svelte-j0f8p3"]',X.head).forEach(u),a=n(e),s=i(e,"DIV",{class:!0});var t=l(s);c.l(t),t.forEach(u),this.h()},h(){X.title="Usability Testing",d(s,"class","container svelte-6vyh9h")},m(e,t){h(e,a,t),h(e,s,t),v[r].m(s,null),m=!0},p(e,[a]){let t=r;r=f(e),r===t?v[r].p(e,a):(I(),y(v[t],1,1,()=>{v[t]=null}),q(),c=v[r],c?c.p(e,a):(c=v[r]=p[r](e),c.c()),w(c,1),c.m(s,null))},i(e){m||(w(c),m=!0)},o(e){y(c),m=!1},d(e){e&&u(a),e&&u(s),v[r].d()}}}function he(e,a,s){let t,o;const r=$("lzw");let i=null,n=(Math.random().toString(),[]),l=0,c=null,u=!1,d=!0;r.decompress("woXCsHF1YW50aXRhxIZ2ZUTEiWHCnsKDwqbEhHN3ZXLCoWLCq2VsYXBzZWRUaW1lw4tAMMKKfsO5w5siw5HComlkwqVRMS1pacSRxJPElcSXZMSaxJzEnsSgxKLEpMOLP8OwBBjCk3TCvGrEr2TCpMSzxLXEuG7ElMSWwqHEvMSbxJ3En8ShxKPEpT_DtMOdLxrCn8K-d8WMxLI3xLXEt8SSxZLEusWVxL3FmMWAxZvFg8OlcMKjw5cKPXHFjMWOMsWQxarFk8S7xa7Ev8WaxYI_w7xiTcOSw7HCqcO8xbpRxafFqcS5xZTFlsS-xZnFgcWcw64cwqwIMSbDqcWlUcW8xLbFkcW_xa3Fl8aCxpbFg8OxP3zDrcKRaHPGnzTFqMajxaxjxoHGlcWxxYTGrWhywrAhxo0zxb3GkcaAxqbGuMaEw6_FocK-dsOIwrTGjcayxpDFq8WUxrbHhcWwxoTDqMa7xr3Gv8SwxLLHgcaixb7FrMaTxa_Gg8SlQATCl8KNT8OfO2TGnzbGs8efx5LGt8eVxZzDs1PDt8OOw5kWwofGjTXHgseRx4TGlMezxYPDtMK0OVgQYk7Gn8e9x57Hg8alyIHHo8WDw7YMScK6XjU_xo3HrmnCr8SCYWzEh8SJacSLxI3EiMKawoLFunN1czHHsHLCp25ldXRyyJ_IqMSwwqTIqnMyyK7CpWFncmVlyLfFjci6M8iuyLDIssi0yLbIqcirNMiuwqhkaXPIv8mByYPJjXM1yZDJksmUyYDJgsmEyLnIqzbJiMixyLPItWzJoMi6N8mbyZPJlcmfyZg4yazJncmWyanIqznJssmuyZfHm8i6MTDJpMmKyafCrWTEiWVDb21wbGV0xKDCszI4LzA1LzIwMjEgMTU6NTY6NDnCpcmAb3VwyLB1bMigdHnCpsirxJZJRMKzMC4yOTPKtTI0MTfKujPKnTExNg").then(e=>{console.log("resultado: ",e)});let h,m=null,p=!1;let v=null;let f=!1;let g=null;return e.$$.update=()=>{if(2&e.$$.dirty&&s(2,t=l>=D.length),524292&e.$$.dirty&&s(10,o=t&&u),1048581&e.$$.dirty&&t){const e=(new Date).toLocaleString();r.compress({quantitativeData:n,qualitativeData:h,dateCompleted:e,group:i}).then(a=>{s(3,c=JSON.stringify({quantitativeData:n,qualitativeData:h,dateCompleted:e,group:i}))})}},[i,l,t,c,d,m,p,v,f,g,o,function(e){n.push(e.detail),s(1,l+=1)},function(){m.select(),m.setSelectionRange(0,99999),document.execCommand("copy")},function(){const e=J.map(e=>e.id).map(e=>({id:e,answer:g.elements[e].value}));e.map(e=>e.answer).every(e=>""!==e)?(s(6,p=!1),s(20,h=e),s(19,u=!0)):s(6,p=!0)},function(){s(7,v=!0)},function(){s(8,f=!0)},function(){s(0,i="proposed")},function(){s(0,i="nullity")},function(){s(4,d=!1)},u,h,function(e){L[e?"unshift":"push"](()=>{m=e,s(5,m)})},function(e){L[e?"unshift":"push"](()=>{g=e,s(9,g)})}]}export default class extends e{constructor(e){super(),a(this,e,he,de,s,{})}}
