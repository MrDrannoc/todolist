webpackJsonp([2],{lfHO:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("7109");var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-layout-header",[e("q-toolbar",{attrs:{color:"primary",glossy:"mat"===n.$q.theme,inverted:"ios"===n.$q.theme}},[e("q-toolbar-title",[n._v("\n        Todolist application\n        "),e("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[n._v("Running on Quasar v"+n._s(n.$q.version))])]),n._v(" "),n.connected?e("router-link",{attrs:{to:"/todos"}},[n._v("Todos")]):n._e(),n._v(" "),n.connected?e("q-btn",{on:{click:n.logout}},[n._v("Logout")]):n._e()],1)],1),n._v(" "),e("q-page-container",[e("router-view")],1)],1)},r=[];o._withStripped=!0;var l=e("XyMi"),s=!1;var a=function(n){s||e("xwNl")},i=Object(l.a)({name:"LayoutDefault",data:function(){return{}},computed:{connected:function(){return this.$store.state.global.connected}},methods:{logout:function(){this.$q.localStorage.remove("token"),this.$store.dispatch("global/disconnected"),this.$router.push("/")}}},o,r,!1,a,null,null);i.options.__file="src/layouts/default.vue";t.default=i.exports},smEj:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},xwNl:function(n,t,e){var o=e("smEj");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e("rjj0").default)("82b7e2d0",o,!1,{})}});