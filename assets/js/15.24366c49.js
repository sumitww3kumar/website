(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{391:function(e,t,n){var o,a,r=n(410),s=n(411),i=0,l=0;e.exports=function(e,t,n){var u=t&&n||0,c=t||[],f=(e=e||{}).node||o,g=void 0!==e.clockseq?e.clockseq:a;if(null==f||null==g){var d=r();null==f&&(f=o=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==g&&(g=a=16383&(d[6]<<8|d[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:l+1,m=p-i+(v-l)/1e4;if(m<0&&void 0===e.clockseq&&(g=g+1&16383),(m<0||p>i)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=p,l=v,a=g;var h=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;c[u++]=h>>>24&255,c[u++]=h>>>16&255,c[u++]=h>>>8&255,c[u++]=255&h;var y=p/4294967296*1e4&268435455;c[u++]=y>>>8&255,c[u++]=255&y,c[u++]=y>>>24&15|16,c[u++]=y>>>16&255,c[u++]=g>>>8|128,c[u++]=255&g;for(var k=0;k<6;++k)c[u+k]=f[k];return t||s(c)}},395:function(e,t,n){var o=n(397),a=n(400)(o);e.exports=a},396:function(e,t,n){"use strict";var o=n(1),a=n(118),r=n(59),s=n(21),i=n(15),l=n(119),u=n(61),c=n(60),f=n(22),g=c("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min;o({target:"Array",proto:!0,forced:!g||!d},{splice:function(e,t){var n,o,c,f,g,d,m=i(this),h=s(m.length),y=a(e,h),k=arguments.length;if(0===k?n=o=0:1===k?(n=0,o=h-y):(n=k-2,o=v(p(r(t),0),h-y)),h+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=l(m,o),f=0;f<o;f++)(g=y+f)in m&&u(c,f,m[g]);if(c.length=o,n<o){for(f=y;f<h-o;f++)d=f+n,(g=f+o)in m?m[d]=m[g]:delete m[d];for(f=h;f>h-o+n;f--)delete m[f-1]}else if(n>o)for(f=h-o;f>y;f--)d=f+n-1,(g=f+o-1)in m?m[d]=m[g]:delete m[d];for(f=0;f<n;f++)m[f+y]=arguments[f+2];return m.length=h-o+n,c}})},397:function(e,t,n){var o=n(398),a=n(115);e.exports=function(e,t){return e&&o(e,t,a)}},398:function(e,t,n){var o=n(399)();e.exports=o},399:function(e,t){e.exports=function(e){return function(t,n,o){for(var a=-1,r=Object(t),s=o(t),i=s.length;i--;){var l=s[e?i:++a];if(!1===n(r[l],l,r))break}return t}}},400:function(e,t,n){var o=n(116);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!o(n))return e(n,a);for(var r=n.length,s=t?r:-1,i=Object(n);(t?s--:++s<r)&&!1!==a(i[s],s,i););return n}}},410:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},411:function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,a=n;return[a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]]].join("")}},418:function(e,t,n){},420:function(e,t,n){var o=n(424),a=n(395),r=n(425),s=n(14);e.exports=function(e,t){return(s(e)?o:a)(e,r(t))}},424:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length;++n<o&&!1!==t(e[n],n,e););return e}},425:function(e,t,n){var o=n(82);e.exports=function(e){return"function"==typeof e?e:o}},449:function(e,t,n){"use strict";var o=n(418);n.n(o).a},467:function(e,t,n){"use strict";n.r(t);n(56),n(57),n(113),n(117),n(396),n(81),n(114);var o=n(391),a=n.n(o),r=n(420),s=n.n(r),i={name:"StorageButtons",props:{store:{type:Object,required:!0}},methods:{loadFromBrowser:function(){var e=localStorage.getItem("oec-v1-config");e?this.load(e):alert("The browser storage appears to be empty :(")},openFileDialog:function(){this.$el.querySelector("input.file-button").click()},loadFromFile:function(e){var t=this;if(void 0!==e.target.files&&void 0!==e.target.files[0]){var n=e.target.files[0];if("application/json"===n.type){var o=new FileReader;o.onload=function(){t.load(o.result)},o.readAsText(n)}else alert("Please upload a JSON file.")}},keyTranslationsByLanguageUuid:function(e,t){var n={};return s()(e,(function(e){var o=e.code,a=e.uuid;n[a]=t[o]})),n},load:function(e){var t=this;this.$emit("reset"),this.$nextTick((function(){var n=JSON.parse(e);t.store.version=n.version,t.store.algorithm=n.algorithm,n.languages.forEach((function(e){t.store.languages.push({uuid:a()(),name:e.name,code:e.code})})),t.store.languages.splice(0,1),t.store.title=t.keyTranslationsByLanguageUuid(t.store.languages,n.title),t.store.subtitle=t.keyTranslationsByLanguageUuid(t.store.languages,n.subtitle),t.store.introduction.heading=t.keyTranslationsByLanguageUuid(t.store.languages,n.introduction.heading),t.store.introduction.text=t.keyTranslationsByLanguageUuid(t.store.languages,n.introduction.text),n.parties.forEach((function(e){t.store.parties.push({uuid:a()(),alias:e.alias,name:t.keyTranslationsByLanguageUuid(t.store.languages,e.name),short:t.keyTranslationsByLanguageUuid(t.store.languages,e.short),description:t.keyTranslationsByLanguageUuid(t.store.languages,e.description),logo:e.logo})})),n.theses.forEach((function(e){var n={};t.store.parties.forEach((function(o){e.positions[o.alias]&&(n[o.uuid]={position:e.positions[o.alias].position,explanation:t.keyTranslationsByLanguageUuid(t.store.languages,e.positions[o.alias].explanation)})})),t.store.theses.push({uuid:a()(),title:t.keyTranslationsByLanguageUuid(t.store.languages,e.title),statement:t.keyTranslationsByLanguageUuid(t.store.languages,e.statement),positions:n})})),Array.isArray(n["footer-links"])&&n["footer-links"].forEach((function(e){t.store.links.push({uuid:a()(),text:t.keyTranslationsByLanguageUuid(t.store.languages,e.text),href:t.keyTranslationsByLanguageUuid(t.store.languages,e.href)})}))}))}},mounted:function(){this.$i18n.locale=this.$lang},i18n:{messages:{"en-US":{"load-from-localstorage":"Load from browser storage","load-from-file":"Load from file","clear-localstorage":"Clear browser storage"},"de-DE":{"load-from-localstorage":"Aus Browserspeicher laden","load-from-file":"Aus Datei laden","clear-localstorage":"Browserspeicher leeren"}}}},l=(n(449),n(54)),u=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buttons"},[n("button",{staticClass:"small",on:{click:e.loadFromBrowser}},[n("Icon",{attrs:{name:"history"}}),e._v(" "),n("span",[e._v(e._s(e.$t("load-from-localstorage")))])],1),e._v(" "),n("button",{staticClass:"small",on:{click:e.openFileDialog}},[n("Icon",{attrs:{name:"upload"}}),e._v(" "),n("span",[e._v(e._s(e.$t("load-from-file")))])],1),e._v(" "),n("input",{staticClass:"file-button",attrs:{type:"file"},on:{input:function(t){return e.loadFromFile(t)}}}),e._v(" "),n("button",{staticClass:"small",on:{click:function(t){return e.$emit("reset")}}},[n("Icon",{attrs:{name:"trash"}}),e._v(" "),n("span",[e._v(e._s(e.$t("clear-localstorage")))])],1)])}),[],!1,null,"26c60144",null);t.default=u.exports}}]);