import{S as t,i as r,s as e,b as l,c as o,d as n,f as s,g as i,a,k as h,t as c,j as y,K as f,u as d,e as m,v as u,o as p,h as g,q as x}from"./client.73c6a00f.js";import{b as k,l as C,r as E,s as I,d as w,a as v,t as $}from"./index.067d2f90.js";import"./index.404f3a73.js";import"./questions.71fc6d32.js";import{q as b}from"./questionOrder.3c352ab0.js";function q(t,r,e){const l=t.slice();return l[17]=r[e],l}function T(t,r,e){const l=t.slice();return l[17]=r[e],l}function j(t,r,e){const l=t.slice();return l[17]=r[e],l}function B(t,r,e){const l=t.slice();return l[17]=r[e],l}function O(t){let r,e,c,y,f,d,m,u,p,g,x,k,C,E,I;return{c(){r=l("g"),e=l("line"),f=l("line"),p=l("line"),C=l("circle"),this.h()},l(t){r=o(t,"g",{transform:!0},1);var l=n(r);e=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(e).forEach(s),f=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(f).forEach(s),p=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(p).forEach(s),C=o(l,"circle",{cy:!0,r:!0,fill:!0},1),n(C).forEach(s),l.forEach(s),this.h()},h(){i(e,"x1","0"),i(e,"y1",c=t[9](t[17].proposed.timeCI[0])),i(e,"x2","0"),i(e,"y2",y=t[9](t[17].proposed.timeCI[1])),i(e,"stroke",t[11]),i(e,"stroke-width","1"),i(f,"x1",d=-P),i(f,"y1",m=t[9](t[17].proposed.timeCI[0])),i(f,"x2",P),i(f,"y2",u=t[9](t[17].proposed.timeCI[0])),i(f,"stroke",t[11]),i(f,"stroke-width","1"),i(p,"x1",g=-P),i(p,"y1",x=t[9](t[17].proposed.timeCI[1])),i(p,"x2",P),i(p,"y2",k=t[9](t[17].proposed.timeCI[1])),i(p,"stroke",t[11]),i(p,"stroke-width","1"),i(C,"cy",E=t[9](t[17].proposed.averageTime)),i(C,"r",P),i(C,"fill",t[11]),i(r,"transform",I=`translate(${t[8](t[17].question)+t[8].bandwidth()/2-F},0)`)},m(t,l){a(t,r,l),h(r,e),h(r,f),h(r,p),h(r,C)},p(t,l){1&l&&c!==(c=t[9](t[17].proposed.timeCI[0]))&&i(e,"y1",c),1&l&&y!==(y=t[9](t[17].proposed.timeCI[1]))&&i(e,"y2",y),1&l&&m!==(m=t[9](t[17].proposed.timeCI[0]))&&i(f,"y1",m),1&l&&u!==(u=t[9](t[17].proposed.timeCI[0]))&&i(f,"y2",u),1&l&&x!==(x=t[9](t[17].proposed.timeCI[1]))&&i(p,"y1",x),1&l&&k!==(k=t[9](t[17].proposed.timeCI[1]))&&i(p,"y2",k),1&l&&E!==(E=t[9](t[17].proposed.averageTime))&&i(C,"cy",E),1&l&&I!==(I=`translate(${t[8](t[17].question)+t[8].bandwidth()/2-F},0)`)&&i(r,"transform",I)},d(t){t&&s(r)}}}function S(t){let r,e,c,y,f,d,m,u,p,g,x,k,C,E,I;return{c(){r=l("g"),e=l("line"),f=l("line"),p=l("line"),C=l("circle"),this.h()},l(t){r=o(t,"g",{transform:!0},1);var l=n(r);e=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(e).forEach(s),f=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(f).forEach(s),p=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(p).forEach(s),C=o(l,"circle",{cy:!0,r:!0,fill:!0},1),n(C).forEach(s),l.forEach(s),this.h()},h(){i(e,"x1","0"),i(e,"y1",c=t[9](t[17].nullity.timeCI[0])),i(e,"x2","0"),i(e,"y2",y=t[9](t[17].nullity.timeCI[1])),i(e,"stroke",Q),i(e,"stroke-width","1"),i(f,"x1",d=-P),i(f,"y1",m=t[9](t[17].nullity.timeCI[0])),i(f,"x2",P),i(f,"y2",u=t[9](t[17].nullity.timeCI[0])),i(f,"stroke",Q),i(f,"stroke-width","1"),i(p,"x1",g=-P),i(p,"y1",x=t[9](t[17].nullity.timeCI[1])),i(p,"x2",P),i(p,"y2",k=t[9](t[17].nullity.timeCI[1])),i(p,"stroke",Q),i(p,"stroke-width","1"),i(C,"cy",E=t[9](t[17].nullity.averageTime)),i(C,"r",P),i(C,"fill",Q),i(r,"transform",I=`translate(${t[8](t[17].question)+t[8].bandwidth()/2+F},0)`)},m(t,l){a(t,r,l),h(r,e),h(r,f),h(r,p),h(r,C)},p(t,l){1&l&&c!==(c=t[9](t[17].nullity.timeCI[0]))&&i(e,"y1",c),1&l&&y!==(y=t[9](t[17].nullity.timeCI[1]))&&i(e,"y2",y),1&l&&m!==(m=t[9](t[17].nullity.timeCI[0]))&&i(f,"y1",m),1&l&&u!==(u=t[9](t[17].nullity.timeCI[0]))&&i(f,"y2",u),1&l&&x!==(x=t[9](t[17].nullity.timeCI[1]))&&i(p,"y1",x),1&l&&k!==(k=t[9](t[17].nullity.timeCI[1]))&&i(p,"y2",k),1&l&&E!==(E=t[9](t[17].nullity.averageTime))&&i(C,"cy",E),1&l&&I!==(I=`translate(${t[8](t[17].question)+t[8].bandwidth()/2+F},0)`)&&i(r,"transform",I)},d(t){t&&s(r)}}}function z(t){let r,e,f,d,m,u,p,g,x,k,C,E,I,w,v,$;return{c(){r=l("g"),e=l("line"),m=l("line"),x=l("line"),I=l("text"),w=c("x"),this.h()},l(t){r=o(t,"g",{transform:!0},1);var l=n(r);e=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(e).forEach(s),m=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(m).forEach(s),x=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(x).forEach(s),I=o(l,"text",{"alignment-baseline":!0,"text-anchor":!0,y:!0,fill:!0},1);var i=n(I);w=y(i,"x"),i.forEach(s),l.forEach(s),this.h()},h(){i(e,"x1","0"),i(e,"y1",f=t[10](t[17].proposed.errorCI[0])),i(e,"x2","0"),i(e,"y2",d=t[10](t[17].proposed.errorCI[1])),i(e,"stroke",t[11]),i(e,"stroke-width","1"),i(m,"x1",u=-P),i(m,"y1",p=t[10](t[17].proposed.errorCI[0])),i(m,"x2",P),i(m,"y2",g=t[10](t[17].proposed.errorCI[0])),i(m,"stroke",t[11]),i(m,"stroke-width","1"),i(x,"x1",k=-P),i(x,"y1",C=t[10](t[17].proposed.errorCI[1])),i(x,"x2",P),i(x,"y2",E=t[10](t[17].proposed.errorCI[1])),i(x,"stroke",t[11]),i(x,"stroke-width","1"),i(I,"alignment-baseline","middle"),i(I,"text-anchor","middle"),i(I,"y",v=t[10](t[17].proposed.errorRate)),i(I,"fill",t[11]),i(r,"transform",$=`translate(${t[8](t[17].question)+t[8].bandwidth()/2-F},0)`)},m(t,l){a(t,r,l),h(r,e),h(r,m),h(r,x),h(r,I),h(I,w)},p(t,l){1&l&&f!==(f=t[10](t[17].proposed.errorCI[0]))&&i(e,"y1",f),1&l&&d!==(d=t[10](t[17].proposed.errorCI[1]))&&i(e,"y2",d),1&l&&p!==(p=t[10](t[17].proposed.errorCI[0]))&&i(m,"y1",p),1&l&&g!==(g=t[10](t[17].proposed.errorCI[0]))&&i(m,"y2",g),1&l&&C!==(C=t[10](t[17].proposed.errorCI[1]))&&i(x,"y1",C),1&l&&E!==(E=t[10](t[17].proposed.errorCI[1]))&&i(x,"y2",E),1&l&&v!==(v=t[10](t[17].proposed.errorRate))&&i(I,"y",v),1&l&&$!==($=`translate(${t[8](t[17].question)+t[8].bandwidth()/2-F},0)`)&&i(r,"transform",$)},d(t){t&&s(r)}}}function A(t){let r,e,f,d,m,u,p,g,x,k,C,E,I,w,v,$;return{c(){r=l("g"),e=l("line"),m=l("line"),x=l("line"),I=l("text"),w=c("x"),this.h()},l(t){r=o(t,"g",{transform:!0},1);var l=n(r);e=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(e).forEach(s),m=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(m).forEach(s),x=o(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0},1),n(x).forEach(s),I=o(l,"text",{"alignment-baseline":!0,"text-anchor":!0,y:!0,fill:!0},1);var i=n(I);w=y(i,"x"),i.forEach(s),l.forEach(s),this.h()},h(){i(e,"x1","0"),i(e,"y1",f=t[10](t[17].nullity.errorCI[0])),i(e,"x2","0"),i(e,"y2",d=t[10](t[17].nullity.errorCI[1])),i(e,"stroke",Q),i(e,"stroke-width","1"),i(m,"x1",u=-P),i(m,"y1",p=t[10](t[17].nullity.errorCI[0])),i(m,"x2",P),i(m,"y2",g=t[10](t[17].nullity.errorCI[0])),i(m,"stroke",Q),i(m,"stroke-width","1"),i(x,"x1",k=-P),i(x,"y1",C=t[10](t[17].nullity.errorCI[1])),i(x,"x2",P),i(x,"y2",E=t[10](t[17].nullity.errorCI[1])),i(x,"stroke",Q),i(x,"stroke-width","1"),i(I,"alignment-baseline","middle"),i(I,"text-anchor","middle"),i(I,"y",v=t[10](t[17].nullity.errorRate)),i(I,"fill",Q),i(r,"transform",$=`translate(${t[8](t[17].question)+t[8].bandwidth()/2+F},0)`)},m(t,l){a(t,r,l),h(r,e),h(r,m),h(r,x),h(r,I),h(I,w)},p(t,l){1&l&&f!==(f=t[10](t[17].nullity.errorCI[0]))&&i(e,"y1",f),1&l&&d!==(d=t[10](t[17].nullity.errorCI[1]))&&i(e,"y2",d),1&l&&p!==(p=t[10](t[17].nullity.errorCI[0]))&&i(m,"y1",p),1&l&&g!==(g=t[10](t[17].nullity.errorCI[0]))&&i(m,"y2",g),1&l&&C!==(C=t[10](t[17].nullity.errorCI[1]))&&i(x,"y1",C),1&l&&E!==(E=t[10](t[17].nullity.errorCI[1]))&&i(x,"y2",E),1&l&&v!==(v=t[10](t[17].nullity.errorRate))&&i(I,"y",v),1&l&&$!==($=`translate(${t[8](t[17].question)+t[8].bandwidth()/2+F},0)`)&&i(r,"transform",$)},d(t){t&&s(r)}}}function D(t){let r,e,x,k,C,E,I,w,v,$,b,D,P,F,Q,K,G,H,J,L,N,U,V,W,X,Y,Z,_,tt,rt,et,lt,ot,nt,st,it,at,ht,ct,yt,ft,dt,mt=t[0],ut=[];for(let r=0;r<mt.length;r+=1)ut[r]=O(B(t,mt,r));let pt=t[0],gt=[];for(let r=0;r<pt.length;r+=1)gt[r]=S(j(t,pt,r));let xt=t[0],kt=[];for(let r=0;r<xt.length;r+=1)kt[r]=z(T(t,xt,r));let Ct=t[0],Et=[];for(let r=0;r<Ct.length;r+=1)Et[r]=A(q(t,Ct,r));return{c(){r=f("p"),e=c("Direct Question Comparison Data"),x=d(),k=f("p"),C=c("Time"),E=d(),I=l("svg"),w=l("g"),v=l("g"),b=l("g"),D=l("line"),K=l("line");for(let t=0;t<ut.length;t+=1)ut[t].c();N=m();for(let t=0;t<gt.length;t+=1)gt[t].c();V=d(),W=f("p"),X=c("Error"),Y=d(),Z=l("svg"),_=l("g"),tt=l("g"),et=l("g"),lt=l("line"),it=l("line");for(let t=0;t<kt.length;t+=1)kt[t].c();ft=m();for(let t=0;t<Et.length;t+=1)Et[t].c();this.h()},l(t){r=o(t,"P",{});var l=n(r);e=y(l,"Direct Question Comparison Data"),l.forEach(s),x=u(t),k=o(t,"P",{});var i=n(k);C=y(i,"Time"),i.forEach(s),E=u(t),I=o(t,"svg",{height:!0,width:!0,class:!0},1);var a=n(I);w=o(a,"g",{transform:!0},1);var h=n(w);v=o(h,"g",{transform:!0},1),n(v).forEach(s),b=o(h,"g",{},1),n(b).forEach(s),D=o(h,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0},1),n(D).forEach(s),K=o(h,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0},1),n(K).forEach(s);for(let t=0;t<ut.length;t+=1)ut[t].l(h);N=m();for(let t=0;t<gt.length;t+=1)gt[t].l(h);h.forEach(s),a.forEach(s),V=u(t),W=o(t,"P",{});var c=n(W);X=y(c,"Error"),c.forEach(s),Y=u(t),Z=o(t,"svg",{height:!0,width:!0,class:!0},1);var f=n(Z);_=o(f,"g",{transform:!0},1);var d=n(_);tt=o(d,"g",{transform:!0},1),n(tt).forEach(s),et=o(d,"g",{},1),n(et).forEach(s),lt=o(d,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0},1),n(lt).forEach(s),it=o(d,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0},1),n(it).forEach(s);for(let t=0;t<kt.length;t+=1)kt[t].l(d);ft=m();for(let t=0;t<Et.length;t+=1)Et[t].l(d);d.forEach(s),f.forEach(s),this.h()},h(){i(v,"transform",$=`translate(0,${t[7]})`),i(D,"class","wall svelte-1vlafmb"),i(D,"x1",P=t[6]+.5),i(D,"y1",F=0),i(D,"x2",Q=t[6]+.5),i(D,"y2",t[7]),i(K,"class","wall svelte-1vlafmb"),i(K,"x1",G=0),i(K,"y1",H=.5),i(K,"x2",J=t[6]+.5),i(K,"y2",L=.5),i(w,"transform",U=`translate(${t[5].left},${t[5].top})`),i(I,"height",R),i(I,"width",M),i(I,"class","svelte-1vlafmb"),i(tt,"transform",rt=`translate(0,${t[7]})`),i(lt,"class","wall svelte-1vlafmb"),i(lt,"x1",ot=t[6]+.5),i(lt,"y1",nt=0),i(lt,"x2",st=t[6]+.5),i(lt,"y2",t[7]),i(it,"class","wall svelte-1vlafmb"),i(it,"x1",at=0),i(it,"y1",ht=.5),i(it,"x2",ct=t[6]+.5),i(it,"y2",yt=.5),i(_,"transform",dt=`translate(${t[5].left},${t[5].top})`),i(Z,"height",R),i(Z,"width",M),i(Z,"class","svelte-1vlafmb")},m(l,o){a(l,r,o),h(r,e),a(l,x,o),a(l,k,o),h(k,C),a(l,E,o),a(l,I,o),h(I,w),h(w,v),t[12](v),h(w,b),t[13](b),h(w,D),h(w,K);for(let t=0;t<ut.length;t+=1)ut[t].m(w,null);h(w,N);for(let t=0;t<gt.length;t+=1)gt[t].m(w,null);a(l,V,o),a(l,W,o),h(W,X),a(l,Y,o),a(l,Z,o),h(Z,_),h(_,tt),t[14](tt),h(_,et),t[15](et),h(_,lt),h(_,it);for(let t=0;t<kt.length;t+=1)kt[t].m(_,null);h(_,ft);for(let t=0;t<Et.length;t+=1)Et[t].m(_,null)},p(t,[r]){if(2817&r){let e;for(mt=t[0],e=0;e<mt.length;e+=1){const l=B(t,mt,e);ut[e]?ut[e].p(l,r):(ut[e]=O(l),ut[e].c(),ut[e].m(w,N))}for(;e<ut.length;e+=1)ut[e].d(1);ut.length=mt.length}if(769&r){let e;for(pt=t[0],e=0;e<pt.length;e+=1){const l=j(t,pt,e);gt[e]?gt[e].p(l,r):(gt[e]=S(l),gt[e].c(),gt[e].m(w,null))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=pt.length}if(3329&r){let e;for(xt=t[0],e=0;e<xt.length;e+=1){const l=T(t,xt,e);kt[e]?kt[e].p(l,r):(kt[e]=z(l),kt[e].c(),kt[e].m(_,ft))}for(;e<kt.length;e+=1)kt[e].d(1);kt.length=xt.length}if(1281&r){let e;for(Ct=t[0],e=0;e<Ct.length;e+=1){const l=q(t,Ct,e);Et[e]?Et[e].p(l,r):(Et[e]=A(l),Et[e].c(),Et[e].m(_,null))}for(;e<Et.length;e+=1)Et[e].d(1);Et.length=Ct.length}},i:p,o:p,d(e){e&&s(r),e&&s(x),e&&s(k),e&&s(E),e&&s(I),t[12](null),t[13](null),g(ut,e),g(gt,e),e&&s(V),e&&s(W),e&&s(Y),e&&s(Z),t[14](null),t[15](null),g(kt,e),g(Et,e)}}}const M=1e3,R=300,P=5,F=8,Q="#9E9E9E";function K(t,r,e){let l,o,n,s,{data:i}=r;const a={left:50,right:20,bottom:50,top:20},h=M-a.left-a.right,c=R-a.top-a.bottom,y=Math.max(...i.map(t=>Math.max(Math.max(...t.nullity.timeCI),Math.max(...t.proposed.timeCI))));console.log("maxTime",y);const f=k().domain(b).range([0,h]),d=C().domain([0,1.1*y]).range([c,0]).nice(),m=C().domain([0,1.1]).range([c,0]).nice(),u=E[2];return t.$$set=t=>{"data"in t&&e(0,i=t.data)},t.$$.update=()=>{1&t.$$.dirty&&console.log(i),2&t.$$.dirty&&l&&I(l).call(w(f).tickSizeOuter(0)).selectAll(".tick").each((function(t,r,e){const l=I(this).selectAll("line");if(r===e.length-1)return l.remove();l.attr("transform",`translate(${f.bandwidth()/2},0)`).attr("shape-rendering","crispEdges").clone().attr("y2",-c).attr("stroke-width",.5).attr("stroke","#BEBEBE").attr("stroke-dasharray","2 1").attr("shape-rendering","crispEdges")})),8&t.$$.dirty&&n&&I(n).call(w(f).tickSizeOuter(0)).selectAll(".tick").each((function(t,r,e){const l=I(this).selectAll("line");if(r===e.length-1)return l.remove();l.attr("transform",`translate(${f.bandwidth()/2},0)`).attr("shape-rendering","crispEdges").clone().attr("y2",-c).attr("stroke-width",.5).attr("stroke","#BEBEBE").attr("stroke-dasharray","2 1").attr("shape-rendering","crispEdges")})),4&t.$$.dirty&&o&&I(o).call(v(d).tickSizeOuter(0).tickFormat(t=>t+"s")),16&t.$$.dirty&&s&&I(s).call(v(m).tickSizeOuter(0).tickFormat($(".0%")))},e(1,l=null),e(2,o=null),e(3,n=null),e(4,s=null),[i,l,o,n,s,a,h,c,f,d,m,u,function(t){x[t?"unshift":"push"](()=>{l=t,e(1,l)})},function(t){x[t?"unshift":"push"](()=>{o=t,e(2,o)})},function(t){x[t?"unshift":"push"](()=>{n=t,e(3,n)})},function(t){x[t?"unshift":"push"](()=>{s=t,e(4,s)})}]}export default class extends t{constructor(t){super(),r(this,t,K,D,e,{data:0})}}
