(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(t,a,s){"use strict";s.r(a);var n={mounted:function(){var t=new window.VueDialogX(window.Vue);window.dialogX=t}},e=s(0),r=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"alert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[t._v("#")]),t._v(" Alert")]),t._v(" "),s("p",[t._v("返回Promise")]),t._v(" "),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("param")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("desc")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'提示'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("okText")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'确定'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("html")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[t._v("可以传入html片段 如若传入，将替换掉message内容")])]),t._v(" "),s("tr",[s("td",[t._v("wait")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("支持异步式调用 传入next参数 并在函数体中调用next()即可实现异步式调用")])])])]),t._v(" "),s("h2",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),s("p",[s("button",{staticClass:"button",attrs:{onclick:"window.dialogX.alert({message: '普通弹窗'})"}},[t._v("example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请登陆后再试'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"异步关闭用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步关闭用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步关闭用法")]),t._v(" "),s("p",[s("button",{staticClass:"button",attrs:{onclick:"window.dialogX.alert({message: '异步关闭的弹窗', wait: next => setTimeout(() => next(), 1500) })"}},[t._v("异步关闭")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'点击确定将发送请求'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求开始按钮上的文字将变为一个小旋转菊花")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求结束后将结束loading状态")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);