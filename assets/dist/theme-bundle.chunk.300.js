"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[300],{39300:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(49230),r=o(44505),a=o(54587),c=o(55825);function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}var s=function(e){var t,o;function n(){return e.apply(this,arguments)||this}return o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,i(t,o),n.prototype.onReady=function(){var e=this;(0,a.Z)(this.context);var t=this.context.compareRemoveMessage;c("body").on("click","[data-comparison-remove]",(function(o){e.context.comparisons.length<=2&&((0,r.ol)(t),o.preventDefault())}))},n}(n.Z)},54587:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(44505),r=o(55825);function a(e,t,o){0!==e.length?(t.is("visible")||t.addClass("show"),t.attr("href",o.compare+"/"+e.join("/")),t.find("span.countPill").html(e.length)):t.removeClass("show")}function c(e){var t=e.noCompareMessage,o=e.urls,c=[],i=r("a[data-compare-nav]");r("body").on("compareReset",(function(){var e=r("body").find('input[name="products[]"]:checked');a(c=e.length?e.map((function(e,t){return t.value})).get():[],i,o)})),r("body").triggerHandler("compareReset"),r("body").on("click","[data-compare-id]",(function(e){var t,n=e.currentTarget.value,i=r("a[data-compare-nav]");e.currentTarget.checked?(t=n,c.push(t)):function(e,t){var o=e.indexOf(t);o>-1&&e.splice(o,1)}(c,n),a(c,i,o)})),r("body").on("click","a[data-compare-nav]",(function(){if(r("body").find('input[name="products[]"]:checked').length<=1)return(0,n.ol)(t),!1}))}}}]);
//# sourceMappingURL=theme-bundle.chunk.300.js.map