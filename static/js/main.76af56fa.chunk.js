(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={button:"Affairs_button__2v6eu",active:"Affairs_active__1Cf2C",affair:"Affairs_affair__1vwi0",item:"Affairs_item__2ydoC",high:"Affairs_high__3OhiR",middle:"Affairs_middle__1fI9f",low:"Affairs_low__39aRm"}},,,,,,function(e,a,t){e.exports={link:"Header_link__2MRUl",active:"Header_active__3lJbn",block:"Header_block__3DReU",header:"Header_header__2VPCJ"}},function(e,a,t){e.exports={message:"Message_message__dNlN5",avatar:"Message_avatar__1ri_V",content:"Message_content__24-p_",instance:"Message_instance__23SF-",text:"Message_text__3MtYR",name:"Message_name__3-8xv",time:"Message_time__2ihE6"}},,,function(e,a,t){e.exports={greeting:"Greeting_greeting__1dgxT",error:"Greeting_error__1Gko5",input:"Greeting_input__1jlLs",errorInput:"Greeting_errorInput__2OLIf",button:"Greeting_button__3PEQA",count:"Greeting_count__2l4BL"}},,,function(e,a,t){e.exports={input:"SuperInputText_input__Onxpz",superInput:"SuperInputText_superInput__hQ1vU",errorInput:"SuperInputText_errorInput__3n2lH",error:"SuperInputText_error__2D3z0"}},,function(e,a,t){e.exports={default:"SuperButton_default__3Rasz",red:"SuperButton_red__17hWT",button:"SuperButton_button__Sbd_n",blink:"SuperButton_blink__3w7W9"}},,function(e,a,t){e.exports={blue:"HW4_blue__3ExeN",column:"HW4_column__3HuWJ",testSpanError:"HW4_testSpanError__NKOnQ"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__1Gci0",checkbox:"SuperCheckbox_checkbox__xbuM4"}},,,,,,function(e,a,t){e.exports={App:"App_App__3iCsf"}},,function(e,a,t){e.exports={span:"SuperEditableSpan_span__2GCQw"}},,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(36),t(27)),i=t.n(o),u=t(11),s=t(1),m=t(10),d=t.n(m);var _=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar,className:d.a.avatar,alt:"avatar"}),r.a.createElement("div",{className:d.a.instance}),r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.text},e.message),r.a.createElement("div",{className:d.a.time},e.time)))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",p="some text",v="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:E,name:f,message:p,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(4),g=t(3),k=t.n(g);var N=function(e){var a=k.a.item+" "+k.a[e.affair.priority];return r.a.createElement("div",{className:k.a.affair},r.a.createElement("div",{className:k.a.item},e.affair.name),r.a.createElement("div",{className:a},"[",e.affair.priority,"] "),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.item+" "+k.a.button},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=k.a.button+" "+("all"===e.filter?k.a.active:""),n=k.a.button+" "+("high"===e.filter?k.a.active:""),l=k.a.button+" "+("middle"===e.filter?k.a.active:""),c=k.a.button+" "+("low"===e.filter?k.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(j),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),i=o[0],u=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:i}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(30),S=t(13),w=t.n(S),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.onEnter,c=e.error,o=e.totalUsers,i=c?w.a.errorInput:w.a.input;return r.a.createElement("div",{className:w.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:i,onKeyDown:l,onBlur:t}),r.a.createElement("div",{className:w.a.error},c)),r.a.createElement("button",{onClick:n,className:w.a.button,disabled:!a},"add"),r.a.createElement("div",{className:w.a.count},o))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(h.a)(u,2),m=s[0],d=s[1],_=function(){t(o),alert("Hello  ".concat(o," !")),i("")},E=a.length;return r.a.createElement(y,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(i(a),m&&d("")):(o&&i(""),d("Enter your name"))},addUser:_,error:m,totalUsers:E,onEnter:function(e){"Enter"===e.key&&o&&_()}})},I=t(44);var T=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(I.a)(),name:e};l([].concat(Object(O.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(8),F=t(16),H=t.n(F),M=["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],G=function(e){var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(B.a)(e,M),s="".concat(H.a.error," ").concat(i||""),m="".concat(H.a.input," ").concat(c?H.a.errorInput:H.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},P=t(20),W=t.n(P),U=t(18),J=t.n(U),R=["red","className"],D=function(e){var a=e.red,t=e.className,n=Object(B.a)(e,R),l="".concat(J.a.button," ").concat(a?J.a.red:J.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(21),L=t.n(K),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(B.a)(e,Q),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),u=Object(h.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(G,{className:W.a.blue}),r.a.createElement(D,null,"default"),r.a.createElement(D,{red:!0,onClick:o},"delete "),r.a.createElement(D,{disabled:!0},"disabled"),r.a.createElement(z,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(z,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(V,null))};var Y=function(){return r.a.createElement("div",null,"junior")};var q=function(){return r.a.createElement("div",null,"junior+")};var Z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},$="/pre-junior",ee="/junior",ae="/junior-plus";var te=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:$})}}),r.a.createElement(s.b,{path:$,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(s.b,{path:ee,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(s.b,{path:ae,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(Z,null)}})))},ne=t(9),re=t.n(ne);var le=function(){return r.a.createElement("div",{className:re.a.header},r.a.createElement(u.b,{to:$,className:re.a.link,activeClassName:re.a.active},"pre-junior"),r.a.createElement(u.b,{to:ee,className:re.a.link,activeClassName:re.a.active},"junior"),r.a.createElement(u.b,{to:ae,className:re.a.link,activeClassName:re.a.active},"junior+"),r.a.createElement("div",{className:re.a.block}))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(le,null),r.a.createElement(te,null)))},oe=t(29),ie=t.n(oe),ue=["autoFocus","onBlur","onEnter","spanProps"],se=["children","onDoubleClick","className"],me=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(B.a)(e,ue),o=Object(n.useState)(!1),i=Object(h.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,_=m.onDoubleClick,E=m.className,f=Object(B.a)(m,se),p="".concat(ie.a.span," ").concat(E||"");return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),_&&_(e)},className:p},f),"\u270e ",d||c.value))};function de(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function _e(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}de("test",{x:"A",y:1});_e("test",{x:"",y:0});var Ee=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(me,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(D,{onClick:function(){de("editable-span-value",t)}},"save"),r.a.createElement(D,{onClick:function(){l(_e("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ce,null),r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.76af56fa.chunk.js.map