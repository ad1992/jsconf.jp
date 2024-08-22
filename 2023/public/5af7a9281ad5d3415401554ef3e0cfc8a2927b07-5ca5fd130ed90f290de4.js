"use strict";(self.webpackChunkjsconfjp_2023=self.webpackChunkjsconfjp_2023||[]).push([[28],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return g},M:function(){return k},P:function(){return E},_:function(){return o},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],R=new Set;let _,$;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=o(e,T);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:k}=w,L=o(w,I),x=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return $=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(C);if($&&R.has(C))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:R.has(C),image:n},h)),R.has(C)||(t=requestAnimationFrame((()=>{x.current&&(r=o(x.current,C,R,s,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{R.has(C)&&$&&(x.current.innerHTML=$(i({isLoading:R.has(C),isLoaded:R.has(C),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},E,s,{backgroundColor:u}),className:`${k}${d?` ${d}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));O.propTypes=N,O.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=o(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const A=z((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:S,layout:N,images:T,placeholder:I,backgroundColor:R}=l,_=c(w,S,N),{style:$,className:j}=_,O=o(_,x),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},$,s,{backgroundColor:h}),className:`${j}${a?` ${a}`:""}`}),r.createElement(g,{layout:N,width:w,height:S},r.createElement(E,i({},d(I,!1,N,w,S,R,y,b))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:m},v,u("eager"===p,!1,q,p,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:S,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};A.displayName="StaticImage",A.propTypes=W;const M=z(O);M.displayName="StaticImage",M.propTypes=W},8014:function(e,t,a){a.d(t,{IK:function(){return p},Z0:function(){return u},r6:function(){return d}});var r=a(5785),n=a(7294),s=a(5086);const i=s.default.span.withConfig({displayName:"EventSpeakers__SpeakerText",componentId:"sc-127b1d5-0"})(["color:",";font-size:1em;font-family:",";"],(e=>{let{theme:t}=e;return t.colors.text}),(e=>{let{theme:t}=e;return t.fonts.text})),o=s.default.rt.withConfig({displayName:"EventSpeakers__SpeakerRT",componentId:"sc-127b1d5-1"})(["color:",";font-size:0.6em;font-family:",";"],(e=>{let{theme:t}=e;return t.colors.text}),(e=>{let{theme:t}=e;return t.fonts.text})),l=s.default.span.withConfig({displayName:"EventSpeakers__SponsorText",componentId:"sc-127b1d5-2"})(["color:",";font-size:0.8em;display:block;font-family:",";"],(e=>{let{theme:t}=e;return t.colors.text}),(e=>{let{theme:t}=e;return t.fonts.text})),c=s.default.span.withConfig({displayName:"EventSpeakers__ByLineText",componentId:"sc-127b1d5-3"})(["color:",";font-size:0.8em;font-style:italic;margin:0.5em 0;"],(e=>{let{theme:t}=e;return t.colors.text})),u=e=>{let{speaker:t}=e;return n.createElement(n.Fragment,null,n.createElement(i,null,t.nameReading&&t.nameReading!=t.name?n.createElement("ruby",null,t.name,n.createElement(o,null,t.nameReading.replace(/・/g," "))):t.name),t.sponsor&&n.createElement(l,null,"(",t.sponsor,")"))},d=e=>{let{speakers:t,byLine:a}=e;return n.createElement(n.Fragment,null,Array.from(function*(){let e=!0;for(const r of t)e?(e=!1,a&&(yield n.createElement(c,null,a))):yield n.createElement(c,null,"and"),yield n.createElement(u,{speaker:r})}()))},p=e=>{var t,a;let{session:s,byLine:i}=e;const o=s.sponsors.length?[{name:s.presenterName,nameReading:s.presenterNameReading,sponsor:s.sponsors[0].name}]:(t=null!==(a=s.speakers)&&void 0!==a?a:[]).concat.apply(t,(0,r.Z)(s.presenterName?[{name:s.presenterName,nameReading:s.presenterNameReading}]:[]));return n.createElement(d,{speakers:o,byLine:i})}}}]);
//# sourceMappingURL=5af7a9281ad5d3415401554ef3e0cfc8a2927b07-5ca5fd130ed90f290de4.js.map