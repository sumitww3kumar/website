(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{395:function(t,s,e){var n=e(397),i=e(400)(n);t.exports=i},397:function(t,s,e){var n=e(398),i=e(115);t.exports=function(t,s){return t&&n(t,s,i)}},398:function(t,s,e){var n=e(399)();t.exports=n},399:function(t,s){t.exports=function(t){return function(s,e,n){for(var i=-1,o=Object(s),a=n(s),r=a.length;r--;){var u=a[t?r:++i];if(!1===e(o[u],u,o))break}return s}}},400:function(t,s,e){var n=e(116);t.exports=function(t,s){return function(e,i){if(null==e)return e;if(!n(e))return t(e,i);for(var o=e.length,a=s?o:-1,r=Object(e);(s?a--:++a<o)&&!1!==i(r[a],a,r););return e}}},403:function(t,s,e){var n=e(209),i=e(412),o=e(208),a=e(14);t.exports=function(t,s){return(a(t)?n:i)(t,o(s,3))}},412:function(t,s,e){var n=e(395);t.exports=function(t,s){var e=[];return n(t,(function(t,n,i){s(t,n,i)&&e.push(t)})),e}},415:function(t,s,e){},445:function(t,s,e){"use strict";var n=e(415);e.n(n).a},464:function(t,s,e){"use strict";e.r(s);e(406),e(113),e(396),e(114);var n=e(391),i=e.n(n),o=e(403),a=e.n(o),r=e(407),u=e(453),l={name:"Theses",data:function(){return{thesis:null}},props:{store:{type:Object,required:!0}},mounted:function(){this.$i18n.locale=this.$lang},methods:{positionsMissing:function(t){return a()(t.positions,(function(t){return null!==t.position})).length},add:function(){var t={};this.store.parties.forEach((function(s){t[s.uuid]={position:null,explanation:{}}})),this.$set(this,"thesis",{uuid:null,title:{},statement:{},positions:t})},edit:function(t){var s=this;this.store.parties.forEach((function(e){t.positions[e.uuid]||s.$set(t.positions,e.uuid,{position:null,explanation:{}})})),this.$set(this,"thesis",JSON.parse(JSON.stringify(t)))},findIndexOfThesis:function(t){return this.store.theses.findIndex((function(s){return s.uuid===t.uuid}))},save:function(){if(null!==this.thesis){if(null===this.thesis.uuid)return this.thesis.uuid=i()(),this.store.theses.push(this.thesis),void(this.thesis=null);var t=this.store.theses[this.findIndexOfThesis(this.thesis)];Object.assign(t,this.thesis),this.thesis=null}},cancel:function(){this.thesis=null},remove:function(t){var s=this.findIndexOfThesis(t);this.store.theses.splice(s,1)}},computed:{defaultLanguage:function(){return this.store.languages[0].uuid}},components:{SlickList:r.SlickList,SlickItem:r.SlickItem,ThesisEditor:u.default},directives:{handle:r.HandleDirective},i18n:{messages:{"en-US":{title:"4. Theses","positions-complete":"Positions complete","positions-missing":"Positions missing (only {only} / {total})",edit:"Edit",remove:"Remove",add:"Add thesis",empty:"You haven't added any theses yet.","empty-parties":"You haven't added any theses yet, but add some parties first!"},"de-DE":{title:"4. Thesen","positions-complete":"Antworten vollständig","positions-missing":"Antworten unvollständig (nur {only} / {total})",edit:"Bearbeiten",remove:"Löschen",add:"These hinzufügen",empty:"Du hast noch keine Thesen hinzugefügt.","empty-parties":"Du hast noch keine Thesen hinzugefügt, lege erst ein paar Parteien an!"}}}},c=(e(445),e(54)),h=Object(c.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("thesis-editor",{attrs:{visible:null!==t.thesis,store:t.store,thesis:t.thesis},on:{save:t.save,cancel:t.cancel}}),t._v(" "),e("fieldset",[e("legend",[t._v(t._s(t.$t("title")))]),t._v(" "),t.store.theses.length>0&&t.store.parties.length>0?e("SlickList",{staticClass:"items",attrs:{lockAxis:"y",useDragHandle:!0},model:{value:t.store.theses,callback:function(s){t.$set(t.store,"theses",s)},expression:"store.theses"}},t._l(t.store.theses,(function(s,n){return e("SlickItem",{key:s.uuid,staticClass:"item",attrs:{index:n}},[e("span",{directives:[{name:"handle",rawName:"v-handle"}],staticClass:"handle"},[e("Icon",{attrs:{name:"bars"}})],1),t._v(" "),e("span",[e("strong",[t._v(t._s(s.title[t.defaultLanguage]))]),t._v(" "),e("br"),t._v(" "),e("small",[t.positionsMissing(s)===t.store.parties.length?e("span",[t._v("\n              "+t._s(t.$t("positions-complete"))+" "),e("Icon",{attrs:{name:"check"}})],1):e("span",[t._v("\n              "+t._s(t.$t("positions-missing",{only:t.positionsMissing(s),total:t.store.parties.length}))+"\n            ")])])]),t._v(" "),e("button",{staticClass:"small",on:{click:function(e){return t.edit(s)}}},[e("Icon",{attrs:{name:"edit"}}),e("span",[t._v(t._s(t.$t("edit")))])],1),t._v(" "),e("button",{staticClass:"small",on:{click:function(e){return t.remove(s)}}},[e("Icon",{attrs:{name:"trash"}}),e("span",[t._v(t._s(t.$t("remove")))])],1)])})),1):t.store.parties.length>0?e("p",{staticClass:"empty"},[t._v("\n      "+t._s(t.$t("empty"))+"\n    ")]):e("p",{staticClass:"empty"},[t._v("\n      "+t._s(t.$t("empty-parties"))+"\n    ")]),t._v(" "),e("button",{staticClass:"add small",on:{click:t.add}},[e("Icon",{attrs:{name:"plus"}}),e("span",[t._v(t._s(t.$t("add")))])],1)],1)],1)}),[],!1,null,"75aee727",null);s.default=h.exports}}]);