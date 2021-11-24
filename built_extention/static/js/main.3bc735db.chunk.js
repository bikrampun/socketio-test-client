(this["webpackJsonpsocketio-client"]=this["webpackJsonpsocketio-client"]||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){},211:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(32),r=c.n(s),i=(c(130),c(88)),o=c.n(i),l=c(104),j=c(42),d=(c(131),c(221)),u=c(218),b=c(219),O=c(122),g=c(220),m=c(125),x=c(222),h=c(62),f=c(223),v=c(106),p=c.n(v),S=c(118),y=c(91),N=c(6),k=d.a.TextArea,I=void 0,C="requestsHistory";var J=function(){var e=Object(n.useState)("disconnected"),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],v=r[1],J=Object(n.useState)(""),F=Object(j.a)(J,2),E=F[0],q=F[1],w=Object(n.useState)(""),z=Object(j.a)(w,2),L=z[0],P=z[1],T=Object(n.useState)(""),B=Object(j.a)(T,2),D=B[0],A=B[1],K=Object(n.useState)({}),M=Object(j.a)(K,2),R=M[0],H=M[1],G=Object(n.useState)(!1),Q=Object(j.a)(G,2),U=Q[0],V=Q[1],W=Object(n.useState)([]),X=Object(j.a)(W,2),Y=X[0],Z=X[1];Object(n.useEffect)((function(){var e=localStorage.getItem(C),t=localStorage.getItem("ip"),c=localStorage.getItem("emitName");t&&v(t),c&&q(c),e&&Z(JSON.parse(e))}),[]);var $=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a("connecting"),(I=Object(S.a)(i)).on("connect",(function(){a("connected")})),I.on("disconnect",(function(){a("disconnected")})),"disconnected"===c?I.connect():(I.disconnect(),I.close(),I=void 0,a("disconnected"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){if(V(!0),I){var e=function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(D)?JSON.parse(D):D;I.emit(E,e,(function(e){V(!1),ee(D,e,E),H(e)}))}},ee=function(e,t,c){var n=localStorage.getItem(C);if(n){var a=JSON.parse(n);a.push({key:Object(y.a)(3),emitName:c,title:L,request:e,response:t}),localStorage.setItem(C,JSON.stringify(a)),Z(a)}else{var s=[{key:Object(y.a)(3),emitName:c,title:L,request:e,response:t}];localStorage.setItem(C,JSON.stringify(s)),Z(s)}};return Object(N.jsxs)("div",{className:"grid-container",children:[Object(N.jsx)("div",{className:"top-panel",children:Object(N.jsxs)(u.a,{gutter:[8,8],style:{width:"100%"},children:[Object(N.jsx)(b.a,{xs:24,sm:24,md:8,lg:8,xl:8,children:Object(N.jsx)(d.a,{disabled:"connected"===c,placeholder:"Socketio address: example: http://localhost:8000",size:"large",value:i,onChange:function(e){v(e.target.value),localStorage.setItem("ip",e.target.value)},onKeyPress:function(e){"Enter"===e.key&&$()}})}),Object(N.jsx)(b.a,{xs:24,sm:24,md:8,lg:8,xl:8,children:Object(N.jsx)(d.a,{placeholder:"Emit Name",size:"large",value:E,onChange:function(e){q(e.target.value),localStorage.setItem("emitName",e.target.value)}})}),Object(N.jsx)(b.a,{xs:24,sm:24,md:8,lg:8,xl:8,children:Object(N.jsxs)(u.a,{gutter:8,justify:"space-between",children:[Object(N.jsx)(b.a,{span:"20",children:Object(N.jsx)(d.a,{placeholder:"Title",size:"large",value:L,onChange:function(e){P(e.target.value),localStorage.setItem("title",e.target.value)}})}),Object(N.jsx)(b.a,{children:Object(N.jsxs)(O.a,{onClick:$,type:"default",disabled:0===i.length,size:"large",children:["connected"===c?Object(N.jsx)(m.a,{}):Object(N.jsx)(N.Fragment,{}),"disconnected"===c?Object(N.jsx)(x.a,{}):Object(N.jsx)(N.Fragment,{}),"connecting"===c?Object(N.jsx)(h.a,{}):Object(N.jsx)(N.Fragment,{})]})})]})})]})}),Object(N.jsxs)("div",{className:"request",children:[Object(N.jsx)(k,{style:{height:"100%"},placeholder:"Requset Body",bordered:!1,value:D,onChange:function(e){A(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&_()}}),Object(N.jsx)(O.a,{onClick:_,disabled:0===E.length||"connected"!==c,children:"connected"!==c?"Disconnected":"SEND"}),U?Object(N.jsx)(O.a,{onClick:function(){V(!1)},children:"CANCEL"}):Object(N.jsx)(N.Fragment,{})]}),Object(N.jsx)("div",{className:"response",children:U?Object(N.jsx)(h.a,{}):Object(N.jsx)(p.a,{src:R})}),Object(N.jsx)("div",{className:"list",children:Object(N.jsx)(g.b,{itemLayout:"horizontal",dataSource:Y.slice().reverse(),renderItem:function(e){return Object(N.jsx)(g.b.Item,{actions:[Object(N.jsx)("a",{onClick:function(){!function(e){var t=Y.find((function(t){return t.key===e}));t&&A(t.request),t&&H(t.response),t&&q(t.emitName),t&&P(t.title)}(e.key)},children:"Open"},"list-loadmore-edit"),Object(N.jsx)("a",{style:{color:"red"},onClick:function(){!function(e){var t=localStorage.getItem(C),c=t&&JSON.parse(t);c=c.filter((function(t){return t.key!==e})),localStorage.setItem(C,JSON.stringify(c)),Z(c)}(e.key)},children:"Remove"},"list-loadmore-more")],children:Object(N.jsx)(g.b.Item.Meta,{avatar:Object(N.jsx)(f.a,{}),title:Object(N.jsx)("b",{children:e.title||e.key})})})}})})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,224)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(210);r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(J,{})}),document.getElementById("root")),F()}},[[211,1,2]]]);
//# sourceMappingURL=main.3bc735db.chunk.js.map