(this.webpackJsonpfilefolder=this.webpackJsonpfilefolder||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),i=a.n(s),r=(a(17),a(1)),o=a(2),c=a(4),m=a(3),d=a(8),u=a(6),f=a(7),v=a(5),p=a.n(v),b=a(11),E=a.n(b),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).sendFiles=function(e){e.preventDefault();var t=n.props,a=t.files,l=t.closeHandler;console.log(a),l()},n.state={value:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.closeHandler,a=p()({button:!0,"disabled-btn":""===this.state.value});return l.a.createElement("div",null,l.a.createElement("div",{className:"container-modal"},l.a.createElement("form",{className:"modal-card",onSubmit:this.sendFiles},l.a.createElement("div",{className:"modal-header"},l.a.createElement("div",{className:"close-btn",onClick:t},"+")),l.a.createElement("div",{className:"modal-icon"}),l.a.createElement("div",{className:"title"},"Enter your e-mail"),l.a.createElement("input",{type:"email",placeholder:"E-mail",className:"email-input",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),l.a.createElement("input",{type:"submit",disabled:""===this.state.value,className:a,value:"Send to me"}))))}}]),a}(n.Component),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).selectFileHandler=function(e){return function(t){var a=n.state,l=a.files,s=a.filesIds;l[e].selected=!l[e].selected,n.setState({files:Object(f.a)(Object(u.a)({},e,l[e]),l)}),s.map((function(e){return l[e]})).filter((function(e){return!0===e.selected})).length>0?n.setState({buttonStateDisable:!1}):n.setState({buttonStateDisable:!0})}},n.deleteFileHandler=function(e){return function(t){var a=n.state.files,l=E.a.omit(a,e);n.setState({files:l,filesIds:Object(d.a)(Object.keys(l))})}},n.loadFileHandler=function(e){e.preventDefault();var t=e.target.files;n.fileLoader(t)},n.fileLoader=function(e){var t=Object.keys(e),a={};t.forEach((function(t){var n=Number.parseInt(Math.floor(1e3*Math.random()));e[t].selected=!1,e[t].id=n,a[n]=e[t]})),n.setState({files:Object(f.a)(Object(f.a)({},a),n.state.files),filesIds:[].concat(Object(d.a)(Object.keys(a)),Object(d.a)(n.state.filesIds))})},n.state={files:{11:{id:11,type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",name:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 Microsoft Office Word.docx (\u043e\u0431\u0440\u0430\u0437\u0435\u0446)",selected:!1},22:{id:22,type:"image/jpeg",name:"\u0424\u043e\u0442\u043e.docx (\u043e\u0431\u0440\u0430\u0437\u0435\u0446)",selected:!1}},filesIds:[11,22],modal:!1,buttonStateDisable:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.files,n=t.filesIds,s=t.modal,i=t.buttonStateDisable,r=n.map((function(e){return a[e]})),o=this.props.userRole,c={img:{"image/png":!0,"image/jpeg":!0,"image/svg+xml":!0},doc:{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":!0},xlc:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":!0},ppt:{"application/vnd.openxmlformats-officedocument.presentationml.presentation":!0},pdf:{"application/pdf":!0},zip:{"application/x-zip-compressed":!0},video:{"video/mp4":!0}},m=p()({"disabled-btn":i,button:!0});if(0===n.length)return l.a.createElement("div",{className:"content-investors"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("div",{className:"logo-background"},l.a.createElement("div",{className:"logo"}))),l.a.createElement("div",{className:"light-theme-title"},"Welcome, Investor!"),l.a.createElement("div",{className:"investors-list-container"},l.a.createElement("div",{className:"title-files-list"},"No files")));var d=r.filter((function(e){return!0===e.selected}));return l.a.createElement("div",{className:"content-investors"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("div",{className:"logo-background"},l.a.createElement("div",{className:"logo"}))),l.a.createElement("div",{className:"light-theme-title"},"Welcome, Investor!"),l.a.createElement("div",{className:"investors-list-container"},l.a.createElement("ul",{className:"file-list"},r.map((function(t){var a=t.id,n=t.type,s=t.name,i=t.selected,r=p()({"selected-file":i,file:!0}),m=p()({"type-icon":!0,img:c.img[n],docx:c.doc[n],ppt:c.ppt[n],xlc:c.xlc[n],zip:c.zip[n],pdf:c.pdf[n],video:c.video[n]});return"admin"===o?l.a.createElement("li",{key:a,className:"file delete-file",onClick:e.deleteFileHandler(a)},l.a.createElement("div",{className:m}),l.a.createElement("div",{className:"text-file"},s)):l.a.createElement("li",{key:a,className:r,onClick:e.selectFileHandler(a)},l.a.createElement("div",{className:m}),l.a.createElement("div",{className:"text-file"},s))})))),"admin"===o?l.a.createElement("form",{onSubmit:this.loadFileHandler},l.a.createElement("input",{type:"file",id:"file-input",className:"file-input",onChange:this.loadFileHandler,multiple:!0}),l.a.createElement("label",{htmlFor:"file-input"},l.a.createElement("div",{className:"button"},"Load File"))):l.a.createElement("input",{type:"submit",disabled:this.state.buttonStateDisable,onClick:function(){return e.setState({modal:!0})},className:m,value:"Send to me!"}),s&&l.a.createElement(g,{files:d,closeHandler:function(){return e.setState({modal:!1})}}))}}]),a}(n.Component),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).submitForm=function(e){e.preventDefault();var t=n.state,a=t.value;t.passwords.forEach((function(e){a===e?(n.setState({errorPassword:!1}),"admin"===e?n.setState({submittingState:"submitted",userRole:"admin"}):n.setState({submittingState:"submitted",userRole:"guest"})):n.setState({errorPassword:!0})}))},n.renderForm=function(){return l.a.createElement("div",{className:"content-investors"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("div",{className:"logo-background"},l.a.createElement("img",{src:"../img/logo.png",alt:"",className:"logo"}))),l.a.createElement("form",{className:"investors-from",onSubmit:n.submitForm},l.a.createElement("div",{className:"title"},"Welcome, Investor!"),l.a.createElement("input",{type:"password",placeholder:"Password",className:"password-field",value:n.state.value,onChange:function(e){return n.setState({value:e.target.value})}}),n.state.errorPassword&&l.a.createElement("div",{className:"fail-pass"},"Uncorected Password!"),l.a.createElement("input",{type:"submit",value:"Enter",className:"button"})))},n.state={submittingState:"fillingForm",userRole:"",value:"",passwords:["admin","user",""],errorPassword:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.submittingState;switch(e){case"fillingForm":return this.renderForm();case"submitted":return l.a.createElement(h,{userRole:this.state.userRole});default:throw new Error("'".concat(e,"' - unknown state"))}}}]),a}(l.a.Component),S=function(){return l.a.createElement("section",{class:"investors-page"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"header"},l.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.65a5f636.chunk.js.map