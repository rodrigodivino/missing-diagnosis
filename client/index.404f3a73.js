function r(r,n){return r<n?-1:r>n?1:r>=n?0:NaN}var n,t,l=(1===(n=r).length&&(t=n,n=function(n,l){return r(t(n),l)}),{left:function(r,t,l,a){for(null==l&&(l=0),null==a&&(a=r.length);l<a;){var f=l+a>>>1;n(r[f],t)<0?l=f+1:a=f}return l},right:function(r,t,l,a){for(null==l&&(l=0),null==a&&(a=r.length);l<a;){var f=l+a>>>1;n(r[f],t)>0?a=f:l=f+1}return l}}).right;function a(r,n){return n<r?-1:n>r?1:n>=r?0:NaN}function f(r){return null===r?NaN:+r}function u(r,n){var t,l,a,f=r.length,u=-1;if(null==n){for(;++u<f;)if(null!=(t=r[u])&&t>=t)for(l=a=t;++u<f;)null!=(t=r[u])&&(l>t&&(l=t),a<t&&(a=t))}else for(;++u<f;)if(null!=(t=n(r[u],u,r))&&t>=t)for(l=a=t;++u<f;)null!=(t=n(r[u],u,r))&&(l>t&&(l=t),a<t&&(a=t));return[l,a]}function e(r,n,t){r=+r,n=+n,t=(a=arguments.length)<2?(n=r,r=0,1):a<3?1:+t;for(var l=-1,a=0|Math.max(0,Math.ceil((n-r)/t)),f=new Array(a);++l<a;)f[l]=r+l*t;return f}var o=Math.sqrt(50),i=Math.sqrt(10),h=Math.sqrt(2);function s(r,n,t){var l,a,f,u,e=-1;if(t=+t,(r=+r)===(n=+n)&&t>0)return[r];if((l=n<r)&&(a=r,r=n,n=a),0===(u=M(r,n,t))||!isFinite(u))return[];if(u>0)for(r=Math.ceil(r/u),n=Math.floor(n/u),f=new Array(a=Math.ceil(n-r+1));++e<a;)f[e]=(r+e)*u;else for(r=Math.floor(r*u),n=Math.ceil(n*u),f=new Array(a=Math.ceil(r-n+1));++e<a;)f[e]=(r-e)/u;return l&&f.reverse(),f}function M(r,n,t){var l=(n-r)/Math.max(0,t),a=Math.floor(Math.log(l)/Math.LN10),f=l/Math.pow(10,a);return a>=0?(f>=o?10:f>=i?5:f>=h?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(f>=o?10:f>=i?5:f>=h?2:1)}function c(r,n,t){var l=Math.abs(n-r)/Math.max(0,t),a=Math.pow(10,Math.floor(Math.log(l)/Math.LN10)),f=l/a;return f>=o?a*=10:f>=i?a*=5:f>=h&&(a*=2),n<r?-a:a}function g(r,n,t){if(null==t&&(t=f),l=r.length){if((n=+n)<=0||l<2)return+t(r[0],0,r);if(n>=1)return+t(r[l-1],l-1,r);var l,a=(l-1)*n,u=Math.floor(a),e=+t(r[u],u,r);return e+(+t(r[u+1],u+1,r)-e)*(a-u)}}function v(r,n){var t,l,a=r.length,f=-1;if(null==n){for(;++f<a;)if(null!=(t=r[f])&&t>=t)for(l=t;++f<a;)null!=(t=r[f])&&t>l&&(l=t)}else for(;++f<a;)if(null!=(t=n(r[f],f,r))&&t>=t)for(l=t;++f<a;)null!=(t=n(r[f],f,r))&&t>l&&(l=t);return l}function N(r,n){var t,l=r.length,a=l,u=-1,e=0;if(null==n)for(;++u<l;)isNaN(t=f(r[u]))?--a:e+=t;else for(;++u<l;)isNaN(t=f(n(r[u],u,r)))?--a:e+=t;if(a)return e/a}function w(r,n,t){for(var l,a,f=(null==t?r.length:t)-(n=null==n?0:+n);f;)a=Math.random()*f--|0,l=r[f+n],r[f+n]=r[a+n],r[a+n]=l;return r}function m(r,n){var t,l=r.length,a=-1,f=0;if(null==n)for(;++a<l;)(t=+r[a])&&(f+=t);else for(;++a<l;)(t=+n(r[a],a,r))&&(f+=t);return f}export{r as a,N as b,w as c,a as d,u as e,l as f,s as g,M as h,v as m,g as q,e as r,m as s,c as t};
