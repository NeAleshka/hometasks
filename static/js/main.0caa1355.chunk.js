(this.webpackJsonphometasks=this.webpackJsonphometasks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={navLink:"NavLink_navLink__2ln6L",activeNavLink:"NavLink_activeNavLink__2eFve",header:"NavLink_header__1dyiK",block:"NavLink_block__3JLbb"}},function(e,t,n){e.exports={message:"Message_message__3Jc5l",avatar:"Message_avatar__1LDJI",name:"Message_name__2480J",text:"Message_text__2-mpW",textMessage:"Message_textMessage__1dxK0",inTextMessage:"Message_inTextMessage__1Yq_5",time:"Message_time__3MTiG"}},,function(e,t,n){e.exports={hw3:"Greeting_hw3__2U-ea",buttonAdd:"Greeting_buttonAdd__3zD8g",error:"Greeting_error__1bRdz",inputName:"Greeting_inputName__1c8Jh",totalUsers:"Greeting_totalUsers__2GbHK",textError:"Greeting_textError__1UoTQ"}},,,,function(e,t,n){e.exports={affair:"Affair_affair__1LqH6",name:"Affair_name__ANoSi",priority:"Affair_priority__2m6HF",button:"Affair_button__3ATzH"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1Jkct",errorInput:"SuperInputText_errorInput__voX8f",error:"SuperInputText_error__2rvHH"}},,function(e,t,n){e.exports={blue:"HW4_blue__1s3Gc",column:"HW4_column__Fu3Zn",testSpanError:"HW4_testSpanError__2sVnq"}},function(e,t,n){e.exports={default:"SuperButton_default__1dYS6",red:"SuperButton_red__2S3Ws"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1DnsW",spanClassName:"SuperCheckbox_spanClassName__PCIAa"}},,function(e,t,n){e.exports={App:"App_App__DG1JW"}},function(e,t,n){e.exports={button:"Affairs_button__1Ck6e"}},function(e,t,n){e.exports={superSpanStyle:"SuperEditableSpan_superSpanStyle__FJQMP"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(21),s=n.n(r),i=(n(30),n(22)),o=n.n(i),l=n(10),j=n(3),u=n(9),b=n.n(u),d=n(1);var h=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("div",{className:b.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:"Logo"})}),Object(d.jsxs)("div",{className:b.a.textMessage,children:[Object(d.jsxs)("div",{className:b.a.inTextMessage,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.text,children:e.message})]}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",m="some text",p="22:00",v={backgroundColor:"#49b61c"};var f=function(){return Object(d.jsxs)("div",{style:v,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"HomeTask1"}),Object(d.jsx)(h,{avatar:O,name:x,message:m,time:p})]})},_=n(4),g=n(15),k=n.n(g);var C=function(e){return Object(d.jsxs)("div",{className:k.a.affair,children:[Object(d.jsx)("div",{className:k.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:k.a.priority,children:e.affair.priority}),Object(d.jsx)("button",{className:k.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]},e.affair._id)},N=n(23),y=n.n(N);var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=[{name:"All",onClick:function(){return e.setFilter("all")}},{name:"High",onClick:function(){return e.setFilter("high")}},{name:"Middle",onClick:function(){return e.setFilter("middle")}},{name:"Low",onClick:function(){return e.setFilter("low")}}].map((function(e){return Object(d.jsx)("button",{className:y.a.button,onClick:e.onClick,children:e.name})}));return Object(d.jsxs)("div",{children:[t,n]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],A={backgroundColor:"#143891"};var T=function(){var e=Object(a.useState)(w),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{style:A,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"HomeTask2"}),Object(d.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},L=n(14),E=n(11),H=n.n(E),J=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(null),l=Object(_.a)(o,2),j=l[0],u=l[1],b=t.length,h=j?H.a.error:"";return Object(d.jsxs)("div",{className:H.a.hw3,children:[Object(d.jsx)("input",{value:s,placeholder:"Enter Name",onChange:function(e){e.currentTarget.value.trim()&&j&&u(""),i(e.currentTarget.value)},className:"".concat(h," ").concat(H.a.inputName)}),Object(d.jsx)("button",{className:"".concat(h," ").concat(H.a.buttonAdd),onClick:function(){if(!s.trim())return u("Name is empty!!!");n(s),alert("Hello ".concat(s,"!")),i("")},children:"Add"}),Object(d.jsxs)("span",{className:H.a.totalUsers,children:[" Number of users: ",b]}),Object(d.jsx)("div",{className:H.a.textError,children:j})]})},M=function(e){var t=e.users,n=e.addUserCallback;return Object(d.jsx)(J,{users:t,addUserCallback:n})},F=n(37);var I=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{style:{backgroundColor:"#61dafb"},children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"HomeTask 3 "}),Object(d.jsx)(M,{users:n,addUserCallback:function(e){var t=[{_id:Object(F.a)(),name:e}].concat(Object(L.a)(n));c(t)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},P=n(7),G=n(6),W=n(16),U=n.n(W),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(U.a.error," ").concat(i||""),j="".concat("error"===r?U.a.errorInput:U.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},z=n(18),D=n.n(z),K=n(19),q=n.n(K),X=function(e){var t=e.red,n=e.className,a=Object(G.a)(e,["red","className"]),c="".concat(t?q.a.red:q.a.default," ").concat(n);return Object(d.jsx)("button",Object(P.a)({className:c,style:{cursor:a.cursor}},a))},R=n(20),Y=n.n(R),Q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){n?n(e.currentTarget.checked):t&&t(e)},className:s},r)),c&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:c})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):n.trim()?alert(n):alert("\u0442\u044b \u0448\u043e \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u043d\u0430\u0434\u0435\u043b\u0430\u043b")},i=Object(a.useState)(!1),o=Object(_.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{style:{backgroundColor:"yellow"},children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"  HomeTask 4"}),Object(d.jsxs)("div",{className:D.a.column,children:[Object(d.jsx)(B,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(B,{className:D.a.blue}),Object(d.jsx)(X,{children:"default"}),Object(d.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(X,{disabled:!0,children:"disabled"}),Object(d.jsx)(Q,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(Q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},V=n(34),$=n(24),ee=n.n($),te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(G.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],l=i[1],j=c||{},u=j.children,b=j.onDoubleClick,h=j.className,O=Object(G.a)(j,["children","onDoubleClick","className"]),x="".concat(ee.a.superSpanStyle," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(B,Object(P.a)({style:{backgroundColor:"white",color:"black"},placeholder:"Enter some interesting",autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},O),{},{children:[Object(d.jsx)(V.a,{style:{transform:"scaleX(-1)",marginRight:"5px",color:"cornflowerblue",cursor:"pointer"}}),u||r.value]}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}var ae=n(35),ce=n(36);var re=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{style:{backgroundColor:"chocolate"},children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"HomeTask 6"}),Object(d.jsx)("div",{children:Object(d.jsx)(te,{value:n,onChangeText:c,spanProps:{children:n?void 0:"Click me, best proger..."}})}),Object(d.jsxs)(X,{onClick:function(){ne("editable-span-value",n.trim())},children:[" ",Object(d.jsx)(ae.a,{size:"small",color:"green",cursor:"pointer"})," "]}),Object(d.jsx)(X,{onClick:function(){c(function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value",n.trim()))},children:Object(d.jsx)(ce.b,{size:"small",color:"red"})}),Object(d.jsxs)(X,{onClick:function(){c(""),ne("editable-span-value",null)},children:[" ",Object(d.jsx)(ce.a,{size:"small"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var se=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(T,{}),Object(d.jsx)(I,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(re,{})]})},ie=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(G.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e){return Object(d.jsx)("option",{value:e,children:e},t.indexOf(e))})):[];return Object(d.jsx)("select",Object(P.a)(Object(P.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},oe=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(G.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===a,onChange:s}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},le=["x","y","z"];var je=function(){var e=Object(a.useState)(le[1]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ie,{options:le,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(oe,{name:"radio",options:le,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ue=function(e,t){switch(t.type){case"sort":var n=Object(L.a)(e);return n="up"===t.payload?n.sort((function(e,t){return e.name.localeCompare(t.name)})):n.sort((function(e,t){return t.name.localeCompare(e.name)}));case"check":return Object(L.a)(e).filter((function(e){return e.age>18}));default:return e}},be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(a.useState)(be),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{children:[e.name," : age ",e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c(ue(be,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c(ue(be,{type:"sort"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c(ue(be,{type:"check"}))},children:"check 18"})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},he=function(){return Object(d.jsxs)("div",{style:{color:"white"},children:[Object(d.jsx)(je,{}),Object(d.jsx)(de,{})]})},Oe=function(){return Object(d.jsx)("div",{style:{color:"white"},children:"JuniorPlus"})};var xe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},me="/pre-junior",pe="/junior",ve="/junior+";var fe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(se,{})}),Object(d.jsx)(j.a,{path:me,element:Object(d.jsx)(se,{})}),Object(d.jsx)(j.a,{path:pe,element:Object(d.jsx)(he,{})}),Object(d.jsx)(j.a,{path:ve,element:Object(d.jsx)(Oe,{})}),Object(d.jsx)(j.a,{path:"/*",element:Object(d.jsx)(xe,{})})]})})},_e=n(8),ge=n.n(_e);var ke=function(){return Object(d.jsxs)("div",{className:ge.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/",className:function(e){return e.isActive?"".concat(ge.a.navLink," ").concat(ge.a.activeNavLink):"".concat(ge.a.navLink)},children:"Pre Junior"})}),Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:pe,className:function(e){return e.isActive?"".concat(ge.a.navLink," ").concat(ge.a.activeNavLink):"".concat(ge.a.navLink)},children:"Junior"})}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(l.b,{to:ve,className:function(e){return e.isActive?"".concat(ge.a.navLink," ").concat(ge.a.activeNavLink):"".concat(ge.a.navLink)},children:"Junior+"})]}),Object(d.jsx)("div",{className:ge.a.block})]})};var Ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ke,{}),Object(d.jsx)(fe,{})]})})},Ne={display:"inline-block",color:"white",width:"126px",margin:"20px auto"};var ye=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{style:Ne,children:"react homeworks:"}),Object(d.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.0caa1355.chunk.js.map