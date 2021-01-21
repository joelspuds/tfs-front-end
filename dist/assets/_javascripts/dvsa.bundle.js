/*!
 * 
 *   Name: tfs-front-end/dvsa
 *   Version: 1.0.1
 *   Contributors: Martin D Marriott <martind@kainos.com>, James Nelson <j.nelson@kainos.com>, Tameem Safi <https://github.com/tameemsafi>
 *   Timestamp: November 18th 2020, 4:34:10 pm
 *   Source: https://github.com/dvsa/front-end
 * 
 */
webpackJsonp([4],{172:function(e,t,n){(function(t){function n(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function a(e,t){return Array.prototype.slice.call(e,t||0)}function o(e,t){i(e,function(e,n){return t(e,n),!1})}function r(e,t){var n=s(e)?[]:{};return i(e,function(e,a){return n[a]=t(e,a),!1}),n}function i(e,t){if(s(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var a in e)if(e.hasOwnProperty(a)&&t(e[a],a))return e[a]}function s(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function c(e){return e&&"[object Function]"==={}.toString.call(e)}function l(e){return e&&"[object Object]"==={}.toString.call(e)}var u=function(){return Object.assign?Object.assign:function(e,t,n,a){for(var r=1;r<arguments.length;r++)o(Object(arguments[r]),function(t,n){e[n]=t});return e}}(),d=function(){function e(){}return Object.create?function(e,t,n,o){var r=a(arguments,1);return u.apply(this,[Object.create(e)].concat(r))}:function(t,n,o,r){var i=a(arguments,1);return e.prototype=t,u.apply(this,[new e].concat(i))}}(),f=function(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}(),C="undefined"!=typeof window?window:t;e.exports={assign:u,create:d,trim:f,bind:n,slice:a,each:o,map:r,pluck:i,isList:s,isFunction:c,isObject:l,Global:C}}).call(t,n(152))},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ACCORDION_CONSTANTS={closeAllText:"Close All",openAllText:"Open All",attributeNames:{sectionContentId:"data-section-content-id",stateIndexId:"data-section-state-index-id",sectionCategory:"data-section-category",preventDefault:"data-section-prevent-default",disableStateRestore:"data-section-disable-restore-state"},classNames:{accordion:"js-accordion",section:"js-accordion__section",sectionOpen:"js-accordion__section--open",header:"js-accordion__header",headerHover:"js-accordion__header--hover",title:"js-accordion__title-button",content:"js-accordion__content",expandButton:"js-accordion__expand-button",jsEnabled:"js-accordion--js-enabled"},ariaAttributes:{controls:"aria-controls",expanded:"aria-expanded",hidden:"aria-hidden"},dataLayer:{open:"open",close:"close",closedStatus:"closed",linkClickEvent:"link-click",linkType:"accordion",sectionMemoryEvent:"subsection-memory",sectionAll:"subsection-all"},eventNames:{expandAllOpen:"js-accordion:expand-all-open"}},t.RECALLS_ACCORDION_CONSTANTS={selectors:{section:"[data-recalls-accordion]",header:"[data-recalls-accordion-header]"},attributeNames:{ajaxEndpoint:"data-recalls-ajax-endpoint",ajaxData:"data-recalls-ajax-data"},classNames:{content:"recalls-accordion",contentNoJs:"recalls-accordion--no-js",contentLoading:"recalls-accordion--loading",contentShowOutput:"recalls-accordion--show-output",errorMessage:"recalls-accordion__error-message",errorMessageVisible:"recalls-accordion--error-message-visible",noJSAlternative:"recalls-accordion__no-js-alternative",loading:"recalls-accordion__loading",output:"recalls-accordion__output"},dataLayer:{noRecordsHeld:"no-records",submitEvent:"recall-cta-submit",submitElementName:"Recall",submitRecallUi:"cta-submitted",submitRecallOutcome:"Requested",submitTimestamp:"timestamp",responseTimestamp:"response-timestamp",error:{event:"api-response",elementName:"Recall",recallUI:"api-error",detail:"Sorry, something went wrong with the search. Please try again later.",lambdaReturnCode:"",outcome:"Error",outcomeDetail:"Connection error",smmtCall:0}}}},217:function(e,t,n){"use strict";n(47),n(50),n(51),n(53),n(54),n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(64),n(65),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(83),n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(37),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151);var a=n(4),o=n(259);(0,a.domReady)(function(){(0,a.initGDS)(),(0,o.initModules)()})},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initModules=void 0;var a=n(260);t.initModules=function(){(0,a.initAccordions)()}},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initAccordions=void 0;var a=n(261),o=n(270);t.initAccordions=function(){var e=document.querySelectorAll(".js-accordion");e=Array.from(e),e.length&&e.forEach(function(e){new a.Accordion(e)}),new o.RecallsAccordion}},261:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Accordion=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(262),s=a(i),c=n(46),l=a(c),u=n(269),d=a(u),f=n(201),C=n(15);t.Accordion=function(){function e(t){var n=this;return o(this,e),this.headerClickHandler=function(e){if(e.target&&n.state.sections.length){var t=(0,C.closestParentOfEl)(e.target,"."+f.ACCORDION_CONSTANTS.classNames.section);if(!t.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.preventDefault)){var a=(t.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.sectionCategory),Number(t.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.stateIndexId))),o=n.state.sections[a];if(o){var r=!o.sectionOpen;n.state.sections[a].sectionOpen=r,n.refreshState(),n.smoothScroll.animateScroll(t,!0,n.smoothScrollOptions),n.pushDataLayerForAccordion(a)}}}},this.headerMouseEnterHandler=function(e){if(e.target){var t=(0,C.closestParentOfEl)(e.target,"."+f.ACCORDION_CONSTANTS.classNames.header);t&&(0,C.toggleClass)(t,f.ACCORDION_CONSTANTS.classNames.headerHover,!0)}},this.headerMouseLeaveHandler=function(e){if(e.target){var t=(0,C.closestParentOfEl)(e.target,"."+f.ACCORDION_CONSTANTS.classNames.header);t&&(0,C.toggleClass)(t,f.ACCORDION_CONSTANTS.classNames.headerHover,!1)}},this.expandButtonClickHandler=function(e){n.state.expanding=!0,n.state.expandAll=!n.state.expandAll,n.state.expandAll&&(0,C.triggerCustomEvent)(document,f.ACCORDION_CONSTANTS.eventNames.expandAllOpen),n.refreshState(),n.state.expanding=!1,n.smoothScroll.animateScroll(e.target,!0,n.smoothScrollOptions),n.pushDataLayerForAllAccordions()},this.pushDataLayerForAllAccordions=function(){if(window.dataLayer){var e=n.state.expandAll?f.ACCORDION_CONSTANTS.dataLayer.open:f.ACCORDION_CONSTANTS.dataLayer.close,t={event:f.ACCORDION_CONSTANTS.dataLayer.linkClickEvent,link:f.ACCORDION_CONSTANTS.dataLayer.sectionAll,"link-text":n.state.expandAll?f.ACCORDION_CONSTANTS.openAllText:f.ACCORDION_CONSTANTS.closeAllText,"link-action":e,"link-type":f.ACCORDION_CONSTANTS.dataLayer.linkType};n.state.sections.forEach(function(a){var o=n.getSectionDataLayerInfo(a),r=e===f.ACCORDION_CONSTANTS.dataLayer.close?f.ACCORDION_CONSTANTS.dataLayer.closedStatus:e;t["subsection-"+o.category+"-status"]=r}),window.dataLayer.push(t)}},this.pushDataLayerForAccordion=function(e){if(window.dataLayer&&void 0!=e){var t=n.state.sections[e];if(t&&t.sectionElement){var a=n.getSectionDataLayerInfo(t),o={event:f.ACCORDION_CONSTANTS.dataLayer.linkClickEvent,link:"subsection-"+a.category,"link-text":a.heading,"link-action":a.openState,"link-type":f.ACCORDION_CONSTANTS.dataLayer.linkType},r=a.openState===f.ACCORDION_CONSTANTS.dataLayer.close?f.ACCORDION_CONSTANTS.dataLayer.closedStatus:a.openState;o["subsection-"+a.category+"-status"]=r,window.dataLayer.push(o)}}},this.pushDataLayerForSavedState=function(e){window.dataLayer&&e&&e.forEach(function(e){var t=n.getSectionDataLayerInfo(e);if(t.openState!=f.ACCORDION_CONSTANTS.dataLayer.close){var a={event:f.ACCORDION_CONSTANTS.dataLayer.sectionMemoryEvent,link:"subsection-"+t.category,"link-text":t.heading,"link-action":t.openState,"link-type":f.ACCORDION_CONSTANTS.dataLayer.linkType};a["subsection-"+t.category+"-status"]=t.openState,window.dataLayer.push(a)}})},this.getSectionDataLayerInfo=function(e){if(e&&e.sectionElement)return{category:e.sectionElement.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.sectionCategory),indexId:Number(e.sectionElement.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.stateIndexId)),heading:e.sectionElement.querySelector("."+f.ACCORDION_CONSTANTS.classNames.title).textContent,openState:e.sectionOpen?f.ACCORDION_CONSTANTS.dataLayer.open:f.ACCORDION_CONSTANTS.dataLayer.close}},this.accordionElement=t,this.accordionElement?(this.accordionElement.setAttribute("role","presentation"),this.smoothScroll=new d.default,this.uniqueIdentifier="js-accordion-"+(0,l.default)(this.accordionElement.innerHTML),this.sections=Array.from(this.accordionElement.querySelectorAll("."+f.ACCORDION_CONSTANTS.classNames.section)),this.headings=Array.from(this.accordionElement.querySelectorAll("."+f.ACCORDION_CONSTANTS.classNames.header)),this.expandButton=this.accordionElement.querySelector("."+f.ACCORDION_CONSTANTS.classNames.expandButton),this.sections&&this.headings&&this.expandButton?((0,C.toggleClass)(this.accordionElement,f.ACCORDION_CONSTANTS.classNames.jsEnabled,!0),this.state={expandAll:!1,expanding:!1,sections:[]},this.smoothScrollOptions={offset:30,speed:300,easing:"easeOutCubic"},this.setup(),void this.refreshState()):console.warn("No sections found","No headings found","No expand button found")):console.warn("Accordion element not found")}return r(e,[{key:"setup",value:function(){var e=this;this.sections.length&&(this.sections.forEach(function(t){if(!t)return console.log("Section element not found");var n=t.querySelector("."+f.ACCORDION_CONSTANTS.classNames.header);if(!n)return console.log("Section header element not found");n.setAttribute("role","heading"),(0,C.addEventListenerToEl)(n,"mouseenter",e.headerMouseEnterHandler),(0,C.addEventListenerToEl)(n,"mouseleave",e.headerMouseLeaveHandler),(0,C.addEventListenerToEl)(n,"click",e.headerClickHandler);var a=t.querySelector("."+f.ACCORDION_CONSTANTS.classNames.content);if(!a)return console.log("Section content element not found");n.setAttribute("role","region");var o=(0,l.default)(t.innerHTML),r=n.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.sectionContentId);e.state.sections.push({sectionUniqueIdentifier:o,sectionElement:t,sectionHeaderElement:n,sectionContentElement:a,sectionContentId:r,sectionOpen:e.isSectionOpen(t)});var i=e.state.sections.length-1;t.setAttribute(f.ACCORDION_CONSTANTS.attributeNames.stateIndexId,i),a.getAttribute("id")||a.setAttribute("id",r||o)}),(0,C.addEventListenerToEl)(this.expandButton,"click",this.expandButtonClickHandler))}},{key:"restoreSavedStateData",value:function(){var e=this,t=s.default.get(this.uniqueIdentifier);if(t&&t.sections){var n=[];t.sections.forEach(function(a){if(a&&a.uniqueIdentifier&&e.state.sections){var o=!1;if(e.state.sections.forEach(function(e,t){e.sectionUniqueIdentifier===a.uniqueIdentifier&&(o=t)}),void 0!=o){var r=e.state.sections[o];if(r){var i=!1;r.sectionElement&&r.sectionElement.getAttribute(f.ACCORDION_CONSTANTS.attributeNames.disableStateRestore)&&(i=!0),e.state.sections[o].sectionOpen=!i&&(!!t.expandAll||a.open),n.push(e.state.sections[o])}}}}),this.pushDataLayerForSavedState(n)}}},{key:"saveCurrentStateData",value:function(){var e={};e.expandAll=this.state.expandAll,e.sections=[],this.state&&this.state.sections&&(this.state.sections.forEach(function(t){e.sections.push({uniqueIdentifier:t.sectionUniqueIdentifier,open:t.sectionOpen})}),s.default.set(this.uniqueIdentifier,e))}},{key:"refreshState",value:function(){var e=this;if(this.state){if(this.state.sections){var t=0,n=0;this.state.sections.forEach(function(a){e.state.expanding&&(a.sectionOpen=e.state.expandAll);a.sectionOpen;(0,C.toggleClass)(a.sectionElement,f.ACCORDION_CONSTANTS.classNames.sectionOpen,a.sectionOpen),a.sectionHeaderElement&&a.sectionContentElement&&(a.sectionContentId||a.sectionUniqueIdentifier)&&(a.sectionHeaderElement.setAttribute(f.ACCORDION_CONSTANTS.ariaAttributes.controls,a.sectionContentId?a.sectionContentId:a.sectionUniqueIdentifier),a.sectionHeaderElement.setAttribute(f.ACCORDION_CONSTANTS.ariaAttributes.expanded,a.sectionOpen?"true":"false"),a.sectionContentElement.setAttribute(f.ACCORDION_CONSTANTS.ariaAttributes.hidden,a.sectionOpen?"false":"true")),a.sectionOpen&&t++,n++,t>=1&&!e.state.expanding&&(e.state.expandAll=!1),t>=e.state.sections.length&&!e.state.expanding&&(e.state.expandAll=!0)})}this.expandButton.textContent=this.getExpandButtonText()}}},{key:"isSectionOpen",value:function(e){return!!(0,C.elHasClass)(e,f.ACCORDION_CONSTANTS.classNames.sectionOpen)}},{key:"getExpandButtonText",value:function(){return this.state.expandAll?f.ACCORDION_CONSTANTS.closeAllText:f.ACCORDION_CONSTANTS.openAllText}}]),e}()},262:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(263),r=a(o),i=n(264),s=a(i),c=n(265),l=a(c),u=n(266),d=a(u),f=[s.default,l.default],C=[d.default],O=r.default.createStore(f,C);t.default=O},263:function(e,t,n){function a(){var e="undefined"==typeof console?null:console;if(e){(e.warn?e.warn:e.log).apply(e,arguments)}}function o(e,t,n){n||(n=""),e&&!d(e)&&(e=[e]),t&&!d(t)&&(t=[t]);var o=n?"__storejs_"+n+"_":"",r=n?new RegExp("^"+o):null;if(!/^[a-zA-Z0-9_\-]*$/.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var h={_namespacePrefix:o,_namespaceRegexp:r,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){function t(){if(n)return c(arguments,function(e,t){a[t]=e}),n.apply(o,a)}var a=i(arguments,0),o=this,r=[t].concat(a);return e.apply(o,r)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(d(e))return void c(e,function(e){t._addPlugin(e)});if(!s(this.plugins,function(t){return e===t})){if(this.plugins.push(e),!f(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!C(n))throw new Error("Plugins must return an object of function properties");c(n,function(n,a){if(!f(n))throw new Error("Bad plugin property: "+a+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,a)})}},addStorage:function(e){a("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},N=u(h,O,{plugins:[]});return N.raw={},c(N,function(e,t){f(e)&&(N.raw[t]=l(N,e))}),c(e,function(e){N._addStorage(e)}),c(t,function(e){N._addPlugin(e)}),N}var r=n(172),i=r.slice,s=r.pluck,c=r.each,l=r.bind,u=r.create,d=r.isList,f=r.isFunction,C=r.isObject;e.exports={createStore:o};var O={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(n,a){e.call(t,t._deserialize(n),(a||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return o.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return o(this.storage,this.plugins,e)}}},264:function(e,t,n){function a(){return u.localStorage}function o(e){return a().getItem(e)}function r(e,t){return a().setItem(e,t)}function i(e){for(var t=a().length-1;t>=0;t--){var n=a().key(t);e(o(n),n)}}function s(e){return a().removeItem(e)}function c(){return a().clear()}var l=n(172),u=l.Global;e.exports={name:"localStorage",read:o,write:r,each:i,remove:s,clearAll:c}},265:function(e,t,n){function a(e){if(!e||!c(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(f.cookie.replace(new RegExp(t),"$1"))}function o(e){for(var t=f.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(d(t[n])){var a=t[n].split("="),o=unescape(a[0]),r=unescape(a[1]);e(r,o)}}function r(e,t){e&&(f.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function i(e){e&&c(e)&&(f.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function s(){o(function(e,t){i(t)})}function c(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(f.cookie)}var l=n(172),u=l.Global,d=l.trim;e.exports={name:"cookieStorage",read:a,write:r,each:o,remove:i,clearAll:s};var f=u.document},266:function(e,t){function n(){function e(e,t,n,o){return this.hasNamespace(a)||s.set(t,o),e()}function t(e,t){return this.hasNamespace(a)||i.call(this,t),e()}function n(e,t){return this.hasNamespace(a)||s.remove(t),e()}function o(e,t){return s.get(t)}function r(e){var t=[];this.each(function(e,n){t.push(n)});for(var n=0;n<t.length;n++)i.call(this,t[n])}function i(e){s.get(e,Number.MAX_VALUE)<=(new Date).getTime()&&(this.raw.remove(e),s.remove(e))}var s=this.createStore(this.storage,null,this._namespacePrefix+a);return{set:e,get:t,remove:n,getExpiration:o,removeExpiredKeys:r}}var a="expire_mixin";e.exports=n},269:function(e,t,n){(function(n){var a,o;/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(n,r){a=[],void 0!==(o=function(){return r(n)}.apply(t,a))&&(e.exports=o)}(void 0!==n?n:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},a=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var a=arguments[t];!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(a)}return e},o=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",i=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&t<=31||127==t||0===o&&t>=48&&t<=57||1===o&&t>=48&&t<=57&&45===i?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-t-n,0)},l=function(e){return e?o(e)+e.offsetTop:0},u=function(t,n,a){a||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(o,f){var C,O,h,N,p,S,A,m={};m.cancelScroll=function(){cancelAnimationFrame(A)},m.animateScroll=function(t,o,r){var d=a(C||n,r||{}),f="[object Number]"===Object.prototype.toString.call(t),O=f||!t.tagName?null:t;if(f||O){var h=e.pageYOffset;d.header&&!N&&(N=document.querySelector(d.header)),p||(p=l(N));var S,A,g,T=f?t:c(O,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),y=T-h,v=s(),_=0,L=function(n,a){var r=e.pageYOffset;if(n==a||r==a||(h<a&&e.innerHeight+r)>=v)return m.cancelScroll(),u(t,a,f),d.after(t,o),S=null,!0},b=function(t){S||(S=t),_+=t-S,A=_/parseInt(d.speed,10),A=A>1?1:A,g=h+y*i(d,A),e.scrollTo(0,Math.floor(g)),L(g,T)||(e.requestAnimationFrame(b),S=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,o),m.cancelScroll(),e.requestAnimationFrame(b)}};var g=function(e){O&&(O.id=O.getAttribute("data-scroll-id"),m.animateScroll(O,h),O=null,h=null)},T=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(h=t.target.closest(o))&&"a"===h.tagName.toLowerCase()&&!t.target.closest(C.ignore)&&h.hostname===e.location.hostname&&h.pathname===e.location.pathname&&/#/.test(h.href)){var n;try{n=r(decodeURIComponent(h.hash))}catch(e){n=r(h.hash)}if("#"===n){t.preventDefault(),O=document.body;var a=O.id?O.id:"smooth-scroll-top";return O.setAttribute("data-scroll-id",a),O.id="",void(e.location.hash.substring(1)===a?g():e.location.hash=a)}(O=document.querySelector(n))&&(O.setAttribute("data-scroll-id",O.id),O.id="",h.hash===e.location.hash&&(t.preventDefault(),g()))}},y=function(e){S||(S=setTimeout(function(){S=null,p=l(N)},66))};return m.destroy=function(){C&&(document.removeEventListener("click",T,!1),e.removeEventListener("resize",y,!1),m.cancelScroll(),C=null,O=null,h=null,N=null,p=null,S=null,A=null)},m.init=function(o){t&&(m.destroy(),C=a(n,o||{}),N=C.header?document.querySelector(C.header):null,p=l(N),document.addEventListener("click",T,!1),e.addEventListener("hashchange",g,!1),N&&e.addEventListener("resize",y,!1))},m.init(f),m}})}).call(t,n(152))},270:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.RecallsAccordion=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(202),c=function(e){return e&&e.__esModule?e:{default:e}}(s),l=n(201),u=n(15);t.RecallsAccordion=function(){function e(){var t=this;if(a(this,e),this.recallsHeadingClickHandler=function(e){t.state.ajaxEndpoint&&(t.state.loading||t.state.ajaxContentAddedToDOM||(t.dataLayerPushBeforeAjax(),t.callAjaxWithJSONResponse()))},this.callAjaxWithJSONResponse=function(){t.startLoading(),c.default.post(t.state.ajaxEndpoint,r({},t.state.ajaxRequestBody)).then(function(e){var n=e.data;if(null===n||null===n.result)return t.stopLoading(),console.warn("No HTML result key found in response");if(t.elements.output.innerHTML=n.result,(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.contentShowOutput,!0),t.state.ajaxContentAddedToDOM=!0,null!==n&&n.smartSurveyLink){var a=document.querySelector(".phase-banner a");a?a.href=n.smartSurveyLink:console.warn("Found smart survey link in response, but could no detect phase banner link in the DOM")}null!==n&&n.dataLayer&&(Array.isArray(n.dataLayer)?n.dataLayer.forEach(function(e,n){0===n&&(e[l.RECALLS_ACCORDION_CONSTANTS.dataLayer.responseTimestamp]=Date.now()),t.dataLayerPush(e)}):null!==n.dataLayer&&"object"===o(n.dataLayer)&&(n.dataLayer[l.RECALLS_ACCORDION_CONSTANTS.dataLayer.responseTimestamp]=Date.now(),t.dataLayerPush(n.dataLayer))),t.stopLoading()}).catch(t.handleError)},this.callAjaxWithHTMLResponse=function(){t.startLoading(),c.default.post(t.state.ajaxEndpoint,r({},t.state.ajaxRequestBody)).then(function(e){if(!e||!e.data)return t.stopLoading(),console.warn("Response has no data");t.elements.output.innerHTML=e.data,t.state.ajaxContentAddedToDOM=!0,(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.contentShowOutput,!0),t.stopLoading()}).catch(t.handleError)},this.handleError=function(e){t.stopLoading(),t.elements.error&&(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.errorMessageVisible,!0);var n={event:l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.event,"element-name":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.elementName,"recall-ui":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.recallUI,"recall-ui-detail":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.detail,"lambda-return-code":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.lambdaReturnCode,"recall-outcome":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.outcome,"recall-outcome-detail":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.outcomeDetail,"smmt-call":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.error.smmtCall};t.dataLayerPush(n)},this.dataLayerPushBeforeAjax=function(){if(window.dataLayer){var e={event:l.RECALLS_ACCORDION_CONSTANTS.dataLayer.submitEvent,"element-name":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.submitElementName,"recall-ui":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.submitRecallUi,"recall-outcome":l.RECALLS_ACCORDION_CONSTANTS.dataLayer.submitRecallOutcome,timestamp:(new Date).getTime()};window.dataLayer.push(e)}},this.startLoading=function(){t.state.loading=!0,(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.errorMessageVisible,!1),(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.contentLoading,!0)},this.stopLoading=function(){(0,u.toggleClass)(t.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.contentLoading,!1),t.state.loading=!1},this.dataLayerPush=function(e){if(!window.dataLayer||null===e||"object"!==(void 0===e?"undefined":o(e)))return console.warn("Could not push dataLayer as it was not found");window.dataLayer.push(e)},this.recallsAccordionSectionElement=document.querySelector(l.RECALLS_ACCORDION_CONSTANTS.selectors.section),this.recallsAccordionSectionElement){this.elements={parent:(0,u.closestParentOfEl)(this.recallsAccordionSectionElement,"."+l.ACCORDION_CONSTANTS.classNames.accordion),header:document.querySelector(l.RECALLS_ACCORDION_CONSTANTS.selectors.header),content:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.classNames.content),noJSAlternative:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.classNames.noJSAlternative),loading:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.classNames.loading),output:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.classNames.output),error:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.classNames.errorMessage),noRecordsHeld:document.querySelector("."+l.RECALLS_ACCORDION_CONSTANTS.dataLayer.noRecordsHeld)};for(var n in this.elements)if(!this.elements[n]&&null===!this.elements.noRecordsHeld)return console.warn(n+" - Element was not found");this.state={ajaxRequestBody:!1,ajaxEndpoint:!1,ajaxContentAddedToDOM:!1,loading:!1},this.setup()}}return i(e,[{key:"setup",value:function(){(0,u.toggleClass)(this.elements.content,l.RECALLS_ACCORDION_CONSTANTS.classNames.contentNoJs,!1),this.state.ajaxEndpoint=this.recallsAccordionSectionElement.getAttribute(l.RECALLS_ACCORDION_CONSTANTS.attributeNames.ajaxEndpoint),this.state.ajaxRequestBody=JSON.parse(this.recallsAccordionSectionElement.getAttribute(l.RECALLS_ACCORDION_CONSTANTS.attributeNames.ajaxData)),(0,u.addEventListenerToEl)(this.elements.header,"click",this.recallsHeadingClickHandler),document.addEventListener(l.ACCORDION_CONSTANTS.eventNames.expandAllOpen,this.recallsHeadingClickHandler)}}]),e}()}},[217]);