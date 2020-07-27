(this["webpackJsonpairtime-calculator"]=this["webpackJsonpairtime-calculator"]||[]).push([[0],{101:function(e,a,t){},185:function(e,a,t){},187:function(e,a,t){},189:function(e,a,t){},191:function(e,a,t){},192:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=t(40),i=t.n(o),s=t(62),u=t(9),m=t(63),d=t.n(m),f=t(10),v=t(75),E=t(17),p=t(64),h=t.n(p),g=t(73),b=t(6),y=(t(101),t(25)),w=t(72),R=t(41),z=t.n(R),S=t(68),j=t(69),C=t(15),N=[{name:"LinkCheckReq",size:0},{name:"LinkAdrAns",size:1},{name:"DutyCycleAns",size:0},{name:"RXParamSetupAns",size:1},{name:"DevStatusAns",size:2},{name:"NewChannelAns",size:1},{name:"DlChannelAns",size:1},{name:"RXTimingSetupAns",size:0},{name:"TxParamSetupAns",size:0}],O=[{name:"LinkCheckAns",size:2},{name:"LinkAdrReq",size:4},{name:"DutyCycleReq",size:1},{name:"RXParamSetupReq",size:4},{name:"DevStatusReq",size:0},{name:"NewChannelReq",size:5},{name:"DlChannelReq",size:4},{name:"RXTimingSetupReq",size:1},{name:"TxParamSetupReq",size:1}],k=t(76),x=t(66),A=t(65);t(185);function L(e){var a=e.content,t=e.showIcon,r=void 0!==t&&t,c=e.placement,o=void 0===c?"auto-end":c,i=e.children,s=Object(n.useState)((function(){return Object(A.uniqueId)("HelpTooltip-")})),m=Object(u.a)(s,1)[0];return a?l.a.createElement(k.a,{placement:o,overlay:l.a.createElement(x.a,{id:m},a)},l.a.createElement("div",null,i,r&&l.a.createElement("sup",null,l.a.createElement("small",{className:"text-muted"},"\u24d8")))):l.a.createElement(l.a.Fragment,null,i)}function D(e){return{value:""+e.value,onChange:function(a){var t=a.currentTarget;e.setValue("number"===typeof e.value?+t.value:t.value)}}}var F=t(28),M=t(29);t(187);function P(e){var a=e.min,t=void 0===a?0:a,r=e.value,c=e.setValue;return Object(n.useEffect)((function(){c(r)}),[r,c]),l.a.createElement(M.a,{className:"mb-3"},l.a.createElement(M.a.Prepend,null,l.a.createElement(y.a,{onClick:function(){r>t&&c(r-1)},variant:"outline-secondary","aria-label":"Decrease"},"-")),l.a.createElement(F.a,Object.assign({},D({value:r,setValue:c}),{type:"number",className:"NumberInput",min:t,placeholder:"Enter number"})),l.a.createElement(M.a.Append,null,l.a.createElement(y.a,{onClick:function(){c((function(e){return e+1}))},variant:"outline-secondary","aria-label":"Increase"},"+")))}var T=t(77),q=t(44),I=t(67),W={payloadSize:12,headerSize:13,codingRate:"4/5"};function _(e){function a(e){var a=Object(n.useState)(e),t=Object(u.a)(a,2);return{value:t[0],setValue:t[1]}}var t=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={},n=a.split(",").map((function(e){return e.trim()})),l=Object(I.a)(n);try{var r=function(){var a=e.value;if(""===a)return"continue";if(/^\d+$/.test(a))return t.payloadSize?t.headerSize?console.warn("Ignored numeric value ".concat(a,"; already parsed both payloadSize and headerSize")):t.headerSize=+a:t.payloadSize=+a,"continue";if(/^cr4[5678]$/i.test(a))return t.codingRate?console.warn("Ignored string value ".concat(a,"; already parsed codingRate")):t.codingRate=a.substr(2).split("").join("/"),"continue";var n=a.toLowerCase(),l=N.concat(O).find((function(e){return e.name.toLowerCase()===n}));l?t.macCommands=(t.macCommands||[]).concat(l):console.warn("Ignored string value ".concat(a,"; no matching MAC command found"))};for(l.s();!(e=l.n()).done;)r()}catch(c){l.e(c)}finally{l.f()}return Object(q.a)(Object(q.a)({},W),t)}(e.userConfig),r=a(t.payloadSize),c=a(t.headerSize),o=a(t.codingRate),i=a(t.macCommands);function s(e){var a;i.setValue((i.value||[]).concat(e)),a=e.size+1,c.setValue((function(e){return e+a}))}Object(n.useEffect)((function(){e.setPacketSize(c.value+r.value)}),[e,c.value,r.value]),Object(n.useEffect)((function(){e.setCodingRate(o.value)}),[e,o.value]),Object(n.useEffect)((function(){e.setUserConfig(function(e,a,t,n){var l=[];return e===W.payloadSize&&a===W.headerSize||l.push(e),a!==W.headerSize&&l.push(a),t&&t!==W.codingRate&&l.push("cr"+t.replace("/","")),n&&l.push.apply(l,Object(T.a)(n.map((function(e){return e.name})))),l.join(",")}(r.value,c.value,o.value,i.value))}),[e,c.value,r.value,o.value,i.value]);var m=N.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(S.a,{onClick:function(){return s(e)},pill:!0,variant:t.macCommands&&t.macCommands.includes(e)?"primary":"secondary"},e.name," ",e.size),"\xa0")}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,null,l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:f.a,controlId:"formHeaderSize"},l.a.createElement(L,{showIcon:!0,content:"For an uplink and downlink, the overhead is at least 13 bytes: MHDR (1), DevAddr (4), FCtrl (1), FCnt (2), FPort (1) and MIC (4). Also, FOpts may include MAC commands."},l.a.createElement(C.a.Label,null,"Overhead size")),l.a.createElement(P,Object.assign({},c,{min:13}))),l.a.createElement(C.a.Group,{as:f.a,controlId:"formApplicationPayloadSize"},l.a.createElement(L,{showIcon:!0,content:"The application payload size. May be empty for a simple ACK or if the packet only includes MAC commands."},l.a.createElement(C.a.Label,null,"Payload size")),l.a.createElement(P,r)),"4/5"!==o.value&&l.a.createElement(C.a.Group,{as:f.a,controlId:"formCodingRate"},l.a.createElement(L,{showIcon:!0,content:"The coding rate (CR) used for forward error correction (FEC). Always 4/5 for LoRaWAN."},l.a.createElement(C.a.Label,null,"Coding rate")),l.a.createElement(C.a.Control,Object.assign({as:"select"},D(o)),l.a.createElement("option",{value:"4/5"},"4/5"),l.a.createElement("option",{value:"4/6"},"4/6"),l.a.createElement("option",{value:"4/7"},"4/7"),l.a.createElement("option",{value:"4/8"},"4/8")))),t.macCommands&&l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a.Row,{className:"justify-content-md-center"},l.a.createElement(f.a,{md:"8"},l.a.createElement(C.a.Label,null,"MAC command"),l.a.createElement(j.a,{"aria-label":"MAC commands"},m))),l.a.createElement("br",null))))}var B=t(70),H=t(71),V=function(){function e(){Object(B.a)(this,e)}return Object(H.a)(e,null,[{key:"calculate",value:function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"4/5",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"auto",r=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:8,o=Math.pow(2,a)/(1e3*t)*1e3,i=(c+4.25)*o,s=r?0:1,u="auto"===l&&125===+t&&+a>=11||!0===l?1:0,m=+n[2]-4,d=8+Math.max(Math.ceil((8*e-4*a+28+16-20*s)/(4*(a-2*u)))*(m+4),0),f=d*o;return i+f}}]),e}();function U(e,a){return e.toLocaleString("en-US",{minimumFractionDigits:a,maximumFractionDigits:a})}function X(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.reduce((function(e,a){return a?e+(e&&"."!==e.slice(-1)?". ":e?" ":"")+a+(e&&"."!==a.slice(-1)?".":""):e}),"")||void 0}function G(e){var a,t=e.region,n=e.dr,r=e.size,c=e.airtime,o=e.maxPhyPayloadSize,i=c/.01/1e3,s=3e4/c,u=86400/s,m=t.maxDwellTime||0,d=m>0&&c>m,f=n.maxMacPayloadSize&&r>o;return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{content:X(n.notes,n.maxMacPayloadSize&&(f?"The full payload of ".concat(r," bytes exceeds the maximum packet size of ").concat(o," bytes"):"Maximum total packet size ".concat(o," bytes")))},l.a.createElement("div",{className:"Result-datarate ".concat(f?"Result-has-warning":n.notes?"Result-has-note":""),role:"cell"},l.a.createElement("div",{className:"Result-dr"},n.name),l.a.createElement("div",null,"\u200b\u200b",l.a.createElement("span",{className:"Result-sf"},"SF",n.sf),"\u200b\u200b",l.a.createElement("span",{className:"Result-unit Result-unit-bw"},"BW",l.a.createElement("br",null),n.bw)),f&&l.a.createElement("div",{className:"Result-datarate-warning"},"\u200b\u200bmax size exceeded"))),l.a.createElement(L,{content:l.a.createElement(l.a.Fragment,null,"On SF",n.sf,"BW",n.bw,", a total packet size of ",r," bytes"," ",l.a.createElement("a",{href:document.location.href},"needs ",U(c,2)," milliseconds time on air"),".",d&&l.a.createElement(l.a.Fragment,null," ","This exceeds the maximum dwell time of ",m," milliseconds for"," ",t.label,"."))},l.a.createElement("div",{className:"Result-airtime ".concat(d?"Result-has-warning":""),role:"cell"},l.a.createElement("div",null,U(c,1),"\u200b",l.a.createElement("span",{className:"Result-unit"},"ms")),d&&l.a.createElement("div",{className:"Result-airtime-warning"},"\u200b\u200bmax dwell time exceeded"))),l.a.createElement(L,{content:l.a.createElement(l.a.Fragment,null,"If regional legal or LoRaWAN maximum duty cycles apply, then a 1% maximum duty cycle needs a ",l.a.createElement("em",null,"minimum")," of ",U(i,2)," seconds between ",l.a.createElement("em",null,"any")," subsequent packet starts in the same subband.")},l.a.createElement("div",{className:"Result-dutycycle",role:"cell"},l.a.createElement("div",null,U(i,1),"\u200b",l.a.createElement("span",{className:"Result-unit"},"sec"),"\u200b\u200b"),l.a.createElement("div",null,U(Math.floor(3600/i),0),"\u200b",l.a.createElement("span",{className:"Result-unit"},"msg",l.a.createElement("br",null),"/hour")))),l.a.createElement(L,{content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://www.thethingsnetwork.org/forum/t/1300"},"TTN Fair Access Policy")," ","allows for at most 30 seconds time on air per device, per 24 hours. So, an"," ",l.a.createElement("a",{href:document.location.href},"airtime of ",U(c,1)," milliseconds for ",r," bytes on SF",n.sf,"BW",n.bw)," ","imposes a limit of ",U(s,1)," messages per day."),"\n\n",l.a.createElement("p",null,"When transmitting all day, ",l.a.createElement("strong",null,"on average")," this needs a minimum of"," ",(a=u,a>=120.05?"".concat(U(a/60,1)," minutes"):"".concat(U(a,1)," seconds"))," between the starts of two uplinks, or a maximum of"," ",U(s/24,1),"\xa0messages per hour."))},l.a.createElement("div",{className:"Result-fairaccess",role:"cell"},l.a.createElement("div",{className:"Result-fairaccess-messages"},U(86400/s,1),"\u200b",l.a.createElement("span",{className:"Result-unit"},"sec\u200b",l.a.createElement("br",null),"(avg)"),"\u200b\u200b"),l.a.createElement("div",null,l.a.createElement("span",{className:"Result-fairaccess-messages-per-hour"},U(s/24,1)),"\u200b",l.a.createElement("span",{className:"Result-unit Result-unit-hour"},"avg",l.a.createElement("br",null),"/hour"),"\u200b\u200b"),l.a.createElement("div",{className:"Result-fairaccess-messages-per-day"},U(Math.floor(s),0),"\u200b",l.a.createElement("span",{className:"Result-unit"},"msg",l.a.createElement("br",null),"/24h")))))}function $(e){var a=e.region,t=e.packetSize,n=e.codingRate;if(!n)return null;var r=a.dataRates.map((function(e,r){var c=V.calculate(t,e.sf,e.bw,n),o=e.maxMacPayloadSize+5,i=a.maxDwellTime&&c>a.maxDwellTime||e.maxMacPayloadSize&&t>o,s="Results-result-".concat(r%2?"odd":"even"),u="Results-result-highlight-".concat(i?"warning":e.highlight||"none");return l.a.createElement("div",{key:e.name,className:"Results-result ".concat(s," ").concat(u),role:"row"},l.a.createElement(G,{size:t,region:a,dr:e,airtime:c,maxPhyPayloadSize:o}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Results-grid Results-grid-".concat(r.length),role:"table"},l.a.createElement("div",{role:"rowgroup"},l.a.createElement("div",{className:"Results-legend",role:"row"},l.a.createElement("div",{role:"columnheader"},"data rate"),l.a.createElement("div",{role:"columnheader"},"airtime"),l.a.createElement("div",{role:"columnheader"},"1%\xa0max duty\xa0cycle"),l.a.createElement("div",{role:"columnheader"},"fair access policy"))),l.a.createElement("div",{role:"rowgroup"},r)))}t(189);function J(e){var a=e.children,t=Object(n.useRef)(null),r=Object(n.useState)(!1),c=Object(u.a)(r,2),o=c[0],i=c[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],f=m[1],v=Object(n.useState)({width:-1,height:-1}),E=Object(u.a)(v,1)[0],p=function(e){var a=t.current;a&&a.scrollBy(e,0)};return Object(n.useEffect)((function(){var e=t.current,a=function(){if(e){var a=e.scrollLeft>0,t=e.scrollWidth-e.offsetWidth>e.scrollLeft+1;i(a),f(t)}else console.log("No scroll element")};if(e)return a(),window.addEventListener("resize",a),e.addEventListener("scroll",a),function(){e.removeEventListener("scroll",a),window.removeEventListener("resize",a)}}),[E]),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center horizontal-scroll"+(o?" horizontal-scroll--overflow-left":"")+(d?" horizontal-scroll--overflow-right":"")},l.a.createElement("div",{className:"horizontal-scroll__button"+(o?" horizontal-scroll__button--enabled":""),onClick:function(){p(-40)}},"\u2039"),l.a.createElement("div",{className:"horizontal-scroll__content table-responsive",ref:t},a),l.a.createElement("div",{className:"horizontal-scroll__button"+(d?" horizontal-scroll__button--enabled":""),onClick:function(){p(40)}},"\u203a"))}function Y(e,a,t){var n=a.pathname.split("/"),l=Object(u.a)(n,4),r=l[1],c=l[2],o=l[3],i=t.networks.find((function(e){return e.name===r})),s=i?i.regions.find((function(e){return e.name===c})):void 0;return{network:i,region:s,parameters:o}}function K(e,a,t,n,l,r){var c=Y(0,a,t),o=void 0===r?c.parameters:r,i="/"+n.name+"/"+l.name+(o?"/"+o:"");a.pathname!==i?e.replace(i):console.log("No URL change needed; ".concat(i))}function Q(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),s=i[0],m=i[1],d=K.bind(null,e.history,e.location,e.config),v=Y(e.history,e.location,e.config),p=v.network,h=v.region,g=v.parameters;if(!p){var b=e.config.networks[0],R=b.regions.find((function(e){return e.name===b.defaultRegion}));return d(b,R),null}if(!h){var S=p.regions.find((function(e){return e.name===p.defaultRegion}));return d(p,S),null}return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(J,null,l.a.createElement(w.a,null,p.regions.map((function(e){return l.a.createElement(y.a,{variant:"outline-primary",size:"sm",active:e.name===h.name,disabled:!e.dataRates,key:e.name,onClick:function(){return function(e){console.log("region",e),d(p,e)}(e)}},e.label)})))))),l.a.createElement(E.a,null,l.a.createElement("hr",null)),l.a.createElement(E.a,{className:"justify-content-sm-center"},l.a.createElement(f.a,null,l.a.createElement("h3",null,h.title))),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(f.a,{md:"auto"},l.a.createElement(_,{userConfig:g,setUserConfig:function(e){console.log("URL",e),d(p,h,e)},setPacketSize:function(e){console.log("packet size",r,e),c(e)},setCodingRate:function(e){console.log("coding rate",s,e),m(e)}}))),l.a.createElement(E.a,{className:"justify-content-sm-center"},l.a.createElement(f.a,null,l.a.createElement($,{region:h,packetSize:r,codingRate:s}),l.a.createElement("hr",null))),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(f.a,{md:"8"},h.limitations&&l.a.createElement(z.a,{source:h.limitations}))),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(f.a,{md:"8"},h.countries&&l.a.createElement(z.a,{source:h.countries}))))}function Z(){var e="/airtime-calculator/config.json",a=Object(n.useState)("Loading configuration..."),t=Object(u.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)({}),m=Object(u.a)(o,2),p=m[0],y=m[1],w=function(e){if(console.log("COPY",e instanceof ClipboardEvent,e),e instanceof ClipboardEvent&&e.clipboardData){console.log("COPY");var a=document.querySelector('[role="tooltip"] .tooltip-inner');if(a)return void function(e,a){e.clipboardData&&(a instanceof HTMLElement&&a.innerHTML&&(console.log("text/html"),e.clipboardData.setData("text/html",a.innerHTML)),a&&a.textContent&&e.clipboardData.setData("text/plain",a.textContent),e.preventDefault())}(e,a);if(function(){if(window.getSelection){var e=window.getSelection();return e&&""!==e.toString()}return!0}())return;var t=document.querySelector('[role="table"]');if(t){var n=t.querySelectorAll('[role="rowgroup"]'),l=("<table>"+("<thead><tr>"+Array.from(n[0].querySelectorAll('[role="columnheader"]')).map((function(e){return'<th align="center">'.concat(e.textContent,"</th>")})).join("")+"</thead></tr>")+"\n"+("<tbody>"+Array.from(n[1].querySelectorAll('[role="row"]')).map((function(e){return"<tr>"+Array.from(e.querySelectorAll('[role="cell"]')).map((function(e){return"<td>".concat(e.textContent,"</td>")})).join("")+"</tr>"})).join("\n")+"</tbody>")+"</table>").replace(/\u200B\u200B/g,"&lt;br/>").replace(/\u200B/g," ");console.log(l),e.clipboardData.setData("text/html",l),e.preventDefault()}}};return Object(n.useEffect)((function(){return console.error("Init keydown"),window.addEventListener("copy",w),function(){console.error("Remove keydown"),window.removeEventListener("copy",w)}}),[]),Object(n.useEffect)((function(){var a=!1;return function(){var t=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(e);case 3:n=t.sent.data,a||(c(null),y(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c("Failed to load configuration ".concat("/airtime-calculator"," ").concat(e,": ").concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){a=!0}}),[e]),l.a.createElement(g.a,{basename:"/airtime-calculator"},l.a.createElement(v.a,{fluid:!0,className:"App"},l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement("h1",null,"Airtime calculator for LoRaWAN"),l.a.createElement("p",null,r))),p.networks&&l.a.createElement(b.a,{render:function(e){return l.a.createElement(Q,Object.assign({},e,{config:p}))}}),l.a.createElement(h.a,{href:"https://github.com/avbentem/airtime-calculator"})))}t(191),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,a,t){e.exports=t(192)}},[[78,1,2]]]);
//# sourceMappingURL=main.1441c724.chunk.js.map