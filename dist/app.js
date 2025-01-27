"use strict";(()=>{var Dv=Object.create;var xl=Object.defineProperty;var Fd=Object.getOwnPropertyDescriptor;var Nv=Object.getOwnPropertyNames;var Mv=Object.getPrototypeOf,zv=Object.prototype.hasOwnProperty;var E=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Uv=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Nv(e))!zv.call(t,s)&&s!==r&&xl(t,s,{get:()=>e[s],enumerable:!(i=Fd(e,s))||i.enumerable});return t};var Is=(t,e,r)=>(r=t!=null?Dv(Mv(t)):{},Uv(e||!t||!t.__esModule?xl(r,"default",{value:t,enumerable:!0}):r,t));var yt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fd(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xl(e,r,s),s};var fh=E(($A,Il)=>{var Q=String,hh=function(){return{isColorSupported:!1,reset:Q,bold:Q,dim:Q,italic:Q,underline:Q,inverse:Q,hidden:Q,strikethrough:Q,black:Q,red:Q,green:Q,yellow:Q,blue:Q,magenta:Q,cyan:Q,white:Q,gray:Q,bgBlack:Q,bgRed:Q,bgGreen:Q,bgYellow:Q,bgBlue:Q,bgMagenta:Q,bgCyan:Q,bgWhite:Q,blackBright:Q,redBright:Q,greenBright:Q,yellowBright:Q,blueBright:Q,magentaBright:Q,cyanBright:Q,whiteBright:Q,bgBlackBright:Q,bgRedBright:Q,bgGreenBright:Q,bgYellowBright:Q,bgBlueBright:Q,bgMagentaBright:Q,bgCyanBright:Q,bgWhiteBright:Q}};Il.exports=hh();Il.exports.createColors=hh});var Ll=E(()=>{});var To=E((LA,gh)=>{"use strict";var ph=fh(),mh=Ll(),zs=class t extends Error{constructor(e,r,i,s,n,o){super(e),this.name="CssSyntaxError",this.reason=e,n&&(this.file=n),s&&(this.source=s),o&&(this.plugin=o),typeof r<"u"&&typeof i<"u"&&(typeof r=="number"?(this.line=r,this.column=i):(this.line=r.line,this.column=r.column,this.endLine=i.line,this.endColumn=i.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,t)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let r=this.source;e==null&&(e=ph.isColorSupported);let i=c=>c,s=c=>c,n=c=>c;if(e){let{bold:c,gray:d,red:p}=ph.createColors(!0);s=f=>c(p(f)),i=f=>d(f),mh&&(n=f=>mh(f))}let o=r.split(/\r?\n/),a=Math.max(this.line-3,0),l=Math.min(this.line+2,o.length),u=String(l).length;return o.slice(a,l).map((c,d)=>{let p=a+1+d,f=" "+(" "+p).slice(-u)+" | ";if(p===this.line){if(c.length>160){let v=20,b=Math.max(0,this.column-v),y=Math.max(this.column+v,this.endColumn+v),w=c.slice(b,y),x=i(f.replace(/\d/g," "))+c.slice(0,Math.min(this.column-1,v-1)).replace(/[^\t]/g," ");return s(">")+i(f)+n(w)+`
 `+x+s("^")}let m=i(f.replace(/\d/g," "))+c.slice(0,this.column-1).replace(/[^\t]/g," ");return s(">")+i(f)+n(c)+`
 `+m+s("^")}return" "+i(f)+n(c)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};gh.exports=zs;zs.default=zs});var Rl=E((RA,yh)=>{"use strict";var bh={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function mw(t){return t[0].toUpperCase()+t.slice(1)}var Us=class{constructor(e){this.builder=e}atrule(e,r){let i="@"+e.name,s=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?i+=e.raws.afterName:s&&(i+=" "),e.nodes)this.block(e,i+s);else{let n=(e.raws.between||"")+(r?";":"");this.builder(i+s+n,e)}}beforeAfter(e,r){let i;e.type==="decl"?i=this.raw(e,null,"beforeDecl"):e.type==="comment"?i=this.raw(e,null,"beforeComment"):r==="before"?i=this.raw(e,null,"beforeRule"):i=this.raw(e,null,"beforeClose");let s=e.parent,n=0;for(;s&&s.type!=="root";)n+=1,s=s.parent;if(i.includes(`
`)){let o=this.raw(e,null,"indent");if(o.length)for(let a=0;a<n;a++)i+=o}return i}block(e,r){let i=this.raw(e,"between","beforeOpen");this.builder(r+i+"{",e,"start");let s;e.nodes&&e.nodes.length?(this.body(e),s=this.raw(e,"after")):s=this.raw(e,"after","emptyBody"),s&&this.builder(s),this.builder("}",e,"end")}body(e){let r=e.nodes.length-1;for(;r>0&&e.nodes[r].type==="comment";)r-=1;let i=this.raw(e,"semicolon");for(let s=0;s<e.nodes.length;s++){let n=e.nodes[s],o=this.raw(n,"before");o&&this.builder(o),this.stringify(n,r!==s||i)}}comment(e){let r=this.raw(e,"left","commentLeft"),i=this.raw(e,"right","commentRight");this.builder("/*"+r+e.text+i+"*/",e)}decl(e,r){let i=this.raw(e,"between","colon"),s=e.prop+i+this.rawValue(e,"value");e.important&&(s+=e.raws.important||" !important"),r&&(s+=";"),this.builder(s,e)}document(e){this.body(e)}raw(e,r,i){let s;if(i||(i=r),r&&(s=e.raws[r],typeof s<"u"))return s;let n=e.parent;if(i==="before"&&(!n||n.type==="root"&&n.first===e||n&&n.type==="document"))return"";if(!n)return bh[i];let o=e.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[i]<"u")return o.rawCache[i];if(i==="before"||i==="after")return this.beforeAfter(e,i);{let a="raw"+mw(i);this[a]?s=this[a](o,e):o.walk(l=>{if(s=l.raws[r],typeof s<"u")return!1})}return typeof s>"u"&&(s=bh[i]),o.rawCache[i]=s,s}rawBeforeClose(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length>0&&typeof i.raws.after<"u")return r=i.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(e,r){let i;return e.walkComments(s=>{if(typeof s.raws.before<"u")return i=s.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeDecl"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeDecl(e,r){let i;return e.walkDecls(s=>{if(typeof s.raws.before<"u")return i=s.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeRule"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeOpen(e){let r;return e.walk(i=>{if(i.type!=="decl"&&(r=i.raws.between,typeof r<"u"))return!1}),r}rawBeforeRule(e){let r;return e.walk(i=>{if(i.nodes&&(i.parent!==e||e.first!==i)&&typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(e){let r;return e.walkDecls(i=>{if(typeof i.raws.between<"u")return r=i.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length===0&&(r=i.raws.after,typeof r<"u"))return!1}),r}rawIndent(e){if(e.raws.indent)return e.raws.indent;let r;return e.walk(i=>{let s=i.parent;if(s&&s!==e&&s.parent&&s.parent===e&&typeof i.raws.before<"u"){let n=i.raws.before.split(`
`);return r=n[n.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length&&i.last.type==="decl"&&(r=i.raws.semicolon,typeof r<"u"))return!1}),r}rawValue(e,r){let i=e[r],s=e.raws[r];return s&&s.value===i?s.raw:i}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,r){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,r)}};yh.exports=Us;Us.default=Us});var Fs=E((DA,vh)=>{"use strict";var gw=Rl();function Dl(t,e){new gw(e).stringify(t)}vh.exports=Dl;Dl.default=Dl});var Ao=E((NA,Nl)=>{"use strict";Nl.exports.isClean=Symbol("isClean");Nl.exports.my=Symbol("my")});var Vs=E((MA,wh)=>{"use strict";var bw=To(),yw=Rl(),vw=Fs(),{isClean:js,my:ww}=Ao();function Ml(t,e){let r=new t.constructor;for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i)||i==="proxyCache")continue;let s=t[i],n=typeof s;i==="parent"&&n==="object"?e&&(r[i]=e):i==="source"?r[i]=s:Array.isArray(s)?r[i]=s.map(o=>Ml(o,r)):(n==="object"&&s!==null&&(s=Ml(s)),r[i]=s)}return r}function Bs(t,e){if(e&&typeof e.offset<"u")return e.offset;let r=1,i=1,s=0;for(let n=0;n<t.length;n++){if(i===e.line&&r===e.column){s=n;break}t[n]===`
`?(r=1,i+=1):r+=1}return s}var qs=class{constructor(e={}){this.raws={},this[js]=!1,this[ww]=!0;for(let r in e)if(r==="nodes"){this.nodes=[];for(let i of e[r])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[r]=e[r]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let r=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${r.input.from}:${r.start.line}:${r.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let r in e)this[r]=e[r];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let r=Ml(this);for(let i in e)r[i]=e[i];return r}cloneAfter(e={}){let r=this.clone(e);return this.parent.insertAfter(this,r),r}cloneBefore(e={}){let r=this.clone(e);return this.parent.insertBefore(this,r),r}error(e,r={}){if(this.source){let{end:i,start:s}=this.rangeBy(r);return this.source.input.error(e,{column:s.column,line:s.line},{column:i.column,line:i.line},r)}return new bw(e)}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:r==="root"?()=>e.root().toProxy():e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="prop"||r==="value"||r==="name"||r==="params"||r==="important"||r==="text")&&e.markDirty()),!0}}}markClean(){this[js]=!0}markDirty(){if(this[js]){this[js]=!1;let e=this;for(;e=e.parent;)e[js]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let r=this.source.start;if(e.index)r=this.positionInside(e.index);else if(e.word){let s=this.source.input.css.slice(Bs(this.source.input.css,this.source.start),Bs(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(r=this.positionInside(s))}return r}positionInside(e){let r=this.source.start.column,i=this.source.start.line,s=Bs(this.source.input.css,this.source.start),n=s+e;for(let o=s;o<n;o++)this.source.input.css[o]===`
`?(r=1,i+=1):r+=1;return{column:r,line:i}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let r={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:r.column+1,line:r.line};if(e.word){let n=this.source.input.css.slice(Bs(this.source.input.css,this.source.start),Bs(this.source.input.css,this.source.end)).indexOf(e.word);n!==-1&&(r=this.positionInside(n),i=this.positionInside(n+e.word.length))}else e.start?r={column:e.start.column,line:e.start.line}:e.index&&(r=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<r.line||i.line===r.line&&i.column<=r.column)&&(i={column:r.column+1,line:r.line}),{end:i,start:r}}raw(e,r){return new yw().raw(this,e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let r=this,i=!1;for(let s of e)s===this?i=!0:i?(this.parent.insertAfter(r,s),r=s):this.parent.insertBefore(r,s);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,r){let i={},s=r==null;r=r||new Map;let n=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let a=this[o];if(Array.isArray(a))i[o]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,r):l);else if(typeof a=="object"&&a.toJSON)i[o]=a.toJSON(null,r);else if(o==="source"){let l=r.get(a.input);l==null&&(l=n,r.set(a.input,n),n++),i[o]={end:a.end,inputId:l,start:a.start}}else i[o]=a}return s&&(i.inputs=[...r.keys()].map(o=>o.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=vw){e.stringify&&(e=e.stringify);let r="";return e(this,i=>{r+=i}),r}warn(e,r,i){let s={node:this};for(let n in i)s[n]=i[n];return e.warn(r,s)}get proxyOf(){return this}};wh.exports=qs;qs.default=qs});var Hs=E((zA,_h)=>{"use strict";var _w=Vs(),Ws=class extends _w{constructor(e){super(e),this.type="comment"}};_h.exports=Ws;Ws.default=Ws});var Gs=E((UA,xh)=>{"use strict";var xw=Vs(),Zs=class extends xw{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};xh.exports=Zs;Zs.default=Zs});var wr=E((FA,Ph)=>{"use strict";var Sh=Hs(),kh=Gs(),Sw=Vs(),{isClean:Ch,my:Eh}=Ao(),zl,Th,Ah,Ul;function Oh(t){return t.map(e=>(e.nodes&&(e.nodes=Oh(e.nodes)),delete e.source,e))}function $h(t){if(t[Ch]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)$h(e)}var zt=class t extends Sw{append(...e){for(let r of e){let i=this.normalize(r,this.last);for(let s of i)this.proxyOf.nodes.push(s)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let r of this.nodes)r.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let r=this.getIterator(),i,s;for(;this.indexes[r]<this.proxyOf.nodes.length&&(i=this.indexes[r],s=e(this.proxyOf.nodes[i],i),s!==!1);)this.indexes[r]+=1;return delete this.indexes[r],s}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:e[r]?r==="each"||typeof r=="string"&&r.startsWith("walk")?(...i)=>e[r](...i.map(s=>typeof s=="function"?(n,o)=>s(n.toProxy(),o):s)):r==="every"||r==="some"?i=>e[r]((s,...n)=>i(s.toProxy(),...n)):r==="root"?()=>e.root().toProxy():r==="nodes"?e.nodes.map(i=>i.toProxy()):r==="first"||r==="last"?e[r].toProxy():e[r]:e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="name"||r==="params"||r==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,r){let i=this.index(e),s=this.normalize(r,this.proxyOf.nodes[i]).reverse();i=this.index(e);for(let o of s)this.proxyOf.nodes.splice(i+1,0,o);let n;for(let o in this.indexes)n=this.indexes[o],i<n&&(this.indexes[o]=n+s.length);return this.markDirty(),this}insertBefore(e,r){let i=this.index(e),s=i===0?"prepend":!1,n=this.normalize(r,this.proxyOf.nodes[i],s).reverse();i=this.index(e);for(let a of n)this.proxyOf.nodes.splice(i,0,a);let o;for(let a in this.indexes)o=this.indexes[a],i<=o&&(this.indexes[a]=o+n.length);return this.markDirty(),this}normalize(e,r){if(typeof e=="string")e=Oh(Th(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let s of e)s.parent&&s.parent.removeChild(s,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let s of e)s.parent&&s.parent.removeChild(s,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new kh(e)]}else if(e.selector||e.selectors)e=[new Ul(e)];else if(e.name)e=[new zl(e)];else if(e.text)e=[new Sh(e)];else throw new Error("Unknown node type in node creation");return e.map(s=>(s[Eh]||t.rebuild(s),s=s.proxyOf,s.parent&&s.parent.removeChild(s),s[Ch]&&$h(s),s.raws||(s.raws={}),typeof s.raws.before>"u"&&r&&typeof r.raws.before<"u"&&(s.raws.before=r.raws.before.replace(/\S/g,"")),s.parent=this.proxyOf,s))}prepend(...e){e=e.reverse();for(let r of e){let i=this.normalize(r,this.first,"prepend").reverse();for(let s of i)this.proxyOf.nodes.unshift(s);for(let s in this.indexes)this.indexes[s]=this.indexes[s]+i.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let r;for(let i in this.indexes)r=this.indexes[i],r>=e&&(this.indexes[i]=r-1);return this.markDirty(),this}replaceValues(e,r,i){return i||(i=r,r={}),this.walkDecls(s=>{r.props&&!r.props.includes(s.prop)||r.fast&&!s.value.includes(r.fast)||(s.value=s.value.replace(e,i))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((r,i)=>{let s;try{s=e(r,i)}catch(n){throw r.addToError(n)}return s!==!1&&r.walk&&(s=r.walk(e)),s})}walkAtRules(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="atrule"&&e.test(i.name))return r(i,s)}):this.walk((i,s)=>{if(i.type==="atrule"&&i.name===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="atrule")return r(i,s)}))}walkComments(e){return this.walk((r,i)=>{if(r.type==="comment")return e(r,i)})}walkDecls(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="decl"&&e.test(i.prop))return r(i,s)}):this.walk((i,s)=>{if(i.type==="decl"&&i.prop===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="decl")return r(i,s)}))}walkRules(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="rule"&&e.test(i.selector))return r(i,s)}):this.walk((i,s)=>{if(i.type==="rule"&&i.selector===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="rule")return r(i,s)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};zt.registerParse=t=>{Th=t};zt.registerRule=t=>{Ul=t};zt.registerAtRule=t=>{zl=t};zt.registerRoot=t=>{Ah=t};Ph.exports=zt;zt.default=zt;zt.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,zl.prototype):t.type==="rule"?Object.setPrototypeOf(t,Ul.prototype):t.type==="decl"?Object.setPrototypeOf(t,kh.prototype):t.type==="comment"?Object.setPrototypeOf(t,Sh.prototype):t.type==="root"&&Object.setPrototypeOf(t,Ah.prototype),t[Eh]=!0,t.nodes&&t.nodes.forEach(e=>{zt.rebuild(e)})}});var Oo=E((jA,Lh)=>{"use strict";var Ih=wr(),Vi=class extends Ih{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};Lh.exports=Vi;Vi.default=Vi;Ih.registerAtRule(Vi)});var $o=E((BA,Nh)=>{"use strict";var kw=wr(),Rh,Dh,Jr=class extends kw{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new Rh(new Dh,this,e).stringify()}};Jr.registerLazyResult=t=>{Rh=t};Jr.registerProcessor=t=>{Dh=t};Nh.exports=Jr;Jr.default=Jr});var zh=E((qA,Mh)=>{var Cw="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Ew=(t,e=21)=>(r=e)=>{let i="",s=r|0;for(;s--;)i+=t[Math.random()*t.length|0];return i},Tw=(t=21)=>{let e="",r=t|0;for(;r--;)e+=Cw[Math.random()*64|0];return e};Mh.exports={nanoid:Tw,customAlphabet:Ew}});var Po=E(()=>{});var Io=E(()=>{});var Fl=E(()=>{});var Uh=E(()=>{});var Bl=E((XA,Bh)=>{"use strict";var{existsSync:Aw,readFileSync:Ow}=Uh(),{dirname:jl,join:$w}=Po(),{SourceMapConsumer:Fh,SourceMapGenerator:jh}=Io();function Pw(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}var Ks=class{constructor(e,r){if(r.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let i=r.map?r.map.prev:void 0,s=this.loadMap(r.from,i);!this.mapFile&&r.from&&(this.mapFile=r.from),this.mapFile&&(this.root=jl(this.mapFile)),s&&(this.text=s)}consumer(){return this.consumerCache||(this.consumerCache=new Fh(this.text)),this.consumerCache}decodeInline(e){let r=/^data:application\/json;charset=utf-?8;base64,/,i=/^data:application\/json;base64,/,s=/^data:application\/json;charset=utf-?8,/,n=/^data:application\/json,/,o=e.match(s)||e.match(n);if(o)return decodeURIComponent(e.substr(o[0].length));let a=e.match(r)||e.match(i);if(a)return Pw(e.substr(a[0].length));let l=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+l)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let r=e.match(/\/\*\s*# sourceMappingURL=/g);if(!r)return;let i=e.lastIndexOf(r.pop()),s=e.indexOf("*/",i);i>-1&&s>-1&&(this.annotation=this.getAnnotationURL(e.substring(i,s)))}loadFile(e){if(this.root=jl(e),Aw(e))return this.mapFile=e,Ow(e,"utf-8").toString().trim()}loadMap(e,r){if(r===!1)return!1;if(r){if(typeof r=="string")return r;if(typeof r=="function"){let i=r(e);if(i){let s=this.loadFile(i);if(!s)throw new Error("Unable to load previous source map: "+i.toString());return s}}else{if(r instanceof Fh)return jh.fromSourceMap(r).toString();if(r instanceof jh)return r.toString();if(this.isMap(r))return JSON.stringify(r);throw new Error("Unsupported previous source map format: "+r.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let i=this.annotation;return e&&(i=$w(jl(e),i)),this.loadFile(i)}}}startWith(e,r){return e?e.substr(0,r.length)===r:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};Bh.exports=Ks;Ks.default=Ks});var Ys=E((QA,Hh)=>{"use strict";var{nanoid:Iw}=zh(),{isAbsolute:Wl,resolve:Hl}=Po(),{SourceMapConsumer:Lw,SourceMapGenerator:Rw}=Io(),{fileURLToPath:qh,pathToFileURL:Lo}=Fl(),Vh=To(),Dw=Bl(),ql=Ll(),Vl=Symbol("fromOffsetCache"),Nw=!!(Lw&&Rw),Wh=!!(Hl&&Wl),Wi=class{constructor(e,r={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,r.from&&(!Wh||/^\w+:\/\//.test(r.from)||Wl(r.from)?this.file=r.from:this.file=Hl(r.from)),Wh&&Nw){let i=new Dw(this.css,r);if(i.text){this.map=i;let s=i.consumer().file;!this.file&&s&&(this.file=this.mapResolve(s))}}this.file||(this.id="<input css "+Iw(6)+">"),this.map&&(this.map.file=this.from)}error(e,r,i,s={}){let n,o,a;if(r&&typeof r=="object"){let u=r,c=i;if(typeof u.offset=="number"){let d=this.fromOffset(u.offset);r=d.line,i=d.col}else r=u.line,i=u.column;if(typeof c.offset=="number"){let d=this.fromOffset(c.offset);o=d.line,n=d.col}else o=c.line,n=c.column}else if(!i){let u=this.fromOffset(r);r=u.line,i=u.col}let l=this.origin(r,i,o,n);return l?a=new Vh(e,l.endLine===void 0?l.line:{column:l.column,line:l.line},l.endLine===void 0?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,s.plugin):a=new Vh(e,o===void 0?r:{column:i,line:r},o===void 0?i:{column:n,line:o},this.css,this.file,s.plugin),a.input={column:i,endColumn:n,endLine:o,line:r,source:this.css},this.file&&(Lo&&(a.input.url=Lo(this.file).toString()),a.input.file=this.file),a}fromOffset(e){let r,i;if(this[Vl])i=this[Vl];else{let n=this.css.split(`
`);i=new Array(n.length);let o=0;for(let a=0,l=n.length;a<l;a++)i[a]=o,o+=n[a].length+1;this[Vl]=i}r=i[i.length-1];let s=0;if(e>=r)s=i.length-1;else{let n=i.length-2,o;for(;s<n;)if(o=s+(n-s>>1),e<i[o])n=o-1;else if(e>=i[o+1])s=o+1;else{s=o;break}}return{col:e-i[s]+1,line:s+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Hl(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,r,i,s){if(!this.map)return!1;let n=this.map.consumer(),o=n.originalPositionFor({column:r,line:e});if(!o.source)return!1;let a;typeof i=="number"&&(a=n.originalPositionFor({column:s,line:i}));let l;Wl(o.source)?l=Lo(o.source):l=new URL(o.source,this.map.consumer().sourceRoot||Lo(this.map.mapFile));let u={column:o.column,endColumn:a&&a.column,endLine:a&&a.line,line:o.line,url:l.toString()};if(l.protocol==="file:")if(qh)u.file=qh(l);else throw new Error("file: protocol is not available in this PostCSS build");let c=n.sourceContentFor(o.source);return c&&(u.source=c),u}toJSON(){let e={};for(let r of["hasBOM","css","file","id"])this[r]!=null&&(e[r]=this[r]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};Hh.exports=Wi;Wi.default=Wi;ql&&ql.registerInput&&ql.registerInput(Wi)});var Hi=E((eO,Yh)=>{"use strict";var Zh=wr(),Gh,Kh,_r=class extends Zh{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,r,i){let s=super.normalize(e);if(r){if(i==="prepend")this.nodes.length>1?r.raws.before=this.nodes[1].raws.before:delete r.raws.before;else if(this.first!==r)for(let n of s)n.raws.before=r.raws.before}return s}removeChild(e,r){let i=this.index(e);return!r&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(e)}toResult(e={}){return new Gh(new Kh,this,e).stringify()}};_r.registerLazyResult=t=>{Gh=t};_r.registerProcessor=t=>{Kh=t};Yh.exports=_r;_r.default=_r;Zh.registerRoot(_r)});var Zl=E((tO,Jh)=>{"use strict";var Js={comma(t){return Js.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Js.split(t,e)},split(t,e,r){let i=[],s="",n=!1,o=0,a=!1,l="",u=!1;for(let c of t)u?u=!1:c==="\\"?u=!0:a?c===l&&(a=!1):c==='"'||c==="'"?(a=!0,l=c):c==="("?o+=1:c===")"?o>0&&(o-=1):o===0&&e.includes(c)&&(n=!0),n?(s!==""&&i.push(s.trim()),s="",n=!1):s+=c;return(r||s!=="")&&i.push(s.trim()),i}};Jh.exports=Js;Js.default=Js});var Ro=E((rO,Qh)=>{"use strict";var Xh=wr(),Mw=Zl(),Zi=class extends Xh{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return Mw.comma(this.selector)}set selectors(e){let r=this.selector?this.selector.match(/,\s*/):null,i=r?r[0]:","+this.raw("between","beforeOpen");this.selector=e.join(i)}};Qh.exports=Zi;Zi.default=Zi;Xh.registerRule(Zi)});var tf=E((iO,ef)=>{"use strict";var zw=Oo(),Uw=Hs(),Fw=Gs(),jw=Ys(),Bw=Bl(),qw=Hi(),Vw=Ro();function Xs(t,e){if(Array.isArray(t))return t.map(s=>Xs(s));let{inputs:r,...i}=t;if(r){e=[];for(let s of r){let n={...s,__proto__:jw.prototype};n.map&&(n.map={...n.map,__proto__:Bw.prototype}),e.push(n)}}if(i.nodes&&(i.nodes=t.nodes.map(s=>Xs(s,e))),i.source){let{inputId:s,...n}=i.source;i.source=n,s!=null&&(i.source.input=e[s])}if(i.type==="root")return new qw(i);if(i.type==="decl")return new Fw(i);if(i.type==="rule")return new Vw(i);if(i.type==="comment")return new Uw(i);if(i.type==="atrule")return new zw(i);throw new Error("Unknown node type: "+t.type)}ef.exports=Xs;Xs.default=Xs});var Kl=E((sO,lf)=>{"use strict";var{dirname:Do,relative:sf,resolve:nf,sep:of}=Po(),{SourceMapConsumer:af,SourceMapGenerator:No}=Io(),{pathToFileURL:rf}=Fl(),Ww=Ys(),Hw=!!(af&&No),Zw=!!(Do&&nf&&sf&&of),Gl=class{constructor(e,r,i,s){this.stringify=e,this.mapOpts=i.map||{},this.root=r,this.opts=i,this.css=s,this.originalCSS=s,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let r=`
`;this.css.includes(`\r
`)&&(r=`\r
`),this.css+=r+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let r=this.toUrl(this.path(e.file)),i=e.root||Do(e.file),s;this.mapOpts.sourcesContent===!1?(s=new af(e.text),s.sourcesContent&&(s.sourcesContent=null)):s=e.consumer(),this.map.applySourceMap(s,r,this.toUrl(this.path(i)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let r=this.root.nodes.length-1;r>=0;r--)e=this.root.nodes[r],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(r)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),Zw&&Hw&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,r=>{e+=r}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=No.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new No({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new No({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,r=1,i="<no source>",s={generated:{column:0,line:0},original:{column:0,line:0},source:""},n,o;this.stringify(this.root,(a,l,u)=>{if(this.css+=a,l&&u!=="end"&&(s.generated.line=e,s.generated.column=r-1,l.source&&l.source.start?(s.source=this.sourcePath(l),s.original.line=l.source.start.line,s.original.column=l.source.start.column-1,this.map.addMapping(s)):(s.source=i,s.original.line=1,s.original.column=0,this.map.addMapping(s))),o=a.match(/\n/g),o?(e+=o.length,n=a.lastIndexOf(`
`),r=a.length-n):r+=a.length,l&&u!=="start"){let c=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==c.last||c.raws.semicolon)&&(l.source&&l.source.end?(s.source=this.sourcePath(l),s.original.line=l.source.end.line,s.original.column=l.source.end.column-1,s.generated.line=e,s.generated.column=r-2,this.map.addMapping(s)):(s.source=i,s.original.line=1,s.original.column=0,s.generated.line=e,s.generated.column=r-1,this.map.addMapping(s)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(r=>r.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let r=this.memoizedPaths.get(e);if(r)return r;let i=this.opts.to?Do(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(i=Do(nf(i,this.mapOpts.annotation)));let s=sf(i,e);return this.memoizedPaths.set(e,s),s}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let r=e.source.input.map;this.previousMaps.includes(r)||this.previousMaps.push(r)}});else{let e=new Ww(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(r=>{if(r.source){let i=r.source.input.from;if(i&&!e[i]){e[i]=!0;let s=this.usesFileUrls?this.toFileUrl(i):this.toUrl(this.path(i));this.map.setSourceContent(s,r.source.input.css)}}});else if(this.css){let r=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(r,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let r=this.memoizedFileURLs.get(e);if(r)return r;if(rf){let i=rf(e).toString();return this.memoizedFileURLs.set(e,i),i}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let r=this.memoizedURLs.get(e);if(r)return r;of==="\\"&&(e=e.replace(/\\/g,"/"));let i=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,i),i}};lf.exports=Gl});var df=E((nO,uf)=>{"use strict";var Mo=/[\t\n\f\r "#'()/;[\\\]{}]/g,zo=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,Gw=/.[\r\n"'(/\\]/,cf=/[\da-f]/i;uf.exports=function(e,r={}){let i=e.css.valueOf(),s=r.ignoreErrors,n,o,a,l,u,c,d,p,f,m,v=i.length,b=0,y=[],w=[];function x(){return b}function _(G){throw e.error("Unclosed "+G,b)}function O(){return w.length===0&&b>=v}function se(G){if(w.length)return w.pop();if(b>=v)return;let ve=G?G.ignoreUnclosed:!1;switch(n=i.charCodeAt(b),n){case 10:case 32:case 9:case 13:case 12:{l=b;do l+=1,n=i.charCodeAt(l);while(n===32||n===10||n===9||n===13||n===12);c=["space",i.slice(b,l)],b=l-1;break}case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let P=String.fromCharCode(n);c=[P,P,b];break}case 40:{if(m=y.length?y.pop()[1]:"",f=i.charCodeAt(b+1),m==="url"&&f!==39&&f!==34&&f!==32&&f!==10&&f!==9&&f!==12&&f!==13){l=b;do{if(d=!1,l=i.indexOf(")",l+1),l===-1)if(s||ve){l=b;break}else _("bracket");for(p=l;i.charCodeAt(p-1)===92;)p-=1,d=!d}while(d);c=["brackets",i.slice(b,l+1),b,l],b=l}else l=i.indexOf(")",b+1),o=i.slice(b,l+1),l===-1||Gw.test(o)?c=["(","(",b]:(c=["brackets",o,b,l],b=l);break}case 39:case 34:{u=n===39?"'":'"',l=b;do{if(d=!1,l=i.indexOf(u,l+1),l===-1)if(s||ve){l=b+1;break}else _("string");for(p=l;i.charCodeAt(p-1)===92;)p-=1,d=!d}while(d);c=["string",i.slice(b,l+1),b,l],b=l;break}case 64:{Mo.lastIndex=b+1,Mo.test(i),Mo.lastIndex===0?l=i.length-1:l=Mo.lastIndex-2,c=["at-word",i.slice(b,l+1),b,l],b=l;break}case 92:{for(l=b,a=!0;i.charCodeAt(l+1)===92;)l+=1,a=!a;if(n=i.charCodeAt(l+1),a&&n!==47&&n!==32&&n!==10&&n!==9&&n!==13&&n!==12&&(l+=1,cf.test(i.charAt(l)))){for(;cf.test(i.charAt(l+1));)l+=1;i.charCodeAt(l+1)===32&&(l+=1)}c=["word",i.slice(b,l+1),b,l],b=l;break}default:{n===47&&i.charCodeAt(b+1)===42?(l=i.indexOf("*/",b+2)+1,l===0&&(s||ve?l=i.length:_("comment")),c=["comment",i.slice(b,l+1),b,l],b=l):(zo.lastIndex=b+1,zo.test(i),zo.lastIndex===0?l=i.length-1:l=zo.lastIndex-2,c=["word",i.slice(b,l+1),b,l],y.push(c),b=l);break}}return b++,c}function ae(G){w.push(G)}return{back:ae,endOfFile:O,nextToken:se,position:x}}});var mf=E((oO,pf)=>{"use strict";var Kw=Oo(),Yw=Hs(),Jw=Gs(),Xw=Hi(),hf=Ro(),Qw=df(),ff={empty:!0,space:!0};function e_(t){for(let e=t.length-1;e>=0;e--){let r=t[e],i=r[3]||r[2];if(i)return i}}var Yl=class{constructor(e){this.input=e,this.root=new Xw,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let r=new Kw;r.name=e[1].slice(1),r.name===""&&this.unnamedAtrule(r,e),this.init(r,e[2]);let i,s,n,o=!1,a=!1,l=[],u=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),i=e[0],i==="("||i==="["?u.push(i==="("?")":"]"):i==="{"&&u.length>0?u.push("}"):i===u[u.length-1]&&u.pop(),u.length===0)if(i===";"){r.source.end=this.getPosition(e[2]),r.source.end.offset++,this.semicolon=!0;break}else if(i==="{"){a=!0;break}else if(i==="}"){if(l.length>0){for(n=l.length-1,s=l[n];s&&s[0]==="space";)s=l[--n];s&&(r.source.end=this.getPosition(s[3]||s[2]),r.source.end.offset++)}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){o=!0;break}}r.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(r.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(r,"params",l),o&&(e=l[l.length-1],r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++,this.spaces=r.raws.between,r.raws.between="")):(r.raws.afterName="",r.params=""),a&&(r.nodes=[],this.current=r)}checkMissedSemicolon(e){let r=this.colon(e);if(r===!1)return;let i=0,s;for(let n=r-1;n>=0&&(s=e[n],!(s[0]!=="space"&&(i+=1,i===2)));n--);throw this.input.error("Missed semicolon",s[0]==="word"?s[3]+1:s[2])}colon(e){let r=0,i,s,n;for(let[o,a]of e.entries()){if(s=a,n=s[0],n==="("&&(r+=1),n===")"&&(r-=1),r===0&&n===":")if(!i)this.doubleColon(s);else{if(i[0]==="word"&&i[1]==="progid")continue;return o}i=s}return!1}comment(e){let r=new Yw;this.init(r,e[2]),r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++;let i=e[1].slice(2,-2);if(/^\s*$/.test(i))r.text="",r.raws.left=i,r.raws.right="";else{let s=i.match(/^(\s*)([^]*\S)(\s*)$/);r.text=s[2],r.raws.left=s[1],r.raws.right=s[3]}}createTokenizer(){this.tokenizer=Qw(this.input)}decl(e,r){let i=new Jw;this.init(i,e[0][2]);let s=e[e.length-1];for(s[0]===";"&&(this.semicolon=!0,e.pop()),i.source.end=this.getPosition(s[3]||s[2]||e_(e)),i.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),i.raws.before+=e.shift()[1];for(i.source.start=this.getPosition(e[0][2]),i.prop="";e.length;){let u=e[0][0];if(u===":"||u==="space"||u==="comment")break;i.prop+=e.shift()[1]}i.raws.between="";let n;for(;e.length;)if(n=e.shift(),n[0]===":"){i.raws.between+=n[1];break}else n[0]==="word"&&/\w/.test(n[1])&&this.unknownWord([n]),i.raws.between+=n[1];(i.prop[0]==="_"||i.prop[0]==="*")&&(i.raws.before+=i.prop[0],i.prop=i.prop.slice(1));let o=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)o.push(e.shift());this.precheckMissedSemicolon(e);for(let u=e.length-1;u>=0;u--){if(n=e[u],n[1].toLowerCase()==="!important"){i.important=!0;let c=this.stringFrom(e,u);c=this.spacesFromEnd(e)+c,c!==" !important"&&(i.raws.important=c);break}else if(n[1].toLowerCase()==="important"){let c=e.slice(0),d="";for(let p=u;p>0;p--){let f=c[p][0];if(d.trim().startsWith("!")&&f!=="space")break;d=c.pop()[1]+d}d.trim().startsWith("!")&&(i.important=!0,i.raws.important=d,e=c)}if(n[0]!=="space"&&n[0]!=="comment")break}e.some(u=>u[0]!=="space"&&u[0]!=="comment")&&(i.raws.between+=o.map(u=>u[1]).join(""),o=[]),this.raw(i,"value",o.concat(e),r),i.value.includes(":")&&!r&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let r=new hf;this.init(r,e[2]),r.selector="",r.raws.between="",this.current=r}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let r=this.current.nodes[this.current.nodes.length-1];r&&r.type==="rule"&&!r.raws.ownSemicolon&&(r.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let r=this.input.fromOffset(e);return{column:r.col,line:r.line,offset:e}}init(e,r){this.current.push(e),e.source={input:this.input,start:this.getPosition(r)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let r=!1,i=null,s=!1,n=null,o=[],a=e[1].startsWith("--"),l=[],u=e;for(;u;){if(i=u[0],l.push(u),i==="("||i==="[")n||(n=u),o.push(i==="("?")":"]");else if(a&&s&&i==="{")n||(n=u),o.push("}");else if(o.length===0)if(i===";")if(s){this.decl(l,a);return}else break;else if(i==="{"){this.rule(l);return}else if(i==="}"){this.tokenizer.back(l.pop()),r=!0;break}else i===":"&&(s=!0);else i===o[o.length-1]&&(o.pop(),o.length===0&&(n=null));u=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(r=!0),o.length>0&&this.unclosedBracket(n),r&&s){if(!a)for(;l.length&&(u=l[l.length-1][0],!(u!=="space"&&u!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,r,i,s){let n,o,a=i.length,l="",u=!0,c,d;for(let p=0;p<a;p+=1)n=i[p],o=n[0],o==="space"&&p===a-1&&!s?u=!1:o==="comment"?(d=i[p-1]?i[p-1][0]:"empty",c=i[p+1]?i[p+1][0]:"empty",!ff[d]&&!ff[c]?l.slice(-1)===","?u=!1:l+=n[1]:u=!1):l+=n[1];if(!u){let p=i.reduce((f,m)=>f+m[1],"");e.raws[r]={raw:p,value:l}}e[r]=l}rule(e){e.pop();let r=new hf;this.init(r,e[0][2]),r.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(r,"selector",e),this.current=r}spacesAndCommentsFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],!(r!=="space"&&r!=="comment"));)i=e.pop()[1]+i;return i}spacesAndCommentsFromStart(e){let r,i="";for(;e.length&&(r=e[0][0],!(r!=="space"&&r!=="comment"));)i+=e.shift()[1];return i}spacesFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],r==="space");)i=e.pop()[1]+i;return i}stringFrom(e,r){let i="";for(let s=r;s<e.length;s++)i+=e[s][1];return e.splice(r,e.length-r),i}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,r){throw this.input.error("At-rule without name",{offset:r[2]},{offset:r[2]+r[1].length})}};pf.exports=Yl});var Fo=E((aO,gf)=>{"use strict";var t_=wr(),r_=Ys(),i_=mf();function Uo(t,e){let r=new r_(t,e),i=new i_(r);try{i.parse()}catch(s){throw s}return i.root}gf.exports=Uo;Uo.default=Uo;t_.registerParse(Uo)});var Jl=E((lO,bf)=>{"use strict";var Qs=class{constructor(e,r={}){if(this.type="warning",this.text=e,r.node&&r.node.source){let i=r.node.rangeBy(r);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in r)this[i]=r[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};bf.exports=Qs;Qs.default=Qs});var jo=E((cO,yf)=>{"use strict";var s_=Jl(),en=class{constructor(e,r,i){this.processor=e,this.messages=[],this.root=r,this.opts=i,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,r={}){r.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(r.plugin=this.lastPlugin.postcssPlugin);let i=new s_(e,r);return this.messages.push(i),i}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};yf.exports=en;en.default=en});var Xl=E((uO,wf)=>{"use strict";var vf={};wf.exports=function(e){vf[e]||(vf[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}});var tc=E((hO,kf)=>{"use strict";var n_=wr(),o_=$o(),a_=Kl(),l_=Fo(),_f=jo(),c_=Hi(),u_=Fs(),{isClean:Wt,my:d_}=Ao(),dO=Xl(),h_={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},f_={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},p_={Once:!0,postcssPlugin:!0,prepare:!0},Gi=0;function tn(t){return typeof t=="object"&&typeof t.then=="function"}function Sf(t){let e=!1,r=h_[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[r,r+"-"+e,Gi,r+"Exit",r+"Exit-"+e]:e?[r,r+"-"+e,r+"Exit",r+"Exit-"+e]:t.append?[r,Gi,r+"Exit"]:[r,r+"Exit"]}function xf(t){let e;return t.type==="document"?e=["Document",Gi,"DocumentExit"]:t.type==="root"?e=["Root",Gi,"RootExit"]:e=Sf(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Ql(t){return t[Wt]=!1,t.nodes&&t.nodes.forEach(e=>Ql(e)),t}var ec={},xr=class t{constructor(e,r,i){this.stringified=!1,this.processed=!1;let s;if(typeof r=="object"&&r!==null&&(r.type==="root"||r.type==="document"))s=Ql(r);else if(r instanceof t||r instanceof _f)s=Ql(r.root),r.map&&(typeof i.map>"u"&&(i.map={}),i.map.inline||(i.map.inline=!1),i.map.prev=r.map);else{let n=l_;i.syntax&&(n=i.syntax.parse),i.parser&&(n=i.parser),n.parse&&(n=n.parse);try{s=n(r,i)}catch(o){this.processed=!0,this.error=o}s&&!s[d_]&&n_.rebuild(s)}this.result=new _f(e,s,i),this.helpers={...ec,postcss:ec,result:this.result},this.plugins=this.processor.plugins.map(n=>typeof n=="object"&&n.prepare?{...n,...n.prepare(this.result)}:n)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,r){let i=this.result.lastPlugin;try{r&&r.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=i.postcssPlugin,e.setMessage()):i.postcssVersion}catch(s){console&&console.error&&console.error(s)}return e}prepareVisitors(){this.listeners={};let e=(r,i,s)=>{this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push([r,s])};for(let r of this.plugins)if(typeof r=="object")for(let i in r){if(!f_[i]&&/^[A-Z]/.test(i))throw new Error(`Unknown event ${i} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!p_[i])if(typeof r[i]=="object")for(let s in r[i])s==="*"?e(r,i,r[i][s]):e(r,i+"-"+s.toLowerCase(),r[i][s]);else typeof r[i]=="function"&&e(r,i,r[i])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let r=this.plugins[e],i=this.runOnRoot(r);if(tn(i))try{await i}catch(s){throw this.handleError(s)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Wt];){e[Wt]=!0;let r=[xf(e)];for(;r.length>0;){let i=this.visitTick(r);if(tn(i))try{await i}catch(s){let n=r[r.length-1].node;throw this.handleError(s,n)}}}if(this.listeners.OnceExit)for(let[r,i]of this.listeners.OnceExit){this.result.lastPlugin=r;try{if(e.type==="document"){let s=e.nodes.map(n=>i(n,this.helpers));await Promise.all(s)}else await i(e,this.helpers)}catch(s){throw this.handleError(s)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let r=this.result.root.nodes.map(i=>e.Once(i,this.helpers));return tn(r[0])?Promise.all(r):r}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(r){throw this.handleError(r)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,r=u_;e.syntax&&(r=e.syntax.stringify),e.stringifier&&(r=e.stringifier),r.stringify&&(r=r.stringify);let s=new a_(r,this.result.root,this.result.opts).generate();return this.result.css=s[0],this.result.map=s[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let r=this.runOnRoot(e);if(tn(r))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Wt];)e[Wt]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let r of e.nodes)this.visitSync(this.listeners.OnceExit,r);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,r){return this.async().then(e,r)}toString(){return this.css}visitSync(e,r){for(let[i,s]of e){this.result.lastPlugin=i;let n;try{n=s(r,this.helpers)}catch(o){throw this.handleError(o,r.proxyOf)}if(r.type!=="root"&&r.type!=="document"&&!r.parent)return!0;if(tn(n))throw this.getAsyncError()}}visitTick(e){let r=e[e.length-1],{node:i,visitors:s}=r;if(i.type!=="root"&&i.type!=="document"&&!i.parent){e.pop();return}if(s.length>0&&r.visitorIndex<s.length){let[o,a]=s[r.visitorIndex];r.visitorIndex+=1,r.visitorIndex===s.length&&(r.visitors=[],r.visitorIndex=0),this.result.lastPlugin=o;try{return a(i.toProxy(),this.helpers)}catch(l){throw this.handleError(l,i)}}if(r.iterator!==0){let o=r.iterator,a;for(;a=i.nodes[i.indexes[o]];)if(i.indexes[o]+=1,!a[Wt]){a[Wt]=!0,e.push(xf(a));return}r.iterator=0,delete i.indexes[o]}let n=r.events;for(;r.eventIndex<n.length;){let o=n[r.eventIndex];if(r.eventIndex+=1,o===Gi){i.nodes&&i.nodes.length&&(i[Wt]=!0,r.iterator=i.getIterator());return}else if(this.listeners[o]){r.visitors=this.listeners[o];return}}e.pop()}walkSync(e){e[Wt]=!0;let r=Sf(e);for(let i of r)if(i===Gi)e.nodes&&e.each(s=>{s[Wt]||this.walkSync(s)});else{let s=this.listeners[i];if(s&&this.visitSync(s,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};xr.registerPostcss=t=>{ec=t};kf.exports=xr;xr.default=xr;c_.registerLazyResult(xr);o_.registerLazyResult(xr)});var Ef=E((pO,Cf)=>{"use strict";var m_=Kl(),g_=Fo(),b_=jo(),y_=Fs(),fO=Xl(),rn=class{constructor(e,r,i){r=r.toString(),this.stringified=!1,this._processor=e,this._css=r,this._opts=i,this._map=void 0;let s,n=y_;this.result=new b_(this._processor,s,this._opts),this.result.css=r;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let a=new m_(n,s,this._opts,r);if(a.isMap()){let[l,u]=a.generate();l&&(this.result.css=l),u&&(this.result.map=u)}else a.clearAnnotation(),this.result.css=a.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,r){return this.async().then(e,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,r=g_;try{e=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};Cf.exports=rn;rn.default=rn});var Af=E((mO,Tf)=>{"use strict";var v_=$o(),w_=tc(),__=Ef(),x_=Hi(),Xr=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let r=[];for(let i of e)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(!(typeof i=="object"&&(i.parse||i.stringify)))throw new Error(i+" is not a PostCSS plugin");return r}process(e,r={}){return!this.plugins.length&&!r.parser&&!r.stringifier&&!r.syntax?new __(this,e,r):new w_(this,e,r)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};Tf.exports=Xr;Xr.default=Xr;x_.registerProcessor(Xr);v_.registerProcessor(Xr)});var Ki=E((gO,Df)=>{"use strict";var Of=Oo(),$f=Hs(),S_=wr(),k_=To(),Pf=Gs(),If=$o(),C_=tf(),E_=Ys(),T_=tc(),A_=Zl(),O_=Vs(),$_=Fo(),rc=Af(),P_=jo(),Lf=Hi(),Rf=Ro(),I_=Fs(),L_=Jl();function ye(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new rc(t)}ye.plugin=function(e,r){let i=!1;function s(...o){console&&console.warn&&!i&&(i=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(e+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let a=r(...o);return a.postcssPlugin=e,a.postcssVersion=new rc().version,a}let n;return Object.defineProperty(s,"postcss",{get(){return n||(n=s()),n}}),s.process=function(o,a,l){return ye([s(l)]).process(o,a)},s};ye.stringify=I_;ye.parse=$_;ye.fromJSON=C_;ye.list=A_;ye.comment=t=>new $f(t);ye.atRule=t=>new Of(t);ye.decl=t=>new Pf(t);ye.rule=t=>new Rf(t);ye.root=t=>new Lf(t);ye.document=t=>new If(t);ye.CssSyntaxError=k_;ye.Declaration=Pf;ye.Container=S_;ye.Processor=rc;ye.Document=If;ye.Comment=$f;ye.Warning=L_;ye.AtRule=Of;ye.Result=P_;ye.Input=E_;ye.Rule=Rf;ye.Root=Lf;ye.Node=O_;T_.registerPostcss(ye);Df.exports=ye;ye.default=ye});var Uf=E((BO,zf)=>{"use strict";var Nf=/-(\w|$)/g,Mf=function(e,r){return r.toUpperCase()},R_=function(e){return e=e.toLowerCase(),e==="float"?"cssFloat":e.charCodeAt(0)===45&&e.charCodeAt(1)===109&&e.charCodeAt(2)===115&&e.charCodeAt(3)===45?e.substr(1).replace(Nf,Mf):e.replace(Nf,Mf)};zf.exports=R_});var oc=E((qO,Ff)=>{var D_=Uf(),N_={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function sc(t){return typeof t.nodes>"u"?!0:nc(t)}function nc(t){let e,r={};return t.each(i=>{if(i.type==="atrule")e="@"+i.name,i.params&&(e+=" "+i.params),typeof r[e]>"u"?r[e]=sc(i):Array.isArray(r[e])?r[e].push(sc(i)):r[e]=[r[e],sc(i)];else if(i.type==="rule"){let s=nc(i);if(r[i.selector])for(let n in s)r[i.selector][n]=s[n];else r[i.selector]=s}else if(i.type==="decl"){i.prop[0]==="-"&&i.prop[1]==="-"||i.parent&&i.parent.selector===":export"?e=i.prop:e=D_(i.prop);let s=i.value;!isNaN(i.value)&&N_[e]&&(s=parseFloat(i.value)),i.important&&(s+=" !important"),typeof r[e]>"u"?r[e]=s:Array.isArray(r[e])?r[e].push(s):r[e]=[r[e],s]}}),r}Ff.exports=nc});var Bo=E((VO,Vf)=>{var sn=Ki(),jf=/\s*!important\s*$/i,M_={"box-flex":!0,"box-flex-group":!0,"column-count":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0};function z_(t){return t.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function Bf(t,e,r){r===!1||r===null||(e.startsWith("--")||(e=z_(e)),typeof r=="number"&&(r===0||M_[e]?r=r.toString():r+="px"),e==="css-float"&&(e="float"),jf.test(r)?(r=r.replace(jf,""),t.push(sn.decl({prop:e,value:r,important:!0}))):t.push(sn.decl({prop:e,value:r})))}function qf(t,e,r){let i=sn.atRule({name:e[1],params:e[3]||""});typeof r=="object"&&(i.nodes=[],ac(r,i)),t.push(i)}function ac(t,e){let r,i,s;for(r in t)if(i=t[r],!(i===null||typeof i>"u"))if(r[0]==="@"){let n=r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);if(Array.isArray(i))for(let o of i)qf(e,n,o);else qf(e,n,i)}else if(Array.isArray(i))for(let n of i)Bf(e,r,n);else typeof i=="object"?(s=sn.rule({selector:r}),ac(i,s),e.push(s)):Bf(e,r,i)}Vf.exports=function(t){let e=sn.root();return ac(t,e),e}});var lc=E((WO,Wf)=>{var U_=oc();Wf.exports=function(e){return console&&console.warn&&e.warnings().forEach(r=>{let i=r.plugin||"PostCSS";console.warn(i+": "+r.text)}),U_(e.root)}});var Zf=E((HO,Hf)=>{var F_=Ki(),j_=lc(),B_=Bo();Hf.exports=function(e){let r=F_(e);return async i=>{let s=await r.process(i,{parser:B_,from:void 0});return j_(s)}}});var Kf=E((ZO,Gf)=>{var q_=Ki(),V_=lc(),W_=Bo();Gf.exports=function(t){let e=q_(t);return r=>{let i=e.process(r,{parser:W_,from:void 0});return V_(i)}}});var Jf=E((GO,Yf)=>{var H_=oc(),Z_=Bo(),G_=Zf(),K_=Kf();Yf.exports={objectify:H_,parse:Z_,async:G_,sync:K_}});var uc=E((qo,Xf)=>{"use strict";qo.__esModule=!0;qo.default=X_;function Y_(t){for(var e=t.toLowerCase(),r="",i=!1,s=0;s<6&&e[s]!==void 0;s++){var n=e.charCodeAt(s),o=n>=97&&n<=102||n>=48&&n<=57;if(i=n===32,!o)break;r+=e[s]}if(r.length!==0){var a=parseInt(r,16),l=a>=55296&&a<=57343;return l||a===0||a>1114111?["\uFFFD",r.length+(i?1:0)]:[String.fromCodePoint(a),r.length+(i?1:0)]}}var J_=/\\/;function X_(t){var e=J_.test(t);if(!e)return t;for(var r="",i=0;i<t.length;i++){if(t[i]==="\\"){var s=Y_(t.slice(i+1,i+7));if(s!==void 0){r+=s[0],i+=s[1];continue}if(t[i+1]==="\\"){r+="\\",i++;continue}t.length===i+1&&(r+=t[i]);continue}r+=t[i]}return r}Xf.exports=qo.default});var ep=E((Vo,Qf)=>{"use strict";Vo.__esModule=!0;Vo.default=Q_;function Q_(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var s=r.shift();if(!t[s])return;t=t[s]}return t}Qf.exports=Vo.default});var rp=E((Wo,tp)=>{"use strict";Wo.__esModule=!0;Wo.default=e0;function e0(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var s=r.shift();t[s]||(t[s]={}),t=t[s]}}tp.exports=Wo.default});var sp=E((Ho,ip)=>{"use strict";Ho.__esModule=!0;Ho.default=t0;function t0(t){for(var e="",r=t.indexOf("/*"),i=0;r>=0;){e=e+t.slice(i,r);var s=t.indexOf("*/",r+2);if(s<0)return e;i=s+2,r=t.indexOf("/*",i)}return e=e+t.slice(i),e}ip.exports=Ho.default});var nn=E(Ht=>{"use strict";Ht.__esModule=!0;Ht.unesc=Ht.stripComments=Ht.getProp=Ht.ensureObject=void 0;var r0=Zo(uc());Ht.unesc=r0.default;var i0=Zo(ep());Ht.getProp=i0.default;var s0=Zo(rp());Ht.ensureObject=s0.default;var n0=Zo(sp());Ht.stripComments=n0.default;function Zo(t){return t&&t.__esModule?t:{default:t}}});var ir=E((on,ap)=>{"use strict";on.__esModule=!0;on.default=void 0;var np=nn();function op(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o0(t,e,r){return e&&op(t.prototype,e),r&&op(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var a0=function t(e,r){if(typeof e!="object"||e===null)return e;var i=new e.constructor;for(var s in e)if(e.hasOwnProperty(s)){var n=e[s],o=typeof n;s==="parent"&&o==="object"?r&&(i[s]=r):n instanceof Array?i[s]=n.map(function(a){return t(a,i)}):i[s]=t(n,i)}return i},l0=function(){function t(r){r===void 0&&(r={}),Object.assign(this,r),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var e=t.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(i){i===void 0&&(i={});var s=a0(this);for(var n in i)s[n]=i[n];return s},e.appendToPropertyAndEscape=function(i,s,n){this.raws||(this.raws={});var o=this[i],a=this.raws[i];this[i]=o+s,a||n!==s?this.raws[i]=(a||o)+n:delete this.raws[i]},e.setPropertyAndEscape=function(i,s,n){this.raws||(this.raws={}),this[i]=s,this.raws[i]=n},e.setPropertyWithoutEscape=function(i,s){this[i]=s,this.raws&&delete this.raws[i]},e.isAtPosition=function(i,s){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>s||this.source.end.line===i&&this.source.end.column<s)},e.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},o0(t,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,np.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,np.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),t}();on.default=l0;ap.exports=on.default});var qe=E(Ee=>{"use strict";Ee.__esModule=!0;Ee.UNIVERSAL=Ee.TAG=Ee.STRING=Ee.SELECTOR=Ee.ROOT=Ee.PSEUDO=Ee.NESTING=Ee.ID=Ee.COMMENT=Ee.COMBINATOR=Ee.CLASS=Ee.ATTRIBUTE=void 0;var c0="tag";Ee.TAG=c0;var u0="string";Ee.STRING=u0;var d0="selector";Ee.SELECTOR=d0;var h0="root";Ee.ROOT=h0;var f0="pseudo";Ee.PSEUDO=f0;var p0="nesting";Ee.NESTING=p0;var m0="id";Ee.ID=m0;var g0="comment";Ee.COMMENT=g0;var b0="combinator";Ee.COMBINATOR=b0;var y0="class";Ee.CLASS=y0;var v0="attribute";Ee.ATTRIBUTE=v0;var w0="universal";Ee.UNIVERSAL=w0});var Go=E((an,dp)=>{"use strict";an.__esModule=!0;an.default=void 0;var _0=S0(ir()),sr=x0(qe());function up(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(up=function(s){return s?r:e})(t)}function x0(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=up(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function S0(t){return t&&t.__esModule?t:{default:t}}function k0(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=C0(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C0(t,e){if(t){if(typeof t=="string")return lp(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return lp(t,e)}}function lp(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function cp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function E0(t,e,r){return e&&cp(t.prototype,e),r&&cp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function T0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,dc(t,e)}function dc(t,e){return dc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},dc(t,e)}var A0=function(t){T0(e,t);function e(i){var s;return s=t.call(this,i)||this,s.nodes||(s.nodes=[]),s}var r=e.prototype;return r.append=function(s){return s.parent=this,this.nodes.push(s),this},r.prepend=function(s){s.parent=this,this.nodes.unshift(s);for(var n in this.indexes)this.indexes[n]++;return this},r.at=function(s){return this.nodes[s]},r.index=function(s){return typeof s=="number"?s:this.nodes.indexOf(s)},r.removeChild=function(s){s=this.index(s),this.at(s).parent=void 0,this.nodes.splice(s,1);var n;for(var o in this.indexes)n=this.indexes[o],n>=s&&(this.indexes[o]=n-1);return this},r.removeAll=function(){for(var s=k0(this.nodes),n;!(n=s()).done;){var o=n.value;o.parent=void 0}return this.nodes=[],this},r.empty=function(){return this.removeAll()},r.insertAfter=function(s,n){n.parent=this;var o=this.index(s);this.nodes.splice(o+1,0,n),n.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],o<a&&(this.indexes[l]=a+1);return this},r.insertBefore=function(s,n){n.parent=this;var o=this.index(s);this.nodes.splice(o,0,n),n.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],a>=o&&(this.indexes[l]=a+1);return this},r._findChildAtPosition=function(s,n){var o=void 0;return this.each(function(a){if(a.atPosition){var l=a.atPosition(s,n);if(l)return o=l,!1}else if(a.isAtPosition(s,n))return o=a,!1}),o},r.atPosition=function(s,n){if(this.isAtPosition(s,n))return this._findChildAtPosition(s,n)||this},r._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},r.each=function(s){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var n=this.lastEach;if(this.indexes[n]=0,!!this.length){for(var o,a;this.indexes[n]<this.length&&(o=this.indexes[n],a=s(this.at(o),o),a!==!1);)this.indexes[n]+=1;if(delete this.indexes[n],a===!1)return!1}},r.walk=function(s){return this.each(function(n,o){var a=s(n,o);if(a!==!1&&n.length&&(a=n.walk(s)),a===!1)return!1})},r.walkAttributes=function(s){var n=this;return this.walk(function(o){if(o.type===sr.ATTRIBUTE)return s.call(n,o)})},r.walkClasses=function(s){var n=this;return this.walk(function(o){if(o.type===sr.CLASS)return s.call(n,o)})},r.walkCombinators=function(s){var n=this;return this.walk(function(o){if(o.type===sr.COMBINATOR)return s.call(n,o)})},r.walkComments=function(s){var n=this;return this.walk(function(o){if(o.type===sr.COMMENT)return s.call(n,o)})},r.walkIds=function(s){var n=this;return this.walk(function(o){if(o.type===sr.ID)return s.call(n,o)})},r.walkNesting=function(s){var n=this;return this.walk(function(o){if(o.type===sr.NESTING)return s.call(n,o)})},r.walkPseudos=function(s){var n=this;return this.walk(function(o){if(o.type===sr.PSEUDO)return s.call(n,o)})},r.walkTags=function(s){var n=this;return this.walk(function(o){if(o.type===sr.TAG)return s.call(n,o)})},r.walkUniversals=function(s){var n=this;return this.walk(function(o){if(o.type===sr.UNIVERSAL)return s.call(n,o)})},r.split=function(s){var n=this,o=[];return this.reduce(function(a,l,u){var c=s.call(n,l);return o.push(l),c?(a.push(o),o=[]):u===n.length-1&&a.push(o),a},[])},r.map=function(s){return this.nodes.map(s)},r.reduce=function(s,n){return this.nodes.reduce(s,n)},r.every=function(s){return this.nodes.every(s)},r.some=function(s){return this.nodes.some(s)},r.filter=function(s){return this.nodes.filter(s)},r.sort=function(s){return this.nodes.sort(s)},r.toString=function(){return this.map(String).join("")},E0(e,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),e}(_0.default);an.default=A0;dp.exports=an.default});var fc=E((ln,fp)=>{"use strict";ln.__esModule=!0;ln.default=void 0;var O0=P0(Go()),$0=qe();function P0(t){return t&&t.__esModule?t:{default:t}}function hp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function I0(t,e,r){return e&&hp(t.prototype,e),r&&hp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function L0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hc(t,e)}function hc(t,e){return hc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},hc(t,e)}var R0=function(t){L0(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=$0.ROOT,s}var r=e.prototype;return r.toString=function(){var s=this.reduce(function(n,o){return n.push(String(o)),n},[]).join(",");return this.trailingComma?s+",":s},r.error=function(s,n){return this._error?this._error(s,n):new Error(s)},I0(e,[{key:"errorGenerator",set:function(s){this._error=s}}]),e}(O0.default);ln.default=R0;fp.exports=ln.default});var mc=E((cn,pp)=>{"use strict";cn.__esModule=!0;cn.default=void 0;var D0=M0(Go()),N0=qe();function M0(t){return t&&t.__esModule?t:{default:t}}function z0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,pc(t,e)}function pc(t,e){return pc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},pc(t,e)}var U0=function(t){z0(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=N0.SELECTOR,i}return e}(D0.default);cn.default=U0;pp.exports=cn.default});var Ko=E((r$,mp)=>{"use strict";var F0={},j0=F0.hasOwnProperty,B0=function(e,r){if(!e)return r;var i={};for(var s in r)i[s]=j0.call(e,s)?e[s]:r[s];return i},q0=/[ -,\.\/:-@\[-\^`\{-~]/,V0=/[ -,\.\/:-@\[\]\^`\{-~]/,W0=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,gc=function t(e,r){r=B0(r,t.options),r.quotes!="single"&&r.quotes!="double"&&(r.quotes="single");for(var i=r.quotes=="double"?'"':"'",s=r.isIdentifier,n=e.charAt(0),o="",a=0,l=e.length;a<l;){var u=e.charAt(a++),c=u.charCodeAt(),d=void 0;if(c<32||c>126){if(c>=55296&&c<=56319&&a<l){var p=e.charCodeAt(a++);(p&64512)==56320?c=((c&1023)<<10)+(p&1023)+65536:a--}d="\\"+c.toString(16).toUpperCase()+" "}else r.escapeEverything?q0.test(u)?d="\\"+u:d="\\"+c.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(u)?d="\\"+c.toString(16).toUpperCase()+" ":u=="\\"||!s&&(u=='"'&&i==u||u=="'"&&i==u)||s&&V0.test(u)?d="\\"+u:d=u;o+=d}return s&&(/^-[-\d]/.test(o)?o="\\-"+o.slice(1):/\d/.test(n)&&(o="\\3"+n+" "+o.slice(1))),o=o.replace(W0,function(f,m,v){return m&&m.length%2?f:(m||"")+v}),!s&&r.wrap?i+o+i:o};gc.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};gc.version="3.0.0";mp.exports=gc});var yc=E((un,yp)=>{"use strict";un.__esModule=!0;un.default=void 0;var H0=bp(Ko()),Z0=nn(),G0=bp(ir()),K0=qe();function bp(t){return t&&t.__esModule?t:{default:t}}function gp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Y0(t,e,r){return e&&gp(t.prototype,e),r&&gp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function J0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,bc(t,e)}function bc(t,e){return bc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},bc(t,e)}var X0=function(t){J0(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=K0.CLASS,s._constructed=!0,s}var r=e.prototype;return r.valueToString=function(){return"."+t.prototype.valueToString.call(this)},Y0(e,[{key:"value",get:function(){return this._value},set:function(s){if(this._constructed){var n=(0,H0.default)(s,{isIdentifier:!0});n!==s?((0,Z0.ensureObject)(this,"raws"),this.raws.value=n):this.raws&&delete this.raws.value}this._value=s}}]),e}(G0.default);un.default=X0;yp.exports=un.default});var wc=E((dn,vp)=>{"use strict";dn.__esModule=!0;dn.default=void 0;var Q0=tx(ir()),ex=qe();function tx(t){return t&&t.__esModule?t:{default:t}}function rx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vc(t,e)}function vc(t,e){return vc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},vc(t,e)}var ix=function(t){rx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=ex.COMMENT,i}return e}(Q0.default);dn.default=ix;vp.exports=dn.default});var xc=E((hn,wp)=>{"use strict";hn.__esModule=!0;hn.default=void 0;var sx=ox(ir()),nx=qe();function ox(t){return t&&t.__esModule?t:{default:t}}function ax(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_c(t,e)}function _c(t,e){return _c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},_c(t,e)}var lx=function(t){ax(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=nx.ID,s}var r=e.prototype;return r.valueToString=function(){return"#"+t.prototype.valueToString.call(this)},e}(sx.default);hn.default=lx;wp.exports=hn.default});var Yo=E((fn,Sp)=>{"use strict";fn.__esModule=!0;fn.default=void 0;var cx=xp(Ko()),ux=nn(),dx=xp(ir());function xp(t){return t&&t.__esModule?t:{default:t}}function _p(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function hx(t,e,r){return e&&_p(t.prototype,e),r&&_p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function fx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Sc(t,e)}function Sc(t,e){return Sc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Sc(t,e)}var px=function(t){fx(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.qualifiedName=function(s){return this.namespace?this.namespaceString+"|"+s:s},r.valueToString=function(){return this.qualifiedName(t.prototype.valueToString.call(this))},hx(e,[{key:"namespace",get:function(){return this._namespace},set:function(s){if(s===!0||s==="*"||s==="&"){this._namespace=s,this.raws&&delete this.raws.namespace;return}var n=(0,cx.default)(s,{isIdentifier:!0});this._namespace=s,n!==s?((0,ux.ensureObject)(this,"raws"),this.raws.namespace=n):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(s){this.namespace=s}},{key:"namespaceString",get:function(){if(this.namespace){var s=this.stringifyProperty("namespace");return s===!0?"":s}else return""}}]),e}(dx.default);fn.default=px;Sp.exports=fn.default});var Cc=E((pn,kp)=>{"use strict";pn.__esModule=!0;pn.default=void 0;var mx=bx(Yo()),gx=qe();function bx(t){return t&&t.__esModule?t:{default:t}}function yx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,kc(t,e)}function kc(t,e){return kc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},kc(t,e)}var vx=function(t){yx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=gx.TAG,i}return e}(mx.default);pn.default=vx;kp.exports=pn.default});var Tc=E((mn,Cp)=>{"use strict";mn.__esModule=!0;mn.default=void 0;var wx=xx(ir()),_x=qe();function xx(t){return t&&t.__esModule?t:{default:t}}function Sx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ec(t,e)}function Ec(t,e){return Ec=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ec(t,e)}var kx=function(t){Sx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=_x.STRING,i}return e}(wx.default);mn.default=kx;Cp.exports=mn.default});var Oc=E((gn,Ep)=>{"use strict";gn.__esModule=!0;gn.default=void 0;var Cx=Tx(Go()),Ex=qe();function Tx(t){return t&&t.__esModule?t:{default:t}}function Ax(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ac(t,e)}function Ac(t,e){return Ac=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ac(t,e)}var Ox=function(t){Ax(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=Ex.PSEUDO,s}var r=e.prototype;return r.toString=function(){var s=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),s,this.rawSpaceAfter].join("")},e}(Cx.default);gn.default=Ox;Ep.exports=gn.default});var Ap=E((i$,Tp)=>{Tp.exports=$x;function $x(t,e){if($c("noDeprecation"))return t;var r=!1;function i(){if(!r){if($c("throwDeprecation"))throw new Error(e);$c("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}return i}function $c(t){try{if(!global.localStorage)return!1}catch{return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var Nc=E(vn=>{"use strict";vn.__esModule=!0;vn.default=void 0;vn.unescapeValue=Dc;var bn=Rc(Ko()),Px=Rc(uc()),Ix=Rc(Yo()),Lx=qe(),Pc;function Rc(t){return t&&t.__esModule?t:{default:t}}function Op(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Rx(t,e,r){return e&&Op(t.prototype,e),r&&Op(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Dx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Lc(t,e)}function Lc(t,e){return Lc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Lc(t,e)}var yn=Ap(),Nx=/^('|")([^]*)\1$/,Mx=yn(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),zx=yn(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),Ux=yn(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function Dc(t){var e=!1,r=null,i=t,s=i.match(Nx);return s&&(r=s[1],i=s[2]),i=(0,Px.default)(i),i!==t&&(e=!0),{deprecatedUsage:e,unescaped:i,quoteMark:r}}function Fx(t){if(t.quoteMark!==void 0||t.value===void 0)return t;Ux();var e=Dc(t.value),r=e.quoteMark,i=e.unescaped;return t.raws||(t.raws={}),t.raws.value===void 0&&(t.raws.value=t.value),t.value=i,t.quoteMark=r,t}var Jo=function(t){Dx(e,t);function e(i){var s;return i===void 0&&(i={}),s=t.call(this,Fx(i))||this,s.type=Lx.ATTRIBUTE,s.raws=s.raws||{},Object.defineProperty(s.raws,"unquoted",{get:yn(function(){return s.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:yn(function(){return s.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),s._constructed=!0,s}var r=e.prototype;return r.getQuotedValue=function(s){s===void 0&&(s={});var n=this._determineQuoteMark(s),o=Ic[n],a=(0,bn.default)(this._value,o);return a},r._determineQuoteMark=function(s){return s.smart?this.smartQuoteMark(s):this.preferredQuoteMark(s)},r.setValue=function(s,n){n===void 0&&(n={}),this._value=s,this._quoteMark=this._determineQuoteMark(n),this._syncRawValue()},r.smartQuoteMark=function(s){var n=this.value,o=n.replace(/[^']/g,"").length,a=n.replace(/[^"]/g,"").length;if(o+a===0){var l=(0,bn.default)(n,{isIdentifier:!0});if(l===n)return e.NO_QUOTE;var u=this.preferredQuoteMark(s);if(u===e.NO_QUOTE){var c=this.quoteMark||s.quoteMark||e.DOUBLE_QUOTE,d=Ic[c],p=(0,bn.default)(n,d);if(p.length<l.length)return c}return u}else return a===o?this.preferredQuoteMark(s):a<o?e.DOUBLE_QUOTE:e.SINGLE_QUOTE},r.preferredQuoteMark=function(s){var n=s.preferCurrentQuoteMark?this.quoteMark:s.quoteMark;return n===void 0&&(n=s.preferCurrentQuoteMark?s.quoteMark:this.quoteMark),n===void 0&&(n=e.DOUBLE_QUOTE),n},r._syncRawValue=function(){var s=(0,bn.default)(this._value,Ic[this.quoteMark]);s===this._value?this.raws&&delete this.raws.value:this.raws.value=s},r._handleEscapes=function(s,n){if(this._constructed){var o=(0,bn.default)(n,{isIdentifier:!0});o!==n?this.raws[s]=o:delete this.raws[s]}},r._spacesFor=function(s){var n={before:"",after:""},o=this.spaces[s]||{},a=this.raws.spaces&&this.raws.spaces[s]||{};return Object.assign(n,o,a)},r._stringFor=function(s,n,o){n===void 0&&(n=s),o===void 0&&(o=$p);var a=this._spacesFor(n);return o(this.stringifyProperty(s),a)},r.offsetOf=function(s){var n=1,o=this._spacesFor("attribute");if(n+=o.before.length,s==="namespace"||s==="ns")return this.namespace?n:-1;if(s==="attributeNS"||(n+=this.namespaceString.length,this.namespace&&(n+=1),s==="attribute"))return n;n+=this.stringifyProperty("attribute").length,n+=o.after.length;var a=this._spacesFor("operator");n+=a.before.length;var l=this.stringifyProperty("operator");if(s==="operator")return l?n:-1;n+=l.length,n+=a.after.length;var u=this._spacesFor("value");n+=u.before.length;var c=this.stringifyProperty("value");if(s==="value")return c?n:-1;n+=c.length,n+=u.after.length;var d=this._spacesFor("insensitive");return n+=d.before.length,s==="insensitive"&&this.insensitive?n:-1},r.toString=function(){var s=this,n=[this.rawSpaceBefore,"["];return n.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(n.push(this._stringFor("operator")),n.push(this._stringFor("value")),n.push(this._stringFor("insensitiveFlag","insensitive",function(o,a){return o.length>0&&!s.quoted&&a.before.length===0&&!(s.spaces.value&&s.spaces.value.after)&&(a.before=" "),$p(o,a)}))),n.push("]"),n.push(this.rawSpaceAfter),n.join("")},Rx(e,[{key:"quoted",get:function(){var s=this.quoteMark;return s==="'"||s==='"'},set:function(s){zx()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(s){if(!this._constructed){this._quoteMark=s;return}this._quoteMark!==s&&(this._quoteMark=s,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(s){if(this._constructed){var n=Dc(s),o=n.deprecatedUsage,a=n.unescaped,l=n.quoteMark;if(o&&Mx(),a===this._value&&l===this._quoteMark)return;this._value=a,this._quoteMark=l,this._syncRawValue()}else this._value=s}},{key:"insensitive",get:function(){return this._insensitive},set:function(s){s||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=s}},{key:"attribute",get:function(){return this._attribute},set:function(s){this._handleEscapes("attribute",s),this._attribute=s}}]),e}(Ix.default);vn.default=Jo;Jo.NO_QUOTE=null;Jo.SINGLE_QUOTE="'";Jo.DOUBLE_QUOTE='"';var Ic=(Pc={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},Pc[null]={isIdentifier:!0},Pc);function $p(t,e){return""+e.before+t+e.after}});var zc=E((wn,Pp)=>{"use strict";wn.__esModule=!0;wn.default=void 0;var jx=qx(Yo()),Bx=qe();function qx(t){return t&&t.__esModule?t:{default:t}}function Vx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mc(t,e)}function Mc(t,e){return Mc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Mc(t,e)}var Wx=function(t){Vx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Bx.UNIVERSAL,i.value="*",i}return e}(jx.default);wn.default=Wx;Pp.exports=wn.default});var Fc=E((_n,Ip)=>{"use strict";_n.__esModule=!0;_n.default=void 0;var Hx=Gx(ir()),Zx=qe();function Gx(t){return t&&t.__esModule?t:{default:t}}function Kx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Uc(t,e)}function Uc(t,e){return Uc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Uc(t,e)}var Yx=function(t){Kx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Zx.COMBINATOR,i}return e}(Hx.default);_n.default=Yx;Ip.exports=_n.default});var Bc=E((xn,Lp)=>{"use strict";xn.__esModule=!0;xn.default=void 0;var Jx=Qx(ir()),Xx=qe();function Qx(t){return t&&t.__esModule?t:{default:t}}function eS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,jc(t,e)}function jc(t,e){return jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},jc(t,e)}var tS=function(t){eS(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Xx.NESTING,i.value="&",i}return e}(Jx.default);xn.default=tS;Lp.exports=xn.default});var Dp=E((Xo,Rp)=>{"use strict";Xo.__esModule=!0;Xo.default=rS;function rS(t){return t.sort(function(e,r){return e-r})}Rp.exports=Xo.default});var qc=E(R=>{"use strict";R.__esModule=!0;R.word=R.tilde=R.tab=R.str=R.space=R.slash=R.singleQuote=R.semicolon=R.plus=R.pipe=R.openSquare=R.openParenthesis=R.newline=R.greaterThan=R.feed=R.equals=R.doubleQuote=R.dollar=R.cr=R.comment=R.comma=R.combinator=R.colon=R.closeSquare=R.closeParenthesis=R.caret=R.bang=R.backslash=R.at=R.asterisk=R.ampersand=void 0;var iS=38;R.ampersand=iS;var sS=42;R.asterisk=sS;var nS=64;R.at=nS;var oS=44;R.comma=oS;var aS=58;R.colon=aS;var lS=59;R.semicolon=lS;var cS=40;R.openParenthesis=cS;var uS=41;R.closeParenthesis=uS;var dS=91;R.openSquare=dS;var hS=93;R.closeSquare=hS;var fS=36;R.dollar=fS;var pS=126;R.tilde=pS;var mS=94;R.caret=mS;var gS=43;R.plus=gS;var bS=61;R.equals=bS;var yS=124;R.pipe=yS;var vS=62;R.greaterThan=vS;var wS=32;R.space=wS;var Np=39;R.singleQuote=Np;var _S=34;R.doubleQuote=_S;var xS=47;R.slash=xS;var SS=33;R.bang=SS;var kS=92;R.backslash=kS;var CS=13;R.cr=CS;var ES=12;R.feed=ES;var TS=10;R.newline=TS;var AS=9;R.tab=AS;var OS=Np;R.str=OS;var $S=-1;R.comment=$S;var PS=-2;R.word=PS;var IS=-3;R.combinator=IS});var Up=E(Sn=>{"use strict";Sn.__esModule=!0;Sn.FIELDS=void 0;Sn.default=US;var T=LS(qc()),Ji,Se;function zp(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(zp=function(s){return s?r:e})(t)}function LS(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=zp(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}var RS=(Ji={},Ji[T.tab]=!0,Ji[T.newline]=!0,Ji[T.cr]=!0,Ji[T.feed]=!0,Ji),DS=(Se={},Se[T.space]=!0,Se[T.tab]=!0,Se[T.newline]=!0,Se[T.cr]=!0,Se[T.feed]=!0,Se[T.ampersand]=!0,Se[T.asterisk]=!0,Se[T.bang]=!0,Se[T.comma]=!0,Se[T.colon]=!0,Se[T.semicolon]=!0,Se[T.openParenthesis]=!0,Se[T.closeParenthesis]=!0,Se[T.openSquare]=!0,Se[T.closeSquare]=!0,Se[T.singleQuote]=!0,Se[T.doubleQuote]=!0,Se[T.plus]=!0,Se[T.pipe]=!0,Se[T.tilde]=!0,Se[T.greaterThan]=!0,Se[T.equals]=!0,Se[T.dollar]=!0,Se[T.caret]=!0,Se[T.slash]=!0,Se),Vc={},Mp="0123456789abcdefABCDEF";for(Qo=0;Qo<Mp.length;Qo++)Vc[Mp.charCodeAt(Qo)]=!0;var Qo;function NS(t,e){var r=e,i;do{if(i=t.charCodeAt(r),DS[i])return r-1;i===T.backslash?r=MS(t,r)+1:r++}while(r<t.length);return r-1}function MS(t,e){var r=e,i=t.charCodeAt(r+1);if(!RS[i])if(Vc[i]){var s=0;do r++,s++,i=t.charCodeAt(r+1);while(Vc[i]&&s<6);s<6&&i===T.space&&r++}else r++;return r}var zS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};Sn.FIELDS=zS;function US(t){var e=[],r=t.css.valueOf(),i=r,s=i.length,n=-1,o=1,a=0,l=0,u,c,d,p,f,m,v,b,y,w,x,_,O;function se(ae,G){if(t.safe)r+=G,y=r.length-1;else throw t.error("Unclosed "+ae,o,a-n,a)}for(;a<s;){switch(u=r.charCodeAt(a),u===T.newline&&(n=a,o+=1),u){case T.space:case T.tab:case T.newline:case T.cr:case T.feed:y=a;do y+=1,u=r.charCodeAt(y),u===T.newline&&(n=y,o+=1);while(u===T.space||u===T.newline||u===T.tab||u===T.cr||u===T.feed);O=T.space,p=o,d=y-n-1,l=y;break;case T.plus:case T.greaterThan:case T.tilde:case T.pipe:y=a;do y+=1,u=r.charCodeAt(y);while(u===T.plus||u===T.greaterThan||u===T.tilde||u===T.pipe);O=T.combinator,p=o,d=a-n,l=y;break;case T.asterisk:case T.ampersand:case T.bang:case T.comma:case T.equals:case T.dollar:case T.caret:case T.openSquare:case T.closeSquare:case T.colon:case T.semicolon:case T.openParenthesis:case T.closeParenthesis:y=a,O=u,p=o,d=a-n,l=y+1;break;case T.singleQuote:case T.doubleQuote:_=u===T.singleQuote?"'":'"',y=a;do for(f=!1,y=r.indexOf(_,y+1),y===-1&&se("quote",_),m=y;r.charCodeAt(m-1)===T.backslash;)m-=1,f=!f;while(f);O=T.str,p=o,d=a-n,l=y+1;break;default:u===T.slash&&r.charCodeAt(a+1)===T.asterisk?(y=r.indexOf("*/",a+2)+1,y===0&&se("comment","*/"),c=r.slice(a,y+1),b=c.split(`
`),v=b.length-1,v>0?(w=o+v,x=y-b[v].length):(w=o,x=n),O=T.comment,o=w,p=w,d=y-x):u===T.slash?(y=a,O=u,p=o,d=a-n,l=y+1):(y=NS(r,a),O=T.word,p=o,d=y-n),l=y+1;break}e.push([O,o,a-n,p,d,a,l]),x&&(n=x,x=null),a=l}return e}});var Zp=E((kn,Hp)=>{"use strict";kn.__esModule=!0;kn.default=void 0;var FS=vt(fc()),Wc=vt(mc()),jS=vt(yc()),Fp=vt(wc()),BS=vt(xc()),qS=vt(Cc()),Hc=vt(Tc()),VS=vt(Oc()),jp=ea(Nc()),WS=vt(zc()),Zc=vt(Fc()),HS=vt(Bc()),ZS=vt(Dp()),k=ea(Up()),I=ea(qc()),GS=ea(qe()),Le=nn(),Qr,Gc;function Wp(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Wp=function(s){return s?r:e})(t)}function ea(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Wp(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function vt(t){return t&&t.__esModule?t:{default:t}}function Bp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function KS(t,e,r){return e&&Bp(t.prototype,e),r&&Bp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Jc=(Qr={},Qr[I.space]=!0,Qr[I.cr]=!0,Qr[I.feed]=!0,Qr[I.newline]=!0,Qr[I.tab]=!0,Qr),YS=Object.assign({},Jc,(Gc={},Gc[I.comment]=!0,Gc));function qp(t){return{line:t[k.FIELDS.START_LINE],column:t[k.FIELDS.START_COL]}}function Vp(t){return{line:t[k.FIELDS.END_LINE],column:t[k.FIELDS.END_COL]}}function ei(t,e,r,i){return{start:{line:t,column:e},end:{line:r,column:i}}}function Xi(t){return ei(t[k.FIELDS.START_LINE],t[k.FIELDS.START_COL],t[k.FIELDS.END_LINE],t[k.FIELDS.END_COL])}function Kc(t,e){if(t)return ei(t[k.FIELDS.START_LINE],t[k.FIELDS.START_COL],e[k.FIELDS.END_LINE],e[k.FIELDS.END_COL])}function Qi(t,e){var r=t[e];if(typeof r=="string")return r.indexOf("\\")!==-1&&((0,Le.ensureObject)(t,"raws"),t[e]=(0,Le.unesc)(r),t.raws[e]===void 0&&(t.raws[e]=r)),t}function Yc(t,e){for(var r=-1,i=[];(r=t.indexOf(e,r+1))!==-1;)i.push(r);return i}function JS(){var t=Array.prototype.concat.apply([],arguments);return t.filter(function(e,r){return r===t.indexOf(e)})}var XS=function(){function t(r,i){i===void 0&&(i={}),this.rule=r,this.options=Object.assign({lossy:!1,safe:!1},i),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,k.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var s=Kc(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new FS.default({source:s}),this.root.errorGenerator=this._errorGenerator();var n=new Wc.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(n),this.current=n,this.loop()}var e=t.prototype;return e._errorGenerator=function(){var i=this;return function(s,n){return typeof i.rule=="string"?new Error(s):i.rule.error(s,n)}},e.attribute=function(){var i=[],s=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[k.FIELDS.TYPE]!==I.closeSquare;)i.push(this.currToken),this.position++;if(this.currToken[k.FIELDS.TYPE]!==I.closeSquare)return this.expected("closing square bracket",this.currToken[k.FIELDS.START_POS]);var n=i.length,o={source:ei(s[1],s[2],this.currToken[3],this.currToken[4]),sourceIndex:s[k.FIELDS.START_POS]};if(n===1&&!~[I.word].indexOf(i[0][k.FIELDS.TYPE]))return this.expected("attribute",i[0][k.FIELDS.START_POS]);for(var a=0,l="",u="",c=null,d=!1;a<n;){var p=i[a],f=this.content(p),m=i[a+1];switch(p[k.FIELDS.TYPE]){case I.space:if(d=!0,this.options.lossy)break;if(c){(0,Le.ensureObject)(o,"spaces",c);var v=o.spaces[c].after||"";o.spaces[c].after=v+f;var b=(0,Le.getProp)(o,"raws","spaces",c,"after")||null;b&&(o.raws.spaces[c].after=b+f)}else l=l+f,u=u+f;break;case I.asterisk:if(m[k.FIELDS.TYPE]===I.equals)o.operator=f,c="operator";else if((!o.namespace||c==="namespace"&&!d)&&m){l&&((0,Le.ensureObject)(o,"spaces","attribute"),o.spaces.attribute.before=l,l=""),u&&((0,Le.ensureObject)(o,"raws","spaces","attribute"),o.raws.spaces.attribute.before=l,u=""),o.namespace=(o.namespace||"")+f;var y=(0,Le.getProp)(o,"raws","namespace")||null;y&&(o.raws.namespace+=f),c="namespace"}d=!1;break;case I.dollar:if(c==="value"){var w=(0,Le.getProp)(o,"raws","value");o.value+="$",w&&(o.raws.value=w+"$");break}case I.caret:m[k.FIELDS.TYPE]===I.equals&&(o.operator=f,c="operator"),d=!1;break;case I.combinator:if(f==="~"&&m[k.FIELDS.TYPE]===I.equals&&(o.operator=f,c="operator"),f!=="|"){d=!1;break}m[k.FIELDS.TYPE]===I.equals?(o.operator=f,c="operator"):!o.namespace&&!o.attribute&&(o.namespace=!0),d=!1;break;case I.word:if(m&&this.content(m)==="|"&&i[a+2]&&i[a+2][k.FIELDS.TYPE]!==I.equals&&!o.operator&&!o.namespace)o.namespace=f,c="namespace";else if(!o.attribute||c==="attribute"&&!d){l&&((0,Le.ensureObject)(o,"spaces","attribute"),o.spaces.attribute.before=l,l=""),u&&((0,Le.ensureObject)(o,"raws","spaces","attribute"),o.raws.spaces.attribute.before=u,u=""),o.attribute=(o.attribute||"")+f;var x=(0,Le.getProp)(o,"raws","attribute")||null;x&&(o.raws.attribute+=f),c="attribute"}else if(!o.value&&o.value!==""||c==="value"&&!(d||o.quoteMark)){var _=(0,Le.unesc)(f),O=(0,Le.getProp)(o,"raws","value")||"",se=o.value||"";o.value=se+_,o.quoteMark=null,(_!==f||O)&&((0,Le.ensureObject)(o,"raws"),o.raws.value=(O||se)+f),c="value"}else{var ae=f==="i"||f==="I";(o.value||o.value==="")&&(o.quoteMark||d)?(o.insensitive=ae,(!ae||f==="I")&&((0,Le.ensureObject)(o,"raws"),o.raws.insensitiveFlag=f),c="insensitive",l&&((0,Le.ensureObject)(o,"spaces","insensitive"),o.spaces.insensitive.before=l,l=""),u&&((0,Le.ensureObject)(o,"raws","spaces","insensitive"),o.raws.spaces.insensitive.before=u,u="")):(o.value||o.value==="")&&(c="value",o.value+=f,o.raws.value&&(o.raws.value+=f))}d=!1;break;case I.str:if(!o.attribute||!o.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:p[k.FIELDS.START_POS]});var G=(0,jp.unescapeValue)(f),ve=G.unescaped,P=G.quoteMark;o.value=ve,o.quoteMark=P,c="value",(0,Le.ensureObject)(o,"raws"),o.raws.value=f,d=!1;break;case I.equals:if(!o.attribute)return this.expected("attribute",p[k.FIELDS.START_POS],f);if(o.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:p[k.FIELDS.START_POS]});o.operator=o.operator?o.operator+f:f,c="operator",d=!1;break;case I.comment:if(c)if(d||m&&m[k.FIELDS.TYPE]===I.space||c==="insensitive"){var ne=(0,Le.getProp)(o,"spaces",c,"after")||"",re=(0,Le.getProp)(o,"raws","spaces",c,"after")||ne;(0,Le.ensureObject)(o,"raws","spaces",c),o.raws.spaces[c].after=re+f}else{var fe=o[c]||"",Ie=(0,Le.getProp)(o,"raws",c)||fe;(0,Le.ensureObject)(o,"raws"),o.raws[c]=Ie+f}else u=u+f;break;default:return this.error('Unexpected "'+f+'" found.',{index:p[k.FIELDS.START_POS]})}a++}Qi(o,"attribute"),Qi(o,"namespace"),this.newNode(new jp.default(o)),this.position++},e.parseWhitespaceEquivalentTokens=function(i){i<0&&(i=this.tokens.length);var s=this.position,n=[],o="",a=void 0;do if(Jc[this.currToken[k.FIELDS.TYPE]])this.options.lossy||(o+=this.content());else if(this.currToken[k.FIELDS.TYPE]===I.comment){var l={};o&&(l.before=o,o=""),a=new Fp.default({value:this.content(),source:Xi(this.currToken),sourceIndex:this.currToken[k.FIELDS.START_POS],spaces:l}),n.push(a)}while(++this.position<i);if(o){if(a)a.spaces.after=o;else if(!this.options.lossy){var u=this.tokens[s],c=this.tokens[this.position-1];n.push(new Hc.default({value:"",source:ei(u[k.FIELDS.START_LINE],u[k.FIELDS.START_COL],c[k.FIELDS.END_LINE],c[k.FIELDS.END_COL]),sourceIndex:u[k.FIELDS.START_POS],spaces:{before:o,after:""}}))}}return n},e.convertWhitespaceNodesToSpace=function(i,s){var n=this;s===void 0&&(s=!1);var o="",a="";i.forEach(function(u){var c=n.lossySpace(u.spaces.before,s),d=n.lossySpace(u.rawSpaceBefore,s);o+=c+n.lossySpace(u.spaces.after,s&&c.length===0),a+=c+u.value+n.lossySpace(u.rawSpaceAfter,s&&d.length===0)}),a===o&&(a=void 0);var l={space:o,rawSpace:a};return l},e.isNamedCombinator=function(i){return i===void 0&&(i=this.position),this.tokens[i+0]&&this.tokens[i+0][k.FIELDS.TYPE]===I.slash&&this.tokens[i+1]&&this.tokens[i+1][k.FIELDS.TYPE]===I.word&&this.tokens[i+2]&&this.tokens[i+2][k.FIELDS.TYPE]===I.slash},e.namedCombinator=function(){if(this.isNamedCombinator()){var i=this.content(this.tokens[this.position+1]),s=(0,Le.unesc)(i).toLowerCase(),n={};s!==i&&(n.value="/"+i+"/");var o=new Zc.default({value:"/"+s+"/",source:ei(this.currToken[k.FIELDS.START_LINE],this.currToken[k.FIELDS.START_COL],this.tokens[this.position+2][k.FIELDS.END_LINE],this.tokens[this.position+2][k.FIELDS.END_COL]),sourceIndex:this.currToken[k.FIELDS.START_POS],raws:n});return this.position=this.position+3,o}else this.unexpected()},e.combinator=function(){var i=this;if(this.content()==="|")return this.namespace();var s=this.locateNextMeaningfulToken(this.position);if(s<0||this.tokens[s][k.FIELDS.TYPE]===I.comma||this.tokens[s][k.FIELDS.TYPE]===I.closeParenthesis){var n=this.parseWhitespaceEquivalentTokens(s);if(n.length>0){var o=this.current.last;if(o){var a=this.convertWhitespaceNodesToSpace(n),l=a.space,u=a.rawSpace;u!==void 0&&(o.rawSpaceAfter+=u),o.spaces.after+=l}else n.forEach(function(O){return i.newNode(O)})}return}var c=this.currToken,d=void 0;s>this.position&&(d=this.parseWhitespaceEquivalentTokens(s));var p;if(this.isNamedCombinator()?p=this.namedCombinator():this.currToken[k.FIELDS.TYPE]===I.combinator?(p=new Zc.default({value:this.content(),source:Xi(this.currToken),sourceIndex:this.currToken[k.FIELDS.START_POS]}),this.position++):Jc[this.currToken[k.FIELDS.TYPE]]||d||this.unexpected(),p){if(d){var f=this.convertWhitespaceNodesToSpace(d),m=f.space,v=f.rawSpace;p.spaces.before=m,p.rawSpaceBefore=v}}else{var b=this.convertWhitespaceNodesToSpace(d,!0),y=b.space,w=b.rawSpace;w||(w=y);var x={},_={spaces:{}};y.endsWith(" ")&&w.endsWith(" ")?(x.before=y.slice(0,y.length-1),_.spaces.before=w.slice(0,w.length-1)):y.startsWith(" ")&&w.startsWith(" ")?(x.after=y.slice(1),_.spaces.after=w.slice(1)):_.value=w,p=new Zc.default({value:" ",source:Kc(c,this.tokens[this.position-1]),sourceIndex:c[k.FIELDS.START_POS],spaces:x,raws:_})}return this.currToken&&this.currToken[k.FIELDS.TYPE]===I.space&&(p.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(p)},e.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var i=new Wc.default({source:{start:qp(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][k.FIELDS.START_POS]});this.current.parent.append(i),this.current=i,this.position++},e.comment=function(){var i=this.currToken;this.newNode(new Fp.default({value:this.content(),source:Xi(i),sourceIndex:i[k.FIELDS.START_POS]})),this.position++},e.error=function(i,s){throw this.root.error(i,s)},e.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[k.FIELDS.START_POS]})},e.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[k.FIELDS.START_POS])},e.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[k.FIELDS.START_POS])},e.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[k.FIELDS.START_POS])},e.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[k.FIELDS.START_POS])},e.namespace=function(){var i=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[k.FIELDS.TYPE]===I.word)return this.position++,this.word(i);if(this.nextToken[k.FIELDS.TYPE]===I.asterisk)return this.position++,this.universal(i);this.unexpectedPipe()},e.nesting=function(){if(this.nextToken){var i=this.content(this.nextToken);if(i==="|"){this.position++;return}}var s=this.currToken;this.newNode(new HS.default({value:this.content(),source:Xi(s),sourceIndex:s[k.FIELDS.START_POS]})),this.position++},e.parentheses=function(){var i=this.current.last,s=1;if(this.position++,i&&i.type===GS.PSEUDO){var n=new Wc.default({source:{start:qp(this.tokens[this.position])},sourceIndex:this.tokens[this.position][k.FIELDS.START_POS]}),o=this.current;for(i.append(n),this.current=n;this.position<this.tokens.length&&s;)this.currToken[k.FIELDS.TYPE]===I.openParenthesis&&s++,this.currToken[k.FIELDS.TYPE]===I.closeParenthesis&&s--,s?this.parse():(this.current.source.end=Vp(this.currToken),this.current.parent.source.end=Vp(this.currToken),this.position++);this.current=o}else{for(var a=this.currToken,l="(",u;this.position<this.tokens.length&&s;)this.currToken[k.FIELDS.TYPE]===I.openParenthesis&&s++,this.currToken[k.FIELDS.TYPE]===I.closeParenthesis&&s--,u=this.currToken,l+=this.parseParenthesisToken(this.currToken),this.position++;i?i.appendToPropertyAndEscape("value",l,l):this.newNode(new Hc.default({value:l,source:ei(a[k.FIELDS.START_LINE],a[k.FIELDS.START_COL],u[k.FIELDS.END_LINE],u[k.FIELDS.END_COL]),sourceIndex:a[k.FIELDS.START_POS]}))}if(s)return this.expected("closing parenthesis",this.currToken[k.FIELDS.START_POS])},e.pseudo=function(){for(var i=this,s="",n=this.currToken;this.currToken&&this.currToken[k.FIELDS.TYPE]===I.colon;)s+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[k.FIELDS.TYPE]===I.word)this.splitWord(!1,function(o,a){s+=o,i.newNode(new VS.default({value:s,source:Kc(n,i.currToken),sourceIndex:n[k.FIELDS.START_POS]})),a>1&&i.nextToken&&i.nextToken[k.FIELDS.TYPE]===I.openParenthesis&&i.error("Misplaced parenthesis.",{index:i.nextToken[k.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[k.FIELDS.START_POS])},e.space=function(){var i=this.content();this.position===0||this.prevToken[k.FIELDS.TYPE]===I.comma||this.prevToken[k.FIELDS.TYPE]===I.openParenthesis||this.current.nodes.every(function(s){return s.type==="comment"})?(this.spaces=this.optionalSpace(i),this.position++):this.position===this.tokens.length-1||this.nextToken[k.FIELDS.TYPE]===I.comma||this.nextToken[k.FIELDS.TYPE]===I.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(i),this.position++):this.combinator()},e.string=function(){var i=this.currToken;this.newNode(new Hc.default({value:this.content(),source:Xi(i),sourceIndex:i[k.FIELDS.START_POS]})),this.position++},e.universal=function(i){var s=this.nextToken;if(s&&this.content(s)==="|")return this.position++,this.namespace();var n=this.currToken;this.newNode(new WS.default({value:this.content(),source:Xi(n),sourceIndex:n[k.FIELDS.START_POS]}),i),this.position++},e.splitWord=function(i,s){for(var n=this,o=this.nextToken,a=this.content();o&&~[I.dollar,I.caret,I.equals,I.word].indexOf(o[k.FIELDS.TYPE]);){this.position++;var l=this.content();if(a+=l,l.lastIndexOf("\\")===l.length-1){var u=this.nextToken;u&&u[k.FIELDS.TYPE]===I.space&&(a+=this.requiredSpace(this.content(u)),this.position++)}o=this.nextToken}var c=Yc(a,".").filter(function(m){var v=a[m-1]==="\\",b=/^\d+\.\d+%$/.test(a);return!v&&!b}),d=Yc(a,"#").filter(function(m){return a[m-1]!=="\\"}),p=Yc(a,"#{");p.length&&(d=d.filter(function(m){return!~p.indexOf(m)}));var f=(0,ZS.default)(JS([0].concat(c,d)));f.forEach(function(m,v){var b=f[v+1]||a.length,y=a.slice(m,b);if(v===0&&s)return s.call(n,y,f.length);var w,x=n.currToken,_=x[k.FIELDS.START_POS]+f[v],O=ei(x[1],x[2]+m,x[3],x[2]+(b-1));if(~c.indexOf(m)){var se={value:y.slice(1),source:O,sourceIndex:_};w=new jS.default(Qi(se,"value"))}else if(~d.indexOf(m)){var ae={value:y.slice(1),source:O,sourceIndex:_};w=new BS.default(Qi(ae,"value"))}else{var G={value:y,source:O,sourceIndex:_};Qi(G,"value"),w=new qS.default(G)}n.newNode(w,i),i=null}),this.position++},e.word=function(i){var s=this.nextToken;return s&&this.content(s)==="|"?(this.position++,this.namespace()):this.splitWord(i)},e.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},e.parse=function(i){switch(this.currToken[k.FIELDS.TYPE]){case I.space:this.space();break;case I.comment:this.comment();break;case I.openParenthesis:this.parentheses();break;case I.closeParenthesis:i&&this.missingParenthesis();break;case I.openSquare:this.attribute();break;case I.dollar:case I.caret:case I.equals:case I.word:this.word();break;case I.colon:this.pseudo();break;case I.comma:this.comma();break;case I.asterisk:this.universal();break;case I.ampersand:this.nesting();break;case I.slash:case I.combinator:this.combinator();break;case I.str:this.string();break;case I.closeSquare:this.missingSquareBracket();case I.semicolon:this.missingBackslash();default:this.unexpected()}},e.expected=function(i,s,n){if(Array.isArray(i)){var o=i.pop();i=i.join(", ")+" or "+o}var a=/^[aeiou]/.test(i[0])?"an":"a";return n?this.error("Expected "+a+" "+i+', found "'+n+'" instead.',{index:s}):this.error("Expected "+a+" "+i+".",{index:s})},e.requiredSpace=function(i){return this.options.lossy?" ":i},e.optionalSpace=function(i){return this.options.lossy?"":i},e.lossySpace=function(i,s){return this.options.lossy?s?" ":"":i},e.parseParenthesisToken=function(i){var s=this.content(i);return i[k.FIELDS.TYPE]===I.space?this.requiredSpace(s):s},e.newNode=function(i,s){return s&&(/^ +$/.test(s)&&(this.options.lossy||(this.spaces=(this.spaces||"")+s),s=!0),i.namespace=s,Qi(i,"namespace")),this.spaces&&(i.spaces.before=this.spaces,this.spaces=""),this.current.append(i)},e.content=function(i){return i===void 0&&(i=this.currToken),this.css.slice(i[k.FIELDS.START_POS],i[k.FIELDS.END_POS])},e.locateNextMeaningfulToken=function(i){i===void 0&&(i=this.position+1);for(var s=i;s<this.tokens.length;)if(YS[this.tokens[s][k.FIELDS.TYPE]]){s++;continue}else return s;return-1},KS(t,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),t}();kn.default=XS;Hp.exports=kn.default});var Kp=E((Cn,Gp)=>{"use strict";Cn.__esModule=!0;Cn.default=void 0;var QS=ek(Zp());function ek(t){return t&&t.__esModule?t:{default:t}}var tk=function(){function t(r,i){this.func=r||function(){},this.funcRes=null,this.options=i}var e=t.prototype;return e._shouldUpdateSelector=function(i,s){s===void 0&&(s={});var n=Object.assign({},this.options,s);return n.updateSelector===!1?!1:typeof i!="string"},e._isLossy=function(i){i===void 0&&(i={});var s=Object.assign({},this.options,i);return s.lossless===!1},e._root=function(i,s){s===void 0&&(s={});var n=new QS.default(i,this._parseOptions(s));return n.root},e._parseOptions=function(i){return{lossy:this._isLossy(i)}},e._run=function(i,s){var n=this;return s===void 0&&(s={}),new Promise(function(o,a){try{var l=n._root(i,s);Promise.resolve(n.func(l)).then(function(u){var c=void 0;return n._shouldUpdateSelector(i,s)&&(c=l.toString(),i.selector=c),{transform:u,root:l,string:c}}).then(o,a)}catch(u){a(u);return}})},e._runSync=function(i,s){s===void 0&&(s={});var n=this._root(i,s),o=this.func(n);if(o&&typeof o.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return s.updateSelector&&typeof i!="string"&&(a=n.toString(),i.selector=a),{transform:o,root:n,string:a}},e.ast=function(i,s){return this._run(i,s).then(function(n){return n.root})},e.astSync=function(i,s){return this._runSync(i,s).root},e.transform=function(i,s){return this._run(i,s).then(function(n){return n.transform})},e.transformSync=function(i,s){return this._runSync(i,s).transform},e.process=function(i,s){return this._run(i,s).then(function(n){return n.string||n.root.toString()})},e.processSync=function(i,s){var n=this._runSync(i,s);return n.string||n.root.toString()},t}();Cn.default=tk;Gp.exports=Cn.default});var Yp=E(Te=>{"use strict";Te.__esModule=!0;Te.universal=Te.tag=Te.string=Te.selector=Te.root=Te.pseudo=Te.nesting=Te.id=Te.comment=Te.combinator=Te.className=Te.attribute=void 0;var rk=wt(Nc()),ik=wt(yc()),sk=wt(Fc()),nk=wt(wc()),ok=wt(xc()),ak=wt(Bc()),lk=wt(Oc()),ck=wt(fc()),uk=wt(mc()),dk=wt(Tc()),hk=wt(Cc()),fk=wt(zc());function wt(t){return t&&t.__esModule?t:{default:t}}var pk=function(e){return new rk.default(e)};Te.attribute=pk;var mk=function(e){return new ik.default(e)};Te.className=mk;var gk=function(e){return new sk.default(e)};Te.combinator=gk;var bk=function(e){return new nk.default(e)};Te.comment=bk;var yk=function(e){return new ok.default(e)};Te.id=yk;var vk=function(e){return new ak.default(e)};Te.nesting=vk;var wk=function(e){return new lk.default(e)};Te.pseudo=wk;var _k=function(e){return new ck.default(e)};Te.root=_k;var xk=function(e){return new uk.default(e)};Te.selector=xk;var Sk=function(e){return new dk.default(e)};Te.string=Sk;var kk=function(e){return new hk.default(e)};Te.tag=kk;var Ck=function(e){return new fk.default(e)};Te.universal=Ck});var em=E(de=>{"use strict";de.__esModule=!0;de.isComment=de.isCombinator=de.isClassName=de.isAttribute=void 0;de.isContainer=Mk;de.isIdentifier=void 0;de.isNamespace=zk;de.isNesting=void 0;de.isNode=Xc;de.isPseudo=void 0;de.isPseudoClass=Nk;de.isPseudoElement=Qp;de.isUniversal=de.isTag=de.isString=de.isSelector=de.isRoot=void 0;var Re=qe(),nt,Ek=(nt={},nt[Re.ATTRIBUTE]=!0,nt[Re.CLASS]=!0,nt[Re.COMBINATOR]=!0,nt[Re.COMMENT]=!0,nt[Re.ID]=!0,nt[Re.NESTING]=!0,nt[Re.PSEUDO]=!0,nt[Re.ROOT]=!0,nt[Re.SELECTOR]=!0,nt[Re.STRING]=!0,nt[Re.TAG]=!0,nt[Re.UNIVERSAL]=!0,nt);function Xc(t){return typeof t=="object"&&Ek[t.type]}function _t(t,e){return Xc(e)&&e.type===t}var Jp=_t.bind(null,Re.ATTRIBUTE);de.isAttribute=Jp;var Tk=_t.bind(null,Re.CLASS);de.isClassName=Tk;var Ak=_t.bind(null,Re.COMBINATOR);de.isCombinator=Ak;var Ok=_t.bind(null,Re.COMMENT);de.isComment=Ok;var $k=_t.bind(null,Re.ID);de.isIdentifier=$k;var Pk=_t.bind(null,Re.NESTING);de.isNesting=Pk;var Qc=_t.bind(null,Re.PSEUDO);de.isPseudo=Qc;var Ik=_t.bind(null,Re.ROOT);de.isRoot=Ik;var Lk=_t.bind(null,Re.SELECTOR);de.isSelector=Lk;var Rk=_t.bind(null,Re.STRING);de.isString=Rk;var Xp=_t.bind(null,Re.TAG);de.isTag=Xp;var Dk=_t.bind(null,Re.UNIVERSAL);de.isUniversal=Dk;function Qp(t){return Qc(t)&&t.value&&(t.value.startsWith("::")||t.value.toLowerCase()===":before"||t.value.toLowerCase()===":after"||t.value.toLowerCase()===":first-letter"||t.value.toLowerCase()===":first-line")}function Nk(t){return Qc(t)&&!Qp(t)}function Mk(t){return!!(Xc(t)&&t.walk)}function zk(t){return Jp(t)||Xp(t)}});var tm=E(Ut=>{"use strict";Ut.__esModule=!0;var eu=qe();Object.keys(eu).forEach(function(t){t==="default"||t==="__esModule"||t in Ut&&Ut[t]===eu[t]||(Ut[t]=eu[t])});var tu=Yp();Object.keys(tu).forEach(function(t){t==="default"||t==="__esModule"||t in Ut&&Ut[t]===tu[t]||(Ut[t]=tu[t])});var ru=em();Object.keys(ru).forEach(function(t){t==="default"||t==="__esModule"||t in Ut&&Ut[t]===ru[t]||(Ut[t]=ru[t])})});var sm=E((En,im)=>{"use strict";En.__esModule=!0;En.default=void 0;var Uk=Bk(Kp()),Fk=jk(tm());function rm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(rm=function(s){return s?r:e})(t)}function jk(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=rm(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function Bk(t){return t&&t.__esModule?t:{default:t}}var iu=function(e){return new Uk.default(e)};Object.assign(iu,Fk);delete iu.__esModule;var qk=iu;En.default=qk;im.exports=En.default});var dm=E((u$,lu)=>{var{AtRule:Vk,Rule:om}=Ki(),am=sm();function ou(t,e){let r;try{am(i=>{r=i}).processSync(t)}catch(i){throw t.includes(":")?e?e.error("Missed semicolon"):i:e?e.error(i.message):i}return r.at(0)}function lm(t,e){let r=!1;return t.each(i=>{if(i.type==="nesting"){let s=e.clone({});i.value!=="&"?i.replaceWith(ou(i.value.replace("&",s.toString()))):i.replaceWith(s),r=!0}else"nodes"in i&&i.nodes&&lm(i,e)&&(r=!0)}),r}function cm(t,e){let r=[];for(let i of t.selectors){let s=ou(i,t);for(let n of e.selectors){if(!n)continue;let o=ou(n,e);lm(o,s)||(o.prepend(am.combinator({value:" "})),o.prepend(s.clone({}))),r.push(o.toString())}}return r}function ta(t,e){if(t.prev()?.type!=="comment")return e.after(t),t;let r=t.prev(),i=/[*]\/ *\n.*{/;return t.parent.toString().match(i)?e.after(t).after(r):e.after(t),t}function Wk(t){return function e(r,i,s,n=s){let o=[];if(i.each(a=>{a.type==="rule"&&s?n&&(a.selectors=cm(r,a)):a.type==="atrule"&&a.nodes?t[a.name]?e(r,a,n):i[au]!==!1&&o.push(a):o.push(a)}),s&&o.length){let a=r.clone({nodes:[]});for(let l of o)a.append(l);i.prepend(a)}}}function Hk(t,e,r){let i=new om({nodes:[],selector:t});return i.append(e),r.after(i),i}function su(t,e,r,i=!0){return e.length?(r=Hk(t,e,r),i&&(e=[]),[r,e]):[r,e]}function nm(t,e=""){let r=t.concat(e),i={};for(let s of r)i[s.replace(/^@/,"")]=!0;return i}function Zk(t){t=t.trim();let e=t.match(/^\((.*)\)$/);if(!e)return{selector:t,type:"basic"};let r=e[1].match(/^(with(?:out)?):(.+)$/);if(r){let i=r[1]==="with",s=Object.fromEntries(r[2].trim().split(/\s+/).map(o=>[o,!0]));if(i&&s.all)return{type:"noop"};let n=o=>!!s[o];return s.all?n=()=>!0:i&&(n=o=>o==="all"?!1:!s[o]),{escapes:n,type:"withrules"}}return{type:"unknown"}}function Gk(t){let e=[],r=t.parent;for(;r&&r instanceof Vk;)e.push(r),r=r.parent;return e}function Kk(t){let e=t[um];if(!e)t.after(t.nodes);else{let r=t.nodes,i,s=-1,n,o,a,l=Gk(t);if(l.forEach((u,c)=>{if(e(u.name))i=u,s=c,o=a;else{let d=a;a=u.clone({nodes:[]}),d&&a.append(d),n=n||a}}),i?o?(n.append(r),i.after(o)):i.after(r):t.after(r),t.next()&&i){let u;l.slice(0,s+1).forEach((c,d,p)=>{let f=u;u=c.clone({nodes:[]}),f&&u.append(f);let m=[],b=(p[d-1]||t).next();for(;b;)m.push(b),b=b.next();u.append(m)}),u&&(o||r[r.length-1]).after(u)}}t.remove()}var au=Symbol("rootRuleMergeSel"),um=Symbol("rootRuleEscapes");function Yk(t){let{params:e}=t,{escapes:r,selector:i,type:s}=Zk(e);if(s==="unknown")throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);if(s==="basic"&&i){let n=new om({nodes:t.nodes,selector:i});t.removeAll(),t.append(n)}t[um]=r,t[au]=r?!r("all"):s==="noop"}var nu=Symbol("hasRootRule");lu.exports=(t={})=>{let e=nm(["media","supports","layer","container","starting-style"],t.bubble),r=Wk(e),i=nm(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],t.unwrap),s=(t.rootRuleName||"at-root").replace(/^@/,""),n=t.preserveEmpty;return{Once(o){o.walkAtRules(s,a=>{Yk(a),o[nu]=!0})},postcssPlugin:"postcss-nested",RootExit(o){o[nu]&&(o.walkAtRules(s,Kk),o[nu]=!1)},Rule(o){let a=!1,l=o,u=!1,c=[];o.each(d=>{switch(d.type){case"atrule":[l,c]=su(o.selector,c,l),d.name===s?(a=!0,r(o,d,!0,d[au]),l=ta(d,l)):e[d.name]?(u=!0,a=!0,r(o,d,!0),l=ta(d,l)):i[d.name]?(u=!0,a=!0,r(o,d,!1),l=ta(d,l)):u&&c.push(d);break;case"decl":u&&c.push(d);break;case"rule":[l,c]=su(o.selector,c,l),u=!0,a=!0,d.selectors=cm(o,d),l=ta(d,l);break}}),su(o.selector,c,l,!1),a&&n!==!0&&(o.raws.semicolon=!0,o.nodes.length===0&&o.remove())}}};lu.exports.postcss=!0});var jg=E((PP,Fg)=>{"use strict";Fg.exports=function(t,e){e||(e={}),typeof e=="function"&&(e={cmp:e});var r=typeof e.cycles=="boolean"?e.cycles:!1,i=e.cmp&&function(n){return function(o){return function(a,l){var u={key:a,value:o[a]},c={key:l,value:o[l]};return n(u,c)}}}(e.cmp),s=[];return function n(o){if(o&&o.toJSON&&typeof o.toJSON=="function"&&(o=o.toJSON()),o!==void 0){if(typeof o=="number")return isFinite(o)?""+o:"null";if(typeof o!="object")return JSON.stringify(o);var a,l;if(Array.isArray(o)){for(l="[",a=0;a<o.length;a++)a&&(l+=","),l+=n(o[a])||"null";return l+"]"}if(o===null)return"null";if(s.indexOf(o)!==-1){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var u=s.push(o)-1,c=Object.keys(o).sort(i&&i(o));for(l="",a=0;a<c.length;a++){var d=c[a],p=n(o[d]);p&&(l&&(l+=","),l+=JSON.stringify(d)+":"+p)}return s.splice(u,1),"{"+l+"}"}}(t)}});var qg=E((IP,Bg)=>{"use strict";Bg.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var i,s,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(s=i;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(s of e.entries())if(!r.has(s[0]))return!1;for(s of e.entries())if(!t(s[1],r.get(s[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(s of e.entries())if(!r.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=r.length)return!1;for(s=i;s--!==0;)if(e[s]!==r[s])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),i=n.length,i!==Object.keys(r).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=i;s--!==0;){var o=n[s];if(!t(e[o],r[o]))return!1}return!0}return e!==e&&r!==r}});function Fv(t){return Object.keys(t).reduce((r,i)=>{let s=t[i];return r[i]=Object.assign({},s),qd(s.value)&&!Wv(s.value)&&!Array.isArray(s.value)&&(r[i].value=Object.assign({},s.value)),Array.isArray(s.value)&&(r[i].value=s.value.slice(0)),r},{})}function jv(t){return t?Object.keys(t).reduce((r,i)=>{let s=t[i];return r[i]=qd(s)&&"value"in s?s:{value:s},r[i].attribute||(r[i].attribute=Vv(i)),r[i].parse="parse"in r[i]?r[i].parse:typeof r[i].value!="string",r},{}):{}}function Bv(t){return Object.keys(t).reduce((r,i)=>(r[i]=t[i].value,r),{})}function qv(t,e){let r=Fv(e);return Object.keys(e).forEach(s=>{let n=r[s],o=t.getAttribute(n.attribute),a=t[s];o!=null&&(n.value=n.parse?Bd(o):o),a!=null&&(n.value=Array.isArray(a)?a.slice(0):a),n.reflect&&jd(t,n.attribute,n.value,!!n.parse),Object.defineProperty(t,s,{get(){return n.value},set(l){let u=n.value;n.value=l,n.reflect&&jd(this,n.attribute,n.value,!!n.parse);for(let c=0,d=this.__propertyChangedCallbacks.length;c<d;c++)this.__propertyChangedCallbacks[c](s,l,u)},enumerable:!0,configurable:!0})}),r}function Bd(t){if(t)try{return JSON.parse(t)}catch{return t}}function jd(t,e,r,i){if(r==null||r===!1)return t.removeAttribute(e);let s=i?JSON.stringify(r):r;t.__updating[e]=!0,s==="true"&&(s=""),t.setAttribute(e,s),Promise.resolve().then(()=>delete t.__updating[e])}function Vv(t){return t.replace(/\.?([A-Z]+)/g,(e,r)=>"-"+r.toLowerCase()).replace("_","-").replace(/^-/,"")}function qd(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function Wv(t){return Object.prototype.toString.call(t)==="[object Function]"}function Hv(t){return typeof t=="function"&&t.toString().indexOf("class")===0}var Sl;function Zv(t,e){let r=Object.keys(e);return class extends t{static get observedAttributes(){return r.map(s=>e[s].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=qv(this,e);let s=Bv(this.props),n=this.Component,o=Sl;try{Sl=this,this.__initialized=!0,Hv(n)?new n(s,{element:this}):n(s,{element:this})}finally{Sl=o}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let s=null;for(;s=this.__releaseCallbacks.pop();)s(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(s,n,o){if(this.__initialized&&!this.__updating[s]&&(s=this.lookupProp(s),s in e)){if(o==null&&!this[s])return;this[s]=e[s].parse?Bd(o):o}}lookupProp(s){if(e)return r.find(n=>s===n||s===e[n].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(s){this.__releaseCallbacks.push(s)}addPropertyChangedCallback(s){this.__propertyChangedCallbacks.push(s)}}}var cA=Symbol("element-context");function Vd(t,e={},r={}){let{BaseElement:i=HTMLElement,extension:s,customElements:n=window.customElements}=r;return o=>{if(!t)throw new Error("tag is required to register a Component");let a=n.get(t);return a?(a.prototype.Component=o,a):(a=Zv(i,jv(e)),a.prototype.Component=o,a.prototype.registeredTag=t,n.define(t,a,s),a)}}var K={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Wd(this.context.count)},getNextContextId(){return Wd(this.context.count++)}};function Wd(t){let e=String(t),r=e.length-1;return K.context.id+(r?String.fromCharCode(96+r):"")+e}function Hr(t){K.context=t}function Gv(){return{...K.context,id:K.getNextContextId(),count:0}}var Kv=(t,e)=>t===e,vr=Symbol("solid-proxy");var _o=Symbol("solid-track"),dA=Symbol("solid-dev-component"),vo={equals:Kv},Ls=null,Jd=ih,dt=1,Rs=2,Xd={owned:null,cleanups:null,context:null,owner:null},kl={},ie=null,C=null,Ui=null,zi=null,we=null,Me=null,ze=null,xo=0;function Zr(t,e){let r=we,i=ie,s=t.length===0,n=e===void 0?i:e,o=s?Xd:{owned:null,cleanups:null,context:n?n.context:null,owner:n},a=s?t:()=>t(()=>Ze(()=>yr(o)));ie=o,we=null;try{return ut(a,!0)}finally{we=r,ie=i}}function be(t,e){e=e?Object.assign({},vo,e):vo;let r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(C&&C.running&&C.sources.has(r)?s=s(r.tValue):s=s(r.value)),rh(r,s));return[th.bind(r),i]}function Hd(t,e,r){let i=Ms(t,e,!0,dt);Ui&&C&&C.running?Me.push(i):Bi(i)}function me(t,e,r){let i=Ms(t,e,!1,dt);Ui&&C&&C.running?Me.push(i):Bi(i)}function Fi(t,e,r){Jd=iw;let i=Ms(t,e,!1,dt),s=Gr&&Kr(Gr);s&&(i.suspense=s),(!r||!r.render)&&(i.user=!0),ze?ze.push(i):Bi(i)}function pe(t,e,r){r=r?Object.assign({},vo,r):vo;let i=Ms(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,Ui&&C&&C.running?(i.tState=dt,Me.push(i)):Bi(i),th.bind(i)}function Yv(t){return t&&typeof t=="object"&&"then"in t}function st(t,e,r){let i,s,n;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,s=t,n=e||{}):(i=t,s=e,n=r||{});let o=null,a=kl,l=null,u=!1,c=!1,d="initialValue"in n,p=typeof i=="function"&&pe(i),f=new Set,[m,v]=(n.storage||be)(n.initialValue),[b,y]=be(void 0),[w,x]=be(void 0,{equals:!1}),[_,O]=be(d?"ready":"unresolved");K.context&&(l=K.getNextContextId(),n.ssrLoadFrom==="initial"?a=n.initialValue:K.load&&K.has(l)&&(a=K.load(l)));function se(P,ne,re,fe){return o===P&&(o=null,fe!==void 0&&(d=!0),(P===a||ne===a)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(fe,{value:ne})),a=kl,C&&P&&u?(C.promises.delete(P),u=!1,ut(()=>{C.running=!0,ae(ne,re)},!1)):ae(ne,re)),ne}function ae(P,ne){ut(()=>{ne===void 0&&v(()=>P),O(ne!==void 0?"errored":d?"ready":"unresolved"),y(ne);for(let re of f.keys())re.decrement();f.clear()},!1)}function G(){let P=Gr&&Kr(Gr),ne=m(),re=b();if(re!==void 0&&!o)throw re;return we&&!we.user&&P&&Hd(()=>{w(),o&&(P.resolved&&C&&u?C.promises.add(o):f.has(P)||(P.increment(),f.add(P)))}),ne}function ve(P=!0){if(P!==!1&&c)return;c=!1;let ne=p?p():i;if(u=C&&C.running,ne==null||ne===!1){se(o,Ze(m));return}C&&o&&C.promises.delete(o);let re=a!==kl?a:Ze(()=>s(ne,{value:m(),refetching:P}));return Yv(re)?(o=re,"value"in re?(re.status==="success"?se(o,re.value,void 0,ne):se(o,void 0,Cl(re.value),ne),re):(c=!0,queueMicrotask(()=>c=!1),ut(()=>{O(d?"refreshing":"pending"),x()},!1),re.then(fe=>se(re,fe,void 0,ne),fe=>se(re,void 0,Cl(fe),ne)))):(se(o,re,void 0,ne),re)}return Object.defineProperties(G,{state:{get:()=>_()},error:{get:()=>b()},loading:{get(){let P=_();return P==="pending"||P==="refreshing"}},latest:{get(){if(!d)return G();let P=b();if(P&&!o)throw P;return m()}}}),p?Hd(()=>ve(!1)):ve(!1),[G,{refetch:ve,mutate:v}]}function Qd(t){return ut(t,!1)}function Ze(t){if(!zi&&we===null)return t();let e=we;we=null;try{return zi?zi.untrack(t):t()}finally{we=e}}function Ns(t){return ie===null||(ie.cleanups===null?ie.cleanups=[t]:ie.cleanups.push(t)),t}function Jv(t,e){Ls||(Ls=Symbol("error")),ie=Ms(void 0,void 0,!0),ie.context={...ie.context,[Ls]:[e]},C&&C.running&&C.sources.add(ie);try{return t()}catch(r){ko(r)}finally{ie=ie.owner}}function So(){return we}function F(){return ie}function Xv(t){if(C&&C.running)return t(),C.done;let e=we,r=ie;return Promise.resolve().then(()=>{we=e,ie=r;let i;return(Ui||Gr)&&(i=C||(C={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(s=>i.resolve=s)),i.running=!0),ut(t,!1),we=ie=null,i?i.done:void 0})}var[hA,Zd]=be(!1);function Qv(t){ze.push.apply(ze,t),t.length=0}function ji(t,e){let r=Symbol("context");return{id:r,Provider:sw(r),defaultValue:t}}function Kr(t){let e;return ie&&ie.context&&(e=ie.context[t.id])!==void 0?e:t.defaultValue}function eh(t){let e=pe(t),r=pe(()=>El(e()));return r.toArray=()=>{let i=r();return Array.isArray(i)?i:i!=null?[i]:[]},r}var Gr;function ew(){return Gr||(Gr=ji())}function th(){let t=C&&C.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===dt)Bi(this);else{let e=Me;Me=null,ut(()=>wo(this),!1),Me=e}if(we){let e=this.observers?this.observers.length:0;we.sources?(we.sources.push(this),we.sourceSlots.push(e)):(we.sources=[this],we.sourceSlots=[e]),this.observers?(this.observers.push(we),this.observerSlots.push(we.sources.length-1)):(this.observers=[we],this.observerSlots=[we.sources.length-1])}return t&&C.sources.has(this)?this.tValue:this.value}function rh(t,e,r){let i=C&&C.running&&C.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(i,e)){if(C){let s=C.running;(s||!r&&C.sources.has(t))&&(C.sources.add(t),t.tValue=e),s||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&ut(()=>{for(let s=0;s<t.observers.length;s+=1){let n=t.observers[s],o=C&&C.running;o&&C.disposed.has(n)||((o?!n.tState:!n.state)&&(n.pure?Me.push(n):ze.push(n),n.observers&&sh(n)),o?n.tState=dt:n.state=dt)}if(Me.length>1e6)throw Me=[],new Error},!1)}return e}function Bi(t){if(!t.fn)return;yr(t);let e=xo;Gd(t,C&&C.running&&C.sources.has(t)?t.tValue:t.value,e),C&&!C.running&&C.sources.has(t)&&queueMicrotask(()=>{ut(()=>{C&&(C.running=!0),we=ie=t,Gd(t,t.tValue,e),we=ie=null},!1)})}function Gd(t,e,r){let i,s=ie,n=we;we=ie=t;try{i=t.fn(e)}catch(o){return t.pure&&(C&&C.running?(t.tState=dt,t.tOwned&&t.tOwned.forEach(yr),t.tOwned=void 0):(t.state=dt,t.owned&&t.owned.forEach(yr),t.owned=null)),t.updatedAt=r+1,ko(o)}finally{we=n,ie=s}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?rh(t,i,!0):C&&C.running&&t.pure?(C.sources.add(t),t.tValue=i):t.value=i,t.updatedAt=r)}function Ms(t,e,r,i=dt,s){let n={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ie,context:ie?ie.context:null,pure:r};if(C&&C.running&&(n.state=0,n.tState=i),ie===null||ie!==Xd&&(C&&C.running&&ie.pure?ie.tOwned?ie.tOwned.push(n):ie.tOwned=[n]:ie.owned?ie.owned.push(n):ie.owned=[n]),zi&&n.fn){let[o,a]=be(void 0,{equals:!1}),l=zi.factory(n.fn,a);Ns(()=>l.dispose());let u=()=>Xv(a).then(()=>c.dispose()),c=zi.factory(n.fn,u);n.fn=d=>(o(),C&&C.running?c.track(d):l.track(d))}return n}function Ds(t){let e=C&&C.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===Rs)return wo(t);if(t.suspense&&Ze(t.suspense.inFallback))return t.suspense.effects.push(t);let r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<xo);){if(e&&C.disposed.has(t))return;(e?t.tState:t.state)&&r.push(t)}for(let i=r.length-1;i>=0;i--){if(t=r[i],e){let s=t,n=r[i+1];for(;(s=s.owner)&&s!==n;)if(C.disposed.has(s))return}if((e?t.tState:t.state)===dt)Bi(t);else if((e?t.tState:t.state)===Rs){let s=Me;Me=null,ut(()=>wo(t,r[0]),!1),Me=s}}}function ut(t,e){if(Me)return t();let r=!1;e||(Me=[]),ze?r=!0:ze=[],xo++;try{let i=t();return tw(r),i}catch(i){r||(ze=null),Me=null,ko(i)}}function tw(t){if(Me&&(Ui&&C&&C.running?rw(Me):ih(Me),Me=null),t)return;let e;if(C){if(!C.promises.size&&!C.queue.size){let i=C.sources,s=C.disposed;ze.push.apply(ze,C.effects),e=C.resolve;for(let n of ze)"tState"in n&&(n.state=n.tState),delete n.tState;C=null,ut(()=>{for(let n of s)yr(n);for(let n of i){if(n.value=n.tValue,n.owned)for(let o=0,a=n.owned.length;o<a;o++)yr(n.owned[o]);n.tOwned&&(n.owned=n.tOwned),delete n.tValue,delete n.tOwned,n.tState=0}Zd(!1)},!1)}else if(C.running){C.running=!1,C.effects.push.apply(C.effects,ze),ze=null,Zd(!0);return}}let r=ze;ze=null,r.length&&ut(()=>Jd(r),!1),e&&e()}function ih(t){for(let e=0;e<t.length;e++)Ds(t[e])}function rw(t){for(let e=0;e<t.length;e++){let r=t[e],i=C.queue;i.has(r)||(i.add(r),Ui(()=>{i.delete(r),ut(()=>{C.running=!0,Ds(r)},!1),C&&(C.running=!1)}))}}function iw(t){let e,r=0;for(e=0;e<t.length;e++){let i=t[e];i.user?t[r++]=i:Ds(i)}if(K.context){if(K.count){K.effects||(K.effects=[]),K.effects.push(...t.slice(0,r));return}Hr()}for(K.effects&&(K.done||!K.count)&&(t=[...K.effects,...t],r+=K.effects.length,delete K.effects),e=0;e<r;e++)Ds(t[e])}function wo(t,e){let r=C&&C.running;r?t.tState=0:t.state=0;for(let i=0;i<t.sources.length;i+=1){let s=t.sources[i];if(s.sources){let n=r?s.tState:s.state;n===dt?s!==e&&(!s.updatedAt||s.updatedAt<xo)&&Ds(s):n===Rs&&wo(s,e)}}}function sh(t){let e=C&&C.running;for(let r=0;r<t.observers.length;r+=1){let i=t.observers[r];(e?!i.tState:!i.state)&&(e?i.tState=Rs:i.state=Rs,i.pure?Me.push(i):ze.push(i),i.observers&&sh(i))}}function yr(t){let e;if(t.sources)for(;t.sources.length;){let r=t.sources.pop(),i=t.sourceSlots.pop(),s=r.observers;if(s&&s.length){let n=s.pop(),o=r.observerSlots.pop();i<s.length&&(n.sourceSlots[o]=i,s[i]=n,r.observerSlots[i]=o)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)yr(t.tOwned[e]);delete t.tOwned}if(C&&C.running&&t.pure)nh(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)yr(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}C&&C.running?t.tState=0:t.state=0}function nh(t,e){if(e||(t.tState=0,C.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)nh(t.owned[r])}function Cl(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function Kd(t,e,r){try{for(let i of e)i(t)}catch(i){ko(i,r&&r.owner||null)}}function ko(t,e=ie){let r=Ls&&e&&e.context&&e.context[Ls],i=Cl(t);if(!r)throw i;ze?ze.push({fn(){Kd(i,r,e)},state:dt}):Kd(i,r,e)}function El(t){if(typeof t=="function"&&!t.length)return El(t());if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=El(t[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function sw(t,e){return function(i){let s;return me(()=>s=Ze(()=>(ie.context={...ie.context,[t]:i.value},eh(()=>i.children))),void 0),s}}var nw=Symbol("fallback");function Yd(t){for(let e=0;e<t.length;e++)t[e]()}function ow(t,e,r={}){let i=[],s=[],n=[],o=0,a=e.length>1?[]:null;return Ns(()=>Yd(n)),()=>{let l=t()||[],u=l.length,c,d;return l[_o],Ze(()=>{let f,m,v,b,y,w,x,_,O;if(u===0)o!==0&&(Yd(n),n=[],i=[],s=[],o=0,a&&(a=[])),r.fallback&&(i=[nw],s[0]=Zr(se=>(n[0]=se,r.fallback())),o=1);else if(o===0){for(s=new Array(u),d=0;d<u;d++)i[d]=l[d],s[d]=Zr(p);o=u}else{for(v=new Array(u),b=new Array(u),a&&(y=new Array(u)),w=0,x=Math.min(o,u);w<x&&i[w]===l[w];w++);for(x=o-1,_=u-1;x>=w&&_>=w&&i[x]===l[_];x--,_--)v[_]=s[x],b[_]=n[x],a&&(y[_]=a[x]);for(f=new Map,m=new Array(_+1),d=_;d>=w;d--)O=l[d],c=f.get(O),m[d]=c===void 0?-1:c,f.set(O,d);for(c=w;c<=x;c++)O=i[c],d=f.get(O),d!==void 0&&d!==-1?(v[d]=s[c],b[d]=n[c],a&&(y[d]=a[c]),d=m[d],f.set(O,d)):n[c]();for(d=w;d<u;d++)d in v?(s[d]=v[d],n[d]=b[d],a&&(a[d]=y[d],a[d](d))):s[d]=Zr(p);s=s.slice(0,o=u),i=l.slice(0)}return s});function p(f){if(n[d]=f,a){let[m,v]=be(d);return a[d]=v,e(l[d],m)}return e(l[d])}}}var aw=!1;function z(t,e){if(aw&&K.context){let r=K.context;Hr(Gv());let i=Ze(()=>t(e||{}));return Hr(r),i}return Ze(()=>t(e||{}))}var oh=t=>`Stale read from <${t}>.`;function Yr(t){let e="fallback"in t&&{fallback:()=>t.fallback};return pe(ow(()=>t.each,t.children,e||void 0))}function Ge(t){let e=t.keyed,r=pe(()=>t.when,void 0,{equals:(i,s)=>e?i===s:!i==!s});return pe(()=>{let i=r();if(i){let s=t.children;return typeof s=="function"&&s.length>0?Ze(()=>s(e?i:()=>{if(!Ze(r))throw oh("Show");return t.when})):s}return t.fallback},void 0,void 0)}function Tl(t){let e=!1,r=(n,o)=>(e?n[1]===o[1]:!n[1]==!o[1])&&n[2]===o[2],i=eh(()=>t.children),s=pe(()=>{let n=i();Array.isArray(n)||(n=[n]);for(let o=0;o<n.length;o++){let a=n[o].when;if(a)return e=!!n[o].keyed,[o,a,n[o]]}return[-1]},void 0,{equals:r});return pe(()=>{let[n,o,a]=s();if(n<0)return t.fallback;let l=a.children;return typeof l=="function"&&l.length>0?Ze(()=>l(e?o:()=>{if(Ze(s)[0]!==n)throw oh("Match");return a.when})):l},void 0,void 0)}function Co(t){return t}var yo;function Al(t){let e;K.context&&K.load&&(e=K.load(K.getContextId()));let[r,i]=be(e,void 0);return yo||(yo=new Set),yo.add(i),Ns(()=>yo.delete(i)),pe(()=>{let s;if(s=r()){let n=t.fallback;return typeof n=="function"&&n.length?Ze(()=>n(s,()=>i())):n}return Jv(()=>t.children,i)},void 0,void 0)}var lw=ji();function rr(t){let e=0,r,i,s,n,o,[a,l]=be(!1),u=ew(),c={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},d=F();if(K.context&&K.load){let m=K.getContextId(),v=K.load(m);if(v&&(typeof v!="object"||v.status!=="success"?s=v:K.gather(m)),s&&s!=="$$f"){let[b,y]=be(void 0,{equals:!1});n=b,s.then(()=>{if(K.done)return y();K.gather(m),Hr(i),y(),Hr()},w=>{o=w,y()})}}let p=Kr(lw);p&&(r=p.register(c.inFallback));let f;return Ns(()=>f&&f()),z(u.Provider,{value:c,get children(){return pe(()=>{if(o)throw o;if(i=K.context,n)return n(),n=void 0;i&&s==="$$f"&&Hr();let m=pe(()=>t.children);return pe(v=>{let b=c.inFallback(),{showContent:y=!0,showFallback:w=!0}=r?r():{};if((!b||s&&s!=="$$f")&&y)return c.resolved=!0,f&&f(),f=i=s=void 0,Qv(c.effects),m();if(w)return f?v:Zr(x=>(f=x,i&&(Hr({id:i.id+"F",count:0}),i=void 0),t.fallback),d)})})}})}var cw=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],_A=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...cw]);function uw(t,e,r){let i=r.length,s=e.length,n=i,o=0,a=0,l=e[s-1].nextSibling,u=null;for(;o<s||a<n;){if(e[o]===r[a]){o++,a++;continue}for(;e[s-1]===r[n-1];)s--,n--;if(s===o){let c=n<i?a?r[a-1].nextSibling:r[n-a]:l;for(;a<n;)t.insertBefore(r[a++],c)}else if(n===a)for(;o<s;)(!u||!u.has(e[o]))&&e[o].remove(),o++;else if(e[o]===r[n-1]&&r[a]===e[s-1]){let c=e[--s].nextSibling;t.insertBefore(r[a++],e[o++].nextSibling),t.insertBefore(r[--n],c),e[s]=r[n]}else{if(!u){u=new Map;let d=a;for(;d<n;)u.set(r[d],d++)}let c=u.get(e[o]);if(c!=null)if(a<c&&c<n){let d=o,p=1,f;for(;++d<s&&d<n&&!((f=u.get(e[d]))==null||f!==c+p);)p++;if(p>c-a){let m=e[o];for(;a<c;)t.insertBefore(r[a++],m)}else t.replaceChild(r[a++],e[o++])}else o++;else e[o++].remove()}}}var ah="_$DX_DELEGATE";function Y(t,e,r){let i,s=()=>{let o=document.createElement("template");return o.innerHTML=t,r?o.content.firstChild.firstChild:o.content.firstChild},n=e?()=>Ze(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return n.cloneNode=n,n}function ch(t,e=window.document){let r=e[ah]||(e[ah]=new Set);for(let i=0,s=t.length;i<s;i++){let n=t[i];r.has(n)||(r.add(n),e.addEventListener(n,dw))}}function $l(t,e,r){Pl(t)||(r==null?t.removeAttribute(e):t.setAttribute(e,r))}function _e(t,e){Pl(t)||(e==null?t.removeAttribute("class"):t.className=e)}function ue(t,e,r,i){if(i)Array.isArray(r)?(t[`$$${e}`]=r[0],t[`$$${e}Data`]=r[1]):t[`$$${e}`]=r;else if(Array.isArray(r)){let s=r[0];t.addEventListener(e,r[0]=n=>s.call(t,r[1],n))}else t.addEventListener(e,r,typeof r!="function"&&r)}function uh(t,e,r){if(!e)return r?$l(t,"style"):e;let i=t.style;if(typeof e=="string")return i.cssText=e;typeof r=="string"&&(i.cssText=r=void 0),r||(r={}),e||(e={});let s,n;for(n in r)e[n]==null&&i.removeProperty(n),delete r[n];for(n in e)s=e[n],s!==r[n]&&(i.setProperty(n,s),r[n]=s);return r}function j(t,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return Eo(t,e,i,r);me(s=>Eo(t,e(),s,r),i)}function Pl(t){return!!K.context&&!K.done&&(!t||t.isConnected)}function dw(t){if(K.registry&&K.events&&K.events.find(([l,u])=>u===t))return;let e=t.target,r=`$$${t.type}`,i=t.target,s=t.currentTarget,n=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),o=()=>{let l=e[r];if(l&&!e.disabled){let u=e[`${r}Data`];if(u!==void 0?l.call(e,u,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&n(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),K.registry&&!K.done&&(K.done=_$HY.done=!0),t.composedPath){let l=t.composedPath();n(l[0]);for(let u=0;u<l.length-2&&(e=l[u],!!o());u++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();n(i)}function Eo(t,e,r,i,s){let n=Pl(t);if(n){!r&&(r=[...t.childNodes]);let l=[];for(let u=0;u<r.length;u++){let c=r[u];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():l.push(c)}r=l}for(;typeof r=="function";)r=r();if(e===r)return r;let o=typeof e,a=i!==void 0;if(t=a&&r[0]&&r[0].parentNode||t,o==="string"||o==="number"){if(n||o==="number"&&(e=e.toString(),e===r))return r;if(a){let l=r[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),r=qi(t,r,i,l)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||o==="boolean"){if(n)return r;r=qi(t,r,i)}else{if(o==="function")return me(()=>{let l=e();for(;typeof l=="function";)l=l();r=Eo(t,l,r,i)}),()=>r;if(Array.isArray(e)){let l=[],u=r&&Array.isArray(r);if(Ol(l,e,r,s))return me(()=>r=Eo(t,l,r,i,!0)),()=>r;if(n){if(!l.length)return r;if(i===void 0)return r=[...t.childNodes];let c=l[0];if(c.parentNode!==t)return r;let d=[c];for(;(c=c.nextSibling)!==i;)d.push(c);return r=d}if(l.length===0){if(r=qi(t,r,i),a)return r}else u?r.length===0?lh(t,l,i):uw(t,r,l):(r&&qi(t),lh(t,l));r=l}else if(e.nodeType){if(n&&e.parentNode)return r=a?[e]:e;if(Array.isArray(r)){if(a)return r=qi(t,r,i,e);qi(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function Ol(t,e,r,i){let s=!1;for(let n=0,o=e.length;n<o;n++){let a=e[n],l=r&&r[t.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))s=Ol(t,a,l)||s;else if(u==="function")if(i){for(;typeof a=="function";)a=a();s=Ol(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else t.push(a),s=!0;else{let c=String(a);l&&l.nodeType===3&&l.data===c?t.push(l):t.push(document.createTextNode(c))}}return s}function lh(t,e,r=null){for(let i=0,s=e.length;i<s;i++)t.insertBefore(e[i],r)}function qi(t,e,r,i){if(r===void 0)return t.textContent="";let s=i||document.createTextNode("");if(e.length){let n=!1;for(let o=e.length-1;o>=0;o--){let a=e[o];if(s!==a){let l=a.parentNode===t;!n&&!o?l?t.replaceChild(s,a):t.insertBefore(s,r):l&&a.remove()}else n=!0}}else t.insertBefore(s,r);return[s]}var xA=Symbol();function hw(t){let e=Object.keys(t),r={};for(let i=0;i<e.length;i++){let[s,n]=be(t[e[i]]);Object.defineProperty(r,e[i],{get:s,set(o){n(()=>o)}})}return r}function fw(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let e=t.parentNode;for(;e&&!e._$owner&&!(e.assignedSlot&&e.assignedSlot._$owner);)e=e.parentNode;return e&&e.assignedSlot?e.assignedSlot._$owner:t._$owner}function pw(t){return(e,r)=>{let{element:i}=r;return Zr(s=>{let n=hw(e);i.addPropertyChangedCallback((a,l)=>n[a]=l),i.addReleaseCallback(()=>{i.renderRoot.textContent="",s()});let o=t(n,r);return j(i.renderRoot,o)},fw(i))}}function dh(t,e,r){return arguments.length===2&&(r=e,e={}),Vd(t,e)(pw(r))}var Ce=Is(Ki(),1),ic=Ce.default,bO=Ce.default.stringify,yO=Ce.default.fromJSON,vO=Ce.default.plugin,wO=Ce.default.parse,_O=Ce.default.list,xO=Ce.default.document,SO=Ce.default.comment,kO=Ce.default.atRule,CO=Ce.default.rule,EO=Ce.default.decl,TO=Ce.default.root,AO=Ce.default.CssSyntaxError,OO=Ce.default.Declaration,$O=Ce.default.Container,PO=Ce.default.Processor,IO=Ce.default.Document,LO=Ce.default.Comment,RO=Ce.default.Warning,DO=Ce.default.AtRule,NO=Ce.default.Result,MO=Ce.default.Input,zO=Ce.default.Rule,UO=Ce.default.Root,FO=Ce.default.Node;var Yi=Is(Jf(),1),cc=Yi.default,KO=Yi.default.objectify,YO=Yi.default.parse,JO=Yi.default.async,XO=Yi.default.sync;var cu=Is(dm()),ti=(...t)=>t.join(" "),ra=class{globalStyles;moduleStyles;styleCounter=0;prefix;theme;constructor(e,r="styler"){this.moduleStyles=new Map,this.globalStyles=new Map,this.prefix=r,this.theme=Object.freeze(e)}generateClassName(e){return`${this.prefix}-${e}-${this.styleCounter++}`}withTheme(e){return()=>e(this.theme)}setGlobals(e){if(this.globalStyles.size)throw new Error("gobalStyles can only be set once");for(let[r,i]of Object.entries(e(this.theme)))this.globalStyles.set(r,i)}css(e){let r={};for(let[i,s]of Object.entries(e)){let n=this.generateClassName(i);this.moduleStyles.set(n,s),r[i]=n}return r}resolveGlobals(){let e={};return this.globalStyles.forEach((i,s)=>{e[s]=i}),ic([cu.default]).process(e,{parser:cc}).css}resolveStyles(){let e=[];return this.moduleStyles.forEach((r,i)=>{let s=typeof r=="function"?r(this.theme):r,n={[`.${i}`]:s},o=ic([cu.default]).process(n,{parser:cc});e.push(o.css)}),e.join(`
`)}},hm=(t,e,r={})=>{let i=new FontFace(t,e,r);document.fonts.add(i)};hm("Playwrite HU","url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",{"font-optical-sizing":"auto","font-weight":"400","font-style":"normal"});var Jk={colorPrimary:"var(--gifo-color-primary)",colorOnPrimary:"var(--gifo-color-on-primary)",colorAccent:"var(--gifo-color-accent)",fontSizeLg:"2rem",fontSizeMd:"1.2rem",fontSizeSm:"1.0rem",breakPointSm:"600px",gapMd:"var(--sl-spacing-medium)"},ri=new ra(Jk,"gifo");ri.setGlobals(t=>({":root":{"--breakpoint-sm":t.breakPointSm},"::-webkit-scrollbar":{width:"8px",height:"8px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",transition:"background-color 0.2s"},"::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},".scrollable-element":{scrollbarWidth:"thin",scrollbarColor:"rgba(0, 0, 0, 0.5) transparent"},"a, a:hover, a:visited":{textDecoration:"none",color:t.colorOnPrimary},fieldset:{border:"2px solid",borderColor:"var(--gifo-color-primary)",borderRadius:"5px"}}));var Ue=ri.css.bind(ri),fm=ri.withTheme.bind(ri),pm=()=>[ri.resolveGlobals(),ri.resolveStyles()].join(`
`);var ia="0123456789abcdef",nr=class t{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new t(e)}static fromFieldsV7(e,r,i,s){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(i)||!Number.isInteger(s)||e<0||r<0||i<0||s<0||e>0xffffffffffff||r>4095||i>1073741823||s>4294967295)throw new RangeError("invalid field value");let n=new Uint8Array(16);return n[0]=e/2**40,n[1]=e/2**32,n[2]=e/2**24,n[3]=e/2**16,n[4]=e/2**8,n[5]=e,n[6]=112|r>>>8,n[7]=r,n[8]=128|i>>>24,n[9]=i>>>16,n[10]=i>>>8,n[11]=i,n[12]=s>>>24,n[13]=s>>>16,n[14]=s>>>8,n[15]=s,new t(n)}static parse(e){var r,i,s,n;let o;switch(e.length){case 32:o=(r=/^[0-9a-f]{32}$/i.exec(e))===null||r===void 0?void 0:r[0];break;case 36:o=(i=/^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||i===void 0?void 0:i.slice(1,6).join("");break;case 38:o=(s=/^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(e))===null||s===void 0?void 0:s.slice(1,6).join("");break;case 45:o=(n=/^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||n===void 0?void 0:n.slice(1,6).join("");break;default:break}if(o){let a=new Uint8Array(16);for(let l=0;l<16;l+=4){let u=parseInt(o.substring(2*l,2*l+8),16);a[l+0]=u>>>24,a[l+1]=u>>>16,a[l+2]=u>>>8,a[l+3]=u}return new t(a)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=ia.charAt(this.bytes[r]>>>4),e+=ia.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toHex(){let e="";for(let r=0;r<this.bytes.length;r++)e+=ia.charAt(this.bytes[r]>>>4),e+=ia.charAt(this.bytes[r]&15);return e}toJSON(){return this.toString()}getVariant(){let e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new t(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){let i=this.bytes[r]-e.bytes[r];if(i!==0)return Math.sign(i)}return 0}},sa=class{constructor(e){this.timestamp=0,this.counter=0,this.random=e??Xk()}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let i=this.generateOrAbortCore(e,r);return i===void 0&&(this.timestamp=0,i=this.generateOrAbortCore(e,r)),i}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>=this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return nr.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}generateV4(){let e=new Uint8Array(Uint32Array.of(this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32()).buffer);return e[6]=64|e[6]>>>4,e[8]=128|e[8]>>>2,nr.ofInner(e)}},Xk=()=>{if(typeof crypto<"u"&&typeof crypto.getRandomValues<"u")return new uu;if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");return{nextUint32:()=>Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536)}},uu=class{constructor(){this.buffer=new Uint32Array(8),this.cursor=65535}nextUint32(){return this.cursor>=this.buffer.length&&(crypto.getRandomValues(this.buffer),this.cursor=0),this.buffer[this.cursor++]}},na;var mm=()=>(na||(na=new sa)).generate();var gm=()=>(na||(na=new sa)).generateV4();function bm(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}var ym=bm();var Qk=Object.defineProperty,eC=(t,e)=>{for(var r in e)Qk(t,r,{get:e[r],enumerable:!0})},tC=class{collectable={};listeners={};interceptors;constructor({interceptors:t}={}){this.interceptors=t??{}}subscribe(t,e,r=!1){if(this.listeners[t]||(this.listeners[t]=[]),!this.isSubscribed(t,e)&&(this.listeners[t]?.push(e),r&&this.collectable[t])){let i=this.collectable[t];this.collectable[t]=[];for(let s of i)e(...s)}}subscribeOnce(t,e=!1){return new Promise(r=>{let i=!1,s=(...n)=>{i||(i=!0,this.unSubscribe(t,s),r(n))};this.subscribe(t,s,e)})}unSubscribe(t,e){if(this.listeners[t]){let r=this.listeners[t]?.findIndex(i=>i===e);r&&this.listeners[t]?.splice(r,1)}}isSubscribed(t,e){return!!this.listeners[t]?.includes(e)}async emit(t,e,r=!1){let i=this.interceptors[t],s=i?await i(...e):e;this.listeners[t]?.length===0&&r&&(this.collectable[t]||(this.collectable[t]=[]),this.collectable[t]?.push(e));for(let n of this.listeners[t]??[])n(...s)}reset({collectable:t,listeners:e}){if(Array.isArray(t))for(let r of t)delete this.collectable[r];else typeof t=="string"?delete this.collectable[t]:t!==!1&&(this.collectable={});if(Array.isArray(e))for(let r of e)delete this.listeners[r];else typeof e=="string"?delete this.listeners[e]:e!==!1&&(this.listeners={})}scanListeners(t){let e=Object.keys(this.listeners);return t&&(e=e.filter(t)),e}},_u=class{args=[];constructor(...t){this.args=t}fill(t){return[this,t]}hasDefault(){return this.args.length===1}get default(){return this.args[0]}},rC={};eC(rC,{CborBreak:()=>la,CborError:()=>ii,CborFillMissing:()=>ig,CborInvalidMajorError:()=>Sa,CborNumberError:()=>pu,CborPartialDisabled:()=>rg,CborRangeError:()=>Zt,Encoded:()=>xu,Gap:()=>_u,POW_2_53:()=>iC,POW_2_64:()=>fu,PartiallyEncoded:()=>Su,Reader:()=>mu,Tagged:()=>Pe,Writer:()=>$n,decode:()=>sg,encode:()=>rs,infiniteBytes:()=>gu,partiallyEncodeObject:()=>ku});var iC=9007199254740992,fu=BigInt(18446744073709552e3),xu=class{constructor(t){this.encoded=t}},ke=class extends Error{},Sr=class extends ke{name="NoActiveSocket";message="No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"};var tg=class extends ke{name="EngineDisconnected";message="The engine reported the connection to SurrealDB has dropped"},vm=class extends ke{constructor(t){super(),this.response=t,this.message=`${t}`}name="UnexpectedServerResponse"},sC=class extends ke{constructor(t){super(),this.error=t,this.message=`${t}`}name="UnexpectedConnectionError"},nC=class extends ke{constructor(t){super(),this.engine=t}name="UnsupportedEngine";message="The engine you are trying to connect to is not supported or configured."};var ba=class extends ke{name="ConnectionUnavailable";message="There is no connection available at this moment."},oC=class extends ke{name="MissingNamespaceDatabase";message="There is no namespace and/or database selected."},aC=class extends ke{constructor(t,e,r,i){super(),this.message=t,this.status=e,this.statusText=r,this.buffer=i}name="HttpConnectionError"},$e=class extends ke{constructor(t){super(),this.message=t}name="ResponseError"},lC=class extends ke{name="NoNamespaceSpecified";message="Please specify a namespace to use."},cC=class extends ke{name="NoDatabaseSpecified";message="Please specify a database to use."},wm=class extends ke{name="NoTokenReturned";message="Did not receive an authentication token."},uC=class extends ke{name="UnsupportedVersion";version;supportedRange;constructor(t,e){super(),this.version=t,this.supportedRange=e,this.message=`The version "${t}" reported by the engine is not supported by this library, expected a version that satisfies "${e}".`}},_m=class extends ke{constructor(t){super(),this.error=t}name="VersionRetrievalFailure";message="Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly."},ii=class extends ke{message;constructor(t){super(),this.message=t}},pu=class extends ii{name="CborNumberError"},Zt=class extends ii{name="CborRangeError"},Sa=class extends ii{name="CborInvalidMajorError"},la=class extends ii{name="CborBreak";constructor(){super("Came across a break which was not intercepted by the decoder")}},rg=class extends ii{name="CborPartialDisabled";constructor(){super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled")}},ig=class extends ii{name="CborFillMissing";constructor(){super("Fill for a gap is missing, and gap has no default")}},$n=class{constructor(t=256){this.byteLength=t,this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf)}_chunks=[];_pos=0;_buf;_view;_byte;chunk(t){this._chunks.push([this._buf.slice(0,this._pos),t]),this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._pos=0}get chunks(){return this._chunks}get buffer(){return this._buf.slice(0,this._pos)}claim(t){let e=this._pos;if(this._pos+=t,this._pos<=this._buf.byteLength)return e;let r=this._buf.byteLength<<1;for(;r<this._pos;)r<<=1;if(r>this._buf.byteLength){let i=this._byte;this._buf=new ArrayBuffer(r),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(i)}return e}writeUint8(t){let e=this.claim(1);this._view.setUint8(e,t)}writeUint16(t){let e=this.claim(2);this._view.setUint16(e,t)}writeUint32(t){let e=this.claim(4);this._view.setUint32(e,t)}writeUint64(t){let e=this.claim(8);this._view.setBigUint64(e,t)}writeUint8Array(t){if(t.byteLength===0)return;let e=this.claim(t.byteLength);this._byte.set(t,e)}writeArrayBuffer(t){t.byteLength!==0&&this.writeUint8Array(new Uint8Array(t))}writePartiallyEncoded(t){for(let[e,r]of t.chunks)this.writeArrayBuffer(e),this.chunk(r);this.writeArrayBuffer(t.end)}writeFloat32(t){let e=this.claim(4);this._view.setFloat32(e,t)}writeFloat64(t){let e=this.claim(8);this._view.setFloat64(e,t)}writeMajor(t,e){let r=t<<5;e<24?this.writeUint8(r+Number(e)):e<256?(this.writeUint8(r+24),this.writeUint8(Number(e))):e<65536?(this.writeUint8(r+25),this.writeUint16(Number(e))):e<4294967296?(this.writeUint8(r+26),this.writeUint32(Number(e))):(this.writeUint8(r+27),this.writeUint64(BigInt(e)))}output(t,e){return t?new Su(this._chunks,this.buffer,e):this.buffer}},Su=class{constructor(t,e,r){this.chunks=t,this.end=e,this.replacer=r}build(t,e){let r=new $n,i=new Map(t);for(let[s,n]of this.chunks){let o=i.has(n)||n.hasDefault();if(!e&&!o)throw new ig;if(r.writeArrayBuffer(s),o){let a=i.get(n)??n.default;rs(a,{writer:r,replacer:this.replacer})}else r.chunk(n)}return r.writeArrayBuffer(this.end),r.output(!!e,this.replacer)}};function ku(t,e){return Object.fromEntries(Object.entries(t).map(([r,i])=>[r,rs(i,{...e,partial:!0})]))}var Pe=class{constructor(t,e){this.tag=t,this.value=e}},xm;function rs(t,e={}){let r=e.writer??new $n,i=new Map(e.fills??[]);function s(n){let o=e.replacer?e.replacer(n):n;if(o===void 0)return r.writeUint8(247);if(o===null)return r.writeUint8(246);if(o===!0)return r.writeUint8(245);if(o===!1)return r.writeUint8(244);switch(typeof o){case"number":{if(Number.isInteger(o))if(o>=0&&o<=9007199254740992)r.writeMajor(0,o);else if(o<0&&o>=-9007199254740992)r.writeMajor(1,-(o+1));else throw new pu("Number too big to be encoded");else r.writeUint8(251),r.writeFloat64(o);return}case"bigint":{if(o>=0&&o<fu)r.writeMajor(0,o);else if(o<=0&&o>=-fu)r.writeMajor(1,-(o+1n));else throw new pu("BigInt too big to be encoded");return}case"string":{xm??=new TextEncoder;let a=xm.encode(o);r.writeMajor(3,a.byteLength),r.writeUint8Array(a);return}default:{if(Array.isArray(o)){r.writeMajor(4,o.length);for(let l of o)s(l);return}if(o instanceof Pe){r.writeMajor(6,o.tag),s(o.value);return}if(o instanceof xu){r.writeArrayBuffer(o.encoded);return}if(o instanceof _u){if(i.has(o))s(i.get(o));else{if(!e.partial)throw new rg;r.chunk(o)}return}if(o instanceof Su){let l=o.build(e.fills??[],e.partial);e.partial?r.writePartiallyEncoded(l):r.writeArrayBuffer(l);return}if(o instanceof Uint8Array||o instanceof Uint16Array||o instanceof Uint32Array||o instanceof Int8Array||o instanceof Int16Array||o instanceof Int32Array||o instanceof Float32Array||o instanceof Float64Array||o instanceof ArrayBuffer){let l=new Uint8Array(o);r.writeMajor(2,l.byteLength),r.writeUint8Array(l);return}let a=o instanceof Map?Array.from(o.entries()):Object.entries(o);r.writeMajor(5,a.length);for(let l of a.flat())s(l)}}}return s(t),r.output(!!e.partial,e.replacer)}var mu=class{_buf;_view;_byte;_pos=0;constructor(t){this._buf=new ArrayBuffer(t.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(new Uint8Array(t))}read(t,e){return this._pos+=t,e}readUint8(){try{return this.read(1,this._view.getUint8(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readUint16(){try{return this.read(2,this._view.getUint16(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readUint32(){try{return this.read(4,this._view.getUint32(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readUint64(){try{return this.read(8,this._view.getBigUint64(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readFloat16(){let t=this.readUint16(),e=(t&32768)>>15,r=(t&31744)>>10,i=t&1023;return r===0?(e?-1:1)*2**-14*(i/2**10):r===31?i?Number.NaN:(e?-1:1)*Number.POSITIVE_INFINITY:(e?-1:1)*2**(r-15)*(1+i/2**10)}readFloat32(){try{return this.read(4,this._view.getFloat32(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readFloat64(){try{return this.read(8,this._view.getFloat64(this._pos))}catch(t){throw t instanceof RangeError?new Zt(t.message):t}}readBytes(t){let e=this._byte.length-this._pos;if(e<t)throw new Zt(`The argument must be between 0 and ${e}`);return this.read(t,this._byte.slice(this._pos,this._pos+t))}readMajor(){let t=this.readUint8(),e=t>>5;if(e<0||e>7)throw new Sa("Received invalid major type");return[e,t&31]}readMajorLength(t){if(t<=23)return t;switch(t){case 24:return this.readUint8();case 25:return this.readUint16();case 26:return this.readUint32();case 27:{let e=this.readUint64();return e>9007199254740992?e:Number(e)}}throw new Zt("Expected a final length")}};function gu(t,e){let r=new $n;for(;;){let[i,s]=t.readMajor();if(i===7&&s===31)break;if(i!==e)throw new Sa(`Expected a resource of the same major (${e}) while processing an infinite resource`);if(s===31)throw new Zt("Expected a finite resource while processing an infinite resource");r.writeUint8Array(t.readBytes(Number(t.readMajorLength(s))))}return r.buffer}var Sm;function sg(t,e={}){let r=t instanceof mu?t:new mu(t);function i(){let[n,o]=r.readMajor();switch(n){case 0:return r.readMajorLength(o);case 1:{let a=r.readMajorLength(o);return typeof a=="bigint"?-(a+1n):-(a+1)}case 2:return o===31?gu(r,2):r.readBytes(Number(r.readMajorLength(o))).buffer;case 3:{let a=o===31?gu(r,3):r.readBytes(Number(r.readMajorLength(o)));return Sm??=new TextDecoder,Sm.decode(a)}case 4:{if(o===31){let u=[];for(;;)try{u.push(s())}catch(c){if(c instanceof la)break;throw c}return u}let a=r.readMajorLength(o),l=Array(a);for(let u=0;u<a;u++)l[u]=s();return l}case 5:{let a=[];if(o===31)for(;;){let l;try{l=s()}catch(c){if(c instanceof la)break;throw c}let u=s();a.push([l,u])}else{let l=r.readMajorLength(o);for(let u=0;u<l;u++){let c=s(),d=s();a[u]=[c,d]}}return e.map==="map"?new Map(a):Object.fromEntries(a)}case 6:{let a=r.readMajorLength(o),l=s();return new Pe(a,l)}case 7:switch(o){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 25:return r.readFloat16();case 26:return r.readFloat32();case 27:return r.readFloat64();case 31:throw new la}}throw new Sa(`Unable to decode value with major tag ${n}`)}function s(){return e.replacer?e.replacer(i()):i()}return s()}function dC(t){let e=Math.floor(t.getTime()/1e3),r=t.getTime()-e*1e3;return[e,r*1e6]}function hC([t,e]){let r=new Date(0);return r.setUTCSeconds(Number(t)),r.setMilliseconds(Math.floor(Number(e)/1e6)),r}var xt=class{},ya=class ng extends xt{decimal;constructor(e){super(),this.decimal=e.toString()}equals(e){return e instanceof ng?this.decimal===e.decimal:!1}toString(){return this.decimal}toJSON(){return this.decimal}},Cu=1,es=Cu/1e3,bu=es/1e3,va=1e3*Cu,wa=60*va,_a=60*wa,xa=24*_a,yu=7*xa,Eu=new Map([["ns",bu],["\xB5s",es],["\u03BCs",es],["us",es],["ms",Cu],["s",va],["m",wa],["h",_a],["d",xa],["w",yu]]),fC=Array.from(Eu).reduce((t,[e,r])=>(t.set(r,e),t),new Map),pC=new RegExp(`^(\\d+)(${Array.from(Eu.keys()).join("|")})`),ca=class ht extends xt{_milliseconds;constructor(e){super(),e instanceof ht?this._milliseconds=e._milliseconds:typeof e=="string"?this._milliseconds=ht.parseString(e):this._milliseconds=e}static fromCompact([e,r]){e=e??0,r=r??0;let i=e*1e3+r/1e6;return new ht(i)}equals(e){return e instanceof ht?this._milliseconds===e._milliseconds:!1}toCompact(){let e=Math.floor(this._milliseconds/1e3),r=Math.floor((this._milliseconds-e*1e3)*1e6);return r>0?[e,r]:e>0?[e]:[]}toString(){let e=this._milliseconds,r="";function i(s){let n=Math.floor(e/s);return n>0&&(e=e%s),n}for(let[s,n]of Array.from(fC).reverse()){let o=i(s);o>0&&(r+=`${o}${n}`)}return r}toJSON(){return this.toString()}static parseString(e){let r=0,i=e;for(;i!=="";){let s=i.match(pC);if(s){let n=Number.parseInt(s[1]),o=Eu.get(s[2]);if(o===void 0)throw new ke(`Invalid duration unit: ${s[2]}`);r+=n*o,i=i.slice(s[0].length);continue}throw new ke("Could not match a next duration part")}return r}static nanoseconds(e){return new ht(Math.floor(e*bu))}static microseconds(e){return new ht(Math.floor(e*es))}static milliseconds(e){return new ht(e)}static seconds(e){return new ht(e*va)}static minutes(e){return new ht(e*wa)}static hours(e){return new ht(e*_a)}static days(e){return new ht(e*xa)}static weeks(e){return new ht(e*yu)}get microseconds(){return Math.floor(this._milliseconds/es)}get nanoseconds(){return Math.floor(this._milliseconds/bu)}get milliseconds(){return Math.floor(this._milliseconds)}get seconds(){return Math.floor(this._milliseconds/va)}get minutes(){return Math.floor(this._milliseconds/wa)}get hours(){return Math.floor(this._milliseconds/_a)}get days(){return Math.floor(this._milliseconds/xa)}get weeks(){return Math.floor(this._milliseconds/yu)}},vu=class og extends xt{constructor(e){super(),this.inner=e}equals(e){return e instanceof og?this.inner===e.inner:!1}toJSON(){return this.toString()}toString(){return`<future> ${this.inner}`}},Er=class ag extends xt{equals(e){return e instanceof ag?this.is(e):!1}toString(){return JSON.stringify(this.toJSON())}};function km(t){return t instanceof ya?Number.parseFloat(t.decimal):t}var Cm=class ua extends Er{point;constructor(e){super(),e instanceof ua?this.point=e.clone().point:this.point=[km(e[0]),km(e[1])]}toJSON(){return{type:"Point",coordinates:this.coordinates}}get coordinates(){return this.point}is(e){return e instanceof ua?this.point[0]===e.point[0]&&this.point[1]===e.point[1]:!1}clone(){return new ua([...this.point])}},Em=class da extends Er{line;constructor(e){super(),this.line=e instanceof da?e.clone().line:e}toJSON(){return{type:"LineString",coordinates:this.coordinates}}get coordinates(){return this.line.map(e=>e.coordinates)}close(){this.line[0].is(this.line.at(-1))||this.line.push(this.line[0])}is(e){if(!(e instanceof da)||this.line.length!==e.line.length)return!1;for(let r=0;r<this.line.length;r++)if(!this.line[r].is(e.line[r]))return!1;return!0}clone(){return new da(this.line.map(e=>e.clone()))}},Tm=class ha extends Er{polygon;constructor(e){super(),this.polygon=e instanceof ha?e.clone().polygon:e.map(r=>{let i=r.clone();return i.close(),i})}toJSON(){return{type:"Polygon",coordinates:this.coordinates}}get coordinates(){return this.polygon.map(e=>e.coordinates)}is(e){if(!(e instanceof ha)||this.polygon.length!==e.polygon.length)return!1;for(let r=0;r<this.polygon.length;r++)if(!this.polygon[r].is(e.polygon[r]))return!1;return!0}clone(){return new ha(this.polygon.map(e=>e.clone()))}},Am=class fa extends Er{points;constructor(e){super(),this.points=e instanceof fa?e.points:e}toJSON(){return{type:"MultiPoint",coordinates:this.coordinates}}get coordinates(){return this.points.map(e=>e.coordinates)}is(e){if(!(e instanceof fa)||this.points.length!==e.points.length)return!1;for(let r=0;r<this.points.length;r++)if(!this.points[r].is(e.points[r]))return!1;return!0}clone(){return new fa(this.points.map(e=>e.clone()))}},Om=class pa extends Er{lines;constructor(e){super(),this.lines=e instanceof pa?e.lines:e}toJSON(){return{type:"MultiLineString",coordinates:this.coordinates}}get coordinates(){return this.lines.map(e=>e.coordinates)}is(e){if(!(e instanceof pa)||this.lines.length!==e.lines.length)return!1;for(let r=0;r<this.lines.length;r++)if(!this.lines[r].is(e.lines[r]))return!1;return!0}clone(){return new pa(this.lines.map(e=>e.clone()))}},$m=class ma extends Er{polygons;constructor(e){super(),this.polygons=e instanceof ma?e.polygons:e}toJSON(){return{type:"MultiPolygon",coordinates:this.coordinates}}get coordinates(){return this.polygons.map(e=>e.coordinates)}is(e){if(!(e instanceof ma)||this.polygons.length!==e.polygons.length)return!1;for(let r=0;r<this.polygons.length;r++)if(!this.polygons[r].is(e.polygons[r]))return!1;return!0}clone(){return new ma(this.polygons.map(e=>e.clone()))}},Pm=class ga extends Er{collection;constructor(e){super(),this.collection=e instanceof ga?e.collection:e}toJSON(){return{type:"GeometryCollection",geometries:this.geometries}}get geometries(){return this.collection.map(e=>e.toJSON())}is(e){if(!(e instanceof ga)||this.collection.length!==e.collection.length)return!1;for(let r=0;r<this.collection.length;r++)if(!this.collection[r].is(e.collection[r]))return!1;return!0}clone(){return new ga(this.collection.map(e=>e.clone()))}};function is(t,e){if(Object.is(t,e))return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.toString()===e.toString();if(t instanceof xt&&e instanceof xt)return t.equals(e);if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;let r=Reflect.ownKeys(t),i=Reflect.ownKeys(e);if(r.length!==i.length)return!1;for(let s=0;s<r.length;s++)if(!Reflect.has(e,r[s])||!is(t[r[s]],e[r[s]]))return!1;return!0}var mC=9223372036854775807n;function Tu(t){if(bC(t))return`\u27E8${t}\u27E9`;let e,r,i;for(r=0,i=t.length;r<i;r++)if(e=t.charCodeAt(r),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123)&&e!==95)return`\u27E8${t.replaceAll("\u27E9","\\\u27E9")}\u27E9`;return t}function gC(t){return t<=mC?t.toString():`\u27E8${t}\u27E9`}function bC(t){let e=t.replace("_",""),r=Number.parseInt(e);return!Number.isNaN(r)&&r.toString()===e}var ss=class Tn extends xt{inner;constructor(e){super(),e instanceof ArrayBuffer?this.inner=nr.ofInner(new Uint8Array(e)):e instanceof Uint8Array?this.inner=nr.ofInner(e):e instanceof Tn?this.inner=e.inner:e instanceof nr?this.inner=e:this.inner=nr.parse(e)}equals(e){return e instanceof Tn?this.inner.equals(e.inner):!1}toString(){return this.inner.toString()}toJSON(){return this.inner.toString()}toUint8Array(){return this.inner.bytes}toBuffer(){return this.inner.bytes.buffer}static v4(){return new Tn(gm())}static v7(){return new Tn(mm())}},On=class lg extends xt{tb;id;constructor(e,r){if(super(),typeof e!="string")throw new ke("TB part is not valid");if(!cg(r))throw new ke("ID part is not valid");this.tb=e,this.id=r}equals(e){return e instanceof lg?this.tb===e.tb&&is(this.id,e.id):!1}toJSON(){return this.toString()}toString(){let e=Tu(this.tb),r=ug(this.id);return`${e}:${r}`}},Au=class wu extends xt{rid;constructor(e){if(super(),e instanceof wu)this.rid=e.rid;else if(e instanceof On)this.rid=e.toString();else if(typeof e=="string")this.rid=e;else throw new ke("String Record ID must be a string")}equals(e){return e instanceof wu?this.rid===e.rid:!1}toJSON(){return this.rid}toString(){return this.rid}};function cg(t){if(t instanceof ss)return!0;switch(typeof t){case"string":case"number":case"bigint":return!0;case"object":return Array.isArray(t)||t!==null;default:return!1}}function ug(t){return t instanceof ss?`u"${t}"`:typeof t=="string"?Tu(t):typeof t=="bigint"||typeof t=="number"?gC(t):Cr(t)}var ts=class dg extends xt{tb;constructor(e){if(super(),typeof e!="string")throw new ke("Table must be a string");this.tb=e}equals(e){return e instanceof dg?this.tb===e.tb:!1}toJSON(){return this.tb}toString(){return this.tb}};function Cr(t){if(typeof t=="string")return`s${JSON.stringify(t)}`;if(t===null)return"NULL";if(t===void 0)return"NONE";if(typeof t=="object"){if(t instanceof Date)return`d${JSON.stringify(t.toISOString())}`;if(t instanceof ss)return`u${JSON.stringify(t.toString())}`;if(t instanceof On||t instanceof Au)return`r${JSON.stringify(t.toString())}`;if(t instanceof Er)return Cr(t.toJSON());if(t instanceof ya||t instanceof ca||t instanceof vu||t instanceof An||t instanceof ts)return t.toJSON();switch(Object.getPrototypeOf(t)){case Object.prototype:{let e="{ ",r=Object.entries(t);for(let[i,[s,n]]of r.entries())e+=`${JSON.stringify(s)}: ${Cr(n)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Map.prototype:{let e="{ ",r=Array.from(t.entries());for(let[i,[s,n]]of r.entries())e+=`${JSON.stringify(s)}: ${Cr(n)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Array.prototype:return`[ ${t.map(Cr).join(", ")} ]`;case Set.prototype:return`[ ${[...new Set([...t].map(Cr))].join(", ")} ]`}}return`${t}`}var An=class hg extends xt{constructor(e,r){super(),this.beg=e,this.end=r}equals(e){return!(e instanceof hg)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:is(this.beg?.value,e.beg?.value)&&is(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Dm(this.beg),r=Dm(this.end);return`${e}${pg(this.beg,this.end)}${r}`}},Pn=class{constructor(t){this.value=t}},In=class{constructor(t){this.value=t}},Im=class fg extends xt{constructor(e,r,i){if(super(),this.tb=e,this.beg=r,this.end=i,typeof e!="string")throw new ke("TB part is not valid");if(!Lm(r))throw new ke("Beg part is not valid");if(!Lm(i))throw new ke("End part is not valid")}equals(e){return!(e instanceof fg)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:this.tb===e.tb&&is(this.beg?.value,e.beg?.value)&&is(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Tu(this.tb),r=Rm(this.beg),i=Rm(this.end);return`${e}:${r}${pg(this.beg,this.end)}${i}`}};function pg(t,e){let r="";return t instanceof In&&(r+=">"),r+="..",e instanceof Pn&&(r+="="),r}function Lm(t){return t instanceof Pn||t instanceof In?cg(t.value):!0}function Rm(t){return t instanceof Pn||t instanceof In?ug(t.value):""}function Dm(t){if(t===void 0)return"";let e=t.value;return t instanceof An?`(${Cr(e)})`:Cr(e)}function Nm([t,e]){function r(i){return i instanceof Pn?new Pe(mg,i.value):i instanceof In?new Pe(gg,i.value):null}return[r(t),r(e)]}function yC(t){function e(r){if(r!==null){if(r.tag===mg)return new Pn(r.value);if(r.tag===gg)return new In(r.value);throw new ke("Invalid bound tag")}}return[e(t[0]),e(t[1])]}var vC=0,Mm=37,zm=6,Um=7,oa=8,wC=9,Fm=10,jm=12,_C=13,Bm=14,qm=15,du=49,mg=50,gg=51,Vm=88,Wm=89,Hm=90,Zm=91,Gm=92,Km=93,Ym=94,ns={encode(t){return t instanceof Date?new Pe(jm,dC(t)):t===void 0?new Pe(zm,null):t instanceof ss?new Pe(Mm,t.toBuffer()):t instanceof ya?new Pe(Fm,t.toString()):t instanceof ca?new Pe(Bm,t.toCompact()):t instanceof On?new Pe(oa,[t.tb,t.id]):t instanceof Au?new Pe(oa,t.rid):t instanceof Im?new Pe(oa,[t.tb,new Pe(du,Nm([t.beg,t.end]))]):t instanceof ts?new Pe(Um,t.tb):t instanceof vu?new Pe(qm,t.inner):t instanceof An?new Pe(du,Nm([t.beg,t.end])):t instanceof Cm?new Pe(Vm,t.point):t instanceof Em?new Pe(Wm,t.line):t instanceof Tm?new Pe(Hm,t.polygon):t instanceof Am?new Pe(Zm,t.points):t instanceof Om?new Pe(Gm,t.lines):t instanceof $m?new Pe(Km,t.polygons):t instanceof Pm?new Pe(Ym,t.collection):t},decode(t){if(!(t instanceof Pe))return t;switch(t.tag){case vC:return new Date(t.value);case Mm:case wC:return new ss(t.value);case jm:return hC(t.value);case zm:return;case Fm:return new ya(t.value);case _C:return new ca(t.value);case Bm:return ca.fromCompact(t.value);case Um:return new ts(t.value);case qm:return new vu(t.value);case du:return new An(...yC(t.value));case oa:return t.value[1]instanceof An?new Im(t.value[0],t.value[1].beg,t.value[1].end):new On(t.value[0],t.value[1]);case Vm:return new Cm(t.value);case Wm:return new Em(t.value);case Hm:return new Tm(t.value);case Zm:return new Am(t.value);case Gm:return new Om(t.value);case Km:return new $m(t.value);case Ym:return new Pm(t.value)}}};Object.freeze(ns);function xC(t){return rs(t,{replacer:ns.encode})}function SC(t){return sg(t,{replacer:ns.decode})}var aa,kC=class{_query;_bindings;length;constructor(t,e){aa??=new TextEncoder,this._query=aa.encode(t),this._bindings=ku(e??{},{replacer:ns.encode}),this.length=Object.keys(this._bindings).length}get query(){let t=new $n(this._query.byteLength+9);return t.writeMajor(3,this._query.byteLength),t.writeUint8Array(this._query),new xu(t.output(!1))}get bindings(){return this._bindings}build(t){return rs([this.query,this.bindings],{fills:t})}append(t,...e){let r=this.length;this.length+=e.length;let i=0,s=new Map,n=e.map((u,c)=>{if(u instanceof _u){let d=s.get(u);if(d!==void 0)return i++,[`bind___${d}`,u];s.set(u,c-i)}return[`bind___${r+c-i}`,u]});for(let[u,c]of n)this._bindings[u]=rs(c,{replacer:ns.encode,partial:!0});let o=t.flatMap((u,c)=>{let d=n[c]?.[0];return[u,...d?[`$${d}`]:[]]}).join("");aa??=new TextEncoder;let a=new Uint8Array(this._query),l=aa.encode(o);return this._query=new Uint8Array(a.byteLength+l.byteLength),this._query.set(a),this._query.set(l,a.byteLength),this}};function Jm(t){let e={},r=(i,s,n)=>{if(i in t)e[s]=`${t[i]}`,delete e[i];else if(n!==!0)throw new ke(`Key ${i} is missing from the authentication parameters`)};return"scope"in t?(e={...t},r("scope","sc"),r("namespace","ns"),r("database","db")):"variables"in t?(e={...t.variables},r("access","ac"),r("namespace","ns"),r("database","db")):(r("access","ac",!0),r("database","db",!0),r("namespace","ns",!("database"in t)),r("username","user"),r("password","pass")),e}var CC=["CREATE","UPDATE","DELETE"];function EC(t){return!(typeof t!="object"||t===null||!("id"in t&&"action"in t&&"result"in t)||!(t.id instanceof ss)||!CC.includes(t.action)||typeof t.result!="object"||t.result===null)}var TC=5e3,Ou="1.4.2",$u="3.0.0",_$=`>= ${Ou} < ${$u}`;function AC(t,e=Ou,r=$u){if(!OC(t,e,r))throw new uC(t,`>= ${e} < ${r}`);return!0}function OC(t,e=Ou,r=$u){return e.localeCompare(t,void 0,{numeric:!0})<=0&&r.localeCompare(t,void 0,{numeric:!0})===1}async function bg(t,e){let r={"ws:":"http:","wss:":"https:","http:":"http:","https:":"https:"}[t.protocol];if(r){let i=t.pathname.slice(0,-4);t=new URL(t),t.pathname=`${i}/version`,t.protocol=r;let s=new AbortController,n=setTimeout(()=>s.abort(),e??TC),o="surrealdb-";return await fetch(t,{signal:s.signal}).then(a=>a.text()).then(a=>a.slice(o.length)).catch(a=>{throw new _m(a)}).finally(()=>{clearTimeout(n)})}throw new _m}var hu=0;function yg(){return hu=(hu+1)%Number.MAX_SAFE_INTEGER,hu.toString()}var $C=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t.Error="error",t))($C||{}),PC=class{emitter;encodeCbor;decodeCbor;constructor({emitter:t,encodeCbor:e,decodeCbor:r}){this.emitter=t,this.encodeCbor=e,this.decodeCbor=r}},vg=class{context;ready;status="disconnected";connection={url:void 0,namespace:void 0,database:void 0,token:void 0};constructor(t){this.context=t}get emitter(){return this.context.emitter}get encodeCbor(){return this.context.encodeCbor}get decodeCbor(){return this.context.decodeCbor}async req_post(t,e,r){let i={"Content-Type":"application/cbor",Accept:"application/cbor",...r};this.connection.namespace&&(i["Surreal-NS"]=this.connection.namespace),this.connection.database&&(i["Surreal-DB"]=this.connection.database),this.connection.token&&(i.Authorization=`Bearer ${this.connection.token}`);let s=await fetch(`${e??this.connection.url}`,{method:"POST",headers:i,body:this.encodeCbor(t)}),n=await s.arrayBuffer();if(s.status===200)return n;let o=new TextDecoder("utf-8");throw new aC(o.decode(n),s.status,s.statusText,n)}};function Xm(t,e){if("scope"in t||"access"in t&&"variables"in t&&t.variables){if(!t.namespace){if(!e?.namespace)throw new lC;t.namespace=e.namespace}if(!t.database){if(!e?.database)throw new cC;t.database=e.database}}return t}var IC=new Set(["signin","signup","authenticate","invalidate","version","use","let","unset","query"]),Qm=class extends vg{connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}};setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}version(t,e){return bg(t,e)}connect(t){return this.setStatus("connecting"),this.connection.url=t,this.setStatus("connected"),this.ready=new Promise(e=>e()),this.ready}disconnect(){return this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}},this.ready=void 0,this.setStatus("disconnected"),new Promise(t=>t())}async rpc(t){if(await this.ready,!this.connection.url)throw new ba;if((!this.connection.namespace||!this.connection.database)&&!IC.has(t.method))throw new oC;if(t.method==="use"){let[s,n]=t.params;return s===null&&(this.connection.namespace=void 0),n===null&&(this.connection.database=void 0),s&&(this.connection.namespace=s),n&&(this.connection.database=n),{result:!0}}if(t.method==="let"){let[s,n]=t.params;return this.connection.variables[s]=n,{result:!0}}if(t.method==="unset"){let[s]=t.params;return delete this.connection.variables[s],{result:!0}}t.method==="query"&&(t.params=[t.params?.[0],{...this.connection.variables,...t.params?.[1]??{}}]);let e=yg(),r=await this.req_post({id:e,...t}),i=this.decodeCbor(r);if("result"in i)switch(t.method){case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[s]=t.params;this.connection.token=s;break}case"invalidate":{this.connection.token=void 0;break}}return this.emitter.emit(`rpc-${e}`,[i]),i}get connected(){return!!this.connection.url}async export(t){if(!this.connection.url)throw new ba;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},eg=class extends vg{pinger;socket;constructor(t){super(t),this.emitter.subscribe("disconnected",()=>this.pinger?.stop())}setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}async requireStatus(t){return this.status!==t&&await this.emitter.subscribeOnce(t),!0}version(t,e){return bg(t,e)}async connect(t){this.connection.url=t,this.setStatus("connecting");let e=new ym(t.toString(),"cbor"),r=new Promise((i,s)=>{e.addEventListener("open",()=>{this.setStatus("connected"),i()}),e.addEventListener("error",n=>{let o=new sC("detail"in n?n.detail:"error"in n?n.error:"An unexpected error occurred");this.setStatus("error",o),s(o)}),e.addEventListener("close",()=>{this.setStatus("disconnected")}),e.addEventListener("message",async({data:n})=>{try{let o=this.decodeCbor(n instanceof ArrayBuffer?n:n instanceof Blob?await n.arrayBuffer():n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength));if(typeof o=="object"&&o!=null&&Object.getPrototypeOf(o)===Object.prototype)this.handleRpcResponse(o);else throw new vm(o)}catch(o){e.dispatchEvent(new CustomEvent("error",{detail:o}))}})});return this.ready=r,await r.then(()=>{this.socket=e,this.pinger?.stop(),this.pinger=new LC(3e4),this.pinger.start(()=>this.rpc({method:"ping"}))})}async disconnect(){this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0},await this.ready?.catch(()=>{}),this.socket?.close(),this.ready=void 0,this.socket=void 0,await Promise.any([this.requireStatus("disconnected"),this.requireStatus("error")])}async rpc(t){if(await this.ready,!this.socket)throw new ba;let e=yg(),r=this.emitter.subscribeOnce(`rpc-${e}`);this.socket.send(this.encodeCbor({id:e,...t}));let[i]=await r;if(i instanceof tg)throw i;if("result"in i)switch(t.method){case"use":{let[s,n]=t.params;s===null&&(this.connection.namespace=void 0),n===null&&(this.connection.database=void 0),s&&(this.connection.namespace=s),n&&(this.connection.database=n);break}case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[s]=t.params;this.connection.token=s;break}case"invalidate":{this.connection.token=void 0;break}}return i}handleRpcResponse({id:t,...e}){if(t)this.emitter.emit(`rpc-${t}`,[e]);else if(e.error)this.setStatus("error",new $e(e.error));else if(EC(e.result)){let{id:r,action:i,result:s}=e.result;this.emitter.emit(`live-${r}`,[i,s],!0)}else this.setStatus("error",new vm({id:t,...e}))}get connected(){return!!this.socket}async export(t){if(!this.connection.url)throw new ba;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.protocol=e.protocol.replace("ws","http"),e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},LC=class{pinger;interval;constructor(t=3e4){this.interval=t}start(t){this.pinger=setInterval(t,this.interval)}stop(){clearInterval(this.pinger)}},wg=class{connection;ready;emitter;engines={ws:eg,wss:eg,http:Qm,https:Qm};constructor({engines:t}={}){this.emitter=new tC,this.emitter.subscribe("disconnected",()=>this.clean()),this.emitter.subscribe("error",()=>this.close()),t&&(this.engines={...this.engines,...t})}async connect(t,e={}){t=new URL(t),t.pathname.endsWith("/rpc")||(t.pathname.endsWith("/")||(t.pathname+="/"),t.pathname+="rpc");let r=t.protocol.slice(0,-1),i=this.engines[r];if(!i)throw new nC(r);let{prepare:s,auth:n,namespace:o,database:a}=e;await this.close();let l=new PC({emitter:this.emitter,encodeCbor:xC,decodeCbor:SC}),u=new i(l);if(e.versionCheck!==!1){let c=await u.version(t,e.versionCheckTimeout);AC(c)}return this.connection=u,this.ready=new Promise((c,d)=>u.connect(t).then(async()=>{(o||a)&&await this.use({namespace:o,database:a}),typeof n=="string"?await this.authenticate(n):n&&await this.signin(n),await s?.(this),c()}).catch(d)),await this.ready,!0}async close(){return this.clean(),await this.connection?.disconnect(),!0}clean(){let t=this.emitter.scanListeners(r=>r.startsWith("rpc-"));t.map(r=>this.emitter.emit(r,[new tg]));let e=this.emitter.scanListeners(r=>r.startsWith("live-"));e.map(r=>this.emitter.emit(r,["CLOSE","disconnected"])),this.emitter.reset({collectable:!0,listeners:[...t,...e]})}get status(){return this.connection?.status??"disconnected"}async ping(){let{error:t}=await this.rpc("ping");if(t)throw new $e(t.message);return!0}async use({namespace:t,database:e}){if(!this.connection)throw new Sr;if(t===null&&e!==null)throw new ke("Cannot unset namespace without unsetting database");let{error:r}=await this.rpc("use",[t,e]);if(r)throw new $e(r.message);return!0}async info(){await this.ready;let t=await this.rpc("info");if(t.error)throw new $e(t.error.message);return t.result??void 0}async signup(t){if(!this.connection)throw new Sr;let e=Xm(t,this.connection.connection),r=Jm(e),i=await this.rpc("signup",[r]);if(i.error)throw new $e(i.error.message);if(!i.result)throw new wm;return i.result}async signin(t){if(!this.connection)throw new Sr;let e=Xm(t,this.connection.connection),r=Jm(e),i=await this.rpc("signin",[r]);if(i.error)throw new $e(i.error.message);if(!i.result)throw new wm;return i.result}async authenticate(t){let e=await this.rpc("authenticate",[t]);if(e.error)throw new $e(e.error.message);return!0}async invalidate(){let t=await this.rpc("invalidate");if(t.error)throw new $e(t.error.message);return!0}async let(t,e){let r=await this.rpc("let",[t,e]);if(r.error)throw new $e(r.error.message);return!0}async unset(t){let e=await this.rpc("unset",[t]);if(e.error)throw new $e(e.error.message);return!0}async live(t,e,r){await this.ready;let i=await this.rpc("live",[t,r]);if(i.error)throw new $e(i.error.message);return e&&this.subscribeLive(i.result,e),i.result}async subscribeLive(t,e){if(await this.ready,!this.connection)throw new Sr;this.connection.emitter.subscribe(`live-${t}`,e,!0)}async unSubscribeLive(t,e){if(await this.ready,!this.connection)throw new Sr;this.connection.emitter.unSubscribe(`live-${t}`,e)}async kill(t){if(await this.ready,!this.connection)throw new Sr;if(Array.isArray(t)){await Promise.all(t.map(r=>this.rpc("kill",[r])));let e=t.map(r=>`live-${r}`);e.map(r=>this.emitter.emit(r,["CLOSE","killed"])),this.connection.emitter.reset({collectable:e,listeners:e})}else await this.rpc("kill",[t]),this.emitter.emit(`live-${t}`,["CLOSE","killed"]),this.connection.emitter.reset({collectable:`live-${t}`,listeners:`live-${t}`})}async query(...t){return(await this.queryRaw(...t)).map(({status:e,result:r})=>{if(e==="ERR")throw new $e(r);return r})}async queryRaw(...[t,e]){let r=t instanceof kC?[t.query,ku(t.bindings,{fills:e,replacer:ns.encode})]:[t,e];await this.ready;let i=await this.rpc("query",r);if(i.error)throw new $e(i.error.message);return i.result}async query_raw(...t){return this.queryRaw(...t)}async select(t){await this.ready;let e=await this.rpc("select",[t]);if(e.error)throw new $e(e.error.message);return kr(t,e.result)}async create(t,e){await this.ready;let r=await this.rpc("create",[t,e]);if(r.error)throw new $e(r.error.message);return kr(t,r.result)}async insert(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof ts?[t,e]:[void 0,t],s=await this.rpc("insert",[r,i]);if(s.error)throw new $e(s.error.message);return s.result}async insertRelation(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof ts?[t,e]:[void 0,t],s=await this.rpc("insert_relation",[r,i]);if(s.error)throw new $e(s.error.message);return s.result}async insert_relation(t,e){return t instanceof ts||typeof t=="string"?this.insertRelation(t,e):this.insertRelation(t)}async update(t,e){await this.ready;let r=await this.rpc("update",[t,e]);if(r.error)throw new $e(r.error.message);return kr(t,r.result)}async upsert(t,e){await this.ready;let r=await this.rpc("upsert",[t,e]);if(r.error)throw new $e(r.error.message);return kr(t,r.result)}async merge(t,e){await this.ready;let r=await this.rpc("merge",[t,e]);if(r.error)throw new $e(r.error.message);return kr(t,r.result)}async patch(t,e,r){await this.ready;let i=await this.rpc("patch",[t,e,r]);if(i.error)throw new $e(i.error.message);return r?i.result:kr(t,i.result)}async delete(t){await this.ready;let e=await this.rpc("delete",[t]);if(e.error)throw new $e(e.error.message);return kr(t,e.result)}async version(){await this.ready;let t=await this.rpc("version");if(t.error)throw new $e(t.error.message);return t.result}async run(t,e,r){await this.ready;let[i,s]=Array.isArray(e)?[void 0,e]:[e,r],n=await this.rpc("run",[t,i,s]);if(n.error)throw new $e(n.error.message);return n.result}async relate(t,e,r,i){await this.ready;let s=await this.rpc("relate",[t,e,r,i]);if(s.error)throw new $e(s.error.message);return kr(e,s.result)}rpc(t,e){if(!this.connection)throw new Sr;return this.connection.rpc({method:t,params:e})}async export(t){if(await this.ready,!this.connection)throw new Sr;return this.connection.export(t)}};function kr(t,e){return t instanceof On||t instanceof Au?Array.isArray(e)?e[0]:e:Array.isArray(e)?e:[e]}var ce;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function r(s){throw new Error}t.assertNever=r,t.arrayToEnum=s=>{let n={};for(let o of s)n[o]=o;return n},t.getValidEnumValues=s=>{let n=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(let a of n)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(n){return s[n]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{let n=[];for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&n.push(o);return n},t.find=(s,n)=>{for(let o of s)if(n(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function i(s,n=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(n)}t.joinValues=i,t.jsonStringifyReplacer=(s,n)=>typeof n=="bigint"?n.toString():n})(ce||(ce={}));var Iu;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(Iu||(Iu={}));var L=ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ar=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}},S=ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),RC=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),ft=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){let r=e||function(n){return n.message},i={_errors:[]},s=n=>{for(let o of n.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)i._errors.push(r(o));else{let a=i,l=0;for(;l<o.path.length;){let u=o.path[l];l===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(r(o))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return s(this),i}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){let r={},i=[];for(let s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(e(s))):i.push(e(s));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}};ft.create=t=>new ft(t);var ls=(t,e)=>{let r;switch(t.code){case S.invalid_type:t.received===L.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case S.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,ce.jsonStringifyReplacer)}`;break;case S.unrecognized_keys:r=`Unrecognized key(s) in object: ${ce.joinValues(t.keys,", ")}`;break;case S.invalid_union:r="Invalid input";break;case S.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ce.joinValues(t.options)}`;break;case S.invalid_enum_value:r=`Invalid enum value. Expected ${ce.joinValues(t.options)}, received '${t.received}'`;break;case S.invalid_arguments:r="Invalid function arguments";break;case S.invalid_return_type:r="Invalid function return type";break;case S.invalid_date:r="Invalid date";break;case S.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:ce.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case S.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case S.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case S.custom:r="Invalid input";break;case S.invalid_intersection_types:r="Intersection results could not be merged";break;case S.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case S.not_finite:r="Number must be finite";break;default:r=e.defaultError,ce.assertNever(t)}return{message:r}},Sg=ls;function DC(t){Sg=t}function ka(){return Sg}var Ca=t=>{let{data:e,path:r,errorMaps:i,issueData:s}=t,n=[...r,...s.path||[]],o={...s,path:n};if(s.message!==void 0)return{...s,path:n,message:s.message};let a="",l=i.filter(u=>!!u).slice().reverse();for(let u of l)a=u(o,{data:e,defaultError:a}).message;return{...s,path:n,message:a}},NC=[];function A(t,e){let r=ka(),i=Ca({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===ls?void 0:ls].filter(s=>!!s)});t.common.issues.push(i)}var Ke=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let i=[];for(let s of r){if(s.status==="aborted")return H;s.status==="dirty"&&e.dirty(),i.push(s.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){let i=[];for(let s of r){let n=await s.key,o=await s.value;i.push({key:n,value:o})}return t.mergeObjectSync(e,i)}static mergeObjectSync(e,r){let i={};for(let s of r){let{key:n,value:o}=s;if(n.status==="aborted"||o.status==="aborted")return H;n.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),n.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(i[n.value]=o.value)}return{status:e.value,value:i}}},H=Object.freeze({status:"aborted"}),as=t=>({status:"dirty",value:t}),Qe=t=>({status:"valid",value:t}),Lu=t=>t.status==="aborted",Ru=t=>t.status==="dirty",si=t=>t.status==="valid",Dn=t=>typeof Promise<"u"&&t instanceof Promise;function Ea(t,e,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(t):i?i.value:e.get(t)}function kg(t,e,r,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(t,r):s?s.value=r:e.set(t,r),r}var N;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(N||(N={}));var Ln,Rn,kt=class{constructor(e,r,i,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},_g=(t,e)=>{if(si(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new ft(t.common.issues);return this._error=r,this._error}}};function J(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:i,description:s}=t;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>{var l,u;let{message:c}=t;return o.code==="invalid_enum_value"?{message:c??a.defaultError}:typeof a.data>"u"?{message:(l=c??i)!==null&&l!==void 0?l:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(u=c??r)!==null&&u!==void 0?u:a.defaultError}},description:s}}var X=class{get description(){return this._def.description}_getType(e){return ar(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:ar(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ke,ctx:{common:e.parent.common,data:e.data,parsedType:ar(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if(Dn(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){var i;let s={common:{issues:[],async:(i=r?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ar(e)},n=this._parseSync({data:e,path:s.path,parent:s});return _g(s,n)}"~validate"(e){var r,i;let s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ar(e)};if(!this["~standard"].async)try{let n=this._parseSync({data:e,path:[],parent:s});return si(n)?{value:n.value}:{issues:s.common.issues}}catch(n){!((i=(r=n?.message)===null||r===void 0?void 0:r.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:s}).then(n=>si(n)?{value:n.value}:{issues:s.common.issues})}async parseAsync(e,r){let i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){let i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ar(e)},s=this._parse({data:e,path:i.path,parent:i}),n=await(Dn(s)?s:Promise.resolve(s));return _g(i,n)}refine(e,r){let i=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,n)=>{let o=e(s),a=()=>n.addIssue({code:S.custom,...i(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,r){return this._refinement((i,s)=>e(i)?!0:(s.addIssue(typeof r=="function"?r(i,s):r),!1))}_refinement(e){return new pt({schema:this,typeName:W.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return St.create(this,this._def)}nullable(){return Kt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return cr.create(this)}promise(){return Or.create(this,this._def)}or(e){return di.create([this,e],this._def)}and(e){return hi.create(this,e,this._def)}transform(e){return new pt({...J(this._def),schema:this,typeName:W.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let r=typeof e=="function"?e:()=>e;return new bi({...J(this._def),innerType:this,defaultValue:r,typeName:W.ZodDefault})}brand(){return new Nn({typeName:W.ZodBranded,type:this,...J(this._def)})}catch(e){let r=typeof e=="function"?e:()=>e;return new yi({...J(this._def),innerType:this,catchValue:r,typeName:W.ZodCatch})}describe(e){let r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Mn.create(this,e)}readonly(){return vi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},MC=/^c[^\s-]{8,}$/i,zC=/^[0-9a-z]+$/,UC=/^[0-9A-HJKMNP-TV-Z]{26}$/i,FC=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,jC=/^[a-z0-9_-]{21}$/i,BC=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,qC=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,VC=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,WC="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Pu,HC=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ZC=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,GC=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,KC=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,YC=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,JC=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Cg="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",XC=new RegExp(`^${Cg}$`);function Eg(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function QC(t){return new RegExp(`^${Eg(t)}$`)}function Tg(t){let e=`${Cg}T${Eg(t)}`,r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function e1(t,e){return!!((e==="v4"||!e)&&HC.test(t)||(e==="v6"||!e)&&GC.test(t))}function t1(t,e){if(!BC.test(t))return!1;try{let[r]=t.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(i));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function r1(t,e){return!!((e==="v4"||!e)&&ZC.test(t)||(e==="v6"||!e)&&KC.test(t))}var Tr=class t extends X{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){let n=this._getOrReturnCtx(e);return A(n,{code:S.invalid_type,expected:L.string,received:n.parsedType}),H}let i=new Ke,s;for(let n of this._def.checks)if(n.kind==="min")e.data.length<n.value&&(s=this._getOrReturnCtx(e,s),A(s,{code:S.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),i.dirty());else if(n.kind==="max")e.data.length>n.value&&(s=this._getOrReturnCtx(e,s),A(s,{code:S.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),i.dirty());else if(n.kind==="length"){let o=e.data.length>n.value,a=e.data.length<n.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?A(s,{code:S.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):a&&A(s,{code:S.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),i.dirty())}else if(n.kind==="email")VC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"email",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="emoji")Pu||(Pu=new RegExp(WC,"u")),Pu.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"emoji",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="uuid")FC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"uuid",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="nanoid")jC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"nanoid",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="cuid")MC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"cuid",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="cuid2")zC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"cuid2",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="ulid")UC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"ulid",code:S.invalid_string,message:n.message}),i.dirty());else if(n.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),A(s,{validation:"url",code:S.invalid_string,message:n.message}),i.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"regex",code:S.invalid_string,message:n.message}),i.dirty())):n.kind==="trim"?e.data=e.data.trim():n.kind==="includes"?e.data.includes(n.value,n.position)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),i.dirty()):n.kind==="toLowerCase"?e.data=e.data.toLowerCase():n.kind==="toUpperCase"?e.data=e.data.toUpperCase():n.kind==="startsWith"?e.data.startsWith(n.value)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:{startsWith:n.value},message:n.message}),i.dirty()):n.kind==="endsWith"?e.data.endsWith(n.value)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:{endsWith:n.value},message:n.message}),i.dirty()):n.kind==="datetime"?Tg(n).test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:"datetime",message:n.message}),i.dirty()):n.kind==="date"?XC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:"date",message:n.message}),i.dirty()):n.kind==="time"?QC(n).test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{code:S.invalid_string,validation:"time",message:n.message}),i.dirty()):n.kind==="duration"?qC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"duration",code:S.invalid_string,message:n.message}),i.dirty()):n.kind==="ip"?e1(e.data,n.version)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"ip",code:S.invalid_string,message:n.message}),i.dirty()):n.kind==="jwt"?t1(e.data,n.alg)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"jwt",code:S.invalid_string,message:n.message}),i.dirty()):n.kind==="cidr"?r1(e.data,n.version)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"cidr",code:S.invalid_string,message:n.message}),i.dirty()):n.kind==="base64"?YC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"base64",code:S.invalid_string,message:n.message}),i.dirty()):n.kind==="base64url"?JC.test(e.data)||(s=this._getOrReturnCtx(e,s),A(s,{validation:"base64url",code:S.invalid_string,message:n.message}),i.dirty()):ce.assertNever(n);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(s=>e.test(s),{validation:r,code:S.invalid_string,...N.errToObj(i)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...N.errToObj(e)})}url(e){return this._addCheck({kind:"url",...N.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...N.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...N.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...N.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...N.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...N.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...N.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...N.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...N.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...N.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...N.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...N.errToObj(e)})}datetime(e){var r,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...N.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...N.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...N.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...N.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...N.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...N.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...N.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...N.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...N.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...N.errToObj(r)})}nonempty(e){return this.min(1,N.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};Tr.create=t=>{var e;return new Tr({checks:[],typeName:W.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...J(t)})};function i1(t,e){let r=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,s=r>i?r:i,n=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return n%o/Math.pow(10,s)}var ni=class t extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){let n=this._getOrReturnCtx(e);return A(n,{code:S.invalid_type,expected:L.number,received:n.parsedType}),H}let i,s=new Ke;for(let n of this._def.checks)n.kind==="int"?ce.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),A(i,{code:S.invalid_type,expected:"integer",received:"float",message:n.message}),s.dirty()):n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),s.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),s.dirty()):n.kind==="multipleOf"?i1(e.data,n.value)!==0&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.not_multiple_of,multipleOf:n.value,message:n.message}),s.dirty()):n.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),A(i,{code:S.not_finite,message:n.message}),s.dirty()):ce.assertNever(n);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,N.toString(r))}gt(e,r){return this.setLimit("min",e,!1,N.toString(r))}lte(e,r){return this.setLimit("max",e,!0,N.toString(r))}lt(e,r){return this.setLimit("max",e,!1,N.toString(r))}setLimit(e,r,i,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:N.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:N.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:N.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:N.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:N.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:N.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:N.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:N.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:N.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:N.toString(e)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ce.isInteger(e.value))}get isFinite(){let e=null,r=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}};ni.create=t=>new ni({checks:[],typeName:W.ZodNumber,coerce:t?.coerce||!1,...J(t)});var oi=class t extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==L.bigint)return this._getInvalidInput(e);let i,s=new Ke;for(let n of this._def.checks)n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),s.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),s.dirty()):n.kind==="multipleOf"?e.data%n.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),A(i,{code:S.not_multiple_of,multipleOf:n.value,message:n.message}),s.dirty()):ce.assertNever(n);return{status:s.value,value:e.data}}_getInvalidInput(e){let r=this._getOrReturnCtx(e);return A(r,{code:S.invalid_type,expected:L.bigint,received:r.parsedType}),H}gte(e,r){return this.setLimit("min",e,!0,N.toString(r))}gt(e,r){return this.setLimit("min",e,!1,N.toString(r))}lte(e,r){return this.setLimit("max",e,!0,N.toString(r))}lt(e,r){return this.setLimit("max",e,!1,N.toString(r))}setLimit(e,r,i,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:N.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:N.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:N.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:N.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:N.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:N.toString(r)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};oi.create=t=>{var e;return new oi({checks:[],typeName:W.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...J(t)})};var ai=class extends X{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.boolean,received:i.parsedType}),H}return Qe(e.data)}};ai.create=t=>new ai({typeName:W.ZodBoolean,coerce:t?.coerce||!1,...J(t)});var li=class t extends X{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){let n=this._getOrReturnCtx(e);return A(n,{code:S.invalid_type,expected:L.date,received:n.parsedType}),H}if(isNaN(e.data.getTime())){let n=this._getOrReturnCtx(e);return A(n,{code:S.invalid_date}),H}let i=new Ke,s;for(let n of this._def.checks)n.kind==="min"?e.data.getTime()<n.value&&(s=this._getOrReturnCtx(e,s),A(s,{code:S.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),i.dirty()):n.kind==="max"?e.data.getTime()>n.value&&(s=this._getOrReturnCtx(e,s),A(s,{code:S.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),i.dirty()):ce.assertNever(n);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:N.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:N.toString(r)})}get minDate(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}};li.create=t=>new li({checks:[],coerce:t?.coerce||!1,typeName:W.ZodDate,...J(t)});var cs=class extends X{_parse(e){if(this._getType(e)!==L.symbol){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.symbol,received:i.parsedType}),H}return Qe(e.data)}};cs.create=t=>new cs({typeName:W.ZodSymbol,...J(t)});var ci=class extends X{_parse(e){if(this._getType(e)!==L.undefined){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.undefined,received:i.parsedType}),H}return Qe(e.data)}};ci.create=t=>new ci({typeName:W.ZodUndefined,...J(t)});var ui=class extends X{_parse(e){if(this._getType(e)!==L.null){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.null,received:i.parsedType}),H}return Qe(e.data)}};ui.create=t=>new ui({typeName:W.ZodNull,...J(t)});var Ar=class extends X{constructor(){super(...arguments),this._any=!0}_parse(e){return Qe(e.data)}};Ar.create=t=>new Ar({typeName:W.ZodAny,...J(t)});var lr=class extends X{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Qe(e.data)}};lr.create=t=>new lr({typeName:W.ZodUnknown,...J(t)});var Ft=class extends X{_parse(e){let r=this._getOrReturnCtx(e);return A(r,{code:S.invalid_type,expected:L.never,received:r.parsedType}),H}};Ft.create=t=>new Ft({typeName:W.ZodNever,...J(t)});var us=class extends X{_parse(e){if(this._getType(e)!==L.undefined){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.void,received:i.parsedType}),H}return Qe(e.data)}};us.create=t=>new us({typeName:W.ZodVoid,...J(t)});var cr=class t extends X{_parse(e){let{ctx:r,status:i}=this._processInputParams(e),s=this._def;if(r.parsedType!==L.array)return A(r,{code:S.invalid_type,expected:L.array,received:r.parsedType}),H;if(s.exactLength!==null){let o=r.data.length>s.exactLength.value,a=r.data.length<s.exactLength.value;(o||a)&&(A(r,{code:o?S.too_big:S.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),i.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(A(r,{code:S.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),i.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(A(r,{code:S.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((o,a)=>s.type._parseAsync(new kt(r,o,r.path,a)))).then(o=>Ke.mergeArray(i,o));let n=[...r.data].map((o,a)=>s.type._parseSync(new kt(r,o,r.path,a)));return Ke.mergeArray(i,n)}get element(){return this._def.type}min(e,r){return new t({...this._def,minLength:{value:e,message:N.toString(r)}})}max(e,r){return new t({...this._def,maxLength:{value:e,message:N.toString(r)}})}length(e,r){return new t({...this._def,exactLength:{value:e,message:N.toString(r)}})}nonempty(e){return this.min(1,e)}};cr.create=(t,e)=>new cr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:W.ZodArray,...J(e)});function os(t){if(t instanceof ot){let e={};for(let r in t.shape){let i=t.shape[r];e[r]=St.create(os(i))}return new ot({...t._def,shape:()=>e})}else return t instanceof cr?new cr({...t._def,type:os(t.element)}):t instanceof St?St.create(os(t.unwrap())):t instanceof Kt?Kt.create(os(t.unwrap())):t instanceof Gt?Gt.create(t.items.map(e=>os(e))):t}var ot=class t extends X{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),r=ce.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==L.object){let u=this._getOrReturnCtx(e);return A(u,{code:S.invalid_type,expected:L.object,received:u.parsedType}),H}let{status:i,ctx:s}=this._processInputParams(e),{shape:n,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Ft&&this._def.unknownKeys==="strip"))for(let u in s.data)o.includes(u)||a.push(u);let l=[];for(let u of o){let c=n[u],d=s.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new kt(s,d,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Ft){let u=this._def.unknownKeys;if(u==="passthrough")for(let c of a)l.push({key:{status:"valid",value:c},value:{status:"valid",value:s.data[c]}});else if(u==="strict")a.length>0&&(A(s,{code:S.unrecognized_keys,keys:a}),i.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let u=this._def.catchall;for(let c of a){let d=s.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new kt(s,d,s.path,c)),alwaysSet:c in s.data})}}return s.common.async?Promise.resolve().then(async()=>{let u=[];for(let c of l){let d=await c.key,p=await c.value;u.push({key:d,value:p,alwaysSet:c.alwaysSet})}return u}).then(u=>Ke.mergeObjectSync(i,u)):Ke.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return N.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{var s,n,o,a;let l=(o=(n=(s=this._def).errorMap)===null||n===void 0?void 0:n.call(s,r,i).message)!==null&&o!==void 0?o:i.defaultError;return r.code==="unrecognized_keys"?{message:(a=N.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:W.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let r={};return ce.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}omit(e){let r={};return ce.objectKeys(this.shape).forEach(i=>{e[i]||(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}deepPartial(){return os(this)}partial(e){let r={};return ce.objectKeys(this.shape).forEach(i=>{let s=this.shape[i];e&&!e[i]?r[i]=s:r[i]=s.optional()}),new t({...this._def,shape:()=>r})}required(e){let r={};return ce.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])r[i]=this.shape[i];else{let n=this.shape[i];for(;n instanceof St;)n=n._def.innerType;r[i]=n}}),new t({...this._def,shape:()=>r})}keyof(){return Ag(ce.objectKeys(this.shape))}};ot.create=(t,e)=>new ot({shape:()=>t,unknownKeys:"strip",catchall:Ft.create(),typeName:W.ZodObject,...J(e)});ot.strictCreate=(t,e)=>new ot({shape:()=>t,unknownKeys:"strict",catchall:Ft.create(),typeName:W.ZodObject,...J(e)});ot.lazycreate=(t,e)=>new ot({shape:t,unknownKeys:"strip",catchall:Ft.create(),typeName:W.ZodObject,...J(e)});var di=class extends X{_parse(e){let{ctx:r}=this._processInputParams(e),i=this._def.options;function s(n){for(let a of n)if(a.result.status==="valid")return a.result;for(let a of n)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;let o=n.map(a=>new ft(a.ctx.common.issues));return A(r,{code:S.invalid_union,unionErrors:o}),H}if(r.common.async)return Promise.all(i.map(async n=>{let o={...r,common:{...r.common,issues:[]},parent:null};return{result:await n._parseAsync({data:r.data,path:r.path,parent:o}),ctx:o}})).then(s);{let n,o=[];for(let l of i){let u={...r,common:{...r.common,issues:[]},parent:null},c=l._parseSync({data:r.data,path:r.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!n&&(n={result:c,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(n)return r.common.issues.push(...n.ctx.common.issues),n.result;let a=o.map(l=>new ft(l));return A(r,{code:S.invalid_union,unionErrors:a}),H}}get options(){return this._def.options}};di.create=(t,e)=>new di({options:t,typeName:W.ZodUnion,...J(e)});var or=t=>t instanceof fi?or(t.schema):t instanceof pt?or(t.innerType()):t instanceof pi?[t.value]:t instanceof mi?t.options:t instanceof gi?ce.objectValues(t.enum):t instanceof bi?or(t._def.innerType):t instanceof ci?[void 0]:t instanceof ui?[null]:t instanceof St?[void 0,...or(t.unwrap())]:t instanceof Kt?[null,...or(t.unwrap())]:t instanceof Nn||t instanceof vi?or(t.unwrap()):t instanceof yi?or(t._def.innerType):[],Ta=class t extends X{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return A(r,{code:S.invalid_type,expected:L.object,received:r.parsedType}),H;let i=this.discriminator,s=r.data[i],n=this.optionsMap.get(s);return n?r.common.async?n._parseAsync({data:r.data,path:r.path,parent:r}):n._parseSync({data:r.data,path:r.path,parent:r}):(A(r,{code:S.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),H)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,i){let s=new Map;for(let n of r){let o=or(n.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,n)}}return new t({typeName:W.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:s,...J(i)})}};function Du(t,e){let r=ar(t),i=ar(e);if(t===e)return{valid:!0,data:t};if(r===L.object&&i===L.object){let s=ce.objectKeys(e),n=ce.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(let a of n){let l=Du(t[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(r===L.array&&i===L.array){if(t.length!==e.length)return{valid:!1};let s=[];for(let n=0;n<t.length;n++){let o=t[n],a=e[n],l=Du(o,a);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return r===L.date&&i===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var hi=class extends X{_parse(e){let{status:r,ctx:i}=this._processInputParams(e),s=(n,o)=>{if(Lu(n)||Lu(o))return H;let a=Du(n.value,o.value);return a.valid?((Ru(n)||Ru(o))&&r.dirty(),{status:r.value,value:a.data}):(A(i,{code:S.invalid_intersection_types}),H)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([n,o])=>s(n,o)):s(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}};hi.create=(t,e,r)=>new hi({left:t,right:e,typeName:W.ZodIntersection,...J(r)});var Gt=class t extends X{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.array)return A(i,{code:S.invalid_type,expected:L.array,received:i.parsedType}),H;if(i.data.length<this._def.items.length)return A(i,{code:S.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),H;!this._def.rest&&i.data.length>this._def.items.length&&(A(i,{code:S.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());let n=[...i.data].map((o,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new kt(i,o,i.path,a)):null}).filter(o=>!!o);return i.common.async?Promise.all(n).then(o=>Ke.mergeArray(r,o)):Ke.mergeArray(r,n)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};Gt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gt({items:t,typeName:W.ZodTuple,rest:null,...J(e)})};var Aa=class t extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.object)return A(i,{code:S.invalid_type,expected:L.object,received:i.parsedType}),H;let s=[],n=this._def.keyType,o=this._def.valueType;for(let a in i.data)s.push({key:n._parse(new kt(i,a,i.path,a)),value:o._parse(new kt(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?Ke.mergeObjectAsync(r,s):Ke.mergeObjectSync(r,s)}get element(){return this._def.valueType}static create(e,r,i){return r instanceof X?new t({keyType:e,valueType:r,typeName:W.ZodRecord,...J(i)}):new t({keyType:Tr.create(),valueType:e,typeName:W.ZodRecord,...J(r)})}},ds=class extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.map)return A(i,{code:S.invalid_type,expected:L.map,received:i.parsedType}),H;let s=this._def.keyType,n=this._def.valueType,o=[...i.data.entries()].map(([a,l],u)=>({key:s._parse(new kt(i,a,i.path,[u,"key"])),value:n._parse(new kt(i,l,i.path,[u,"value"]))}));if(i.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of o){let u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return H;(u.status==="dirty"||c.status==="dirty")&&r.dirty(),a.set(u.value,c.value)}return{status:r.value,value:a}})}else{let a=new Map;for(let l of o){let u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return H;(u.status==="dirty"||c.status==="dirty")&&r.dirty(),a.set(u.value,c.value)}return{status:r.value,value:a}}}};ds.create=(t,e,r)=>new ds({valueType:e,keyType:t,typeName:W.ZodMap,...J(r)});var hs=class t extends X{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.set)return A(i,{code:S.invalid_type,expected:L.set,received:i.parsedType}),H;let s=this._def;s.minSize!==null&&i.data.size<s.minSize.value&&(A(i,{code:S.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&i.data.size>s.maxSize.value&&(A(i,{code:S.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());let n=this._def.valueType;function o(l){let u=new Set;for(let c of l){if(c.status==="aborted")return H;c.status==="dirty"&&r.dirty(),u.add(c.value)}return{status:r.value,value:u}}let a=[...i.data.values()].map((l,u)=>n._parse(new kt(i,l,i.path,u)));return i.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,r){return new t({...this._def,minSize:{value:e,message:N.toString(r)}})}max(e,r){return new t({...this._def,maxSize:{value:e,message:N.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}};hs.create=(t,e)=>new hs({valueType:t,minSize:null,maxSize:null,typeName:W.ZodSet,...J(e)});var Oa=class t extends X{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.function)return A(r,{code:S.invalid_type,expected:L.function,received:r.parsedType}),H;function i(a,l){return Ca({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,ka(),ls].filter(u=>!!u),issueData:{code:S.invalid_arguments,argumentsError:l}})}function s(a,l){return Ca({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,ka(),ls].filter(u=>!!u),issueData:{code:S.invalid_return_type,returnTypeError:l}})}let n={errorMap:r.common.contextualErrorMap},o=r.data;if(this._def.returns instanceof Or){let a=this;return Qe(async function(...l){let u=new ft([]),c=await a._def.args.parseAsync(l,n).catch(f=>{throw u.addIssue(i(l,f)),u}),d=await Reflect.apply(o,this,c);return await a._def.returns._def.type.parseAsync(d,n).catch(f=>{throw u.addIssue(s(d,f)),u})})}else{let a=this;return Qe(function(...l){let u=a._def.args.safeParse(l,n);if(!u.success)throw new ft([i(l,u.error)]);let c=Reflect.apply(o,this,u.data),d=a._def.returns.safeParse(c,n);if(!d.success)throw new ft([s(c,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:Gt.create(e).rest(lr.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,i){return new t({args:e||Gt.create([]).rest(lr.create()),returns:r||lr.create(),typeName:W.ZodFunction,...J(i)})}},fi=class extends X{get schema(){return this._def.getter()}_parse(e){let{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}};fi.create=(t,e)=>new fi({getter:t,typeName:W.ZodLazy,...J(e)});var pi=class extends X{_parse(e){if(e.data!==this._def.value){let r=this._getOrReturnCtx(e);return A(r,{received:r.data,code:S.invalid_literal,expected:this._def.value}),H}return{status:"valid",value:e.data}}get value(){return this._def.value}};pi.create=(t,e)=>new pi({value:t,typeName:W.ZodLiteral,...J(e)});function Ag(t,e){return new mi({values:t,typeName:W.ZodEnum,...J(e)})}var mi=class t extends X{constructor(){super(...arguments),Ln.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let r=this._getOrReturnCtx(e),i=this._def.values;return A(r,{expected:ce.joinValues(i),received:r.parsedType,code:S.invalid_type}),H}if(Ea(this,Ln,"f")||kg(this,Ln,new Set(this._def.values),"f"),!Ea(this,Ln,"f").has(e.data)){let r=this._getOrReturnCtx(e),i=this._def.values;return A(r,{received:r.data,code:S.invalid_enum_value,options:i}),H}return Qe(e.data)}get options(){return this._def.values}get enum(){let e={};for(let r of this._def.values)e[r]=r;return e}get Values(){let e={};for(let r of this._def.values)e[r]=r;return e}get Enum(){let e={};for(let r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return t.create(e,{...this._def,...r})}exclude(e,r=this._def){return t.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}};Ln=new WeakMap;mi.create=Ag;var gi=class extends X{constructor(){super(...arguments),Rn.set(this,void 0)}_parse(e){let r=ce.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==L.string&&i.parsedType!==L.number){let s=ce.objectValues(r);return A(i,{expected:ce.joinValues(s),received:i.parsedType,code:S.invalid_type}),H}if(Ea(this,Rn,"f")||kg(this,Rn,new Set(ce.getValidEnumValues(this._def.values)),"f"),!Ea(this,Rn,"f").has(e.data)){let s=ce.objectValues(r);return A(i,{received:i.data,code:S.invalid_enum_value,options:s}),H}return Qe(e.data)}get enum(){return this._def.values}};Rn=new WeakMap;gi.create=(t,e)=>new gi({values:t,typeName:W.ZodNativeEnum,...J(e)});var Or=class extends X{unwrap(){return this._def.type}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.promise&&r.common.async===!1)return A(r,{code:S.invalid_type,expected:L.promise,received:r.parsedType}),H;let i=r.parsedType===L.promise?r.data:Promise.resolve(r.data);return Qe(i.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}};Or.create=(t,e)=>new Or({type:t,typeName:W.ZodPromise,...J(e)});var pt=class extends X{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===W.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:r,ctx:i}=this._processInputParams(e),s=this._def.effect||null,n={addIssue:o=>{A(i,o),o.fatal?r.abort():r.dirty()},get path(){return i.path}};if(n.addIssue=n.addIssue.bind(n),s.type==="preprocess"){let o=s.transform(i.data,n);if(i.common.async)return Promise.resolve(o).then(async a=>{if(r.value==="aborted")return H;let l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?H:l.status==="dirty"||r.value==="dirty"?as(l.value):l});{if(r.value==="aborted")return H;let a=this._def.schema._parseSync({data:o,path:i.path,parent:i});return a.status==="aborted"?H:a.status==="dirty"||r.value==="dirty"?as(a.value):a}}if(s.type==="refinement"){let o=a=>{let l=s.refinement(a,n);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){let a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?H:(a.status==="dirty"&&r.dirty(),o(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?H:(a.status==="dirty"&&r.dirty(),o(a.value).then(()=>({status:r.value,value:a.value}))))}if(s.type==="transform")if(i.common.async===!1){let o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!si(o))return o;let a=s.transform(o.value,n);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>si(o)?Promise.resolve(s.transform(o.value,n)).then(a=>({status:r.value,value:a})):o);ce.assertNever(s)}};pt.create=(t,e,r)=>new pt({schema:t,typeName:W.ZodEffects,effect:e,...J(r)});pt.createWithPreprocess=(t,e,r)=>new pt({schema:e,effect:{type:"preprocess",transform:t},typeName:W.ZodEffects,...J(r)});var St=class extends X{_parse(e){return this._getType(e)===L.undefined?Qe(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};St.create=(t,e)=>new St({innerType:t,typeName:W.ZodOptional,...J(e)});var Kt=class extends X{_parse(e){return this._getType(e)===L.null?Qe(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Kt.create=(t,e)=>new Kt({innerType:t,typeName:W.ZodNullable,...J(e)});var bi=class extends X{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return r.parsedType===L.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}};bi.create=(t,e)=>new bi({innerType:t,typeName:W.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...J(e)});var yi=class extends X{_parse(e){let{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Dn(s)?s.then(n=>({status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new ft(i.common.issues)},input:i.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ft(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}};yi.create=(t,e)=>new yi({innerType:t,typeName:W.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...J(e)});var fs=class extends X{_parse(e){if(this._getType(e)!==L.nan){let i=this._getOrReturnCtx(e);return A(i,{code:S.invalid_type,expected:L.nan,received:i.parsedType}),H}return{status:"valid",value:e.data}}};fs.create=t=>new fs({typeName:W.ZodNaN,...J(t)});var s1=Symbol("zod_brand"),Nn=class extends X{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}},Mn=class t extends X{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{let n=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return n.status==="aborted"?H:n.status==="dirty"?(r.dirty(),as(n.value)):this._def.out._parseAsync({data:n.value,path:i.path,parent:i})})();{let s=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?H:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:i.path,parent:i})}}static create(e,r){return new t({in:e,out:r,typeName:W.ZodPipeline})}},vi=class extends X{_parse(e){let r=this._def.innerType._parse(e),i=s=>(si(s)&&(s.value=Object.freeze(s.value)),s);return Dn(r)?r.then(s=>i(s)):i(r)}unwrap(){return this._def.innerType}};vi.create=(t,e)=>new vi({innerType:t,typeName:W.ZodReadonly,...J(e)});function Og(t,e={},r){return t?Ar.create().superRefine((i,s)=>{var n,o;if(!t(i)){let a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(o=(n=a.fatal)!==null&&n!==void 0?n:r)!==null&&o!==void 0?o:!0,u=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...u,fatal:l})}}):Ar.create()}var n1={object:ot.lazycreate},W;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(W||(W={}));var o1=(t,e={message:`Input not instance of ${t.name}`})=>Og(r=>r instanceof t,e),$g=Tr.create,Pg=ni.create,a1=fs.create,l1=oi.create,Ig=ai.create,c1=li.create,u1=cs.create,d1=ci.create,h1=ui.create,f1=Ar.create,p1=lr.create,m1=Ft.create,g1=us.create,b1=cr.create,y1=ot.create,v1=ot.strictCreate,w1=di.create,_1=Ta.create,x1=hi.create,S1=Gt.create,k1=Aa.create,C1=ds.create,E1=hs.create,T1=Oa.create,A1=fi.create,O1=pi.create,$1=mi.create,P1=gi.create,I1=Or.create,xg=pt.create,L1=St.create,R1=Kt.create,D1=pt.createWithPreprocess,N1=Mn.create,M1=()=>$g().optional(),z1=()=>Pg().optional(),U1=()=>Ig().optional(),F1={string:t=>Tr.create({...t,coerce:!0}),number:t=>ni.create({...t,coerce:!0}),boolean:t=>ai.create({...t,coerce:!0}),bigint:t=>oi.create({...t,coerce:!0}),date:t=>li.create({...t,coerce:!0})},j1=H,D=Object.freeze({__proto__:null,defaultErrorMap:ls,setErrorMap:DC,getErrorMap:ka,makeIssue:Ca,EMPTY_PATH:NC,addIssueToContext:A,ParseStatus:Ke,INVALID:H,DIRTY:as,OK:Qe,isAborted:Lu,isDirty:Ru,isValid:si,isAsync:Dn,get util(){return ce},get objectUtil(){return Iu},ZodParsedType:L,getParsedType:ar,ZodType:X,datetimeRegex:Tg,ZodString:Tr,ZodNumber:ni,ZodBigInt:oi,ZodBoolean:ai,ZodDate:li,ZodSymbol:cs,ZodUndefined:ci,ZodNull:ui,ZodAny:Ar,ZodUnknown:lr,ZodNever:Ft,ZodVoid:us,ZodArray:cr,ZodObject:ot,ZodUnion:di,ZodDiscriminatedUnion:Ta,ZodIntersection:hi,ZodTuple:Gt,ZodRecord:Aa,ZodMap:ds,ZodSet:hs,ZodFunction:Oa,ZodLazy:fi,ZodLiteral:pi,ZodEnum:mi,ZodNativeEnum:gi,ZodPromise:Or,ZodEffects:pt,ZodTransformer:pt,ZodOptional:St,ZodNullable:Kt,ZodDefault:bi,ZodCatch:yi,ZodNaN:fs,BRAND:s1,ZodBranded:Nn,ZodPipeline:Mn,ZodReadonly:vi,custom:Og,Schema:X,ZodSchema:X,late:n1,get ZodFirstPartyTypeKind(){return W},coerce:F1,any:f1,array:b1,bigint:l1,boolean:Ig,date:c1,discriminatedUnion:_1,effect:xg,enum:$1,function:T1,instanceof:o1,intersection:x1,lazy:A1,literal:O1,map:C1,nan:a1,nativeEnum:P1,never:m1,null:h1,nullable:R1,number:Pg,object:y1,oboolean:U1,onumber:z1,optional:L1,ostring:M1,pipeline:N1,preprocess:D1,promise:I1,record:k1,set:E1,strictObject:v1,string:$g,symbol:u1,transformer:xg,tuple:S1,undefined:d1,union:w1,unknown:p1,void:g1,NEVER:j1,ZodIssueCode:S,quotelessJson:RC,ZodError:ft});var $r=class{_state;constructor(e){this._state=e}state=()=>({...this._state});setState=e=>{this._state=typeof e=="function"?e(this._state):{...this._state,...e}}};var Lg=zn;function zn(t){let e=t;var r={}.toString.call(t).slice(8,-1);if(r=="Set")return new Set([...t].map(s=>zn(s)));if(r=="Map")return new Map([...t].map(s=>[zn(s[0]),zn(s[1])]));if(r=="Date")return new Date(t.getTime());if(r=="RegExp")return RegExp(t.source,B1(t));if(r=="Array"||r=="Object"){e=Array.isArray(t)?[]:{};for(var i in t)e[i]=zn(t[i])}return e}function B1(t){if(typeof t.source.flags=="string")return t.source.flags;var e=[];return t.global&&e.push("g"),t.ignoreCase&&e.push("i"),t.multiline&&e.push("m"),t.sticky&&e.push("y"),t.unicode&&e.push("u"),e.join("")}function q1(t,e){return Z1(t)||H1(t,e)||W1(t,e)||V1()}function V1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W1(t,e){if(t){if(typeof t=="string")return Rg(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Rg(t,e):void 0}}function Rg(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function H1(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,s,n,o,a=[],l=!0,u=!1;try{if(n=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(i=n.call(r)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(c){u=!0,s=c}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}function Z1(t){if(Array.isArray(t))return t}function mt(t){let e=t._def;if(t.isNullable()&&e.typeName!=="ZodDefault")return null;switch(e.typeName){case"ZodObject":{let i={};for(let s of Object.entries(e.shape())){var r=q1(s,2);let n=r[0],o=r[1];i[n]=mt(o)}return i}case"ZodRecord":return{};case"ZodString":{if(e.checks){for(let i of e.checks)if(i.kind==="uuid")return crypto.randomUUID()}return""}case"ZodNumber":for(let i of e.checks||[])if(["min","max"].includes(i.kind))return i.value;return 0;case"ZodBigInt":return 0;case"ZodBoolean":return!1;case"ZodDate":return new Date;case"ZodLiteral":return e.value;case"ZodEffects":return mt(e.schema);case"ZodArray":return[];case"ZodTuple":return e.items.map(i=>mt(i));case"ZodSet":return new Set;case"ZodMap":return new Map;case"ZodEnum":return e.values[0];case"ZodNativeEnum":return Object.values(e.values).filter(i=>typeof e.values[i]!="number")[0];case"ZodUnion":return mt(e.options[0]);case"ZodDiscriminatedUnion":return mt(Array.from(e.options.values())[0]);case"ZodIntersection":return Object.assign(mt(e.left),mt(e.right));case"ZodFunction":return(...i)=>mt(e.returns);case"ZodLazy":return mt(e.getter());case"ZodPipeline":return mt(e.in);case"ZodDefault":return e.innerType._def.typeName==="ZodFunction"?e.defaultValue():Lg(e.defaultValue());case"ZodNaN":return Number.NaN;case"ZodNull":case"ZodAny":return null;case"ZodOptional":return mt(e.innerType);default:return}}var G1=new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u),K1=new RegExp(/^([\+][1-9]{2})?[ ]?([0-9 ]{8})$/),Y1=new RegExp(/^[\p{L}'][ \p{L}\p{N}'-,]{8,}$/u),J1=new RegExp(/^\d{4}$/),Dg=D.string().trim().email("Must be a valid email address"),yP=D.string().trim().regex(G1,"Must be a valid name"),Ng=D.string().trim().regex(Y1,"Must be a valid street address"),Mg=D.string().trim().regex(J1,"Must be a valid zip code"),zg=D.preprocess(t=>t?.split(" ").join(""),D.string().trim().regex(K1,"Must be a valid phone number")),Nu=(t,e)=>{let i={...mt(t),...e};return console.log(i),i},Pr=(t,e)=>{let r=Nu(t,e);return t.parse(r)},Mu=(t,e,r)=>{let i=t.safeParse(e);return i.success?r(null):r(i.error.flatten()),i.success};var Un=(r=>(r.ALL="ALL",r.ANY="ANY",r))(Un||{}),Q1=D.object({text:D.string().optional().default(""),tagKeys:D.array(D.string()).optional().default([]),indexLetter:D.string().optional().default(""),tagsMatchType:D.nativeEnum(Un).default("ALL")}),$a=class t extends $r{constructor(e){super(e)}static from(e){let r=Pr(Q1,e);return new t(r)}setText(e){this.setState({text:e})}setIndexLetter(e){let r=e.toLocaleLowerCase()!=this.state().indexLetter?e:"";this.setState({indexLetter:r.toLocaleLowerCase()})}setTag(e,r=!0){let i=this.state().tagKeys,s=i.indexOf(e),n=r?s<0?i.concat(e):[...i.slice(0,s),...i.slice(s+1)]:[e];this.setState({tagKeys:n})}setTagsMatchType(e){this.setState({tagsMatchType:e})}isActiveIndexLetter(e){return this.state().indexLetter===e.toLocaleLowerCase()}hasTag(e){return this.state().tagKeys.includes(e)}};var Pa=class{config;client=new wg;constructor(e){let{namespace:r,database:i,url:s}=e;this.config={namespace:r,database:i,url:s},Object.freeze(this.config)}async initialize(){let{url:e,namespace:r,database:i}=this.config;try{await this.client.connect(e,{namespace:r,database:i})}catch(s){throw console.error("Failed to connect to SurrealDB:",s instanceof Error?s.message:String(s)),await this.client.close(),s}}async authenticate(e,r){let i=!1;try{i=await this.client.authenticate(e)}catch(s){r||console.error(s.message)}return i}async getListings(e){let r="",i=[];if(e?.indexLetter&&i.push(`string::starts_with(string::lowercase(title), '${e.indexLetter.toLocaleLowerCase()}')`),e?.tagKeys?.length){let o=e.tagKeys.map(a=>a).join("', '");e.tagsMatchType==="ALL"?i.push(`array::len(array::intersect(tags.key, ['${o}'])) = ${e.tagKeys.length}`):i.push(`tags[WHERE key IN ['${o}']];`)}i.length&&(r=` WHERE ${i.join(" AND ")}`);let s=`SELECT *, tags.*.* FROM listings${r};`;return console.log({query:s}),ps(await this.client.query(s)).map(Fn)}async getIndexLetters(){return ps(await this.client.query("SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM listings GROUP BY letter;"))}async getTags(){let e=`
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;return console.log({query:e}),ps(await this.client.query(e)).map(Fn)}async getUserData(){let e="SELECT * FROM users;";console.log({query:e});let r=ps(await this.client.query(e),2);return Fn(r)}async getListingsByEmail(e){let r=`SELECT * FROM listings WHERE owner.email = '${e}';`;return console.log({query:r}),ps(await this.client.query(r),2).map(Fn)}async createListing(e){let r=";";return console.log({query:r}),ps(await this.client.query(r),2).map(Fn)}},ps=(t,e=1)=>{let r=t;for(;e>0&&Array.isArray(r)&&r.length===1;)r=r[0],e--;return r},Fn=t=>t.id!==void 0?{...t,id:`${t.id.tb}:${t.id.id}`}:t;var Ug=async t=>{let e=new Pa(t);return await e.initialize(),e};var eE=Is(jg()),zu=Is(qg());var wi=async(t=0,e)=>new Promise(r=>setTimeout(()=>r(e?e():void 0),t));var jn=t=>JSON.parse(JSON.stringify(t));var Ia=class{configsUrl;constructor(e){this.configsUrl=e}async loadConfigs(){return console.log({configsUrl:this.configsUrl}),await wi(),{auth0:{domain:"intergate.eu.auth0.com",clientId:"d63m36lvjcGcQZoYjF06IIgczFdIHGqN",authorizationParams:{audience:"https://surrealdb.com/",redirect_uri:window.location.origin}},surreal:{namespace:"intergate",database:"gul-info",url:"https://127.0.0.1:7999/rpc"}}}};var Vg=async t=>await new Ia(t).loadConfigs();var Wg=ji(),Hg=t=>{let e=async()=>{let i=await Vg("https://intergate.io/configs/gul-info-hurdal"),s=await Ug(i.surreal);return{configs:i,db:s}},[r]=st(e);return z(Ge,{get when(){return r()},get children(){return z(Wg.Provider,{get value(){return r()},get children(){return t.children}})}})},Zg=()=>{let t=Kr(Wg);if(!t)throw new Error("useSystem must be used within an CoreProvider");return t};function Yt(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]])}return r}var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ed(t,e){return t(e={exports:{}},e.exports),e.exports}var _i=ed(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function i(){var s=this;this.locked=new Map,this.addToLocked=function(n,o){var a=s.locked.get(n);a===void 0?o===void 0?s.locked.set(n,[]):s.locked.set(n,[o]):o!==void 0&&(a.unshift(o),s.locked.set(n,a))},this.isLocked=function(n){return s.locked.has(n)},this.lock=function(n){return new Promise(function(o,a){s.isLocked(n)?s.addToLocked(n,o):(s.addToLocked(n),o())})},this.unlock=function(n){var o=s.locked.get(n);if(o!==void 0&&o.length!==0){var a=o.pop();s.locked.set(n,o),a!==void 0&&setTimeout(a,0)}else s.locked.delete(n)}}return i.getInstance=function(){return i.instance===void 0&&(i.instance=new i),i.instance},i}();e.default=function(){return r.getInstance()}});Qu(_i);var tE=Qu(ed(function(t,e){var r=xi&&xi.__awaiter||function(c,d,p,f){return new(p||(p=Promise))(function(m,v){function b(x){try{w(f.next(x))}catch(_){v(_)}}function y(x){try{w(f.throw(x))}catch(_){v(_)}}function w(x){x.done?m(x.value):new p(function(_){_(x.value)}).then(b,y)}w((f=f.apply(c,d||[])).next())})},i=xi&&xi.__generator||function(c,d){var p,f,m,v,b={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return v={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function y(w){return function(x){return function(_){if(p)throw new TypeError("Generator is already executing.");for(;b;)try{if(p=1,f&&(m=2&_[0]?f.return:_[0]?f.throw||((m=f.return)&&m.call(f),0):f.next)&&!(m=m.call(f,_[1])).done)return m;switch(f=0,m&&(_=[2&_[0],m.value]),_[0]){case 0:case 1:m=_;break;case 4:return b.label++,{value:_[1],done:!1};case 5:b.label++,f=_[1],_=[0];continue;case 7:_=b.ops.pop(),b.trys.pop();continue;default:if(m=b.trys,!((m=m.length>0&&m[m.length-1])||_[0]!==6&&_[0]!==2)){b=0;continue}if(_[0]===3&&(!m||_[1]>m[0]&&_[1]<m[3])){b.label=_[1];break}if(_[0]===6&&b.label<m[1]){b.label=m[1],m=_;break}if(m&&b.label<m[2]){b.label=m[2],b.ops.push(_);break}m[2]&&b.ops.pop(),b.trys.pop();continue}_=d.call(c,b)}catch(O){_=[6,O],f=0}finally{p=m=0}if(5&_[0])throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}([w,x])}}},s=xi;Object.defineProperty(e,"__esModule",{value:!0});var n="browser-tabs-lock-key",o={key:function(c){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},getItem:function(c){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},clear:function(){return r(s,void 0,void 0,function(){return i(this,function(c){return[2,window.localStorage.clear()]})})},removeItem:function(c){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},setItem:function(c,d){return r(s,void 0,void 0,function(){return i(this,function(p){throw new Error("Unsupported")})})},keySync:function(c){return window.localStorage.key(c)},getItemSync:function(c){return window.localStorage.getItem(c)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(c){return window.localStorage.removeItem(c)},setItemSync:function(c,d){return window.localStorage.setItem(c,d)}};function a(c){return new Promise(function(d){return setTimeout(d,c)})}function l(c){for(var d="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",p="",f=0;f<c;f++)p+=d[Math.floor(Math.random()*d.length)];return p}var u=function(){function c(d){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=d,c.waiters===void 0&&(c.waiters=[])}return c.prototype.acquireLock=function(d,p){return p===void 0&&(p=5e3),r(this,void 0,void 0,function(){var f,m,v,b,y,w,x;return i(this,function(_){switch(_.label){case 0:f=Date.now()+l(4),m=Date.now()+p,v=n+"-"+d,b=this.storageHandler===void 0?o:this.storageHandler,_.label=1;case 1:return Date.now()<m?[4,a(30)]:[3,8];case 2:return _.sent(),b.getItemSync(v)!==null?[3,5]:(y=this.id+"-"+d+"-"+f,[4,a(Math.floor(25*Math.random()))]);case 3:return _.sent(),b.setItemSync(v,JSON.stringify({id:this.id,iat:f,timeoutKey:y,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return _.sent(),(w=b.getItemSync(v))!==null&&(x=JSON.parse(w)).id===this.id&&x.iat===f?(this.acquiredIatSet.add(f),this.refreshLockWhileAcquired(v,f),[2,!0]):[3,7];case 5:return c.lockCorrector(this.storageHandler===void 0?o:this.storageHandler),[4,this.waitForSomethingToChange(m)];case 6:_.sent(),_.label=7;case 7:return f=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},c.prototype.refreshLockWhileAcquired=function(d,p){return r(this,void 0,void 0,function(){var f=this;return i(this,function(m){return setTimeout(function(){return r(f,void 0,void 0,function(){var v,b,y;return i(this,function(w){switch(w.label){case 0:return[4,_i.default().lock(p)];case 1:return w.sent(),this.acquiredIatSet.has(p)?(v=this.storageHandler===void 0?o:this.storageHandler,(b=v.getItemSync(d))===null?(_i.default().unlock(p),[2]):((y=JSON.parse(b)).timeRefreshed=Date.now(),v.setItemSync(d,JSON.stringify(y)),_i.default().unlock(p),this.refreshLockWhileAcquired(d,p),[2])):(_i.default().unlock(p),[2])}})})},1e3),[2]})})},c.prototype.waitForSomethingToChange=function(d){return r(this,void 0,void 0,function(){return i(this,function(p){switch(p.label){case 0:return[4,new Promise(function(f){var m=!1,v=Date.now(),b=!1;function y(){if(b||(window.removeEventListener("storage",y),c.removeFromWaiting(y),clearTimeout(w),b=!0),!m){m=!0;var x=50-(Date.now()-v);x>0?setTimeout(f,x):f(null)}}window.addEventListener("storage",y),c.addToWaiting(y);var w=setTimeout(y,Math.max(0,d-Date.now()))})];case 1:return p.sent(),[2]}})})},c.addToWaiting=function(d){this.removeFromWaiting(d),c.waiters!==void 0&&c.waiters.push(d)},c.removeFromWaiting=function(d){c.waiters!==void 0&&(c.waiters=c.waiters.filter(function(p){return p!==d}))},c.notifyWaiters=function(){c.waiters!==void 0&&c.waiters.slice().forEach(function(d){return d()})},c.prototype.releaseLock=function(d){return r(this,void 0,void 0,function(){return i(this,function(p){switch(p.label){case 0:return[4,this.releaseLock__private__(d)];case 1:return[2,p.sent()]}})})},c.prototype.releaseLock__private__=function(d){return r(this,void 0,void 0,function(){var p,f,m,v;return i(this,function(b){switch(b.label){case 0:return p=this.storageHandler===void 0?o:this.storageHandler,f=n+"-"+d,(m=p.getItemSync(f))===null?[2]:(v=JSON.parse(m)).id!==this.id?[3,2]:[4,_i.default().lock(v.iat)];case 1:b.sent(),this.acquiredIatSet.delete(v.iat),p.removeItemSync(f),_i.default().unlock(v.iat),c.notifyWaiters(),b.label=2;case 2:return[2]}})})},c.lockCorrector=function(d){for(var p=Date.now()-5e3,f=d,m=[],v=0;;){var b=f.keySync(v);if(b===null)break;m.push(b),v++}for(var y=!1,w=0;w<m.length;w++){var x=m[w];if(x.includes(n)){var _=f.getItemSync(x);if(_!==null){var O=JSON.parse(_);(O.timeRefreshed===void 0&&O.timeAcquired<p||O.timeRefreshed!==void 0&&O.timeRefreshed<p)&&(f.removeItemSync(x),y=!0)}}}y&&c.notifyWaiters()},c.waiters=void 0,c}();e.default=u})),rE={timeoutInSeconds:60},rb={name:"auth0-spa-js",version:"2.1.3"},ib=()=>Date.now(),et=class t extends Error{constructor(e,r){super(r),this.error=e,this.error_description=r,Object.setPrototypeOf(this,t.prototype)}static fromPayload({error:e,error_description:r}){return new t(e,r)}},qu=class t extends et{constructor(e,r,i,s=null){super(e,r),this.state=i,this.appState=s,Object.setPrototypeOf(this,t.prototype)}},qn=class t extends et{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,t.prototype)}},Vu=class t extends qn{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Wu=class t extends et{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Hu=class t extends et{constructor(e,r,i){super(e,r),this.mfa_token=i,Object.setPrototypeOf(this,t.prototype)}},Da=class t extends et{constructor(e,r){super("missing_refresh_token",`Missing Refresh Token (audience: '${Gg(e,["default"])}', scope: '${Gg(r)}')`),this.audience=e,this.scope=r,Object.setPrototypeOf(this,t.prototype)}};function Gg(t,e=[]){return t&&!e.includes(t)?t:""}var Ra=()=>window.crypto,Uu=()=>{let t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",e="";return Array.from(Ra().getRandomValues(new Uint8Array(43))).forEach(r=>e+=t[r%t.length]),e},Kg=t=>btoa(t),Zu=t=>{var{clientId:e}=t,r=Yt(t,["clientId"]);return new URLSearchParams((i=>Object.keys(i).filter(s=>i[s]!==void 0).reduce((s,n)=>Object.assign(Object.assign({},s),{[n]:i[n]}),{}))(Object.assign({client_id:e},r))).toString()},Yg=t=>(e=>decodeURIComponent(atob(e).split("").map(r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g,"/").replace(/-/g,"+")),iE=async(t,e)=>{let r=await fetch(t,e);return{ok:r.ok,json:await r.json()}},sE=async(t,e,r)=>{let i=new AbortController,s;return e.signal=i.signal,Promise.race([iE(t,e),new Promise((n,o)=>{s=setTimeout(()=>{i.abort(),o(new Error("Timeout when executing 'fetch'"))},r)})]).finally(()=>{clearTimeout(s)})},nE=async(t,e,r,i,s,n,o)=>{return a={auth:{audience:e,scope:r},timeout:s,fetchUrl:t,fetchOptions:i,useFormData:o},l=n,new Promise(function(u,c){let d=new MessageChannel;d.port1.onmessage=function(p){p.data.error?c(new Error(p.data.error)):u(p.data),d.port1.close()},l.postMessage(a,[d.port2])});var a,l},oE=async(t,e,r,i,s,n,o=1e4)=>s?nE(t,e,r,i,o,s,n):sE(t,i,o);async function aE(t,e){var{baseUrl:r,timeout:i,audience:s,scope:n,auth0Client:o,useFormData:a}=t,l=Yt(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);let u=a?Zu(l):JSON.stringify(l);return await async function(c,d,p,f,m,v,b){let y,w=null;for(let G=0;G<3;G++)try{y=await oE(c,p,f,m,v,b,d),w=null;break}catch(ve){w=ve}if(w)throw w;let x=y.json,{error:_,error_description:O}=x,se=Yt(x,["error","error_description"]),{ok:ae}=y;if(!ae){let G=O||`HTTP error. Unable to fetch ${c}`;throw _==="mfa_required"?new Hu(_,G,se.mfa_token):_==="missing_refresh_token"?new Da(p,f):new et(_||"request_error",G)}return se}(`${r}/oauth/token`,i,s||"default",n,{method:"POST",body:u,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(o||rb))}},e,a)}var La=(...t)=>{return(e=t.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ");var e},ur=class t{constructor(e,r="@@auth0spajs@@",i){this.prefix=r,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){let[r,i,s,n]=e.split("::");return new t({clientId:i,scope:n,audience:s},r)}static fromCacheEntry(e){let{scope:r,audience:i,client_id:s}=e;return new t({scope:r,audience:i,clientId:s})}},Gu=class{set(e,r){localStorage.setItem(e,JSON.stringify(r))}get(e){let r=window.localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch{return}}remove(e){localStorage.removeItem(e)}allKeys(){return Object.keys(window.localStorage).filter(e=>e.startsWith("@@auth0spajs@@"))}},Na=class{constructor(){this.enclosedCache=function(){let e={};return{set(r,i){e[r]=i},get(r){let i=e[r];if(i)return i},remove(r){delete e[r]},allKeys:()=>Object.keys(e)}}()}},Ku=class{constructor(e,r,i){this.cache=e,this.keyManifest=r,this.nowProvider=i||ib}async setIdToken(e,r,i){var s;let n=this.getIdTokenCacheKey(e);await this.cache.set(n,{id_token:r,decodedToken:i}),await((s=this.keyManifest)===null||s===void 0?void 0:s.add(n))}async getIdToken(e){let r=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!r&&e.scope&&e.audience){let i=await this.get(e);return!i||!i.id_token||!i.decodedToken?void 0:{id_token:i.id_token,decodedToken:i.decodedToken}}if(r)return{id_token:r.id_token,decodedToken:r.decodedToken}}async get(e,r=0){var i;let s=await this.cache.get(e.toKey());if(!s){let a=await this.getCacheKeys();if(!a)return;let l=this.matchExistingCacheKey(e,a);l&&(s=await this.cache.get(l))}if(!s)return;let n=await this.nowProvider(),o=Math.floor(n/1e3);return s.expiresAt-r<o?s.body.refresh_token?(s.body={refresh_token:s.body.refresh_token},await this.cache.set(e.toKey(),s),s.body):(await this.cache.remove(e.toKey()),void await((i=this.keyManifest)===null||i===void 0?void 0:i.remove(e.toKey()))):s.body}async set(e){var r;let i=new ur({clientId:e.client_id,scope:e.scope,audience:e.audience}),s=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),s),await((r=this.keyManifest)===null||r===void 0?void 0:r.add(i.toKey()))}async clear(e){var r;let i=await this.getCacheKeys();i&&(await i.filter(s=>!e||s.includes(e)).reduce(async(s,n)=>{await s,await this.cache.remove(n)},Promise.resolve()),await((r=this.keyManifest)===null||r===void 0?void 0:r.clear()))}async wrapCacheEntry(e){let r=await this.nowProvider();return{body:e,expiresAt:Math.floor(r/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?(e=await this.keyManifest.get())===null||e===void 0?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new ur({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,r){return r.filter(i=>{var s;let n=ur.fromKey(i),o=new Set(n.scope&&n.scope.split(" ")),a=((s=e.scope)===null||s===void 0?void 0:s.split(" "))||[],l=n.scope&&a.reduce((u,c)=>u&&o.has(c),!0);return n.prefix==="@@auth0spajs@@"&&n.clientId===e.clientId&&n.audience===e.audience&&l})[0]}},Yu=class{constructor(e,r,i){this.storage=e,this.clientId=r,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}},Bn=t=>typeof t=="number",lE=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],cE=t=>{if(!t.id_token)throw new Error("ID token is required but missing");let e=(n=>{let o=n.split("."),[a,l,u]=o;if(o.length!==3||!a||!l||!u)throw new Error("ID token could not be decoded");let c=JSON.parse(Yg(l)),d={__raw:n},p={};return Object.keys(c).forEach(f=>{d[f]=c[f],lE.includes(f)||(p[f]=c[f])}),{encoded:{header:a,payload:l,signature:u},header:JSON.parse(Yg(a)),claims:d,user:p}})(t.id_token);if(!e.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(e.claims.iss!==t.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);if(!e.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(e.header.alg!=="RS256")throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!e.claims.aud||typeof e.claims.aud!="string"&&!Array.isArray(e.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(e.claims.aud)){if(!e.claims.aud.includes(t.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);if(e.claims.aud.length>1){if(!e.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(e.claims.azp!==t.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)}}else if(e.claims.aud!==t.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);if(t.nonce){if(!e.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(e.claims.nonce!==t.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)}if(t.max_age&&!Bn(e.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(e.claims.exp==null||!Bn(e.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!Bn(e.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");let r=t.leeway||60,i=new Date(t.now||Date.now()),s=new Date(0);if(s.setUTCSeconds(e.claims.exp+r),i>s)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${s})`);if(e.claims.nbf!=null&&Bn(e.claims.nbf)){let n=new Date(0);if(n.setUTCSeconds(e.claims.nbf-r),i<n)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${n}`)}if(e.claims.auth_time!=null&&Bn(e.claims.auth_time)){let n=new Date(0);if(n.setUTCSeconds(parseInt(e.claims.auth_time)+t.max_age+r),i>n)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${n}`)}if(t.organization){let n=t.organization.trim();if(n.startsWith("org_")){let o=n;if(!e.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(o!==e.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_id}"`)}else{let o=n.toLowerCase();if(!e.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(o!==e.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_name}"`)}}return e},Si=ed(function(t,e){var r=xi&&xi.__assign||function(){return r=Object.assign||function(l){for(var u,c=1,d=arguments.length;c<d;c++)for(var p in u=arguments[c])Object.prototype.hasOwnProperty.call(u,p)&&(l[p]=u[p]);return l},r.apply(this,arguments)};function i(l,u){if(!u)return"";var c="; "+l;return u===!0?c:c+"="+u}function s(l,u,c){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(u).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(d){if(typeof d.expires=="number"){var p=new Date;p.setMilliseconds(p.getMilliseconds()+864e5*d.expires),d.expires=p}return i("Expires",d.expires?d.expires.toUTCString():"")+i("Domain",d.domain)+i("Path",d.path)+i("Secure",d.secure)+i("SameSite",d.sameSite)}(c)}function n(l){for(var u={},c=l?l.split("; "):[],d=/(%[\dA-F]{2})+/gi,p=0;p<c.length;p++){var f=c[p].split("="),m=f.slice(1).join("=");m.charAt(0)==='"'&&(m=m.slice(1,-1));try{u[f[0].replace(d,decodeURIComponent)]=m.replace(d,decodeURIComponent)}catch{}}return u}function o(){return n(document.cookie)}function a(l,u,c){document.cookie=s(l,u,r({path:"/"},c))}e.__esModule=!0,e.encode=s,e.parse=n,e.getAll=o,e.get=function(l){return o()[l]},e.set=a,e.remove=function(l,u){a(l,"",r(r({},u),{expires:-1}))}});Qu(Si),Si.encode,Si.parse,Si.getAll;var uE=Si.get,sb=Si.set,nb=Si.remove,ms={get(t){let e=uE(t);if(e!==void 0)return JSON.parse(e)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0,sameSite:"none"}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),sb(t,JSON.stringify(e),i)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),nb(t,r)}},dE={get(t){return ms.get(t)||ms.get(`_legacy_${t}`)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),sb(`_legacy_${t}`,JSON.stringify(e),i),ms.save(t,e,r)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),nb(t,r),ms.remove(t,e),ms.remove(`_legacy_${t}`,e)}},hE={get(t){if(typeof sessionStorage>"u")return;let e=sessionStorage.getItem(t);return e!=null?JSON.parse(e):void 0},save(t,e){sessionStorage.setItem(t,JSON.stringify(e))},remove(t){sessionStorage.removeItem(t)}};function fE(t,e,r){var i=e===void 0?null:e,s=function(l,u){var c=atob(l);if(u){for(var d=new Uint8Array(c.length),p=0,f=c.length;p<f;++p)d[p]=c.charCodeAt(p);return String.fromCharCode.apply(null,new Uint16Array(d.buffer))}return c}(t,r!==void 0&&r),n=s.indexOf(`
`,10)+1,o=s.substring(n)+(i?"//# sourceMappingURL="+i:""),a=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(a)}var Jg,Xg,Qg,Fu,pE=(Jg="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",Xg=null,Qg=!1,function(t){return Fu=Fu||fE(Jg,Xg,Qg),new Worker(Fu,t)}),ju={},Ju=class{constructor(e,r){this.cache=e,this.clientId=r,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(e){var r;let i=new Set(((r=await this.cache.get(this.manifestKey))===null||r===void 0?void 0:r.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]})}async remove(e){let r=await this.cache.get(this.manifestKey);if(r){let i=new Set(r.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return`@@auth0spajs@@::${e}`}},mE={memory:()=>new Na().enclosedCache,localstorage:()=>new Gu},eb=t=>mE[t],tb=t=>{let{openUrl:e,onRedirect:r}=t,i=Yt(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},i),{openUrl:e===!1||e?e:r})},Bu=new tE,Xu=class{constructor(e){let r,i;if(this.userCache=new Na().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await Bu.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),typeof window<"u"&&(()=>{if(!Ra())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(Ra().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(r=e.cacheLocation||"memory",!eb(r))throw new Error(`Invalid cache location "${r}"`);i=eb(r)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=e.legacySameSiteCookie===!1?ms:dE,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(o=>`auth0.${o}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;let s=e.useCookiesForTransactions?this.cookieStorage:hE;var n;this.scope=La("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new Yu(s,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||ib,this.cacheManager=new Ku(i,i.allKeys?void 0:new Ju(i,this.options.clientId),this.nowProvider),this.domainUrl=(n=this.options.domain,/^https?:\/\//.test(n)?n:`https://${n}`),this.tokenIssuer=((o,a)=>o?o.startsWith("https://")?o:`https://${o}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&r==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new pE)}_url(e){let r=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||rb)));return`${this.domainUrl}${e}&auth0Client=${r}`}_authorizeUrl(e){return this._url(`/authorize?${Zu(e)}`)}async _verifyIdToken(e,r,i){let s=await this.nowProvider();return cE({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:r,organization:i,leeway:this.options.leeway,max_age:(n=this.options.authorizationParams.max_age,typeof n!="string"?n:parseInt(n,10)||void 0),now:s});var n}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(e,r,i){let s=Kg(Uu()),n=Kg(Uu()),o=Uu(),a=(c=>{let d=new Uint8Array(c);return(p=>{let f={"+":"-","/":"_","=":""};return p.replace(/[+/=]/g,m=>f[m])})(window.btoa(String.fromCharCode(...Array.from(d))))})(await(async c=>await Ra().subtle.digest({name:"SHA-256"},new TextEncoder().encode(c)))(o)),l=((c,d,p,f,m,v,b,y)=>Object.assign(Object.assign(Object.assign({client_id:c.clientId},c.authorizationParams),p),{scope:La(d,p.scope),response_type:"code",response_mode:y||"query",state:f,nonce:m,redirect_uri:b||c.authorizationParams.redirect_uri,code_challenge:v,code_challenge_method:"S256"}))(this.options,this.scope,e,s,n,a,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,r?.response_mode),u=this._authorizeUrl(l);return{nonce:n,code_verifier:o,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:s,url:u}}async loginWithPopup(e,r){var i;if(e=e||{},!(r=r||{}).popup&&(r.popup=(a=>{let l=window.screenX+(window.innerWidth-400)/2,u=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!r.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");let s=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);r.popup.location.href=s.url;let n=await(a=>new Promise((l,u)=>{let c,d=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(d),clearTimeout(p),window.removeEventListener("message",c,!1),u(new Wu(a.popup)))},1e3),p=setTimeout(()=>{clearInterval(d),u(new Vu(a.popup)),window.removeEventListener("message",c,!1)},1e3*(a.timeoutInSeconds||60));c=function(f){if(f.data&&f.data.type==="authorization_response"){if(clearTimeout(p),clearInterval(d),window.removeEventListener("message",c,!1),a.popup.close(),f.data.response.error)return u(et.fromPayload(f.data.response));l(f.data.response)}},window.addEventListener("message",c)}))(Object.assign(Object.assign({},r),{timeoutInSeconds:r.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(s.state!==n.state)throw new et("state_mismatch","Invalid state");let o=((i=e.authorizationParams)===null||i===void 0?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:s.audience,scope:s.scope,code_verifier:s.code_verifier,grant_type:"authorization_code",code:n.code,redirect_uri:s.redirect_uri},{nonceIn:s.nonce,organization:o})}async getUser(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.user}async getIdTokenClaims(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.claims}async loginWithRedirect(e={}){var r;let i=tb(e),{openUrl:s,fragment:n,appState:o}=i,a=Yt(i,["openUrl","fragment","appState"]),l=((r=a.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization,u=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:c}=u,d=Yt(u,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},d),{appState:o}),l&&{organization:l}));let p=n?`${c}#${n}`:c;s?await s(p):window.location.assign(p)}async handleRedirectCallback(e=window.location.href){let r=e.split("?").slice(1);if(r.length===0)throw new Error("There are no query params available for parsing.");let{state:i,code:s,error:n,error_description:o}=(d=>{d.indexOf("#")>-1&&(d=d.substring(0,d.indexOf("#")));let p=new URLSearchParams(d);return{state:p.get("state"),code:p.get("code")||void 0,error:p.get("error")||void 0,error_description:p.get("error_description")||void 0}})(r.join("")),a=this.transactionManager.get();if(!a)throw new et("missing_transaction","Invalid state");if(this.transactionManager.remove(),n)throw new qu(n,o||n,i,a.appState);if(!a.code_verifier||a.state&&a.state!==i)throw new et("state_mismatch","Invalid state");let l=a.organization,u=a.nonce,c=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:s},c?{redirect_uri:c}:{}),{nonceIn:u,organization:l}),{appState:a.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(e)}catch{}}async getTokenSilently(e={}){var r;let i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:La(this.scope,(r=e.authorizationParams)===null||r===void 0?void 0:r.scope)})}),s=await((n,o)=>{let a=ju[o];return a||(a=n().finally(()=>{delete ju[o],a=null}),ju[o]=a),a})(()=>this._getTokenSilently(i),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?s:s?.access_token}async _getTokenSilently(e){let{cacheMode:r}=e,i=Yt(e,["cacheMode"]);if(r!=="off"){let s=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(s)return s}if(r!=="cache-only"){if(!await(async(s,n=3)=>{for(let o=0;o<n;o++)if(await s())return!0;return!1})(()=>Bu.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new qn;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),r!=="off"){let u=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(u)return u}let s=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(i):await this._getTokenFromIFrame(i),{id_token:n,access_token:o,oauthTokenScope:a,expires_in:l}=s;return Object.assign(Object.assign({id_token:n,access_token:o},a?{scope:a}:null),{expires_in:l})}finally{await Bu.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(e={},r={}){var i;let s=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:La(this.scope,(i=e.authorizationParams)===null||i===void 0?void 0:i.scope)})});return r=Object.assign(Object.assign({},rE),r),await this.loginWithPopup(s,r),(await this.cacheManager.get(new ur({scope:s.authorizationParams.scope,audience:s.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(e){e.clientId!==null?e.clientId=e.clientId||this.options.clientId:delete e.clientId;let r=e.logoutParams||{},{federated:i}=r,s=Yt(r,["federated"]),n=i?"&federated":"";return this._url(`/v2/logout?${Zu(Object.assign({clientId:e.clientId},s))}`)+n}async logout(e={}){let r=tb(e),{openUrl:i}=r,s=Yt(r,["openUrl"]);e.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(e.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");let n=this._buildLogoutUrl(s);i?await i(n):i!==!1&&window.location.assign(n)}async _getTokenFromIFrame(e){let r=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!r.organization&&(r.organization=i);let{url:s,state:n,nonce:o,code_verifier:a,redirect_uri:l,scope:u,audience:c}=await this._prepareAuthorizeUrl(r,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new et("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");let d=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,p=await((m,v,b=60)=>new Promise((y,w)=>{let x=window.document.createElement("iframe");x.setAttribute("width","0"),x.setAttribute("height","0"),x.style.display="none";let _=()=>{window.document.body.contains(x)&&(window.document.body.removeChild(x),window.removeEventListener("message",O,!1))},O,se=setTimeout(()=>{w(new qn),_()},1e3*b);O=function(ae){if(ae.origin!=v||!ae.data||ae.data.type!=="authorization_response")return;let G=ae.source;G&&G.close(),ae.data.response.error?w(et.fromPayload(ae.data.response)):y(ae.data.response),clearTimeout(se),window.removeEventListener("message",O,!1),setTimeout(_,2e3)},window.addEventListener("message",O,!1),window.document.body.appendChild(x),x.setAttribute("src",m)}))(s,this.domainUrl,d);if(n!==p.state)throw new et("state_mismatch","Invalid state");let f=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:a,code:p.code,grant_type:"authorization_code",redirect_uri:l,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:o,organization:r.organization});return Object.assign(Object.assign({},f),{scope:u,oauthTokenScope:f.scope,audience:c})}catch(d){throw d.error==="login_required"&&this.logout({openUrl:!1}),d}}async _getTokenUsingRefreshToken(e){let r=await this.cacheManager.get(new ur({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(r&&r.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new Da(e.authorizationParams.audience||"default",e.authorizationParams.scope)}let i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,s=typeof e.timeoutInSeconds=="number"?1e3*e.timeoutInSeconds:null;try{let n=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:r&&r.refresh_token,redirect_uri:i}),s&&{timeout:s}));return Object.assign(Object.assign({},n),{scope:e.authorizationParams.scope,oauthTokenScope:n.scope,audience:e.authorizationParams.audience||"default"})}catch(n){if((n.message.indexOf("Missing Refresh Token")>-1||n.message&&n.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw n}}async _saveEntryInCache(e){let{id_token:r,decodedToken:i}=e,s=Yt(e,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:r,decodedToken:i}),await this.cacheManager.setIdToken(this.options.clientId,e.id_token,e.decodedToken),await this.cacheManager.set(s)}async _getIdTokenFromCache(){let e=this.options.authorizationParams.audience||"default",r=await this.cacheManager.getIdToken(new ur({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return r&&r.id_token===i?.id_token?i:(this.userCache.set("@@user@@",r),r)}async _getEntryFromCache({scope:e,audience:r,clientId:i}){let s=await this.cacheManager.get(new ur({scope:e,audience:r,clientId:i}),60);if(s&&s.access_token){let{access_token:n,oauthTokenScope:o,expires_in:a}=s,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:n},o?{scope:o}:null),{expires_in:a})}}async _requestToken(e,r){let{nonceIn:i,organization:s}=r||{},n=await aE(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),o=await this._verifyIdToken(n.id_token,i,s);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},n),{decodedToken:o,scope:e.scope,audience:e.audience||"default"}),n.scope?{oauthTokenScope:n.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(s||o.claims.org_id),Object.assign(Object.assign({},n),{decodedToken:o})}};async function ob(t){let e=new Xu(t);return await e.checkSession(),e}var Ma=class{config;client;constructor(e){this.config=e,Object.freeze(this.config)}async initialize(){let{domain:e,clientId:r,authorizationParams:i}=this.config;if(this.client=await ob({domain:e,clientId:r,authorizationParams:i}),window.location.search.includes("code=")||window.location.search.includes("error=")){try{let s=await this.client.handleRedirectCallback();console.log({result:s})}catch(s){let{error:n,error_description:o}=s;console.error("Error handling redirect callback:",{error:n,error_description:o})}window.history.replaceState({},document.title,window.location.pathname)}}async login(){return console.log("login"),await this.client.loginWithRedirect()}async logout(){this.client.logout({openUrl(e){window.location.replace(e)}})}async isAuthenticated(){return await this.client.isAuthenticated()}async getAuthData(){return await this.client.isAuthenticated()?await this.client.getIdTokenClaims():void 0}async getAccessToken(){return await this.client.getTokenSilently()}};var ab=async(t,e)=>{let r=new Ma(e);return await r.initialize(),r};var za=t=>{if(!(t instanceof $r))throw new Error("Passed instance must extend `_State`");let[e,r]=be(t.state()),i=t.setState.bind(t);return new Proxy(t,{get(n,o){return o==="state"?e:o==="setState"&&typeof i=="function"?a=>{i(a),r(t.state())}:n[o]},set(n,o,a){if(o==="state"||o==="setState")throw new Error(`Cannot overwrite ${String(o)}.`);return n[o]=a,!0}})};function Ct(t){return function(e){let r=Object.keys(t.shape);return class extends e{constructor(...i){super(...i),r.forEach(s=>{Object.defineProperty(this,s,{get(){return this.data[s]}})})}}}}var Ua=D.object({key:D.string(),name:D.string(),usageCount:D.number()}),Ir=class{data;constructor(e){this.data=e}static from(e){let r=Ua.parse(e);return new Ir(r)}};Ir=yt([Ct(Ua)],Ir);var lb=D.object({title:D.string(),description:D.string(),address:D.string(),zip:D.string(),muncipiality:D.string(),phone:D.string(),email:D.string().email(),links:D.array(D.object({href:D.string()})),tags:D.array(Ua.omit({usageCount:!0}))}),Lr=class{data;constructor(e){this.data=e}static from(e){let r=Pr(lb,e);return new Lr(r)}};Lr=yt([Ct(lb)],Lr);var cb=D.object({letter:D.string().length(1),count:D.number()}),Rr=class{data;constructor(e){this.data=e}static from(e){let r=cb.parse(e);return new Rr(r)}};Rr=yt([Ct(cb)],Rr);var Fa=class{db;constructor(e){this.db=e}async loadIndexLetters(){return(await this.db.getIndexLetters()).sort((i,s)=>i.letter<s.letter?-1:1).map(i=>Rr.from(i))}async loadTags(){return(await this.db.getTags()).filter(({usageCount:i})=>i).sort((i,s)=>i.name<s.name?-1:1).map(i=>Ir.from(i))}async loadListings(e){return await wi(),(await this.db.getListings(e)).sort((s,n)=>s.title<n.title?-1:1).map(s=>Lr.from(s))}};var ja=t=>t;var ub=async t=>{let e=za($a.from({tagsMatchType:"ANY"})),r=new Fa(t),[i]=st(()=>r.loadTags()),[s]=st(()=>r.loadIndexLetters()),[n]=st(()=>e.state()?e.state():!1,a=>r.loadListings(a));return ja({resources:{tags:i,indexLetters:s,listings:n},filters:()=>e})};var td=D.object({href:D.string()}),bs=D.object({id:D.any(),owner:D.any(),title:D.string(),description:D.string(),address:D.string(),zip:D.string(),muncipiality:D.string(),phone:D.string(),email:D.string(),tags:D.array(D.any()),links:D.array(td)}),gs=class t extends $r{constructor(e){super(e)}static from(e){let r=Pr(bs,e);return new t(r)}};var db=D.object({id:D.any(),name:D.string(),email:D.string().email()}),Dr=class{data;constructor(e){this.data=e}static from(e){let r=db.parse(e);return new Dr(r)}};Dr=yt([Ct(db)],Dr);var Ba=class{db;constructor(e){this.db=e}async getUser(e){await wi(),await this.db.authenticate(e,!0);let r=await this.db.getUserData();return Dr.from(r)}async loadListingsByEmail(e){return await wi(),(await this.db.getListingsByEmail(e)).sort((s,n)=>s.title<n.title?-1:1).map(s=>gs.from(s))}async createListing(e){}async updateListing(e){}};var hb=(t,e)=>{let r=new Ba(t),[i,s]=be(!1),[n]=st(()=>i(),()=>e.isAuthenticated()),[o]=st(()=>n(),async()=>await e.getAuthData()),a=pe(()=>o()?.email_verified?!1:o()?.email),[l]=st(()=>{if(o()&&!a())return!0;s(!0)},async()=>{let d=await e.getAccessToken(),p=await r.getUser(d);return console.log({user:p}),p}),[u]=st(()=>l(),async({email:d})=>(await r.loadListingsByEmail(d)).map(f=>za(f)));return ja({resources:{user:l,listings:u},mustVerifyEmail:a,login:e.login.bind(e),logout:e.logout.bind(e)})};var fb=ji(),pb=t=>{let{db:e,configs:r}=Zg(),[i]=st(()=>ub(e)),[s]=st(async()=>{let o=await ab(e,r.auth0);return hb(e,o)}),n={directory:i,account:s};return z(fb.Provider,{value:n,get children(){return t.children}})},Jt=()=>{let t=Kr(fb);if(!t)throw new Error("useService must be used within an ServiceProvider");return t};var gE=Y("<div><sl-spinner></sl-spinner><div>",!0,!1),mb=function(t){return t.small="small",t.medium="medium",t.large="large",t}(mb||{}),bE=Ue({centered:t=>({textAlign:"center"})}),yE=fm(t=>({small:`font-size: ${t.fontSizeSm}; --trackwidth: 3px;`,medium:`font-size: ${t.fontSizeMd}; --trackwidth: 5px;`,large:`font-size: ${t.fontSizeLg}; --trackwidth: 10px;`})),Nr=t=>{let e=t.size||mb.large,r=yE()[e];return(()=>{var i=gE(),s=i.firstChild,n=s.nextSibling;return s._$owner=F(),j(n,()=>t.children),me(o=>{var a=ti("loading",bE.centered),l=r;return a!==o.e&&_e(i,o.e=a),o.t=uh(s,l,o.t),o},{e:void 0,t:void 0}),i})()};var vE=Y("<sl-button>Logout",!0,!1),gb=t=>{let{account:e}=Jt(),r=pe(()=>e()?.resources.user());return z(rr,{get fallback(){return z(Nr,{size:"large"})},get children(){return[pe(()=>t.children),z(Ge,{get when(){return r()},get children(){return[pe(()=>r()?.name),(()=>{var i=vE();return ue(i,"click",()=>e()?.logout()),i._$owner=F(),i})()]}})]}})};var _E=Y("<sl-icon-button style=font-size:20px;>",!0,!1),xE=Y("<div><section><div><h1></h1></div><div>"),SE=Y("<div>Error: "),Vn=Ue({app:t=>({padding:"10px 15px",color:t.colorOnPrimary,backgroundColor:t.colorPrimary,font:"16px var(--sl-font-sans)",fontWeight:"var(--sl-font-weight-normal)"}),border:t=>({borderRadius:"10px",border:"5px solid",borderColor:t.colorAccent}),header:{display:"flex",justifyContent:"space-between"},title:t=>({fontFamily:"'Playwrite HU', sans-serif",fontSize:t.fontSizeLg,cursor:"pointer"}),user:{display:"flex",flexDirection:"column",alignItems:"end"}}),bb=t=>(()=>{var e=xE(),r=e.firstChild,i=r.firstChild,s=i.firstChild,n=i.nextSibling;return ue(s,"click",t.toggleMainPages),j(s,()=>t.title),j(n,z(gb,{get children(){var o=_E();return ue(o,"click",t.toggleMainPages),o._$owner=F(),me(()=>o.name=t.selectedPage==="PAGE_LISTINGS"?"person-circle":"arrow-left-circle"),o}})),j(e,z(Al,{fallback:o=>(console.error(o),(()=>{var a=SE(),l=a.firstChild;return j(a,()=>o.message,null),a})()),get children(){return z(rr,{get fallback(){return z(Nr,{children:"Layout"})},get children(){return t.children}})}}),null),me(o=>{var a=ti(Vn.app,Vn.border),l=Vn.header,u=Vn.title,c=Vn.user;return a!==o.e&&_e(e,o.e=a),l!==o.t&&_e(r,o.t=l),u!==o.a&&_e(s,o.a=u),c!==o.o&&_e(n,o.o=c),o},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var kE=Y("<span><sl-icon></sl-icon><span>",!0,!1),rd=Ue({wrapper:{display:"flex"},label:{paddingInlineStart:"var(--sl-spacing-2x-small)"},icon:{minWidth:"20px"}}),qa=t=>(()=>{var e=kE(),r=e.firstChild,i=r.nextSibling;return r._$owner=F(),j(i,()=>t.children),me(s=>{var n=rd.wrapper,o=rd.icon,a=t.icon,l=t.label,u=rd.label;return n!==s.e&&_e(e,s.e=n),o!==s.t&&_e(r,s.t=o),a!==s.a&&(r.name=s.a=a),l!==s.o&&(r.label=s.o=l),u!==s.i&&_e(i,s.i=u),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();var CE=Y("<a target=_blank>"),yb=t=>{let{pathname:e,hostname:r}=new URL(t.link.href),i={icon:"globe",title:"Website"};return r.match(/facebook\.(no|com)/)?(i.icon="facebook",i.title="Facebook"):r.match(/instagram\.(no|com)/)?(i.icon="instagram",i.title=`@${e.split("/").pop()}`):r.match(/linkedin\.(no|com)/)&&(i.icon="linkedin",i.title="LinkedIn"),z(qa,{get icon(){return i.icon},label:r,get children(){var s=CE();return j(s,()=>i.title),me(()=>$l(s,"href",t.link.href)),s}})};var EE=Y("<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call",!0,!1),vb=t=>{let e=()=>{navigator.clipboard.writeText(t.phoneNumber)},r=()=>{window.location.href=`tel:${t.phoneNumber}`};return(()=>{var i=EE(),s=i.firstChild,n=s.firstChild,o=s.nextSibling,a=o.firstChild,l=a.firstChild,u=a.nextSibling,c=u.firstChild;return i._$owner=F(),s.slot="trigger",s.caret=!0,s._$owner=F(),n.name="telephone",n._$owner=F(),j(s,()=>t.phoneNumber,null),o._$owner=F(),ue(a,"click",e),a._$owner=F(),l.name="copy",l._$owner=F(),ue(u,"click",r),u._$owner=F(),c.name="telephone",c._$owner=F(),i})()};var TE=Y("<br>"),wb=t=>[pe(()=>t.address),TE(),pe(()=>t.zip)," ",pe(()=>t.muncipiality)];var AE=Y("<div><div class=text>"),OE=Y("<sl-button><span>",!0,!1),_b=Ue({button:{marginTop:"5px",marginRight:"5px"},badge:{position:"absolute",top:"-2px",right:"-2px",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",borderWidth:"1px",borderStyle:"solid",borderRadius:"5px",backgroundColor:"var(--sl-color-primary-50)",borderColor:"var(--sl-color-primary-200)","& > .text":{fontSize:"8px",color:"var(--sl-color-primary-800)"}}}),id=t=>(()=>{var e=OE(),r=e.firstChild;return ue(e,"click",t.onClick,!0),e._$owner=F(),j(r,()=>t.buttonLabel),j(e,z(Ge,{get when(){return t.badgeLabel},get children(){var i=AE(),s=i.firstChild;return j(s,()=>t.badgeLabel),me(()=>_e(i,_b.badge)),i}}),null),me(i=>{var s=t.size||"medium",n=t.isActive?"primary":"default",o=_b.button,a=t.disabled;return s!==i.e&&(e.size=i.e=s),n!==i.t&&(e.variant=i.t=n),o!==i.a&&_e(e,i.a=o),a!==i.o&&(e.disabled=i.o=a),i},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();ch(["click"]);var $E=Y("<section><div></div><div><sl-switch>:</sl-switch></div><div>",!0,!1),sd=Ue({section:t=>({display:"flex",flexDirection:"column",alignItems:"center",marginBottom:t.gapMd}),filter:t=>({display:"flex",overflowY:"hidden",overflowX:"scroll"})}),xb=t=>{let{directory:e}=Jt(),r=()=>e()?.filters(),i=()=>e()?.resources.tags(),s=()=>e()?.resources.indexLetters(),n=()=>e()?.resources.listings.loading,o=()=>r()?.state().tagsMatchType==="ALL",a=()=>{let l=o()?"ANY":"ALL";r()?.setTagsMatchType(l)};return Fi(()=>console.log(r())),(()=>{var l=$E(),u=l.firstChild,c=u.nextSibling,d=c.firstChild,p=d.firstChild,f=c.nextSibling;return j(u,()=>s()?.map(({letter:m,count:v})=>z(id,{buttonLabel:m,badgeLabel:v,get isActive(){return!!r()?.isActiveIndexLetter(m)},get disabled(){return n()},onClick:()=>r()?.setIndexLetter(m)}))),ue(d,"click",()=>a()),d.size="small",d._$owner=F(),j(d,()=>o()?"M\xE5 match alle valgte tagger":"Match p\xE5 minst \xE9n av valgte tager",p),j(f,()=>i()?.map(m=>z(id,{size:"small",get isActive(){return!!r()?.hasTag(m.key)},get buttonLabel(){return m.name},get badgeLabel(){return m.usageCount},get disabled(){return n()},onClick:()=>r()?.setTag(m.key,!0)}))),j(l,()=>t.children,null),me(m=>{var v=sd.section,b=sd.filter,y=o(),w=n(),x=sd.filter;return v!==m.e&&_e(l,m.e=v),b!==m.t&&_e(u,m.t=b),y!==m.a&&(d.checked=m.a=y),w!==m.o&&(d.disabled=m.o=w),x!==m.i&&_e(f,m.i=x),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()};var PE=Y("<div> treff."),IE=Y("<section>"),LE=Y("<sl-card><div slot=header><div class=title></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>",!0,!1),RE=Y("<span><br>"),DE=Y("<sl-tag>",!0,!1),nd=Ue({card:{"--border-radius":"15px",width:"100%",marginBottom:"1rem","& .flex-middle > *":{justifySelf:"center"}},cardHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",position:"relative",alignItems:"center",rowGap:"1rem","> * ":{flex:"1 1 33.33%",minWidth:"200px",textAlign:"center","@media (min-width: 500px)":{"&:first-child":{textAlign:"left"}},"@media (min-width: 700px)":{"&:last-child":{textAlign:"right"}}},"& .title":{fontWeight:"bolder"}},cardBody:{display:"flex",justifyContent:"space-between"}}),Sb=()=>{let{directory:t}=Jt(),[e,r]=be(0),i=()=>t()?.filters(),s=()=>{let n=t()?.resources.listings();return r(n?.length||0),n};return(()=>{var n=IE();return j(n,z(xb,{get children(){var o=PE(),a=o.firstChild;return j(o,e,a),o}}),null),j(n,z(rr,{get fallback(){return z(Nr,{children:"Listings"})},get children(){return z(Yr,{get each(){return s()},children:o=>(()=>{var a=LE(),l=a.firstChild,u=l.firstChild,c=u.nextSibling,d=c.nextSibling,p=l.nextSibling,f=p.firstChild,m=f.firstChild,v=m.nextSibling,b=f.nextSibling;return a._$owner=F(),j(u,()=>o.title),j(c,z(qa,{label:"beskrivelse",icon:"info-circle",get children(){return o.description}})),j(d,z(vb,{get phoneNumber(){return o.phone}})),j(m,z(wb,o)),j(v,()=>o.links.map(y=>(()=>{var w=RE(),x=w.firstChild;return j(w,z(yb,{link:y}),x),w})())),j(b,()=>o.tags.map(y=>(()=>{var w=DE();return ue(w,"click",()=>i()?.setTag(y.key)),w.style.setProperty("cursor","pointer"),w.variant="primary",w.size="small",w._$owner=F(),j(w,()=>y.name),w})())),me(y=>{var w=nd.card,x=nd.cardHeader,_=nd.cardBody;return w!==y.e&&_e(a,y.e=w),x!==y.t&&_e(l,y.t=x),_!==y.a&&_e(f,y.a=_),y},{e:void 0,t:void 0,a:void 0}),a})()})}}),null),n})()};var od=Symbol("store-raw"),vs=Symbol("store-node"),dr=Symbol("store-has"),kb=Symbol("store-self");function Cb(t){let e=t[vr];if(!e&&(Object.defineProperty(t,vr,{value:e=new Proxy(t,zE)}),!Array.isArray(t))){let r=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let s=0,n=r.length;s<n;s++){let o=r[s];i[o].get&&Object.defineProperty(t,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function Mr(t){let e;return t!=null&&typeof t=="object"&&(t[vr]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function zr(t,e=new Set){let r,i,s,n;if(r=t!=null&&t[od])return r;if(!Mr(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,a=t.length;o<a;o++)s=t[o],(i=zr(s,e))!==s&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);let o=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let l=0,u=o.length;l<u;l++)n=o[l],!a[n].get&&(s=t[n],(i=zr(s,e))!==s&&(t[n]=i))}return t}function Va(t,e){let r=t[e];return r||Object.defineProperty(t,e,{value:r=Object.create(null)}),r}function Hn(t,e,r){if(t[e])return t[e];let[i,s]=be(r,{equals:!1,internal:!0});return i.$=s,t[e]=i}function NE(t,e){let r=Reflect.getOwnPropertyDescriptor(t,e);return!r||r.get||!r.configurable||e===vr||e===vs||(delete r.value,delete r.writable,r.get=()=>t[vr][e]),r}function Eb(t){So()&&Hn(Va(t,vs),kb)()}function ME(t){return Eb(t),Reflect.ownKeys(t)}var zE={get(t,e,r){if(e===od)return t;if(e===vr)return r;if(e===_o)return Eb(t),r;let i=Va(t,vs),s=i[e],n=s?s():t[e];if(e===vs||e===dr||e==="__proto__")return n;if(!s){let o=Object.getOwnPropertyDescriptor(t,e);So()&&(typeof n!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(n=Hn(i,e,n)())}return Mr(n)?Cb(n):n},has(t,e){return e===od||e===vr||e===_o||e===vs||e===dr||e==="__proto__"?!0:(So()&&Hn(Va(t,dr),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ME,getOwnPropertyDescriptor:NE};function Et(t,e,r,i=!1){if(!i&&t[e]===r)return;let s=t[e],n=t.length;r===void 0?(delete t[e],t[dr]&&t[dr][e]&&s!==void 0&&t[dr][e].$()):(t[e]=r,t[dr]&&t[dr][e]&&s===void 0&&t[dr][e].$());let o=Va(t,vs),a;if((a=Hn(o,e,s))&&a.$(()=>r),Array.isArray(t)&&t.length!==n){for(let l=t.length;l<n;l++)(a=o[l])&&a.$();(a=Hn(o,"length",n))&&a.$(t.length)}(a=o[kb])&&a.$()}function Tb(t,e){let r=Object.keys(e);for(let i=0;i<r.length;i+=1){let s=r[i];Et(t,s,e[s])}}function UE(t,e){if(typeof e=="function"&&(e=e(t)),e=zr(e),Array.isArray(e)){if(t===e)return;let r=0,i=e.length;for(;r<i;r++){let s=e[r];t[r]!==s&&Et(t,r,s)}Et(t,"length",i)}else Tb(t,e)}function Wn(t,e,r=[]){let i,s=t;if(e.length>1){i=e.shift();let o=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let l=0;l<i.length;l++)Wn(t,[i[l]].concat(e),r);return}else if(a&&o==="function"){for(let l=0;l<t.length;l++)i(t[l],l)&&Wn(t,[l].concat(e),r);return}else if(a&&o==="object"){let{from:l=0,to:u=t.length-1,by:c=1}=i;for(let d=l;d<=u;d+=c)Wn(t,[d].concat(e),r);return}else if(e.length>1){Wn(t[i],e,[i].concat(r));return}s=t[i],r=[i].concat(r)}let n=e[0];typeof n=="function"&&(n=n(s,r),n===s)||i===void 0&&n==null||(n=zr(n),i===void 0||Mr(s)&&Mr(n)&&!Array.isArray(n)?Tb(s,n):Et(t,i,n))}function Ab(...[t,e]){let r=zr(t||{}),i=Array.isArray(r),s=Cb(r);function n(...o){Qd(()=>{i&&o.length===1?UE(r,o[0]):Wn(r,o)})}return[s,n]}var ad=Symbol("store-root");function ys(t,e,r,i,s){let n=e[r];if(t===n)return;let o=Array.isArray(t);if(r!==ad&&(!Mr(t)||!Mr(n)||o!==Array.isArray(n)||s&&t[s]!==n[s])){Et(e,r,t);return}if(o){if(t.length&&n.length&&(!i||s&&t[0]&&t[0][s]!=null)){let u,c,d,p,f,m,v,b;for(d=0,p=Math.min(n.length,t.length);d<p&&(n[d]===t[d]||s&&n[d]&&t[d]&&n[d][s]===t[d][s]);d++)ys(t[d],n,d,i,s);let y=new Array(t.length),w=new Map;for(p=n.length-1,f=t.length-1;p>=d&&f>=d&&(n[p]===t[f]||s&&n[d]&&t[d]&&n[p][s]===t[f][s]);p--,f--)y[f]=n[p];if(d>f||d>p){for(c=d;c<=f;c++)Et(n,c,t[c]);for(;c<t.length;c++)Et(n,c,y[c]),ys(t[c],n,c,i,s);n.length>t.length&&Et(n,"length",t.length);return}for(v=new Array(f+1),c=f;c>=d;c--)m=t[c],b=s&&m?m[s]:m,u=w.get(b),v[c]=u===void 0?-1:u,w.set(b,c);for(u=d;u<=p;u++)m=n[u],b=s&&m?m[s]:m,c=w.get(b),c!==void 0&&c!==-1&&(y[c]=n[u],c=v[c],w.set(b,c));for(c=d;c<t.length;c++)c in y?(Et(n,c,y[c]),ys(t[c],n,c,i,s)):Et(n,c,t[c])}else for(let u=0,c=t.length;u<c;u++)ys(t[u],n,u,i,s);n.length>t.length&&Et(n,"length",t.length);return}let a=Object.keys(t);for(let u=0,c=a.length;u<c;u++)ys(t[a[u]],n,a[u],i,s);let l=Object.keys(n);for(let u=0,c=l.length;u<c;u++)t[l[u]]===void 0&&Et(n,l[u],void 0)}function Ob(t,e={}){let{merge:r,key:i="id"}=e,s=zr(t);return n=>{if(!Mr(n)||!Mr(s))return s;let o=ys(s,{[ad]:n},ad,r,i);return o===void 0?n:o}}var tt=bs.extend({title:bs.shape.title.min(3).max(70),description:bs.shape.description.min(15).max(150),address:Ng,zip:Mg,muncipiality:bs.shape.muncipiality,phone:zg,email:Dg,tags:D.array(D.any()).length(1).default([]),links:D.array(td).default([])}),ws=class{data;constructor(e){this.data=e}static from(e){let r=Pr(tt,e);return new ws(r)}};ws=yt([Ct(tt)],ws);var Wa=tt.extend({title:tt.shape.title.default(""),description:tt.shape.description.default(""),address:tt.shape.address.default(""),zip:tt.shape.zip.default(""),muncipiality:tt.shape.muncipiality.default(""),phone:tt.shape.phone.default(""),email:tt.shape.email.default(""),tags:tt.shape.tags,links:tt.shape.links}).omit({id:!0}).partial(),Ur=class{data;constructor(e){this.data=e}static from(e){let r=Nu(Wa,e);return new Ur(r)}};Ur=yt([Ct(Wa)],Ur);var jE=Y("<pre>"),BE=Y("<sl-card><form><sl-input></sl-input><sl-input class=break-flow></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><fieldset><legend>Knagger</legend></fieldset><fieldset><legend>Lenker</legend><sl-button>Legg til ny</sl-button></fieldset><div><sl-button-group><sl-button>Lagre</sl-button><sl-button>Avbryt",!0,!1),qE=Y("<div><sl-input></sl-input><sl-icon-button color=red>",!0,!1),ld=Ue({form:t=>({display:"flex",gap:t.gapMd,alignItems:"baseline",flexWrap:"wrap","> *":{minWidth:"225px",flex:"1 1 33.333%"},"> .break-flow":{flexBasis:"100%"}}),itemRow:t=>({display:"flex",alignItems:"end",marginBottom:t.gapMd,">:first-child":{flex:"1"},">:last-child":{flexShrink:"0"}}),controls:t=>({display:"flex",justifyContent:"center"})}),cd=class{submitted=!1;touchedFields=new Set([]);constructor(){[this._store,this._setStore]=Ab({}),[this.errors,this.setErrors]=be(null),[this.isDirty,this.setIsDirty]=be(!1)}initialize(e){this.initialShape=jn(e),this._setStore(Ob(jn(e))),this.setIsDirty(!1)}toggleIsTouched(e,r){!(0,zu.default)(this.initialShape[e],this.store[r])?this.touchedFields.add(e):this.touchedFields.delete(e)}getStore(){return[this._store,(...e)=>{let r={...this._store};this._setStore(...e);for(let i in this._store)this._store[i]!==r[i]&&this.toggleIsTouched(i,this._store[i]);this.setIsDirty(this.touchedFields.size>0)}]}validate(){}},$b=t=>{let e="small",r=new cd,[i,s]=r.getStore();Fi(()=>{let c=jn(t.model.state());r.initialize(c)}),Fi(()=>{t.setIsDirty(r.isDirty())});let n=(c,d)=>{s("links",c,"href",d)},o=()=>{s("links",i.links.length,{href:""})},a=c=>{s("links",d=>d.filter((p,f)=>f!==c))},l=()=>{let c=zr(i);console.log({data:c}),t.mode==="CRUD_CREATE"?Mu(Wa,c,r.setErrors):t.mode==="CRUD_UPDATE"&&Mu(tt,c,r.setErrors)},u=()=>{if(l(),!r.errors()){let c=jn(i);t.onSubmit(c)}};return[(()=>{var c=jE();return j(c,()=>JSON.stringify(r.errors())),c})(),(()=>{var c=BE(),d=c.firstChild,p=d.firstChild,f=p.nextSibling,m=f.nextSibling,v=m.nextSibling,b=v.nextSibling,y=b.nextSibling,w=y.nextSibling,x=w.nextSibling,_=x.firstChild,O=_.nextSibling,se=x.nextSibling,ae=se.firstChild,G=ae.firstChild,ve=G.nextSibling;return c._$owner=F(),ue(p,"input",({target:P})=>s("title",P.value)),p.size="small",p.label="Virksomhetens navn",p.name="title",p.required=!0,p._$owner=F(),j(d,z(Ge,{get when(){return r.touchedFields.has("title")},children:"Error"}),f),ue(f,"input",({target:P})=>s("description",P.value)),f.size="small",f.label="Beskrivelse av tjeneste eller produkt",f.name="description",f.required=!0,f._$owner=F(),ue(m,"input",({target:P})=>s("address",P.value)),m.size="small",m.label="Gateadresse",m.name="address",m.required=!0,m._$owner=F(),ue(v,"input",({target:P})=>s("zip",P.value)),v.size="small",v.label="Postnummer",v.name="zip",v.required=!0,v._$owner=F(),ue(b,"input",({target:P})=>s("phone",P.value)),b.size="small",b.label="Telefonnummer",b.name="phone",b.type="tel",b.required=!0,b._$owner=F(),ue(y,"input",({target:P})=>s("email",P.value)),y.size="small",y.label="Epostadresse",y.name="email",y.type="email",y.required=!0,y._$owner=F(),j(x,z(Yr,{get each(){return i.links},children:(P,ne)=>(()=>{var re=qE(),fe=re.firstChild,Ie=fe.nextSibling;return ue(fe,"input",Ne=>n(ne(),Ne.target.value)),fe.size="small",fe.type="url",fe.required=!0,fe._$owner=F(),ue(Ie,"click",()=>a(ne())),Ie.name="trash",Ie._$owner=F(),me(Ne=>{var Xe=ld.itemRow,He=`Lenke ${ne()+1}`,it=`links[${ne()}].href`,Mt=P.href;return Xe!==Ne.e&&_e(re,Ne.e=Xe),He!==Ne.t&&(fe.label=Ne.t=He),it!==Ne.a&&(fe.name=Ne.a=it),Mt!==Ne.o&&(fe.value=Ne.o=Mt),Ne},{e:void 0,t:void 0,a:void 0,o:void 0}),re})()}),O),ue(O,"click",o),O.size="small",O.type="button",O.variant="primary",O._$owner=F(),ae._$owner=F(),ue(G,"click",u),G.size="medium",G.type="button",G.variant="primary",G._$owner=F(),ue(ve,"click",t.onCancel),ve.size="medium",ve.type="button",ve.variant="neutral",ve._$owner=F(),me(P=>{var ne=ld.form,re=i.title,fe=i.description,Ie=i.address,Ne=i.zip,Xe=i.phone,He=i.email,it=ti(ld.controls,"break-flow");return ne!==P.e&&_e(d,P.e=ne),re!==P.t&&(p.value=P.t=re),fe!==P.a&&(f.value=P.a=fe),Ie!==P.o&&(m.value=P.o=Ie),Ne!==P.i&&(v.value=P.i=Ne),Xe!==P.n&&(b.value=P.n=Xe),He!==P.s&&(y.value=P.s=He),it!==P.h&&_e(se,P.h=it),P},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),c})()]};var VE=Y("<section><h2>Mine oppf\xF8ringer</h2><div><sl-button><sl-icon slot=prefix></sl-icon>Ny",!0,!1),WE=Y("<sl-button><sl-icon slot=prefix>",!0,!1),HE=Ue({listings:t=>({display:"flex",flexWrap:"wrap",gap:t.gapMd,marginBottom:t.gapMd})}),Pb=t=>{let{account:e}=Jt(),[r,i]=be(!1),[s,n]=be(null),o=pe(()=>e()?.resources.listings()),a=()=>{let c=Ur.from({owner:e()?.resources.user().id});return new gs(c.data)},l=(c,d)=>{n(c?{listing:c,mode:d}:null),i(!1),console.log("setActiveListing",c?.state().title,c)},u=c=>{console.log(c)};return(()=>{var c=VE(),d=c.firstChild,p=d.nextSibling,f=p.firstChild,m=f.firstChild;return j(p,z(Yr,{get each(){return o()},children:(v,b)=>(()=>{var y=WE(),w=y.firstChild;return ue(y,"click",()=>l(v,"CRUD_UPDATE")),y.name="pencil",y._$owner=F(),w.name="pencil",w._$owner=F(),j(y,()=>v.state().title,null),me(()=>y.disabled=r()),y})()}),f),ue(f,"click",()=>l(a(),"CRUD_CREATE")),f.name="pencil",f._$owner=F(),m.name="plus-circle",m._$owner=F(),j(c,z(Ge,{get when(){return s()},get children(){return z($b,{get model(){return s().listing},get mode(){return s().mode},setIsDirty:i,onSubmit:u,onCancel:()=>l(null)})}}),null),me(v=>{var b=HE.listings,y=r();return b!==v.e&&_e(p,v.e=b),y!==v.t&&(f.disabled=v.t=y),v},{e:void 0,t:void 0}),c})()};var ZE=Y("<sl-alert><sl-icon slot=icon></sl-icon><strong>Vi har sendt en verifiserings-e-post til <!>.</strong><br>Verifiser e-postadressen din der og fortsett deretter innlogging under.",!0,!1),GE=Y("<sl-button>Logg inn",!0,!1),KE=Y("<sl-button-group><sl-button>Fortsett innlogging</sl-button><sl-button>Avbryt / Log inn med en annen e-post",!0,!1),YE=Y("<div>"),JE=Y("<section>"),MR=Ue({}),Ib=t=>{let{account:e}=Jt(),r=pe(()=>e()?.mustVerifyEmail()),i=pe(()=>e()?.resources.user());return(()=>{var s=JE();return j(s,z(Ge,{get when(){return!i()},get children(){return[(()=>{var n=ZE(),o=n.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling,c=u.nextSibling;return n.variant="warning",n._$owner=F(),o.name="exclamation-triangle",o._$owner=F(),j(a,r,u),me(()=>n.open=!!r()),n})(),(()=>{var n=YE();return j(n,z(Ge,{get when(){return!r()},get children(){var o=GE();return ue(o,"click",()=>e()?.login()),o._$owner=F(),o}}),null),j(n,z(Ge,{get when(){return r()},get children(){var o=KE(),a=o.firstChild,l=a.nextSibling;return o.label="Alignment",o._$owner=F(),ue(a,"click",()=>e()?.login()),a.variant="primary",a._$owner=F(),ue(l,"click",()=>e()?.logout()),l._$owner=F(),o}}),null),n})()]}}),null),j(s,z(Ge,{get when(){return i()},get children(){return z(Pb,{})}}),null),s})()};var XE=Y("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>"),QE=Y("<style id=styler>"),eT=t=>{let e="pageKey",r=window.localStorage.getItem(e)||"PAGE_LISTINGS",[i,s]=be(r),n=o=>{window.localStorage.setItem(e,o),s(o)};return[XE(),(()=>{var o=QE();return j(o,pm),o})(),z(rr,{get fallback(){return z(Nr,{children:"Gul info laster..."})},get children(){return z(Hg,{get children(){return z(pb,{get children(){return z(bb,{get title(){return t.title},get selectedPage(){return i()},toggleMainPages:()=>n(i()==="PAGE_ACCOUNT"?"PAGE_LISTINGS":"PAGE_ACCOUNT"),get children(){return z(Tl,{get children(){return[z(Co,{get when(){return i()==="PAGE_LISTINGS"},get children(){return z(Sb,{})}}),z(Co,{get when(){return i()==="PAGE_ACCOUNT"},get children(){return z(Ib,{})}})]}})}})}})}})}})]},Lb=eT;var ud="";function Zn(t){ud=t}function dd(t=""){if(!ud){let e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)Zn(r.getAttribute("data-shoelace"));else{let i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src)),s="";i&&(s=i.getAttribute("src")),Zn(s.split("/").slice(0,-1).join("/"))}}return ud.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var tT={name:"default",resolver:t=>dd(`assets/icons/${t}.svg`)},Rb=tT;var Db={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},rT={name:"system",resolver:t=>t in Db?`data:image/svg+xml,${encodeURIComponent(Db[t])}`:""},Nb=rT;var iT=[Rb,Nb],hd=[];function Mb(t){hd.push(t)}function zb(t){hd=hd.filter(e=>e!==t)}function fd(t){return iT.find(e=>e.name===t)}var Ha=globalThis,Za=Ha.ShadowRoot&&(Ha.ShadyCSS===void 0||Ha.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pd=Symbol(),Ub=new WeakMap,Gn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==pd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Za&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=Ub.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ub.set(r,e))}return e}toString(){return this.cssText}},Fb=t=>new Gn(typeof t=="string"?t:t+"",void 0,pd),M=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Gn(r,t,pd)},md=(t,e)=>{if(Za)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),s=Ha.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Ga=Za?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Fb(r)})(t):t;var{is:sT,defineProperty:nT,getOwnPropertyDescriptor:oT,getOwnPropertyNames:aT,getOwnPropertySymbols:lT,getPrototypeOf:cT}=Object,Ka=globalThis,jb=Ka.trustedTypes,uT=jb?jb.emptyScript:"",dT=Ka.reactiveElementPolyfillSupport,Kn=(t,e)=>t,Fr={toAttribute(t,e){switch(e){case Boolean:t=t?uT:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ya=(t,e)=>!sT(t,e),Bb={attribute:!0,type:String,converter:Fr,reflect:!1,hasChanged:Ya};Symbol.metadata??=Symbol("metadata"),Ka.litPropertyMetadata??=new WeakMap;var hr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Bb){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&nT(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){let{get:s,set:n}=oT(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s?.call(this)},set(o){let a=s?.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bb}static _$Ei(){if(this.hasOwnProperty(Kn("elementProperties")))return;let e=cT(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Kn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Kn("properties"))){let r=this.properties,i=[...aT(r),...lT(r)];for(let s of i)this.createProperty(s,r[s])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)r.unshift(Ga(s))}else e!==void 0&&r.push(Ga(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return md(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:Fr).toAttribute(r,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,r){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Fr;this._$Em=s,this[s]=o.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Ya)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};hr.elementStyles=[],hr.shadowRootOptions={mode:"open"},hr[Kn("elementProperties")]=new Map,hr[Kn("finalized")]=new Map,dT?.({ReactiveElement:hr}),(Ka.reactiveElementVersions??=[]).push("2.0.4");var bd=globalThis,Ja=bd.trustedTypes,qb=Ja?Ja.createPolicy("lit-html",{createHTML:t=>t}):void 0,yd="$lit$",fr=`lit$${Math.random().toFixed(9).slice(2)}$`,vd="?"+fr,hT=`<${vd}>`,Ei=document,Jn=()=>Ei.createComment(""),Xn=t=>t===null||typeof t!="object"&&typeof t!="function",wd=Array.isArray,Kb=t=>wd(t)||typeof t?.[Symbol.iterator]=="function",gd=`[ 	
\f\r]`,Yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vb=/-->/g,Wb=/>/g,ki=RegExp(`>|${gd}(?:([^\\s"'>=/]+)(${gd}*=${gd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hb=/'/g,Zb=/"/g,Yb=/^(?:script|style|textarea|title)$/i,_d=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),$=_d(1),Jb=_d(2),Xb=_d(3),Ye=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),Gb=new WeakMap,Ci=Ei.createTreeWalker(Ei,129);function Qb(t,e){if(!wd(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qb!==void 0?qb.createHTML(e):e}var ey=(t,e)=>{let r=t.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=Yn;for(let a=0;a<r;a++){let l=t[a],u,c,d=-1,p=0;for(;p<l.length&&(o.lastIndex=p,c=o.exec(l),c!==null);)p=o.lastIndex,o===Yn?c[1]==="!--"?o=Vb:c[1]!==void 0?o=Wb:c[2]!==void 0?(Yb.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=ki):c[3]!==void 0&&(o=ki):o===ki?c[0]===">"?(o=s??Yn,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?ki:c[3]==='"'?Zb:Hb):o===Zb||o===Hb?o=ki:o===Vb||o===Wb?o=Yn:(o=ki,s=void 0);let f=o===ki&&t[a+1].startsWith("/>")?" ":"";n+=o===Yn?l+hT:d>=0?(i.push(u),l.slice(0,d)+yd+l.slice(d)+fr+f):l+fr+(d===-2?a:f)}return[Qb(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Qn=class t{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0,a=e.length-1,l=this.parts,[u,c]=ey(e,r);if(this.el=t.createElement(u,i),Ci.currentNode=this.el.content,r===2||r===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Ci.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(yd)){let p=c[o++],f=s.getAttribute(d).split(fr),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?Qa:m[1]==="?"?el:m[1]==="@"?tl:Ai}),s.removeAttribute(d)}else d.startsWith(fr)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(Yb.test(s.tagName)){let d=s.textContent.split(fr),p=d.length-1;if(p>0){s.textContent=Ja?Ja.emptyScript:"";for(let f=0;f<p;f++)s.append(d[f],Jn()),Ci.nextNode(),l.push({type:2,index:++n});s.append(d[p],Jn())}}}else if(s.nodeType===8)if(s.data===vd)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(fr,d+1))!==-1;)l.push({type:7,index:n}),d+=fr.length-1}n++}}static createElement(e,r){let i=Ei.createElement("template");return i.innerHTML=e,i}};function Ti(t,e,r=t,i){if(e===Ye)return e;let s=i!==void 0?r._$Co?.[i]:r._$Cl,n=Xn(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=s:r._$Cl=s),s!==void 0&&(e=Ti(t,s._$AS(t,e.values),s,i)),e}var Xa=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,s=(e?.creationScope??Ei).importNode(r,!0);Ci.currentNode=s;let n=Ci.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new _s(n,n.nextSibling,this,e):l.type===1?u=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(u=new rl(n,this,e)),this._$AV.push(u),l=i[++a]}o!==l?.index&&(n=Ci.nextNode(),o++)}return Ci.currentNode=Ei,s}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},_s=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ti(this,e,r),Xn(e)?e===xe||e==null||e===""?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==Ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kb(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&Xn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ei.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Qn.createElement(Qb(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let n=new Xa(s,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=Gb.get(e.strings);return r===void 0&&Gb.set(e.strings,r=new Qn(e)),r}k(e){wd(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let n of e)s===r.length?r.push(i=new t(this.O(Jn()),this.O(Jn()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ai=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=xe}_$AI(e,r=this,i,s){let n=this.strings,o=!1;if(n===void 0)e=Ti(this,e,r,0),o=!Xn(e)||e!==this._$AH&&e!==Ye,o&&(this._$AH=e);else{let a=e,l,u;for(e=n[0],l=0;l<n.length-1;l++)u=Ti(this,a[i+l],r,l),u===Ye&&(u=this._$AH[l]),o||=!Xn(u)||u!==this._$AH[l],u===xe?e=xe:e!==xe&&(e+=(u??"")+n[l+1]),this._$AH[l]=u}o&&!s&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Qa=class extends Ai{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}},el=class extends Ai{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}},tl=class extends Ai{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Ti(this,e,r,0)??xe)===Ye)return;let i=this._$AH,s=e===xe&&i!==xe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==xe&&(i===xe||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},rl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ti(this,e)}},ty={M:yd,P:fr,A:vd,C:1,L:ey,R:Xa,D:Kb,V:Ti,I:_s,H:Ai,N:el,U:tl,B:Qa,F:rl},fT=bd.litHtmlPolyfillSupport;fT?.(Qn,_s),(bd.litHtmlVersions??=[]).push("3.2.1");var ry=(t,e,r)=>{let i=r?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=r?.renderBefore??null;i._$litPart$=s=new _s(e.insertBefore(Jn(),n),n,void 0,r??{})}return s._$AI(t),s};var jr=class extends hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ry(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ye}};jr._$litElement$=!0,jr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:jr});var pT=globalThis.litElementPolyfillSupport;pT?.({LitElement:jr});(globalThis.litElementVersions??=[]).push("4.1.1");var iy=M`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var oy=Object.defineProperty,mT=Object.defineProperties,gT=Object.getOwnPropertyDescriptor,bT=Object.getOwnPropertyDescriptors,sy=Object.getOwnPropertySymbols,yT=Object.prototype.hasOwnProperty,vT=Object.prototype.propertyIsEnumerable;var ay=t=>{throw TypeError(t)},ny=(t,e,r)=>e in t?oy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Je=(t,e)=>{for(var r in e||(e={}))yT.call(e,r)&&ny(t,r,e[r]);if(sy)for(var r of sy(e))vT.call(e,r)&&ny(t,r,e[r]);return t},pr=(t,e)=>mT(t,bT(e)),h=(t,e,r,i)=>{for(var s=i>1?void 0:i?gT(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&oy(e,r,s),s},ly=(t,e,r)=>e.has(t)||ay("Cannot "+r),cy=(t,e,r)=>(ly(t,e,"read from private field"),r?r.call(t):e.get(t)),uy=(t,e,r)=>e.has(t)?ay("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),dy=(t,e,r,i)=>(ly(t,e,"write to private field"),i?i.call(t,r):e.set(t,r),r);function V(t,e){let r=Je({waitUntilFirstUpdate:!1},e);return(i,s)=>{let{update:n}=i,o=Array.isArray(t)?t:[t];i.update=function(a){o.forEach(l=>{let u=l;if(a.has(u)){let c=a.get(u),d=this[u];c!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](c,d)}}),n.call(this,a)}}}var B=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var wT={attribute:!0,type:String,converter:Fr,reflect:!1,hasChanged:Ya},_T=(t=wT,e,r)=>{let{kind:i,metadata:s}=r,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){let{name:o}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t)},init(a){return a!==void 0&&this.P(o,void 0,t),a}}}if(i==="setter"){let{name:o}=r;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+i)};function g(t){return(e,r)=>typeof r=="object"?_T(t,e,r):((i,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}function oe(t){return g({...t,state:!0,attribute:!1})}function hy(t){return(e,r)=>{let i=typeof e=="function"?e:e[r];Object.assign(i,t)}}var Oi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function q(t,e){return(r,i,s)=>{let n=o=>o.renderRoot?.querySelector(t)??null;if(e){let{get:o,set:a}=typeof i=="object"?r:s??(()=>{let l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return Oi(r,i,{get(){let l=o.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return Oi(r,i,{get(){return n(this)}})}}var il,U=class extends jr{constructor(){super(),uy(this,il,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,Je({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let s=" (unknown version)",n=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,r){cy(this,il)||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),dy(this,il,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};il=new WeakMap;U.version="2.19.0";U.dependencies={};h([g()],U.prototype,"dir",2);h([g()],U.prototype,"lang",2);var{I:lN}=ty;var fy=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var sl=t=>t.strings===void 0;var xT={},py=(t,e=xT)=>t._$AH=e;var eo=Symbol(),nl=Symbol(),xd,Sd=new Map,Ae=class extends U{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e?.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?eo:nl}catch{return nl}try{let s=document.createElement("div");s.innerHTML=await i.text();let n=s.firstElementChild;if(((r=n?.tagName)==null?void 0:r.toLowerCase())!=="svg")return eo;xd||(xd=new DOMParser);let a=xd.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):eo}catch{return eo}}connectedCallback(){super.connectedCallback(),Mb(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),zb(this)}getIconSource(){let t=fd(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:r}=this.getIconSource(),i=r?fd(this.library):void 0;if(!e){this.svg=null;return}let s=Sd.get(e);if(s||(s=this.resolveIcon(e,i),Sd.set(e,s)),!this.initialRender)return;let n=await s;if(n===nl&&Sd.delete(e),e===this.getIconSource().url){if(fy(n)){if(this.svg=n,i){await this.updateComplete;let o=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&o&&i.mutator(o)}return}switch(n){case nl:case eo:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ae.styles=[B,iy];h([oe()],Ae.prototype,"svg",2);h([g({reflect:!0})],Ae.prototype,"name",2);h([g()],Ae.prototype,"src",2);h([g()],Ae.prototype,"label",2);h([g({reflect:!0})],Ae.prototype,"library",2);h([V("label")],Ae.prototype,"handleLabelChange",1);h([V(["name","src","library"])],Ae.prototype,"setIcon",1);Ae.define("sl-icon");var my=M`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mr=t=>(...e)=>({_$litDirective$:t,values:e}),Xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var Z=mr(class extends Xt{constructor(t){if(super(t),t.type!==gt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Ye}});var by=Symbol.for(""),ST=t=>{if(t?.r===by)return t?._$litStatic$};var xs=(t,...e)=>({_$litStatic$:e.reduce((r,i,s)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:by}),gy=new Map,kd=t=>(e,...r)=>{let i=r.length,s,n,o=[],a=[],l,u=0,c=!1;for(;u<i;){for(l=e[u];u<i&&(n=r[u],(s=ST(n))!==void 0);)l+=s+e[++u],c=!0;u!==i&&a.push(n),o.push(l),u++}if(u===i&&o.push(e[i]),c){let d=o.join("$$lit$$");(e=gy.get(d))===void 0&&(o.raw=o,gy.set(d,e=o)),r=a}return t(e,...r)},Br=kd($),GN=kd(Jb),KN=kd(Xb);var ee=t=>t??xe;var De=class extends U{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?xs`a`:xs`button`;return Br`
      <${e}
        part="base"
        class=${Z({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ee(t?void 0:this.disabled)}
        type=${ee(t?void 0:"button")}
        href=${ee(t?this.href:void 0)}
        target=${ee(t?this.target:void 0)}
        download=${ee(t?this.download:void 0)}
        rel=${ee(t&&this.target?"noreferrer noopener":void 0)}
        role=${ee(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ee(this.name)}
          library=${ee(this.library)}
          src=${ee(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};De.styles=[B,my];De.dependencies={"sl-icon":Ae};h([q(".icon-button")],De.prototype,"button",2);h([oe()],De.prototype,"hasFocus",2);h([g()],De.prototype,"name",2);h([g()],De.prototype,"library",2);h([g()],De.prototype,"src",2);h([g()],De.prototype,"href",2);h([g()],De.prototype,"target",2);h([g()],De.prototype,"download",2);h([g()],De.prototype,"label",2);h([g({type:Boolean,reflect:!0})],De.prototype,"disabled",2);var vy=new Map,kT=new WeakMap;function CT(t){return t??{keyframes:[],options:{duration:0}}}function yy(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Tt(t,e){vy.set(t,CT(e))}function At(t,e,r){let i=kT.get(t);if(i?.[e])return yy(i[e],r.dir);let s=vy.get(e);return s?yy(s,r.dir):{keyframes:[],options:{duration:0}}}function Ot(t,e){return new Promise(r=>{function i(s){s.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}function $t(t,e,r){return new Promise(i=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let s=t.animate(e,pr(Je({},r),{duration:ET()?0:r.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function ET(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pt(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}function Cd(t,e){return t.map(r=>pr(Je({},r),{height:r.height==="auto"?`${e}px`:r.height}))}var Ed=new Set,Ss=new Map,$i,Td="ltr",Ad="en",wy=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(wy){let t=new MutationObserver(_y);Td=document.documentElement.dir||"ltr",Ad=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function to(...t){t.map(e=>{let r=e.$code.toLowerCase();Ss.has(r)?Ss.set(r,Object.assign(Object.assign({},Ss.get(r)),e)):Ss.set(r,e),$i||($i=e)}),_y()}function _y(){wy&&(Td=document.documentElement.dir||"ltr",Ad=document.documentElement.lang||navigator.language),[...Ed.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ol=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ed.add(this.host)}hostDisconnected(){Ed.delete(this.host)}dir(){return`${this.host.dir||Td}`.toLowerCase()}lang(){return`${this.host.lang||Ad}`.toLowerCase()}getTranslationData(e){var r,i;let s=new Intl.Locale(e.replace(/_/g,"-")),n=s?.language.toLowerCase(),o=(i=(r=s?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=Ss.get(`${n}-${o}`),l=Ss.get(n);return{locale:s,language:n,region:o,primary:a,secondary:l}}exists(e,r){var i;let{primary:s,secondary:n}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(s&&s[e]||n&&n[e]||r.includeFallback&&$i&&$i[e])}term(e,...r){let{primary:i,secondary:s}=this.getTranslationData(this.lang()),n;if(i&&i[e])n=i[e];else if(s&&s[e])n=s[e];else if($i&&$i[e])n=$i[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...r):n}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var xy={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};to(xy);var Sy=xy;var Oe=class extends ol{};to(Sy);var Fe=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function ky(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),r="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var Cy=M`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var ks=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),at=class extends U{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"icon","suffix"),this.localize=new Oe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pt(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=At(this,"alert.show",{dir:this.localize.dir()});await $t(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Pt(this.base);let{keyframes:t,options:e}=At(this,"alert.hide",{dir:this.localize.dir()});await $t(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ot(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),ks.parentElement===null&&document.body.append(ks),ks.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ks.removeChild(this),t(),ks.querySelector("sl-alert")===null&&ks.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${Z({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?$`
              <div
                class=${Z({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};at.styles=[B,Cy];at.dependencies={"sl-icon-button":De};h([q('[part~="base"]')],at.prototype,"base",2);h([q(".alert__countdown-elapsed")],at.prototype,"countdownElement",2);h([g({type:Boolean,reflect:!0})],at.prototype,"open",2);h([g({type:Boolean,reflect:!0})],at.prototype,"closable",2);h([g({reflect:!0})],at.prototype,"variant",2);h([g({type:Number})],at.prototype,"duration",2);h([g({type:String,reflect:!0})],at.prototype,"countdown",2);h([oe()],at.prototype,"remainingTime",2);h([V("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1);h([V("duration")],at.prototype,"handleDurationChange",1);Tt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Tt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});at.define("sl-alert");var Ey=M`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var Pi=class extends U{constructor(){super(...arguments),this.localize=new Oe(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Pi.styles=[B,Ey];var ro=new WeakMap,io=new WeakMap,so=new WeakMap,Od=new WeakSet,al=new WeakMap,Qt=class{constructor(t,e){this.handleFormData=r=>{let i=this.options.disabled(this.host),s=this.options.name(this.host),n=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!o&&typeof s=="string"&&s.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{r.formData.append(s,a.toString())}):r.formData.append(s,n.toString()))},this.handleFormSubmit=r=>{var i;let s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=ro.get(this.form))==null||i.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),al.set(this.host,[])},this.handleInteraction=r=>{let i=al.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Je({form:r=>{let i=r.form;if(i){let n=r.getRootNode().querySelector(`#${i}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),al.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),al.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ro.has(this.form)?ro.get(this.form).add(this.host):ro.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),io.has(this.form)||(io.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),so.has(this.form)||(so.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=ro.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),io.has(this.form)&&(this.form.reportValidity=io.get(this.form),io.delete(this.form)),so.has(this.form)&&(this.form.checkValidity=so.get(this.form),so.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Od.add(t):Od.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&r.setAttribute(i,e.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!Od.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Cs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ty=Object.freeze(pr(Je({},Cs),{valid:!1,valueMissing:!0})),Ay=Object.freeze(pr(Je({},Cs),{valid:!1,customError:!0}));var ll=M`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var ge=class extends U{constructor(){super(...arguments),this.formControlController=new Qt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Fe(this,"[default]","prefix","suffix"),this.localize=new Oe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Cs}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?xs`a`:xs`button`;return Br`
      <${e}
        part="base"
        class=${Z({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ee(t?void 0:this.disabled)}
        type=${ee(t?void 0:this.type)}
        title=${this.title}
        name=${ee(t?void 0:this.name)}
        value=${ee(t?void 0:this.value)}
        href=${ee(t&&!this.disabled?this.href:void 0)}
        target=${ee(t?this.target:void 0)}
        download=${ee(t?this.download:void 0)}
        rel=${ee(t?this.rel:void 0)}
        role=${ee(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Br` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Br`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};ge.styles=[B,ll];ge.dependencies={"sl-icon":Ae,"sl-spinner":Pi};h([q(".button")],ge.prototype,"button",2);h([oe()],ge.prototype,"hasFocus",2);h([oe()],ge.prototype,"invalid",2);h([g()],ge.prototype,"title",2);h([g({reflect:!0})],ge.prototype,"variant",2);h([g({reflect:!0})],ge.prototype,"size",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"caret",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"loading",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"outline",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"pill",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"circle",2);h([g()],ge.prototype,"type",2);h([g()],ge.prototype,"name",2);h([g()],ge.prototype,"value",2);h([g()],ge.prototype,"href",2);h([g()],ge.prototype,"target",2);h([g()],ge.prototype,"rel",2);h([g()],ge.prototype,"download",2);h([g()],ge.prototype,"form",2);h([g({attribute:"formaction"})],ge.prototype,"formAction",2);h([g({attribute:"formenctype"})],ge.prototype,"formEnctype",2);h([g({attribute:"formmethod"})],ge.prototype,"formMethod",2);h([g({attribute:"formnovalidate",type:Boolean})],ge.prototype,"formNoValidate",2);h([g({attribute:"formtarget"})],ge.prototype,"formTarget",2);h([V("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);ge.define("sl-button");var Oy=M`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var cl=(t="value")=>(e,r)=>{let i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,o,a){var l;let u=i.getPropertyOptions(t),c=typeof u.attribute=="string"?u.attribute:t;if(n===c){let d=u.converter||Fr,f=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:Fr.fromAttribute)(a,u.type);this[t]!==f&&(this[r]=f)}s.call(this,n,o,a)}};var qr=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var ul=mr(class extends Xt{constructor(t){if(super(t),t.type!==gt.PROPERTY&&t.type!==gt.ATTRIBUTE&&t.type!==gt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sl(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ye||e===xe)return e;let r=t.element,i=t.name;if(t.type===gt.PROPERTY){if(e===r[i])return Ye}else if(t.type===gt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return Ye}else if(t.type===gt.ATTRIBUTE&&r.getAttribute(i)===e+"")return Ye;return py(t),e}});var te=class extends U{constructor(){super(...arguments),this.formControlController=new Qt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Fe(this,"help-text","label"),this.localize=new Oe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let s=e??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(t,s,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Z({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${ee(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ee(this.placeholder)}
              minlength=${ee(this.minlength)}
              maxlength=${ee(this.maxlength)}
              min=${ee(this.min)}
              max=${ee(this.max)}
              step=${ee(this.step)}
              .value=${ul(this.value)}
              autocapitalize=${ee(this.autocapitalize)}
              autocomplete=${ee(this.autocomplete)}
              autocorrect=${ee(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ee(this.pattern)}
              enterkeyhint=${ee(this.enterkeyhint)}
              inputmode=${ee(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?$`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};te.styles=[B,qr,Oy];te.dependencies={"sl-icon":Ae};h([q(".input__control")],te.prototype,"input",2);h([oe()],te.prototype,"hasFocus",2);h([g()],te.prototype,"title",2);h([g({reflect:!0})],te.prototype,"type",2);h([g()],te.prototype,"name",2);h([g()],te.prototype,"value",2);h([cl()],te.prototype,"defaultValue",2);h([g({reflect:!0})],te.prototype,"size",2);h([g({type:Boolean,reflect:!0})],te.prototype,"filled",2);h([g({type:Boolean,reflect:!0})],te.prototype,"pill",2);h([g()],te.prototype,"label",2);h([g({attribute:"help-text"})],te.prototype,"helpText",2);h([g({type:Boolean})],te.prototype,"clearable",2);h([g({type:Boolean,reflect:!0})],te.prototype,"disabled",2);h([g()],te.prototype,"placeholder",2);h([g({type:Boolean,reflect:!0})],te.prototype,"readonly",2);h([g({attribute:"password-toggle",type:Boolean})],te.prototype,"passwordToggle",2);h([g({attribute:"password-visible",type:Boolean})],te.prototype,"passwordVisible",2);h([g({attribute:"no-spin-buttons",type:Boolean})],te.prototype,"noSpinButtons",2);h([g({reflect:!0})],te.prototype,"form",2);h([g({type:Boolean,reflect:!0})],te.prototype,"required",2);h([g()],te.prototype,"pattern",2);h([g({type:Number})],te.prototype,"minlength",2);h([g({type:Number})],te.prototype,"maxlength",2);h([g()],te.prototype,"min",2);h([g()],te.prototype,"max",2);h([g()],te.prototype,"step",2);h([g()],te.prototype,"autocapitalize",2);h([g()],te.prototype,"autocorrect",2);h([g()],te.prototype,"autocomplete",2);h([g({type:Boolean})],te.prototype,"autofocus",2);h([g()],te.prototype,"enterkeyhint",2);h([g({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],te.prototype,"spellcheck",2);h([g()],te.prototype,"inputmode",2);h([V("disabled",{waitUntilFirstUpdate:!0})],te.prototype,"handleDisabledChange",1);h([V("step",{waitUntilFirstUpdate:!0})],te.prototype,"handleStepChange",1);h([V("value",{waitUntilFirstUpdate:!0})],te.prototype,"handleValueChange",1);te.define("sl-input");var $y=M`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var jt=class extends U{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=$``;return this.initials?e=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,$`
      <div
        part="base"
        class=${Z({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};jt.styles=[B,$y];jt.dependencies={"sl-icon":Ae};h([oe()],jt.prototype,"hasError",2);h([g()],jt.prototype,"image",2);h([g()],jt.prototype,"label",2);h([g()],jt.prototype,"initials",2);h([g()],jt.prototype,"loading",2);h([g({reflect:!0})],jt.prototype,"shape",2);h([V("image")],jt.prototype,"handleImageChange",1);jt.define("sl-avatar");Pi.define("sl-spinner");var Py=M`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var $d=class extends U{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${Z({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};$d.styles=[B,Py];$d.define("sl-card");var Iy=M`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;var It=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pt(this.body);let{keyframes:e,options:r}=At(this,"details.show",{dir:this.localize.dir()});await $t(this.body,Cd(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pt(this.body);let{keyframes:e,options:r}=At(this,"details.hide",{dir:this.localize.dir()});await $t(this.body,Cd(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ot(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ot(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${Z({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};It.styles=[B,Iy];It.dependencies={"sl-icon":Ae};h([q(".details")],It.prototype,"details",2);h([q(".details__header")],It.prototype,"header",2);h([q(".details__body")],It.prototype,"body",2);h([q(".details__expand-icon-slot")],It.prototype,"expandIconSlot",2);h([g({type:Boolean,reflect:!0})],It.prototype,"open",2);h([g()],It.prototype,"summary",2);h([g({type:Boolean,reflect:!0})],It.prototype,"disabled",2);h([V("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);Tt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Tt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});It.define("sl-details");var Ly=M`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var no=class extends U{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};no.styles=[B,Ly];h([g({type:Boolean,reflect:!0})],no.prototype,"vertical",2);h([V("vertical")],no.prototype,"handleVerticalChange",1);no.define("sl-divider");var Ry=M`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var er=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${Z({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};er.styles=[B,Ry];er.dependencies={"sl-icon-button":De};h([g({reflect:!0})],er.prototype,"variant",2);h([g({reflect:!0})],er.prototype,"size",2);h([g({type:Boolean,reflect:!0})],er.prototype,"pill",2);h([g({type:Boolean})],er.prototype,"removable",2);er.define("sl-tag");var Dy=M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var Ny=new WeakMap;function My(t){let e=Ny.get(t);return e||(e=window.getComputedStyle(t,null),Ny.set(t,e)),e}function TT(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=My(t);return e.visibility!=="hidden"&&e.display!=="none"}function AT(t){let e=My(t),{overflowY:r,overflowX:i}=e;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&r==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function OT(t){let e=t.tagName.toLowerCase(),r=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!TT(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:AT(t)}function zy(t){var e,r;let i=PT(t),s=(e=i[0])!=null?e:null,n=(r=i[i.length-1])!=null?r:null;return{start:s,end:n}}function $T(t,e){var r;return((r=t.getRootNode({composed:!0}))==null?void 0:r.host)!==e}function PT(t){let e=new WeakMap,r=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!r.includes(s)&&OT(s)&&r.push(s),s instanceof HTMLSlotElement&&$T(s,t)&&s.assignedElements({flatten:!0}).forEach(n=>{i(n)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(let n of s.children)i(n)}return i(t),r.sort((s,n)=>{let o=Number(s.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}var Uy=M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var tr=Math.min,rt=Math.max,ao=Math.round,lo=Math.floor,Bt=t=>({x:t,y:t}),IT={left:"right",right:"left",bottom:"top",top:"bottom"},LT={start:"end",end:"start"};function hl(t,e,r){return rt(t,tr(e,r))}function Ii(t,e){return typeof t=="function"?t(e):t}function gr(t){return t.split("-")[0]}function Li(t){return t.split("-")[1]}function Pd(t){return t==="x"?"y":"x"}function fl(t){return t==="y"?"height":"width"}function Vr(t){return["top","bottom"].includes(gr(t))?"y":"x"}function pl(t){return Pd(Vr(t))}function Fy(t,e,r){r===void 0&&(r=!1);let i=Li(t),s=pl(t),n=fl(s),o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=oo(o)),[o,oo(o)]}function jy(t){let e=oo(t);return[dl(t),e,dl(e)]}function dl(t){return t.replace(/start|end/g,e=>LT[e])}function RT(t,e,r){let i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function By(t,e,r,i){let s=Li(t),n=RT(gr(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(dl)))),n}function oo(t){return t.replace(/left|right|bottom|top/g,e=>IT[e])}function DT(t){return{top:0,right:0,bottom:0,left:0,...t}}function Id(t){return typeof t!="number"?DT(t):{top:t,right:t,bottom:t,left:t}}function Ri(t){let{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function qy(t,e,r){let{reference:i,floating:s}=t,n=Vr(e),o=pl(e),a=fl(o),l=gr(e),u=n==="y",c=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[a]/2-s[a]/2,f;switch(l){case"top":f={x:c,y:i.y-s.height};break;case"bottom":f={x:c,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:d};break;case"left":f={x:i.x-s.width,y:d};break;default:f={x:i.x,y:i.y}}switch(Li(e)){case"start":f[o]-=p*(r&&u?-1:1);break;case"end":f[o]+=p*(r&&u?-1:1);break}return f}var Vy=async(t,e,r)=>{let{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,a=n.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e)),u=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:c,y:d}=qy(u,i,l),p=i,f={},m=0;for(let v=0;v<a.length;v++){let{name:b,fn:y}=a[v],{x:w,y:x,data:_,reset:O}=await y({x:c,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:f,rects:u,platform:o,elements:{reference:t,floating:e}});c=w??c,d=x??d,f={...f,[b]:{...f[b],..._}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(p=O.placement),O.rects&&(u=O.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):O.rects),{x:c,y:d}=qy(u,p,l)),v=-1)}return{x:c,y:d,placement:p,strategy:s,middlewareData:f}};async function ml(t,e){var r;e===void 0&&(e={});let{x:i,y:s,platform:n,rects:o,elements:a,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Ii(e,t),m=Id(f),b=a[p?d==="floating"?"reference":"floating":d],y=Ri(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:l})),w=d==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),_=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},O=Ri(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(y.top-O.top+m.top)/_.y,bottom:(O.bottom-y.bottom+m.bottom)/_.y,left:(y.left-O.left+m.left)/_.x,right:(O.right-y.right+m.right)/_.x}}var Wy=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:i,placement:s,rects:n,platform:o,elements:a,middlewareData:l}=e,{element:u,padding:c=0}=Ii(t,e)||{};if(u==null)return{};let d=Id(c),p={x:r,y:i},f=pl(s),m=fl(f),v=await o.getDimensions(u),b=f==="y",y=b?"top":"left",w=b?"bottom":"right",x=b?"clientHeight":"clientWidth",_=n.reference[m]+n.reference[f]-p[f]-n.floating[m],O=p[f]-n.reference[f],se=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u)),ae=se?se[x]:0;(!ae||!await(o.isElement==null?void 0:o.isElement(se)))&&(ae=a.floating[x]||n.floating[m]);let G=_/2-O/2,ve=ae/2-v[m]/2-1,P=tr(d[y],ve),ne=tr(d[w],ve),re=P,fe=ae-v[m]-ne,Ie=ae/2-v[m]/2+G,Ne=hl(re,Ie,fe),Xe=!l.arrow&&Li(s)!=null&&Ie!==Ne&&n.reference[m]/2-(Ie<re?P:ne)-v[m]/2<0,He=Xe?Ie<re?Ie-re:Ie-fe:0;return{[f]:p[f]+He,data:{[f]:Ne,centerOffset:Ie-Ne-He,...Xe&&{alignmentOffset:He}},reset:Xe}}});var Hy=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;let{placement:s,middlewareData:n,rects:o,initialPlacement:a,platform:l,elements:u}=e,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...b}=Ii(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};let y=gr(s),w=Vr(a),x=gr(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(u.floating)),O=p||(x||!v?[oo(a)]:jy(a)),se=m!=="none";!p&&se&&O.push(...By(a,v,m,_));let ae=[a,...O],G=await ml(e,b),ve=[],P=((i=n.flip)==null?void 0:i.overflows)||[];if(c&&ve.push(G[y]),d){let Ie=Fy(s,o,_);ve.push(G[Ie[0]],G[Ie[1]])}if(P=[...P,{placement:s,overflows:ve}],!ve.every(Ie=>Ie<=0)){var ne,re;let Ie=(((ne=n.flip)==null?void 0:ne.index)||0)+1,Ne=ae[Ie];if(Ne)return{data:{index:Ie,overflows:P},reset:{placement:Ne}};let Xe=(re=P.filter(He=>He.overflows[0]<=0).sort((He,it)=>He.overflows[1]-it.overflows[1])[0])==null?void 0:re.placement;if(!Xe)switch(f){case"bestFit":{var fe;let He=(fe=P.filter(it=>{if(se){let Mt=Vr(it.placement);return Mt===w||Mt==="y"}return!0}).map(it=>[it.placement,it.overflows.filter(Mt=>Mt>0).reduce((Mt,Rv)=>Mt+Rv,0)]).sort((it,Mt)=>it[1]-Mt[1])[0])==null?void 0:fe[0];He&&(Xe=He);break}case"initialPlacement":Xe=a;break}if(s!==Xe)return{reset:{placement:Xe}}}return{}}}};async function NT(t,e){let{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=gr(r),a=Li(r),l=Vr(r)==="y",u=["left","top"].includes(o)?-1:1,c=n&&l?-1:1,d=Ii(e,t),{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),l?{x:f*c,y:p*u}:{x:p*u,y:f*c}}var Zy=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;let{x:s,y:n,placement:o,middlewareData:a}=e,l=await NT(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:o}}}}},Gy=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:a={fn:b=>{let{x:y,y:w}=b;return{x:y,y:w}}},...l}=Ii(t,e),u={x:r,y:i},c=await ml(e,l),d=Vr(gr(s)),p=Pd(d),f=u[p],m=u[d];if(n){let b=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=f+c[b],x=f-c[y];f=hl(w,f,x)}if(o){let b=d==="y"?"top":"left",y=d==="y"?"bottom":"right",w=m+c[b],x=m-c[y];m=hl(w,m,x)}let v=a.fn({...e,[p]:f,[d]:m});return{...v,data:{x:v.x-r,y:v.y-i,enabled:{[p]:n,[d]:o}}}}}};var Ky=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;let{placement:s,rects:n,platform:o,elements:a}=e,{apply:l=()=>{},...u}=Ii(t,e),c=await ml(e,u),d=gr(s),p=Li(s),f=Vr(s)==="y",{width:m,height:v}=n.floating,b,y;d==="top"||d==="bottom"?(b=d,y=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,b=p==="end"?"top":"bottom");let w=v-c.top-c.bottom,x=m-c.left-c.right,_=tr(v-c[b],w),O=tr(m-c[y],x),se=!e.middlewareData.shift,ae=_,G=O;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(G=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(ae=w),se&&!p){let P=rt(c.left,0),ne=rt(c.right,0),re=rt(c.top,0),fe=rt(c.bottom,0);f?G=m-2*(P!==0||ne!==0?P+ne:rt(c.left,c.right)):ae=v-2*(re!==0||fe!==0?re+fe:rt(c.top,c.bottom))}await l({...e,availableWidth:G,availableHeight:ae});let ve=await o.getDimensions(a.floating);return m!==ve.width||v!==ve.height?{reset:{rects:!0}}:{}}}};function gl(){return typeof window<"u"}function Di(t){return Jy(t)?(t.nodeName||"").toLowerCase():"#document"}function lt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function qt(t){var e;return(e=(Jy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Jy(t){return gl()?t instanceof Node||t instanceof lt(t).Node:!1}function Lt(t){return gl()?t instanceof Element||t instanceof lt(t).Element:!1}function Vt(t){return gl()?t instanceof HTMLElement||t instanceof lt(t).HTMLElement:!1}function Yy(t){return!gl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof lt(t).ShadowRoot}function Ts(t){let{overflow:e,overflowX:r,overflowY:i,display:s}=Rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function Xy(t){return["table","td","th"].includes(Di(t))}function co(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function As(t){let e=bl(),r=Lt(t)?Rt(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Qy(t){let e=br(t);for(;Vt(e)&&!Ni(e);){if(As(e))return e;if(co(e))return null;e=br(e)}return null}function bl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ni(t){return["html","body","#document"].includes(Di(t))}function Rt(t){return lt(t).getComputedStyle(t)}function uo(t){return Lt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function br(t){if(Di(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Yy(t)&&t.host||qt(t);return Yy(e)?e.host:e}function ev(t){let e=br(t);return Ni(e)?t.ownerDocument?t.ownerDocument.body:t.body:Vt(e)&&Ts(e)?e:ev(e)}function Es(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);let s=ev(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=lt(s);if(n){let a=yl(o);return e.concat(o,o.visualViewport||[],Ts(s)?s:[],a&&r?Es(a):[])}return e.concat(s,Es(s,[],r))}function yl(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function iv(t){let e=Rt(t),r=parseFloat(e.width)||0,i=parseFloat(e.height)||0,s=Vt(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,a=ao(r)!==n||ao(i)!==o;return a&&(r=n,i=o),{width:r,height:i,$:a}}function Rd(t){return Lt(t)?t:t.contextElement}function Os(t){let e=Rd(t);if(!Vt(e))return Bt(1);let r=e.getBoundingClientRect(),{width:i,height:s,$:n}=iv(e),o=(n?ao(r.width):r.width)/i,a=(n?ao(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}var MT=Bt(0);function sv(t){let e=lt(t);return!bl()||!e.visualViewport?MT:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zT(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==lt(t)?!1:e}function Mi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);let s=t.getBoundingClientRect(),n=Rd(t),o=Bt(1);e&&(i?Lt(i)&&(o=Os(i)):o=Os(t));let a=zT(n,r,i)?sv(n):Bt(0),l=(s.left+a.x)/o.x,u=(s.top+a.y)/o.y,c=s.width/o.x,d=s.height/o.y;if(n){let p=lt(n),f=i&&Lt(i)?lt(i):i,m=p,v=yl(m);for(;v&&i&&f!==m;){let b=Os(v),y=v.getBoundingClientRect(),w=Rt(v),x=y.left+(v.clientLeft+parseFloat(w.paddingLeft))*b.x,_=y.top+(v.clientTop+parseFloat(w.paddingTop))*b.y;l*=b.x,u*=b.y,c*=b.x,d*=b.y,l+=x,u+=_,m=lt(v),v=yl(m)}}return Ri({width:c,height:d,x:l,y:u})}function Dd(t,e){let r=uo(t).scrollLeft;return e?e.left+r:Mi(qt(t)).left+r}function nv(t,e,r){r===void 0&&(r=!1);let i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-(r?0:Dd(t,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function UT(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t,n=s==="fixed",o=qt(i),a=e?co(e.floating):!1;if(i===o||a&&n)return r;let l={scrollLeft:0,scrollTop:0},u=Bt(1),c=Bt(0),d=Vt(i);if((d||!d&&!n)&&((Di(i)!=="body"||Ts(o))&&(l=uo(i)),Vt(i))){let f=Mi(i);u=Os(i),c.x=f.x+i.clientLeft,c.y=f.y+i.clientTop}let p=o&&!d&&!n?nv(o,l,!0):Bt(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+c.x+p.x,y:r.y*u.y-l.scrollTop*u.y+c.y+p.y}}function FT(t){return Array.from(t.getClientRects())}function jT(t){let e=qt(t),r=uo(t),i=t.ownerDocument.body,s=rt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=rt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),o=-r.scrollLeft+Dd(t),a=-r.scrollTop;return Rt(i).direction==="rtl"&&(o+=rt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:a}}function BT(t,e){let r=lt(t),i=qt(t),s=r.visualViewport,n=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){n=s.width,o=s.height;let u=bl();(!u||u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:n,height:o,x:a,y:l}}function qT(t,e){let r=Mi(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Vt(t)?Os(t):Bt(1),o=t.clientWidth*n.x,a=t.clientHeight*n.y,l=s*n.x,u=i*n.y;return{width:o,height:a,x:l,y:u}}function tv(t,e,r){let i;if(e==="viewport")i=BT(t,r);else if(e==="document")i=jT(qt(t));else if(Lt(e))i=qT(e,r);else{let s=sv(t);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ri(i)}function ov(t,e){let r=br(t);return r===e||!Lt(r)||Ni(r)?!1:Rt(r).position==="fixed"||ov(r,e)}function VT(t,e){let r=e.get(t);if(r)return r;let i=Es(t,[],!1).filter(a=>Lt(a)&&Di(a)!=="body"),s=null,n=Rt(t).position==="fixed",o=n?br(t):t;for(;Lt(o)&&!Ni(o);){let a=Rt(o),l=As(o);!l&&a.position==="fixed"&&(s=null),(n?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ts(o)&&!l&&ov(t,o))?i=i.filter(c=>c!==o):s=a,o=br(o)}return e.set(t,i),i}function WT(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t,o=[...r==="clippingAncestors"?co(e)?[]:VT(e,this._c):[].concat(r),i],a=o[0],l=o.reduce((u,c)=>{let d=tv(e,c,s);return u.top=rt(d.top,u.top),u.right=tr(d.right,u.right),u.bottom=tr(d.bottom,u.bottom),u.left=rt(d.left,u.left),u},tv(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function HT(t){let{width:e,height:r}=iv(t);return{width:e,height:r}}function ZT(t,e,r){let i=Vt(e),s=qt(e),n=r==="fixed",o=Mi(t,!0,n,e),a={scrollLeft:0,scrollTop:0},l=Bt(0);if(i||!i&&!n)if((Di(e)!=="body"||Ts(s))&&(a=uo(e)),i){let p=Mi(e,!0,n,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&(l.x=Dd(s));let u=s&&!i&&!n?nv(s,a):Bt(0),c=o.left+a.scrollLeft-l.x-u.x,d=o.top+a.scrollTop-l.y-u.y;return{x:c,y:d,width:o.width,height:o.height}}function Ld(t){return Rt(t).position==="static"}function rv(t,e){if(!Vt(t)||Rt(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return qt(t)===r&&(r=r.ownerDocument.body),r}function av(t,e){let r=lt(t);if(co(t))return r;if(!Vt(t)){let s=br(t);for(;s&&!Ni(s);){if(Lt(s)&&!Ld(s))return s;s=br(s)}return r}let i=rv(t,e);for(;i&&Xy(i)&&Ld(i);)i=rv(i,e);return i&&Ni(i)&&Ld(i)&&!As(i)?r:i||Qy(t)||r}var GT=async function(t){let e=this.getOffsetParent||av,r=this.getDimensions,i=await r(t.floating);return{reference:ZT(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function KT(t){return Rt(t).direction==="rtl"}var ho={convertOffsetParentRelativeRectToViewportRelativeRect:UT,getDocumentElement:qt,getClippingRect:WT,getOffsetParent:av,getElementRects:GT,getClientRects:FT,getDimensions:HT,getScale:Os,isElement:Lt,isRTL:KT};function YT(t,e){let r=null,i,s=qt(t);function n(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();let{left:u,top:c,width:d,height:p}=t.getBoundingClientRect();if(a||e(),!d||!p)return;let f=lo(c),m=lo(s.clientWidth-(u+d)),v=lo(s.clientHeight-(c+p)),b=lo(u),w={rootMargin:-f+"px "+-m+"px "+-v+"px "+-b+"px",threshold:rt(0,tr(1,l))||1},x=!0;function _(O){let se=O[0].intersectionRatio;if(se!==l){if(!x)return o();se?o(!1,se):i=setTimeout(()=>{o(!1,1e-7)},1e3)}x=!1}try{r=new IntersectionObserver(_,{...w,root:s.ownerDocument})}catch{r=new IntersectionObserver(_,w)}r.observe(t)}return o(!0),n}function lv(t,e,r,i){i===void 0&&(i={});let{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=Rd(t),c=s||n?[...u?Es(u):[],...Es(e)]:[];c.forEach(y=>{s&&y.addEventListener("scroll",r,{passive:!0}),n&&y.addEventListener("resize",r)});let d=u&&a?YT(u,r):null,p=-1,f=null;o&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===u&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),r()}),u&&!l&&f.observe(u),f.observe(e));let m,v=l?Mi(t):null;l&&b();function b(){let y=Mi(t);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&r(),v=y,m=requestAnimationFrame(b)}return r(),()=>{var y;c.forEach(w=>{s&&w.removeEventListener("scroll",r),n&&w.removeEventListener("resize",r)}),d?.(),(y=f)==null||y.disconnect(),f=null,l&&cancelAnimationFrame(m)}}var cv=Zy;var uv=Gy,dv=Hy,Nd=Ky;var hv=Wy;var fv=(t,e,r)=>{let i=new Map,s={platform:ho,...r},n={...s.platform,_c:i};return Vy(t,e,{...s,platform:n})};function pv(t){return JT(t)}function Md(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function JT(t){for(let e=t;e;e=Md(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Md(t);e;e=Md(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||As(r)||e.tagName==="BODY"))return e}return null}function XT(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var he=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),i=0,s=0,n=0,o=0,a=0,l=0,u=0,c=0;r?t.top<e.top?(i=t.left,s=t.bottom,n=t.right,o=t.bottom,a=e.left,l=e.top,u=e.right,c=e.top):(i=e.left,s=e.bottom,n=e.right,o=e.bottom,a=t.left,l=t.top,u=t.right,c=t.top):t.left<e.left?(i=t.right,s=t.top,n=e.left,o=e.top,a=t.right,l=t.bottom,u=e.left,c=e.bottom):(i=e.right,s=e.top,n=t.left,o=t.top,a=e.right,l=e.bottom,u=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||XT(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=lv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[cv({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Nd({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=s?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(dv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(uv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Nd({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(hv({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>ho.getOffsetParent(r,pv):ho.getOffsetParent;fv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:pr(Je({},ho),{getOffsetParent:e})}).then(({x:r,y:i,middlewareData:s,placement:n})=>{let o=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let l=s.arrow.x,u=s.arrow.y,c="",d="",p="",f="";if(this.arrowPlacement==="start"){let m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?m:"",f=o?"":m}else if(this.arrowPlacement==="end"){let m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":m,f=o?m:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",c=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:c,right:d,bottom:p,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Z({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Z({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};he.styles=[B,Uy];h([q(".popup")],he.prototype,"popup",2);h([q(".popup__arrow")],he.prototype,"arrowEl",2);h([g()],he.prototype,"anchor",2);h([g({type:Boolean,reflect:!0})],he.prototype,"active",2);h([g({reflect:!0})],he.prototype,"placement",2);h([g({reflect:!0})],he.prototype,"strategy",2);h([g({type:Number})],he.prototype,"distance",2);h([g({type:Number})],he.prototype,"skidding",2);h([g({type:Boolean})],he.prototype,"arrow",2);h([g({attribute:"arrow-placement"})],he.prototype,"arrowPlacement",2);h([g({attribute:"arrow-padding",type:Number})],he.prototype,"arrowPadding",2);h([g({type:Boolean})],he.prototype,"flip",2);h([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],he.prototype,"flipFallbackPlacements",2);h([g({attribute:"flip-fallback-strategy"})],he.prototype,"flipFallbackStrategy",2);h([g({type:Object})],he.prototype,"flipBoundary",2);h([g({attribute:"flip-padding",type:Number})],he.prototype,"flipPadding",2);h([g({type:Boolean})],he.prototype,"shift",2);h([g({type:Object})],he.prototype,"shiftBoundary",2);h([g({attribute:"shift-padding",type:Number})],he.prototype,"shiftPadding",2);h([g({attribute:"auto-size"})],he.prototype,"autoSize",2);h([g()],he.prototype,"sync",2);h([g({type:Object})],he.prototype,"autoSizeBoundary",2);h([g({attribute:"auto-size-padding",type:Number})],he.prototype,"autoSizePadding",2);h([g({attribute:"hover-bridge",type:Boolean})],he.prototype,"hoverBridge",2);var Ve=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,s;let n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(s=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||n?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),i=r[0],s=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>zy(i).start),r;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=e.button;break;default:r=e}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ot(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=At(this,"dropdown.show",{dir:this.localize.dir()});await $t(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);let{keyframes:t,options:e}=At(this,"dropdown.hide",{dir:this.localize.dir()});await $t(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${ee(this.sync?this.sync:void 0)}
        class=${Z({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ve.styles=[B,Dy];Ve.dependencies={"sl-popup":he};h([q(".dropdown")],Ve.prototype,"popup",2);h([q(".dropdown__trigger")],Ve.prototype,"trigger",2);h([q(".dropdown__panel")],Ve.prototype,"panel",2);h([g({type:Boolean,reflect:!0})],Ve.prototype,"open",2);h([g({reflect:!0})],Ve.prototype,"placement",2);h([g({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);h([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ve.prototype,"stayOpenOnSelect",2);h([g({attribute:!1})],Ve.prototype,"containingElement",2);h([g({type:Number})],Ve.prototype,"distance",2);h([g({type:Number})],Ve.prototype,"skidding",2);h([g({type:Boolean})],Ve.prototype,"hoist",2);h([g({reflect:!0})],Ve.prototype,"sync",2);h([V("open",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleOpenChange",1);Tt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Tt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ve.define("sl-dropdown");var mv=M`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var $s=class extends U{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${Z({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};$s.styles=[B,mv];h([g({reflect:!0})],$s.prototype,"variant",2);h([g({type:Boolean,reflect:!0})],$s.prototype,"pill",2);h([g({type:Boolean,reflect:!0})],$s.prototype,"pulse",2);$s.define("sl-badge");var gv=M`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var We=class extends U{constructor(){super(...arguments),this.formControlController=new Qt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Fe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return $`
      <div
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Z({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ee(this.value)}
            .checked=${ul(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};We.styles=[B,qr,gv];h([q('input[type="checkbox"]')],We.prototype,"input",2);h([oe()],We.prototype,"hasFocus",2);h([g()],We.prototype,"title",2);h([g()],We.prototype,"name",2);h([g()],We.prototype,"value",2);h([g({reflect:!0})],We.prototype,"size",2);h([g({type:Boolean,reflect:!0})],We.prototype,"disabled",2);h([g({type:Boolean,reflect:!0})],We.prototype,"checked",2);h([cl("checked")],We.prototype,"defaultChecked",2);h([g({reflect:!0})],We.prototype,"form",2);h([g({type:Boolean,reflect:!0})],We.prototype,"required",2);h([g({attribute:"help-text"})],We.prototype,"helpText",2);h([V("checked",{waitUntilFirstUpdate:!0})],We.prototype,"handleCheckedChange",1);h([V("disabled",{waitUntilFirstUpdate:!0})],We.prototype,"handleDisabledChange",1);We.define("sl-switch");var bv=M`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var fo=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),fo(i,e);return!0},vl=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},yv=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),tA(e)}};function QT(t){this._$AN!==void 0?(vl(this),this._$AM=t,yv(this)):this._$AM=t}function eA(t,e=!1,r=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)fo(i[n],!1),vl(i[n]);else i!=null&&(fo(i,!1),vl(i));else fo(this,t)}var tA=t=>{t.type==gt.CHILD&&(t._$AP??=eA,t._$AQ??=QT)},wl=class extends Xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),yv(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(fo(this,e),vl(this))}setValue(e){if(sl(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var vv=()=>new Ud,Ud=class{},zd=new WeakMap,wv=mr(class extends wl{render(t){return xe}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),xe}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=zd.get(e);r===void 0&&(r=new WeakMap,zd.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?zd.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _v=class{constructor(t,e){this.popupRef=vv(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break;default:break}},this.handleClick=r=>{var i;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(i=r.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{let r=this.host.renderRoot.querySelector("slot[name='submenu']"),i=r?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:n,top:o,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of e.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,n)=>{var o;let a=(o=e.get(n))!=null?o:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return s-u.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?$`
      <sl-popup
        ${wv(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}};var ct=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Fe(this,"submenu"),this.submenuController=new _v(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ky(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${Z({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ct.styles=[B,bv];ct.dependencies={"sl-icon":Ae,"sl-popup":he,"sl-spinner":Pi};h([q("slot:not([name])")],ct.prototype,"defaultSlot",2);h([q(".menu-item")],ct.prototype,"menuItem",2);h([g()],ct.prototype,"type",2);h([g({type:Boolean,reflect:!0})],ct.prototype,"checked",2);h([g()],ct.prototype,"value",2);h([g({type:Boolean,reflect:!0})],ct.prototype,"loading",2);h([g({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);h([V("checked")],ct.prototype,"handleCheckedChange",1);h([V("disabled")],ct.prototype,"handleDisabledChange",1);h([V("type")],ct.prototype,"handleTypeChange",1);ct.define("sl-menu-item");var xv=M`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var _l=class extends U{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath(),i=r.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;let o=i;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),i=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===t?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};_l.styles=[B,xv];h([q("slot")],_l.prototype,"defaultSlot",2);_l.define("sl-menu");De.define("sl-icon-button");var Sv=M`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Wr=class extends U{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=po(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=po(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=po(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=po(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),i=po(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Wr.styles=[B,Sv];h([q("slot")],Wr.prototype,"defaultSlot",2);h([oe()],Wr.prototype,"disableRole",2);h([g()],Wr.prototype,"label",2);function po(t){var e;let r="sl-button, sl-radio-button";return(e=t.closest(r))!=null?e:t.querySelector(r)}Wr.define("sl-button-group");var kv=M`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function rA(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function mo(t,e,r="vertical",i="smooth"){let s=rA(t,e),n=s.top+e.scrollTop,o=s.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,u=e.scrollTop,c=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(o<a?e.scrollTo({left:o,behavior:i}):o+t.clientWidth>l&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<u?e.scrollTo({top:n,behavior:i}):n+t.clientHeight>c&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:i}))}var go=class extends Xt{constructor(e){if(super(e),this.it=xe,e.type!==gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===xe||e==null)return this._t=void 0,this.it=e;if(e===Ye)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};go.directiveName="unsafeHTML",go.resultType=1;var Cv=mr(go);var le=class extends U{constructor(){super(...arguments),this.formControlController=new Qt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Fe(this,"help-text","label"),this.localize=new Oe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>$`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,r=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(r||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let s=this.getAllOptions(),n=s.indexOf(this.currentOption),o=Math.max(0,n);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(o=n+1,o>s.length-1&&(o=0)):t.key==="ArrowUp"?(o=n-1,o<0&&(o=s.length-1)):t.key==="Home"?o=0:t.key==="End"&&(o=s.length-1),this.setCurrentOption(s[o])}if(t.key&&t.key.length===1||t.key==="Backspace"){let s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let n of s)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let r=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let r=t.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(e)?e:[e],i=[];t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>r.includes(s.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),r=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,r;let i=this.getAllOptions();this.selectedOptions=i.filter(n=>n.selected);let s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let n=this.selectedOptions[0];this.value=(t=n?.value)!=null?t:"",this.displayLabel=(r=(e=n?.getTextLabel)==null?void 0:e.call(n))!=null?r:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(t,e);return $`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof r=="string"?Cv(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return $``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){let r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=At(this,"select.show",{dir:this.localize.dir()});await $t(this.popup.popup,t,e),this.currentOption&&mo(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);let{keyframes:t,options:e}=At(this,"select.hide",{dir:this.localize.dir()});await $t(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ot(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ot(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return $`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Z({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};le.styles=[B,qr,kv];le.dependencies={"sl-icon":Ae,"sl-popup":he,"sl-tag":er};h([q(".select")],le.prototype,"popup",2);h([q(".select__combobox")],le.prototype,"combobox",2);h([q(".select__display-input")],le.prototype,"displayInput",2);h([q(".select__value-input")],le.prototype,"valueInput",2);h([q(".select__listbox")],le.prototype,"listbox",2);h([oe()],le.prototype,"hasFocus",2);h([oe()],le.prototype,"displayLabel",2);h([oe()],le.prototype,"currentOption",2);h([oe()],le.prototype,"selectedOptions",2);h([oe()],le.prototype,"valueHasChanged",2);h([g()],le.prototype,"name",2);h([oe()],le.prototype,"value",1);h([g({attribute:"value"})],le.prototype,"defaultValue",2);h([g({reflect:!0})],le.prototype,"size",2);h([g()],le.prototype,"placeholder",2);h([g({type:Boolean,reflect:!0})],le.prototype,"multiple",2);h([g({attribute:"max-options-visible",type:Number})],le.prototype,"maxOptionsVisible",2);h([g({type:Boolean,reflect:!0})],le.prototype,"disabled",2);h([g({type:Boolean})],le.prototype,"clearable",2);h([g({type:Boolean,reflect:!0})],le.prototype,"open",2);h([g({type:Boolean})],le.prototype,"hoist",2);h([g({type:Boolean,reflect:!0})],le.prototype,"filled",2);h([g({type:Boolean,reflect:!0})],le.prototype,"pill",2);h([g()],le.prototype,"label",2);h([g({reflect:!0})],le.prototype,"placement",2);h([g({attribute:"help-text"})],le.prototype,"helpText",2);h([g({reflect:!0})],le.prototype,"form",2);h([g({type:Boolean,reflect:!0})],le.prototype,"required",2);h([g()],le.prototype,"getTag",2);h([V("disabled",{waitUntilFirstUpdate:!0})],le.prototype,"handleDisabledChange",1);h([V(["defaultValue","value"],{waitUntilFirstUpdate:!0})],le.prototype,"handleValueChange",1);h([V("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);Tt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Tt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});le.define("sl-select");var Ev=M`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var bt=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return $`
      <div
        part="base"
        class=${Z({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};bt.styles=[B,Ev];bt.dependencies={"sl-icon":Ae};h([q(".option__label")],bt.prototype,"defaultSlot",2);h([oe()],bt.prototype,"current",2);h([oe()],bt.prototype,"selected",2);h([oe()],bt.prototype,"hasHover",2);h([g({reflect:!0})],bt.prototype,"value",2);h([g({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);h([V("disabled")],bt.prototype,"handleDisabledChange",1);h([V("selected")],bt.prototype,"handleSelectedChange",1);h([V("value")],bt.prototype,"handleValueChange",1);bt.define("sl-option");var Tv=M`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;var Av=M`
  :host {
    display: contents;
  }
`;var bo=class extends U{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};bo.styles=[B,Av];h([g({type:Boolean,reflect:!0})],bo.prototype,"disabled",2);h([V("disabled",{waitUntilFirstUpdate:!0})],bo.prototype,"handleDisabledChange",1);var je=class extends U{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Oe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,i)=>{var s;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let r=t.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){let r=t.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let s=this.tabs.find(a=>a.matches(":focus")),n=this.localize.dir()==="rtl",o=null;if(s?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")o=this.focusableTabs[0];else if(t.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let a=this.tabs.findIndex(l=>l===s);o=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let a=this.tabs.findIndex(l=>l===s);o=this.findNextFocusableTab(a,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===o?0:-1}),["top","bottom"].includes(this.placement)&&mo(o,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Je({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var s;return i.active=i.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&mo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,i=this.localize.dir()==="rtl",s=this.getAllTabs(),o=s.slice(0,s.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null,i=e==="forward"?1:-1,s=t+i;for(;t<this.tabs.length;){if(r=this.tabs[s]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;s+=i}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${Z({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Z({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Z({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};je.styles=[B,Tv];je.dependencies={"sl-icon-button":De,"sl-resize-observer":bo};h([q(".tab-group")],je.prototype,"tabGroup",2);h([q(".tab-group__body")],je.prototype,"body",2);h([q(".tab-group__nav")],je.prototype,"nav",2);h([q(".tab-group__indicator")],je.prototype,"indicator",2);h([oe()],je.prototype,"hasScrollControls",2);h([oe()],je.prototype,"shouldHideScrollStartButton",2);h([oe()],je.prototype,"shouldHideScrollEndButton",2);h([g()],je.prototype,"placement",2);h([g()],je.prototype,"activation",2);h([g({attribute:"no-scroll-controls",type:Boolean})],je.prototype,"noScrollControls",2);h([g({attribute:"fixed-scroll-controls",type:Boolean})],je.prototype,"fixedScrollControls",2);h([hy({passive:!0})],je.prototype,"updateScrollButtons",1);h([V("noScrollControls",{waitUntilFirstUpdate:!0})],je.prototype,"updateScrollControls",1);h([V("placement",{waitUntilFirstUpdate:!0})],je.prototype,"syncIndicator",1);je.define("sl-tab-group");var iA=(t,e)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...i)},e)}},Ov=(t,e,r)=>{let i=t[e];t[e]=function(...s){i.call(this,...s),r.call(this,i,...s)}},sA="onscrollend"in window;if(!sA){let t=new Set,e=new WeakMap,r=s=>{for(let n of s.changedTouches)t.add(n.identifier)},i=s=>{for(let n of s.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Ov(EventTarget.prototype,"addEventListener",function(s,n){if(n!=="scrollend")return;let o=iA(()=>{t.size?o():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",o,{passive:!0}),e.set(this,o)}),Ov(EventTarget.prototype,"removeEventListener",function(s,n){if(n!=="scrollend")return;let o=e.get(this);o&&s.call(this,"scroll",o,{passive:!0})})}var $v=M`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var nA=0,Dt=class extends U{constructor(){super(...arguments),this.localize=new Oe(this),this.attrId=++nA,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${Z({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Dt.styles=[B,$v];Dt.dependencies={"sl-icon-button":De};h([q(".tab")],Dt.prototype,"tab",2);h([g({reflect:!0})],Dt.prototype,"panel",2);h([g({type:Boolean,reflect:!0})],Dt.prototype,"active",2);h([g({type:Boolean,reflect:!0})],Dt.prototype,"closable",2);h([g({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);h([g({type:Number,reflect:!0})],Dt.prototype,"tabIndex",2);h([V("active")],Dt.prototype,"handleActiveChange",1);h([V("disabled")],Dt.prototype,"handleDisabledChange",1);Dt.define("sl-tab");var Pv=M`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var oA=0,Ps=class extends U{constructor(){super(...arguments),this.attrId=++oA,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${Z({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ps.styles=[B,Pv];h([g({reflect:!0})],Ps.prototype,"name",2);h([g({type:Boolean,reflect:!0})],Ps.prototype,"active",2);h([V("active")],Ps.prototype,"handleActiveChange",1);Ps.define("sl-tab-panel");var Iv=M`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var Be=class extends U{constructor(){super(...arguments),this.formControlController=new Qt(this),this.hasSlotController=new Fe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?Ay:t?Ty:Cs}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,r.forEach(s=>s.checked=s===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(a=>!a.disabled),i=(e=r.find(a=>a.checked))!=null?e:r[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value,o=r.indexOf(i)+s;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[o].value,r[o].checked=!0,this.hasButtonGroup?r[o].shadowRoot.querySelector("button").focus():(r[o].setAttribute("tabindex","0"),r[o].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=r[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),r=e.find(n=>n.checked),i=e.find(n=>!n.disabled),s=r||i;s&&s.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Be.styles=[B,qr,Iv];Be.dependencies={"sl-button-group":Wr};h([q("slot:not([name])")],Be.prototype,"defaultSlot",2);h([q(".radio-group__validation-input")],Be.prototype,"validationInput",2);h([oe()],Be.prototype,"hasButtonGroup",2);h([oe()],Be.prototype,"errorMessage",2);h([oe()],Be.prototype,"defaultValue",2);h([g()],Be.prototype,"label",2);h([g({attribute:"help-text"})],Be.prototype,"helpText",2);h([g()],Be.prototype,"name",2);h([g({reflect:!0})],Be.prototype,"value",2);h([g({reflect:!0})],Be.prototype,"size",2);h([g({reflect:!0})],Be.prototype,"form",2);h([g({type:Boolean,reflect:!0})],Be.prototype,"required",2);h([V("size",{waitUntilFirstUpdate:!0})],Be.prototype,"handleSizeChange",1);h([V("value")],Be.prototype,"handleValueChange",1);Be.define("sl-radio-group");var Lv=M`
  ${ll}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var Nt=class extends U{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Br`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Z({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${ee(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Nt.styles=[B,Lv];h([q(".button")],Nt.prototype,"input",2);h([q(".hidden-input")],Nt.prototype,"hiddenInput",2);h([oe()],Nt.prototype,"hasFocus",2);h([g({type:Boolean,reflect:!0})],Nt.prototype,"checked",2);h([g()],Nt.prototype,"value",2);h([g({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);h([g({reflect:!0})],Nt.prototype,"size",2);h([g({type:Boolean,reflect:!0})],Nt.prototype,"pill",2);h([V("disabled",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleDisabledChange",1);Nt.define("sl-radio-button");Zn("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");dh("gul-info",{title:"<title>",namespace:"<namespace>",database:"<database>",datapoint:"<datapoint>"},Lb);})();
/*! Bundled license information:

cssesc/cssesc.js:
  (*! https://mths.be/cssesc v3.0.0 by @mathias *)

uuidv7/dist/index.js:
  (**
   * uuidv7: A JavaScript implementation of UUID version 7
   *
   * Copyright 2021-2024 LiosK
   *
   * @license Apache-2.0
   * @packageDocumentation
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=app.js.map
