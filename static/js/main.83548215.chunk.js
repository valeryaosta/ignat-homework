(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,t,a){e.exports={button:"Affairs_button__2v6eu",active:"Affairs_active__1Cf2C",affair:"Affairs_affair__1vwi0",item:"Affairs_item__2ydoC",high:"Affairs_high__3OhiR",middle:"Affairs_middle__1fI9f",low:"Affairs_low__39aRm"}},,,,,,function(e,t,a){e.exports={link:"Header_link__2MRUl",active:"Header_active__3lJbn",block:"Header_block__3DReU",header:"Header_header__2VPCJ"}},function(e,t,a){e.exports={message:"Message_message__dNlN5",avatar:"Message_avatar__1ri_V",content:"Message_content__24-p_",instance:"Message_instance__23SF-",text:"Message_text__3MtYR",name:"Message_name__3-8xv",time:"Message_time__2ihE6"}},,function(e,t,a){e.exports={greeting:"Greeting_greeting__1dgxT",error:"Greeting_error__1Gko5",input:"Greeting_input__1jlLs",errorInput:"Greeting_errorInput__2OLIf",button:"Greeting_button__3PEQA",count:"Greeting_count__2l4BL"}},,,,,function(e,t,a){e.exports={input:"SuperInputText_input__Onxpz",superInput:"SuperInputText_superInput__hQ1vU",errorInput:"SuperInputText_errorInput__3n2lH",error:"SuperInputText_error__2D3z0"}},,,,,function(e,t,a){e.exports={default:"SuperButton_default__3Rasz",red:"SuperButton_red__17hWT",button:"SuperButton_button__Sbd_n",blink:"SuperButton_blink__3w7W9"}},,function(e,t,a){e.exports={blue:"HW4_blue__3ExeN",column:"HW4_column__3HuWJ",testSpanError:"HW4_testSpanError__NKOnQ"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__1Gci0",checkbox:"SuperCheckbox_checkbox__xbuM4"}},function(e,t,a){e.exports={select:"SuperSelect_select__1HeE0",option:"SuperSelect_option__7jveX"}},,,,,,function(e,t,a){e.exports={App:"App_App__3iCsf"}},function(e,t,a){e.exports={span:"SuperEditableSpan_span__2GCQw"}},function(e,t,a){e.exports={radio:"SuperRadio_radio__1JJe4",label:"SuperRadio_label__cIQlk"}},function(e,t,a){e.exports={item:"HW8_item__ikzNa"}},function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(42),a(33)),i=a.n(o),u=a(12),s=a(3),m=a(11),d=a.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar,className:d.a.avatar,alt:"avatar"}),r.a.createElement("div",{className:d.a.instance}),r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.text},e.message),r.a.createElement("div",{className:d.a.time},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",v="some text",_="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:f,name:p,message:v,time:_}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=a(2),g=a(4),k=a.n(g);var C=function(e){var t=k.a.item+" "+k.a[e.affair.priority];return r.a.createElement("div",{className:k.a.affair},r.a.createElement("div",{className:k.a.item},e.affair.name),r.a.createElement("div",{className:t},"[",e.affair.priority,"] "),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.item+" "+k.a.button},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})})),a=k.a.button+" "+("all"===e.filter?k.a.active:""),n=k.a.button+" "+("high"===e.filter?k.a.active:""),l=k.a.button+" "+("middle"===e.filter?k.a.active:""),c=k.a.button+" "+("low"===e.filter?k.a.active:"");return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:a},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),i=o[0],u=o[1],s=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=a(22),x=a(13),y=a.n(x),w=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.onEnter,c=e.error,o=e.totalUsers,i=c?y.a.errorInput:y.a.input;return r.a.createElement("div",{className:y.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:i,onKeyDown:l,onBlur:a}),r.a.createElement("div",{className:y.a.error},c)),r.a.createElement("button",{onClick:n,className:y.a.button,disabled:!t},"add"),r.a.createElement("div",{className:y.a.count},o))},I=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(b.a)(u,2),m=s[0],d=s[1],E=function(){a(o),alert("Hello  ".concat(o," !")),i("")},f=t.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),m&&d("")):(o&&i(""),d("Enter your name"))},addUser:E,error:m,totalUsers:f,onEnter:function(e){"Enter"===e.key&&o&&E()}})},A=a(50);var T=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:a,addUserCallback:function(e){var t={_id:Object(A.a)(),name:e};l([].concat(Object(S.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=a(6),L=a(18),M=a.n(L),F=["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(H.a)(e,F),s="".concat(M.a.error," ").concat(i||""),m="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},G=a(25),W=a.n(G),D=a(23),J=a.n(D),P=["red","className"],R=function(e){var t=e.red,a=e.className,n=Object(H.a)(e,P),l="".concat(J.a.button," ").concat(t?J.a.red:J.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},U=a(26),z=a.n(U),K=["type","onChange","onChangeChecked","className","spanClassName","children"],Q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,K),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(B,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{className:W.a.blue}),r.a.createElement(R,null,"default"),r.a.createElement(R,{red:!0,onClick:o},"delete "),r.a.createElement(R,{disabled:!0},"disabled"),r.a.createElement(Q,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Q,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},V=a(34),Y=a.n(V),q=["autoFocus","onBlur","onEnter","spanProps"],Z=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(H.a)(e,q),o=Object(n.useState)(!1),i=Object(b.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,E=m.onDoubleClick,f=m.className,p=Object(H.a)(m,Z),v="".concat(Y.a.span," ").concat(f||"");return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(B,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:v},p),"\u270e ",d||c.value))};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(R,{onClick:function(){ee("editable-span-value",a)}},"save"),r.a.createElement(R,{onClick:function(){l(te("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(X,null),r.a.createElement(ae,null))},re=a(27),le=a.n(re),ce=["options","className","onChange","onChangeOption"],oe=function(e){var t=e.options,a=e.className,n=e.onChange,l=e.onChangeOption,c=Object(H.a)(e,ce),o=t?t.map((function(e,t){return r.a.createElement("option",{className:le.a.option,key:e+"-"+t,value:e},e)})):[],i=le.a.select+(a?" "+a:"");return r.a.createElement("select",Object.assign({className:i,onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},ie=a(35),ue=a.n(ie),se=["type","name","options","value","onChange","onChangeOption"],me=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(H.a)(e,se),i=function(e){l&&l(e),c&&c(e.currentTarget.value)},u=ue.a.radio,s=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",Object.assign({type:"radio",className:u,name:t,checked:e===n,value:e,onChange:i},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},de=["x","y","z"];var Ee=function(){var e=Object(n.useState)(de[1]),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(oe,{options:de,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:de,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},fe=function(e,t){switch(t.type){case"sort":var a=Object(S.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},pe=a(36),ve=a.n(pe),_e=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(_e),t=Object(b.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id,className:ve.a.item},r.a.createElement("span",null,e.name),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(fe(_e,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(R,{onClick:function(){return l(fe(_e,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(R,{onClick:function(){return l(fe(_e,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var be=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(b.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(b.a)(s,2),d=m[0],E=m[1],f=function(){clearInterval(a)},p=(null===i||void 0===i?void 0:i.toLocaleTimeString())||r.a.createElement("br",null),v=(null===i||void 0===i?void 0:i.toLocaleDateString())||r.a.createElement("br",null);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},p),d?r.a.createElement("div",null,v):r.a.createElement("br",null),r.a.createElement(R,{onClick:function(){f();var e=+setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(R,{onClick:f},"stop"))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(be,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ke=a(17),Ce=a(31),Ne={isLoading:!1},Oe=function(e){return{type:"LOADING",isLoading:e}};var je=function(){var e=Object(ke.c)((function(e){return e.loading.isLoading})),t=Object(ke.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."):r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){t(Oe(!0)),setTimeout((function(){t(Oe(!1))}),1500)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(ge,null),r.a.createElement(je,null))};var xe=function(){return r.a.createElement("div",null,"junior+")};var ye=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},we="/pre-junior",Ie="/junior",Ae="/junior-plus";var Te=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:we})}}),r.a.createElement(s.b,{path:we,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(s.b,{path:Ie,render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(s.b,{path:Ae,render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(ye,null)}})))},He=a(10),Le=a.n(He);var Me=function(){return r.a.createElement("div",{className:Le.a.header},r.a.createElement(u.b,{to:we,className:Le.a.link,activeClassName:Le.a.active},"pre-junior"),r.a.createElement(u.b,{to:Ie,className:Le.a.link,activeClassName:Le.a.active},"junior"),r.a.createElement(u.b,{to:Ae,className:Le.a.link,activeClassName:Le.a.active},"junior+"),r.a.createElement("div",{className:Le.a.block}))};var Fe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(Me,null),r.a.createElement(Te,null)))};var Be=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=a(30),We=Object(Ge.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),De=Object(Ge.b)(We),Je=De;window.store=De,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke.a,{store:Je},r.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.83548215.chunk.js.map