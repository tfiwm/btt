(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[a("em",[t._v("You can "),a("a",{attrs:{href:"https://github.com/Worie/btt/blob/master/docs/guide/web-view.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("edit this page on GitHub"),a("OutboundLink")],1),t._v(".")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"web-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Web view")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Web view is real powerful way to create custom UI with BetterTouchTool (and surely, "),s("code",[this._v("HTML")]),this._v(", "),s("code",[this._v("CSS")]),this._v(" and "),s("code",[this._v("JavaScirpt")]),this._v(" or it's supersets). Basically it allows you to open UI-less browser, with transparent background of custom size and position. You can also specify in which browser you'd like to show your content.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"basic-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The most basic example will allow you to open an URL of your choice - this is also most recommended approach when creating advanced web views, because you can use "),s("a",{attrs:{href:"#Boilerplate"}},[this._v("custom webpack boilerplate")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("showWebView")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("220")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("400")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'webview example'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://user-images.githubusercontent.com/6313514/42585502-19954016-8536-11e8-8b8f-4051b299e81f.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("invoke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The code above will create a window of size "),s("code",[this._v("200x220")]),this._v(" on position "),s("code",[this._v("600:400")]),this._v(". The name is an internal indentifier for this particular webview. And surely, you can pass whathever URL you'd like and it'll open this page.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For example, the code above will show a webview with "),s("code",[this._v("btt.js")]),this._v(" logo. For example, to open your twitter feed you could do:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("showWebView")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("400")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Twitter feed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://twitter.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("invoke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"boilerplate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boilerplate","aria-hidden":"true"}},[this._v("#")]),this._v(" Boilerplate")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Visit HERE, clone the repo, install assets and run the server with "),s("code",[this._v("npm run start")]),this._v(" to start a live server with BTT, typescript and scss preconfigured.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"inline-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Inline data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You may also pass inline html data to web view via "),s("code",[this._v("html")]),this._v(" property:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("showWebView")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("220")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("400")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Inline webview'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  html"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<html><body>Hello world!</body></html>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("invoke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult>")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Keep in mind that using "),a("code",[t._v("html")]),t._v(" and "),a("code",[t._v("url")]),t._v(" together will ignore the "),a("code",[t._v("html")]),t._v(" flag, as "),a("code",[t._v("url")]),t._v(" has higher priority by design. So if you want to use "),a("code",[t._v("html")]),t._v(" property, omit the "),a("code",[t._v("url")]),t._v(" flag")])])}],!1,null,null,null);e.options.__file="web-view.md";s.default=e.exports}}]);