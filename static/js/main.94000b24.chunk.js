(this.webpackJsonptut1=this.webpackJsonptut1||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),s=(n(10),n(2)),l=(n(11),n(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})})}i.defaultProps={title:"Case Converter"};var d=n(5);function b(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"mb-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsx)("textarea",{className:"form-control texthere",rows:"6",value:r,onChange:function(e){a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},placeholder:"Enter Your Text"}),Object(l.jsx)("button",{className:"upbtn btn btn-primary my-3",onClick:function(){var e=r.toUpperCase();a(e)},children:"Convert To Upper Case"}),Object(l.jsx)("button",{className:"lowbtn btn btn-primary my-3 mx-1",onClick:function(){var e=r.toLowerCase();a(e)},children:"Convert To Lower Case"}),Object(l.jsx)("button",{className:"lowbtn btn btn-primary my-3 mx-4",onClick:function(){a("")},children:"Clear All"}),Object(l.jsx)("button",{className:"lowbtn btn btn-primary my-3 ",onClick:function(){var e=r.split(/[ ]+/);a(e.join(" "))},children:"Remove Extra Spaces"}),Object(l.jsx)(d.CopyToClipboard,{text:r,children:Object(l.jsx)("button",{className:"copybtn btn btn-secondary my-3 mx-1",children:"Copy To Clipboard"})})]}),Object(l.jsx)("div",{className:"container numchar my-2",style:{color:"dark"===e.mode?"white":"#042743"},children:Object(l.jsxs)("h6",{children:[r.split(" ").length," Words and ",r.length," Characters"]})}),Object(l.jsx)("div",{className:"container numchar my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:Object(l.jsxs)("h6",{children:[" It may take average of ",3.16*r.split(" ").length," seconds to read this text"]})}),Object(l.jsxs)("div",{className:"container my-4 preview",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h3",{children:"Preview"}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)("p",{children:r.length>0?r:"Enter Something To Preview Here"})})]})]})}var h=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{mode:n,toggleMode:function(){"light"===n?(r("dark"),document.body.style.backgroundColor="#042743"):(r("light"),document.body.style.backgroundColor="white")}}),Object(l.jsx)("div",{className:"container my-4",children:Object(l.jsx)(b,{heading:"Enter Your Text Here",mode:n})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.94000b24.chunk.js.map