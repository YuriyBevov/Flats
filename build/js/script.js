!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(function() { try { return require('moment'); } catch(e) { } }()) :
  typeof define === 'function' && define.amd ? define(['require'], function(require) { return factory(function() { try { return require('moment'); } catch(e) { } }()); }) :
  (global.Chart = factory(global.moment));
  }(this, (function (moment) { 'use strict';
  
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  
  /* MIT license */
  
  var conversions = {
    rgb2hsl: rgb2hsl,
    rgb2hsv: rgb2hsv,
    rgb2hwb: rgb2hwb,
    rgb2cmyk: rgb2cmyk,
    rgb2keyword: rgb2keyword,
    rgb2xyz: rgb2xyz,
    rgb2lab: rgb2lab,
    rgb2lch: rgb2lch,
  
    hsl2rgb: hsl2rgb,
    hsl2hsv: hsl2hsv,
    hsl2hwb: hsl2hwb,
    hsl2cmyk: hsl2cmyk,
    hsl2keyword: hsl2keyword,
  
    hsv2rgb: hsv2rgb,
    hsv2hsl: hsv2hsl,
    hsv2hwb: hsv2hwb,
    hsv2cmyk: hsv2cmyk,
    hsv2keyword: hsv2keyword,
  
    hwb2rgb: hwb2rgb,
    hwb2hsl: hwb2hsl,
    hwb2hsv: hwb2hsv,
    hwb2cmyk: hwb2cmyk,
    hwb2keyword: hwb2keyword,
  
    cmyk2rgb: cmyk2rgb,
    cmyk2hsl: cmyk2hsl,
    cmyk2hsv: cmyk2hsv,
    cmyk2hwb: cmyk2hwb,
    cmyk2keyword: cmyk2keyword,
  
    keyword2rgb: keyword2rgb,
    keyword2hsl: keyword2hsl,
    keyword2hsv: keyword2hsv,
    keyword2hwb: keyword2hwb,
    keyword2cmyk: keyword2cmyk,
    keyword2lab: keyword2lab,
    keyword2xyz: keyword2xyz,
  
    xyz2rgb: xyz2rgb,
    xyz2lab: xyz2lab,
    xyz2lch: xyz2lch,
  
    lab2xyz: lab2xyz,
    lab2rgb: lab2rgb,
    lab2lch: lab2lch,
  
    lch2lab: lch2lab,
    lch2xyz: lch2xyz,
    lch2rgb: lch2rgb
  };
  
  
  function rgb2hsl(rgb) {
    var r = rgb[0]/255,
        g = rgb[1]/255,
        b = rgb[2]/255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h, s, l;
  
    if (max == min)
      h = 0;
    else if (r == max)
      h = (g - b) / delta;
    else if (g == max)
      h = 2 + (b - r) / delta;
    else if (b == max)
      h = 4 + (r - g)/ delta;
  
    h = Math.min(h * 60, 360);
  
    if (h < 0)
      h += 360;
  
    l = (min + max) / 2;
  
    if (max == min)
      s = 0;
    else if (l <= 0.5)
      s = delta / (max + min);
    else
      s = delta / (2 - max - min);
  
    return [h, s * 100, l * 100];
  }
  
  function rgb2hsv(rgb) {
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h, s, v;
  
    if (max == 0)
      s = 0;
    else
      s = (delta/max * 1000)/10;
  
    if (max == min)
      h = 0;
    else if (r == max)
      h = (g - b) / delta;
    else if (g == max)
      h = 2 + (b - r) / delta;
    else if (b == max)
      h = 4 + (r - g) / delta;
  
    h = Math.min(h * 60, 360);
  
    if (h < 0)
      h += 360;
  
    v = ((max / 255) * 1000) / 10;
  
    return [h, s, v];
  }
  
  function rgb2hwb(rgb) {
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        h = rgb2hsl(rgb)[0],
        w = 1/255 * Math.min(r, Math.min(g, b)),
        b = 1 - 1/255 * Math.max(r, Math.max(g, b));
  
    return [h, w * 100, b * 100];
  }
  
  function rgb2cmyk(rgb) {
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        c, m, y, k;
  
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  }
  
  function rgb2keyword(rgb) {
    return reverseKeywords[JSON.stringify(rgb)];
  }
  
  function rgb2xyz(rgb) {
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255;
  
    // assume sRGB
    r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
    g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
    b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
  
    var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
    var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
    var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
  
    return [x * 100, y *100, z * 100];
  }
  
  function rgb2lab(rgb) {
    var xyz = rgb2xyz(rgb),
          x = xyz[0],
          y = xyz[1],
          z = xyz[2],
          l, a, b;
  
    x /= 95.047;
    y /= 100;
    z /= 108.883;
  
    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
  
    l = (116 * y) - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
  
    return [l, a, b];
  }
  
  function rgb2lch(args) {
    return lab2lch(rgb2lab(args));
  }
  
  function hsl2rgb(hsl) {
    var h = hsl[0] / 360,
        s = hsl[1] / 100,
        l = hsl[2] / 100,
        t1, t2, t3, rgb, val;
  
    if (s == 0) {
      val = l * 255;
      return [val, val, val];
    }
  
    if (l < 0.5)
      t2 = l * (1 + s);
    else
      t2 = l + s - l * s;
    t1 = 2 * l - t2;
  
    rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * - (i - 1);
      t3 < 0 && t3++;
      t3 > 1 && t3--;
  
      if (6 * t3 < 1)
        val = t1 + (t2 - t1) * 6 * t3;
      else if (2 * t3 < 1)
        val = t2;
      else if (3 * t3 < 2)
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      else
        val = t1;
  
      rgb[i] = val * 255;
    }
  
    return rgb;
  }
  
  function hsl2hsv(hsl) {
    var h = hsl[0],
        s = hsl[1] / 100,
        l = hsl[2] / 100,
        sv, v;
  
    if(l === 0) {
        // no need to do calc on black
        // also avoids divide by 0 error
        return [0, 0, 0];
    }
  
    l *= 2;
    s *= (l <= 1) ? l : 2 - l;
    v = (l + s) / 2;
    sv = (2 * s) / (l + s);
    return [h, sv * 100, v * 100];
  }
  
  function hsl2hwb(args) {
    return rgb2hwb(hsl2rgb(args));
  }
  
  function hsl2cmyk(args) {
    return rgb2cmyk(hsl2rgb(args));
  }
  
  function hsl2keyword(args) {
    return rgb2keyword(hsl2rgb(args));
  }
  
  
  function hsv2rgb(hsv) {
    var h = hsv[0] / 60,
        s = hsv[1] / 100,
        v = hsv[2] / 100,
        hi = Math.floor(h) % 6;
  
    var f = h - Math.floor(h),
        p = 255 * v * (1 - s),
        q = 255 * v * (1 - (s * f)),
        t = 255 * v * (1 - (s * (1 - f))),
        v = 255 * v;
  
    switch(hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  }
  
  function hsv2hsl(hsv) {
    var h = hsv[0],
        s = hsv[1] / 100,
        v = hsv[2] / 100,
        sl, l;
  
    l = (2 - s) * v;
    sl = s * v;
    sl /= (l <= 1) ? l : 2 - l;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  }
  
  function hsv2hwb(args) {
    return rgb2hwb(hsv2rgb(args))
  }
  
  function hsv2cmyk(args) {
    return rgb2cmyk(hsv2rgb(args));
  }
  
  function hsv2keyword(args) {
    return rgb2keyword(hsv2rgb(args));
  }
  
  // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
  function hwb2rgb(hwb) {
    var h = hwb[0] / 360,
        wh = hwb[1] / 100,
        bl = hwb[2] / 100,
        ratio = wh + bl,
        i, v, f, n;
  
    // wh + bl cant be > 1
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
  
    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) != 0) {
      f = 1 - f;
    }
    n = wh + f * (v - wh);  // linear interpolation
  
    switch (i) {
      default:
      case 6:
      case 0: r = v; g = n; b = wh; break;
      case 1: r = n; g = v; b = wh; break;
      case 2: r = wh; g = v; b = n; break;
      case 3: r = wh; g = n; b = v; break;
      case 4: r = n; g = wh; b = v; break;
      case 5: r = v; g = wh; b = n; break;
    }
  
    return [r * 255, g * 255, b * 255];
  }
  
  function hwb2hsl(args) {
    return rgb2hsl(hwb2rgb(args));
  }
  
  function hwb2hsv(args) {
    return rgb2hsv(hwb2rgb(args));
  }
  
  function hwb2cmyk(args) {
    return rgb2cmyk(hwb2rgb(args));
  }
  
  function hwb2keyword(args) {
    return rgb2keyword(hwb2rgb(args));
  }
  
  function cmyk2rgb(cmyk) {
    var c = cmyk[0] / 100,
        m = cmyk[1] / 100,
        y = cmyk[2] / 100,
        k = cmyk[3] / 100,
        r, g, b;
  
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  }
  
  function cmyk2hsl(args) {
    return rgb2hsl(cmyk2rgb(args));
  }
  
  function cmyk2hsv(args) {
    return rgb2hsv(cmyk2rgb(args));
  }
  
  function cmyk2hwb(args) {
    return rgb2hwb(cmyk2rgb(args));
  }
  
  function cmyk2keyword(args) {
    return rgb2keyword(cmyk2rgb(args));
  }
  
  
  function xyz2rgb(xyz) {
    var x = xyz[0] / 100,
        y = xyz[1] / 100,
        z = xyz[2] / 100,
        r, g, b;
  
    r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
  
    // assume sRGB
    r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
      : r = (r * 12.92);
  
    g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
      : g = (g * 12.92);
  
    b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
      : b = (b * 12.92);
  
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
  
    return [r * 255, g * 255, b * 255];
  }
  
  function xyz2lab(xyz) {
    var x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;
  
    x /= 95.047;
    y /= 100;
    z /= 108.883;
  
    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
  
    l = (116 * y) - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
  
    return [l, a, b];
  }
  
  function xyz2lch(args) {
    return lab2lch(xyz2lab(args));
  }
  
  function lab2xyz(lab) {
    var l = lab[0],
        a = lab[1],
        b = lab[2],
        x, y, z, y2;
  
    if (l <= 8) {
      y = (l * 100) / 903.3;
      y2 = (7.787 * (y / 100)) + (16 / 116);
    } else {
      y = 100 * Math.pow((l + 16) / 116, 3);
      y2 = Math.pow(y / 100, 1/3);
    }
  
    x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
  
    z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
  
    return [x, y, z];
  }
  
  function lab2lch(lab) {
    var l = lab[0],
        a = lab[1],
        b = lab[2],
        hr, h, c;
  
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  }
  
  function lab2rgb(args) {
    return xyz2rgb(lab2xyz(args));
  }
  
  function lch2lab(lch) {
    var l = lch[0],
        c = lch[1],
        h = lch[2],
        a, b, hr;
  
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  }
  
  function lch2xyz(args) {
    return lab2xyz(lch2lab(args));
  }
  
  function lch2rgb(args) {
    return lab2rgb(lch2lab(args));
  }
  
  function keyword2rgb(keyword) {
    return cssKeywords[keyword];
  }
  
  function keyword2hsl(args) {
    return rgb2hsl(keyword2rgb(args));
  }
  
  function keyword2hsv(args) {
    return rgb2hsv(keyword2rgb(args));
  }
  
  function keyword2hwb(args) {
    return rgb2hwb(keyword2rgb(args));
  }
  
  function keyword2cmyk(args) {
    return rgb2cmyk(keyword2rgb(args));
  }
  
  function keyword2lab(args) {
    return rgb2lab(keyword2rgb(args));
  }
  
  function keyword2xyz(args) {
    return rgb2xyz(keyword2rgb(args));
  }
  
  var cssKeywords = {
    aliceblue:  [240,248,255],
    antiquewhite: [250,235,215],
    aqua: [0,255,255],
    aquamarine: [127,255,212],
    azure:  [240,255,255],
    beige:  [245,245,220],
    bisque: [255,228,196],
    black:  [0,0,0],
    blanchedalmond: [255,235,205],
    blue: [0,0,255],
    blueviolet: [138,43,226],
    brown:  [165,42,42],
    burlywood:  [222,184,135],
    cadetblue:  [95,158,160],
    chartreuse: [127,255,0],
    chocolate:  [210,105,30],
    coral:  [255,127,80],
    cornflowerblue: [100,149,237],
    cornsilk: [255,248,220],
    crimson:  [220,20,60],
    cyan: [0,255,255],
    darkblue: [0,0,139],
    darkcyan: [0,139,139],
    darkgoldenrod:  [184,134,11],
    darkgray: [169,169,169],
    darkgreen:  [0,100,0],
    darkgrey: [169,169,169],
    darkkhaki:  [189,183,107],
    darkmagenta:  [139,0,139],
    darkolivegreen: [85,107,47],
    darkorange: [255,140,0],
    darkorchid: [153,50,204],
    darkred:  [139,0,0],
    darksalmon: [233,150,122],
    darkseagreen: [143,188,143],
    darkslateblue:  [72,61,139],
    darkslategray:  [47,79,79],
    darkslategrey:  [47,79,79],
    darkturquoise:  [0,206,209],
    darkviolet: [148,0,211],
    deeppink: [255,20,147],
    deepskyblue:  [0,191,255],
    dimgray:  [105,105,105],
    dimgrey:  [105,105,105],
    dodgerblue: [30,144,255],
    firebrick:  [178,34,34],
    floralwhite:  [255,250,240],
    forestgreen:  [34,139,34],
    fuchsia:  [255,0,255],
    gainsboro:  [220,220,220],
    ghostwhite: [248,248,255],
    gold: [255,215,0],
    goldenrod:  [218,165,32],
    gray: [128,128,128],
    green:  [0,128,0],
    greenyellow:  [173,255,47],
    grey: [128,128,128],
    honeydew: [240,255,240],
    hotpink:  [255,105,180],
    indianred:  [205,92,92],
    indigo: [75,0,130],
    ivory:  [255,255,240],
    khaki:  [240,230,140],
    lavender: [230,230,250],
    lavenderblush:  [255,240,245],
    lawngreen:  [124,252,0],
    lemonchiffon: [255,250,205],
    lightblue:  [173,216,230],
    lightcoral: [240,128,128],
    lightcyan:  [224,255,255],
    lightgoldenrodyellow: [250,250,210],
    lightgray:  [211,211,211],
    lightgreen: [144,238,144],
    lightgrey:  [211,211,211],
    lightpink:  [255,182,193],
    lightsalmon:  [255,160,122],
    lightseagreen:  [32,178,170],
    lightskyblue: [135,206,250],
    lightslategray: [119,136,153],
    lightslategrey: [119,136,153],
    lightsteelblue: [176,196,222],
    lightyellow:  [255,255,224],
    lime: [0,255,0],
    limegreen:  [50,205,50],
    linen:  [250,240,230],
    magenta:  [255,0,255],
    maroon: [128,0,0],
    mediumaquamarine: [102,205,170],
    mediumblue: [0,0,205],
    mediumorchid: [186,85,211],
    mediumpurple: [147,112,219],
    mediumseagreen: [60,179,113],
    mediumslateblue:  [123,104,238],
    mediumspringgreen:  [0,250,154],
    mediumturquoise:  [72,209,204],
    mediumvioletred:  [199,21,133],
    midnightblue: [25,25,112],
    mintcream:  [245,255,250],
    mistyrose:  [255,228,225],
    moccasin: [255,228,181],
    navajowhite:  [255,222,173],
    navy: [0,0,128],
    oldlace:  [253,245,230],
    olive:  [128,128,0],
    olivedrab:  [107,142,35],
    orange: [255,165,0],
    orangered:  [255,69,0],
    orchid: [218,112,214],
    palegoldenrod:  [238,232,170],
    palegreen:  [152,251,152],
    paleturquoise:  [175,238,238],
    palevioletred:  [219,112,147],
    papayawhip: [255,239,213],
    peachpuff:  [255,218,185],
    peru: [205,133,63],
    pink: [255,192,203],
    plum: [221,160,221],
    powderblue: [176,224,230],
    purple: [128,0,128],
    rebeccapurple: [102, 51, 153],
    red:  [255,0,0],
    rosybrown:  [188,143,143],
    royalblue:  [65,105,225],
    saddlebrown:  [139,69,19],
    salmon: [250,128,114],
    sandybrown: [244,164,96],
    seagreen: [46,139,87],
    seashell: [255,245,238],
    sienna: [160,82,45],
    silver: [192,192,192],
    skyblue:  [135,206,235],
    slateblue:  [106,90,205],
    slategray:  [112,128,144],
    slategrey:  [112,128,144],
    snow: [255,250,250],
    springgreen:  [0,255,127],
    steelblue:  [70,130,180],
    tan:  [210,180,140],
    teal: [0,128,128],
    thistle:  [216,191,216],
    tomato: [255,99,71],
    turquoise:  [64,224,208],
    violet: [238,130,238],
    wheat:  [245,222,179],
    white:  [255,255,255],
    whitesmoke: [245,245,245],
    yellow: [255,255,0],
    yellowgreen:  [154,205,50]
  };
  
  var reverseKeywords = {};
  for (var key in cssKeywords) {
    reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
  }
  
  var convert = function() {
     return new Converter();
  };
  
  for (var func in conversions) {
    // export Raw versions
    convert[func + "Raw"] =  (function(func) {
      // accept array or plain args
      return function(arg) {
        if (typeof arg == "number")
          arg = Array.prototype.slice.call(arguments);
        return conversions[func](arg);
      }
    })(func);
  
    var pair = /(\w+)2(\w+)/.exec(func),
        from = pair[1],
        to = pair[2];
  
    // export rgb2hsl and ["rgb"]["hsl"]
    convert[from] = convert[from] || {};
  
    convert[from][to] = convert[func] = (function(func) { 
      return function(arg) {
        if (typeof arg == "number")
          arg = Array.prototype.slice.call(arguments);
        
        var val = conversions[func](arg);
        if (typeof val == "string" || val === undefined)
          return val; // keyword
  
        for (var i = 0; i < val.length; i++)
          val[i] = Math.round(val[i]);
        return val;
      }
    })(func);
  }
  
  
  /* Converter does lazy conversion and caching */
  var Converter = function() {
     this.convs = {};
  };
  
  /* Either get the values for a space or
    set the values for a space, depending on args */
  Converter.prototype.routeSpace = function(space, args) {
     var values = args[0];
     if (values === undefined) {
        // color.rgb()
        return this.getValues(space);
     }
     // color.rgb(10, 10, 10)
     if (typeof values == "number") {
        values = Array.prototype.slice.call(args);        
     }
  
     return this.setValues(space, values);
  };
    
  /* Set the values for a space, invalidating cache */
  Converter.prototype.setValues = function(space, values) {
     this.space = space;
     this.convs = {};
     this.convs[space] = values;
     return this;
  };
  
  /* Get the values for a space. If there's already
    a conversion for the space, fetch it, otherwise
    compute it */
  Converter.prototype.getValues = function(space) {
     var vals = this.convs[space];
     if (!vals) {
        var fspace = this.space,
            from = this.convs[fspace];
        vals = convert[fspace][space](from);
  
        this.convs[space] = vals;
     }
    return vals;
  };
  
  ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
     Converter.prototype[space] = function(vals) {
        return this.routeSpace(space, arguments);
     };
  });
  
  var colorConvert = convert;
  
  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  
  /* MIT license */
  
  
  var colorString = {
     getRgba: getRgba,
     getHsla: getHsla,
     getRgb: getRgb,
     getHsl: getHsl,
     getHwb: getHwb,
     getAlpha: getAlpha,
  
     hexString: hexString,
     rgbString: rgbString,
     rgbaString: rgbaString,
     percentString: percentString,
     percentaString: percentaString,
     hslString: hslString,
     hslaString: hslaString,
     hwbString: hwbString,
     keyword: keyword
  };
  
  function getRgba(string) {
     if (!string) {
        return;
     }
     var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
         hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
         rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
         per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
         keyword = /(\w+)/;
  
     var rgb = [0, 0, 0],
         a = 1,
         match = string.match(abbr),
         hexAlpha = "";
     if (match) {
        match = match[1];
        hexAlpha = match[3];
        for (var i = 0; i < rgb.length; i++) {
           rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
           a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
        }
     }
     else if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (var i = 0; i < rgb.length; i++) {
           rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
        }
        if (hexAlpha) {
           a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
        }
     }
     else if (match = string.match(rgba)) {
        for (var i = 0; i < rgb.length; i++) {
           rgb[i] = parseInt(match[i + 1]);
        }
        a = parseFloat(match[4]);
     }
     else if (match = string.match(per)) {
        for (var i = 0; i < rgb.length; i++) {
           rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        a = parseFloat(match[4]);
     }
     else if (match = string.match(keyword)) {
        if (match[1] == "transparent") {
           return [0, 0, 0, 0];
        }
        rgb = colorName[match[1]];
        if (!rgb) {
           return;
        }
     }
  
     for (var i = 0; i < rgb.length; i++) {
        rgb[i] = scale(rgb[i], 0, 255);
     }
     if (!a && a != 0) {
        a = 1;
     }
     else {
        a = scale(a, 0, 1);
     }
     rgb[3] = a;
     return rgb;
  }
  
  function getHsla(string) {
     if (!string) {
        return;
     }
     var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
     var match = string.match(hsl);
     if (match) {
        var alpha = parseFloat(match[4]);
        var h = scale(parseInt(match[1]), 0, 360),
            s = scale(parseFloat(match[2]), 0, 100),
            l = scale(parseFloat(match[3]), 0, 100),
            a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
     }
  }
  
  function getHwb(string) {
     if (!string) {
        return;
     }
     var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
     var match = string.match(hwb);
     if (match) {
      var alpha = parseFloat(match[4]);
        var h = scale(parseInt(match[1]), 0, 360),
            w = scale(parseFloat(match[2]), 0, 100),
            b = scale(parseFloat(match[3]), 0, 100),
            a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
     }
  }
  
  function getRgb(string) {
     var rgba = getRgba(string);
     return rgba && rgba.slice(0, 3);
  }
  
  function getHsl(string) {
    var hsla = getHsla(string);
    return hsla && hsla.slice(0, 3);
  }
  
  function getAlpha(string) {
     var vals = getRgba(string);
     if (vals) {
        return vals[3];
     }
     else if (vals = getHsla(string)) {
        return vals[3];
     }
     else if (vals = getHwb(string)) {
        return vals[3];
     }
  }
  
  // generators
  function hexString(rgba, a) {
     var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
     return "#" + hexDouble(rgba[0]) 
                + hexDouble(rgba[1])
                + hexDouble(rgba[2])
                + (
                   (a >= 0 && a < 1)
                   ? hexDouble(Math.round(a * 255))
                   : ""
                );
  }
  
  function rgbString(rgba, alpha) {
     if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
        return rgbaString(rgba, alpha);
     }
     return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
  }
  
  function rgbaString(rgba, alpha) {
     if (alpha === undefined) {
        alpha = (rgba[3] !== undefined ? rgba[3] : 1);
     }
     return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
             + ", " + alpha + ")";
  }
  
  function percentString(rgba, alpha) {
     if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
        return percentaString(rgba, alpha);
     }
     var r = Math.round(rgba[0]/255 * 100),
         g = Math.round(rgba[1]/255 * 100),
         b = Math.round(rgba[2]/255 * 100);
  
     return "rgb(" + r + "%, " + g + "%, " + b + "%)";
  }
  
  function percentaString(rgba, alpha) {
     var r = Math.round(rgba[0]/255 * 100),
         g = Math.round(rgba[1]/255 * 100),
         b = Math.round(rgba[2]/255 * 100);
     return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
  }
  
  function hslString(hsla, alpha) {
     if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
        return hslaString(hsla, alpha);
     }
     return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
  }
  
  function hslaString(hsla, alpha) {
     if (alpha === undefined) {
        alpha = (hsla[3] !== undefined ? hsla[3] : 1);
     }
     return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
             + alpha + ")";
  }
  
  // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
  // (hwb have alpha optional & 1 is default value)
  function hwbString(hwb, alpha) {
     if (alpha === undefined) {
        alpha = (hwb[3] !== undefined ? hwb[3] : 1);
     }
     return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
             + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
  }
  
  function keyword(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  }
  
  // helpers
  function scale(num, min, max) {
     return Math.min(Math.max(min, num), max);
  }
  
  function hexDouble(num) {
    var str = num.toString(16).toUpperCase();
    return (str.length < 2) ? "0" + str : str;
  }
  
  
  //create a list of reverse color names
  var reverseNames = {};
  for (var name in colorName) {
     reverseNames[colorName[name]] = name;
  }
  
  /* MIT license */
  
  
  
  var Color = function (obj) {
    if (obj instanceof Color) {
      return obj;
    }
    if (!(this instanceof Color)) {
      return new Color(obj);
    }
  
    this.valid = false;
    this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    };
  
    // parse Color() argument
    var vals;
    if (typeof obj === 'string') {
      vals = colorString.getRgba(obj);
      if (vals) {
        this.setValues('rgb', vals);
      } else if (vals = colorString.getHsla(obj)) {
        this.setValues('hsl', vals);
      } else if (vals = colorString.getHwb(obj)) {
        this.setValues('hwb', vals);
      }
    } else if (typeof obj === 'object') {
      vals = obj;
      if (vals.r !== undefined || vals.red !== undefined) {
        this.setValues('rgb', vals);
      } else if (vals.l !== undefined || vals.lightness !== undefined) {
        this.setValues('hsl', vals);
      } else if (vals.v !== undefined || vals.value !== undefined) {
        this.setValues('hsv', vals);
      } else if (vals.w !== undefined || vals.whiteness !== undefined) {
        this.setValues('hwb', vals);
      } else if (vals.c !== undefined || vals.cyan !== undefined) {
        this.setValues('cmyk', vals);
      }
    }
  };
  
  Color.prototype = {
    isValid: function () {
      return this.valid;
    },
    rgb: function () {
      return this.setSpace('rgb', arguments);
    },
    hsl: function () {
      return this.setSpace('hsl', arguments);
    },
    hsv: function () {
      return this.setSpace('hsv', arguments);
    },
    hwb: function () {
      return this.setSpace('hwb', arguments);
    },
    cmyk: function () {
      return this.setSpace('cmyk', arguments);
    },
  
    rgbArray: function () {
      return this.values.rgb;
    },
    hslArray: function () {
      return this.values.hsl;
    },
    hsvArray: function () {
      return this.values.hsv;
    },
    hwbArray: function () {
      var values = this.values;
      if (values.alpha !== 1) {
        return values.hwb.concat([values.alpha]);
      }
      return values.hwb;
    },
    cmykArray: function () {
      return this.values.cmyk;
    },
    rgbaArray: function () {
      var values = this.values;
      return values.rgb.concat([values.alpha]);
    },
    hslaArray: function () {
      var values = this.values;
      return values.hsl.concat([values.alpha]);
    },
    alpha: function (val) {
      if (val === undefined) {
        return this.values.alpha;
      }
      this.setValues('alpha', val);
      return this;
    },
  
    red: function (val) {
      return this.setChannel('rgb', 0, val);
    },
    green: function (val) {
      return this.setChannel('rgb', 1, val);
    },
    blue: function (val) {
      return this.setChannel('rgb', 2, val);
    },
    hue: function (val) {
      if (val) {
        val %= 360;
        val = val < 0 ? 360 + val : val;
      }
      return this.setChannel('hsl', 0, val);
    },
    saturation: function (val) {
      return this.setChannel('hsl', 1, val);
    },
    lightness: function (val) {
      return this.setChannel('hsl', 2, val);
    },
    saturationv: function (val) {
      return this.setChannel('hsv', 1, val);
    },
    whiteness: function (val) {
      return this.setChannel('hwb', 1, val);
    },
    blackness: function (val) {
      return this.setChannel('hwb', 2, val);
    },
    value: function (val) {
      return this.setChannel('hsv', 2, val);
    },
    cyan: function (val) {
      return this.setChannel('cmyk', 0, val);
    },
    magenta: function (val) {
      return this.setChannel('cmyk', 1, val);
    },
    yellow: function (val) {
      return this.setChannel('cmyk', 2, val);
    },
    black: function (val) {
      return this.setChannel('cmyk', 3, val);
    },
  
    hexString: function () {
      return colorString.hexString(this.values.rgb);
    },
    rgbString: function () {
      return colorString.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
      return colorString.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
      return colorString.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
      return colorString.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
      return colorString.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
      return colorString.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
      return colorString.keyword(this.values.rgb, this.values.alpha);
    },
  
    rgbNumber: function () {
      var rgb = this.values.rgb;
      return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
    },
  
    luminosity: function () {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      var rgb = this.values.rgb;
      var lum = [];
      for (var i = 0; i < rgb.length; i++) {
        var chan = rgb[i] / 255;
        lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
  
    contrast: function (color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
  
    level: function (color2) {
      var contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7.1) {
        return 'AAA';
      }
  
      return (contrastRatio >= 4.5) ? 'AA' : '';
    },
  
    dark: function () {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      var rgb = this.values.rgb;
      var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return yiq < 128;
    },
  
    light: function () {
      return !this.dark();
    },
  
    negate: function () {
      var rgb = [];
      for (var i = 0; i < 3; i++) {
        rgb[i] = 255 - this.values.rgb[i];
      }
      this.setValues('rgb', rgb);
      return this;
    },
  
    lighten: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] += hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
  
    darken: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] -= hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
  
    saturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] += hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
  
    desaturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] -= hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
  
    whiten: function (ratio) {
      var hwb = this.values.hwb;
      hwb[1] += hwb[1] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
  
    blacken: function (ratio) {
      var hwb = this.values.hwb;
      hwb[2] += hwb[2] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
  
    greyscale: function () {
      var rgb = this.values.rgb;
      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      this.setValues('rgb', [val, val, val]);
      return this;
    },
  
    clearer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha - (alpha * ratio));
      return this;
    },
  
    opaquer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha + (alpha * ratio));
      return this;
    },
  
    rotate: function (degrees) {
      var hsl = this.values.hsl;
      var hue = (hsl[0] + degrees) % 360;
      hsl[0] = hue < 0 ? 360 + hue : hue;
      this.setValues('hsl', hsl);
      return this;
    },
  
    /**
     * Ported from sass implementation in C
     * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
     */
    mix: function (mixinColor, weight) {
      var color1 = this;
      var color2 = mixinColor;
      var p = weight === undefined ? 0.5 : weight;
  
      var w = 2 * p - 1;
      var a = color1.alpha() - color2.alpha();
  
      var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      var w2 = 1 - w1;
  
      return this
        .rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue()
        )
        .alpha(color1.alpha() * p + color2.alpha() * (1 - p));
    },
  
    toJSON: function () {
      return this.rgb();
    },
  
    clone: function () {
      // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
      // making the final build way to big to embed in Chart.js. So let's do it manually,
      // assuming that values to clone are 1 dimension arrays containing only numbers,
      // except 'alpha' which is a number.
      var result = new Color();
      var source = this.values;
      var target = result.values;
      var value, type;
  
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          value = source[prop];
          type = ({}).toString.call(value);
          if (type === '[object Array]') {
            target[prop] = value.slice(0);
          } else if (type === '[object Number]') {
            target[prop] = value;
          } else {
            console.error('unexpected color value:', value);
          }
        }
      }
  
      return result;
    }
  };
  
  Color.prototype.spaces = {
    rgb: ['red', 'green', 'blue'],
    hsl: ['hue', 'saturation', 'lightness'],
    hsv: ['hue', 'saturation', 'value'],
    hwb: ['hue', 'whiteness', 'blackness'],
    cmyk: ['cyan', 'magenta', 'yellow', 'black']
  };
  
  Color.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  };
  
  Color.prototype.getValues = function (space) {
    var values = this.values;
    var vals = {};
  
    for (var i = 0; i < space.length; i++) {
      vals[space.charAt(i)] = values[space][i];
    }
  
    if (values.alpha !== 1) {
      vals.a = values.alpha;
    }
  
    // {r: 255, g: 255, b: 255, a: 0.4}
    return vals;
  };
  
  Color.prototype.setValues = function (space, vals) {
    var values = this.values;
    var spaces = this.spaces;
    var maxes = this.maxes;
    var alpha = 1;
    var i;
  
    this.valid = true;
  
    if (space === 'alpha') {
      alpha = vals;
    } else if (vals.length) {
      // [10, 10, 10]
      values[space] = vals.slice(0, space.length);
      alpha = vals[space.length];
    } else if (vals[space.charAt(0)] !== undefined) {
      // {r: 10, g: 10, b: 10}
      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[space.charAt(i)];
      }
  
      alpha = vals.a;
    } else if (vals[spaces[space][0]] !== undefined) {
      // {red: 10, green: 10, blue: 10}
      var chans = spaces[space];
  
      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[chans[i]];
      }
  
      alpha = vals.alpha;
    }
  
    values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));
  
    if (space === 'alpha') {
      return false;
    }
  
    var capped;
  
    // cap values of the space prior converting all values
    for (i = 0; i < space.length; i++) {
      capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
      values[space][i] = Math.round(capped);
    }
  
    // convert to all the other color spaces
    for (var sname in spaces) {
      if (sname !== space) {
        values[sname] = colorConvert[space][sname](values[space]);
      }
    }
  
    return true;
  };
  
  Color.prototype.setSpace = function (space, args) {
    var vals = args[0];
  
    if (vals === undefined) {
      // color.rgb()
      return this.getValues(space);
    }
  
    // color.rgb(10, 10, 10)
    if (typeof vals === 'number') {
      vals = Array.prototype.slice.call(args);
    }
  
    this.setValues(space, vals);
    return this;
  };
  
  Color.prototype.setChannel = function (space, index, val) {
    var svalues = this.values[space];
    if (val === undefined) {
      // color.red()
      return svalues[index];
    } else if (val === svalues[index]) {
      // color.red(color.red())
      return this;
    }
  
    // color.red(100)
    svalues[index] = val;
    this.setValues(space, svalues);
  
    return this;
  };
  
  if (typeof window !== 'undefined') {
    window.Color = Color;
  }
  
  var chartjsColor = Color;
  
  /**
   * @namespace Chart.helpers
   */
  var helpers = {
    /**
     * An empty function that can be used, for example, for optional callback.
     */
    noop: function() {},
  
    /**
     * Returns a unique id, sequentially generated from a global variable.
     * @returns {number}
     * @function
     */
    uid: (function() {
      var id = 0;
      return function() {
        return id++;
      };
    }()),
  
    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isNullOrUndef: function(value) {
      return value === null || typeof value === 'undefined';
    },
  
    /**
     * Returns true if `value` is an array (including typed arrays), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @function
     */
    isArray: function(value) {
      if (Array.isArray && Array.isArray(value)) {
        return true;
      }
      var type = Object.prototype.toString.call(value);
      if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
        return true;
      }
      return false;
    },
  
    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isObject: function(value) {
      return value !== null && Object.prototype.toString.call(value) === '[object Object]';
    },
  
    /**
     * Returns true if `value` is a finite number, else returns false
     * @param {*} value  - The value to test.
     * @returns {boolean}
     */
    isFinite: function(value) {
      return (typeof value === 'number' || value instanceof Number) && isFinite(value);
    },
  
    /**
     * Returns `value` if defined, else returns `defaultValue`.
     * @param {*} value - The value to return if defined.
     * @param {*} defaultValue - The value to return if `value` is undefined.
     * @returns {*}
     */
    valueOrDefault: function(value, defaultValue) {
      return typeof value === 'undefined' ? defaultValue : value;
    },
  
    /**
     * Returns value at the given `index` in array if defined, else returns `defaultValue`.
     * @param {Array} value - The array to lookup for value at `index`.
     * @param {number} index - The index in `value` to lookup for value.
     * @param {*} defaultValue - The value to return if `value[index]` is undefined.
     * @returns {*}
     */
    valueAtIndexOrDefault: function(value, index, defaultValue) {
      return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
    },
  
    /**
     * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
     * value returned by `fn`. If `fn` is not a function, this method returns undefined.
     * @param {function} fn - The function to call.
     * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @returns {*}
     */
    callback: function(fn, args, thisArg) {
      if (fn && typeof fn.call === 'function') {
        return fn.apply(thisArg, args);
      }
    },
  
    /**
     * Note(SB) for performance sake, this method should only be used when loopable type
     * is unknown or in none intensive code (not called often and small loopable). Else
     * it's preferable to use a regular for() loop and save extra function calls.
     * @param {object|Array} loopable - The object or array to be iterated.
     * @param {function} fn - The function to call for each item.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @param {boolean} [reverse] - If true, iterates backward on the loopable.
     */
    each: function(loopable, fn, thisArg, reverse) {
      var i, len, keys;
      if (helpers.isArray(loopable)) {
        len = loopable.length;
        if (reverse) {
          for (i = len - 1; i >= 0; i--) {
            fn.call(thisArg, loopable[i], i);
          }
        } else {
          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[i], i);
          }
        }
      } else if (helpers.isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[keys[i]], keys[i]);
        }
      }
    },
  
    /**
     * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
     * @see https://stackoverflow.com/a/14853974
     * @param {Array} a0 - The array to compare
     * @param {Array} a1 - The array to compare
     * @returns {boolean}
     */
    arrayEquals: function(a0, a1) {
      var i, ilen, v0, v1;
  
      if (!a0 || !a1 || a0.length !== a1.length) {
        return false;
      }
  
      for (i = 0, ilen = a0.length; i < ilen; ++i) {
        v0 = a0[i];
        v1 = a1[i];
  
        if (v0 instanceof Array && v1 instanceof Array) {
          if (!helpers.arrayEquals(v0, v1)) {
            return false;
          }
        } else if (v0 !== v1) {
          // NOTE: two different object instances will never be equal: {x:20} != {x:20}
          return false;
        }
      }
  
      return true;
    },
  
    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {*} source - The value to clone.
     * @returns {*}
     */
    clone: function(source) {
      if (helpers.isArray(source)) {
        return source.map(helpers.clone);
      }
  
      if (helpers.isObject(source)) {
        var target = {};
        var keys = Object.keys(source);
        var klen = keys.length;
        var k = 0;
  
        for (; k < klen; ++k) {
          target[keys[k]] = helpers.clone(source[keys[k]]);
        }
  
        return target;
      }
  
      return source;
    },
  
    /**
     * The default merger when Chart.helpers.merge is called without merger option.
     * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
     * @private
     */
    _merger: function(key, target, source, options) {
      var tval = target[key];
      var sval = source[key];
  
      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.merge(tval, sval, options);
      } else {
        target[key] = helpers.clone(sval);
      }
    },
  
    /**
     * Merges source[key] in target[key] only if target[key] is undefined.
     * @private
     */
    _mergerIf: function(key, target, source) {
      var tval = target[key];
      var sval = source[key];
  
      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.mergeIf(tval, sval);
      } else if (!target.hasOwnProperty(key)) {
        target[key] = helpers.clone(sval);
      }
    },
  
    /**
     * Recursively deep copies `source` properties into `target` with the given `options`.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @param {object} [options] - Merging options:
     * @param {function} [options.merger] - The merge method (key, target, source, options)
     * @returns {object} The `target` object.
     */
    merge: function(target, source, options) {
      var sources = helpers.isArray(source) ? source : [source];
      var ilen = sources.length;
      var merge, i, keys, klen, k;
  
      if (!helpers.isObject(target)) {
        return target;
      }
  
      options = options || {};
      merge = options.merger || helpers._merger;
  
      for (i = 0; i < ilen; ++i) {
        source = sources[i];
        if (!helpers.isObject(source)) {
          continue;
        }
  
        keys = Object.keys(source);
        for (k = 0, klen = keys.length; k < klen; ++k) {
          merge(keys[k], target, source, options);
        }
      }
  
      return target;
    },
  
    /**
     * Recursively deep copies `source` properties into `target` *only* if not defined in target.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @returns {object} The `target` object.
     */
    mergeIf: function(target, source) {
      return helpers.merge(target, source, {merger: helpers._mergerIf});
    },
  
    /**
     * Applies the contents of two or more objects together into the first object.
     * @param {object} target - The target object in which all objects are merged into.
     * @param {object} arg1 - Object containing additional properties to merge in target.
     * @param {object} argN - Additional objects containing properties to merge in target.
     * @returns {object} The `target` object.
     */
    extend: function(target) {
      var setFn = function(value, key) {
        target[key] = value;
      };
      for (var i = 1, ilen = arguments.length; i < ilen; ++i) {
        helpers.each(arguments[i], setFn);
      }
      return target;
    },
  
    /**
     * Basic javascript inheritance based on the model created in Backbone.js
     */
    inherits: function(extensions) {
      var me = this;
      var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
        return me.apply(this, arguments);
      };
  
      var Surrogate = function() {
        this.constructor = ChartElement;
      };
  
      Surrogate.prototype = me.prototype;
      ChartElement.prototype = new Surrogate();
      ChartElement.extend = helpers.inherits;
  
      if (extensions) {
        helpers.extend(ChartElement.prototype, extensions);
      }
  
      ChartElement.__super__ = me.prototype;
      return ChartElement;
    }
  };
  
  var helpers_core = helpers;
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use Chart.helpers.callback instead.
   * @function Chart.helpers.callCallback
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */
  helpers.callCallback = helpers.callback;
  
  /**
   * Provided for backward compatibility, use Array.prototype.indexOf instead.
   * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
   * @function Chart.helpers.indexOf
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.indexOf = function(array, item, fromIndex) {
    return Array.prototype.indexOf.call(array, item, fromIndex);
  };
  
  /**
   * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
   * @function Chart.helpers.getValueOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.getValueOrDefault = helpers.valueOrDefault;
  
  /**
   * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
   * @function Chart.helpers.getValueAtIndexOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
  
  /**
   * Easing functions adapted from Robert Penner's easing equations.
   * @namespace Chart.helpers.easingEffects
   * @see http://www.robertpenner.com/easing/
   */
  var effects = {
    linear: function(t) {
      return t;
    },
  
    easeInQuad: function(t) {
      return t * t;
    },
  
    easeOutQuad: function(t) {
      return -t * (t - 2);
    },
  
    easeInOutQuad: function(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t;
      }
      return -0.5 * ((--t) * (t - 2) - 1);
    },
  
    easeInCubic: function(t) {
      return t * t * t;
    },
  
    easeOutCubic: function(t) {
      return (t = t - 1) * t * t + 1;
    },
  
    easeInOutCubic: function(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t;
      }
      return 0.5 * ((t -= 2) * t * t + 2);
    },
  
    easeInQuart: function(t) {
      return t * t * t * t;
    },
  
    easeOutQuart: function(t) {
      return -((t = t - 1) * t * t * t - 1);
    },
  
    easeInOutQuart: function(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t;
      }
      return -0.5 * ((t -= 2) * t * t * t - 2);
    },
  
    easeInQuint: function(t) {
      return t * t * t * t * t;
    },
  
    easeOutQuint: function(t) {
      return (t = t - 1) * t * t * t * t + 1;
    },
  
    easeInOutQuint: function(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t * t;
      }
      return 0.5 * ((t -= 2) * t * t * t * t + 2);
    },
  
    easeInSine: function(t) {
      return -Math.cos(t * (Math.PI / 2)) + 1;
    },
  
    easeOutSine: function(t) {
      return Math.sin(t * (Math.PI / 2));
    },
  
    easeInOutSine: function(t) {
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    },
  
    easeInExpo: function(t) {
      return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
    },
  
    easeOutExpo: function(t) {
      return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
    },
  
    easeInOutExpo: function(t) {
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if ((t /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (t - 1));
      }
      return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    },
  
    easeInCirc: function(t) {
      if (t >= 1) {
        return t;
      }
      return -(Math.sqrt(1 - t * t) - 1);
    },
  
    easeOutCirc: function(t) {
      return Math.sqrt(1 - (t = t - 1) * t);
    },
  
    easeInOutCirc: function(t) {
      if ((t /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
  
    easeInElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    },
  
    easeOutElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
    },
  
    easeInOutElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if ((t /= 0.5) === 2) {
        return 1;
      }
      if (!p) {
        p = 0.45;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
      }
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    easeInBack: function(t) {
      var s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
  
    easeOutBack: function(t) {
      var s = 1.70158;
      return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    },
  
    easeInOutBack: function(t) {
      var s = 1.70158;
      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
      }
      return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
    },
  
    easeInBounce: function(t) {
      return 1 - effects.easeOutBounce(1 - t);
    },
  
    easeOutBounce: function(t) {
      if (t < (1 / 2.75)) {
        return 7.5625 * t * t;
      }
      if (t < (2 / 2.75)) {
        return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
      }
      if (t < (2.5 / 2.75)) {
        return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
      }
      return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
    },
  
    easeInOutBounce: function(t) {
      if (t < 0.5) {
        return effects.easeInBounce(t * 2) * 0.5;
      }
      return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
    }
  };
  
  var helpers_easing = {
    effects: effects
  };
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
   * @function Chart.helpers.easingEffects
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.easingEffects = effects;
  
  var PI = Math.PI;
  var RAD_PER_DEG = PI / 180;
  var DOUBLE_PI = PI * 2;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  
  /**
   * @namespace Chart.helpers.canvas
   */
  var exports$1 = {
    /**
     * Clears the entire canvas associated to the given `chart`.
     * @param {Chart} chart - The chart for which to clear the canvas.
     */
    clear: function(chart) {
      chart.ctx.clearRect(0, 0, chart.width, chart.height);
    },
  
    /**
     * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
     * given size (width, height) and the same `radius` for all corners.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
     * @param {number} x - The x axis of the coordinate for the rectangle starting point.
     * @param {number} y - The y axis of the coordinate for the rectangle starting point.
     * @param {number} width - The rectangle's width.
     * @param {number} height - The rectangle's height.
     * @param {number} radius - The rounded amount (in pixels) for the four corners.
     * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
     */
    roundedRect: function(ctx, x, y, width, height, radius) {
      if (radius) {
        var r = Math.min(radius, height / 2, width / 2);
        var left = x + r;
        var top = y + r;
        var right = x + width - r;
        var bottom = y + height - r;
  
        ctx.moveTo(x, top);
        if (left < right && top < bottom) {
          ctx.arc(left, top, r, -PI, -HALF_PI);
          ctx.arc(right, top, r, -HALF_PI, 0);
          ctx.arc(right, bottom, r, 0, HALF_PI);
          ctx.arc(left, bottom, r, HALF_PI, PI);
        } else if (left < right) {
          ctx.moveTo(left, y);
          ctx.arc(right, top, r, -HALF_PI, HALF_PI);
          ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
        } else if (top < bottom) {
          ctx.arc(left, top, r, -PI, 0);
          ctx.arc(left, bottom, r, 0, PI);
        } else {
          ctx.arc(left, top, r, -PI, PI);
        }
        ctx.closePath();
        ctx.moveTo(x, y);
      } else {
        ctx.rect(x, y, width, height);
      }
    },
  
    drawPoint: function(ctx, style, radius, x, y, rotation) {
      var type, xOffset, yOffset, size, cornerRadius;
      var rad = (rotation || 0) * RAD_PER_DEG;
  
      if (style && typeof style === 'object') {
        type = style.toString();
        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
          ctx.drawImage(style, x - style.width / 2, y - style.height / 2, style.width, style.height);
          return;
        }
      }
  
      if (isNaN(radius) || radius <= 0) {
        return;
      }
  
      ctx.beginPath();
  
      switch (style) {
      // Default includes circle
      default:
        ctx.arc(x, y, radius, 0, DOUBLE_PI);
        ctx.closePath();
        break;
      case 'triangle':
        ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        ctx.closePath();
        break;
      case 'rectRounded':
        // NOTE: the rounded rect implementation changed to use `arc` instead of
        // `quadraticCurveTo` since it generates better results when rect is
        // almost a circle. 0.516 (instead of 0.5) produces results with visually
        // closer proportion to the previous impl and it is inscribed in the
        // circle with `radius`. For more details, see the following PRs:
        // https://github.com/chartjs/Chart.js/issues/5597
        // https://github.com/chartjs/Chart.js/issues/5858
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;
      case 'rect':
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          ctx.rect(x - size, y - size, 2 * size, 2 * size);
          break;
        }
        rad += QUARTER_PI;
        /* falls through */
      case 'rectRot':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + yOffset, y - xOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        ctx.closePath();
        break;
      case 'crossRot':
        rad += QUARTER_PI;
        /* falls through */
      case 'cross':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;
      case 'star':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        rad += QUARTER_PI;
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;
      case 'line':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        break;
      case 'dash':
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
        break;
      }
  
      ctx.fill();
      ctx.stroke();
    },
  
    /**
     * Returns true if the point is inside the rectangle
     * @param {object} point - The point to test
     * @param {object} area - The rectangle
     * @returns {boolean}
     * @private
     */
    _isPointInArea: function(point, area) {
      var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
  
      return point.x > area.left - epsilon && point.x < area.right + epsilon &&
        point.y > area.top - epsilon && point.y < area.bottom + epsilon;
    },
  
    clipArea: function(ctx, area) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
      ctx.clip();
    },
  
    unclipArea: function(ctx) {
      ctx.restore();
    },
  
    lineTo: function(ctx, previous, target, flip) {
      var stepped = target.steppedLine;
      if (stepped) {
        if (stepped === 'middle') {
          var midpoint = (previous.x + target.x) / 2.0;
          ctx.lineTo(midpoint, flip ? target.y : previous.y);
          ctx.lineTo(midpoint, flip ? previous.y : target.y);
        } else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }
        ctx.lineTo(target.x, target.y);
        return;
      }
  
      if (!target.tension) {
        ctx.lineTo(target.x, target.y);
        return;
      }
  
      ctx.bezierCurveTo(
        flip ? previous.controlPointPreviousX : previous.controlPointNextX,
        flip ? previous.controlPointPreviousY : previous.controlPointNextY,
        flip ? target.controlPointNextX : target.controlPointPreviousX,
        flip ? target.controlPointNextY : target.controlPointPreviousY,
        target.x,
        target.y);
    }
  };
  
  var helpers_canvas = exports$1;
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
   * @namespace Chart.helpers.clear
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.clear = exports$1.clear;
  
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
   * @namespace Chart.helpers.drawRoundedRectangle
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.drawRoundedRectangle = function(ctx) {
    ctx.beginPath();
    exports$1.roundedRect.apply(exports$1, arguments);
  };
  
  var defaults = {
    /**
     * @private
     */
    _set: function(scope, values) {
      return helpers_core.merge(this[scope] || (this[scope] = {}), values);
    }
  };
  
  defaults._set('global', {
    defaultColor: 'rgba(0,0,0,0.1)',
    defaultFontColor: '#666',
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: 'normal',
    defaultLineHeight: 1.2,
    showLines: true
  });
  
  var core_defaults = defaults;
  
  var valueOrDefault = helpers_core.valueOrDefault;
  
  /**
   * Converts the given font object into a CSS font string.
   * @param {object} font - A font object.
   * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
   * @private
   */
  function toFontString(font) {
    if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
      return null;
    }
  
    return (font.style ? font.style + ' ' : '')
      + (font.weight ? font.weight + ' ' : '')
      + font.size + 'px '
      + font.family;
  }
  
  /**
   * @alias Chart.helpers.options
   * @namespace
   */
  var helpers_options = {
    /**
     * Converts the given line height `value` in pixels for a specific font `size`.
     * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
     * @param {number} size - The font size (in pixels) used to resolve relative `value`.
     * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @since 2.7.0
     */
    toLineHeight: function(value, size) {
      var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      if (!matches || matches[1] === 'normal') {
        return size * 1.2;
      }
  
      value = +matches[2];
  
      switch (matches[3]) {
      case 'px':
        return value;
      case '%':
        value /= 100;
        break;
      default:
        break;
      }
  
      return size * value;
    },
  
    /**
     * Converts the given value into a padding object with pre-computed width/height.
     * @param {number|object} value - If a number, set the value to all TRBL component,
     *  else, if and object, use defined properties and sets undefined ones to 0.
     * @returns {object} The padding values (top, right, bottom, left, width, height)
     * @since 2.7.0
     */
    toPadding: function(value) {
      var t, r, b, l;
  
      if (helpers_core.isObject(value)) {
        t = +value.top || 0;
        r = +value.right || 0;
        b = +value.bottom || 0;
        l = +value.left || 0;
      } else {
        t = r = b = l = +value || 0;
      }
  
      return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        height: t + b,
        width: l + r
      };
    },
  
    /**
     * Parses font options and returns the font object.
     * @param {object} options - A object that contains font options to be parsed.
     * @return {object} The font object.
     * @todo Support font.* options and renamed to toFont().
     * @private
     */
    _parseFont: function(options) {
      var globalDefaults = core_defaults.global;
      var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
      var font = {
        family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
        lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
        size: size,
        style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
        weight: null,
        string: ''
      };
  
      font.string = toFontString(font);
      return font;
    },
  
    /**
     * Evaluates the given `inputs` sequentially and returns the first defined value.
     * @param {Array} inputs - An array of values, falling back to the last value.
     * @param {object} [context] - If defined and the current value is a function, the value
     * is called with `context` as first argument and the result becomes the new input.
     * @param {number} [index] - If defined and the current value is an array, the value
     * at `index` become the new input.
     * @since 2.7.0
     */
    resolve: function(inputs, context, index) {
      var i, ilen, value;
  
      for (i = 0, ilen = inputs.length; i < ilen; ++i) {
        value = inputs[i];
        if (value === undefined) {
          continue;
        }
        if (context !== undefined && typeof value === 'function') {
          value = value(context);
        }
        if (index !== undefined && helpers_core.isArray(value)) {
          value = value[index];
        }
        if (value !== undefined) {
          return value;
        }
      }
    }
  };
  
  var helpers$1 = helpers_core;
  var easing = helpers_easing;
  var canvas = helpers_canvas;
  var options = helpers_options;
  helpers$1.easing = easing;
  helpers$1.canvas = canvas;
  helpers$1.options = options;
  
  function interpolate(start, view, model, ease) {
    var keys = Object.keys(model);
    var i, ilen, key, actual, origin, target, type, c0, c1;
  
    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
  
      target = model[key];
  
      // if a value is added to the model after pivot() has been called, the view
      // doesn't contain it, so let's initialize the view to the target value.
      if (!view.hasOwnProperty(key)) {
        view[key] = target;
      }
  
      actual = view[key];
  
      if (actual === target || key[0] === '_') {
        continue;
      }
  
      if (!start.hasOwnProperty(key)) {
        start[key] = actual;
      }
  
      origin = start[key];
  
      type = typeof target;
  
      if (type === typeof origin) {
        if (type === 'string') {
          c0 = chartjsColor(origin);
          if (c0.valid) {
            c1 = chartjsColor(target);
            if (c1.valid) {
              view[key] = c1.mix(c0, ease).rgbString();
              continue;
            }
          }
        } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
          view[key] = origin + (target - origin) * ease;
          continue;
        }
      }
  
      view[key] = target;
    }
  }
  
  var Element = function(configuration) {
    helpers$1.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };
  
  helpers$1.extend(Element.prototype, {
  
    initialize: function() {
      this.hidden = false;
    },
  
    pivot: function() {
      var me = this;
      if (!me._view) {
        me._view = helpers$1.clone(me._model);
      }
      me._start = {};
      return me;
    },
  
    transition: function(ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view;
  
      // No animation -> No Transition
      if (!model || ease === 1) {
        me._view = model;
        me._start = null;
        return me;
      }
  
      if (!view) {
        view = me._view = {};
      }
  
      if (!start) {
        start = me._start = {};
      }
  
      interpolate(start, view, model, ease);
  
      return me;
    },
  
    tooltipPosition: function() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
  
    hasValue: function() {
      return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
    }
  });
  
  Element.extend = helpers$1.inherits;
  
  var core_element = Element;
  
  var exports$2 = core_element.extend({
    chart: null, // the animation associated chart instance
    currentStep: 0, // the current animation step
    numSteps: 60, // default number of steps
    easing: '', // the easing to use for this animation
    render: null, // render function used by the animation service
  
    onAnimationProgress: null, // user specified callback to fire on each step of the animation
    onAnimationComplete: null, // user specified callback to fire when the animation finishes
  });
  
  var core_animation = exports$2;
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use Chart.Animation instead
   * @prop Chart.Animation#animationObject
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(exports$2.prototype, 'animationObject', {
    get: function() {
      return this;
    }
  });
  
  /**
   * Provided for backward compatibility, use Chart.Animation#chart instead
   * @prop Chart.Animation#chartInstance
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(exports$2.prototype, 'chartInstance', {
    get: function() {
      return this.chart;
    },
    set: function(value) {
      this.chart = value;
    }
  });
  
  core_defaults._set('global', {
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
      onProgress: helpers$1.noop,
      onComplete: helpers$1.noop
    }
  });
  
  var core_animations = {
    animations: [],
    request: null,
  
    /**
     * @param {Chart} chart - The chart to animate.
     * @param {Chart.Animation} animation - The animation that we will animate.
     * @param {number} duration - The animation duration in ms.
     * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
     */
    addAnimation: function(chart, animation, duration, lazy) {
      var animations = this.animations;
      var i, ilen;
  
      animation.chart = chart;
      animation.startTime = Date.now();
      animation.duration = duration;
  
      if (!lazy) {
        chart.animating = true;
      }
  
      for (i = 0, ilen = animations.length; i < ilen; ++i) {
        if (animations[i].chart === chart) {
          animations[i] = animation;
          return;
        }
      }
  
      animations.push(animation);
  
      // If there are no animations queued, manually kickstart a digest, for lack of a better word
      if (animations.length === 1) {
        this.requestAnimationFrame();
      }
    },
  
    cancelAnimation: function(chart) {
      var index = helpers$1.findIndex(this.animations, function(animation) {
        return animation.chart === chart;
      });
  
      if (index !== -1) {
        this.animations.splice(index, 1);
        chart.animating = false;
      }
    },
  
    requestAnimationFrame: function() {
      var me = this;
      if (me.request === null) {
        // Skip animation frame requests until the active one is executed.
        // This can happen when processing mouse events, e.g. 'mousemove'
        // and 'mouseout' events will trigger multiple renders.
        me.request = helpers$1.requestAnimFrame.call(window, function() {
          me.request = null;
          me.startDigest();
        });
      }
    },
  
    /**
     * @private
     */
    startDigest: function() {
      var me = this;
  
      me.advance();
  
      // Do we have more stuff to animate?
      if (me.animations.length > 0) {
        me.requestAnimationFrame();
      }
    },
  
    /**
     * @private
     */
    advance: function() {
      var animations = this.animations;
      var animation, chart, numSteps, nextStep;
      var i = 0;
  
      // 1 animation per chart, so we are looping charts here
      while (i < animations.length) {
        animation = animations[i];
        chart = animation.chart;
        numSteps = animation.numSteps;
  
        // Make sure that currentStep starts at 1
        // https://github.com/chartjs/Chart.js/issues/6104
        nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
        animation.currentStep = Math.min(nextStep, numSteps);
  
        helpers$1.callback(animation.render, [chart, animation], chart);
        helpers$1.callback(animation.onAnimationProgress, [animation], chart);
  
        if (animation.currentStep >= numSteps) {
          helpers$1.callback(animation.onAnimationComplete, [animation], chart);
          chart.animating = false;
          animations.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  };
  
  var resolve = helpers$1.options.resolve;
  
  var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
  
  /**
   * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
   * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
   * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
   */
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }
  
    Object.defineProperty(array, '_chartjs', {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });
  
    arrayEvents.forEach(function(key) {
      var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
      var base = array[key];
  
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function() {
          var args = Array.prototype.slice.call(arguments);
          var res = base.apply(this, args);
  
          helpers$1.each(array._chartjs.listeners, function(object) {
            if (typeof object[method] === 'function') {
              object[method].apply(object, args);
            }
          });
  
          return res;
        }
      });
    });
  }
  
  /**
   * Removes the given array event listener and cleanup extra attached properties (such as
   * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
   */
  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;
    if (!stub) {
      return;
    }
  
    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  
    if (listeners.length > 0) {
      return;
    }
  
    arrayEvents.forEach(function(key) {
      delete array[key];
    });
  
    delete array._chartjs;
  }
  
  // Base class for all dataset controllers (line, bar, etc)
  var DatasetController = function(chart, datasetIndex) {
    this.initialize(chart, datasetIndex);
  };
  
  helpers$1.extend(DatasetController.prototype, {
  
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.Line).
     * @type {Chart.core.element}
     */
    datasetElementType: null,
  
    /**
     * Element type used to generate a meta data (e.g. Chart.element.Point).
     * @type {Chart.core.element}
     */
    dataElementType: null,
  
    initialize: function(chart, datasetIndex) {
      var me = this;
      me.chart = chart;
      me.index = datasetIndex;
      me.linkScales();
      me.addElements();
    },
  
    updateIndex: function(datasetIndex) {
      this.index = datasetIndex;
    },
  
    linkScales: function() {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();
  
      if (meta.xAxisID === null || !(meta.xAxisID in me.chart.scales)) {
        meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
      }
      if (meta.yAxisID === null || !(meta.yAxisID in me.chart.scales)) {
        meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
      }
    },
  
    getDataset: function() {
      return this.chart.data.datasets[this.index];
    },
  
    getMeta: function() {
      return this.chart.getDatasetMeta(this.index);
    },
  
    getScaleForId: function(scaleID) {
      return this.chart.scales[scaleID];
    },
  
    /**
     * @private
     */
    _getValueScaleId: function() {
      return this.getMeta().yAxisID;
    },
  
    /**
     * @private
     */
    _getIndexScaleId: function() {
      return this.getMeta().xAxisID;
    },
  
    /**
     * @private
     */
    _getValueScale: function() {
      return this.getScaleForId(this._getValueScaleId());
    },
  
    /**
     * @private
     */
    _getIndexScale: function() {
      return this.getScaleForId(this._getIndexScaleId());
    },
  
    reset: function() {
      this.update(true);
    },
  
    /**
     * @private
     */
    destroy: function() {
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
    },
  
    createMetaDataset: function() {
      var me = this;
      var type = me.datasetElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index
      });
    },
  
    createMetaData: function(index) {
      var me = this;
      var type = me.dataElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index,
        _index: index
      });
    },
  
    addElements: function() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data || [];
      var metaData = meta.data;
      var i, ilen;
  
      for (i = 0, ilen = data.length; i < ilen; ++i) {
        metaData[i] = metaData[i] || me.createMetaData(i);
      }
  
      meta.dataset = meta.dataset || me.createMetaDataset();
    },
  
    addElementAndReset: function(index) {
      var element = this.createMetaData(index);
      this.getMeta().data.splice(index, 0, element);
      this.updateElement(element, index, true);
    },
  
    buildOrUpdateElements: function() {
      var me = this;
      var dataset = me.getDataset();
      var data = dataset.data || (dataset.data = []);
  
      // In order to correctly handle data addition/deletion animation (an thus simulate
      // real-time charts), we need to monitor these data modifications and synchronize
      // the internal meta data accordingly.
      if (me._data !== data) {
        if (me._data) {
          // This case happens when the user replaced the data array instance.
          unlistenArrayEvents(me._data, me);
        }
  
        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, me);
        }
        me._data = data;
      }
  
      // Re-sync meta data in case the user replaced the data array or if we missed
      // any updates and so make sure that we handle number of datapoints changing.
      me.resyncElements();
    },
  
    update: helpers$1.noop,
  
    transition: function(easingValue) {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;
  
      for (; i < ilen; ++i) {
        elements[i].transition(easingValue);
      }
  
      if (meta.dataset) {
        meta.dataset.transition(easingValue);
      }
    },
  
    draw: function() {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;
  
      if (meta.dataset) {
        meta.dataset.draw();
      }
  
      for (; i < ilen; ++i) {
        elements[i].draw();
      }
    },
  
    removeHoverStyle: function(element) {
      helpers$1.merge(element._model, element.$previousStyle || {});
      delete element.$previousStyle;
    },
  
    setHoverStyle: function(element) {
      var dataset = this.chart.data.datasets[element._datasetIndex];
      var index = element._index;
      var custom = element.custom || {};
      var model = element._model;
      var getHoverColor = helpers$1.getHoverColor;
  
      element.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
  
      model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
      model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
      model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
    },
  
    /**
     * @private
     */
    resyncElements: function() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data;
      var numMeta = meta.data.length;
      var numData = data.length;
  
      if (numData < numMeta) {
        meta.data.splice(numData, numMeta - numData);
      } else if (numData > numMeta) {
        me.insertElements(numMeta, numData - numMeta);
      }
    },
  
    /**
     * @private
     */
    insertElements: function(start, count) {
      for (var i = 0; i < count; ++i) {
        this.addElementAndReset(start + i);
      }
    },
  
    /**
     * @private
     */
    onDataPush: function() {
      var count = arguments.length;
      this.insertElements(this.getDataset().data.length - count, count);
    },
  
    /**
     * @private
     */
    onDataPop: function() {
      this.getMeta().data.pop();
    },
  
    /**
     * @private
     */
    onDataShift: function() {
      this.getMeta().data.shift();
    },
  
    /**
     * @private
     */
    onDataSplice: function(start, count) {
      this.getMeta().data.splice(start, count);
      this.insertElements(start, arguments.length - 2);
    },
  
    /**
     * @private
     */
    onDataUnshift: function() {
      this.insertElements(0, arguments.length);
    }
  });
  
  DatasetController.extend = helpers$1.inherits;
  
  var core_datasetController = DatasetController;
  
  core_defaults._set('global', {
    elements: {
      arc: {
        backgroundColor: core_defaults.global.defaultColor,
        borderColor: '#fff',
        borderWidth: 2,
        borderAlign: 'center'
      }
    }
  });
  
  var element_arc = core_element.extend({
    inLabelRange: function(mouseX) {
      var vm = this._view;
  
      if (vm) {
        return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
      }
      return false;
    },
  
    inRange: function(chartX, chartY) {
      var vm = this._view;
  
      if (vm) {
        var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
        var	angle = pointRelativePosition.angle;
        var distance = pointRelativePosition.distance;
  
        // Sanitise angle range
        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;
        while (endAngle < startAngle) {
          endAngle += 2.0 * Math.PI;
        }
        while (angle > endAngle) {
          angle -= 2.0 * Math.PI;
        }
        while (angle < startAngle) {
          angle += 2.0 * Math.PI;
        }
  
        // Check if within the range of the open/close angle
        var betweenAngles = (angle >= startAngle && angle <= endAngle);
        var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);
  
        return (betweenAngles && withinRadius);
      }
      return false;
    },
  
    getCenterPoint: function() {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius
      };
    },
  
    getArea: function() {
      var vm = this._view;
      return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
    },
  
    tooltipPosition: function() {
      var vm = this._view;
      var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
      var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
  
      return {
        x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
        y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
    },
  
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var sA = vm.startAngle;
      var eA = vm.endAngle;
      var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
      var angleMargin;
  
      ctx.save();
  
      ctx.beginPath();
      ctx.arc(vm.x, vm.y, Math.max(vm.outerRadius - pixelMargin, 0), sA, eA);
      ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
      ctx.closePath();
  
      ctx.fillStyle = vm.backgroundColor;
      ctx.fill();
  
      if (vm.borderWidth) {
        if (vm.borderAlign === 'inner') {
          // Draw an inner border by cliping the arc and drawing a double-width border
          // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
          ctx.beginPath();
          angleMargin = pixelMargin / vm.outerRadius;
          ctx.arc(vm.x, vm.y, vm.outerRadius, sA - angleMargin, eA + angleMargin);
          if (vm.innerRadius > pixelMargin) {
            angleMargin = pixelMargin / vm.innerRadius;
            ctx.arc(vm.x, vm.y, vm.innerRadius - pixelMargin, eA + angleMargin, sA - angleMargin, true);
          } else {
            ctx.arc(vm.x, vm.y, pixelMargin, eA + Math.PI / 2, sA - Math.PI / 2);
          }
          ctx.closePath();
          ctx.clip();
  
          ctx.beginPath();
          ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
          ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
          ctx.closePath();
  
          ctx.lineWidth = vm.borderWidth * 2;
          ctx.lineJoin = 'round';
        } else {
          ctx.lineWidth = vm.borderWidth;
          ctx.lineJoin = 'bevel';
        }
  
        ctx.strokeStyle = vm.borderColor;
        ctx.stroke();
      }
  
      ctx.restore();
    }
  });
  
  var valueOrDefault$1 = helpers$1.valueOrDefault;
  
  var defaultColor = core_defaults.global.defaultColor;
  
  core_defaults._set('global', {
    elements: {
      line: {
        tension: 0.4,
        backgroundColor: defaultColor,
        borderWidth: 3,
        borderColor: defaultColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        capBezierPoints: true,
        fill: true, // do we fill in the area between the line and its base axis
      }
    }
  });
  
  var element_line = core_element.extend({
    draw: function() {
      var me = this;
      var vm = me._view;
      var ctx = me._chart.ctx;
      var spanGaps = vm.spanGaps;
      var points = me._children.slice(); // clone array
      var globalDefaults = core_defaults.global;
      var globalOptionLineElements = globalDefaults.elements.line;
      var lastDrawnIndex = -1;
      var index, current, previous, currentVM;
  
      // If we are looping, adding the first point again
      if (me._loop && points.length) {
        points.push(points[0]);
      }
  
      ctx.save();
  
      // Stroke Line Options
      ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;
  
      // IE 9 and 10 do not support line dash
      if (ctx.setLineDash) {
        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
      }
  
      ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
      ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
      ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
  
      // Stroke Line
      ctx.beginPath();
      lastDrawnIndex = -1;
  
      for (index = 0; index < points.length; ++index) {
        current = points[index];
        previous = helpers$1.previousItem(points, index);
        currentVM = current._view;
  
        // First point moves to it's starting position no matter what
        if (index === 0) {
          if (!currentVM.skip) {
            ctx.moveTo(currentVM.x, currentVM.y);
            lastDrawnIndex = index;
          }
        } else {
          previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];
  
          if (!currentVM.skip) {
            if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
              // There was a gap and this is the first point after the gap
              ctx.moveTo(currentVM.x, currentVM.y);
            } else {
              // Line to next point
              helpers$1.canvas.lineTo(ctx, previous._view, current._view);
            }
            lastDrawnIndex = index;
          }
        }
      }
  
      ctx.stroke();
      ctx.restore();
    }
  });
  
  var valueOrDefault$2 = helpers$1.valueOrDefault;
  
  var defaultColor$1 = core_defaults.global.defaultColor;
  
  core_defaults._set('global', {
    elements: {
      point: {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: defaultColor$1,
        borderColor: defaultColor$1,
        borderWidth: 1,
        // Hover
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });
  
  function xRange(mouseX) {
    var vm = this._view;
    return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
  }
  
  function yRange(mouseY) {
    var vm = this._view;
    return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
  }
  
  var element_point = core_element.extend({
    inRange: function(mouseX, mouseY) {
      var vm = this._view;
      return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
    },
  
    inLabelRange: xRange,
    inXRange: xRange,
    inYRange: yRange,
  
    getCenterPoint: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    },
  
    getArea: function() {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
  
    tooltipPosition: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth
      };
    },
  
    draw: function(chartArea) {
      var vm = this._view;
      var ctx = this._chart.ctx;
      var pointStyle = vm.pointStyle;
      var rotation = vm.rotation;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow
  
      if (vm.skip) {
        return;
      }
  
      // Clipping for Points.
      if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
        ctx.strokeStyle = vm.borderColor || defaultColor;
        ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
        ctx.fillStyle = vm.backgroundColor || defaultColor;
        helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
      }
    }
  });
  
  var defaultColor$2 = core_defaults.global.defaultColor;
  
  core_defaults._set('global', {
    elements: {
      rectangle: {
        backgroundColor: defaultColor$2,
        borderColor: defaultColor$2,
        borderSkipped: 'bottom',
        borderWidth: 0
      }
    }
  });
  
  function isVertical(vm) {
    return vm && vm.width !== undefined;
  }
  
  /**
   * Helper function to get the bounds of the bar regardless of the orientation
   * @param bar {Chart.Element.Rectangle} the bar
   * @return {Bounds} bounds of the bar
   * @private
   */
  function getBarBounds(vm) {
    var x1, x2, y1, y2, half;
  
    if (isVertical(vm)) {
      half = vm.width / 2;
      x1 = vm.x - half;
      x2 = vm.x + half;
      y1 = Math.min(vm.y, vm.base);
      y2 = Math.max(vm.y, vm.base);
    } else {
      half = vm.height / 2;
      x1 = Math.min(vm.x, vm.base);
      x2 = Math.max(vm.x, vm.base);
      y1 = vm.y - half;
      y2 = vm.y + half;
    }
  
    return {
      left: x1,
      top: y1,
      right: x2,
      bottom: y2
    };
  }
  
  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }
  
  function parseBorderSkipped(vm) {
    var edge = vm.borderSkipped;
    var res = {};
  
    if (!edge) {
      return res;
    }
  
    if (vm.horizontal) {
      if (vm.base > vm.x) {
        edge = swap(edge, 'left', 'right');
      }
    } else if (vm.base < vm.y) {
      edge = swap(edge, 'bottom', 'top');
    }
  
    res[edge] = true;
    return res;
  }
  
  function parseBorderWidth(vm, maxW, maxH) {
    var value = vm.borderWidth;
    var skip = parseBorderSkipped(vm);
    var t, r, b, l;
  
    if (helpers$1.isObject(value)) {
      t = +value.top || 0;
      r = +value.right || 0;
      b = +value.bottom || 0;
      l = +value.left || 0;
    } else {
      t = r = b = l = +value || 0;
    }
  
    return {
      t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,
      r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,
      b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
      l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l
    };
  }
  
  function boundingRects(vm) {
    var bounds = getBarBounds(vm);
    var width = bounds.right - bounds.left;
    var height = bounds.bottom - bounds.top;
    var border = parseBorderWidth(vm, width / 2, height / 2);
  
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b
      }
    };
  }
  
  function inRange(vm, x, y) {
    var skipX = x === null;
    var skipY = y === null;
    var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);
  
    return bounds
      && (skipX || x >= bounds.left && x <= bounds.right)
      && (skipY || y >= bounds.top && y <= bounds.bottom);
  }
  
  var element_rectangle = core_element.extend({
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var rects = boundingRects(vm);
      var outer = rects.outer;
      var inner = rects.inner;
  
      ctx.fillStyle = vm.backgroundColor;
      ctx.fillRect(outer.x, outer.y, outer.w, outer.h);
  
      if (outer.w === inner.w && outer.h === inner.h) {
        return;
      }
  
      ctx.save();
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.fillStyle = vm.borderColor;
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fill('evenodd');
      ctx.restore();
    },
  
    height: function() {
      var vm = this._view;
      return vm.base - vm.y;
    },
  
    inRange: function(mouseX, mouseY) {
      return inRange(this._view, mouseX, mouseY);
    },
  
    inLabelRange: function(mouseX, mouseY) {
      var vm = this._view;
      return isVertical(vm)
        ? inRange(vm, mouseX, null)
        : inRange(vm, null, mouseY);
    },
  
    inXRange: function(mouseX) {
      return inRange(this._view, mouseX, null);
    },
  
    inYRange: function(mouseY) {
      return inRange(this._view, null, mouseY);
    },
  
    getCenterPoint: function() {
      var vm = this._view;
      var x, y;
      if (isVertical(vm)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }
  
      return {x: x, y: y};
    },
  
    getArea: function() {
      var vm = this._view;
  
      return isVertical(vm)
        ? vm.width * Math.abs(vm.y - vm.base)
        : vm.height * Math.abs(vm.x - vm.base);
    },
  
    tooltipPosition: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  });
  
  var elements = {};
  var Arc = element_arc;
  var Line = element_line;
  var Point = element_point;
  var Rectangle = element_rectangle;
  elements.Arc = Arc;
  elements.Line = Line;
  elements.Point = Point;
  elements.Rectangle = Rectangle;
  
  var resolve$1 = helpers$1.options.resolve;
  
  core_defaults._set('bar', {
    hover: {
      mode: 'label'
    },
  
    scales: {
      xAxes: [{
        type: 'category',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }],
  
      yAxes: [{
        type: 'linear'
      }]
    }
  });
  
  /**
   * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
   * @private
   */
  function computeMinSampleSize(scale, pixels) {
    var min = scale.isHorizontal() ? scale.width : scale.height;
    var ticks = scale.getTicks();
    var prev, curr, i, ilen;
  
    for (i = 1, ilen = pixels.length; i < ilen; ++i) {
      min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
    }
  
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      min = i > 0 ? Math.min(min, curr - prev) : min;
      prev = curr;
    }
  
    return min;
  }
  
  /**
   * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
   * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
   * mode currently always generates bars equally sized (until we introduce scriptable options?).
   * @private
   */
  function computeFitCategoryTraits(index, ruler, options) {
    var thickness = options.barThickness;
    var count = ruler.stackCount;
    var curr = ruler.pixels[index];
    var size, ratio;
  
    if (helpers$1.isNullOrUndef(thickness)) {
      size = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      // When bar thickness is enforced, category and bar percentages are ignored.
      // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
      // and deprecate barPercentage since this value is ignored when thickness is absolute.
      size = thickness * count;
      ratio = 1;
    }
  
    return {
      chunk: size / count,
      ratio: ratio,
      start: curr - (size / 2)
    };
  }
  
  /**
   * Computes an "optimal" category that globally arranges bars side by side (no gap when
   * percentage options are 1), based on the previous and following categories. This mode
   * generates bars with different widths when data are not evenly spaced.
   * @private
   */
  function computeFlexCategoryTraits(index, ruler, options) {
    var pixels = ruler.pixels;
    var curr = pixels[index];
    var prev = index > 0 ? pixels[index - 1] : null;
    var next = index < pixels.length - 1 ? pixels[index + 1] : null;
    var percent = options.categoryPercentage;
    var start, size;
  
    if (prev === null) {
      // first data: its size is double based on the next point or,
      // if it's also the last data, we use the scale size.
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
  
    if (next === null) {
      // last data: its size is also double based on the previous point.
      next = curr + curr - prev;
    }
  
    start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    size = Math.abs(next - prev) / 2 * percent;
  
    return {
      chunk: size / ruler.stackCount,
      ratio: options.barPercentage,
      start: start
    };
  }
  
  var controller_bar = core_datasetController.extend({
  
    dataElementType: elements.Rectangle,
  
    initialize: function() {
      var me = this;
      var meta;
  
      core_datasetController.prototype.initialize.apply(me, arguments);
  
      meta = me.getMeta();
      meta.stack = me.getDataset().stack;
      meta.bar = true;
    },
  
    update: function(reset) {
      var me = this;
      var rects = me.getMeta().data;
      var i, ilen;
  
      me._ruler = me.getRuler();
  
      for (i = 0, ilen = rects.length; i < ilen; ++i) {
        me.updateElement(rects[i], i, reset);
      }
    },
  
    updateElement: function(rectangle, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();
      var options = me._resolveElementOptions(rectangle, index);
  
      rectangle._xScale = me.getScaleForId(meta.xAxisID);
      rectangle._yScale = me.getScaleForId(meta.yAxisID);
      rectangle._datasetIndex = me.index;
      rectangle._index = index;
      rectangle._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderSkipped: options.borderSkipped,
        borderWidth: options.borderWidth,
        datasetLabel: dataset.label,
        label: me.chart.data.labels[index]
      };
  
      me._updateElementGeometry(rectangle, index, reset);
  
      rectangle.pivot();
    },
  
    /**
     * @private
     */
    _updateElementGeometry: function(rectangle, index, reset) {
      var me = this;
      var model = rectangle._model;
      var vscale = me._getValueScale();
      var base = vscale.getBasePixel();
      var horizontal = vscale.isHorizontal();
      var ruler = me._ruler || me.getRuler();
      var vpixels = me.calculateBarValuePixels(me.index, index);
      var ipixels = me.calculateBarIndexPixels(me.index, index, ruler);
  
      model.horizontal = horizontal;
      model.base = reset ? base : vpixels.base;
      model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
      model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
      model.height = horizontal ? ipixels.size : undefined;
      model.width = horizontal ? undefined : ipixels.size;
    },
  
    /**
     * Returns the stacks based on groups and bar visibility.
     * @param {number} [last] - The dataset index
     * @returns {string[]} The list of stack IDs
     * @private
     */
    _getStacks: function(last) {
      var me = this;
      var chart = me.chart;
      var scale = me._getIndexScale();
      var stacked = scale.options.stacked;
      var ilen = last === undefined ? chart.data.datasets.length : last + 1;
      var stacks = [];
      var i, meta;
  
      for (i = 0; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        if (meta.bar && chart.isDatasetVisible(i) &&
          (stacked === false ||
          (stacked === true && stacks.indexOf(meta.stack) === -1) ||
          (stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
          stacks.push(meta.stack);
        }
      }
  
      return stacks;
    },
  
    /**
     * Returns the effective number of stacks based on groups and bar visibility.
     * @private
     */
    getStackCount: function() {
      return this._getStacks().length;
    },
  
    /**
     * Returns the stack index for the given dataset based on groups and bar visibility.
     * @param {number} [datasetIndex] - The dataset index
     * @param {string} [name] - The stack name to find
     * @returns {number} The stack index
     * @private
     */
    getStackIndex: function(datasetIndex, name) {
      var stacks = this._getStacks(datasetIndex);
      var index = (name !== undefined)
        ? stacks.indexOf(name)
        : -1; // indexOf returns -1 if element is not present
  
      return (index === -1)
        ? stacks.length - 1
        : index;
    },
  
    /**
     * @private
     */
    getRuler: function() {
      var me = this;
      var scale = me._getIndexScale();
      var stackCount = me.getStackCount();
      var datasetIndex = me.index;
      var isHorizontal = scale.isHorizontal();
      var start = isHorizontal ? scale.left : scale.top;
      var end = start + (isHorizontal ? scale.width : scale.height);
      var pixels = [];
      var i, ilen, min;
  
      for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
        pixels.push(scale.getPixelForValue(null, i, datasetIndex));
      }
  
      min = helpers$1.isNullOrUndef(scale.options.barThickness)
        ? computeMinSampleSize(scale, pixels)
        : -1;
  
      return {
        min: min,
        pixels: pixels,
        start: start,
        end: end,
        stackCount: stackCount,
        scale: scale
      };
    },
  
    /**
     * Note: pixel values are not clamped to the scale area.
     * @private
     */
    calculateBarValuePixels: function(datasetIndex, index) {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var scale = me._getValueScale();
      var isHorizontal = scale.isHorizontal();
      var datasets = chart.data.datasets;
      var value = +scale.getRightValue(datasets[datasetIndex].data[index]);
      var minBarLength = scale.options.minBarLength;
      var stacked = scale.options.stacked;
      var stack = meta.stack;
      var start = 0;
      var i, imeta, ivalue, base, head, size;
  
      if (stacked || (stacked === undefined && stack !== undefined)) {
        for (i = 0; i < datasetIndex; ++i) {
          imeta = chart.getDatasetMeta(i);
  
          if (imeta.bar &&
            imeta.stack === stack &&
            imeta.controller._getValueScaleId() === scale.id &&
            chart.isDatasetVisible(i)) {
  
            ivalue = +scale.getRightValue(datasets[i].data[index]);
            if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
              start += ivalue;
            }
          }
        }
      }
  
      base = scale.getPixelForValue(start);
      head = scale.getPixelForValue(start + value);
      size = head - base;
  
      if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
        size = minBarLength;
        if (value >= 0 && !isHorizontal || value < 0 && isHorizontal) {
          head = base - minBarLength;
        } else {
          head = base + minBarLength;
        }
      }
  
      return {
        size: size,
        base: base,
        head: head,
        center: head + size / 2
      };
    },
  
    /**
     * @private
     */
    calculateBarIndexPixels: function(datasetIndex, index, ruler) {
      var me = this;
      var options = ruler.scale.options;
      var range = options.barThickness === 'flex'
        ? computeFlexCategoryTraits(index, ruler, options)
        : computeFitCategoryTraits(index, ruler, options);
  
      var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
      var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
      var size = Math.min(
        helpers$1.valueOrDefault(options.maxBarThickness, Infinity),
        range.chunk * range.ratio);
  
      return {
        base: center - size / 2,
        head: center + size / 2,
        center: center,
        size: size
      };
    },
  
    draw: function() {
      var me = this;
      var chart = me.chart;
      var scale = me._getValueScale();
      var rects = me.getMeta().data;
      var dataset = me.getDataset();
      var ilen = rects.length;
      var i = 0;
  
      helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);
  
      for (; i < ilen; ++i) {
        if (!isNaN(scale.getRightValue(dataset.data[i]))) {
          rects[i].draw();
        }
      }
  
      helpers$1.canvas.unclipArea(chart.ctx);
    },
  
    /**
     * @private
     */
    _resolveElementOptions: function(rectangle, index) {
      var me = this;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var dataset = datasets[me.index];
      var custom = rectangle.custom || {};
      var options = chart.options.elements.rectangle;
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var keys = [
        'backgroundColor',
        'borderColor',
        'borderSkipped',
        'borderWidth'
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$1([
          custom[key],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      return values;
    }
  });
  
  var valueOrDefault$3 = helpers$1.valueOrDefault;
  var resolve$2 = helpers$1.options.resolve;
  
  core_defaults._set('bubble', {
    hover: {
      mode: 'single'
    },
  
    scales: {
      xAxes: [{
        type: 'linear', // bubble should probably use a linear scale by default
        position: 'bottom',
        id: 'x-axis-0' // need an ID so datasets can reference the scale
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y-axis-0'
      }]
    },
  
    tooltips: {
      callbacks: {
        title: function() {
          // Title doesn't make sense for scatter since we format the data as a point
          return '';
        },
        label: function(item, data) {
          var datasetLabel = data.datasets[item.datasetIndex].label || '';
          var dataPoint = data.datasets[item.datasetIndex].data[item.index];
          return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
        }
      }
    }
  });
  
  var controller_bubble = core_datasetController.extend({
    /**
     * @protected
     */
    dataElementType: elements.Point,
  
    /**
     * @protected
     */
    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var points = meta.data;
  
      // Update Points
      helpers$1.each(points, function(point, index) {
        me.updateElement(point, index, reset);
      });
    },
  
    /**
     * @protected
     */
    updateElement: function(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var xScale = me.getScaleForId(meta.xAxisID);
      var yScale = me.getScaleForId(meta.yAxisID);
      var options = me._resolveElementOptions(point, index);
      var data = me.getDataset().data[index];
      var dsIndex = me.index;
  
      var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
      var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);
  
      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = dsIndex;
      point._index = index;
      point._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        hitRadius: options.hitRadius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        radius: reset ? 0 : options.radius,
        skip: custom.skip || isNaN(x) || isNaN(y),
        x: x,
        y: y,
      };
  
      point.pivot();
    },
  
    /**
     * @protected
     */
    setHoverStyle: function(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
  
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
  
      model.backgroundColor = valueOrDefault$3(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$3(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$3(options.hoverBorderWidth, options.borderWidth);
      model.radius = options.radius + options.hoverRadius;
    },
  
    /**
     * @private
     */
    _resolveElementOptions: function(point, index) {
      var me = this;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var dataset = datasets[me.index];
      var custom = point.custom || {};
      var options = chart.options.elements.point;
      var data = dataset.data[index];
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var keys = [
        'backgroundColor',
        'borderColor',
        'borderWidth',
        'hoverBackgroundColor',
        'hoverBorderColor',
        'hoverBorderWidth',
        'hoverRadius',
        'hitRadius',
        'pointStyle',
        'rotation'
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$2([
          custom[key],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      // Custom radius resolution
      values.radius = resolve$2([
        custom.radius,
        data ? data.r : undefined,
        dataset.radius,
        options.radius
      ], context, index);
  
      return values;
    }
  });
  
  var resolve$3 = helpers$1.options.resolve;
  var valueOrDefault$4 = helpers$1.valueOrDefault;
  
  core_defaults._set('doughnut', {
    animation: {
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false
    },
    hover: {
      mode: 'single'
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend">');
  
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
  
      if (datasets.length) {
        for (var i = 0; i < datasets[0].data.length; ++i) {
          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
          if (labels[i]) {
            text.push(labels[i]);
          }
          text.push('</li>');
        }
      }
  
      text.push('</ul>');
      return text.join('');
    },
    legend: {
      labels: {
        generateLabels: function(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function(label, i) {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc && arc.custom || {};
              var arcOpts = chart.options.elements.arc;
              var fill = resolve$3([custom.backgroundColor, ds.backgroundColor, arcOpts.backgroundColor], undefined, i);
              var stroke = resolve$3([custom.borderColor, ds.borderColor, arcOpts.borderColor], undefined, i);
              var bw = resolve$3([custom.borderWidth, ds.borderWidth, arcOpts.borderWidth], undefined, i);
  
              return {
                text: label,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
  
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }
          return [];
        }
      },
  
      onClick: function(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;
  
        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          // toggle visibility of index if exists
          if (meta.data[index]) {
            meta.data[index].hidden = !meta.data[index].hidden;
          }
        }
  
        chart.update();
      }
    },
  
    // The percentage of the chart that we cut out of the middle.
    cutoutPercentage: 50,
  
    // The rotation of the chart, where the first data arc begins.
    rotation: Math.PI * -0.5,
  
    // The total circumference of the chart.
    circumference: Math.PI * 2.0,
  
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function() {
          return '';
        },
        label: function(tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  
          if (helpers$1.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }
  
          return dataLabel;
        }
      }
    }
  });
  
  var controller_doughnut = core_datasetController.extend({
  
    dataElementType: elements.Arc,
  
    linkScales: helpers$1.noop,
  
    // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
    getRingIndex: function(datasetIndex) {
      var ringIndex = 0;
  
      for (var j = 0; j < datasetIndex; ++j) {
        if (this.chart.isDatasetVisible(j)) {
          ++ringIndex;
        }
      }
  
      return ringIndex;
    },
  
    update: function(reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var availableWidth = chartArea.right - chartArea.left;
      var availableHeight = chartArea.bottom - chartArea.top;
      var minSize = Math.min(availableWidth, availableHeight);
      var offset = {x: 0, y: 0};
      var meta = me.getMeta();
      var arcs = meta.data;
      var cutoutPercentage = opts.cutoutPercentage;
      var circumference = opts.circumference;
      var chartWeight = me._getRingWeight(me.index);
      var i, ilen;
  
      // If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
      if (circumference < Math.PI * 2.0) {
        var startAngle = opts.rotation % (Math.PI * 2.0);
        startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
        var endAngle = startAngle + circumference;
        var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
        var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
        var contains0 = (startAngle <= 0 && endAngle >= 0) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
        var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
        var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
        var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
        var cutout = cutoutPercentage / 100.0;
        var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
        var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
        var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
        minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
        offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
      }
  
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveElementOptions(arcs[i], i);
      }
  
      chart.borderWidth = me.getMaxBorderWidth();
      chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
      chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
      chart.offsetX = offset.x * chart.outerRadius;
      chart.offsetY = offset.y * chart.outerRadius;
  
      meta.total = me.calculateTotal();
  
      me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
      me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);
  
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        me.updateElement(arcs[i], i, reset);
      }
    },
  
    updateElement: function(arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var animationOpts = opts.animation;
      var centerX = (chartArea.left + chartArea.right) / 2;
      var centerY = (chartArea.top + chartArea.bottom) / 2;
      var startAngle = opts.rotation; // non reset case handled later
      var endAngle = opts.rotation; // non reset case handled later
      var dataset = me.getDataset();
      var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI));
      var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
      var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
      var options = arc._options || {};
  
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
  
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX + chart.offsetX,
          y: centerY + chart.offsetY,
          startAngle: startAngle,
          endAngle: endAngle,
          circumference: circumference,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
        }
      });
  
      var model = arc._model;
  
      // Set correct angles if not resetting
      if (!reset || !animationOpts.animateRotate) {
        if (index === 0) {
          model.startAngle = opts.rotation;
        } else {
          model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }
  
        model.endAngle = model.startAngle + model.circumference;
      }
  
      arc.pivot();
    },
  
    calculateTotal: function() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var total = 0;
      var value;
  
      helpers$1.each(meta.data, function(element, index) {
        value = dataset.data[index];
        if (!isNaN(value) && !element.hidden) {
          total += Math.abs(value);
        }
      });
  
      /* if (total === 0) {
        total = NaN;
      }*/
  
      return total;
    },
  
    calculateCircumference: function(value) {
      var total = this.getMeta().total;
      if (total > 0 && !isNaN(value)) {
        return (Math.PI * 2.0) * (Math.abs(value) / total);
      }
      return 0;
    },
  
    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function(arcs) {
      var me = this;
      var max = 0;
      var chart = me.chart;
      var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;
  
      if (!arcs) {
        // Find the outmost visible dataset
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;
            if (i !== me.index) {
              controller = meta.controller;
            }
            break;
          }
        }
      }
  
      if (!arcs) {
        return 0;
      }
  
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arc = arcs[i];
        options = controller ? controller._resolveElementOptions(arc, i) : arc._options;
        if (options.borderAlign !== 'inner') {
          borderWidth = options.borderWidth;
          hoverWidth = options.hoverBorderWidth;
  
          max = borderWidth > max ? borderWidth : max;
          max = hoverWidth > max ? hoverWidth : max;
        }
      }
      return max;
    },
  
    /**
     * @protected
     */
    setHoverStyle: function(arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
  
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
      };
  
      model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
    },
  
    /**
     * @private
     */
    _resolveElementOptions: function(arc, index) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var custom = arc.custom || {};
      var options = chart.options.elements.arc;
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var keys = [
        'backgroundColor',
        'borderColor',
        'borderWidth',
        'borderAlign',
        'hoverBackgroundColor',
        'hoverBorderColor',
        'hoverBorderWidth',
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$3([
          custom[key],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      return values;
    },
  
    /**
     * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
     * @private
     */
    _getRingWeightOffset: function(datasetIndex) {
      var ringWeightOffset = 0;
  
      for (var i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }
  
      return ringWeightOffset;
    },
  
    /**
     * @private
     */
    _getRingWeight: function(dataSetIndex) {
      return Math.max(valueOrDefault$4(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
    },
  
    /**
     * Returns the sum of all visibile data set weights.  This value can be 0.
     * @private
     */
    _getVisibleDatasetWeightTotal: function() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });
  
  core_defaults._set('horizontalBar', {
    hover: {
      mode: 'index',
      axis: 'y'
    },
  
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
  
      yAxes: [{
        type: 'category',
        position: 'left',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
  
    elements: {
      rectangle: {
        borderSkipped: 'left'
      }
    },
  
    tooltips: {
      mode: 'index',
      axis: 'y'
    }
  });
  
  var controller_horizontalBar = controller_bar.extend({
    /**
     * @private
     */
    _getValueScaleId: function() {
      return this.getMeta().xAxisID;
    },
  
    /**
     * @private
     */
    _getIndexScaleId: function() {
      return this.getMeta().yAxisID;
    }
  });
  
  var valueOrDefault$5 = helpers$1.valueOrDefault;
  var resolve$4 = helpers$1.options.resolve;
  var isPointInArea = helpers$1.canvas._isPointInArea;
  
  core_defaults._set('line', {
    showLines: true,
    spanGaps: false,
  
    hover: {
      mode: 'label'
    },
  
    scales: {
      xAxes: [{
        type: 'category',
        id: 'x-axis-0'
      }],
      yAxes: [{
        type: 'linear',
        id: 'y-axis-0'
      }]
    }
  });
  
  function lineEnabled(dataset, options) {
    return valueOrDefault$5(dataset.showLine, options.showLines);
  }
  
  var controller_line = core_datasetController.extend({
  
    datasetElementType: elements.Line,
  
    dataElementType: elements.Point,
  
    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var scale = me.getScaleForId(meta.yAxisID);
      var dataset = me.getDataset();
      var showLine = lineEnabled(dataset, me.chart.options);
      var i, ilen;
  
      // Update Line
      if (showLine) {
        // Compatibility: If the properties are defined with only the old name, use those values
        if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
          dataset.lineTension = dataset.tension;
        }
  
        // Utility
        line._scale = scale;
        line._datasetIndex = me.index;
        // Data
        line._children = points;
        // Model
        line._model = me._resolveLineOptions(line);
  
        line.pivot();
      }
  
      // Update Points
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }
  
      if (showLine && line._model.tension !== 0) {
        me.updateBezierControlPoints();
      }
  
      // Now pivot the point for animation
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
  
    updateElement: function(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var datasetIndex = me.index;
      var value = dataset.data[index];
      var yScale = me.getScaleForId(meta.yAxisID);
      var xScale = me.getScaleForId(meta.xAxisID);
      var lineModel = meta.dataset._model;
      var x, y;
  
      var options = me._resolvePointOptions(point, index);
  
      x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
      y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);
  
      // Utility
      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = datasetIndex;
      point._index = index;
  
      // Desired view properties
      point._model = {
        x: x,
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$5(custom.tension, lineModel ? lineModel.tension : 0),
        steppedLine: lineModel ? lineModel.steppedLine : false,
        // Tooltip
        hitRadius: options.hitRadius
      };
    },
  
    /**
     * @private
     */
    _resolvePointOptions: function(element, index) {
      var me = this;
      var chart = me.chart;
      var dataset = chart.data.datasets[me.index];
      var custom = element.custom || {};
      var options = chart.options.elements.point;
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var ELEMENT_OPTIONS = {
        backgroundColor: 'pointBackgroundColor',
        borderColor: 'pointBorderColor',
        borderWidth: 'pointBorderWidth',
        hitRadius: 'pointHitRadius',
        hoverBackgroundColor: 'pointHoverBackgroundColor',
        hoverBorderColor: 'pointHoverBorderColor',
        hoverBorderWidth: 'pointHoverBorderWidth',
        hoverRadius: 'pointHoverRadius',
        pointStyle: 'pointStyle',
        radius: 'pointRadius',
        rotation: 'pointRotation'
      };
      var keys = Object.keys(ELEMENT_OPTIONS);
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$4([
          custom[key],
          dataset[ELEMENT_OPTIONS[key]],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      return values;
    },
  
    /**
     * @private
     */
    _resolveLineOptions: function(element) {
      var me = this;
      var chart = me.chart;
      var dataset = chart.data.datasets[me.index];
      var custom = element.custom || {};
      var options = chart.options;
      var elementOptions = options.elements.line;
      var values = {};
      var i, ilen, key;
  
      var keys = [
        'backgroundColor',
        'borderWidth',
        'borderColor',
        'borderCapStyle',
        'borderDash',
        'borderDashOffset',
        'borderJoinStyle',
        'fill',
        'cubicInterpolationMode'
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$4([
          custom[key],
          dataset[key],
          elementOptions[key]
        ]);
      }
  
      // The default behavior of lines is to break at null values, according
      // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
      // This option gives lines the ability to span gaps
      values.spanGaps = valueOrDefault$5(dataset.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$5(dataset.lineTension, elementOptions.tension);
      values.steppedLine = resolve$4([custom.steppedLine, dataset.steppedLine, elementOptions.stepped]);
  
      return values;
    },
  
    calculatePointY: function(value, index, datasetIndex) {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var yScale = me.getScaleForId(meta.yAxisID);
      var sumPos = 0;
      var sumNeg = 0;
      var i, ds, dsMeta;
  
      if (yScale.options.stacked) {
        for (i = 0; i < datasetIndex; i++) {
          ds = chart.data.datasets[i];
          dsMeta = chart.getDatasetMeta(i);
          if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
            var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
            if (stackedRightValue < 0) {
              sumNeg += stackedRightValue || 0;
            } else {
              sumPos += stackedRightValue || 0;
            }
          }
        }
  
        var rightValue = Number(yScale.getRightValue(value));
        if (rightValue < 0) {
          return yScale.getPixelForValue(sumNeg + rightValue);
        }
        return yScale.getPixelForValue(sumPos + rightValue);
      }
  
      return yScale.getPixelForValue(value);
    },
  
    updateBezierControlPoints: function() {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var lineModel = meta.dataset._model;
      var area = chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints;
  
      // Only consider points that are drawn in case the spanGaps option is used
      if (lineModel.spanGaps) {
        points = points.filter(function(pt) {
          return !pt._model.skip;
        });
      }
  
      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }
  
      if (lineModel.cubicInterpolationMode === 'monotone') {
        helpers$1.splineCurveMonotone(points);
      } else {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          controlPoints = helpers$1.splineCurve(
            helpers$1.previousItem(points, i)._model,
            model,
            helpers$1.nextItem(points, i)._model,
            lineModel.tension
          );
          model.controlPointPreviousX = controlPoints.previous.x;
          model.controlPointPreviousY = controlPoints.previous.y;
          model.controlPointNextX = controlPoints.next.x;
          model.controlPointNextY = controlPoints.next.y;
        }
      }
  
      if (chart.options.elements.line.capBezierPoints) {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          if (isPointInArea(model, area)) {
            if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
              model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
              model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
            }
            if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
              model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
              model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
            }
          }
        }
      }
    },
  
    draw: function() {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var points = meta.data || [];
      var area = chart.chartArea;
      var ilen = points.length;
      var halfBorderWidth;
      var i = 0;
  
      if (lineEnabled(me.getDataset(), chart.options)) {
        halfBorderWidth = (meta.dataset._model.borderWidth || 0) / 2;
  
        helpers$1.canvas.clipArea(chart.ctx, {
          left: area.left,
          right: area.right,
          top: area.top - halfBorderWidth,
          bottom: area.bottom + halfBorderWidth
        });
  
        meta.dataset.draw();
  
        helpers$1.canvas.unclipArea(chart.ctx);
      }
  
      // Draw the points
      for (; i < ilen; ++i) {
        points[i].draw(area);
      }
    },
  
    /**
     * @protected
     */
    setHoverStyle: function(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
  
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
  
      model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$5(options.hoverRadius, options.radius);
    },
  });
  
  var resolve$5 = helpers$1.options.resolve;
  
  core_defaults._set('polarArea', {
    scale: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },
  
    // Boolean - Whether to animate the rotation of the chart
    animation: {
      animateRotate: true,
      animateScale: true
    },
  
    startAngle: -0.5 * Math.PI,
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend">');
  
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
  
      if (datasets.length) {
        for (var i = 0; i < datasets[0].data.length; ++i) {
          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
          if (labels[i]) {
            text.push(labels[i]);
          }
          text.push('</li>');
        }
      }
  
      text.push('</ul>');
      return text.join('');
    },
    legend: {
      labels: {
        generateLabels: function(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function(label, i) {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc.custom || {};
              var arcOpts = chart.options.elements.arc;
              var fill = resolve$5([custom.backgroundColor, ds.backgroundColor, arcOpts.backgroundColor], undefined, i);
              var stroke = resolve$5([custom.borderColor, ds.borderColor, arcOpts.borderColor], undefined, i);
              var bw = resolve$5([custom.borderWidth, ds.borderWidth, arcOpts.borderWidth], undefined, i);
  
              return {
                text: label,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
  
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }
          return [];
        }
      },
  
      onClick: function(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;
  
        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          meta.data[index].hidden = !meta.data[index].hidden;
        }
  
        chart.update();
      }
    },
  
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function() {
          return '';
        },
        label: function(item, data) {
          return data.labels[item.index] + ': ' + item.yLabel;
        }
      }
    }
  });
  
  var controller_polarArea = core_datasetController.extend({
  
    dataElementType: elements.Arc,
  
    linkScales: helpers$1.noop,
  
    update: function(reset) {
      var me = this;
      var dataset = me.getDataset();
      var meta = me.getMeta();
      var start = me.chart.options.startAngle || 0;
      var starts = me._starts = [];
      var angles = me._angles = [];
      var arcs = meta.data;
      var i, ilen, angle;
  
      me._updateRadius();
  
      meta.count = me.countVisibleElements();
  
      for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
        starts[i] = start;
        angle = me._computeAngle(i);
        angles[i] = angle;
        start += angle;
      }
  
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveElementOptions(arcs[i], i);
        me.updateElement(arcs[i], i, reset);
      }
    },
  
    /**
     * @private
     */
    _updateRadius: function() {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
  
      chart.outerRadius = Math.max(minSize / 2, 0);
      chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
  
      me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
      me.innerRadius = me.outerRadius - chart.radiusLength;
    },
  
    updateElement: function(arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var opts = chart.options;
      var animationOpts = opts.animation;
      var scale = chart.scale;
      var labels = chart.data.labels;
  
      var centerX = scale.xCenter;
      var centerY = scale.yCenter;
  
      // var negHalfPI = -0.5 * Math.PI;
      var datasetStartAngle = opts.startAngle;
      var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var startAngle = me._starts[index];
      var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);
  
      var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var options = arc._options || {};
  
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,
  
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius: reset ? resetRadius : distance,
          startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
          endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
          label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
        }
      });
  
      arc.pivot();
    },
  
    countVisibleElements: function() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var count = 0;
  
      helpers$1.each(meta.data, function(element, index) {
        if (!isNaN(dataset.data[index]) && !element.hidden) {
          count++;
        }
      });
  
      return count;
    },
  
    /**
     * @protected
     */
    setHoverStyle: function(arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      var valueOrDefault = helpers$1.valueOrDefault;
  
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
      };
  
      model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
    },
  
    /**
     * @private
     */
    _resolveElementOptions: function(arc, index) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var custom = arc.custom || {};
      var options = chart.options.elements.arc;
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var keys = [
        'backgroundColor',
        'borderColor',
        'borderWidth',
        'borderAlign',
        'hoverBackgroundColor',
        'hoverBorderColor',
        'hoverBorderWidth',
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$5([
          custom[key],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      return values;
    },
  
    /**
     * @private
     */
    _computeAngle: function(index) {
      var me = this;
      var count = this.getMeta().count;
      var dataset = me.getDataset();
      var meta = me.getMeta();
  
      if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
        return 0;
      }
  
      // Scriptable options
      var context = {
        chart: me.chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      return resolve$5([
        me.chart.options.elements.arc.angle,
        (2 * Math.PI) / count
      ], context, index);
    }
  });
  
  core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));
  core_defaults._set('pie', {
    cutoutPercentage: 0
  });
  
  // Pie charts are Doughnut chart with different defaults
  var controller_pie = controller_doughnut;
  
  var valueOrDefault$6 = helpers$1.valueOrDefault;
  var resolve$6 = helpers$1.options.resolve;
  
  core_defaults._set('radar', {
    scale: {
      type: 'radialLinear'
    },
    elements: {
      line: {
        tension: 0 // no bezier in radar
      }
    }
  });
  
  var controller_radar = core_datasetController.extend({
  
    datasetElementType: elements.Line,
  
    dataElementType: elements.Point,
  
    linkScales: helpers$1.noop,
  
    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var scale = me.chart.scale;
      var dataset = me.getDataset();
      var i, ilen;
  
      // Compatibility: If the properties are defined with only the old name, use those values
      if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
        dataset.lineTension = dataset.tension;
      }
  
      // Utility
      line._scale = scale;
      line._datasetIndex = me.index;
      // Data
      line._children = points;
      line._loop = true;
      // Model
      line._model = me._resolveLineOptions(line);
  
      line.pivot();
  
      // Update Points
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }
  
      // Update bezier control points
      me.updateBezierControlPoints();
  
      // Now pivot the point for animation
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
  
    updateElement: function(point, index, reset) {
      var me = this;
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var scale = me.chart.scale;
      var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
      var options = me._resolvePointOptions(point, index);
      var lineModel = me.getMeta().dataset._model;
      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y;
  
      // Utility
      point._scale = scale;
      point._options = options;
      point._datasetIndex = me.index;
      point._index = index;
  
      // Desired view properties
      point._model = {
        x: x, // value not used in dataset scale, but we want a consistent API between scales
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
  
        // Tooltip
        hitRadius: options.hitRadius
      };
    },
  
    /**
     * @private
     */
    _resolvePointOptions: function(element, index) {
      var me = this;
      var chart = me.chart;
      var dataset = chart.data.datasets[me.index];
      var custom = element.custom || {};
      var options = chart.options.elements.point;
      var values = {};
      var i, ilen, key;
  
      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
  
      var ELEMENT_OPTIONS = {
        backgroundColor: 'pointBackgroundColor',
        borderColor: 'pointBorderColor',
        borderWidth: 'pointBorderWidth',
        hitRadius: 'pointHitRadius',
        hoverBackgroundColor: 'pointHoverBackgroundColor',
        hoverBorderColor: 'pointHoverBorderColor',
        hoverBorderWidth: 'pointHoverBorderWidth',
        hoverRadius: 'pointHoverRadius',
        pointStyle: 'pointStyle',
        radius: 'pointRadius',
        rotation: 'pointRotation'
      };
      var keys = Object.keys(ELEMENT_OPTIONS);
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$6([
          custom[key],
          dataset[ELEMENT_OPTIONS[key]],
          dataset[key],
          options[key]
        ], context, index);
      }
  
      return values;
    },
  
    /**
     * @private
     */
    _resolveLineOptions: function(element) {
      var me = this;
      var chart = me.chart;
      var dataset = chart.data.datasets[me.index];
      var custom = element.custom || {};
      var options = chart.options.elements.line;
      var values = {};
      var i, ilen, key;
  
      var keys = [
        'backgroundColor',
        'borderWidth',
        'borderColor',
        'borderCapStyle',
        'borderDash',
        'borderDashOffset',
        'borderJoinStyle',
        'fill'
      ];
  
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        values[key] = resolve$6([
          custom[key],
          dataset[key],
          options[key]
        ]);
      }
  
      values.tension = valueOrDefault$6(dataset.lineTension, options.tension);
  
      return values;
    },
  
    updateBezierControlPoints: function() {
      var me = this;
      var meta = me.getMeta();
      var area = me.chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints;
  
      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }
  
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;
        controlPoints = helpers$1.splineCurve(
          helpers$1.previousItem(points, i, true)._model,
          model,
          helpers$1.nextItem(points, i, true)._model,
          model.tension
        );
  
        // Prevent the bezier going outside of the bounds of the graph
        model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
        model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
        model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
        model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
      }
    },
  
    setHoverStyle: function(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
  
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
  
      model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
    }
  });
  
  core_defaults._set('scatter', {
    hover: {
      mode: 'single'
    },
  
    scales: {
      xAxes: [{
        id: 'x-axis-1',    // need an ID so datasets can reference the scale
        type: 'linear',    // scatter should not use a category axis
        position: 'bottom'
      }],
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        position: 'left'
      }]
    },
  
    showLines: false,
  
    tooltips: {
      callbacks: {
        title: function() {
          return '';     // doesn't make sense for scatter since data are formatted as a point
        },
        label: function(item) {
          return '(' + item.xLabel + ', ' + item.yLabel + ')';
        }
      }
    }
  });
  
  // Scatter charts use line controllers
  var controller_scatter = controller_line;
  
  // NOTE export a map in which the key represents the controller type, not
  // the class, and so must be CamelCase in order to be correctly retrieved
  // by the controller in core.controller.js (`controllers[meta.type]`).
  
  var controllers = {
    bar: controller_bar,
    bubble: controller_bubble,
    doughnut: controller_doughnut,
    horizontalBar: controller_horizontalBar,
    line: controller_line,
    polarArea: controller_polarArea,
    pie: controller_pie,
    radar: controller_radar,
    scatter: controller_scatter
  };
  
  /**
   * Helper function to get relative position for an event
   * @param {Event|IEvent} event - The event to get the position for
   * @param {Chart} chart - The chart
   * @returns {object} the event position
   */
  function getRelativePosition(e, chart) {
    if (e.native) {
      return {
        x: e.x,
        y: e.y
      };
    }
  
    return helpers$1.getRelativePosition(e, chart);
  }
  
  /**
   * Helper function to traverse all of the visible elements in the chart
   * @param {Chart} chart - the chart
   * @param {function} handler - the callback to execute for each visible item
   */
  function parseVisibleItems(chart, handler) {
    var datasets = chart.data.datasets;
    var meta, i, j, ilen, jlen;
  
    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      if (!chart.isDatasetVisible(i)) {
        continue;
      }
  
      meta = chart.getDatasetMeta(i);
      for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
        var element = meta.data[j];
        if (!element._view.skip) {
          handler(element);
        }
      }
    }
  }
  
  /**
   * Helper function to get the items that intersect the event position
   * @param {ChartElement[]} items - elements to filter
   * @param {object} position - the point to be nearest to
   * @return {ChartElement[]} the nearest items
   */
  function getIntersectItems(chart, position) {
    var elements = [];
  
    parseVisibleItems(chart, function(element) {
      if (element.inRange(position.x, position.y)) {
        elements.push(element);
      }
    });
  
    return elements;
  }
  
  /**
   * Helper function to get the items nearest to the event position considering all visible items in teh chart
   * @param {Chart} chart - the chart to look at elements from
   * @param {object} position - the point to be nearest to
   * @param {boolean} intersect - if true, only consider items that intersect the position
   * @param {function} distanceMetric - function to provide the distance between points
   * @return {ChartElement[]} the nearest items
   */
  function getNearestItems(chart, position, intersect, distanceMetric) {
    var minDistance = Number.POSITIVE_INFINITY;
    var nearestItems = [];
  
    parseVisibleItems(chart, function(element) {
      if (intersect && !element.inRange(position.x, position.y)) {
        return;
      }
  
      var center = element.getCenterPoint();
      var distance = distanceMetric(position, center);
      if (distance < minDistance) {
        nearestItems = [element];
        minDistance = distance;
      } else if (distance === minDistance) {
        // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
      }
    });
  
    return nearestItems;
  }
  
  /**
   * Get a distance metric function for two points based on the
   * axis mode setting
   * @param {string} axis - the axis mode. x|y|xy
   */
  function getDistanceMetricForAxis(axis) {
    var useX = axis.indexOf('x') !== -1;
    var useY = axis.indexOf('y') !== -1;
  
    return function(pt1, pt2) {
      var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }
  
  function indexMode(chart, e, options) {
    var position = getRelativePosition(e, chart);
    // Default axis for index mode is 'x' to match old behaviour
    options.axis = options.axis || 'x';
    var distanceMetric = getDistanceMetricForAxis(options.axis);
    var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
    var elements = [];
  
    if (!items.length) {
      return [];
    }
  
    chart.data.datasets.forEach(function(dataset, datasetIndex) {
      if (chart.isDatasetVisible(datasetIndex)) {
        var meta = chart.getDatasetMeta(datasetIndex);
        var element = meta.data[items[0]._index];
  
        // don't count items that are skipped (null data)
        if (element && !element._view.skip) {
          elements.push(element);
        }
      }
    });
  
    return elements;
  }
  
  /**
   * @interface IInteractionOptions
   */
  /**
   * If true, only consider items that intersect the point
   * @name IInterfaceOptions#boolean
   * @type Boolean
   */
  
  /**
   * Contains interaction related functions
   * @namespace Chart.Interaction
   */
  var core_interaction = {
    // Helper function for different modes
    modes: {
      single: function(chart, e) {
        var position = getRelativePosition(e, chart);
        var elements = [];
  
        parseVisibleItems(chart, function(element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
            return elements;
          }
        });
  
        return elements.slice(0, 1);
      },
  
      /**
       * @function Chart.Interaction.modes.label
       * @deprecated since version 2.4.0
       * @todo remove at version 3
       * @private
       */
      label: indexMode,
  
      /**
       * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
       * @function Chart.Interaction.modes.index
       * @since v2.4.0
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      index: indexMode,
  
      /**
       * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect is false, we find the nearest item and return the items in that dataset
       * @function Chart.Interaction.modes.dataset
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      dataset: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
  
        if (items.length > 0) {
          items = chart.getDatasetMeta(items[0]._datasetIndex).data;
        }
  
        return items;
      },
  
      /**
       * @function Chart.Interaction.modes.x-axis
       * @deprecated since version 2.4.0. Use index mode and intersect == true
       * @todo remove at version 3
       * @private
       */
      'x-axis': function(chart, e) {
        return indexMode(chart, e, {intersect: false});
      },
  
      /**
       * Point mode returns all elements that hit test based on the event position
       * of the event
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      point: function(chart, e) {
        var position = getRelativePosition(e, chart);
        return getIntersectItems(chart, position);
      },
  
      /**
       * nearest mode returns the element closest to the point
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      nearest: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        return getNearestItems(chart, position, options.intersect, distanceMetric);
      },
  
      /**
       * x mode returns the elements that hit-test at the current x coordinate
       * @function Chart.Interaction.modes.x
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      x: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
  
        parseVisibleItems(chart, function(element) {
          if (element.inXRange(position.x)) {
            items.push(element);
          }
  
          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });
  
        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      },
  
      /**
       * y mode returns the elements that hit-test at the current y coordinate
       * @function Chart.Interaction.modes.y
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      y: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
  
        parseVisibleItems(chart, function(element) {
          if (element.inYRange(position.y)) {
            items.push(element);
          }
  
          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });
  
        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      }
    }
  };
  
  function filterByPosition(array, position) {
    return helpers$1.where(array, function(v) {
      return v.position === position;
    });
  }
  
  function sortByWeight(array, reverse) {
    array.forEach(function(v, i) {
      v._tmpIndex_ = i;
      return v;
    });
    array.sort(function(a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight ?
        v0._tmpIndex_ - v1._tmpIndex_ :
        v0.weight - v1.weight;
    });
    array.forEach(function(v) {
      delete v._tmpIndex_;
    });
  }
  
  function findMaxPadding(boxes) {
    var top = 0;
    var left = 0;
    var bottom = 0;
    var right = 0;
    helpers$1.each(boxes, function(box) {
      if (box.getPadding) {
        var boxPadding = box.getPadding();
        top = Math.max(top, boxPadding.top);
        left = Math.max(left, boxPadding.left);
        bottom = Math.max(bottom, boxPadding.bottom);
        right = Math.max(right, boxPadding.right);
      }
    });
    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right
    };
  }
  
  function addSizeByPosition(boxes, size) {
    helpers$1.each(boxes, function(box) {
      size[box.position] += box.isHorizontal() ? box.height : box.width;
    });
  }
  
  core_defaults._set('global', {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });
  
  /**
   * @interface ILayoutItem
   * @prop {string} position - The position of the item in the chart layout. Possible values are
   * 'left', 'top', 'right', 'bottom', and 'chartArea'
   * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
   * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
   * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
   * @prop {function} update - Takes two parameters: width and height. Returns size of item
   * @prop {function} getPadding -  Returns an object with padding on the edges
   * @prop {number} width - Width of item. Must be valid after update()
   * @prop {number} height - Height of item. Must be valid after update()
   * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
   * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
   * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
   * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
   */
  
  // The layout service is very self explanatory.  It's responsible for the layout within a chart.
  // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
  // It is this service's responsibility of carrying out that layout.
  var core_layouts = {
    defaults: {},
  
    /**
     * Register a box to a chart.
     * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
     * @param {Chart} chart - the chart to use
     * @param {ILayoutItem} item - the item to add to be layed out
     */
    addBox: function(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }
  
      // initialize item with default values
      item.fullWidth = item.fullWidth || false;
      item.position = item.position || 'top';
      item.weight = item.weight || 0;
  
      chart.boxes.push(item);
    },
  
    /**
     * Remove a layoutItem from a chart
     * @param {Chart} chart - the chart to remove the box from
     * @param {ILayoutItem} layoutItem - the item to remove from the layout
     */
    removeBox: function(chart, layoutItem) {
      var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },
  
    /**
     * Sets (or updates) options on the given `item`.
     * @param {Chart} chart - the chart in which the item lives (or will be added to)
     * @param {ILayoutItem} item - the item to configure with the given options
     * @param {object} options - the new item options.
     */
    configure: function(chart, item, options) {
      var props = ['fullWidth', 'position', 'weight'];
      var ilen = props.length;
      var i = 0;
      var prop;
  
      for (; i < ilen; ++i) {
        prop = props[i];
        if (options.hasOwnProperty(prop)) {
          item[prop] = options[prop];
        }
      }
    },
  
    /**
     * Fits boxes of the given chart into the given size by having each box measure itself
     * then running a fitting algorithm
     * @param {Chart} chart - the chart
     * @param {number} width - the width to fit into
     * @param {number} height - the height to fit into
     */
    update: function(chart, width, height) {
      if (!chart) {
        return;
      }
  
      var layoutOptions = chart.options.layout || {};
      var padding = helpers$1.options.toPadding(layoutOptions.padding);
      var leftPadding = padding.left;
      var rightPadding = padding.right;
      var topPadding = padding.top;
      var bottomPadding = padding.bottom;
  
      var leftBoxes = filterByPosition(chart.boxes, 'left');
      var rightBoxes = filterByPosition(chart.boxes, 'right');
      var topBoxes = filterByPosition(chart.boxes, 'top');
      var bottomBoxes = filterByPosition(chart.boxes, 'bottom');
      var chartAreaBoxes = filterByPosition(chart.boxes, 'chartArea');
  
      // Sort boxes by weight. A higher weight is further away from the chart area
      sortByWeight(leftBoxes, true);
      sortByWeight(rightBoxes, false);
      sortByWeight(topBoxes, true);
      sortByWeight(bottomBoxes, false);
  
      var verticalBoxes = leftBoxes.concat(rightBoxes);
      var horizontalBoxes = topBoxes.concat(bottomBoxes);
      var outerBoxes = verticalBoxes.concat(horizontalBoxes);
  
      // Essentially we now have any number of boxes on each of the 4 sides.
      // Our canvas looks like the following.
      // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
      // B1 is the bottom axis
      // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
      // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
      // an error will be thrown.
      //
      // |----------------------------------------------------|
      // |                  T1 (Full Width)                   |
      // |----------------------------------------------------|
      // |    |    |                 T2                  |    |
      // |    |----|-------------------------------------|----|
      // |    |    | C1 |                           | C2 |    |
      // |    |    |----|                           |----|    |
      // |    |    |                                     |    |
      // | L1 | L2 |           ChartArea (C0)            | R1 |
      // |    |    |                                     |    |
      // |    |    |----|                           |----|    |
      // |    |    | C3 |                           | C4 |    |
      // |    |----|-------------------------------------|----|
      // |    |    |                 B1                  |    |
      // |----------------------------------------------------|
      // |                  B2 (Full Width)                   |
      // |----------------------------------------------------|
      //
      // What we do to find the best sizing, we do the following
      // 1. Determine the minimum size of the chart area.
      // 2. Split the remaining width equally between each vertical axis
      // 3. Split the remaining height equally between each horizontal axis
      // 4. Give each layout the maximum size it can be. The layout will return it's minimum size
      // 5. Adjust the sizes of each axis based on it's minimum reported size.
      // 6. Refit each axis
      // 7. Position each axis in the final location
      // 8. Tell the chart the final location of the chart area
      // 9. Tell any axes that overlay the chart area the positions of the chart area
  
      // Step 1
      var chartWidth = width - leftPadding - rightPadding;
      var chartHeight = height - topPadding - bottomPadding;
      var chartAreaWidth = chartWidth / 2; // min 50%
  
      // Step 2
      var verticalBoxWidth = (width - chartAreaWidth) / verticalBoxes.length;
  
      // Step 3
      // TODO re-limit horizontal axis height (this limit has affected only padding calculation since PR 1837)
      // var horizontalBoxHeight = (height - chartAreaHeight) / horizontalBoxes.length;
  
      // Step 4
      var maxChartAreaWidth = chartWidth;
      var maxChartAreaHeight = chartHeight;
      var outerBoxSizes = {top: topPadding, left: leftPadding, bottom: bottomPadding, right: rightPadding};
      var minBoxSizes = [];
      var maxPadding;
  
      function getMinimumBoxSize(box) {
        var minSize;
        var isHorizontal = box.isHorizontal();
  
        if (isHorizontal) {
          minSize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2);
          maxChartAreaHeight -= minSize.height;
        } else {
          minSize = box.update(verticalBoxWidth, maxChartAreaHeight);
          maxChartAreaWidth -= minSize.width;
        }
  
        minBoxSizes.push({
          horizontal: isHorizontal,
          width: minSize.width,
          box: box,
        });
      }
  
      helpers$1.each(outerBoxes, getMinimumBoxSize);
  
      // If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
      maxPadding = findMaxPadding(outerBoxes);
  
      // At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
      // be if the axes are drawn at their minimum sizes.
      // Steps 5 & 6
  
      // Function to fit a box
      function fitBox(box) {
        var minBoxSize = helpers$1.findNextWhere(minBoxSizes, function(minBox) {
          return minBox.box === box;
        });
  
        if (minBoxSize) {
          if (minBoxSize.horizontal) {
            var scaleMargin = {
              left: Math.max(outerBoxSizes.left, maxPadding.left),
              right: Math.max(outerBoxSizes.right, maxPadding.right),
              top: 0,
              bottom: 0
            };
  
            // Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
            // on the margin. Sometimes they need to increase in size slightly
            box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
          } else {
            box.update(minBoxSize.width, maxChartAreaHeight);
          }
        }
      }
  
      // Update, and calculate the left and right margins for the horizontal boxes
      helpers$1.each(verticalBoxes, fitBox);
      addSizeByPosition(verticalBoxes, outerBoxSizes);
  
      // Set the Left and Right margins for the horizontal boxes
      helpers$1.each(horizontalBoxes, fitBox);
      addSizeByPosition(horizontalBoxes, outerBoxSizes);
  
      function finalFitVerticalBox(box) {
        var minBoxSize = helpers$1.findNextWhere(minBoxSizes, function(minSize) {
          return minSize.box === box;
        });
  
        var scaleMargin = {
          left: 0,
          right: 0,
          top: outerBoxSizes.top,
          bottom: outerBoxSizes.bottom
        };
  
        if (minBoxSize) {
          box.update(minBoxSize.width, maxChartAreaHeight, scaleMargin);
        }
      }
  
      // Let the left layout know the final margin
      helpers$1.each(verticalBoxes, finalFitVerticalBox);
  
      // Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
      outerBoxSizes = {top: topPadding, left: leftPadding, bottom: bottomPadding, right: rightPadding};
      addSizeByPosition(outerBoxes, outerBoxSizes);
  
      // We may be adding some padding to account for rotated x axis labels
      var leftPaddingAddition = Math.max(maxPadding.left - outerBoxSizes.left, 0);
      outerBoxSizes.left += leftPaddingAddition;
      outerBoxSizes.right += Math.max(maxPadding.right - outerBoxSizes.right, 0);
  
      var topPaddingAddition = Math.max(maxPadding.top - outerBoxSizes.top, 0);
      outerBoxSizes.top += topPaddingAddition;
      outerBoxSizes.bottom += Math.max(maxPadding.bottom - outerBoxSizes.bottom, 0);
  
      // Figure out if our chart area changed. This would occur if the dataset layout label rotation
      // changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
      // without calling `fit` again
      var newMaxChartAreaHeight = height - outerBoxSizes.top - outerBoxSizes.bottom;
      var newMaxChartAreaWidth = width - outerBoxSizes.left - outerBoxSizes.right;
  
      if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
        helpers$1.each(verticalBoxes, function(box) {
          box.height = newMaxChartAreaHeight;
        });
  
        helpers$1.each(horizontalBoxes, function(box) {
          if (!box.fullWidth) {
            box.width = newMaxChartAreaWidth;
          }
        });
  
        maxChartAreaHeight = newMaxChartAreaHeight;
        maxChartAreaWidth = newMaxChartAreaWidth;
      }
  
      // Step 7 - Position the boxes
      var left = leftPadding + leftPaddingAddition;
      var top = topPadding + topPaddingAddition;
  
      function placeBox(box) {
        if (box.isHorizontal()) {
          box.left = box.fullWidth ? leftPadding : outerBoxSizes.left;
          box.right = box.fullWidth ? width - rightPadding : outerBoxSizes.left + maxChartAreaWidth;
          box.top = top;
          box.bottom = top + box.height;
  
          // Move to next point
          top = box.bottom;
  
        } else {
  
          box.left = left;
          box.right = left + box.width;
          box.top = outerBoxSizes.top;
          box.bottom = outerBoxSizes.top + maxChartAreaHeight;
  
          // Move to next point
          left = box.right;
        }
      }
  
      helpers$1.each(leftBoxes.concat(topBoxes), placeBox);
  
      // Account for chart width and height
      left += maxChartAreaWidth;
      top += maxChartAreaHeight;
  
      helpers$1.each(rightBoxes, placeBox);
      helpers$1.each(bottomBoxes, placeBox);
  
      // Step 8
      chart.chartArea = {
        left: outerBoxSizes.left,
        top: outerBoxSizes.top,
        right: outerBoxSizes.left + maxChartAreaWidth,
        bottom: outerBoxSizes.top + maxChartAreaHeight
      };
  
      // Step 9
      helpers$1.each(chartAreaBoxes, function(box) {
        box.left = chart.chartArea.left;
        box.top = chart.chartArea.top;
        box.right = chart.chartArea.right;
        box.bottom = chart.chartArea.bottom;
  
        box.update(maxChartAreaWidth, maxChartAreaHeight);
      });
    }
  };
  
  /**
   * Platform fallback implementation (minimal).
   * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
   */
  
  var platform_basic = {
    acquireContext: function(item) {
      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }
  
      return item && item.getContext('2d') || null;
    }
  };
  
  var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";
  
  var platform_dom$1 = /*#__PURE__*/Object.freeze({
  default: platform_dom
  });
  
  function getCjsExportFromNamespace (n) {
    return n && n.default || n;
  }
  
  var stylesheet = getCjsExportFromNamespace(platform_dom$1);
  
  var EXPANDO_KEY = '$chartjs';
  var CSS_PREFIX = 'chartjs-';
  var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
  var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
  var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
  var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
  
  /**
   * DOM event types -> Chart.js event types.
   * Note: only events with different types are mapped.
   * @see https://developer.mozilla.org/en-US/docs/Web/Events
   */
  var EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  };
  
  /**
   * The "used" size is the final value of a dimension property after all calculations have
   * been performed. This method uses the computed style of `element` but returns undefined
   * if the computed style is not expressed in pixels. That can happen in some cases where
   * `element` has a size relative to its parent and this last one is not yet displayed,
   * for example because of `display: none` on a parent node.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
   * @returns {number} Size in pixels or undefined if unknown.
   */
  function readUsedSize(element, property) {
    var value = helpers$1.getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? Number(matches[1]) : undefined;
  }
  
  /**
   * Initializes the canvas style and render size without modifying the canvas display size,
   * since responsiveness is handled by the controller.resize() method. The config is used
   * to determine the aspect ratio to apply in case no explicit height has been specified.
   */
  function initCanvas(canvas, config) {
    var style = canvas.style;
  
    // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
    // returns null or '' if no explicit value has been set to the canvas attribute.
    var renderHeight = canvas.getAttribute('height');
    var renderWidth = canvas.getAttribute('width');
  
    // Chart.js modifies some canvas values that we want to restore on destroy
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
  
    // Force canvas to display as block to avoid extra space caused by inline
    // elements, which would interfere with the responsive resize process.
    // https://github.com/chartjs/Chart.js/issues/2538
    style.display = style.display || 'block';
  
    if (renderWidth === null || renderWidth === '') {
      var displayWidth = readUsedSize(canvas, 'width');
      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }
  
    if (renderHeight === null || renderHeight === '') {
      if (canvas.style.height === '') {
        // If no explicit render height and style height, let's apply the aspect ratio,
        // which one can be specified by the user but also by charts as default option
        // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
        canvas.height = canvas.width / (config.options.aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, 'height');
        if (displayWidth !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }
  
    return canvas;
  }
  
  /**
   * Detects support for options object argument in addEventListener.
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
   * @private
   */
  var supportsEventListenerOptions = (function() {
    var supports = false;
    try {
      var options = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get: function() {
          supports = true;
        }
      });
      window.addEventListener('e', null, options);
    } catch (e) {
      // continue regardless of error
    }
    return supports;
  }());
  
  // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
  // https://github.com/chartjs/Chart.js/issues/4287
  var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;
  
  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }
  
  function removeListener(node, type, listener) {
    node.removeEventListener(type, listener, eventListenerOptions);
  }
  
  function createEvent(type, chart, x, y, nativeEvent) {
    return {
      type: type,
      chart: chart,
      native: nativeEvent || null,
      x: x !== undefined ? x : null,
      y: y !== undefined ? y : null,
    };
  }
  
  function fromNativeEvent(event, chart) {
    var type = EVENT_TYPES[event.type] || event.type;
    var pos = helpers$1.getRelativePosition(event, chart);
    return createEvent(type, chart, pos.x, pos.y, event);
  }
  
  function throttled(fn, thisArg) {
    var ticking = false;
    var args = [];
  
    return function() {
      args = Array.prototype.slice.call(arguments);
      thisArg = thisArg || this;
  
      if (!ticking) {
        ticking = true;
        helpers$1.requestAnimFrame.call(window, function() {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }
  
  function createDiv(cls) {
    var el = document.createElement('div');
    el.className = cls || '';
    return el;
  }
  
  // Implementation based on https://github.com/marcj/css-element-queries
  function createResizer(handler) {
    var maxSize = 1000000;
  
    // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
    // https://github.com/chartjs/Chart.js/issues/5902
    var resizer = createDiv(CSS_SIZE_MONITOR);
    var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
    var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');
  
    expand.appendChild(createDiv());
    shrink.appendChild(createDiv());
  
    resizer.appendChild(expand);
    resizer.appendChild(shrink);
    resizer._reset = function() {
      expand.scrollLeft = maxSize;
      expand.scrollTop = maxSize;
      shrink.scrollLeft = maxSize;
      shrink.scrollTop = maxSize;
    };
  
    var onScroll = function() {
      resizer._reset();
      handler();
    };
  
    addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
    addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
  
    return resizer;
  }
  
  // https://davidwalsh.name/detect-node-insertion
  function watchForRender(node, handler) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
    var proxy = expando.renderProxy = function(e) {
      if (e.animationName === CSS_RENDER_ANIMATION) {
        handler();
      }
    };
  
    helpers$1.each(ANIMATION_START_EVENTS, function(type) {
      addListener(node, type, proxy);
    });
  
    // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
    // is removed then added back immediately (same animation frame?). Accessing the
    // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
    // https://github.com/chartjs/Chart.js/issues/4737
    expando.reflow = !!node.offsetParent;
  
    node.classList.add(CSS_RENDER_MONITOR);
  }
  
  function unwatchForRender(node) {
    var expando = node[EXPANDO_KEY] || {};
    var proxy = expando.renderProxy;
  
    if (proxy) {
      helpers$1.each(ANIMATION_START_EVENTS, function(type) {
        removeListener(node, type, proxy);
      });
  
      delete expando.renderProxy;
    }
  
    node.classList.remove(CSS_RENDER_MONITOR);
  }
  
  function addResizeListener(node, listener, chart) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
  
    // Let's keep track of this added resizer and thus avoid DOM query when removing it.
    var resizer = expando.resizer = createResizer(throttled(function() {
      if (expando.resizer) {
        var container = chart.options.maintainAspectRatio && node.parentNode;
        var w = container ? container.clientWidth : 0;
        listener(createEvent('resize', chart));
        if (container && container.clientWidth < w && chart.canvas) {
          // If the container size shrank during chart resize, let's assume
          // scrollbar appeared. So we resize again with the scrollbar visible -
          // effectively making chart smaller and the scrollbar hidden again.
          // Because we are inside `throttled`, and currently `ticking`, scroll
          // events are ignored during this whole 2 resize process.
          // If we assumed wrong and something else happened, we are resizing
          // twice in a frame (potential performance issue)
          listener(createEvent('resize', chart));
        }
      }
    }));
  
    // The resizer needs to be attached to the node parent, so we first need to be
    // sure that `node` is attached to the DOM before injecting the resizer element.
    watchForRender(node, function() {
      if (expando.resizer) {
        var container = node.parentNode;
        if (container && container !== resizer.parentNode) {
          container.insertBefore(resizer, container.firstChild);
        }
  
        // The container size might have changed, let's reset the resizer state.
        resizer._reset();
      }
    });
  }
  
  function removeResizeListener(node) {
    var expando = node[EXPANDO_KEY] || {};
    var resizer = expando.resizer;
  
    delete expando.resizer;
    unwatchForRender(node);
  
    if (resizer && resizer.parentNode) {
      resizer.parentNode.removeChild(resizer);
    }
  }
  
  function injectCSS(platform, css) {
    // https://stackoverflow.com/q/3922139
    var style = platform._style || document.createElement('style');
    if (!platform._style) {
      platform._style = style;
      css = '/* Chart.js */\n' + css;
      style.setAttribute('type', 'text/css');
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  
    style.appendChild(document.createTextNode(css));
  }
  
  var platform_dom$2 = {
    /**
     * When `true`, prevents the automatic injection of the stylesheet required to
     * correctly detect when the chart is added to the DOM and then resized. This
     * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
     * to be manually imported to make this library compatible with any CSP.
     * See https://github.com/chartjs/Chart.js/issues/5208
     */
    disableCSSInjection: false,
  
    /**
     * This property holds whether this platform is enabled for the current environment.
     * Currently used by platform.js to select the proper implementation.
     * @private
     */
    _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',
  
    /**
     * @private
     */
    _ensureLoaded: function() {
      if (this._loaded) {
        return;
      }
  
      this._loaded = true;
  
      // https://github.com/chartjs/Chart.js/issues/5208
      if (!this.disableCSSInjection) {
        injectCSS(this, stylesheet);
      }
    },
  
    acquireContext: function(item, config) {
      if (typeof item === 'string') {
        item = document.getElementById(item);
      } else if (item.length) {
        // Support for array based queries (such as jQuery)
        item = item[0];
      }
  
      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }
  
      // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807
      var context = item && item.getContext && item.getContext('2d');
  
      // Load platform resources on first chart creation, to make possible to change
      // platform options after importing the library (e.g. `disableCSSInjection`).
      this._ensureLoaded();
  
      // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
      // inside an iframe or when running in a protected environment. We could guess the
      // types from their toString() value but let's keep things flexible and assume it's
      // a sufficient condition if the item has a context2D which has item as `canvas`.
      // https://github.com/chartjs/Chart.js/issues/3887
      // https://github.com/chartjs/Chart.js/issues/4102
      // https://github.com/chartjs/Chart.js/issues/4152
      if (context && context.canvas === item) {
        initCanvas(item, config);
        return context;
      }
  
      return null;
    },
  
    releaseContext: function(context) {
      var canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return;
      }
  
      var initial = canvas[EXPANDO_KEY].initial;
      ['height', 'width'].forEach(function(prop) {
        var value = initial[prop];
        if (helpers$1.isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
  
      helpers$1.each(initial.style || {}, function(value, key) {
        canvas.style[key] = value;
      });
  
      // The canvas render size might have been changed (and thus the state stack discarded),
      // we can't use save() and restore() to restore the initial state. So make sure that at
      // least the canvas context is reset to the default state by setting the canvas width.
      // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
      // eslint-disable-next-line no-self-assign
      canvas.width = canvas.width;
  
      delete canvas[EXPANDO_KEY];
    },
  
    addEventListener: function(chart, type, listener) {
      var canvas = chart.canvas;
      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        addResizeListener(canvas, listener, chart);
        return;
      }
  
      var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
      var proxies = expando.proxies || (expando.proxies = {});
      var proxy = proxies[chart.id + '_' + type] = function(event) {
        listener(fromNativeEvent(event, chart));
      };
  
      addListener(canvas, type, proxy);
    },
  
    removeEventListener: function(chart, type, listener) {
      var canvas = chart.canvas;
      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        removeResizeListener(canvas);
        return;
      }
  
      var expando = listener[EXPANDO_KEY] || {};
      var proxies = expando.proxies || {};
      var proxy = proxies[chart.id + '_' + type];
      if (!proxy) {
        return;
      }
  
      removeListener(canvas, type, proxy);
    }
  };
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use EventTarget.addEventListener instead.
   * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @function Chart.helpers.addEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.addEvent = addListener;
  
  /**
   * Provided for backward compatibility, use EventTarget.removeEventListener instead.
   * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @function Chart.helpers.removeEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.removeEvent = removeListener;
  
  // @TODO Make possible to select another platform at build time.
  var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
  
  /**
   * @namespace Chart.platform
   * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
   * @since 2.4.0
   */
  var platform = helpers$1.extend({
    /**
     * @since 2.7.0
     */
    initialize: function() {},
  
    /**
     * Called at chart construction time, returns a context2d instance implementing
     * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
     * @param {*} item - The native item from which to acquire context (platform specific)
     * @param {object} options - The chart options
     * @returns {CanvasRenderingContext2D} context2d instance
     */
    acquireContext: function() {},
  
    /**
     * Called at chart destruction time, releases any resources associated to the context
     * previously returned by the acquireContext() method.
     * @param {CanvasRenderingContext2D} context - The context2d instance
     * @returns {boolean} true if the method succeeded, else false
     */
    releaseContext: function() {},
  
    /**
     * Registers the specified listener on the given chart.
     * @param {Chart} chart - Chart from which to listen for event
     * @param {string} type - The ({@link IEvent}) type to listen for
     * @param {function} listener - Receives a notification (an object that implements
     * the {@link IEvent} interface) when an event of the specified type occurs.
     */
    addEventListener: function() {},
  
    /**
     * Removes the specified listener previously registered with addEventListener.
     * @param {Chart} chart - Chart from which to remove the listener
     * @param {string} type - The ({@link IEvent}) type to remove
     * @param {function} listener - The listener function to remove from the event target.
     */
    removeEventListener: function() {}
  
  }, implementation);
  
  core_defaults._set('global', {
    plugins: {}
  });
  
  /**
   * The plugin service singleton
   * @namespace Chart.plugins
   * @since 2.1.0
   */
  var core_plugins = {
    /**
     * Globally registered plugins.
     * @private
     */
    _plugins: [],
  
    /**
     * This identifier is used to invalidate the descriptors cache attached to each chart
     * when a global plugin is registered or unregistered. In this case, the cache ID is
     * incremented and descriptors are regenerated during following API calls.
     * @private
     */
    _cacheId: 0,
  
    /**
     * Registers the given plugin(s) if not already registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    register: function(plugins) {
      var p = this._plugins;
      ([]).concat(plugins).forEach(function(plugin) {
        if (p.indexOf(plugin) === -1) {
          p.push(plugin);
        }
      });
  
      this._cacheId++;
    },
  
    /**
     * Unregisters the given plugin(s) only if registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    unregister: function(plugins) {
      var p = this._plugins;
      ([]).concat(plugins).forEach(function(plugin) {
        var idx = p.indexOf(plugin);
        if (idx !== -1) {
          p.splice(idx, 1);
        }
      });
  
      this._cacheId++;
    },
  
    /**
     * Remove all registered plugins.
     * @since 2.1.5
     */
    clear: function() {
      this._plugins = [];
      this._cacheId++;
    },
  
    /**
     * Returns the number of registered plugins?
     * @returns {number}
     * @since 2.1.5
     */
    count: function() {
      return this._plugins.length;
    },
  
    /**
     * Returns all registered plugin instances.
     * @returns {IPlugin[]} array of plugin objects.
     * @since 2.1.5
     */
    getAll: function() {
      return this._plugins;
    },
  
    /**
     * Calls enabled plugins for `chart` on the specified hook and with the given args.
     * This method immediately returns as soon as a plugin explicitly returns false. The
     * returned value can be used, for instance, to interrupt the current action.
     * @param {Chart} chart - The chart instance for which plugins should be called.
     * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
     * @param {Array} [args] - Extra arguments to apply to the hook call.
     * @returns {boolean} false if any of the plugins return false, else returns true.
     */
    notify: function(chart, hook, args) {
      var descriptors = this.descriptors(chart);
      var ilen = descriptors.length;
      var i, descriptor, plugin, params, method;
  
      for (i = 0; i < ilen; ++i) {
        descriptor = descriptors[i];
        plugin = descriptor.plugin;
        method = plugin[hook];
        if (typeof method === 'function') {
          params = [chart].concat(args || []);
          params.push(descriptor.options);
          if (method.apply(plugin, params) === false) {
            return false;
          }
        }
      }
  
      return true;
    },
  
    /**
     * Returns descriptors of enabled plugins for the given chart.
     * @returns {object[]} [{ plugin, options }]
     * @private
     */
    descriptors: function(chart) {
      var cache = chart.$plugins || (chart.$plugins = {});
      if (cache.id === this._cacheId) {
        return cache.descriptors;
      }
  
      var plugins = [];
      var descriptors = [];
      var config = (chart && chart.config) || {};
      var options = (config.options && config.options.plugins) || {};
  
      this._plugins.concat(config.plugins || []).forEach(function(plugin) {
        var idx = plugins.indexOf(plugin);
        if (idx !== -1) {
          return;
        }
  
        var id = plugin.id;
        var opts = options[id];
        if (opts === false) {
          return;
        }
  
        if (opts === true) {
          opts = helpers$1.clone(core_defaults.global.plugins[id]);
        }
  
        plugins.push(plugin);
        descriptors.push({
          plugin: plugin,
          options: opts || {}
        });
      });
  
      cache.descriptors = descriptors;
      cache.id = this._cacheId;
      return descriptors;
    },
  
    /**
     * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
     * but in some cases, this reference can be changed by the user when updating options.
     * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
     * @private
     */
    _invalidate: function(chart) {
      delete chart.$plugins;
    }
  };
  
  var core_scaleService = {
    // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
    // use the new chart options to grab the correct scale
    constructors: {},
    // Use a registration function so that we can move to an ES6 map when we no longer need to support
    // old browsers
  
    // Scale config defaults
    defaults: {},
    registerScaleType: function(type, scaleConstructor, scaleDefaults) {
      this.constructors[type] = scaleConstructor;
      this.defaults[type] = helpers$1.clone(scaleDefaults);
    },
    getScaleConstructor: function(type) {
      return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
    },
    getScaleDefaults: function(type) {
      // Return the scale defaults merged with the global settings so that we always use the latest ones
      return this.defaults.hasOwnProperty(type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
    },
    updateScaleDefaults: function(type, additions) {
      var me = this;
      if (me.defaults.hasOwnProperty(type)) {
        me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
      }
    },
    addScalesToLayout: function(chart) {
      // Adds each scale to the chart.boxes array to be sized accordingly
      helpers$1.each(chart.scales, function(scale) {
        // Set ILayoutItem parameters for backwards compatibility
        scale.fullWidth = scale.options.fullWidth;
        scale.position = scale.options.position;
        scale.weight = scale.options.weight;
        core_layouts.addBox(chart, scale);
      });
    }
  };
  
  var valueOrDefault$7 = helpers$1.valueOrDefault;
  
  core_defaults._set('global', {
    tooltips: {
      enabled: true,
      custom: null,
      mode: 'nearest',
      position: 'average',
      intersect: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleFontStyle: 'bold',
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: '#fff',
      titleAlign: 'left',
      bodySpacing: 2,
      bodyFontColor: '#fff',
      bodyAlign: 'left',
      footerFontStyle: 'bold',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: '#fff',
      footerAlign: 'left',
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: '#fff',
      displayColors: true,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      callbacks: {
        // Args are: (tooltipItems, data)
        beforeTitle: helpers$1.noop,
        title: function(tooltipItems, data) {
          var title = '';
          var labels = data.labels;
          var labelCount = labels ? labels.length : 0;
  
          if (tooltipItems.length > 0) {
            var item = tooltipItems[0];
            if (item.label) {
              title = item.label;
            } else if (item.xLabel) {
              title = item.xLabel;
            } else if (labelCount > 0 && item.index < labelCount) {
              title = labels[item.index];
            }
          }
  
          return title;
        },
        afterTitle: helpers$1.noop,
  
        // Args are: (tooltipItems, data)
        beforeBody: helpers$1.noop,
  
        // Args are: (tooltipItem, data)
        beforeLabel: helpers$1.noop,
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
  
          if (label) {
            label += ': ';
          }
          if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
            label += tooltipItem.value;
          } else {
            label += tooltipItem.yLabel;
          }
          return label;
        },
        labelColor: function(tooltipItem, chart) {
          var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
          var activeElement = meta.data[tooltipItem.index];
          var view = activeElement._view;
          return {
            borderColor: view.borderColor,
            backgroundColor: view.backgroundColor
          };
        },
        labelTextColor: function() {
          return this._options.bodyFontColor;
        },
        afterLabel: helpers$1.noop,
  
        // Args are: (tooltipItems, data)
        afterBody: helpers$1.noop,
  
        // Args are: (tooltipItems, data)
        beforeFooter: helpers$1.noop,
        footer: helpers$1.noop,
        afterFooter: helpers$1.noop
      }
    }
  });
  
  var positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {object} tooltip position
     */
    average: function(elements) {
      if (!elements.length) {
        return false;
      }
  
      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;
  
      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }
  
      return {
        x: x / count,
        y: y / count
      };
    },
  
    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {object} the position of the event in canvas coordinates
     * @returns {object} the tooltip position
     */
    nearest: function(elements, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len, nearestElement;
  
      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = helpers$1.distanceBetweenPoints(eventPosition, center);
  
          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }
  
      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }
  
      return {
        x: x,
        y: y
      };
    }
  };
  
  // Helper to push or concat based on if the 2nd parameter is an array or not
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (helpers$1.isArray(toPush)) {
        // base = base.concat(toPush);
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }
  
    return base;
  }
  
  /**
   * Returns array of strings split by newline
   * @param {string} value - The value to split by newline.
   * @returns {string[]} value if newline present - Returned from String split() method
   * @function
   */
  function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
      return str.split('\n');
    }
    return str;
  }
  
  
  /**
   * Private helper to create a tooltip item model
   * @param element - the chart element (point, arc, bar) to create the tooltip item for
   * @return new tooltip item
   */
  function createTooltipItem(element) {
    var xScale = element._xScale;
    var yScale = element._yScale || element._scale; // handle radar || polarArea charts
    var index = element._index;
    var datasetIndex = element._datasetIndex;
    var controller = element._chart.getDatasetMeta(datasetIndex).controller;
    var indexScale = controller._getIndexScale();
    var valueScale = controller._getValueScale();
  
    return {
      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
      label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
      value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
      index: index,
      datasetIndex: datasetIndex,
      x: element._model.x,
      y: element._model.y
    };
  }
  
  /**
   * Helper to get the reset model for the tooltip
   * @param tooltipOpts {object} the tooltip options
   */
  function getBaseModel(tooltipOpts) {
    var globalDefaults = core_defaults.global;
  
    return {
      // Positioning
      xPadding: tooltipOpts.xPadding,
      yPadding: tooltipOpts.yPadding,
      xAlign: tooltipOpts.xAlign,
      yAlign: tooltipOpts.yAlign,
  
      // Body
      bodyFontColor: tooltipOpts.bodyFontColor,
      _bodyFontFamily: valueOrDefault$7(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
      _bodyFontStyle: valueOrDefault$7(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
      _bodyAlign: tooltipOpts.bodyAlign,
      bodyFontSize: valueOrDefault$7(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
      bodySpacing: tooltipOpts.bodySpacing,
  
      // Title
      titleFontColor: tooltipOpts.titleFontColor,
      _titleFontFamily: valueOrDefault$7(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
      _titleFontStyle: valueOrDefault$7(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
      titleFontSize: valueOrDefault$7(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
      _titleAlign: tooltipOpts.titleAlign,
      titleSpacing: tooltipOpts.titleSpacing,
      titleMarginBottom: tooltipOpts.titleMarginBottom,
  
      // Footer
      footerFontColor: tooltipOpts.footerFontColor,
      _footerFontFamily: valueOrDefault$7(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
      _footerFontStyle: valueOrDefault$7(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
      footerFontSize: valueOrDefault$7(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
      _footerAlign: tooltipOpts.footerAlign,
      footerSpacing: tooltipOpts.footerSpacing,
      footerMarginTop: tooltipOpts.footerMarginTop,
  
      // Appearance
      caretSize: tooltipOpts.caretSize,
      cornerRadius: tooltipOpts.cornerRadius,
      backgroundColor: tooltipOpts.backgroundColor,
      opacity: 0,
      legendColorBackground: tooltipOpts.multiKeyBackground,
      displayColors: tooltipOpts.displayColors,
      borderColor: tooltipOpts.borderColor,
      borderWidth: tooltipOpts.borderWidth
    };
  }
  
  /**
   * Get the size of the tooltip
   */
  function getTooltipSize(tooltip, model) {
    var ctx = tooltip._chart.ctx;
  
    var height = model.yPadding * 2; // Tooltip Padding
    var width = 0;
  
    // Count of all lines in the body
    var body = model.body;
    var combinedBodyLength = body.reduce(function(count, bodyItem) {
      return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
    }, 0);
    combinedBodyLength += model.beforeBody.length + model.afterBody.length;
  
    var titleLineCount = model.title.length;
    var footerLineCount = model.footer.length;
    var titleFontSize = model.titleFontSize;
    var bodyFontSize = model.bodyFontSize;
    var footerFontSize = model.footerFontSize;
  
    height += titleLineCount * titleFontSize; // Title Lines
    height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
    height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
    height += combinedBodyLength * bodyFontSize; // Body Lines
    height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
    height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
    height += footerLineCount * (footerFontSize); // Footer Lines
    height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
  
    // Title width
    var widthPadding = 0;
    var maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
  
    ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
    helpers$1.each(model.title, maxLineWidth);
  
    // Body width
    ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
    helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);
  
    // Body lines may include some extra width due to the color box
    widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
    helpers$1.each(body, function(bodyItem) {
      helpers$1.each(bodyItem.before, maxLineWidth);
      helpers$1.each(bodyItem.lines, maxLineWidth);
      helpers$1.each(bodyItem.after, maxLineWidth);
    });
  
    // Reset back to 0
    widthPadding = 0;
  
    // Footer width
    ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
    helpers$1.each(model.footer, maxLineWidth);
  
    // Add padding
    width += 2 * model.xPadding;
  
    return {
      width: width,
      height: height
    };
  }
  
  /**
   * Helper to get the alignment of a tooltip given the size
   */
  function determineAlignment(tooltip, size) {
    var model = tooltip._model;
    var chart = tooltip._chart;
    var chartArea = tooltip._chart.chartArea;
    var xAlign = 'center';
    var yAlign = 'center';
  
    if (model.y < size.height) {
      yAlign = 'top';
    } else if (model.y > (chart.height - size.height)) {
      yAlign = 'bottom';
    }
  
    var lf, rf; // functions to determine left, right alignment
    var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
    var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
    var midX = (chartArea.left + chartArea.right) / 2;
    var midY = (chartArea.top + chartArea.bottom) / 2;
  
    if (yAlign === 'center') {
      lf = function(x) {
        return x <= midX;
      };
      rf = function(x) {
        return x > midX;
      };
    } else {
      lf = function(x) {
        return x <= (size.width / 2);
      };
      rf = function(x) {
        return x >= (chart.width - (size.width / 2));
      };
    }
  
    olf = function(x) {
      return x + size.width + model.caretSize + model.caretPadding > chart.width;
    };
    orf = function(x) {
      return x - size.width - model.caretSize - model.caretPadding < 0;
    };
    yf = function(y) {
      return y <= midY ? 'top' : 'bottom';
    };
  
    if (lf(model.x)) {
      xAlign = 'left';
  
      // Is tooltip too wide and goes over the right side of the chart.?
      if (olf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    } else if (rf(model.x)) {
      xAlign = 'right';
  
      // Is tooltip too wide and goes outside left edge of canvas?
      if (orf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    }
  
    var opts = tooltip._options;
    return {
      xAlign: opts.xAlign ? opts.xAlign : xAlign,
      yAlign: opts.yAlign ? opts.yAlign : yAlign
    };
  }
  
  /**
   * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
   */
  function getBackgroundPoint(vm, size, alignment, chart) {
    // Background Position
    var x = vm.x;
    var y = vm.y;
  
    var caretSize = vm.caretSize;
    var caretPadding = vm.caretPadding;
    var cornerRadius = vm.cornerRadius;
    var xAlign = alignment.xAlign;
    var yAlign = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;
  
    if (xAlign === 'right') {
      x -= size.width;
    } else if (xAlign === 'center') {
      x -= (size.width / 2);
      if (x + size.width > chart.width) {
        x = chart.width - size.width;
      }
      if (x < 0) {
        x = 0;
      }
    }
  
    if (yAlign === 'top') {
      y += paddingAndSize;
    } else if (yAlign === 'bottom') {
      y -= size.height + paddingAndSize;
    } else {
      y -= (size.height / 2);
    }
  
    if (yAlign === 'center') {
      if (xAlign === 'left') {
        x += paddingAndSize;
      } else if (xAlign === 'right') {
        x -= paddingAndSize;
      }
    } else if (xAlign === 'left') {
      x -= radiusAndPadding;
    } else if (xAlign === 'right') {
      x += radiusAndPadding;
    }
  
    return {
      x: x,
      y: y
    };
  }
  
  function getAlignedX(vm, align) {
    return align === 'center'
      ? vm.x + vm.width / 2
      : align === 'right'
        ? vm.x + vm.width - vm.xPadding
        : vm.x + vm.xPadding;
  }
  
  /**
   * Helper to build before and after body lines
   */
  function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
  }
  
  var exports$3 = core_element.extend({
    initialize: function() {
      this._model = getBaseModel(this._options);
      this._lastActive = [];
    },
  
    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function() {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;
  
      var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
      var title = callbacks.title.apply(me, arguments);
      var afterTitle = callbacks.afterTitle.apply(me, arguments);
  
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
  
      return lines;
    },
  
    // Args are: (tooltipItem, data)
    getBeforeBody: function() {
      return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
    },
  
    // Args are: (tooltipItem, data)
    getBody: function(tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];
  
      helpers$1.each(tooltipItems, function(tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
  
        bodyItems.push(bodyItem);
      });
  
      return bodyItems;
    },
  
    // Args are: (tooltipItem, data)
    getAfterBody: function() {
      return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
    },
  
    // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)
    getFooter: function() {
      var me = this;
      var callbacks = me._options.callbacks;
  
      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);
  
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
  
      return lines;
    },
  
    update: function(changed) {
      var me = this;
      var opts = me._options;
  
      // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.
      var existingModel = me._model;
      var model = me._model = getBaseModel(opts);
      var active = me._active;
  
      var data = me._data;
  
      // In the case where active.length === 0 we need to keep these at existing values for good animations
      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY
      };
  
      var i, len;
  
      if (active.length) {
        model.opacity = 1;
  
        var labelColors = [];
        var labelTextColors = [];
        tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
  
        var tooltipItems = [];
        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(active[i]));
        }
  
        // If the user provided a filter function, use it to modify the tooltip items
        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function(a) {
            return opts.filter(a, data);
          });
        }
  
        // If the user provided a sorting function, use it to modify the tooltip items
        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function(a, b) {
            return opts.itemSort(a, b, data);
          });
        }
  
        // Determine colors for boxes
        helpers$1.each(tooltipItems, function(tooltipItem) {
          labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
          labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
        });
  
  
        // Build the Text Lines
        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data);
  
        // Initial positioning and colors
        model.x = tooltipPosition.x;
        model.y = tooltipPosition.y;
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;
        model.labelTextColors = labelTextColors;
  
        // data points
        model.dataPoints = tooltipItems;
  
        // We need to determine alignment of the tooltip
        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize);
        // Final Size and Position
        backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
      } else {
        model.opacity = 0;
      }
  
      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height;
  
      // Point where the caret on the tooltip points to
      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;
  
      me._model = model;
  
      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }
  
      return me;
    },
  
    drawCaret: function(tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
  
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    },
    getCaretPosition: function(tooltipPoint, size, vm) {
      var x1, x2, x3, y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var ptX = tooltipPoint.x;
      var ptY = tooltipPoint.y;
      var width = size.width;
      var height = size.height;
  
      if (yAlign === 'center') {
        y2 = ptY + (height / 2);
  
        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;
  
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;
  
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === 'left') {
          x2 = ptX + cornerRadius + (caretSize);
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = vm.caretX;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }
        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1;
          // invert drawing order
          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }
      return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
    },
  
    drawTitle: function(pt, vm, ctx) {
      var title = vm.title;
  
      if (title.length) {
        pt.x = getAlignedX(vm, vm._titleAlign);
  
        ctx.textAlign = vm._titleAlign;
        ctx.textBaseline = 'top';
  
        var titleFontSize = vm.titleFontSize;
        var titleSpacing = vm.titleSpacing;
  
        ctx.fillStyle = vm.titleFontColor;
        ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
  
        var i, len;
        for (i = 0, len = title.length; i < len; ++i) {
          ctx.fillText(title[i], pt.x, pt.y);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing
  
          if (i + 1 === title.length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    },
  
    drawBody: function(pt, vm, ctx) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var bodyAlign = vm._bodyAlign;
      var body = vm.body;
      var drawColorBoxes = vm.displayColors;
      var labelColors = vm.labelColors;
      var xLinePadding = 0;
      var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
      var textColor;
  
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = 'top';
      ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
  
      pt.x = getAlignedX(vm, bodyAlign);
  
      // Before Body
      var fillLineOfText = function(line) {
        ctx.fillText(line, pt.x + xLinePadding, pt.y);
        pt.y += bodyFontSize + bodySpacing;
      };
  
      // Before body lines
      ctx.fillStyle = vm.bodyFontColor;
      helpers$1.each(vm.beforeBody, fillLineOfText);
  
      xLinePadding = drawColorBoxes && bodyAlign !== 'right'
        ? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
        : 0;
  
      // Draw body lines now
      helpers$1.each(body, function(bodyItem, i) {
        textColor = vm.labelTextColors[i];
        ctx.fillStyle = textColor;
        helpers$1.each(bodyItem.before, fillLineOfText);
  
        helpers$1.each(bodyItem.lines, function(line) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            // Fill a white rect so that colours merge nicely if the opacity is < 1
            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize);
  
            // Border
            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors[i].borderColor;
            ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize);
  
            // Inner square
            ctx.fillStyle = labelColors[i].backgroundColor;
            ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
            ctx.fillStyle = textColor;
          }
  
          fillLineOfText(line);
        });
  
        helpers$1.each(bodyItem.after, fillLineOfText);
      });
  
      // Reset back to 0 for after body
      xLinePadding = 0;
  
      // After body lines
      helpers$1.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    },
  
    drawFooter: function(pt, vm, ctx) {
      var footer = vm.footer;
  
      if (footer.length) {
        pt.x = getAlignedX(vm, vm._footerAlign);
        pt.y += vm.footerMarginTop;
  
        ctx.textAlign = vm._footerAlign;
        ctx.textBaseline = 'top';
  
        ctx.fillStyle = vm.footerFontColor;
        ctx.font = helpers$1.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
  
        helpers$1.each(footer, function(line) {
          ctx.fillText(line, pt.x, pt.y);
          pt.y += vm.footerFontSize + vm.footerSpacing;
        });
      }
    },
  
    drawBackground: function(pt, vm, ctx, tooltipSize) {
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;
  
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      if (yAlign === 'top') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      if (yAlign === 'bottom') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
  
      ctx.fill();
  
      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    },
  
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
  
      if (vm.opacity === 0) {
        return;
      }
  
      var tooltipSize = {
        width: vm.width,
        height: vm.height
      };
      var pt = {
        x: vm.x,
        y: vm.y
      };
  
      // IE11/Edge does not like very small opacities, so snap to 0
      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;
  
      // Truthy/falsey value for empty tooltip
      var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;
  
      if (this._options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
  
        // Draw Background
        this.drawBackground(pt, vm, ctx, tooltipSize);
  
        // Draw Title, Body, and Footer
        pt.y += vm.yPadding;
  
        // Titles
        this.drawTitle(pt, vm, ctx);
  
        // Body
        this.drawBody(pt, vm, ctx);
  
        // Footer
        this.drawFooter(pt, vm, ctx);
  
        ctx.restore();
      }
    },
  
    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {boolean} true if the tooltip changed
     */
    handleEvent: function(e) {
      var me = this;
      var options = me._options;
      var changed = false;
  
      me._lastActive = me._lastActive || [];
  
      // Find Active Elements for tooltips
      if (e.type === 'mouseout') {
        me._active = [];
      } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
      }
  
      // Remember Last Actives
      changed = !helpers$1.arrayEquals(me._active, me._lastActive);
  
      // Only handle target event on tooltip change
      if (changed) {
        me._lastActive = me._active;
  
        if (options.enabled || options.custom) {
          me._eventPosition = {
            x: e.x,
            y: e.y
          };
  
          me.update(true);
          me.pivot();
        }
      }
  
      return changed;
    }
  });
  
  /**
   * @namespace Chart.Tooltip.positioners
   */
  var positioners_1 = positioners;
  
  var core_tooltip = exports$3;
  core_tooltip.positioners = positioners_1;
  
  var valueOrDefault$8 = helpers$1.valueOrDefault;
  
  core_defaults._set('global', {
    elements: {},
    events: [
      'mousemove',
      'mouseout',
      'click',
      'touchstart',
      'touchmove'
    ],
    hover: {
      onHover: null,
      mode: 'nearest',
      intersect: true,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: true,
    responsive: true,
    responsiveAnimationDuration: 0
  });
  
  /**
   * Recursively merge the given config objects representing the `scales` option
   * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
   * returns a deep copy of the result, thus doesn't alter inputs.
   */
  function mergeScaleConfig(/* config objects ... */) {
    return helpers$1.merge({}, [].slice.call(arguments), {
      merger: function(key, target, source, options) {
        if (key === 'xAxes' || key === 'yAxes') {
          var slen = source[key].length;
          var i, type, scale;
  
          if (!target[key]) {
            target[key] = [];
          }
  
          for (i = 0; i < slen; ++i) {
            scale = source[key][i];
            type = valueOrDefault$8(scale.type, key === 'xAxes' ? 'category' : 'linear');
  
            if (i >= target[key].length) {
              target[key].push({});
            }
  
            if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
              // new/untyped scale or type changed: let's apply the new defaults
              // then merge source scale to correctly overwrite the defaults.
              helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
            } else {
              // scales type are the same
              helpers$1.merge(target[key][i], scale);
            }
          }
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }
  
  /**
   * Recursively merge the given config objects as the root options by handling
   * default scale options for the `scales` and `scale` properties, then returns
   * a deep copy of the result, thus doesn't alter inputs.
   */
  function mergeConfig(/* config objects ... */) {
    return helpers$1.merge({}, [].slice.call(arguments), {
      merger: function(key, target, source, options) {
        var tval = target[key] || {};
        var sval = source[key];
  
        if (key === 'scales') {
          // scale config merging is complex. Add our own function here for that
          target[key] = mergeScaleConfig(tval, sval);
        } else if (key === 'scale') {
          // used in polar area & radar charts since there is only one scale
          target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }
  
  function initConfig(config) {
    config = config || {};
  
    // Do NOT use mergeConfig for the data object because this method merges arrays
    // and so would change references to labels and datasets, preventing data updates.
    var data = config.data = config.data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
  
    config.options = mergeConfig(
      core_defaults.global,
      core_defaults[config.type],
      config.options || {});
  
    return config;
  }
  
  function updateConfig(chart) {
    var newOptions = chart.options;
  
    helpers$1.each(chart.scales, function(scale) {
      core_layouts.removeBox(chart, scale);
    });
  
    newOptions = mergeConfig(
      core_defaults.global,
      core_defaults[chart.config.type],
      newOptions);
  
    chart.options = chart.config.options = newOptions;
    chart.ensureScalesHaveIDs();
    chart.buildOrUpdateScales();
  
    // Tooltip
    chart.tooltip._options = newOptions.tooltips;
    chart.tooltip.initialize();
  }
  
  function positionIsHorizontal(position) {
    return position === 'top' || position === 'bottom';
  }
  
  var Chart = function(item, config) {
    this.construct(item, config);
    return this;
  };
  
  helpers$1.extend(Chart.prototype, /** @lends Chart */ {
    /**
     * @private
     */
    construct: function(item, config) {
      var me = this;
  
      config = initConfig(config);
  
      var context = platform.acquireContext(item, config);
      var canvas = context && context.canvas;
      var height = canvas && canvas.height;
      var width = canvas && canvas.width;
  
      me.id = helpers$1.uid();
      me.ctx = context;
      me.canvas = canvas;
      me.config = config;
      me.width = width;
      me.height = height;
      me.aspectRatio = height ? width / height : null;
      me.options = config.options;
      me._bufferedRender = false;
  
      /**
       * Provided for backward compatibility, Chart and Chart.Controller have been merged,
       * the "instance" still need to be defined since it might be called from plugins.
       * @prop Chart#chart
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */
      me.chart = me;
      me.controller = me; // chart.chart.controller #inception
  
      // Add the chart instance to the global namespace
      Chart.instances[me.id] = me;
  
      // Define alias to the config data: `chart.data === chart.config.data`
      Object.defineProperty(me, 'data', {
        get: function() {
          return me.config.data;
        },
        set: function(value) {
          me.config.data = value;
        }
      });
  
      if (!context || !canvas) {
        // The given item is not a compatible context2d element, let's return before finalizing
        // the chart initialization but after setting basic chart / controller properties that
        // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
        // https://github.com/chartjs/Chart.js/issues/2807
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
  
      me.initialize();
      me.update();
    },
  
    /**
     * @private
     */
    initialize: function() {
      var me = this;
  
      // Before init plugin notification
      core_plugins.notify(me, 'beforeInit');
  
      helpers$1.retinaScale(me, me.options.devicePixelRatio);
  
      me.bindEvents();
  
      if (me.options.responsive) {
        // Initial resize before chart draws (must be silent to preserve initial animations).
        me.resize(true);
      }
  
      // Make sure scales have IDs and are built before we build any controllers.
      me.ensureScalesHaveIDs();
      me.buildOrUpdateScales();
      me.initToolTip();
  
      // After init plugin notification
      core_plugins.notify(me, 'afterInit');
  
      return me;
    },
  
    clear: function() {
      helpers$1.canvas.clear(this);
      return this;
    },
  
    stop: function() {
      // Stops any current animation loop occurring
      core_animations.cancelAnimation(this);
      return this;
    },
  
    resize: function(silent) {
      var me = this;
      var options = me.options;
      var canvas = me.canvas;
      var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;
  
      // the canvas render width and height will be casted to integers so make sure that
      // the canvas display style uses the same integer values to avoid blurring effect.
  
      // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
      var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
      var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));
  
      if (me.width === newWidth && me.height === newHeight) {
        return;
      }
  
      canvas.width = me.width = newWidth;
      canvas.height = me.height = newHeight;
      canvas.style.width = newWidth + 'px';
      canvas.style.height = newHeight + 'px';
  
      helpers$1.retinaScale(me, options.devicePixelRatio);
  
      if (!silent) {
        // Notify any plugins about the resize
        var newSize = {width: newWidth, height: newHeight};
        core_plugins.notify(me, 'resize', [newSize]);
  
        // Notify of resize
        if (options.onResize) {
          options.onResize(me, newSize);
        }
  
        me.stop();
        me.update({
          duration: options.responsiveAnimationDuration
        });
      }
    },
  
    ensureScalesHaveIDs: function() {
      var options = this.options;
      var scalesOptions = options.scales || {};
      var scaleOptions = options.scale;
  
      helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
        xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
      });
  
      helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
        yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
      });
  
      if (scaleOptions) {
        scaleOptions.id = scaleOptions.id || 'scale';
      }
    },
  
    /**
     * Builds a map of scale ID to scale object for future lookup.
     */
    buildOrUpdateScales: function() {
      var me = this;
      var options = me.options;
      var scales = me.scales || {};
      var items = [];
      var updated = Object.keys(scales).reduce(function(obj, id) {
        obj[id] = false;
        return obj;
      }, {});
  
      if (options.scales) {
        items = items.concat(
          (options.scales.xAxes || []).map(function(xAxisOptions) {
            return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
          }),
          (options.scales.yAxes || []).map(function(yAxisOptions) {
            return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
          })
        );
      }
  
      if (options.scale) {
        items.push({
          options: options.scale,
          dtype: 'radialLinear',
          isDefault: true,
          dposition: 'chartArea'
        });
      }
  
      helpers$1.each(items, function(item) {
        var scaleOptions = item.options;
        var id = scaleOptions.id;
        var scaleType = valueOrDefault$8(scaleOptions.type, item.dtype);
  
        if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
  
        updated[id] = true;
        var scale = null;
        if (id in scales && scales[id].type === scaleType) {
          scale = scales[id];
          scale.options = scaleOptions;
          scale.ctx = me.ctx;
          scale.chart = me;
        } else {
          var scaleClass = core_scaleService.getScaleConstructor(scaleType);
          if (!scaleClass) {
            return;
          }
          scale = new scaleClass({
            id: id,
            type: scaleType,
            options: scaleOptions,
            ctx: me.ctx,
            chart: me
          });
          scales[scale.id] = scale;
        }
  
        scale.mergeTicksOptions();
  
        // TODO(SB): I think we should be able to remove this custom case (options.scale)
        // and consider it as a regular scale part of the "scales"" map only! This would
        // make the logic easier and remove some useless? custom code.
        if (item.isDefault) {
          me.scale = scale;
        }
      });
      // clear up discarded scales
      helpers$1.each(updated, function(hasUpdated, id) {
        if (!hasUpdated) {
          delete scales[id];
        }
      });
  
      me.scales = scales;
  
      core_scaleService.addScalesToLayout(this);
    },
  
    buildOrUpdateControllers: function() {
      var me = this;
      var newControllers = [];
  
      helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
        var meta = me.getDatasetMeta(datasetIndex);
        var type = dataset.type || me.config.type;
  
        if (meta.type && meta.type !== type) {
          me.destroyDatasetMeta(datasetIndex);
          meta = me.getDatasetMeta(datasetIndex);
        }
        meta.type = type;
  
        if (meta.controller) {
          meta.controller.updateIndex(datasetIndex);
          meta.controller.linkScales();
        } else {
          var ControllerClass = controllers[meta.type];
          if (ControllerClass === undefined) {
            throw new Error('"' + meta.type + '" is not a chart type.');
          }
  
          meta.controller = new ControllerClass(me, datasetIndex);
          newControllers.push(meta.controller);
        }
      }, me);
  
      return newControllers;
    },
  
    /**
     * Reset the elements of all datasets
     * @private
     */
    resetElements: function() {
      var me = this;
      helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.reset();
      }, me);
    },
  
    /**
    * Resets the chart back to it's state before the initial animation
    */
    reset: function() {
      this.resetElements();
      this.tooltip.initialize();
    },
  
    update: function(config) {
      var me = this;
  
      if (!config || typeof config !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }
  
      updateConfig(me);
  
      // plugins options references might have change, let's invalidate the cache
      // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
      core_plugins._invalidate(me);
  
      if (core_plugins.notify(me, 'beforeUpdate') === false) {
        return;
      }
  
      // In case the entire data object changed
      me.tooltip._data = me.data;
  
      // Make sure dataset controllers are updated and new controllers are reset
      var newControllers = me.buildOrUpdateControllers();
  
      // Make sure all dataset controllers have correct meta data counts
      helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
      }, me);
  
      me.updateLayout();
  
      // Can only reset the new controllers after the scales have been updated
      if (me.options.animation && me.options.animation.duration) {
        helpers$1.each(newControllers, function(controller) {
          controller.reset();
        });
      }
  
      me.updateDatasets();
  
      // Need to reset tooltip in case it is displayed with elements that are removed
      // after update.
      me.tooltip.initialize();
  
      // Last active contains items that were previously in the tooltip.
      // When we reset the tooltip, we need to clear it
      me.lastActive = [];
  
      // Do this before render so that any plugins that need final scale updates can use it
      core_plugins.notify(me, 'afterUpdate');
  
      if (me._bufferedRender) {
        me._bufferedRequest = {
          duration: config.duration,
          easing: config.easing,
          lazy: config.lazy
        };
      } else {
        me.render(config);
      }
    },
  
    /**
     * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
     * hook, in which case, plugins will not be called on `afterLayout`.
     * @private
     */
    updateLayout: function() {
      var me = this;
  
      if (core_plugins.notify(me, 'beforeLayout') === false) {
        return;
      }
  
      core_layouts.update(this, this.width, this.height);
  
      /**
       * Provided for backward compatibility, use `afterLayout` instead.
       * @method IPlugin#afterScaleUpdate
       * @deprecated since version 2.5.0
       * @todo remove at version 3
       * @private
       */
      core_plugins.notify(me, 'afterScaleUpdate');
      core_plugins.notify(me, 'afterLayout');
    },
  
    /**
     * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
     * @private
     */
    updateDatasets: function() {
      var me = this;
  
      if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
        return;
      }
  
      for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.updateDataset(i);
      }
  
      core_plugins.notify(me, 'afterDatasetsUpdate');
    },
  
    /**
     * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
     * @private
     */
    updateDataset: function(index) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index
      };
  
      if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
        return;
      }
  
      meta.controller.update();
  
      core_plugins.notify(me, 'afterDatasetUpdate', [args]);
    },
  
    render: function(config) {
      var me = this;
  
      if (!config || typeof config !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }
  
      var animationOptions = me.options.animation;
      var duration = valueOrDefault$8(config.duration, animationOptions && animationOptions.duration);
      var lazy = config.lazy;
  
      if (core_plugins.notify(me, 'beforeRender') === false) {
        return;
      }
  
      var onComplete = function(animation) {
        core_plugins.notify(me, 'afterRender');
        helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
      };
  
      if (animationOptions && duration) {
        var animation = new core_animation({
          numSteps: duration / 16.66, // 60 fps
          easing: config.easing || animationOptions.easing,
  
          render: function(chart, animationObject) {
            var easingFunction = helpers$1.easing.effects[animationObject.easing];
            var currentStep = animationObject.currentStep;
            var stepDecimal = currentStep / animationObject.numSteps;
  
            chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
          },
  
          onAnimationProgress: animationOptions.onProgress,
          onAnimationComplete: onComplete
        });
  
        core_animations.addAnimation(me, animation, duration, lazy);
      } else {
        me.draw();
  
        // See https://github.com/chartjs/Chart.js/issues/3781
        onComplete(new core_animation({numSteps: 0, chart: me}));
      }
  
      return me;
    },
  
    draw: function(easingValue) {
      var me = this;
  
      me.clear();
  
      if (helpers$1.isNullOrUndef(easingValue)) {
        easingValue = 1;
      }
  
      me.transition(easingValue);
  
      if (me.width <= 0 || me.height <= 0) {
        return;
      }
  
      if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
        return;
      }
  
      // Draw all the scales
      helpers$1.each(me.boxes, function(box) {
        box.draw(me.chartArea);
      }, me);
  
      me.drawDatasets(easingValue);
      me._drawTooltip(easingValue);
  
      core_plugins.notify(me, 'afterDraw', [easingValue]);
    },
  
    /**
     * @private
     */
    transition: function(easingValue) {
      var me = this;
  
      for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
        if (me.isDatasetVisible(i)) {
          me.getDatasetMeta(i).controller.transition(easingValue);
        }
      }
  
      me.tooltip.transition(easingValue);
    },
  
    /**
     * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
     * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
     * @private
     */
    drawDatasets: function(easingValue) {
      var me = this;
  
      if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
        return;
      }
  
      // Draw datasets reversed to support proper line stacking
      for (var i = (me.data.datasets || []).length - 1; i >= 0; --i) {
        if (me.isDatasetVisible(i)) {
          me.drawDataset(i, easingValue);
        }
      }
  
      core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
    },
  
    /**
     * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
     * hook, in which case, plugins will not be called on `afterDatasetDraw`.
     * @private
     */
    drawDataset: function(index, easingValue) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index,
        easingValue: easingValue
      };
  
      if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
        return;
      }
  
      meta.controller.draw(easingValue);
  
      core_plugins.notify(me, 'afterDatasetDraw', [args]);
    },
  
    /**
     * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
     * hook, in which case, plugins will not be called on `afterTooltipDraw`.
     * @private
     */
    _drawTooltip: function(easingValue) {
      var me = this;
      var tooltip = me.tooltip;
      var args = {
        tooltip: tooltip,
        easingValue: easingValue
      };
  
      if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
        return;
      }
  
      tooltip.draw();
  
      core_plugins.notify(me, 'afterTooltipDraw', [args]);
    },
  
    /**
     * Get the single element that was clicked on
     * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
     */
    getElementAtEvent: function(e) {
      return core_interaction.modes.single(this, e);
    },
  
    getElementsAtEvent: function(e) {
      return core_interaction.modes.label(this, e, {intersect: true});
    },
  
    getElementsAtXAxis: function(e) {
      return core_interaction.modes['x-axis'](this, e, {intersect: true});
    },
  
    getElementsAtEventForMode: function(e, mode, options) {
      var method = core_interaction.modes[mode];
      if (typeof method === 'function') {
        return method(this, e, options);
      }
  
      return [];
    },
  
    getDatasetAtEvent: function(e) {
      return core_interaction.modes.dataset(this, e, {intersect: true});
    },
  
    getDatasetMeta: function(datasetIndex) {
      var me = this;
      var dataset = me.data.datasets[datasetIndex];
      if (!dataset._meta) {
        dataset._meta = {};
      }
  
      var meta = dataset._meta[me.id];
      if (!meta) {
        meta = dataset._meta[me.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,			// See isDatasetVisible() comment
          xAxisID: null,
          yAxisID: null
        };
      }
  
      return meta;
    },
  
    getVisibleDatasetCount: function() {
      var count = 0;
      for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        if (this.isDatasetVisible(i)) {
          count++;
        }
      }
      return count;
    },
  
    isDatasetVisible: function(datasetIndex) {
      var meta = this.getDatasetMeta(datasetIndex);
  
      // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
      // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
      return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
    },
  
    generateLegend: function() {
      return this.options.legendCallback(this);
    },
  
    /**
     * @private
     */
    destroyDatasetMeta: function(datasetIndex) {
      var id = this.id;
      var dataset = this.data.datasets[datasetIndex];
      var meta = dataset._meta && dataset._meta[id];
  
      if (meta) {
        meta.controller.destroy();
        delete dataset._meta[id];
      }
    },
  
    destroy: function() {
      var me = this;
      var canvas = me.canvas;
      var i, ilen;
  
      me.stop();
  
      // dataset controllers need to cleanup associated data
      for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.destroyDatasetMeta(i);
      }
  
      if (canvas) {
        me.unbindEvents();
        helpers$1.canvas.clear(me);
        platform.releaseContext(me.ctx);
        me.canvas = null;
        me.ctx = null;
      }
  
      core_plugins.notify(me, 'destroy');
  
      delete Chart.instances[me.id];
    },
  
    toBase64Image: function() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
  
    initToolTip: function() {
      var me = this;
      me.tooltip = new core_tooltip({
        _chart: me,
        _chartInstance: me, // deprecated, backward compatibility
        _data: me.data,
        _options: me.options.tooltips
      }, me);
    },
  
    /**
     * @private
     */
    bindEvents: function() {
      var me = this;
      var listeners = me._listeners = {};
      var listener = function() {
        me.eventHandler.apply(me, arguments);
      };
  
      helpers$1.each(me.options.events, function(type) {
        platform.addEventListener(me, type, listener);
        listeners[type] = listener;
      });
  
      // Elements used to detect size change should not be injected for non responsive charts.
      // See https://github.com/chartjs/Chart.js/issues/2210
      if (me.options.responsive) {
        listener = function() {
          me.resize();
        };
  
        platform.addEventListener(me, 'resize', listener);
        listeners.resize = listener;
      }
    },
  
    /**
     * @private
     */
    unbindEvents: function() {
      var me = this;
      var listeners = me._listeners;
      if (!listeners) {
        return;
      }
  
      delete me._listeners;
      helpers$1.each(listeners, function(listener, type) {
        platform.removeEventListener(me, type, listener);
      });
    },
  
    updateHoverStyle: function(elements, mode, enabled) {
      var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
      var element, i, ilen;
  
      for (i = 0, ilen = elements.length; i < ilen; ++i) {
        element = elements[i];
        if (element) {
          this.getDatasetMeta(element._datasetIndex).controller[method](element);
        }
      }
    },
  
    /**
     * @private
     */
    eventHandler: function(e) {
      var me = this;
      var tooltip = me.tooltip;
  
      if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
        return;
      }
  
      // Buffer any update calls so that renders do not occur
      me._bufferedRender = true;
      me._bufferedRequest = null;
  
      var changed = me.handleEvent(e);
      // for smooth tooltip animations issue #4989
      // the tooltip should be the source of change
      // Animation check workaround:
      // tooltip._start will be null when tooltip isn't animating
      if (tooltip) {
        changed = tooltip._start
          ? tooltip.handleEvent(e)
          : changed | tooltip.handleEvent(e);
      }
  
      core_plugins.notify(me, 'afterEvent', [e]);
  
      var bufferedRequest = me._bufferedRequest;
      if (bufferedRequest) {
        // If we have an update that was triggered, we need to do a normal render
        me.render(bufferedRequest);
      } else if (changed && !me.animating) {
        // If entering, leaving, or changing elements, animate the change via pivot
        me.stop();
  
        // We only need to render at this point. Updating will cause scales to be
        // recomputed generating flicker & using more memory than necessary.
        me.render({
          duration: me.options.hover.animationDuration,
          lazy: true
        });
      }
  
      me._bufferedRender = false;
      me._bufferedRequest = null;
  
      return me;
    },
  
    /**
     * Handle an event
     * @private
     * @param {IEvent} event the event to handle
     * @return {boolean} true if the chart needs to re-render
     */
    handleEvent: function(e) {
      var me = this;
      var options = me.options || {};
      var hoverOptions = options.hover;
      var changed = false;
  
      me.lastActive = me.lastActive || [];
  
      // Find Active Elements for hover and tooltips
      if (e.type === 'mouseout') {
        me.active = [];
      } else {
        me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
      }
  
      // Invoke onHover hook
      // Need to call with native event here to not break backwards compatibility
      helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);
  
      if (e.type === 'mouseup' || e.type === 'click') {
        if (options.onClick) {
          // Use e.native here for backwards compatibility
          options.onClick.call(me, e.native, me.active);
        }
      }
  
      // Remove styling for last active (even if it may still be active)
      if (me.lastActive.length) {
        me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
      }
  
      // Built in hover styling
      if (me.active.length && hoverOptions.mode) {
        me.updateHoverStyle(me.active, hoverOptions.mode, true);
      }
  
      changed = !helpers$1.arrayEquals(me.active, me.lastActive);
  
      // Remember Last Actives
      me.lastActive = me.active;
  
      return changed;
    }
  });
  
  /**
   * NOTE(SB) We actually don't use this container anymore but we need to keep it
   * for backward compatibility. Though, it can still be useful for plugins that
   * would need to work on multiple charts?!
   */
  Chart.instances = {};
  
  var core_controller = Chart;
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, use Chart instead.
   * @class Chart.Controller
   * @deprecated since version 2.6
   * @todo remove at version 3
   * @private
   */
  Chart.Controller = Chart;
  
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */
  Chart.types = {};
  
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.configMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.configMerge = mergeConfig;
  
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.scaleMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.scaleMerge = mergeScaleConfig;
  
  var core_helpers = function() {
  
    // -- Basic js utility methods
  
    helpers$1.where = function(collection, filterCallback) {
      if (helpers$1.isArray(collection) && Array.prototype.filter) {
        return collection.filter(filterCallback);
      }
      var filtered = [];
  
      helpers$1.each(collection, function(item) {
        if (filterCallback(item)) {
          filtered.push(item);
        }
      });
  
      return filtered;
    };
    helpers$1.findIndex = Array.prototype.findIndex ?
      function(array, callback, scope) {
        return array.findIndex(callback, scope);
      } :
      function(array, callback, scope) {
        scope = scope === undefined ? array : scope;
        for (var i = 0, ilen = array.length; i < ilen; ++i) {
          if (callback.call(scope, array[i], i, array)) {
            return i;
          }
        }
        return -1;
      };
    helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
      // Default to start of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = -1;
      }
      for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };
    helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
      // Default to end of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = arrayToSearch.length;
      }
      for (var i = startIndex - 1; i >= 0; i--) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };
  
    // -- Math methods
    helpers$1.isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    helpers$1.almostEquals = function(x, y, epsilon) {
      return Math.abs(x - y) < epsilon;
    };
    helpers$1.almostWhole = function(x, epsilon) {
      var rounded = Math.round(x);
      return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
    };
    helpers$1.max = function(array) {
      return array.reduce(function(max, value) {
        if (!isNaN(value)) {
          return Math.max(max, value);
        }
        return max;
      }, Number.NEGATIVE_INFINITY);
    };
    helpers$1.min = function(array) {
      return array.reduce(function(min, value) {
        if (!isNaN(value)) {
          return Math.min(min, value);
        }
        return min;
      }, Number.POSITIVE_INFINITY);
    };
    helpers$1.sign = Math.sign ?
      function(x) {
        return Math.sign(x);
      } :
      function(x) {
        x = +x; // convert to a number
        if (x === 0 || isNaN(x)) {
          return x;
        }
        return x > 0 ? 1 : -1;
      };
    helpers$1.log10 = Math.log10 ?
      function(x) {
        return Math.log10(x);
      } :
      function(x) {
        var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
        // Check for whole powers of 10,
        // which due to floating point rounding error should be corrected.
        var powerOf10 = Math.round(exponent);
        var isPowerOf10 = x === Math.pow(10, powerOf10);
  
        return isPowerOf10 ? powerOf10 : exponent;
      };
    helpers$1.toRadians = function(degrees) {
      return degrees * (Math.PI / 180);
    };
    helpers$1.toDegrees = function(radians) {
      return radians * (180 / Math.PI);
    };
  
    /**
     * Returns the number of decimal places
     * i.e. the number of digits after the decimal point, of the value of this Number.
     * @param {number} x - A number.
     * @returns {number} The number of decimal places.
     * @private
     */
    helpers$1._decimalPlaces = function(x) {
      if (!helpers$1.isFinite(x)) {
        return;
      }
      var e = 1;
      var p = 0;
      while (Math.round(x * e) / e !== x) {
        e *= 10;
        p++;
      }
      return p;
    };
  
    // Gets the angle from vertical upright to the point about a centre.
    helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
      var distanceFromXCenter = anglePoint.x - centrePoint.x;
      var distanceFromYCenter = anglePoint.y - centrePoint.y;
      var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  
      var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  
      if (angle < (-0.5 * Math.PI)) {
        angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
      }
  
      return {
        angle: angle,
        distance: radialDistanceFromCenter
      };
    };
    helpers$1.distanceBetweenPoints = function(pt1, pt2) {
      return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    };
  
    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.helpers.aliasPixel
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */
    helpers$1.aliasPixel = function(pixelWidth) {
      return (pixelWidth % 2 === 0) ? 0 : 0.5;
    };
  
    /**
     * Returns the aligned pixel value to avoid anti-aliasing blur
     * @param {Chart} chart - The chart instance.
     * @param {number} pixel - A pixel value.
     * @param {number} width - The width of the element.
     * @returns {number} The aligned pixel value.
     * @private
     */
    helpers$1._alignPixel = function(chart, pixel, width) {
      var devicePixelRatio = chart.currentDevicePixelRatio;
      var halfWidth = width / 2;
      return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    };
  
    helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
      // Props to Rob Spencer at scaled innovation for his post on splining between points
      // http://scaledinnovation.com/analytics/splines/aboutSplines.html
  
      // This function must also respect "skipped" points
  
      var previous = firstPoint.skip ? middlePoint : firstPoint;
      var current = middlePoint;
      var next = afterPoint.skip ? middlePoint : afterPoint;
  
      var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
      var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
  
      var s01 = d01 / (d01 + d12);
      var s12 = d12 / (d01 + d12);
  
      // If all points are the same, s01 & s02 will be inf
      s01 = isNaN(s01) ? 0 : s01;
      s12 = isNaN(s12) ? 0 : s12;
  
      var fa = t * s01; // scaling factor for triangle Ta
      var fb = t * s12;
  
      return {
        previous: {
          x: current.x - fa * (next.x - previous.x),
          y: current.y - fa * (next.y - previous.y)
        },
        next: {
          x: current.x + fb * (next.x - previous.x),
          y: current.y + fb * (next.y - previous.y)
        }
      };
    };
    helpers$1.EPSILON = Number.EPSILON || 1e-14;
    helpers$1.splineCurveMonotone = function(points) {
      // This function calculates Bézier control points in a similar way than |splineCurve|,
      // but preserves monotonicity of the provided data and ensures no local extremums are added
      // between the dataset discrete points due to the interpolation.
      // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
  
      var pointsWithTangents = (points || []).map(function(point) {
        return {
          model: point._model,
          deltaK: 0,
          mK: 0
        };
      });
  
      // Calculate slopes (deltaK) and initialize tangents (mK)
      var pointsLen = pointsWithTangents.length;
      var i, pointBefore, pointCurrent, pointAfter;
      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];
        if (pointCurrent.model.skip) {
          continue;
        }
  
        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
        if (pointAfter && !pointAfter.model.skip) {
          var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);
  
          // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
          pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
        }
  
        if (!pointBefore || pointBefore.model.skip) {
          pointCurrent.mK = pointCurrent.deltaK;
        } else if (!pointAfter || pointAfter.model.skip) {
          pointCurrent.mK = pointBefore.deltaK;
        } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
          pointCurrent.mK = 0;
        } else {
          pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
        }
      }
  
      // Adjust tangents to ensure monotonic properties
      var alphaK, betaK, tauK, squaredMagnitude;
      for (i = 0; i < pointsLen - 1; ++i) {
        pointCurrent = pointsWithTangents[i];
        pointAfter = pointsWithTangents[i + 1];
        if (pointCurrent.model.skip || pointAfter.model.skip) {
          continue;
        }
  
        if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
          pointCurrent.mK = pointAfter.mK = 0;
          continue;
        }
  
        alphaK = pointCurrent.mK / pointCurrent.deltaK;
        betaK = pointAfter.mK / pointCurrent.deltaK;
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) {
          continue;
        }
  
        tauK = 3 / Math.sqrt(squaredMagnitude);
        pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
        pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
      }
  
      // Compute control points
      var deltaX;
      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];
        if (pointCurrent.model.skip) {
          continue;
        }
  
        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
        if (pointBefore && !pointBefore.model.skip) {
          deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
          pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
          pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
        }
        if (pointAfter && !pointAfter.model.skip) {
          deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
          pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
          pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
        }
      }
    };
    helpers$1.nextItem = function(collection, index, loop) {
      if (loop) {
        return index >= collection.length - 1 ? collection[0] : collection[index + 1];
      }
      return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
    };
    helpers$1.previousItem = function(collection, index, loop) {
      if (loop) {
        return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
      }
      return index <= 0 ? collection[0] : collection[index - 1];
    };
    // Implementation of the nice number algorithm used in determining where axis labels will go
    helpers$1.niceNum = function(range, round) {
      var exponent = Math.floor(helpers$1.log10(range));
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;
  
      if (round) {
        if (fraction < 1.5) {
          niceFraction = 1;
        } else if (fraction < 3) {
          niceFraction = 2;
        } else if (fraction < 7) {
          niceFraction = 5;
        } else {
          niceFraction = 10;
        }
      } else if (fraction <= 1.0) {
        niceFraction = 1;
      } else if (fraction <= 2) {
        niceFraction = 2;
      } else if (fraction <= 5) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }
  
      return niceFraction * Math.pow(10, exponent);
    };
    // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    helpers$1.requestAnimFrame = (function() {
      if (typeof window === 'undefined') {
        return function(callback) {
          callback();
        };
      }
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          return window.setTimeout(callback, 1000 / 60);
        };
    }());
    // -- DOM methods
    helpers$1.getRelativePosition = function(evt, chart) {
      var mouseX, mouseY;
      var e = evt.originalEvent || evt;
      var canvas = evt.target || evt.srcElement;
      var boundingRect = canvas.getBoundingClientRect();
  
      var touches = e.touches;
      if (touches && touches.length > 0) {
        mouseX = touches[0].clientX;
        mouseY = touches[0].clientY;
  
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
  
      // Scale mouse coordinates into canvas coordinates
      // by following the pattern laid out by 'jerryj' in the comments of
      // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
      var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
      var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
      var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
      var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
      var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
      var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
  
      // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
      // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
      mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
      mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);
  
      return {
        x: mouseX,
        y: mouseY
      };
  
    };
  
    // Private helper function to convert max-width/max-height values that may be percentages into a number
    function parseMaxStyle(styleValue, node, parentProperty) {
      var valueInPixels;
      if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);
  
        if (styleValue.indexOf('%') !== -1) {
          // percentage * size in dimension
          valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
        }
      } else {
        valueInPixels = styleValue;
      }
  
      return valueInPixels;
    }
  
    /**
     * Returns if the given value contains an effective constraint.
     * @private
     */
    function isConstrainedValue(value) {
      return value !== undefined && value !== null && value !== 'none';
    }
  
    /**
     * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
     * @param {HTMLElement} domNode - the node to check the constraint on
     * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
     * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
     * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
     */
    function getConstraintDimension(domNode, maxStyle, percentageProperty) {
      var view = document.defaultView;
      var parentNode = helpers$1._getParentNode(domNode);
      var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
      var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
      var hasCNode = isConstrainedValue(constrainedNode);
      var hasCContainer = isConstrainedValue(constrainedContainer);
      var infinity = Number.POSITIVE_INFINITY;
  
      if (hasCNode || hasCContainer) {
        return Math.min(
          hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
          hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
      }
  
      return 'none';
    }
    // returns Number or undefined if no constraint
    helpers$1.getConstraintWidth = function(domNode) {
      return getConstraintDimension(domNode, 'max-width', 'clientWidth');
    };
    // returns Number or undefined if no constraint
    helpers$1.getConstraintHeight = function(domNode) {
      return getConstraintDimension(domNode, 'max-height', 'clientHeight');
    };
    /**
     * @private
      */
    helpers$1._calculatePadding = function(container, padding, parentDimension) {
      padding = helpers$1.getStyle(container, padding);
  
      return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
    };
    /**
     * @private
     */
    helpers$1._getParentNode = function(domNode) {
      var parent = domNode.parentNode;
      if (parent && parent.toString() === '[object ShadowRoot]') {
        parent = parent.host;
      }
      return parent;
    };
    helpers$1.getMaximumWidth = function(domNode) {
      var container = helpers$1._getParentNode(domNode);
      if (!container) {
        return domNode.clientWidth;
      }
  
      var clientWidth = container.clientWidth;
      var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
      var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);
  
      var w = clientWidth - paddingLeft - paddingRight;
      var cw = helpers$1.getConstraintWidth(domNode);
      return isNaN(cw) ? w : Math.min(w, cw);
    };
    helpers$1.getMaximumHeight = function(domNode) {
      var container = helpers$1._getParentNode(domNode);
      if (!container) {
        return domNode.clientHeight;
      }
  
      var clientHeight = container.clientHeight;
      var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
      var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);
  
      var h = clientHeight - paddingTop - paddingBottom;
      var ch = helpers$1.getConstraintHeight(domNode);
      return isNaN(ch) ? h : Math.min(h, ch);
    };
    helpers$1.getStyle = function(el, property) {
      return el.currentStyle ?
        el.currentStyle[property] :
        document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
    };
    helpers$1.retinaScale = function(chart, forceRatio) {
      var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
      if (pixelRatio === 1) {
        return;
      }
  
      var canvas = chart.canvas;
      var height = chart.height;
      var width = chart.width;
  
      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;
      chart.ctx.scale(pixelRatio, pixelRatio);
  
      // If no style has been set on the canvas, the render size is used as display size,
      // making the chart visually bigger, so let's enforce it to the "correct" values.
      // See https://github.com/chartjs/Chart.js/issues/3575
      if (!canvas.style.height && !canvas.style.width) {
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
      }
    };
    // -- Canvas methods
    helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
      return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
    };
    helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
      cache = cache || {};
      var data = cache.data = cache.data || {};
      var gc = cache.garbageCollect = cache.garbageCollect || [];
  
      if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
      }
  
      ctx.font = font;
      var longest = 0;
      helpers$1.each(arrayOfThings, function(thing) {
        // Undefined strings and arrays should not be measured
        if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
          longest = helpers$1.measureText(ctx, data, gc, longest, thing);
        } else if (helpers$1.isArray(thing)) {
          // if it is an array lets measure each element
          // to do maybe simplify this function a bit so we can do this more recursively?
          helpers$1.each(thing, function(nestedThing) {
            // Undefined strings and arrays should not be measured
            if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
              longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
            }
          });
        }
      });
  
      var gcLen = gc.length / 2;
      if (gcLen > arrayOfThings.length) {
        for (var i = 0; i < gcLen; i++) {
          delete data[gc[i]];
        }
        gc.splice(0, gcLen);
      }
      return longest;
    };
    helpers$1.measureText = function(ctx, data, gc, longest, string) {
      var textWidth = data[string];
      if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
      }
      if (textWidth > longest) {
        longest = textWidth;
      }
      return longest;
    };
    helpers$1.numberOfLabelLines = function(arrayOfThings) {
      var numberOfLines = 1;
      helpers$1.each(arrayOfThings, function(thing) {
        if (helpers$1.isArray(thing)) {
          if (thing.length > numberOfLines) {
            numberOfLines = thing.length;
          }
        }
      });
      return numberOfLines;
    };
  
    helpers$1.color = !chartjsColor ?
      function(value) {
        console.error('Color.js not found!');
        return value;
      } :
      function(value) {
        /* global CanvasGradient */
        if (value instanceof CanvasGradient) {
          value = core_defaults.global.defaultColor;
        }
  
        return chartjsColor(value);
      };
  
    helpers$1.getHoverColor = function(colorValue) {
      /* global CanvasPattern */
      return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
        colorValue :
        helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
    };
  };
  
  function abstract() {
    throw new Error(
      'This method is not implemented: either no adapter can ' +
      'be found or an incomplete integration was provided.'
    );
  }
  
  /**
   * Date adapter (current used by the time scale)
   * @namespace Chart._adapters._date
   * @memberof Chart._adapters
   * @private
   */
  
  /**
   * Currently supported unit string values.
   * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
   * @memberof Chart._adapters._date
   * @name Unit
   */
  
  /**
   * @class
   */
  function DateAdapter(options) {
    this.options = options || {};
  }
  
  helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
    /**
     * Returns a map of time formats for the supported formatting units defined
     * in Unit as well as 'datetime' representing a detailed date/time string.
     * @returns {{string: string}}
     */
    formats: abstract,
  
    /**
     * Parses the given `value` and return the associated timestamp.
     * @param {any} value - the value to parse (usually comes from the data)
     * @param {string} [format] - the expected data format
     * @returns {(number|null)}
     * @function
     */
    parse: abstract,
  
    /**
     * Returns the formatted date in the specified `format` for a given `timestamp`.
     * @param {number} timestamp - the timestamp to format
     * @param {string} format - the date/time token
     * @return {string}
     * @function
     */
    format: abstract,
  
    /**
     * Adds the specified `amount` of `unit` to the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {number} amount - the amount to add
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    add: abstract,
  
    /**
     * Returns the number of `unit` between the given timestamps.
     * @param {number} max - the input timestamp (reference)
     * @param {number} min - the timestamp to substract
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    diff: abstract,
  
    /**
     * Returns start of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @param {number} [weekday] - the ISO day of the week with 1 being Monday
     * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
     * @function
     */
    startOf: abstract,
  
    /**
     * Returns end of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @function
     */
    endOf: abstract,
  
    // DEPRECATIONS
  
    /**
     * Provided for backward compatibility for scale.getValueForPixel(),
     * this method should be overridden only by the moment adapter.
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function(value) {
      return value;
    }
  });
  
  DateAdapter.override = function(members) {
    helpers$1.extend(DateAdapter.prototype, members);
  };
  
  var _date = DateAdapter;
  
  var core_adapters = {
    _date: _date
  };
  
  /**
   * Namespace to hold static tick generation functions
   * @namespace Chart.Ticks
   */
  var core_ticks = {
    /**
     * Namespace to hold formatters for different types of ticks
     * @namespace Chart.Ticks.formatters
     */
    formatters: {
      /**
       * Formatter for value labels
       * @method Chart.Ticks.formatters.values
       * @param value the value to display
       * @return {string|string[]} the label to display
       */
      values: function(value) {
        return helpers$1.isArray(value) ? value : '' + value;
      },
  
      /**
       * Formatter for linear numeric ticks
       * @method Chart.Ticks.formatters.linear
       * @param tickValue {number} the value to be formatted
       * @param index {number} the position of the tickValue parameter in the ticks array
       * @param ticks {number[]} the list of ticks being converted
       * @return {string} string representation of the tickValue parameter
       */
      linear: function(tickValue, index, ticks) {
        // If we have lots of ticks, don't use the ones
        var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];
  
        // If we have a number like 2.5 as the delta, figure out how many decimal places we need
        if (Math.abs(delta) > 1) {
          if (tickValue !== Math.floor(tickValue)) {
            // not an integer
            delta = tickValue - Math.floor(tickValue);
          }
        }
  
        var logDelta = helpers$1.log10(Math.abs(delta));
        var tickString = '';
  
        if (tickValue !== 0) {
          var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
          if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
            var logTick = helpers$1.log10(Math.abs(tickValue));
            tickString = tickValue.toExponential(Math.floor(logTick) - Math.floor(logDelta));
          } else {
            var numDecimal = -1 * Math.floor(logDelta);
            numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
            tickString = tickValue.toFixed(numDecimal);
          }
        } else {
          tickString = '0'; // never show decimal places for 0
        }
  
        return tickString;
      },
  
      logarithmic: function(tickValue, index, ticks) {
        var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));
  
        if (tickValue === 0) {
          return '0';
        } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
          return tickValue.toExponential();
        }
        return '';
      }
    }
  };
  
  var valueOrDefault$9 = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;
  
  core_defaults._set('scale', {
    display: true,
    position: 'left',
    offset: false,
  
    // grid line settings
    gridLines: {
      display: true,
      color: 'rgba(0, 0, 0, 0.1)',
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: 'rgba(0,0,0,0.25)',
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0.0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0.0
    },
  
    // scale label
    scaleLabel: {
      // display property
      display: false,
  
      // actual label
      labelString: '',
  
      // top/bottom padding
      padding: {
        top: 4,
        bottom: 4
      }
    },
  
    // label settings
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
      callback: core_ticks.formatters.values,
      minor: {},
      major: {}
    }
  });
  
  function labelsFromTicks(ticks) {
    var labels = [];
    var i, ilen;
  
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      labels.push(ticks[i].label);
    }
  
    return labels;
  }
  
  function getPixelForGridLine(scale, index, offsetGridLines) {
    var lineValue = scale.getPixelForTick(index);
  
    if (offsetGridLines) {
      if (scale.getTicks().length === 1) {
        lineValue -= scale.isHorizontal() ?
          Math.max(lineValue - scale.left, scale.right - lineValue) :
          Math.max(lineValue - scale.top, scale.bottom - lineValue);
      } else if (index === 0) {
        lineValue -= (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
      }
    }
    return lineValue;
  }
  
  function computeTextSize(context, tick, font) {
    return helpers$1.isArray(tick) ?
      helpers$1.longestText(context, font, tick) :
      context.measureText(tick).width;
  }
  
  var core_scale = core_element.extend({
    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */
    getPadding: function() {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0
      };
    },
  
    /**
     * Returns the scale tick objects ({label, major})
     * @since 2.7
     */
    getTicks: function() {
      return this._ticks;
    },
  
    // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type
  
    mergeTicksOptions: function() {
      var ticks = this.options.ticks;
      if (ticks.minor === false) {
        ticks.minor = {
          display: false
        };
      }
      if (ticks.major === false) {
        ticks.major = {
          display: false
        };
      }
      for (var key in ticks) {
        if (key !== 'major' && key !== 'minor') {
          if (typeof ticks.minor[key] === 'undefined') {
            ticks.minor[key] = ticks[key];
          }
          if (typeof ticks.major[key] === 'undefined') {
            ticks.major[key] = ticks[key];
          }
        }
      }
    },
    beforeUpdate: function() {
      helpers$1.callback(this.options.beforeUpdate, [this]);
    },
  
    update: function(maxWidth, maxHeight, margins) {
      var me = this;
      var i, ilen, labels, label, ticks, tick;
  
      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();
  
      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers$1.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
  
      me._maxLabelLines = 0;
      me.longestLabelWidth = 0;
      me.longestTextCache = me.longestTextCache || {};
  
      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
  
      // Data min/max
      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();
  
      // Ticks - `this.ticks` is now DEPRECATED!
      // Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
      // and must not be accessed directly from outside this class. `this.ticks` being
      // around for long time and not marked as private, we can't change its structure
      // without unexpected breaking changes. If you need to access the scale ticks,
      // use scale.getTicks() instead.
  
      me.beforeBuildTicks();
  
      // New implementations should return an array of objects but for BACKWARD COMPAT,
      // we still support no return (`this.ticks` internally set by calling this method).
      ticks = me.buildTicks() || [];
  
      // Allow modification of ticks in callback.
      ticks = me.afterBuildTicks(ticks) || ticks;
  
      me.beforeTickToLabelConversion();
  
      // New implementations should return the formatted tick labels but for BACKWARD
      // COMPAT, we still support no return (`this.ticks` internally changed by calling
      // this method and supposed to contain only string values).
      labels = me.convertTicksToLabels(ticks) || me.ticks;
  
      me.afterTickToLabelConversion();
  
      me.ticks = labels;   // BACKWARD COMPATIBILITY
  
      // IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!
  
      // BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        label = labels[i];
        tick = ticks[i];
        if (!tick) {
          ticks.push(tick = {
            label: label,
            major: false
          });
        } else {
          tick.label = label;
        }
      }
  
      me._ticks = ticks;
  
      // Tick Rotation
      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();
      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();
  
      return me.minSize;
  
    },
    afterUpdate: function() {
      helpers$1.callback(this.options.afterUpdate, [this]);
    },
  
    //
  
    beforeSetDimensions: function() {
      helpers$1.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;
  
        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }
  
      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    },
    afterSetDimensions: function() {
      helpers$1.callback(this.options.afterSetDimensions, [this]);
    },
  
    // Data limits
    beforeDataLimits: function() {
      helpers$1.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: helpers$1.noop,
    afterDataLimits: function() {
      helpers$1.callback(this.options.afterDataLimits, [this]);
    },
  
    //
    beforeBuildTicks: function() {
      helpers$1.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: helpers$1.noop,
    afterBuildTicks: function(ticks) {
      var me = this;
      // ticks is empty for old axis implementations here
      if (helpers$1.isArray(ticks) && ticks.length) {
        return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
      }
      // Support old implementations (that modified `this.ticks` directly in buildTicks)
      me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
      return ticks;
    },
  
    beforeTickToLabelConversion: function() {
      helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function() {
      var me = this;
      // Convert ticks to strings
      var tickOpts = me.options.ticks;
      me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
    },
    afterTickToLabelConversion: function() {
      helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
    },
  
    //
  
    beforeCalculateTickRotation: function() {
      helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function() {
      var me = this;
      var context = me.ctx;
      var tickOpts = me.options.ticks;
      var labels = labelsFromTicks(me._ticks);
  
      // Get the width of each grid by calculating the difference
      // between x offsets between 0 and 1.
      var tickFont = helpers$1.options._parseFont(tickOpts);
      context.font = tickFont.string;
  
      var labelRotation = tickOpts.minRotation || 0;
  
      if (labels.length && me.options.display && me.isHorizontal()) {
        var originalLabelWidth = helpers$1.longestText(context, tickFont.string, labels, me.longestTextCache);
        var labelWidth = originalLabelWidth;
        var cosRotation, sinRotation;
  
        // Allow 3 pixels x2 padding either side for label readability
        var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;
  
        // Max label rotation can be set or default to 90 - also act as a loop counter
        while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
          var angleRadians = helpers$1.toRadians(labelRotation);
          cosRotation = Math.cos(angleRadians);
          sinRotation = Math.sin(angleRadians);
  
          if (sinRotation * originalLabelWidth > me.maxHeight) {
            // go back one step
            labelRotation--;
            break;
          }
  
          labelRotation++;
          labelWidth = cosRotation * originalLabelWidth;
        }
      }
  
      me.labelRotation = labelRotation;
    },
    afterCalculateTickRotation: function() {
      helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
    },
  
    //
  
    beforeFit: function() {
      helpers$1.callback(this.options.beforeFit, [this]);
    },
    fit: function() {
      var me = this;
      // Reset
      var minSize = me.minSize = {
        width: 0,
        height: 0
      };
  
      var labels = labelsFromTicks(me._ticks);
  
      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;
      var display = me._isVisible();
      var position = opts.position;
      var isHorizontal = me.isHorizontal();
  
      var parseFont = helpers$1.options._parseFont;
      var tickFont = parseFont(tickOpts);
      var tickMarkLength = opts.gridLines.tickMarkLength;
  
      // Width
      if (isHorizontal) {
        // subtract the margins to line up with the chartArea if we are a full width scale
        minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
      } else {
        minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
      }
  
      // height
      if (isHorizontal) {
        minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
      } else {
        minSize.height = me.maxHeight; // fill all the height
      }
  
      // Are we showing a title for the scale?
      if (scaleLabelOpts.display && display) {
        var scaleLabelFont = parseFont(scaleLabelOpts);
        var scaleLabelPadding = helpers$1.options.toPadding(scaleLabelOpts.padding);
        var deltaHeight = scaleLabelFont.lineHeight + scaleLabelPadding.height;
  
        if (isHorizontal) {
          minSize.height += deltaHeight;
        } else {
          minSize.width += deltaHeight;
        }
      }
  
      // Don't bother fitting the ticks if we are not showing the labels
      if (tickOpts.display && display) {
        var largestTextWidth = helpers$1.longestText(me.ctx, tickFont.string, labels, me.longestTextCache);
        var tallestLabelHeightInLines = helpers$1.numberOfLabelLines(labels);
        var lineSpace = tickFont.size * 0.5;
        var tickPadding = me.options.ticks.padding;
  
        // Store max number of lines and widest label for _autoSkip
        me._maxLabelLines = tallestLabelHeightInLines;
        me.longestLabelWidth = largestTextWidth;
  
        if (isHorizontal) {
          var angleRadians = helpers$1.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);
  
          // TODO - improve this calculation
          var labelHeight = (sinRotation * largestTextWidth)
            + (tickFont.lineHeight * tallestLabelHeightInLines)
            + lineSpace; // padding
  
          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
  
          me.ctx.font = tickFont.string;
          var firstLabelWidth = computeTextSize(me.ctx, labels[0], tickFont.string);
          var lastLabelWidth = computeTextSize(me.ctx, labels[labels.length - 1], tickFont.string);
          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight = me.right - me.getPixelForTick(labels.length - 1);
          var paddingLeft, paddingRight;
  
          // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
          // which means that the right padding is dominated by the font height
          if (me.labelRotation !== 0) {
            paddingLeft = position === 'bottom' ? (cosRotation * firstLabelWidth) : (cosRotation * lineSpace);
            paddingRight = position === 'bottom' ? (cosRotation * lineSpace) : (cosRotation * lastLabelWidth);
          } else {
            paddingLeft = firstLabelWidth / 2;
            paddingRight = lastLabelWidth / 2;
          }
          me.paddingLeft = Math.max(paddingLeft - offsetLeft, 0) + 3; // add 3 px to move away from canvas edges
          me.paddingRight = Math.max(paddingRight - offsetRight, 0) + 3;
        } else {
          // A vertical axis is more constrained by the width. Labels are the
          // dominant factor here, so get that length first and account for padding
          if (tickOpts.mirror) {
            largestTextWidth = 0;
          } else {
            // use lineSpace for consistency with horizontal axis
            // tickPadding is not implemented for horizontal
            largestTextWidth += tickPadding + lineSpace;
          }
  
          minSize.width = Math.min(me.maxWidth, minSize.width + largestTextWidth);
  
          me.paddingTop = tickFont.size / 2;
          me.paddingBottom = tickFont.size / 2;
        }
      }
  
      me.handleMargins();
  
      me.width = minSize.width;
      me.height = minSize.height;
    },
  
    /**
     * Handle margins and padding interactions
     * @private
     */
    handleMargins: function() {
      var me = this;
      if (me.margins) {
        me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
        me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
        me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
        me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
      }
    },
  
    afterFit: function() {
      helpers$1.callback(this.options.afterFit, [this]);
    },
  
    // Shared Methods
    isHorizontal: function() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },
    isFullWidth: function() {
      return (this.options.fullWidth);
    },
  
    // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
    getRightValue: function(rawValue) {
      // Null and undefined values first
      if (helpers$1.isNullOrUndef(rawValue)) {
        return NaN;
      }
      // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
      if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
        return NaN;
      }
      // If it is in fact an object, dive in one more level
      if (rawValue) {
        if (this.isHorizontal()) {
          if (rawValue.x !== undefined) {
            return this.getRightValue(rawValue.x);
          }
        } else if (rawValue.y !== undefined) {
          return this.getRightValue(rawValue.y);
        }
      }
  
      // Value is good, return it
      return rawValue;
    },
  
    /**
     * Used to get the value to display in the tooltip for the data at the given index
     * @param index
     * @param datasetIndex
     */
    getLabelForIndex: helpers$1.noop,
  
    /**
     * Returns the location of the given data point. Value can either be an index or a numerical value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param value
     * @param index
     * @param datasetIndex
     */
    getPixelForValue: helpers$1.noop,
  
    /**
     * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param pixel
     */
    getValueForPixel: helpers$1.noop,
  
    /**
     * Returns the location of the tick at the given index
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForTick: function(index) {
      var me = this;
      var offset = me.options.offset;
      if (me.isHorizontal()) {
        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
        var tickWidth = innerWidth / Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
        var pixel = (tickWidth * index) + me.paddingLeft;
  
        if (offset) {
          pixel += tickWidth / 2;
        }
  
        var finalVal = me.left + pixel;
        finalVal += me.isFullWidth() ? me.margins.left : 0;
        return finalVal;
      }
      var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
      return me.top + (index * (innerHeight / (me._ticks.length - 1)));
    },
  
    /**
     * Utility for getting the pixel location of a percentage of scale
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForDecimal: function(decimal) {
      var me = this;
      if (me.isHorizontal()) {
        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
        var valueOffset = (innerWidth * decimal) + me.paddingLeft;
  
        var finalVal = me.left + valueOffset;
        finalVal += me.isFullWidth() ? me.margins.left : 0;
        return finalVal;
      }
      return me.top + (decimal * me.height);
    },
  
    /**
     * Returns the pixel for the minimum chart value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getBasePixel: function() {
      return this.getPixelForValue(this.getBaseValue());
    },
  
    getBaseValue: function() {
      var me = this;
      var min = me.min;
      var max = me.max;
  
      return me.beginAtZero ? 0 :
        min < 0 && max < 0 ? max :
        min > 0 && max > 0 ? min :
        0;
    },
  
    /**
     * Returns a subset of ticks to be plotted to avoid overlapping labels.
     * @private
     */
    _autoSkip: function(ticks) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      var optionTicks = me.options.ticks.minor;
      var tickCount = ticks.length;
      var skipRatio = false;
      var maxTicks = optionTicks.maxTicksLimit;
  
      // Total space needed to display all ticks. First and last ticks are
      // drawn as their center at end of axis, so tickCount-1
      var ticksLength = me._tickSize() * (tickCount - 1);
  
      // Axis length
      var axisLength = isHorizontal
        ? me.width - (me.paddingLeft + me.paddingRight)
        : me.height - (me.paddingTop + me.PaddingBottom);
  
      var result = [];
      var i, tick;
  
      if (ticksLength > axisLength) {
        skipRatio = 1 + Math.floor(ticksLength / axisLength);
      }
  
      // if they defined a max number of optionTicks,
      // increase skipRatio until that number is met
      if (tickCount > maxTicks) {
        skipRatio = Math.max(skipRatio, 1 + Math.floor(tickCount / maxTicks));
      }
  
      for (i = 0; i < tickCount; i++) {
        tick = ticks[i];
  
        if (skipRatio > 1 && i % skipRatio > 0) {
          // leave tick in place but make sure it's not displayed (#4635)
          delete tick.label;
        }
        result.push(tick);
      }
      return result;
    },
  
    /**
     * @private
     */
    _tickSize: function() {
      var me = this;
      var isHorizontal = me.isHorizontal();
      var optionTicks = me.options.ticks.minor;
  
      // Calculate space needed by label in axis direction.
      var rot = helpers$1.toRadians(me.labelRotation);
      var cos = Math.abs(Math.cos(rot));
      var sin = Math.abs(Math.sin(rot));
  
      var padding = optionTicks.autoSkipPadding || 0;
      var w = (me.longestLabelWidth + padding) || 0;
  
      var tickFont = helpers$1.options._parseFont(optionTicks);
      var h = (me._maxLabelLines * tickFont.lineHeight + padding) || 0;
  
      // Calculate space needed for 1 tick in axis direction.
      return isHorizontal
        ? h * cos > w * sin ? w / cos : h / sin
        : h * sin < w * cos ? h / cos : w / sin;
    },
  
    /**
     * @private
     */
    _isVisible: function() {
      var me = this;
      var chart = me.chart;
      var display = me.options.display;
      var i, ilen, meta;
  
      if (display !== 'auto') {
        return !!display;
      }
  
      // When 'auto', the scale is visible if at least one associated dataset is visible.
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
            return true;
          }
        }
      }
  
      return false;
    },
  
    /**
     * Actually draw the scale on the canvas
     * @param {object} chartArea - the area of the chart to draw full grid lines on
     */
    draw: function(chartArea) {
      var me = this;
      var options = me.options;
  
      if (!me._isVisible()) {
        return;
      }
  
      var chart = me.chart;
      var context = me.ctx;
      var globalDefaults = core_defaults.global;
      var defaultFontColor = globalDefaults.defaultFontColor;
      var optionTicks = options.ticks.minor;
      var optionMajorTicks = options.ticks.major || optionTicks;
      var gridLines = options.gridLines;
      var scaleLabel = options.scaleLabel;
      var position = options.position;
  
      var isRotated = me.labelRotation !== 0;
      var isMirrored = optionTicks.mirror;
      var isHorizontal = me.isHorizontal();
  
      var parseFont = helpers$1.options._parseFont;
      var ticks = optionTicks.display && optionTicks.autoSkip ? me._autoSkip(me.getTicks()) : me.getTicks();
      var tickFontColor = valueOrDefault$9(optionTicks.fontColor, defaultFontColor);
      var tickFont = parseFont(optionTicks);
      var lineHeight = tickFont.lineHeight;
      var majorTickFontColor = valueOrDefault$9(optionMajorTicks.fontColor, defaultFontColor);
      var majorTickFont = parseFont(optionMajorTicks);
      var tickPadding = optionTicks.padding;
      var labelOffset = optionTicks.labelOffset;
  
      var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;
  
      var scaleLabelFontColor = valueOrDefault$9(scaleLabel.fontColor, defaultFontColor);
      var scaleLabelFont = parseFont(scaleLabel);
      var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
      var labelRotationRadians = helpers$1.toRadians(me.labelRotation);
  
      var itemsToDraw = [];
  
      var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
      var alignPixel = helpers$1._alignPixel;
      var borderValue, tickStart, tickEnd;
  
      if (position === 'top') {
        borderValue = alignPixel(chart, me.bottom, axisWidth);
        tickStart = me.bottom - tl;
        tickEnd = borderValue - axisWidth / 2;
      } else if (position === 'bottom') {
        borderValue = alignPixel(chart, me.top, axisWidth);
        tickStart = borderValue + axisWidth / 2;
        tickEnd = me.top + tl;
      } else if (position === 'left') {
        borderValue = alignPixel(chart, me.right, axisWidth);
        tickStart = me.right - tl;
        tickEnd = borderValue - axisWidth / 2;
      } else {
        borderValue = alignPixel(chart, me.left, axisWidth);
        tickStart = borderValue + axisWidth / 2;
        tickEnd = me.left + tl;
      }
  
      var epsilon = 0.0000001; // 0.0000001 is margin in pixels for Accumulated error.
  
      helpers$1.each(ticks, function(tick, index) {
        // autoskipper skipped this tick (#4635)
        if (helpers$1.isNullOrUndef(tick.label)) {
          return;
        }
  
        var label = tick.label;
        var lineWidth, lineColor, borderDash, borderDashOffset;
        if (index === me.zeroLineIndex && options.offset === gridLines.offsetGridLines) {
          // Draw the first index specially
          lineWidth = gridLines.zeroLineWidth;
          lineColor = gridLines.zeroLineColor;
          borderDash = gridLines.zeroLineBorderDash || [];
          borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
        } else {
          lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, index);
          lineColor = valueAtIndexOrDefault(gridLines.color, index);
          borderDash = gridLines.borderDash || [];
          borderDashOffset = gridLines.borderDashOffset || 0.0;
        }
  
        // Common properties
        var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY, textOffset, textAlign;
        var labelCount = helpers$1.isArray(label) ? label.length : 1;
        var lineValue = getPixelForGridLine(me, index, gridLines.offsetGridLines);
  
        if (isHorizontal) {
          var labelYOffset = tl + tickPadding;
  
          if (lineValue < me.left - epsilon) {
            lineColor = 'rgba(0,0,0,0)';
          }
  
          tx1 = tx2 = x1 = x2 = alignPixel(chart, lineValue, lineWidth);
          ty1 = tickStart;
          ty2 = tickEnd;
          labelX = me.getPixelForTick(index) + labelOffset; // x values for optionTicks (need to consider offsetLabel option)
  
          if (position === 'top') {
            y1 = alignPixel(chart, chartArea.top, axisWidth) + axisWidth / 2;
            y2 = chartArea.bottom;
            textOffset = ((!isRotated ? 0.5 : 1) - labelCount) * lineHeight;
            textAlign = !isRotated ? 'center' : 'left';
            labelY = me.bottom - labelYOffset;
          } else {
            y1 = chartArea.top;
            y2 = alignPixel(chart, chartArea.bottom, axisWidth) - axisWidth / 2;
            textOffset = (!isRotated ? 0.5 : 0) * lineHeight;
            textAlign = !isRotated ? 'center' : 'right';
            labelY = me.top + labelYOffset;
          }
        } else {
          var labelXOffset = (isMirrored ? 0 : tl) + tickPadding;
  
          if (lineValue < me.top - epsilon) {
            lineColor = 'rgba(0,0,0,0)';
          }
  
          tx1 = tickStart;
          tx2 = tickEnd;
          ty1 = ty2 = y1 = y2 = alignPixel(chart, lineValue, lineWidth);
          labelY = me.getPixelForTick(index) + labelOffset;
          textOffset = (1 - labelCount) * lineHeight / 2;
  
          if (position === 'left') {
            x1 = alignPixel(chart, chartArea.left, axisWidth) + axisWidth / 2;
            x2 = chartArea.right;
            textAlign = isMirrored ? 'left' : 'right';
            labelX = me.right - labelXOffset;
          } else {
            x1 = chartArea.left;
            x2 = alignPixel(chart, chartArea.right, axisWidth) - axisWidth / 2;
            textAlign = isMirrored ? 'right' : 'left';
            labelX = me.left + labelXOffset;
          }
        }
  
        itemsToDraw.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          labelX: labelX,
          labelY: labelY,
          glWidth: lineWidth,
          glColor: lineColor,
          glBorderDash: borderDash,
          glBorderDashOffset: borderDashOffset,
          rotation: -1 * labelRotationRadians,
          label: label,
          major: tick.major,
          textOffset: textOffset,
          textAlign: textAlign
        });
      });
  
      // Draw all of the tick labels, tick marks, and grid lines at the correct places
      helpers$1.each(itemsToDraw, function(itemToDraw) {
        var glWidth = itemToDraw.glWidth;
        var glColor = itemToDraw.glColor;
  
        if (gridLines.display && glWidth && glColor) {
          context.save();
          context.lineWidth = glWidth;
          context.strokeStyle = glColor;
          if (context.setLineDash) {
            context.setLineDash(itemToDraw.glBorderDash);
            context.lineDashOffset = itemToDraw.glBorderDashOffset;
          }
  
          context.beginPath();
  
          if (gridLines.drawTicks) {
            context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
            context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
          }
  
          if (gridLines.drawOnChartArea) {
            context.moveTo(itemToDraw.x1, itemToDraw.y1);
            context.lineTo(itemToDraw.x2, itemToDraw.y2);
          }
  
          context.stroke();
          context.restore();
        }
  
        if (optionTicks.display) {
          // Make sure we draw text in the correct color and font
          context.save();
          context.translate(itemToDraw.labelX, itemToDraw.labelY);
          context.rotate(itemToDraw.rotation);
          context.font = itemToDraw.major ? majorTickFont.string : tickFont.string;
          context.fillStyle = itemToDraw.major ? majorTickFontColor : tickFontColor;
          context.textBaseline = 'middle';
          context.textAlign = itemToDraw.textAlign;
  
          var label = itemToDraw.label;
          var y = itemToDraw.textOffset;
          if (helpers$1.isArray(label)) {
            for (var i = 0; i < label.length; ++i) {
              // We just make sure the multiline element is a string here..
              context.fillText('' + label[i], 0, y);
              y += lineHeight;
            }
          } else {
            context.fillText(label, 0, y);
          }
          context.restore();
        }
      });
  
      if (scaleLabel.display) {
        // Draw the scale label
        var scaleLabelX;
        var scaleLabelY;
        var rotation = 0;
        var halfLineHeight = scaleLabelFont.lineHeight / 2;
  
        if (isHorizontal) {
          scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
          scaleLabelY = position === 'bottom'
            ? me.bottom - halfLineHeight - scaleLabelPadding.bottom
            : me.top + halfLineHeight + scaleLabelPadding.top;
        } else {
          var isLeft = position === 'left';
          scaleLabelX = isLeft
            ? me.left + halfLineHeight + scaleLabelPadding.top
            : me.right - halfLineHeight - scaleLabelPadding.top;
          scaleLabelY = me.top + ((me.bottom - me.top) / 2);
          rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
        }
  
        context.save();
        context.translate(scaleLabelX, scaleLabelY);
        context.rotate(rotation);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = scaleLabelFontColor; // render in correct colour
        context.font = scaleLabelFont.string;
        context.fillText(scaleLabel.labelString, 0, 0);
        context.restore();
      }
  
      if (axisWidth) {
        // Draw the line at the edge of the axis
        var firstLineWidth = axisWidth;
        var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, ticks.length - 1, 0);
        var x1, x2, y1, y2;
  
        if (isHorizontal) {
          x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
          x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
          y1 = y2 = borderValue;
        } else {
          y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
          y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
          x1 = x2 = borderValue;
        }
  
        context.lineWidth = axisWidth;
        context.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
      }
    }
  });
  
  var defaultConfig = {
    position: 'bottom'
  };
  
  var scale_category = core_scale.extend({
    /**
    * Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
    * else fall back to data.labels
    * @private
    */
    getLabels: function() {
      var data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
    },
  
    determineDataLimits: function() {
      var me = this;
      var labels = me.getLabels();
      me.minIndex = 0;
      me.maxIndex = labels.length - 1;
      var findIndex;
  
      if (me.options.ticks.min !== undefined) {
        // user specified min value
        findIndex = labels.indexOf(me.options.ticks.min);
        me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
      }
  
      if (me.options.ticks.max !== undefined) {
        // user specified max value
        findIndex = labels.indexOf(me.options.ticks.max);
        me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
      }
  
      me.min = labels[me.minIndex];
      me.max = labels[me.maxIndex];
    },
  
    buildTicks: function() {
      var me = this;
      var labels = me.getLabels();
      // If we are viewing some subset of labels, slice the original array
      me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
    },
  
    getLabelForIndex: function(index, datasetIndex) {
      var me = this;
      var chart = me.chart;
  
      if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
        return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
      }
  
      return me.ticks[index - me.minIndex];
    },
  
    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: function(value, index) {
      var me = this;
      var offset = me.options.offset;
      // 1 is added because we need the length but we have the indexes
      var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - (offset ? 0 : 1)), 1);
  
      // If value is a data object, then index is the index in the data array,
      // not the index of the scale. We need to change that.
      var valueCategory;
      if (value !== undefined && value !== null) {
        valueCategory = me.isHorizontal() ? value.x : value.y;
      }
      if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
        var labels = me.getLabels();
        value = valueCategory || value;
        var idx = labels.indexOf(value);
        index = idx !== -1 ? idx : index;
      }
  
      if (me.isHorizontal()) {
        var valueWidth = me.width / offsetAmt;
        var widthOffset = (valueWidth * (index - me.minIndex));
  
        if (offset) {
          widthOffset += (valueWidth / 2);
        }
  
        return me.left + widthOffset;
      }
      var valueHeight = me.height / offsetAmt;
      var heightOffset = (valueHeight * (index - me.minIndex));
  
      if (offset) {
        heightOffset += (valueHeight / 2);
      }
  
      return me.top + heightOffset;
    },
  
    getPixelForTick: function(index) {
      return this.getPixelForValue(this.ticks[index], index + this.minIndex, null);
    },
  
    getValueForPixel: function(pixel) {
      var me = this;
      var offset = me.options.offset;
      var value;
      var offsetAmt = Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
      var horz = me.isHorizontal();
      var valueDimension = (horz ? me.width : me.height) / offsetAmt;
  
      pixel -= horz ? me.left : me.top;
  
      if (offset) {
        pixel -= (valueDimension / 2);
      }
  
      if (pixel <= 0) {
        value = 0;
      } else {
        value = Math.round(pixel / valueDimension);
      }
  
      return value + me.minIndex;
    },
  
    getBasePixel: function() {
      return this.bottom;
    }
  });
  
  // INTERNAL: static default options, registered in src/index.js
  var _defaults = defaultConfig;
  scale_category._defaults = _defaults;
  
  var noop = helpers$1.noop;
  var isNullOrUndef = helpers$1.isNullOrUndef;
  
  /**
   * Generate a set of linear ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */
  function generateTicks(generationOptions, dataRange) {
    var ticks = [];
    // To get a "nice" value for the tick spacing, we will use the appropriately named
    // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
    // for details.
  
    var MIN_SPACING = 1e-14;
    var stepSize = generationOptions.stepSize;
    var unit = stepSize || 1;
    var maxNumSpaces = generationOptions.maxTicks - 1;
    var min = generationOptions.min;
    var max = generationOptions.max;
    var precision = generationOptions.precision;
    var rmin = dataRange.min;
    var rmax = dataRange.max;
    var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
    var factor, niceMin, niceMax, numSpaces;
  
    // Beyond MIN_SPACING floating point numbers being to lose precision
    // such that we can't do the math necessary to generate ticks
    if (spacing < MIN_SPACING && isNullOrUndef(min) && isNullOrUndef(max)) {
      return [rmin, rmax];
    }
  
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxNumSpaces) {
      // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
      spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
    }
  
    if (stepSize || isNullOrUndef(precision)) {
      // If a precision is not specified, calculate factor based on spacing
      factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
    } else {
      // If the user specified a precision, round to that number of decimal places
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }
  
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  
    // If min, max and stepSize is set and they make an evenly spaced scale use it.
    if (stepSize) {
      // If very close to our whole number, use it.
      if (!isNullOrUndef(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
        niceMin = min;
      }
      if (!isNullOrUndef(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
        niceMax = max;
      }
    }
  
    numSpaces = (niceMax - niceMin) / spacing;
    // If very close to our rounded value, use it.
    if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    ticks.push(isNullOrUndef(min) ? niceMin : min);
    for (var j = 1; j < numSpaces; ++j) {
      ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
    }
    ticks.push(isNullOrUndef(max) ? niceMax : max);
  
    return ticks;
  }
  
  var scale_linearbase = core_scale.extend({
    getRightValue: function(value) {
      if (typeof value === 'string') {
        return +value;
      }
      return core_scale.prototype.getRightValue.call(this, value);
    },
  
    handleTickRangeOptions: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;
  
      // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it
      if (tickOpts.beginAtZero) {
        var minSign = helpers$1.sign(me.min);
        var maxSign = helpers$1.sign(me.max);
  
        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }
  
      var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
      var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;
  
      if (tickOpts.min !== undefined) {
        me.min = tickOpts.min;
      } else if (tickOpts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = tickOpts.suggestedMin;
        } else {
          me.min = Math.min(me.min, tickOpts.suggestedMin);
        }
      }
  
      if (tickOpts.max !== undefined) {
        me.max = tickOpts.max;
      } else if (tickOpts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = tickOpts.suggestedMax;
        } else {
          me.max = Math.max(me.max, tickOpts.suggestedMax);
        }
      }
  
      if (setMin !== setMax) {
        // We set the min or the max but not both.
        // So ensure that our range is good
        // Inverted or 0 length range can happen when
        // ticks.min is set, and no datasets are visible
        if (me.min >= me.max) {
          if (setMin) {
            me.max = me.min + 1;
          } else {
            me.min = me.max - 1;
          }
        }
      }
  
      if (me.min === me.max) {
        me.max++;
  
        if (!tickOpts.beginAtZero) {
          me.min--;
        }
      }
    },
  
    getTickLimit: function() {
      var me = this;
      var tickOpts = me.options.ticks;
      var stepSize = tickOpts.stepSize;
      var maxTicksLimit = tickOpts.maxTicksLimit;
      var maxTicks;
  
      if (stepSize) {
        maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
      } else {
        maxTicks = me._computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
  
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
  
      return maxTicks;
    },
  
    _computeTickLimit: function() {
      return Number.POSITIVE_INFINITY;
    },
  
    handleDirectionalChanges: noop,
  
    buildTicks: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;
  
      // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks
      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
  
      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: tickOpts.min,
        max: tickOpts.max,
        precision: tickOpts.precision,
        stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
      };
      var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);
  
      me.handleDirectionalChanges();
  
      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);
  
      if (tickOpts.reverse) {
        ticks.reverse();
  
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },
  
    convertTicksToLabels: function() {
      var me = this;
      me.ticksAsNumbers = me.ticks.slice();
      me.zeroLineIndex = me.ticks.indexOf(0);
  
      core_scale.prototype.convertTicksToLabels.call(me);
    }
  });
  
  var defaultConfig$1 = {
    position: 'left',
    ticks: {
      callback: core_ticks.formatters.linear
    }
  };
  
  var scale_linear = scale_linearbase.extend({
    determineDataLimits: function() {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var data = chart.data;
      var datasets = data.datasets;
      var isHorizontal = me.isHorizontal();
      var DEFAULT_MIN = 0;
      var DEFAULT_MAX = 1;
  
      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }
  
      // First Calculate the range
      me.min = null;
      me.max = null;
  
      var hasStacks = opts.stacked;
      if (hasStacks === undefined) {
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          if (hasStacks) {
            return;
          }
  
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
            meta.stack !== undefined) {
            hasStacks = true;
          }
        });
      }
  
      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};
  
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          var key = [
            meta.type,
            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
            meta.stack
          ].join('.');
  
          if (valuesPerStack[key] === undefined) {
            valuesPerStack[key] = {
              positiveValues: [],
              negativeValues: []
            };
          }
  
          // Store these per type
          var positiveValues = valuesPerStack[key].positiveValues;
          var negativeValues = valuesPerStack[key].negativeValues;
  
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers$1.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }
  
              positiveValues[index] = positiveValues[index] || 0;
              negativeValues[index] = negativeValues[index] || 0;
  
              if (opts.relativePoints) {
                positiveValues[index] = 100;
              } else if (value < 0) {
                negativeValues[index] += value;
              } else {
                positiveValues[index] += value;
              }
            });
          }
        });
  
        helpers$1.each(valuesPerStack, function(valuesForType) {
          var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
          var minVal = helpers$1.min(values);
          var maxVal = helpers$1.max(values);
          me.min = me.min === null ? minVal : Math.min(me.min, minVal);
          me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
        });
  
      } else {
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers$1.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }
  
              if (me.min === null) {
                me.min = value;
              } else if (value < me.min) {
                me.min = value;
              }
  
              if (me.max === null) {
                me.max = value;
              } else if (value > me.max) {
                me.max = value;
              }
            });
          }
        });
      }
  
      me.min = isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
      me.max = isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;
  
      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      this.handleTickRangeOptions();
    },
  
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function() {
      var me = this;
      var tickFont;
  
      if (me.isHorizontal()) {
        return Math.ceil(me.width / 40);
      }
      tickFont = helpers$1.options._parseFont(me.options.ticks);
      return Math.ceil(me.height / tickFont.lineHeight);
    },
  
    // Called after the ticks are built. We need
    handleDirectionalChanges: function() {
      if (!this.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        this.ticks.reverse();
      }
    },
  
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
  
    // Utils
    getPixelForValue: function(value) {
      // This must be called after fit has been run so that
      // this.left, this.top, this.right, and this.bottom have been defined
      var me = this;
      var start = me.start;
  
      var rightValue = +me.getRightValue(value);
      var pixel;
      var range = me.end - start;
  
      if (me.isHorizontal()) {
        pixel = me.left + (me.width / range * (rightValue - start));
      } else {
        pixel = me.bottom - (me.height / range * (rightValue - start));
      }
      return pixel;
    },
  
    getValueForPixel: function(pixel) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      var innerDimension = isHorizontal ? me.width : me.height;
      var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
      return me.start + ((me.end - me.start) * offset);
    },
  
    getPixelForTick: function(index) {
      return this.getPixelForValue(this.ticksAsNumbers[index]);
    }
  });
  
  // INTERNAL: static default options, registered in src/index.js
  var _defaults$1 = defaultConfig$1;
  scale_linear._defaults = _defaults$1;
  
  var valueOrDefault$a = helpers$1.valueOrDefault;
  
  /**
   * Generate a set of logarithmic ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */
  function generateTicks$1(generationOptions, dataRange) {
    var ticks = [];
  
    var tickVal = valueOrDefault$a(generationOptions.min, Math.pow(10, Math.floor(helpers$1.log10(dataRange.min))));
  
    var endExp = Math.floor(helpers$1.log10(dataRange.max));
    var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    var exp, significand;
  
    if (tickVal === 0) {
      exp = Math.floor(helpers$1.log10(dataRange.minNotZero));
      significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
  
      ticks.push(tickVal);
      tickVal = significand * Math.pow(10, exp);
    } else {
      exp = Math.floor(helpers$1.log10(tickVal));
      significand = Math.floor(tickVal / Math.pow(10, exp));
    }
    var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  
    do {
      ticks.push(tickVal);
  
      ++significand;
      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }
  
      tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || (exp === endExp && significand < endSignificand));
  
    var lastTick = valueOrDefault$a(generationOptions.max, tickVal);
    ticks.push(lastTick);
  
    return ticks;
  }
  
  var defaultConfig$2 = {
    position: 'left',
  
    // label settings
    ticks: {
      callback: core_ticks.formatters.logarithmic
    }
  };
  
  // TODO(v3): change this to positiveOrDefault
  function nonNegativeOrDefault(value, defaultValue) {
    return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
  }
  
  var scale_logarithmic = core_scale.extend({
    determineDataLimits: function() {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var data = chart.data;
      var datasets = data.datasets;
      var isHorizontal = me.isHorizontal();
      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }
  
      // Calculate Range
      me.min = null;
      me.max = null;
      me.minNotZero = null;
  
      var hasStacks = opts.stacked;
      if (hasStacks === undefined) {
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          if (hasStacks) {
            return;
          }
  
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
            meta.stack !== undefined) {
            hasStacks = true;
          }
        });
      }
  
      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};
  
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          var key = [
            meta.type,
            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
            meta.stack
          ].join('.');
  
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            if (valuesPerStack[key] === undefined) {
              valuesPerStack[key] = [];
            }
  
            helpers$1.each(dataset.data, function(rawValue, index) {
              var values = valuesPerStack[key];
              var value = +me.getRightValue(rawValue);
              // invalid, hidden and negative values are ignored
              if (isNaN(value) || meta.data[index].hidden || value < 0) {
                return;
              }
              values[index] = values[index] || 0;
              values[index] += value;
            });
          }
        });
  
        helpers$1.each(valuesPerStack, function(valuesForType) {
          if (valuesForType.length > 0) {
            var minVal = helpers$1.min(valuesForType);
            var maxVal = helpers$1.max(valuesForType);
            me.min = me.min === null ? minVal : Math.min(me.min, minVal);
            me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
          }
        });
  
      } else {
        helpers$1.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers$1.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              // invalid, hidden and negative values are ignored
              if (isNaN(value) || meta.data[index].hidden || value < 0) {
                return;
              }
  
              if (me.min === null) {
                me.min = value;
              } else if (value < me.min) {
                me.min = value;
              }
  
              if (me.max === null) {
                me.max = value;
              } else if (value > me.max) {
                me.max = value;
              }
  
              if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
                me.minNotZero = value;
              }
            });
          }
        });
      }
  
      // Common base implementation to handle ticks.min, ticks.max
      this.handleTickRangeOptions();
    },
  
    handleTickRangeOptions: function() {
      var me = this;
      var tickOpts = me.options.ticks;
      var DEFAULT_MIN = 1;
      var DEFAULT_MAX = 10;
  
      me.min = nonNegativeOrDefault(tickOpts.min, me.min);
      me.max = nonNegativeOrDefault(tickOpts.max, me.max);
  
      if (me.min === me.max) {
        if (me.min !== 0 && me.min !== null) {
          me.min = Math.pow(10, Math.floor(helpers$1.log10(me.min)) - 1);
          me.max = Math.pow(10, Math.floor(helpers$1.log10(me.max)) + 1);
        } else {
          me.min = DEFAULT_MIN;
          me.max = DEFAULT_MAX;
        }
      }
      if (me.min === null) {
        me.min = Math.pow(10, Math.floor(helpers$1.log10(me.max)) - 1);
      }
      if (me.max === null) {
        me.max = me.min !== 0
          ? Math.pow(10, Math.floor(helpers$1.log10(me.min)) + 1)
          : DEFAULT_MAX;
      }
      if (me.minNotZero === null) {
        if (me.min > 0) {
          me.minNotZero = me.min;
        } else if (me.max < 1) {
          me.minNotZero = Math.pow(10, Math.floor(helpers$1.log10(me.max)));
        } else {
          me.minNotZero = DEFAULT_MIN;
        }
      }
    },
  
    buildTicks: function() {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = !me.isHorizontal();
  
      var generationOptions = {
        min: nonNegativeOrDefault(tickOpts.min),
        max: nonNegativeOrDefault(tickOpts.max)
      };
      var ticks = me.ticks = generateTicks$1(generationOptions, me);
  
      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);
  
      if (tickOpts.reverse) {
        reverse = !reverse;
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
      if (reverse) {
        ticks.reverse();
      }
    },
  
    convertTicksToLabels: function() {
      this.tickValues = this.ticks.slice();
  
      core_scale.prototype.convertTicksToLabels.call(this);
    },
  
    // Get the correct tooltip label
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
  
    getPixelForTick: function(index) {
      return this.getPixelForValue(this.tickValues[index]);
    },
  
    /**
     * Returns the value of the first tick.
     * @param {number} value - The minimum not zero value.
     * @return {number} The first tick value.
     * @private
     */
    _getFirstTickValue: function(value) {
      var exp = Math.floor(helpers$1.log10(value));
      var significand = Math.floor(value / Math.pow(10, exp));
  
      return significand * Math.pow(10, exp);
    },
  
    getPixelForValue: function(value) {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = tickOpts.reverse;
      var log10 = helpers$1.log10;
      var firstTickValue = me._getFirstTickValue(me.minNotZero);
      var offset = 0;
      var innerDimension, pixel, start, end, sign;
  
      value = +me.getRightValue(value);
      if (reverse) {
        start = me.end;
        end = me.start;
        sign = -1;
      } else {
        start = me.start;
        end = me.end;
        sign = 1;
      }
      if (me.isHorizontal()) {
        innerDimension = me.width;
        pixel = reverse ? me.right : me.left;
      } else {
        innerDimension = me.height;
        sign *= -1; // invert, since the upper-left corner of the canvas is at pixel (0, 0)
        pixel = reverse ? me.top : me.bottom;
      }
      if (value !== start) {
        if (start === 0) { // include zero tick
          offset = valueOrDefault$a(tickOpts.fontSize, core_defaults.global.defaultFontSize);
          innerDimension -= offset;
          start = firstTickValue;
        }
        if (value !== 0) {
          offset += innerDimension / (log10(end) - log10(start)) * (log10(value) - log10(start));
        }
        pixel += sign * offset;
      }
      return pixel;
    },
  
    getValueForPixel: function(pixel) {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = tickOpts.reverse;
      var log10 = helpers$1.log10;
      var firstTickValue = me._getFirstTickValue(me.minNotZero);
      var innerDimension, start, end, value;
  
      if (reverse) {
        start = me.end;
        end = me.start;
      } else {
        start = me.start;
        end = me.end;
      }
      if (me.isHorizontal()) {
        innerDimension = me.width;
        value = reverse ? me.right - pixel : pixel - me.left;
      } else {
        innerDimension = me.height;
        value = reverse ? pixel - me.top : me.bottom - pixel;
      }
      if (value !== start) {
        if (start === 0) { // include zero tick
          var offset = valueOrDefault$a(tickOpts.fontSize, core_defaults.global.defaultFontSize);
          value -= offset;
          innerDimension -= offset;
          start = firstTickValue;
        }
        value *= log10(end) - log10(start);
        value /= innerDimension;
        value = Math.pow(10, log10(start) + value);
      }
      return value;
    }
  });
  
  // INTERNAL: static default options, registered in src/index.js
  var _defaults$2 = defaultConfig$2;
  scale_logarithmic._defaults = _defaults$2;
  
  var valueOrDefault$b = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
  var resolve$7 = helpers$1.options.resolve;
  
  var defaultConfig$3 = {
    display: true,
  
    // Boolean - Whether to animate scaling the chart from the centre
    animate: true,
    position: 'chartArea',
  
    angleLines: {
      display: true,
      color: 'rgba(0, 0, 0, 0.1)',
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0
    },
  
    gridLines: {
      circular: false
    },
  
    // label settings
    ticks: {
      // Boolean - Show a backdrop to the scale label
      showLabelBackdrop: true,
  
      // String - The colour of the label backdrop
      backdropColor: 'rgba(255,255,255,0.75)',
  
      // Number - The backdrop padding above & below the label in pixels
      backdropPaddingY: 2,
  
      // Number - The backdrop padding to the side of the label in pixels
      backdropPaddingX: 2,
  
      callback: core_ticks.formatters.linear
    },
  
    pointLabels: {
      // Boolean - if true, show point labels
      display: true,
  
      // Number - Point label font size in pixels
      fontSize: 10,
  
      // Function - Used to convert point labels
      callback: function(label) {
        return label;
      }
    }
  };
  
  function getValueCount(scale) {
    var opts = scale.options;
    return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
  }
  
  function getTickBackdropHeight(opts) {
    var tickOpts = opts.ticks;
  
    if (tickOpts.display && opts.display) {
      return valueOrDefault$b(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
    }
    return 0;
  }
  
  function measureLabelSize(ctx, lineHeight, label) {
    if (helpers$1.isArray(label)) {
      return {
        w: helpers$1.longestText(ctx, ctx.font, label),
        h: label.length * lineHeight
      };
    }
  
    return {
      w: ctx.measureText(label).width,
      h: lineHeight
    };
  }
  
  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - (size / 2),
        end: pos + (size / 2)
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }
  
    return {
      start: pos,
      end: pos + size
    };
  }
  
  /**
   * Helper function to fit a radial linear scale with point labels
   */
  function fitWithPointLabels(scale) {
  
    // Right, this is really confusing and there is a lot of maths going on here
    // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
    //
    // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
    //
    // Solution:
    //
    // We assume the radius of the polygon is half the size of the canvas at first
    // at each index we check if the text overlaps.
    //
    // Where it does, we store that angle and that index.
    //
    // After finding the largest index and angle we calculate how much we need to remove
    // from the shape radius to move the point inwards by that x.
    //
    // We average the left and right distances to get the maximum shape radius that can fit in the box
    // along with labels.
    //
    // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
    // on each side, removing that from the size, halving it and adding the left x protrusion width.
    //
    // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
    // and position it in the most space efficient manner
    //
    // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
  
    var plFont = helpers$1.options._parseFont(scale.options.pointLabels);
  
    // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
    var furthestLimits = {
      l: 0,
      r: scale.width,
      t: 0,
      b: scale.height - scale.paddingTop
    };
    var furthestAngles = {};
    var i, textSize, pointPosition;
  
    scale.ctx.font = plFont.string;
    scale._pointLabelSizes = [];
  
    var valueCount = getValueCount(scale);
    for (i = 0; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
      textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i] || '');
      scale._pointLabelSizes[i] = textSize;
  
      // Add quarter circle to make degree 0 mean top of circle
      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians) % 360;
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
  
      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }
  
      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }
  
      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }
  
      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }
  
    scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  }
  
  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return 'center';
    } else if (angle < 180) {
      return 'left';
    }
  
    return 'right';
  }
  
  function fillText(ctx, text, position, lineHeight) {
    var y = position.y + lineHeight / 2;
    var i, ilen;
  
    if (helpers$1.isArray(text)) {
      for (i = 0, ilen = text.length; i < ilen; ++i) {
        ctx.fillText(text[i], position.x, y);
        y += lineHeight;
      }
    } else {
      ctx.fillText(text, position.x, y);
    }
  }
  
  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= (textSize.h / 2);
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }
  
  function drawPointLabels(scale) {
    var ctx = scale.ctx;
    var opts = scale.options;
    var angleLineOpts = opts.angleLines;
    var gridLineOpts = opts.gridLines;
    var pointLabelOpts = opts.pointLabels;
    var lineWidth = valueOrDefault$b(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
    var lineColor = valueOrDefault$b(angleLineOpts.color, gridLineOpts.color);
    var tickBackdropHeight = getTickBackdropHeight(opts);
  
    ctx.save();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    if (ctx.setLineDash) {
      ctx.setLineDash(resolve$7([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
      ctx.lineDashOffset = resolve$7([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
    }
  
    var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
  
    // Point Label Font
    var plFont = helpers$1.options._parseFont(pointLabelOpts);
  
    ctx.font = plFont.string;
    ctx.textBaseline = 'middle';
  
    for (var i = getValueCount(scale) - 1; i >= 0; i--) {
      if (angleLineOpts.display && lineWidth && lineColor) {
        var outerPosition = scale.getPointPosition(i, outerDistance);
        ctx.beginPath();
        ctx.moveTo(scale.xCenter, scale.yCenter);
        ctx.lineTo(outerPosition.x, outerPosition.y);
        ctx.stroke();
      }
  
      if (pointLabelOpts.display) {
        // Extra pixels out for some label spacing
        var extra = (i === 0 ? tickBackdropHeight / 2 : 0);
        var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);
  
        // Keep this in loop since we may support array properties here
        var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
        ctx.fillStyle = pointLabelFontColor;
  
        var angleRadians = scale.getIndexAngle(i);
        var angle = helpers$1.toDegrees(angleRadians);
        ctx.textAlign = getTextAlignForAngle(angle);
        adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
        fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.lineHeight);
      }
    }
    ctx.restore();
  }
  
  function drawRadiusLine(scale, gridLineOpts, radius, index) {
    var ctx = scale.ctx;
    var circular = gridLineOpts.circular;
    var valueCount = getValueCount(scale);
    var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
    var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
    var pointPosition;
  
    if ((!circular && !valueCount) || !lineColor || !lineWidth) {
      return;
    }
  
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    if (ctx.setLineDash) {
      ctx.setLineDash(gridLineOpts.borderDash || []);
      ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
    }
  
    ctx.beginPath();
    if (circular) {
      // Draw circular arcs between the points
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
    } else {
      // Draw straight lines connecting each index
      pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);
  
      for (var i = 1; i < valueCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  
  function numberOrZero(param) {
    return helpers$1.isNumber(param) ? param : 0;
  }
  
  var scale_radialLinear = scale_linearbase.extend({
    setDimensions: function() {
      var me = this;
  
      // Set the unconstrained dimension before label rotation
      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.paddingTop = getTickBackdropHeight(me.options) / 2;
      me.xCenter = Math.floor(me.width / 2);
      me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
      me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
    },
  
    determineDataLimits: function() {
      var me = this;
      var chart = me.chart;
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;
  
      helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
        if (chart.isDatasetVisible(datasetIndex)) {
          var meta = chart.getDatasetMeta(datasetIndex);
  
          helpers$1.each(dataset.data, function(rawValue, index) {
            var value = +me.getRightValue(rawValue);
            if (isNaN(value) || meta.data[index].hidden) {
              return;
            }
  
            min = Math.min(value, min);
            max = Math.max(value, max);
          });
        }
      });
  
      me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
      me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);
  
      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      me.handleTickRangeOptions();
    },
  
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    },
  
    convertTicksToLabels: function() {
      var me = this;
  
      scale_linearbase.prototype.convertTicksToLabels.call(me);
  
      // Point labels
      me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
    },
  
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
  
    fit: function() {
      var me = this;
      var opts = me.options;
  
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(me);
      } else {
        me.setCenterPoint(0, 0, 0, 0);
      }
    },
  
    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */
    setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
  
      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);
  
      me.drawingArea = Math.min(
        Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
        Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
      me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
    },
  
    setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea;
      var maxLeft = leftMovement + me.drawingArea;
      var maxTop = topMovement + me.drawingArea;
      var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;
  
      me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
      me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
    },
  
    getIndexAngle: function(index) {
      var angleMultiplier = (Math.PI * 2) / getValueCount(this);
      var startAngle = this.chart.options && this.chart.options.startAngle ?
        this.chart.options.startAngle :
        0;
  
      var startAngleRadians = startAngle * Math.PI * 2 / 360;
  
      // Start from the top instead of right, so remove a quarter of the circle
      return index * angleMultiplier + startAngleRadians;
    },
  
    getDistanceFromCenterForValue: function(value) {
      var me = this;
  
      if (value === null) {
        return 0; // null always in center
      }
  
      // Take into account half font size + the yPadding of the top value
      var scalingFactor = me.drawingArea / (me.max - me.min);
      if (me.options.ticks.reverse) {
        return (me.max - value) * scalingFactor;
      }
      return (value - me.min) * scalingFactor;
    },
  
    getPointPosition: function(index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
      };
    },
  
    getPointPositionForValue: function(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    },
  
    getBasePosition: function() {
      var me = this;
      var min = me.min;
      var max = me.max;
  
      return me.getPointPositionForValue(0,
        me.beginAtZero ? 0 :
        min < 0 && max < 0 ? max :
        min > 0 && max > 0 ? min :
        0);
    },
  
    draw: function() {
      var me = this;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var tickOpts = opts.ticks;
  
      if (opts.display) {
        var ctx = me.ctx;
        var startAngle = this.getIndexAngle(0);
        var tickFont = helpers$1.options._parseFont(tickOpts);
  
        if (opts.angleLines.display || opts.pointLabels.display) {
          drawPointLabels(me);
        }
  
        helpers$1.each(me.ticks, function(label, index) {
          // Don't draw a centre value (if it is minimum)
          if (index > 0 || tickOpts.reverse) {
            var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
  
            // Draw circular lines around the scale
            if (gridLineOpts.display && index !== 0) {
              drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
            }
  
            if (tickOpts.display) {
              var tickFontColor = valueOrDefault$b(tickOpts.fontColor, core_defaults.global.defaultFontColor);
              ctx.font = tickFont.string;
  
              ctx.save();
              ctx.translate(me.xCenter, me.yCenter);
              ctx.rotate(startAngle);
  
              if (tickOpts.showLabelBackdrop) {
                var labelWidth = ctx.measureText(label).width;
                ctx.fillStyle = tickOpts.backdropColor;
                ctx.fillRect(
                  -labelWidth / 2 - tickOpts.backdropPaddingX,
                  -yCenterOffset - tickFont.size / 2 - tickOpts.backdropPaddingY,
                  labelWidth + tickOpts.backdropPaddingX * 2,
                  tickFont.size + tickOpts.backdropPaddingY * 2
                );
              }
  
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = tickFontColor;
              ctx.fillText(label, 0, -yCenterOffset);
              ctx.restore();
            }
          }
        });
      }
    }
  });
  
  // INTERNAL: static default options, registered in src/index.js
  var _defaults$3 = defaultConfig$3;
  scale_radialLinear._defaults = _defaults$3;
  
  var valueOrDefault$c = helpers$1.valueOrDefault;
  
  // Integer constants are from the ES6 spec.
  var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
  var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
    },
    second: {
      common: true,
      size: 1000,
      steps: [1, 2, 5, 10, 15, 30]
    },
    minute: {
      common: true,
      size: 60000,
      steps: [1, 2, 5, 10, 15, 30]
    },
    hour: {
      common: true,
      size: 3600000,
      steps: [1, 2, 3, 6, 12]
    },
    day: {
      common: true,
      size: 86400000,
      steps: [1, 2, 5]
    },
    week: {
      common: false,
      size: 604800000,
      steps: [1, 2, 3, 4]
    },
    month: {
      common: true,
      size: 2.628e9,
      steps: [1, 2, 3]
    },
    quarter: {
      common: false,
      size: 7.884e9,
      steps: [1, 2, 3, 4]
    },
    year: {
      common: true,
      size: 3.154e10
    }
  };
  
  var UNITS = Object.keys(INTERVALS);
  
  function sorter(a, b) {
    return a - b;
  }
  
  function arrayUnique(items) {
    var hash = {};
    var out = [];
    var i, ilen, item;
  
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      if (!hash[item]) {
        hash[item] = true;
        out.push(item);
      }
    }
  
    return out;
  }
  
  /**
   * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
   * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
   * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
   * extremity (left + width or top + height). Note that it would be more optimized to directly
   * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
   * to create the lookup table. The table ALWAYS contains at least two items: min and max.
   *
   * @param {number[]} timestamps - timestamps sorted from lowest to highest.
   * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
   * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
   * If 'series', timestamps will be positioned at the same distance from each other. In this
   * case, only timestamps that break the time linearity are registered, meaning that in the
   * best case, all timestamps are linear, the table contains only min and max.
   */
  function buildLookupTable(timestamps, min, max, distribution) {
    if (distribution === 'linear' || !timestamps.length) {
      return [
        {time: min, pos: 0},
        {time: max, pos: 1}
      ];
    }
  
    var table = [];
    var items = [min];
    var i, ilen, prev, curr, next;
  
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr > min && curr < max) {
        items.push(curr);
      }
    }
  
    items.push(max);
  
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
  
      // only add points that breaks the scale linearity
      if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
        table.push({time: curr, pos: i / (ilen - 1)});
      }
    }
  
    return table;
  }
  
  // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
  function lookup(table, key, value) {
    var lo = 0;
    var hi = table.length - 1;
    var mid, i0, i1;
  
    while (lo >= 0 && lo <= hi) {
      mid = (lo + hi) >> 1;
      i0 = table[mid - 1] || null;
      i1 = table[mid];
  
      if (!i0) {
        // given value is outside table (before first item)
        return {lo: null, hi: i1};
      } else if (i1[key] < value) {
        lo = mid + 1;
      } else if (i0[key] > value) {
        hi = mid - 1;
      } else {
        return {lo: i0, hi: i1};
      }
    }
  
    // given value is outside table (after last item)
    return {lo: i1, hi: null};
  }
  
  /**
   * Linearly interpolates the given source `value` using the table items `skey` values and
   * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
   * returns the position for a timestamp equal to 42. If value is out of bounds, values at
   * index [0, 1] or [n - 1, n] are used for the interpolation.
   */
  function interpolate$1(table, skey, sval, tkey) {
    var range = lookup(table, skey, sval);
  
    // Note: the lookup table ALWAYS contains at least 2 items (min and max)
    var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
    var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
  
    var span = next[skey] - prev[skey];
    var ratio = span ? (sval - prev[skey]) / span : 0;
    var offset = (next[tkey] - prev[tkey]) * ratio;
  
    return prev[tkey] + offset;
  }
  
  function toTimestamp(scale, input) {
    var adapter = scale._adapter;
    var options = scale.options.time;
    var parser = options.parser;
    var format = parser || options.format;
    var value = input;
  
    if (typeof parser === 'function') {
      value = parser(value);
    }
  
    // Only parse if its not a timestamp already
    if (!helpers$1.isFinite(value)) {
      value = typeof format === 'string'
        ? adapter.parse(value, format)
        : adapter.parse(value);
    }
  
    if (value !== null) {
      return +value;
    }
  
    // Labels are in an incompatible format and no `parser` has been provided.
    // The user might still use the deprecated `format` option for parsing.
    if (!parser && typeof format === 'function') {
      value = format(input);
  
      // `format` could return something else than a timestamp, if so, parse it
      if (!helpers$1.isFinite(value)) {
        value = adapter.parse(value);
      }
    }
  
    return value;
  }
  
  function parse(scale, input) {
    if (helpers$1.isNullOrUndef(input)) {
      return null;
    }
  
    var options = scale.options.time;
    var value = toTimestamp(scale, scale.getRightValue(input));
    if (value === null) {
      return value;
    }
  
    if (options.round) {
      value = +scale._adapter.startOf(value, options.round);
    }
  
    return value;
  }
  
  /**
   * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
   * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
   */
  function determineStepSize(min, max, unit, capacity) {
    var range = max - min;
    var interval = INTERVALS[unit];
    var milliseconds = interval.size;
    var steps = interval.steps;
    var i, ilen, factor;
  
    if (!steps) {
      return Math.ceil(range / (capacity * milliseconds));
    }
  
    for (i = 0, ilen = steps.length; i < ilen; ++i) {
      factor = steps[i];
      if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
        break;
      }
    }
  
    return factor;
  }
  
  /**
   * Figures out what unit results in an appropriate number of auto-generated ticks
   */
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    var ilen = UNITS.length;
    var i, interval, factor;
  
    for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      interval = INTERVALS[UNITS[i]];
      factor = interval.steps ? interval.steps[interval.steps.length - 1] : MAX_INTEGER;
  
      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }
  
    return UNITS[ilen - 1];
  }
  
  /**
   * Figures out what unit to format a set of ticks with
   */
  function determineUnitForFormatting(scale, ticks, minUnit, min, max) {
    var ilen = UNITS.length;
    var i, unit;
  
    for (i = ilen - 1; i >= UNITS.indexOf(minUnit); i--) {
      unit = UNITS[i];
      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= ticks.length) {
        return unit;
      }
    }
  
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }
  
  function determineMajorUnit(unit) {
    for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }
  
  /**
   * Generates a maximum of `capacity` timestamps between min and max, rounded to the
   * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
   * Important: this method can return ticks outside the min and max range, it's the
   * responsibility of the calling code to clamp values if needed.
   */
  function generate(scale, min, max, capacity) {
    var adapter = scale._adapter;
    var options = scale.options;
    var timeOpts = options.time;
    var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
    var major = determineMajorUnit(minor);
    var stepSize = valueOrDefault$c(timeOpts.stepSize, timeOpts.unitStepSize);
    var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    var majorTicksEnabled = options.ticks.major.enabled;
    var interval = INTERVALS[minor];
    var first = min;
    var last = max;
    var ticks = [];
    var time;
  
    if (!stepSize) {
      stepSize = determineStepSize(min, max, minor, capacity);
    }
  
    // For 'week' unit, handle the first day of week option
    if (weekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
      last = +adapter.startOf(last, 'isoWeek', weekday);
    }
  
    // Align first/last ticks on unit
    first = +adapter.startOf(first, weekday ? 'day' : minor);
    last = +adapter.startOf(last, weekday ? 'day' : minor);
  
    // Make sure that the last tick include max
    if (last < max) {
      last = +adapter.add(last, 1, minor);
    }
  
    time = first;
  
    if (majorTicksEnabled && major && !weekday && !timeOpts.round) {
      // Align the first tick on the previous `minor` unit aligned on the `major` unit:
      // we first aligned time on the previous `major` unit then add the number of full
      // stepSize there is between first and the previous major time.
      time = +adapter.startOf(time, major);
      time = +adapter.add(time, ~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
    }
  
    for (; time < last; time = +adapter.add(time, stepSize, minor)) {
      ticks.push(+time);
    }
  
    ticks.push(+time);
  
    return ticks;
  }
  
  /**
   * Returns the start and end offsets from edges in the form of {start, end}
   * where each value is a relative width to the scale and ranges between 0 and 1.
   * They add extra margins on the both sides by scaling down the original scale.
   * Offsets are added when the `offset` option is true.
   */
  function computeOffsets(table, ticks, min, max, options) {
    var start = 0;
    var end = 0;
    var first, last;
  
    if (options.offset && ticks.length) {
      if (!options.time.min) {
        first = interpolate$1(table, 'time', ticks[0], 'pos');
        if (ticks.length === 1) {
          start = 1 - first;
        } else {
          start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
        }
      }
      if (!options.time.max) {
        last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
        if (ticks.length === 1) {
          end = last;
        } else {
          end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
        }
      }
    }
  
    return {start: start, end: end};
  }
  
  function ticksFromTimestamps(scale, values, majorUnit) {
    var ticks = [];
    var i, ilen, value, major;
  
    for (i = 0, ilen = values.length; i < ilen; ++i) {
      value = values[i];
      major = majorUnit ? value === +scale._adapter.startOf(value, majorUnit) : false;
  
      ticks.push({
        value: value,
        major: major
      });
    }
  
    return ticks;
  }
  
  var defaultConfig$4 = {
    position: 'bottom',
  
    /**
     * Data distribution along the scale:
     * - 'linear': data are spread according to their time (distances can vary),
     * - 'series': data are spread at the same distance from each other.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     */
    distribution: 'linear',
  
    /**
     * Scale boundary strategy (bypassed by min/max time options)
     * - `data`: make sure data are fully visible, ticks outside are removed
     * - `ticks`: make sure ticks are fully visible, data outside are truncated
     * @see https://github.com/chartjs/Chart.js/pull/4556
     * @since 2.7.0
     */
    bounds: 'data',
  
    adapters: {},
    time: {
      parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
      format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from https://momentjs.com/docs/#/parsing/string-format/
      unit: false, // false == automatic or override with week, month, year, etc.
      round: false, // none, or override with week, month, year, etc.
      displayFormat: false, // DEPRECATED
      isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: {
      autoSkip: false,
  
      /**
       * Ticks generation input values:
       * - 'auto': generates "optimal" ticks based on scale size and time options.
       * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
       * - 'labels': generates ticks from user given `data.labels` values ONLY.
       * @see https://github.com/chartjs/Chart.js/pull/4507
       * @since 2.7.0
       */
      source: 'auto',
  
      major: {
        enabled: false
      }
    }
  };
  
  var scale_time = core_scale.extend({
    initialize: function() {
      this.mergeTicksOptions();
      core_scale.prototype.initialize.call(this);
    },
  
    update: function() {
      var me = this;
      var options = me.options;
      var time = options.time || (options.time = {});
      var adapter = me._adapter = new core_adapters._date(options.adapters.date);
  
      // DEPRECATIONS: output a message only one time per update
      if (time.format) {
        console.warn('options.time.format is deprecated and replaced by options.time.parser.');
      }
  
      // Backward compatibility: before introducing adapter, `displayFormats` was
      // supposed to contain *all* unit/string pairs but this can't be resolved
      // when loading the scale (adapters are loaded afterward), so let's populate
      // missing formats on update
      helpers$1.mergeIf(time.displayFormats, adapter.formats());
  
      return core_scale.prototype.update.apply(me, arguments);
    },
  
    /**
     * Allows data to be referenced via 't' attribute
     */
    getRightValue: function(rawValue) {
      if (rawValue && rawValue.t !== undefined) {
        rawValue = rawValue.t;
      }
      return core_scale.prototype.getRightValue.call(this, rawValue);
    },
  
    determineDataLimits: function() {
      var me = this;
      var chart = me.chart;
      var adapter = me._adapter;
      var timeOpts = me.options.time;
      var unit = timeOpts.unit || 'day';
      var min = MAX_INTEGER;
      var max = MIN_INTEGER;
      var timestamps = [];
      var datasets = [];
      var labels = [];
      var i, j, ilen, jlen, data, timestamp;
      var dataLabels = chart.data.labels || [];
  
      // Convert labels to timestamps
      for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
        labels.push(parse(me, dataLabels[i]));
      }
  
      // Convert data to timestamps
      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          data = chart.data.datasets[i].data;
  
          // Let's consider that all data have the same format.
          if (helpers$1.isObject(data[0])) {
            datasets[i] = [];
  
            for (j = 0, jlen = data.length; j < jlen; ++j) {
              timestamp = parse(me, data[j]);
              timestamps.push(timestamp);
              datasets[i][j] = timestamp;
            }
          } else {
            for (j = 0, jlen = labels.length; j < jlen; ++j) {
              timestamps.push(labels[j]);
            }
            datasets[i] = labels.slice(0);
          }
        } else {
          datasets[i] = [];
        }
      }
  
      if (labels.length) {
        // Sort labels **after** data have been converted
        labels = arrayUnique(labels).sort(sorter);
        min = Math.min(min, labels[0]);
        max = Math.max(max, labels[labels.length - 1]);
      }
  
      if (timestamps.length) {
        timestamps = arrayUnique(timestamps).sort(sorter);
        min = Math.min(min, timestamps[0]);
        max = Math.max(max, timestamps[timestamps.length - 1]);
      }
  
      min = parse(me, timeOpts.min) || min;
      max = parse(me, timeOpts.max) || max;
  
      // In case there is no valid min/max, set limits based on unit time option
      min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
      max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;
  
      // Make sure that max is strictly higher than min (required by the lookup table)
      me.min = Math.min(min, max);
      me.max = Math.max(min + 1, max);
  
      // PRIVATE
      me._horizontal = me.isHorizontal();
      me._table = [];
      me._timestamps = {
        data: timestamps,
        datasets: datasets,
        labels: labels
      };
    },
  
    buildTicks: function() {
      var me = this;
      var min = me.min;
      var max = me.max;
      var options = me.options;
      var timeOpts = options.time;
      var timestamps = [];
      var ticks = [];
      var i, ilen, timestamp;
  
      switch (options.ticks.source) {
      case 'data':
        timestamps = me._timestamps.data;
        break;
      case 'labels':
        timestamps = me._timestamps.labels;
        break;
      case 'auto':
      default:
        timestamps = generate(me, min, max, me.getLabelCapacity(min), options);
      }
  
      if (options.bounds === 'ticks' && timestamps.length) {
        min = timestamps[0];
        max = timestamps[timestamps.length - 1];
      }
  
      // Enforce limits with user min/max options
      min = parse(me, timeOpts.min) || min;
      max = parse(me, timeOpts.max) || max;
  
      // Remove ticks outside the min/max range
      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        timestamp = timestamps[i];
        if (timestamp >= min && timestamp <= max) {
          ticks.push(timestamp);
        }
      }
  
      me.min = min;
      me.max = max;
  
      // PRIVATE
      me._unit = timeOpts.unit || determineUnitForFormatting(me, ticks, timeOpts.minUnit, me.min, me.max);
      me._majorUnit = determineMajorUnit(me._unit);
      me._table = buildLookupTable(me._timestamps.data, min, max, options.distribution);
      me._offsets = computeOffsets(me._table, ticks, min, max, options);
  
      if (options.ticks.reverse) {
        ticks.reverse();
      }
  
      return ticksFromTimestamps(me, ticks, me._majorUnit);
    },
  
    getLabelForIndex: function(index, datasetIndex) {
      var me = this;
      var adapter = me._adapter;
      var data = me.chart.data;
      var timeOpts = me.options.time;
      var label = data.labels && index < data.labels.length ? data.labels[index] : '';
      var value = data.datasets[datasetIndex].data[index];
  
      if (helpers$1.isObject(value)) {
        label = me.getRightValue(value);
      }
      if (timeOpts.tooltipFormat) {
        return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
      }
      if (typeof label === 'string') {
        return label;
      }
      return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
    },
  
    /**
     * Function to format an individual tick mark
     * @private
     */
    tickFormatFunction: function(time, index, ticks, format) {
      var me = this;
      var adapter = me._adapter;
      var options = me.options;
      var formats = options.time.displayFormats;
      var minorFormat = formats[me._unit];
      var majorUnit = me._majorUnit;
      var majorFormat = formats[majorUnit];
      var majorTime = +adapter.startOf(time, majorUnit);
      var majorTickOpts = options.ticks.major;
      var major = majorTickOpts.enabled && majorUnit && majorFormat && time === majorTime;
      var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
      var tickOpts = major ? majorTickOpts : options.ticks.minor;
      var formatter = valueOrDefault$c(tickOpts.callback, tickOpts.userCallback);
  
      return formatter ? formatter(label, index, ticks) : label;
    },
  
    convertTicksToLabels: function(ticks) {
      var labels = [];
      var i, ilen;
  
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
      }
  
      return labels;
    },
  
    /**
     * @private
     */
    getPixelForOffset: function(time) {
      var me = this;
      var isReverse = me.options.ticks.reverse;
      var size = me._horizontal ? me.width : me.height;
      var start = me._horizontal ? isReverse ? me.right : me.left : isReverse ? me.bottom : me.top;
      var pos = interpolate$1(me._table, 'time', time, 'pos');
      var offset = size * (me._offsets.start + pos) / (me._offsets.start + 1 + me._offsets.end);
  
      return isReverse ? start - offset : start + offset;
    },
  
    getPixelForValue: function(value, index, datasetIndex) {
      var me = this;
      var time = null;
  
      if (index !== undefined && datasetIndex !== undefined) {
        time = me._timestamps.datasets[datasetIndex][index];
      }
  
      if (time === null) {
        time = parse(me, value);
      }
  
      if (time !== null) {
        return me.getPixelForOffset(time);
      }
    },
  
    getPixelForTick: function(index) {
      var ticks = this.getTicks();
      return index >= 0 && index < ticks.length ?
        this.getPixelForOffset(ticks[index].value) :
        null;
    },
  
    getValueForPixel: function(pixel) {
      var me = this;
      var size = me._horizontal ? me.width : me.height;
      var start = me._horizontal ? me.left : me.top;
      var pos = (size ? (pixel - start) / size : 0) * (me._offsets.start + 1 + me._offsets.start) - me._offsets.end;
      var time = interpolate$1(me._table, 'pos', pos, 'time');
  
      // DEPRECATION, we should return time directly
      return me._adapter._create(time);
    },
  
    /**
     * Crude approximation of what the label width might be
     * @private
     */
    getLabelWidth: function(label) {
      var me = this;
      var ticksOpts = me.options.ticks;
      var tickLabelWidth = me.ctx.measureText(label).width;
      var angle = helpers$1.toRadians(ticksOpts.maxRotation);
      var cosRotation = Math.cos(angle);
      var sinRotation = Math.sin(angle);
      var tickFontSize = valueOrDefault$c(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
  
      return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
    },
  
    /**
     * @private
     */
    getLabelCapacity: function(exampleTime) {
      var me = this;
  
      // pick the longest format (milliseconds) for guestimation
      var format = me.options.time.displayFormats.millisecond;
      var exampleLabel = me.tickFormatFunction(exampleTime, 0, [], format);
      var tickLabelWidth = me.getLabelWidth(exampleLabel);
      var innerWidth = me.isHorizontal() ? me.width : me.height;
      var capacity = Math.floor(innerWidth / tickLabelWidth);
  
      return capacity > 0 ? capacity : 1;
    }
  });
  
  // INTERNAL: static default options, registered in src/index.js
  var _defaults$4 = defaultConfig$4;
  scale_time._defaults = _defaults$4;
  
  var scales = {
    category: scale_category,
    linear: scale_linear,
    logarithmic: scale_logarithmic,
    radialLinear: scale_radialLinear,
    time: scale_time
  };
  
  var FORMATS = {
    datetime: 'MMM D, YYYY, h:mm:ss a',
    millisecond: 'h:mm:ss.SSS a',
    second: 'h:mm:ss a',
    minute: 'h:mm a',
    hour: 'hA',
    day: 'MMM D',
    week: 'll',
    month: 'MMM YYYY',
    quarter: '[Q]Q - YYYY',
    year: 'YYYY'
  };
  
  core_adapters._date.override(typeof moment === 'function' ? {
    _id: 'moment', // DEBUG ONLY
  
    formats: function() {
      return FORMATS;
    },
  
    parse: function(value, format) {
      if (typeof value === 'string' && typeof format === 'string') {
        value = moment(value, format);
      } else if (!(value instanceof moment)) {
        value = moment(value);
      }
      return value.isValid() ? value.valueOf() : null;
    },
  
    format: function(time, format) {
      return moment(time).format(format);
    },
  
    add: function(time, amount, unit) {
      return moment(time).add(amount, unit).valueOf();
    },
  
    diff: function(max, min, unit) {
      return moment.duration(moment(max).diff(moment(min))).as(unit);
    },
  
    startOf: function(time, unit, weekday) {
      time = moment(time);
      if (unit === 'isoWeek') {
        return time.isoWeekday(weekday).valueOf();
      }
      return time.startOf(unit).valueOf();
    },
  
    endOf: function(time, unit) {
      return moment(time).endOf(unit).valueOf();
    },
  
    // DEPRECATIONS
  
    /**
     * Provided for backward compatibility with scale.getValueForPixel().
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function(time) {
      return moment(time);
    },
  } : {});
  
  core_defaults._set('global', {
    plugins: {
      filler: {
        propagate: true
      }
    }
  });
  
  var mappers = {
    dataset: function(source) {
      var index = source.fill;
      var chart = source.chart;
      var meta = chart.getDatasetMeta(index);
      var visible = meta && chart.isDatasetVisible(index);
      var points = (visible && meta.dataset._children) || [];
      var length = points.length || 0;
  
      return !length ? null : function(point, i) {
        return (i < length && points[i]._view) || null;
      };
    },
  
    boundary: function(source) {
      var boundary = source.boundary;
      var x = boundary ? boundary.x : null;
      var y = boundary ? boundary.y : null;
  
      return function(point) {
        return {
          x: x === null ? point.x : x,
          y: y === null ? point.y : y,
        };
      };
    }
  };
  
  // @todo if (fill[0] === '#')
  function decodeFill(el, index, count) {
    var model = el._model || {};
    var fill = model.fill;
    var target;
  
    if (fill === undefined) {
      fill = !!model.backgroundColor;
    }
  
    if (fill === false || fill === null) {
      return false;
    }
  
    if (fill === true) {
      return 'origin';
    }
  
    target = parseFloat(fill, 10);
    if (isFinite(target) && Math.floor(target) === target) {
      if (fill[0] === '-' || fill[0] === '+') {
        target = index + target;
      }
  
      if (target === index || target < 0 || target >= count) {
        return false;
      }
  
      return target;
    }
  
    switch (fill) {
    // compatibility
    case 'bottom':
      return 'start';
    case 'top':
      return 'end';
    case 'zero':
      return 'origin';
    // supported boundaries
    case 'origin':
    case 'start':
    case 'end':
      return fill;
    // invalid fill values
    default:
      return false;
    }
  }
  
  function computeBoundary(source) {
    var model = source.el._model || {};
    var scale = source.el._scale || {};
    var fill = source.fill;
    var target = null;
    var horizontal;
  
    if (isFinite(fill)) {
      return null;
    }
  
    // Backward compatibility: until v3, we still need to support boundary values set on
    // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
    // controllers might still use it (e.g. the Smith chart).
  
    if (fill === 'start') {
      target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
    } else if (fill === 'end') {
      target = model.scaleTop === undefined ? scale.top : model.scaleTop;
    } else if (model.scaleZero !== undefined) {
      target = model.scaleZero;
    } else if (scale.getBasePosition) {
      target = scale.getBasePosition();
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }
  
    if (target !== undefined && target !== null) {
      if (target.x !== undefined && target.y !== undefined) {
        return target;
      }
  
      if (helpers$1.isFinite(target)) {
        horizontal = scale.isHorizontal();
        return {
          x: horizontal ? target : null,
          y: horizontal ? null : target
        };
      }
    }
  
    return null;
  }
  
  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;
  
    if (!propagate) {
      return fill;
    }
  
    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isFinite(fill)) {
        return fill;
      }
  
      target = sources[fill];
      if (!target) {
        return false;
      }
  
      if (target.visible) {
        return fill;
      }
  
      visited.push(fill);
      fill = target.fill;
    }
  
    return false;
  }
  
  function createMapper(source) {
    var fill = source.fill;
    var type = 'dataset';
  
    if (fill === false) {
      return null;
    }
  
    if (!isFinite(fill)) {
      type = 'boundary';
    }
  
    return mappers[type](source);
  }
  
  function isDrawable(point) {
    return point && !point.skip;
  }
  
  function drawArea(ctx, curve0, curve1, len0, len1) {
    var i;
  
    if (!len0 || !len1) {
      return;
    }
  
    // building first area curve (normal)
    ctx.moveTo(curve0[0].x, curve0[0].y);
    for (i = 1; i < len0; ++i) {
      helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
    }
  
    // joining the two area curves
    ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);
  
    // building opposite area curve (reverse)
    for (i = len1 - 1; i > 0; --i) {
      helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
    }
  }
  
  function doFill(ctx, points, mapper, view, color, loop) {
    var count = points.length;
    var span = view.spanGaps;
    var curve0 = [];
    var curve1 = [];
    var len0 = 0;
    var len1 = 0;
    var i, ilen, index, p0, p1, d0, d1;
  
    ctx.beginPath();
  
    for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
      index = i % count;
      p0 = points[index]._view;
      p1 = mapper(p0, index, view);
      d0 = isDrawable(p0);
      d1 = isDrawable(p1);
  
      if (d0 && d1) {
        len0 = curve0.push(p0);
        len1 = curve1.push(p1);
      } else if (len0 && len1) {
        if (!span) {
          drawArea(ctx, curve0, curve1, len0, len1);
          len0 = len1 = 0;
          curve0 = [];
          curve1 = [];
        } else {
          if (d0) {
            curve0.push(p0);
          }
          if (d1) {
            curve1.push(p1);
          }
        }
      }
    }
  
    drawArea(ctx, curve0, curve1, len0, len1);
  
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  var plugin_filler = {
    id: 'filler',
  
    afterDatasetsUpdate: function(chart, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, el, source;
  
      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        el = meta.dataset;
        source = null;
  
        if (el && el._model && el instanceof elements.Line) {
          source = {
            visible: chart.isDatasetVisible(i),
            fill: decodeFill(el, i, count),
            chart: chart,
            el: el
          };
        }
  
        meta.$filler = source;
        sources.push(source);
      }
  
      for (i = 0; i < count; ++i) {
        source = sources[i];
        if (!source) {
          continue;
        }
  
        source.fill = resolveTarget(sources, i, propagate);
        source.boundary = computeBoundary(source);
        source.mapper = createMapper(source);
      }
    },
  
    beforeDatasetDraw: function(chart, args) {
      var meta = args.meta.$filler;
      if (!meta) {
        return;
      }
  
      var ctx = chart.ctx;
      var el = meta.el;
      var view = el._view;
      var points = el._children || [];
      var mapper = meta.mapper;
      var color = view.backgroundColor || core_defaults.global.defaultColor;
  
      if (mapper && color && points.length) {
        helpers$1.canvas.clipArea(ctx, chart.chartArea);
        doFill(ctx, points, mapper, view, color, el._loop);
        helpers$1.canvas.unclipArea(ctx);
      }
    }
  };
  
  var noop$1 = helpers$1.noop;
  var valueOrDefault$d = helpers$1.valueOrDefault;
  
  core_defaults._set('global', {
    legend: {
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
      weight: 1000,
  
      // a callback that will handle
      onClick: function(e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var meta = ci.getDatasetMeta(index);
  
        // See controller.isDatasetVisible comment
        meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
  
        // We hid a dataset ... rerender the chart
        ci.update();
      },
  
      onHover: null,
      onLeave: null,
  
      labels: {
        boxWidth: 40,
        padding: 10,
        // Generates labels shown in the legend
        // Valid properties to return:
        // text : text to display
        // fillStyle : fill of coloured box
        // strokeStyle: stroke of coloured box
        // hidden : if this legend item refers to a hidden item
        // lineCap : cap style for line
        // lineDash
        // lineDashOffset :
        // lineJoin :
        // lineWidth :
        generateLabels: function(chart) {
          var data = chart.data;
          return helpers$1.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
            return {
              text: dataset.label,
              fillStyle: (!helpers$1.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
              hidden: !chart.isDatasetVisible(i),
              lineCap: dataset.borderCapStyle,
              lineDash: dataset.borderDash,
              lineDashOffset: dataset.borderDashOffset,
              lineJoin: dataset.borderJoinStyle,
              lineWidth: dataset.borderWidth,
              strokeStyle: dataset.borderColor,
              pointStyle: dataset.pointStyle,
  
              // Below is extra data used for toggling the datasets
              datasetIndex: i
            };
          }, this) : [];
        }
      }
    },
  
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push('</li>');
      }
      text.push('</ul>');
      return text.join('');
    }
  });
  
  /**
   * Helper function to get the box width based on the usePointStyle option
   * @param {object} labelopts - the label options on the legend
   * @param {number} fontSize - the label font size
   * @return {number} width of the color box area
   */
  function getBoxWidth(labelOpts, fontSize) {
    return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
      fontSize :
      labelOpts.boxWidth;
  }
  
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */
  var Legend = core_element.extend({
  
    initialize: function(config) {
      helpers$1.extend(this, config);
  
      // Contains hit boxes for each dataset (in dataset order)
      this.legendHitBoxes = [];
  
      /**
        * @private
        */
      this._hoveredItem = null;
  
      // Are we in doughnut mode which has a different data type
      this.doughnutMode = false;
    },
  
    // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type
  
    beforeUpdate: noop$1,
    update: function(maxWidth, maxHeight, margins) {
      var me = this;
  
      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();
  
      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;
  
      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();
  
      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();
  
      return me.minSize;
    },
    afterUpdate: noop$1,
  
    //
  
    beforeSetDimensions: noop$1,
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;
  
        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }
  
      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
  
      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$1,
  
    //
  
    beforeBuildLabels: noop$1,
    buildLabels: function() {
      var me = this;
      var labelOpts = me.options.labels || {};
      var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];
  
      if (labelOpts.filter) {
        legendItems = legendItems.filter(function(item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }
  
      if (me.options.reverse) {
        legendItems.reverse();
      }
  
      me.legendItems = legendItems;
    },
    afterBuildLabels: noop$1,
  
    //
  
    beforeFit: noop$1,
    fit: function() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;
  
      var ctx = me.ctx;
  
      var labelFont = helpers$1.options._parseFont(labelOpts);
      var fontSize = labelFont.size;
  
      // Reset hit boxes
      var hitboxes = me.legendHitBoxes = [];
  
      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();
  
      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width
        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      }
  
      // Increase sizes here
      if (display) {
        ctx.font = labelFont.string;
  
        if (isHorizontal) {
          // Labels
  
          // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
          var lineWidths = me.lineWidths = [0];
          var totalHeight = 0;
  
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
  
          helpers$1.each(me.legendItems, function(legendItem, i) {
            var boxWidth = getBoxWidth(labelOpts, fontSize);
            var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
  
            if (i === 0 || lineWidths[lineWidths.length - 1] + width + labelOpts.padding > minSize.width) {
              totalHeight += fontSize + labelOpts.padding;
              lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = labelOpts.padding;
            }
  
            // Store the hitbox width and height here. Final position will be updated in `draw`
            hitboxes[i] = {
              left: 0,
              top: 0,
              width: width,
              height: fontSize
            };
  
            lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
          });
  
          minSize.height += totalHeight;
  
        } else {
          var vPadding = labelOpts.padding;
          var columnWidths = me.columnWidths = [];
          var totalWidth = labelOpts.padding;
          var currentColWidth = 0;
          var currentColHeight = 0;
          var itemHeight = fontSize + vPadding;
  
          helpers$1.each(me.legendItems, function(legendItem, i) {
            var boxWidth = getBoxWidth(labelOpts, fontSize);
            var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
  
            // If too tall, go to new column
            if (i > 0 && currentColHeight + itemHeight > minSize.height - vPadding) {
              totalWidth += currentColWidth + labelOpts.padding;
              columnWidths.push(currentColWidth); // previous column width
  
              currentColWidth = 0;
              currentColHeight = 0;
            }
  
            // Get max width
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight;
  
            // Store the hitbox width and height here. Final position will be updated in `draw`
            hitboxes[i] = {
              left: 0,
              top: 0,
              width: itemWidth,
              height: fontSize
            };
          });
  
          totalWidth += currentColWidth;
          columnWidths.push(currentColWidth);
          minSize.width += totalWidth;
        }
      }
  
      me.width = minSize.width;
      me.height = minSize.height;
    },
    afterFit: noop$1,
  
    // Shared Methods
    isHorizontal: function() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },
  
    // Actually draw the legend on the canvas
    draw: function() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor;
      var lineDefault = globalDefaults.elements.line;
      var legendWidth = me.width;
      var lineWidths = me.lineWidths;
  
      if (opts.display) {
        var ctx = me.ctx;
        var fontColor = valueOrDefault$d(labelOpts.fontColor, globalDefaults.defaultFontColor);
        var labelFont = helpers$1.options._parseFont(labelOpts);
        var fontSize = labelFont.size;
        var cursor;
  
        // Canvas setup
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = fontColor; // for strikethrough effect
        ctx.fillStyle = fontColor; // render in correct colour
        ctx.font = labelFont.string;
  
        var boxWidth = getBoxWidth(labelOpts, fontSize);
        var hitboxes = me.legendHitBoxes;
  
        // current position
        var drawLegendBox = function(x, y, legendItem) {
          if (isNaN(boxWidth) || boxWidth <= 0) {
            return;
          }
  
          // Set the ctx for the box
          ctx.save();
  
          var lineWidth = valueOrDefault$d(legendItem.lineWidth, lineDefault.borderWidth);
          ctx.fillStyle = valueOrDefault$d(legendItem.fillStyle, defaultColor);
          ctx.lineCap = valueOrDefault$d(legendItem.lineCap, lineDefault.borderCapStyle);
          ctx.lineDashOffset = valueOrDefault$d(legendItem.lineDashOffset, lineDefault.borderDashOffset);
          ctx.lineJoin = valueOrDefault$d(legendItem.lineJoin, lineDefault.borderJoinStyle);
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = valueOrDefault$d(legendItem.strokeStyle, defaultColor);
  
          if (ctx.setLineDash) {
            // IE 9 and 10 do not support line dash
            ctx.setLineDash(valueOrDefault$d(legendItem.lineDash, lineDefault.borderDash));
          }
  
          if (opts.labels && opts.labels.usePointStyle) {
            // Recalculate x and y for drawPoint() because its expecting
            // x and y to be center of figure (instead of top left)
            var radius = boxWidth * Math.SQRT2 / 2;
            var centerX = x + boxWidth / 2;
            var centerY = y + fontSize / 2;
  
            // Draw pointStyle as legend symbol
            helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
          } else {
            // Draw box as legend symbol
            if (lineWidth !== 0) {
              ctx.strokeRect(x, y, boxWidth, fontSize);
            }
            ctx.fillRect(x, y, boxWidth, fontSize);
          }
  
          ctx.restore();
        };
        var fillText = function(x, y, legendItem, textWidth) {
          var halfFontSize = fontSize / 2;
          var xLeft = boxWidth + halfFontSize + x;
          var yMiddle = y + halfFontSize;
  
          ctx.fillText(legendItem.text, xLeft, yMiddle);
  
          if (legendItem.hidden) {
            // Strikethrough the text if hidden
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(xLeft, yMiddle);
            ctx.lineTo(xLeft + textWidth, yMiddle);
            ctx.stroke();
          }
        };
  
        // Horizontal
        var isHorizontal = me.isHorizontal();
        if (isHorizontal) {
          cursor = {
            x: me.left + ((legendWidth - lineWidths[0]) / 2) + labelOpts.padding,
            y: me.top + labelOpts.padding,
            line: 0
          };
        } else {
          cursor = {
            x: me.left + labelOpts.padding,
            y: me.top + labelOpts.padding,
            line: 0
          };
        }
  
        var itemHeight = fontSize + labelOpts.padding;
        helpers$1.each(me.legendItems, function(legendItem, i) {
          var textWidth = ctx.measureText(legendItem.text).width;
          var width = boxWidth + (fontSize / 2) + textWidth;
          var x = cursor.x;
          var y = cursor.y;
  
          // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
          // instead of me.right and me.bottom because me.width and me.height
          // may have been changed since me.minSize was calculated
          if (isHorizontal) {
            if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
              y = cursor.y += itemHeight;
              cursor.line++;
              x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2) + labelOpts.padding;
            }
          } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
            x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
            y = cursor.y = me.top + labelOpts.padding;
            cursor.line++;
          }
  
          drawLegendBox(x, y, legendItem);
  
          hitboxes[i].left = x;
          hitboxes[i].top = y;
  
          // Fill the actual label
          fillText(x, y, legendItem, textWidth);
  
          if (isHorizontal) {
            cursor.x += width + labelOpts.padding;
          } else {
            cursor.y += itemHeight;
          }
  
        });
      }
    },
  
    /**
     * @private
     */
    _getLegendItemAt: function(x, y) {
      var me = this;
      var i, hitBox, lh;
  
      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        lh = me.legendHitBoxes;
        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];
  
          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
            // Touching an element
            return me.legendItems[i];
          }
        }
      }
  
      return null;
    },
  
    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     */
    handleEvent: function(e) {
      var me = this;
      var opts = me.options;
      var type = e.type === 'mouseup' ? 'click' : e.type;
      var hoveredItem;
  
      if (type === 'mousemove') {
        if (!opts.onHover && !opts.onLeave) {
          return;
        }
      } else if (type === 'click') {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      }
  
      // Chart event already has relative position in it
      hoveredItem = me._getLegendItemAt(e.x, e.y);
  
      if (type === 'click') {
        if (hoveredItem && opts.onClick) {
          // use e.native for backwards compatibility
          opts.onClick.call(me, e.native, hoveredItem);
        }
      } else {
        if (opts.onLeave && hoveredItem !== me._hoveredItem) {
          if (me._hoveredItem) {
            opts.onLeave.call(me, e.native, me._hoveredItem);
          }
          me._hoveredItem = hoveredItem;
        }
  
        if (opts.onHover && hoveredItem) {
          // use e.native for backwards compatibility
          opts.onHover.call(me, e.native, hoveredItem);
        }
      }
    }
  });
  
  function createNewLegendAndAttach(chart, legendOpts) {
    var legend = new Legend({
      ctx: chart.ctx,
      options: legendOpts,
      chart: chart
    });
  
    core_layouts.configure(chart, legend, legendOpts);
    core_layouts.addBox(chart, legend);
    chart.legend = legend;
  }
  
  var plugin_legend = {
    id: 'legend',
  
    /**
     * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
     * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Legend,
  
    beforeInit: function(chart) {
      var legendOpts = chart.options.legend;
  
      if (legendOpts) {
        createNewLegendAndAttach(chart, legendOpts);
      }
    },
  
    beforeUpdate: function(chart) {
      var legendOpts = chart.options.legend;
      var legend = chart.legend;
  
      if (legendOpts) {
        helpers$1.mergeIf(legendOpts, core_defaults.global.legend);
  
        if (legend) {
          core_layouts.configure(chart, legend, legendOpts);
          legend.options = legendOpts;
        } else {
          createNewLegendAndAttach(chart, legendOpts);
        }
      } else if (legend) {
        core_layouts.removeBox(chart, legend);
        delete chart.legend;
      }
    },
  
    afterEvent: function(chart, e) {
      var legend = chart.legend;
      if (legend) {
        legend.handleEvent(e);
      }
    }
  };
  
  var noop$2 = helpers$1.noop;
  
  core_defaults._set('global', {
    title: {
      display: false,
      fontStyle: 'bold',
      fullWidth: true,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2000         // by default greater than legend (1000) to be above
    }
  });
  
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */
  var Title = core_element.extend({
    initialize: function(config) {
      var me = this;
      helpers$1.extend(me, config);
  
      // Contains hit boxes for each dataset (in dataset order)
      me.legendHitBoxes = [];
    },
  
    // These methods are ordered by lifecycle. Utilities then follow.
  
    beforeUpdate: noop$2,
    update: function(maxWidth, maxHeight, margins) {
      var me = this;
  
      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();
  
      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;
  
      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();
  
      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();
  
      return me.minSize;
  
    },
    afterUpdate: noop$2,
  
    //
  
    beforeSetDimensions: noop$2,
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;
  
        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }
  
      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
  
      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$2,
  
    //
  
    beforeBuildLabels: noop$2,
    buildLabels: noop$2,
    afterBuildLabels: noop$2,
  
    //
  
    beforeFit: noop$2,
    fit: function() {
      var me = this;
      var opts = me.options;
      var display = opts.display;
      var minSize = me.minSize;
      var lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
      var fontOpts = helpers$1.options._parseFont(opts);
      var textSize = display ? (lineCount * fontOpts.lineHeight) + (opts.padding * 2) : 0;
  
      if (me.isHorizontal()) {
        minSize.width = me.maxWidth; // fill all the width
        minSize.height = textSize;
      } else {
        minSize.width = textSize;
        minSize.height = me.maxHeight; // fill all the height
      }
  
      me.width = minSize.width;
      me.height = minSize.height;
  
    },
    afterFit: noop$2,
  
    // Shared Methods
    isHorizontal: function() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },
  
    // Actually draw the title block on the canvas
    draw: function() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
  
      if (opts.display) {
        var fontOpts = helpers$1.options._parseFont(opts);
        var lineHeight = fontOpts.lineHeight;
        var offset = lineHeight / 2 + opts.padding;
        var rotation = 0;
        var top = me.top;
        var left = me.left;
        var bottom = me.bottom;
        var right = me.right;
        var maxWidth, titleX, titleY;
  
        ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
        ctx.font = fontOpts.string;
  
        // Horizontal
        if (me.isHorizontal()) {
          titleX = left + ((right - left) / 2); // midpoint of the width
          titleY = top + offset;
          maxWidth = right - left;
        } else {
          titleX = opts.position === 'left' ? left + offset : right - offset;
          titleY = top + ((bottom - top) / 2);
          maxWidth = bottom - top;
          rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
        }
  
        ctx.save();
        ctx.translate(titleX, titleY);
        ctx.rotate(rotation);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
  
        var text = opts.text;
        if (helpers$1.isArray(text)) {
          var y = 0;
          for (var i = 0; i < text.length; ++i) {
            ctx.fillText(text[i], 0, y, maxWidth);
            y += lineHeight;
          }
        } else {
          ctx.fillText(text, 0, 0, maxWidth);
        }
  
        ctx.restore();
      }
    }
  });
  
  function createNewTitleBlockAndAttach(chart, titleOpts) {
    var title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart
    });
  
    core_layouts.configure(chart, title, titleOpts);
    core_layouts.addBox(chart, title);
    chart.titleBlock = title;
  }
  
  var plugin_title = {
    id: 'title',
  
    /**
     * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
     * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Title,
  
    beforeInit: function(chart) {
      var titleOpts = chart.options.title;
  
      if (titleOpts) {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    },
  
    beforeUpdate: function(chart) {
      var titleOpts = chart.options.title;
      var titleBlock = chart.titleBlock;
  
      if (titleOpts) {
        helpers$1.mergeIf(titleOpts, core_defaults.global.title);
  
        if (titleBlock) {
          core_layouts.configure(chart, titleBlock, titleOpts);
          titleBlock.options = titleOpts;
        } else {
          createNewTitleBlockAndAttach(chart, titleOpts);
        }
      } else if (titleBlock) {
        core_layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
      }
    }
  };
  
  var plugins = {};
  var filler = plugin_filler;
  var legend = plugin_legend;
  var title = plugin_title;
  plugins.filler = filler;
  plugins.legend = legend;
  plugins.title = title;
  
  /**
   * @namespace Chart
   */
  
  
  core_controller.helpers = helpers$1;
  
  // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
  core_helpers(core_controller);
  
  core_controller._adapters = core_adapters;
  core_controller.Animation = core_animation;
  core_controller.animationService = core_animations;
  core_controller.controllers = controllers;
  core_controller.DatasetController = core_datasetController;
  core_controller.defaults = core_defaults;
  core_controller.Element = core_element;
  core_controller.elements = elements;
  core_controller.Interaction = core_interaction;
  core_controller.layouts = core_layouts;
  core_controller.platform = platform;
  core_controller.plugins = core_plugins;
  core_controller.Scale = core_scale;
  core_controller.scaleService = core_scaleService;
  core_controller.Ticks = core_ticks;
  core_controller.Tooltip = core_tooltip;
  
  // Register built-in scales
  
  core_controller.helpers.each(scales, function(scale, type) {
    core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
  });
  
  // Load to register built-in adapters (as side effects)
  
  
  // Loading built-in plugins
  
  for (var k in plugins) {
    if (plugins.hasOwnProperty(k)) {
      core_controller.plugins.register(plugins[k]);
    }
  }
  
  core_controller.platform.initialize();
  
  var src = core_controller;
  if (typeof window !== 'undefined') {
    window.Chart = core_controller;
  }
  
  // DEPRECATIONS
  
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Chart
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  core_controller.Chart = core_controller;
  
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Legend
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.Legend = plugins.legend._element;
  
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Title
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.Title = plugins.title._element;
  
  /**
   * Provided for backward compatibility, use Chart.plugins instead
   * @namespace Chart.pluginService
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.pluginService = core_controller.plugins;
  
  /**
   * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
   * effect, instead simply create/register plugins via plain JavaScript objects.
   * @interface Chart.PluginBase
   * @deprecated since version 2.5.0
   * @todo remove at version 3
   * @private
   */
  core_controller.PluginBase = core_controller.Element.extend({});
  
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas instead.
   * @namespace Chart.canvasHelpers
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */
  core_controller.canvasHelpers = core_controller.helpers.canvas;
  
  /**
   * Provided for backward compatibility, use Chart.layouts instead.
   * @namespace Chart.layoutService
   * @deprecated since version 2.7.3
   * @todo remove at version 3
   * @private
   */
  core_controller.layoutService = core_controller.layouts;
  
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.LinearScaleBase
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */
  core_controller.LinearScaleBase = scale_linearbase;
  
  /**
   * Provided for backward compatibility, instead we should create a new Chart
   * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   */
  core_controller.helpers.each(
    [
      'Bar',
      'Bubble',
      'Doughnut',
      'Line',
      'PolarArea',
      'Radar',
      'Scatter'
    ],
    function(klass) {
      core_controller[klass] = function(ctx, cfg) {
        return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
          type: klass.charAt(0).toLowerCase() + klass.slice(1)
        }));
      };
    }
  );
  
  return src;
  
  })));
  
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)
}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;
this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(g,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
}},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",function(){_=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;
this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip});
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

;
  $(document).ready(function () {

    let catalogComplexSection;
    if ($('.catalog-complex-box').length) {
      catalogComplexSection= $('.catalog-complex-box').offset().top;

    $(window).bind('scroll', function () {
      if ($(this).scrollTop() >= catalogComplexSection) {
        //ДОБАВЛЕНИЕ СЛАЙДОВ В СЛАЙДЕР

        let $slider = $('.advice-slider');
        let slides = '';
        slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">Перепланировка. С чего начать? Подводные камни</div></div>';
        slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">Перепланировка. С чего начать? Подводные камни</div></div>';
        slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">Перепланировка. С чего начать? Подводные камни</div></div>';
        slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">Перепланировка. С чего начать? Подводные камни</div></div>';
        slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">Перепланировка. С чего начать? Подводные камни</div></div>';

        $($slider).append(slides);

        $($slider).slick({
          adaptiveHeight: true,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: '<button id="prev" type="button" class="advice-slider__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
          nextArrow: '<button id="next" type="button" class="advice-slider__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });

        $(this).unbind('scroll');
      }
    });
  }
  });


$(document).ready(function () {

  var analogArray = [
    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский-приморский  район, Мебельная-мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    }
  ]

  var fragment = document.createDocumentFragment(); // fragment
  var template = document.querySelector('#analog-template'); // template
  var analogBox = document.querySelector('#analogList'); // box

  var analogItems = 2;

  var fillAnalogNode = function (element, analogData) {
    element.querySelector('.analog__item-image').setAttribute('src', analogData.url);
    element.querySelector('.analog__item-title').textContent = analogData.name;
    element.querySelector('.analog__item-metro').textContent = analogData.metro;
    element.querySelector('.analog__item-street').textContent = analogData.street;
  };

  var createAnalogNode = function () {

    for(var i = 0; i < analogItems; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var analogData = analogArray[i]; // current analog

      fillAnalogNode(currentItem, analogData); // run fill func

      fragment.appendChild(currentItem);
    };
      analogBox.appendChild(fragment);
  };

  if ($('#analog-template').length) {
    createAnalogNode();
  }

});

;

$(document).ready(function () {

  if ($('#bank').length) {

  var bankList = [
    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    }
  ];

  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#bank'); //template
  var bankNode = document.querySelector('.credit__list'); // node


  var fillBankList = function (element, bankData) {
    element.querySelector('.bank__logo').setAttribute('src', bankData.img);
    element.querySelector('.bank__title').textContent = bankData.name;
    element.querySelector('.deposit').textContent = bankData.deposit;
    element.querySelector('.rate').textContent = bankData.rate;
    element.querySelector('.timeFrom').textContent = bankData.timeFrom;
    element.querySelector('.timeTo').textContent = bankData.timeTo;
  };

  var createBankCard= function () {

    for(var i = 0; i < bankList.length; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var bankData = bankList[i]; // current item

      fillBankList(currentItem, bankData); // run fill func

      fragment.appendChild(currentItem);
    };
      bankNode.appendChild(fragment);
  };

  createBankCard();

  var visibleItems = 4;
  var bankItem = document.querySelectorAll('.credit__list-item');
  var showMoreBtn = document.querySelector('.credit__listBtn');

  var showCard = function () {
    if (bankList.length > visibleItems) {
      for(var i = visibleItems; i < bankList.length; i++){
        bankItem[i].classList.add('visually-hidden');
      }
    } else {
      showMoreBtn.classList.add('visually-hidden');
    }
  };

  var showMoreCard = function () {
    for (var i = 0; i < visibleItems; i++) {
      if(bankItem[i].classList.contains('visually-hidden')) {
        bankItem[i].classList.remove('visually-hidden');
      }
    }
  }

  showMoreBtn.addEventListener('click', function() {
    if ((bankList.length - visibleItems) > 4) {
      visibleItems += 4;
      showMoreCard();
    } else {
      visibleItems = bankList.length;
      showMoreCard();
      showMoreBtn.classList.add('visually-hidden');
    }
  });



  showCard();

  };

});

$(document).ready(function () {


  $('.blog__show-btn').click(function () {//Читать полностью
    $('.blog__wrapper').find('.hidden').removeClass('hidden');
    $(this).addClass('hidden');
  });

});

;
(function () {
  $(document).ready(function () {
    $('.btn-open-nav').click(function (e) { //Открытие/Закрытие меню
      $('.catalog-nav').toggleClass('catalog-nav--active');
      $('.header-catalog').toggleClass('header-catalog--nav-active');
    });
    $('.list-type__btn-tile').click(function (e) { //Отображать плиткой
      $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-type__btn-list').click(function (e) { //Отображать списком
      $('.catalog-complex__list').addClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-character__btn').click(function (e) { //Кнопки отображения по характеристикам
      $(this).siblings().removeClass('list-character__btn--active');
      $(this).addClass('list-character__btn--active');
      reInitSlickFlats();
    });
    $('.filter__btn-reset, .map-filter__btn-reset').click(function (e) { //Кнопка сброса
      $('.checkboxes').removeClass('checkboxes--active');
    });

    $('.list-type__btn').click(function (e) { //Кнопки отображения по виду
      if (!$(this).hasClass('list-type__btn-map')) {
        $(this).siblings().removeClass('list-type__btn--active');
        $(this).addClass('list-type__btn--active');
        reInitSlickFlats();
      }
    });

    $('.catalog-nav__item ').click(function (e) { //header buttons
      if (!$(this).hasClass('catalog-nav__item-menu')) {
        $(this).siblings().removeClass('catalog-nav__item--active');
        $(this).addClass('catalog-nav__item--active');
      }
    });

    $('body').on('click', function (e) {
      let $nav = $('.header-catalog__nav');
      if (!$(e.target).hasClass('header-catalog__nav')&& !$(e.target).hasClass('btn-open-nav') && !$(e.target).hasClass('img-open-nav') && !$(e.target).hasClass('catalog-nav__item')&& !$(e.target).hasClass('link') && !$(e.target).hasClass('catalog-nav__drop')) {
        $($nav).removeClass('catalog-nav--active');
        $('.header-catalog').removeClass('header-catalog--nav-active');
      }
    });

    $(window).on('resize', function () {
      if ($(this).width() <= 768) {
        $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
        $('.list-type__btn-tile').addClass('list-type__btn--active');
        $('.list-type__btn-list').removeClass('list-type__btn--active');
        reInitSlickFlats();
      }
    });

    function reInitSlickFlats() {
      let $slider = $('.catalog-complex__slider');
      $($slider).slick('unslick');
      $slider.slick({
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="catalog-complex__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
        nextArrow: '<button id="next" type="button" class="catalog-complex__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
      });
    }

  });
})();

function toNumber(x) { //Делает пробелы, между числами
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
};
(function () {
  $(document).ready(function () {

    let arrImg = ['img/analog_1.jpg', 'img/img-video-2.jpg'] //массив фоток для одной квартиры (в данном случае этот массив пойдет всем квартирам)
    let flats = []; //Список квартир
    flats[0] = {
      'id': 0, 'square': 18, 'floor': 3, 'totalFloor': 3, 'type': 'Без отделки', 'cost': '2400000', 'room': 1, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[1] = {'id':1,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[2] = {'id':2,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[3] = {'id':3,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[4] = {'id':4,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[5] = {'id':5,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[6] = {'id':6,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[7] = {'id':7,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[8] = {'id':8,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[9] = {'id':9,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[10] = {'id':10,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[11] = {'id':11,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[12] = {'id':12,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[13] = {'id':13,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[14] = {'id':14,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[15] = {'id':15,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[16] = {'id':16,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[17] = {'id':17,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[18] = {'id':18,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[19] = {'id':19,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[20] = {'id':20,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[21] = {'id':21,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[22] = {'id':22,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[23] = {'id':23,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[24] = {'id':24,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[25] = {'id':25,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[26] = {'id':26,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[27] = {'id':27,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[28] = {'id':28,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[29] = {'id':29,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[30] = {'id':30,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[31] = {'id':31,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[32] = {'id':32,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[33] = {'id':33,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[34] = {'id':34,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[35] = {'id':35,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[36] = {'id':36,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[37] = {'id':37,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[38] = {'id':38,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[39] = {'id':39,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[40] = {'id':40,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[41] = {'id':41,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[42] = {'id':42,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[43] = {'id':43,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[44] = {'id':44,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[45] = {'id':45,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[46] = {'id':46,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[47] = {'id':47,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[48] = {'id':48,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[49] = {'id':49,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[50] = {'id':50,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[51] = {'id':51,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[52] = {'id':52,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[53] = {'id':53,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[54] = {'id':54,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[55] = {'id':55,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[56] = {'id':56,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[57] = {'id':57,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[58] = {'id':58,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[59] = {'id':59,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[60] = {'id':60,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[61] = {'id':61,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[62] = {'id':62,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[63] = {'id':63,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };


    let countRoomOne = getCountFlatsByRoom(flats, 1);
    let countRoomTwo = getCountFlatsByRoom(flats, 2);
    let countRoomThree = getCountFlatsByRoom(flats, 3);
    let countRoomStudio = getCountFlatsByRoom(flats, 4);
    $('.flats__modalBtn[data-flats="1"]').find('.flat-count').text(countRoomOne);
    $('.flats__modalBtn[data-flats="2"]').find('.flat-count').text(countRoomTwo);
    $('.flats__modalBtn[data-flats="3"]').find('.flat-count').text(countRoomThree);
    $('.flats__modalBtn[data-flats="4"]').find('.flat-count').text(countRoomStudio);

    let currentPage = 1;
    let entryOnPage = 10;
    totalPage = Math.ceil(flats.length / entryOnPage);

    let $tableList = $('#catalog-list-table');
    let countRoomFlats, arrayFlats;
    $('.flats__modalBtn').on('click', function (e) {
      e.preventDefault();

      currentPage = 1;
      countRoomFlats = $(this).attr('data-flats');
      let $modalWindow = $('.catalog__modal');
      let currentRoomFlats = $modalWindow.attr('data-flats'); //Текущий контент модального окна
      clearListTable();
      if (!$modalWindow.has('modal--closed')) { //Если окно открыто
        $modalWindow.addClass('modal--closed');
      }
      if (countRoomFlats == currentRoomFlats) { //если текущий контент мод. окна соответсвует тому контенту, который появляется при нажатии на текущюю кнопку
        $modalWindow.addClass('modal--closed');
        $modalWindow.attr('data-flats', '0');
        clearListTable();
        return;
      }

      if (countRoomFlats == '1') { //если 1-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '1');
      } else if (countRoomFlats == '2') { //если 2-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '2');
      } else if (countRoomFlats == '3') { //если 3-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '3');
      } else if (countRoomFlats == '4') { //если 4-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '4');
      }
      arrayFlats = getFlatsByRoom(flats, parseInt(countRoomFlats));
      flatsOut(arrayFlats, countRoomFlats, true);
      $('catalog__modal').scrollTop(0);

    });

    function flatsOut(flats, countRoom, pagination) { //Выводит квартиры в модальное окно. Создает одну таблицу
      catalogSliderDestroy(); //Отключить слайдеры
      totalPage = Math.ceil(flats.length / entryOnPage);

      if (countRoom == '4') {
        $('.catalog-title-box').html('<span class="name-flats">Студии</span><span class="count-flats">' + flats.length + ' квартир</span>');
      } else {
        $('.catalog-title-box').html('<span class="name-flats">' + countRoom + '-к квартиры</span><span class="count-flats">' + flats.length + ' квартир</span>');
      }

      let str = '<table class="catalog-table "><thead><th class="icon-flats"></th><th class="square">Площадь, м2</th><th class="floor">Этаж</th><th class="type">Тип отделки</th><th class="cost">Стоимость кв, руб</th><th class="plan">Планировка</th></thead><tbody><tr class="tr-empty"><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td rowspan="0" class="catalog-img-flat"><span class="wrap-heart"><svg class="heart" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg><svg  class="heart-fill hidden" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span><img src="' + flats[0].imgPlan + '" alt=""><button type="button" class="btnToBook pink__btn" data-id="' + flats[0].id + '">Забронировать</button></td></tr>';
      let j = 0, idActiveItem, imgPathActiveItem;
      for (let i = (currentPage - 1) * entryOnPage; i < flats.length && i < currentPage * entryOnPage; i++) {
        j++;
        if (j == 1) {
          str += '<tr class="tr-catalog-item tr-catalog-item--active" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
          idActiveItem = flats[i].id;
          imgPathActiveItem = flats[i].imgPlan;
        } else {
          str += '<tr class="tr-catalog-item" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
        }
        str += '<td class="icon-flats"><img src="img/icon-flats.png" alt=""></td>';
        str += '<td><div>' + flats[i].square + ' м2</div></td>';
        str += '<td><div>' + flats[i].floor + '</div></td>';
        str += '<td><div>' + flats[i].type + '</div></td>';
        str += '<td><div>' + toNumber(flats[i].cost) + '</div></td>';
        str += '</tr>';
        str += '<div class="catalog-item"><div class="catalog-item__num">' + countRoom + '-к квартира № 115</div><div class="catalog__slide-wrap"><div class="catalog__slider">';

        for (let j = 0; j < flats[i].images.length; j++) {
          const img = flats[i].images[j];
          str += '<div class="catalog__slider-item"><img src="'+img+'" alt="image"></div>';
        }
        str+='</div></div><div class="catalog-item__cost">' + toNumber(flats[i].cost) + '</div><div class="catalog-item__inner-flats"><div class="left-block"><span class="catalog-item__square">' + flats[i].square + ' м2</span><span class="catalog-item__floor">' + flats[i].floor + '/' + flats[i].totalFloor + ' этаж</span></div><span class="more">Подробнее</span></div><button type="button" class="catalog-item__btn pink__btn" data-id="'+ flats[i].id +'">Записаться на просмотр</button></div>';
      }
      str += '</tbody></table>';
      $tableList.append(str);

      updateImage(imgPathActiveItem, idActiveItem);
      if (totalPage > 1) {

      }
      catalogSliderInit(); //Включить слайдеры

      if (pagination) {

        updatePagination(totalPage); //Обновляем пагинацию
      }

      initObr(); //Обновляем обработчики
    }

    function initObr() {
      $('.tr-catalog-item').off('click');
      $('.tr-catalog-item').on('click', function () {
        $(this).addClass('tr-catalog-item--active').siblings('.tr-catalog-item').removeClass('tr-catalog-item--active');
        let img = $(this).attr('data-img-plan'); //берем картинку планировки
        let id = $(this).attr('data-id'); //берем id
        updateImage(img, id); //Обновляем картинку планировки
      });
      $('.catalog-pagination__item').off('click');
      $('.catalog-pagination__item').on('click', function () {
        $(this).addClass('catalog-pagination__item--active').siblings().removeClass('catalog-pagination__item--active');
        currentPage = parseInt($(this).text());
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });
      $('catalog__modal').scrollTop(0);

      $('.btn-show-more').off('click');
      $('.btn-show-more').on('click', function () {
        $(this).addClass('hidden');
        $('.catalog-pagination__list').removeClass('hidden');
        currentPage = 2;
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });

      $('.btnToBook').off('click');
      $('.btnToBook').on('click', function () {
        let id = $(this).attr('data-id');
        $('.modal-to-book').addClass('modal-to-book--active');
        let str = '';
        if (flats[id].room == 1) {
          str = 'Забронировать 1-комнатную квартиру';
        }
        if (flats[id].room == 2) {
          str = 'Забронировать 2-комнатную квартиру';
        }
        if (flats[id].room == 3) {
          str = 'Забронировать 3-комнатную квартиру';
        }
        if (flats[id].room == 4) {
          str = 'Забронировать студию';
        }
        $('.btn-submit-to-book').attr('data-id', id);
        $('.modal-to-book .modal__title').text(str)

      });
      $('.wrap-heart').off('click');
      $('.wrap-heart').on('click', function () {
        $(this).children('.heart-fill').toggleClass('hidden');
      });
    }

    function updatePagination(total) {
      let $parent = $('.catalog-pagination__list');
      $parent.html('');


      let str = '';
      for (let i = 0; i < total; i++) {
        if (i == currentPage) {
          str += '<div class="catalog-pagination__item catalog-pagination__item--active">' + (i + 1) + '</div>';
        } else {
          str += '<div class="catalog-pagination__item">' + (i + 1) + '</div>';
          }
        }

      if (totalPage > 1 && currentPage == 1) {
        $('.btn-show-more').removeClass('hidden');
        $parent.addClass('hidden');
      } else {
        $parent.removeClass('hidden');
        $('.btn-show-more').addClass('hidden');
      }
      if (total == 1) {
        $parent.addClass('hidden');
      }
      $parent.append(str);
    }

    function catalogSliderInit() {
      $('.catalog__slider').slick({
        arrows: false,
        slidesToShow: 1,
      });
      $('.catalog__slider-item img').off('click');
      $('.catalog__slider-item img').on('click', function () {
        $(this).closest('.catalog__slider').slick('slickNext');
      });
    }

    function catalogSliderDestroy() {
      if ($('.catalog__slider').length) {
        $('.catalog__slider').slick('unslick');
      }
    }

    function getCountFlatsByRoom(arrObj, num) { // Считает кол-во квартир определенного типа (1ком., 2ком., студия и т.д.)
      let sum = 0;
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          sum++;
        }
      }
      return sum;
    }

    function getFlatsByRoom(arrObj, num) { // Возвращает квартиры определенного типа
      let tempArray = [];
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          tempArray.push(arrObj[i]);
        }
      }
      return tempArray;
    }

    function clearListTable() { // Очищает список таблиц
      catalogSliderDestroy();
      $tableList.empty();
    };

    function updateImage(pathImg, id) {
      $('.catalog-img-flat img').attr('src', pathImg);
      $('.btnToBook').attr('data-id', id);
    }
    $('.modal-to-book__form-input.phone').off();
    $('.modal-to-book__form-input.phone').on('keypress', function (e) {
      validate(e); // функция из validate.js
    });

    $('body').on('click', function (e) { // Закрытие модального окна по клику на фон
      if ($('.catalog__modal').has(e.target).length === 0 && $('.flats__link').has(e.target).length === 0 && !$(e.target).closest('.catalog__modal').length && !$(e.target).closest('.modal-to-book').length) { //Если не содержит этот target
        if (!$('.catalog__modal').hasClass('modal--closed') && !$(e.target).hasClass('flats__link')) {
          $('.catalog__modal').addClass('modal--closed');
          $('.catalog__modal').attr('data-flats', '0');
          clearListTable();
        }
      }
    });
  });
})();

$(document).ready( function () {
  //Календарь datapicker]
  $('#hasDatepicker').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    onSelect: function (dateText, inst) {
      let day = $(this).datepicker('getDate').getDate();
      let month = $(this).datepicker('getDate').getMonth();
      $('.date-info .date').text(day + '.' + month);
    }
  });
  //Select time excursion
  $('.excursion__select-time').on('input', function () {
    $('.date-info .time').text($(this).val() + ':00');
  });

});

$(document).ready( function () {
  var deadlineList = document.querySelector('.flats__deadline-list');
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  if ($('.flats__title').length) {
    title.addEventListener('click', showDeadlineList);
  }

});

$(document).ready(function () {
  var tableBtn = document.querySelectorAll('.description__table');

  for (var i = 0; i < tableBtn.length; i++) {

    tableBtn[i].classList.remove('table--nojs');
    tableBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      this.classList.toggle('active');
    })
  }
});

;(function () {
  $(document).ready(function () {


    let arrDoc = [];
    arrDoc[0] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[1] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[2] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[3] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[4] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[5] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[6] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };

    let countDocVisible = 3 //Количество видимых документов
    let DocLeft = arrDoc.length; //Сколько осталось скрытых объектов
    if (DocLeft < 0) {
      DocLeft = 0;
    }
    $('.documents__list').html('');
    loadDocuments(arrDoc);
   
    function loadDocuments(arrDoc) {
      if ($(".fancybox").length) {
        $(document).unbind('click.fb-start');
      }
      let j = 0; //Счетчик объектов, выводимых на страницу
      let strHTML = '';
      for (let i = 0; i < DocLeft && j < countDocVisible && DocLeft!=0; i++) {
        j++;
        strHTML += '<li class="documents__item fancybox" data-fancybox-type="iframe" href="' + arrDoc[i].document + '"><p class="documents__item-name">' + arrDoc[i].name + '</p><span class="documents__item-size">' + arrDoc[i].weight + '</span></li>';
        
      }
     
      DocLeft -= j; //Определяем сколько еще осталось объектов для вывода
  
      if (DocLeft < 0) {
        DocLeft = 0;
      }
      if (DocLeft <= 0 || j == 0) {
        $('.documents__show-btn').addClass('documents__show-btn--hidden');
      } else {
        $('.documents__show-btn').text('Показать еще ' + DocLeft + ' ' + num2str(DocLeft, ['документ', 'документа', 'документов']));
      }
      $('.documents__list').append(strHTML);

      $(".fancybox").fancybox({
      });
    }

    $('.documents__show-btn').click(function () {
      loadDocuments(arrDoc);
    });
  });

  

  function num2str(n, text_forms) { //Склонение слов в зависимости от числа
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
})();
$(document).ready(function () {

  $('.estate__slider-box').slick({
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="estate__slider-prevBtn"></button>',
    nextArrow: '<button id="next" type="button" class="estate__slider-nextBtn"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  $('.estate__slider-item').on('click', function () {
    $('.estate__slider-box').slick('slickNext');
  });
});

;
(function () {
  $(document).ready(function () {
    //Модальное окно modal-image
    $('.modal-image__item').on('click', modalPhoto);

    //--------------------------expectation---------------------------
    let arrayPhotos = []; //Массив фотографий

    arrayPhotos[0] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[1] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[2] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[3] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};

    let $parent = $('.expectation__photo-box');

    updateData(arrayPhotos, $parent);
    $('.expectation__image').off('click');
    $('.expectation__image').on('click', function () {
      let begin = $(this).attr('data-index');
      updateGalery(arrayPhotos, $('.galery__slider'), begin);
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });
    function updateData(listObjects, parent, begin) {
      let strHTML = '';
      if ($(parent).hasClass('galery__slider')) {
        $('.galery__slider').html('');
        for (let i = 0; i < listObjects.length; i++) {
          strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
        }
        $('.galery__slider').html(strHTML);

      } else {
        $('.expectation__photo-box').html('');
        for (let i = 0; i < listObjects.length ; i++) {
          strHTML += '<div class="expectation__item modal-image__item"><picture><source type="image/webp" srcset="img/devSlider-img1.webp"><img src="' + listObjects[i].photo + '" class="expectation__image" data-big-src="' + listObjects[i].photoLarge + '" data-index="' + i + ' alt="image" width="320" height="220"></picture><div class="expectation__description-box"><span class="expectation__photo-text">Корпус ' + listObjects[i].corpus + '</span><span class="expectation__photo-text expectation__photo-text--date">' + listObjects[i].date + '</span></div></div>';
        }

        $(parent).append(strHTML);
      }

      if ($(parent).hasClass('galery__slider')) {
        let $slider = $('.galery__slider');
        initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
      }
    };
    if ($(window).width() < 1360) {
      $('.expectation .expectation__image').off('click');
    } else {
      $('.expectation__image').off('click');
      $('.expectation__image').on('click', modalPhoto);
    }

    $(window).on('resize', function () {
      if ($(window).width() < 1360) {
        $('.expectation .expectation__image').off('click');
        $('.expectation .expectation__image').removeClass('modal-image__item');
      } else {
        if (!$('.expectation__image').hasClass('modal-image__item')) {
          $('.expectation__image').addClass('modal-image__item');
          $('.expectation__image').off('click');
          $('.expectation__image').on('click', modalPhoto);
        }
      }
    });

    function modalPhoto() {
      let begin = $(this).attr('data-index');
      updateData(arrayPhotos, $('.galery__slider'), begin);
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    }

    $('.expectation__show-btn').on('click', function () {
      updateData(arrayPhotos, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });

  });

})();

(function () {

  var WIDTH = 1360;
  $(document).ready(function () {
    if ($(window).width() >= 1360) {
    } else {
      sliderOptions();
    }
  });
  var sliderOptions = function () {
    if ($('.expectation__photo-box').hasClass('slick-initialized')) {
      $('.expectation__photo-box').slick('unslick');
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    }
    $('.expectation__photo-box').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      arrows: false,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1360,
        settings: 'unslick'
      }]
    });
    if ($(window).width() >= 1360) {
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    } else {
      $('.expectation__photo-box.slick-slider').on('click', nextSlide);
    }
    $(window).on('resize', function () {
      if ($(window).width() >= 1360) {
        $('.expectation__photo-box.slick-slider').off('click', nextSlide);
      } else {
        $('.expectation__photo-box.slick-slider').on('click', nextSlide);
      }
    });

    function nextSlide() {
      $(this).slick('slickNext');
    }
  }

  var flag = false;

  var galleryType = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > WIDTH) {
      flag = true;
      window.addEventListener('resize', sliderInit);
    } else {
      sliderOptions();
      window.addEventListener('resize', sliderDestroy);
    }
  }

  var sliderInit = function () {
    var initWidth = window.innerWidth;
    if (initWidth < WIDTH) {
      if (flag) {
        sliderOptions();
        flag = false;
        window.addEventListener('resize', sliderDestroy);
      }
    }
  }

  var sliderDestroy = function () {
    destroyWidth = window.innerWidth;
    if (destroyWidth > WIDTH) {
      if (!flag) {
        galleryType();
      }
    }
  }

  galleryType();
}());

// 'use strict';


    ;
(function () {
  $(document).ready(function () {
    let arrFeedbacks = []; //Массив отзывов
    let countVisible = 3;
    let lengthChars = 180;//Максимальная длина символов сообщения, которая будет видна
    let nameComplex = 'ЖК "Новое Мурино"';
    arrFeedbacks[0] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacks[1] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[2] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[3] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[4] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[5] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[6] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[7] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[8] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[9] = { avatar: 'img/avatar.svg', name: 'Самойлова Виктория5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    let arrFeedbacksDeveloper = []; //Массив отзывво
    // feedback__toogle-link feedback__toogle-link--developer
    arrFeedbacksDeveloper[0] = {avatar: 'img/avatar.svg',name: 'Застройщик',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacksDeveloper[1] = {avatar: 'img/avatar.svg',name: 'Застройщик1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[2] = {avatar: 'img/avatar.svg',name: 'Застройщик2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[3] = {avatar: 'img/avatar.svg',name: 'Застройщик3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[4] = {avatar: 'img/avatar.svg',name: 'Застройщик4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[5] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[6] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[7] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[8] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[9] = { avatar: 'img/avatar.svg', name: 'Застройщик5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    $('.feedback__title').text("Отзывы о " + nameComplex);
    updateFeedback(arrFeedbacks);

    function updateFeedback(listObjects) {
      $('.feedback__inner').html('');
      let strHTML = '';
      let j = 0;
      for (let i = 0; i < listObjects.length && i < countVisible; i++) {
        j++;
        strHTML += '<div class="feedback__box"><div class="feedback__avatar-box"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__avatar" width="16" height="20"></div><div class="feedback-content"><div class="feedback__author-container"><b class="feedback__author">' + listObjects[i].name + '</b><small class="feedback__time">' + listObjects[i].date + '</small></div>';
        let classBtnUnfurl = 'hidden';

        if (listObjects[i].feedback.length > lengthChars) {
          classBtnUnfurl = '';
        }

        strHTML +='<p class="feedback__text">' + truncate(listObjects[i].feedback) + '</p><p class=" feedback__text--full hidden">' + listObjects[i].feedback + '</p><div class="feedback__buttons"><button type="button" class="feedback__answer-btn">Ответить</button><button type="button" class="feedback__btn feedback__btn--unfurl '+classBtnUnfurl+'"><span class="text">Читать весь отзыв</span><img src="img/arrow__down-input-grey.svg" alt="image"></button><div class="feedback__answer-box hidden"><div class="feedback__answer"><div class="feedback__author-avatarBox"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__author-avatar" width="16" height="20"></div><div class="feedback__answer-wrapper"><div class="desc-wrap"><p class="feedback__answer-description">ответ на отзыв @<span class="feedback__answer-author">' + listObjects[i].name + '</span></p><div class="btn-collapse"><img src="img/arrow-down.png" alt="image"></div></div><textarea class="feedback__answer-textarea" type="textarea" rows="8" cols="45" placeholder="Текст сообщения..." required></textarea><div class="feedback__answer-checkbox"><label for="agree'+i+'" >Согласен с правилами публикации на сайте <input id="agree'+i+'" name="cb" type="checkbox" required><span class="check"></span></label></div><input class="feedback__answer-sellBtn pink__btn" type="submit" value="Отправить комментарий"></div></div></div></div></div></div>';
      }

      $('.feedback__inner').append(strHTML);

      $('.feedback__show-btn').off('click');
      $('.feedback__show-btn').on('click', function () {

        if ($(this).hasClass('feedback__show-btn--active')) {
          $(this).children('.text').text('Показать все отзывы');
          $(this).removeClass('feedback__show-btn--active');
          countVisible = 3;
          $('.feedback__wrap-inner').scrollTop(0);
          $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');

        } else {
          $(this).children('.text').text('Скрыть отзывы');
          $(this).addClass('feedback__show-btn--active');
          countVisible = listObjects.length;
          $('.feedback__wrap-inner').addClass('feedback__wrap-inner--active');
        }

        updateFeedback(listObjects);
      });
      $('.feedback__answer-btn').off('click');
      $('.feedback__answer-btn').on('click', function () {
        if (!$(this).siblings('.feedback__answer-box').hasClass('hidden')) {
          $(this).siblings('.feedback__answer-box').addClass('hidden');
        } else {
          $(this).siblings('.feedback__answer-box').removeClass('hidden');
        }
        $(this).closest('.feedback__box').siblings('.feedback__box').find('.feedback__answer-box').addClass('hidden');

        let x1 = parseInt($(this).position().top);
        let x2 = parseInt($('.feedback__inner').position().top);

        let currentPosition = x1 - x2;

        if ($(window).width() > 768) {
          currentPosition = x1 - x2 -100;
          $('.feedback__wrap-inner').scrollTop(currentPosition);
        }

      });
      $('.desc-wrap .btn-collapse').off('click');
      $('.desc-wrap .btn-collapse').on('click', function () {
        $(this).closest('.feedback__box').find('.feedback__answer-box').addClass('hidden');
      });
      $('.feedback__btn--unfurl').off('click');
      $('.feedback__btn--unfurl').on('click', function () {
        if ($(this).children('.text').text() == 'Скрыть отзыв') {
          $(this).children('.text').text('Читать весь отзыв');
          $(this).removeClass('feedback__btn-active');
          $($parent).find('.feedback__text--full').addClass('hidden');
          $($parent).find('.feedback__text').removeClass('hidden');
        } else {
          $(this).children('.text').text('Скрыть отзыв');
          $(this).addClass('feedback__btn-active');
          $parent = $(this).closest('.feedback-content');
          $($parent).find('.feedback__text--full').removeClass('hidden');
          $($parent).find('.feedback__text').addClass('hidden');
        }
      });

    }
    function truncate(input) {
      if (input.length > 5)
         return input.substring(0,lengthChars) + '...';
      else
         return input;
    };
    $('.feedback__toogle-link').on('click', function () {
      $(this).addClass('feedback__toogle-link--active').siblings().removeClass('feedback__toogle-link--active');
      countVisible = 3;
      $('.feedback__show-btn').children('.text').text('Показать все отзывы');
      $('.feedback__show-btn').removeClass('feedback__show-btn--active');

      $('.feedback__wrap-inner').scrollTop(0);
      $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');

      if ($(this).hasClass('feedback__toogle-link--estate')) {
        updateFeedback(arrFeedbacks);
      } else if ($(this).hasClass('feedback__toogle-link--developer')) {

        updateFeedback(arrFeedbacksDeveloper);
      }

    });
    $('.feedback__add-btn').on('click', function () {
      $('.modal-feedback').addClass('modal-feedback--active');

    });
    $('.modal-feedback .modal__close-btn').on('click', function () {
      $('.modal-feedback').removeClass('modal-feedback--active');

    });
  });
})();

;

  $(document).ready(function () {
    if($('.filter-box').length) {

      var mapComplex, clusterer;
      var coordsCenter = [59.931973315391325,30.26679547713465]//Координаты центра карты (в данном случае Санкт-Петербург)
      var coordsCenterMoscow = [55.760189227727665,37.62209300000001]//Координаты центра карты Москвы


      var mapComplexItem = null;//Мини карта для объектов
      var countObjects = 4; //Колитчество комплексов на странице
      var pageNum = 1; //текущая страница

      var filterComplex = {
        'area': '',
        'metro': '',
        'deadline': '',
        'costFrom': '',
        'costTo': '',
        'complex': '',
        'developer': '',
        'room': '',
        'typeProperty': '',
        'type': '',
        'squareFrom': '',
        'squareTo': '',
        'payment': '',
        'bank': ''
      } //Наш фильтр, с которым мы будем сравнивать объекты
      let complexFlatsList = []; //Квартиры
      complexFlatsList[0] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList[1] = {'square': 37,'complex': 'ЖК "Среднее Мурино"','cost': '5500000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList[2] = {'square': 48,'complex': 'ЖК "Старое Мурино"','cost': '7600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList[3] = {'square': 50,'complex': 'ЖК "Новое Мурино"','cost': '3600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 1','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList[4] = {'square': 28,'complex': 'ЖК "Среднее Мурино"','cost': '4100000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList[5] = {'square': 28,'complex': 'ЖК "Старое Мурино"','cost': '14800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': 'Студия','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList[6] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '8800000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 3','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList[7] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '2800000','type': 'С отделкой','floor': 4, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 3
      };
      complexFlatsList[8] = {'square': 18,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': 'Студия','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 4
      };
      complexFlatsList[9] = {'square': 27,'complex': 'ЖК "Среднее Мурино"','cost': '10800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '3 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 3', 'totalFloor': 12, 'corpus': 5
      };
      complexFlatsList[10] = {'square': 39,'complex': 'ЖК "Старое Мурино"','cost': '3800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      let complexFlatsList2 = []; //Квартиры
      complexFlatsList2[0] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '1800000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList2[1] = {'square': 31,'complex': 'ЖК "Среднее Мурино"','cost': '5500000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList2[2] = {'square': 48,'complex': 'ЖК "Старое Мурино"','cost': '2600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2024','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList2[3] = {'square': 40,'complex': 'ЖК "Новое Мурино"','cost': '3600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 1','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 1
      };
      complexFlatsList2[4] = {'square': 48,'complex': 'ЖК "Среднее Мурино"','cost': '4100000','type': 'Без отделки','floor': 1,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList2[5] = {'square': 39,'complex': 'ЖК "Старое Мурино"','cost': '14800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList2[6] = {'square': 26,'complex': 'ЖК "Новое Мурино"','cost': '8800000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 3','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      complexFlatsList2[7] = {'square': 29,'complex': 'ЖК "Новое Мурино"','cost': '2800000','type': 'С отделкой','floor': 4, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 3
      };
      complexFlatsList2[8] = {'square': 34,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 4
      };
      complexFlatsList2[9] = {'square': 27,'complex': 'ЖК "Среднее Мурино"','cost': '10800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 3', 'totalFloor': 12, 'corpus': 5
      };
      complexFlatsList2[10] = {'square': 32,'complex': 'ЖК "Старое Мурино"','cost': '3800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
      };
      let complexList = []; //Список комплексов
      //Временная переменная, которая хранит описание комплекса
      let description = 'Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м - и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда делся старый - расскажем далее подробно. <br> Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м - и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда делся старый - расскажем далее подробно. ';

      let arrImage = ["img/img-video-1.jpg", "img/analog_1.jpg"];
      complexList[0] = {'id':0, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Новое Мурино"','developer': 'ООО «Инвест-Строй»','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.96366228831891,30.33065350936121], 'flats': complexFlatsList, 'minCost':'2800000', 'maxCost':'10800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[1] = {'id':1, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Старое Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.95157511900833,30.219135840848985], 'flats': complexFlatsList2, 'minCost':'2900000', 'maxCost':'8800000', 'minSquare':18, 'maxSquare':60, 'minCostSquare':'94,4', 'maxCostSquare':'160,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[2] = {'id':2, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Среднее Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.91194290293241,30.324192603544304], 'flats': complexFlatsList, 'minCost':'2200000', 'maxCost':'12800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'105,4', 'maxCostSquare':'140,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[3] = {'id':3, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Маленькое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.98244159964049, 30.07456582306103], 'flats': complexFlatsList2, 'minCost':'1700000', 'maxCost':'9800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'89,7', 'maxCostSquare':'150,2','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[4] = {'id':4, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Большое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[60.01054659964049, 30.05126582306103], 'flats': complexFlatsList, 'minCost':'3700000', 'maxCost':'16800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[5] = {'id':5, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Старое Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 2', 'img': 'img/analog_1.jpg', 'coords':[59.89128425214093,30.38833173201744], 'flats': complexFlatsList2, 'minCost':'2900000', 'maxCost':'8800000', 'minSquare':18, 'maxSquare':60, 'minCostSquare':'58,4', 'maxCostSquare':'158,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[6] = {'id':6, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Среднее Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 3', 'img': 'img/analog_1.jpg', 'coords':[59.946099329616665,30.395541509849473], 'flats': complexFlatsList, 'minCost':'2200000', 'maxCost':'82800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[7] = {'id':7, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Маленькое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 2', 'img': 'img/analog_1.jpg', 'coords':[59.94551507554389,30.251599668096567], 'flats': complexFlatsList2, 'minCost':'1700000', 'maxCost':'2800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'140,4', 'maxCostSquare':'210,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      complexList[8] = {'id':8, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Большое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 3', 'img': 'img/analog_1.jpg', 'coords':[59.960496096818105,30.295288938116098], 'flats': complexFlatsList, 'minCost':'3700000', 'maxCost':'16800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'105,4', 'maxCostSquare':'240,4','address': 'Большой проспект Васильевского острова', images: arrImage};
      filterComplex = getDataInputFilter();

      $('.count-complex').text(complexList.length);//Количество жилых комплексов

      updateComplexes(complexList);
      ymaps.ready(initMap); //yandex maps
      function initMap() {
        mapComplex = new ymaps.Map('map', {
          center: coordsCenter,
          zoom: 11,
          controls: [],
        }, {
          searchControlProvider: 'yandex#search',
          suppressMapOpenBlock: true
        });
        clusterer = new ymaps.Clusterer({
          preset: 'islands#invertedRedClusterIcons',
          groupByCoordinates: false,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false
        });
        clusterer.events
          .add('mouseenter', function (e) {
            e.get('target').options.set('preset', 'islands#invertedGrayClusterIcons');
          })
          .add('mouseleave', function (e) {
            e.get('target').options.set('preset', 'islands#invertedRedClusterIcons');
          });
        getPointData = function (index, complex) {
          return {

            balloonContentBody: '<div class="map-flat"><div class="map-flat__img"><img src="' + complex[index]
            .img + '" alt="img"></div><div class="map-flat__info"><div class="map-flat__complex">'+complex[index].name+'</div><div class="map-flat__cost-square">' + complex[index].minCostSquare + ' тыс. - ' + complex[index].maxCostSquare + ' тыс. руб/м<sup>2</sup></div><div class="map-flat__cost">от ' +
            Math.round(parseInt(complex[index].minCost))/1000000 + ' - до ' + Math.round(parseInt(complex[index].maxCost))/1000000 + ' млн. руб.</div></div></div>',
            clusterCaption: complex[index].name
          };
        };

        let geoObjects = getListPlacemarks(complexList);

        clusterer.add(geoObjects);
        mapComplex.geoObjects.add(clusterer);

        $('.map-filter__btn-show').on('click', function () {
          //ширина экрана
          let widthWindow = $(window).width();

          let separator = '; ';
            //Получаем именно тексты выбранных пунктов в select's
          let area = $('.map-filter__area').val().split(separator);
          let metro = $('.map-filter__metro').val().split(separator);
          let deadline = $('.map-filter__deadline').val().split(separator);
          let complex = $('.map-filter__complex').val().split(separator);
          let developer = $('.map-filter__developer').val().split(separator);

          let typeProperty = $('.map-filter__type-property').val().split(separator);
          let type = $('.map-filter__type').val().split(separator);
          let payment = $('.map-filter__payment').val().split(separator);
          let bank = $('.map-filter__bank').val().split(separator);
          let room = $('.map-filter__room').val().split(separator);

          let costFrom = parseInt($('.map-filter__cost-from').val());
          let costTo = parseInt($('.map-filter__cost-to').val());
          let squareFrom = parseInt($('.map-filter__square-from').val());
          let squareTo = parseInt($('.map-filter__square-to').val());

          let filter = {
            'area': area,
            'metro': metro,
            'deadline': deadline,
            'costFrom': costFrom,
            'costTo': costTo,
            'complex': complex,
            'developer': developer,
            'room': room,
            'typeProperty': typeProperty,
            'type': type,
            'squareFrom': squareFrom,
            'squareTo': squareTo,
            'payment': payment,
            'bank': bank
          } //Наш фильтр, с которым мы будем сравнивать объекты

          let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)

          updateMapObjects(mapComplex, clusterer, filterList);

          if (widthWindow <= 768) { //если ширину меньше 768, то закрываем окно фильтра на карте
            $('.map-filter').removeClass('map-filter--active');
            $('.map-footer__btn-open-filter').removeClass('map-footer__btn-open-filter--active');
          }
        });

        let height = ($(window).height() - 50 - 80 +1);//нужная высота

        if ($(window).width() <= 768) {
          $('#map').css('height', height + 'px');
          $('.map-filter').css('height', height + 'px');
          $('.map__complex-info').css('height', (height+50)+ 'px');
          mapComplex.container.fitToViewport();
        } else {

          // $('#map').css('height', 700+'px');
          $('#map').css('height',$('.map-wrapper').height());
          $('.map-filter').css('height', 'auto');
          $('.map__complex-info').css('height', 'auto');
          mapComplex.container.fitToViewport();
        }
        $(window).on('resize', function () {
          if ($(window).width() <= 768) {
            height = ($(window).height() - 50 - 80 +1);
            $('#map').css('height', height + 'px');
            $('.map-filter').css('height', height + 'px');
            $('.map__complex-info').css('height', (height+50)+ 'px');
          } else {

            $('#map').css('height',$('.map-wrapper').height());
            $('.map-filter').css('height', 'auto');
            $('.map__complex-info').css('height', 'auto');
          }
          mapComplex.container.fitToViewport();

          updateSizeComplexItemMap();

        });

      }
      function updateSizeComplexItemMap() {
        if (mapComplexItem != null) {
          if ($('.catalog-complex__list').hasClass('catalog-complex__list--display-list')) {
            $('#item-map').css('height', 333 + 'px');
            mapComplexItem.container.fitToViewport();
          } else {
            $('#item-map').css('height', 302 + 'px');
            mapComplexItem.container.fitToViewport();
          }
        }
      }
      function getListPlacemarks(listPlacemarks) {
        let geoObjects = [];
        for (var i = 0, len = listPlacemarks.length; i < len; i++) {
          placemark = new ymaps.Placemark(listPlacemarks[i].coords, getPointData(i, listPlacemarks), {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.svg',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, 0],
            placemarkClick: false,
            idComplex: listPlacemarks[i].id
          });
          geoObjects[i] = placemark;
          placemark.events
            .add('mouseenter', function (e) {
              e.get('target').options.set('iconImageHref', 'img/placemark-hover.svg');
            })
            .add('mouseleave', function (e) {
              if (e.get('target').options.get('placemarkClick') == false) {
                e.get('target').options.set('iconImageHref', 'img/placemark.svg');
              }
            })
            .add('click', function (e) {
              e.get('target').options.set('placemarkClick', true);

              for (let i = 0; i < complexList.length; i++) {
                if (complexList[i].id == e.get('target').options.get('idComplex')) {
                  $('.map-modal').addClass('map-modal--active-complex-info');
                  $('.map__complex-info-inner').html('');
                  showComplex(complexList[i], $('.map__complex-info-inner'));
                  //Назначаем обработчики
                  $('.btn-phone').off('click');
                  $('.btn-phone').on('click', function () {
                    $(this).children('.text').text($(this).attr('data-phone'));
                  });
                  $('.wrap-heart').off('click');
                  $('.wrap-heart').on('click', function () {
                    $(this).children('.heart-fill').toggleClass('hidden');
                  });
                  $('.map__complex-info-inner .filter__input').on('click', clickFilterInput);
                  let $slider = $('.map__complex-info-inner .catalog-complex__slider');
                  if ($slider.hasClass('slick-initialized')) {
                    $($slider).slick('unslick'); //ЧТобы не было ошибок, нужно уничтожить слайдер
                  }
                  initSlidersComplexes($slider);
                  break;
                }
              }
            });
        }
        return geoObjects;
      }

      function updateMapObjects(map, cluster, filterList) { //Обновляет данные на карте по фильтру (filterList)
        let objects = getListPlacemarks(filterList);
        cluster.removeAll();
        cluster.add(objects);
        map.geoObjects.removeAll();
        map.geoObjects.add(clusterer);
      }
      $('.filter__btn-show-map, .list-type__btn.list-type__btn-map, .list-character__btn-map').off('click');
      $('.filter__btn-show-map, .list-type__btn.list-type__btn-map, .list-character__btn-map').on('click', function () {
        $(window).scrollTop(0);
        $('.map-modal').scrollTop(0);
        $('.map-modal').addClass('map-modal--open');
        $('body').addClass('body--fixed');

        let filter = getDataInputFilter();
        let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)

        updateMapObjects(mapComplex, clusterer, filterList);

      });


      function showMapComplex() { //Открытие мини карты, при нажатии на кнопку у элемента
          let $parentList = $(this).closest('.catalog-complex__list');
          $parentList.find('.item-map').attr('id', '');
          if ($(this).hasClass('map-active')) {

            $(this).removeClass('map-active');
            $(this).closest('.catalog-complex__item').find('.catalog-complex__item-map').addClass('catalog-complex__item-map--events-none');
            mapComplexItem.destroy();
            mapComplexItem = null;
          } else {
            $parentList.find('.map-active').removeClass('map-active');
            $parentList.find('.catalog-complex__item-map').addClass('catalog-complex__item-map--events-none');
            $(this).addClass('map-active');
            $(this).closest('.catalog-complex__item').find('.item-map').attr('id', 'item-map');
            $(this).closest('.catalog-complex__item').find('.catalog-complex__item-map').removeClass('catalog-complex__item-map--events-none');
            let idComplex = $(this).attr('data-id-complex');
            let coordsComplex = complexList[idComplex].coords;
            let addressComplex = complexList[idComplex].address;

            if (mapComplexItem != null) {
              mapComplexItem.destroy();
              mapComplexItem = null;
            }
            mapComplexItem = new ymaps.Map('item-map', {
              center: coordsComplex, // Новосибирск
              zoom: 13,
              controls: [],
            }, {
              searchControlProvider: 'yandex#search'
            });
            var placemark = new ymaps.Placemark(coordsComplex, {
              iconCaption: addressComplex,
            }, {
              preset: 'islands#darkBlueDotIcon',
              iconCaptionMaxWidth: '250'

          });
          mapComplexItem.geoObjects.add(placemark);
        }
        updateSizeComplexItemMap();

      }

      function updateComplexes(filterList) { //Обновляет список комплексов на странице

        let $slider = $('.catalog-complex__slider');
        if ($slider.hasClass('slick-initialized')) {
          $($slider).slick('unslick'); //ЧТобы не было ошибок, нужно уничтожить слайдеры, затем опять создать
        }

        if (filterList.length == 0) {
          $('.catalog-complex__list').html('<div class="nothing">Ничего не найдено</div>');
        } else {
          $('.catalog-complex__list').html('');
          $('.catalog-complex__show-more').removeClass('catalog-complex__show-more--hidden');

        }
        let j = 0; //Счетчик объектов, выводимых на страницу

        for (let i = (pageNum - 1) * 4; i < filterList.length && j < countObjects; i++) {
          j++;
          showComplex(filterList[i], $('.catalog-complex__list'));//Вторым параметром передаем родителя, куда будут добавляться данные
        }

        if (j == 0) {
          $('.catalog-complex__list').html('<div class="nothing">Страница пуста</div>');
        }

        let countObjLeft = filterList.length - ((pageNum - 1) * 4) - countObjects; //Определяем сколько еще осталось объектов для вывода

        if (countObjLeft < 0) {
          countObjLeft = 0;
        }

        if (countObjLeft <= 0) {
          $('.catalog-complex__show-more').addClass('catalog-complex__show-more--hidden');
        } else {
          $('.catalog-complex__show-more .count-flats').text(countObjLeft + ' ' + num2str(countObjLeft, ['объект', 'объекта', 'объектов']));
        }

        function num2str(n, text_forms) { //Склонение слов в зависимости от числа
          n = Math.abs(n) % 100;
          var n1 = n % 10;
          if (n > 10 && n < 20) {
            return text_forms[2];
          }
          if (n1 > 1 && n1 < 5) {
            return text_forms[1];
          }
          if (n1 == 1) {
            return text_forms[0];
          }
          return text_forms[2];
        }

        $slider = $('.catalog-complex__slider');
        initSlidersComplexes($slider);
        $('.btn-phone').off('click');
        $('.btn-phone').on('click', function () {
          $(this).children('.text').text($(this).attr('data-phone'));
        });
        $('.wrap-heart').off('click');
        $('.wrap-heart').on('click', function () {
          $(this).children('.heart-fill').toggleClass('hidden');
        });
        //Назначаем обработчик открытия Мини карты для объектов
        $('.catalog-complex__btn-show-map').off('click');
        $('.catalog-complex__btn-show-map').on('click', showMapComplex);
        $('.filter__input').off('click');
        $('.filter__input').on('click', clickFilterInput);
      }

      function getCloneList(complexList) { //Возвращает дубликат списка
        let cloneList = [];
        for (let i = 0; i < complexList.length; i++) {
          cloneList.push(complexList[i]);
        }
        return cloneList;
      }

      function getSortByCost(complexList) { //возвращает отсортированный по цене список
        let cloneComplexList = getCloneList(complexList);
        for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
          for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (parseInt(cloneComplexList[j].minCost) > parseInt(cloneComplexList[j + 1].minCost)) {
              let swap = cloneComplexList[j];
              cloneComplexList[j] = cloneComplexList[j + 1];
              cloneComplexList[j + 1] = swap;
            }
          }
        }
        return cloneComplexList;
      }

      function getSortByCostSquare(complexList) { //возвращает отсортированный по цене за кв. м.
        let cloneComplexList = getCloneList(complexList);
        for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
          for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (parseInt(cloneComplexList[j].minCostSquare) > parseInt(cloneComplexList[j + 1].minCostSquare)) {
              let swap = cloneComplexList[j];
              cloneComplexList[j] = cloneComplexList[j + 1];
              cloneComplexList[j + 1] = swap;
            }
          }
        }
        return cloneComplexList;
      }

      function getSortByDeadline(complexList) { //возвращает отсортированный по цене за кв. м.
        let cloneComplexList = getCloneList(complexList);
        for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
          for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (getMinDeadline(cloneComplexList[j].flats) > getMinDeadline(cloneComplexList[j + 1].flats)) {
              let swap = cloneComplexList[j];
              cloneComplexList[j] = cloneComplexList[j + 1];
              cloneComplexList[j + 1] = swap;
            }
          }
        }
        return cloneComplexList;
      }

      function getMinDeadline(flatsList) { //Возвращает минимальный срок сдачи квартир комплекса
        let deadLine = parseInt(flatsList[0].deadline);
        for (let i = 0; i < flatsList.length; i++) {
          if (deadLine > parseInt(flatsList[i].deadline)) {
            deadLine = flatsList[i].deadline;
          }
        }
        return deadLine;
      }

      function getFlatInfo(flatsList) { //Получает данные о квартире(вовзращает список данных: минимальная/максимальная цены за кв.м и т.д.)
        if (flatsList.length != 0) {
          let minCost = parseInt(flatsList[0].cost),
            maxCost = 0,
            minCostSquare = parseInt(flatsList[0].cost) / parseInt(flatsList[0].square);
          for (let i = 0; i < flatsList.length; i++) {
            let flatCost = parseInt(flatsList[i].cost);
            flatCostSquare = flatCost / parseInt(flatsList[i].square);
            if (flatCost < minCost) {
              minCost = flatCost;
            }
            if (flatCost > maxCost) {
              maxCost = flatCost;
            }
            if (flatCostSquare < minCostSquare) {
              minCostSquare = flatCostSquare;
            }
          }

          let result = {
            'minCost': (Math.round(minCost) / 1000000).toFixed(1),
            'maxCost': (Math.round(maxCost) / 1000000).toFixed(1),
            'minCostSquare': (Math.round(minCostSquare) / 1000).toFixed(1)
          };
          return result;
        }
        return false;
      }
      //Нужно отфильтровать квартиры
      //Получить данные комлпекса на основе квартир
      //Вывести данные комплекса
      function getCostSquare(flatsList) { //Возвращает минимальную/максимальную цены за кв.м
        let costSquare = parseInt(flatsList[0].cost) / parseInt(flatsList[0].square);
        let minSquare = costSquare,
          maxSquare = costSquare;
        for (let i = 0; i < flatsList.length; i++) {
          costSquare = parseInt(flatsList[i].cost) / parseInt(flatsList[i].square);

          if (minSquare > costSquare) {
            minSquare = costSquare;
          }
          if (maxSquare < costSquare) {
            maxSquare = costSquare;
          }
        }
        let result = {
          'minCostSquare': (Math.round(minSquare) / 1000).toFixed(1),
          'maxCostSquare': (Math.round(maxSquare) / 1000).toFixed(1)
        }
        return result;
      }

      function getDataInputFilter() { //Возвращает список параметров для фильтрации
        let separator = '; ';
        let area = $('.filter__area').val().split(separator);
        let metro = $('.filter__metro').val().split(separator);
        let deadline = $('.filter__deadline').val().split(separator);
        let complex = $('.filter__complex').val().split(separator);
        let developer = $('.filter__developer').val().split(separator);

        let typeProperty = $('.filter__type-property').val().split(separator);
        let type = $('.filter__type').val().split(separator);
        let payment = $('.filter__payment').val().split(separator);
        let bank = $('.filter__bank').val().split(separator);
        let room = $('.filter__room').val().split(separator);

        let costFrom = parseInt($('.filter__cost-from').val());
        let costTo = parseInt($('.filter__cost-to').val());
        let squareFrom = parseInt($('.filter__square-from').val());
        let squareTo = parseInt($('.filter__square-to').val());

        let filter = {
          'area': area,
          'metro': metro,
          'deadline': deadline,
          'costFrom': costFrom,
          'costTo': costTo,
          'complex': complex,
          'developer': developer,
          'room': room,
          'typeProperty': typeProperty,
          'type': type,
          'squareFrom': squareFrom,
          'squareTo': squareTo,
          'payment': payment,
          'bank': bank
        } //Наш фильтр, с которым мы будем сравнивать объекты

        return filter;
      }
      function initSlidersComplexes(slider) {
        if ($(slider).length) {
          $(slider).off('init reInit afterChange');
          $(slider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { //Счетчик на слайдах
            $status = $(slick.$slider[0]).siblings('.catalog-complex__slider-counter');
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' / ' + slick.slideCount);
          });
          $(slider).slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: '<button id="prev" type="button" class="catalog-complex__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
            nextArrow: '<button id="next" type="button" class="catalog-complex__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
          });
          $('.catalog-complex__slide img').off('click')
          $('.catalog-complex__slide img').on('click', function () {
            $(this).closest('.catalog-complex__slider').slick('slickNext');
          });
        }
      }
      function showComplex(infoList, parent) { // parent-родитель куда будут добавляться данные
        let str = '<div class="catalog-complex__item"><div class="catalog-complex__item-header"><div class="catalog-complex__item-map catalog-complex__item-map--events-none">';
        if (!parent.hasClass('map__complex-info-inner')) {
          str += '<div id="item-map" class="item-map" style="width:100%; height: 302px"></div>';
        }

        str += '</div><div class="catalog-complex__slider">';
        for (let i = 0; i < infoList.images.length; i++) {
          const img = infoList.images[i];
          str += '<div class="catalog-complex__slide"><img src="'+img+'" alt="img"><div class="catalog-complex__slide-icons"><span class="wrap-heart"><svg class="heart" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg><svg  class="heart-fill hidden" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span><img src="img/slide-build.svg" alt="img"></div></div>';
        }
        str += '</div><div class="catalog-complex__slider-counter"></div><div class="catalog-complex__buttons-wrap catalog-complex__item-header-buttons"><a href="detail.html" class="catalog-complex__btn-more pink__btn">Подробнее</a><button type="button" class="catalog-complex__btn-show-map pink__btn" data-id-complex="' + infoList.id + '"><img src="img/placeholder-red.svg" alt="">На карте</button></div><ul class="complex-advantages__features-list"><li class="complex-advantages__features-item complex-advantages__features-item--sale"><div class="complex-advantages__features-item-box"><svg width="13" height="14"><use xlink:href="#icon-feature_sale"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--sale">Скидка партнерам</span></li><li class="complex-advantages__features-item complex-advantages__features-item--deal"><div class="complex-advantages__features-item-box"><svg width="14" height="14"><use xlink:href="#icon-feature_deal"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--deal">Безопасная&nbsp;сделка</span></li><li class="complex-advantages__features-item complex-advantages__features-item--gift"><div class="complex-advantages__features-item-box"><svg width="13" height="10"><use xlink:href="#icon-feature_gift"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--gift">Приемка&nbsp;в&nbsp;подарок</span></li><li class="complex-advantages__features-item complex-advantages__features-item--decor"><div class="complex-advantages__features-item-box"><svg width="12" height="17"><use xlink:href="#icon-feature_decor"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--decor">Сертификат&nbsp;на&nbsp;отделку</span></li><li class="complex-advantages__features-item complex-advantages__features-item--conditions"><div class="complex-advantages__features-item-box"><svg width="18" height="13"><use xlink:href="#icon-bus"></use></svg></div> <span class="complex-advantages__features-hint complex-advantages__features-hint--gift">Специальные&nbsp;условия для&nbsp;иногородних</span></li></ul></div><div class="catalog-complex__item-content" ><div class="inner">';
        let costSquare = getCostSquare(infoList.flats);
        let minCost = Math.round(parseInt(infoList.minCost) / 1000000);
        let maxCost = Math.round(parseInt(infoList.maxCost) / 1000000);

        str += '<div class="complex">' + infoList.name + '</div><div class="developer"><span class="text">' + infoList.developer + '</span><img src="img/developer_logo.svg" alt=""></div></div><div class="catalog-complex__cost-block"><span class="cost-block__cost-from">' + minCost + '</span> - <span class="cost-block__cost-to">' + maxCost + '</span> млн. руб.</div><div class="catalog-container-wrap"><div class="square-metr">' + infoList.minCostSquare + ' - ' + costSquare.maxCostSquare + ' тыс. руб/м2</div>';
        if (!$(parent).hasClass('map__complex-info-inner')) {
          str += '<button type="button" class="btn-phone" data-phone="' + infoList.tel + '"><img class="img-phone" src="img/icon-phone.svg" alt=""><span class="text">+7 Показать телефон</span></button>';
        }
        str+= '</div><div class="address">' + infoList.address + '</div><div class="metro"><img src="img/metro-el.svg" alt=""><span class="metro__name">' + infoList.metro + '</span><span class="metro__distance">15 мин пешком</span></div> <div class="filter-field complex-field-deadlines"><div class="filter-field__select-arrow"><svg viewBox="0 0 284.929 284.929"><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /></svg></div><div class="select-input"><input type="text" value="" name="complex__deadlines" class="select filter__complex__deadlines filter__input" readonly  placeholder="Срок сдачи:"><div class="checkboxes"><div class="checkboxes__inner">';

        for (let i = 0; i < infoList.flats.length; i++) {
          str += '<label><input type="checkbox" name="complex__deadlines" value="' + i + '" /><span class="check"></span><span class="text">корпус ' + infoList.flats[i].corpus +', ' + infoList.flats[i].deadline + ' г.</span></label>';
        }

        str += '</div></div></div></div><div class="catalog-complex-info-wrap">';

        let flatsGroupByRoom = infoList.flats.reduce(function (r, a) {
          r[a.room] = r[a.room] || [];
          r[a.room].push(a);
          return r;
        }, Object.create(null));

        let infoStudio = false;
        let infoOneRoom = false;
        let infoTwoRoom = false;
        let infoThreeRoom = false;
        if (flatsGroupByRoom['Студия'] != undefined) {
          infoStudio = getFlatInfo(flatsGroupByRoom['Студия']);
        }

        if (flatsGroupByRoom['1 ккв'] != undefined) {
          infoOneRoom = getFlatInfo(flatsGroupByRoom['1 ккв']);
        }

        if (flatsGroupByRoom['2 ккв'] != undefined) {
          infoTwoRoom = getFlatInfo(flatsGroupByRoom['2 ккв']);
        }

        if (flatsGroupByRoom['3 ккв'] != undefined) {
          infoThreeRoom = getFlatInfo(flatsGroupByRoom['3 ккв']);
        }

        if (infoStudio != false) {
          str += '<div class="flat-type studio"><div class="flat-type__left-box">Студия от <span class="flat-type__square"><span class="flat-type__square-value">' + infoStudio.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoStudio.minCost + '</span> - <span class="flat-type__cost-to">' + infoStudio.maxCost + '</span> млн. руб. </div></div>';
        }
        if (infoOneRoom != false) {
          str += '<div class="flat-type studio"><div class="flat-type__left-box">1-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoOneRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoOneRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoOneRoom.maxCost + '</span> млн. руб. </div></div>';
        }
        if (infoTwoRoom != false) {
          str += '<div class="flat-type studio"><div class="flat-type__left-box">2-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoTwoRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoTwoRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoTwoRoom.maxCost + '</span> млн. руб. </div></div>';
        }
        if (infoThreeRoom != false) {
          str += '<div class="flat-type studio"><div class="flat-type__left-box">3-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoThreeRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoThreeRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoThreeRoom.maxCost + '</span> млн. руб. </div></div>';
        }
        if ($(parent).hasClass('map__complex-info-inner')) {

          str += '</div><button type="button" data-phone="'+infoList.tel+'" class="btn-phone"><img class="img-phone" src="img/icon-phone.svg" alt=""><span class="text">+7 Показать телефон</span></button><a href="detail.html" class="btn-details pink__btn">Подробнее</a></div></div>';
        } else {
          str += '</div><div class="catalog-complex__description"><p class="description">' + infoList.description + '</p></div><div class="catalog-complex__buttons-wrap"><a href="detail.html" class="catalog-complex__btn-more pink__btn">Подробнее</a><button type="button" data-id-complex="'+infoList.id+'"class="catalog-complex__btn-show-map pink__btn"><img src="img/placeholder-red.svg"alt="">На карте</button></div></div></div>';
        }

        $(parent).append(str);
      }

      //-----------------------------------------------------------------------------
      //------------------------------ФИЛЬТРАЦИЯ-------------------------------------------
      //-------------------------------------------------------------------

      function getFilterListComplex(listComplex, filter) { //Возвращает отфильтрованный список комплексов
        let tempListComplex = []; //список отфильтрованных комплексов
        for (let j = 0; j < listComplex.length; j++) {

          let isFilter = true;

          if (filter.area[0].length) {
          for (let i = 0; i < filter.area.length; i++) {
            if (filter.area[i] != '') {
              if (filter.area[i].toLowerCase() == listComplex[j].area.toLowerCase()) {
                isFilter = true;
                break;
              } else {
                isFilter = false;
              }
            }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.metro[0].length) {
            for (let i = 0; i < filter.metro.length; i++) {
              if (filter.metro[i] != '') {
                if (filter.metro[i].toLowerCase() == listComplex[j].metro.toLowerCase()) {
                  isFilter = true;
                  break;
                } else {
                  isFilter = false;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.deadline[0].length) {
            for (let i = 0; i < filter.metro.length; i++) {
              let filterDeadline = filter.deadline[i];
              isFilter = false;
              listComplex[j].flats.forEach(flat => {
                if (flat.deadline == filterDeadline) {
                  isFilter = true;
                }
              });
              if (isFilter) {
                break;
              }
            }
          }
          if (!isFilter) {
            continue;
          }
          if (filter.complex[0].length) {
            for (let i = 0; i < filter.complex.length; i++) {
              if (filter.complex[i] != '') {

                if (filter.complex[i].toLowerCase() == listComplex[j].name.toLowerCase()) {
                  isFilter = true;
                  break;
                } else {
                  isFilter = false;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.developer[0].length) {
            for (let i = 0; i < filter.developer.length; i++) {
              if (filter.developer[i] != '') {
                if (filter.developer[i].toLowerCase() == listComplex[j].developer.toLowerCase()) {
                  isFilter = true;
                  break;
                } else {
                  isFilter = false;
                }
              }
            }
          }
            if (!isFilter) {
              continue;
            }
          if (filter.room.length) {

            for (let z = 0; z < filter.room.length; z++) {
              if (filter.room[z] != '') {
                isFilter = false;
                for (let i = 0; i < listComplex[j].flats.length; i++) {
                  if (listComplex[j].flats[i].room.toLowerCase() == filter.room[z].toLowerCase()) {
                    isFilter = true;
                    break;
                  }
                }
                if (isFilter) {
                  break;
                }
              }
              }
          }
          if (!isFilter) {
            continue;
          }
          if (filter.typeProperty[0].length) {
            for (let z = 0; z < filter.typeProperty.length; z++) {
              if (filter.typeProperty[z] != '') {
                isFilter = false;
                for (let i = 0; i < listComplex[j].flats.length; i++) {
                  if (listComplex[j].flats[i].typeProperty.toLowerCase() == filter.typeProperty[z].toLowerCase()) {
                    isFilter = true;
                    break;
                  }
                }
                if (isFilter) {
                  break;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.type[0].length) {
            for (let z = 0; z < filter.type.length; z++) {
              if (filter.type[z] != '') {
                isFilter = false;
                for (let i = 0; i < listComplex[j].flats.length; i++) {
                  if (listComplex[j].flats[i].type.toLowerCase() == filter.type[z].toLowerCase()) {
                    isFilter = true;
                    break;
                  }
                }
                if (isFilter) {
                  break;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.payment[0].length) {
            for (let z = 0; z < filter.payment.length; z++) {
              if (filter.payment[z] != '') {
                isFilter = false;
                for (let i = 0; i < listComplex[j].flats.length; i++) {
                  if (listComplex[j].flats[i].payment.toLowerCase() == filter.payment[z].toLowerCase()) {
                    isFilter = true;
                    break;
                  }
                }
                if (isFilter) {
                  break;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if (filter.bank[0].length) {
            for (let z = 0; z < filter.bank.length; z++) {
              if (filter.bank[z] != '') {
                isFilter = false;
                for (let i = 0; i < listComplex[j].flats.length; i++) {
                  if (listComplex[j].flats[i].bank.toLowerCase() == filter.bank[z].toLowerCase()) {
                    isFilter = true;
                    break;
                  }
                }
                if (isFilter) {
                  break;
                }
              }
            }
          }
          if (!isFilter) {
            continue;
          }

          if ((filter.costTo == 0) || (filter.squareTo == 0)) {
            isFilter = false;
            continue;
          }

          if ((!isNaN(filter.costFrom) && filter.costFrom != 0) && (isNaN(filter.costTo) || (filter.costTo == 0))) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatCost = parseInt(listComplex[j].flats[i].cost);
              if ((filter.costFrom <= flatCost)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            }
          } else if ((!isNaN(filter.costTo) && filter.costTo != 0) && (isNaN(filter.costFrom) || (filter.costFrom == 0))) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatCost = parseInt(listComplex[j].flats[i].cost);
              if ((filter.costTo >= flatCost)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            }
          } else if ((!isNaN(filter.costTo) && filter.costTo != 0) && (!isNaN(filter.costFrom) && filter.costFrom != 0)) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatCost = parseInt(listComplex[j].flats[i].cost);
              if ((filter.costFrom <= flatCost) && (filter.costTo >= flatCost)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            };
          }

          if ((!isNaN(filter.squareFrom) && filter.squareFrom != 0) && (isNaN(filter.squareTo) || (filter.squareTo == 0))) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatSquare = parseInt(listComplex[j].flats[i].square);
              if ((filter.squareFrom <= flatSquare)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            }
          } else if ((!isNaN(filter.squareTo) && filter.squareTo != 0) && (isNaN(filter.squareFrom) || (filter.squareFrom == 0))) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatSquare = parseInt(listComplex[j].flats[i].square);
              if ((filter.squareTo >= flatSquare)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            }
          } else if ((!isNaN(filter.squareTo) && filter.squareTo != 0) && (!isNaN(filter.squareFrom) && filter.squareFrom != 0)) {
            isFilter = false;
            for (let i = 0; i < listComplex[j].flats.length; i++) {
              let flatSquare = parseInt(listComplex[j].flats[i].square);
              if ((filter.squareFrom <= flatSquare) && (filter.squareTo >= flatSquare)) {
                isFilter = true;
                break;
              }
            }
            if (!isFilter) {
              continue;
            };
          }

          if (isFilter) { //Если комплекс соответсвует фильтру, добавляем в список отфильтрованных комплексов
            tempListComplex.push(listComplex[j]);
          }
        }
        return tempListComplex;

      }
      //--------------------------------------------------------------------------
      //-------------------------- СОБЫТИЯ события -------------------------------
      //--------------------------------------------------------------------------

      //------------------------ Сортировка sort ------------------------------------
      $('.list-character__btn-sort-by-coast').on('click', function () { //По цене

        let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
        let sortComplexList = getSortByCost(filterList);
        updateComplexes(sortComplexList); //Обновляет список комплексов на странице
      });
      $('.list-character__btn-sort-by-coast-square').on('click', function () { //По цене за кв. м.
        let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
        let sortComplexList = getSortByCostSquare(filterList);
        updateComplexes(sortComplexList); //Обновляет список комплексов на странице
      });
      $('.list-character__btn-sort-by-deadline').on('click', function () { //По сроке сдачи

        let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
        let sortComplexList = getSortByDeadline(filterList);
        updateComplexes(sortComplexList); //Обновляет список комплексов на странице
      });
      $('.list-character__btn-sort-by-recomend').on('click', function () { //По рекомендованным (возвращает просто по-молчанию)
        let filterList = getFilterListComplex(complexList, filterComplex);
        updateComplexes(filterList); //Обновляет список комплексов на странице
      });

      $('.list-type-flats__btn').click(function (e) { //Кнопки сортировки по типу квартиры
        if ($(this).hasClass('list-type-flats__btn--active')) {
          $(this).removeClass('list-type-flats__btn--active');
        } else {
          $(this).addClass('list-type-flats__btn--active');
        }
        let arrBtns = $('.list-type-flats__btn--active');
        let room = [];
        for (let i = 0; i < arrBtns.length; i++) {
          room[i] = $(arrBtns[i]).attr('data-room');
          }

        filterComplex.room= room;

      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список квартир (filter - объект, с которым будут сравниваться другие объекты)
        updateComplexes(filterList);
      });

      //------------------------------------------------------------------------
      $('.pagination__item').click(function (e) { //Пагинация
        $(this).siblings().removeClass('pagination__item--active');
        $(this).addClass('pagination__item--active');
        countObjects = 4;
        pageNum = parseInt($(this).text());

        let filterList = getFilterListComplex(complexList, filterComplex);
        updateComplexes(filterList);
      });

      $('.catalog-complex__show-more').click(function (e) { //Показать еще
        $(this).addClass('catalog-complex__show-more--hidden');

        let filterList = getFilterListComplex(complexList, filterComplex);
        countObjects = filterList.length;
        updateComplexes(filterList);
      });

      $('.map-modal__close .close').on('click', function () {
        $('.map-modal').removeClass('map-modal--open');
        $('body').removeClass('body--fixed');
      });
      $('.complex-info__close .close').on('click', function () {
        $('.map-modal').removeClass('map-modal--active-complex-info');
      });

      $('.filter__less-options').on('click', function () { //Сворачивание/разворачивание параметров
        $(this).toggleClass('filter__less-options--active');
        if ($(this).hasClass('filter__less-options--active')) {
          $('.filter__form')[0].reset();
        }
        $('.checkboxes').removeClass('checkboxes--active');
        $('.filter__form-inner').toggleClass('filter__form-inner--collapse');
        $('.filter__collapse-wrap').toggleClass('filter__collapse-wrap--height');
        if ($('.filter__form-inner').hasClass('filter__form-inner--collapse')) {
          $(this).children('.text').text('Больше параметров');
        } else {
          $(this).children('.text').text('Меньше параметров');
        }
      });

      $('.filter__collapse-btn').click(function (e) { //Сворачивание/разворачивание всего окна филтров
        $(this).toggleClass('filter__collapse-btn-open');
        if ($(this).hasClass('filter__collapse-btn-open')) {
          $(this).children('.text').text('Открыть');
        } else {
          $(this).children('.text').text('Свернуть');
        }
        $('.filter__collapse-wrap').toggleClass('filter__collapse-wrap--hidden');
        $('.filter__less-options').toggleClass('hidden');
      });

      $('.map-footer__btn-open-filter').click(function (e) { //Открытие/Закрытие фильтра на телефонах на карте
        $(this).toggleClass('map-footer__btn-open-filter--active');
        $('.map-filter').toggleClass('map-filter--active');
        $('.map-filter').scrollTop(0);
      });
      $('.map-footer__btn-open-list').click(function (e) { //Закрытие карты на телефоне
        $('.map-footer__btn-open-filter').removeClass('map-footer__btn-open-filter--active');
        $('.map-filter').removeClass('map-filter--active');
        $('.map-filter').scrollTop(0);
        $('.map-modal').removeClass('map-modal--open');
        $('.map-modal').removeClass('map-modal--active-complex-info');
        $('body').removeClass('body--fixed');
      });

      $('.filter__btn-show').click(function (e) { //Показать комплексы
        //Получаем именно тексты выбранных пунктов в select's
        $('.list-type-flats__btn').removeClass('list-type-flats__btn--active');
        $('.list-character__btn').removeClass('list-character__btn--active');
        $('.list-character__btn.list-character__btn-sort-by-recomend').addClass('list-character__btn--active');
        filterComplex = getDataInputFilter();
        $('.first-page').addClass('pagination__item--active').siblings().removeClass('pagination__item--active');

        pageNum = 1;
        countObjects = 4;
        let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
        updateComplexes(filterList); //Обновляет список комплексов на странице
      });

      //------------------------------------------------------------------------

      function clickFilterInput() {
        console.log('click');

        $('.filter__form-inner').find('.filter__input').removeClass('filter__input--active-select');
        $('.map-filter__form-inner').find('.map-filter__input').removeClass('filter__input--active-select');
        $(this).closest('.filter__form-inner').find('.filter-field').removeClass('filter-field--active-select');
        $(this).closest('.map-filter__form-inner').find('.map-filter-field').removeClass('filter-field--active-select');
        $(this).closest('.filter-field').removeClass('filter-field--active-select');

        if ($(this).hasClass('map-filter__input')) {
          $(this).closest('.map-filter-field').siblings().find('.checkboxes').removeClass('checkboxes--active');
        }
        else if (!$(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
          $(this).closest('.filter__form-inner').find('.checkboxes').removeClass('checkboxes--active');
        }
        $checboxes = $(this).siblings('.checkboxes');
        $checboxes.toggleClass('checkboxes--active');
        if ($(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
          $(this).closest('.filter-field').addClass('filter-field--active-select');
          $(this).closest('.map-filter-field').addClass('filter-field--active-select');
        }

        if ($(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
          $(this).addClass('filter__input--active-select');
          $(this).closest('.filter-field').addClass('filter-field--active-select');
        }
        if ($(this).parents('.filter-field-cost__wrap').length || $(this).parents('.map-filter-field-cost__wrap').length) {
          $(this).addClass('filter__input--active-select');
        }
        if ($('.filter .checkboxes--active').length) {
          $('.filter').addClass('filter--select-active');
        } else {
          $('.filter').removeClass('filter--select-active');
        }

      }
      $('.filter__input, .map-filter__input').off('click');
      $('.filter__input, .map-filter__input').on('click', clickFilterInput);

      $('.header-catalog__cities-btn').click(function (e) { //Главные кнопки переключения между Москвой и СПб
        $(this).addClass('header-catalog__cities-btn--active').siblings().removeClass('header-catalog__cities-btn--active');

        if ($(this).attr('data-city') == 'moscow') {
          mapComplex.setCenter(coordsCenterMoscow);
          $('.sort-box__title-box .title').text('Новостройки Москвы');
        } else if ($(this).attr('data-city') == 'spb') {
          mapComplex.setCenter(coordsCenter);
          $('.sort-box__title-box .title').text('Новостройки Санкт-Петербурга');
        }

      });

      $('.checkboxes input').on('click', function () {

        let $field = $(this).closest('.select-input').children('.filter__input');
        if (!$($field).length) {
          $field = $(this).closest('.select-input').children('.map-filter__input');
        }

        let value = $field.val();
        let str = $(this).siblings('.text').text().replace(/\s+/g, " ") + "; ";
        if ($(this).prop('checked')) {
          let result = value + str;
          $field.val(result);
        } else {
          let newResult = value.replace(str, "");
          $field.val(newResult);
        }
      });

      $('.list-type__btn').on('click', function () {
        setTimeout(updateSizeComplexItemMap, 100);
      });

      $('body').on('click', function (e) {
        if (!$(e.target).parents('.select-input').length) {
          $('.checkboxes').removeClass('checkboxes--active');
          $('.filter').removeClass('filter--select-active');
          $('.select-input .filter__input').removeClass('filter__input--active-select');
          $('.select-input .map-filter__input').removeClass('filter__input--active-select');
          $('.filter-field').removeClass('filter-field--active-select');
          $('.map-filter-field').removeClass('filter-field--active-select');
        }
        if (!$(e.target).parents('.filter-field-cost__wrap').length) {
          $('.filter-field-cost__wrap .filter__input').removeClass('filter__input--active-select');
        }
        if (!$(e.target).parents('.map-filter-field-cost__wrap').length) {
          $('.map-filter-field-cost__wrap .map-filter__input').removeClass('filter__input--active-select');
        }
      });
    }
  });

;
  $(document).ready(function () {

    let $slider = $('.mainReview__slider');
    let slides = '';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Девяткино</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Кудрово</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';

    $($slider).append(slides);

    $($slider).slick({
      adaptiveHeight: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button id="prev" type="button" class="advice-slider__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
      nextArrow: '<button id="next" type="button" class="advice-slider__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

$('body').on('click', function (e) {

  if (!$(e.target).parents('.galery__item-img').length && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')&&!$(e.target).closest('.expectation__photo-box').length) {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
    galeryDestroy();
  }
});

function galeryDestroy() {
  if ($('.galery__slider').hasClass('slick-initialized')) {
    setTimeout(unslick, 250);

    function unslick() {
      $('.galery__slider').slick('unslick');
    }
  }
}

function initSlidersModalPhoto(slider, begin) {
  if (slider.hasClass('slick-initialized')) {
    $(slider).slick('unslick');
  }
  if (begin == undefined) {
    begin = 0;
  }

  $(slider).slick({
    arrows: false,
    initialSlide: parseInt(begin)
  });
  $('.galery__item-img img').off('click');
  $('.galery__item-img img').on('click', function () {
    $(slider).slick('slickNext');
  });

  $('.galery__item-img .close').off('click');
  $('.galery__item-img .close').on('click', function () {
    galeryDestroy();
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });
}

$(document).ready(function () {

  $('#btnOpenMortgage').on('click', function () {
    $('.mortgage.mortgage__modal').removeClass('modal--closed');
  });

  $('.mortgage .modal__close-btn').on('click', function () {
    $('.mortgage.mortgage__modal').addClass('modal--closed ');
  });

  $('.mortgage__modal').click(function (e) {
    if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('modal--closed')) { //Если открыто окно
        $(this).addClass('modal--closed');
      }
    }
  });

  //-----------------калькулятор модальное окно--------------------
  let valueMortgageWork = 2;
  let valueMortgageIncome = 50000;
  let valueMortgagePayment = 500000;
  let $mortgageCapital = $('#mortgage-capital');
  let $mortgageWork = $('#mortgage-work');
  let $mortgageIncome = $('#mortgage-income');
  let $mortgagePayment = $('#mortgage-payment');
  let $result = $('.mortgage__expectancy-value-wrap');
  checkExpectancy();
  $('#mortgage__income-range').on('input', function () {
    valueMortgageIncome = parseInt($(this).val());
    let str;
    if (valueMortgageIncome >= 100000) {
      str = 'больше ' + 100000;
    } else {
      str = valueMortgageIncome;
    }
    $mortgageIncome.val(str);
    checkExpectancy();
  });
  $('#mortgage__work-range').on('input', function () {
    valueMortgageWork = parseInt($(this).val());
    let str;
    let $year = $('.mortgage-work__year');
    if (valueMortgageWork >= 15) {
      str = 'больше 15';
    } else {
      str = valueMortgageWork;
    }
    $mortgageWork.val(str);
    if (valueMortgageWork == 1) {
      $year.text('год')
    } else if (valueMortgageWork >= 2 & valueMortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    checkExpectancy();
  });

  $($mortgagePayment).on('input', function () {
    valueMortgagePayment = $(this).val();
    checkExpectancy();
  });
  $($mortgageIncome).on('input', function () {
    valuemortgageIncome = $(this).val();
    $mortgageIncome.val(valuemortgageIncome);
    checkExpectancy();
  });
  $($mortgageWork).on('input', function () {
    let $year = $('.mortgage-work__year');
    let $mortgageWork__value = $('.mortgageWork__value');
    valuemortgageWork = $(this).val();
    if (valuemortgageWork == 1) {
      $year.text('год')
    } else if (valuemortgageWork >= 2 & valuemortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    $mortgageWork__value.text(valuemortgageWork)
    if (valuemortgageWork >= 15)
      $mortgageWork__value.text('более ' + valuemortgageWork + " ");
  });
  $($mortgageCapital).on('change', function () {

    valuemortgageIncome = $(this).val();
    if (this.checked) {} else {}
    checkExpectancy();
  });

  function checkExpectancy() {
    valueMortgageWork = parseInt(valueMortgageWork);
    valueMortgageIncome = parseInt(valueMortgageIncome);
    valueMortgagePayment = parseInt(valueMortgagePayment);
    let result = 65;
    if (valueMortgageWork > 5) {
      result++;
    }
    if (valueMortgageWork > 10) {
      result++;
    }
    if (valueMortgageWork == 15) {
      result++;
    }
    result += valueMortgagePayment * 0.00001;
    result += (valueMortgageIncome - 35000) / 2950;
    result = Math.round(result);
    if (result > 93) {
      result = 93;
    }
    $result.text(result);
  }

  //-----------------калькулятор модальное окно--------------------
  //-----калькулятор
  var contributionVal = 0,
    rateVal = 0,
    timeVal = 0;
  $("#contribution, #rate, #time").keypress(function (event) {
    event = event || window.event;

    if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
      return false;
  });
  $("#contribution").on('input', function () {
    contributionVal = $(this).val();
    updateResultCalc();
  });
  $("#rate").on('input', function () {
    rateVal = $(this).val();
    updateResultCalc();
  });
  $("#time").on('input', function () {
    timeVal = $(this).val();
    updateResultCalc();
  });

  function toNumber(x) { //Делает пробелы, между числами
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(",");
  }

  function updateResultCalc() {
    contributionVal = parseInt(contributionVal);
    rateVal = parseInt(rateVal);
    timeVal = parseInt(timeVal);
    if (contributionVal != 0 && rateVal != 0 && timeVal != 0 && contributionVal != '' && rateVal != '' && timeVal != '' && contributionVal >= 10000) {
      let result = ((contributionVal * rateVal / 100) / 12) * timeVal;
      result = +result.toFixed(2);
      result = toNumber(result);
      if (result != NaN && result != undefined && result != 'NaN') {

        $('.calculator__result').text(result + ' руб.');
      } else {
        $('.calculator__result').text(0 + ' руб.');
      }

    }

  }
});

$(document).ready(function () {
  AOS.init({
    once: true,
    duration: 700,
    offset: 60
  });

  setTimeout(function () {
    AOS.refresh();
  }, 200);


  $(window).on('resize', function () {
    AOS.refresh();
  });
});

;

  $(document).ready(function () {
    if($('#myChart').length) {

    let chartData = [];
    chartData['studio'] = [63, 83, 36, 90, 43, 125, 67]; //студии
    chartData['1'] = [80, 111, 44, 90, 45, 125, 110]; // 1к
    chartData['2'] = [45, 58, 87, 23, 95, 41, 54]; // 2к
    chartData['3'] = [80, 88, 75, 148, 95, 125, 46]; // 3к
    chartData['4'] = [6, 32, 5, 90, 95, 125, 110]; // 4к
    chartData['5'] = [11, 83, 75, 90, 95, 125, 30]; //5+к

    var ctx = document.getElementById('myChart').getContext('2d');
    var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19', 'май’19'];
    var data = [];
    for (let i = 0; i < chartData['2'].length; i++) {
      const element = chartData['2'][i];
      data.push(element);
    }

    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: '',
          backgroundColor: 'rgba(233,70,70, 0.1)',
          borderColor: 'rgb(233,70,70)',
          borderWidth: 2,
          pointHoverBackgroundColor: 'rgb(233,70,70)',
          pointBackgroundColor: '#fff',
          spanGaps: true,
          data: data,
          pointRadius: 7,
          pointHoverRadius: 7,
          pointHitRadius: 7,

        }]
      },

      options: {
        bezierCurve : false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        tooltips: {

          enabled: false,
          custom: function (tooltipModel) {
            var tooltipEl = document.getElementById('chartjs-tooltip');
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<div class="body"><span class="text"></span><span class="figure"></span></div>';
              document.body.appendChild(tooltipEl);
            }

            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {

              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            if (tooltipModel.body) {
              $(tooltipEl).children().children('.text').text(tooltipModel.body[0].lines[0]);
            }

            var position = this._chart.canvas.getBoundingClientRect();

            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';

            tooltipEl.style.fontFamily = 'Open Sans';

            tooltipEl.style.fontWeight = '700';
            tooltipEl.style.color = '#fff';
            tooltipEl.style.display = 'flex';
            tooltipEl.style.justifyContent = 'center';

            tooltipEl.style.borderRadius = '4px';
            tooltipEl.style.textAlign = 'center';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = '#7be37b';
            tooltipEl.style.zIndex = '100';

            if ($(window).width() <= 768) {
              tooltipEl.style.height = '22px';
              tooltipEl.style.width = '36px';
              tooltipEl.style.fontSize = 11 + 'px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 18 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 40 + 'px';
            } else {
              tooltipEl.style.fontSize = 16 + 'px';
              tooltipEl.style.height = '35px';
              tooltipEl.style.width = '56px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 28 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 60 + 'px';
            }

            tooltipEl.classList.add('tooltipChart');
          }
        },
        scales: {

          xAxes: [{

            gridLines: {
              display: true,
						  zeroLineWidth: 1,
              zeroLineColor: "trasparent",
              drawOnChartArea: false,
              lineWidth: 0
            },
            ticks: {
              fontSize: 14,
            }
          }],
          yAxes: [{
            color: '#8d7c7c',
            gridLines: {
              lineWidth: 2,
              zeroLineWidth: 1,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              padding: 15,
              min: 0,
              max: 150,
              stepSize: 25,
              fontSize: 14
            }
          }]
        }
      }
    });
    let desctopOptions = [];
    desctopOptions['borderWidth'] = 2;
    desctopOptions['pointRadius'] = 7;
    desctopOptions['pointHoverRadius'] = 7;
    desctopOptions['pointHitRadius'] = 7;
    desctopOptions['fontSizeAxes'] = 14;
    desctopOptions['paddingTicks'] = 15;
    desctopOptions['gridLinesLineWidthYAxes'] = 2;
    let options = [];
    options['borderWidth'] = 1;
    options['pointRadius'] = 3;
    options['pointHoverRadius'] = 4;
    options['pointHitRadius'] = 3;
    options['fontSizeAxes'] = 10;
    options['paddingTicks'] = 10;
    options['gridLinesLineWidthYAxes'] = 1;
    if ($(window).width() <= 768) {
      updateSize(chart, options);
    }
    $(window).on('resize', function () {
      if ($(window).width() <= 768) {
        updateSize(chart, options);
      } else {
        updateSize(chart, desctopOptions);

      }
    });


    $('.chart__btn').on('click', function () {
      $('.chart__btn--active').removeClass('chart__btn--active');
      $(this).addClass('chart__btn--active');
      let flat = $(this).attr('data-item');
      let Newdata = chartData[flat];
      updateData(chart, Newdata);
    });

    function updateSize(chart, options) {

      chart.data.datasets[0].borderWidth = options['borderWidth'];
      chart.data.datasets[0].pointRadius = options['pointRadius'];
      chart.data.datasets[0].pointHoverRadius = options['pointHoverRadius'];
      chart.data.datasets[0].pointHitRadius = options['pointHitRadius'];
      chart.options.scales.xAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.padding = options['paddingTicks'];
      chart.options.scales.yAxes[0].gridLines.lineWidth = options['gridLinesLineWidthYAxes'];
      chart.update();
    }

    function updateData(chart, Newdata) {
      let length = chart.data.datasets[0].data.length;
      for (let i = 0; i < length; i++) {
        chart.data.datasets[0].data.pop();
      }
      for (let i = 0; i < Newdata.length; i++) {
        chart.data.datasets[0].data.push(Newdata[i]);
      }
      chart.update();
    }
    Chart.pluginService.register({
      afterDraw: function (chart, easing) {
        if (chart.config.options && chart.config.options.scales) {
          if (chart.config.options.scales.xAxes)
            chart.config.options.scales.xAxes.forEach(function (xAxisConfig) {
              if (!xAxisConfig.color)
                return;

              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var xAxis = chart.scales[xAxisConfig.id];

              // just draw the scale again with different colors
              var color = xAxisConfig.gridLines.color;
              xAxisConfig.gridLines.color = xAxisConfig.color;
              xAxis.draw(chartArea);
              xAxisConfig.gridLines.color = color;
            });

          if (chart.config.options.scales.yAxes)
            chart.config.options.scales.yAxes.forEach(function (yAxisConfig) {
              if (!yAxisConfig.color)
                return;

              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var yAxis = chart.scales[yAxisConfig.id];

              // here, since we also have the grid lines, set a clip area for the left of the y axis
              ctx.save();
              ctx.rect(0, 0, chartArea.left + yAxisConfig.gridLines.lineWidth - 1, chartArea.bottom + yAxisConfig.gridLines.lineWidth - 1);
              ctx.clip();

              var color = yAxisConfig.gridLines.color;
              yAxisConfig.gridLines.color = yAxisConfig.color;
              yAxis.draw(chartArea);
              yAxisConfig.gridLines.color = color;

              ctx.restore();
            });

          // we need to draw the tooltip so that it comes over the (redrawn) elements
          chart.tooltip.transition(easing).draw();
        }
      }
    });
    }
  });

;
(function () {
  $(document).ready(function () {
    let arrayPhotos = []; //Массив фотографий
    let countVisible = 4;

    arrayPhotos[0] = { year: 2020, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[1] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[2] = { year: 2021, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[3] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[4] = { year: 2019, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[5] = { year: 2020, month: 'june', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[6] = { year: 2021, month: 'february', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[7] = { year: 2019, month: 'may', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[8] = { year: 2020, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[9] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[10] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[11] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[12] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[13] = { year: 2021, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[14] = { year: 2020, month: 'october', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[15] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[16] = { year: 2019, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[17] = { year: 2021, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[18] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[19] = { year: 2021, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[20] = { year: 2021, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[21] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[22] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[23] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[24] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[25] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[26] = { year: 2019, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[27] = { year: 2021, month: 'august', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[28] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[29] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[30] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg', photoLarge: 'img/analog_1.jpg'};

    let filter = { //Фильтр фотографий
      year: '',
      month: ''
    };

    $year = $('.progress__form-select--year').val();
    $month = $('.progress__form-select--month').val();
    filter.year = $year;
    filter.month = $month;
    let filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список

    let $parent = $('.progress__gallery-list');
    updateGalery(filterList, $parent);


    $('.progress__form-select--year, .progress__form-select--month').on('change', function () {
      $year = $('.progress__form-select--year').val();
      $month = $('.progress__form-select--month').val();

      filter.year = $year;
      filter.month = $month;
      filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список
      updateGalery(filterList, $parent);
    });

    function updateGalery(listObjects, parent, begin) {
      $('.progress__btn.show__btn').removeClass('hidden');
      $('.progress__wrapper .nothing').addClass('hidden');
      let strHTML = '';
      if ($(parent).hasClass('galery__slider')) {
        $('.galery__slider').html('');
        for (let i = 0; i < listObjects.length; i++) {
          strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
        }
        $('.galery__slider').html(strHTML);

      } else {
        $('.progress__gallery-list').html('');
        let j = 0;
        for (let i = 0; i < listObjects.length && i < countVisible; i++) {
          j++;
          strHTML += '<li class="progress__gallery-item modal-image__item"><picture><source type="image/webp" srcset=""><img class="progress__image" src="' + listObjects[i].photo + '" data-big-src="' + listObjects[i].photoLarge + '" data-index="'+i+'"alt="фото ЖК" width="310" height="180"></picture></li>';
        }
        if (j == 0) {
          $('.progress__btn.show__btn').addClass('hidden');
          $('.progress__wrapper .nothing').removeClass('hidden');
        }
        $(parent).append(strHTML);
      }

      $('.progress__image').off('click');
      $('.progress__image').on('click', clickImg);
      if ($(parent).hasClass('galery__slider')) {
        let $slider = $('.galery__slider');
        initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
      }

      function clickImg() {
        let begin = $(this).attr('data-index');
        updateGalery(filterList, $('.galery__slider'), begin);
        $('.modal-photo-galery').addClass('modal-photo-galery--active');
      }
    }

    function getFilterList(arrayPhotos, filter) { //Получить отфильтрованный список
      let tempList = [];
      for (let i = 0; i < arrayPhotos.length; i++) {
        if (arrayPhotos[i].year == filter.year && arrayPhotos[i].month.toLowerCase() == filter.month.toLowerCase()) {
          tempList.push(arrayPhotos[i]);
        }
      }
      return tempList;
    }

    $('.progress__btn').click(function () {
      updateGalery(filterList, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });

  });
})();

;
(function () {
  $(document).ready(function () {

    $parent = $('.rating__list');
    $ratingAverage = $('.rating__average-value');

    rating = {
      'kids': 6.7,
      'infrastructure': 6.7,
      'district': 6.3,
      'safety': 5,
      'transport': 4.6,
      'house': 3.2,
    };
    // price1.replace(".", ",")
    updateRating(rating);

    function updateRating(rating) {

      let strHTML = '<li class="rating__list-item" data-aos="zoom-in"><div class="rating__list-figure rating__list-figure--kids"><svg width="46" height="33"><use xlink:href="#icon-balancer"></use></svg><span class="rating__value rating__value--kids">' + String(rating['kids']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-pink"></div></div>Для детей</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="200"><div class="rating__list-figure rating__list-figure--infrastructure"><svg width="40" height="40"><use xlink:href="#icon-infrastructure"></use></svg><span class="rating__value rating__value--infrastructure">' + String(rating['infrastructure']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-orange" data-aos-delay="200"></div></div>Инфраструктура</li>';
      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="300"><div class="rating__list-figure rating__list-figure--district"><svg width="41" height="41"><use xlink:href="#icon-compass"></use></svg><span class="rating__value rating__value--district">' + String(rating['district']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-lightblue" data-aos-delay="300"></div></div>Район</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="400"><div class="rating__list-figure rating__list-figure--safety"><svg width="28" height="37"><use xlink:href="#icon-lock"></use></svg><span class="rating__value rating__value--safety">' + String(rating['safety']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-green" data-aos-delay="400"></div></div>Безопасность</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="500"><div class="rating__list-figure rating__list-figure--transport"><svg width="44" height="29"><use xlink:href="#icon-bus"></use></svg><span class="rating__value rating__value--transport">' + String(rating['transport']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-blue" data-aos-delay="500"></div></div>Транспорт</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="600"><div class="rating__list-figure rating__list-figure--house"><svg width="39" height="39"><use xlink:href="#icon-hotel"></use></svg><span class="rating__value rating__value--house">' + String(rating['house']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-violet" data-aos-delay="600"></div></div>Квартира/дом</li>';

      $parent.html(strHTML);
      $ratingAverage.text(((rating['kids'] + rating['infrastructure'] + rating['district'] + rating['safety'] + rating['transport'] + rating['house'])/6).toFixed(1).replace(".", ","));
    }


  });
})();
$(document).ready(function () {
  $(".scrollLink").on("click", "a", function (evt) {
    evt.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2000);
  });
});

$(document).ready(function () {

  $('.main-nav__list').removeClass('main-nav--nojs');

  $('.main-nav__list').addClass('hidden');

  $('.main-nav__toggle').on('click', function() {
    $('.main-nav__list').toggle('hidden');
  });

  /*$('body').on('click', function (e) {
    if(!$(e.target).hasClass('light__btn')){
    if (!$('.modal').hasClass('modal--closed')) {
      if (!$(e.target).closest('.modal__wrapper').length) {
        $('.modal').addClass('modal--closed');
      }
    }

    if (!$(e.target).closest('.consultation__wrapper').length) {
      $('.consultation__modal').addClass('modal--closed');
      }
    if (!$(e.target).closest('.modal-feedback__wrapper').length) {
      $('.modal-feedback').removeClass('modal-feedback--active');
      }
    }
    if (!$(e.target).closest('.modal-to-book__wrapper').length && !$(e.target).hasClass('btnToBook')) {
      $('.modal-to-book').removeClass('modal-to-book--active');
    }

  });*/


  $('.modal-to-book__wrapper .modal__close-btn').on('click', function () {
    $('.modal-to-book').removeClass('modal-to-book--active');
  });

  $('.modal-photo-galery .modal__close-btn').on('click', function () {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });

  $('#btnOpenExcursionModal').on('click', function () {
    $('.excursion.excursion__modal').removeClass('modal--closed ');
  });
  $('.excursion .modal-close-btn').on('click', function () {
    $('.excursion.excursion__modal').addClass('modal--closed');
  });
  $('.modal__header-btn-close').on('click', function () {
    $(this).closest('.modal').addClass('modal--closed');
  });
  $('.excursion__modal').on('click', function (e) { //Закрытие модального окна по клику на фон
    if ($(this).has(e.target).length === 0 && !$(e.target).hasClass('expectation__btn') && !$(e.target).hasClass('ui-icon-circle-triangle-e') && !$(e.target).hasClass('ui-icon-circle-triangle-w') && !$(e.target).hasClass('ui-corner-all')) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('modal--closed')) { //Если открыто окно
        $(this).addClass('modal--closed');
      }
    }
  });

  $('#consultationBtn').on('click', function () {
    $('.consultation__modal').removeClass('modal--closed');
  });

  $('.consultation .modal__closeBtn').on('click', function() {
    $('.consultation__modal').addClass('modal--closed');
  });

  /*$('.main-nav__list').click(function (e) {
    if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('hidden')) { //Если открыто окно
        $(this).addClass('hidden');
      }
    }
  });*/

});

$(document).ready(function () {

  function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

});

;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var listPlayers = [];
var readyPlayer = 0;
// --------------------------------ПАРАМЕТРЫ Для изменения--------------------------------

let countPlayers = 4; //Количество видеороликов
let videosId = ['OXuIqaeg0SI', 'G8lVXBN8ZFk', 'G8lVXBN8ZFk',
  '7qBfdcI-d1Q'
]; // Список с ID видеозаписей. Каждый элемент списка (ID) будет присваиваться по порядку видеороликам. Если Количество ID меньше, чем кол-во видеороликов, то цикл ID-шников пойдет заново.
let vars = { //Настройки yooutube плэера (https://developers.google.com/youtube/player_parameters?hl=ru)
  'autoplay': 0,
  'controls': 0,
  'showinfo': 0,
  'rel': 0,
  'iv_load_policy': 3,
  'disablekb': 1,
  'fs': 0,
}
//-----------------------------------------------------------------------
function onYouTubeIframeAPIReady() {
  //Здесь создаем список плееров
  let j = 0;
  for (let i = 0; i < countPlayers; i++) {
    if ((j > i) || (j >= videosId.length - 1)) {
      j = 0;
    }

    let player = new YT.Player('player' + i, {
      playerVars: vars,
      videoId: videosId[j],
      events: {
        'onReady': onPlayerReady
      }
    });
    listPlayers[i] = player;
    j++;
  }
}

function onPlayerReady(event) {
  readyPlayer += 1;
}

$(document).ready(function () {

  //-----Videoslider
  let videoSlideClientX;
  $('.video-slider').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    // variableWidth: true,
    // infinite: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false
        }
      }
    ]
  });

  function videoPlay(autoplay, idSlide) {
    if (autoplay == true) {
      let $slide = $('.video-slider').find('.video-slider__item[data-slick-index="' + idSlide + '"]');
      let $btnImg = $slide.find('.btn-play img');

      let $img = $slide.find('.content.slide__img');
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      $video.addClass('slide__video-active');
      $img.addClass('slide__img-none');
      if (readyPlayer == listPlayers.length) {
              listPlayers[+idSlide].playVideo();
            }
      //listPlayers[+idSlide].playVideo();
      $(this).removeClass('btn-pause--none');
      return;
    }
    $(this).removeClass('btn-pause--none');
    if ($(this).hasClass('btn-play')) {
      let $btnImg = $(this).children('img');
      let $img = $(this).parent();
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      if ($btnImg.attr('src') == 'img/btn-play.svg') {
        if (readyPlayer == listPlayers.length || readyPlayer >= (1 + idVideo)) {
          $video.addClass('slide__video-active');
          $img.addClass('slide__img-none');
          listPlayers[+idVideo].playVideo();
          $(this).removeClass('btn-pause--none');
        } else {
          var idTimeout = setInterval(function () {
            if (readyPlayer >= (1 + parseInt(idVideo))) {
              $video.addClass('slide__video-active');
              $img.addClass('slide__img-none');
              listPlayers[+idVideo].playVideo();
              clearInterval(idTimeout);
              $btnImg.attr('src', 'img/btn-pause.svg');
              $($btnImg).addClass('pause');
            }
          }, 1500);
          $(this).removeClass('btn-pause--none');
        }
      } else {
        listPlayers[+idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }
    } else {

      let $video = $(this).siblings('.wrapper-player').children('.slide__video');
      let $imgVideo = $video.parent().siblings('.slide__img');
      let idVideo = $video.attr('id').replace('player', '');
      let $btnImg = $imgVideo.children('.btn-play').children('img');

      if (readyPlayer == listPlayers.length || readyPlayer >= (1 + idVideo)) {
              listPlayers[+idVideo].pauseVideo();
      }
      $(this).addClass('btn-pause--none');


      $video.removeClass('slide__video-active');
      $imgVideo.removeClass('slide__img-none');
      $btnImg.attr('src', 'img/btn-play.svg');
      $btnImg.removeClass('pause');

    }
  }
  $(document).on('click', '.btn-play, .btn-pause', videoPlay);

  $('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $prevSlide = $('.video-slider').find('.video-slider__item[data-slick-index="' + currentSlide + '"]');
      let $video = $($prevSlide).children('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      $video.removeClass('slide__video-active');
      let $imgVideo = $video.parent().siblings('.slide__img');

      $imgVideo.removeClass('slide__img-none');
      let $btnImg = $imgVideo.children('.btn-play').children('img');

      if (readyPlayer == listPlayers.length || readyPlayer >= (1 + parseInt(idVideo))) {
        listPlayers[idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }

    }
  });

  $('.video-slider__item').on('mouseup', function (e) {
    if (e.clientX == videoSlideClientX) { //Произошел именно клик
      let curSlideIndex = $('.video-slider').slick('slickCurrentSlide');
      let nextSlideIndex = $(this).attr('data-slick-index');
      if (nextSlideIndex > curSlideIndex) {
        $('.video-slider').slick('slickNext');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      } else if (nextSlideIndex < curSlideIndex) {
        $('.video-slider').slick('slickPrev');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      }

    }

  });
  $('.video-slider__item').on('mousedown', function (e) {
    videoSlideClientX = e.clientX;
  });

});

;(function() {
  //var descriptionTopY = $('#description').offset().top;

  let descriptionTopY;
  if ($('#description').length) {
    descriptionTopY= $('#description').offset().top;
  }

  $(window).bind('scroll', function () {
    if ($(this).scrollTop() >= descriptionTopY) {
      $(this).unbind('scroll');
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.996421, 30.214709],
            zoom: 14
          }, {
            searchControlProvider: 'yandex#search'
          }),
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map_pin.png',
            iconImageSize: [79, 87],
            iconImageOffset: [-40, -87]
          })
        myMap.geoObjects
          .add(myPlacemark)
        myMap.behaviors
          .disable(['scrollZoom', 'rightMouseButtonMagnifier'])
          .enable('ruler');
      });

    }
  });
}) ();
