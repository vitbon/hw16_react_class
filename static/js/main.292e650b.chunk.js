(this.webpackJsonphw16_react_class=this.webpackJsonphw16_react_class||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(4),c=t.n(r);t(16),t(5),t(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(8),l=t(1),o=t.n(l),m=t(2),h=t(6),u=t(7),f=t(10),p=t(9),d=(t(19),[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380678123456",gender:"male"},{firstName:"\u0406\u0432\u0430\u043d",lastName:"\u041d\u0435\u0447\u0443\u0439-\u041b\u0435\u0432\u0438\u0446\u044c\u043a\u0438\u0439",phone:"+380935554422",gender:"male"},{firstName:"\u041b\u0435\u0441\u044f",lastName:"\u0423\u043a\u0440\u0430\u0457\u043d\u043a\u0430",phone:"+380991234567",gender:"female"},{firstName:"\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439",lastName:"\u0411\u0435\u0437\u0445\u0430\u0442\u0447\u0435\u043d\u043a\u043e",phone:"+380999999999"},{firstName:"\u041e\u0441\u0442\u0430\u043f",lastName:"\u0412\u0438\u0448\u043d\u044f",phone:"+380972231199",gender:"male"},{firstName:"\u041c\u0430\u0440\u043a\u043e",lastName:"\u0412\u043e\u0432\u0447\u043e\u043a",phone:"+380989876543",gender:"female"}]);var N=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={contacts:[].concat(d),filtered:[].concat(d),search:"",isMale:!0,isFemale:!0,isUnisex:!0},e.isMale=Object(m.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isMale:!e.state.isMale});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.isFemale=Object(m.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isFemale:!e.state.isFemale});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.isUnisex=Object(m.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isUnisex:!e.state.isUnisex});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.handleSearchChange=function(){var a=Object(m.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({search:t.target.value});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.filterData=Object(m.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState((function(){var a=e.state.search.toLowerCase(),t=e.state.contacts.filter((function(a){return"male"===a.gender&&e.state.isMale||"female"===a.gender&&e.state.isFemale||void 0===a.gender&&e.state.isUnisex})).filter((function(e){return e.firstName.toLowerCase().includes(a)||e.lastName.toLowerCase().includes(a)||e.phone.toLowerCase().includes(a)}));return console.log(t),{filtered:Object(i.a)(t)}}));case 2:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bg"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"search"},s.a.createElement("input",{className:"search__btn",type:"search",placeholder:"Search...",value:this.state.search,onChange:this.handleSearchChange}),s.a.createElement("label",{className:"check",id:"man",onChange:this.isMale},s.a.createElement("input",{type:"checkbox",name:"man",checked:this.state.isMale}),"\ud83d\udc68"),s.a.createElement("label",{className:"check",id:"woman",onChange:this.isFemale},s.a.createElement("input",{type:"checkbox",name:"woman",checked:this.state.isFemale}),"\ud83d\udc69"),s.a.createElement("label",{className:"check",id:"unisex",onChange:this.isUnisex},s.a.createElement("input",{type:"checkbox",name:"unisex",checked:this.state.isUnisex}),"undefined")),s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"name"},"First Name"),s.a.createElement("span",{className:"name"},"Last Name"),s.a.createElement("span",{className:"phone"},"Phone"),s.a.createElement("span",{className:"sex"},"Sex")),this.state.filtered.map((function(e){return s.a.createElement("div",{className:"contacts"},s.a.createElement("span",{className:"name"},e.firstName),s.a.createElement("span",{className:"name"},e.lastName),s.a.createElement("span",{className:"phone"},e.phone),s.a.createElement("span",{className:"sex"},function(e){var a="";switch(e){case"male":a="\ud83d\udc68";break;case"female":a="\ud83d\udc69"}return a}(e.gender)),"  ")}))))}}]),t}(n.Component);c.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.292e650b.chunk.js.map