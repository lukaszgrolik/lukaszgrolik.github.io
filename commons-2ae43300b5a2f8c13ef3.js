/*! For license information please see commons-2ae43300b5a2f8c13ef3.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[223],{5655:function(e,t,r){"use strict";r.d(t,{A:function(){return oe}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function s(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function p(e){return e.length}function d(e){return e.length}function m(e,t){return t.push(e),e}var h=1,y=1,g=0,b=0,v=0,w="";function x(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:h,column:y,length:i,return:""}}function k(e,t){return i(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function T(){return v=b>0?u(w,--b):0,y--,10===v&&(y=1,h--),v}function S(){return v=b<g?u(w,b++):0,y++,10===v&&(y=1,h++),v}function A(){return u(w,b)}function C(){return b}function O(e,t){return f(w,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return h=y=1,g=p(w=e),b=0,[]}function $(e){return w="",e}function j(e){return s(O(b-1,R(91===e?e+2:40===e?e+1:e)))}function _(e){for(;(v=A())&&v<33;)S();return E(e)>2||E(v)>3?"":" "}function M(e,t){for(;--t&&S()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return O(e,C()+(t<6&&32==A()&&32==S()))}function R(e){for(;S();)switch(v){case e:return b;case 34:case 39:34!==e&&39!==e&&R(v);break;case 40:41===e&&R(e);break;case 92:S()}return b}function I(e,t){for(;S()&&e+v!==57&&(e+v!==84||47!==A()););return"/*"+O(t,b-1)+"*"+a(47===e?e:S())}function L(e){for(;!E(A());)S();return O(e,b)}var N="-ms-",z="-moz-",q="-webkit-",F="comm",H="rule",D="decl",B="@keyframes";function U(e,t){for(var r="",n=d(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function G(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case D:return e.return=e.return||e.value;case F:return"";case B:return e.return=e.value+"{"+U(e.children,n)+"}";case H:e.value=e.props.join(",")}return p(r=U(e.children,n))?e.return=e.value+"{"+r+"}":""}function Y(e){return $(W("",null,null,null,[""],e=P(e),0,[0],e))}function W(e,t,r,n,o,i,s,f,d){for(var h=0,y=0,g=s,b=0,v=0,w=0,x=1,k=1,O=1,E=0,P="",$=o,R=i,N=n,z=P;k;)switch(w=E,E=S()){case 40:if(108!=w&&58==u(z,g-1)){-1!=l(z+=c(j(E),"&","&\f"),"&\f")&&(O=-1);break}case 34:case 39:case 91:z+=j(E);break;case 9:case 10:case 13:case 32:z+=_(w);break;case 92:z+=M(C()-1,7);continue;case 47:switch(A()){case 42:case 47:m(K(I(S(),C()),t,r),d);break;default:z+="/"}break;case 123*x:f[h++]=p(z)*O;case 125*x:case 59:case 0:switch(E){case 0:case 125:k=0;case 59+y:-1==O&&(z=c(z,/\f/g,"")),v>0&&p(z)-g&&m(v>32?X(z+";",n,r,g-1):X(c(z," ","")+";",n,r,g-2),d);break;case 59:z+=";";default:if(m(N=V(z,t,r,h,y,o,f,P,$=[],R=[],g),i),123===E)if(0===y)W(z,t,N,N,$,i,g,f,R);else switch(99===b&&110===u(z,3)?100:b){case 100:case 108:case 109:case 115:W(e,N,N,n&&m(V(e,N,N,0,0,o,f,P,o,$=[],g),R),o,R,g,f,n?$:R);break;default:W(z,N,N,N,[""],R,0,f,R)}}h=y=v=0,x=O=1,P=z="",g=s;break;case 58:g=1+p(z),v=w;default:if(x<1)if(123==E)--x;else if(125==E&&0==x++&&125==T())continue;switch(z+=a(E),E*x){case 38:O=y>0?1:(z+="\f",-1);break;case 44:f[h++]=(p(z)-1)*O,O=1;break;case 64:45===A()&&(z+=j(S())),b=A(),y=g=p(P=z+=L(C())),E++;break;case 45:45===w&&2==p(z)&&(x=0)}}return i}function V(e,t,r,n,a,i,l,u,p,m,h){for(var y=a-1,g=0===a?i:[""],b=d(g),v=0,w=0,k=0;v<n;++v)for(var T=0,S=f(e,y+1,y=o(w=l[v])),A=e;T<b;++T)(A=s(w>0?g[T]+" "+S:c(S,/&\f/g,g[T])))&&(p[k++]=A);return x(e,t,r,0===a?H:u,p,m,h)}function K(e,t,r){return x(e,t,r,F,a(v),f(e,2,-2),0)}function X(e,t,r,n){return x(e,t,r,D,f(e,0,n),f(e,n+1,-1),n)}var J=function(e,t,r){for(var n=0,o=0;n=o,o=A(),38===n&&12===o&&(t[r]=1),!E(o);)S();return O(e,b)},Z=function(e,t){return $(function(e,t){var r=-1,n=44;do{switch(E(n)){case 0:38===n&&12===A()&&(t[r]=1),e[r]+=J(b-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===A()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=S());return e}(P(e),t))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var o=[],a=Z(t,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+z+e+N+e+e;case 6828:case 4268:return q+e+N+e+e;case 6165:return q+e+N+"flex-"+e+e;case 5187:return q+e+c(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return q+e+N+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return q+e+N+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+N+c(e,"shrink","negative")+e;case 5292:return q+e+N+c(e,"basis","preferred-size")+e;case 6060:return q+"box-"+c(e,"-grow","")+q+e+N+c(e,"grow","positive")+e;case 4554:return q+c(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+z+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?re(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,p(e)-3-(~l(e,"!important")&&10))){case 107:return c(e,":",":"+q)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(45===u(e,14)?"inline-":"")+"box$3$1"+q+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return q+e+N+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+N+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+N+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+N+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=re(e.value,e.length);break;case B:return U([k(e,{value:c(e.value,"@","@"+q)})],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([k(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return U([k(e,{props:[c(t,/:(plac\w+)/,":"+q+"input-$1")]}),k(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),k(e,{props:[c(t,/:(plac\w+)/,N+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o,a,i=e.stylisPlugins||ne,s={},c=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;c.push(e)}));var l,u,f,p,m=[G,(p=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],h=(u=[ee,te].concat(i,m),f=d(u),function(e,t,r,n){for(var o="",a=0;a<f;a++)o+=u[a](e,t,r,n)||"";return o});a=function(e,t,r,n){l=r,U(Y(e?e+"{"+t.styles+"}":t.styles),h),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:a};return y.sheet.hydrate(c),y}},6289:function(e,t,r){"use strict";function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:function(){return n}})},9214:function(e,t,r){"use strict";r.d(t,{T:function(){return s},w:function(){return i}});var n=r(6540),o=r(5655),a=(r(3174),r(1287),n.createContext("undefined"!=typeof HTMLElement?(0,o.A)({key:"css"}):null)),i=(a.Provider,function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(a);return e(t,o,r)}))}),s=n.createContext({})},3174:function(e,t,r){"use strict";r.d(t,{J:function(){return y}});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=r(6289),a=!1,i=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},u=(0,o.A)((function(e){return c(e)?e:e.replace(i,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,(function(e,t,r){return m={name:t,styles:r,next:m},t}))}return 1===n[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"},p="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function d(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var o=r;if(1===o.anim)return m={name:o.name,styles:o.styles,next:m},o.name;var i=r;if(void 0!==i.styles){var s=i.next;if(void 0!==s)for(;void 0!==s;)m={name:s.name,styles:s.styles,next:m},s=s.next;return i.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=d(e,t,r[o])+";";else for(var i in r){var s=r[i];if("object"!=typeof s){var c=s;null!=t&&void 0!==t[c]?n+=i+"{"+t[c]+"}":l(c)&&(n+=u(i)+":"+f(i,c)+";")}else{if("NO_COMPONENT_SELECTOR"===i&&a)throw new Error(p);if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var m=d(e,t,s);switch(i){case"animation":case"animationName":n+=u(i)+":"+m+";";break;default:n+=i+"{"+m+"}"}}else for(var h=0;h<s.length;h++)l(s[h])&&(n+=u(i)+":"+f(i,s[h])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var c=m,h=r(e);return m=c,d(e,t,h)}}var y=r;if(null==t)return y;var g=t[y];return void 0!==g?g:y}var m,h=/label:\s*([^\s;{]+)\s*(;|$)/g;function y(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";m=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,o+=d(r,t,a)):o+=a[0];for(var i=1;i<e.length;i++){if(o+=d(r,t,e[i]),n)o+=a[i]}h.lastIndex=0;for(var s,c="";null!==(s=h.exec(o));)c+="-"+s[1];var l=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+c;return{name:l,styles:o,next:m}}},6143:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(null,arguments)}r.d(t,{A:function(){return g}});var o=r(6540),a=r(6289),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,a.A)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=r(9214),l=r(41),u=r(3174),f=r(1287),p=s,d=function(e){return"theme"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:d},h=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},y=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,l.SF)(t,r,n),(0,f.s)((function(){return(0,l.sk)(t,r,n)})),null},g=(r(4634),function e(t,r){var a,i,s=t.__emotion_real===t,f=s&&t.__emotion_base||t;void 0!==r&&(a=r.label,i=r.target);var p=h(t,r,s),d=p||m(f),g=!d("as");return function(){var b=arguments,v=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&v.push("label:"+a+";"),null==b[0]||void 0===b[0].raw)v.push.apply(v,b);else{v.push(b[0][0]);for(var w=b.length,x=1;x<w;x++)v.push(b[x],b[0][x])}var k=(0,c.w)((function(e,t,r){var n=g&&e.as||f,a="",s=[],h=e;if(null==e.theme){for(var b in h={},e)h[b]=e[b];h.theme=o.useContext(c.T)}"string"==typeof e.className?a=(0,l.Rk)(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var w=(0,u.J)(v.concat(s),t.registered,h);a+=t.key+"-"+w.name,void 0!==i&&(a+=" "+i);var x=g&&void 0===p?m(n):d,k={};for(var T in e)g&&"as"===T||x(T)&&(k[T]=e[T]);return k.className=a,r&&(k.ref=r),o.createElement(o.Fragment,null,o.createElement(y,{cache:t,serialized:w,isStringTag:"string"==typeof n}),o.createElement(n,k))}));return k.displayName=void 0!==a?a:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=f,k.__emotion_styles=v,k.__emotion_forwardProp=p,Object.defineProperty(k,"toString",{value:function(){return"."+i}}),k.withComponent=function(t,o){return e(t,n({},r,o,{shouldForwardProp:h(k,o,!0)})).apply(void 0,v)},k}}.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){g[e]=g(e)}))},1287:function(e,t,r){"use strict";var n;r.d(t,{i:function(){return s},s:function(){return i}});var o=r(6540),a=!!(n||(n=r.t(o,2))).useInsertionEffect&&(n||(n=r.t(o,2))).useInsertionEffect,i=a||function(e){return e()},s=a||o.useLayoutEffect},41:function(e,t,r){"use strict";r.d(t,{Rk:function(){return n},SF:function(){return o},sk:function(){return a}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},a=function(e,t,r){o(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},8828:function(e){"use strict";e.exports=Object.assign},6388:function(e,t,r){"use strict";r.d(t,{i:function(){return Pe}});var n=r(6540),o=r(9214),a=r(41),i=r(1287),s=r(3174),c=(r(5655),r(4634),r(4146),(0,o.w)((function(e,t){var r=e.styles,c=(0,s.J)([r],void 0,n.useContext(o.T)),l=n.useRef();return(0,i.i)((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,o=document.querySelector('style[data-emotion="'+e+" "+c.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==o&&(n=!0,o.setAttribute("data-emotion",e),r.hydrate([o])),l.current=[r,n],function(){r.flush()}}),[t]),(0,i.i)((function(){var e=l.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==c.next&&(0,a.sk)(t,c.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",c,r,!1)}}),[t,c.name]),null})));function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.J)(t)}var u,f,p,d,m=r(6143),h=r(5556),y=r.n(h),g=r(2098),b=r.n(g),v=r(115),w=r.n(v),x=r(8828),k=r.n(x),T="bodyAttributes",S="htmlAttributes",A="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(C).map((function(e){return C[e]})),"charset"),E="cssText",P="href",$="http-equiv",j="innerHTML",_="itemprop",M="name",R="property",I="rel",L="src",N="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",F="defer",H="encodeSpecialCharacters",D="onChangeClientState",B="titleTemplate",U=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),G=[C.NOSCRIPT,C.SCRIPT,C.STYLE],Y="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ne(e,C.TITLE),r=ne(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ne(e,q);return t||n||void 0},Q=function(e){return ne(e,D)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},re=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],c=s.toLowerCase();-1===t.indexOf(c)||r===I&&"canonical"===e[r].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==j&&s!==E&&s!==_||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],c=k()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},ne=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},oe=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){oe(e)}),0)}),ae=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:r.g.requestAnimationFrame||oe,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ae:r.g.cancelAnimationFrame||ae,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},le=null,ue=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;de(C.BODY,n),de(C.HTML,o),pe(f,p);var d={baseTag:me(C.BASE,r),linkTags:me(C.LINK,a),metaTags:me(C.META,i),noscriptTags:me(C.NOSCRIPT,s),scriptTags:me(C.SCRIPT,l),styleTags:me(C.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),de(C.TITLE,t)},de=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Y),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(Y):r.getAttribute(Y)!==i.join(",")&&r.setAttribute(Y,i.join(","))}},me=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+Y+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(Y,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},he=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)},ge=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[Y]=!0,a=ye(r,o),[n.createElement(C.TITLE,a,e)];var e,r,o,a},toString:function(){return function(e,t,r,n){var o=he(r),a=fe(t);return o?"<"+e+" "+Y+'="true" '+o+">"+J(a,n)+"</"+e+">":"<"+e+" "+Y+'="true">'+J(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case T:case S:return{toComponent:function(){return ye(t)},toString:function(){return he(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,a=((o={key:r})[Y]=!0,o);return Object.keys(t).forEach((function(e){var r=z[e]||e;if(r===j||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),n.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===j||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===G.indexOf(e);return t+"<"+e+" "+Y+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},be=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ge(C.BASE,t,n),bodyAttributes:ge(T,r,n),htmlAttributes:ge(S,o,n),link:ge(C.LINK,a,n),meta:ge(C.META,i,n),noscript:ge(C.NOSCRIPT,s,n),script:ge(C.SCRIPT,c,n),style:ge(C.STYLE,l,n),title:ge(C.TITLE,{title:f,titleAttributes:p},n)}},ve=b()((function(e){return{baseTag:te([P,N],e),bodyAttributes:ee(T,e),defer:ne(e,F),encode:ne(e,H),htmlAttributes:ee(S,e),linkTags:re(C.LINK,[I,P],e),metaTags:re(C.META,[M,O,$,R,_],e),noscriptTags:re(C.NOSCRIPT,[j],e),onChangeClientState:Q(e),scriptTags:re(C.SCRIPT,[L,j],e),styleTags:re(C.STYLE,[E],e),title:Z(e),titleAttributes:ee(A,e)}}),(function(e){le&&se(le),e.defer?le=ie((function(){ue(e,(function(){le=null}))})):(ue(e),le=null)}),be)((function(){return null})),we=(f=ve,d=p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!w()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case C.TITLE:return K({},o,((t={})[n.type]=i,t.titleAttributes=K({},a),t));case C.BODY:return K({},o,{bodyAttributes:K({},a)});case C.HTML:return K({},o,{htmlAttributes:K({},a)})}return K({},o,((r={})[n.type]=K({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,a=n.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[U[r]||r]=e[r],t}),t)}(X(n,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=X(e,["children"]),o=K({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(f,o)},V(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(n.Component),p.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=f.peek,p.rewind=function(){var e=f.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);we.renderStatic=we.rewind;var xe=r(4810);const ke=l`
  ${l`
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}
  ${l`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.woff2') format('woff2'),
        url('/fonts/Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.woff2') format('woff2'),
        url('/fonts/Montserrat-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url('/fonts/Inconsolata-Regular.woff2') format('woff2'),
        url('/fonts/Inconsolata-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url('/fonts/Inconsolata-Bold.woff2') format('woff2'),
        url('/fonts/Inconsolata-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`}

  html {
    /* font-family: 'Roboto', sans-serif;
    scrollbar-color: #bbb rgba(255, 255, 255, .1);
    scrollbar-width: 20px; */
  }

  body {
    /* background-color: #333; */
  }
`;var Te=r(4578);const Se=m.A.div`
    /* font-family: 'Open Sans', sans-serif; */
    /* font-family: 'Noto Sans JP', sans-serif; */
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    line-height: 1.4;
`,Ae=m.A.ul`
    /* background: rgba(127, 127, 127, .9); */
    background: #fff;
    box-shadow: 0 0 .1em rgba(0, 0, 0, .5);

    @media screen and (min-width: ${720}px) {
        position: fixed;
        z-index: 99999;
        top: 0;
        left: 0;
        width: 100%;
    }
`,Ce=m.A.ul`
    list-style: none;
    font-size: .45em;
    text-transform: uppercase;

    @media screen and (min-width: ${720}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    a {
        display: block;
        /* color: rgba(255, 255, 255, .85); */
        color: rgba(63, 63, 63, .85);
        padding: .5em 1em .25em;
        border-bottom: .25em solid transparent;
        text-align: center;

        &.menu-item-active {
            border-bottom-color: dodgerblue;
        }

        &:hover {
            background-color: rgba(0, 0, 0, .05);
        }
    }
`,Oe=m.A.div`
    background-color: #ccc;
    /* color: #777; */
    color: rgba(0, 0, 0, .66);
    font-family: 'Inconsolata', monospace;
    font-size: .45em;
    line-height: 1;
    text-align: center;
    padding: .5em 0;
    /* border-top: 1px solid ${"#eee"}; */
    /* box-shadow: 0 0 .5em rgba(0, 0, 0, .5); */
`,Ee=[{name:"Home",path:"/"},{name:"Webdev",path:"/webdev"},{name:"Gamedev",path:"/gamedev"},{name:"Graphic Art",path:"/graphic-art"},{name:"Photography",path:"/photography"}],Pe=e=>{const[t,r]=n.useState("");return n.useEffect((()=>{r(["lukasz","(at)","grolik",".","pl"].join("").replace("(at)","@"))}),[]),n.createElement(n.Fragment,null,n.createElement(we,null,n.createElement("title",null,"Łukasz Grolik | homepage")),n.createElement(c,{styles:ke}),n.createElement(Se,null,n.createElement(Ae,null,n.createElement(Te.$G,null,n.createElement(Ce,null,Ee.map((e=>n.createElement("li",{key:e.name},n.createElement(xe.N_,{to:e.path,activeClassName:"menu-item-active"},e.name))))))),n.createElement("div",null,e.children),n.createElement("div",null,n.createElement(Oe,null,n.createElement("div",null,"2013-2024 ",n.createElement("span",{style:{fontSize:"1.5em"}},"©")," Łukasz Grolik ",n.createElement("span",null,"|")," ",t)))))}},4578:function(e,t,r){"use strict";r.d(t,{$G:function(){return s},VJ:function(){return o},bs:function(){return l}});var n=r(6143);const o=n.A.div`
    /* text-align: justify; */

    &:after {
        content: ".";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }

    > * + * {
        margin-top: 1em;
    }

    > * + h3 {
        margin-top: 2em;
    }

    h2 {
        border-left: 1em solid dodgerblue;
        padding-left: .5em;
    }

    h3 {
        color: rgba(0, 0, 0, .5);
        font-size: .75em;
        line-height: 1;
        padding-bottom: .25em;
        border-bottom: 1px solid rgba(0, 0, 0, .1);

        a {
        }
    }

    p, ul {
        color: rgba(0, 0, 0, .5);
        font-size: .6em;
        line-height: 1.5;
    }

    ul {
        list-style: circle;
        padding-left: 1em;
    }

    a {
        border-bottom: 1px solid dodgerblue;

        &:hover {
            color: dodgerblue;
            /* background-color: rgba(0, 0, 0, .5); */
        }
    }

    strong {
        font-weight: bold;
    }

    i {
        font-style: italic;
    }

    kbd {
        background-color: #eee;
        font-family: 'Inconsolata', monospace;
    }
`,a=1280,i="1em",s=n.A.div`
  padding: 0 ${i};
  max-width: ${a}px;
  margin: 0 auto;
`,c=".5em",l=(n.A.ul`
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -${c} -${c} 0 0;

  > li {
    margin: ${c} ${c} 0 0;
    /* width: calc((${a}px - 2 * ${i} - ((${4} - 1) * ${c})) / ${4}); */
  }

  img {
    display: block;
    width: 100%;
    max-height: 200px;
    transition: transform .2s;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .25);

    &:hover {
      transform: scale(1.1);
    }
  }
`,n.A.ul`
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin: -${c} -${c} 0 0;

  > li {
    margin: ${c} ${c} 0 0;
    /* width: calc((${a}px - 2 * ${i} - ((${4} - 1) * ${c})) / ${4}); */

  }

  img {
    display: block;
    /* width: 100%; */
    /* height: 100%; */
    width: 200px;
    height: 200px;
    object-fit: cover;
    /* transition: transform .2s; */
    /* box-shadow: 3px 3px 10px rgba(0, 0, 0, .25); */

    &:hover {
      /* transform: scale(1.1); */
    }
  }
`,n.A.div`
    display: grid;
    /* grid-template-rows: repeat(8, 5vw); */
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1em;

    img {
        display: block;
        width: 100%;
        height: 100%;
        /* width: 350px;
        height: 350px; */
        object-fit: cover;
    }
`)},4146:function(e,t,r){"use strict";var n=r(4363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=d(r);o&&o!==m&&e(t,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(t),h=c(r),y=0;y<i.length;++y){var g=i[y];if(!(a[g]||n&&n[g]||h&&h[g]||s&&s[g])){var b=p(r,g);try{l(t,g,b)}catch(v){}}}}return t}},115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2799:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case y:case h:case c:return e;default:return t}}case o:return t}}}function k(e){return x(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return k(e)||x(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===y},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===i||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===g)},t.typeOf=x},4363:function(e,t,r){"use strict";e.exports=r(2799)},2098:function(e,t,r){"use strict";var n,o=r(6540),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",s),f}}},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=commons-2ae43300b5a2f8c13ef3.js.map