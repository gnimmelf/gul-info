"use strict";(()=>{var kw=Object.create;var oa=Object.defineProperty;var Gh=Object.getOwnPropertyDescriptor;var Sw=Object.getOwnPropertyNames;var Cw=Object.getPrototypeOf,Tw=Object.prototype.hasOwnProperty;var B=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ew=(t,e)=>{for(var r in e)oa(t,r,{get:e[r],enumerable:!0})},Aw=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Sw(e))!Tw.call(t,o)&&o!==r&&oa(t,o,{get:()=>e[o],enumerable:!(i=Gh(e,o))||i.enumerable});return t};var bc=(t,e,r)=>(r=t!=null?kw(Cw(t)):{},Aw(e||!t||!t.__esModule?oa(r,"default",{value:t,enumerable:!0}):r,t));var gr=(t,e,r,i)=>{for(var o=i>1?void 0:i?Gh(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&oa(e,r,o),o};var wp=B((O5,Ec)=>{var ce=String,vp=function(){return{isColorSupported:!1,reset:ce,bold:ce,dim:ce,italic:ce,underline:ce,inverse:ce,hidden:ce,strikethrough:ce,black:ce,red:ce,green:ce,yellow:ce,blue:ce,magenta:ce,cyan:ce,white:ce,gray:ce,bgBlack:ce,bgRed:ce,bgGreen:ce,bgYellow:ce,bgBlue:ce,bgMagenta:ce,bgCyan:ce,bgWhite:ce,blackBright:ce,redBright:ce,greenBright:ce,yellowBright:ce,blueBright:ce,magentaBright:ce,cyanBright:ce,whiteBright:ce,bgBlackBright:ce,bgRedBright:ce,bgGreenBright:ce,bgYellowBright:ce,bgBlueBright:ce,bgMagentaBright:ce,bgCyanBright:ce,bgWhiteBright:ce}};Ec.exports=vp();Ec.exports.createColors=vp});var Ac=B(()=>{});var fa=B((P5,kp)=>{"use strict";var _p=wp(),xp=Ac(),xs=class t extends Error{constructor(e,r,i,o,s,n){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),o&&(this.source=o),n&&(this.plugin=n),typeof r<"u"&&typeof i<"u"&&(typeof r=="number"?(this.line=r,this.column=i):(this.line=r.line,this.column=r.column,this.endLine=i.line,this.endColumn=i.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,t)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let r=this.source;e==null&&(e=_p.isColorSupported);let i=d=>d,o=d=>d,s=d=>d;if(e){let{bold:d,gray:h,red:f}=_p.createColors(!0);o=m=>d(f(m)),i=m=>h(m),xp&&(s=m=>xp(m))}let n=r.split(/\r?\n/),a=Math.max(this.line-3,0),l=Math.min(this.line+2,n.length),c=String(l).length;return n.slice(a,l).map((d,h)=>{let f=a+1+h,m=" "+(" "+f).slice(-c)+" | ";if(f===this.line){if(d.length>160){let b=20,v=Math.max(0,this.column-b),_=Math.max(this.column+b,this.endColumn+b),w=d.slice(v,_),k=i(m.replace(/\d/g," "))+d.slice(0,Math.min(this.column-1,b-1)).replace(/[^\t]/g," ");return o(">")+i(m)+s(w)+`
 `+k+o("^")}let g=i(m.replace(/\d/g," "))+d.slice(0,this.column-1).replace(/[^\t]/g," ");return o(">")+i(m)+s(d)+`
 `+g+o("^")}return" "+i(m)+s(d)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};kp.exports=xs;xs.default=xs});var Oc=B((L5,Cp)=>{"use strict";var Sp={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function o_(t){return t[0].toUpperCase()+t.slice(1)}var ks=class{constructor(e){this.builder=e}atrule(e,r){let i="@"+e.name,o=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?i+=e.raws.afterName:o&&(i+=" "),e.nodes)this.block(e,i+o);else{let s=(e.raws.between||"")+(r?";":"");this.builder(i+o+s,e)}}beforeAfter(e,r){let i;e.type==="decl"?i=this.raw(e,null,"beforeDecl"):e.type==="comment"?i=this.raw(e,null,"beforeComment"):r==="before"?i=this.raw(e,null,"beforeRule"):i=this.raw(e,null,"beforeClose");let o=e.parent,s=0;for(;o&&o.type!=="root";)s+=1,o=o.parent;if(i.includes(`
`)){let n=this.raw(e,null,"indent");if(n.length)for(let a=0;a<s;a++)i+=n}return i}block(e,r){let i=this.raw(e,"between","beforeOpen");this.builder(r+i+"{",e,"start");let o;e.nodes&&e.nodes.length?(this.body(e),o=this.raw(e,"after")):o=this.raw(e,"after","emptyBody"),o&&this.builder(o),this.builder("}",e,"end")}body(e){let r=e.nodes.length-1;for(;r>0&&e.nodes[r].type==="comment";)r-=1;let i=this.raw(e,"semicolon");for(let o=0;o<e.nodes.length;o++){let s=e.nodes[o],n=this.raw(s,"before");n&&this.builder(n),this.stringify(s,r!==o||i)}}comment(e){let r=this.raw(e,"left","commentLeft"),i=this.raw(e,"right","commentRight");this.builder("/*"+r+e.text+i+"*/",e)}decl(e,r){let i=this.raw(e,"between","colon"),o=e.prop+i+this.rawValue(e,"value");e.important&&(o+=e.raws.important||" !important"),r&&(o+=";"),this.builder(o,e)}document(e){this.body(e)}raw(e,r,i){let o;if(i||(i=r),r&&(o=e.raws[r],typeof o<"u"))return o;let s=e.parent;if(i==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return Sp[i];let n=e.root();if(n.rawCache||(n.rawCache={}),typeof n.rawCache[i]<"u")return n.rawCache[i];if(i==="before"||i==="after")return this.beforeAfter(e,i);{let a="raw"+o_(i);this[a]?o=this[a](n,e):n.walk(l=>{if(o=l.raws[r],typeof o<"u")return!1})}return typeof o>"u"&&(o=Sp[i]),n.rawCache[i]=o,o}rawBeforeClose(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length>0&&typeof i.raws.after<"u")return r=i.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(e,r){let i;return e.walkComments(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeDecl"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeDecl(e,r){let i;return e.walkDecls(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeRule"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeOpen(e){let r;return e.walk(i=>{if(i.type!=="decl"&&(r=i.raws.between,typeof r<"u"))return!1}),r}rawBeforeRule(e){let r;return e.walk(i=>{if(i.nodes&&(i.parent!==e||e.first!==i)&&typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(e){let r;return e.walkDecls(i=>{if(typeof i.raws.between<"u")return r=i.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length===0&&(r=i.raws.after,typeof r<"u"))return!1}),r}rawIndent(e){if(e.raws.indent)return e.raws.indent;let r;return e.walk(i=>{let o=i.parent;if(o&&o!==e&&o.parent&&o.parent===e&&typeof i.raws.before<"u"){let s=i.raws.before.split(`
`);return r=s[s.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length&&i.last.type==="decl"&&(r=i.raws.semicolon,typeof r<"u"))return!1}),r}rawValue(e,r){let i=e[r],o=e.raws[r];return o&&o.value===i?o.raw:i}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,r){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,r)}};Cp.exports=ks;ks.default=ks});var Ss=B((z5,Tp)=>{"use strict";var s_=Oc();function $c(t,e){new s_(e).stringify(t)}Tp.exports=$c;$c.default=$c});var ma=B((R5,Ic)=>{"use strict";Ic.exports.isClean=Symbol("isClean");Ic.exports.my=Symbol("my")});var As=B((D5,Ep)=>{"use strict";var n_=fa(),a_=Oc(),l_=Ss(),{isClean:Cs,my:c_}=ma();function Pc(t,e){let r=new t.constructor;for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i)||i==="proxyCache")continue;let o=t[i],s=typeof o;i==="parent"&&s==="object"?e&&(r[i]=e):i==="source"?r[i]=o:Array.isArray(o)?r[i]=o.map(n=>Pc(n,r)):(s==="object"&&o!==null&&(o=Pc(o)),r[i]=o)}return r}function Ts(t,e){if(e&&typeof e.offset<"u")return e.offset;let r=1,i=1,o=0;for(let s=0;s<t.length;s++){if(i===e.line&&r===e.column){o=s;break}t[s]===`
`?(r=1,i+=1):r+=1}return o}var Es=class{constructor(e={}){this.raws={},this[Cs]=!1,this[c_]=!0;for(let r in e)if(r==="nodes"){this.nodes=[];for(let i of e[r])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[r]=e[r]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let r=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${r.input.from}:${r.start.line}:${r.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let r in e)this[r]=e[r];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let r=Pc(this);for(let i in e)r[i]=e[i];return r}cloneAfter(e={}){let r=this.clone(e);return this.parent.insertAfter(this,r),r}cloneBefore(e={}){let r=this.clone(e);return this.parent.insertBefore(this,r),r}error(e,r={}){if(this.source){let{end:i,start:o}=this.rangeBy(r);return this.source.input.error(e,{column:o.column,line:o.line},{column:i.column,line:i.line},r)}return new n_(e)}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:r==="root"?()=>e.root().toProxy():e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="prop"||r==="value"||r==="name"||r==="params"||r==="important"||r==="text")&&e.markDirty()),!0}}}markClean(){this[Cs]=!0}markDirty(){if(this[Cs]){this[Cs]=!1;let e=this;for(;e=e.parent;)e[Cs]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let r=this.source.start;if(e.index)r=this.positionInside(e.index);else if(e.word){let o=this.source.input.css.slice(Ts(this.source.input.css,this.source.start),Ts(this.source.input.css,this.source.end)).indexOf(e.word);o!==-1&&(r=this.positionInside(o))}return r}positionInside(e){let r=this.source.start.column,i=this.source.start.line,o=Ts(this.source.input.css,this.source.start),s=o+e;for(let n=o;n<s;n++)this.source.input.css[n]===`
`?(r=1,i+=1):r+=1;return{column:r,line:i}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let r={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:r.column+1,line:r.line};if(e.word){let s=this.source.input.css.slice(Ts(this.source.input.css,this.source.start),Ts(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(r=this.positionInside(s),i=this.positionInside(s+e.word.length))}else e.start?r={column:e.start.column,line:e.start.line}:e.index&&(r=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<r.line||i.line===r.line&&i.column<=r.column)&&(i={column:r.column+1,line:r.line}),{end:i,start:r}}raw(e,r){return new a_().raw(this,e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let r=this,i=!1;for(let o of e)o===this?i=!0:i?(this.parent.insertAfter(r,o),r=o):this.parent.insertBefore(r,o);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,r){let i={},o=r==null;r=r||new Map;let s=0;for(let n in this){if(!Object.prototype.hasOwnProperty.call(this,n)||n==="parent"||n==="proxyCache")continue;let a=this[n];if(Array.isArray(a))i[n]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,r):l);else if(typeof a=="object"&&a.toJSON)i[n]=a.toJSON(null,r);else if(n==="source"){let l=r.get(a.input);l==null&&(l=s,r.set(a.input,s),s++),i[n]={end:a.end,inputId:l,start:a.start}}else i[n]=a}return o&&(i.inputs=[...r.keys()].map(n=>n.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=l_){e.stringify&&(e=e.stringify);let r="";return e(this,i=>{r+=i}),r}warn(e,r,i){let o={node:this};for(let s in i)o[s]=i[s];return e.warn(r,o)}get proxyOf(){return this}};Ep.exports=Es;Es.default=Es});var $s=B((M5,Ap)=>{"use strict";var u_=As(),Os=class extends u_{constructor(e){super(e),this.type="comment"}};Ap.exports=Os;Os.default=Os});var Ps=B((N5,Op)=>{"use strict";var d_=As(),Is=class extends d_{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};Op.exports=Is;Is.default=Is});var Zr=B((F5,Np)=>{"use strict";var $p=$s(),Ip=Ps(),h_=As(),{isClean:Pp,my:Lp}=ma(),Lc,zp,Rp,zc;function Dp(t){return t.map(e=>(e.nodes&&(e.nodes=Dp(e.nodes)),delete e.source,e))}function Mp(t){if(t[Pp]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)Mp(e)}var sr=class t extends h_{append(...e){for(let r of e){let i=this.normalize(r,this.last);for(let o of i)this.proxyOf.nodes.push(o)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let r of this.nodes)r.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let r=this.getIterator(),i,o;for(;this.indexes[r]<this.proxyOf.nodes.length&&(i=this.indexes[r],o=e(this.proxyOf.nodes[i],i),o!==!1);)this.indexes[r]+=1;return delete this.indexes[r],o}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:e[r]?r==="each"||typeof r=="string"&&r.startsWith("walk")?(...i)=>e[r](...i.map(o=>typeof o=="function"?(s,n)=>o(s.toProxy(),n):o)):r==="every"||r==="some"?i=>e[r]((o,...s)=>i(o.toProxy(),...s)):r==="root"?()=>e.root().toProxy():r==="nodes"?e.nodes.map(i=>i.toProxy()):r==="first"||r==="last"?e[r].toProxy():e[r]:e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="name"||r==="params"||r==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,r){let i=this.index(e),o=this.normalize(r,this.proxyOf.nodes[i]).reverse();i=this.index(e);for(let n of o)this.proxyOf.nodes.splice(i+1,0,n);let s;for(let n in this.indexes)s=this.indexes[n],i<s&&(this.indexes[n]=s+o.length);return this.markDirty(),this}insertBefore(e,r){let i=this.index(e),o=i===0?"prepend":!1,s=this.normalize(r,this.proxyOf.nodes[i],o).reverse();i=this.index(e);for(let a of s)this.proxyOf.nodes.splice(i,0,a);let n;for(let a in this.indexes)n=this.indexes[a],i<=n&&(this.indexes[a]=n+s.length);return this.markDirty(),this}normalize(e,r){if(typeof e=="string")e=Dp(zp(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new Ip(e)]}else if(e.selector||e.selectors)e=[new zc(e)];else if(e.name)e=[new Lc(e)];else if(e.text)e=[new $p(e)];else throw new Error("Unknown node type in node creation");return e.map(o=>(o[Lp]||t.rebuild(o),o=o.proxyOf,o.parent&&o.parent.removeChild(o),o[Pp]&&Mp(o),o.raws||(o.raws={}),typeof o.raws.before>"u"&&r&&typeof r.raws.before<"u"&&(o.raws.before=r.raws.before.replace(/\S/g,"")),o.parent=this.proxyOf,o))}prepend(...e){e=e.reverse();for(let r of e){let i=this.normalize(r,this.first,"prepend").reverse();for(let o of i)this.proxyOf.nodes.unshift(o);for(let o in this.indexes)this.indexes[o]=this.indexes[o]+i.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let r;for(let i in this.indexes)r=this.indexes[i],r>=e&&(this.indexes[i]=r-1);return this.markDirty(),this}replaceValues(e,r,i){return i||(i=r,r={}),this.walkDecls(o=>{r.props&&!r.props.includes(o.prop)||r.fast&&!o.value.includes(r.fast)||(o.value=o.value.replace(e,i))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((r,i)=>{let o;try{o=e(r,i)}catch(s){throw r.addToError(s)}return o!==!1&&r.walk&&(o=r.walk(e)),o})}walkAtRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="atrule"&&e.test(i.name))return r(i,o)}):this.walk((i,o)=>{if(i.type==="atrule"&&i.name===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="atrule")return r(i,o)}))}walkComments(e){return this.walk((r,i)=>{if(r.type==="comment")return e(r,i)})}walkDecls(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="decl"&&e.test(i.prop))return r(i,o)}):this.walk((i,o)=>{if(i.type==="decl"&&i.prop===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="decl")return r(i,o)}))}walkRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="rule"&&e.test(i.selector))return r(i,o)}):this.walk((i,o)=>{if(i.type==="rule"&&i.selector===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="rule")return r(i,o)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};sr.registerParse=t=>{zp=t};sr.registerRule=t=>{zc=t};sr.registerAtRule=t=>{Lc=t};sr.registerRoot=t=>{Rp=t};Np.exports=sr;sr.default=sr;sr.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,Lc.prototype):t.type==="rule"?Object.setPrototypeOf(t,zc.prototype):t.type==="decl"?Object.setPrototypeOf(t,Ip.prototype):t.type==="comment"?Object.setPrototypeOf(t,$p.prototype):t.type==="root"&&Object.setPrototypeOf(t,Rp.prototype),t[Lp]=!0,t.nodes&&t.nodes.forEach(e=>{sr.rebuild(e)})}});var ga=B((U5,Up)=>{"use strict";var Fp=Zr(),To=class extends Fp{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};Up.exports=To;To.default=To;Fp.registerAtRule(To)});var ba=B((B5,jp)=>{"use strict";var p_=Zr(),Bp,Vp,Ai=class extends p_{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new Bp(new Vp,this,e).stringify()}};Ai.registerLazyResult=t=>{Bp=t};Ai.registerProcessor=t=>{Vp=t};jp.exports=Ai;Ai.default=Ai});var Hp=B((V5,qp)=>{var f_="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",m_=(t,e=21)=>(r=e)=>{let i="",o=r|0;for(;o--;)i+=t[Math.random()*t.length|0];return i},g_=(t=21)=>{let e="",r=t|0;for(;r--;)e+=f_[Math.random()*64|0];return e};qp.exports={nanoid:g_,customAlphabet:m_}});var ya=B(()=>{});var va=B(()=>{});var Rc=B(()=>{});var Wp=B(()=>{});var Mc=B((X5,Zp)=>{"use strict";var{existsSync:b_,readFileSync:y_}=Wp(),{dirname:Dc,join:v_}=ya(),{SourceMapConsumer:Gp,SourceMapGenerator:Kp}=va();function w_(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}var Ls=class{constructor(e,r){if(r.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let i=r.map?r.map.prev:void 0,o=this.loadMap(r.from,i);!this.mapFile&&r.from&&(this.mapFile=r.from),this.mapFile&&(this.root=Dc(this.mapFile)),o&&(this.text=o)}consumer(){return this.consumerCache||(this.consumerCache=new Gp(this.text)),this.consumerCache}decodeInline(e){let r=/^data:application\/json;charset=utf-?8;base64,/,i=/^data:application\/json;base64,/,o=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/,n=e.match(o)||e.match(s);if(n)return decodeURIComponent(e.substr(n[0].length));let a=e.match(r)||e.match(i);if(a)return w_(e.substr(a[0].length));let l=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+l)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let r=e.match(/\/\*\s*# sourceMappingURL=/g);if(!r)return;let i=e.lastIndexOf(r.pop()),o=e.indexOf("*/",i);i>-1&&o>-1&&(this.annotation=this.getAnnotationURL(e.substring(i,o)))}loadFile(e){if(this.root=Dc(e),b_(e))return this.mapFile=e,y_(e,"utf-8").toString().trim()}loadMap(e,r){if(r===!1)return!1;if(r){if(typeof r=="string")return r;if(typeof r=="function"){let i=r(e);if(i){let o=this.loadFile(i);if(!o)throw new Error("Unable to load previous source map: "+i.toString());return o}}else{if(r instanceof Gp)return Kp.fromSourceMap(r).toString();if(r instanceof Kp)return r.toString();if(this.isMap(r))return JSON.stringify(r);throw new Error("Unsupported previous source map format: "+r.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let i=this.annotation;return e&&(i=v_(Dc(e),i)),this.loadFile(i)}}}startWith(e,r){return e?e.substr(0,r.length)===r:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};Zp.exports=Ls;Ls.default=Ls});var zs=B((J5,Qp)=>{"use strict";var{nanoid:__}=Hp(),{isAbsolute:Uc,resolve:Bc}=ya(),{SourceMapConsumer:x_,SourceMapGenerator:k_}=va(),{fileURLToPath:Yp,pathToFileURL:wa}=Rc(),Xp=fa(),S_=Mc(),Nc=Ac(),Fc=Symbol("fromOffsetCache"),C_=!!(x_&&k_),Jp=!!(Bc&&Uc),Eo=class{constructor(e,r={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,r.from&&(!Jp||/^\w+:\/\//.test(r.from)||Uc(r.from)?this.file=r.from:this.file=Bc(r.from)),Jp&&C_){let i=new S_(this.css,r);if(i.text){this.map=i;let o=i.consumer().file;!this.file&&o&&(this.file=this.mapResolve(o))}}this.file||(this.id="<input css "+__(6)+">"),this.map&&(this.map.file=this.from)}error(e,r,i,o={}){let s,n,a;if(r&&typeof r=="object"){let c=r,d=i;if(typeof c.offset=="number"){let h=this.fromOffset(c.offset);r=h.line,i=h.col}else r=c.line,i=c.column;if(typeof d.offset=="number"){let h=this.fromOffset(d.offset);n=h.line,s=h.col}else n=d.line,s=d.column}else if(!i){let c=this.fromOffset(r);r=c.line,i=c.col}let l=this.origin(r,i,n,s);return l?a=new Xp(e,l.endLine===void 0?l.line:{column:l.column,line:l.line},l.endLine===void 0?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,o.plugin):a=new Xp(e,n===void 0?r:{column:i,line:r},n===void 0?i:{column:s,line:n},this.css,this.file,o.plugin),a.input={column:i,endColumn:s,endLine:n,line:r,source:this.css},this.file&&(wa&&(a.input.url=wa(this.file).toString()),a.input.file=this.file),a}fromOffset(e){let r,i;if(this[Fc])i=this[Fc];else{let s=this.css.split(`
`);i=new Array(s.length);let n=0;for(let a=0,l=s.length;a<l;a++)i[a]=n,n+=s[a].length+1;this[Fc]=i}r=i[i.length-1];let o=0;if(e>=r)o=i.length-1;else{let s=i.length-2,n;for(;o<s;)if(n=o+(s-o>>1),e<i[n])s=n-1;else if(e>=i[n+1])o=n+1;else{o=n;break}}return{col:e-i[o]+1,line:o+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Bc(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,r,i,o){if(!this.map)return!1;let s=this.map.consumer(),n=s.originalPositionFor({column:r,line:e});if(!n.source)return!1;let a;typeof i=="number"&&(a=s.originalPositionFor({column:o,line:i}));let l;Uc(n.source)?l=wa(n.source):l=new URL(n.source,this.map.consumer().sourceRoot||wa(this.map.mapFile));let c={column:n.column,endColumn:a&&a.column,endLine:a&&a.line,line:n.line,url:l.toString()};if(l.protocol==="file:")if(Yp)c.file=Yp(l);else throw new Error("file: protocol is not available in this PostCSS build");let d=s.sourceContentFor(n.source);return d&&(c.source=d),c}toJSON(){let e={};for(let r of["hasBOM","css","file","id"])this[r]!=null&&(e[r]=this[r]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};Qp.exports=Eo;Eo.default=Eo;Nc&&Nc.registerInput&&Nc.registerInput(Eo)});var Ao=B((Q5,of)=>{"use strict";var ef=Zr(),tf,rf,Yr=class extends ef{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,r,i){let o=super.normalize(e);if(r){if(i==="prepend")this.nodes.length>1?r.raws.before=this.nodes[1].raws.before:delete r.raws.before;else if(this.first!==r)for(let s of o)s.raws.before=r.raws.before}return o}removeChild(e,r){let i=this.index(e);return!r&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(e)}toResult(e={}){return new tf(new rf,this,e).stringify()}};Yr.registerLazyResult=t=>{tf=t};Yr.registerProcessor=t=>{rf=t};of.exports=Yr;Yr.default=Yr;ef.registerRoot(Yr)});var Vc=B((eI,sf)=>{"use strict";var Rs={comma(t){return Rs.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Rs.split(t,e)},split(t,e,r){let i=[],o="",s=!1,n=0,a=!1,l="",c=!1;for(let d of t)c?c=!1:d==="\\"?c=!0:a?d===l&&(a=!1):d==='"'||d==="'"?(a=!0,l=d):d==="("?n+=1:d===")"?n>0&&(n-=1):n===0&&e.includes(d)&&(s=!0),s?(o!==""&&i.push(o.trim()),o="",s=!1):o+=d;return(r||o!=="")&&i.push(o.trim()),i}};sf.exports=Rs;Rs.default=Rs});var _a=B((tI,af)=>{"use strict";var nf=Zr(),T_=Vc(),Oo=class extends nf{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return T_.comma(this.selector)}set selectors(e){let r=this.selector?this.selector.match(/,\s*/):null,i=r?r[0]:","+this.raw("between","beforeOpen");this.selector=e.join(i)}};af.exports=Oo;Oo.default=Oo;nf.registerRule(Oo)});var cf=B((rI,lf)=>{"use strict";var E_=ga(),A_=$s(),O_=Ps(),$_=zs(),I_=Mc(),P_=Ao(),L_=_a();function Ds(t,e){if(Array.isArray(t))return t.map(o=>Ds(o));let{inputs:r,...i}=t;if(r){e=[];for(let o of r){let s={...o,__proto__:$_.prototype};s.map&&(s.map={...s.map,__proto__:I_.prototype}),e.push(s)}}if(i.nodes&&(i.nodes=t.nodes.map(o=>Ds(o,e))),i.source){let{inputId:o,...s}=i.source;i.source=s,o!=null&&(i.source.input=e[o])}if(i.type==="root")return new P_(i);if(i.type==="decl")return new O_(i);if(i.type==="rule")return new L_(i);if(i.type==="comment")return new A_(i);if(i.type==="atrule")return new E_(i);throw new Error("Unknown node type: "+t.type)}lf.exports=Ds;Ds.default=Ds});var qc=B((iI,mf)=>{"use strict";var{dirname:xa,relative:df,resolve:hf,sep:pf}=ya(),{SourceMapConsumer:ff,SourceMapGenerator:ka}=va(),{pathToFileURL:uf}=Rc(),z_=zs(),R_=!!(ff&&ka),D_=!!(xa&&hf&&df&&pf),jc=class{constructor(e,r,i,o){this.stringify=e,this.mapOpts=i.map||{},this.root=r,this.opts=i,this.css=o,this.originalCSS=o,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let r=`
`;this.css.includes(`\r
`)&&(r=`\r
`),this.css+=r+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let r=this.toUrl(this.path(e.file)),i=e.root||xa(e.file),o;this.mapOpts.sourcesContent===!1?(o=new ff(e.text),o.sourcesContent&&(o.sourcesContent=null)):o=e.consumer(),this.map.applySourceMap(o,r,this.toUrl(this.path(i)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let r=this.root.nodes.length-1;r>=0;r--)e=this.root.nodes[r],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(r)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),D_&&R_&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,r=>{e+=r}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=ka.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new ka({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new ka({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,r=1,i="<no source>",o={generated:{column:0,line:0},original:{column:0,line:0},source:""},s,n;this.stringify(this.root,(a,l,c)=>{if(this.css+=a,l&&c!=="end"&&(o.generated.line=e,o.generated.column=r-1,l.source&&l.source.start?(o.source=this.sourcePath(l),o.original.line=l.source.start.line,o.original.column=l.source.start.column-1,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,this.map.addMapping(o))),n=a.match(/\n/g),n?(e+=n.length,s=a.lastIndexOf(`
`),r=a.length-s):r+=a.length,l&&c!=="start"){let d=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==d.last||d.raws.semicolon)&&(l.source&&l.source.end?(o.source=this.sourcePath(l),o.original.line=l.source.end.line,o.original.column=l.source.end.column-1,o.generated.line=e,o.generated.column=r-2,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,o.generated.line=e,o.generated.column=r-1,this.map.addMapping(o)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(r=>r.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let r=this.memoizedPaths.get(e);if(r)return r;let i=this.opts.to?xa(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(i=xa(hf(i,this.mapOpts.annotation)));let o=df(i,e);return this.memoizedPaths.set(e,o),o}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let r=e.source.input.map;this.previousMaps.includes(r)||this.previousMaps.push(r)}});else{let e=new z_(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(r=>{if(r.source){let i=r.source.input.from;if(i&&!e[i]){e[i]=!0;let o=this.usesFileUrls?this.toFileUrl(i):this.toUrl(this.path(i));this.map.setSourceContent(o,r.source.input.css)}}});else if(this.css){let r=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(r,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let r=this.memoizedFileURLs.get(e);if(r)return r;if(uf){let i=uf(e).toString();return this.memoizedFileURLs.set(e,i),i}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let r=this.memoizedURLs.get(e);if(r)return r;pf==="\\"&&(e=e.replace(/\\/g,"/"));let i=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,i),i}};mf.exports=jc});var yf=B((oI,bf)=>{"use strict";var Sa=/[\t\n\f\r "#'()/;[\\\]{}]/g,Ca=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,M_=/.[\r\n"'(/\\]/,gf=/[\da-f]/i;bf.exports=function(e,r={}){let i=e.css.valueOf(),o=r.ignoreErrors,s,n,a,l,c,d,h,f,m,g,b=i.length,v=0,_=[],w=[];function k(){return v}function y(V){throw e.error("Unclosed "+V,v)}function S(){return w.length===0&&v>=b}function M(V){if(w.length)return w.pop();if(v>=b)return;let R=V?V.ignoreUnclosed:!1;switch(s=i.charCodeAt(v),s){case 10:case 32:case 9:case 13:case 12:{l=v;do l+=1,s=i.charCodeAt(l);while(s===32||s===10||s===9||s===13||s===12);d=["space",i.slice(v,l)],v=l-1;break}case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let P=String.fromCharCode(s);d=[P,P,v];break}case 40:{if(g=_.length?_.pop()[1]:"",m=i.charCodeAt(v+1),g==="url"&&m!==39&&m!==34&&m!==32&&m!==10&&m!==9&&m!==12&&m!==13){l=v;do{if(h=!1,l=i.indexOf(")",l+1),l===-1)if(o||R){l=v;break}else y("bracket");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["brackets",i.slice(v,l+1),v,l],v=l}else l=i.indexOf(")",v+1),n=i.slice(v,l+1),l===-1||M_.test(n)?d=["(","(",v]:(d=["brackets",n,v,l],v=l);break}case 39:case 34:{c=s===39?"'":'"',l=v;do{if(h=!1,l=i.indexOf(c,l+1),l===-1)if(o||R){l=v+1;break}else y("string");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["string",i.slice(v,l+1),v,l],v=l;break}case 64:{Sa.lastIndex=v+1,Sa.test(i),Sa.lastIndex===0?l=i.length-1:l=Sa.lastIndex-2,d=["at-word",i.slice(v,l+1),v,l],v=l;break}case 92:{for(l=v,a=!0;i.charCodeAt(l+1)===92;)l+=1,a=!a;if(s=i.charCodeAt(l+1),a&&s!==47&&s!==32&&s!==10&&s!==9&&s!==13&&s!==12&&(l+=1,gf.test(i.charAt(l)))){for(;gf.test(i.charAt(l+1));)l+=1;i.charCodeAt(l+1)===32&&(l+=1)}d=["word",i.slice(v,l+1),v,l],v=l;break}default:{s===47&&i.charCodeAt(v+1)===42?(l=i.indexOf("*/",v+2)+1,l===0&&(o||R?l=i.length:y("comment")),d=["comment",i.slice(v,l+1),v,l],v=l):(Ca.lastIndex=v+1,Ca.test(i),Ca.lastIndex===0?l=i.length-1:l=Ca.lastIndex-2,d=["word",i.slice(v,l+1),v,l],_.push(d),v=l);break}}return v++,d}function H(V){w.push(V)}return{back:H,endOfFile:S,nextToken:M,position:k}}});var xf=B((sI,_f)=>{"use strict";var N_=ga(),F_=$s(),U_=Ps(),B_=Ao(),vf=_a(),V_=yf(),wf={empty:!0,space:!0};function j_(t){for(let e=t.length-1;e>=0;e--){let r=t[e],i=r[3]||r[2];if(i)return i}}var Hc=class{constructor(e){this.input=e,this.root=new B_,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let r=new N_;r.name=e[1].slice(1),r.name===""&&this.unnamedAtrule(r,e),this.init(r,e[2]);let i,o,s,n=!1,a=!1,l=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),i=e[0],i==="("||i==="["?c.push(i==="("?")":"]"):i==="{"&&c.length>0?c.push("}"):i===c[c.length-1]&&c.pop(),c.length===0)if(i===";"){r.source.end=this.getPosition(e[2]),r.source.end.offset++,this.semicolon=!0;break}else if(i==="{"){a=!0;break}else if(i==="}"){if(l.length>0){for(s=l.length-1,o=l[s];o&&o[0]==="space";)o=l[--s];o&&(r.source.end=this.getPosition(o[3]||o[2]),r.source.end.offset++)}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){n=!0;break}}r.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(r.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(r,"params",l),n&&(e=l[l.length-1],r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++,this.spaces=r.raws.between,r.raws.between="")):(r.raws.afterName="",r.params=""),a&&(r.nodes=[],this.current=r)}checkMissedSemicolon(e){let r=this.colon(e);if(r===!1)return;let i=0,o;for(let s=r-1;s>=0&&(o=e[s],!(o[0]!=="space"&&(i+=1,i===2)));s--);throw this.input.error("Missed semicolon",o[0]==="word"?o[3]+1:o[2])}colon(e){let r=0,i,o,s;for(let[n,a]of e.entries()){if(o=a,s=o[0],s==="("&&(r+=1),s===")"&&(r-=1),r===0&&s===":")if(!i)this.doubleColon(o);else{if(i[0]==="word"&&i[1]==="progid")continue;return n}i=o}return!1}comment(e){let r=new F_;this.init(r,e[2]),r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++;let i=e[1].slice(2,-2);if(/^\s*$/.test(i))r.text="",r.raws.left=i,r.raws.right="";else{let o=i.match(/^(\s*)([^]*\S)(\s*)$/);r.text=o[2],r.raws.left=o[1],r.raws.right=o[3]}}createTokenizer(){this.tokenizer=V_(this.input)}decl(e,r){let i=new U_;this.init(i,e[0][2]);let o=e[e.length-1];for(o[0]===";"&&(this.semicolon=!0,e.pop()),i.source.end=this.getPosition(o[3]||o[2]||j_(e)),i.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),i.raws.before+=e.shift()[1];for(i.source.start=this.getPosition(e[0][2]),i.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;i.prop+=e.shift()[1]}i.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){i.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),i.raws.between+=s[1];(i.prop[0]==="_"||i.prop[0]==="*")&&(i.raws.before+=i.prop[0],i.prop=i.prop.slice(1));let n=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)n.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(s=e[c],s[1].toLowerCase()==="!important"){i.important=!0;let d=this.stringFrom(e,c);d=this.spacesFromEnd(e)+d,d!==" !important"&&(i.raws.important=d);break}else if(s[1].toLowerCase()==="important"){let d=e.slice(0),h="";for(let f=c;f>0;f--){let m=d[f][0];if(h.trim().startsWith("!")&&m!=="space")break;h=d.pop()[1]+h}h.trim().startsWith("!")&&(i.important=!0,i.raws.important=h,e=d)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(i.raws.between+=n.map(c=>c[1]).join(""),n=[]),this.raw(i,"value",n.concat(e),r),i.value.includes(":")&&!r&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let r=new vf;this.init(r,e[2]),r.selector="",r.raws.between="",this.current=r}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let r=this.current.nodes[this.current.nodes.length-1];r&&r.type==="rule"&&!r.raws.ownSemicolon&&(r.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let r=this.input.fromOffset(e);return{column:r.col,line:r.line,offset:e}}init(e,r){this.current.push(e),e.source={input:this.input,start:this.getPosition(r)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let r=!1,i=null,o=!1,s=null,n=[],a=e[1].startsWith("--"),l=[],c=e;for(;c;){if(i=c[0],l.push(c),i==="("||i==="[")s||(s=c),n.push(i==="("?")":"]");else if(a&&o&&i==="{")s||(s=c),n.push("}");else if(n.length===0)if(i===";")if(o){this.decl(l,a);return}else break;else if(i==="{"){this.rule(l);return}else if(i==="}"){this.tokenizer.back(l.pop()),r=!0;break}else i===":"&&(o=!0);else i===n[n.length-1]&&(n.pop(),n.length===0&&(s=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(r=!0),n.length>0&&this.unclosedBracket(s),r&&o){if(!a)for(;l.length&&(c=l[l.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,r,i,o){let s,n,a=i.length,l="",c=!0,d,h;for(let f=0;f<a;f+=1)s=i[f],n=s[0],n==="space"&&f===a-1&&!o?c=!1:n==="comment"?(h=i[f-1]?i[f-1][0]:"empty",d=i[f+1]?i[f+1][0]:"empty",!wf[h]&&!wf[d]?l.slice(-1)===","?c=!1:l+=s[1]:c=!1):l+=s[1];if(!c){let f=i.reduce((m,g)=>m+g[1],"");e.raws[r]={raw:f,value:l}}e[r]=l}rule(e){e.pop();let r=new vf;this.init(r,e[0][2]),r.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(r,"selector",e),this.current=r}spacesAndCommentsFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],!(r!=="space"&&r!=="comment"));)i=e.pop()[1]+i;return i}spacesAndCommentsFromStart(e){let r,i="";for(;e.length&&(r=e[0][0],!(r!=="space"&&r!=="comment"));)i+=e.shift()[1];return i}spacesFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],r==="space");)i=e.pop()[1]+i;return i}stringFrom(e,r){let i="";for(let o=r;o<e.length;o++)i+=e[o][1];return e.splice(r,e.length-r),i}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,r){throw this.input.error("At-rule without name",{offset:r[2]},{offset:r[2]+r[1].length})}};_f.exports=Hc});var Ea=B((nI,kf)=>{"use strict";var q_=Zr(),H_=zs(),W_=xf();function Ta(t,e){let r=new H_(t,e),i=new W_(r);try{i.parse()}catch(o){throw o}return i.root}kf.exports=Ta;Ta.default=Ta;q_.registerParse(Ta)});var Wc=B((aI,Sf)=>{"use strict";var Ms=class{constructor(e,r={}){if(this.type="warning",this.text=e,r.node&&r.node.source){let i=r.node.rangeBy(r);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in r)this[i]=r[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};Sf.exports=Ms;Ms.default=Ms});var Aa=B((lI,Cf)=>{"use strict";var G_=Wc(),Ns=class{constructor(e,r,i){this.processor=e,this.messages=[],this.root=r,this.opts=i,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,r={}){r.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(r.plugin=this.lastPlugin.postcssPlugin);let i=new G_(e,r);return this.messages.push(i),i}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};Cf.exports=Ns;Ns.default=Ns});var Gc=B((cI,Ef)=>{"use strict";var Tf={};Ef.exports=function(e){Tf[e]||(Tf[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}});var Yc=B((dI,If)=>{"use strict";var K_=Zr(),Z_=ba(),Y_=qc(),X_=Ea(),Af=Aa(),J_=Ao(),Q_=Ss(),{isClean:br,my:ex}=ma(),uI=Gc(),tx={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},rx={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},ix={Once:!0,postcssPlugin:!0,prepare:!0},$o=0;function Fs(t){return typeof t=="object"&&typeof t.then=="function"}function $f(t){let e=!1,r=tx[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[r,r+"-"+e,$o,r+"Exit",r+"Exit-"+e]:e?[r,r+"-"+e,r+"Exit",r+"Exit-"+e]:t.append?[r,$o,r+"Exit"]:[r,r+"Exit"]}function Of(t){let e;return t.type==="document"?e=["Document",$o,"DocumentExit"]:t.type==="root"?e=["Root",$o,"RootExit"]:e=$f(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Kc(t){return t[br]=!1,t.nodes&&t.nodes.forEach(e=>Kc(e)),t}var Zc={},Xr=class t{constructor(e,r,i){this.stringified=!1,this.processed=!1;let o;if(typeof r=="object"&&r!==null&&(r.type==="root"||r.type==="document"))o=Kc(r);else if(r instanceof t||r instanceof Af)o=Kc(r.root),r.map&&(typeof i.map>"u"&&(i.map={}),i.map.inline||(i.map.inline=!1),i.map.prev=r.map);else{let s=X_;i.syntax&&(s=i.syntax.parse),i.parser&&(s=i.parser),s.parse&&(s=s.parse);try{o=s(r,i)}catch(n){this.processed=!0,this.error=n}o&&!o[ex]&&K_.rebuild(o)}this.result=new Af(e,o,i),this.helpers={...Zc,postcss:Zc,result:this.result},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,r){let i=this.result.lastPlugin;try{r&&r.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=i.postcssPlugin,e.setMessage()):i.postcssVersion}catch(o){console&&console.error&&console.error(o)}return e}prepareVisitors(){this.listeners={};let e=(r,i,o)=>{this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push([r,o])};for(let r of this.plugins)if(typeof r=="object")for(let i in r){if(!rx[i]&&/^[A-Z]/.test(i))throw new Error(`Unknown event ${i} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!ix[i])if(typeof r[i]=="object")for(let o in r[i])o==="*"?e(r,i,r[i][o]):e(r,i+"-"+o.toLowerCase(),r[i][o]);else typeof r[i]=="function"&&e(r,i,r[i])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let r=this.plugins[e],i=this.runOnRoot(r);if(Fs(i))try{await i}catch(o){throw this.handleError(o)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[br];){e[br]=!0;let r=[Of(e)];for(;r.length>0;){let i=this.visitTick(r);if(Fs(i))try{await i}catch(o){let s=r[r.length-1].node;throw this.handleError(o,s)}}}if(this.listeners.OnceExit)for(let[r,i]of this.listeners.OnceExit){this.result.lastPlugin=r;try{if(e.type==="document"){let o=e.nodes.map(s=>i(s,this.helpers));await Promise.all(o)}else await i(e,this.helpers)}catch(o){throw this.handleError(o)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let r=this.result.root.nodes.map(i=>e.Once(i,this.helpers));return Fs(r[0])?Promise.all(r):r}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(r){throw this.handleError(r)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,r=Q_;e.syntax&&(r=e.syntax.stringify),e.stringifier&&(r=e.stringifier),r.stringify&&(r=r.stringify);let o=new Y_(r,this.result.root,this.result.opts).generate();return this.result.css=o[0],this.result.map=o[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let r=this.runOnRoot(e);if(Fs(r))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[br];)e[br]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let r of e.nodes)this.visitSync(this.listeners.OnceExit,r);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,r){return this.async().then(e,r)}toString(){return this.css}visitSync(e,r){for(let[i,o]of e){this.result.lastPlugin=i;let s;try{s=o(r,this.helpers)}catch(n){throw this.handleError(n,r.proxyOf)}if(r.type!=="root"&&r.type!=="document"&&!r.parent)return!0;if(Fs(s))throw this.getAsyncError()}}visitTick(e){let r=e[e.length-1],{node:i,visitors:o}=r;if(i.type!=="root"&&i.type!=="document"&&!i.parent){e.pop();return}if(o.length>0&&r.visitorIndex<o.length){let[n,a]=o[r.visitorIndex];r.visitorIndex+=1,r.visitorIndex===o.length&&(r.visitors=[],r.visitorIndex=0),this.result.lastPlugin=n;try{return a(i.toProxy(),this.helpers)}catch(l){throw this.handleError(l,i)}}if(r.iterator!==0){let n=r.iterator,a;for(;a=i.nodes[i.indexes[n]];)if(i.indexes[n]+=1,!a[br]){a[br]=!0,e.push(Of(a));return}r.iterator=0,delete i.indexes[n]}let s=r.events;for(;r.eventIndex<s.length;){let n=s[r.eventIndex];if(r.eventIndex+=1,n===$o){i.nodes&&i.nodes.length&&(i[br]=!0,r.iterator=i.getIterator());return}else if(this.listeners[n]){r.visitors=this.listeners[n];return}}e.pop()}walkSync(e){e[br]=!0;let r=$f(e);for(let i of r)if(i===$o)e.nodes&&e.each(o=>{o[br]||this.walkSync(o)});else{let o=this.listeners[i];if(o&&this.visitSync(o,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};Xr.registerPostcss=t=>{Zc=t};If.exports=Xr;Xr.default=Xr;J_.registerLazyResult(Xr);Z_.registerLazyResult(Xr)});var Lf=B((pI,Pf)=>{"use strict";var ox=qc(),sx=Ea(),nx=Aa(),ax=Ss(),hI=Gc(),Us=class{constructor(e,r,i){r=r.toString(),this.stringified=!1,this._processor=e,this._css=r,this._opts=i,this._map=void 0;let o,s=ax;this.result=new nx(this._processor,o,this._opts),this.result.css=r;let n=this;Object.defineProperty(this.result,"root",{get(){return n.root}});let a=new ox(s,o,this._opts,r);if(a.isMap()){let[l,c]=a.generate();l&&(this.result.css=l),c&&(this.result.map=c)}else a.clearAnnotation(),this.result.css=a.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,r){return this.async().then(e,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,r=sx;try{e=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};Pf.exports=Us;Us.default=Us});var Rf=B((fI,zf)=>{"use strict";var lx=ba(),cx=Yc(),ux=Lf(),dx=Ao(),Oi=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let r=[];for(let i of e)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(!(typeof i=="object"&&(i.parse||i.stringify)))throw new Error(i+" is not a PostCSS plugin");return r}process(e,r={}){return!this.plugins.length&&!r.parser&&!r.stringifier&&!r.syntax?new ux(this,e,r):new cx(this,e,r)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};zf.exports=Oi;Oi.default=Oi;dx.registerProcessor(Oi);lx.registerProcessor(Oi)});var Io=B((mI,Vf)=>{"use strict";var Df=ga(),Mf=$s(),hx=Zr(),px=fa(),Nf=Ps(),Ff=ba(),fx=cf(),mx=zs(),gx=Yc(),bx=Vc(),yx=As(),vx=Ea(),Xc=Rf(),wx=Aa(),Uf=Ao(),Bf=_a(),_x=Ss(),xx=Wc();function Te(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new Xc(t)}Te.plugin=function(e,r){let i=!1;function o(...n){console&&console.warn&&!i&&(i=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(e+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let a=r(...n);return a.postcssPlugin=e,a.postcssVersion=new Xc().version,a}let s;return Object.defineProperty(o,"postcss",{get(){return s||(s=o()),s}}),o.process=function(n,a,l){return Te([o(l)]).process(n,a)},o};Te.stringify=_x;Te.parse=vx;Te.fromJSON=fx;Te.list=bx;Te.comment=t=>new Mf(t);Te.atRule=t=>new Df(t);Te.decl=t=>new Nf(t);Te.rule=t=>new Bf(t);Te.root=t=>new Uf(t);Te.document=t=>new Ff(t);Te.CssSyntaxError=px;Te.Declaration=Nf;Te.Container=hx;Te.Processor=Xc;Te.Document=Ff;Te.Comment=Mf;Te.Warning=xx;Te.AtRule=Df;Te.Result=wx;Te.Input=mx;Te.Rule=Bf;Te.Root=Uf;Te.Node=yx;gx.registerPostcss(Te);Vf.exports=Te;Te.default=Te});var Wf=B((BI,Hf)=>{"use strict";var jf=/-(\w|$)/g,qf=function(e,r){return r.toUpperCase()},kx=function(e){return e=e.toLowerCase(),e==="float"?"cssFloat":e.charCodeAt(0)===45&&e.charCodeAt(1)===109&&e.charCodeAt(2)===115&&e.charCodeAt(3)===45?e.substr(1).replace(jf,qf):e.replace(jf,qf)};Hf.exports=kx});var tu=B((VI,Gf)=>{var Sx=Wf(),Cx={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function Qc(t){return typeof t.nodes>"u"?!0:eu(t)}function eu(t){let e,r={};return t.each(i=>{if(i.type==="atrule")e="@"+i.name,i.params&&(e+=" "+i.params),typeof r[e]>"u"?r[e]=Qc(i):Array.isArray(r[e])?r[e].push(Qc(i)):r[e]=[r[e],Qc(i)];else if(i.type==="rule"){let o=eu(i);if(r[i.selector])for(let s in o)r[i.selector][s]=o[s];else r[i.selector]=o}else if(i.type==="decl"){i.prop[0]==="-"&&i.prop[1]==="-"||i.parent&&i.parent.selector===":export"?e=i.prop:e=Sx(i.prop);let o=i.value;!isNaN(i.value)&&Cx[e]&&(o=parseFloat(i.value)),i.important&&(o+=" !important"),typeof r[e]>"u"?r[e]=o:Array.isArray(r[e])?r[e].push(o):r[e]=[r[e],o]}}),r}Gf.exports=eu});var Oa=B((jI,Xf)=>{var Bs=Io(),Kf=/\s*!important\s*$/i,Tx={"box-flex":!0,"box-flex-group":!0,"column-count":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0};function Ex(t){return t.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function Zf(t,e,r){r===!1||r===null||(e.startsWith("--")||(e=Ex(e)),typeof r=="number"&&(r===0||Tx[e]?r=r.toString():r+="px"),e==="css-float"&&(e="float"),Kf.test(r)?(r=r.replace(Kf,""),t.push(Bs.decl({prop:e,value:r,important:!0}))):t.push(Bs.decl({prop:e,value:r})))}function Yf(t,e,r){let i=Bs.atRule({name:e[1],params:e[3]||""});typeof r=="object"&&(i.nodes=[],ru(r,i)),t.push(i)}function ru(t,e){let r,i,o;for(r in t)if(i=t[r],!(i===null||typeof i>"u"))if(r[0]==="@"){let s=r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);if(Array.isArray(i))for(let n of i)Yf(e,s,n);else Yf(e,s,i)}else if(Array.isArray(i))for(let s of i)Zf(e,r,s);else typeof i=="object"?(o=Bs.rule({selector:r}),ru(i,o),e.push(o)):Zf(e,r,i)}Xf.exports=function(t){let e=Bs.root();return ru(t,e),e}});var iu=B((qI,Jf)=>{var Ax=tu();Jf.exports=function(e){return console&&console.warn&&e.warnings().forEach(r=>{let i=r.plugin||"PostCSS";console.warn(i+": "+r.text)}),Ax(e.root)}});var em=B((HI,Qf)=>{var Ox=Io(),$x=iu(),Ix=Oa();Qf.exports=function(e){let r=Ox(e);return async i=>{let o=await r.process(i,{parser:Ix,from:void 0});return $x(o)}}});var rm=B((WI,tm)=>{var Px=Io(),Lx=iu(),zx=Oa();tm.exports=function(t){let e=Px(t);return r=>{let i=e.process(r,{parser:zx,from:void 0});return Lx(i)}}});var om=B((GI,im)=>{var Rx=tu(),Dx=Oa(),Mx=em(),Nx=rm();im.exports={objectify:Rx,parse:Dx,async:Mx,sync:Nx}});var su=B(($a,sm)=>{"use strict";$a.__esModule=!0;$a.default=Bx;function Fx(t){for(var e=t.toLowerCase(),r="",i=!1,o=0;o<6&&e[o]!==void 0;o++){var s=e.charCodeAt(o),n=s>=97&&s<=102||s>=48&&s<=57;if(i=s===32,!n)break;r+=e[o]}if(r.length!==0){var a=parseInt(r,16),l=a>=55296&&a<=57343;return l||a===0||a>1114111?["\uFFFD",r.length+(i?1:0)]:[String.fromCodePoint(a),r.length+(i?1:0)]}}var Ux=/\\/;function Bx(t){var e=Ux.test(t);if(!e)return t;for(var r="",i=0;i<t.length;i++){if(t[i]==="\\"){var o=Fx(t.slice(i+1,i+7));if(o!==void 0){r+=o[0],i+=o[1];continue}if(t[i+1]==="\\"){r+="\\",i++;continue}t.length===i+1&&(r+=t[i]);continue}r+=t[i]}return r}sm.exports=$a.default});var am=B((Ia,nm)=>{"use strict";Ia.__esModule=!0;Ia.default=Vx;function Vx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();if(!t[o])return;t=t[o]}return t}nm.exports=Ia.default});var cm=B((Pa,lm)=>{"use strict";Pa.__esModule=!0;Pa.default=jx;function jx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();t[o]||(t[o]={}),t=t[o]}}lm.exports=Pa.default});var dm=B((La,um)=>{"use strict";La.__esModule=!0;La.default=qx;function qx(t){for(var e="",r=t.indexOf("/*"),i=0;r>=0;){e=e+t.slice(i,r);var o=t.indexOf("*/",r+2);if(o<0)return e;i=o+2,r=t.indexOf("/*",i)}return e=e+t.slice(i),e}um.exports=La.default});var Vs=B(yr=>{"use strict";yr.__esModule=!0;yr.unesc=yr.stripComments=yr.getProp=yr.ensureObject=void 0;var Hx=za(su());yr.unesc=Hx.default;var Wx=za(am());yr.getProp=Wx.default;var Gx=za(cm());yr.ensureObject=Gx.default;var Kx=za(dm());yr.stripComments=Kx.default;function za(t){return t&&t.__esModule?t:{default:t}}});var $r=B((js,fm)=>{"use strict";js.__esModule=!0;js.default=void 0;var hm=Vs();function pm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Zx(t,e,r){return e&&pm(t.prototype,e),r&&pm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Yx=function t(e,r){if(typeof e!="object"||e===null)return e;var i=new e.constructor;for(var o in e)if(e.hasOwnProperty(o)){var s=e[o],n=typeof s;o==="parent"&&n==="object"?r&&(i[o]=r):s instanceof Array?i[o]=s.map(function(a){return t(a,i)}):i[o]=t(s,i)}return i},Xx=function(){function t(r){r===void 0&&(r={}),Object.assign(this,r),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var e=t.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(i){i===void 0&&(i={});var o=Yx(this);for(var s in i)o[s]=i[s];return o},e.appendToPropertyAndEscape=function(i,o,s){this.raws||(this.raws={});var n=this[i],a=this.raws[i];this[i]=n+o,a||s!==o?this.raws[i]=(a||n)+s:delete this.raws[i]},e.setPropertyAndEscape=function(i,o,s){this.raws||(this.raws={}),this[i]=o,this.raws[i]=s},e.setPropertyWithoutEscape=function(i,o){this[i]=o,this.raws&&delete this.raws[i]},e.isAtPosition=function(i,o){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>o||this.source.end.line===i&&this.source.end.column<o)},e.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},Zx(t,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,hm.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,hm.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),t}();js.default=Xx;fm.exports=js.default});var ct=B(Re=>{"use strict";Re.__esModule=!0;Re.UNIVERSAL=Re.TAG=Re.STRING=Re.SELECTOR=Re.ROOT=Re.PSEUDO=Re.NESTING=Re.ID=Re.COMMENT=Re.COMBINATOR=Re.CLASS=Re.ATTRIBUTE=void 0;var Jx="tag";Re.TAG=Jx;var Qx="string";Re.STRING=Qx;var e1="selector";Re.SELECTOR=e1;var t1="root";Re.ROOT=t1;var r1="pseudo";Re.PSEUDO=r1;var i1="nesting";Re.NESTING=i1;var o1="id";Re.ID=o1;var s1="comment";Re.COMMENT=s1;var n1="combinator";Re.COMBINATOR=n1;var a1="class";Re.CLASS=a1;var l1="attribute";Re.ATTRIBUTE=l1;var c1="universal";Re.UNIVERSAL=c1});var Ra=B((qs,ym)=>{"use strict";qs.__esModule=!0;qs.default=void 0;var u1=h1($r()),Ir=d1(ct());function bm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(bm=function(o){return o?r:e})(t)}function d1(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=bm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function h1(t){return t&&t.__esModule?t:{default:t}}function p1(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=f1(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f1(t,e){if(t){if(typeof t=="string")return mm(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return mm(t,e)}}function mm(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function gm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function m1(t,e,r){return e&&gm(t.prototype,e),r&&gm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function g1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,nu(t,e)}function nu(t,e){return nu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},nu(t,e)}var b1=function(t){g1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.nodes||(o.nodes=[]),o}var r=e.prototype;return r.append=function(o){return o.parent=this,this.nodes.push(o),this},r.prepend=function(o){o.parent=this,this.nodes.unshift(o);for(var s in this.indexes)this.indexes[s]++;return this},r.at=function(o){return this.nodes[o]},r.index=function(o){return typeof o=="number"?o:this.nodes.indexOf(o)},r.removeChild=function(o){o=this.index(o),this.at(o).parent=void 0,this.nodes.splice(o,1);var s;for(var n in this.indexes)s=this.indexes[n],s>=o&&(this.indexes[n]=s-1);return this},r.removeAll=function(){for(var o=p1(this.nodes),s;!(s=o()).done;){var n=s.value;n.parent=void 0}return this.nodes=[],this},r.empty=function(){return this.removeAll()},r.insertAfter=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n+1,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],n<a&&(this.indexes[l]=a+1);return this},r.insertBefore=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],a>=n&&(this.indexes[l]=a+1);return this},r._findChildAtPosition=function(o,s){var n=void 0;return this.each(function(a){if(a.atPosition){var l=a.atPosition(o,s);if(l)return n=l,!1}else if(a.isAtPosition(o,s))return n=a,!1}),n},r.atPosition=function(o,s){if(this.isAtPosition(o,s))return this._findChildAtPosition(o,s)||this},r._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},r.each=function(o){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var s=this.lastEach;if(this.indexes[s]=0,!!this.length){for(var n,a;this.indexes[s]<this.length&&(n=this.indexes[s],a=o(this.at(n),n),a!==!1);)this.indexes[s]+=1;if(delete this.indexes[s],a===!1)return!1}},r.walk=function(o){return this.each(function(s,n){var a=o(s,n);if(a!==!1&&s.length&&(a=s.walk(o)),a===!1)return!1})},r.walkAttributes=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.ATTRIBUTE)return o.call(s,n)})},r.walkClasses=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.CLASS)return o.call(s,n)})},r.walkCombinators=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.COMBINATOR)return o.call(s,n)})},r.walkComments=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.COMMENT)return o.call(s,n)})},r.walkIds=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.ID)return o.call(s,n)})},r.walkNesting=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.NESTING)return o.call(s,n)})},r.walkPseudos=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.PSEUDO)return o.call(s,n)})},r.walkTags=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.TAG)return o.call(s,n)})},r.walkUniversals=function(o){var s=this;return this.walk(function(n){if(n.type===Ir.UNIVERSAL)return o.call(s,n)})},r.split=function(o){var s=this,n=[];return this.reduce(function(a,l,c){var d=o.call(s,l);return n.push(l),d?(a.push(n),n=[]):c===s.length-1&&a.push(n),a},[])},r.map=function(o){return this.nodes.map(o)},r.reduce=function(o,s){return this.nodes.reduce(o,s)},r.every=function(o){return this.nodes.every(o)},r.some=function(o){return this.nodes.some(o)},r.filter=function(o){return this.nodes.filter(o)},r.sort=function(o){return this.nodes.sort(o)},r.toString=function(){return this.map(String).join("")},m1(e,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),e}(u1.default);qs.default=b1;ym.exports=qs.default});var lu=B((Hs,wm)=>{"use strict";Hs.__esModule=!0;Hs.default=void 0;var y1=w1(Ra()),v1=ct();function w1(t){return t&&t.__esModule?t:{default:t}}function vm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _1(t,e,r){return e&&vm(t.prototype,e),r&&vm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function x1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,au(t,e)}function au(t,e){return au=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},au(t,e)}var k1=function(t){x1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=v1.ROOT,o}var r=e.prototype;return r.toString=function(){var o=this.reduce(function(s,n){return s.push(String(n)),s},[]).join(",");return this.trailingComma?o+",":o},r.error=function(o,s){return this._error?this._error(o,s):new Error(o)},_1(e,[{key:"errorGenerator",set:function(o){this._error=o}}]),e}(y1.default);Hs.default=k1;wm.exports=Hs.default});var uu=B((Ws,_m)=>{"use strict";Ws.__esModule=!0;Ws.default=void 0;var S1=T1(Ra()),C1=ct();function T1(t){return t&&t.__esModule?t:{default:t}}function E1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,cu(t,e)}function cu(t,e){return cu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},cu(t,e)}var A1=function(t){E1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=C1.SELECTOR,i}return e}(S1.default);Ws.default=A1;_m.exports=Ws.default});var Da=B((tP,xm)=>{"use strict";var O1={},$1=O1.hasOwnProperty,I1=function(e,r){if(!e)return r;var i={};for(var o in r)i[o]=$1.call(e,o)?e[o]:r[o];return i},P1=/[ -,\.\/:-@\[-\^`\{-~]/,L1=/[ -,\.\/:-@\[\]\^`\{-~]/,z1=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,du=function t(e,r){r=I1(r,t.options),r.quotes!="single"&&r.quotes!="double"&&(r.quotes="single");for(var i=r.quotes=="double"?'"':"'",o=r.isIdentifier,s=e.charAt(0),n="",a=0,l=e.length;a<l;){var c=e.charAt(a++),d=c.charCodeAt(),h=void 0;if(d<32||d>126){if(d>=55296&&d<=56319&&a<l){var f=e.charCodeAt(a++);(f&64512)==56320?d=((d&1023)<<10)+(f&1023)+65536:a--}h="\\"+d.toString(16).toUpperCase()+" "}else r.escapeEverything?P1.test(c)?h="\\"+c:h="\\"+d.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(c)?h="\\"+d.toString(16).toUpperCase()+" ":c=="\\"||!o&&(c=='"'&&i==c||c=="'"&&i==c)||o&&L1.test(c)?h="\\"+c:h=c;n+=h}return o&&(/^-[-\d]/.test(n)?n="\\-"+n.slice(1):/\d/.test(s)&&(n="\\3"+s+" "+n.slice(1))),n=n.replace(z1,function(m,g,b){return g&&g.length%2?m:(g||"")+b}),!o&&r.wrap?i+n+i:n};du.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};du.version="3.0.0";xm.exports=du});var pu=B((Gs,Cm)=>{"use strict";Gs.__esModule=!0;Gs.default=void 0;var R1=Sm(Da()),D1=Vs(),M1=Sm($r()),N1=ct();function Sm(t){return t&&t.__esModule?t:{default:t}}function km(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function F1(t,e,r){return e&&km(t.prototype,e),r&&km(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function U1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hu(t,e)}function hu(t,e){return hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},hu(t,e)}var B1=function(t){U1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=N1.CLASS,o._constructed=!0,o}var r=e.prototype;return r.valueToString=function(){return"."+t.prototype.valueToString.call(this)},F1(e,[{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=(0,R1.default)(o,{isIdentifier:!0});s!==o?((0,D1.ensureObject)(this,"raws"),this.raws.value=s):this.raws&&delete this.raws.value}this._value=o}}]),e}(M1.default);Gs.default=B1;Cm.exports=Gs.default});var mu=B((Ks,Tm)=>{"use strict";Ks.__esModule=!0;Ks.default=void 0;var V1=q1($r()),j1=ct();function q1(t){return t&&t.__esModule?t:{default:t}}function H1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,fu(t,e)}function fu(t,e){return fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},fu(t,e)}var W1=function(t){H1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=j1.COMMENT,i}return e}(V1.default);Ks.default=W1;Tm.exports=Ks.default});var bu=B((Zs,Em)=>{"use strict";Zs.__esModule=!0;Zs.default=void 0;var G1=Z1($r()),K1=ct();function Z1(t){return t&&t.__esModule?t:{default:t}}function Y1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,gu(t,e)}function gu(t,e){return gu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},gu(t,e)}var X1=function(t){Y1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=K1.ID,o}var r=e.prototype;return r.valueToString=function(){return"#"+t.prototype.valueToString.call(this)},e}(G1.default);Zs.default=X1;Em.exports=Zs.default});var Ma=B((Ys,$m)=>{"use strict";Ys.__esModule=!0;Ys.default=void 0;var J1=Om(Da()),Q1=Vs(),ek=Om($r());function Om(t){return t&&t.__esModule?t:{default:t}}function Am(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function tk(t,e,r){return e&&Am(t.prototype,e),r&&Am(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function rk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,yu(t,e)}function yu(t,e){return yu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},yu(t,e)}var ik=function(t){rk(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.qualifiedName=function(o){return this.namespace?this.namespaceString+"|"+o:o},r.valueToString=function(){return this.qualifiedName(t.prototype.valueToString.call(this))},tk(e,[{key:"namespace",get:function(){return this._namespace},set:function(o){if(o===!0||o==="*"||o==="&"){this._namespace=o,this.raws&&delete this.raws.namespace;return}var s=(0,J1.default)(o,{isIdentifier:!0});this._namespace=o,s!==o?((0,Q1.ensureObject)(this,"raws"),this.raws.namespace=s):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(o){this.namespace=o}},{key:"namespaceString",get:function(){if(this.namespace){var o=this.stringifyProperty("namespace");return o===!0?"":o}else return""}}]),e}(ek.default);Ys.default=ik;$m.exports=Ys.default});var wu=B((Xs,Im)=>{"use strict";Xs.__esModule=!0;Xs.default=void 0;var ok=nk(Ma()),sk=ct();function nk(t){return t&&t.__esModule?t:{default:t}}function ak(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vu(t,e)}function vu(t,e){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},vu(t,e)}var lk=function(t){ak(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=sk.TAG,i}return e}(ok.default);Xs.default=lk;Im.exports=Xs.default});var xu=B((Js,Pm)=>{"use strict";Js.__esModule=!0;Js.default=void 0;var ck=dk($r()),uk=ct();function dk(t){return t&&t.__esModule?t:{default:t}}function hk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_u(t,e)}function _u(t,e){return _u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},_u(t,e)}var pk=function(t){hk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=uk.STRING,i}return e}(ck.default);Js.default=pk;Pm.exports=Js.default});var Su=B((Qs,Lm)=>{"use strict";Qs.__esModule=!0;Qs.default=void 0;var fk=gk(Ra()),mk=ct();function gk(t){return t&&t.__esModule?t:{default:t}}function bk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ku(t,e)}function ku(t,e){return ku=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},ku(t,e)}var yk=function(t){bk(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=mk.PSEUDO,o}var r=e.prototype;return r.toString=function(){var o=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),o,this.rawSpaceAfter].join("")},e}(fk.default);Qs.default=yk;Lm.exports=Qs.default});var Rm=B((rP,zm)=>{zm.exports=vk;function vk(t,e){if(Cu("noDeprecation"))return t;var r=!1;function i(){if(!r){if(Cu("throwDeprecation"))throw new Error(e);Cu("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}return i}function Cu(t){try{if(!global.localStorage)return!1}catch{return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var Iu=B(rn=>{"use strict";rn.__esModule=!0;rn.default=void 0;rn.unescapeValue=$u;var en=Ou(Da()),wk=Ou(su()),_k=Ou(Ma()),xk=ct(),Tu;function Ou(t){return t&&t.__esModule?t:{default:t}}function Dm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function kk(t,e,r){return e&&Dm(t.prototype,e),r&&Dm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Sk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Au(t,e)}function Au(t,e){return Au=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Au(t,e)}var tn=Rm(),Ck=/^('|")([^]*)\1$/,Tk=tn(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),Ek=tn(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),Ak=tn(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function $u(t){var e=!1,r=null,i=t,o=i.match(Ck);return o&&(r=o[1],i=o[2]),i=(0,wk.default)(i),i!==t&&(e=!0),{deprecatedUsage:e,unescaped:i,quoteMark:r}}function Ok(t){if(t.quoteMark!==void 0||t.value===void 0)return t;Ak();var e=$u(t.value),r=e.quoteMark,i=e.unescaped;return t.raws||(t.raws={}),t.raws.value===void 0&&(t.raws.value=t.value),t.value=i,t.quoteMark=r,t}var Na=function(t){Sk(e,t);function e(i){var o;return i===void 0&&(i={}),o=t.call(this,Ok(i))||this,o.type=xk.ATTRIBUTE,o.raws=o.raws||{},Object.defineProperty(o.raws,"unquoted",{get:tn(function(){return o.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:tn(function(){return o.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),o._constructed=!0,o}var r=e.prototype;return r.getQuotedValue=function(o){o===void 0&&(o={});var s=this._determineQuoteMark(o),n=Eu[s],a=(0,en.default)(this._value,n);return a},r._determineQuoteMark=function(o){return o.smart?this.smartQuoteMark(o):this.preferredQuoteMark(o)},r.setValue=function(o,s){s===void 0&&(s={}),this._value=o,this._quoteMark=this._determineQuoteMark(s),this._syncRawValue()},r.smartQuoteMark=function(o){var s=this.value,n=s.replace(/[^']/g,"").length,a=s.replace(/[^"]/g,"").length;if(n+a===0){var l=(0,en.default)(s,{isIdentifier:!0});if(l===s)return e.NO_QUOTE;var c=this.preferredQuoteMark(o);if(c===e.NO_QUOTE){var d=this.quoteMark||o.quoteMark||e.DOUBLE_QUOTE,h=Eu[d],f=(0,en.default)(s,h);if(f.length<l.length)return d}return c}else return a===n?this.preferredQuoteMark(o):a<n?e.DOUBLE_QUOTE:e.SINGLE_QUOTE},r.preferredQuoteMark=function(o){var s=o.preferCurrentQuoteMark?this.quoteMark:o.quoteMark;return s===void 0&&(s=o.preferCurrentQuoteMark?o.quoteMark:this.quoteMark),s===void 0&&(s=e.DOUBLE_QUOTE),s},r._syncRawValue=function(){var o=(0,en.default)(this._value,Eu[this.quoteMark]);o===this._value?this.raws&&delete this.raws.value:this.raws.value=o},r._handleEscapes=function(o,s){if(this._constructed){var n=(0,en.default)(s,{isIdentifier:!0});n!==s?this.raws[o]=n:delete this.raws[o]}},r._spacesFor=function(o){var s={before:"",after:""},n=this.spaces[o]||{},a=this.raws.spaces&&this.raws.spaces[o]||{};return Object.assign(s,n,a)},r._stringFor=function(o,s,n){s===void 0&&(s=o),n===void 0&&(n=Mm);var a=this._spacesFor(s);return n(this.stringifyProperty(o),a)},r.offsetOf=function(o){var s=1,n=this._spacesFor("attribute");if(s+=n.before.length,o==="namespace"||o==="ns")return this.namespace?s:-1;if(o==="attributeNS"||(s+=this.namespaceString.length,this.namespace&&(s+=1),o==="attribute"))return s;s+=this.stringifyProperty("attribute").length,s+=n.after.length;var a=this._spacesFor("operator");s+=a.before.length;var l=this.stringifyProperty("operator");if(o==="operator")return l?s:-1;s+=l.length,s+=a.after.length;var c=this._spacesFor("value");s+=c.before.length;var d=this.stringifyProperty("value");if(o==="value")return d?s:-1;s+=d.length,s+=c.after.length;var h=this._spacesFor("insensitive");return s+=h.before.length,o==="insensitive"&&this.insensitive?s:-1},r.toString=function(){var o=this,s=[this.rawSpaceBefore,"["];return s.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(s.push(this._stringFor("operator")),s.push(this._stringFor("value")),s.push(this._stringFor("insensitiveFlag","insensitive",function(n,a){return n.length>0&&!o.quoted&&a.before.length===0&&!(o.spaces.value&&o.spaces.value.after)&&(a.before=" "),Mm(n,a)}))),s.push("]"),s.push(this.rawSpaceAfter),s.join("")},kk(e,[{key:"quoted",get:function(){var o=this.quoteMark;return o==="'"||o==='"'},set:function(o){Ek()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(o){if(!this._constructed){this._quoteMark=o;return}this._quoteMark!==o&&(this._quoteMark=o,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=$u(o),n=s.deprecatedUsage,a=s.unescaped,l=s.quoteMark;if(n&&Tk(),a===this._value&&l===this._quoteMark)return;this._value=a,this._quoteMark=l,this._syncRawValue()}else this._value=o}},{key:"insensitive",get:function(){return this._insensitive},set:function(o){o||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=o}},{key:"attribute",get:function(){return this._attribute},set:function(o){this._handleEscapes("attribute",o),this._attribute=o}}]),e}(_k.default);rn.default=Na;Na.NO_QUOTE=null;Na.SINGLE_QUOTE="'";Na.DOUBLE_QUOTE='"';var Eu=(Tu={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},Tu[null]={isIdentifier:!0},Tu);function Mm(t,e){return""+e.before+t+e.after}});var Lu=B((on,Nm)=>{"use strict";on.__esModule=!0;on.default=void 0;var $k=Pk(Ma()),Ik=ct();function Pk(t){return t&&t.__esModule?t:{default:t}}function Lk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Pu(t,e)}function Pu(t,e){return Pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Pu(t,e)}var zk=function(t){Lk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Ik.UNIVERSAL,i.value="*",i}return e}($k.default);on.default=zk;Nm.exports=on.default});var Ru=B((sn,Fm)=>{"use strict";sn.__esModule=!0;sn.default=void 0;var Rk=Mk($r()),Dk=ct();function Mk(t){return t&&t.__esModule?t:{default:t}}function Nk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,zu(t,e)}function zu(t,e){return zu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},zu(t,e)}var Fk=function(t){Nk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Dk.COMBINATOR,i}return e}(Rk.default);sn.default=Fk;Fm.exports=sn.default});var Mu=B((nn,Um)=>{"use strict";nn.__esModule=!0;nn.default=void 0;var Uk=Vk($r()),Bk=ct();function Vk(t){return t&&t.__esModule?t:{default:t}}function jk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Du(t,e)}function Du(t,e){return Du=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Du(t,e)}var qk=function(t){jk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Bk.NESTING,i.value="&",i}return e}(Uk.default);nn.default=qk;Um.exports=nn.default});var Vm=B((Fa,Bm)=>{"use strict";Fa.__esModule=!0;Fa.default=Hk;function Hk(t){return t.sort(function(e,r){return e-r})}Bm.exports=Fa.default});var Nu=B(W=>{"use strict";W.__esModule=!0;W.word=W.tilde=W.tab=W.str=W.space=W.slash=W.singleQuote=W.semicolon=W.plus=W.pipe=W.openSquare=W.openParenthesis=W.newline=W.greaterThan=W.feed=W.equals=W.doubleQuote=W.dollar=W.cr=W.comment=W.comma=W.combinator=W.colon=W.closeSquare=W.closeParenthesis=W.caret=W.bang=W.backslash=W.at=W.asterisk=W.ampersand=void 0;var Wk=38;W.ampersand=Wk;var Gk=42;W.asterisk=Gk;var Kk=64;W.at=Kk;var Zk=44;W.comma=Zk;var Yk=58;W.colon=Yk;var Xk=59;W.semicolon=Xk;var Jk=40;W.openParenthesis=Jk;var Qk=41;W.closeParenthesis=Qk;var eS=91;W.openSquare=eS;var tS=93;W.closeSquare=tS;var rS=36;W.dollar=rS;var iS=126;W.tilde=iS;var oS=94;W.caret=oS;var sS=43;W.plus=sS;var nS=61;W.equals=nS;var aS=124;W.pipe=aS;var lS=62;W.greaterThan=lS;var cS=32;W.space=cS;var jm=39;W.singleQuote=jm;var uS=34;W.doubleQuote=uS;var dS=47;W.slash=dS;var hS=33;W.bang=hS;var pS=92;W.backslash=pS;var fS=13;W.cr=fS;var mS=12;W.feed=mS;var gS=10;W.newline=gS;var bS=9;W.tab=bS;var yS=jm;W.str=yS;var vS=-1;W.comment=vS;var wS=-2;W.word=wS;var _S=-3;W.combinator=_S});var Wm=B(an=>{"use strict";an.__esModule=!0;an.FIELDS=void 0;an.default=AS;var F=xS(Nu()),Lo,Pe;function Hm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Hm=function(o){return o?r:e})(t)}function xS(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Hm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}var kS=(Lo={},Lo[F.tab]=!0,Lo[F.newline]=!0,Lo[F.cr]=!0,Lo[F.feed]=!0,Lo),SS=(Pe={},Pe[F.space]=!0,Pe[F.tab]=!0,Pe[F.newline]=!0,Pe[F.cr]=!0,Pe[F.feed]=!0,Pe[F.ampersand]=!0,Pe[F.asterisk]=!0,Pe[F.bang]=!0,Pe[F.comma]=!0,Pe[F.colon]=!0,Pe[F.semicolon]=!0,Pe[F.openParenthesis]=!0,Pe[F.closeParenthesis]=!0,Pe[F.openSquare]=!0,Pe[F.closeSquare]=!0,Pe[F.singleQuote]=!0,Pe[F.doubleQuote]=!0,Pe[F.plus]=!0,Pe[F.pipe]=!0,Pe[F.tilde]=!0,Pe[F.greaterThan]=!0,Pe[F.equals]=!0,Pe[F.dollar]=!0,Pe[F.caret]=!0,Pe[F.slash]=!0,Pe),Fu={},qm="0123456789abcdefABCDEF";for(Ua=0;Ua<qm.length;Ua++)Fu[qm.charCodeAt(Ua)]=!0;var Ua;function CS(t,e){var r=e,i;do{if(i=t.charCodeAt(r),SS[i])return r-1;i===F.backslash?r=TS(t,r)+1:r++}while(r<t.length);return r-1}function TS(t,e){var r=e,i=t.charCodeAt(r+1);if(!kS[i])if(Fu[i]){var o=0;do r++,o++,i=t.charCodeAt(r+1);while(Fu[i]&&o<6);o<6&&i===F.space&&r++}else r++;return r}var ES={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};an.FIELDS=ES;function AS(t){var e=[],r=t.css.valueOf(),i=r,o=i.length,s=-1,n=1,a=0,l=0,c,d,h,f,m,g,b,v,_,w,k,y,S;function M(H,V){if(t.safe)r+=V,_=r.length-1;else throw t.error("Unclosed "+H,n,a-s,a)}for(;a<o;){switch(c=r.charCodeAt(a),c===F.newline&&(s=a,n+=1),c){case F.space:case F.tab:case F.newline:case F.cr:case F.feed:_=a;do _+=1,c=r.charCodeAt(_),c===F.newline&&(s=_,n+=1);while(c===F.space||c===F.newline||c===F.tab||c===F.cr||c===F.feed);S=F.space,f=n,h=_-s-1,l=_;break;case F.plus:case F.greaterThan:case F.tilde:case F.pipe:_=a;do _+=1,c=r.charCodeAt(_);while(c===F.plus||c===F.greaterThan||c===F.tilde||c===F.pipe);S=F.combinator,f=n,h=a-s,l=_;break;case F.asterisk:case F.ampersand:case F.bang:case F.comma:case F.equals:case F.dollar:case F.caret:case F.openSquare:case F.closeSquare:case F.colon:case F.semicolon:case F.openParenthesis:case F.closeParenthesis:_=a,S=c,f=n,h=a-s,l=_+1;break;case F.singleQuote:case F.doubleQuote:y=c===F.singleQuote?"'":'"',_=a;do for(m=!1,_=r.indexOf(y,_+1),_===-1&&M("quote",y),g=_;r.charCodeAt(g-1)===F.backslash;)g-=1,m=!m;while(m);S=F.str,f=n,h=a-s,l=_+1;break;default:c===F.slash&&r.charCodeAt(a+1)===F.asterisk?(_=r.indexOf("*/",a+2)+1,_===0&&M("comment","*/"),d=r.slice(a,_+1),v=d.split(`
`),b=v.length-1,b>0?(w=n+b,k=_-v[b].length):(w=n,k=s),S=F.comment,n=w,f=w,h=_-k):c===F.slash?(_=a,S=c,f=n,h=a-s,l=_+1):(_=CS(r,a),S=F.word,f=n,h=_-s),l=_+1;break}e.push([S,n,a-s,f,h,a,l]),k&&(s=k,k=null),a=l}return e}});var eg=B((ln,Qm)=>{"use strict";ln.__esModule=!0;ln.default=void 0;var OS=Bt(lu()),Uu=Bt(uu()),$S=Bt(pu()),Gm=Bt(mu()),IS=Bt(bu()),PS=Bt(wu()),Bu=Bt(xu()),LS=Bt(Su()),Km=Ba(Iu()),zS=Bt(Lu()),Vu=Bt(Ru()),RS=Bt(Mu()),DS=Bt(Vm()),I=Ba(Wm()),j=Ba(Nu()),MS=Ba(ct()),Ve=Vs(),$i,ju;function Jm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Jm=function(o){return o?r:e})(t)}function Ba(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Jm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function Bt(t){return t&&t.__esModule?t:{default:t}}function Zm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function NS(t,e,r){return e&&Zm(t.prototype,e),r&&Zm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Wu=($i={},$i[j.space]=!0,$i[j.cr]=!0,$i[j.feed]=!0,$i[j.newline]=!0,$i[j.tab]=!0,$i),FS=Object.assign({},Wu,(ju={},ju[j.comment]=!0,ju));function Ym(t){return{line:t[I.FIELDS.START_LINE],column:t[I.FIELDS.START_COL]}}function Xm(t){return{line:t[I.FIELDS.END_LINE],column:t[I.FIELDS.END_COL]}}function Ii(t,e,r,i){return{start:{line:t,column:e},end:{line:r,column:i}}}function zo(t){return Ii(t[I.FIELDS.START_LINE],t[I.FIELDS.START_COL],t[I.FIELDS.END_LINE],t[I.FIELDS.END_COL])}function qu(t,e){if(t)return Ii(t[I.FIELDS.START_LINE],t[I.FIELDS.START_COL],e[I.FIELDS.END_LINE],e[I.FIELDS.END_COL])}function Ro(t,e){var r=t[e];if(typeof r=="string")return r.indexOf("\\")!==-1&&((0,Ve.ensureObject)(t,"raws"),t[e]=(0,Ve.unesc)(r),t.raws[e]===void 0&&(t.raws[e]=r)),t}function Hu(t,e){for(var r=-1,i=[];(r=t.indexOf(e,r+1))!==-1;)i.push(r);return i}function US(){var t=Array.prototype.concat.apply([],arguments);return t.filter(function(e,r){return r===t.indexOf(e)})}var BS=function(){function t(r,i){i===void 0&&(i={}),this.rule=r,this.options=Object.assign({lossy:!1,safe:!1},i),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,I.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var o=qu(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new OS.default({source:o}),this.root.errorGenerator=this._errorGenerator();var s=new Uu.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(s),this.current=s,this.loop()}var e=t.prototype;return e._errorGenerator=function(){var i=this;return function(o,s){return typeof i.rule=="string"?new Error(o):i.rule.error(o,s)}},e.attribute=function(){var i=[],o=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[I.FIELDS.TYPE]!==j.closeSquare;)i.push(this.currToken),this.position++;if(this.currToken[I.FIELDS.TYPE]!==j.closeSquare)return this.expected("closing square bracket",this.currToken[I.FIELDS.START_POS]);var s=i.length,n={source:Ii(o[1],o[2],this.currToken[3],this.currToken[4]),sourceIndex:o[I.FIELDS.START_POS]};if(s===1&&!~[j.word].indexOf(i[0][I.FIELDS.TYPE]))return this.expected("attribute",i[0][I.FIELDS.START_POS]);for(var a=0,l="",c="",d=null,h=!1;a<s;){var f=i[a],m=this.content(f),g=i[a+1];switch(f[I.FIELDS.TYPE]){case j.space:if(h=!0,this.options.lossy)break;if(d){(0,Ve.ensureObject)(n,"spaces",d);var b=n.spaces[d].after||"";n.spaces[d].after=b+m;var v=(0,Ve.getProp)(n,"raws","spaces",d,"after")||null;v&&(n.raws.spaces[d].after=v+m)}else l=l+m,c=c+m;break;case j.asterisk:if(g[I.FIELDS.TYPE]===j.equals)n.operator=m,d="operator";else if((!n.namespace||d==="namespace"&&!h)&&g){l&&((0,Ve.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),c&&((0,Ve.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=l,c=""),n.namespace=(n.namespace||"")+m;var _=(0,Ve.getProp)(n,"raws","namespace")||null;_&&(n.raws.namespace+=m),d="namespace"}h=!1;break;case j.dollar:if(d==="value"){var w=(0,Ve.getProp)(n,"raws","value");n.value+="$",w&&(n.raws.value=w+"$");break}case j.caret:g[I.FIELDS.TYPE]===j.equals&&(n.operator=m,d="operator"),h=!1;break;case j.combinator:if(m==="~"&&g[I.FIELDS.TYPE]===j.equals&&(n.operator=m,d="operator"),m!=="|"){h=!1;break}g[I.FIELDS.TYPE]===j.equals?(n.operator=m,d="operator"):!n.namespace&&!n.attribute&&(n.namespace=!0),h=!1;break;case j.word:if(g&&this.content(g)==="|"&&i[a+2]&&i[a+2][I.FIELDS.TYPE]!==j.equals&&!n.operator&&!n.namespace)n.namespace=m,d="namespace";else if(!n.attribute||d==="attribute"&&!h){l&&((0,Ve.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),c&&((0,Ve.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=c,c=""),n.attribute=(n.attribute||"")+m;var k=(0,Ve.getProp)(n,"raws","attribute")||null;k&&(n.raws.attribute+=m),d="attribute"}else if(!n.value&&n.value!==""||d==="value"&&!(h||n.quoteMark)){var y=(0,Ve.unesc)(m),S=(0,Ve.getProp)(n,"raws","value")||"",M=n.value||"";n.value=M+y,n.quoteMark=null,(y!==m||S)&&((0,Ve.ensureObject)(n,"raws"),n.raws.value=(S||M)+m),d="value"}else{var H=m==="i"||m==="I";(n.value||n.value==="")&&(n.quoteMark||h)?(n.insensitive=H,(!H||m==="I")&&((0,Ve.ensureObject)(n,"raws"),n.raws.insensitiveFlag=m),d="insensitive",l&&((0,Ve.ensureObject)(n,"spaces","insensitive"),n.spaces.insensitive.before=l,l=""),c&&((0,Ve.ensureObject)(n,"raws","spaces","insensitive"),n.raws.spaces.insensitive.before=c,c="")):(n.value||n.value==="")&&(d="value",n.value+=m,n.raws.value&&(n.raws.value+=m))}h=!1;break;case j.str:if(!n.attribute||!n.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:f[I.FIELDS.START_POS]});var V=(0,Km.unescapeValue)(m),R=V.unescaped,P=V.quoteMark;n.value=R,n.quoteMark=P,d="value",(0,Ve.ensureObject)(n,"raws"),n.raws.value=m,h=!1;break;case j.equals:if(!n.attribute)return this.expected("attribute",f[I.FIELDS.START_POS],m);if(n.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:f[I.FIELDS.START_POS]});n.operator=n.operator?n.operator+m:m,d="operator",h=!1;break;case j.comment:if(d)if(h||g&&g[I.FIELDS.TYPE]===j.space||d==="insensitive"){var ee=(0,Ve.getProp)(n,"spaces",d,"after")||"",Y=(0,Ve.getProp)(n,"raws","spaces",d,"after")||ee;(0,Ve.ensureObject)(n,"raws","spaces",d),n.raws.spaces[d].after=Y+m}else{var ve=n[d]||"",he=(0,Ve.getProp)(n,"raws",d)||ve;(0,Ve.ensureObject)(n,"raws"),n.raws[d]=he+m}else c=c+m;break;default:return this.error('Unexpected "'+m+'" found.',{index:f[I.FIELDS.START_POS]})}a++}Ro(n,"attribute"),Ro(n,"namespace"),this.newNode(new Km.default(n)),this.position++},e.parseWhitespaceEquivalentTokens=function(i){i<0&&(i=this.tokens.length);var o=this.position,s=[],n="",a=void 0;do if(Wu[this.currToken[I.FIELDS.TYPE]])this.options.lossy||(n+=this.content());else if(this.currToken[I.FIELDS.TYPE]===j.comment){var l={};n&&(l.before=n,n=""),a=new Gm.default({value:this.content(),source:zo(this.currToken),sourceIndex:this.currToken[I.FIELDS.START_POS],spaces:l}),s.push(a)}while(++this.position<i);if(n){if(a)a.spaces.after=n;else if(!this.options.lossy){var c=this.tokens[o],d=this.tokens[this.position-1];s.push(new Bu.default({value:"",source:Ii(c[I.FIELDS.START_LINE],c[I.FIELDS.START_COL],d[I.FIELDS.END_LINE],d[I.FIELDS.END_COL]),sourceIndex:c[I.FIELDS.START_POS],spaces:{before:n,after:""}}))}}return s},e.convertWhitespaceNodesToSpace=function(i,o){var s=this;o===void 0&&(o=!1);var n="",a="";i.forEach(function(c){var d=s.lossySpace(c.spaces.before,o),h=s.lossySpace(c.rawSpaceBefore,o);n+=d+s.lossySpace(c.spaces.after,o&&d.length===0),a+=d+c.value+s.lossySpace(c.rawSpaceAfter,o&&h.length===0)}),a===n&&(a=void 0);var l={space:n,rawSpace:a};return l},e.isNamedCombinator=function(i){return i===void 0&&(i=this.position),this.tokens[i+0]&&this.tokens[i+0][I.FIELDS.TYPE]===j.slash&&this.tokens[i+1]&&this.tokens[i+1][I.FIELDS.TYPE]===j.word&&this.tokens[i+2]&&this.tokens[i+2][I.FIELDS.TYPE]===j.slash},e.namedCombinator=function(){if(this.isNamedCombinator()){var i=this.content(this.tokens[this.position+1]),o=(0,Ve.unesc)(i).toLowerCase(),s={};o!==i&&(s.value="/"+i+"/");var n=new Vu.default({value:"/"+o+"/",source:Ii(this.currToken[I.FIELDS.START_LINE],this.currToken[I.FIELDS.START_COL],this.tokens[this.position+2][I.FIELDS.END_LINE],this.tokens[this.position+2][I.FIELDS.END_COL]),sourceIndex:this.currToken[I.FIELDS.START_POS],raws:s});return this.position=this.position+3,n}else this.unexpected()},e.combinator=function(){var i=this;if(this.content()==="|")return this.namespace();var o=this.locateNextMeaningfulToken(this.position);if(o<0||this.tokens[o][I.FIELDS.TYPE]===j.comma||this.tokens[o][I.FIELDS.TYPE]===j.closeParenthesis){var s=this.parseWhitespaceEquivalentTokens(o);if(s.length>0){var n=this.current.last;if(n){var a=this.convertWhitespaceNodesToSpace(s),l=a.space,c=a.rawSpace;c!==void 0&&(n.rawSpaceAfter+=c),n.spaces.after+=l}else s.forEach(function(S){return i.newNode(S)})}return}var d=this.currToken,h=void 0;o>this.position&&(h=this.parseWhitespaceEquivalentTokens(o));var f;if(this.isNamedCombinator()?f=this.namedCombinator():this.currToken[I.FIELDS.TYPE]===j.combinator?(f=new Vu.default({value:this.content(),source:zo(this.currToken),sourceIndex:this.currToken[I.FIELDS.START_POS]}),this.position++):Wu[this.currToken[I.FIELDS.TYPE]]||h||this.unexpected(),f){if(h){var m=this.convertWhitespaceNodesToSpace(h),g=m.space,b=m.rawSpace;f.spaces.before=g,f.rawSpaceBefore=b}}else{var v=this.convertWhitespaceNodesToSpace(h,!0),_=v.space,w=v.rawSpace;w||(w=_);var k={},y={spaces:{}};_.endsWith(" ")&&w.endsWith(" ")?(k.before=_.slice(0,_.length-1),y.spaces.before=w.slice(0,w.length-1)):_.startsWith(" ")&&w.startsWith(" ")?(k.after=_.slice(1),y.spaces.after=w.slice(1)):y.value=w,f=new Vu.default({value:" ",source:qu(d,this.tokens[this.position-1]),sourceIndex:d[I.FIELDS.START_POS],spaces:k,raws:y})}return this.currToken&&this.currToken[I.FIELDS.TYPE]===j.space&&(f.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(f)},e.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var i=new Uu.default({source:{start:Ym(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][I.FIELDS.START_POS]});this.current.parent.append(i),this.current=i,this.position++},e.comment=function(){var i=this.currToken;this.newNode(new Gm.default({value:this.content(),source:zo(i),sourceIndex:i[I.FIELDS.START_POS]})),this.position++},e.error=function(i,o){throw this.root.error(i,o)},e.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[I.FIELDS.START_POS]})},e.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[I.FIELDS.START_POS])},e.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[I.FIELDS.START_POS])},e.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[I.FIELDS.START_POS])},e.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[I.FIELDS.START_POS])},e.namespace=function(){var i=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[I.FIELDS.TYPE]===j.word)return this.position++,this.word(i);if(this.nextToken[I.FIELDS.TYPE]===j.asterisk)return this.position++,this.universal(i);this.unexpectedPipe()},e.nesting=function(){if(this.nextToken){var i=this.content(this.nextToken);if(i==="|"){this.position++;return}}var o=this.currToken;this.newNode(new RS.default({value:this.content(),source:zo(o),sourceIndex:o[I.FIELDS.START_POS]})),this.position++},e.parentheses=function(){var i=this.current.last,o=1;if(this.position++,i&&i.type===MS.PSEUDO){var s=new Uu.default({source:{start:Ym(this.tokens[this.position])},sourceIndex:this.tokens[this.position][I.FIELDS.START_POS]}),n=this.current;for(i.append(s),this.current=s;this.position<this.tokens.length&&o;)this.currToken[I.FIELDS.TYPE]===j.openParenthesis&&o++,this.currToken[I.FIELDS.TYPE]===j.closeParenthesis&&o--,o?this.parse():(this.current.source.end=Xm(this.currToken),this.current.parent.source.end=Xm(this.currToken),this.position++);this.current=n}else{for(var a=this.currToken,l="(",c;this.position<this.tokens.length&&o;)this.currToken[I.FIELDS.TYPE]===j.openParenthesis&&o++,this.currToken[I.FIELDS.TYPE]===j.closeParenthesis&&o--,c=this.currToken,l+=this.parseParenthesisToken(this.currToken),this.position++;i?i.appendToPropertyAndEscape("value",l,l):this.newNode(new Bu.default({value:l,source:Ii(a[I.FIELDS.START_LINE],a[I.FIELDS.START_COL],c[I.FIELDS.END_LINE],c[I.FIELDS.END_COL]),sourceIndex:a[I.FIELDS.START_POS]}))}if(o)return this.expected("closing parenthesis",this.currToken[I.FIELDS.START_POS])},e.pseudo=function(){for(var i=this,o="",s=this.currToken;this.currToken&&this.currToken[I.FIELDS.TYPE]===j.colon;)o+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[I.FIELDS.TYPE]===j.word)this.splitWord(!1,function(n,a){o+=n,i.newNode(new LS.default({value:o,source:qu(s,i.currToken),sourceIndex:s[I.FIELDS.START_POS]})),a>1&&i.nextToken&&i.nextToken[I.FIELDS.TYPE]===j.openParenthesis&&i.error("Misplaced parenthesis.",{index:i.nextToken[I.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[I.FIELDS.START_POS])},e.space=function(){var i=this.content();this.position===0||this.prevToken[I.FIELDS.TYPE]===j.comma||this.prevToken[I.FIELDS.TYPE]===j.openParenthesis||this.current.nodes.every(function(o){return o.type==="comment"})?(this.spaces=this.optionalSpace(i),this.position++):this.position===this.tokens.length-1||this.nextToken[I.FIELDS.TYPE]===j.comma||this.nextToken[I.FIELDS.TYPE]===j.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(i),this.position++):this.combinator()},e.string=function(){var i=this.currToken;this.newNode(new Bu.default({value:this.content(),source:zo(i),sourceIndex:i[I.FIELDS.START_POS]})),this.position++},e.universal=function(i){var o=this.nextToken;if(o&&this.content(o)==="|")return this.position++,this.namespace();var s=this.currToken;this.newNode(new zS.default({value:this.content(),source:zo(s),sourceIndex:s[I.FIELDS.START_POS]}),i),this.position++},e.splitWord=function(i,o){for(var s=this,n=this.nextToken,a=this.content();n&&~[j.dollar,j.caret,j.equals,j.word].indexOf(n[I.FIELDS.TYPE]);){this.position++;var l=this.content();if(a+=l,l.lastIndexOf("\\")===l.length-1){var c=this.nextToken;c&&c[I.FIELDS.TYPE]===j.space&&(a+=this.requiredSpace(this.content(c)),this.position++)}n=this.nextToken}var d=Hu(a,".").filter(function(g){var b=a[g-1]==="\\",v=/^\d+\.\d+%$/.test(a);return!b&&!v}),h=Hu(a,"#").filter(function(g){return a[g-1]!=="\\"}),f=Hu(a,"#{");f.length&&(h=h.filter(function(g){return!~f.indexOf(g)}));var m=(0,DS.default)(US([0].concat(d,h)));m.forEach(function(g,b){var v=m[b+1]||a.length,_=a.slice(g,v);if(b===0&&o)return o.call(s,_,m.length);var w,k=s.currToken,y=k[I.FIELDS.START_POS]+m[b],S=Ii(k[1],k[2]+g,k[3],k[2]+(v-1));if(~d.indexOf(g)){var M={value:_.slice(1),source:S,sourceIndex:y};w=new $S.default(Ro(M,"value"))}else if(~h.indexOf(g)){var H={value:_.slice(1),source:S,sourceIndex:y};w=new IS.default(Ro(H,"value"))}else{var V={value:_,source:S,sourceIndex:y};Ro(V,"value"),w=new PS.default(V)}s.newNode(w,i),i=null}),this.position++},e.word=function(i){var o=this.nextToken;return o&&this.content(o)==="|"?(this.position++,this.namespace()):this.splitWord(i)},e.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},e.parse=function(i){switch(this.currToken[I.FIELDS.TYPE]){case j.space:this.space();break;case j.comment:this.comment();break;case j.openParenthesis:this.parentheses();break;case j.closeParenthesis:i&&this.missingParenthesis();break;case j.openSquare:this.attribute();break;case j.dollar:case j.caret:case j.equals:case j.word:this.word();break;case j.colon:this.pseudo();break;case j.comma:this.comma();break;case j.asterisk:this.universal();break;case j.ampersand:this.nesting();break;case j.slash:case j.combinator:this.combinator();break;case j.str:this.string();break;case j.closeSquare:this.missingSquareBracket();case j.semicolon:this.missingBackslash();default:this.unexpected()}},e.expected=function(i,o,s){if(Array.isArray(i)){var n=i.pop();i=i.join(", ")+" or "+n}var a=/^[aeiou]/.test(i[0])?"an":"a";return s?this.error("Expected "+a+" "+i+', found "'+s+'" instead.',{index:o}):this.error("Expected "+a+" "+i+".",{index:o})},e.requiredSpace=function(i){return this.options.lossy?" ":i},e.optionalSpace=function(i){return this.options.lossy?"":i},e.lossySpace=function(i,o){return this.options.lossy?o?" ":"":i},e.parseParenthesisToken=function(i){var o=this.content(i);return i[I.FIELDS.TYPE]===j.space?this.requiredSpace(o):o},e.newNode=function(i,o){return o&&(/^ +$/.test(o)&&(this.options.lossy||(this.spaces=(this.spaces||"")+o),o=!0),i.namespace=o,Ro(i,"namespace")),this.spaces&&(i.spaces.before=this.spaces,this.spaces=""),this.current.append(i)},e.content=function(i){return i===void 0&&(i=this.currToken),this.css.slice(i[I.FIELDS.START_POS],i[I.FIELDS.END_POS])},e.locateNextMeaningfulToken=function(i){i===void 0&&(i=this.position+1);for(var o=i;o<this.tokens.length;)if(FS[this.tokens[o][I.FIELDS.TYPE]]){o++;continue}else return o;return-1},NS(t,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),t}();ln.default=BS;Qm.exports=ln.default});var rg=B((cn,tg)=>{"use strict";cn.__esModule=!0;cn.default=void 0;var VS=jS(eg());function jS(t){return t&&t.__esModule?t:{default:t}}var qS=function(){function t(r,i){this.func=r||function(){},this.funcRes=null,this.options=i}var e=t.prototype;return e._shouldUpdateSelector=function(i,o){o===void 0&&(o={});var s=Object.assign({},this.options,o);return s.updateSelector===!1?!1:typeof i!="string"},e._isLossy=function(i){i===void 0&&(i={});var o=Object.assign({},this.options,i);return o.lossless===!1},e._root=function(i,o){o===void 0&&(o={});var s=new VS.default(i,this._parseOptions(o));return s.root},e._parseOptions=function(i){return{lossy:this._isLossy(i)}},e._run=function(i,o){var s=this;return o===void 0&&(o={}),new Promise(function(n,a){try{var l=s._root(i,o);Promise.resolve(s.func(l)).then(function(c){var d=void 0;return s._shouldUpdateSelector(i,o)&&(d=l.toString(),i.selector=d),{transform:c,root:l,string:d}}).then(n,a)}catch(c){a(c);return}})},e._runSync=function(i,o){o===void 0&&(o={});var s=this._root(i,o),n=this.func(s);if(n&&typeof n.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return o.updateSelector&&typeof i!="string"&&(a=s.toString(),i.selector=a),{transform:n,root:s,string:a}},e.ast=function(i,o){return this._run(i,o).then(function(s){return s.root})},e.astSync=function(i,o){return this._runSync(i,o).root},e.transform=function(i,o){return this._run(i,o).then(function(s){return s.transform})},e.transformSync=function(i,o){return this._runSync(i,o).transform},e.process=function(i,o){return this._run(i,o).then(function(s){return s.string||s.root.toString()})},e.processSync=function(i,o){var s=this._runSync(i,o);return s.string||s.root.toString()},t}();cn.default=qS;tg.exports=cn.default});var ig=B(De=>{"use strict";De.__esModule=!0;De.universal=De.tag=De.string=De.selector=De.root=De.pseudo=De.nesting=De.id=De.comment=De.combinator=De.className=De.attribute=void 0;var HS=Vt(Iu()),WS=Vt(pu()),GS=Vt(Ru()),KS=Vt(mu()),ZS=Vt(bu()),YS=Vt(Mu()),XS=Vt(Su()),JS=Vt(lu()),QS=Vt(uu()),eC=Vt(xu()),tC=Vt(wu()),rC=Vt(Lu());function Vt(t){return t&&t.__esModule?t:{default:t}}var iC=function(e){return new HS.default(e)};De.attribute=iC;var oC=function(e){return new WS.default(e)};De.className=oC;var sC=function(e){return new GS.default(e)};De.combinator=sC;var nC=function(e){return new KS.default(e)};De.comment=nC;var aC=function(e){return new ZS.default(e)};De.id=aC;var lC=function(e){return new YS.default(e)};De.nesting=lC;var cC=function(e){return new XS.default(e)};De.pseudo=cC;var uC=function(e){return new JS.default(e)};De.root=uC;var dC=function(e){return new QS.default(e)};De.selector=dC;var hC=function(e){return new eC.default(e)};De.string=hC;var pC=function(e){return new tC.default(e)};De.tag=pC;var fC=function(e){return new rC.default(e)};De.universal=fC});var ag=B(xe=>{"use strict";xe.__esModule=!0;xe.isComment=xe.isCombinator=xe.isClassName=xe.isAttribute=void 0;xe.isContainer=TC;xe.isIdentifier=void 0;xe.isNamespace=EC;xe.isNesting=void 0;xe.isNode=Gu;xe.isPseudo=void 0;xe.isPseudoClass=CC;xe.isPseudoElement=ng;xe.isUniversal=xe.isTag=xe.isString=xe.isSelector=xe.isRoot=void 0;var je=ct(),kt,mC=(kt={},kt[je.ATTRIBUTE]=!0,kt[je.CLASS]=!0,kt[je.COMBINATOR]=!0,kt[je.COMMENT]=!0,kt[je.ID]=!0,kt[je.NESTING]=!0,kt[je.PSEUDO]=!0,kt[je.ROOT]=!0,kt[je.SELECTOR]=!0,kt[je.STRING]=!0,kt[je.TAG]=!0,kt[je.UNIVERSAL]=!0,kt);function Gu(t){return typeof t=="object"&&mC[t.type]}function jt(t,e){return Gu(e)&&e.type===t}var og=jt.bind(null,je.ATTRIBUTE);xe.isAttribute=og;var gC=jt.bind(null,je.CLASS);xe.isClassName=gC;var bC=jt.bind(null,je.COMBINATOR);xe.isCombinator=bC;var yC=jt.bind(null,je.COMMENT);xe.isComment=yC;var vC=jt.bind(null,je.ID);xe.isIdentifier=vC;var wC=jt.bind(null,je.NESTING);xe.isNesting=wC;var Ku=jt.bind(null,je.PSEUDO);xe.isPseudo=Ku;var _C=jt.bind(null,je.ROOT);xe.isRoot=_C;var xC=jt.bind(null,je.SELECTOR);xe.isSelector=xC;var kC=jt.bind(null,je.STRING);xe.isString=kC;var sg=jt.bind(null,je.TAG);xe.isTag=sg;var SC=jt.bind(null,je.UNIVERSAL);xe.isUniversal=SC;function ng(t){return Ku(t)&&t.value&&(t.value.startsWith("::")||t.value.toLowerCase()===":before"||t.value.toLowerCase()===":after"||t.value.toLowerCase()===":first-letter"||t.value.toLowerCase()===":first-line")}function CC(t){return Ku(t)&&!ng(t)}function TC(t){return!!(Gu(t)&&t.walk)}function EC(t){return og(t)||sg(t)}});var lg=B(nr=>{"use strict";nr.__esModule=!0;var Zu=ct();Object.keys(Zu).forEach(function(t){t==="default"||t==="__esModule"||t in nr&&nr[t]===Zu[t]||(nr[t]=Zu[t])});var Yu=ig();Object.keys(Yu).forEach(function(t){t==="default"||t==="__esModule"||t in nr&&nr[t]===Yu[t]||(nr[t]=Yu[t])});var Xu=ag();Object.keys(Xu).forEach(function(t){t==="default"||t==="__esModule"||t in nr&&nr[t]===Xu[t]||(nr[t]=Xu[t])})});var dg=B((un,ug)=>{"use strict";un.__esModule=!0;un.default=void 0;var AC=IC(rg()),OC=$C(lg());function cg(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(cg=function(o){return o?r:e})(t)}function $C(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=cg(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function IC(t){return t&&t.__esModule?t:{default:t}}var Ju=function(e){return new AC.default(e)};Object.assign(Ju,OC);delete Ju.__esModule;var PC=Ju;un.default=PC;ug.exports=un.default});var yg=B((cP,id)=>{var{AtRule:LC,Rule:pg}=Io(),fg=dg();function td(t,e){let r;try{fg(i=>{r=i}).processSync(t)}catch(i){throw t.includes(":")?e?e.error("Missed semicolon"):i:e?e.error(i.message):i}return r.at(0)}function mg(t,e){let r=!1;return t.each(i=>{if(i.type==="nesting"){let o=e.clone({});i.value!=="&"?i.replaceWith(td(i.value.replace("&",o.toString()))):i.replaceWith(o),r=!0}else"nodes"in i&&i.nodes&&mg(i,e)&&(r=!0)}),r}function gg(t,e){let r=[];for(let i of t.selectors){let o=td(i,t);for(let s of e.selectors){if(!s)continue;let n=td(s,e);mg(n,o)||(n.prepend(fg.combinator({value:" "})),n.prepend(o.clone({}))),r.push(n.toString())}}return r}function Va(t,e){if(t.prev()?.type!=="comment")return e.after(t),t;let r=t.prev(),i=/[*]\/ *\n.*{/;return t.parent.toString().match(i)?e.after(t).after(r):e.after(t),t}function zC(t){return function e(r,i,o,s=o){let n=[];if(i.each(a=>{a.type==="rule"&&o?s&&(a.selectors=gg(r,a)):a.type==="atrule"&&a.nodes?t[a.name]?e(r,a,s):i[rd]!==!1&&n.push(a):n.push(a)}),o&&n.length){let a=r.clone({nodes:[]});for(let l of n)a.append(l);i.prepend(a)}}}function RC(t,e,r){let i=new pg({nodes:[],selector:t});return i.append(e),r.after(i),i}function Qu(t,e,r,i=!0){return e.length?(r=RC(t,e,r),i&&(e=[]),[r,e]):[r,e]}function hg(t,e=""){let r=t.concat(e),i={};for(let o of r)i[o.replace(/^@/,"")]=!0;return i}function DC(t){t=t.trim();let e=t.match(/^\((.*)\)$/);if(!e)return{selector:t,type:"basic"};let r=e[1].match(/^(with(?:out)?):(.+)$/);if(r){let i=r[1]==="with",o=Object.fromEntries(r[2].trim().split(/\s+/).map(n=>[n,!0]));if(i&&o.all)return{type:"noop"};let s=n=>!!o[n];return o.all?s=()=>!0:i&&(s=n=>n==="all"?!1:!o[n]),{escapes:s,type:"withrules"}}return{type:"unknown"}}function MC(t){let e=[],r=t.parent;for(;r&&r instanceof LC;)e.push(r),r=r.parent;return e}function NC(t){let e=t[bg];if(!e)t.after(t.nodes);else{let r=t.nodes,i,o=-1,s,n,a,l=MC(t);if(l.forEach((c,d)=>{if(e(c.name))i=c,o=d,n=a;else{let h=a;a=c.clone({nodes:[]}),h&&a.append(h),s=s||a}}),i?n?(s.append(r),i.after(n)):i.after(r):t.after(r),t.next()&&i){let c;l.slice(0,o+1).forEach((d,h,f)=>{let m=c;c=d.clone({nodes:[]}),m&&c.append(m);let g=[],v=(f[h-1]||t).next();for(;v;)g.push(v),v=v.next();c.append(g)}),c&&(n||r[r.length-1]).after(c)}}t.remove()}var rd=Symbol("rootRuleMergeSel"),bg=Symbol("rootRuleEscapes");function FC(t){let{params:e}=t,{escapes:r,selector:i,type:o}=DC(e);if(o==="unknown")throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);if(o==="basic"&&i){let s=new pg({nodes:t.nodes,selector:i});t.removeAll(),t.append(s)}t[bg]=r,t[rd]=r?!r("all"):o==="noop"}var ed=Symbol("hasRootRule");id.exports=(t={})=>{let e=hg(["media","supports","layer","container","starting-style"],t.bubble),r=zC(e),i=hg(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],t.unwrap),o=(t.rootRuleName||"at-root").replace(/^@/,""),s=t.preserveEmpty;return{Once(n){n.walkAtRules(o,a=>{FC(a),n[ed]=!0})},postcssPlugin:"postcss-nested",RootExit(n){n[ed]&&(n.walkAtRules(o,NC),n[ed]=!1)},Rule(n){let a=!1,l=n,c=!1,d=[];n.each(h=>{switch(h.type){case"atrule":[l,d]=Qu(n.selector,d,l),h.name===o?(a=!0,r(n,h,!0,h[rd]),l=Va(h,l)):e[h.name]?(c=!0,a=!0,r(n,h,!0),l=Va(h,l)):i[h.name]?(c=!0,a=!0,r(n,h,!1),l=Va(h,l)):c&&d.push(h);break;case"decl":c&&d.push(h);break;case"rule":[l,d]=Qu(n.selector,d,l),c=!0,a=!0,h.selectors=gg(n,h),l=Va(h,l);break}}),Qu(n.selector,d,l,!1),a&&s!==!0&&(n.raws.semicolon=!0,n.nodes.length===0&&n.remove())}}};id.exports.postcss=!0});function Ow(t){return Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=Object.assign({},o),Yh(o.value)&&!zw(o.value)&&!Array.isArray(o.value)&&(r[i].value=Object.assign({},o.value)),Array.isArray(o.value)&&(r[i].value=o.value.slice(0)),r},{})}function $w(t){return t?Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=Yh(o)&&"value"in o?o:{value:o},r[i].attribute||(r[i].attribute=Lw(i)),r[i].parse="parse"in r[i]?r[i].parse:typeof r[i].value!="string",r},{}):{}}function Iw(t){return Object.keys(t).reduce((r,i)=>(r[i]=t[i].value,r),{})}function Pw(t,e){let r=Ow(e);return Object.keys(e).forEach(o=>{let s=r[o],n=t.getAttribute(s.attribute),a=t[o];n!=null&&(s.value=s.parse?Zh(n):n),a!=null&&(s.value=Array.isArray(a)?a.slice(0):a),s.reflect&&Kh(t,s.attribute,s.value,!!s.parse),Object.defineProperty(t,o,{get(){return s.value},set(l){let c=s.value;s.value=l,s.reflect&&Kh(this,s.attribute,s.value,!!s.parse);for(let d=0,h=this.__propertyChangedCallbacks.length;d<h;d++)this.__propertyChangedCallbacks[d](o,l,c)},enumerable:!0,configurable:!0})}),r}function Zh(t){if(t)try{return JSON.parse(t)}catch{return t}}function Kh(t,e,r,i){if(r==null||r===!1)return t.removeAttribute(e);let o=i?JSON.stringify(r):r;t.__updating[e]=!0,o==="true"&&(o=""),t.setAttribute(e,o),Promise.resolve().then(()=>delete t.__updating[e])}function Lw(t){return t.replace(/\.?([A-Z]+)/g,(e,r)=>"-"+r.toLowerCase()).replace("_","-").replace(/^-/,"")}function Yh(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function zw(t){return Object.prototype.toString.call(t)==="[object Function]"}function Rw(t){return typeof t=="function"&&t.toString().indexOf("class")===0}var yc;function Dw(t,e){let r=Object.keys(e);return class extends t{static get observedAttributes(){return r.map(o=>e[o].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=Pw(this,e);let o=Iw(this.props),s=this.Component,n=yc;try{yc=this,this.__initialized=!0,Rw(s)?new s(o,{element:this}):s(o,{element:this})}finally{yc=n}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let o=null;for(;o=this.__releaseCallbacks.pop();)o(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(o,s,n){if(this.__initialized&&!this.__updating[o]&&(o=this.lookupProp(o),o in e)){if(n==null&&!this[o])return;this[o]=e[o].parse?Zh(n):n}}lookupProp(o){if(e)return r.find(s=>o===s||o===e[s].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(o){this.__releaseCallbacks.push(o)}addPropertyChangedCallback(o){this.__propertyChangedCallbacks.push(o)}}}var l5=Symbol("element-context");function Xh(t,e={},r={}){let{BaseElement:i=HTMLElement,extension:o,customElements:s=window.customElements}=r;return n=>{if(!t)throw new Error("tag is required to register a Component");let a=s.get(t);return a?(a.prototype.Component=n,a):(a=Dw(i,$w(e)),a.prototype.Component=n,a.prototype.registeredTag=t,s.define(t,a,o),a)}}var oe={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Jh(this.context.count)},getNextContextId(){return Jh(this.context.count++)}};function Jh(t){let e=String(t),r=e.length-1;return oe.context.id+(r?String.fromCharCode(96+r):"")+e}function ki(t){oe.context=t}function Mw(){return{...oe.context,id:oe.getNextContextId(),count:0}}var Nw=(t,e)=>t===e,Kr=Symbol("solid-proxy");var la=Symbol("solid-track"),u5=Symbol("solid-dev-component"),na={equals:Nw},gs=null,op=up,zt=1,bs=2,sp={owned:null,cleanups:null,context:null,owner:null},vc={},ue=null,z=null,xo=null,_o=null,Ee=null,Ze=null,rt=null,ca=0;function Si(t,e){let r=Ee,i=ue,o=t.length===0,s=e===void 0?i:e,n=o?sp:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=o?t:()=>t(()=>ft(()=>Gr(n)));ue=n,Ee=null;try{return Lt(a,!0)}finally{Ee=r,ue=i}}function Fe(t,e){e=e?Object.assign({},na,e):na;let r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=o=>(typeof o=="function"&&(z&&z.running&&z.sources.has(r)?o=o(r.tValue):o=o(r.value)),cp(r,o));return[lp.bind(r),i]}function Qh(t,e,r){let i=_s(t,e,!0,zt);xo&&z&&z.running?Ze.push(i):So(i)}function Ce(t,e,r){let i=_s(t,e,!1,zt);xo&&z&&z.running?Ze.push(i):So(i)}function vs(t,e,r){op=Ww;let i=_s(t,e,!1,zt),o=Ci&&Ti(Ci);o&&(i.suspense=o),(!r||!r.render)&&(i.user=!0),rt?rt.push(i):So(i)}function we(t,e,r){r=r?Object.assign({},na,r):na;let i=_s(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,xo&&z&&z.running?(i.tState=zt,Ze.push(i)):So(i),lp.bind(i)}function Fw(t){return t&&typeof t=="object"&&"then"in t}function _t(t,e,r){let i,o,s;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,o=t,s=e||{}):(i=t,o=e,s=r||{});let n=null,a=vc,l=null,c=!1,d=!1,h="initialValue"in s,f=typeof i=="function"&&we(i),m=new Set,[g,b]=(s.storage||Fe)(s.initialValue),[v,_]=Fe(void 0),[w,k]=Fe(void 0,{equals:!1}),[y,S]=Fe(h?"ready":"unresolved");oe.context&&(l=oe.getNextContextId(),s.ssrLoadFrom==="initial"?a=s.initialValue:oe.load&&oe.has(l)&&(a=oe.load(l)));function M(P,ee,Y,ve){return n===P&&(n=null,ve!==void 0&&(h=!0),(P===a||ee===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(ve,{value:ee})),a=vc,z&&P&&c?(z.promises.delete(P),c=!1,Lt(()=>{z.running=!0,H(ee,Y)},!1)):H(ee,Y)),ee}function H(P,ee){Lt(()=>{ee===void 0&&b(()=>P),S(ee!==void 0?"errored":h?"ready":"unresolved"),_(ee);for(let Y of m.keys())Y.decrement();m.clear()},!1)}function V(){let P=Ci&&Ti(Ci),ee=g(),Y=v();if(Y!==void 0&&!n)throw Y;return Ee&&!Ee.user&&P&&Qh(()=>{w(),n&&(P.resolved&&z&&c?z.promises.add(n):m.has(P)||(P.increment(),m.add(P)))}),ee}function R(P=!0){if(P!==!1&&d)return;d=!1;let ee=f?f():i;if(c=z&&z.running,ee==null||ee===!1){M(n,ft(g));return}z&&n&&z.promises.delete(n);let Y=a!==vc?a:ft(()=>o(ee,{value:g(),refetching:P}));return Fw(Y)?(n=Y,"value"in Y?(Y.status==="success"?M(n,Y.value,void 0,ee):M(n,void 0,wc(Y.value),ee),Y):(d=!0,queueMicrotask(()=>d=!1),Lt(()=>{S(h?"refreshing":"pending"),k()},!1),Y.then(ve=>M(Y,ve,void 0,ee),ve=>M(Y,void 0,wc(ve),ee)))):(M(n,Y,void 0,ee),Y)}return Object.defineProperties(V,{state:{get:()=>y()},error:{get:()=>v()},loading:{get(){let P=y();return P==="pending"||P==="refreshing"}},latest:{get(){if(!h)return V();let P=v();if(P&&!n)throw P;return g()}}}),f?Qh(()=>R(!1)):R(!1),[V,{refetch:R,mutate:b}]}function np(t){return Lt(t,!1)}function ft(t){if(!_o&&Ee===null)return t();let e=Ee;Ee=null;try{return _o?_o.untrack(t):t()}finally{Ee=e}}function ws(t){return ue===null||(ue.cleanups===null?ue.cleanups=[t]:ue.cleanups.push(t)),t}function Uw(t,e){gs||(gs=Symbol("error")),ue=_s(void 0,void 0,!0),ue.context={...ue.context,[gs]:[e]},z&&z.running&&z.sources.add(ue);try{return t()}catch(r){da(r)}finally{ue=ue.owner}}function ua(){return Ee}function J(){return ue}function Bw(t){if(z&&z.running)return t(),z.done;let e=Ee,r=ue;return Promise.resolve().then(()=>{Ee=e,ue=r;let i;return(xo||Ci)&&(i=z||(z={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(o=>i.resolve=o)),i.running=!0),Lt(t,!1),Ee=ue=null,i?i.done:void 0})}var[d5,ep]=Fe(!1);function Vw(t){rt.push.apply(rt,t),t.length=0}function ko(t,e){let r=Symbol("context");return{id:r,Provider:Gw(r),defaultValue:t}}function Ti(t){let e;return ue&&ue.context&&(e=ue.context[t.id])!==void 0?e:t.defaultValue}function ap(t){let e=we(t),r=we(()=>_c(e()));return r.toArray=()=>{let i=r();return Array.isArray(i)?i:i!=null?[i]:[]},r}var Ci;function jw(){return Ci||(Ci=ko())}function lp(){let t=z&&z.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===zt)So(this);else{let e=Ze;Ze=null,Lt(()=>aa(this),!1),Ze=e}if(Ee){let e=this.observers?this.observers.length:0;Ee.sources?(Ee.sources.push(this),Ee.sourceSlots.push(e)):(Ee.sources=[this],Ee.sourceSlots=[e]),this.observers?(this.observers.push(Ee),this.observerSlots.push(Ee.sources.length-1)):(this.observers=[Ee],this.observerSlots=[Ee.sources.length-1])}return t&&z.sources.has(this)?this.tValue:this.value}function cp(t,e,r){let i=z&&z.running&&z.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(i,e)){if(z){let o=z.running;(o||!r&&z.sources.has(t))&&(z.sources.add(t),t.tValue=e),o||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&Lt(()=>{for(let o=0;o<t.observers.length;o+=1){let s=t.observers[o],n=z&&z.running;n&&z.disposed.has(s)||((n?!s.tState:!s.state)&&(s.pure?Ze.push(s):rt.push(s),s.observers&&dp(s)),n?s.tState=zt:s.state=zt)}if(Ze.length>1e6)throw Ze=[],new Error},!1)}return e}function So(t){if(!t.fn)return;Gr(t);let e=ca;tp(t,z&&z.running&&z.sources.has(t)?t.tValue:t.value,e),z&&!z.running&&z.sources.has(t)&&queueMicrotask(()=>{Lt(()=>{z&&(z.running=!0),Ee=ue=t,tp(t,t.tValue,e),Ee=ue=null},!1)})}function tp(t,e,r){let i,o=ue,s=Ee;Ee=ue=t;try{i=t.fn(e)}catch(n){return t.pure&&(z&&z.running?(t.tState=zt,t.tOwned&&t.tOwned.forEach(Gr),t.tOwned=void 0):(t.state=zt,t.owned&&t.owned.forEach(Gr),t.owned=null)),t.updatedAt=r+1,da(n)}finally{Ee=s,ue=o}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?cp(t,i,!0):z&&z.running&&t.pure?(z.sources.add(t),t.tValue=i):t.value=i,t.updatedAt=r)}function _s(t,e,r,i=zt,o){let s={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ue,context:ue?ue.context:null,pure:r};if(z&&z.running&&(s.state=0,s.tState=i),ue===null||ue!==sp&&(z&&z.running&&ue.pure?ue.tOwned?ue.tOwned.push(s):ue.tOwned=[s]:ue.owned?ue.owned.push(s):ue.owned=[s]),_o&&s.fn){let[n,a]=Fe(void 0,{equals:!1}),l=_o.factory(s.fn,a);ws(()=>l.dispose());let c=()=>Bw(a).then(()=>d.dispose()),d=_o.factory(s.fn,c);s.fn=h=>(n(),z&&z.running?d.track(h):l.track(h))}return s}function ys(t){let e=z&&z.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===bs)return aa(t);if(t.suspense&&ft(t.suspense.inFallback))return t.suspense.effects.push(t);let r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<ca);){if(e&&z.disposed.has(t))return;(e?t.tState:t.state)&&r.push(t)}for(let i=r.length-1;i>=0;i--){if(t=r[i],e){let o=t,s=r[i+1];for(;(o=o.owner)&&o!==s;)if(z.disposed.has(o))return}if((e?t.tState:t.state)===zt)So(t);else if((e?t.tState:t.state)===bs){let o=Ze;Ze=null,Lt(()=>aa(t,r[0]),!1),Ze=o}}}function Lt(t,e){if(Ze)return t();let r=!1;e||(Ze=[]),rt?r=!0:rt=[],ca++;try{let i=t();return qw(r),i}catch(i){r||(rt=null),Ze=null,da(i)}}function qw(t){if(Ze&&(xo&&z&&z.running?Hw(Ze):up(Ze),Ze=null),t)return;let e;if(z){if(!z.promises.size&&!z.queue.size){let i=z.sources,o=z.disposed;rt.push.apply(rt,z.effects),e=z.resolve;for(let s of rt)"tState"in s&&(s.state=s.tState),delete s.tState;z=null,Lt(()=>{for(let s of o)Gr(s);for(let s of i){if(s.value=s.tValue,s.owned)for(let n=0,a=s.owned.length;n<a;n++)Gr(s.owned[n]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}ep(!1)},!1)}else if(z.running){z.running=!1,z.effects.push.apply(z.effects,rt),rt=null,ep(!0);return}}let r=rt;rt=null,r.length&&Lt(()=>op(r),!1),e&&e()}function up(t){for(let e=0;e<t.length;e++)ys(t[e])}function Hw(t){for(let e=0;e<t.length;e++){let r=t[e],i=z.queue;i.has(r)||(i.add(r),xo(()=>{i.delete(r),Lt(()=>{z.running=!0,ys(r)},!1),z&&(z.running=!1)}))}}function Ww(t){let e,r=0;for(e=0;e<t.length;e++){let i=t[e];i.user?t[r++]=i:ys(i)}if(oe.context){if(oe.count){oe.effects||(oe.effects=[]),oe.effects.push(...t.slice(0,r));return}ki()}for(oe.effects&&(oe.done||!oe.count)&&(t=[...oe.effects,...t],r+=oe.effects.length,delete oe.effects),e=0;e<r;e++)ys(t[e])}function aa(t,e){let r=z&&z.running;r?t.tState=0:t.state=0;for(let i=0;i<t.sources.length;i+=1){let o=t.sources[i];if(o.sources){let s=r?o.tState:o.state;s===zt?o!==e&&(!o.updatedAt||o.updatedAt<ca)&&ys(o):s===bs&&aa(o,e)}}}function dp(t){let e=z&&z.running;for(let r=0;r<t.observers.length;r+=1){let i=t.observers[r];(e?!i.tState:!i.state)&&(e?i.tState=bs:i.state=bs,i.pure?Ze.push(i):rt.push(i),i.observers&&dp(i))}}function Gr(t){let e;if(t.sources)for(;t.sources.length;){let r=t.sources.pop(),i=t.sourceSlots.pop(),o=r.observers;if(o&&o.length){let s=o.pop(),n=r.observerSlots.pop();i<o.length&&(s.sourceSlots[n]=i,o[i]=s,r.observerSlots[i]=n)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Gr(t.tOwned[e]);delete t.tOwned}if(z&&z.running&&t.pure)hp(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)Gr(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}z&&z.running?t.tState=0:t.state=0}function hp(t,e){if(e||(t.tState=0,z.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)hp(t.owned[r])}function wc(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function rp(t,e,r){try{for(let i of e)i(t)}catch(i){da(i,r&&r.owner||null)}}function da(t,e=ue){let r=gs&&e&&e.context&&e.context[gs],i=wc(t);if(!r)throw i;rt?rt.push({fn(){rp(i,r,e)},state:zt}):rp(i,r,e)}function _c(t){if(typeof t=="function"&&!t.length)return _c(t());if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=_c(t[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function Gw(t,e){return function(i){let o;return Ce(()=>o=ft(()=>(ue.context={...ue.context,[t]:i.value},ap(()=>i.children))),void 0),o}}var Kw=Symbol("fallback");function ip(t){for(let e=0;e<t.length;e++)t[e]()}function Zw(t,e,r={}){let i=[],o=[],s=[],n=0,a=e.length>1?[]:null;return ws(()=>ip(s)),()=>{let l=t()||[],c=l.length,d,h;return l[la],ft(()=>{let m,g,b,v,_,w,k,y,S;if(c===0)n!==0&&(ip(s),s=[],i=[],o=[],n=0,a&&(a=[])),r.fallback&&(i=[Kw],o[0]=Si(M=>(s[0]=M,r.fallback())),n=1);else if(n===0){for(o=new Array(c),h=0;h<c;h++)i[h]=l[h],o[h]=Si(f);n=c}else{for(b=new Array(c),v=new Array(c),a&&(_=new Array(c)),w=0,k=Math.min(n,c);w<k&&i[w]===l[w];w++);for(k=n-1,y=c-1;k>=w&&y>=w&&i[k]===l[y];k--,y--)b[y]=o[k],v[y]=s[k],a&&(_[y]=a[k]);for(m=new Map,g=new Array(y+1),h=y;h>=w;h--)S=l[h],d=m.get(S),g[h]=d===void 0?-1:d,m.set(S,h);for(d=w;d<=k;d++)S=i[d],h=m.get(S),h!==void 0&&h!==-1?(b[h]=o[d],v[h]=s[d],a&&(_[h]=a[d]),h=g[h],m.set(S,h)):s[d]();for(h=w;h<c;h++)h in b?(o[h]=b[h],s[h]=v[h],a&&(a[h]=_[h],a[h](h))):o[h]=Si(f);o=o.slice(0,n=c),i=l.slice(0)}return o});function f(m){if(s[h]=m,a){let[g,b]=Fe(h);return a[h]=b,e(l[h],g)}return e(l[h])}}}var Yw=!1;function X(t,e){if(Yw&&oe.context){let r=oe.context;ki(Mw());let i=ft(()=>t(e||{}));return ki(r),i}return ft(()=>t(e||{}))}var pp=t=>`Stale read from <${t}>.`;function Ei(t){let e="fallback"in t&&{fallback:()=>t.fallback};return we(Zw(()=>t.each,t.children,e||void 0))}function xt(t){let e=t.keyed,r=we(()=>t.when,void 0,{equals:(i,o)=>e?i===o:!i==!o});return we(()=>{let i=r();if(i){let o=t.children;return typeof o=="function"&&o.length>0?ft(()=>o(e?i:()=>{if(!ft(r))throw pp("Show");return t.when})):o}return t.fallback},void 0,void 0)}function xc(t){let e=!1,r=(s,n)=>(e?s[1]===n[1]:!s[1]==!n[1])&&s[2]===n[2],i=ap(()=>t.children),o=we(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let n=0;n<s.length;n++){let a=s[n].when;if(a)return e=!!s[n].keyed,[n,a,s[n]]}return[-1]},void 0,{equals:r});return we(()=>{let[s,n,a]=o();if(s<0)return t.fallback;let l=a.children;return typeof l=="function"&&l.length>0?ft(()=>l(e?n:()=>{if(ft(o)[0]!==s)throw pp("Match");return a.when})):l},void 0,void 0)}function ha(t){return t}var sa;function kc(t){let e;oe.context&&oe.load&&(e=oe.load(oe.getContextId()));let[r,i]=Fe(e,void 0);return sa||(sa=new Set),sa.add(i),ws(()=>sa.delete(i)),we(()=>{let o;if(o=r()){let s=t.fallback;return typeof s=="function"&&s.length?ft(()=>s(o,()=>i())):s}return Uw(()=>t.children,i)},void 0,void 0)}var Xw=ko();function Or(t){let e=0,r,i,o,s,n,[a,l]=Fe(!1),c=jw(),d={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},h=J();if(oe.context&&oe.load){let g=oe.getContextId(),b=oe.load(g);if(b&&(typeof b!="object"||b.status!=="success"?o=b:oe.gather(g)),o&&o!=="$$f"){let[v,_]=Fe(void 0,{equals:!1});s=v,o.then(()=>{if(oe.done)return _();oe.gather(g),ki(i),_(),ki()},w=>{n=w,_()})}}let f=Ti(Xw);f&&(r=f.register(d.inFallback));let m;return ws(()=>m&&m()),X(c.Provider,{value:d,get children(){return we(()=>{if(n)throw n;if(i=oe.context,s)return s(),s=void 0;i&&o==="$$f"&&ki();let g=we(()=>t.children);return we(b=>{let v=d.inFallback(),{showContent:_=!0,showFallback:w=!0}=r?r():{};if((!v||o&&o!=="$$f")&&_)return d.resolved=!0,m&&m(),m=i=o=void 0,Vw(d.effects),g();if(w)return m?b:Si(k=>(m=k,i&&(ki({id:i.id+"F",count:0}),i=void 0),t.fallback),h)})})}})}var Jw=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],w5=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Jw]);function Qw(t,e,r){let i=r.length,o=e.length,s=i,n=0,a=0,l=e[o-1].nextSibling,c=null;for(;n<o||a<s;){if(e[n]===r[a]){n++,a++;continue}for(;e[o-1]===r[s-1];)o--,s--;if(o===n){let d=s<i?a?r[a-1].nextSibling:r[s-a]:l;for(;a<s;)t.insertBefore(r[a++],d)}else if(s===a)for(;n<o;)(!c||!c.has(e[n]))&&e[n].remove(),n++;else if(e[n]===r[s-1]&&r[a]===e[o-1]){let d=e[--o].nextSibling;t.insertBefore(r[a++],e[n++].nextSibling),t.insertBefore(r[--s],d),e[o]=r[s]}else{if(!c){c=new Map;let h=a;for(;h<s;)c.set(r[h],h++)}let d=c.get(e[n]);if(d!=null)if(a<d&&d<s){let h=n,f=1,m;for(;++h<o&&h<s&&!((m=c.get(e[h]))==null||m!==d+f);)f++;if(f>d-a){let g=e[n];for(;a<d;)t.insertBefore(r[a++],g)}else t.replaceChild(r[a++],e[n++])}else n++;else e[n++].remove()}}}var fp="_$DX_DELEGATE";function ne(t,e,r){let i,o=()=>{let n=document.createElement("template");return n.innerHTML=t,r?n.content.firstChild.firstChild:n.content.firstChild},s=e?()=>ft(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return s.cloneNode=s,s}function gp(t,e=window.document){let r=e[fp]||(e[fp]=new Set);for(let i=0,o=t.length;i<o;i++){let s=t[i];r.has(s)||(r.add(s),e.addEventListener(s,e_))}}function Cc(t,e,r){Tc(t)||(r==null?t.removeAttribute(e):t.setAttribute(e,r))}function Ae(t,e){Tc(t)||(e==null?t.removeAttribute("class"):t.className=e)}function Ie(t,e,r,i){if(i)Array.isArray(r)?(t[`$$${e}`]=r[0],t[`$$${e}Data`]=r[1]):t[`$$${e}`]=r;else if(Array.isArray(r)){let o=r[0];t.addEventListener(e,r[0]=s=>o.call(t,r[1],s))}else t.addEventListener(e,r,typeof r!="function"&&r)}function bp(t,e,r){if(!e)return r?Cc(t,"style"):e;let i=t.style;if(typeof e=="string")return i.cssText=e;typeof r=="string"&&(i.cssText=r=void 0),r||(r={}),e||(e={});let o,s;for(s in r)e[s]==null&&i.removeProperty(s),delete r[s];for(s in e)o=e[s],o!==r[s]&&(i.setProperty(s,o),r[s]=o);return r}function Q(t,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return pa(t,e,i,r);Ce(o=>pa(t,e(),o,r),i)}function Tc(t){return!!oe.context&&!oe.done&&(!t||t.isConnected)}function e_(t){if(oe.registry&&oe.events&&oe.events.find(([l,c])=>c===t))return;let e=t.target,r=`$$${t.type}`,i=t.target,o=t.currentTarget,s=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),n=()=>{let l=e[r];if(l&&!e.disabled){let c=e[`${r}Data`];if(c!==void 0?l.call(e,c,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&s(e.host),!0},a=()=>{for(;n()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),oe.registry&&!oe.done&&(oe.done=_$HY.done=!0),t.composedPath){let l=t.composedPath();s(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!n());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===o)break}}else a();s(i)}function pa(t,e,r,i,o){let s=Tc(t);if(s){!r&&(r=[...t.childNodes]);let l=[];for(let c=0;c<r.length;c++){let d=r[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)}r=l}for(;typeof r=="function";)r=r();if(e===r)return r;let n=typeof e,a=i!==void 0;if(t=a&&r[0]&&r[0].parentNode||t,n==="string"||n==="number"){if(s||n==="number"&&(e=e.toString(),e===r))return r;if(a){let l=r[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),r=Co(t,r,i,l)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||n==="boolean"){if(s)return r;r=Co(t,r,i)}else{if(n==="function")return Ce(()=>{let l=e();for(;typeof l=="function";)l=l();r=pa(t,l,r,i)}),()=>r;if(Array.isArray(e)){let l=[],c=r&&Array.isArray(r);if(Sc(l,e,r,o))return Ce(()=>r=pa(t,l,r,i,!0)),()=>r;if(s){if(!l.length)return r;if(i===void 0)return r=[...t.childNodes];let d=l[0];if(d.parentNode!==t)return r;let h=[d];for(;(d=d.nextSibling)!==i;)h.push(d);return r=h}if(l.length===0){if(r=Co(t,r,i),a)return r}else c?r.length===0?mp(t,l,i):Qw(t,r,l):(r&&Co(t),mp(t,l));r=l}else if(e.nodeType){if(s&&e.parentNode)return r=a?[e]:e;if(Array.isArray(r)){if(a)return r=Co(t,r,i,e);Co(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function Sc(t,e,r,i){let o=!1;for(let s=0,n=e.length;s<n;s++){let a=e[s],l=r&&r[t.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))o=Sc(t,a,l)||o;else if(c==="function")if(i){for(;typeof a=="function";)a=a();o=Sc(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else t.push(a),o=!0;else{let d=String(a);l&&l.nodeType===3&&l.data===d?t.push(l):t.push(document.createTextNode(d))}}return o}function mp(t,e,r=null){for(let i=0,o=e.length;i<o;i++)t.insertBefore(e[i],r)}function Co(t,e,r,i){if(r===void 0)return t.textContent="";let o=i||document.createTextNode("");if(e.length){let s=!1;for(let n=e.length-1;n>=0;n--){let a=e[n];if(o!==a){let l=a.parentNode===t;!s&&!n?l?t.replaceChild(o,a):t.insertBefore(o,r):l&&a.remove()}else s=!0}}else t.insertBefore(o,r);return[o]}var _5=Symbol();function t_(t){let e=Object.keys(t),r={};for(let i=0;i<e.length;i++){let[o,s]=Fe(t[e[i]]);Object.defineProperty(r,e[i],{get:o,set(n){s(()=>n)}})}return r}function r_(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let e=t.parentNode;for(;e&&!e._$owner&&!(e.assignedSlot&&e.assignedSlot._$owner);)e=e.parentNode;return e&&e.assignedSlot?e.assignedSlot._$owner:t._$owner}function i_(t){return(e,r)=>{let{element:i}=r;return Si(o=>{let s=t_(e);i.addPropertyChangedCallback((a,l)=>s[a]=l),i.addReleaseCallback(()=>{i.renderRoot.textContent="",o()});let n=t(s,r);return Q(i.renderRoot,n)},r_(i))}}function yp(t,e,r){return arguments.length===2&&(r=e,e={}),Xh(t,e)(i_(r))}var ze=bc(Io(),1),Jc=ze.default,gI=ze.default.stringify,bI=ze.default.fromJSON,yI=ze.default.plugin,vI=ze.default.parse,wI=ze.default.list,_I=ze.default.document,xI=ze.default.comment,kI=ze.default.atRule,SI=ze.default.rule,CI=ze.default.decl,TI=ze.default.root,EI=ze.default.CssSyntaxError,AI=ze.default.Declaration,OI=ze.default.Container,$I=ze.default.Processor,II=ze.default.Document,PI=ze.default.Comment,LI=ze.default.Warning,zI=ze.default.AtRule,RI=ze.default.Result,DI=ze.default.Input,MI=ze.default.Rule,NI=ze.default.Root,FI=ze.default.Node;var Po=bc(om(),1),ou=Po.default,KI=Po.default.objectify,ZI=Po.default.parse,YI=Po.default.async,XI=Po.default.sync;var od=bc(yg()),Pi=(...t)=>t.join(" "),ja=class{globalStyles;moduleStyles;styleCounter=0;prefix;theme;constructor(e,r="styler"){this.moduleStyles=new Map,this.globalStyles=new Map,this.prefix=r,this.theme=Object.freeze(e)}generateClassName(e){return`${this.prefix}-${e}-${this.styleCounter++}`}withTheme(e){return()=>e(this.theme)}setGlobals(e){if(this.globalStyles.size)throw new Error("gobalStyles can only be set once");for(let[r,i]of Object.entries(e(this.theme)))this.globalStyles.set(r,i)}css(e){let r={};for(let[i,o]of Object.entries(e)){let s=this.generateClassName(i);this.moduleStyles.set(s,o),r[i]=s}return r}resolveGlobals(){let e={};return this.globalStyles.forEach((i,o)=>{e[o]=i}),Jc([od.default]).process(e,{parser:ou}).css}resolveStyles(){let e=[];return this.moduleStyles.forEach((r,i)=>{let o=typeof r=="function"?r(this.theme):r,s={[`.${i}`]:o},n=Jc([od.default]).process(s,{parser:ou});e.push(n.css)}),e.join(`
`)}},vg=(t,e,r={})=>{let i=new FontFace(t,e,r);document.fonts.add(i)};vg("Playwrite HU","url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",{"font-optical-sizing":"auto","font-weight":"400","font-style":"normal"});var UC={colorPrimary:"var(--gifo-color-primary)",colorOnPrimary:"var(--gifo-color-on-primary)",colorAccent:"var(--gifo-color-accent)",fontSizeLg:"2rem",fontSizeMd:"1.2rem",fontSizeSm:"1.0rem",breakPointSm:"600px",gapMd:"var(--sl-spacing-medium)"},Li=new ja(UC,"gifo");Li.setGlobals(t=>({":root":{"--breakpoint-sm":t.breakPointSm},"::-webkit-scrollbar":{width:"8px",height:"8px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",transition:"background-color 0.2s"},"::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},".scrollable-element":{scrollbarWidth:"thin",scrollbarColor:"rgba(0, 0, 0, 0.5) transparent"},"a, a:hover, a:visited":{textDecoration:"none",color:t.colorOnPrimary},fieldset:{border:"2px solid",borderColor:"var(--gifo-color-primary)",borderRadius:"5px"}}));var it=Li.css.bind(Li),wg=Li.withTheme.bind(Li),_g=()=>[Li.resolveGlobals(),Li.resolveStyles()].join(`
`);var qa="0123456789abcdef",Pr=class t{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new t(e)}static fromFieldsV7(e,r,i,o){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(i)||!Number.isInteger(o)||e<0||r<0||i<0||o<0||e>0xffffffffffff||r>4095||i>1073741823||o>4294967295)throw new RangeError("invalid field value");let s=new Uint8Array(16);return s[0]=e/2**40,s[1]=e/2**32,s[2]=e/2**24,s[3]=e/2**16,s[4]=e/2**8,s[5]=e,s[6]=112|r>>>8,s[7]=r,s[8]=128|i>>>24,s[9]=i>>>16,s[10]=i>>>8,s[11]=i,s[12]=o>>>24,s[13]=o>>>16,s[14]=o>>>8,s[15]=o,new t(s)}static parse(e){var r,i,o,s;let n;switch(e.length){case 32:n=(r=/^[0-9a-f]{32}$/i.exec(e))===null||r===void 0?void 0:r[0];break;case 36:n=(i=/^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||i===void 0?void 0:i.slice(1,6).join("");break;case 38:n=(o=/^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(e))===null||o===void 0?void 0:o.slice(1,6).join("");break;case 45:n=(s=/^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||s===void 0?void 0:s.slice(1,6).join("");break;default:break}if(n){let a=new Uint8Array(16);for(let l=0;l<16;l+=4){let c=parseInt(n.substring(2*l,2*l+8),16);a[l+0]=c>>>24,a[l+1]=c>>>16,a[l+2]=c>>>8,a[l+3]=c}return new t(a)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=qa.charAt(this.bytes[r]>>>4),e+=qa.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toHex(){let e="";for(let r=0;r<this.bytes.length;r++)e+=qa.charAt(this.bytes[r]>>>4),e+=qa.charAt(this.bytes[r]&15);return e}toJSON(){return this.toString()}getVariant(){let e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new t(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){let i=this.bytes[r]-e.bytes[r];if(i!==0)return Math.sign(i)}return 0}},Ha=class{constructor(e){this.timestamp=0,this.counter=0,this.random=e??BC()}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let i=this.generateOrAbortCore(e,r);return i===void 0&&(this.timestamp=0,i=this.generateOrAbortCore(e,r)),i}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>=this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return Pr.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}generateV4(){let e=new Uint8Array(Uint32Array.of(this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32()).buffer);return e[6]=64|e[6]>>>4,e[8]=128|e[8]>>>2,Pr.ofInner(e)}},BC=()=>{if(typeof crypto<"u"&&typeof crypto.getRandomValues<"u")return new sd;if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");return{nextUint32:()=>Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536)}},sd=class{constructor(){this.buffer=new Uint32Array(8),this.cursor=65535}nextUint32(){return this.cursor>=this.buffer.length&&(crypto.getRandomValues(this.buffer),this.cursor=0),this.buffer[this.cursor++]}},Wa;var xg=()=>(Wa||(Wa=new Ha)).generate();var kg=()=>(Wa||(Wa=new Ha)).generateV4();function Sg(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}var Cg=Sg();var VC=Object.defineProperty,jC=(t,e)=>{for(var r in e)VC(t,r,{get:e[r],enumerable:!0})},qC=class{collectable={};listeners={};interceptors;constructor({interceptors:t}={}){this.interceptors=t??{}}subscribe(t,e,r=!1){if(this.listeners[t]||(this.listeners[t]=[]),!this.isSubscribed(t,e)&&(this.listeners[t]?.push(e),r&&this.collectable[t])){let i=this.collectable[t];this.collectable[t]=[];for(let o of i)e(...o)}}subscribeOnce(t,e=!1){return new Promise(r=>{let i=!1,o=(...s)=>{i||(i=!0,this.unSubscribe(t,o),r(s))};this.subscribe(t,o,e)})}unSubscribe(t,e){if(this.listeners[t]){let r=this.listeners[t]?.findIndex(i=>i===e);r&&this.listeners[t]?.splice(r,1)}}isSubscribed(t,e){return!!this.listeners[t]?.includes(e)}async emit(t,e,r=!1){let i=this.interceptors[t],o=i?await i(...e):e;this.listeners[t]?.length===0&&r&&(this.collectable[t]||(this.collectable[t]=[]),this.collectable[t]?.push(e));for(let s of this.listeners[t]??[])s(...o)}reset({collectable:t,listeners:e}){if(Array.isArray(t))for(let r of t)delete this.collectable[r];else typeof t=="string"?delete this.collectable[t]:t!==!1&&(this.collectable={});if(Array.isArray(e))for(let r of e)delete this.listeners[r];else typeof e=="string"?delete this.listeners[e]:e!==!1&&(this.listeners={})}scanListeners(t){let e=Object.keys(this.listeners);return t&&(e=e.filter(t)),e}},gd=class{args=[];constructor(...t){this.args=t}fill(t){return[this,t]}hasDefault(){return this.args.length===1}get default(){return this.args[0]}},HC={};jC(HC,{CborBreak:()=>Za,CborError:()=>zi,CborFillMissing:()=>ub,CborInvalidMajorError:()=>ul,CborNumberError:()=>cd,CborPartialDisabled:()=>cb,CborRangeError:()=>vr,Encoded:()=>bd,Gap:()=>gd,POW_2_53:()=>WC,POW_2_64:()=>ld,PartiallyEncoded:()=>yd,Reader:()=>ud,Tagged:()=>Be,Writer:()=>fn,decode:()=>db,encode:()=>No,infiniteBytes:()=>dd,partiallyEncodeObject:()=>vd});var WC=9007199254740992,ld=BigInt(18446744073709552e3),bd=class{constructor(t){this.encoded=t}},Le=class extends Error{},Jr=class extends Le{name="NoActiveSocket";message="No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"};var lb=class extends Le{name="EngineDisconnected";message="The engine reported the connection to SurrealDB has dropped"},Tg=class extends Le{constructor(t){super(),this.response=t,this.message=`${t}`}name="UnexpectedServerResponse"},GC=class extends Le{constructor(t){super(),this.error=t,this.message=`${t}`}name="UnexpectedConnectionError"},KC=class extends Le{constructor(t){super(),this.engine=t}name="UnsupportedEngine";message="The engine you are trying to connect to is not supported or configured."};var ol=class extends Le{name="ConnectionUnavailable";message="There is no connection available at this moment."},ZC=class extends Le{name="MissingNamespaceDatabase";message="There is no namespace and/or database selected."},YC=class extends Le{constructor(t,e,r,i){super(),this.message=t,this.status=e,this.statusText=r,this.buffer=i}name="HttpConnectionError"},Ue=class extends Le{constructor(t){super(),this.message=t}name="ResponseError"},XC=class extends Le{name="NoNamespaceSpecified";message="Please specify a namespace to use."},JC=class extends Le{name="NoDatabaseSpecified";message="Please specify a database to use."},Eg=class extends Le{name="NoTokenReturned";message="Did not receive an authentication token."},QC=class extends Le{name="UnsupportedVersion";version;supportedRange;constructor(t,e){super(),this.version=t,this.supportedRange=e,this.message=`The version "${t}" reported by the engine is not supported by this library, expected a version that satisfies "${e}".`}},Ag=class extends Le{constructor(t){super(),this.error=t}name="VersionRetrievalFailure";message="Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly."},zi=class extends Le{message;constructor(t){super(),this.message=t}},cd=class extends zi{name="CborNumberError"},vr=class extends zi{name="CborRangeError"},ul=class extends zi{name="CborInvalidMajorError"},Za=class extends zi{name="CborBreak";constructor(){super("Came across a break which was not intercepted by the decoder")}},cb=class extends zi{name="CborPartialDisabled";constructor(){super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled")}},ub=class extends zi{name="CborFillMissing";constructor(){super("Fill for a gap is missing, and gap has no default")}},fn=class{constructor(t=256){this.byteLength=t,this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf)}_chunks=[];_pos=0;_buf;_view;_byte;chunk(t){this._chunks.push([this._buf.slice(0,this._pos),t]),this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._pos=0}get chunks(){return this._chunks}get buffer(){return this._buf.slice(0,this._pos)}claim(t){let e=this._pos;if(this._pos+=t,this._pos<=this._buf.byteLength)return e;let r=this._buf.byteLength<<1;for(;r<this._pos;)r<<=1;if(r>this._buf.byteLength){let i=this._byte;this._buf=new ArrayBuffer(r),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(i)}return e}writeUint8(t){let e=this.claim(1);this._view.setUint8(e,t)}writeUint16(t){let e=this.claim(2);this._view.setUint16(e,t)}writeUint32(t){let e=this.claim(4);this._view.setUint32(e,t)}writeUint64(t){let e=this.claim(8);this._view.setBigUint64(e,t)}writeUint8Array(t){if(t.byteLength===0)return;let e=this.claim(t.byteLength);this._byte.set(t,e)}writeArrayBuffer(t){t.byteLength!==0&&this.writeUint8Array(new Uint8Array(t))}writePartiallyEncoded(t){for(let[e,r]of t.chunks)this.writeArrayBuffer(e),this.chunk(r);this.writeArrayBuffer(t.end)}writeFloat32(t){let e=this.claim(4);this._view.setFloat32(e,t)}writeFloat64(t){let e=this.claim(8);this._view.setFloat64(e,t)}writeMajor(t,e){let r=t<<5;e<24?this.writeUint8(r+Number(e)):e<256?(this.writeUint8(r+24),this.writeUint8(Number(e))):e<65536?(this.writeUint8(r+25),this.writeUint16(Number(e))):e<4294967296?(this.writeUint8(r+26),this.writeUint32(Number(e))):(this.writeUint8(r+27),this.writeUint64(BigInt(e)))}output(t,e){return t?new yd(this._chunks,this.buffer,e):this.buffer}},yd=class{constructor(t,e,r){this.chunks=t,this.end=e,this.replacer=r}build(t,e){let r=new fn,i=new Map(t);for(let[o,s]of this.chunks){let n=i.has(s)||s.hasDefault();if(!e&&!n)throw new ub;if(r.writeArrayBuffer(o),n){let a=i.get(s)??s.default;No(a,{writer:r,replacer:this.replacer})}else r.chunk(s)}return r.writeArrayBuffer(this.end),r.output(!!e,this.replacer)}};function vd(t,e){return Object.fromEntries(Object.entries(t).map(([r,i])=>[r,No(i,{...e,partial:!0})]))}var Be=class{constructor(t,e){this.tag=t,this.value=e}},Og;function No(t,e={}){let r=e.writer??new fn,i=new Map(e.fills??[]);function o(s){let n=e.replacer?e.replacer(s):s;if(n===void 0)return r.writeUint8(247);if(n===null)return r.writeUint8(246);if(n===!0)return r.writeUint8(245);if(n===!1)return r.writeUint8(244);switch(typeof n){case"number":{if(Number.isInteger(n))if(n>=0&&n<=9007199254740992)r.writeMajor(0,n);else if(n<0&&n>=-9007199254740992)r.writeMajor(1,-(n+1));else throw new cd("Number too big to be encoded");else r.writeUint8(251),r.writeFloat64(n);return}case"bigint":{if(n>=0&&n<ld)r.writeMajor(0,n);else if(n<=0&&n>=-ld)r.writeMajor(1,-(n+1n));else throw new cd("BigInt too big to be encoded");return}case"string":{Og??=new TextEncoder;let a=Og.encode(n);r.writeMajor(3,a.byteLength),r.writeUint8Array(a);return}default:{if(Array.isArray(n)){r.writeMajor(4,n.length);for(let l of n)o(l);return}if(n instanceof Be){r.writeMajor(6,n.tag),o(n.value);return}if(n instanceof bd){r.writeArrayBuffer(n.encoded);return}if(n instanceof gd){if(i.has(n))o(i.get(n));else{if(!e.partial)throw new cb;r.chunk(n)}return}if(n instanceof yd){let l=n.build(e.fills??[],e.partial);e.partial?r.writePartiallyEncoded(l):r.writeArrayBuffer(l);return}if(n instanceof Uint8Array||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array||n instanceof Float32Array||n instanceof Float64Array||n instanceof ArrayBuffer){let l=new Uint8Array(n);r.writeMajor(2,l.byteLength),r.writeUint8Array(l);return}let a=n instanceof Map?Array.from(n.entries()):Object.entries(n);r.writeMajor(5,a.length);for(let l of a.flat())o(l)}}}return o(t),r.output(!!e.partial,e.replacer)}var ud=class{_buf;_view;_byte;_pos=0;constructor(t){this._buf=new ArrayBuffer(t.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(new Uint8Array(t))}read(t,e){return this._pos+=t,e}readUint8(){try{return this.read(1,this._view.getUint8(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readUint16(){try{return this.read(2,this._view.getUint16(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readUint32(){try{return this.read(4,this._view.getUint32(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readUint64(){try{return this.read(8,this._view.getBigUint64(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readFloat16(){let t=this.readUint16(),e=(t&32768)>>15,r=(t&31744)>>10,i=t&1023;return r===0?(e?-1:1)*2**-14*(i/2**10):r===31?i?Number.NaN:(e?-1:1)*Number.POSITIVE_INFINITY:(e?-1:1)*2**(r-15)*(1+i/2**10)}readFloat32(){try{return this.read(4,this._view.getFloat32(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readFloat64(){try{return this.read(8,this._view.getFloat64(this._pos))}catch(t){throw t instanceof RangeError?new vr(t.message):t}}readBytes(t){let e=this._byte.length-this._pos;if(e<t)throw new vr(`The argument must be between 0 and ${e}`);return this.read(t,this._byte.slice(this._pos,this._pos+t))}readMajor(){let t=this.readUint8(),e=t>>5;if(e<0||e>7)throw new ul("Received invalid major type");return[e,t&31]}readMajorLength(t){if(t<=23)return t;switch(t){case 24:return this.readUint8();case 25:return this.readUint16();case 26:return this.readUint32();case 27:{let e=this.readUint64();return e>9007199254740992?e:Number(e)}}throw new vr("Expected a final length")}};function dd(t,e){let r=new fn;for(;;){let[i,o]=t.readMajor();if(i===7&&o===31)break;if(i!==e)throw new ul(`Expected a resource of the same major (${e}) while processing an infinite resource`);if(o===31)throw new vr("Expected a finite resource while processing an infinite resource");r.writeUint8Array(t.readBytes(Number(t.readMajorLength(o))))}return r.buffer}var $g;function db(t,e={}){let r=t instanceof ud?t:new ud(t);function i(){let[s,n]=r.readMajor();switch(s){case 0:return r.readMajorLength(n);case 1:{let a=r.readMajorLength(n);return typeof a=="bigint"?-(a+1n):-(a+1)}case 2:return n===31?dd(r,2):r.readBytes(Number(r.readMajorLength(n))).buffer;case 3:{let a=n===31?dd(r,3):r.readBytes(Number(r.readMajorLength(n)));return $g??=new TextDecoder,$g.decode(a)}case 4:{if(n===31){let c=[];for(;;)try{c.push(o())}catch(d){if(d instanceof Za)break;throw d}return c}let a=r.readMajorLength(n),l=Array(a);for(let c=0;c<a;c++)l[c]=o();return l}case 5:{let a=[];if(n===31)for(;;){let l;try{l=o()}catch(d){if(d instanceof Za)break;throw d}let c=o();a.push([l,c])}else{let l=r.readMajorLength(n);for(let c=0;c<l;c++){let d=o(),h=o();a[c]=[d,h]}}return e.map==="map"?new Map(a):Object.fromEntries(a)}case 6:{let a=r.readMajorLength(n),l=o();return new Be(a,l)}case 7:switch(n){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 25:return r.readFloat16();case 26:return r.readFloat32();case 27:return r.readFloat64();case 31:throw new Za}}throw new ul(`Unable to decode value with major tag ${s}`)}function o(){return e.replacer?e.replacer(i()):i()}return o()}function e2(t){let e=Math.floor(t.getTime()/1e3),r=t.getTime()-e*1e3;return[e,r*1e6]}function t2([t,e]){let r=new Date(0);return r.setUTCSeconds(Number(t)),r.setMilliseconds(Math.floor(Number(e)/1e6)),r}var qt=class{},sl=class hb extends qt{decimal;constructor(e){super(),this.decimal=e.toString()}equals(e){return e instanceof hb?this.decimal===e.decimal:!1}toString(){return this.decimal}toJSON(){return this.decimal}},wd=1,Do=wd/1e3,hd=Do/1e3,nl=1e3*wd,al=60*nl,ll=60*al,cl=24*ll,pd=7*cl,_d=new Map([["ns",hd],["\xB5s",Do],["\u03BCs",Do],["us",Do],["ms",wd],["s",nl],["m",al],["h",ll],["d",cl],["w",pd]]),r2=Array.from(_d).reduce((t,[e,r])=>(t.set(r,e),t),new Map),i2=new RegExp(`^(\\d+)(${Array.from(_d.keys()).join("|")})`),Ya=class Rt extends qt{_milliseconds;constructor(e){super(),e instanceof Rt?this._milliseconds=e._milliseconds:typeof e=="string"?this._milliseconds=Rt.parseString(e):this._milliseconds=e}static fromCompact([e,r]){e=e??0,r=r??0;let i=e*1e3+r/1e6;return new Rt(i)}equals(e){return e instanceof Rt?this._milliseconds===e._milliseconds:!1}toCompact(){let e=Math.floor(this._milliseconds/1e3),r=Math.floor((this._milliseconds-e*1e3)*1e6);return r>0?[e,r]:e>0?[e]:[]}toString(){let e=this._milliseconds,r="";function i(o){let s=Math.floor(e/o);return s>0&&(e=e%o),s}for(let[o,s]of Array.from(r2).reverse()){let n=i(o);n>0&&(r+=`${n}${s}`)}return r}toJSON(){return this.toString()}static parseString(e){let r=0,i=e;for(;i!=="";){let o=i.match(i2);if(o){let s=Number.parseInt(o[1]),n=_d.get(o[2]);if(n===void 0)throw new Le(`Invalid duration unit: ${o[2]}`);r+=s*n,i=i.slice(o[0].length);continue}throw new Le("Could not match a next duration part")}return r}static nanoseconds(e){return new Rt(Math.floor(e*hd))}static microseconds(e){return new Rt(Math.floor(e*Do))}static milliseconds(e){return new Rt(e)}static seconds(e){return new Rt(e*nl)}static minutes(e){return new Rt(e*al)}static hours(e){return new Rt(e*ll)}static days(e){return new Rt(e*cl)}static weeks(e){return new Rt(e*pd)}get microseconds(){return Math.floor(this._milliseconds/Do)}get nanoseconds(){return Math.floor(this._milliseconds/hd)}get milliseconds(){return Math.floor(this._milliseconds)}get seconds(){return Math.floor(this._milliseconds/nl)}get minutes(){return Math.floor(this._milliseconds/al)}get hours(){return Math.floor(this._milliseconds/ll)}get days(){return Math.floor(this._milliseconds/cl)}get weeks(){return Math.floor(this._milliseconds/pd)}},fd=class pb extends qt{constructor(e){super(),this.inner=e}equals(e){return e instanceof pb?this.inner===e.inner:!1}toJSON(){return this.toString()}toString(){return`<future> ${this.inner}`}},ti=class fb extends qt{equals(e){return e instanceof fb?this.is(e):!1}toString(){return JSON.stringify(this.toJSON())}};function Ig(t){return t instanceof sl?Number.parseFloat(t.decimal):t}var Pg=class Xa extends ti{point;constructor(e){super(),e instanceof Xa?this.point=e.clone().point:this.point=[Ig(e[0]),Ig(e[1])]}toJSON(){return{type:"Point",coordinates:this.coordinates}}get coordinates(){return this.point}is(e){return e instanceof Xa?this.point[0]===e.point[0]&&this.point[1]===e.point[1]:!1}clone(){return new Xa([...this.point])}},Lg=class Ja extends ti{line;constructor(e){super(),this.line=e instanceof Ja?e.clone().line:e}toJSON(){return{type:"LineString",coordinates:this.coordinates}}get coordinates(){return this.line.map(e=>e.coordinates)}close(){this.line[0].is(this.line.at(-1))||this.line.push(this.line[0])}is(e){if(!(e instanceof Ja)||this.line.length!==e.line.length)return!1;for(let r=0;r<this.line.length;r++)if(!this.line[r].is(e.line[r]))return!1;return!0}clone(){return new Ja(this.line.map(e=>e.clone()))}},zg=class Qa extends ti{polygon;constructor(e){super(),this.polygon=e instanceof Qa?e.clone().polygon:e.map(r=>{let i=r.clone();return i.close(),i})}toJSON(){return{type:"Polygon",coordinates:this.coordinates}}get coordinates(){return this.polygon.map(e=>e.coordinates)}is(e){if(!(e instanceof Qa)||this.polygon.length!==e.polygon.length)return!1;for(let r=0;r<this.polygon.length;r++)if(!this.polygon[r].is(e.polygon[r]))return!1;return!0}clone(){return new Qa(this.polygon.map(e=>e.clone()))}},Rg=class el extends ti{points;constructor(e){super(),this.points=e instanceof el?e.points:e}toJSON(){return{type:"MultiPoint",coordinates:this.coordinates}}get coordinates(){return this.points.map(e=>e.coordinates)}is(e){if(!(e instanceof el)||this.points.length!==e.points.length)return!1;for(let r=0;r<this.points.length;r++)if(!this.points[r].is(e.points[r]))return!1;return!0}clone(){return new el(this.points.map(e=>e.clone()))}},Dg=class tl extends ti{lines;constructor(e){super(),this.lines=e instanceof tl?e.lines:e}toJSON(){return{type:"MultiLineString",coordinates:this.coordinates}}get coordinates(){return this.lines.map(e=>e.coordinates)}is(e){if(!(e instanceof tl)||this.lines.length!==e.lines.length)return!1;for(let r=0;r<this.lines.length;r++)if(!this.lines[r].is(e.lines[r]))return!1;return!0}clone(){return new tl(this.lines.map(e=>e.clone()))}},Mg=class rl extends ti{polygons;constructor(e){super(),this.polygons=e instanceof rl?e.polygons:e}toJSON(){return{type:"MultiPolygon",coordinates:this.coordinates}}get coordinates(){return this.polygons.map(e=>e.coordinates)}is(e){if(!(e instanceof rl)||this.polygons.length!==e.polygons.length)return!1;for(let r=0;r<this.polygons.length;r++)if(!this.polygons[r].is(e.polygons[r]))return!1;return!0}clone(){return new rl(this.polygons.map(e=>e.clone()))}},Ng=class il extends ti{collection;constructor(e){super(),this.collection=e instanceof il?e.collection:e}toJSON(){return{type:"GeometryCollection",geometries:this.geometries}}get geometries(){return this.collection.map(e=>e.toJSON())}is(e){if(!(e instanceof il)||this.collection.length!==e.collection.length)return!1;for(let r=0;r<this.collection.length;r++)if(!this.collection[r].is(e.collection[r]))return!1;return!0}clone(){return new il(this.collection.map(e=>e.clone()))}};function Fo(t,e){if(Object.is(t,e))return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.toString()===e.toString();if(t instanceof qt&&e instanceof qt)return t.equals(e);if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;let r=Reflect.ownKeys(t),i=Reflect.ownKeys(e);if(r.length!==i.length)return!1;for(let o=0;o<r.length;o++)if(!Reflect.has(e,r[o])||!Fo(t[r[o]],e[r[o]]))return!1;return!0}var o2=9223372036854775807n;function xd(t){if(n2(t))return`\u27E8${t}\u27E9`;let e,r,i;for(r=0,i=t.length;r<i;r++)if(e=t.charCodeAt(r),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123)&&e!==95)return`\u27E8${t.replaceAll("\u27E9","\\\u27E9")}\u27E9`;return t}function s2(t){return t<=o2?t.toString():`\u27E8${t}\u27E9`}function n2(t){let e=t.replace("_",""),r=Number.parseInt(e);return!Number.isNaN(r)&&r.toString()===e}var Uo=class dn extends qt{inner;constructor(e){super(),e instanceof ArrayBuffer?this.inner=Pr.ofInner(new Uint8Array(e)):e instanceof Uint8Array?this.inner=Pr.ofInner(e):e instanceof dn?this.inner=e.inner:e instanceof Pr?this.inner=e:this.inner=Pr.parse(e)}equals(e){return e instanceof dn?this.inner.equals(e.inner):!1}toString(){return this.inner.toString()}toJSON(){return this.inner.toString()}toUint8Array(){return this.inner.bytes}toBuffer(){return this.inner.bytes.buffer}static v4(){return new dn(kg())}static v7(){return new dn(xg())}},pn=class mb extends qt{tb;id;constructor(e,r){if(super(),typeof e!="string")throw new Le("TB part is not valid");if(!gb(r))throw new Le("ID part is not valid");this.tb=e,this.id=r}equals(e){return e instanceof mb?this.tb===e.tb&&Fo(this.id,e.id):!1}toJSON(){return this.toString()}toString(){let e=xd(this.tb),r=bb(this.id);return`${e}:${r}`}},kd=class md extends qt{rid;constructor(e){if(super(),e instanceof md)this.rid=e.rid;else if(e instanceof pn)this.rid=e.toString();else if(typeof e=="string")this.rid=e;else throw new Le("String Record ID must be a string")}equals(e){return e instanceof md?this.rid===e.rid:!1}toJSON(){return this.rid}toString(){return this.rid}};function gb(t){if(t instanceof Uo)return!0;switch(typeof t){case"string":case"number":case"bigint":return!0;case"object":return Array.isArray(t)||t!==null;default:return!1}}function bb(t){return t instanceof Uo?`u"${t}"`:typeof t=="string"?xd(t):typeof t=="bigint"||typeof t=="number"?s2(t):ei(t)}var Mo=class yb extends qt{tb;constructor(e){if(super(),typeof e!="string")throw new Le("Table must be a string");this.tb=e}equals(e){return e instanceof yb?this.tb===e.tb:!1}toJSON(){return this.tb}toString(){return this.tb}};function ei(t){if(typeof t=="string")return`s${JSON.stringify(t)}`;if(t===null)return"NULL";if(t===void 0)return"NONE";if(typeof t=="object"){if(t instanceof Date)return`d${JSON.stringify(t.toISOString())}`;if(t instanceof Uo)return`u${JSON.stringify(t.toString())}`;if(t instanceof pn||t instanceof kd)return`r${JSON.stringify(t.toString())}`;if(t instanceof ti)return ei(t.toJSON());if(t instanceof sl||t instanceof Ya||t instanceof fd||t instanceof hn||t instanceof Mo)return t.toJSON();switch(Object.getPrototypeOf(t)){case Object.prototype:{let e="{ ",r=Object.entries(t);for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${ei(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Map.prototype:{let e="{ ",r=Array.from(t.entries());for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${ei(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Array.prototype:return`[ ${t.map(ei).join(", ")} ]`;case Set.prototype:return`[ ${[...new Set([...t].map(ei))].join(", ")} ]`}}return`${t}`}var hn=class vb extends qt{constructor(e,r){super(),this.beg=e,this.end=r}equals(e){return!(e instanceof vb)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:Fo(this.beg?.value,e.beg?.value)&&Fo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Vg(this.beg),r=Vg(this.end);return`${e}${_b(this.beg,this.end)}${r}`}},mn=class{constructor(t){this.value=t}},gn=class{constructor(t){this.value=t}},Fg=class wb extends qt{constructor(e,r,i){if(super(),this.tb=e,this.beg=r,this.end=i,typeof e!="string")throw new Le("TB part is not valid");if(!Ug(r))throw new Le("Beg part is not valid");if(!Ug(i))throw new Le("End part is not valid")}equals(e){return!(e instanceof wb)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:this.tb===e.tb&&Fo(this.beg?.value,e.beg?.value)&&Fo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=xd(this.tb),r=Bg(this.beg),i=Bg(this.end);return`${e}:${r}${_b(this.beg,this.end)}${i}`}};function _b(t,e){let r="";return t instanceof gn&&(r+=">"),r+="..",e instanceof mn&&(r+="="),r}function Ug(t){return t instanceof mn||t instanceof gn?gb(t.value):!0}function Bg(t){return t instanceof mn||t instanceof gn?bb(t.value):""}function Vg(t){if(t===void 0)return"";let e=t.value;return t instanceof hn?`(${ei(e)})`:ei(e)}function jg([t,e]){function r(i){return i instanceof mn?new Be(xb,i.value):i instanceof gn?new Be(kb,i.value):null}return[r(t),r(e)]}function a2(t){function e(r){if(r!==null){if(r.tag===xb)return new mn(r.value);if(r.tag===kb)return new gn(r.value);throw new Le("Invalid bound tag")}}return[e(t[0]),e(t[1])]}var l2=0,qg=37,Hg=6,Wg=7,Ga=8,c2=9,Gg=10,Kg=12,u2=13,Zg=14,Yg=15,nd=49,xb=50,kb=51,Xg=88,Jg=89,Qg=90,eb=91,tb=92,rb=93,ib=94,Bo={encode(t){return t instanceof Date?new Be(Kg,e2(t)):t===void 0?new Be(Hg,null):t instanceof Uo?new Be(qg,t.toBuffer()):t instanceof sl?new Be(Gg,t.toString()):t instanceof Ya?new Be(Zg,t.toCompact()):t instanceof pn?new Be(Ga,[t.tb,t.id]):t instanceof kd?new Be(Ga,t.rid):t instanceof Fg?new Be(Ga,[t.tb,new Be(nd,jg([t.beg,t.end]))]):t instanceof Mo?new Be(Wg,t.tb):t instanceof fd?new Be(Yg,t.inner):t instanceof hn?new Be(nd,jg([t.beg,t.end])):t instanceof Pg?new Be(Xg,t.point):t instanceof Lg?new Be(Jg,t.line):t instanceof zg?new Be(Qg,t.polygon):t instanceof Rg?new Be(eb,t.points):t instanceof Dg?new Be(tb,t.lines):t instanceof Mg?new Be(rb,t.polygons):t instanceof Ng?new Be(ib,t.collection):t},decode(t){if(!(t instanceof Be))return t;switch(t.tag){case l2:return new Date(t.value);case qg:case c2:return new Uo(t.value);case Kg:return t2(t.value);case Hg:return;case Gg:return new sl(t.value);case u2:return new Ya(t.value);case Zg:return Ya.fromCompact(t.value);case Wg:return new Mo(t.value);case Yg:return new fd(t.value);case nd:return new hn(...a2(t.value));case Ga:return t.value[1]instanceof hn?new Fg(t.value[0],t.value[1].beg,t.value[1].end):new pn(t.value[0],t.value[1]);case Xg:return new Pg(t.value);case Jg:return new Lg(t.value);case Qg:return new zg(t.value);case eb:return new Rg(t.value);case tb:return new Dg(t.value);case rb:return new Mg(t.value);case ib:return new Ng(t.value)}}};Object.freeze(Bo);function d2(t){return No(t,{replacer:Bo.encode})}function h2(t){return db(t,{replacer:Bo.decode})}var Ka,p2=class{_query;_bindings;length;constructor(t,e){Ka??=new TextEncoder,this._query=Ka.encode(t),this._bindings=vd(e??{},{replacer:Bo.encode}),this.length=Object.keys(this._bindings).length}get query(){let t=new fn(this._query.byteLength+9);return t.writeMajor(3,this._query.byteLength),t.writeUint8Array(this._query),new bd(t.output(!1))}get bindings(){return this._bindings}build(t){return No([this.query,this.bindings],{fills:t})}append(t,...e){let r=this.length;this.length+=e.length;let i=0,o=new Map,s=e.map((c,d)=>{if(c instanceof gd){let h=o.get(c);if(h!==void 0)return i++,[`bind___${h}`,c];o.set(c,d-i)}return[`bind___${r+d-i}`,c]});for(let[c,d]of s)this._bindings[c]=No(d,{replacer:Bo.encode,partial:!0});let n=t.flatMap((c,d)=>{let h=s[d]?.[0];return[c,...h?[`$${h}`]:[]]}).join("");Ka??=new TextEncoder;let a=new Uint8Array(this._query),l=Ka.encode(n);return this._query=new Uint8Array(a.byteLength+l.byteLength),this._query.set(a),this._query.set(l,a.byteLength),this}};function ob(t){let e={},r=(i,o,s)=>{if(i in t)e[o]=`${t[i]}`,delete e[i];else if(s!==!0)throw new Le(`Key ${i} is missing from the authentication parameters`)};return"scope"in t?(e={...t},r("scope","sc"),r("namespace","ns"),r("database","db")):"variables"in t?(e={...t.variables},r("access","ac"),r("namespace","ns"),r("database","db")):(r("access","ac",!0),r("database","db",!0),r("namespace","ns",!("database"in t)),r("username","user"),r("password","pass")),e}var f2=["CREATE","UPDATE","DELETE"];function m2(t){return!(typeof t!="object"||t===null||!("id"in t&&"action"in t&&"result"in t)||!(t.id instanceof Uo)||!f2.includes(t.action)||typeof t.result!="object"||t.result===null)}var g2=5e3,Sd="1.4.2",Cd="3.0.0",wP=`>= ${Sd} < ${Cd}`;function b2(t,e=Sd,r=Cd){if(!y2(t,e,r))throw new QC(t,`>= ${e} < ${r}`);return!0}function y2(t,e=Sd,r=Cd){return e.localeCompare(t,void 0,{numeric:!0})<=0&&r.localeCompare(t,void 0,{numeric:!0})===1}async function Sb(t,e){let r={"ws:":"http:","wss:":"https:","http:":"http:","https:":"https:"}[t.protocol];if(r){let i=t.pathname.slice(0,-4);t=new URL(t),t.pathname=`${i}/version`,t.protocol=r;let o=new AbortController,s=setTimeout(()=>o.abort(),e??g2),n="surrealdb-";return await fetch(t,{signal:o.signal}).then(a=>a.text()).then(a=>a.slice(n.length)).catch(a=>{throw new Ag(a)}).finally(()=>{clearTimeout(s)})}throw new Ag}var ad=0;function Cb(){return ad=(ad+1)%Number.MAX_SAFE_INTEGER,ad.toString()}var v2=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t.Error="error",t))(v2||{}),w2=class{emitter;encodeCbor;decodeCbor;constructor({emitter:t,encodeCbor:e,decodeCbor:r}){this.emitter=t,this.encodeCbor=e,this.decodeCbor=r}},Tb=class{context;ready;status="disconnected";connection={url:void 0,namespace:void 0,database:void 0,token:void 0};constructor(t){this.context=t}get emitter(){return this.context.emitter}get encodeCbor(){return this.context.encodeCbor}get decodeCbor(){return this.context.decodeCbor}async req_post(t,e,r){let i={"Content-Type":"application/cbor",Accept:"application/cbor",...r};this.connection.namespace&&(i["Surreal-NS"]=this.connection.namespace),this.connection.database&&(i["Surreal-DB"]=this.connection.database),this.connection.token&&(i.Authorization=`Bearer ${this.connection.token}`);let o=await fetch(`${e??this.connection.url}`,{method:"POST",headers:i,body:this.encodeCbor(t)}),s=await o.arrayBuffer();if(o.status===200)return s;let n=new TextDecoder("utf-8");throw new YC(n.decode(s),o.status,o.statusText,s)}};function sb(t,e){if("scope"in t||"access"in t&&"variables"in t&&t.variables){if(!t.namespace){if(!e?.namespace)throw new XC;t.namespace=e.namespace}if(!t.database){if(!e?.database)throw new JC;t.database=e.database}}return t}var _2=new Set(["signin","signup","authenticate","invalidate","version","use","let","unset","query"]),nb=class extends Tb{connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}};setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}version(t,e){return Sb(t,e)}connect(t){return this.setStatus("connecting"),this.connection.url=t,this.setStatus("connected"),this.ready=new Promise(e=>e()),this.ready}disconnect(){return this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}},this.ready=void 0,this.setStatus("disconnected"),new Promise(t=>t())}async rpc(t){if(await this.ready,!this.connection.url)throw new ol;if((!this.connection.namespace||!this.connection.database)&&!_2.has(t.method))throw new ZC;if(t.method==="use"){let[o,s]=t.params;return o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s),{result:!0}}if(t.method==="let"){let[o,s]=t.params;return this.connection.variables[o]=s,{result:!0}}if(t.method==="unset"){let[o]=t.params;return delete this.connection.variables[o],{result:!0}}t.method==="query"&&(t.params=[t.params?.[0],{...this.connection.variables,...t.params?.[1]??{}}]);let e=Cb(),r=await this.req_post({id:e,...t}),i=this.decodeCbor(r);if("result"in i)switch(t.method){case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return this.emitter.emit(`rpc-${e}`,[i]),i}get connected(){return!!this.connection.url}async export(t){if(!this.connection.url)throw new ol;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},ab=class extends Tb{pinger;socket;constructor(t){super(t),this.emitter.subscribe("disconnected",()=>this.pinger?.stop())}setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}async requireStatus(t){return this.status!==t&&await this.emitter.subscribeOnce(t),!0}version(t,e){return Sb(t,e)}async connect(t){this.connection.url=t,this.setStatus("connecting");let e=new Cg(t.toString(),"cbor"),r=new Promise((i,o)=>{e.addEventListener("open",()=>{this.setStatus("connected"),i()}),e.addEventListener("error",s=>{let n=new GC("detail"in s?s.detail:"error"in s?s.error:"An unexpected error occurred");this.setStatus("error",n),o(n)}),e.addEventListener("close",()=>{this.setStatus("disconnected")}),e.addEventListener("message",async({data:s})=>{try{let n=this.decodeCbor(s instanceof ArrayBuffer?s:s instanceof Blob?await s.arrayBuffer():s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength));if(typeof n=="object"&&n!=null&&Object.getPrototypeOf(n)===Object.prototype)this.handleRpcResponse(n);else throw new Tg(n)}catch(n){e.dispatchEvent(new CustomEvent("error",{detail:n}))}})});return this.ready=r,await r.then(()=>{this.socket=e,this.pinger?.stop(),this.pinger=new x2(3e4),this.pinger.start(()=>this.rpc({method:"ping"}))})}async disconnect(){this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0},await this.ready?.catch(()=>{}),this.socket?.close(),this.ready=void 0,this.socket=void 0,await Promise.any([this.requireStatus("disconnected"),this.requireStatus("error")])}async rpc(t){if(await this.ready,!this.socket)throw new ol;let e=Cb(),r=this.emitter.subscribeOnce(`rpc-${e}`);this.socket.send(this.encodeCbor({id:e,...t}));let[i]=await r;if(i instanceof lb)throw i;if("result"in i)switch(t.method){case"use":{let[o,s]=t.params;o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s);break}case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return i}handleRpcResponse({id:t,...e}){if(t)this.emitter.emit(`rpc-${t}`,[e]);else if(e.error)this.setStatus("error",new Ue(e.error));else if(m2(e.result)){let{id:r,action:i,result:o}=e.result;this.emitter.emit(`live-${r}`,[i,o],!0)}else this.setStatus("error",new Tg({id:t,...e}))}get connected(){return!!this.socket}async export(t){if(!this.connection.url)throw new ol;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.protocol=e.protocol.replace("ws","http"),e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},x2=class{pinger;interval;constructor(t=3e4){this.interval=t}start(t){this.pinger=setInterval(t,this.interval)}stop(){clearInterval(this.pinger)}},Eb=class{connection;ready;emitter;engines={ws:ab,wss:ab,http:nb,https:nb};constructor({engines:t}={}){this.emitter=new qC,this.emitter.subscribe("disconnected",()=>this.clean()),this.emitter.subscribe("error",()=>this.close()),t&&(this.engines={...this.engines,...t})}async connect(t,e={}){t=new URL(t),t.pathname.endsWith("/rpc")||(t.pathname.endsWith("/")||(t.pathname+="/"),t.pathname+="rpc");let r=t.protocol.slice(0,-1),i=this.engines[r];if(!i)throw new KC(r);let{prepare:o,auth:s,namespace:n,database:a}=e;await this.close();let l=new w2({emitter:this.emitter,encodeCbor:d2,decodeCbor:h2}),c=new i(l);if(e.versionCheck!==!1){let d=await c.version(t,e.versionCheckTimeout);b2(d)}return this.connection=c,this.ready=new Promise((d,h)=>c.connect(t).then(async()=>{(n||a)&&await this.use({namespace:n,database:a}),typeof s=="string"?await this.authenticate(s):s&&await this.signin(s),await o?.(this),d()}).catch(h)),await this.ready,!0}async close(){return this.clean(),await this.connection?.disconnect(),!0}clean(){let t=this.emitter.scanListeners(r=>r.startsWith("rpc-"));t.map(r=>this.emitter.emit(r,[new lb]));let e=this.emitter.scanListeners(r=>r.startsWith("live-"));e.map(r=>this.emitter.emit(r,["CLOSE","disconnected"])),this.emitter.reset({collectable:!0,listeners:[...t,...e]})}get status(){return this.connection?.status??"disconnected"}async ping(){let{error:t}=await this.rpc("ping");if(t)throw new Ue(t.message);return!0}async use({namespace:t,database:e}){if(!this.connection)throw new Jr;if(t===null&&e!==null)throw new Le("Cannot unset namespace without unsetting database");let{error:r}=await this.rpc("use",[t,e]);if(r)throw new Ue(r.message);return!0}async info(){await this.ready;let t=await this.rpc("info");if(t.error)throw new Ue(t.error.message);return t.result??void 0}async signup(t){if(!this.connection)throw new Jr;let e=sb(t,this.connection.connection),r=ob(e),i=await this.rpc("signup",[r]);if(i.error)throw new Ue(i.error.message);if(!i.result)throw new Eg;return i.result}async signin(t){if(!this.connection)throw new Jr;let e=sb(t,this.connection.connection),r=ob(e),i=await this.rpc("signin",[r]);if(i.error)throw new Ue(i.error.message);if(!i.result)throw new Eg;return i.result}async authenticate(t){let e=await this.rpc("authenticate",[t]);if(e.error)throw new Ue(e.error.message);return!0}async invalidate(){let t=await this.rpc("invalidate");if(t.error)throw new Ue(t.error.message);return!0}async let(t,e){let r=await this.rpc("let",[t,e]);if(r.error)throw new Ue(r.error.message);return!0}async unset(t){let e=await this.rpc("unset",[t]);if(e.error)throw new Ue(e.error.message);return!0}async live(t,e,r){await this.ready;let i=await this.rpc("live",[t,r]);if(i.error)throw new Ue(i.error.message);return e&&this.subscribeLive(i.result,e),i.result}async subscribeLive(t,e){if(await this.ready,!this.connection)throw new Jr;this.connection.emitter.subscribe(`live-${t}`,e,!0)}async unSubscribeLive(t,e){if(await this.ready,!this.connection)throw new Jr;this.connection.emitter.unSubscribe(`live-${t}`,e)}async kill(t){if(await this.ready,!this.connection)throw new Jr;if(Array.isArray(t)){await Promise.all(t.map(r=>this.rpc("kill",[r])));let e=t.map(r=>`live-${r}`);e.map(r=>this.emitter.emit(r,["CLOSE","killed"])),this.connection.emitter.reset({collectable:e,listeners:e})}else await this.rpc("kill",[t]),this.emitter.emit(`live-${t}`,["CLOSE","killed"]),this.connection.emitter.reset({collectable:`live-${t}`,listeners:`live-${t}`})}async query(...t){return(await this.queryRaw(...t)).map(({status:e,result:r})=>{if(e==="ERR")throw new Ue(r);return r})}async queryRaw(...[t,e]){let r=t instanceof p2?[t.query,vd(t.bindings,{fills:e,replacer:Bo.encode})]:[t,e];await this.ready;let i=await this.rpc("query",r);if(i.error)throw new Ue(i.error.message);return i.result}async query_raw(...t){return this.queryRaw(...t)}async select(t){await this.ready;let e=await this.rpc("select",[t]);if(e.error)throw new Ue(e.error.message);return Qr(t,e.result)}async create(t,e){await this.ready;let r=await this.rpc("create",[t,e]);if(r.error)throw new Ue(r.error.message);return Qr(t,r.result)}async insert(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Mo?[t,e]:[void 0,t],o=await this.rpc("insert",[r,i]);if(o.error)throw new Ue(o.error.message);return o.result}async insertRelation(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Mo?[t,e]:[void 0,t],o=await this.rpc("insert_relation",[r,i]);if(o.error)throw new Ue(o.error.message);return o.result}async insert_relation(t,e){return t instanceof Mo||typeof t=="string"?this.insertRelation(t,e):this.insertRelation(t)}async update(t,e){await this.ready;let r=await this.rpc("update",[t,e]);if(r.error)throw new Ue(r.error.message);return Qr(t,r.result)}async upsert(t,e){await this.ready;let r=await this.rpc("upsert",[t,e]);if(r.error)throw new Ue(r.error.message);return Qr(t,r.result)}async merge(t,e){await this.ready;let r=await this.rpc("merge",[t,e]);if(r.error)throw new Ue(r.error.message);return Qr(t,r.result)}async patch(t,e,r){await this.ready;let i=await this.rpc("patch",[t,e,r]);if(i.error)throw new Ue(i.error.message);return r?i.result:Qr(t,i.result)}async delete(t){await this.ready;let e=await this.rpc("delete",[t]);if(e.error)throw new Ue(e.error.message);return Qr(t,e.result)}async version(){await this.ready;let t=await this.rpc("version");if(t.error)throw new Ue(t.error.message);return t.result}async run(t,e,r){await this.ready;let[i,o]=Array.isArray(e)?[void 0,e]:[e,r],s=await this.rpc("run",[t,i,o]);if(s.error)throw new Ue(s.error.message);return s.result}async relate(t,e,r,i){await this.ready;let o=await this.rpc("relate",[t,e,r,i]);if(o.error)throw new Ue(o.error.message);return Qr(e,o.result)}rpc(t,e){if(!this.connection)throw new Jr;return this.connection.rpc({method:t,params:e})}async export(t){if(await this.ready,!this.connection)throw new Jr;return this.connection.export(t)}};function Qr(t,e){return t instanceof pn||t instanceof kd?Array.isArray(e)?e[0]:e:Array.isArray(e)?e:[e]}var ge;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function r(o){throw new Error}t.assertNever=r,t.arrayToEnum=o=>{let s={};for(let n of o)s[n]=n;return s},t.getValidEnumValues=o=>{let s=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),n={};for(let a of s)n[a]=o[a];return t.objectValues(n)},t.objectValues=o=>t.objectKeys(o).map(function(s){return o[s]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let s=[];for(let n in o)Object.prototype.hasOwnProperty.call(o,n)&&s.push(n);return s},t.find=(o,s)=>{for(let n of o)if(s(n))return n},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,s=" | "){return o.map(n=>typeof n=="string"?`'${n}'`:n).join(s)}t.joinValues=i,t.jsonStringifyReplacer=(o,s)=>typeof s=="bigint"?s.toString():s})(ge||(ge={}));var Ed;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(Ed||(Ed={}));var q=ge.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=t=>{switch(typeof t){case"undefined":return q.undefined;case"string":return q.string;case"number":return isNaN(t)?q.nan:q.number;case"boolean":return q.boolean;case"function":return q.function;case"bigint":return q.bigint;case"symbol":return q.symbol;case"object":return Array.isArray(t)?q.array:t===null?q.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?q.promise:typeof Map<"u"&&t instanceof Map?q.map:typeof Set<"u"&&t instanceof Set?q.set:typeof Date<"u"&&t instanceof Date?q.date:q.object;default:return q.unknown}},$=ge.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),k2=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),Dt=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){let r=e||function(s){return s.message},i={_errors:[]},o=s=>{for(let n of s.issues)if(n.code==="invalid_union")n.unionErrors.map(o);else if(n.code==="invalid_return_type")o(n.returnTypeError);else if(n.code==="invalid_arguments")o(n.argumentsError);else if(n.path.length===0)i._errors.push(r(n));else{let a=i,l=0;for(;l<n.path.length;){let c=n.path[l];l===n.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(r(n))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),i}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ge.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){let r={},i=[];for(let o of this.issues)o.path.length>0?(r[o.path[0]]=r[o.path[0]]||[],r[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}};Dt.create=t=>new Dt(t);var qo=(t,e)=>{let r;switch(t.code){case $.invalid_type:t.received===q.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case $.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,ge.jsonStringifyReplacer)}`;break;case $.unrecognized_keys:r=`Unrecognized key(s) in object: ${ge.joinValues(t.keys,", ")}`;break;case $.invalid_union:r="Invalid input";break;case $.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ge.joinValues(t.options)}`;break;case $.invalid_enum_value:r=`Invalid enum value. Expected ${ge.joinValues(t.options)}, received '${t.received}'`;break;case $.invalid_arguments:r="Invalid function arguments";break;case $.invalid_return_type:r="Invalid function return type";break;case $.invalid_date:r="Invalid date";break;case $.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:ge.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case $.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case $.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case $.custom:r="Invalid input";break;case $.invalid_intersection_types:r="Intersection results could not be merged";break;case $.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case $.not_finite:r="Number must be finite";break;default:r=e.defaultError,ge.assertNever(t)}return{message:r}},$b=qo;function S2(t){$b=t}function dl(){return $b}var hl=t=>{let{data:e,path:r,errorMaps:i,issueData:o}=t,s=[...r,...o.path||[]],n={...o,path:s};if(o.message!==void 0)return{...o,path:s,message:o.message};let a="",l=i.filter(c=>!!c).slice().reverse();for(let c of l)a=c(n,{data:e,defaultError:a}).message;return{...o,path:s,message:a}},C2=[];function U(t,e){let r=dl(),i=hl({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===qo?void 0:qo].filter(o=>!!o)});t.common.issues.push(i)}var mt=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let i=[];for(let o of r){if(o.status==="aborted")return re;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){let i=[];for(let o of r){let s=await o.key,n=await o.value;i.push({key:s,value:n})}return t.mergeObjectSync(e,i)}static mergeObjectSync(e,r){let i={};for(let o of r){let{key:s,value:n}=o;if(s.status==="aborted"||n.status==="aborted")return re;s.status==="dirty"&&e.dirty(),n.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof n.value<"u"||o.alwaysSet)&&(i[s.value]=n.value)}return{status:e.value,value:i}}},re=Object.freeze({status:"aborted"}),jo=t=>({status:"dirty",value:t}),bt=t=>({status:"valid",value:t}),Ad=t=>t.status==="aborted",Od=t=>t.status==="dirty",Ri=t=>t.status==="valid",vn=t=>typeof Promise<"u"&&t instanceof Promise;function pl(t,e,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(t):i?i.value:e.get(t)}function Ib(t,e,r,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(t,r):o?o.value=r:e.set(t,r),r}var Z;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(Z||(Z={}));var bn,yn,Wt=class{constructor(e,r,i,o){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Ab=(t,e)=>{if(Ri(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new Dt(t.common.issues);return this._error=r,this._error}}};function ae(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:i,description:o}=t;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(n,a)=>{var l,c;let{message:d}=t;return n.code==="invalid_enum_value"?{message:d??a.defaultError}:typeof a.data>"u"?{message:(l=d??i)!==null&&l!==void 0?l:a.defaultError}:n.code!=="invalid_type"?{message:a.defaultError}:{message:(c=d??r)!==null&&c!==void 0?c:a.defaultError}},description:o}}var le=class{get description(){return this._def.description}_getType(e){return zr(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:zr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mt,ctx:{common:e.parent.common,data:e.data,parsedType:zr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if(vn(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){var i;let o={common:{issues:[],async:(i=r?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:zr(e)},s=this._parseSync({data:e,path:o.path,parent:o});return Ab(o,s)}"~validate"(e){var r,i;let o={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:zr(e)};if(!this["~standard"].async)try{let s=this._parseSync({data:e,path:[],parent:o});return Ri(s)?{value:s.value}:{issues:o.common.issues}}catch(s){!((i=(r=s?.message)===null||r===void 0?void 0:r.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),o.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:o}).then(s=>Ri(s)?{value:s.value}:{issues:o.common.issues})}async parseAsync(e,r){let i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){let i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:zr(e)},o=this._parse({data:e,path:i.path,parent:i}),s=await(vn(o)?o:Promise.resolve(o));return Ab(i,s)}refine(e,r){let i=o=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(o):r;return this._refinement((o,s)=>{let n=e(o),a=()=>s.addIssue({code:$.custom,...i(o)});return typeof Promise<"u"&&n instanceof Promise?n.then(l=>l?!0:(a(),!1)):n?!0:(a(),!1)})}refinement(e,r){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof r=="function"?r(i,o):r),!1))}_refinement(e){return new Mt({schema:this,typeName:te.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Ht.create(this,this._def)}nullable(){return _r.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Dr.create(this)}promise(){return oi.create(this,this._def)}or(e){return Vi.create([this,e],this._def)}and(e){return ji.create(this,e,this._def)}transform(e){return new Mt({...ae(this._def),schema:this,typeName:te.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let r=typeof e=="function"?e:()=>e;return new Ki({...ae(this._def),innerType:this,defaultValue:r,typeName:te.ZodDefault})}brand(){return new wn({typeName:te.ZodBranded,type:this,...ae(this._def)})}catch(e){let r=typeof e=="function"?e:()=>e;return new Zi({...ae(this._def),innerType:this,catchValue:r,typeName:te.ZodCatch})}describe(e){let r=this.constructor;return new r({...this._def,description:e})}pipe(e){return _n.create(this,e)}readonly(){return Yi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},T2=/^c[^\s-]{8,}$/i,E2=/^[0-9a-z]+$/,A2=/^[0-9A-HJKMNP-TV-Z]{26}$/i,O2=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,$2=/^[a-z0-9_-]{21}$/i,I2=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,P2=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,L2=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,z2="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Td,R2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,D2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,M2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,N2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,F2=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,U2=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Pb="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",B2=new RegExp(`^${Pb}$`);function Lb(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function V2(t){return new RegExp(`^${Lb(t)}$`)}function zb(t){let e=`${Pb}T${Lb(t)}`,r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function j2(t,e){return!!((e==="v4"||!e)&&R2.test(t)||(e==="v6"||!e)&&M2.test(t))}function q2(t,e){if(!I2.test(t))return!1;try{let[r]=t.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),o=JSON.parse(atob(i));return!(typeof o!="object"||o===null||!o.typ||!o.alg||e&&o.alg!==e)}catch{return!1}}function H2(t,e){return!!((e==="v4"||!e)&&D2.test(t)||(e==="v6"||!e)&&N2.test(t))}var ri=class t extends le{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==q.string){let s=this._getOrReturnCtx(e);return U(s,{code:$.invalid_type,expected:q.string,received:s.parsedType}),re}let i=new mt,o;for(let s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:$.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:$.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){let n=e.data.length>s.value,a=e.data.length<s.value;(n||a)&&(o=this._getOrReturnCtx(e,o),n?U(o,{code:$.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&U(o,{code:$.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")L2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"email",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Td||(Td=new RegExp(z2,"u")),Td.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"emoji",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")O2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"uuid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")$2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"nanoid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")T2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")E2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid2",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")A2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ulid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),U(o,{validation:"url",code:$.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"regex",code:$.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?zb(s).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?B2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?V2(s).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:$.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?P2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"duration",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?j2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ip",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="jwt"?q2(e.data,s.alg)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"jwt",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="cidr"?H2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cidr",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?F2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"base64",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="base64url"?U2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"base64url",code:$.invalid_string,message:s.message}),i.dirty()):ge.assertNever(s);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(o=>e.test(o),{validation:r,code:$.invalid_string,...Z.errToObj(i)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Z.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Z.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Z.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Z.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Z.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Z.errToObj(e)})}datetime(e){var r,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...Z.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Z.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Z.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...Z.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...Z.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...Z.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...Z.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...Z.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...Z.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...Z.errToObj(r)})}nonempty(e){return this.min(1,Z.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};ri.create=t=>{var e;return new ri({checks:[],typeName:te.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};function W2(t,e){let r=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=r>i?r:i,s=parseInt(t.toFixed(o).replace(".","")),n=parseInt(e.toFixed(o).replace(".",""));return s%n/Math.pow(10,o)}var Di=class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==q.number){let s=this._getOrReturnCtx(e);return U(s,{code:$.invalid_type,expected:q.number,received:s.parsedType}),re}let i,o=new mt;for(let s of this._def.checks)s.kind==="int"?ge.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),U(i,{code:$.invalid_type,expected:"integer",received:"float",message:s.message}),o.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="multipleOf"?W2(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),U(i,{code:$.not_finite,message:s.message}),o.dirty()):ge.assertNever(s);return{status:o.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,Z.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Z.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Z.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Z.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Z.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Z.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:Z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Z.toString(e)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ge.isInteger(e.value))}get isFinite(){let e=null,r=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}};Di.create=t=>new Di({checks:[],typeName:te.ZodNumber,coerce:t?.coerce||!1,...ae(t)});var Mi=class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==q.bigint)return this._getInvalidInput(e);let i,o=new mt;for(let s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),U(i,{code:$.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):ge.assertNever(s);return{status:o.value,value:e.data}}_getInvalidInput(e){let r=this._getOrReturnCtx(e);return U(r,{code:$.invalid_type,expected:q.bigint,received:r.parsedType}),re}gte(e,r){return this.setLimit("min",e,!0,Z.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Z.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Z.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Z.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Z.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(r)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};Mi.create=t=>{var e;return new Mi({checks:[],typeName:te.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};var Ni=class extends le{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==q.boolean){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.boolean,received:i.parsedType}),re}return bt(e.data)}};Ni.create=t=>new Ni({typeName:te.ZodBoolean,coerce:t?.coerce||!1,...ae(t)});var Fi=class t extends le{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==q.date){let s=this._getOrReturnCtx(e);return U(s,{code:$.invalid_type,expected:q.date,received:s.parsedType}),re}if(isNaN(e.data.getTime())){let s=this._getOrReturnCtx(e);return U(s,{code:$.invalid_date}),re}let i=new mt,o;for(let s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:$.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:$.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):ge.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:Z.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:Z.toString(r)})}get minDate(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}};Fi.create=t=>new Fi({checks:[],coerce:t?.coerce||!1,typeName:te.ZodDate,...ae(t)});var Ho=class extends le{_parse(e){if(this._getType(e)!==q.symbol){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.symbol,received:i.parsedType}),re}return bt(e.data)}};Ho.create=t=>new Ho({typeName:te.ZodSymbol,...ae(t)});var Ui=class extends le{_parse(e){if(this._getType(e)!==q.undefined){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.undefined,received:i.parsedType}),re}return bt(e.data)}};Ui.create=t=>new Ui({typeName:te.ZodUndefined,...ae(t)});var Bi=class extends le{_parse(e){if(this._getType(e)!==q.null){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.null,received:i.parsedType}),re}return bt(e.data)}};Bi.create=t=>new Bi({typeName:te.ZodNull,...ae(t)});var ii=class extends le{constructor(){super(...arguments),this._any=!0}_parse(e){return bt(e.data)}};ii.create=t=>new ii({typeName:te.ZodAny,...ae(t)});var Rr=class extends le{constructor(){super(...arguments),this._unknown=!0}_parse(e){return bt(e.data)}};Rr.create=t=>new Rr({typeName:te.ZodUnknown,...ae(t)});var ar=class extends le{_parse(e){let r=this._getOrReturnCtx(e);return U(r,{code:$.invalid_type,expected:q.never,received:r.parsedType}),re}};ar.create=t=>new ar({typeName:te.ZodNever,...ae(t)});var Wo=class extends le{_parse(e){if(this._getType(e)!==q.undefined){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.void,received:i.parsedType}),re}return bt(e.data)}};Wo.create=t=>new Wo({typeName:te.ZodVoid,...ae(t)});var Dr=class t extends le{_parse(e){let{ctx:r,status:i}=this._processInputParams(e),o=this._def;if(r.parsedType!==q.array)return U(r,{code:$.invalid_type,expected:q.array,received:r.parsedType}),re;if(o.exactLength!==null){let n=r.data.length>o.exactLength.value,a=r.data.length<o.exactLength.value;(n||a)&&(U(r,{code:n?$.too_big:$.too_small,minimum:a?o.exactLength.value:void 0,maximum:n?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&r.data.length<o.minLength.value&&(U(r,{code:$.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&r.data.length>o.maxLength.value&&(U(r,{code:$.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((n,a)=>o.type._parseAsync(new Wt(r,n,r.path,a)))).then(n=>mt.mergeArray(i,n));let s=[...r.data].map((n,a)=>o.type._parseSync(new Wt(r,n,r.path,a)));return mt.mergeArray(i,s)}get element(){return this._def.type}min(e,r){return new t({...this._def,minLength:{value:e,message:Z.toString(r)}})}max(e,r){return new t({...this._def,maxLength:{value:e,message:Z.toString(r)}})}length(e,r){return new t({...this._def,exactLength:{value:e,message:Z.toString(r)}})}nonempty(e){return this.min(1,e)}};Dr.create=(t,e)=>new Dr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:te.ZodArray,...ae(e)});function Vo(t){if(t instanceof St){let e={};for(let r in t.shape){let i=t.shape[r];e[r]=Ht.create(Vo(i))}return new St({...t._def,shape:()=>e})}else return t instanceof Dr?new Dr({...t._def,type:Vo(t.element)}):t instanceof Ht?Ht.create(Vo(t.unwrap())):t instanceof _r?_r.create(Vo(t.unwrap())):t instanceof wr?wr.create(t.items.map(e=>Vo(e))):t}var St=class t extends le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),r=ge.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==q.object){let c=this._getOrReturnCtx(e);return U(c,{code:$.invalid_type,expected:q.object,received:c.parsedType}),re}let{status:i,ctx:o}=this._processInputParams(e),{shape:s,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof ar&&this._def.unknownKeys==="strip"))for(let c in o.data)n.includes(c)||a.push(c);let l=[];for(let c of n){let d=s[c],h=o.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new Wt(o,h,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof ar){let c=this._def.unknownKeys;if(c==="passthrough")for(let d of a)l.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(c==="strict")a.length>0&&(U(o,{code:$.unrecognized_keys,keys:a}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let d of a){let h=o.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new Wt(o,h,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let c=[];for(let d of l){let h=await d.key,f=await d.value;c.push({key:h,value:f,alwaysSet:d.alwaysSet})}return c}).then(c=>mt.mergeObjectSync(i,c)):mt.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return Z.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{var o,s,n,a;let l=(n=(s=(o=this._def).errorMap)===null||s===void 0?void 0:s.call(o,r,i).message)!==null&&n!==void 0?n:i.defaultError;return r.code==="unrecognized_keys"?{message:(a=Z.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:te.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let r={};return ge.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}omit(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{e[i]||(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}deepPartial(){return Vo(this)}partial(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{let o=this.shape[i];e&&!e[i]?r[i]=o:r[i]=o.optional()}),new t({...this._def,shape:()=>r})}required(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])r[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Ht;)s=s._def.innerType;r[i]=s}}),new t({...this._def,shape:()=>r})}keyof(){return Rb(ge.objectKeys(this.shape))}};St.create=(t,e)=>new St({shape:()=>t,unknownKeys:"strip",catchall:ar.create(),typeName:te.ZodObject,...ae(e)});St.strictCreate=(t,e)=>new St({shape:()=>t,unknownKeys:"strict",catchall:ar.create(),typeName:te.ZodObject,...ae(e)});St.lazycreate=(t,e)=>new St({shape:t,unknownKeys:"strip",catchall:ar.create(),typeName:te.ZodObject,...ae(e)});var Vi=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=this._def.options;function o(s){for(let a of s)if(a.result.status==="valid")return a.result;for(let a of s)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;let n=s.map(a=>new Dt(a.ctx.common.issues));return U(r,{code:$.invalid_union,unionErrors:n}),re}if(r.common.async)return Promise.all(i.map(async s=>{let n={...r,common:{...r.common,issues:[]},parent:null};return{result:await s._parseAsync({data:r.data,path:r.path,parent:n}),ctx:n}})).then(o);{let s,n=[];for(let l of i){let c={...r,common:{...r.common,issues:[]},parent:null},d=l._parseSync({data:r.data,path:r.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:c}),c.common.issues.length&&n.push(c.common.issues)}if(s)return r.common.issues.push(...s.ctx.common.issues),s.result;let a=n.map(l=>new Dt(l));return U(r,{code:$.invalid_union,unionErrors:a}),re}}get options(){return this._def.options}};Vi.create=(t,e)=>new Vi({options:t,typeName:te.ZodUnion,...ae(e)});var Lr=t=>t instanceof qi?Lr(t.schema):t instanceof Mt?Lr(t.innerType()):t instanceof Hi?[t.value]:t instanceof Wi?t.options:t instanceof Gi?ge.objectValues(t.enum):t instanceof Ki?Lr(t._def.innerType):t instanceof Ui?[void 0]:t instanceof Bi?[null]:t instanceof Ht?[void 0,...Lr(t.unwrap())]:t instanceof _r?[null,...Lr(t.unwrap())]:t instanceof wn||t instanceof Yi?Lr(t.unwrap()):t instanceof Zi?Lr(t._def.innerType):[],fl=class t extends le{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.object)return U(r,{code:$.invalid_type,expected:q.object,received:r.parsedType}),re;let i=this.discriminator,o=r.data[i],s=this.optionsMap.get(o);return s?r.common.async?s._parseAsync({data:r.data,path:r.path,parent:r}):s._parseSync({data:r.data,path:r.path,parent:r}):(U(r,{code:$.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,i){let o=new Map;for(let s of r){let n=Lr(s.shape[e]);if(!n.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of n){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,s)}}return new t({typeName:te.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:o,...ae(i)})}};function $d(t,e){let r=zr(t),i=zr(e);if(t===e)return{valid:!0,data:t};if(r===q.object&&i===q.object){let o=ge.objectKeys(e),s=ge.objectKeys(t).filter(a=>o.indexOf(a)!==-1),n={...t,...e};for(let a of s){let l=$d(t[a],e[a]);if(!l.valid)return{valid:!1};n[a]=l.data}return{valid:!0,data:n}}else if(r===q.array&&i===q.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let s=0;s<t.length;s++){let n=t[s],a=e[s],l=$d(n,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return r===q.date&&i===q.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var ji=class extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=(s,n)=>{if(Ad(s)||Ad(n))return re;let a=$d(s.value,n.value);return a.valid?((Od(s)||Od(n))&&r.dirty(),{status:r.value,value:a.data}):(U(i,{code:$.invalid_intersection_types}),re)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,n])=>o(s,n)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}};ji.create=(t,e,r)=>new ji({left:t,right:e,typeName:te.ZodIntersection,...ae(r)});var wr=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.array)return U(i,{code:$.invalid_type,expected:q.array,received:i.parsedType}),re;if(i.data.length<this._def.items.length)return U(i,{code:$.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),re;!this._def.rest&&i.data.length>this._def.items.length&&(U(i,{code:$.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());let s=[...i.data].map((n,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new Wt(i,n,i.path,a)):null}).filter(n=>!!n);return i.common.async?Promise.all(s).then(n=>mt.mergeArray(r,n)):mt.mergeArray(r,s)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};wr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new wr({items:t,typeName:te.ZodTuple,rest:null,...ae(e)})};var ml=class t extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.object)return U(i,{code:$.invalid_type,expected:q.object,received:i.parsedType}),re;let o=[],s=this._def.keyType,n=this._def.valueType;for(let a in i.data)o.push({key:s._parse(new Wt(i,a,i.path,a)),value:n._parse(new Wt(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?mt.mergeObjectAsync(r,o):mt.mergeObjectSync(r,o)}get element(){return this._def.valueType}static create(e,r,i){return r instanceof le?new t({keyType:e,valueType:r,typeName:te.ZodRecord,...ae(i)}):new t({keyType:ri.create(),valueType:e,typeName:te.ZodRecord,...ae(r)})}},Go=class extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.map)return U(i,{code:$.invalid_type,expected:q.map,received:i.parsedType}),re;let o=this._def.keyType,s=this._def.valueType,n=[...i.data.entries()].map(([a,l],c)=>({key:o._parse(new Wt(i,a,i.path,[c,"key"])),value:s._parse(new Wt(i,l,i.path,[c,"value"]))}));if(i.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of n){let c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return re;(c.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(c.value,d.value)}return{status:r.value,value:a}})}else{let a=new Map;for(let l of n){let c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return re;(c.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(c.value,d.value)}return{status:r.value,value:a}}}};Go.create=(t,e,r)=>new Go({valueType:e,keyType:t,typeName:te.ZodMap,...ae(r)});var Ko=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.set)return U(i,{code:$.invalid_type,expected:q.set,received:i.parsedType}),re;let o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(U(i,{code:$.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),r.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(U(i,{code:$.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),r.dirty());let s=this._def.valueType;function n(l){let c=new Set;for(let d of l){if(d.status==="aborted")return re;d.status==="dirty"&&r.dirty(),c.add(d.value)}return{status:r.value,value:c}}let a=[...i.data.values()].map((l,c)=>s._parse(new Wt(i,l,i.path,c)));return i.common.async?Promise.all(a).then(l=>n(l)):n(a)}min(e,r){return new t({...this._def,minSize:{value:e,message:Z.toString(r)}})}max(e,r){return new t({...this._def,maxSize:{value:e,message:Z.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}};Ko.create=(t,e)=>new Ko({valueType:t,minSize:null,maxSize:null,typeName:te.ZodSet,...ae(e)});var gl=class t extends le{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.function)return U(r,{code:$.invalid_type,expected:q.function,received:r.parsedType}),re;function i(a,l){return hl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,dl(),qo].filter(c=>!!c),issueData:{code:$.invalid_arguments,argumentsError:l}})}function o(a,l){return hl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,dl(),qo].filter(c=>!!c),issueData:{code:$.invalid_return_type,returnTypeError:l}})}let s={errorMap:r.common.contextualErrorMap},n=r.data;if(this._def.returns instanceof oi){let a=this;return bt(async function(...l){let c=new Dt([]),d=await a._def.args.parseAsync(l,s).catch(m=>{throw c.addIssue(i(l,m)),c}),h=await Reflect.apply(n,this,d);return await a._def.returns._def.type.parseAsync(h,s).catch(m=>{throw c.addIssue(o(h,m)),c})})}else{let a=this;return bt(function(...l){let c=a._def.args.safeParse(l,s);if(!c.success)throw new Dt([i(l,c.error)]);let d=Reflect.apply(n,this,c.data),h=a._def.returns.safeParse(d,s);if(!h.success)throw new Dt([o(d,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:wr.create(e).rest(Rr.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,i){return new t({args:e||wr.create([]).rest(Rr.create()),returns:r||Rr.create(),typeName:te.ZodFunction,...ae(i)})}},qi=class extends le{get schema(){return this._def.getter()}_parse(e){let{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}};qi.create=(t,e)=>new qi({getter:t,typeName:te.ZodLazy,...ae(e)});var Hi=class extends le{_parse(e){if(e.data!==this._def.value){let r=this._getOrReturnCtx(e);return U(r,{received:r.data,code:$.invalid_literal,expected:this._def.value}),re}return{status:"valid",value:e.data}}get value(){return this._def.value}};Hi.create=(t,e)=>new Hi({value:t,typeName:te.ZodLiteral,...ae(e)});function Rb(t,e){return new Wi({values:t,typeName:te.ZodEnum,...ae(e)})}var Wi=class t extends le{constructor(){super(...arguments),bn.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let r=this._getOrReturnCtx(e),i=this._def.values;return U(r,{expected:ge.joinValues(i),received:r.parsedType,code:$.invalid_type}),re}if(pl(this,bn,"f")||Ib(this,bn,new Set(this._def.values),"f"),!pl(this,bn,"f").has(e.data)){let r=this._getOrReturnCtx(e),i=this._def.values;return U(r,{received:r.data,code:$.invalid_enum_value,options:i}),re}return bt(e.data)}get options(){return this._def.values}get enum(){let e={};for(let r of this._def.values)e[r]=r;return e}get Values(){let e={};for(let r of this._def.values)e[r]=r;return e}get Enum(){let e={};for(let r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return t.create(e,{...this._def,...r})}exclude(e,r=this._def){return t.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}};bn=new WeakMap;Wi.create=Rb;var Gi=class extends le{constructor(){super(...arguments),yn.set(this,void 0)}_parse(e){let r=ge.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==q.string&&i.parsedType!==q.number){let o=ge.objectValues(r);return U(i,{expected:ge.joinValues(o),received:i.parsedType,code:$.invalid_type}),re}if(pl(this,yn,"f")||Ib(this,yn,new Set(ge.getValidEnumValues(this._def.values)),"f"),!pl(this,yn,"f").has(e.data)){let o=ge.objectValues(r);return U(i,{received:i.data,code:$.invalid_enum_value,options:o}),re}return bt(e.data)}get enum(){return this._def.values}};yn=new WeakMap;Gi.create=(t,e)=>new Gi({values:t,typeName:te.ZodNativeEnum,...ae(e)});var oi=class extends le{unwrap(){return this._def.type}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.promise&&r.common.async===!1)return U(r,{code:$.invalid_type,expected:q.promise,received:r.parsedType}),re;let i=r.parsedType===q.promise?r.data:Promise.resolve(r.data);return bt(i.then(o=>this._def.type.parseAsync(o,{path:r.path,errorMap:r.common.contextualErrorMap})))}};oi.create=(t,e)=>new oi({type:t,typeName:te.ZodPromise,...ae(e)});var Mt=class extends le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===te.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=this._def.effect||null,s={addIssue:n=>{U(i,n),n.fatal?r.abort():r.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),o.type==="preprocess"){let n=o.transform(i.data,s);if(i.common.async)return Promise.resolve(n).then(async a=>{if(r.value==="aborted")return re;let l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?re:l.status==="dirty"||r.value==="dirty"?jo(l.value):l});{if(r.value==="aborted")return re;let a=this._def.schema._parseSync({data:n,path:i.path,parent:i});return a.status==="aborted"?re:a.status==="dirty"||r.value==="dirty"?jo(a.value):a}}if(o.type==="refinement"){let n=a=>{let l=o.refinement(a,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){let a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?re:(a.status==="dirty"&&r.dirty(),n(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?re:(a.status==="dirty"&&r.dirty(),n(a.value).then(()=>({status:r.value,value:a.value}))))}if(o.type==="transform")if(i.common.async===!1){let n=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ri(n))return n;let a=o.transform(n.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(n=>Ri(n)?Promise.resolve(o.transform(n.value,s)).then(a=>({status:r.value,value:a})):n);ge.assertNever(o)}};Mt.create=(t,e,r)=>new Mt({schema:t,typeName:te.ZodEffects,effect:e,...ae(r)});Mt.createWithPreprocess=(t,e,r)=>new Mt({schema:e,effect:{type:"preprocess",transform:t},typeName:te.ZodEffects,...ae(r)});var Ht=class extends le{_parse(e){return this._getType(e)===q.undefined?bt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Ht.create=(t,e)=>new Ht({innerType:t,typeName:te.ZodOptional,...ae(e)});var _r=class extends le{_parse(e){return this._getType(e)===q.null?bt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};_r.create=(t,e)=>new _r({innerType:t,typeName:te.ZodNullable,...ae(e)});var Ki=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return r.parsedType===q.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}};Ki.create=(t,e)=>new Ki({innerType:t,typeName:te.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ae(e)});var Zi=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return vn(o)?o.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Dt(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Dt(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}};Zi.create=(t,e)=>new Zi({innerType:t,typeName:te.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ae(e)});var Zo=class extends le{_parse(e){if(this._getType(e)!==q.nan){let i=this._getOrReturnCtx(e);return U(i,{code:$.invalid_type,expected:q.nan,received:i.parsedType}),re}return{status:"valid",value:e.data}}};Zo.create=t=>new Zo({typeName:te.ZodNaN,...ae(t)});var G2=Symbol("zod_brand"),wn=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}},_n=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{let s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?re:s.status==="dirty"?(r.dirty(),jo(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{let o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?re:o.status==="dirty"?(r.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,r){return new t({in:e,out:r,typeName:te.ZodPipeline})}},Yi=class extends le{_parse(e){let r=this._def.innerType._parse(e),i=o=>(Ri(o)&&(o.value=Object.freeze(o.value)),o);return vn(r)?r.then(o=>i(o)):i(r)}unwrap(){return this._def.innerType}};Yi.create=(t,e)=>new Yi({innerType:t,typeName:te.ZodReadonly,...ae(e)});function Db(t,e={},r){return t?ii.create().superRefine((i,o)=>{var s,n;if(!t(i)){let a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(n=(s=a.fatal)!==null&&s!==void 0?s:r)!==null&&n!==void 0?n:!0,c=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...c,fatal:l})}}):ii.create()}var K2={object:St.lazycreate},te;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(te||(te={}));var Z2=(t,e={message:`Input not instance of ${t.name}`})=>Db(r=>r instanceof t,e),Mb=ri.create,Nb=Di.create,Y2=Zo.create,X2=Mi.create,Fb=Ni.create,J2=Fi.create,Q2=Ho.create,eT=Ui.create,tT=Bi.create,rT=ii.create,iT=Rr.create,oT=ar.create,sT=Wo.create,nT=Dr.create,aT=St.create,lT=St.strictCreate,cT=Vi.create,uT=fl.create,dT=ji.create,hT=wr.create,pT=ml.create,fT=Go.create,mT=Ko.create,gT=gl.create,bT=qi.create,yT=Hi.create,vT=Wi.create,wT=Gi.create,_T=oi.create,Ob=Mt.create,xT=Ht.create,kT=_r.create,ST=Mt.createWithPreprocess,CT=_n.create,TT=()=>Mb().optional(),ET=()=>Nb().optional(),AT=()=>Fb().optional(),OT={string:t=>ri.create({...t,coerce:!0}),number:t=>Di.create({...t,coerce:!0}),boolean:t=>Ni.create({...t,coerce:!0}),bigint:t=>Mi.create({...t,coerce:!0}),date:t=>Fi.create({...t,coerce:!0})},$T=re,K=Object.freeze({__proto__:null,defaultErrorMap:qo,setErrorMap:S2,getErrorMap:dl,makeIssue:hl,EMPTY_PATH:C2,addIssueToContext:U,ParseStatus:mt,INVALID:re,DIRTY:jo,OK:bt,isAborted:Ad,isDirty:Od,isValid:Ri,isAsync:vn,get util(){return ge},get objectUtil(){return Ed},ZodParsedType:q,getParsedType:zr,ZodType:le,datetimeRegex:zb,ZodString:ri,ZodNumber:Di,ZodBigInt:Mi,ZodBoolean:Ni,ZodDate:Fi,ZodSymbol:Ho,ZodUndefined:Ui,ZodNull:Bi,ZodAny:ii,ZodUnknown:Rr,ZodNever:ar,ZodVoid:Wo,ZodArray:Dr,ZodObject:St,ZodUnion:Vi,ZodDiscriminatedUnion:fl,ZodIntersection:ji,ZodTuple:wr,ZodRecord:ml,ZodMap:Go,ZodSet:Ko,ZodFunction:gl,ZodLazy:qi,ZodLiteral:Hi,ZodEnum:Wi,ZodNativeEnum:Gi,ZodPromise:oi,ZodEffects:Mt,ZodTransformer:Mt,ZodOptional:Ht,ZodNullable:_r,ZodDefault:Ki,ZodCatch:Zi,ZodNaN:Zo,BRAND:G2,ZodBranded:wn,ZodPipeline:_n,ZodReadonly:Yi,custom:Db,Schema:le,ZodSchema:le,late:K2,get ZodFirstPartyTypeKind(){return te},coerce:OT,any:rT,array:nT,bigint:X2,boolean:Fb,date:J2,discriminatedUnion:uT,effect:Ob,enum:vT,function:gT,instanceof:Z2,intersection:dT,lazy:bT,literal:yT,map:fT,nan:Y2,nativeEnum:wT,never:oT,null:tT,nullable:kT,number:Nb,object:aT,oboolean:AT,onumber:ET,optional:xT,ostring:TT,pipeline:CT,preprocess:ST,promise:_T,record:pT,set:mT,strictObject:lT,string:Mb,symbol:Q2,transformer:Ob,tuple:hT,undefined:eT,union:cT,unknown:iT,void:sT,NEVER:$T,ZodIssueCode:$,quotelessJson:k2,ZodError:Dt});var si=class{_state;constructor(e){this._state=e}state=()=>(console.log("state()",this._state),{...this._state});setState=e=>{this._state=typeof e=="function"?e(this._state):{...this._state,...e}}};var xn=(r=>(r.ALL="ALL",r.ANY="ANY",r))(xn||{}),IT=K.object({text:K.string().optional().default(""),tagKeys:K.array(K.string()).optional().default([]),indexLetter:K.string().optional().default(""),tagsMatchType:K.nativeEnum(xn).default("ALL")}),bl=class t extends si{constructor(e){super(e)}static from(e){let r=IT.parse(e??{});return new t(r)}setText(e){this.setState({text:e})}setIndexLetter(e){let r=e.toLocaleLowerCase()!=this.state().indexLetter?e:"";this.setState({indexLetter:r.toLocaleLowerCase()})}setTag(e,r=!0){let i=this.state().tagKeys,o=i.indexOf(e),s=r?o<0?i.concat(e):[...i.slice(0,o),...i.slice(o+1)]:[e];this.setState({tagKeys:s})}setTagsMatchType(e){this.setState({tagsMatchType:e})}isActiveIndexLetter(e){return this.state().indexLetter===e.toLocaleLowerCase()}hasTag(e){return this.state().tagKeys.includes(e)}};var yl=class{config;client=new Eb;constructor(e){let{namespace:r,database:i,url:o}=e;this.config={namespace:r,database:i,url:o},Object.freeze(this.config)}async initialize(){let{url:e,namespace:r,database:i}=this.config;try{await this.client.connect(e,{namespace:r,database:i})}catch(o){throw console.error("Failed to connect to SurrealDB:",o instanceof Error?o.message:String(o)),await this.client.close(),o}}async authenticate(e,r){let i=!1;try{i=await this.client.authenticate(e)}catch(o){r||console.error(o.message)}return i}async getListings(e){let r="",i=[];if(e?.indexLetter&&i.push(`string::starts_with(string::lowercase(title), '${e.indexLetter.toLocaleLowerCase()}')`),e?.tagKeys?.length){let n=e.tagKeys.map(a=>a).join("', '");e.tagsMatchType==="ALL"?i.push(`array::len(array::intersect(tags.key, ['${n}'])) = ${e.tagKeys.length}`):i.push(`tags[WHERE key IN ['${n}']];`)}i.length&&(r=` WHERE ${i.join(" AND ")}`);let o=`SELECT *, tags.*.* FROM listings${r};`;return console.log({query:o}),Yo(await this.client.query(o))}async getIndexLetters(){return Yo(await this.client.query("SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM listings GROUP BY letter;"))}async getTags(){let e=`
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;return console.log({query:e}),Yo(await this.client.query(e))}async getUserData(){let e="SELECT * FROM users;";return console.log({query:e}),Yo(await this.client.query(e),2)}async getListingsByEmail(e){let r=`SELECT * FROM listings WHERE owner.email = '${e}';`;return console.log({query:r}),Yo(await this.client.query(r),2)}async createListing(e){let r=";";return console.log({query:r}),Yo(await this.client.query(r),2)}},Yo=(t,e=1)=>{let r=t;for(;e>0&&Array.isArray(r)&&r.length===1;)r=r[0],e--;return r};var Ub=async t=>{let e=new yl(t);return await e.initialize(),e};var Xi=async(t=0,e)=>new Promise(r=>setTimeout(()=>r(e?e():void 0),t));var vl=class{configsUrl;constructor(e){this.configsUrl=e}async loadConfigs(){return console.log({configsUrl:this.configsUrl}),await Xi(),{auth0:{domain:"intergate.eu.auth0.com",clientId:"d63m36lvjcGcQZoYjF06IIgczFdIHGqN",authorizationParams:{audience:"https://surrealdb.com/",redirect_uri:window.location.origin}},surreal:{namespace:"intergate",database:"gul-info",url:"https://127.0.0.1:7999/rpc"}}}};var Bb=async t=>await new vl(t).loadConfigs();var Vb=ko(),jb=t=>{let e=async()=>{let i=await Bb("https://intergate.io/configs/gul-info-hurdal"),o=await Ub(i.surreal);return{configs:i,db:o}},[r]=_t(e);return X(xt,{get when(){return r()},get children(){return X(Vb.Provider,{get value(){return r()},get children(){return t.children}})}})},qb=()=>{let t=Ti(Vb);if(!t)throw new Error("useSystem must be used within an CoreProvider");return t};function xr(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]])}return r}var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Wd(t,e){return t(e={exports:{}},e.exports),e.exports}var Ji=Wd(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function i(){var o=this;this.locked=new Map,this.addToLocked=function(s,n){var a=o.locked.get(s);a===void 0?n===void 0?o.locked.set(s,[]):o.locked.set(s,[n]):n!==void 0&&(a.unshift(n),o.locked.set(s,a))},this.isLocked=function(s){return o.locked.has(s)},this.lock=function(s){return new Promise(function(n,a){o.isLocked(s)?o.addToLocked(s,n):(o.addToLocked(s),n())})},this.unlock=function(s){var n=o.locked.get(s);if(n!==void 0&&n.length!==0){var a=n.pop();o.locked.set(s,n),a!==void 0&&setTimeout(a,0)}else o.locked.delete(s)}}return i.getInstance=function(){return i.instance===void 0&&(i.instance=new i),i.instance},i}();e.default=function(){return r.getInstance()}});Hd(Ji);var PT=Hd(Wd(function(t,e){var r=Qi&&Qi.__awaiter||function(d,h,f,m){return new(f||(f=Promise))(function(g,b){function v(k){try{w(m.next(k))}catch(y){b(y)}}function _(k){try{w(m.throw(k))}catch(y){b(y)}}function w(k){k.done?g(k.value):new f(function(y){y(k.value)}).then(v,_)}w((m=m.apply(d,h||[])).next())})},i=Qi&&Qi.__generator||function(d,h){var f,m,g,b,v={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return b={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(b[Symbol.iterator]=function(){return this}),b;function _(w){return function(k){return function(y){if(f)throw new TypeError("Generator is already executing.");for(;v;)try{if(f=1,m&&(g=2&y[0]?m.return:y[0]?m.throw||((g=m.return)&&g.call(m),0):m.next)&&!(g=g.call(m,y[1])).done)return g;switch(m=0,g&&(y=[2&y[0],g.value]),y[0]){case 0:case 1:g=y;break;case 4:return v.label++,{value:y[1],done:!1};case 5:v.label++,m=y[1],y=[0];continue;case 7:y=v.ops.pop(),v.trys.pop();continue;default:if(g=v.trys,!((g=g.length>0&&g[g.length-1])||y[0]!==6&&y[0]!==2)){v=0;continue}if(y[0]===3&&(!g||y[1]>g[0]&&y[1]<g[3])){v.label=y[1];break}if(y[0]===6&&v.label<g[1]){v.label=g[1],g=y;break}if(g&&v.label<g[2]){v.label=g[2],v.ops.push(y);break}g[2]&&v.ops.pop(),v.trys.pop();continue}y=h.call(d,v)}catch(S){y=[6,S],m=0}finally{f=g=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([w,k])}}},o=Qi;Object.defineProperty(e,"__esModule",{value:!0});var s="browser-tabs-lock-key",n={key:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},getItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},clear:function(){return r(o,void 0,void 0,function(){return i(this,function(d){return[2,window.localStorage.clear()]})})},removeItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},setItem:function(d,h){return r(o,void 0,void 0,function(){return i(this,function(f){throw new Error("Unsupported")})})},keySync:function(d){return window.localStorage.key(d)},getItemSync:function(d){return window.localStorage.getItem(d)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(d){return window.localStorage.removeItem(d)},setItemSync:function(d,h){return window.localStorage.setItem(d,h)}};function a(d){return new Promise(function(h){return setTimeout(h,d)})}function l(d){for(var h="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",f="",m=0;m<d;m++)f+=h[Math.floor(Math.random()*h.length)];return f}var c=function(){function d(h){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=h,d.waiters===void 0&&(d.waiters=[])}return d.prototype.acquireLock=function(h,f){return f===void 0&&(f=5e3),r(this,void 0,void 0,function(){var m,g,b,v,_,w,k;return i(this,function(y){switch(y.label){case 0:m=Date.now()+l(4),g=Date.now()+f,b=s+"-"+h,v=this.storageHandler===void 0?n:this.storageHandler,y.label=1;case 1:return Date.now()<g?[4,a(30)]:[3,8];case 2:return y.sent(),v.getItemSync(b)!==null?[3,5]:(_=this.id+"-"+h+"-"+m,[4,a(Math.floor(25*Math.random()))]);case 3:return y.sent(),v.setItemSync(b,JSON.stringify({id:this.id,iat:m,timeoutKey:_,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return y.sent(),(w=v.getItemSync(b))!==null&&(k=JSON.parse(w)).id===this.id&&k.iat===m?(this.acquiredIatSet.add(m),this.refreshLockWhileAcquired(b,m),[2,!0]):[3,7];case 5:return d.lockCorrector(this.storageHandler===void 0?n:this.storageHandler),[4,this.waitForSomethingToChange(g)];case 6:y.sent(),y.label=7;case 7:return m=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},d.prototype.refreshLockWhileAcquired=function(h,f){return r(this,void 0,void 0,function(){var m=this;return i(this,function(g){return setTimeout(function(){return r(m,void 0,void 0,function(){var b,v,_;return i(this,function(w){switch(w.label){case 0:return[4,Ji.default().lock(f)];case 1:return w.sent(),this.acquiredIatSet.has(f)?(b=this.storageHandler===void 0?n:this.storageHandler,(v=b.getItemSync(h))===null?(Ji.default().unlock(f),[2]):((_=JSON.parse(v)).timeRefreshed=Date.now(),b.setItemSync(h,JSON.stringify(_)),Ji.default().unlock(f),this.refreshLockWhileAcquired(h,f),[2])):(Ji.default().unlock(f),[2])}})})},1e3),[2]})})},d.prototype.waitForSomethingToChange=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,new Promise(function(m){var g=!1,b=Date.now(),v=!1;function _(){if(v||(window.removeEventListener("storage",_),d.removeFromWaiting(_),clearTimeout(w),v=!0),!g){g=!0;var k=50-(Date.now()-b);k>0?setTimeout(m,k):m(null)}}window.addEventListener("storage",_),d.addToWaiting(_);var w=setTimeout(_,Math.max(0,h-Date.now()))})];case 1:return f.sent(),[2]}})})},d.addToWaiting=function(h){this.removeFromWaiting(h),d.waiters!==void 0&&d.waiters.push(h)},d.removeFromWaiting=function(h){d.waiters!==void 0&&(d.waiters=d.waiters.filter(function(f){return f!==h}))},d.notifyWaiters=function(){d.waiters!==void 0&&d.waiters.slice().forEach(function(h){return h()})},d.prototype.releaseLock=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,this.releaseLock__private__(h)];case 1:return[2,f.sent()]}})})},d.prototype.releaseLock__private__=function(h){return r(this,void 0,void 0,function(){var f,m,g,b;return i(this,function(v){switch(v.label){case 0:return f=this.storageHandler===void 0?n:this.storageHandler,m=s+"-"+h,(g=f.getItemSync(m))===null?[2]:(b=JSON.parse(g)).id!==this.id?[3,2]:[4,Ji.default().lock(b.iat)];case 1:v.sent(),this.acquiredIatSet.delete(b.iat),f.removeItemSync(m),Ji.default().unlock(b.iat),d.notifyWaiters(),v.label=2;case 2:return[2]}})})},d.lockCorrector=function(h){for(var f=Date.now()-5e3,m=h,g=[],b=0;;){var v=m.keySync(b);if(v===null)break;g.push(v),b++}for(var _=!1,w=0;w<g.length;w++){var k=g[w];if(k.includes(s)){var y=m.getItemSync(k);if(y!==null){var S=JSON.parse(y);(S.timeRefreshed===void 0&&S.timeAcquired<f||S.timeRefreshed!==void 0&&S.timeRefreshed<f)&&(m.removeItemSync(k),_=!0)}}}_&&d.notifyWaiters()},d.waiters=void 0,d}();e.default=c})),LT={timeoutInSeconds:60},Qb={name:"auth0-spa-js",version:"2.1.3"},ey=()=>Date.now(),yt=class t extends Error{constructor(e,r){super(r),this.error=e,this.error_description=r,Object.setPrototypeOf(this,t.prototype)}static fromPayload({error:e,error_description:r}){return new t(e,r)}},Rd=class t extends yt{constructor(e,r,i,o=null){super(e,r),this.state=i,this.appState=o,Object.setPrototypeOf(this,t.prototype)}},Sn=class t extends yt{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,t.prototype)}},Dd=class t extends Sn{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Md=class t extends yt{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Nd=class t extends yt{constructor(e,r,i){super(e,r),this.mfa_token=i,Object.setPrototypeOf(this,t.prototype)}},xl=class t extends yt{constructor(e,r){super("missing_refresh_token",`Missing Refresh Token (audience: '${Hb(e,["default"])}', scope: '${Hb(r)}')`),this.audience=e,this.scope=r,Object.setPrototypeOf(this,t.prototype)}};function Hb(t,e=[]){return t&&!e.includes(t)?t:""}var _l=()=>window.crypto,Id=()=>{let t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",e="";return Array.from(_l().getRandomValues(new Uint8Array(43))).forEach(r=>e+=t[r%t.length]),e},Wb=t=>btoa(t),Fd=t=>{var{clientId:e}=t,r=xr(t,["clientId"]);return new URLSearchParams((i=>Object.keys(i).filter(o=>i[o]!==void 0).reduce((o,s)=>Object.assign(Object.assign({},o),{[s]:i[s]}),{}))(Object.assign({client_id:e},r))).toString()},Gb=t=>(e=>decodeURIComponent(atob(e).split("").map(r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g,"/").replace(/-/g,"+")),zT=async(t,e)=>{let r=await fetch(t,e);return{ok:r.ok,json:await r.json()}},RT=async(t,e,r)=>{let i=new AbortController,o;return e.signal=i.signal,Promise.race([zT(t,e),new Promise((s,n)=>{o=setTimeout(()=>{i.abort(),n(new Error("Timeout when executing 'fetch'"))},r)})]).finally(()=>{clearTimeout(o)})},DT=async(t,e,r,i,o,s,n)=>{return a={auth:{audience:e,scope:r},timeout:o,fetchUrl:t,fetchOptions:i,useFormData:n},l=s,new Promise(function(c,d){let h=new MessageChannel;h.port1.onmessage=function(f){f.data.error?d(new Error(f.data.error)):c(f.data),h.port1.close()},l.postMessage(a,[h.port2])});var a,l},MT=async(t,e,r,i,o,s,n=1e4)=>o?DT(t,e,r,i,n,o,s):RT(t,i,n);async function NT(t,e){var{baseUrl:r,timeout:i,audience:o,scope:s,auth0Client:n,useFormData:a}=t,l=xr(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);let c=a?Fd(l):JSON.stringify(l);return await async function(d,h,f,m,g,b,v){let _,w=null;for(let V=0;V<3;V++)try{_=await MT(d,f,m,g,b,v,h),w=null;break}catch(R){w=R}if(w)throw w;let k=_.json,{error:y,error_description:S}=k,M=xr(k,["error","error_description"]),{ok:H}=_;if(!H){let V=S||`HTTP error. Unable to fetch ${d}`;throw y==="mfa_required"?new Nd(y,V,M.mfa_token):y==="missing_refresh_token"?new xl(f,m):new yt(y||"request_error",V)}return M}(`${r}/oauth/token`,i,o||"default",s,{method:"POST",body:c,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(n||Qb))}},e,a)}var wl=(...t)=>{return(e=t.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ");var e},Mr=class t{constructor(e,r="@@auth0spajs@@",i){this.prefix=r,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){let[r,i,o,s]=e.split("::");return new t({clientId:i,scope:s,audience:o},r)}static fromCacheEntry(e){let{scope:r,audience:i,client_id:o}=e;return new t({scope:r,audience:i,clientId:o})}},Ud=class{set(e,r){localStorage.setItem(e,JSON.stringify(r))}get(e){let r=window.localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch{return}}remove(e){localStorage.removeItem(e)}allKeys(){return Object.keys(window.localStorage).filter(e=>e.startsWith("@@auth0spajs@@"))}},kl=class{constructor(){this.enclosedCache=function(){let e={};return{set(r,i){e[r]=i},get(r){let i=e[r];if(i)return i},remove(r){delete e[r]},allKeys:()=>Object.keys(e)}}()}},Bd=class{constructor(e,r,i){this.cache=e,this.keyManifest=r,this.nowProvider=i||ey}async setIdToken(e,r,i){var o;let s=this.getIdTokenCacheKey(e);await this.cache.set(s,{id_token:r,decodedToken:i}),await((o=this.keyManifest)===null||o===void 0?void 0:o.add(s))}async getIdToken(e){let r=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!r&&e.scope&&e.audience){let i=await this.get(e);return!i||!i.id_token||!i.decodedToken?void 0:{id_token:i.id_token,decodedToken:i.decodedToken}}if(r)return{id_token:r.id_token,decodedToken:r.decodedToken}}async get(e,r=0){var i;let o=await this.cache.get(e.toKey());if(!o){let a=await this.getCacheKeys();if(!a)return;let l=this.matchExistingCacheKey(e,a);l&&(o=await this.cache.get(l))}if(!o)return;let s=await this.nowProvider(),n=Math.floor(s/1e3);return o.expiresAt-r<n?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},await this.cache.set(e.toKey(),o),o.body):(await this.cache.remove(e.toKey()),void await((i=this.keyManifest)===null||i===void 0?void 0:i.remove(e.toKey()))):o.body}async set(e){var r;let i=new Mr({clientId:e.client_id,scope:e.scope,audience:e.audience}),o=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),o),await((r=this.keyManifest)===null||r===void 0?void 0:r.add(i.toKey()))}async clear(e){var r;let i=await this.getCacheKeys();i&&(await i.filter(o=>!e||o.includes(e)).reduce(async(o,s)=>{await o,await this.cache.remove(s)},Promise.resolve()),await((r=this.keyManifest)===null||r===void 0?void 0:r.clear()))}async wrapCacheEntry(e){let r=await this.nowProvider();return{body:e,expiresAt:Math.floor(r/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?(e=await this.keyManifest.get())===null||e===void 0?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new Mr({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,r){return r.filter(i=>{var o;let s=Mr.fromKey(i),n=new Set(s.scope&&s.scope.split(" ")),a=((o=e.scope)===null||o===void 0?void 0:o.split(" "))||[],l=s.scope&&a.reduce((c,d)=>c&&n.has(d),!0);return s.prefix==="@@auth0spajs@@"&&s.clientId===e.clientId&&s.audience===e.audience&&l})[0]}},Vd=class{constructor(e,r,i){this.storage=e,this.clientId=r,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}},kn=t=>typeof t=="number",FT=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],UT=t=>{if(!t.id_token)throw new Error("ID token is required but missing");let e=(s=>{let n=s.split("."),[a,l,c]=n;if(n.length!==3||!a||!l||!c)throw new Error("ID token could not be decoded");let d=JSON.parse(Gb(l)),h={__raw:s},f={};return Object.keys(d).forEach(m=>{h[m]=d[m],FT.includes(m)||(f[m]=d[m])}),{encoded:{header:a,payload:l,signature:c},header:JSON.parse(Gb(a)),claims:h,user:f}})(t.id_token);if(!e.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(e.claims.iss!==t.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);if(!e.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(e.header.alg!=="RS256")throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!e.claims.aud||typeof e.claims.aud!="string"&&!Array.isArray(e.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(e.claims.aud)){if(!e.claims.aud.includes(t.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);if(e.claims.aud.length>1){if(!e.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(e.claims.azp!==t.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)}}else if(e.claims.aud!==t.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);if(t.nonce){if(!e.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(e.claims.nonce!==t.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)}if(t.max_age&&!kn(e.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(e.claims.exp==null||!kn(e.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!kn(e.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");let r=t.leeway||60,i=new Date(t.now||Date.now()),o=new Date(0);if(o.setUTCSeconds(e.claims.exp+r),i>o)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${o})`);if(e.claims.nbf!=null&&kn(e.claims.nbf)){let s=new Date(0);if(s.setUTCSeconds(e.claims.nbf-r),i<s)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${s}`)}if(e.claims.auth_time!=null&&kn(e.claims.auth_time)){let s=new Date(0);if(s.setUTCSeconds(parseInt(e.claims.auth_time)+t.max_age+r),i>s)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${s}`)}if(t.organization){let s=t.organization.trim();if(s.startsWith("org_")){let n=s;if(!e.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(n!==e.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_id}"`)}else{let n=s.toLowerCase();if(!e.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(n!==e.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_name}"`)}}return e},eo=Wd(function(t,e){var r=Qi&&Qi.__assign||function(){return r=Object.assign||function(l){for(var c,d=1,h=arguments.length;d<h;d++)for(var f in c=arguments[d])Object.prototype.hasOwnProperty.call(c,f)&&(l[f]=c[f]);return l},r.apply(this,arguments)};function i(l,c){if(!c)return"";var d="; "+l;return c===!0?d:d+"="+c}function o(l,c,d){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(c).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(h){if(typeof h.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*h.expires),h.expires=f}return i("Expires",h.expires?h.expires.toUTCString():"")+i("Domain",h.domain)+i("Path",h.path)+i("Secure",h.secure)+i("SameSite",h.sameSite)}(d)}function s(l){for(var c={},d=l?l.split("; "):[],h=/(%[\dA-F]{2})+/gi,f=0;f<d.length;f++){var m=d[f].split("="),g=m.slice(1).join("=");g.charAt(0)==='"'&&(g=g.slice(1,-1));try{c[m[0].replace(h,decodeURIComponent)]=g.replace(h,decodeURIComponent)}catch{}}return c}function n(){return s(document.cookie)}function a(l,c,d){document.cookie=o(l,c,r({path:"/"},d))}e.__esModule=!0,e.encode=o,e.parse=s,e.getAll=n,e.get=function(l){return n()[l]},e.set=a,e.remove=function(l,c){a(l,"",r(r({},c),{expires:-1}))}});Hd(eo),eo.encode,eo.parse,eo.getAll;var BT=eo.get,ty=eo.set,ry=eo.remove,Xo={get(t){let e=BT(t);if(e!==void 0)return JSON.parse(e)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0,sameSite:"none"}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),ty(t,JSON.stringify(e),i)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),ry(t,r)}},VT={get(t){return Xo.get(t)||Xo.get(`_legacy_${t}`)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),ty(`_legacy_${t}`,JSON.stringify(e),i),Xo.save(t,e,r)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),ry(t,r),Xo.remove(t,e),Xo.remove(`_legacy_${t}`,e)}},jT={get(t){if(typeof sessionStorage>"u")return;let e=sessionStorage.getItem(t);return e!=null?JSON.parse(e):void 0},save(t,e){sessionStorage.setItem(t,JSON.stringify(e))},remove(t){sessionStorage.removeItem(t)}};function qT(t,e,r){var i=e===void 0?null:e,o=function(l,c){var d=atob(l);if(c){for(var h=new Uint8Array(d.length),f=0,m=d.length;f<m;++f)h[f]=d.charCodeAt(f);return String.fromCharCode.apply(null,new Uint16Array(h.buffer))}return d}(t,r!==void 0&&r),s=o.indexOf(`
`,10)+1,n=o.substring(s)+(i?"//# sourceMappingURL="+i:""),a=new Blob([n],{type:"application/javascript"});return URL.createObjectURL(a)}var Kb,Zb,Yb,Pd,HT=(Kb="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",Zb=null,Yb=!1,function(t){return Pd=Pd||qT(Kb,Zb,Yb),new Worker(Pd,t)}),Ld={},jd=class{constructor(e,r){this.cache=e,this.clientId=r,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(e){var r;let i=new Set(((r=await this.cache.get(this.manifestKey))===null||r===void 0?void 0:r.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]})}async remove(e){let r=await this.cache.get(this.manifestKey);if(r){let i=new Set(r.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return`@@auth0spajs@@::${e}`}},WT={memory:()=>new kl().enclosedCache,localstorage:()=>new Ud},Xb=t=>WT[t],Jb=t=>{let{openUrl:e,onRedirect:r}=t,i=xr(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},i),{openUrl:e===!1||e?e:r})},zd=new PT,qd=class{constructor(e){let r,i;if(this.userCache=new kl().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await zd.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),typeof window<"u"&&(()=>{if(!_l())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(_l().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(r=e.cacheLocation||"memory",!Xb(r))throw new Error(`Invalid cache location "${r}"`);i=Xb(r)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=e.legacySameSiteCookie===!1?Xo:VT,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(n=>`auth0.${n}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;let o=e.useCookiesForTransactions?this.cookieStorage:jT;var s;this.scope=wl("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new Vd(o,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||ey,this.cacheManager=new Bd(i,i.allKeys?void 0:new jd(i,this.options.clientId),this.nowProvider),this.domainUrl=(s=this.options.domain,/^https?:\/\//.test(s)?s:`https://${s}`),this.tokenIssuer=((n,a)=>n?n.startsWith("https://")?n:`https://${n}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&r==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new HT)}_url(e){let r=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||Qb)));return`${this.domainUrl}${e}&auth0Client=${r}`}_authorizeUrl(e){return this._url(`/authorize?${Fd(e)}`)}async _verifyIdToken(e,r,i){let o=await this.nowProvider();return UT({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:r,organization:i,leeway:this.options.leeway,max_age:(s=this.options.authorizationParams.max_age,typeof s!="string"?s:parseInt(s,10)||void 0),now:o});var s}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(e,r,i){let o=Wb(Id()),s=Wb(Id()),n=Id(),a=(d=>{let h=new Uint8Array(d);return(f=>{let m={"+":"-","/":"_","=":""};return f.replace(/[+/=]/g,g=>m[g])})(window.btoa(String.fromCharCode(...Array.from(h))))})(await(async d=>await _l().subtle.digest({name:"SHA-256"},new TextEncoder().encode(d)))(n)),l=((d,h,f,m,g,b,v,_)=>Object.assign(Object.assign(Object.assign({client_id:d.clientId},d.authorizationParams),f),{scope:wl(h,f.scope),response_type:"code",response_mode:_||"query",state:m,nonce:g,redirect_uri:v||d.authorizationParams.redirect_uri,code_challenge:b,code_challenge_method:"S256"}))(this.options,this.scope,e,o,s,a,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,r?.response_mode),c=this._authorizeUrl(l);return{nonce:s,code_verifier:n,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:o,url:c}}async loginWithPopup(e,r){var i;if(e=e||{},!(r=r||{}).popup&&(r.popup=(a=>{let l=window.screenX+(window.innerWidth-400)/2,c=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!r.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");let o=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);r.popup.location.href=o.url;let s=await(a=>new Promise((l,c)=>{let d,h=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(h),clearTimeout(f),window.removeEventListener("message",d,!1),c(new Md(a.popup)))},1e3),f=setTimeout(()=>{clearInterval(h),c(new Dd(a.popup)),window.removeEventListener("message",d,!1)},1e3*(a.timeoutInSeconds||60));d=function(m){if(m.data&&m.data.type==="authorization_response"){if(clearTimeout(f),clearInterval(h),window.removeEventListener("message",d,!1),a.popup.close(),m.data.response.error)return c(yt.fromPayload(m.data.response));l(m.data.response)}},window.addEventListener("message",d)}))(Object.assign(Object.assign({},r),{timeoutInSeconds:r.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(o.state!==s.state)throw new yt("state_mismatch","Invalid state");let n=((i=e.authorizationParams)===null||i===void 0?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:o.audience,scope:o.scope,code_verifier:o.code_verifier,grant_type:"authorization_code",code:s.code,redirect_uri:o.redirect_uri},{nonceIn:o.nonce,organization:n})}async getUser(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.user}async getIdTokenClaims(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.claims}async loginWithRedirect(e={}){var r;let i=Jb(e),{openUrl:o,fragment:s,appState:n}=i,a=xr(i,["openUrl","fragment","appState"]),l=((r=a.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization,c=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:d}=c,h=xr(c,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},h),{appState:n}),l&&{organization:l}));let f=s?`${d}#${s}`:d;o?await o(f):window.location.assign(f)}async handleRedirectCallback(e=window.location.href){let r=e.split("?").slice(1);if(r.length===0)throw new Error("There are no query params available for parsing.");let{state:i,code:o,error:s,error_description:n}=(h=>{h.indexOf("#")>-1&&(h=h.substring(0,h.indexOf("#")));let f=new URLSearchParams(h);return{state:f.get("state"),code:f.get("code")||void 0,error:f.get("error")||void 0,error_description:f.get("error_description")||void 0}})(r.join("")),a=this.transactionManager.get();if(!a)throw new yt("missing_transaction","Invalid state");if(this.transactionManager.remove(),s)throw new Rd(s,n||s,i,a.appState);if(!a.code_verifier||a.state&&a.state!==i)throw new yt("state_mismatch","Invalid state");let l=a.organization,c=a.nonce,d=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:o},d?{redirect_uri:d}:{}),{nonceIn:c,organization:l}),{appState:a.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(e)}catch{}}async getTokenSilently(e={}){var r;let i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:wl(this.scope,(r=e.authorizationParams)===null||r===void 0?void 0:r.scope)})}),o=await((s,n)=>{let a=Ld[n];return a||(a=s().finally(()=>{delete Ld[n],a=null}),Ld[n]=a),a})(()=>this._getTokenSilently(i),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?o:o?.access_token}async _getTokenSilently(e){let{cacheMode:r}=e,i=xr(e,["cacheMode"]);if(r!=="off"){let o=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(o)return o}if(r!=="cache-only"){if(!await(async(o,s=3)=>{for(let n=0;n<s;n++)if(await o())return!0;return!1})(()=>zd.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new Sn;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),r!=="off"){let c=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(c)return c}let o=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(i):await this._getTokenFromIFrame(i),{id_token:s,access_token:n,oauthTokenScope:a,expires_in:l}=o;return Object.assign(Object.assign({id_token:s,access_token:n},a?{scope:a}:null),{expires_in:l})}finally{await zd.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(e={},r={}){var i;let o=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:wl(this.scope,(i=e.authorizationParams)===null||i===void 0?void 0:i.scope)})});return r=Object.assign(Object.assign({},LT),r),await this.loginWithPopup(o,r),(await this.cacheManager.get(new Mr({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(e){e.clientId!==null?e.clientId=e.clientId||this.options.clientId:delete e.clientId;let r=e.logoutParams||{},{federated:i}=r,o=xr(r,["federated"]),s=i?"&federated":"";return this._url(`/v2/logout?${Fd(Object.assign({clientId:e.clientId},o))}`)+s}async logout(e={}){let r=Jb(e),{openUrl:i}=r,o=xr(r,["openUrl"]);e.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(e.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");let s=this._buildLogoutUrl(o);i?await i(s):i!==!1&&window.location.assign(s)}async _getTokenFromIFrame(e){let r=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!r.organization&&(r.organization=i);let{url:o,state:s,nonce:n,code_verifier:a,redirect_uri:l,scope:c,audience:d}=await this._prepareAuthorizeUrl(r,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new yt("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");let h=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,f=await((g,b,v=60)=>new Promise((_,w)=>{let k=window.document.createElement("iframe");k.setAttribute("width","0"),k.setAttribute("height","0"),k.style.display="none";let y=()=>{window.document.body.contains(k)&&(window.document.body.removeChild(k),window.removeEventListener("message",S,!1))},S,M=setTimeout(()=>{w(new Sn),y()},1e3*v);S=function(H){if(H.origin!=b||!H.data||H.data.type!=="authorization_response")return;let V=H.source;V&&V.close(),H.data.response.error?w(yt.fromPayload(H.data.response)):_(H.data.response),clearTimeout(M),window.removeEventListener("message",S,!1),setTimeout(y,2e3)},window.addEventListener("message",S,!1),window.document.body.appendChild(k),k.setAttribute("src",g)}))(o,this.domainUrl,h);if(s!==f.state)throw new yt("state_mismatch","Invalid state");let m=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:a,code:f.code,grant_type:"authorization_code",redirect_uri:l,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:n,organization:r.organization});return Object.assign(Object.assign({},m),{scope:c,oauthTokenScope:m.scope,audience:d})}catch(h){throw h.error==="login_required"&&this.logout({openUrl:!1}),h}}async _getTokenUsingRefreshToken(e){let r=await this.cacheManager.get(new Mr({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(r&&r.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new xl(e.authorizationParams.audience||"default",e.authorizationParams.scope)}let i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,o=typeof e.timeoutInSeconds=="number"?1e3*e.timeoutInSeconds:null;try{let s=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:r&&r.refresh_token,redirect_uri:i}),o&&{timeout:o}));return Object.assign(Object.assign({},s),{scope:e.authorizationParams.scope,oauthTokenScope:s.scope,audience:e.authorizationParams.audience||"default"})}catch(s){if((s.message.indexOf("Missing Refresh Token")>-1||s.message&&s.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw s}}async _saveEntryInCache(e){let{id_token:r,decodedToken:i}=e,o=xr(e,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:r,decodedToken:i}),await this.cacheManager.setIdToken(this.options.clientId,e.id_token,e.decodedToken),await this.cacheManager.set(o)}async _getIdTokenFromCache(){let e=this.options.authorizationParams.audience||"default",r=await this.cacheManager.getIdToken(new Mr({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return r&&r.id_token===i?.id_token?i:(this.userCache.set("@@user@@",r),r)}async _getEntryFromCache({scope:e,audience:r,clientId:i}){let o=await this.cacheManager.get(new Mr({scope:e,audience:r,clientId:i}),60);if(o&&o.access_token){let{access_token:s,oauthTokenScope:n,expires_in:a}=o,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:s},n?{scope:n}:null),{expires_in:a})}}async _requestToken(e,r){let{nonceIn:i,organization:o}=r||{},s=await NT(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),n=await this._verifyIdToken(s.id_token,i,o);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},s),{decodedToken:n,scope:e.scope,audience:e.audience||"default"}),s.scope?{oauthTokenScope:s.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(o||n.claims.org_id),Object.assign(Object.assign({},s),{decodedToken:n})}};async function iy(t){let e=new qd(t);return await e.checkSession(),e}var Sl=class{config;client;constructor(e){this.config=e,Object.freeze(this.config)}async initialize(){let{domain:e,clientId:r,authorizationParams:i}=this.config;if(this.client=await iy({domain:e,clientId:r,authorizationParams:i}),window.location.search.includes("code=")||window.location.search.includes("error=")){try{let o=await this.client.handleRedirectCallback();console.log({result:o})}catch(o){let{error:s,error_description:n}=o;console.error("Error handling redirect callback:",{error:s,error_description:n})}window.history.replaceState({},document.title,window.location.pathname)}}async login(){return console.log("login"),await this.client.loginWithRedirect()}async logout(){this.client.logout({openUrl(e){window.location.replace(e)}})}async isAuthenticated(){return await this.client.isAuthenticated()}async getAuthData(){return await this.client.isAuthenticated()?await this.client.getIdTokenClaims():void 0}async getAccessToken(){return await this.client.getTokenSilently()}};var oy=async(t,e)=>{let r=new Sl(e);return await r.initialize(),r};var Cl=t=>{if(!(t instanceof si))throw new Error("Passed instance must extend `_State`");let[e,r]=Fe(t.state()),i=t.setState.bind(t);return new Proxy(t,{get(s,n){return n==="state"?e:n==="setState"&&typeof i=="function"?a=>{i(a),r(t.state())}:s[n]},set(s,n,a){if(n==="state"||n==="setState")throw new Error(`Cannot overwrite ${String(n)}.`);return s[n]=a,!0}})};function kr(t){return function(e){let r=Object.keys(t.shape);return class extends e{constructor(...i){super(...i),r.forEach(o=>{Object.defineProperty(this,o,{get(){return this.data[o]}})})}}}}var Tl=K.object({key:K.string(),name:K.string(),usageCount:K.number()}),ni=class{data;constructor(e){this.data=e}static from(e){let r=Tl.parse(e);return new ni(r)}};ni=gr([kr(Tl)],ni);var sy=K.object({title:K.string(),description:K.string(),address:K.string(),zip:K.string().regex(/^\d{4}$/),muncipiality:K.string(),phone:K.string(),email:K.string().email(),links:K.array(K.object({href:K.string()})),tags:K.array(Tl.omit({usageCount:!0}))}),ai=class{data;constructor(e){this.data=e}static from(e){let r=sy.parse(e);return new ai(r)}};ai=gr([kr(sy)],ai);var ny=K.object({letter:K.string().length(1),count:K.number()}),li=class{data;constructor(e){this.data=e}static from(e){let r=ny.parse(e);return new li(r)}};li=gr([kr(ny)],li);var El=class{db;constructor(e){this.db=e}async loadIndexLetters(){return(await this.db.getIndexLetters()).sort((i,o)=>i.letter<o.letter?-1:1).map(i=>li.from(i))}async loadTags(){return(await this.db.getTags()).filter(({usageCount:i})=>i).sort((i,o)=>i.name<o.name?-1:1).map(i=>ni.from(i))}async loadListings(e){return await Xi(),(await this.db.getListings(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>ai.from(o))}};var Al=t=>t;var ay=async t=>{let e=Cl(bl.from({tagsMatchType:"ANY"})),r=new El(t),[i]=_t(()=>r.loadTags()),[o]=_t(()=>r.loadIndexLetters()),[s]=_t(()=>e.state()?e.state():!1,a=>r.loadListings(a));return Al({resources:{tags:i,indexLetters:o,listings:s},filters:()=>e})};var Gd=K.object({href:K.string()}),ly=K.object({id:K.any(),owner:K.any(),title:K.string(),description:K.string(),address:K.string(),zip:K.string().regex(/^\d{4}$/),muncipiality:K.string(),phone:K.string(),email:K.string().email(),tags:K.array(K.any()),links:K.array(Gd)}),Jo=class t extends si{constructor(e){super(e)}static from(e){let r=ly.parse(e);return new t(r)}validate(e,r){return ly.shape.zip.safeParse(r)}};var cy=K.object({id:K.any(),name:K.string(),email:K.string().email()}),ci=class{data;constructor(e){this.data=e}static from(e){let r=cy.parse(e);return new ci(r)}};ci=gr([kr(cy)],ci);var Ol=class{db;constructor(e){this.db=e}async getUser(e){await Xi(),await this.db.authenticate(e,!0);let r=await this.db.getUserData();return ci.from(r)}async loadListingsByEmail(e){return await Xi(),(await this.db.getListingsByEmail(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>Jo.from(o))}async createListing(e){}async updateListing(e){}};var uy=(t,e)=>{let r=new Ol(t),[i,o]=Fe(!1),[s]=_t(()=>i(),()=>e.isAuthenticated()),[n]=_t(()=>s(),async()=>await e.getAuthData()),a=we(()=>n()?.email_verified?!1:n()?.email),[l]=_t(()=>{if(n()&&!a())return!0;o(!0)},async()=>{let h=await e.getAccessToken();return await r.getUser(h)}),[c]=_t(()=>l(),async({email:h})=>(await r.loadListingsByEmail(h)).map(m=>Cl(m)));return Al({resources:{user:l,listings:c},mustVerifyEmail:a,login:e.login.bind(e),logout:e.logout.bind(e)})};var dy=ko(),hy=t=>{let{db:e,configs:r}=qb(),[i]=_t(()=>ay(e)),[o]=_t(async()=>{let n=await oy(e,r.auth0);return uy(e,n)}),s={directory:i,account:o};return X(dy.Provider,{value:s,get children(){return t.children}})},Sr=()=>{let t=Ti(dy);if(!t)throw new Error("useService must be used within an ServiceProvider");return t};var GT=ne("<div><sl-spinner></sl-spinner><div>",!0,!1),py=function(t){return t.small="small",t.medium="medium",t.large="large",t}(py||{}),KT=it({centered:t=>({textAlign:"center"})}),ZT=wg(t=>({small:`font-size: ${t.fontSizeSm}; --trackwidth: 3px;`,medium:`font-size: ${t.fontSizeMd}; --trackwidth: 5px;`,large:`font-size: ${t.fontSizeLg}; --trackwidth: 10px;`})),ui=t=>{let e=t.size||py.large,r=ZT()[e];return(()=>{var i=GT(),o=i.firstChild,s=o.nextSibling;return o._$owner=J(),Q(s,()=>t.children),Ce(n=>{var a=Pi("loading",KT.centered),l=r;return a!==n.e&&Ae(i,n.e=a),n.t=bp(o,l,n.t),n},{e:void 0,t:void 0}),i})()};var YT=ne("<sl-button>Logout",!0,!1),fy=t=>{let{account:e}=Sr(),r=we(()=>e()?.resources.user());return X(Or,{get fallback(){return X(ui,{size:"large"})},get children(){return[we(()=>t.children),X(xt,{get when(){return r()},get children(){return[we(()=>r()?.name),(()=>{var i=YT();return Ie(i,"click",()=>e()?.logout()),i._$owner=J(),i})()]}})]}})};var JT=ne("<sl-icon-button style=font-size:20px;>",!0,!1),QT=ne("<div><section><div><h1></h1></div><div>"),eE=ne("<div>Error: "),Cn=it({app:t=>({padding:"10px 15px",color:t.colorOnPrimary,backgroundColor:t.colorPrimary,font:"16px var(--sl-font-sans)",fontWeight:"var(--sl-font-weight-normal)"}),border:t=>({borderRadius:"10px",border:"5px solid",borderColor:t.colorAccent}),header:{display:"flex",justifyContent:"space-between"},title:t=>({fontFamily:"'Playwrite HU', sans-serif",fontSize:t.fontSizeLg,cursor:"pointer"}),user:{display:"flex",flexDirection:"column",alignItems:"end"}}),my=t=>(()=>{var e=QT(),r=e.firstChild,i=r.firstChild,o=i.firstChild,s=i.nextSibling;return Ie(o,"click",t.toggleMainPages),Q(o,()=>t.title),Q(s,X(fy,{get children(){var n=JT();return Ie(n,"click",t.toggleMainPages),n._$owner=J(),Ce(()=>n.name=t.selectedPage==="PAGE_LISTINGS"?"person-circle":"arrow-left-circle"),n}})),Q(e,X(kc,{fallback:n=>(console.error(n),(()=>{var a=eE(),l=a.firstChild;return Q(a,()=>n.message,null),a})()),get children(){return X(Or,{get fallback(){return X(ui,{children:"Layout"})},get children(){return t.children}})}}),null),Ce(n=>{var a=Pi(Cn.app,Cn.border),l=Cn.header,c=Cn.title,d=Cn.user;return a!==n.e&&Ae(e,n.e=a),l!==n.t&&Ae(r,n.t=l),c!==n.a&&Ae(o,n.a=c),d!==n.o&&Ae(s,n.o=d),n},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var tE=ne("<span><sl-icon></sl-icon><span>",!0,!1),Kd=it({wrapper:{display:"flex"},label:{paddingInlineStart:"var(--sl-spacing-2x-small)"},icon:{minWidth:"20px"}}),$l=t=>(()=>{var e=tE(),r=e.firstChild,i=r.nextSibling;return r._$owner=J(),Q(i,()=>t.children),Ce(o=>{var s=Kd.wrapper,n=Kd.icon,a=t.icon,l=t.label,c=Kd.label;return s!==o.e&&Ae(e,o.e=s),n!==o.t&&Ae(r,o.t=n),a!==o.a&&(r.name=o.a=a),l!==o.o&&(r.label=o.o=l),c!==o.i&&Ae(i,o.i=c),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();var rE=ne("<a target=_blank>"),gy=t=>{let{pathname:e,hostname:r}=new URL(t.link.href),i={icon:"globe",title:"Website"};return r.match(/facebook\.(no|com)/)?(i.icon="facebook",i.title="Facebook"):r.match(/instagram\.(no|com)/)?(i.icon="instagram",i.title=`@${e.split("/").pop()}`):r.match(/linkedin\.(no|com)/)&&(i.icon="linkedin",i.title="LinkedIn"),X($l,{get icon(){return i.icon},label:r,get children(){var o=rE();return Q(o,()=>i.title),Ce(()=>Cc(o,"href",t.link.href)),o}})};var iE=ne("<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call",!0,!1),by=t=>{let e=()=>{navigator.clipboard.writeText(t.phoneNumber)},r=()=>{window.location.href=`tel:${t.phoneNumber}`};return(()=>{var i=iE(),o=i.firstChild,s=o.firstChild,n=o.nextSibling,a=n.firstChild,l=a.firstChild,c=a.nextSibling,d=c.firstChild;return i._$owner=J(),o.slot="trigger",o.caret=!0,o._$owner=J(),s.name="telephone",s._$owner=J(),Q(o,()=>t.phoneNumber,null),n._$owner=J(),Ie(a,"click",e),a._$owner=J(),l.name="copy",l._$owner=J(),Ie(c,"click",r),c._$owner=J(),d.name="telephone",d._$owner=J(),i})()};var oE=ne("<br>"),yy=t=>[we(()=>t.address),oE(),we(()=>t.zip)," ",we(()=>t.muncipiality)];var sE=ne("<div><div class=text>"),nE=ne("<sl-button><span>",!0,!1),vy=it({button:{marginTop:"5px",marginRight:"5px"},badge:{position:"absolute",top:"-2px",right:"-2px",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",borderWidth:"1px",borderStyle:"solid",borderRadius:"5px",backgroundColor:"var(--sl-color-primary-50)",borderColor:"var(--sl-color-primary-200)","& > .text":{fontSize:"8px",color:"var(--sl-color-primary-800)"}}}),Zd=t=>(()=>{var e=nE(),r=e.firstChild;return Ie(e,"click",t.onClick,!0),e._$owner=J(),Q(r,()=>t.buttonLabel),Q(e,X(xt,{get when(){return t.badgeLabel},get children(){var i=sE(),o=i.firstChild;return Q(o,()=>t.badgeLabel),Ce(()=>Ae(i,vy.badge)),i}}),null),Ce(i=>{var o=t.size||"medium",s=t.isActive?"primary":"default",n=vy.button,a=t.disabled;return o!==i.e&&(e.size=i.e=o),s!==i.t&&(e.variant=i.t=s),n!==i.a&&Ae(e,i.a=n),a!==i.o&&(e.disabled=i.o=a),i},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();gp(["click"]);var aE=ne("<section><div></div><div><sl-switch>:</sl-switch></div><div>",!0,!1),Yd=it({section:t=>({display:"flex",flexDirection:"column",alignItems:"center",marginBottom:t.spaceY}),filter:t=>({display:"flex",overflowY:"hidden",overflowX:"scroll"})}),wy=t=>{let{directory:e}=Sr(),r=()=>e()?.filters(),i=()=>e()?.resources.tags(),o=()=>e()?.resources.indexLetters(),s=()=>e()?.resources.listings.loading,n=()=>r()?.state().tagsMatchType==="ALL",a=()=>{let l=n()?"ANY":"ALL";r()?.setTagsMatchType(l)};return vs(()=>console.log(r())),(()=>{var l=aE(),c=l.firstChild,d=c.nextSibling,h=d.firstChild,f=h.firstChild,m=d.nextSibling;return Q(c,()=>o()?.map(({letter:g,count:b})=>X(Zd,{buttonLabel:g,badgeLabel:b,get isActive(){return!!r()?.isActiveIndexLetter(g)},get disabled(){return s()},onClick:()=>r()?.setIndexLetter(g)}))),Ie(h,"click",()=>a()),h.size="small",h._$owner=J(),Q(h,()=>n()?"M\xE5 match alle valgte tagger":"Match p\xE5 minst \xE9n av valgte tager",f),Q(m,()=>i()?.map(g=>X(Zd,{size:"small",get isActive(){return!!r()?.hasTag(g.key)},get buttonLabel(){return g.name},get badgeLabel(){return g.usageCount},get disabled(){return s()},onClick:()=>r()?.setTag(g.key,!0)}))),Q(l,()=>t.children,null),Ce(g=>{var b=Yd.section,v=Yd.filter,_=n(),w=s(),k=Yd.filter;return b!==g.e&&Ae(l,g.e=b),v!==g.t&&Ae(c,g.t=v),_!==g.a&&(h.checked=g.a=_),w!==g.o&&(h.disabled=g.o=w),k!==g.i&&Ae(m,g.i=k),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()};var lE=ne("<div> treff."),cE=ne("<section>"),uE=ne("<sl-card><div slot=header><div class=title></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>",!0,!1),dE=ne("<span><br>"),hE=ne("<sl-tag>",!0,!1),Xd=it({card:{"--border-radius":"15px",width:"100%",marginBottom:"1rem","& .flex-middle > *":{justifySelf:"center"}},cardHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",position:"relative",alignItems:"center",rowGap:"1rem","> * ":{flex:"1 1 33.33%",minWidth:"200px",textAlign:"center","@media (min-width: 500px)":{"&:first-child":{textAlign:"left"}},"@media (min-width: 700px)":{"&:last-child":{textAlign:"right"}}},"& .title":{fontWeight:"bolder"}},cardBody:{display:"flex",justifyContent:"space-between"}}),_y=()=>{let{directory:t}=Sr(),[e,r]=Fe(0),i=()=>t()?.filters(),o=()=>{let s=t()?.resources.listings();return r(s?.length||0),s};return(()=>{var s=cE();return Q(s,X(wy,{get children(){var n=lE(),a=n.firstChild;return Q(n,e,a),n}}),null),Q(s,X(Or,{get fallback(){return X(ui,{children:"Listings"})},get children(){return X(Ei,{get each(){return o()},children:n=>(()=>{var a=uE(),l=a.firstChild,c=l.firstChild,d=c.nextSibling,h=d.nextSibling,f=l.nextSibling,m=f.firstChild,g=m.firstChild,b=g.nextSibling,v=m.nextSibling;return a._$owner=J(),Q(c,()=>n.title),Q(d,X($l,{label:"beskrivelse",icon:"info-circle",get children(){return n.description}})),Q(h,X(by,{get phoneNumber(){return n.phone}})),Q(g,X(yy,n)),Q(b,()=>n.links.map(_=>(()=>{var w=dE(),k=w.firstChild;return Q(w,X(gy,{link:_}),k),w})())),Q(v,()=>n.tags.map(_=>(()=>{var w=hE();return Ie(w,"click",()=>i()?.setTag(_.key)),w.style.setProperty("cursor","pointer"),w.variant="primary",w.size="small",w._$owner=J(),Q(w,()=>_.name),w})())),Ce(_=>{var w=Xd.card,k=Xd.cardHeader,y=Xd.cardBody;return w!==_.e&&Ae(a,_.e=w),k!==_.t&&Ae(l,_.t=k),y!==_.a&&Ae(m,_.a=y),_},{e:void 0,t:void 0,a:void 0}),a})()})}}),null),s})()};var Sy=Object.defineProperty,pE=Object.defineProperties,fE=Object.getOwnPropertyDescriptor,mE=Object.getOwnPropertyDescriptors,xy=Object.getOwnPropertySymbols,gE=Object.prototype.hasOwnProperty,bE=Object.prototype.propertyIsEnumerable,Jd=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Qd=t=>{throw TypeError(t)},ky=(t,e,r)=>e in t?Sy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,gt=(t,e)=>{for(var r in e||(e={}))gE.call(e,r)&&ky(t,r,e[r]);if(xy)for(var r of xy(e))bE.call(e,r)&&ky(t,r,e[r]);return t},Nr=(t,e)=>pE(t,mE(e)),u=(t,e,r,i)=>{for(var o=i>1?void 0:i?fE(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&Sy(e,r,o),o},Cy=(t,e,r)=>e.has(t)||Qd("Cannot "+r),Ty=(t,e,r)=>(Cy(t,e,"read from private field"),r?r.call(t):e.get(t)),Ey=(t,e,r)=>e.has(t)?Qd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Ay=(t,e,r,i)=>(Cy(t,e,"write to private field"),i?i.call(t,r):e.set(t,r),r),yE=function(t,e){this[0]=t,this[1]=e},Oy=t=>{var e=t[Jd("asyncIterator")],r=!1,i,o={};return e==null?(e=t[Jd("iterator")](),i=s=>o[s]=n=>e[s](n)):(e=e.call(t),i=s=>o[s]=n=>{if(r){if(r=!1,s==="throw")throw n;return n}return r=!0,{done:!1,value:new yE(new Promise(a=>{var l=e[s](n);l instanceof Object||Qd("Object expected"),a(l)}),1)}}),o[Jd("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=s=>{throw s},"return"in e&&i("return"),o};var Qo=new WeakMap,Tn=new WeakMap,En=new WeakMap,eh=new WeakSet,Il=new WeakMap,ot=class{constructor(t,e){this.handleFormData=r=>{let i=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof o=="string"&&o.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{r.formData.append(o,a.toString())}):r.formData.append(o,s.toString()))},this.handleFormSubmit=r=>{var i;let o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Qo.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Il.set(this.host,[])},this.handleInteraction=r=>{let i=Il.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=gt({form:r=>{let i=r.form;if(i){let s=r.getRootNode().querySelector(`#${i}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Il.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Il.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Qo.has(this.form)?Qo.get(this.form).add(this.host):Qo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Tn.has(this.form)||(Tn.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),En.has(this.form)||(En.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=Qo.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Tn.has(this.form)&&(this.form.reportValidity=Tn.get(this.form),Tn.delete(this.form)),En.has(this.form)&&(this.form.checkValidity=En.get(this.form),En.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?eh.add(t):eh.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&r.setAttribute(i,e.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!eh.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},es=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),$y=Object.freeze(Nr(gt({},es),{valid:!1,valueMissing:!0})),Iy=Object.freeze(Nr(gt({},es),{valid:!1,customError:!0}));function th(t){let e=new FormData(t),r={};return e.forEach((i,o)=>{if(Reflect.has(r,o)){let s=r[o];Array.isArray(s)?s.push(i):r[o]=[r[o],i]}else r[o]=i}),r}var Pl=globalThis,Ll=Pl.ShadowRoot&&(Pl.ShadyCSS===void 0||Pl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rh=Symbol(),Py=new WeakMap,An=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==rh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Ll&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=Py.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Py.set(r,e))}return e}toString(){return this.cssText}},Ly=t=>new An(typeof t=="string"?t:t+"",void 0,rh),E=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new An(r,t,rh)},ih=(t,e)=>{if(Ll)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),o=Pl.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},zl=Ll?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Ly(r)})(t):t;var{is:vE,defineProperty:wE,getOwnPropertyDescriptor:_E,getOwnPropertyNames:xE,getOwnPropertySymbols:kE,getPrototypeOf:SE}=Object,Rl=globalThis,zy=Rl.trustedTypes,CE=zy?zy.emptyScript:"",TE=Rl.reactiveElementPolyfillSupport,On=(t,e)=>t,di={toAttribute(t,e){switch(e){case Boolean:t=t?CE:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Dl=(t,e)=>!vE(t,e),Ry={attribute:!0,type:String,converter:di,reflect:!1,hasChanged:Dl};Symbol.metadata??=Symbol("metadata"),Rl.litPropertyMetadata??=new WeakMap;var Fr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ry){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&wE(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){let{get:o,set:s}=_E(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return o?.call(this)},set(n){let a=o?.call(this);s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ry}static _$Ei(){if(this.hasOwnProperty(On("elementProperties")))return;let e=SE(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(On("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(On("properties"))){let r=this.properties,i=[...xE(r),...kE(r)];for(let o of i)this.createProperty(o,r[o])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)r.unshift(zl(o))}else e!==void 0&&r.push(zl(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ih(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:di).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=i.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:di;this._$Em=o,this[o]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Dl)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Fr.elementStyles=[],Fr.shadowRootOptions={mode:"open"},Fr[On("elementProperties")]=new Map,Fr[On("finalized")]=new Map,TE?.({ReactiveElement:Fr}),(Rl.reactiveElementVersions??=[]).push("2.0.4");var sh=globalThis,Ml=sh.trustedTypes,Dy=Ml?Ml.createPolicy("lit-html",{createHTML:t=>t}):void 0,nh="$lit$",Ur=`lit$${Math.random().toFixed(9).slice(2)}$`,ah="?"+Ur,EE=`<${ah}>`,io=document,In=()=>io.createComment(""),Pn=t=>t===null||typeof t!="object"&&typeof t!="function",lh=Array.isArray,Vy=t=>lh(t)||typeof t?.[Symbol.iterator]=="function",oh=`[ 	
\f\r]`,$n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,My=/-->/g,Ny=/>/g,to=RegExp(`>|${oh}(?:([^\\s"'>=/]+)(${oh}*=${oh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fy=/'/g,Uy=/"/g,jy=/^(?:script|style|textarea|title)$/i,ch=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x=ch(1),qy=ch(2),Hy=ch(3),st=Symbol.for("lit-noChange"),Oe=Symbol.for("lit-nothing"),By=new WeakMap,ro=io.createTreeWalker(io,129);function Wy(t,e){if(!lh(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dy!==void 0?Dy.createHTML(e):e}var Gy=(t,e)=>{let r=t.length-1,i=[],o,s=e===2?"<svg>":e===3?"<math>":"",n=$n;for(let a=0;a<r;a++){let l=t[a],c,d,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,d=n.exec(l),d!==null);)f=n.lastIndex,n===$n?d[1]==="!--"?n=My:d[1]!==void 0?n=Ny:d[2]!==void 0?(jy.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=to):d[3]!==void 0&&(n=to):n===to?d[0]===">"?(n=o??$n,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?to:d[3]==='"'?Uy:Fy):n===Uy||n===Fy?n=to:n===My||n===Ny?n=$n:(n=to,o=void 0);let m=n===to&&t[a+1].startsWith("/>")?" ":"";s+=n===$n?l+EE:h>=0?(i.push(c),l.slice(0,h)+nh+l.slice(h)+Ur+m):l+Ur+(h===-2?a:m)}return[Wy(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Ln=class t{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,d]=Gy(e,r);if(this.el=t.createElement(c,i),ro.currentNode=this.el.content,r===2||r===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ro.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(nh)){let f=d[n++],m=o.getAttribute(h).split(Ur),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Fl:g[1]==="?"?Ul:g[1]==="@"?Bl:so}),o.removeAttribute(h)}else h.startsWith(Ur)&&(l.push({type:6,index:s}),o.removeAttribute(h));if(jy.test(o.tagName)){let h=o.textContent.split(Ur),f=h.length-1;if(f>0){o.textContent=Ml?Ml.emptyScript:"";for(let m=0;m<f;m++)o.append(h[m],In()),ro.nextNode(),l.push({type:2,index:++s});o.append(h[f],In())}}}else if(o.nodeType===8)if(o.data===ah)l.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Ur,h+1))!==-1;)l.push({type:7,index:s}),h+=Ur.length-1}s++}}static createElement(e,r){let i=io.createElement("template");return i.innerHTML=e,i}};function oo(t,e,r=t,i){if(e===st)return e;let o=i!==void 0?r._$Co?.[i]:r._$Cl,s=Pn(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=o:r._$Cl=o),o!==void 0&&(e=oo(t,o._$AS(t,e.values),o,i)),e}var Nl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,o=(e?.creationScope??io).importNode(r,!0);ro.currentNode=o;let s=ro.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new ts(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Vl(s,this,e)),this._$AV.push(c),l=i[++a]}n!==l?.index&&(s=ro.nextNode(),n++)}return ro.currentNode=io,o}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},ts=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,o){this.type=2,this._$AH=Oe,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=oo(this,e,r),Pn(e)?e===Oe||e==null||e===""?(this._$AH!==Oe&&this._$AR(),this._$AH=Oe):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vy(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Oe&&Pn(this._$AH)?this._$AA.nextSibling.data=e:this.T(io.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ln.createElement(Wy(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(r);else{let s=new Nl(o,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=By.get(e.strings);return r===void 0&&By.set(e.strings,r=new Ln(e)),r}k(e){lh(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,o=0;for(let s of e)o===r.length?r.push(i=new t(this.O(In()),this.O(In()),this,this.options)):i=r[o],i._$AI(s),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},so=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,s){this.type=1,this._$AH=Oe,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Oe}_$AI(e,r=this,i,o){let s=this.strings,n=!1;if(s===void 0)e=oo(this,e,r,0),n=!Pn(e)||e!==this._$AH&&e!==st,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=oo(this,a[i+l],r,l),c===st&&(c=this._$AH[l]),n||=!Pn(c)||c!==this._$AH[l],c===Oe?e=Oe:e!==Oe&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===Oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fl=class extends so{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Oe?void 0:e}},Ul=class extends so{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Oe)}},Bl=class extends so{constructor(e,r,i,o,s){super(e,r,i,o,s),this.type=5}_$AI(e,r=this){if((e=oo(this,e,r,0)??Oe)===st)return;let i=this._$AH,o=e===Oe&&i!==Oe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Oe&&(i===Oe||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Vl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){oo(this,e)}},Ky={M:nh,P:Ur,A:ah,C:1,L:Gy,R:Nl,D:Vy,V:oo,I:ts,H:so,N:Ul,U:Bl,B:Fl,F:Vl},AE=sh.litHtmlPolyfillSupport;AE?.(Ln,ts),(sh.litHtmlVersions??=[]).push("3.2.1");var Zy=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(o===void 0){let s=r?.renderBefore??null;i._$litPart$=o=new ts(e.insertBefore(In(),s),s,void 0,r??{})}return o._$AI(t),o};var hi=class extends Fr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zy(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};hi._$litElement$=!0,hi.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:hi});var OE=globalThis.litElementPolyfillSupport;OE?.({LitElement:hi});(globalThis.litElementVersions??=[]).push("4.1.1");var Yy=E`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var O=E`
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
`;var $E={attribute:!0,type:String,converter:di,reflect:!1,hasChanged:Dl},IE=(t=$E,e,r)=>{let{kind:i,metadata:o}=r,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),i==="accessor"){let{name:n}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){let{name:n}=r;return function(a){let l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,r)=>typeof r=="object"?IE(t,e,r):((i,o,s)=>{let n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function D(t){return p({...t,state:!0,attribute:!1})}function Cr(t){return(e,r)=>{let i=typeof e=="function"?e:e[r];Object.assign(i,t)}}var pi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function A(t,e){return(r,i,o)=>{let s=n=>n.renderRoot?.querySelector(t)??null;if(e){let{get:n,set:a}=typeof i=="object"?r:o??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return pi(r,i,{get(){let l=n.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return pi(r,i,{get(){return s(this)}})}}function Xy(t){return(e,r)=>pi(e,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var jl,T=class extends hi{constructor(){super(),Ey(this,jl,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let o=" (unknown version)",s=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(o&&s&&o===s)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,r){Ty(this,jl)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Ay(this,jl,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};jl=new WeakMap;T.version="2.19.0";T.dependencies={};u([p()],T.prototype,"dir",2);u([p()],T.prototype,"lang",2);var zn=class extends T{render(){return x` <slot></slot> `}};zn.styles=[O,Yy];zn.define("sl-visually-hidden");var Jy=E`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;var Qy=E`
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
`;var uh=new Set,rs=new Map,no,dh="ltr",hh="en",ev=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ev){let t=new MutationObserver(tv);dh=document.documentElement.dir||"ltr",hh=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Rn(...t){t.map(e=>{let r=e.$code.toLowerCase();rs.has(r)?rs.set(r,Object.assign(Object.assign({},rs.get(r)),e)):rs.set(r,e),no||(no=e)}),tv()}function tv(){ev&&(dh=document.documentElement.dir||"ltr",hh=document.documentElement.lang||navigator.language),[...uh.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ql=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){uh.add(this.host)}hostDisconnected(){uh.delete(this.host)}dir(){return`${this.host.dir||dh}`.toLowerCase()}lang(){return`${this.host.lang||hh}`.toLowerCase()}getTranslationData(e){var r,i;let o=new Intl.Locale(e.replace(/_/g,"-")),s=o?.language.toLowerCase(),n=(i=(r=o?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=rs.get(`${s}-${n}`),l=rs.get(s);return{locale:o,language:s,region:n,primary:a,secondary:l}}exists(e,r){var i;let{primary:o,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[e]||s&&s[e]||r.includeFallback&&no&&no[e])}term(e,...r){let{primary:i,secondary:o}=this.getTranslationData(this.lang()),s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(no&&no[e])s=no[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...r):s}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var rv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Rn(rv);var iv=rv;var G=class extends ql{};Rn(iv);var Tr=Math.min,vt=Math.max,Mn=Math.round,Nn=Math.floor,lr=t=>({x:t,y:t}),PE={left:"right",right:"left",bottom:"top",top:"bottom"},LE={start:"end",end:"start"};function Wl(t,e,r){return vt(t,Tr(e,r))}function ao(t,e){return typeof t=="function"?t(e):t}function Br(t){return t.split("-")[0]}function lo(t){return t.split("-")[1]}function ph(t){return t==="x"?"y":"x"}function Gl(t){return t==="y"?"height":"width"}function fi(t){return["top","bottom"].includes(Br(t))?"y":"x"}function Kl(t){return ph(fi(t))}function ov(t,e,r){r===void 0&&(r=!1);let i=lo(t),o=Kl(t),s=Gl(o),n=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=Dn(n)),[n,Dn(n)]}function sv(t){let e=Dn(t);return[Hl(t),e,Hl(e)]}function Hl(t){return t.replace(/start|end/g,e=>LE[e])}function zE(t,e,r){let i=["left","right"],o=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return r?e?o:i:e?i:o;case"left":case"right":return e?s:n;default:return[]}}function nv(t,e,r,i){let o=lo(t),s=zE(Br(t),r==="start",i);return o&&(s=s.map(n=>n+"-"+o),e&&(s=s.concat(s.map(Hl)))),s}function Dn(t){return t.replace(/left|right|bottom|top/g,e=>PE[e])}function RE(t){return{top:0,right:0,bottom:0,left:0,...t}}function fh(t){return typeof t!="number"?RE(t):{top:t,right:t,bottom:t,left:t}}function co(t){let{x:e,y:r,width:i,height:o}=t;return{width:i,height:o,top:r,left:e,right:e+i,bottom:r+o,x:e,y:r}}function av(t,e,r){let{reference:i,floating:o}=t,s=fi(e),n=Kl(e),a=Gl(n),l=Br(e),c=s==="y",d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2,m;switch(l){case"top":m={x:d,y:i.y-o.height};break;case"bottom":m={x:d,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:h};break;case"left":m={x:i.x-o.width,y:h};break;default:m={x:i.x,y:i.y}}switch(lo(e)){case"start":m[n]-=f*(r&&c?-1:1);break;case"end":m[n]+=f*(r&&c?-1:1);break}return m}var lv=async(t,e,r)=>{let{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:n}=r,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e)),c=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=av(c,i,l),f=i,m={},g=0;for(let b=0;b<a.length;b++){let{name:v,fn:_}=a[b],{x:w,y:k,data:y,reset:S}=await _({x:d,y:h,initialPlacement:i,placement:f,strategy:o,middlewareData:m,rects:c,platform:n,elements:{reference:t,floating:e}});d=w??d,h=k??h,m={...m,[v]:{...m[v],...y}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):S.rects),{x:d,y:h}=av(c,f,l)),b=-1)}return{x:d,y:h,placement:f,strategy:o,middlewareData:m}};async function Zl(t,e){var r;e===void 0&&(e={});let{x:i,y:o,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=ao(e,t),g=fh(m),v=a[f?h==="floating"?"reference":"floating":h],_=co(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(v)))==null||r?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),w=h==="floating"?{x:i,y:o,width:n.floating.width,height:n.floating.height}:n.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},S=co(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:k,strategy:l}):w);return{top:(_.top-S.top+g.top)/y.y,bottom:(S.bottom-_.bottom+g.bottom)/y.y,left:(_.left-S.left+g.left)/y.x,right:(S.right-_.right+g.right)/y.x}}var cv=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:i,placement:o,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=ao(t,e)||{};if(c==null)return{};let h=fh(d),f={x:r,y:i},m=Kl(o),g=Gl(m),b=await n.getDimensions(c),v=m==="y",_=v?"top":"left",w=v?"bottom":"right",k=v?"clientHeight":"clientWidth",y=s.reference[g]+s.reference[m]-f[m]-s.floating[g],S=f[m]-s.reference[m],M=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c)),H=M?M[k]:0;(!H||!await(n.isElement==null?void 0:n.isElement(M)))&&(H=a.floating[k]||s.floating[g]);let V=y/2-S/2,R=H/2-b[g]/2-1,P=Tr(h[_],R),ee=Tr(h[w],R),Y=P,ve=H-b[g]-ee,he=H/2-b[g]/2+V,lt=Wl(Y,he,ve),ht=!l.arrow&&lo(o)!=null&&he!==lt&&s.reference[g]/2-(he<Y?P:ee)-b[g]/2<0,pt=ht?he<Y?he-Y:he-ve:0;return{[m]:f[m]+pt,data:{[m]:lt,centerOffset:he-lt-pt,...ht&&{alignmentOffset:pt}},reset:ht}}});var uv=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;let{placement:o,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...v}=ao(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};let _=Br(o),w=fi(a),k=Br(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=f||(k||!b?[Dn(a)]:sv(a)),M=g!=="none";!f&&M&&S.push(...nv(a,b,g,y));let H=[a,...S],V=await Zl(e,v),R=[],P=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&R.push(V[_]),h){let he=ov(o,n,y);R.push(V[he[0]],V[he[1]])}if(P=[...P,{placement:o,overflows:R}],!R.every(he=>he<=0)){var ee,Y;let he=(((ee=s.flip)==null?void 0:ee.index)||0)+1,lt=H[he];if(lt)return{data:{index:he,overflows:P},reset:{placement:lt}};let ht=(Y=P.filter(pt=>pt.overflows[0]<=0).sort((pt,or)=>pt.overflows[1]-or.overflows[1])[0])==null?void 0:Y.placement;if(!ht)switch(m){case"bestFit":{var ve;let pt=(ve=P.filter(or=>{if(M){let Wr=fi(or.placement);return Wr===w||Wr==="y"}return!0}).map(or=>[or.placement,or.overflows.filter(Wr=>Wr>0).reduce((Wr,xw)=>Wr+xw,0)]).sort((or,Wr)=>or[1]-Wr[1])[0])==null?void 0:ve[0];pt&&(ht=pt);break}case"initialPlacement":ht=a;break}if(o!==ht)return{reset:{placement:ht}}}return{}}}};async function DE(t,e){let{placement:r,platform:i,elements:o}=t,s=await(i.isRTL==null?void 0:i.isRTL(o.floating)),n=Br(r),a=lo(r),l=fi(r)==="y",c=["left","top"].includes(n)?-1:1,d=s&&l?-1:1,h=ao(e,t),{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*d,y:f*c}:{x:f*c,y:m*d}}var dv=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;let{x:o,y:s,placement:n,middlewareData:a}=e,l=await DE(e,t);return n===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:n}}}}},hv=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:i,placement:o}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:v=>{let{x:_,y:w}=v;return{x:_,y:w}}},...l}=ao(t,e),c={x:r,y:i},d=await Zl(e,l),h=fi(Br(o)),f=ph(h),m=c[f],g=c[h];if(s){let v=f==="y"?"top":"left",_=f==="y"?"bottom":"right",w=m+d[v],k=m-d[_];m=Wl(w,m,k)}if(n){let v=h==="y"?"top":"left",_=h==="y"?"bottom":"right",w=g+d[v],k=g-d[_];g=Wl(w,g,k)}let b=a.fn({...e,[f]:m,[h]:g});return{...b,data:{x:b.x-r,y:b.y-i,enabled:{[f]:s,[h]:n}}}}}};var pv=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;let{placement:o,rects:s,platform:n,elements:a}=e,{apply:l=()=>{},...c}=ao(t,e),d=await Zl(e,c),h=Br(o),f=lo(o),m=fi(o)==="y",{width:g,height:b}=s.floating,v,_;h==="top"||h==="bottom"?(v=h,_=f===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=h,v=f==="end"?"top":"bottom");let w=b-d.top-d.bottom,k=g-d.left-d.right,y=Tr(b-d[v],w),S=Tr(g-d[_],k),M=!e.middlewareData.shift,H=y,V=S;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(V=k),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(H=w),M&&!f){let P=vt(d.left,0),ee=vt(d.right,0),Y=vt(d.top,0),ve=vt(d.bottom,0);m?V=g-2*(P!==0||ee!==0?P+ee:vt(d.left,d.right)):H=b-2*(Y!==0||ve!==0?Y+ve:vt(d.top,d.bottom))}await l({...e,availableWidth:V,availableHeight:H});let R=await n.getDimensions(a.floating);return g!==R.width||b!==R.height?{reset:{rects:!0}}:{}}}};function Yl(){return typeof window<"u"}function uo(t){return mv(t)?(t.nodeName||"").toLowerCase():"#document"}function Ct(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function cr(t){var e;return(e=(mv(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function mv(t){return Yl()?t instanceof Node||t instanceof Ct(t).Node:!1}function Gt(t){return Yl()?t instanceof Element||t instanceof Ct(t).Element:!1}function ur(t){return Yl()?t instanceof HTMLElement||t instanceof Ct(t).HTMLElement:!1}function fv(t){return!Yl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ct(t).ShadowRoot}function os(t){let{overflow:e,overflowX:r,overflowY:i,display:o}=Kt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(o)}function gv(t){return["table","td","th"].includes(uo(t))}function Fn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ss(t){let e=Xl(),r=Gt(t)?Kt(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function bv(t){let e=Vr(t);for(;ur(e)&&!ho(e);){if(ss(e))return e;if(Fn(e))return null;e=Vr(e)}return null}function Xl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ho(t){return["html","body","#document"].includes(uo(t))}function Kt(t){return Ct(t).getComputedStyle(t)}function Un(t){return Gt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Vr(t){if(uo(t)==="html")return t;let e=t.assignedSlot||t.parentNode||fv(t)&&t.host||cr(t);return fv(e)?e.host:e}function yv(t){let e=Vr(t);return ho(e)?t.ownerDocument?t.ownerDocument.body:t.body:ur(e)&&os(e)?e:yv(e)}function is(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);let o=yv(t),s=o===((i=t.ownerDocument)==null?void 0:i.body),n=Ct(o);if(s){let a=Jl(n);return e.concat(n,n.visualViewport||[],os(o)?o:[],a&&r?is(a):[])}return e.concat(o,is(o,[],r))}function Jl(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _v(t){let e=Kt(t),r=parseFloat(e.width)||0,i=parseFloat(e.height)||0,o=ur(t),s=o?t.offsetWidth:r,n=o?t.offsetHeight:i,a=Mn(r)!==s||Mn(i)!==n;return a&&(r=s,i=n),{width:r,height:i,$:a}}function gh(t){return Gt(t)?t:t.contextElement}function ns(t){let e=gh(t);if(!ur(e))return lr(1);let r=e.getBoundingClientRect(),{width:i,height:o,$:s}=_v(e),n=(s?Mn(r.width):r.width)/i,a=(s?Mn(r.height):r.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}var ME=lr(0);function xv(t){let e=Ct(t);return!Xl()||!e.visualViewport?ME:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function NE(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ct(t)?!1:e}function po(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);let o=t.getBoundingClientRect(),s=gh(t),n=lr(1);e&&(i?Gt(i)&&(n=ns(i)):n=ns(t));let a=NE(s,r,i)?xv(s):lr(0),l=(o.left+a.x)/n.x,c=(o.top+a.y)/n.y,d=o.width/n.x,h=o.height/n.y;if(s){let f=Ct(s),m=i&&Gt(i)?Ct(i):i,g=f,b=Jl(g);for(;b&&i&&m!==g;){let v=ns(b),_=b.getBoundingClientRect(),w=Kt(b),k=_.left+(b.clientLeft+parseFloat(w.paddingLeft))*v.x,y=_.top+(b.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,c*=v.y,d*=v.x,h*=v.y,l+=k,c+=y,g=Ct(b),b=Jl(g)}}return co({width:d,height:h,x:l,y:c})}function bh(t,e){let r=Un(t).scrollLeft;return e?e.left+r:po(cr(t)).left+r}function kv(t,e,r){r===void 0&&(r=!1);let i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-(r?0:bh(t,i)),s=i.top+e.scrollTop;return{x:o,y:s}}function FE(t){let{elements:e,rect:r,offsetParent:i,strategy:o}=t,s=o==="fixed",n=cr(i),a=e?Fn(e.floating):!1;if(i===n||a&&s)return r;let l={scrollLeft:0,scrollTop:0},c=lr(1),d=lr(0),h=ur(i);if((h||!h&&!s)&&((uo(i)!=="body"||os(n))&&(l=Un(i)),ur(i))){let m=po(i);c=ns(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}let f=n&&!h&&!s?kv(n,l,!0):lr(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+d.x+f.x,y:r.y*c.y-l.scrollTop*c.y+d.y+f.y}}function UE(t){return Array.from(t.getClientRects())}function BE(t){let e=cr(t),r=Un(t),i=t.ownerDocument.body,o=vt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=vt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),n=-r.scrollLeft+bh(t),a=-r.scrollTop;return Kt(i).direction==="rtl"&&(n+=vt(e.clientWidth,i.clientWidth)-o),{width:o,height:s,x:n,y:a}}function VE(t,e){let r=Ct(t),i=cr(t),o=r.visualViewport,s=i.clientWidth,n=i.clientHeight,a=0,l=0;if(o){s=o.width,n=o.height;let c=Xl();(!c||c&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:n,x:a,y:l}}function jE(t,e){let r=po(t,!0,e==="fixed"),i=r.top+t.clientTop,o=r.left+t.clientLeft,s=ur(t)?ns(t):lr(1),n=t.clientWidth*s.x,a=t.clientHeight*s.y,l=o*s.x,c=i*s.y;return{width:n,height:a,x:l,y:c}}function vv(t,e,r){let i;if(e==="viewport")i=VE(t,r);else if(e==="document")i=BE(cr(t));else if(Gt(e))i=jE(e,r);else{let o=xv(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return co(i)}function Sv(t,e){let r=Vr(t);return r===e||!Gt(r)||ho(r)?!1:Kt(r).position==="fixed"||Sv(r,e)}function qE(t,e){let r=e.get(t);if(r)return r;let i=is(t,[],!1).filter(a=>Gt(a)&&uo(a)!=="body"),o=null,s=Kt(t).position==="fixed",n=s?Vr(t):t;for(;Gt(n)&&!ho(n);){let a=Kt(n),l=ss(n);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||os(n)&&!l&&Sv(t,n))?i=i.filter(d=>d!==n):o=a,n=Vr(n)}return e.set(t,i),i}function HE(t){let{element:e,boundary:r,rootBoundary:i,strategy:o}=t,n=[...r==="clippingAncestors"?Fn(e)?[]:qE(e,this._c):[].concat(r),i],a=n[0],l=n.reduce((c,d)=>{let h=vv(e,d,o);return c.top=vt(h.top,c.top),c.right=Tr(h.right,c.right),c.bottom=Tr(h.bottom,c.bottom),c.left=vt(h.left,c.left),c},vv(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function WE(t){let{width:e,height:r}=_v(t);return{width:e,height:r}}function GE(t,e,r){let i=ur(e),o=cr(e),s=r==="fixed",n=po(t,!0,s,e),a={scrollLeft:0,scrollTop:0},l=lr(0);if(i||!i&&!s)if((uo(e)!=="body"||os(o))&&(a=Un(e)),i){let f=po(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else o&&(l.x=bh(o));let c=o&&!i&&!s?kv(o,a):lr(0),d=n.left+a.scrollLeft-l.x-c.x,h=n.top+a.scrollTop-l.y-c.y;return{x:d,y:h,width:n.width,height:n.height}}function mh(t){return Kt(t).position==="static"}function wv(t,e){if(!ur(t)||Kt(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return cr(t)===r&&(r=r.ownerDocument.body),r}function Cv(t,e){let r=Ct(t);if(Fn(t))return r;if(!ur(t)){let o=Vr(t);for(;o&&!ho(o);){if(Gt(o)&&!mh(o))return o;o=Vr(o)}return r}let i=wv(t,e);for(;i&&gv(i)&&mh(i);)i=wv(i,e);return i&&ho(i)&&mh(i)&&!ss(i)?r:i||bv(t)||r}var KE=async function(t){let e=this.getOffsetParent||Cv,r=this.getDimensions,i=await r(t.floating);return{reference:GE(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ZE(t){return Kt(t).direction==="rtl"}var Bn={convertOffsetParentRelativeRectToViewportRelativeRect:FE,getDocumentElement:cr,getClippingRect:HE,getOffsetParent:Cv,getElementRects:KE,getClientRects:UE,getDimensions:WE,getScale:ns,isElement:Gt,isRTL:ZE};function YE(t,e){let r=null,i,o=cr(t);function s(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();let{left:c,top:d,width:h,height:f}=t.getBoundingClientRect();if(a||e(),!h||!f)return;let m=Nn(d),g=Nn(o.clientWidth-(c+h)),b=Nn(o.clientHeight-(d+f)),v=Nn(c),w={rootMargin:-m+"px "+-g+"px "+-b+"px "+-v+"px",threshold:vt(0,Tr(1,l))||1},k=!0;function y(S){let M=S[0].intersectionRatio;if(M!==l){if(!k)return n();M?n(!1,M):i=setTimeout(()=>{n(!1,1e-7)},1e3)}k=!1}try{r=new IntersectionObserver(y,{...w,root:o.ownerDocument})}catch{r=new IntersectionObserver(y,w)}r.observe(t)}return n(!0),s}function Tv(t,e,r,i){i===void 0&&(i={});let{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=gh(t),d=o||s?[...c?is(c):[],...is(e)]:[];d.forEach(_=>{o&&_.addEventListener("scroll",r,{passive:!0}),s&&_.addEventListener("resize",r)});let h=c&&a?YE(c,r):null,f=-1,m=null;n&&(m=new ResizeObserver(_=>{let[w]=_;w&&w.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var k;(k=m)==null||k.observe(e)})),r()}),c&&!l&&m.observe(c),m.observe(e));let g,b=l?po(t):null;l&&v();function v(){let _=po(t);b&&(_.x!==b.x||_.y!==b.y||_.width!==b.width||_.height!==b.height)&&r(),b=_,g=requestAnimationFrame(v)}return r(),()=>{var _;d.forEach(w=>{o&&w.removeEventListener("scroll",r),s&&w.removeEventListener("resize",r)}),h?.(),(_=m)==null||_.disconnect(),m=null,l&&cancelAnimationFrame(g)}}var Ev=dv;var Av=hv,Ov=uv,yh=pv;var $v=cv;var Iv=(t,e,r)=>{let i=new Map,o={platform:Bn,...r},s={...o.platform,_c:i};return lv(t,e,{...o,platform:s})};var wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dr=t=>(...e)=>({_$litDirective$:t,values:e}),Zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var L=dr(class extends Zt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return st}});function Pv(t){return XE(t)}function vh(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function XE(t){for(let e=t;e;e=vh(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=vh(t);e;e=vh(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||ss(r)||e.tagName==="BODY"))return e}return null}function JE(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var me=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),i=0,o=0,s=0,n=0,a=0,l=0,c=0,d=0;r?t.top<e.top?(i=t.left,o=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,o=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,o=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,o=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||JE(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Tv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Ev({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(yh({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ov({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Av({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(yh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push($v({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>Bn.getOffsetParent(r,Pv):Bn.getOffsetParent;Iv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Nr(gt({},Bn),{getOffsetParent:e})}).then(({x:r,y:i,middlewareData:o,placement:s})=>{let n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let l=o.arrow.x,c=o.arrow.y,d="",h="",f="",m="";if(this.arrowPlacement==="start"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":g,m=n?g:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:f,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${L({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${L({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};me.styles=[O,Qy];u([A(".popup")],me.prototype,"popup",2);u([A(".popup__arrow")],me.prototype,"arrowEl",2);u([p()],me.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],me.prototype,"active",2);u([p({reflect:!0})],me.prototype,"placement",2);u([p({reflect:!0})],me.prototype,"strategy",2);u([p({type:Number})],me.prototype,"distance",2);u([p({type:Number})],me.prototype,"skidding",2);u([p({type:Boolean})],me.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],me.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],me.prototype,"arrowPadding",2);u([p({type:Boolean})],me.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],me.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],me.prototype,"flipFallbackStrategy",2);u([p({type:Object})],me.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],me.prototype,"flipPadding",2);u([p({type:Boolean})],me.prototype,"shift",2);u([p({type:Object})],me.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],me.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],me.prototype,"autoSize",2);u([p()],me.prototype,"sync",2);u([p({type:Object})],me.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],me.prototype,"autoSizePadding",2);u([p({attribute:"hover-bridge",type:Boolean})],me.prototype,"hoverBridge",2);var zv=new Map,QE=new WeakMap;function eA(t){return t??{keyframes:[],options:{duration:0}}}function Lv(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function de(t,e){zv.set(t,eA(e))}function be(t,e,r){let i=QE.get(t);if(i?.[e])return Lv(i[e],r.dir);let o=zv.get(e);return o?Lv(o,r.dir):{keyframes:[],options:{duration:0}}}function He(t,e){return new Promise(r=>{function i(o){o.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}function ke(t,e,r){return new Promise(i=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let o=t.animate(e,Nr(gt({},r),{duration:Ql()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function wh(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ql(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function $e(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}function as(t,e){return t.map(r=>Nr(gt({},r),{height:r.height==="auto"?`${e}px`:r.height}))}function C(t,e){let r=gt({waitUntilFirstUpdate:!1},e);return(i,o)=>{let{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{let c=l;if(a.has(c)){let d=a.get(c),h=this[c];d!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,h)}}),s.call(this,a)}}}var Ye=class extends T{constructor(){super(),this.localize=new G(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=wh(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=wh(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await $e(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:r,options:i}=be(this,"tooltip.show",{dir:this.localize.dir()});await ke(this.popup.popup,r,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await $e(this.body);let{keyframes:r,options:i}=be(this,"tooltip.hide",{dir:this.localize.dir()});await ke(this.popup.popup,r,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}render(){return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${L({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ye.styles=[O,Jy];Ye.dependencies={"sl-popup":me};u([A("slot:not([name])")],Ye.prototype,"defaultSlot",2);u([A(".tooltip__body")],Ye.prototype,"body",2);u([A("sl-popup")],Ye.prototype,"popup",2);u([p()],Ye.prototype,"content",2);u([p()],Ye.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);u([p({type:Number})],Ye.prototype,"distance",2);u([p({type:Boolean,reflect:!0})],Ye.prototype,"open",2);u([p({type:Number})],Ye.prototype,"skidding",2);u([p()],Ye.prototype,"trigger",2);u([p({type:Boolean})],Ye.prototype,"hoist",2);u([C("open",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleOpenChange",1);u([C(["content","distance","hoist","placement","skidding"])],Ye.prototype,"handleOptionsChange",1);u([C("disabled")],Ye.prototype,"handleDisabledChange",1);de("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});de("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ye.define("sl-tooltip");var Rv=E`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;var Dv=E`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var Mv=E`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;var Yt=(t="value")=>(e,r)=>{let i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,a){var l;let c=i.getPropertyOptions(t),d=typeof c.attribute=="string"?c.attribute:t;if(s===d){let h=c.converter||di,m=(typeof h=="function"?h:(l=h?.fromAttribute)!=null?l:di.fromAttribute)(a,c.type);this[t]!==m&&(this[r]=m)}o.call(this,s,n,a)}};var Tt=E`
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
`;var Se=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Nv(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),r="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var _h="";function ls(t){_h=t}function ec(t=""){if(!_h){let e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)ls(r.getAttribute("data-shoelace"));else{let i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),o="";i&&(o=i.getAttribute("src")),ls(o.split("/").slice(0,-1).join("/"))}}return _h.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var tA={name:"default",resolver:t=>ec(`assets/icons/${t}.svg`)},Fv=tA;var Uv={caret:`
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
  `},rA={name:"system",resolver:t=>t in Uv?`data:image/svg+xml,${encodeURIComponent(Uv[t])}`:""},Bv=rA;var iA=[Fv,Bv],xh=[];function Vv(t){xh.push(t)}function jv(t){xh=xh.filter(e=>e!==t)}function kh(t){return iA.find(e=>e.name===t)}var qv=E`
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
`;var{I:k4}=Ky;var Hv=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var tc=t=>t.strings===void 0;var oA={},Wv=(t,e=oA)=>t._$AH=e;var Vn=Symbol(),rc=Symbol(),Sh,Ch=new Map,ie=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e?.spriteSheet)return this.svg=x`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Vn:rc}catch{return rc}try{let o=document.createElement("div");o.innerHTML=await i.text();let s=o.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return Vn;Sh||(Sh=new DOMParser);let a=Sh.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Vn}catch{return Vn}}connectedCallback(){super.connectedCallback(),Vv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),jv(this)}getIconSource(){let t=kh(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:r}=this.getIconSource(),i=r?kh(this.library):void 0;if(!e){this.svg=null;return}let o=Ch.get(e);if(o||(o=this.resolveIcon(e,i),Ch.set(e,o)),!this.initialRender)return;let s=await o;if(s===rc&&Ch.delete(e),e===this.getIconSource().url){if(Hv(s)){if(this.svg=s,i){await this.updateComplete;let n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(s){case rc:case Vn:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ie.styles=[O,qv];u([D()],ie.prototype,"svg",2);u([p({reflect:!0})],ie.prototype,"name",2);u([p()],ie.prototype,"src",2);u([p()],ie.prototype,"label",2);u([p({reflect:!0})],ie.prototype,"library",2);u([C("label")],ie.prototype,"handleLabelChange",1);u([C(["name","src","library"])],ie.prototype,"setIcon",1);var N=t=>t??Oe;var Nt=dr(class extends Zt{constructor(t){if(super(t),t.type!==wt.PROPERTY&&t.type!==wt.ATTRIBUTE&&t.type!==wt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!tc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===st||e===Oe)return e;let r=t.element,i=t.name;if(t.type===wt.PROPERTY){if(e===r[i])return st}else if(t.type===wt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return st}else if(t.type===wt.ATTRIBUTE&&r.getAttribute(i)===e+"")return st;return Wv(t),e}});var Ke=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .indeterminate=${Nt(this.indeterminate)}
            .checked=${Nt(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?x`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?x`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
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
    `}};Ke.styles=[O,Tt,Mv];Ke.dependencies={"sl-icon":ie};u([A('input[type="checkbox"]')],Ke.prototype,"input",2);u([D()],Ke.prototype,"hasFocus",2);u([p()],Ke.prototype,"title",2);u([p()],Ke.prototype,"name",2);u([p()],Ke.prototype,"value",2);u([p({reflect:!0})],Ke.prototype,"size",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"checked",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"indeterminate",2);u([Yt("checked")],Ke.prototype,"defaultChecked",2);u([p({reflect:!0})],Ke.prototype,"form",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"required",2);u([p({attribute:"help-text"})],Ke.prototype,"helpText",2);u([C("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);u([C(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ke.prototype,"handleStateChange",1);var Gv=E`
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
`;var jr=class extends T{constructor(){super(...arguments),this.localize=new G(this)}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};jr.styles=[O,Gv];function Th(t,e,r){return t?e(t):r?.(t)}var Ge=class Eh extends T{constructor(){super(...arguments),this.localize=new G(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await $e(this.childrenContainer);let{keyframes:e,options:r}=be(this,"tree-item.collapse",{dir:this.localize.dir()});await ke(this.childrenContainer,as(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&Eh.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await $e(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:r}=be(this,"tree-item.expand",{dir:this.localize.dir()});await ke(this.childrenContainer,as(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Eh.isTreeItem(r)&&(e||!r.disabled)):[]}render(){let e=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return x`
      <div
        part="base"
        class="${L({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${L({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Th(this.loading,()=>x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Th(this.selectable,()=>x`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Nt(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ge.styles=[O,Dv];Ge.dependencies={"sl-checkbox":Ke,"sl-icon":ie,"sl-spinner":jr};u([D()],Ge.prototype,"indeterminate",2);u([D()],Ge.prototype,"isLeaf",2);u([D()],Ge.prototype,"loading",2);u([D()],Ge.prototype,"selectable",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"expanded",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"selected",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"lazy",2);u([A("slot:not([name])")],Ge.prototype,"defaultSlot",2);u([A("slot[name=children]")],Ge.prototype,"childrenSlot",2);u([A(".tree-item__item")],Ge.prototype,"itemElement",2);u([A(".tree-item__children")],Ge.prototype,"childrenContainer",2);u([A(".tree-item__expand-button slot")],Ge.prototype,"expandButtonSlot",2);u([C("loading",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLoadingChange",1);u([C("disabled")],Ge.prototype,"handleDisabledChange",1);u([C("selected")],Ge.prototype,"handleSelectedChange",1);u([C("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandedChange",1);u([C("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandAnimation",1);u([C("lazy",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLazyChange",1);var fo=Ge;de("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});de("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Me(t,e,r){let i=o=>Object.is(o,-0)?0:o;return t<e?i(e):t>r?i(r):i(t)}function Kv(t,e=!1){function r(s){let n=s.getChildrenItems({includeDisabled:!1});if(n.length){let a=n.every(c=>c.selected),l=n.every(c=>!c.selected&&!c.indeterminate);s.selected=a,s.indeterminate=!a&&!l}}function i(s){let n=s.parentElement;fo.isTreeItem(n)&&(r(n),i(n))}function o(s){for(let n of s.getChildrenItems())n.selected=e?s.selected||n.selected:!n.disabled&&s.selected,o(n);e&&r(s)}o(t),i(t)}var mi=class extends T{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new G(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{let r=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(r===null?t.append(i):r.hasAttribute("data-default")&&r.replaceWith(i))})},this.handleTreeChanged=t=>{for(let e of t){let r=[...e.addedNodes].filter(fo.isTreeItem),i=[...e.removedNodes].filter(fo.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),fo.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){let r=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){let i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Kv(t);else if(this.selection==="single"||t.isLeaf){let i=this.getAllTreeItems();for(let o of i)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let r=this.selectedItems;(e.length!==r.length||r.some(i=>!e.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var s;return["input","textarea"].includes((s=o?.tagName)==null?void 0:s.toLowerCase())}))return;let e=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();let o=e.findIndex(l=>l.matches(":focus")),s=e[o],n=l=>{let c=e[Me(l,0,e.length-1)];this.focusItem(c)},a=l=>{s.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(o+1):a(!0):r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(o-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){let e=t.target,r=e.closest("sl-tree-item"),i=t.composedPath().some(o=>{var s;return(s=o?.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||e!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(let r of e)r.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Kv(r,!0)))}get selectedItems(){let t=this.getAllTreeItems(),e=r=>r.selected;return t.filter(e)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(r=>{var i;if(r.disabled)return!1;let o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(r),!e.has(r)})}render(){return x`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};mi.styles=[O,Rv];u([A("slot:not([name])")],mi.prototype,"defaultSlot",2);u([A("slot[name=expand-icon]")],mi.prototype,"expandedIconSlot",2);u([A("slot[name=collapse-icon]")],mi.prototype,"collapsedIconSlot",2);u([p()],mi.prototype,"selection",2);u([C("selection")],mi.prototype,"handleSelectionChange",1);mi.define("sl-tree");fo.define("sl-tree-item");var Zv=E`
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
`;var sA=0,cs=class extends T{constructor(){super(...arguments),this.attrId=++sA,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return x`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};cs.styles=[O,Zv];u([p({reflect:!0})],cs.prototype,"name",2);u([p({type:Boolean,reflect:!0})],cs.prototype,"active",2);u([C("active")],cs.prototype,"handleActiveChange",1);cs.define("sl-tab-panel");var Yv=E`
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
`;var Xv=E`
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
`;var Qv=Symbol.for(""),nA=t=>{if(t?.r===Qv)return t?._$litStatic$};var us=(t,...e)=>({_$litStatic$:e.reduce((r,i,o)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Qv}),Jv=new Map,Ah=t=>(e,...r)=>{let i=r.length,o,s,n=[],a=[],l,c=0,d=!1;for(;c<i;){for(l=e[c];c<i&&(s=r[c],(o=nA(s))!==void 0);)l+=o+e[++c],d=!0;c!==i&&a.push(s),n.push(l),c++}if(c===i&&n.push(e[i]),d){let h=n.join("$$lit$$");(e=Jv.get(h))===void 0&&(n.raw=n,Jv.set(h,e=n)),r=a}return t(e,...r)},gi=Ah(x),kN=Ah(qy),SN=Ah(Hy);var Ne=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?us`a`:us`button`;return gi`
      <${e}
        part="base"
        class=${L({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:"button")}
        href=${N(t?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t&&this.target?"noreferrer noopener":void 0)}
        role=${N(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ne.styles=[O,Xv];Ne.dependencies={"sl-icon":ie};u([A(".icon-button")],Ne.prototype,"button",2);u([D()],Ne.prototype,"hasFocus",2);u([p()],Ne.prototype,"name",2);u([p()],Ne.prototype,"library",2);u([p()],Ne.prototype,"src",2);u([p()],Ne.prototype,"href",2);u([p()],Ne.prototype,"target",2);u([p()],Ne.prototype,"download",2);u([p()],Ne.prototype,"label",2);u([p({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);var Er=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return x`
      <span
        part="base"
        class=${L({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?x`
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
    `}};Er.styles=[O,Yv];Er.dependencies={"sl-icon-button":Ne};u([p({reflect:!0})],Er.prototype,"variant",2);u([p({reflect:!0})],Er.prototype,"size",2);u([p({type:Boolean,reflect:!0})],Er.prototype,"pill",2);u([p({type:Boolean})],Er.prototype,"removable",2);Er.define("sl-tag");var e0=E`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var ye=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Se(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${L({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Nt(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              autocapitalize=${N(this.autocapitalize)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${N(this.spellcheck)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
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
    `}};ye.styles=[O,Tt,e0];u([A(".textarea__control")],ye.prototype,"input",2);u([A(".textarea__size-adjuster")],ye.prototype,"sizeAdjuster",2);u([D()],ye.prototype,"hasFocus",2);u([p()],ye.prototype,"title",2);u([p()],ye.prototype,"name",2);u([p()],ye.prototype,"value",2);u([p({reflect:!0})],ye.prototype,"size",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"filled",2);u([p()],ye.prototype,"label",2);u([p({attribute:"help-text"})],ye.prototype,"helpText",2);u([p()],ye.prototype,"placeholder",2);u([p({type:Number})],ye.prototype,"rows",2);u([p()],ye.prototype,"resize",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"readonly",2);u([p({reflect:!0})],ye.prototype,"form",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"required",2);u([p({type:Number})],ye.prototype,"minlength",2);u([p({type:Number})],ye.prototype,"maxlength",2);u([p()],ye.prototype,"autocapitalize",2);u([p()],ye.prototype,"autocorrect",2);u([p()],ye.prototype,"autocomplete",2);u([p({type:Boolean})],ye.prototype,"autofocus",2);u([p()],ye.prototype,"enterkeyhint",2);u([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ye.prototype,"spellcheck",2);u([p()],ye.prototype,"inputmode",2);u([Yt()],ye.prototype,"defaultValue",2);u([C("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);u([C("rows",{waitUntilFirstUpdate:!0})],ye.prototype,"handleRowsChange",1);u([C("value",{waitUntilFirstUpdate:!0})],ye.prototype,"handleValueChange",1);ye.define("sl-textarea");var t0=E`
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
`;var aA=0,Xt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.attrId=++aA,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,x`
      <div
        part="base"
        class=${L({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?x`
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
    `}};Xt.styles=[O,t0];Xt.dependencies={"sl-icon-button":Ne};u([A(".tab")],Xt.prototype,"tab",2);u([p({reflect:!0})],Xt.prototype,"panel",2);u([p({type:Boolean,reflect:!0})],Xt.prototype,"active",2);u([p({type:Boolean,reflect:!0})],Xt.prototype,"closable",2);u([p({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);u([p({type:Number,reflect:!0})],Xt.prototype,"tabIndex",2);u([C("active")],Xt.prototype,"handleActiveChange",1);u([C("disabled")],Xt.prototype,"handleDisabledChange",1);Xt.define("sl-tab");var r0=E`
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
`;var i0=E`
  :host {
    display: contents;
  }
`;var mo=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};mo.styles=[O,i0];u([p({type:Boolean,reflect:!0})],mo.prototype,"disabled",2);u([C("disabled",{waitUntilFirstUpdate:!0})],mo.prototype,"handleDisabledChange",1);function lA(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Oh=new Set;function cA(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function uA(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function go(t){if(Oh.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=cA()+uA(),r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),e<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function bo(t){Oh.delete(t),Oh.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function jn(t,e,r="vertical",i="smooth"){let o=lA(t,e),s=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<c?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>d&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var nt=class extends T{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new G(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let r=t.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){let r=t.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let o=this.tabs.find(a=>a.matches(":focus")),s=this.localize.dir()==="rtl",n=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&jn(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=gt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&jn(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null,i=e==="forward"?1:-1,o=t+i;for(;t<this.tabs.length;){if(r=this.tabs[o]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;o+=i}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        class=${L({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};nt.styles=[O,r0];nt.dependencies={"sl-icon-button":Ne,"sl-resize-observer":mo};u([A(".tab-group")],nt.prototype,"tabGroup",2);u([A(".tab-group__body")],nt.prototype,"body",2);u([A(".tab-group__nav")],nt.prototype,"nav",2);u([A(".tab-group__indicator")],nt.prototype,"indicator",2);u([D()],nt.prototype,"hasScrollControls",2);u([D()],nt.prototype,"shouldHideScrollStartButton",2);u([D()],nt.prototype,"shouldHideScrollEndButton",2);u([p()],nt.prototype,"placement",2);u([p()],nt.prototype,"activation",2);u([p({attribute:"no-scroll-controls",type:Boolean})],nt.prototype,"noScrollControls",2);u([p({attribute:"fixed-scroll-controls",type:Boolean})],nt.prototype,"fixedScrollControls",2);u([Cr({passive:!0})],nt.prototype,"updateScrollButtons",1);u([C("noScrollControls",{waitUntilFirstUpdate:!0})],nt.prototype,"updateScrollControls",1);u([C("placement",{waitUntilFirstUpdate:!0})],nt.prototype,"syncIndicator",1);nt.define("sl-tab-group");var o0=E`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var ic=class extends T{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${L({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ic.styles=[O,o0];u([p()],ic.prototype,"effect",2);ic.define("sl-skeleton");var s0=E`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function bi(t,e){function r(o){let s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=s.left+n.scrollX,l=s.top+n.scrollY,c=o.pageX-a,d=o.pageY-l;e?.onMove&&e.onMove(c,d)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&r(e.initialEvent)}var Et=class extends T{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new G(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),bi(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),e&&!this.vertical&&(a=this.size-a),o>=a-this.snapThreshold&&o<=a+this.snapThreshold&&(o=a)}),this.position=Me(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,r=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=r),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=r),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Me(e,0,100)}}handleResize(t){let{width:e,height:r}=t[0].contentRect;this.size=this.vertical?r:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${i}`:r&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${o}`,this.style[e]="",x`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${N(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Et.styles=[O,s0];u([A(".divider")],Et.prototype,"divider",2);u([p({type:Number,reflect:!0})],Et.prototype,"position",2);u([p({attribute:"position-in-pixels",type:Number})],Et.prototype,"positionInPixels",2);u([p({type:Boolean,reflect:!0})],Et.prototype,"vertical",2);u([p({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);u([p()],Et.prototype,"primary",2);u([p()],Et.prototype,"snap",2);u([p({type:Number,attribute:"snap-threshold"})],Et.prototype,"snapThreshold",2);u([C("position")],Et.prototype,"handlePositionChange",1);u([C("positionInPixels")],Et.prototype,"handlePositionInPixelsChange",1);u([C("vertical")],Et.prototype,"handleVerticalChange",1);Et.define("sl-split-panel");var n0=E`
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
`;var ut=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .checked=${Nt(this.checked)}
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
    `}};ut.styles=[O,Tt,n0];u([A('input[type="checkbox"]')],ut.prototype,"input",2);u([D()],ut.prototype,"hasFocus",2);u([p()],ut.prototype,"title",2);u([p()],ut.prototype,"name",2);u([p()],ut.prototype,"value",2);u([p({reflect:!0})],ut.prototype,"size",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"checked",2);u([Yt("checked")],ut.prototype,"defaultChecked",2);u([p({reflect:!0})],ut.prototype,"form",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"required",2);u([p({attribute:"help-text"})],ut.prototype,"helpText",2);u([C("checked",{waitUntilFirstUpdate:!0})],ut.prototype,"handleCheckedChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);ut.define("sl-switch");var a0=E`
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
`;var qn=class extends Zt{constructor(e){if(super(e),this.it=Oe,e.type!==wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Oe||e==null)return this._t=void 0,this.it=e;if(e===st)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};qn.directiveName="unsafeHTML",qn.resultType=1;var ds=dr(qn);var pe=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Se(this,"help-text","label"),this.localize=new G(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
    `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,r=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(r||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let o=this.getAllOptions(),s=o.indexOf(this.currentOption),n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){let o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let s of o)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let r=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let r=t.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(e)?e:[e],i=[];t.forEach(o=>i.push(o.value)),this.setSelectedOptions(t.filter(o=>r.includes(o.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),r=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,r;let i=this.getAllOptions();this.selectedOptions=i.filter(s=>s.selected);let o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let s=this.selectedOptions[0];this.value=(t=s?.value)!=null?t:"",this.displayLabel=(r=(e=s?.getTextLabel)==null?void 0:e.call(s))!=null?r:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(t,e);return x`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof r=="string"?ds(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return x`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){let r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await $e(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=be(this,"select.show",{dir:this.localize.dir()});await ke(this.popup.popup,t,e),this.currentOption&&jn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await $e(this);let{keyframes:t,options:e}=be(this,"select.hide",{dir:this.localize.dir()});await ke(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,He(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,He(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return x`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${L({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?x`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?x`
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
    `}};pe.styles=[O,Tt,a0];pe.dependencies={"sl-icon":ie,"sl-popup":me,"sl-tag":Er};u([A(".select")],pe.prototype,"popup",2);u([A(".select__combobox")],pe.prototype,"combobox",2);u([A(".select__display-input")],pe.prototype,"displayInput",2);u([A(".select__value-input")],pe.prototype,"valueInput",2);u([A(".select__listbox")],pe.prototype,"listbox",2);u([D()],pe.prototype,"hasFocus",2);u([D()],pe.prototype,"displayLabel",2);u([D()],pe.prototype,"currentOption",2);u([D()],pe.prototype,"selectedOptions",2);u([D()],pe.prototype,"valueHasChanged",2);u([p()],pe.prototype,"name",2);u([D()],pe.prototype,"value",1);u([p({attribute:"value"})],pe.prototype,"defaultValue",2);u([p({reflect:!0})],pe.prototype,"size",2);u([p()],pe.prototype,"placeholder",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"multiple",2);u([p({attribute:"max-options-visible",type:Number})],pe.prototype,"maxOptionsVisible",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);u([p({type:Boolean})],pe.prototype,"clearable",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"open",2);u([p({type:Boolean})],pe.prototype,"hoist",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"filled",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"pill",2);u([p()],pe.prototype,"label",2);u([p({reflect:!0})],pe.prototype,"placement",2);u([p({attribute:"help-text"})],pe.prototype,"helpText",2);u([p({reflect:!0})],pe.prototype,"form",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"required",2);u([p()],pe.prototype,"getTag",2);u([C("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);u([C(["defaultValue","value"],{waitUntilFirstUpdate:!0})],pe.prototype,"handleValueChange",1);u([C("open",{waitUntilFirstUpdate:!0})],pe.prototype,"handleOpenChange",1);de("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});pe.define("sl-select");var dA=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],yi=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let r=e.getTime()-t.getTime(),{unit:i,value:o}=dA.find(s=>Math.abs(r)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=oc("second"):i==="hour"?s=oc("minute"):i==="day"?s=oc("hour"):s=oc("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};u([D()],yi.prototype,"isoTime",2);u([D()],yi.prototype,"relativeTime",2);u([p()],yi.prototype,"date",2);u([p()],yi.prototype,"format",2);u([p()],yi.prototype,"numeric",2);u([p({type:Boolean})],yi.prototype,"sync",2);function oc(t){let r={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return r-Date.now()%r}yi.define("sl-relative-time");jr.define("sl-spinner");var l0=E`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;var qe=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this),this.hasSlotController=new Se(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){let e=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",s=e*t;if(o){let n=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${i} / 2))`}else{let n=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${L({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${N(this.name)}
              ?disabled=${this.disabled}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Nt(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?x`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
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
    `}};qe.styles=[O,Tt,l0];u([A(".range__control")],qe.prototype,"input",2);u([A(".range__tooltip")],qe.prototype,"output",2);u([D()],qe.prototype,"hasFocus",2);u([D()],qe.prototype,"hasTooltip",2);u([p()],qe.prototype,"title",2);u([p()],qe.prototype,"name",2);u([p({type:Number})],qe.prototype,"value",2);u([p()],qe.prototype,"label",2);u([p({attribute:"help-text"})],qe.prototype,"helpText",2);u([p({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);u([p({type:Number})],qe.prototype,"min",2);u([p({type:Number})],qe.prototype,"max",2);u([p({type:Number})],qe.prototype,"step",2);u([p()],qe.prototype,"tooltip",2);u([p({attribute:!1})],qe.prototype,"tooltipFormatter",2);u([p({reflect:!0})],qe.prototype,"form",2);u([Yt()],qe.prototype,"defaultValue",2);u([Cr({passive:!0})],qe.prototype,"handleThumbDragStart",1);u([C("value",{waitUntilFirstUpdate:!0})],qe.prototype,"handleValueChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],qe.prototype,"handleDisabledChange",1);u([C("hasTooltip",{waitUntilFirstUpdate:!0})],qe.prototype,"syncRange",1);qe.define("sl-range");var c0=E`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;var u0="important",hA=" !"+u0,Xe=dr(class extends Zt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{let i=t[r];return i==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(let i in e){let o=e[i];if(o!=null){this.ft.add(i);let s=typeof o=="string"&&o.endsWith(hA);i.includes("-")||s?r.setProperty(i,s?o.slice(0,-11):o,s?u0:""):r[i]=o}}return st}});var dt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/o*this.max,this.precision):this.roundToPrecision((t-r)/o*this.max,this.precision);return Me(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"){let o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"){let o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let r=1/e;return Math.ceil(t*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys()),r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,x`
      <div
        part="base"
        class=${L({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(i=>r>i&&r<i+1?x`
                <span
                  class=${L({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Xe({clipPath:t?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${ds(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Xe({clipPath:t?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${ds(this.getSymbol(i+1))}
                  </div>
                </span>
              `:x`
              <span
                class=${L({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
              >
                ${ds(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};dt.styles=[O,c0];dt.dependencies={"sl-icon":ie};u([A(".rating")],dt.prototype,"rating",2);u([D()],dt.prototype,"hoverValue",2);u([D()],dt.prototype,"isHovering",2);u([p()],dt.prototype,"label",2);u([p({type:Number})],dt.prototype,"value",2);u([p({type:Number})],dt.prototype,"max",2);u([p({type:Number})],dt.prototype,"precision",2);u([p({type:Boolean,reflect:!0})],dt.prototype,"readonly",2);u([p({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);u([p()],dt.prototype,"getSymbol",2);u([Cr({passive:!0})],dt.prototype,"handleTouchMove",1);u([C("hoverValue")],dt.prototype,"handleHoverValueChange",1);u([C("isHovering")],dt.prototype,"handleIsHoveringChange",1);dt.define("sl-rating");mo.define("sl-resize-observer");var d0=E`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;var hr=class extends T{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${L({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};hr.styles=[O,d0];hr.dependencies={"sl-icon":ie};u([D()],hr.prototype,"checked",2);u([D()],hr.prototype,"hasFocus",2);u([p()],hr.prototype,"value",2);u([p({reflect:!0})],hr.prototype,"size",2);u([p({type:Boolean,reflect:!0})],hr.prototype,"disabled",2);u([C("checked")],hr.prototype,"handleCheckedChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],hr.prototype,"handleDisabledChange",1);hr.define("sl-radio");var h0=E`
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
`;var p0=E`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Ar=class extends T{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=Hn(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=Hn(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=Hn(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=Hn(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),i=Hn(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return x`
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
    `}};Ar.styles=[O,p0];u([A("slot")],Ar.prototype,"defaultSlot",2);u([D()],Ar.prototype,"disableRole",2);u([p()],Ar.prototype,"label",2);function Hn(t){var e;let r="sl-button, sl-radio-button";return(e=t.closest(r))!=null?e:t.querySelector(r)}var at=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this),this.hasSlotController=new Se(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?Iy:t?$y:es}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,r.forEach(o=>o.checked=o===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(a=>!a.disabled),i=(e=r.find(a=>a.checked))!=null?e:r[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,n=r.indexOf(i)+o;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=r[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),r=e.find(s=>s.checked),i=e.find(s=>!s.disabled),o=r||i;o&&o.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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

          ${this.hasButtonGroup?x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
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
    `}};at.styles=[O,Tt,h0];at.dependencies={"sl-button-group":Ar};u([A("slot:not([name])")],at.prototype,"defaultSlot",2);u([A(".radio-group__validation-input")],at.prototype,"validationInput",2);u([D()],at.prototype,"hasButtonGroup",2);u([D()],at.prototype,"errorMessage",2);u([D()],at.prototype,"defaultValue",2);u([p()],at.prototype,"label",2);u([p({attribute:"help-text"})],at.prototype,"helpText",2);u([p()],at.prototype,"name",2);u([p({reflect:!0})],at.prototype,"value",2);u([p({reflect:!0})],at.prototype,"size",2);u([p({reflect:!0})],at.prototype,"form",2);u([p({type:Boolean,reflect:!0})],at.prototype,"required",2);u([C("size",{waitUntilFirstUpdate:!0})],at.prototype,"handleSizeChange",1);u([C("value")],at.prototype,"handleValueChange",1);at.define("sl-radio-group");me.define("sl-popup");var f0=E`
  :host {
    display: inline-block;
  }
`;var m0=null,sc=class{};sc.render=function(t,e){m0(t,e)};self.QrCreator=sc;(function(t){function e(a,l,c,d){var h={},f=t(c,l);f.u(a),f.J(),d=d||0;var m=f.h(),g=f.h()+2*d;return h.text=a,h.level=l,h.version=c,h.O=g,h.a=function(b,v){return b-=d,v-=d,0>b||b>=m||0>v||v>=m?!1:f.a(b,v)},h}function r(a,l,c,d,h,f,m,g,b,v){function _(w,k,y,S,M,H,V){w?(a.lineTo(k+H,y+V),a.arcTo(k,y,S,M,f)):a.lineTo(k,y)}m?a.moveTo(l+f,c):a.moveTo(l,c),_(g,d,c,d,h,-f,0),_(b,d,h,l,h,0,-f),_(v,l,h,l,c,f,0),_(m,l,c,d,c,0,f)}function i(a,l,c,d,h,f,m,g,b,v){function _(w,k,y,S){a.moveTo(w+y,k),a.lineTo(w,k),a.lineTo(w,k+S),a.arcTo(w,k,w+y,k,f)}m&&_(l,c,f,f),g&&_(d,c,-f,f),b&&_(d,h,-f,-f),v&&_(l,h,f,-f)}function o(a,l){var c=l.fill;if(typeof c=="string")a.fillStyle=c;else{var d=c.type,h=c.colorStops;if(c=c.position.map(m=>Math.round(m*l.size)),d==="linear-gradient")var f=a.createLinearGradient.apply(a,c);else if(d==="radial-gradient")f=a.createRadialGradient.apply(a,c);else throw Error("Unsupported fill");h.forEach(([m,g])=>{f.addColorStop(m,g)}),a.fillStyle=f}}function s(a,l){e:{var c=l.text,d=l.v,h=l.N,f=l.K,m=l.P;for(h=Math.max(1,h||1),f=Math.min(40,f||40);h<=f;h+=1)try{var g=e(c,d,h,m);break e}catch{}g=void 0}if(!g)return null;for(c=a.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),d=g.O,f=l.size/d,c.beginPath(),m=0;m<d;m+=1)for(h=0;h<d;h+=1){var b=c,v=l.left+h*f,_=l.top+m*f,w=m,k=h,y=g.a,S=v+f,M=_+f,H=w-1,V=w+1,R=k-1,P=k+1,ee=Math.floor(Math.min(.5,Math.max(0,l.R))*f),Y=y(w,k),ve=y(H,R),he=y(H,k);H=y(H,P);var lt=y(w,P);P=y(V,P),k=y(V,k),V=y(V,R),w=y(w,R),v=Math.round(v),_=Math.round(_),S=Math.round(S),M=Math.round(M),Y?r(b,v,_,S,M,ee,!he&&!w,!he&&!lt,!k&&!lt,!k&&!w):i(b,v,_,S,M,ee,he&&w&&ve,he&&lt&&H,k&&lt&&P,k&&w&&V)}return o(c,l),c.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};m0=function(a,l){var c={};Object.assign(c,n,a),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,c)):(a=document.createElement("canvas"),a.width=c.size,a.height=c.size,c=s(a,c),l.appendChild(c))}})(function(){function t(l){var c=r.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(d){for(var h=0;h<c.length;h+=1)d.put(c[h],8)}}}function e(){var l=[],c=0,d={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,f){for(var m=0;m<f;m+=1)d.m((h>>>f-m-1&1)==1)},f:function(){return c},m:function(h){var f=Math.floor(c/8);l.length<=f&&l.push(0),h&&(l[f]|=128>>>c%8),c+=1}};return d}function r(l,c){function d(w,k){for(var y=-1;7>=y;y+=1)if(!(-1>=w+y||g<=w+y))for(var S=-1;7>=S;S+=1)-1>=k+S||g<=k+S||(m[w+y][k+S]=0<=y&&6>=y&&(S==0||S==6)||0<=S&&6>=S&&(y==0||y==6)||2<=y&&4>=y&&2<=S&&4>=S)}function h(w,k){for(var y=g=4*l+17,S=Array(y),M=0;M<y;M+=1){S[M]=Array(y);for(var H=0;H<y;H+=1)S[M][H]=null}for(m=S,d(0,0),d(g-7,0),d(0,g-7),y=s.G(l),S=0;S<y.length;S+=1)for(M=0;M<y.length;M+=1){H=y[S];var V=y[M];if(m[H][V]==null)for(var R=-2;2>=R;R+=1)for(var P=-2;2>=P;P+=1)m[H+R][V+P]=R==-2||R==2||P==-2||P==2||R==0&&P==0}for(y=8;y<g-8;y+=1)m[y][6]==null&&(m[y][6]=y%2==0);for(y=8;y<g-8;y+=1)m[6][y]==null&&(m[6][y]=y%2==0);for(y=s.w(f<<3|k),S=0;15>S;S+=1)M=!w&&(y>>S&1)==1,m[6>S?S:8>S?S+1:g-15+S][8]=M,m[8][8>S?g-S-1:9>S?15-S:14-S]=M;if(m[g-8][8]=!w,7<=l){for(y=s.A(l),S=0;18>S;S+=1)M=!w&&(y>>S&1)==1,m[Math.floor(S/3)][S%3+g-8-3]=M;for(S=0;18>S;S+=1)M=!w&&(y>>S&1)==1,m[S%3+g-8-3][Math.floor(S/3)]=M}if(b==null){for(w=a.I(l,f),y=e(),S=0;S<v.length;S+=1)M=v[S],y.put(4,4),y.put(M.b(),s.f(4,l)),M.write(y);for(S=M=0;S<w.length;S+=1)M+=w[S].j;if(y.f()>8*M)throw Error("code length overflow. ("+y.f()+">"+8*M+")");for(y.f()+4<=8*M&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*M)&&(y.put(236,8),!(y.f()>=8*M));)y.put(17,8);var ee=0;for(M=S=0,H=Array(w.length),V=Array(w.length),R=0;R<w.length;R+=1){var Y=w[R].j,ve=w[R].o-Y;for(S=Math.max(S,Y),M=Math.max(M,ve),H[R]=Array(Y),P=0;P<H[R].length;P+=1)H[R][P]=255&y.B()[P+ee];for(ee+=Y,P=s.C(ve),Y=i(H[R],P.b()-1).l(P),V[R]=Array(P.b()-1),P=0;P<V[R].length;P+=1)ve=P+Y.b()-V[R].length,V[R][P]=0<=ve?Y.c(ve):0}for(P=y=0;P<w.length;P+=1)y+=w[P].o;for(y=Array(y),P=ee=0;P<S;P+=1)for(R=0;R<w.length;R+=1)P<H[R].length&&(y[ee]=H[R][P],ee+=1);for(P=0;P<M;P+=1)for(R=0;R<w.length;R+=1)P<V[R].length&&(y[ee]=V[R][P],ee+=1);b=y}for(w=b,y=-1,S=g-1,M=7,H=0,k=s.F(k),V=g-1;0<V;V-=2)for(V==6&&--V;;){for(R=0;2>R;R+=1)m[S][V-R]==null&&(P=!1,H<w.length&&(P=(w[H]>>>M&1)==1),k(S,V-R)&&(P=!P),m[S][V-R]=P,--M,M==-1&&(H+=1,M=7));if(S+=y,0>S||g<=S){S-=y,y=-y;break}}}var f=o[c],m=null,g=0,b=null,v=[],_={u:function(w){w=t(w),v.push(w),b=null},a:function(w,k){if(0>w||g<=w||0>k||g<=k)throw Error(w+","+k);return m[w][k]},h:function(){return g},J:function(){for(var w=0,k=0,y=0;8>y;y+=1){h(!0,y);var S=s.D(_);(y==0||w>S)&&(w=S,k=y)}h(!1,k)}};return _}function i(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var d=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var m=Array(l.length-f+c),g=0;g<l.length-f;g+=1)m[g]=l[g+f];return m}(),h={c:function(f){return d[f]},b:function(){return d.length},multiply:function(f){for(var m=Array(h.b()+f.b()-1),g=0;g<h.b();g+=1)for(var b=0;b<f.b();b+=1)m[g+b]^=n.i(n.g(h.c(g))+n.g(f.c(b)));return i(m,0)},l:function(f){if(0>h.b()-f.b())return h;for(var m=n.g(h.c(0))-n.g(f.c(0)),g=Array(h.b()),b=0;b<h.b();b+=1)g[b]=h.c(b);for(b=0;b<f.b();b+=1)g[b]^=n.i(n.g(f.c(b))+m);return i(g,0).l(f)}};return h}r.s=function(l){for(var c=[],d=0;d<l.length;d++){var h=l.charCodeAt(d);128>h?c.push(h):2048>h?c.push(192|h>>6,128|h&63):55296>h||57344<=h?c.push(224|h>>12,128|h>>6&63,128|h&63):(d++,h=65536+((h&1023)<<10|l.charCodeAt(d)&1023),c.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return c};var o={L:1,M:0,Q:3,H:2},s=function(){function l(h){for(var f=0;h!=0;)f+=1,h>>>=1;return f}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(h){for(var f=h<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(h<<10|f)^21522},A:function(h){for(var f=h<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return h<<12|f},G:function(h){return c[h-1]},F:function(h){switch(h){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var f=i([1],0),m=0;m<h;m+=1)f=f.multiply(i([1,n.i(m)],0));return f},f:function(h,f){if(h!=4||1>f||40<f)throw Error("mode: "+h+"; type: "+f);return 10>f?8:16},D:function(h){for(var f=h.h(),m=0,g=0;g<f;g+=1)for(var b=0;b<f;b+=1){for(var v=0,_=h.a(g,b),w=-1;1>=w;w+=1)if(!(0>g+w||f<=g+w))for(var k=-1;1>=k;k+=1)0>b+k||f<=b+k||(w!=0||k!=0)&&_==h.a(g+w,b+k)&&(v+=1);5<v&&(m+=3+v-5)}for(g=0;g<f-1;g+=1)for(b=0;b<f-1;b+=1)v=0,h.a(g,b)&&(v+=1),h.a(g+1,b)&&(v+=1),h.a(g,b+1)&&(v+=1),h.a(g+1,b+1)&&(v+=1),(v==0||v==4)&&(m+=3);for(g=0;g<f;g+=1)for(b=0;b<f-6;b+=1)h.a(g,b)&&!h.a(g,b+1)&&h.a(g,b+2)&&h.a(g,b+3)&&h.a(g,b+4)&&!h.a(g,b+5)&&h.a(g,b+6)&&(m+=40);for(b=0;b<f;b+=1)for(g=0;g<f-6;g+=1)h.a(g,b)&&!h.a(g+1,b)&&h.a(g+2,b)&&h.a(g+3,b)&&h.a(g+4,b)&&!h.a(g+5,b)&&h.a(g+6,b)&&(m+=40);for(b=v=0;b<f;b+=1)for(g=0;g<f;g+=1)h.a(g,b)&&(v+=1);return m+=Math.abs(100*v/f/f-50)/5*10}};return d}(),n=function(){for(var l=Array(256),c=Array(256),d=0;8>d;d+=1)l[d]=1<<d;for(d=8;256>d;d+=1)l[d]=l[d-4]^l[d-5]^l[d-6]^l[d-8];for(d=0;255>d;d+=1)c[l[d]]=d;return{g:function(h){if(1>h)throw Error("glog("+h+")");return c[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),a=function(){function l(h,f){switch(f){case o.L:return c[4*(h-1)];case o.M:return c[4*(h-1)+1];case o.Q:return c[4*(h-1)+2];case o.H:return c[4*(h-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(h,f){var m=l(h,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+f);h=m.length/3,f=[];for(var g=0;g<h;g+=1)for(var b=m[3*g],v=m[3*g+1],_=m[3*g+2],w=0;w<b;w+=1){var k=_,y={};y.o=v,y.j=k,f.push(y)}return f}};return d}();return r}());var g0=QrCreator;var Jt=class extends T{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&g0.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Xe({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Jt.styles=[O,f0];u([A("canvas")],Jt.prototype,"canvas",2);u([p()],Jt.prototype,"value",2);u([p()],Jt.prototype,"label",2);u([p({type:Number})],Jt.prototype,"size",2);u([p()],Jt.prototype,"fill",2);u([p()],Jt.prototype,"background",2);u([p({type:Number})],Jt.prototype,"radius",2);u([p({attribute:"error-correction"})],Jt.prototype,"errorCorrection",2);u([C(["background","errorCorrection","fill","radius","size","value"])],Jt.prototype,"generate",1);Jt.define("sl-qr-code");var nc=E`
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
`;var b0=E`
  ${nc}

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
`;var Qt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return gi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${L({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${N(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Qt.styles=[O,b0];u([A(".button")],Qt.prototype,"input",2);u([A(".hidden-input")],Qt.prototype,"hiddenInput",2);u([D()],Qt.prototype,"hasFocus",2);u([p({type:Boolean,reflect:!0})],Qt.prototype,"checked",2);u([p()],Qt.prototype,"value",2);u([p({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);u([p({reflect:!0})],Qt.prototype,"size",2);u([p({type:Boolean,reflect:!0})],Qt.prototype,"pill",2);u([C("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);Qt.define("sl-radio-button");var y0=E`
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
`;var Ft=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return x`
      <div
        part="base"
        class=${L({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ft.styles=[O,y0];Ft.dependencies={"sl-icon":ie};u([A(".option__label")],Ft.prototype,"defaultSlot",2);u([D()],Ft.prototype,"current",2);u([D()],Ft.prototype,"selected",2);u([D()],Ft.prototype,"hasHover",2);u([p({reflect:!0})],Ft.prototype,"value",2);u([p({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);u([C("disabled")],Ft.prototype,"handleDisabledChange",1);u([C("selected")],Ft.prototype,"handleSelectedChange",1);u([C("value")],Ft.prototype,"handleValueChange",1);Ft.define("sl-option");var v0=E`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var yo=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*e,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};yo.styles=[O,v0];u([A(".progress-ring__indicator")],yo.prototype,"indicator",2);u([D()],yo.prototype,"indicatorOffset",2);u([p({type:Number,reflect:!0})],yo.prototype,"value",2);u([p()],yo.prototype,"label",2);yo.define("sl-progress-ring");var w0=E`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;var hs=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${L({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${N(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Xe({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};hs.styles=[O,w0];u([p({type:Number,reflect:!0})],hs.prototype,"value",2);u([p({type:Boolean,reflect:!0})],hs.prototype,"indeterminate",2);u([p()],hs.prototype,"label",2);hs.define("sl-progress-bar");var _0=E`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;var $h=class extends T{render(){return x` <slot part="base" class="menu-label"></slot> `}};$h.styles=[O,_0];$h.define("sl-menu-label");var x0=E`
  :host {
    display: contents;
  }
`;var pr=class extends T{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return x` <slot></slot> `}};pr.styles=[O,x0];u([p({reflect:!0})],pr.prototype,"attr",2);u([p({attribute:"attr-old-value",type:Boolean,reflect:!0})],pr.prototype,"attrOldValue",2);u([p({attribute:"char-data",type:Boolean,reflect:!0})],pr.prototype,"charData",2);u([p({attribute:"char-data-old-value",type:Boolean,reflect:!0})],pr.prototype,"charDataOldValue",2);u([p({attribute:"child-list",type:Boolean,reflect:!0})],pr.prototype,"childList",2);u([p({type:Boolean,reflect:!0})],pr.prototype,"disabled",2);u([C("disabled")],pr.prototype,"handleDisabledChange",1);u([C("attr",{waitUntilFirstUpdate:!0}),C("attr-old-value",{waitUntilFirstUpdate:!0}),C("char-data",{waitUntilFirstUpdate:!0}),C("char-data-old-value",{waitUntilFirstUpdate:!0}),C("childList",{waitUntilFirstUpdate:!0})],pr.prototype,"handleChange",1);pr.define("sl-mutation-observer");var k0=E`
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
`;var se=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Se(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return x`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${L({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Nt(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?x`
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
            ${this.passwordToggle&&!this.disabled?x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:x`
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
    `}};se.styles=[O,Tt,k0];se.dependencies={"sl-icon":ie};u([A(".input__control")],se.prototype,"input",2);u([D()],se.prototype,"hasFocus",2);u([p()],se.prototype,"title",2);u([p({reflect:!0})],se.prototype,"type",2);u([p()],se.prototype,"name",2);u([p()],se.prototype,"value",2);u([Yt()],se.prototype,"defaultValue",2);u([p({reflect:!0})],se.prototype,"size",2);u([p({type:Boolean,reflect:!0})],se.prototype,"filled",2);u([p({type:Boolean,reflect:!0})],se.prototype,"pill",2);u([p()],se.prototype,"label",2);u([p({attribute:"help-text"})],se.prototype,"helpText",2);u([p({type:Boolean})],se.prototype,"clearable",2);u([p({type:Boolean,reflect:!0})],se.prototype,"disabled",2);u([p()],se.prototype,"placeholder",2);u([p({type:Boolean,reflect:!0})],se.prototype,"readonly",2);u([p({attribute:"password-toggle",type:Boolean})],se.prototype,"passwordToggle",2);u([p({attribute:"password-visible",type:Boolean})],se.prototype,"passwordVisible",2);u([p({attribute:"no-spin-buttons",type:Boolean})],se.prototype,"noSpinButtons",2);u([p({reflect:!0})],se.prototype,"form",2);u([p({type:Boolean,reflect:!0})],se.prototype,"required",2);u([p()],se.prototype,"pattern",2);u([p({type:Number})],se.prototype,"minlength",2);u([p({type:Number})],se.prototype,"maxlength",2);u([p()],se.prototype,"min",2);u([p()],se.prototype,"max",2);u([p()],se.prototype,"step",2);u([p()],se.prototype,"autocapitalize",2);u([p()],se.prototype,"autocorrect",2);u([p()],se.prototype,"autocomplete",2);u([p({type:Boolean})],se.prototype,"autofocus",2);u([p()],se.prototype,"enterkeyhint",2);u([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],se.prototype,"spellcheck",2);u([p()],se.prototype,"inputmode",2);u([C("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);u([C("step",{waitUntilFirstUpdate:!0})],se.prototype,"handleStepChange",1);u([C("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);se.define("sl-input");var S0=E`
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
`;var ac=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath(),i=r.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;let n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),i=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===t?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ac.styles=[O,S0];u([A("slot")],ac.prototype,"defaultSlot",2);ac.define("sl-menu");var C0=E`
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
`;var Wn=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),Wn(i,e);return!0},lc=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},T0=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),mA(e)}};function pA(t){this._$AN!==void 0?(lc(this),this._$AM=t,T0(this)):this._$AM=t}function fA(t,e=!1,r=0){let i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)Wn(i[s],!1),lc(i[s]);else i!=null&&(Wn(i,!1),lc(i));else Wn(this,t)}var mA=t=>{t.type==wt.CHILD&&(t._$AP??=fA,t._$AQ??=pA)},cc=class extends Zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),T0(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(Wn(this,e),lc(this))}setValue(e){if(tc(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var E0=()=>new Ph,Ph=class{},Ih=new WeakMap,A0=dr(class extends cc{render(t){return Oe}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Oe}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=Ih.get(e);r===void 0&&(r=new WeakMap,Ih.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Ih.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var O0=class{constructor(t,e){this.popupRef=E0(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break;default:break}},this.handleClick=r=>{var i;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(i=r.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{let r=this.host.renderRoot.querySelector("slot[name='submenu']"),i=r?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:s,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of e.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,s)=>{var n;let a=(n=e.get(s))!=null?n:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?x`
      <sl-popup
        ${A0(this.popupRef)}
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
    `:x` <slot name="submenu" hidden></slot> `}};var At=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Se(this,"submenu"),this.submenuController=new O0(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Nv(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return x`
      <div
        id="anchor"
        part="base"
        class=${L({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};At.styles=[O,C0];At.dependencies={"sl-icon":ie,"sl-popup":me,"sl-spinner":jr};u([A("slot:not([name])")],At.prototype,"defaultSlot",2);u([A(".menu-item")],At.prototype,"menuItem",2);u([p()],At.prototype,"type",2);u([p({type:Boolean,reflect:!0})],At.prototype,"checked",2);u([p()],At.prototype,"value",2);u([p({type:Boolean,reflect:!0})],At.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],At.prototype,"disabled",2);u([C("checked")],At.prototype,"handleCheckedChange",1);u([C("disabled")],At.prototype,"handleDisabledChange",1);u([C("type")],At.prototype,"handleTypeChange",1);At.define("sl-menu-item");var $0=E`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;var vi=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.preventDefault(),bi(this.base,{onMove:i=>{this.position=parseFloat(Me(i/e*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let i=t.shiftKey?10:1,o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight")&&(o-=i),(e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft")&&(o+=i),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=Me(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){let t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        id="image-comparer"
        class=${L({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Xe({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Xe({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};vi.styles=[O,$0];vi.scopedElement={"sl-icon":ie};u([A(".image-comparer")],vi.prototype,"base",2);u([A(".image-comparer__handle")],vi.prototype,"handle",2);u([p({type:Number,reflect:!0})],vi.prototype,"position",2);u([C("position",{waitUntilFirstUpdate:!0})],vi.prototype,"handlePositionChange",1);vi.define("sl-image-comparer");var I0=E`
  :host {
    display: block;
  }
`;var Lh=new Map;function P0(t,e="cors"){let r=Lh.get(t);if(r!==void 0)return Promise.resolve(r);let i=fetch(t,{mode:e}).then(async o=>{let s={ok:o.ok,status:o.status,html:await o.text()};return Lh.set(t,s),s});return Lh.set(t,i),i}var vo=class extends T{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(r=>e.setAttribute(r.name,r.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await P0(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return x`<slot></slot>`}};vo.styles=[O,I0];u([p()],vo.prototype,"src",2);u([p()],vo.prototype,"mode",2);u([p({attribute:"allow-scripts",type:Boolean})],vo.prototype,"allowScripts",2);u([C("src")],vo.prototype,"handleSrcChange",1);vo.define("sl-include");ie.define("sl-icon");Ne.define("sl-icon-button");var Gn=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:o,unitDisplay:this.display})}};u([p({type:Number})],Gn.prototype,"value",2);u([p()],Gn.prototype,"unit",2);u([p()],Gn.prototype,"display",2);Gn.define("sl-format-bytes");var Ot=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return x`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};u([p()],Ot.prototype,"date",2);u([p()],Ot.prototype,"weekday",2);u([p()],Ot.prototype,"era",2);u([p()],Ot.prototype,"year",2);u([p()],Ot.prototype,"month",2);u([p()],Ot.prototype,"day",2);u([p()],Ot.prototype,"hour",2);u([p()],Ot.prototype,"minute",2);u([p()],Ot.prototype,"second",2);u([p({attribute:"time-zone-name"})],Ot.prototype,"timeZoneName",2);u([p({attribute:"time-zone"})],Ot.prototype,"timeZone",2);u([p({attribute:"hour-format"})],Ot.prototype,"hourFormat",2);Ot.define("sl-format-date");var er=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([p({type:Number})],er.prototype,"value",2);u([p()],er.prototype,"type",2);u([p({attribute:"no-grouping",type:Boolean})],er.prototype,"noGrouping",2);u([p()],er.prototype,"currency",2);u([p({attribute:"currency-display"})],er.prototype,"currencyDisplay",2);u([p({attribute:"minimum-integer-digits",type:Number})],er.prototype,"minimumIntegerDigits",2);u([p({attribute:"minimum-fraction-digits",type:Number})],er.prototype,"minimumFractionDigits",2);u([p({attribute:"maximum-fraction-digits",type:Number})],er.prototype,"maximumFractionDigits",2);u([p({attribute:"minimum-significant-digits",type:Number})],er.prototype,"minimumSignificantDigits",2);u([p({attribute:"maximum-significant-digits",type:Number})],er.prototype,"maximumSignificantDigits",2);er.define("sl-format-number");var L0=E`
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
`;var Kn=class extends T{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Kn.styles=[O,L0];u([p({type:Boolean,reflect:!0})],Kn.prototype,"vertical",2);u([C("vertical")],Kn.prototype,"handleVerticalChange",1);Kn.define("sl-divider");var z0=E`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var R0=new WeakMap;function D0(t){let e=R0.get(t);return e||(e=window.getComputedStyle(t,null),R0.set(t,e)),e}function gA(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=D0(t);return e.visibility!=="hidden"&&e.display!=="none"}function bA(t){let e=D0(t),{overflowY:r,overflowX:i}=e;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&r==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function yA(t){let e=t.tagName.toLowerCase(),r=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!gA(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:bA(t)}function M0(t){var e,r;let i=uc(t),o=(e=i[0])!=null?e:null,s=(r=i[i.length-1])!=null?r:null;return{start:o,end:s}}function vA(t,e){var r;return((r=t.getRootNode({composed:!0}))==null?void 0:r.host)!==e}function uc(t){let e=new WeakMap,r=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!r.includes(o)&&yA(o)&&r.push(o),o instanceof HTMLSlotElement&&vA(o,t)&&o.assignedElements({flatten:!0}).forEach(s=>{i(s)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(let s of o.children)i(s)}return i(t),r.sort((o,s)=>{let n=Number(o.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}function*zh(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Oy(zh(t.shadowRoot.activeElement))))}function wA(){return[...zh()].pop()}var Zn=[],dc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var r;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let i=wA();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let o=uc(this.element),s=o.findIndex(a=>a===i);this.previousFocus=this.currentFocus;let n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=o.length?s=0:s+n<0?s=o.length-1:s+=n,this.previousFocus=this.currentFocus;let a=o[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});let l=[...zh()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Zn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Zn=Zn.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Zn[Zn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=uc(this.element);if(!this.element.matches(":focus-within")){let e=t[0],r=t[t.length-1],i=this.tabDirection==="forward"?e:r;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function N0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var $t=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"footer"),this.localize=new G(this),this.modal=new dc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),go(this)))}disconnectedCallback(){super.disconnectedCallback(),bo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=be(this,"drawer.denyClose",{dir:this.localize.dir()});ke(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),go(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([$e(this.drawer),$e(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=be(this,`drawer.show${N0(this.placement)}`,{dir:this.localize.dir()}),r=be(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ke(this.panel,e.keyframes,e.options),ke(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),bo(this)),await Promise.all([$e(this.drawer),$e(this.overlay)]);let t=be(this,`drawer.hide${N0(this.placement)}`,{dir:this.localize.dir()}),e=be(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ke(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ke(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),go(this)),this.open&&this.contained&&(this.modal.deactivate(),bo(this))}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${L({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};$t.styles=[O,z0];$t.dependencies={"sl-icon-button":Ne};u([A(".drawer")],$t.prototype,"drawer",2);u([A(".drawer__panel")],$t.prototype,"panel",2);u([A(".drawer__overlay")],$t.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],$t.prototype,"open",2);u([p({reflect:!0})],$t.prototype,"label",2);u([p({reflect:!0})],$t.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],$t.prototype,"contained",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],$t.prototype,"noHeader",2);u([C("open",{waitUntilFirstUpdate:!0})],$t.prototype,"handleOpenChange",1);u([C("contained",{waitUntilFirstUpdate:!0})],$t.prototype,"handleNoModalChange",1);de("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});de("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});de("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});de("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});de("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});de("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});$t.define("sl-drawer");var F0=E`
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
`;var Je=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;let s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>M0(i).start),r;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=e.button;break;default:r=e}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await $e(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=be(this,"dropdown.show",{dir:this.localize.dir()});await ke(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await $e(this);let{keyframes:t,options:e}=be(this,"dropdown.hide",{dir:this.localize.dir()});await ke(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
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
        sync=${N(this.sync?this.sync:void 0)}
        class=${L({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Je.styles=[O,F0];Je.dependencies={"sl-popup":me};u([A(".dropdown")],Je.prototype,"popup",2);u([A(".dropdown__trigger")],Je.prototype,"trigger",2);u([A(".dropdown__panel")],Je.prototype,"panel",2);u([p({type:Boolean,reflect:!0})],Je.prototype,"open",2);u([p({reflect:!0})],Je.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);u([p({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Je.prototype,"stayOpenOnSelect",2);u([p({attribute:!1})],Je.prototype,"containingElement",2);u([p({type:Number})],Je.prototype,"distance",2);u([p({type:Number})],Je.prototype,"skidding",2);u([p({type:Boolean})],Je.prototype,"hoist",2);u([p({reflect:!0})],Je.prototype,"sync",2);u([C("open",{waitUntilFirstUpdate:!0})],Je.prototype,"handleOpenChange",1);de("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Je.define("sl-dropdown");var U0=E`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
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
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;var Qe=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]"),o=this.from,s="";r?[o,s]=this.from.trim().split("."):i&&([o,s]=this.from.trim().replace(/\]$/,"").split("["));let n="getElementById"in e?e.getElementById(o):null;n?i?t=n.getAttribute(s)||"":r?t=n[s]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,s=be(this,"copy.in",{dir:"ltr"}),n=be(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?r:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return x`
      <sl-tooltip
        class=${L({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Qe.styles=[O,U0];Qe.dependencies={"sl-icon":ie,"sl-tooltip":Ye};u([A('slot[name="copy-icon"]')],Qe.prototype,"copyIcon",2);u([A('slot[name="success-icon"]')],Qe.prototype,"successIcon",2);u([A('slot[name="error-icon"]')],Qe.prototype,"errorIcon",2);u([A("sl-tooltip")],Qe.prototype,"tooltip",2);u([D()],Qe.prototype,"isCopying",2);u([D()],Qe.prototype,"status",2);u([p()],Qe.prototype,"value",2);u([p()],Qe.prototype,"from",2);u([p({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);u([p({attribute:"copy-label"})],Qe.prototype,"copyLabel",2);u([p({attribute:"success-label"})],Qe.prototype,"successLabel",2);u([p({attribute:"error-label"})],Qe.prototype,"errorLabel",2);u([p({attribute:"feedback-duration",type:Number})],Qe.prototype,"feedbackDuration",2);u([p({attribute:"tooltip-placement"})],Qe.prototype,"tooltipPlacement",2);u([p({type:Boolean})],Qe.prototype,"hoist",2);de("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});de("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Qe.define("sl-copy-button");var B0=E`
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
`;var tr=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await $e(this.body);let{keyframes:e,options:r}=be(this,"details.show",{dir:this.localize.dir()});await ke(this.body,as(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await $e(this.body);let{keyframes:e,options:r}=be(this,"details.hide",{dir:this.localize.dir()});await ke(this.body,as(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,He(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,He(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return x`
      <details
        part="base"
        class=${L({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};tr.styles=[O,B0];tr.dependencies={"sl-icon":ie};u([A(".details")],tr.prototype,"details",2);u([A(".details__header")],tr.prototype,"header",2);u([A(".details__body")],tr.prototype,"body",2);u([A(".details__expand-icon-slot")],tr.prototype,"expandIconSlot",2);u([p({type:Boolean,reflect:!0})],tr.prototype,"open",2);u([p()],tr.prototype,"summary",2);u([p({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);u([C("open",{waitUntilFirstUpdate:!0})],tr.prototype,"handleOpenChange",1);de("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});de("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});tr.define("sl-details");var V0=E`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var fr=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"footer"),this.localize=new G(this),this.modal=new dc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),go(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),bo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=be(this,"dialog.denyClose",{dir:this.localize.dir()});ke(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),go(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([$e(this.dialog),$e(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=be(this,"dialog.show",{dir:this.localize.dir()}),r=be(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ke(this.panel,e.keyframes,e.options),ke(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([$e(this.dialog),$e(this.overlay)]);let t=be(this,"dialog.hide",{dir:this.localize.dir()}),e=be(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ke(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ke(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,bo(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${L({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};fr.styles=[O,V0];fr.dependencies={"sl-icon-button":Ne};u([A(".dialog")],fr.prototype,"dialog",2);u([A(".dialog__panel")],fr.prototype,"panel",2);u([A(".dialog__overlay")],fr.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],fr.prototype,"open",2);u([p({reflect:!0})],fr.prototype,"label",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],fr.prototype,"noHeader",2);u([C("open",{waitUntilFirstUpdate:!0})],fr.prototype,"handleOpenChange",1);de("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});de("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});de("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});fr.define("sl-dialog");Ke.define("sl-checkbox");var j0=E`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var _e=class extends T{constructor(){super(...arguments),this.formControlController=new ot(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Se(this,"[default]","prefix","suffix"),this.localize=new G(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:es}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?us`a`:us`button`;return gi`
      <${e}
        part="base"
        class=${L({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:this.type)}
        title=${this.title}
        name=${N(t?void 0:this.name)}
        value=${N(t?void 0:this.value)}
        href=${N(t&&!this.disabled?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t?this.rel:void 0)}
        role=${N(t?void 0:"button")}
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
        ${this.caret?gi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?gi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};_e.styles=[O,nc];_e.dependencies={"sl-icon":ie,"sl-spinner":jr};u([A(".button")],_e.prototype,"button",2);u([D()],_e.prototype,"hasFocus",2);u([D()],_e.prototype,"invalid",2);u([p()],_e.prototype,"title",2);u([p({reflect:!0})],_e.prototype,"variant",2);u([p({reflect:!0})],_e.prototype,"size",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],_e.prototype,"circle",2);u([p()],_e.prototype,"type",2);u([p()],_e.prototype,"name",2);u([p()],_e.prototype,"value",2);u([p()],_e.prototype,"href",2);u([p()],_e.prototype,"target",2);u([p()],_e.prototype,"rel",2);u([p()],_e.prototype,"download",2);u([p()],_e.prototype,"form",2);u([p({attribute:"formaction"})],_e.prototype,"formAction",2);u([p({attribute:"formenctype"})],_e.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],_e.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],_e.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],_e.prototype,"formTarget",2);u([C("disabled",{waitUntilFirstUpdate:!0})],_e.prototype,"handleDisabledChange",1);function et(t,e){_A(t)&&(t="100%");let r=xA(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Yn(t){return Math.min(1,Math.max(0,t))}function _A(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function xA(t){return typeof t=="string"&&t.indexOf("%")!==-1}function hc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Xn(t){return Number(t)<=1?`${Number(t)*100}%`:t}function wi(t){return t.length===1?"0"+t:String(t)}function q0(t,e,r){return{r:et(t,255)*255,g:et(e,255)*255,b:et(r,255)*255}}function Dh(t,e,r){t=et(t,255),e=et(e,255),r=et(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=0,a=(i+o)/2;if(i===o)n=0,s=0;else{let l=i-o;switch(n=a>.5?l/(2-i-o):l/(i+o),i){case t:s=(e-r)/l+(e<r?6:0);break;case e:s=(r-t)/l+2;break;case r:s=(t-e)/l+4;break;default:break}s/=6}return{h:s,s:n,l:a}}function Rh(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function H0(t,e,r){let i,o,s;if(t=et(t,360),e=et(e,100),r=et(r,100),e===0)o=r,s=r,i=r;else{let n=r<.5?r*(1+e):r+e-r*e,a=2*r-n;i=Rh(a,n,t+1/3),o=Rh(a,n,t),s=Rh(a,n,t-1/3)}return{r:i*255,g:o*255,b:s*255}}function Mh(t,e,r){t=et(t,255),e=et(e,255),r=et(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=i,a=i-o,l=i===0?0:a/i;if(i===o)s=0;else{switch(i){case t:s=(e-r)/a+(e<r?6:0);break;case e:s=(r-t)/a+2;break;case r:s=(t-e)/a+4;break;default:break}s/=6}return{h:s,s:l,v:n}}function W0(t,e,r){t=et(t,360)*6,e=et(e,100),r=et(r,100);let i=Math.floor(t),o=t-i,s=r*(1-e),n=r*(1-o*e),a=r*(1-(1-o)*e),l=i%6,c=[r,n,s,s,a,r][l],d=[a,r,r,n,s,s][l],h=[s,s,a,r,r,n][l];return{r:c*255,g:d*255,b:h*255}}function Nh(t,e,r,i){let o=[wi(Math.round(t).toString(16)),wi(Math.round(e).toString(16)),wi(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function G0(t,e,r,i,o){let s=[wi(Math.round(t).toString(16)),wi(Math.round(e).toString(16)),wi(Math.round(r).toString(16)),wi(kA(i))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function K0(t,e,r,i){let o=t/100,s=e/100,n=r/100,a=i/100,l=255*(1-o)*(1-a),c=255*(1-s)*(1-a),d=255*(1-n)*(1-a);return{r:l,g:c,b:d}}function Fh(t,e,r){let i=1-t/255,o=1-e/255,s=1-r/255,n=Math.min(i,o,s);return n===1?(i=0,o=0,s=0):(i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100,s=(s-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(o),y:Math.round(s),k:Math.round(n)}}function kA(t){return Math.round(parseFloat(t)*255).toString(16)}function Uh(t){return It(t)/255}function It(t){return parseInt(t,16)}function Z0(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Jn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Y0(t){let e={r:0,g:0,b:0},r=1,i=null,o=null,s=null,n=!1,a=!1;return typeof t=="string"&&(t=TA(t)),typeof t=="object"&&(Ut(t.r)&&Ut(t.g)&&Ut(t.b)?(e=q0(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ut(t.h)&&Ut(t.s)&&Ut(t.v)?(i=Xn(t.s),o=Xn(t.v),e=W0(t.h,i,o),n=!0,a="hsv"):Ut(t.h)&&Ut(t.s)&&Ut(t.l)?(i=Xn(t.s),s=Xn(t.l),e=H0(t.h,i,s),n=!0,a="hsl"):Ut(t.c)&&Ut(t.m)&&Ut(t.y)&&Ut(t.k)&&(e=K0(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=hc(r),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var SA="[-\\+]?\\d+%?",CA="[-\\+]?\\d*\\.\\d+%?",_i="(?:"+CA+")|(?:"+SA+")",Bh="[\\s|\\(]+("+_i+")[,|\\s]+("+_i+")[,|\\s]+("+_i+")\\s*\\)?",pc="[\\s|\\(]+("+_i+")[,|\\s]+("+_i+")[,|\\s]+("+_i+")[,|\\s]+("+_i+")\\s*\\)?",rr={CSS_UNIT:new RegExp(_i),rgb:new RegExp("rgb"+Bh),rgba:new RegExp("rgba"+pc),hsl:new RegExp("hsl"+Bh),hsla:new RegExp("hsla"+pc),hsv:new RegExp("hsv"+Bh),hsva:new RegExp("hsva"+pc),cmyk:new RegExp("cmyk"+pc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function TA(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Jn[t])t=Jn[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=rr.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=rr.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=rr.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=rr.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=rr.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=rr.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=rr.cmyk.exec(t),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:(r=rr.hex8.exec(t),r?{r:It(r[1]),g:It(r[2]),b:It(r[3]),a:Uh(r[4]),format:e?"name":"hex8"}:(r=rr.hex6.exec(t),r?{r:It(r[1]),g:It(r[2]),b:It(r[3]),format:e?"name":"hex"}:(r=rr.hex4.exec(t),r?{r:It(r[1]+r[1]),g:It(r[2]+r[2]),b:It(r[3]+r[3]),a:Uh(r[4]+r[4]),format:e?"name":"hex8"}:(r=rr.hex3.exec(t),r?{r:It(r[1]+r[1]),g:It(r[2]+r[2]),b:It(r[3]+r[3]),format:e?"name":"hex"}:!1))))))))))}function Ut(t){return typeof t=="number"?!Number.isNaN(t):rr.CSS_UNIT.test(t)}var Qn=class t{constructor(e="",r={}){if(e instanceof t)return e;typeof e=="number"&&(e=Z0(e)),this.originalInput=e;let i=Y0(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),r,i,o,s=e.r/255,n=e.g/255,a=e.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=hc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Mh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Mh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${i}%, ${o}%)`:`hsva(${r}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let e=Dh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Dh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${i}%, ${o}%)`:`hsla(${r}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Nh(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return G0(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${r}, ${i})`:`rgba(${e}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){let e=r=>`${Math.round(et(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=r=>Math.round(et(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Fh(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:r,y:i,k:o}=Fh(this.r,this.g,this.b);return`cmyk(${e}, ${r}, ${i}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+Nh(this.r,this.g,this.b,!1);for(let[r,i]of Object.entries(Jn))if(e===i)return r;return!1}toString(e){let r=!!e;e=e??this.format;let i=!1,o=this.a<1&&this.a>=0;return!r&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let r=this.toHsl();return r.l+=e/100,r.l=Yn(r.l),new t(r)}brighten(e=10){let r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)}darken(e=10){let r=this.toHsl();return r.l-=e/100,r.l=Yn(r.l),new t(r)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let r=this.toHsl();return r.s-=e/100,r.s=Yn(r.s),new t(r)}saturate(e=10){let r=this.toHsl();return r.s+=e/100,r.s=Yn(r.s),new t(r)}greyscale(){return this.desaturate(100)}spin(e){let r=this.toHsl(),i=(r.h+e)%360;return r.h=i<0?360+i:i,new t(r)}mix(e,r=50){let i=this.toRgb(),o=new t(e).toRgb(),s=r/100,n={r:(o.r-i.r)*s+i.r,g:(o.g-i.g)*s+i.g,b:(o.b-i.b)*s+i.b,a:(o.a-i.a)*s+i.a};return new t(n)}analogous(e=6,r=30){let i=this.toHsl(),o=360/r,s=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,s.push(new t(i));return s}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let r=this.toHsv(),{h:i}=r,{s:o}=r,{v:s}=r,n=[],a=1/e;for(;e--;)n.push(new t({h:i,s:o,v:s})),s=(s+a)%1;return n}splitcomplement(){let e=this.toHsl(),{h:r}=e;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]}onBackground(e){let r=this.toRgb(),i=new t(e).toRgb(),o=r.a+i.a*(1-r.a);return new t({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let r=this.toHsl(),{h:i}=r,o=[this],s=360/e;for(let n=1;n<e;n++)o.push(new t({h:(i+n*s)%360,s:r.s,l:r.l}));return o}equals(e){let r=new t(e);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}};var X0="EyeDropper"in window,fe=class extends T{constructor(){super(),this.formControlController=new ot(this),this.isSafeValue=!1,this.localize=new G(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),bi(e,{onMove:n=>{this.alpha=Me(n/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),bi(e,{onMove:n=>{this.hue=Me(n/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),r=e.querySelector(".color-picker__grid-handle"),{width:i,height:o}=e.getBoundingClientRect(),s=this.value,n=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,bi(e,{onMove:(a,l)=>{this.saturation=Me(a/i*100,0,100),this.brightness=Me(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Me(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Me(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Me(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Me(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Me(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Me(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Me(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Me(this.brightness-e,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new Qn(t);if(!e.isValid)return null;let r=e.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!X0)return;new EyeDropper().open().then(e=>{let r=this.value;this.setColor(e.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,r,i=100){let o=new Qn(`hsva(${t}, ${e}%, ${r}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let r=this.parseColor(e);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=x`
      <div
        part="base"
        class=${L({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?x`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Xe({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${L({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Xe({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${N(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Xe({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${N(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?x`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Xe({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Xe({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${N(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Xe({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":x`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${X0?x`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?x`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{let s=this.parseColor(o);return s?x`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${N(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Xe({backgroundColor:s.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:x`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${L({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Xe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};fe.styles=[O,j0];fe.dependencies={"sl-button-group":Ar,"sl-button":_e,"sl-dropdown":Je,"sl-icon":ie,"sl-input":se,"sl-visually-hidden":zn};u([A('[part~="base"]')],fe.prototype,"base",2);u([A('[part~="input"]')],fe.prototype,"input",2);u([A(".color-dropdown")],fe.prototype,"dropdown",2);u([A('[part~="preview"]')],fe.prototype,"previewButton",2);u([A('[part~="trigger"]')],fe.prototype,"trigger",2);u([D()],fe.prototype,"hasFocus",2);u([D()],fe.prototype,"isDraggingGridHandle",2);u([D()],fe.prototype,"isEmpty",2);u([D()],fe.prototype,"inputValue",2);u([D()],fe.prototype,"hue",2);u([D()],fe.prototype,"saturation",2);u([D()],fe.prototype,"brightness",2);u([D()],fe.prototype,"alpha",2);u([p()],fe.prototype,"value",2);u([Yt()],fe.prototype,"defaultValue",2);u([p()],fe.prototype,"label",2);u([p()],fe.prototype,"format",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"inline",2);u([p({reflect:!0})],fe.prototype,"size",2);u([p({attribute:"no-format-toggle",type:Boolean})],fe.prototype,"noFormatToggle",2);u([p()],fe.prototype,"name",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);u([p({type:Boolean})],fe.prototype,"hoist",2);u([p({type:Boolean})],fe.prototype,"opacity",2);u([p({type:Boolean})],fe.prototype,"uppercase",2);u([p()],fe.prototype,"swatches",2);u([p({reflect:!0})],fe.prototype,"form",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"required",2);u([Cr({passive:!1})],fe.prototype,"handleTouchMove",1);u([C("format",{waitUntilFirstUpdate:!0})],fe.prototype,"handleFormatChange",1);u([C("opacity",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpacityChange",1);u([C("value")],fe.prototype,"handleValueChange",1);fe.define("sl-color-picker");var J0=E`
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
`;var Vh=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${L({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Vh.styles=[O,J0];Vh.define("sl-card");var Q0=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var ew=E`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*tw(t,e){if(t!==void 0){let r=0;for(let i of t)yield e(i,r++)}}function*rw(t,e,r=1){let i=e===void 0?0:t;e??=t;for(let o=i;r>0?o<e:e<o;o+=r)yield o}var We=class extends T{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Q0(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new G(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let i=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||r!==o)&&(t.scrollTo({left:i,top:o,behavior:Ql()?"auto":"smooth"}),await He(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:r,loop:i}=this,o=i?t/r:(t-e)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),r=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+r*r)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,r=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!r&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!r&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;let a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{t.disconnect();for(let a of e){let l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}let r=e.find(a=>a.isIntersecting);if(!r)return;let i=this.getSlides({excludeClones:!1}),o=this.getSlides().length,s=i.indexOf(r.target),n=this.loop?s-this.slidesPerPage:s;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){let a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,r=t.slice(-e),i=t.slice(0,e);r.reverse().forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-s-1)),this.prepend(n)}),i.forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handleSlideChange(){let t=this.getSlides();t.forEach((e,r)=>{e.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((r,i)=>{(i+e)%e===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:r,loop:i}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!o.length)return;let n=i?(t+o.length)%o.length:Me(t,0,o.length-r);this.activeSlide=n;let a=this.localize.dir()==="rtl",l=Me(t+(i?r:0)+(a?r-1:0),0,s.length-1),c=s[l];this.scrollToSlide(c,Ql()?"auto":e)}scrollToSlide(t,e="smooth"){let r=this.scrollContainer,i=r.getBoundingClientRect(),o=t.getBoundingClientRect(),s=o.left-i.left,n=o.top-i.top;(s||n)&&(this.pendingSlideChange=!0,r.scrollTo({left:s+r.scrollLeft,top:n+r.scrollTop,behavior:e}))}render(){let{slidesPerMove:t,scrolling:e}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return x`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${L({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?x`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${L({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${L({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?x`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${tw(rw(r),a=>{let l=a===i;return x`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${L({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};We.styles=[O,ew];We.dependencies={"sl-icon":ie};u([p({type:Boolean,reflect:!0})],We.prototype,"loop",2);u([p({type:Boolean,reflect:!0})],We.prototype,"navigation",2);u([p({type:Boolean,reflect:!0})],We.prototype,"pagination",2);u([p({type:Boolean,reflect:!0})],We.prototype,"autoplay",2);u([p({type:Number,attribute:"autoplay-interval"})],We.prototype,"autoplayInterval",2);u([p({type:Number,attribute:"slides-per-page"})],We.prototype,"slidesPerPage",2);u([p({type:Number,attribute:"slides-per-move"})],We.prototype,"slidesPerMove",2);u([p()],We.prototype,"orientation",2);u([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],We.prototype,"mouseDragging",2);u([A(".carousel__slides")],We.prototype,"scrollContainer",2);u([A(".carousel__pagination")],We.prototype,"paginationContainer",2);u([D()],We.prototype,"activeSlide",2);u([D()],We.prototype,"scrolling",2);u([D()],We.prototype,"dragging",2);u([Cr({passive:!0})],We.prototype,"handleScroll",1);u([C("loop",{waitUntilFirstUpdate:!0}),C("slidesPerPage",{waitUntilFirstUpdate:!0})],We.prototype,"initializeSlides",1);u([C("activeSlide")],We.prototype,"handleSlideChange",1);u([C("slidesPerMove")],We.prototype,"updateSlidesSnap",1);u([C("autoplay")],We.prototype,"handleAutoplayChange",1);We.define("sl-carousel");var EA=(t,e)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...i)},e)}},iw=(t,e,r)=>{let i=t[e];t[e]=function(...o){i.call(this,...o),r.call(this,i,...o)}},AA="onscrollend"in window;if(!AA){let t=new Set,e=new WeakMap,r=o=>{for(let s of o.changedTouches)t.add(s.identifier)},i=o=>{for(let s of o.changedTouches)t.delete(s.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),iw(EventTarget.prototype,"addEventListener",function(o,s){if(s!=="scrollend")return;let n=EA(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),iw(EventTarget.prototype,"removeEventListener",function(o,s){if(s!=="scrollend")return;let n=e.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var ow=E`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var jh=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return x` <slot></slot> `}};jh.styles=[O,ow];jh.define("sl-carousel-item");Ar.define("sl-button-group");_e.define("sl-button");var ea={};Ew(ea,{backInDown:()=>VA,backInLeft:()=>jA,backInRight:()=>qA,backInUp:()=>HA,backOutDown:()=>WA,backOutLeft:()=>GA,backOutRight:()=>KA,backOutUp:()=>ZA,bounce:()=>OA,bounceIn:()=>YA,bounceInDown:()=>XA,bounceInLeft:()=>JA,bounceInRight:()=>QA,bounceInUp:()=>eO,bounceOut:()=>tO,bounceOutDown:()=>rO,bounceOutLeft:()=>iO,bounceOutRight:()=>oO,bounceOutUp:()=>sO,easings:()=>qh,fadeIn:()=>nO,fadeInBottomLeft:()=>aO,fadeInBottomRight:()=>lO,fadeInDown:()=>cO,fadeInDownBig:()=>uO,fadeInLeft:()=>dO,fadeInLeftBig:()=>hO,fadeInRight:()=>pO,fadeInRightBig:()=>fO,fadeInTopLeft:()=>mO,fadeInTopRight:()=>gO,fadeInUp:()=>bO,fadeInUpBig:()=>yO,fadeOut:()=>vO,fadeOutBottomLeft:()=>wO,fadeOutBottomRight:()=>_O,fadeOutDown:()=>xO,fadeOutDownBig:()=>kO,fadeOutLeft:()=>SO,fadeOutLeftBig:()=>CO,fadeOutRight:()=>TO,fadeOutRightBig:()=>EO,fadeOutTopLeft:()=>AO,fadeOutTopRight:()=>OO,fadeOutUp:()=>$O,fadeOutUpBig:()=>IO,flash:()=>$A,flip:()=>PO,flipInX:()=>LO,flipInY:()=>zO,flipOutX:()=>RO,flipOutY:()=>DO,headShake:()=>IA,heartBeat:()=>PA,hinge:()=>s$,jackInTheBox:()=>n$,jello:()=>LA,lightSpeedInLeft:()=>MO,lightSpeedInRight:()=>NO,lightSpeedOutLeft:()=>FO,lightSpeedOutRight:()=>UO,pulse:()=>zA,rollIn:()=>a$,rollOut:()=>l$,rotateIn:()=>BO,rotateInDownLeft:()=>VO,rotateInDownRight:()=>jO,rotateInUpLeft:()=>qO,rotateInUpRight:()=>HO,rotateOut:()=>WO,rotateOutDownLeft:()=>GO,rotateOutDownRight:()=>KO,rotateOutUpLeft:()=>ZO,rotateOutUpRight:()=>YO,rubberBand:()=>RA,shake:()=>DA,shakeX:()=>MA,shakeY:()=>NA,slideInDown:()=>XO,slideInLeft:()=>JO,slideInRight:()=>QO,slideInUp:()=>e$,slideOutDown:()=>t$,slideOutLeft:()=>r$,slideOutRight:()=>i$,slideOutUp:()=>o$,swing:()=>FA,tada:()=>UA,wobble:()=>BA,zoomIn:()=>c$,zoomInDown:()=>u$,zoomInLeft:()=>d$,zoomInRight:()=>h$,zoomInUp:()=>p$,zoomOut:()=>f$,zoomOutDown:()=>m$,zoomOutLeft:()=>g$,zoomOutRight:()=>b$,zoomOutUp:()=>y$});var OA=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var $A=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var IA=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var PA=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var LA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var zA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var RA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var DA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var MA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var NA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var FA=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var UA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var BA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var VA=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var jA=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var qA=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var HA=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var WA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var GA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var KA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var ZA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var YA=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var XA=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var JA=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var QA=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var eO=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var tO=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var rO=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var iO=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var oO=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var sO=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var nO=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var aO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var lO=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var cO=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var uO=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var dO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var hO=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var pO=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var fO=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var mO=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var gO=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var bO=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var yO=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var vO=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var wO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var _O=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var xO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var kO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var SO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var CO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var TO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var EO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var AO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var OO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var $O=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var IO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var PO=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var LO=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var zO=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var RO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var DO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var MO=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var NO=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var FO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var UO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var BO=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var VO=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var jO=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var qO=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var HO=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var WO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var GO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var KO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var ZO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var YO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var XO=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var JO=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var QO=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var e$=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var t$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var r$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var i$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var o$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var s$=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var n$=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var a$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var l$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var c$=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var u$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var d$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var h$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var p$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var f$=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var m$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var g$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var b$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var y$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var qh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var sw=E`
  :host {
    display: contents;
  }
`;var tt=class extends T{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let r=(t=ea.easings[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:ea[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!i?!1:(this.destroyAnimation(),this.animation=s.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};tt.styles=[O,sw];u([Xy("slot")],tt.prototype,"defaultSlot",2);u([p()],tt.prototype,"name",2);u([p({type:Boolean,reflect:!0})],tt.prototype,"play",2);u([p({type:Number})],tt.prototype,"delay",2);u([p()],tt.prototype,"direction",2);u([p({type:Number})],tt.prototype,"duration",2);u([p()],tt.prototype,"easing",2);u([p({attribute:"end-delay",type:Number})],tt.prototype,"endDelay",2);u([p()],tt.prototype,"fill",2);u([p({type:Number})],tt.prototype,"iterations",2);u([p({attribute:"iteration-start",type:Number})],tt.prototype,"iterationStart",2);u([p({attribute:!1})],tt.prototype,"keyframes",2);u([p({attribute:"playback-rate",type:Number})],tt.prototype,"playbackRate",2);u([C(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],tt.prototype,"handleAnimationChange",1);u([C("play")],tt.prototype,"handlePlayChange",1);u([C("playbackRate")],tt.prototype,"handlePlaybackRateChange",1);tt.define("sl-animation");var nw=E`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var wo=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,r)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};wo.styles=[O,nw];wo.dependencies={"sl-icon":ie};u([A("slot")],wo.prototype,"defaultSlot",2);u([A('slot[name="separator"]')],wo.prototype,"separatorSlot",2);u([p()],wo.prototype,"label",2);wo.define("sl-breadcrumb");var aw=E`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var qr=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return x`
      <div
        part="base"
        class=${L({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${N(this.target?this.target:void 0)}"
                rel=${N(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?x`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};qr.styles=[O,aw];u([A("slot:not([name])")],qr.prototype,"defaultSlot",2);u([D()],qr.prototype,"renderType",2);u([p()],qr.prototype,"href",2);u([p()],qr.prototype,"target",2);u([p()],qr.prototype,"rel",2);u([C("href",{waitUntilFirstUpdate:!0})],qr.prototype,"hrefChanged",1);qr.define("sl-breadcrumb-item");var lw=E`
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
`;var mr=class extends T{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=x``;return this.initials?e=x`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,x`
      <div
        part="base"
        class=${L({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};mr.styles=[O,lw];mr.dependencies={"sl-icon":ie};u([D()],mr.prototype,"hasError",2);u([p()],mr.prototype,"image",2);u([p()],mr.prototype,"label",2);u([p()],mr.prototype,"initials",2);u([p()],mr.prototype,"loading",2);u([p({reflect:!0})],mr.prototype,"shape",2);u([C("image")],mr.prototype,"handleImageChange",1);mr.define("sl-avatar");var cw=E`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;var ir=class extends T{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:r}=this.animatedImage;t.width=e,t.height=r,t.getContext("2d").drawImage(this.animatedImage,0,0,e,r),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return x`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?x`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};ir.styles=[O,cw];ir.dependencies={"sl-icon":ie};u([A(".animated-image__animated")],ir.prototype,"animatedImage",2);u([D()],ir.prototype,"frozenFrame",2);u([D()],ir.prototype,"isLoaded",2);u([p()],ir.prototype,"src",2);u([p()],ir.prototype,"alt",2);u([p({type:Boolean,reflect:!0})],ir.prototype,"play",2);u([C("play",{waitUntilFirstUpdate:!0})],ir.prototype,"handlePlayChange",1);u([C("src")],ir.prototype,"handleSrcChange",1);ir.define("sl-animated-image");var uw=E`
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
`;var ps=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Pt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Se(this,"icon","suffix"),this.localize=new G(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await $e(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=be(this,"alert.show",{dir:this.localize.dir()});await ke(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await $e(this.base);let{keyframes:t,options:e}=be(this,"alert.hide",{dir:this.localize.dir()});await ke(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),ps.parentElement===null&&document.body.append(ps),ps.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ps.removeChild(this),t(),ps.querySelector("sl-alert")===null&&ps.remove()},{once:!0})})}render(){return x`
      <div
        part="base"
        class=${L({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?x`
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

        ${this.countdown?x`
              <div
                class=${L({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Pt.styles=[O,uw];Pt.dependencies={"sl-icon-button":Ne};u([A('[part~="base"]')],Pt.prototype,"base",2);u([A(".alert__countdown-elapsed")],Pt.prototype,"countdownElement",2);u([p({type:Boolean,reflect:!0})],Pt.prototype,"open",2);u([p({type:Boolean,reflect:!0})],Pt.prototype,"closable",2);u([p({reflect:!0})],Pt.prototype,"variant",2);u([p({type:Number})],Pt.prototype,"duration",2);u([p({type:String,reflect:!0})],Pt.prototype,"countdown",2);u([D()],Pt.prototype,"remainingTime",2);u([C("open",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleOpenChange",1);u([C("duration")],Pt.prototype,"handleDurationChange",1);de("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Pt.define("sl-alert");var dw=E`
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
`;var fs=class extends T{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${L({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};fs.styles=[O,dw];u([p({reflect:!0})],fs.prototype,"variant",2);u([p({type:Boolean,reflect:!0})],fs.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],fs.prototype,"pulse",2);fs.define("sl-badge");var Hh=Symbol("store-raw"),ms=Symbol("store-node"),Hr=Symbol("store-has"),hw=Symbol("store-self");function pw(t){let e=t[Kr];if(!e&&(Object.defineProperty(t,Kr,{value:e=new Proxy(t,H$)}),!Array.isArray(t))){let r=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let o=0,s=r.length;o<s;o++){let n=r[o];i[n].get&&Object.defineProperty(t,n,{enumerable:i[n].enumerable,get:i[n].get.bind(e)})}}return e}function fc(t){let e;return t!=null&&typeof t=="object"&&(t[Kr]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function ra(t,e=new Set){let r,i,o,s;if(r=t!=null&&t[Hh])return r;if(!fc(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let n=0,a=t.length;n<a;n++)o=t[n],(i=ra(o,e))!==o&&(t[n]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);let n=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let l=0,c=n.length;l<c;l++)s=n[l],!a[s].get&&(o=t[s],(i=ra(o,e))!==o&&(t[s]=i))}return t}function mc(t,e){let r=t[e];return r||Object.defineProperty(t,e,{value:r=Object.create(null)}),r}function ia(t,e,r){if(t[e])return t[e];let[i,o]=Fe(r,{equals:!1,internal:!0});return i.$=o,t[e]=i}function j$(t,e){let r=Reflect.getOwnPropertyDescriptor(t,e);return!r||r.get||!r.configurable||e===Kr||e===ms||(delete r.value,delete r.writable,r.get=()=>t[Kr][e]),r}function fw(t){ua()&&ia(mc(t,ms),hw)()}function q$(t){return fw(t),Reflect.ownKeys(t)}var H$={get(t,e,r){if(e===Hh)return t;if(e===Kr)return r;if(e===la)return fw(t),r;let i=mc(t,ms),o=i[e],s=o?o():t[e];if(e===ms||e===Hr||e==="__proto__")return s;if(!o){let n=Object.getOwnPropertyDescriptor(t,e);ua()&&(typeof s!="function"||t.hasOwnProperty(e))&&!(n&&n.get)&&(s=ia(i,e,s)())}return fc(s)?pw(s):s},has(t,e){return e===Hh||e===Kr||e===la||e===ms||e===Hr||e==="__proto__"?!0:(ua()&&ia(mc(t,Hr),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:q$,getOwnPropertyDescriptor:j$};function gc(t,e,r,i=!1){if(!i&&t[e]===r)return;let o=t[e],s=t.length;r===void 0?(delete t[e],t[Hr]&&t[Hr][e]&&o!==void 0&&t[Hr][e].$()):(t[e]=r,t[Hr]&&t[Hr][e]&&o===void 0&&t[Hr][e].$());let n=mc(t,ms),a;if((a=ia(n,e,o))&&a.$(()=>r),Array.isArray(t)&&t.length!==s){for(let l=t.length;l<s;l++)(a=n[l])&&a.$();(a=ia(n,"length",s))&&a.$(t.length)}(a=n[hw])&&a.$()}function mw(t,e){let r=Object.keys(e);for(let i=0;i<r.length;i+=1){let o=r[i];gc(t,o,e[o])}}function W$(t,e){if(typeof e=="function"&&(e=e(t)),e=ra(e),Array.isArray(e)){if(t===e)return;let r=0,i=e.length;for(;r<i;r++){let o=e[r];t[r]!==o&&gc(t,r,o)}gc(t,"length",i)}else mw(t,e)}function ta(t,e,r=[]){let i,o=t;if(e.length>1){i=e.shift();let n=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let l=0;l<i.length;l++)ta(t,[i[l]].concat(e),r);return}else if(a&&n==="function"){for(let l=0;l<t.length;l++)i(t[l],l)&&ta(t,[l].concat(e),r);return}else if(a&&n==="object"){let{from:l=0,to:c=t.length-1,by:d=1}=i;for(let h=l;h<=c;h+=d)ta(t,[h].concat(e),r);return}else if(e.length>1){ta(t[i],e,[i].concat(r));return}o=t[i],r=[i].concat(r)}let s=e[0];typeof s=="function"&&(s=s(o,r),s===o)||i===void 0&&s==null||(s=ra(s),i===void 0||fc(o)&&fc(s)&&!Array.isArray(s)?mw(o,s):gc(t,i,s))}function gw(...[t,e]){let r=ra(t||{}),i=Array.isArray(r),o=pw(r);function s(...n){np(()=>{i&&n.length===1?W$(r,n[0]):ta(r,n)})}return[o,s]}var xse=Symbol("store-root");var G$=ne("<sl-card><form><sl-input></sl-input><sl-input class=break-flow></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><fieldset><legend>Knagger</legend></fieldset><fieldset><legend>Lenker</legend><sl-button>Legg til ny</sl-button></fieldset><div><sl-button-group><sl-button>Lagre</sl-button><sl-button>Avbryt",!0,!1),K$=ne("<div><sl-input></sl-input><sl-icon-button color=red>",!0,!1),Wh=it({form:t=>({display:"flex",gap:t.gapMd,alignItems:"baseline",flexWrap:"wrap","> *":{minWidth:"225px",flex:"1 1 33.333%"},"> .break-flow":{flexBasis:"100%"}}),itemRow:t=>({display:"flex",alignItems:"end",marginBottom:t.gapMd,">:first-child":{flex:"1"},">:last-child":{flexShrink:"0"}}),controls:t=>({display:"flex",justifyContent:"center"})}),bw=t=>{let e=we(()=>t.model.state()),[r,i]=gw([]);vs(()=>i(e().links));let o=(c,d)=>{i(c,"href",d)},s=()=>{i([...r,{href:""}])},n=c=>{i(r.filter((d,h)=>h!==c))},a="small",l=c=>{c.preventDefault();let d=th(c.currentTarget);d.links=r.filter(({href:h})=>h.trim().length>0),t.onSubmit(d)};return(()=>{var c=G$(),d=c.firstChild,h=d.firstChild,f=h.nextSibling,m=f.nextSibling,g=m.nextSibling,b=g.nextSibling,v=b.nextSibling,_=v.nextSibling,w=_.nextSibling,k=w.firstChild,y=k.nextSibling,S=w.nextSibling,M=S.firstChild,H=M.firstChild,V=H.nextSibling;return c._$owner=J(),d.addEventListener("submit",l),h.size="small",h.label="Virksomhetens navn",h.name="title",h.required=!0,h._$owner=J(),f.size="small",f.label="Beskrivelse av tjeneste eller produkt",f.name="description",f.required=!0,f._$owner=J(),m.size="small",m.label="Gateadresse",m.name="address",m.required=!0,m._$owner=J(),Ie(g,"blur",()=>{}),g.size="small",g.label="Postnummer",g.name="zip",g.required=!0,g._$owner=J(),b.size="small",b.label="Telefonnummer",b.name="phone",b.type="tel",b.required=!0,b._$owner=J(),v.size="small",v.label="Epostadresse",v.name="email",v.type="email",v.required=!0,v._$owner=J(),Q(w,X(Ei,{each:r,children:(R,P)=>(()=>{var ee=K$(),Y=ee.firstChild,ve=Y.nextSibling;return Ie(Y,"input",he=>o(P(),he.target.value)),Y.size="small",Y.type="url",Y.required=!0,Y._$owner=J(),Ie(ve,"click",()=>n(P())),ve.name="trash",ve._$owner=J(),Ce(he=>{var lt=Wh.itemRow,ht=`Lenke ${P()+1}`,pt=`links[${P()}].href`,or=R.href;return lt!==he.e&&Ae(ee,he.e=lt),ht!==he.t&&(Y.label=he.t=ht),pt!==he.a&&(Y.name=he.a=pt),or!==he.o&&(Y.value=he.o=or),he},{e:void 0,t:void 0,a:void 0,o:void 0}),ee})()}),y),Ie(y,"click",s),y.size="small",y.type="button",y.variant="primary",y._$owner=J(),M._$owner=J(),H.size="medium",H.type="submit",H.variant="primary",H._$owner=J(),Ie(V,"click",t.onCancel),V.size="medium",V.type="button",V.variant="neutral",V._$owner=J(),Ce(R=>{var P=Wh.form,ee=e().title,Y=e().description,ve=e().address,he=e().zip,lt=e().phone,ht=e().email,pt=Pi(Wh.controls,"break-flow");return P!==R.e&&Ae(d,R.e=P),ee!==R.t&&(h.value=R.t=ee),Y!==R.a&&(f.value=R.a=Y),ve!==R.o&&(m.value=R.o=ve),he!==R.i&&(g.value=R.i=he),lt!==R.n&&(b.value=R.n=lt),ht!==R.s&&(v.value=R.s=ht),pt!==R.h&&Ae(S,R.h=pt),R},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),c})()};var yw=K.object({owner:K.string(),title:K.string().default(""),description:K.string().default(""),address:K.string().default(""),zip:K.string().default(""),muncipiality:K.string().default(""),phone:K.string().default(""),email:K.string().default(""),tags:K.array(K.any()).default([]),links:K.array(Gd).default([])}),xi=class{data;constructor(e){this.data=e}static from(e){let r=yw.parse(e);return new xi(r)}};xi=gr([kr(yw)],xi);var Z$=ne("<section><h2>Mine oppf\xF8ringer</h2><div><sl-button><sl-icon slot=prefix></sl-icon>Ny",!0,!1),Y$=ne("<sl-button><sl-icon slot=prefix>",!0,!1),X$=it({listings:t=>({display:"flex",flexWrap:"wrap",gap:t.gapMd,marginBottom:t.gapMd})}),vw=t=>{let{account:e}=Sr(),[r,i]=Fe(null),o=we(()=>e()?.resources.listings()),s=()=>{let n=xi.from({owner:"flemming "});return console.log(n.data),new Jo(n.data)};return(()=>{var n=Z$(),a=n.firstChild,l=a.nextSibling,c=l.firstChild,d=c.firstChild;return Q(l,X(Ei,{get each(){return o()},children:h=>(()=>{var f=Y$(),m=f.firstChild;return Ie(f,"click",()=>i(h)),f.name="pencil",f._$owner=J(),m.name="pencil",m._$owner=J(),Q(f,()=>h.state().title,null),f})()}),c),Ie(c,"click",()=>i(s())),c.name="pencil",c._$owner=J(),d.name="plus-circle",d._$owner=J(),Q(n,X(xt,{get when(){return r()},get children(){return X(bw,{get model(){return r()},mode:"create",onSubmit:h=>console.log(h),onCancel:()=>i(null)})}}),null),Ce(()=>Ae(l,X$.listings)),n})()};var J$=ne("<sl-alert><sl-icon slot=icon></sl-icon><strong>Vi har sendt en verifiserings-e-post til <!>.</strong><br>Verifiser e-postadressen din der og fortsett deretter innlogging under.",!0,!1),Q$=ne("<sl-button>Logg inn",!0,!1),e5=ne("<sl-button-group><sl-button>Fortsett innlogging</sl-button><sl-button>Avbryt / Log inn med en annen e-post",!0,!1),t5=ne("<div>"),r5=ne("<section>"),dne=it({}),ww=t=>{let{account:e}=Sr(),r=we(()=>e()?.mustVerifyEmail()),i=we(()=>e()?.resources.user());return(()=>{var o=r5();return Q(o,X(xt,{get when(){return!i()},get children(){return[(()=>{var s=J$(),n=s.firstChild,a=n.nextSibling,l=a.firstChild,c=l.nextSibling,d=c.nextSibling;return s.variant="warning",s._$owner=J(),n.name="exclamation-triangle",n._$owner=J(),Q(a,r,c),Ce(()=>s.open=!!r()),s})(),(()=>{var s=t5();return Q(s,X(xt,{get when(){return!r()},get children(){var n=Q$();return Ie(n,"click",()=>e()?.login()),n._$owner=J(),n}}),null),Q(s,X(xt,{get when(){return r()},get children(){var n=e5(),a=n.firstChild,l=a.nextSibling;return n.label="Alignment",n._$owner=J(),Ie(a,"click",()=>e()?.login()),a.variant="primary",a._$owner=J(),Ie(l,"click",()=>e()?.logout()),l._$owner=J(),n}}),null),s})()]}}),null),Q(o,X(xt,{get when(){return i()},get children(){return X(vw,{})}}),null),o})()};var i5=ne("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>"),o5=ne("<style id=styler>"),s5=t=>{let e="pageKey",r=window.localStorage.getItem(e)||"PAGE_LISTINGS",[i,o]=Fe(r),s=n=>{window.localStorage.setItem(e,n),o(n)};return[i5(),(()=>{var n=o5();return Q(n,_g),n})(),X(Or,{get fallback(){return X(ui,{children:"Gul info laster..."})},get children(){return X(jb,{get children(){return X(hy,{get children(){return X(my,{get title(){return t.title},get selectedPage(){return i()},toggleMainPages:()=>s(i()==="PAGE_ACCOUNT"?"PAGE_LISTINGS":"PAGE_ACCOUNT"),get children(){return X(xc,{get children(){return[X(ha,{get when(){return i()==="PAGE_LISTINGS"},get children(){return X(_y,{})}}),X(ha,{get when(){return i()==="PAGE_ACCOUNT"},get children(){return X(ww,{})}})]}})}})}})}})}})]},_w=s5;ls("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");yp("gul-info",{title:"<title>",namespace:"<namespace>",database:"<database>",datapoint:"<datapoint>"},_w);})();
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

lit-html/directive-helpers.js:
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

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
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

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=app.js.map
