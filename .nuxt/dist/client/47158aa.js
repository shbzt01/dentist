(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7],{337:function(t,e,r){"use strict";r(21),r(25),r(26),r(6),r(37),r(27),r(38);var n=r(11),o=(r(224),r(344),r(345),r(339),r(347)),c=r(348),l=r(342),d=r(153);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},338:function(t,e,r){var content=r(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("254d6072",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("e23b7040",content,!0,{sourceMap:!1})},340:function(t,e,r){var n=r(59)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__text,.theme--light.v-card>.v-card__subtitle{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__text,.theme--dark.v-card>.v-card__subtitle{color:rgba(255,255,255,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>*:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>.v-card__progress+*:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>*:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(0.25, 0.8, 0.25, 1)}.v-sheet.v-card--hover:hover,.v-sheet.v-card--hover:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.v-card--link{cursor:pointer}.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.2s opacity}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>*:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},343:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(337),o=r(10),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),v=Object(o.e)("v-card__title");n.a},350:function(t,e,r){"use strict";r(338)},351:function(t,e,r){var n=r(59)(!1);n.push([t.i,".v-file-input{width:200% !important}.v-input__slot{background:rgba(255,255,255,.9) !important;padding:20px 12px 20px 12px !important;font-size:20pt}.v-label{font-size:18pt}.v-input__icon--append .v-icon{color:purple}.v-icon.v-icon{font-size:40pt}",""]),t.exports=n},367:function(t,e,r){"use strict";r.r(e);var n=r(456),o=r(457),c={props:["label"],data:function(){return{files:[],image:""}},methods:{hello:function(){},imgcreate:function(){this.$emit("input",this.files[0])}}},l=(r(350),r(70)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,{attrs:{color:"deep-purple accent-4",counter:"",label:t.label,placeholder:"Select your files","prepend-icon":"mdi-paperclip","x-large":"",filled:"",multiple:"","show-size":1e3},on:{change:t.imgcreate},scopedSlots:t._u([{key:"selection",fn:function(r){var o=r.index,text=r.text;return[o<2?e(n.a,{attrs:{color:"deep-purple accent-4",dark:"",label:"",large:""}},[t._v("\n        "+t._s(text)+"\n      ")]):2===o?e("span",{staticClass:"text-overline grey--text text--darken-3 mx-2"},[t._v("\n        +"+t._s(t.files.length-2)+" File(s)\n      ")]):t._e()]}}]),model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,r){"use strict";r(226);var n=r(10);e.a=Object(n.e)("spacer","div","v-spacer")},393:function(t,e,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("387099bc",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r(393)},445:function(t,e,r){var n=r(59)(!1);n.push([t.i,".center-items[data-v-2c0fa342]{min-height:100vh}.red[data-v-2c0fa342]{background-color:red}.main-btn[data-v-2c0fa342]{padding:50px !important}@media only screen and (max-width: 959.98px){.main-btn[data-v-2c0fa342]{padding:20px !important}}",""]),t.exports=n},462:function(t,e,r){"use strict";r.r(e);var n=r(382),o=r(343),c=r(334),l=r(341),d=r(389),v={name:"IndexPage",data:function(){return{question:1}}},h=(r(444),r(70)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"center-items d-flex align-center justify-center",attrs:{fluid:""}},[e("div",{staticClass:"d-block"},[e("center",[e("h1",{staticClass:"font-weight-black",class:{"display-3":t.$vuetify.breakpoint.mdAndUp,"display-1":t.$vuetify.breakpoint.smAndDown}},[t._v("\n        Upload your files\n      ")]),t._v(" "),e("br"),t._v(" "),e("FileInput",{attrs:{label:"file 1"}}),t._v(" "),e("FileInput",{attrs:{label:"file 2"}}),t._v(" "),e("FileInput",{attrs:{label:"file 3"}}),t._v(" "),e("br"),t._v(" "),e("br")],1),t._v(" "),e(o.a,[e(n.a,{attrs:{color:"white",elevation:"2","x-large":"",width:"150",to:"/multi-choice",nuxt:""}},[e(l.c,[e("div",{staticClass:"text-center font-weight-bold"},[t._v("back")])])],1),t._v(" "),e(d.a),t._v(" "),e(n.a,{attrs:{color:"white",elevation:"2","x-large":"",width:"150",to:"/show-data",nuxt:""}},[e(l.c,[e("div",{staticClass:"text-center font-weight-bold"},[t._v("\n            Next\n          ")])])],1)],1)],1)])}),[],!1,null,"2c0fa342",null);e.default=component.exports;installComponents(component,{FileInput:r(367).default})}}]);