!function(){"use strict";const s=["client/client.9715399e.js","client/index.404f3a73.js","client/Tutorial.4664ebef.js","client/index.005e4afd.js","client/questions.54ff0b54.js","client/DirectQuestionComparison.4fb88341.js","client/index.067d2f90.js","client/HypothesisConfirmation.41daa446.js","client/HypothesisComparison.720a46b9.js","client/SUSQuestionnaire.509f3269.js","client/about.34e65010.js","client/index.5e69bbf0.js","client/index.611e6b6f.js","client/[slug].7de29000.js","client/client.78dbdf1e.js","client/DirectQuestionComparison.bb141ff3.js","client/index.44b0e446.js","client/json-url-single.6483d160.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","logo-192.png","manifest.json","tests/q1/Q1-i.n.svg","tests/q1/Q1-i.p.svg","tests/q1/Q1-ii.n.svg","tests/q1/Q1-ii.p.svg","tests/q2/Q2-i.n.svg","tests/q2/Q2-i.p.svg","tests/q2/Q2-ii.n.svg","tests/q2/Q2-ii.p.svg","tests/q3/Q3-i.n.svg","tests/q3/Q3-i.p.svg","tests/q3/Q3-ii.n.svg","tests/q3/Q3-ii.p.svg","tests/q4/Q4-i.p.svg","tests/q4/Q4-iA.n.svg","tests/q4/Q4-iB.n.svg","tests/q4/Q4-ii.p.svg","tests/q4/Q4-iiA.n.svg","tests/q4/Q4-iiB.n.svg","tests/q5/Q5-i.n.svg","tests/q5/Q5-i.p.svg","tests/q5/Q5-ii.n.svg","tests/q5/Q5-ii.p.svg","tests/q6/Q6-i.p.svg","tests/q6/Q6-iA.n.svg","tests/q6/Q6-iB.n.svg","tests/q6/Q6-iC.n.svg","tests/q6/Q6-iD.n.svg","tests/q6/Q6-ii.p.svg","tests/q6/Q6-iiA.n.svg","tests/q6/Q6-iiB.n.svg","tests/q6/Q6-iiC.n.svg","tests/q6/Q6-iiD.n.svg","tests/q6/Q6-iiMAIN.p.svg","tests/q6/Q6-iMAIN.n.svg","tests/q7/Q7-i.n.svg","tests/q7/Q7-i.p.svg","tests/q7/Q7-ii.n.svg","tests/q7/Q7-ii.p.svg"]),t=new Set(s);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1623608346392").then(t=>t.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const t of s)"cache1623608346392"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const e=new URL(s.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&t.has(e.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1623608346392").then(async t=>{try{const e=await fetch(s.request);return t.put(s.request,e.clone()),e}catch(e){const i=await t.match(s.request);if(i)return i;throw e}}))))})}();
