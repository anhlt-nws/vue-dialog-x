(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(t,n,a){"use strict";a.r(n);a(23);var e,r,s=a(24),o={data:function(){return{dialogX:null,list:[{okText:"你妈妈喊你回家吃饭"},{okText:"skr~skr~"},{okText:"我觉得还行"},{okText:"我觉得ok"}]}},methods:{createDialog:function(){this.dialogX=new window.VueDialogX(window.Vue)},select:(r=Object(s.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.dialogX||this.createDialog(),t.next=3,this.dialogX.actions({actions:this.list});case 3:n=t.sent,dialogX.alert({message:"选择了".concat(this.list[n].okText,"选项")});case 5:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),waitSelect:(e=Object(s.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.dialogX.actions({actions:this.list,wait:function(t){setTimeout(function(){t()},500)}});case 2:n=t.sent,this.dialogX.alert({message:"选择了".concat(this.list[n].okText,"选项")});case 4:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},mounted:function(){}},i=a(0),c=Object(i.a)(o,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),a("p",[t._v("返回Promise< number> 用于多选项的情况")]),t._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("param")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("desc")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'提示'")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("''")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("okText")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'确定'")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("cancelText")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'取消'")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("actions")]),t._v(" "),a("td",[t._v("Array< actionOpt>")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("wait")]),t._v(" "),a("td",[t._v("function / null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("支持异步式调用 传入next参数 并在函数体中调用next()即可实现异步式调用 效果与alert wait 类似 但是一旦进入加载状态 将隐藏取消按钮 第二个参数将返回点击下标")])])])]),t._v(" "),a("h3",{attrs:{id:"actionopt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actionopt","aria-hidden":"true"}},[t._v("#")]),t._v(" actionOpt")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("param")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("okText")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("''")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exampleActions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你妈妈喊你回家吃饭'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'skr~skr~'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我觉得还行'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我觉得ok'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("tempalte",[a("button",{staticClass:"button",on:{click:t.select}},[t._v("多选项")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dialogX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数组下标")]),t._v("\n    actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exampleActions\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dialogX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("选择了")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("exampleActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("okText"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("选项")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"异步关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步关闭","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步关闭")]),t._v(" "),a("tempalte",[a("button",{staticClass:"button",on:{click:t.waitSelect}},[t._v("异步关闭")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dialogX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数组下标")]),t._v("\n    actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exampleActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result为用户点击的数组下标")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" result\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dialogX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("选择了")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("exampleActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("okText"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("选项")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)},[],!1,null,null,null);n.default=c.exports},23:function(t,n,a){var e=function(t){"use strict";var n,a=Object.prototype,e=a.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,n,a,e){var r=n&&n.prototype instanceof f?n:f,s=Object.create(r.prototype),o=new j(e||[]);return s._invoke=function(t,n,a){var e=u;return function(r,s){if(e===l)throw new Error("Generator is already running");if(e===_){if("throw"===r)throw s;return X()}for(a.method=r,a.arg=s;;){var o=a.delegate;if(o){var i=L(o,a);if(i){if(i===h)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(e===u)throw e=_,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);e=l;var c=p(t,n,a);if("normal"===c.type){if(e=a.done?_:v,c.arg===h)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(e=_,a.method="throw",a.arg=c.arg)}}}(t,a,o),s}function p(t,n,a){try{return{type:"normal",arg:t.call(n,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",v="suspendedYield",l="executing",_="completed",h={};function f(){}function k(){}function d(){}var g={};g[s]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==a&&e.call(m,s)&&(g=m);var w=d.prototype=f.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function b(t){var n;this._invoke=function(a,r){function s(){return new Promise(function(n,s){!function n(a,r,s,o){var i=p(t[a],t,r);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&e.call(u,"__await")?Promise.resolve(u.__await).then(function(t){n("next",t,s,o)},function(t){n("throw",t,s,o)}):Promise.resolve(u).then(function(t){c.value=t,s(c)},function(t){return n("throw",t,s,o)})}o(i.arg)}(a,r,n,s)})}return n=n?n.then(s,s):s()}}function L(t,a){var e=t.iterator[a.method];if(e===n){if(a.delegate=null,"throw"===a.method){if(t.iterator.return&&(a.method="return",a.arg=n,L(t,a),"throw"===a.method))return h;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=p(e,t.iterator,a.arg);if("throw"===r.type)return a.method="throw",a.arg=r.arg,a.delegate=null,h;var s=r.arg;return s?s.done?(a[t.resultName]=s.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=n),a.delegate=null,h):s:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,h)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var a=t[s];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function a(){for(;++r<t.length;)if(e.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=n,a.done=!0,a};return o.next=o}}return{next:X}}function X(){return{value:n,done:!0}}return k.prototype=w.constructor=d,d.constructor=k,d[i]=k.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===k||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(n,a,e,r){var s=new b(c(n,a,e,r));return t.isGeneratorFunction(a)?s:s.next().then(function(t){return t.done?t.value:s.next()})},x(w),w[i]="Generator",w[s]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var a in t)n.push(a);return n.reverse(),function a(){for(;n.length;){var e=n.pop();if(e in t)return a.value=e,a.done=!1,a}return a.done=!0,a}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var a in this)"t"===a.charAt(0)&&e.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(e,r){return i.type="throw",i.arg=t,a.next=e,r&&(a.method="next",a.arg=n),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),p=e.call(o,"finallyLoc");if(c&&p){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=n&&n<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=n,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),T(a),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc===t){var e=a.completion;if("throw"===e.type){var r=e.arg;T(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,e){return this.delegate={iterator:O(t),resultName:a,nextLoc:e},"next"===this.method&&(this.arg=n),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},24:function(t,n,a){"use strict";function e(t,n,a,e,r,s,o){try{var i=t[s](o),c=i.value}catch(t){return void a(t)}i.done?n(c):Promise.resolve(c).then(e,r)}function r(t){return function(){var n=this,a=arguments;return new Promise(function(r,s){var o=t.apply(n,a);function i(t){e(o,r,s,i,c,"next",t)}function c(t){e(o,r,s,i,c,"throw",t)}i(void 0)})}}a.d(n,"a",function(){return r})}}]);