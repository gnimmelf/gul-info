"use strict";(()=>{var Ow=Object.create;var aa=Object.defineProperty;var Yh=Object.getOwnPropertyDescriptor;var $w=Object.getOwnPropertyNames;var Iw=Object.getPrototypeOf,Pw=Object.prototype.hasOwnProperty;var F=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Lw=(t,e)=>{for(var r in e)aa(t,r,{get:e[r],enumerable:!0})},zw=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of $w(e))!Pw.call(t,o)&&o!==r&&aa(t,o,{get:()=>e[o],enumerable:!(i=Yh(e,o))||i.enumerable});return t};var la=(t,e,r)=>(r=t!=null?Ow(Iw(t)):{},zw(e||!t||!t.__esModule?aa(r,"default",{value:t,enumerable:!0}):r,t));var yr=(t,e,r,i)=>{for(var o=i>1?void 0:i?Yh(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&aa(e,r,o),o};var kp=F((D5,Ac)=>{var ce=String,xp=function(){return{isColorSupported:!1,reset:ce,bold:ce,dim:ce,italic:ce,underline:ce,inverse:ce,hidden:ce,strikethrough:ce,black:ce,red:ce,green:ce,yellow:ce,blue:ce,magenta:ce,cyan:ce,white:ce,gray:ce,bgBlack:ce,bgRed:ce,bgGreen:ce,bgYellow:ce,bgBlue:ce,bgMagenta:ce,bgCyan:ce,bgWhite:ce,blackBright:ce,redBright:ce,greenBright:ce,yellowBright:ce,blueBright:ce,magentaBright:ce,cyanBright:ce,whiteBright:ce,bgBlackBright:ce,bgRedBright:ce,bgGreenBright:ce,bgYellowBright:ce,bgBlueBright:ce,bgMagentaBright:ce,bgCyanBright:ce,bgWhiteBright:ce}};Ac.exports=xp();Ac.exports.createColors=xp});var Oc=F(()=>{});var ya=F((F5,Tp)=>{"use strict";var Sp=kp(),Cp=Oc(),Ts=class t extends Error{constructor(e,r,i,o,s,n){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),o&&(this.source=o),n&&(this.plugin=n),typeof r<"u"&&typeof i<"u"&&(typeof r=="number"?(this.line=r,this.column=i):(this.line=r.line,this.column=r.column,this.endLine=i.line,this.endColumn=i.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,t)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let r=this.source;e==null&&(e=Sp.isColorSupported);let i=d=>d,o=d=>d,s=d=>d;if(e){let{bold:d,gray:h,red:f}=Sp.createColors(!0);o=m=>d(f(m)),i=m=>h(m),Cp&&(s=m=>Cp(m))}let n=r.split(/\r?\n/),a=Math.max(this.line-3,0),l=Math.min(this.line+2,n.length),c=String(l).length;return n.slice(a,l).map((d,h)=>{let f=a+1+h,m=" "+(" "+f).slice(-c)+" | ";if(f===this.line){if(d.length>160){let y=20,b=Math.max(0,this.column-y),_=Math.max(this.column+y,this.endColumn+y),w=d.slice(b,_),k=i(m.replace(/\d/g," "))+d.slice(0,Math.min(this.column-1,y-1)).replace(/[^\t]/g," ");return o(">")+i(m)+s(w)+`
 `+k+o("^")}let g=i(m.replace(/\d/g," "))+d.slice(0,this.column-1).replace(/[^\t]/g," ");return o(">")+i(m)+s(d)+`
 `+g+o("^")}return" "+i(m)+s(d)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};Tp.exports=Ts;Ts.default=Ts});var $c=F((U5,Ap)=>{"use strict";var Ep={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function u_(t){return t[0].toUpperCase()+t.slice(1)}var Es=class{constructor(e){this.builder=e}atrule(e,r){let i="@"+e.name,o=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?i+=e.raws.afterName:o&&(i+=" "),e.nodes)this.block(e,i+o);else{let s=(e.raws.between||"")+(r?";":"");this.builder(i+o+s,e)}}beforeAfter(e,r){let i;e.type==="decl"?i=this.raw(e,null,"beforeDecl"):e.type==="comment"?i=this.raw(e,null,"beforeComment"):r==="before"?i=this.raw(e,null,"beforeRule"):i=this.raw(e,null,"beforeClose");let o=e.parent,s=0;for(;o&&o.type!=="root";)s+=1,o=o.parent;if(i.includes(`
`)){let n=this.raw(e,null,"indent");if(n.length)for(let a=0;a<s;a++)i+=n}return i}block(e,r){let i=this.raw(e,"between","beforeOpen");this.builder(r+i+"{",e,"start");let o;e.nodes&&e.nodes.length?(this.body(e),o=this.raw(e,"after")):o=this.raw(e,"after","emptyBody"),o&&this.builder(o),this.builder("}",e,"end")}body(e){let r=e.nodes.length-1;for(;r>0&&e.nodes[r].type==="comment";)r-=1;let i=this.raw(e,"semicolon");for(let o=0;o<e.nodes.length;o++){let s=e.nodes[o],n=this.raw(s,"before");n&&this.builder(n),this.stringify(s,r!==o||i)}}comment(e){let r=this.raw(e,"left","commentLeft"),i=this.raw(e,"right","commentRight");this.builder("/*"+r+e.text+i+"*/",e)}decl(e,r){let i=this.raw(e,"between","colon"),o=e.prop+i+this.rawValue(e,"value");e.important&&(o+=e.raws.important||" !important"),r&&(o+=";"),this.builder(o,e)}document(e){this.body(e)}raw(e,r,i){let o;if(i||(i=r),r&&(o=e.raws[r],typeof o<"u"))return o;let s=e.parent;if(i==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return Ep[i];let n=e.root();if(n.rawCache||(n.rawCache={}),typeof n.rawCache[i]<"u")return n.rawCache[i];if(i==="before"||i==="after")return this.beforeAfter(e,i);{let a="raw"+u_(i);this[a]?o=this[a](n,e):n.walk(l=>{if(o=l.raws[r],typeof o<"u")return!1})}return typeof o>"u"&&(o=Ep[i]),n.rawCache[i]=o,o}rawBeforeClose(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length>0&&typeof i.raws.after<"u")return r=i.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(e,r){let i;return e.walkComments(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeDecl"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeDecl(e,r){let i;return e.walkDecls(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeRule"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeOpen(e){let r;return e.walk(i=>{if(i.type!=="decl"&&(r=i.raws.between,typeof r<"u"))return!1}),r}rawBeforeRule(e){let r;return e.walk(i=>{if(i.nodes&&(i.parent!==e||e.first!==i)&&typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(e){let r;return e.walkDecls(i=>{if(typeof i.raws.between<"u")return r=i.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length===0&&(r=i.raws.after,typeof r<"u"))return!1}),r}rawIndent(e){if(e.raws.indent)return e.raws.indent;let r;return e.walk(i=>{let o=i.parent;if(o&&o!==e&&o.parent&&o.parent===e&&typeof i.raws.before<"u"){let s=i.raws.before.split(`
`);return r=s[s.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length&&i.last.type==="decl"&&(r=i.raws.semicolon,typeof r<"u"))return!1}),r}rawValue(e,r){let i=e[r],o=e.raws[r];return o&&o.value===i?o.raw:i}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,r){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,r)}};Ap.exports=Es;Es.default=Es});var As=F((B5,Op)=>{"use strict";var d_=$c();function Ic(t,e){new d_(e).stringify(t)}Op.exports=Ic;Ic.default=Ic});var va=F((V5,Pc)=>{"use strict";Pc.exports.isClean=Symbol("isClean");Pc.exports.my=Symbol("my")});var Ps=F((j5,$p)=>{"use strict";var h_=ya(),p_=$c(),f_=As(),{isClean:Os,my:m_}=va();function Lc(t,e){let r=new t.constructor;for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i)||i==="proxyCache")continue;let o=t[i],s=typeof o;i==="parent"&&s==="object"?e&&(r[i]=e):i==="source"?r[i]=o:Array.isArray(o)?r[i]=o.map(n=>Lc(n,r)):(s==="object"&&o!==null&&(o=Lc(o)),r[i]=o)}return r}function $s(t,e){if(e&&typeof e.offset<"u")return e.offset;let r=1,i=1,o=0;for(let s=0;s<t.length;s++){if(i===e.line&&r===e.column){o=s;break}t[s]===`
`?(r=1,i+=1):r+=1}return o}var Is=class{constructor(e={}){this.raws={},this[Os]=!1,this[m_]=!0;for(let r in e)if(r==="nodes"){this.nodes=[];for(let i of e[r])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[r]=e[r]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let r=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${r.input.from}:${r.start.line}:${r.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let r in e)this[r]=e[r];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let r=Lc(this);for(let i in e)r[i]=e[i];return r}cloneAfter(e={}){let r=this.clone(e);return this.parent.insertAfter(this,r),r}cloneBefore(e={}){let r=this.clone(e);return this.parent.insertBefore(this,r),r}error(e,r={}){if(this.source){let{end:i,start:o}=this.rangeBy(r);return this.source.input.error(e,{column:o.column,line:o.line},{column:i.column,line:i.line},r)}return new h_(e)}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:r==="root"?()=>e.root().toProxy():e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="prop"||r==="value"||r==="name"||r==="params"||r==="important"||r==="text")&&e.markDirty()),!0}}}markClean(){this[Os]=!0}markDirty(){if(this[Os]){this[Os]=!1;let e=this;for(;e=e.parent;)e[Os]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let r=this.source.start;if(e.index)r=this.positionInside(e.index);else if(e.word){let o=this.source.input.css.slice($s(this.source.input.css,this.source.start),$s(this.source.input.css,this.source.end)).indexOf(e.word);o!==-1&&(r=this.positionInside(o))}return r}positionInside(e){let r=this.source.start.column,i=this.source.start.line,o=$s(this.source.input.css,this.source.start),s=o+e;for(let n=o;n<s;n++)this.source.input.css[n]===`
`?(r=1,i+=1):r+=1;return{column:r,line:i}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let r={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:r.column+1,line:r.line};if(e.word){let s=this.source.input.css.slice($s(this.source.input.css,this.source.start),$s(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(r=this.positionInside(s),i=this.positionInside(s+e.word.length))}else e.start?r={column:e.start.column,line:e.start.line}:e.index&&(r=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<r.line||i.line===r.line&&i.column<=r.column)&&(i={column:r.column+1,line:r.line}),{end:i,start:r}}raw(e,r){return new p_().raw(this,e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let r=this,i=!1;for(let o of e)o===this?i=!0:i?(this.parent.insertAfter(r,o),r=o):this.parent.insertBefore(r,o);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,r){let i={},o=r==null;r=r||new Map;let s=0;for(let n in this){if(!Object.prototype.hasOwnProperty.call(this,n)||n==="parent"||n==="proxyCache")continue;let a=this[n];if(Array.isArray(a))i[n]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,r):l);else if(typeof a=="object"&&a.toJSON)i[n]=a.toJSON(null,r);else if(n==="source"){let l=r.get(a.input);l==null&&(l=s,r.set(a.input,s),s++),i[n]={end:a.end,inputId:l,start:a.start}}else i[n]=a}return o&&(i.inputs=[...r.keys()].map(n=>n.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=f_){e.stringify&&(e=e.stringify);let r="";return e(this,i=>{r+=i}),r}warn(e,r,i){let o={node:this};for(let s in i)o[s]=i[s];return e.warn(r,o)}get proxyOf(){return this}};$p.exports=Is;Is.default=Is});var zs=F((q5,Ip)=>{"use strict";var g_=Ps(),Ls=class extends g_{constructor(e){super(e),this.type="comment"}};Ip.exports=Ls;Ls.default=Ls});var Ds=F((H5,Pp)=>{"use strict";var b_=Ps(),Rs=class extends b_{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};Pp.exports=Rs;Rs.default=Rs});var Xr=F((W5,Bp)=>{"use strict";var Lp=zs(),zp=Ds(),y_=Ps(),{isClean:Rp,my:Dp}=va(),zc,Mp,Np,Rc;function Fp(t){return t.map(e=>(e.nodes&&(e.nodes=Fp(e.nodes)),delete e.source,e))}function Up(t){if(t[Rp]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)Up(e)}var ar=class t extends y_{append(...e){for(let r of e){let i=this.normalize(r,this.last);for(let o of i)this.proxyOf.nodes.push(o)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let r of this.nodes)r.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let r=this.getIterator(),i,o;for(;this.indexes[r]<this.proxyOf.nodes.length&&(i=this.indexes[r],o=e(this.proxyOf.nodes[i],i),o!==!1);)this.indexes[r]+=1;return delete this.indexes[r],o}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:e[r]?r==="each"||typeof r=="string"&&r.startsWith("walk")?(...i)=>e[r](...i.map(o=>typeof o=="function"?(s,n)=>o(s.toProxy(),n):o)):r==="every"||r==="some"?i=>e[r]((o,...s)=>i(o.toProxy(),...s)):r==="root"?()=>e.root().toProxy():r==="nodes"?e.nodes.map(i=>i.toProxy()):r==="first"||r==="last"?e[r].toProxy():e[r]:e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="name"||r==="params"||r==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,r){let i=this.index(e),o=this.normalize(r,this.proxyOf.nodes[i]).reverse();i=this.index(e);for(let n of o)this.proxyOf.nodes.splice(i+1,0,n);let s;for(let n in this.indexes)s=this.indexes[n],i<s&&(this.indexes[n]=s+o.length);return this.markDirty(),this}insertBefore(e,r){let i=this.index(e),o=i===0?"prepend":!1,s=this.normalize(r,this.proxyOf.nodes[i],o).reverse();i=this.index(e);for(let a of s)this.proxyOf.nodes.splice(i,0,a);let n;for(let a in this.indexes)n=this.indexes[a],i<=n&&(this.indexes[a]=n+s.length);return this.markDirty(),this}normalize(e,r){if(typeof e=="string")e=Fp(Mp(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new zp(e)]}else if(e.selector||e.selectors)e=[new Rc(e)];else if(e.name)e=[new zc(e)];else if(e.text)e=[new Lp(e)];else throw new Error("Unknown node type in node creation");return e.map(o=>(o[Dp]||t.rebuild(o),o=o.proxyOf,o.parent&&o.parent.removeChild(o),o[Rp]&&Up(o),o.raws||(o.raws={}),typeof o.raws.before>"u"&&r&&typeof r.raws.before<"u"&&(o.raws.before=r.raws.before.replace(/\S/g,"")),o.parent=this.proxyOf,o))}prepend(...e){e=e.reverse();for(let r of e){let i=this.normalize(r,this.first,"prepend").reverse();for(let o of i)this.proxyOf.nodes.unshift(o);for(let o in this.indexes)this.indexes[o]=this.indexes[o]+i.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let r;for(let i in this.indexes)r=this.indexes[i],r>=e&&(this.indexes[i]=r-1);return this.markDirty(),this}replaceValues(e,r,i){return i||(i=r,r={}),this.walkDecls(o=>{r.props&&!r.props.includes(o.prop)||r.fast&&!o.value.includes(r.fast)||(o.value=o.value.replace(e,i))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((r,i)=>{let o;try{o=e(r,i)}catch(s){throw r.addToError(s)}return o!==!1&&r.walk&&(o=r.walk(e)),o})}walkAtRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="atrule"&&e.test(i.name))return r(i,o)}):this.walk((i,o)=>{if(i.type==="atrule"&&i.name===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="atrule")return r(i,o)}))}walkComments(e){return this.walk((r,i)=>{if(r.type==="comment")return e(r,i)})}walkDecls(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="decl"&&e.test(i.prop))return r(i,o)}):this.walk((i,o)=>{if(i.type==="decl"&&i.prop===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="decl")return r(i,o)}))}walkRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="rule"&&e.test(i.selector))return r(i,o)}):this.walk((i,o)=>{if(i.type==="rule"&&i.selector===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="rule")return r(i,o)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};ar.registerParse=t=>{Mp=t};ar.registerRule=t=>{Rc=t};ar.registerAtRule=t=>{zc=t};ar.registerRoot=t=>{Np=t};Bp.exports=ar;ar.default=ar;ar.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,zc.prototype):t.type==="rule"?Object.setPrototypeOf(t,Rc.prototype):t.type==="decl"?Object.setPrototypeOf(t,zp.prototype):t.type==="comment"?Object.setPrototypeOf(t,Lp.prototype):t.type==="root"&&Object.setPrototypeOf(t,Np.prototype),t[Dp]=!0,t.nodes&&t.nodes.forEach(e=>{ar.rebuild(e)})}});var wa=F((G5,jp)=>{"use strict";var Vp=Xr(),Oo=class extends Vp{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};jp.exports=Oo;Oo.default=Oo;Vp.registerAtRule(Oo)});var _a=F((K5,Wp)=>{"use strict";var v_=Xr(),qp,Hp,Ii=class extends v_{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new qp(new Hp,this,e).stringify()}};Ii.registerLazyResult=t=>{qp=t};Ii.registerProcessor=t=>{Hp=t};Wp.exports=Ii;Ii.default=Ii});var Kp=F((Z5,Gp)=>{var w_="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",__=(t,e=21)=>(r=e)=>{let i="",o=r|0;for(;o--;)i+=t[Math.random()*t.length|0];return i},x_=(t=21)=>{let e="",r=t|0;for(;r--;)e+=w_[Math.random()*64|0];return e};Gp.exports={nanoid:x_,customAlphabet:__}});var xa=F(()=>{});var ka=F(()=>{});var Dc=F(()=>{});var Zp=F(()=>{});var Nc=F((oI,Jp)=>{"use strict";var{existsSync:k_,readFileSync:S_}=Zp(),{dirname:Mc,join:C_}=xa(),{SourceMapConsumer:Yp,SourceMapGenerator:Xp}=ka();function T_(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}var Ms=class{constructor(e,r){if(r.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let i=r.map?r.map.prev:void 0,o=this.loadMap(r.from,i);!this.mapFile&&r.from&&(this.mapFile=r.from),this.mapFile&&(this.root=Mc(this.mapFile)),o&&(this.text=o)}consumer(){return this.consumerCache||(this.consumerCache=new Yp(this.text)),this.consumerCache}decodeInline(e){let r=/^data:application\/json;charset=utf-?8;base64,/,i=/^data:application\/json;base64,/,o=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/,n=e.match(o)||e.match(s);if(n)return decodeURIComponent(e.substr(n[0].length));let a=e.match(r)||e.match(i);if(a)return T_(e.substr(a[0].length));let l=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+l)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let r=e.match(/\/\*\s*# sourceMappingURL=/g);if(!r)return;let i=e.lastIndexOf(r.pop()),o=e.indexOf("*/",i);i>-1&&o>-1&&(this.annotation=this.getAnnotationURL(e.substring(i,o)))}loadFile(e){if(this.root=Mc(e),k_(e))return this.mapFile=e,S_(e,"utf-8").toString().trim()}loadMap(e,r){if(r===!1)return!1;if(r){if(typeof r=="string")return r;if(typeof r=="function"){let i=r(e);if(i){let o=this.loadFile(i);if(!o)throw new Error("Unable to load previous source map: "+i.toString());return o}}else{if(r instanceof Yp)return Xp.fromSourceMap(r).toString();if(r instanceof Xp)return r.toString();if(this.isMap(r))return JSON.stringify(r);throw new Error("Unsupported previous source map format: "+r.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let i=this.annotation;return e&&(i=C_(Mc(e),i)),this.loadFile(i)}}}startWith(e,r){return e?e.substr(0,r.length)===r:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};Jp.exports=Ms;Ms.default=Ms});var Ns=F((sI,rf)=>{"use strict";var{nanoid:E_}=Kp(),{isAbsolute:Bc,resolve:Vc}=xa(),{SourceMapConsumer:A_,SourceMapGenerator:O_}=ka(),{fileURLToPath:Qp,pathToFileURL:Sa}=Dc(),ef=ya(),$_=Nc(),Fc=Oc(),Uc=Symbol("fromOffsetCache"),I_=!!(A_&&O_),tf=!!(Vc&&Bc),$o=class{constructor(e,r={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,r.from&&(!tf||/^\w+:\/\//.test(r.from)||Bc(r.from)?this.file=r.from:this.file=Vc(r.from)),tf&&I_){let i=new $_(this.css,r);if(i.text){this.map=i;let o=i.consumer().file;!this.file&&o&&(this.file=this.mapResolve(o))}}this.file||(this.id="<input css "+E_(6)+">"),this.map&&(this.map.file=this.from)}error(e,r,i,o={}){let s,n,a;if(r&&typeof r=="object"){let c=r,d=i;if(typeof c.offset=="number"){let h=this.fromOffset(c.offset);r=h.line,i=h.col}else r=c.line,i=c.column;if(typeof d.offset=="number"){let h=this.fromOffset(d.offset);n=h.line,s=h.col}else n=d.line,s=d.column}else if(!i){let c=this.fromOffset(r);r=c.line,i=c.col}let l=this.origin(r,i,n,s);return l?a=new ef(e,l.endLine===void 0?l.line:{column:l.column,line:l.line},l.endLine===void 0?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,o.plugin):a=new ef(e,n===void 0?r:{column:i,line:r},n===void 0?i:{column:s,line:n},this.css,this.file,o.plugin),a.input={column:i,endColumn:s,endLine:n,line:r,source:this.css},this.file&&(Sa&&(a.input.url=Sa(this.file).toString()),a.input.file=this.file),a}fromOffset(e){let r,i;if(this[Uc])i=this[Uc];else{let s=this.css.split(`
`);i=new Array(s.length);let n=0;for(let a=0,l=s.length;a<l;a++)i[a]=n,n+=s[a].length+1;this[Uc]=i}r=i[i.length-1];let o=0;if(e>=r)o=i.length-1;else{let s=i.length-2,n;for(;o<s;)if(n=o+(s-o>>1),e<i[n])s=n-1;else if(e>=i[n+1])o=n+1;else{o=n;break}}return{col:e-i[o]+1,line:o+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Vc(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,r,i,o){if(!this.map)return!1;let s=this.map.consumer(),n=s.originalPositionFor({column:r,line:e});if(!n.source)return!1;let a;typeof i=="number"&&(a=s.originalPositionFor({column:o,line:i}));let l;Bc(n.source)?l=Sa(n.source):l=new URL(n.source,this.map.consumer().sourceRoot||Sa(this.map.mapFile));let c={column:n.column,endColumn:a&&a.column,endLine:a&&a.line,line:n.line,url:l.toString()};if(l.protocol==="file:")if(Qp)c.file=Qp(l);else throw new Error("file: protocol is not available in this PostCSS build");let d=s.sourceContentFor(n.source);return d&&(c.source=d),c}toJSON(){let e={};for(let r of["hasBOM","css","file","id"])this[r]!=null&&(e[r]=this[r]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};rf.exports=$o;$o.default=$o;Fc&&Fc.registerInput&&Fc.registerInput($o)});var Io=F((nI,af)=>{"use strict";var of=Xr(),sf,nf,Jr=class extends of{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,r,i){let o=super.normalize(e);if(r){if(i==="prepend")this.nodes.length>1?r.raws.before=this.nodes[1].raws.before:delete r.raws.before;else if(this.first!==r)for(let s of o)s.raws.before=r.raws.before}return o}removeChild(e,r){let i=this.index(e);return!r&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(e)}toResult(e={}){return new sf(new nf,this,e).stringify()}};Jr.registerLazyResult=t=>{sf=t};Jr.registerProcessor=t=>{nf=t};af.exports=Jr;Jr.default=Jr;of.registerRoot(Jr)});var jc=F((aI,lf)=>{"use strict";var Fs={comma(t){return Fs.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Fs.split(t,e)},split(t,e,r){let i=[],o="",s=!1,n=0,a=!1,l="",c=!1;for(let d of t)c?c=!1:d==="\\"?c=!0:a?d===l&&(a=!1):d==='"'||d==="'"?(a=!0,l=d):d==="("?n+=1:d===")"?n>0&&(n-=1):n===0&&e.includes(d)&&(s=!0),s?(o!==""&&i.push(o.trim()),o="",s=!1):o+=d;return(r||o!=="")&&i.push(o.trim()),i}};lf.exports=Fs;Fs.default=Fs});var Ca=F((lI,uf)=>{"use strict";var cf=Xr(),P_=jc(),Po=class extends cf{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return P_.comma(this.selector)}set selectors(e){let r=this.selector?this.selector.match(/,\s*/):null,i=r?r[0]:","+this.raw("between","beforeOpen");this.selector=e.join(i)}};uf.exports=Po;Po.default=Po;cf.registerRule(Po)});var hf=F((cI,df)=>{"use strict";var L_=wa(),z_=zs(),R_=Ds(),D_=Ns(),M_=Nc(),N_=Io(),F_=Ca();function Us(t,e){if(Array.isArray(t))return t.map(o=>Us(o));let{inputs:r,...i}=t;if(r){e=[];for(let o of r){let s={...o,__proto__:D_.prototype};s.map&&(s.map={...s.map,__proto__:M_.prototype}),e.push(s)}}if(i.nodes&&(i.nodes=t.nodes.map(o=>Us(o,e))),i.source){let{inputId:o,...s}=i.source;i.source=s,o!=null&&(i.source.input=e[o])}if(i.type==="root")return new N_(i);if(i.type==="decl")return new R_(i);if(i.type==="rule")return new F_(i);if(i.type==="comment")return new z_(i);if(i.type==="atrule")return new L_(i);throw new Error("Unknown node type: "+t.type)}df.exports=Us;Us.default=Us});var Hc=F((uI,yf)=>{"use strict";var{dirname:Ta,relative:ff,resolve:mf,sep:gf}=xa(),{SourceMapConsumer:bf,SourceMapGenerator:Ea}=ka(),{pathToFileURL:pf}=Dc(),U_=Ns(),B_=!!(bf&&Ea),V_=!!(Ta&&mf&&ff&&gf),qc=class{constructor(e,r,i,o){this.stringify=e,this.mapOpts=i.map||{},this.root=r,this.opts=i,this.css=o,this.originalCSS=o,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let r=`
`;this.css.includes(`\r
`)&&(r=`\r
`),this.css+=r+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let r=this.toUrl(this.path(e.file)),i=e.root||Ta(e.file),o;this.mapOpts.sourcesContent===!1?(o=new bf(e.text),o.sourcesContent&&(o.sourcesContent=null)):o=e.consumer(),this.map.applySourceMap(o,r,this.toUrl(this.path(i)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let r=this.root.nodes.length-1;r>=0;r--)e=this.root.nodes[r],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(r)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),V_&&B_&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,r=>{e+=r}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=Ea.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new Ea({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new Ea({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,r=1,i="<no source>",o={generated:{column:0,line:0},original:{column:0,line:0},source:""},s,n;this.stringify(this.root,(a,l,c)=>{if(this.css+=a,l&&c!=="end"&&(o.generated.line=e,o.generated.column=r-1,l.source&&l.source.start?(o.source=this.sourcePath(l),o.original.line=l.source.start.line,o.original.column=l.source.start.column-1,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,this.map.addMapping(o))),n=a.match(/\n/g),n?(e+=n.length,s=a.lastIndexOf(`
`),r=a.length-s):r+=a.length,l&&c!=="start"){let d=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==d.last||d.raws.semicolon)&&(l.source&&l.source.end?(o.source=this.sourcePath(l),o.original.line=l.source.end.line,o.original.column=l.source.end.column-1,o.generated.line=e,o.generated.column=r-2,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,o.generated.line=e,o.generated.column=r-1,this.map.addMapping(o)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(r=>r.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let r=this.memoizedPaths.get(e);if(r)return r;let i=this.opts.to?Ta(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(i=Ta(mf(i,this.mapOpts.annotation)));let o=ff(i,e);return this.memoizedPaths.set(e,o),o}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let r=e.source.input.map;this.previousMaps.includes(r)||this.previousMaps.push(r)}});else{let e=new U_(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(r=>{if(r.source){let i=r.source.input.from;if(i&&!e[i]){e[i]=!0;let o=this.usesFileUrls?this.toFileUrl(i):this.toUrl(this.path(i));this.map.setSourceContent(o,r.source.input.css)}}});else if(this.css){let r=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(r,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let r=this.memoizedFileURLs.get(e);if(r)return r;if(pf){let i=pf(e).toString();return this.memoizedFileURLs.set(e,i),i}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let r=this.memoizedURLs.get(e);if(r)return r;gf==="\\"&&(e=e.replace(/\\/g,"/"));let i=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,i),i}};yf.exports=qc});var _f=F((dI,wf)=>{"use strict";var Aa=/[\t\n\f\r "#'()/;[\\\]{}]/g,Oa=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,j_=/.[\r\n"'(/\\]/,vf=/[\da-f]/i;wf.exports=function(e,r={}){let i=e.css.valueOf(),o=r.ignoreErrors,s,n,a,l,c,d,h,f,m,g,y=i.length,b=0,_=[],w=[];function k(){return b}function v(B){throw e.error("Unclosed "+B,b)}function S(){return w.length===0&&b>=y}function D(B){if(w.length)return w.pop();if(b>=y)return;let q=B?B.ignoreUnclosed:!1;switch(s=i.charCodeAt(b),s){case 10:case 32:case 9:case 13:case 12:{l=b;do l+=1,s=i.charCodeAt(l);while(s===32||s===10||s===9||s===13||s===12);d=["space",i.slice(b,l)],b=l-1;break}case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let E=String.fromCharCode(s);d=[E,E,b];break}case 40:{if(g=_.length?_.pop()[1]:"",m=i.charCodeAt(b+1),g==="url"&&m!==39&&m!==34&&m!==32&&m!==10&&m!==9&&m!==12&&m!==13){l=b;do{if(h=!1,l=i.indexOf(")",l+1),l===-1)if(o||q){l=b;break}else v("bracket");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["brackets",i.slice(b,l+1),b,l],b=l}else l=i.indexOf(")",b+1),n=i.slice(b,l+1),l===-1||j_.test(n)?d=["(","(",b]:(d=["brackets",n,b,l],b=l);break}case 39:case 34:{c=s===39?"'":'"',l=b;do{if(h=!1,l=i.indexOf(c,l+1),l===-1)if(o||q){l=b+1;break}else v("string");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["string",i.slice(b,l+1),b,l],b=l;break}case 64:{Aa.lastIndex=b+1,Aa.test(i),Aa.lastIndex===0?l=i.length-1:l=Aa.lastIndex-2,d=["at-word",i.slice(b,l+1),b,l],b=l;break}case 92:{for(l=b,a=!0;i.charCodeAt(l+1)===92;)l+=1,a=!a;if(s=i.charCodeAt(l+1),a&&s!==47&&s!==32&&s!==10&&s!==9&&s!==13&&s!==12&&(l+=1,vf.test(i.charAt(l)))){for(;vf.test(i.charAt(l+1));)l+=1;i.charCodeAt(l+1)===32&&(l+=1)}d=["word",i.slice(b,l+1),b,l],b=l;break}default:{s===47&&i.charCodeAt(b+1)===42?(l=i.indexOf("*/",b+2)+1,l===0&&(o||q?l=i.length:v("comment")),d=["comment",i.slice(b,l+1),b,l],b=l):(Oa.lastIndex=b+1,Oa.test(i),Oa.lastIndex===0?l=i.length-1:l=Oa.lastIndex-2,d=["word",i.slice(b,l+1),b,l],_.push(d),b=l);break}}return b++,d}function K(B){w.push(B)}return{back:K,endOfFile:S,nextToken:D,position:k}}});var Cf=F((hI,Sf)=>{"use strict";var q_=wa(),H_=zs(),W_=Ds(),G_=Io(),xf=Ca(),K_=_f(),kf={empty:!0,space:!0};function Z_(t){for(let e=t.length-1;e>=0;e--){let r=t[e],i=r[3]||r[2];if(i)return i}}var Wc=class{constructor(e){this.input=e,this.root=new G_,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let r=new q_;r.name=e[1].slice(1),r.name===""&&this.unnamedAtrule(r,e),this.init(r,e[2]);let i,o,s,n=!1,a=!1,l=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),i=e[0],i==="("||i==="["?c.push(i==="("?")":"]"):i==="{"&&c.length>0?c.push("}"):i===c[c.length-1]&&c.pop(),c.length===0)if(i===";"){r.source.end=this.getPosition(e[2]),r.source.end.offset++,this.semicolon=!0;break}else if(i==="{"){a=!0;break}else if(i==="}"){if(l.length>0){for(s=l.length-1,o=l[s];o&&o[0]==="space";)o=l[--s];o&&(r.source.end=this.getPosition(o[3]||o[2]),r.source.end.offset++)}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){n=!0;break}}r.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(r.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(r,"params",l),n&&(e=l[l.length-1],r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++,this.spaces=r.raws.between,r.raws.between="")):(r.raws.afterName="",r.params=""),a&&(r.nodes=[],this.current=r)}checkMissedSemicolon(e){let r=this.colon(e);if(r===!1)return;let i=0,o;for(let s=r-1;s>=0&&(o=e[s],!(o[0]!=="space"&&(i+=1,i===2)));s--);throw this.input.error("Missed semicolon",o[0]==="word"?o[3]+1:o[2])}colon(e){let r=0,i,o,s;for(let[n,a]of e.entries()){if(o=a,s=o[0],s==="("&&(r+=1),s===")"&&(r-=1),r===0&&s===":")if(!i)this.doubleColon(o);else{if(i[0]==="word"&&i[1]==="progid")continue;return n}i=o}return!1}comment(e){let r=new H_;this.init(r,e[2]),r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++;let i=e[1].slice(2,-2);if(/^\s*$/.test(i))r.text="",r.raws.left=i,r.raws.right="";else{let o=i.match(/^(\s*)([^]*\S)(\s*)$/);r.text=o[2],r.raws.left=o[1],r.raws.right=o[3]}}createTokenizer(){this.tokenizer=K_(this.input)}decl(e,r){let i=new W_;this.init(i,e[0][2]);let o=e[e.length-1];for(o[0]===";"&&(this.semicolon=!0,e.pop()),i.source.end=this.getPosition(o[3]||o[2]||Z_(e)),i.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),i.raws.before+=e.shift()[1];for(i.source.start=this.getPosition(e[0][2]),i.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;i.prop+=e.shift()[1]}i.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){i.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),i.raws.between+=s[1];(i.prop[0]==="_"||i.prop[0]==="*")&&(i.raws.before+=i.prop[0],i.prop=i.prop.slice(1));let n=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)n.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(s=e[c],s[1].toLowerCase()==="!important"){i.important=!0;let d=this.stringFrom(e,c);d=this.spacesFromEnd(e)+d,d!==" !important"&&(i.raws.important=d);break}else if(s[1].toLowerCase()==="important"){let d=e.slice(0),h="";for(let f=c;f>0;f--){let m=d[f][0];if(h.trim().startsWith("!")&&m!=="space")break;h=d.pop()[1]+h}h.trim().startsWith("!")&&(i.important=!0,i.raws.important=h,e=d)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(i.raws.between+=n.map(c=>c[1]).join(""),n=[]),this.raw(i,"value",n.concat(e),r),i.value.includes(":")&&!r&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let r=new xf;this.init(r,e[2]),r.selector="",r.raws.between="",this.current=r}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let r=this.current.nodes[this.current.nodes.length-1];r&&r.type==="rule"&&!r.raws.ownSemicolon&&(r.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let r=this.input.fromOffset(e);return{column:r.col,line:r.line,offset:e}}init(e,r){this.current.push(e),e.source={input:this.input,start:this.getPosition(r)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let r=!1,i=null,o=!1,s=null,n=[],a=e[1].startsWith("--"),l=[],c=e;for(;c;){if(i=c[0],l.push(c),i==="("||i==="[")s||(s=c),n.push(i==="("?")":"]");else if(a&&o&&i==="{")s||(s=c),n.push("}");else if(n.length===0)if(i===";")if(o){this.decl(l,a);return}else break;else if(i==="{"){this.rule(l);return}else if(i==="}"){this.tokenizer.back(l.pop()),r=!0;break}else i===":"&&(o=!0);else i===n[n.length-1]&&(n.pop(),n.length===0&&(s=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(r=!0),n.length>0&&this.unclosedBracket(s),r&&o){if(!a)for(;l.length&&(c=l[l.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,r,i,o){let s,n,a=i.length,l="",c=!0,d,h;for(let f=0;f<a;f+=1)s=i[f],n=s[0],n==="space"&&f===a-1&&!o?c=!1:n==="comment"?(h=i[f-1]?i[f-1][0]:"empty",d=i[f+1]?i[f+1][0]:"empty",!kf[h]&&!kf[d]?l.slice(-1)===","?c=!1:l+=s[1]:c=!1):l+=s[1];if(!c){let f=i.reduce((m,g)=>m+g[1],"");e.raws[r]={raw:f,value:l}}e[r]=l}rule(e){e.pop();let r=new xf;this.init(r,e[0][2]),r.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(r,"selector",e),this.current=r}spacesAndCommentsFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],!(r!=="space"&&r!=="comment"));)i=e.pop()[1]+i;return i}spacesAndCommentsFromStart(e){let r,i="";for(;e.length&&(r=e[0][0],!(r!=="space"&&r!=="comment"));)i+=e.shift()[1];return i}spacesFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],r==="space");)i=e.pop()[1]+i;return i}stringFrom(e,r){let i="";for(let o=r;o<e.length;o++)i+=e[o][1];return e.splice(r,e.length-r),i}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,r){throw this.input.error("At-rule without name",{offset:r[2]},{offset:r[2]+r[1].length})}};Sf.exports=Wc});var Ia=F((pI,Tf)=>{"use strict";var Y_=Xr(),X_=Ns(),J_=Cf();function $a(t,e){let r=new X_(t,e),i=new J_(r);try{i.parse()}catch(o){throw o}return i.root}Tf.exports=$a;$a.default=$a;Y_.registerParse($a)});var Gc=F((fI,Ef)=>{"use strict";var Bs=class{constructor(e,r={}){if(this.type="warning",this.text=e,r.node&&r.node.source){let i=r.node.rangeBy(r);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in r)this[i]=r[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};Ef.exports=Bs;Bs.default=Bs});var Pa=F((mI,Af)=>{"use strict";var Q_=Gc(),Vs=class{constructor(e,r,i){this.processor=e,this.messages=[],this.root=r,this.opts=i,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,r={}){r.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(r.plugin=this.lastPlugin.postcssPlugin);let i=new Q_(e,r);return this.messages.push(i),i}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};Af.exports=Vs;Vs.default=Vs});var Kc=F((gI,$f)=>{"use strict";var Of={};$f.exports=function(e){Of[e]||(Of[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}});var Xc=F((yI,zf)=>{"use strict";var ex=Xr(),tx=_a(),rx=Hc(),ix=Ia(),If=Pa(),ox=Io(),sx=As(),{isClean:vr,my:nx}=va(),bI=Kc(),ax={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},lx={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},cx={Once:!0,postcssPlugin:!0,prepare:!0},Lo=0;function js(t){return typeof t=="object"&&typeof t.then=="function"}function Lf(t){let e=!1,r=ax[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[r,r+"-"+e,Lo,r+"Exit",r+"Exit-"+e]:e?[r,r+"-"+e,r+"Exit",r+"Exit-"+e]:t.append?[r,Lo,r+"Exit"]:[r,r+"Exit"]}function Pf(t){let e;return t.type==="document"?e=["Document",Lo,"DocumentExit"]:t.type==="root"?e=["Root",Lo,"RootExit"]:e=Lf(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Zc(t){return t[vr]=!1,t.nodes&&t.nodes.forEach(e=>Zc(e)),t}var Yc={},Qr=class t{constructor(e,r,i){this.stringified=!1,this.processed=!1;let o;if(typeof r=="object"&&r!==null&&(r.type==="root"||r.type==="document"))o=Zc(r);else if(r instanceof t||r instanceof If)o=Zc(r.root),r.map&&(typeof i.map>"u"&&(i.map={}),i.map.inline||(i.map.inline=!1),i.map.prev=r.map);else{let s=ix;i.syntax&&(s=i.syntax.parse),i.parser&&(s=i.parser),s.parse&&(s=s.parse);try{o=s(r,i)}catch(n){this.processed=!0,this.error=n}o&&!o[nx]&&ex.rebuild(o)}this.result=new If(e,o,i),this.helpers={...Yc,postcss:Yc,result:this.result},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,r){let i=this.result.lastPlugin;try{r&&r.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=i.postcssPlugin,e.setMessage()):i.postcssVersion}catch(o){console&&console.error&&console.error(o)}return e}prepareVisitors(){this.listeners={};let e=(r,i,o)=>{this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push([r,o])};for(let r of this.plugins)if(typeof r=="object")for(let i in r){if(!lx[i]&&/^[A-Z]/.test(i))throw new Error(`Unknown event ${i} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!cx[i])if(typeof r[i]=="object")for(let o in r[i])o==="*"?e(r,i,r[i][o]):e(r,i+"-"+o.toLowerCase(),r[i][o]);else typeof r[i]=="function"&&e(r,i,r[i])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let r=this.plugins[e],i=this.runOnRoot(r);if(js(i))try{await i}catch(o){throw this.handleError(o)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[vr];){e[vr]=!0;let r=[Pf(e)];for(;r.length>0;){let i=this.visitTick(r);if(js(i))try{await i}catch(o){let s=r[r.length-1].node;throw this.handleError(o,s)}}}if(this.listeners.OnceExit)for(let[r,i]of this.listeners.OnceExit){this.result.lastPlugin=r;try{if(e.type==="document"){let o=e.nodes.map(s=>i(s,this.helpers));await Promise.all(o)}else await i(e,this.helpers)}catch(o){throw this.handleError(o)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let r=this.result.root.nodes.map(i=>e.Once(i,this.helpers));return js(r[0])?Promise.all(r):r}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(r){throw this.handleError(r)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,r=sx;e.syntax&&(r=e.syntax.stringify),e.stringifier&&(r=e.stringifier),r.stringify&&(r=r.stringify);let o=new rx(r,this.result.root,this.result.opts).generate();return this.result.css=o[0],this.result.map=o[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let r=this.runOnRoot(e);if(js(r))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[vr];)e[vr]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let r of e.nodes)this.visitSync(this.listeners.OnceExit,r);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,r){return this.async().then(e,r)}toString(){return this.css}visitSync(e,r){for(let[i,o]of e){this.result.lastPlugin=i;let s;try{s=o(r,this.helpers)}catch(n){throw this.handleError(n,r.proxyOf)}if(r.type!=="root"&&r.type!=="document"&&!r.parent)return!0;if(js(s))throw this.getAsyncError()}}visitTick(e){let r=e[e.length-1],{node:i,visitors:o}=r;if(i.type!=="root"&&i.type!=="document"&&!i.parent){e.pop();return}if(o.length>0&&r.visitorIndex<o.length){let[n,a]=o[r.visitorIndex];r.visitorIndex+=1,r.visitorIndex===o.length&&(r.visitors=[],r.visitorIndex=0),this.result.lastPlugin=n;try{return a(i.toProxy(),this.helpers)}catch(l){throw this.handleError(l,i)}}if(r.iterator!==0){let n=r.iterator,a;for(;a=i.nodes[i.indexes[n]];)if(i.indexes[n]+=1,!a[vr]){a[vr]=!0,e.push(Pf(a));return}r.iterator=0,delete i.indexes[n]}let s=r.events;for(;r.eventIndex<s.length;){let n=s[r.eventIndex];if(r.eventIndex+=1,n===Lo){i.nodes&&i.nodes.length&&(i[vr]=!0,r.iterator=i.getIterator());return}else if(this.listeners[n]){r.visitors=this.listeners[n];return}}e.pop()}walkSync(e){e[vr]=!0;let r=Lf(e);for(let i of r)if(i===Lo)e.nodes&&e.each(o=>{o[vr]||this.walkSync(o)});else{let o=this.listeners[i];if(o&&this.visitSync(o,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};Qr.registerPostcss=t=>{Yc=t};zf.exports=Qr;Qr.default=Qr;ox.registerLazyResult(Qr);tx.registerLazyResult(Qr)});var Df=F((wI,Rf)=>{"use strict";var ux=Hc(),dx=Ia(),hx=Pa(),px=As(),vI=Kc(),qs=class{constructor(e,r,i){r=r.toString(),this.stringified=!1,this._processor=e,this._css=r,this._opts=i,this._map=void 0;let o,s=px;this.result=new hx(this._processor,o,this._opts),this.result.css=r;let n=this;Object.defineProperty(this.result,"root",{get(){return n.root}});let a=new ux(s,o,this._opts,r);if(a.isMap()){let[l,c]=a.generate();l&&(this.result.css=l),c&&(this.result.map=c)}else a.clearAnnotation(),this.result.css=a.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,r){return this.async().then(e,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,r=dx;try{e=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};Rf.exports=qs;qs.default=qs});var Nf=F((_I,Mf)=>{"use strict";var fx=_a(),mx=Xc(),gx=Df(),bx=Io(),Pi=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let r=[];for(let i of e)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(!(typeof i=="object"&&(i.parse||i.stringify)))throw new Error(i+" is not a PostCSS plugin");return r}process(e,r={}){return!this.plugins.length&&!r.parser&&!r.stringifier&&!r.syntax?new gx(this,e,r):new mx(this,e,r)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};Mf.exports=Pi;Pi.default=Pi;bx.registerProcessor(Pi);fx.registerProcessor(Pi)});var zo=F((xI,Hf)=>{"use strict";var Ff=wa(),Uf=zs(),yx=Xr(),vx=ya(),Bf=Ds(),Vf=_a(),wx=hf(),_x=Ns(),xx=Xc(),kx=jc(),Sx=Ps(),Cx=Ia(),Jc=Nf(),Tx=Pa(),jf=Io(),qf=Ca(),Ex=As(),Ax=Gc();function Ee(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new Jc(t)}Ee.plugin=function(e,r){let i=!1;function o(...n){console&&console.warn&&!i&&(i=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(e+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let a=r(...n);return a.postcssPlugin=e,a.postcssVersion=new Jc().version,a}let s;return Object.defineProperty(o,"postcss",{get(){return s||(s=o()),s}}),o.process=function(n,a,l){return Ee([o(l)]).process(n,a)},o};Ee.stringify=Ex;Ee.parse=Cx;Ee.fromJSON=wx;Ee.list=kx;Ee.comment=t=>new Uf(t);Ee.atRule=t=>new Ff(t);Ee.decl=t=>new Bf(t);Ee.rule=t=>new qf(t);Ee.root=t=>new jf(t);Ee.document=t=>new Vf(t);Ee.CssSyntaxError=vx;Ee.Declaration=Bf;Ee.Container=yx;Ee.Processor=Jc;Ee.Document=Vf;Ee.Comment=Uf;Ee.Warning=Ax;Ee.AtRule=Ff;Ee.Result=Tx;Ee.Input=_x;Ee.Rule=qf;Ee.Root=jf;Ee.Node=Sx;xx.registerPostcss(Ee);Hf.exports=Ee;Ee.default=Ee});var Zf=F((KI,Kf)=>{"use strict";var Wf=/-(\w|$)/g,Gf=function(e,r){return r.toUpperCase()},Ox=function(e){return e=e.toLowerCase(),e==="float"?"cssFloat":e.charCodeAt(0)===45&&e.charCodeAt(1)===109&&e.charCodeAt(2)===115&&e.charCodeAt(3)===45?e.substr(1).replace(Wf,Gf):e.replace(Wf,Gf)};Kf.exports=Ox});var ru=F((ZI,Yf)=>{var $x=Zf(),Ix={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function eu(t){return typeof t.nodes>"u"?!0:tu(t)}function tu(t){let e,r={};return t.each(i=>{if(i.type==="atrule")e="@"+i.name,i.params&&(e+=" "+i.params),typeof r[e]>"u"?r[e]=eu(i):Array.isArray(r[e])?r[e].push(eu(i)):r[e]=[r[e],eu(i)];else if(i.type==="rule"){let o=tu(i);if(r[i.selector])for(let s in o)r[i.selector][s]=o[s];else r[i.selector]=o}else if(i.type==="decl"){i.prop[0]==="-"&&i.prop[1]==="-"||i.parent&&i.parent.selector===":export"?e=i.prop:e=$x(i.prop);let o=i.value;!isNaN(i.value)&&Ix[e]&&(o=parseFloat(i.value)),i.important&&(o+=" !important"),typeof r[e]>"u"?r[e]=o:Array.isArray(r[e])?r[e].push(o):r[e]=[r[e],o]}}),r}Yf.exports=tu});var La=F((YI,em)=>{var Hs=zo(),Xf=/\s*!important\s*$/i,Px={"box-flex":!0,"box-flex-group":!0,"column-count":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0};function Lx(t){return t.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function Jf(t,e,r){r===!1||r===null||(e.startsWith("--")||(e=Lx(e)),typeof r=="number"&&(r===0||Px[e]?r=r.toString():r+="px"),e==="css-float"&&(e="float"),Xf.test(r)?(r=r.replace(Xf,""),t.push(Hs.decl({prop:e,value:r,important:!0}))):t.push(Hs.decl({prop:e,value:r})))}function Qf(t,e,r){let i=Hs.atRule({name:e[1],params:e[3]||""});typeof r=="object"&&(i.nodes=[],iu(r,i)),t.push(i)}function iu(t,e){let r,i,o;for(r in t)if(i=t[r],!(i===null||typeof i>"u"))if(r[0]==="@"){let s=r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);if(Array.isArray(i))for(let n of i)Qf(e,s,n);else Qf(e,s,i)}else if(Array.isArray(i))for(let s of i)Jf(e,r,s);else typeof i=="object"?(o=Hs.rule({selector:r}),iu(i,o),e.push(o)):Jf(e,r,i)}em.exports=function(t){let e=Hs.root();return iu(t,e),e}});var ou=F((XI,tm)=>{var zx=ru();tm.exports=function(e){return console&&console.warn&&e.warnings().forEach(r=>{let i=r.plugin||"PostCSS";console.warn(i+": "+r.text)}),zx(e.root)}});var im=F((JI,rm)=>{var Rx=zo(),Dx=ou(),Mx=La();rm.exports=function(e){let r=Rx(e);return async i=>{let o=await r.process(i,{parser:Mx,from:void 0});return Dx(o)}}});var sm=F((QI,om)=>{var Nx=zo(),Fx=ou(),Ux=La();om.exports=function(t){let e=Nx(t);return r=>{let i=e.process(r,{parser:Ux,from:void 0});return Fx(i)}}});var am=F((eP,nm)=>{var Bx=ru(),Vx=La(),jx=im(),qx=sm();nm.exports={objectify:Bx,parse:Vx,async:jx,sync:qx}});var nu=F((za,lm)=>{"use strict";za.__esModule=!0;za.default=Gx;function Hx(t){for(var e=t.toLowerCase(),r="",i=!1,o=0;o<6&&e[o]!==void 0;o++){var s=e.charCodeAt(o),n=s>=97&&s<=102||s>=48&&s<=57;if(i=s===32,!n)break;r+=e[o]}if(r.length!==0){var a=parseInt(r,16),l=a>=55296&&a<=57343;return l||a===0||a>1114111?["\uFFFD",r.length+(i?1:0)]:[String.fromCodePoint(a),r.length+(i?1:0)]}}var Wx=/\\/;function Gx(t){var e=Wx.test(t);if(!e)return t;for(var r="",i=0;i<t.length;i++){if(t[i]==="\\"){var o=Hx(t.slice(i+1,i+7));if(o!==void 0){r+=o[0],i+=o[1];continue}if(t[i+1]==="\\"){r+="\\",i++;continue}t.length===i+1&&(r+=t[i]);continue}r+=t[i]}return r}lm.exports=za.default});var um=F((Ra,cm)=>{"use strict";Ra.__esModule=!0;Ra.default=Kx;function Kx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();if(!t[o])return;t=t[o]}return t}cm.exports=Ra.default});var hm=F((Da,dm)=>{"use strict";Da.__esModule=!0;Da.default=Zx;function Zx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();t[o]||(t[o]={}),t=t[o]}}dm.exports=Da.default});var fm=F((Ma,pm)=>{"use strict";Ma.__esModule=!0;Ma.default=Yx;function Yx(t){for(var e="",r=t.indexOf("/*"),i=0;r>=0;){e=e+t.slice(i,r);var o=t.indexOf("*/",r+2);if(o<0)return e;i=o+2,r=t.indexOf("/*",i)}return e=e+t.slice(i),e}pm.exports=Ma.default});var Ws=F(wr=>{"use strict";wr.__esModule=!0;wr.unesc=wr.stripComments=wr.getProp=wr.ensureObject=void 0;var Xx=Na(nu());wr.unesc=Xx.default;var Jx=Na(um());wr.getProp=Jx.default;var Qx=Na(hm());wr.ensureObject=Qx.default;var e1=Na(fm());wr.stripComments=e1.default;function Na(t){return t&&t.__esModule?t:{default:t}}});var Pr=F((Gs,bm)=>{"use strict";Gs.__esModule=!0;Gs.default=void 0;var mm=Ws();function gm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function t1(t,e,r){return e&&gm(t.prototype,e),r&&gm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var r1=function t(e,r){if(typeof e!="object"||e===null)return e;var i=new e.constructor;for(var o in e)if(e.hasOwnProperty(o)){var s=e[o],n=typeof s;o==="parent"&&n==="object"?r&&(i[o]=r):s instanceof Array?i[o]=s.map(function(a){return t(a,i)}):i[o]=t(s,i)}return i},i1=function(){function t(r){r===void 0&&(r={}),Object.assign(this,r),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var e=t.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(i){i===void 0&&(i={});var o=r1(this);for(var s in i)o[s]=i[s];return o},e.appendToPropertyAndEscape=function(i,o,s){this.raws||(this.raws={});var n=this[i],a=this.raws[i];this[i]=n+o,a||s!==o?this.raws[i]=(a||n)+s:delete this.raws[i]},e.setPropertyAndEscape=function(i,o,s){this.raws||(this.raws={}),this[i]=o,this.raws[i]=s},e.setPropertyWithoutEscape=function(i,o){this[i]=o,this.raws&&delete this.raws[i]},e.isAtPosition=function(i,o){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>o||this.source.end.line===i&&this.source.end.column<o)},e.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},t1(t,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,mm.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,mm.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),t}();Gs.default=i1;bm.exports=Gs.default});var ct=F(Me=>{"use strict";Me.__esModule=!0;Me.UNIVERSAL=Me.TAG=Me.STRING=Me.SELECTOR=Me.ROOT=Me.PSEUDO=Me.NESTING=Me.ID=Me.COMMENT=Me.COMBINATOR=Me.CLASS=Me.ATTRIBUTE=void 0;var o1="tag";Me.TAG=o1;var s1="string";Me.STRING=s1;var n1="selector";Me.SELECTOR=n1;var a1="root";Me.ROOT=a1;var l1="pseudo";Me.PSEUDO=l1;var c1="nesting";Me.NESTING=c1;var u1="id";Me.ID=u1;var d1="comment";Me.COMMENT=d1;var h1="combinator";Me.COMBINATOR=h1;var p1="class";Me.CLASS=p1;var f1="attribute";Me.ATTRIBUTE=f1;var m1="universal";Me.UNIVERSAL=m1});var Fa=F((Ks,_m)=>{"use strict";Ks.__esModule=!0;Ks.default=void 0;var g1=y1(Pr()),Lr=b1(ct());function wm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(wm=function(o){return o?r:e})(t)}function b1(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=wm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function y1(t){return t&&t.__esModule?t:{default:t}}function v1(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=w1(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w1(t,e){if(t){if(typeof t=="string")return ym(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ym(t,e)}}function ym(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function vm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _1(t,e,r){return e&&vm(t.prototype,e),r&&vm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function x1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,au(t,e)}function au(t,e){return au=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},au(t,e)}var k1=function(t){x1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.nodes||(o.nodes=[]),o}var r=e.prototype;return r.append=function(o){return o.parent=this,this.nodes.push(o),this},r.prepend=function(o){o.parent=this,this.nodes.unshift(o);for(var s in this.indexes)this.indexes[s]++;return this},r.at=function(o){return this.nodes[o]},r.index=function(o){return typeof o=="number"?o:this.nodes.indexOf(o)},r.removeChild=function(o){o=this.index(o),this.at(o).parent=void 0,this.nodes.splice(o,1);var s;for(var n in this.indexes)s=this.indexes[n],s>=o&&(this.indexes[n]=s-1);return this},r.removeAll=function(){for(var o=v1(this.nodes),s;!(s=o()).done;){var n=s.value;n.parent=void 0}return this.nodes=[],this},r.empty=function(){return this.removeAll()},r.insertAfter=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n+1,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],n<a&&(this.indexes[l]=a+1);return this},r.insertBefore=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],a>=n&&(this.indexes[l]=a+1);return this},r._findChildAtPosition=function(o,s){var n=void 0;return this.each(function(a){if(a.atPosition){var l=a.atPosition(o,s);if(l)return n=l,!1}else if(a.isAtPosition(o,s))return n=a,!1}),n},r.atPosition=function(o,s){if(this.isAtPosition(o,s))return this._findChildAtPosition(o,s)||this},r._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},r.each=function(o){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var s=this.lastEach;if(this.indexes[s]=0,!!this.length){for(var n,a;this.indexes[s]<this.length&&(n=this.indexes[s],a=o(this.at(n),n),a!==!1);)this.indexes[s]+=1;if(delete this.indexes[s],a===!1)return!1}},r.walk=function(o){return this.each(function(s,n){var a=o(s,n);if(a!==!1&&s.length&&(a=s.walk(o)),a===!1)return!1})},r.walkAttributes=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.ATTRIBUTE)return o.call(s,n)})},r.walkClasses=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.CLASS)return o.call(s,n)})},r.walkCombinators=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.COMBINATOR)return o.call(s,n)})},r.walkComments=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.COMMENT)return o.call(s,n)})},r.walkIds=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.ID)return o.call(s,n)})},r.walkNesting=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.NESTING)return o.call(s,n)})},r.walkPseudos=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.PSEUDO)return o.call(s,n)})},r.walkTags=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.TAG)return o.call(s,n)})},r.walkUniversals=function(o){var s=this;return this.walk(function(n){if(n.type===Lr.UNIVERSAL)return o.call(s,n)})},r.split=function(o){var s=this,n=[];return this.reduce(function(a,l,c){var d=o.call(s,l);return n.push(l),d?(a.push(n),n=[]):c===s.length-1&&a.push(n),a},[])},r.map=function(o){return this.nodes.map(o)},r.reduce=function(o,s){return this.nodes.reduce(o,s)},r.every=function(o){return this.nodes.every(o)},r.some=function(o){return this.nodes.some(o)},r.filter=function(o){return this.nodes.filter(o)},r.sort=function(o){return this.nodes.sort(o)},r.toString=function(){return this.map(String).join("")},_1(e,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),e}(g1.default);Ks.default=k1;_m.exports=Ks.default});var cu=F((Zs,km)=>{"use strict";Zs.__esModule=!0;Zs.default=void 0;var S1=T1(Fa()),C1=ct();function T1(t){return t&&t.__esModule?t:{default:t}}function xm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function E1(t,e,r){return e&&xm(t.prototype,e),r&&xm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function A1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,lu(t,e)}function lu(t,e){return lu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},lu(t,e)}var O1=function(t){A1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=C1.ROOT,o}var r=e.prototype;return r.toString=function(){var o=this.reduce(function(s,n){return s.push(String(n)),s},[]).join(",");return this.trailingComma?o+",":o},r.error=function(o,s){return this._error?this._error(o,s):new Error(o)},E1(e,[{key:"errorGenerator",set:function(o){this._error=o}}]),e}(S1.default);Zs.default=O1;km.exports=Zs.default});var du=F((Ys,Sm)=>{"use strict";Ys.__esModule=!0;Ys.default=void 0;var $1=P1(Fa()),I1=ct();function P1(t){return t&&t.__esModule?t:{default:t}}function L1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,uu(t,e)}function uu(t,e){return uu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},uu(t,e)}var z1=function(t){L1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=I1.SELECTOR,i}return e}($1.default);Ys.default=z1;Sm.exports=Ys.default});var Ua=F((lP,Cm)=>{"use strict";var R1={},D1=R1.hasOwnProperty,M1=function(e,r){if(!e)return r;var i={};for(var o in r)i[o]=D1.call(e,o)?e[o]:r[o];return i},N1=/[ -,\.\/:-@\[-\^`\{-~]/,F1=/[ -,\.\/:-@\[\]\^`\{-~]/,U1=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,hu=function t(e,r){r=M1(r,t.options),r.quotes!="single"&&r.quotes!="double"&&(r.quotes="single");for(var i=r.quotes=="double"?'"':"'",o=r.isIdentifier,s=e.charAt(0),n="",a=0,l=e.length;a<l;){var c=e.charAt(a++),d=c.charCodeAt(),h=void 0;if(d<32||d>126){if(d>=55296&&d<=56319&&a<l){var f=e.charCodeAt(a++);(f&64512)==56320?d=((d&1023)<<10)+(f&1023)+65536:a--}h="\\"+d.toString(16).toUpperCase()+" "}else r.escapeEverything?N1.test(c)?h="\\"+c:h="\\"+d.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(c)?h="\\"+d.toString(16).toUpperCase()+" ":c=="\\"||!o&&(c=='"'&&i==c||c=="'"&&i==c)||o&&F1.test(c)?h="\\"+c:h=c;n+=h}return o&&(/^-[-\d]/.test(n)?n="\\-"+n.slice(1):/\d/.test(s)&&(n="\\3"+s+" "+n.slice(1))),n=n.replace(U1,function(m,g,y){return g&&g.length%2?m:(g||"")+y}),!o&&r.wrap?i+n+i:n};hu.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};hu.version="3.0.0";Cm.exports=hu});var fu=F((Xs,Am)=>{"use strict";Xs.__esModule=!0;Xs.default=void 0;var B1=Em(Ua()),V1=Ws(),j1=Em(Pr()),q1=ct();function Em(t){return t&&t.__esModule?t:{default:t}}function Tm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function H1(t,e,r){return e&&Tm(t.prototype,e),r&&Tm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function W1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,pu(t,e)}function pu(t,e){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},pu(t,e)}var G1=function(t){W1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=q1.CLASS,o._constructed=!0,o}var r=e.prototype;return r.valueToString=function(){return"."+t.prototype.valueToString.call(this)},H1(e,[{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=(0,B1.default)(o,{isIdentifier:!0});s!==o?((0,V1.ensureObject)(this,"raws"),this.raws.value=s):this.raws&&delete this.raws.value}this._value=o}}]),e}(j1.default);Xs.default=G1;Am.exports=Xs.default});var gu=F((Js,Om)=>{"use strict";Js.__esModule=!0;Js.default=void 0;var K1=Y1(Pr()),Z1=ct();function Y1(t){return t&&t.__esModule?t:{default:t}}function X1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,mu(t,e)}function mu(t,e){return mu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},mu(t,e)}var J1=function(t){X1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Z1.COMMENT,i}return e}(K1.default);Js.default=J1;Om.exports=Js.default});var yu=F((Qs,$m)=>{"use strict";Qs.__esModule=!0;Qs.default=void 0;var Q1=tk(Pr()),ek=ct();function tk(t){return t&&t.__esModule?t:{default:t}}function rk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,bu(t,e)}function bu(t,e){return bu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},bu(t,e)}var ik=function(t){rk(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=ek.ID,o}var r=e.prototype;return r.valueToString=function(){return"#"+t.prototype.valueToString.call(this)},e}(Q1.default);Qs.default=ik;$m.exports=Qs.default});var Ba=F((en,Lm)=>{"use strict";en.__esModule=!0;en.default=void 0;var ok=Pm(Ua()),sk=Ws(),nk=Pm(Pr());function Pm(t){return t&&t.__esModule?t:{default:t}}function Im(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ak(t,e,r){return e&&Im(t.prototype,e),r&&Im(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function lk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vu(t,e)}function vu(t,e){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},vu(t,e)}var ck=function(t){lk(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.qualifiedName=function(o){return this.namespace?this.namespaceString+"|"+o:o},r.valueToString=function(){return this.qualifiedName(t.prototype.valueToString.call(this))},ak(e,[{key:"namespace",get:function(){return this._namespace},set:function(o){if(o===!0||o==="*"||o==="&"){this._namespace=o,this.raws&&delete this.raws.namespace;return}var s=(0,ok.default)(o,{isIdentifier:!0});this._namespace=o,s!==o?((0,sk.ensureObject)(this,"raws"),this.raws.namespace=s):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(o){this.namespace=o}},{key:"namespaceString",get:function(){if(this.namespace){var o=this.stringifyProperty("namespace");return o===!0?"":o}else return""}}]),e}(nk.default);en.default=ck;Lm.exports=en.default});var _u=F((tn,zm)=>{"use strict";tn.__esModule=!0;tn.default=void 0;var uk=hk(Ba()),dk=ct();function hk(t){return t&&t.__esModule?t:{default:t}}function pk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,wu(t,e)}function wu(t,e){return wu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},wu(t,e)}var fk=function(t){pk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=dk.TAG,i}return e}(uk.default);tn.default=fk;zm.exports=tn.default});var ku=F((rn,Rm)=>{"use strict";rn.__esModule=!0;rn.default=void 0;var mk=bk(Pr()),gk=ct();function bk(t){return t&&t.__esModule?t:{default:t}}function yk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,xu(t,e)}function xu(t,e){return xu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},xu(t,e)}var vk=function(t){yk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=gk.STRING,i}return e}(mk.default);rn.default=vk;Rm.exports=rn.default});var Cu=F((on,Dm)=>{"use strict";on.__esModule=!0;on.default=void 0;var wk=xk(Fa()),_k=ct();function xk(t){return t&&t.__esModule?t:{default:t}}function kk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Su(t,e)}function Su(t,e){return Su=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Su(t,e)}var Sk=function(t){kk(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=_k.PSEUDO,o}var r=e.prototype;return r.toString=function(){var o=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),o,this.rawSpaceAfter].join("")},e}(wk.default);on.default=Sk;Dm.exports=on.default});var Nm=F((cP,Mm)=>{Mm.exports=Ck;function Ck(t,e){if(Tu("noDeprecation"))return t;var r=!1;function i(){if(!r){if(Tu("throwDeprecation"))throw new Error(e);Tu("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}return i}function Tu(t){try{if(!global.localStorage)return!1}catch{return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var Pu=F(an=>{"use strict";an.__esModule=!0;an.default=void 0;an.unescapeValue=Iu;var sn=$u(Ua()),Tk=$u(nu()),Ek=$u(Ba()),Ak=ct(),Eu;function $u(t){return t&&t.__esModule?t:{default:t}}function Fm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ok(t,e,r){return e&&Fm(t.prototype,e),r&&Fm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function $k(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ou(t,e)}function Ou(t,e){return Ou=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ou(t,e)}var nn=Nm(),Ik=/^('|")([^]*)\1$/,Pk=nn(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),Lk=nn(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),zk=nn(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function Iu(t){var e=!1,r=null,i=t,o=i.match(Ik);return o&&(r=o[1],i=o[2]),i=(0,Tk.default)(i),i!==t&&(e=!0),{deprecatedUsage:e,unescaped:i,quoteMark:r}}function Rk(t){if(t.quoteMark!==void 0||t.value===void 0)return t;zk();var e=Iu(t.value),r=e.quoteMark,i=e.unescaped;return t.raws||(t.raws={}),t.raws.value===void 0&&(t.raws.value=t.value),t.value=i,t.quoteMark=r,t}var Va=function(t){$k(e,t);function e(i){var o;return i===void 0&&(i={}),o=t.call(this,Rk(i))||this,o.type=Ak.ATTRIBUTE,o.raws=o.raws||{},Object.defineProperty(o.raws,"unquoted",{get:nn(function(){return o.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:nn(function(){return o.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),o._constructed=!0,o}var r=e.prototype;return r.getQuotedValue=function(o){o===void 0&&(o={});var s=this._determineQuoteMark(o),n=Au[s],a=(0,sn.default)(this._value,n);return a},r._determineQuoteMark=function(o){return o.smart?this.smartQuoteMark(o):this.preferredQuoteMark(o)},r.setValue=function(o,s){s===void 0&&(s={}),this._value=o,this._quoteMark=this._determineQuoteMark(s),this._syncRawValue()},r.smartQuoteMark=function(o){var s=this.value,n=s.replace(/[^']/g,"").length,a=s.replace(/[^"]/g,"").length;if(n+a===0){var l=(0,sn.default)(s,{isIdentifier:!0});if(l===s)return e.NO_QUOTE;var c=this.preferredQuoteMark(o);if(c===e.NO_QUOTE){var d=this.quoteMark||o.quoteMark||e.DOUBLE_QUOTE,h=Au[d],f=(0,sn.default)(s,h);if(f.length<l.length)return d}return c}else return a===n?this.preferredQuoteMark(o):a<n?e.DOUBLE_QUOTE:e.SINGLE_QUOTE},r.preferredQuoteMark=function(o){var s=o.preferCurrentQuoteMark?this.quoteMark:o.quoteMark;return s===void 0&&(s=o.preferCurrentQuoteMark?o.quoteMark:this.quoteMark),s===void 0&&(s=e.DOUBLE_QUOTE),s},r._syncRawValue=function(){var o=(0,sn.default)(this._value,Au[this.quoteMark]);o===this._value?this.raws&&delete this.raws.value:this.raws.value=o},r._handleEscapes=function(o,s){if(this._constructed){var n=(0,sn.default)(s,{isIdentifier:!0});n!==s?this.raws[o]=n:delete this.raws[o]}},r._spacesFor=function(o){var s={before:"",after:""},n=this.spaces[o]||{},a=this.raws.spaces&&this.raws.spaces[o]||{};return Object.assign(s,n,a)},r._stringFor=function(o,s,n){s===void 0&&(s=o),n===void 0&&(n=Um);var a=this._spacesFor(s);return n(this.stringifyProperty(o),a)},r.offsetOf=function(o){var s=1,n=this._spacesFor("attribute");if(s+=n.before.length,o==="namespace"||o==="ns")return this.namespace?s:-1;if(o==="attributeNS"||(s+=this.namespaceString.length,this.namespace&&(s+=1),o==="attribute"))return s;s+=this.stringifyProperty("attribute").length,s+=n.after.length;var a=this._spacesFor("operator");s+=a.before.length;var l=this.stringifyProperty("operator");if(o==="operator")return l?s:-1;s+=l.length,s+=a.after.length;var c=this._spacesFor("value");s+=c.before.length;var d=this.stringifyProperty("value");if(o==="value")return d?s:-1;s+=d.length,s+=c.after.length;var h=this._spacesFor("insensitive");return s+=h.before.length,o==="insensitive"&&this.insensitive?s:-1},r.toString=function(){var o=this,s=[this.rawSpaceBefore,"["];return s.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(s.push(this._stringFor("operator")),s.push(this._stringFor("value")),s.push(this._stringFor("insensitiveFlag","insensitive",function(n,a){return n.length>0&&!o.quoted&&a.before.length===0&&!(o.spaces.value&&o.spaces.value.after)&&(a.before=" "),Um(n,a)}))),s.push("]"),s.push(this.rawSpaceAfter),s.join("")},Ok(e,[{key:"quoted",get:function(){var o=this.quoteMark;return o==="'"||o==='"'},set:function(o){Lk()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(o){if(!this._constructed){this._quoteMark=o;return}this._quoteMark!==o&&(this._quoteMark=o,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=Iu(o),n=s.deprecatedUsage,a=s.unescaped,l=s.quoteMark;if(n&&Pk(),a===this._value&&l===this._quoteMark)return;this._value=a,this._quoteMark=l,this._syncRawValue()}else this._value=o}},{key:"insensitive",get:function(){return this._insensitive},set:function(o){o||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=o}},{key:"attribute",get:function(){return this._attribute},set:function(o){this._handleEscapes("attribute",o),this._attribute=o}}]),e}(Ek.default);an.default=Va;Va.NO_QUOTE=null;Va.SINGLE_QUOTE="'";Va.DOUBLE_QUOTE='"';var Au=(Eu={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},Eu[null]={isIdentifier:!0},Eu);function Um(t,e){return""+e.before+t+e.after}});var zu=F((ln,Bm)=>{"use strict";ln.__esModule=!0;ln.default=void 0;var Dk=Nk(Ba()),Mk=ct();function Nk(t){return t&&t.__esModule?t:{default:t}}function Fk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Lu(t,e)}function Lu(t,e){return Lu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Lu(t,e)}var Uk=function(t){Fk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Mk.UNIVERSAL,i.value="*",i}return e}(Dk.default);ln.default=Uk;Bm.exports=ln.default});var Du=F((cn,Vm)=>{"use strict";cn.__esModule=!0;cn.default=void 0;var Bk=jk(Pr()),Vk=ct();function jk(t){return t&&t.__esModule?t:{default:t}}function qk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ru(t,e)}function Ru(t,e){return Ru=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ru(t,e)}var Hk=function(t){qk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Vk.COMBINATOR,i}return e}(Bk.default);cn.default=Hk;Vm.exports=cn.default});var Nu=F((un,jm)=>{"use strict";un.__esModule=!0;un.default=void 0;var Wk=Kk(Pr()),Gk=ct();function Kk(t){return t&&t.__esModule?t:{default:t}}function Zk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mu(t,e)}function Mu(t,e){return Mu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Mu(t,e)}var Yk=function(t){Zk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Gk.NESTING,i.value="&",i}return e}(Wk.default);un.default=Yk;jm.exports=un.default});var Hm=F((ja,qm)=>{"use strict";ja.__esModule=!0;ja.default=Xk;function Xk(t){return t.sort(function(e,r){return e-r})}qm.exports=ja.default});var Fu=F(H=>{"use strict";H.__esModule=!0;H.word=H.tilde=H.tab=H.str=H.space=H.slash=H.singleQuote=H.semicolon=H.plus=H.pipe=H.openSquare=H.openParenthesis=H.newline=H.greaterThan=H.feed=H.equals=H.doubleQuote=H.dollar=H.cr=H.comment=H.comma=H.combinator=H.colon=H.closeSquare=H.closeParenthesis=H.caret=H.bang=H.backslash=H.at=H.asterisk=H.ampersand=void 0;var Jk=38;H.ampersand=Jk;var Qk=42;H.asterisk=Qk;var eS=64;H.at=eS;var tS=44;H.comma=tS;var rS=58;H.colon=rS;var iS=59;H.semicolon=iS;var oS=40;H.openParenthesis=oS;var sS=41;H.closeParenthesis=sS;var nS=91;H.openSquare=nS;var aS=93;H.closeSquare=aS;var lS=36;H.dollar=lS;var cS=126;H.tilde=cS;var uS=94;H.caret=uS;var dS=43;H.plus=dS;var hS=61;H.equals=hS;var pS=124;H.pipe=pS;var fS=62;H.greaterThan=fS;var mS=32;H.space=mS;var Wm=39;H.singleQuote=Wm;var gS=34;H.doubleQuote=gS;var bS=47;H.slash=bS;var yS=33;H.bang=yS;var vS=92;H.backslash=vS;var wS=13;H.cr=wS;var _S=12;H.feed=_S;var xS=10;H.newline=xS;var kS=9;H.tab=kS;var SS=Wm;H.str=SS;var CS=-1;H.comment=CS;var TS=-2;H.word=TS;var ES=-3;H.combinator=ES});var Zm=F(dn=>{"use strict";dn.__esModule=!0;dn.FIELDS=void 0;dn.default=zS;var N=AS(Fu()),Do,Le;function Km(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Km=function(o){return o?r:e})(t)}function AS(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Km(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}var OS=(Do={},Do[N.tab]=!0,Do[N.newline]=!0,Do[N.cr]=!0,Do[N.feed]=!0,Do),$S=(Le={},Le[N.space]=!0,Le[N.tab]=!0,Le[N.newline]=!0,Le[N.cr]=!0,Le[N.feed]=!0,Le[N.ampersand]=!0,Le[N.asterisk]=!0,Le[N.bang]=!0,Le[N.comma]=!0,Le[N.colon]=!0,Le[N.semicolon]=!0,Le[N.openParenthesis]=!0,Le[N.closeParenthesis]=!0,Le[N.openSquare]=!0,Le[N.closeSquare]=!0,Le[N.singleQuote]=!0,Le[N.doubleQuote]=!0,Le[N.plus]=!0,Le[N.pipe]=!0,Le[N.tilde]=!0,Le[N.greaterThan]=!0,Le[N.equals]=!0,Le[N.dollar]=!0,Le[N.caret]=!0,Le[N.slash]=!0,Le),Uu={},Gm="0123456789abcdefABCDEF";for(qa=0;qa<Gm.length;qa++)Uu[Gm.charCodeAt(qa)]=!0;var qa;function IS(t,e){var r=e,i;do{if(i=t.charCodeAt(r),$S[i])return r-1;i===N.backslash?r=PS(t,r)+1:r++}while(r<t.length);return r-1}function PS(t,e){var r=e,i=t.charCodeAt(r+1);if(!OS[i])if(Uu[i]){var o=0;do r++,o++,i=t.charCodeAt(r+1);while(Uu[i]&&o<6);o<6&&i===N.space&&r++}else r++;return r}var LS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};dn.FIELDS=LS;function zS(t){var e=[],r=t.css.valueOf(),i=r,o=i.length,s=-1,n=1,a=0,l=0,c,d,h,f,m,g,y,b,_,w,k,v,S;function D(K,B){if(t.safe)r+=B,_=r.length-1;else throw t.error("Unclosed "+K,n,a-s,a)}for(;a<o;){switch(c=r.charCodeAt(a),c===N.newline&&(s=a,n+=1),c){case N.space:case N.tab:case N.newline:case N.cr:case N.feed:_=a;do _+=1,c=r.charCodeAt(_),c===N.newline&&(s=_,n+=1);while(c===N.space||c===N.newline||c===N.tab||c===N.cr||c===N.feed);S=N.space,f=n,h=_-s-1,l=_;break;case N.plus:case N.greaterThan:case N.tilde:case N.pipe:_=a;do _+=1,c=r.charCodeAt(_);while(c===N.plus||c===N.greaterThan||c===N.tilde||c===N.pipe);S=N.combinator,f=n,h=a-s,l=_;break;case N.asterisk:case N.ampersand:case N.bang:case N.comma:case N.equals:case N.dollar:case N.caret:case N.openSquare:case N.closeSquare:case N.colon:case N.semicolon:case N.openParenthesis:case N.closeParenthesis:_=a,S=c,f=n,h=a-s,l=_+1;break;case N.singleQuote:case N.doubleQuote:v=c===N.singleQuote?"'":'"',_=a;do for(m=!1,_=r.indexOf(v,_+1),_===-1&&D("quote",v),g=_;r.charCodeAt(g-1)===N.backslash;)g-=1,m=!m;while(m);S=N.str,f=n,h=a-s,l=_+1;break;default:c===N.slash&&r.charCodeAt(a+1)===N.asterisk?(_=r.indexOf("*/",a+2)+1,_===0&&D("comment","*/"),d=r.slice(a,_+1),b=d.split(`
`),y=b.length-1,y>0?(w=n+y,k=_-b[y].length):(w=n,k=s),S=N.comment,n=w,f=w,h=_-k):c===N.slash?(_=a,S=c,f=n,h=a-s,l=_+1):(_=IS(r,a),S=N.word,f=n,h=_-s),l=_+1;break}e.push([S,n,a-s,f,h,a,l]),k&&(s=k,k=null),a=l}return e}});var ig=F((hn,rg)=>{"use strict";hn.__esModule=!0;hn.default=void 0;var RS=Vt(cu()),Bu=Vt(du()),DS=Vt(fu()),Ym=Vt(gu()),MS=Vt(yu()),NS=Vt(_u()),Vu=Vt(ku()),FS=Vt(Cu()),Xm=Ha(Pu()),US=Vt(zu()),ju=Vt(Du()),BS=Vt(Nu()),VS=Vt(Hm()),P=Ha(Zm()),V=Ha(Fu()),jS=Ha(ct()),je=Ws(),Li,qu;function tg(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(tg=function(o){return o?r:e})(t)}function Ha(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=tg(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function Vt(t){return t&&t.__esModule?t:{default:t}}function Jm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function qS(t,e,r){return e&&Jm(t.prototype,e),r&&Jm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Gu=(Li={},Li[V.space]=!0,Li[V.cr]=!0,Li[V.feed]=!0,Li[V.newline]=!0,Li[V.tab]=!0,Li),HS=Object.assign({},Gu,(qu={},qu[V.comment]=!0,qu));function Qm(t){return{line:t[P.FIELDS.START_LINE],column:t[P.FIELDS.START_COL]}}function eg(t){return{line:t[P.FIELDS.END_LINE],column:t[P.FIELDS.END_COL]}}function zi(t,e,r,i){return{start:{line:t,column:e},end:{line:r,column:i}}}function Mo(t){return zi(t[P.FIELDS.START_LINE],t[P.FIELDS.START_COL],t[P.FIELDS.END_LINE],t[P.FIELDS.END_COL])}function Hu(t,e){if(t)return zi(t[P.FIELDS.START_LINE],t[P.FIELDS.START_COL],e[P.FIELDS.END_LINE],e[P.FIELDS.END_COL])}function No(t,e){var r=t[e];if(typeof r=="string")return r.indexOf("\\")!==-1&&((0,je.ensureObject)(t,"raws"),t[e]=(0,je.unesc)(r),t.raws[e]===void 0&&(t.raws[e]=r)),t}function Wu(t,e){for(var r=-1,i=[];(r=t.indexOf(e,r+1))!==-1;)i.push(r);return i}function WS(){var t=Array.prototype.concat.apply([],arguments);return t.filter(function(e,r){return r===t.indexOf(e)})}var GS=function(){function t(r,i){i===void 0&&(i={}),this.rule=r,this.options=Object.assign({lossy:!1,safe:!1},i),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,P.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var o=Hu(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new RS.default({source:o}),this.root.errorGenerator=this._errorGenerator();var s=new Bu.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(s),this.current=s,this.loop()}var e=t.prototype;return e._errorGenerator=function(){var i=this;return function(o,s){return typeof i.rule=="string"?new Error(o):i.rule.error(o,s)}},e.attribute=function(){var i=[],o=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[P.FIELDS.TYPE]!==V.closeSquare;)i.push(this.currToken),this.position++;if(this.currToken[P.FIELDS.TYPE]!==V.closeSquare)return this.expected("closing square bracket",this.currToken[P.FIELDS.START_POS]);var s=i.length,n={source:zi(o[1],o[2],this.currToken[3],this.currToken[4]),sourceIndex:o[P.FIELDS.START_POS]};if(s===1&&!~[V.word].indexOf(i[0][P.FIELDS.TYPE]))return this.expected("attribute",i[0][P.FIELDS.START_POS]);for(var a=0,l="",c="",d=null,h=!1;a<s;){var f=i[a],m=this.content(f),g=i[a+1];switch(f[P.FIELDS.TYPE]){case V.space:if(h=!0,this.options.lossy)break;if(d){(0,je.ensureObject)(n,"spaces",d);var y=n.spaces[d].after||"";n.spaces[d].after=y+m;var b=(0,je.getProp)(n,"raws","spaces",d,"after")||null;b&&(n.raws.spaces[d].after=b+m)}else l=l+m,c=c+m;break;case V.asterisk:if(g[P.FIELDS.TYPE]===V.equals)n.operator=m,d="operator";else if((!n.namespace||d==="namespace"&&!h)&&g){l&&((0,je.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),c&&((0,je.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=l,c=""),n.namespace=(n.namespace||"")+m;var _=(0,je.getProp)(n,"raws","namespace")||null;_&&(n.raws.namespace+=m),d="namespace"}h=!1;break;case V.dollar:if(d==="value"){var w=(0,je.getProp)(n,"raws","value");n.value+="$",w&&(n.raws.value=w+"$");break}case V.caret:g[P.FIELDS.TYPE]===V.equals&&(n.operator=m,d="operator"),h=!1;break;case V.combinator:if(m==="~"&&g[P.FIELDS.TYPE]===V.equals&&(n.operator=m,d="operator"),m!=="|"){h=!1;break}g[P.FIELDS.TYPE]===V.equals?(n.operator=m,d="operator"):!n.namespace&&!n.attribute&&(n.namespace=!0),h=!1;break;case V.word:if(g&&this.content(g)==="|"&&i[a+2]&&i[a+2][P.FIELDS.TYPE]!==V.equals&&!n.operator&&!n.namespace)n.namespace=m,d="namespace";else if(!n.attribute||d==="attribute"&&!h){l&&((0,je.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),c&&((0,je.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=c,c=""),n.attribute=(n.attribute||"")+m;var k=(0,je.getProp)(n,"raws","attribute")||null;k&&(n.raws.attribute+=m),d="attribute"}else if(!n.value&&n.value!==""||d==="value"&&!(h||n.quoteMark)){var v=(0,je.unesc)(m),S=(0,je.getProp)(n,"raws","value")||"",D=n.value||"";n.value=D+v,n.quoteMark=null,(v!==m||S)&&((0,je.ensureObject)(n,"raws"),n.raws.value=(S||D)+m),d="value"}else{var K=m==="i"||m==="I";(n.value||n.value==="")&&(n.quoteMark||h)?(n.insensitive=K,(!K||m==="I")&&((0,je.ensureObject)(n,"raws"),n.raws.insensitiveFlag=m),d="insensitive",l&&((0,je.ensureObject)(n,"spaces","insensitive"),n.spaces.insensitive.before=l,l=""),c&&((0,je.ensureObject)(n,"raws","spaces","insensitive"),n.raws.spaces.insensitive.before=c,c="")):(n.value||n.value==="")&&(d="value",n.value+=m,n.raws.value&&(n.raws.value+=m))}h=!1;break;case V.str:if(!n.attribute||!n.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:f[P.FIELDS.START_POS]});var B=(0,Xm.unescapeValue)(m),q=B.unescaped,E=B.quoteMark;n.value=q,n.quoteMark=E,d="value",(0,je.ensureObject)(n,"raws"),n.raws.value=m,h=!1;break;case V.equals:if(!n.attribute)return this.expected("attribute",f[P.FIELDS.START_POS],m);if(n.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:f[P.FIELDS.START_POS]});n.operator=n.operator?n.operator+m:m,d="operator",h=!1;break;case V.comment:if(d)if(h||g&&g[P.FIELDS.TYPE]===V.space||d==="insensitive"){var J=(0,je.getProp)(n,"spaces",d,"after")||"",Q=(0,je.getProp)(n,"raws","spaces",d,"after")||J;(0,je.ensureObject)(n,"raws","spaces",d),n.raws.spaces[d].after=Q+m}else{var he=n[d]||"",Te=(0,je.getProp)(n,"raws",d)||he;(0,je.ensureObject)(n,"raws"),n.raws[d]=Te+m}else c=c+m;break;default:return this.error('Unexpected "'+m+'" found.',{index:f[P.FIELDS.START_POS]})}a++}No(n,"attribute"),No(n,"namespace"),this.newNode(new Xm.default(n)),this.position++},e.parseWhitespaceEquivalentTokens=function(i){i<0&&(i=this.tokens.length);var o=this.position,s=[],n="",a=void 0;do if(Gu[this.currToken[P.FIELDS.TYPE]])this.options.lossy||(n+=this.content());else if(this.currToken[P.FIELDS.TYPE]===V.comment){var l={};n&&(l.before=n,n=""),a=new Ym.default({value:this.content(),source:Mo(this.currToken),sourceIndex:this.currToken[P.FIELDS.START_POS],spaces:l}),s.push(a)}while(++this.position<i);if(n){if(a)a.spaces.after=n;else if(!this.options.lossy){var c=this.tokens[o],d=this.tokens[this.position-1];s.push(new Vu.default({value:"",source:zi(c[P.FIELDS.START_LINE],c[P.FIELDS.START_COL],d[P.FIELDS.END_LINE],d[P.FIELDS.END_COL]),sourceIndex:c[P.FIELDS.START_POS],spaces:{before:n,after:""}}))}}return s},e.convertWhitespaceNodesToSpace=function(i,o){var s=this;o===void 0&&(o=!1);var n="",a="";i.forEach(function(c){var d=s.lossySpace(c.spaces.before,o),h=s.lossySpace(c.rawSpaceBefore,o);n+=d+s.lossySpace(c.spaces.after,o&&d.length===0),a+=d+c.value+s.lossySpace(c.rawSpaceAfter,o&&h.length===0)}),a===n&&(a=void 0);var l={space:n,rawSpace:a};return l},e.isNamedCombinator=function(i){return i===void 0&&(i=this.position),this.tokens[i+0]&&this.tokens[i+0][P.FIELDS.TYPE]===V.slash&&this.tokens[i+1]&&this.tokens[i+1][P.FIELDS.TYPE]===V.word&&this.tokens[i+2]&&this.tokens[i+2][P.FIELDS.TYPE]===V.slash},e.namedCombinator=function(){if(this.isNamedCombinator()){var i=this.content(this.tokens[this.position+1]),o=(0,je.unesc)(i).toLowerCase(),s={};o!==i&&(s.value="/"+i+"/");var n=new ju.default({value:"/"+o+"/",source:zi(this.currToken[P.FIELDS.START_LINE],this.currToken[P.FIELDS.START_COL],this.tokens[this.position+2][P.FIELDS.END_LINE],this.tokens[this.position+2][P.FIELDS.END_COL]),sourceIndex:this.currToken[P.FIELDS.START_POS],raws:s});return this.position=this.position+3,n}else this.unexpected()},e.combinator=function(){var i=this;if(this.content()==="|")return this.namespace();var o=this.locateNextMeaningfulToken(this.position);if(o<0||this.tokens[o][P.FIELDS.TYPE]===V.comma||this.tokens[o][P.FIELDS.TYPE]===V.closeParenthesis){var s=this.parseWhitespaceEquivalentTokens(o);if(s.length>0){var n=this.current.last;if(n){var a=this.convertWhitespaceNodesToSpace(s),l=a.space,c=a.rawSpace;c!==void 0&&(n.rawSpaceAfter+=c),n.spaces.after+=l}else s.forEach(function(S){return i.newNode(S)})}return}var d=this.currToken,h=void 0;o>this.position&&(h=this.parseWhitespaceEquivalentTokens(o));var f;if(this.isNamedCombinator()?f=this.namedCombinator():this.currToken[P.FIELDS.TYPE]===V.combinator?(f=new ju.default({value:this.content(),source:Mo(this.currToken),sourceIndex:this.currToken[P.FIELDS.START_POS]}),this.position++):Gu[this.currToken[P.FIELDS.TYPE]]||h||this.unexpected(),f){if(h){var m=this.convertWhitespaceNodesToSpace(h),g=m.space,y=m.rawSpace;f.spaces.before=g,f.rawSpaceBefore=y}}else{var b=this.convertWhitespaceNodesToSpace(h,!0),_=b.space,w=b.rawSpace;w||(w=_);var k={},v={spaces:{}};_.endsWith(" ")&&w.endsWith(" ")?(k.before=_.slice(0,_.length-1),v.spaces.before=w.slice(0,w.length-1)):_.startsWith(" ")&&w.startsWith(" ")?(k.after=_.slice(1),v.spaces.after=w.slice(1)):v.value=w,f=new ju.default({value:" ",source:Hu(d,this.tokens[this.position-1]),sourceIndex:d[P.FIELDS.START_POS],spaces:k,raws:v})}return this.currToken&&this.currToken[P.FIELDS.TYPE]===V.space&&(f.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(f)},e.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var i=new Bu.default({source:{start:Qm(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][P.FIELDS.START_POS]});this.current.parent.append(i),this.current=i,this.position++},e.comment=function(){var i=this.currToken;this.newNode(new Ym.default({value:this.content(),source:Mo(i),sourceIndex:i[P.FIELDS.START_POS]})),this.position++},e.error=function(i,o){throw this.root.error(i,o)},e.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[P.FIELDS.START_POS]})},e.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[P.FIELDS.START_POS])},e.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[P.FIELDS.START_POS])},e.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[P.FIELDS.START_POS])},e.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[P.FIELDS.START_POS])},e.namespace=function(){var i=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[P.FIELDS.TYPE]===V.word)return this.position++,this.word(i);if(this.nextToken[P.FIELDS.TYPE]===V.asterisk)return this.position++,this.universal(i);this.unexpectedPipe()},e.nesting=function(){if(this.nextToken){var i=this.content(this.nextToken);if(i==="|"){this.position++;return}}var o=this.currToken;this.newNode(new BS.default({value:this.content(),source:Mo(o),sourceIndex:o[P.FIELDS.START_POS]})),this.position++},e.parentheses=function(){var i=this.current.last,o=1;if(this.position++,i&&i.type===jS.PSEUDO){var s=new Bu.default({source:{start:Qm(this.tokens[this.position])},sourceIndex:this.tokens[this.position][P.FIELDS.START_POS]}),n=this.current;for(i.append(s),this.current=s;this.position<this.tokens.length&&o;)this.currToken[P.FIELDS.TYPE]===V.openParenthesis&&o++,this.currToken[P.FIELDS.TYPE]===V.closeParenthesis&&o--,o?this.parse():(this.current.source.end=eg(this.currToken),this.current.parent.source.end=eg(this.currToken),this.position++);this.current=n}else{for(var a=this.currToken,l="(",c;this.position<this.tokens.length&&o;)this.currToken[P.FIELDS.TYPE]===V.openParenthesis&&o++,this.currToken[P.FIELDS.TYPE]===V.closeParenthesis&&o--,c=this.currToken,l+=this.parseParenthesisToken(this.currToken),this.position++;i?i.appendToPropertyAndEscape("value",l,l):this.newNode(new Vu.default({value:l,source:zi(a[P.FIELDS.START_LINE],a[P.FIELDS.START_COL],c[P.FIELDS.END_LINE],c[P.FIELDS.END_COL]),sourceIndex:a[P.FIELDS.START_POS]}))}if(o)return this.expected("closing parenthesis",this.currToken[P.FIELDS.START_POS])},e.pseudo=function(){for(var i=this,o="",s=this.currToken;this.currToken&&this.currToken[P.FIELDS.TYPE]===V.colon;)o+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[P.FIELDS.TYPE]===V.word)this.splitWord(!1,function(n,a){o+=n,i.newNode(new FS.default({value:o,source:Hu(s,i.currToken),sourceIndex:s[P.FIELDS.START_POS]})),a>1&&i.nextToken&&i.nextToken[P.FIELDS.TYPE]===V.openParenthesis&&i.error("Misplaced parenthesis.",{index:i.nextToken[P.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[P.FIELDS.START_POS])},e.space=function(){var i=this.content();this.position===0||this.prevToken[P.FIELDS.TYPE]===V.comma||this.prevToken[P.FIELDS.TYPE]===V.openParenthesis||this.current.nodes.every(function(o){return o.type==="comment"})?(this.spaces=this.optionalSpace(i),this.position++):this.position===this.tokens.length-1||this.nextToken[P.FIELDS.TYPE]===V.comma||this.nextToken[P.FIELDS.TYPE]===V.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(i),this.position++):this.combinator()},e.string=function(){var i=this.currToken;this.newNode(new Vu.default({value:this.content(),source:Mo(i),sourceIndex:i[P.FIELDS.START_POS]})),this.position++},e.universal=function(i){var o=this.nextToken;if(o&&this.content(o)==="|")return this.position++,this.namespace();var s=this.currToken;this.newNode(new US.default({value:this.content(),source:Mo(s),sourceIndex:s[P.FIELDS.START_POS]}),i),this.position++},e.splitWord=function(i,o){for(var s=this,n=this.nextToken,a=this.content();n&&~[V.dollar,V.caret,V.equals,V.word].indexOf(n[P.FIELDS.TYPE]);){this.position++;var l=this.content();if(a+=l,l.lastIndexOf("\\")===l.length-1){var c=this.nextToken;c&&c[P.FIELDS.TYPE]===V.space&&(a+=this.requiredSpace(this.content(c)),this.position++)}n=this.nextToken}var d=Wu(a,".").filter(function(g){var y=a[g-1]==="\\",b=/^\d+\.\d+%$/.test(a);return!y&&!b}),h=Wu(a,"#").filter(function(g){return a[g-1]!=="\\"}),f=Wu(a,"#{");f.length&&(h=h.filter(function(g){return!~f.indexOf(g)}));var m=(0,VS.default)(WS([0].concat(d,h)));m.forEach(function(g,y){var b=m[y+1]||a.length,_=a.slice(g,b);if(y===0&&o)return o.call(s,_,m.length);var w,k=s.currToken,v=k[P.FIELDS.START_POS]+m[y],S=zi(k[1],k[2]+g,k[3],k[2]+(b-1));if(~d.indexOf(g)){var D={value:_.slice(1),source:S,sourceIndex:v};w=new DS.default(No(D,"value"))}else if(~h.indexOf(g)){var K={value:_.slice(1),source:S,sourceIndex:v};w=new MS.default(No(K,"value"))}else{var B={value:_,source:S,sourceIndex:v};No(B,"value"),w=new NS.default(B)}s.newNode(w,i),i=null}),this.position++},e.word=function(i){var o=this.nextToken;return o&&this.content(o)==="|"?(this.position++,this.namespace()):this.splitWord(i)},e.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},e.parse=function(i){switch(this.currToken[P.FIELDS.TYPE]){case V.space:this.space();break;case V.comment:this.comment();break;case V.openParenthesis:this.parentheses();break;case V.closeParenthesis:i&&this.missingParenthesis();break;case V.openSquare:this.attribute();break;case V.dollar:case V.caret:case V.equals:case V.word:this.word();break;case V.colon:this.pseudo();break;case V.comma:this.comma();break;case V.asterisk:this.universal();break;case V.ampersand:this.nesting();break;case V.slash:case V.combinator:this.combinator();break;case V.str:this.string();break;case V.closeSquare:this.missingSquareBracket();case V.semicolon:this.missingBackslash();default:this.unexpected()}},e.expected=function(i,o,s){if(Array.isArray(i)){var n=i.pop();i=i.join(", ")+" or "+n}var a=/^[aeiou]/.test(i[0])?"an":"a";return s?this.error("Expected "+a+" "+i+', found "'+s+'" instead.',{index:o}):this.error("Expected "+a+" "+i+".",{index:o})},e.requiredSpace=function(i){return this.options.lossy?" ":i},e.optionalSpace=function(i){return this.options.lossy?"":i},e.lossySpace=function(i,o){return this.options.lossy?o?" ":"":i},e.parseParenthesisToken=function(i){var o=this.content(i);return i[P.FIELDS.TYPE]===V.space?this.requiredSpace(o):o},e.newNode=function(i,o){return o&&(/^ +$/.test(o)&&(this.options.lossy||(this.spaces=(this.spaces||"")+o),o=!0),i.namespace=o,No(i,"namespace")),this.spaces&&(i.spaces.before=this.spaces,this.spaces=""),this.current.append(i)},e.content=function(i){return i===void 0&&(i=this.currToken),this.css.slice(i[P.FIELDS.START_POS],i[P.FIELDS.END_POS])},e.locateNextMeaningfulToken=function(i){i===void 0&&(i=this.position+1);for(var o=i;o<this.tokens.length;)if(HS[this.tokens[o][P.FIELDS.TYPE]]){o++;continue}else return o;return-1},qS(t,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),t}();hn.default=GS;rg.exports=hn.default});var sg=F((pn,og)=>{"use strict";pn.__esModule=!0;pn.default=void 0;var KS=ZS(ig());function ZS(t){return t&&t.__esModule?t:{default:t}}var YS=function(){function t(r,i){this.func=r||function(){},this.funcRes=null,this.options=i}var e=t.prototype;return e._shouldUpdateSelector=function(i,o){o===void 0&&(o={});var s=Object.assign({},this.options,o);return s.updateSelector===!1?!1:typeof i!="string"},e._isLossy=function(i){i===void 0&&(i={});var o=Object.assign({},this.options,i);return o.lossless===!1},e._root=function(i,o){o===void 0&&(o={});var s=new KS.default(i,this._parseOptions(o));return s.root},e._parseOptions=function(i){return{lossy:this._isLossy(i)}},e._run=function(i,o){var s=this;return o===void 0&&(o={}),new Promise(function(n,a){try{var l=s._root(i,o);Promise.resolve(s.func(l)).then(function(c){var d=void 0;return s._shouldUpdateSelector(i,o)&&(d=l.toString(),i.selector=d),{transform:c,root:l,string:d}}).then(n,a)}catch(c){a(c);return}})},e._runSync=function(i,o){o===void 0&&(o={});var s=this._root(i,o),n=this.func(s);if(n&&typeof n.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return o.updateSelector&&typeof i!="string"&&(a=s.toString(),i.selector=a),{transform:n,root:s,string:a}},e.ast=function(i,o){return this._run(i,o).then(function(s){return s.root})},e.astSync=function(i,o){return this._runSync(i,o).root},e.transform=function(i,o){return this._run(i,o).then(function(s){return s.transform})},e.transformSync=function(i,o){return this._runSync(i,o).transform},e.process=function(i,o){return this._run(i,o).then(function(s){return s.string||s.root.toString()})},e.processSync=function(i,o){var s=this._runSync(i,o);return s.string||s.root.toString()},t}();pn.default=YS;og.exports=pn.default});var ng=F(Ne=>{"use strict";Ne.__esModule=!0;Ne.universal=Ne.tag=Ne.string=Ne.selector=Ne.root=Ne.pseudo=Ne.nesting=Ne.id=Ne.comment=Ne.combinator=Ne.className=Ne.attribute=void 0;var XS=jt(Pu()),JS=jt(fu()),QS=jt(Du()),eC=jt(gu()),tC=jt(yu()),rC=jt(Nu()),iC=jt(Cu()),oC=jt(cu()),sC=jt(du()),nC=jt(ku()),aC=jt(_u()),lC=jt(zu());function jt(t){return t&&t.__esModule?t:{default:t}}var cC=function(e){return new XS.default(e)};Ne.attribute=cC;var uC=function(e){return new JS.default(e)};Ne.className=uC;var dC=function(e){return new QS.default(e)};Ne.combinator=dC;var hC=function(e){return new eC.default(e)};Ne.comment=hC;var pC=function(e){return new tC.default(e)};Ne.id=pC;var fC=function(e){return new rC.default(e)};Ne.nesting=fC;var mC=function(e){return new iC.default(e)};Ne.pseudo=mC;var gC=function(e){return new oC.default(e)};Ne.root=gC;var bC=function(e){return new sC.default(e)};Ne.selector=bC;var yC=function(e){return new nC.default(e)};Ne.string=yC;var vC=function(e){return new aC.default(e)};Ne.tag=vC;var wC=function(e){return new lC.default(e)};Ne.universal=wC});var ug=F(_e=>{"use strict";_e.__esModule=!0;_e.isComment=_e.isCombinator=_e.isClassName=_e.isAttribute=void 0;_e.isContainer=PC;_e.isIdentifier=void 0;_e.isNamespace=LC;_e.isNesting=void 0;_e.isNode=Ku;_e.isPseudo=void 0;_e.isPseudoClass=IC;_e.isPseudoElement=cg;_e.isUniversal=_e.isTag=_e.isString=_e.isSelector=_e.isRoot=void 0;var qe=ct(),St,_C=(St={},St[qe.ATTRIBUTE]=!0,St[qe.CLASS]=!0,St[qe.COMBINATOR]=!0,St[qe.COMMENT]=!0,St[qe.ID]=!0,St[qe.NESTING]=!0,St[qe.PSEUDO]=!0,St[qe.ROOT]=!0,St[qe.SELECTOR]=!0,St[qe.STRING]=!0,St[qe.TAG]=!0,St[qe.UNIVERSAL]=!0,St);function Ku(t){return typeof t=="object"&&_C[t.type]}function qt(t,e){return Ku(e)&&e.type===t}var ag=qt.bind(null,qe.ATTRIBUTE);_e.isAttribute=ag;var xC=qt.bind(null,qe.CLASS);_e.isClassName=xC;var kC=qt.bind(null,qe.COMBINATOR);_e.isCombinator=kC;var SC=qt.bind(null,qe.COMMENT);_e.isComment=SC;var CC=qt.bind(null,qe.ID);_e.isIdentifier=CC;var TC=qt.bind(null,qe.NESTING);_e.isNesting=TC;var Zu=qt.bind(null,qe.PSEUDO);_e.isPseudo=Zu;var EC=qt.bind(null,qe.ROOT);_e.isRoot=EC;var AC=qt.bind(null,qe.SELECTOR);_e.isSelector=AC;var OC=qt.bind(null,qe.STRING);_e.isString=OC;var lg=qt.bind(null,qe.TAG);_e.isTag=lg;var $C=qt.bind(null,qe.UNIVERSAL);_e.isUniversal=$C;function cg(t){return Zu(t)&&t.value&&(t.value.startsWith("::")||t.value.toLowerCase()===":before"||t.value.toLowerCase()===":after"||t.value.toLowerCase()===":first-letter"||t.value.toLowerCase()===":first-line")}function IC(t){return Zu(t)&&!cg(t)}function PC(t){return!!(Ku(t)&&t.walk)}function LC(t){return ag(t)||lg(t)}});var dg=F(lr=>{"use strict";lr.__esModule=!0;var Yu=ct();Object.keys(Yu).forEach(function(t){t==="default"||t==="__esModule"||t in lr&&lr[t]===Yu[t]||(lr[t]=Yu[t])});var Xu=ng();Object.keys(Xu).forEach(function(t){t==="default"||t==="__esModule"||t in lr&&lr[t]===Xu[t]||(lr[t]=Xu[t])});var Ju=ug();Object.keys(Ju).forEach(function(t){t==="default"||t==="__esModule"||t in lr&&lr[t]===Ju[t]||(lr[t]=Ju[t])})});var fg=F((fn,pg)=>{"use strict";fn.__esModule=!0;fn.default=void 0;var zC=MC(sg()),RC=DC(dg());function hg(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(hg=function(o){return o?r:e})(t)}function DC(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=hg(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function MC(t){return t&&t.__esModule?t:{default:t}}var Qu=function(e){return new zC.default(e)};Object.assign(Qu,RC);delete Qu.__esModule;var NC=Qu;fn.default=NC;pg.exports=fn.default});var _g=F((gP,od)=>{var{AtRule:FC,Rule:gg}=zo(),bg=fg();function rd(t,e){let r;try{bg(i=>{r=i}).processSync(t)}catch(i){throw t.includes(":")?e?e.error("Missed semicolon"):i:e?e.error(i.message):i}return r.at(0)}function yg(t,e){let r=!1;return t.each(i=>{if(i.type==="nesting"){let o=e.clone({});i.value!=="&"?i.replaceWith(rd(i.value.replace("&",o.toString()))):i.replaceWith(o),r=!0}else"nodes"in i&&i.nodes&&yg(i,e)&&(r=!0)}),r}function vg(t,e){let r=[];for(let i of t.selectors){let o=rd(i,t);for(let s of e.selectors){if(!s)continue;let n=rd(s,e);yg(n,o)||(n.prepend(bg.combinator({value:" "})),n.prepend(o.clone({}))),r.push(n.toString())}}return r}function Wa(t,e){if(t.prev()?.type!=="comment")return e.after(t),t;let r=t.prev(),i=/[*]\/ *\n.*{/;return t.parent.toString().match(i)?e.after(t).after(r):e.after(t),t}function UC(t){return function e(r,i,o,s=o){let n=[];if(i.each(a=>{a.type==="rule"&&o?s&&(a.selectors=vg(r,a)):a.type==="atrule"&&a.nodes?t[a.name]?e(r,a,s):i[id]!==!1&&n.push(a):n.push(a)}),o&&n.length){let a=r.clone({nodes:[]});for(let l of n)a.append(l);i.prepend(a)}}}function BC(t,e,r){let i=new gg({nodes:[],selector:t});return i.append(e),r.after(i),i}function ed(t,e,r,i=!0){return e.length?(r=BC(t,e,r),i&&(e=[]),[r,e]):[r,e]}function mg(t,e=""){let r=t.concat(e),i={};for(let o of r)i[o.replace(/^@/,"")]=!0;return i}function VC(t){t=t.trim();let e=t.match(/^\((.*)\)$/);if(!e)return{selector:t,type:"basic"};let r=e[1].match(/^(with(?:out)?):(.+)$/);if(r){let i=r[1]==="with",o=Object.fromEntries(r[2].trim().split(/\s+/).map(n=>[n,!0]));if(i&&o.all)return{type:"noop"};let s=n=>!!o[n];return o.all?s=()=>!0:i&&(s=n=>n==="all"?!1:!o[n]),{escapes:s,type:"withrules"}}return{type:"unknown"}}function jC(t){let e=[],r=t.parent;for(;r&&r instanceof FC;)e.push(r),r=r.parent;return e}function qC(t){let e=t[wg];if(!e)t.after(t.nodes);else{let r=t.nodes,i,o=-1,s,n,a,l=jC(t);if(l.forEach((c,d)=>{if(e(c.name))i=c,o=d,n=a;else{let h=a;a=c.clone({nodes:[]}),h&&a.append(h),s=s||a}}),i?n?(s.append(r),i.after(n)):i.after(r):t.after(r),t.next()&&i){let c;l.slice(0,o+1).forEach((d,h,f)=>{let m=c;c=d.clone({nodes:[]}),m&&c.append(m);let g=[],b=(f[h-1]||t).next();for(;b;)g.push(b),b=b.next();c.append(g)}),c&&(n||r[r.length-1]).after(c)}}t.remove()}var id=Symbol("rootRuleMergeSel"),wg=Symbol("rootRuleEscapes");function HC(t){let{params:e}=t,{escapes:r,selector:i,type:o}=VC(e);if(o==="unknown")throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);if(o==="basic"&&i){let s=new gg({nodes:t.nodes,selector:i});t.removeAll(),t.append(s)}t[wg]=r,t[id]=r?!r("all"):o==="noop"}var td=Symbol("hasRootRule");od.exports=(t={})=>{let e=mg(["media","supports","layer","container","starting-style"],t.bubble),r=UC(e),i=mg(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],t.unwrap),o=(t.rootRuleName||"at-root").replace(/^@/,""),s=t.preserveEmpty;return{Once(n){n.walkAtRules(o,a=>{HC(a),n[td]=!0})},postcssPlugin:"postcss-nested",RootExit(n){n[td]&&(n.walkAtRules(o,qC),n[td]=!1)},Rule(n){let a=!1,l=n,c=!1,d=[];n.each(h=>{switch(h.type){case"atrule":[l,d]=ed(n.selector,d,l),h.name===o?(a=!0,r(n,h,!0,h[id]),l=Wa(h,l)):e[h.name]?(c=!0,a=!0,r(n,h,!0),l=Wa(h,l)):i[h.name]?(c=!0,a=!0,r(n,h,!1),l=Wa(h,l)):c&&d.push(h);break;case"decl":c&&d.push(h);break;case"rule":[l,d]=ed(n.selector,d,l),c=!0,a=!0,h.selectors=vg(n,h),l=Wa(h,l);break}}),ed(n.selector,d,l,!1),a&&s!==!0&&(n.raws.semicolon=!0,n.nodes.length===0&&n.remove())}}};od.exports.postcss=!0});var Hb=F((AL,qb)=>{"use strict";qb.exports=function(t,e){e||(e={}),typeof e=="function"&&(e={cmp:e});var r=typeof e.cycles=="boolean"?e.cycles:!1,i=e.cmp&&function(s){return function(n){return function(a,l){var c={key:a,value:n[a]},d={key:l,value:n[l]};return s(c,d)}}}(e.cmp),o=[];return function s(n){if(n&&n.toJSON&&typeof n.toJSON=="function"&&(n=n.toJSON()),n!==void 0){if(typeof n=="number")return isFinite(n)?""+n:"null";if(typeof n!="object")return JSON.stringify(n);var a,l;if(Array.isArray(n)){for(l="[",a=0;a<n.length;a++)a&&(l+=","),l+=s(n[a])||"null";return l+"]"}if(n===null)return"null";if(o.indexOf(n)!==-1){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var c=o.push(n)-1,d=Object.keys(n).sort(i&&i(n));for(l="",a=0;a<d.length;a++){var h=d[a],f=s(n[h]);f&&(l&&(l+=","),l+=JSON.stringify(h)+":"+f)}return o.splice(c,1),"{"+l+"}"}}(t)}});function Rw(t){return Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=Object.assign({},o),Qh(o.value)&&!Uw(o.value)&&!Array.isArray(o.value)&&(r[i].value=Object.assign({},o.value)),Array.isArray(o.value)&&(r[i].value=o.value.slice(0)),r},{})}function Dw(t){return t?Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=Qh(o)&&"value"in o?o:{value:o},r[i].attribute||(r[i].attribute=Fw(i)),r[i].parse="parse"in r[i]?r[i].parse:typeof r[i].value!="string",r},{}):{}}function Mw(t){return Object.keys(t).reduce((r,i)=>(r[i]=t[i].value,r),{})}function Nw(t,e){let r=Rw(e);return Object.keys(e).forEach(o=>{let s=r[o],n=t.getAttribute(s.attribute),a=t[o];n!=null&&(s.value=s.parse?Jh(n):n),a!=null&&(s.value=Array.isArray(a)?a.slice(0):a),s.reflect&&Xh(t,s.attribute,s.value,!!s.parse),Object.defineProperty(t,o,{get(){return s.value},set(l){let c=s.value;s.value=l,s.reflect&&Xh(this,s.attribute,s.value,!!s.parse);for(let d=0,h=this.__propertyChangedCallbacks.length;d<h;d++)this.__propertyChangedCallbacks[d](o,l,c)},enumerable:!0,configurable:!0})}),r}function Jh(t){if(t)try{return JSON.parse(t)}catch{return t}}function Xh(t,e,r,i){if(r==null||r===!1)return t.removeAttribute(e);let o=i?JSON.stringify(r):r;t.__updating[e]=!0,o==="true"&&(o=""),t.setAttribute(e,o),Promise.resolve().then(()=>delete t.__updating[e])}function Fw(t){return t.replace(/\.?([A-Z]+)/g,(e,r)=>"-"+r.toLowerCase()).replace("_","-").replace(/^-/,"")}function Qh(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function Uw(t){return Object.prototype.toString.call(t)==="[object Function]"}function Bw(t){return typeof t=="function"&&t.toString().indexOf("class")===0}var vc;function Vw(t,e){let r=Object.keys(e);return class extends t{static get observedAttributes(){return r.map(o=>e[o].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=Nw(this,e);let o=Mw(this.props),s=this.Component,n=vc;try{vc=this,this.__initialized=!0,Bw(s)?new s(o,{element:this}):s(o,{element:this})}finally{vc=n}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let o=null;for(;o=this.__releaseCallbacks.pop();)o(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(o,s,n){if(this.__initialized&&!this.__updating[o]&&(o=this.lookupProp(o),o in e)){if(n==null&&!this[o])return;this[o]=e[o].parse?Jh(n):n}}lookupProp(o){if(e)return r.find(s=>o===s||o===e[s].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(o){this.__releaseCallbacks.push(o)}addPropertyChangedCallback(o){this.__propertyChangedCallbacks.push(o)}}}var m5=Symbol("element-context");function ep(t,e={},r={}){let{BaseElement:i=HTMLElement,extension:o,customElements:s=window.customElements}=r;return n=>{if(!t)throw new Error("tag is required to register a Component");let a=s.get(t);return a?(a.prototype.Component=n,a):(a=Vw(i,Dw(e)),a.prototype.Component=n,a.prototype.registeredTag=t,s.define(t,a,o),a)}}var oe={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return tp(this.context.count)},getNextContextId(){return tp(this.context.count++)}};function tp(t){let e=String(t),r=e.length-1;return oe.context.id+(r?String.fromCharCode(96+r):"")+e}function Ti(t){oe.context=t}function jw(){return{...oe.context,id:oe.getNextContextId(),count:0}}var qw=(t,e)=>t===e,Zr=Symbol("solid-proxy");var ha=Symbol("solid-track"),b5=Symbol("solid-dev-component"),ua={equals:qw},_s=null,ap=pp,Rt=1,xs=2,lp={owned:null,cleanups:null,context:null,owner:null},wc={},ue=null,z=null,Co=null,So=null,Ae=null,Ye=null,it=null,pa=0;function Ei(t,e){let r=Ae,i=ue,o=t.length===0,s=e===void 0?i:e,n=o?lp:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=o?t:()=>t(()=>ft(()=>Kr(n)));ue=n,Ae=null;try{return zt(a,!0)}finally{Ae=r,ue=i}}function Oe(t,e){e=e?Object.assign({},ua,e):ua;let r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=o=>(typeof o=="function"&&(z&&z.running&&z.sources.has(r)?o=o(r.tValue):o=o(r.value)),hp(r,o));return[dp.bind(r),i]}function rp(t,e,r){let i=Cs(t,e,!0,Rt);Co&&z&&z.running?Ye.push(i):Eo(i)}function ke(t,e,r){let i=Cs(t,e,!1,Rt);Co&&z&&z.running?Ye.push(i):Eo(i)}function Yr(t,e,r){ap=Jw;let i=Cs(t,e,!1,Rt),o=Ai&&Oi(Ai);o&&(i.suspense=o),(!r||!r.render)&&(i.user=!0),it?it.push(i):Eo(i)}function xe(t,e,r){r=r?Object.assign({},ua,r):ua;let i=Cs(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,Co&&z&&z.running?(i.tState=Rt,Ye.push(i)):Eo(i),dp.bind(i)}function Hw(t){return t&&typeof t=="object"&&"then"in t}function xt(t,e,r){let i,o,s;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,o=t,s=e||{}):(i=t,o=e,s=r||{});let n=null,a=wc,l=null,c=!1,d=!1,h="initialValue"in s,f=typeof i=="function"&&xe(i),m=new Set,[g,y]=(s.storage||Oe)(s.initialValue),[b,_]=Oe(void 0),[w,k]=Oe(void 0,{equals:!1}),[v,S]=Oe(h?"ready":"unresolved");oe.context&&(l=oe.getNextContextId(),s.ssrLoadFrom==="initial"?a=s.initialValue:oe.load&&oe.has(l)&&(a=oe.load(l)));function D(E,J,Q,he){return n===E&&(n=null,he!==void 0&&(h=!0),(E===a||J===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(he,{value:J})),a=wc,z&&E&&c?(z.promises.delete(E),c=!1,zt(()=>{z.running=!0,K(J,Q)},!1)):K(J,Q)),J}function K(E,J){zt(()=>{J===void 0&&y(()=>E),S(J!==void 0?"errored":h?"ready":"unresolved"),_(J);for(let Q of m.keys())Q.decrement();m.clear()},!1)}function B(){let E=Ai&&Oi(Ai),J=g(),Q=b();if(Q!==void 0&&!n)throw Q;return Ae&&!Ae.user&&E&&rp(()=>{w(),n&&(E.resolved&&z&&c?z.promises.add(n):m.has(E)||(E.increment(),m.add(E)))}),J}function q(E=!0){if(E!==!1&&d)return;d=!1;let J=f?f():i;if(c=z&&z.running,J==null||J===!1){D(n,ft(g));return}z&&n&&z.promises.delete(n);let Q=a!==wc?a:ft(()=>o(J,{value:g(),refetching:E}));return Hw(Q)?(n=Q,"value"in Q?(Q.status==="success"?D(n,Q.value,void 0,J):D(n,void 0,_c(Q.value),J),Q):(d=!0,queueMicrotask(()=>d=!1),zt(()=>{S(h?"refreshing":"pending"),k()},!1),Q.then(he=>D(Q,he,void 0,J),he=>D(Q,void 0,_c(he),J)))):(D(n,Q,void 0,J),Q)}return Object.defineProperties(B,{state:{get:()=>v()},error:{get:()=>b()},loading:{get(){let E=v();return E==="pending"||E==="refreshing"}},latest:{get(){if(!h)return B();let E=b();if(E&&!n)throw E;return g()}}}),f?rp(()=>q(!1)):q(!1),[B,{refetch:q,mutate:y}]}function cp(t){return zt(t,!1)}function ft(t){if(!So&&Ae===null)return t();let e=Ae;Ae=null;try{return So?So.untrack(t):t()}finally{Ae=e}}function Ss(t){return ue===null||(ue.cleanups===null?ue.cleanups=[t]:ue.cleanups.push(t)),t}function Ww(t,e){_s||(_s=Symbol("error")),ue=Cs(void 0,void 0,!0),ue.context={...ue.context,[_s]:[e]},z&&z.running&&z.sources.add(ue);try{return t()}catch(r){ma(r)}finally{ue=ue.owner}}function fa(){return Ae}function X(){return ue}function Gw(t){if(z&&z.running)return t(),z.done;let e=Ae,r=ue;return Promise.resolve().then(()=>{Ae=e,ue=r;let i;return(Co||Ai)&&(i=z||(z={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(o=>i.resolve=o)),i.running=!0),zt(t,!1),Ae=ue=null,i?i.done:void 0})}var[y5,ip]=Oe(!1);function Kw(t){it.push.apply(it,t),t.length=0}function To(t,e){let r=Symbol("context");return{id:r,Provider:Qw(r),defaultValue:t}}function Oi(t){let e;return ue&&ue.context&&(e=ue.context[t.id])!==void 0?e:t.defaultValue}function up(t){let e=xe(t),r=xe(()=>xc(e()));return r.toArray=()=>{let i=r();return Array.isArray(i)?i:i!=null?[i]:[]},r}var Ai;function Zw(){return Ai||(Ai=To())}function dp(){let t=z&&z.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===Rt)Eo(this);else{let e=Ye;Ye=null,zt(()=>da(this),!1),Ye=e}if(Ae){let e=this.observers?this.observers.length:0;Ae.sources?(Ae.sources.push(this),Ae.sourceSlots.push(e)):(Ae.sources=[this],Ae.sourceSlots=[e]),this.observers?(this.observers.push(Ae),this.observerSlots.push(Ae.sources.length-1)):(this.observers=[Ae],this.observerSlots=[Ae.sources.length-1])}return t&&z.sources.has(this)?this.tValue:this.value}function hp(t,e,r){let i=z&&z.running&&z.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(i,e)){if(z){let o=z.running;(o||!r&&z.sources.has(t))&&(z.sources.add(t),t.tValue=e),o||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&zt(()=>{for(let o=0;o<t.observers.length;o+=1){let s=t.observers[o],n=z&&z.running;n&&z.disposed.has(s)||((n?!s.tState:!s.state)&&(s.pure?Ye.push(s):it.push(s),s.observers&&fp(s)),n?s.tState=Rt:s.state=Rt)}if(Ye.length>1e6)throw Ye=[],new Error},!1)}return e}function Eo(t){if(!t.fn)return;Kr(t);let e=pa;op(t,z&&z.running&&z.sources.has(t)?t.tValue:t.value,e),z&&!z.running&&z.sources.has(t)&&queueMicrotask(()=>{zt(()=>{z&&(z.running=!0),Ae=ue=t,op(t,t.tValue,e),Ae=ue=null},!1)})}function op(t,e,r){let i,o=ue,s=Ae;Ae=ue=t;try{i=t.fn(e)}catch(n){return t.pure&&(z&&z.running?(t.tState=Rt,t.tOwned&&t.tOwned.forEach(Kr),t.tOwned=void 0):(t.state=Rt,t.owned&&t.owned.forEach(Kr),t.owned=null)),t.updatedAt=r+1,ma(n)}finally{Ae=s,ue=o}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?hp(t,i,!0):z&&z.running&&t.pure?(z.sources.add(t),t.tValue=i):t.value=i,t.updatedAt=r)}function Cs(t,e,r,i=Rt,o){let s={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ue,context:ue?ue.context:null,pure:r};if(z&&z.running&&(s.state=0,s.tState=i),ue===null||ue!==lp&&(z&&z.running&&ue.pure?ue.tOwned?ue.tOwned.push(s):ue.tOwned=[s]:ue.owned?ue.owned.push(s):ue.owned=[s]),So&&s.fn){let[n,a]=Oe(void 0,{equals:!1}),l=So.factory(s.fn,a);Ss(()=>l.dispose());let c=()=>Gw(a).then(()=>d.dispose()),d=So.factory(s.fn,c);s.fn=h=>(n(),z&&z.running?d.track(h):l.track(h))}return s}function ks(t){let e=z&&z.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===xs)return da(t);if(t.suspense&&ft(t.suspense.inFallback))return t.suspense.effects.push(t);let r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<pa);){if(e&&z.disposed.has(t))return;(e?t.tState:t.state)&&r.push(t)}for(let i=r.length-1;i>=0;i--){if(t=r[i],e){let o=t,s=r[i+1];for(;(o=o.owner)&&o!==s;)if(z.disposed.has(o))return}if((e?t.tState:t.state)===Rt)Eo(t);else if((e?t.tState:t.state)===xs){let o=Ye;Ye=null,zt(()=>da(t,r[0]),!1),Ye=o}}}function zt(t,e){if(Ye)return t();let r=!1;e||(Ye=[]),it?r=!0:it=[],pa++;try{let i=t();return Yw(r),i}catch(i){r||(it=null),Ye=null,ma(i)}}function Yw(t){if(Ye&&(Co&&z&&z.running?Xw(Ye):pp(Ye),Ye=null),t)return;let e;if(z){if(!z.promises.size&&!z.queue.size){let i=z.sources,o=z.disposed;it.push.apply(it,z.effects),e=z.resolve;for(let s of it)"tState"in s&&(s.state=s.tState),delete s.tState;z=null,zt(()=>{for(let s of o)Kr(s);for(let s of i){if(s.value=s.tValue,s.owned)for(let n=0,a=s.owned.length;n<a;n++)Kr(s.owned[n]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}ip(!1)},!1)}else if(z.running){z.running=!1,z.effects.push.apply(z.effects,it),it=null,ip(!0);return}}let r=it;it=null,r.length&&zt(()=>ap(r),!1),e&&e()}function pp(t){for(let e=0;e<t.length;e++)ks(t[e])}function Xw(t){for(let e=0;e<t.length;e++){let r=t[e],i=z.queue;i.has(r)||(i.add(r),Co(()=>{i.delete(r),zt(()=>{z.running=!0,ks(r)},!1),z&&(z.running=!1)}))}}function Jw(t){let e,r=0;for(e=0;e<t.length;e++){let i=t[e];i.user?t[r++]=i:ks(i)}if(oe.context){if(oe.count){oe.effects||(oe.effects=[]),oe.effects.push(...t.slice(0,r));return}Ti()}for(oe.effects&&(oe.done||!oe.count)&&(t=[...oe.effects,...t],r+=oe.effects.length,delete oe.effects),e=0;e<r;e++)ks(t[e])}function da(t,e){let r=z&&z.running;r?t.tState=0:t.state=0;for(let i=0;i<t.sources.length;i+=1){let o=t.sources[i];if(o.sources){let s=r?o.tState:o.state;s===Rt?o!==e&&(!o.updatedAt||o.updatedAt<pa)&&ks(o):s===xs&&da(o,e)}}}function fp(t){let e=z&&z.running;for(let r=0;r<t.observers.length;r+=1){let i=t.observers[r];(e?!i.tState:!i.state)&&(e?i.tState=xs:i.state=xs,i.pure?Ye.push(i):it.push(i),i.observers&&fp(i))}}function Kr(t){let e;if(t.sources)for(;t.sources.length;){let r=t.sources.pop(),i=t.sourceSlots.pop(),o=r.observers;if(o&&o.length){let s=o.pop(),n=r.observerSlots.pop();i<o.length&&(s.sourceSlots[n]=i,o[i]=s,r.observerSlots[i]=n)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Kr(t.tOwned[e]);delete t.tOwned}if(z&&z.running&&t.pure)mp(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)Kr(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}z&&z.running?t.tState=0:t.state=0}function mp(t,e){if(e||(t.tState=0,z.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)mp(t.owned[r])}function _c(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function sp(t,e,r){try{for(let i of e)i(t)}catch(i){ma(i,r&&r.owner||null)}}function ma(t,e=ue){let r=_s&&e&&e.context&&e.context[_s],i=_c(t);if(!r)throw i;it?it.push({fn(){sp(i,r,e)},state:Rt}):sp(i,r,e)}function xc(t){if(typeof t=="function"&&!t.length)return xc(t());if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=xc(t[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function Qw(t,e){return function(i){let o;return ke(()=>o=ft(()=>(ue.context={...ue.context,[t]:i.value},up(()=>i.children))),void 0),o}}var e_=Symbol("fallback");function np(t){for(let e=0;e<t.length;e++)t[e]()}function t_(t,e,r={}){let i=[],o=[],s=[],n=0,a=e.length>1?[]:null;return Ss(()=>np(s)),()=>{let l=t()||[],c=l.length,d,h;return l[ha],ft(()=>{let m,g,y,b,_,w,k,v,S;if(c===0)n!==0&&(np(s),s=[],i=[],o=[],n=0,a&&(a=[])),r.fallback&&(i=[e_],o[0]=Ei(D=>(s[0]=D,r.fallback())),n=1);else if(n===0){for(o=new Array(c),h=0;h<c;h++)i[h]=l[h],o[h]=Ei(f);n=c}else{for(y=new Array(c),b=new Array(c),a&&(_=new Array(c)),w=0,k=Math.min(n,c);w<k&&i[w]===l[w];w++);for(k=n-1,v=c-1;k>=w&&v>=w&&i[k]===l[v];k--,v--)y[v]=o[k],b[v]=s[k],a&&(_[v]=a[k]);for(m=new Map,g=new Array(v+1),h=v;h>=w;h--)S=l[h],d=m.get(S),g[h]=d===void 0?-1:d,m.set(S,h);for(d=w;d<=k;d++)S=i[d],h=m.get(S),h!==void 0&&h!==-1?(y[h]=o[d],b[h]=s[d],a&&(_[h]=a[d]),h=g[h],m.set(S,h)):s[d]();for(h=w;h<c;h++)h in y?(o[h]=y[h],s[h]=b[h],a&&(a[h]=_[h],a[h](h))):o[h]=Ei(f);o=o.slice(0,n=c),i=l.slice(0)}return o});function f(m){if(s[h]=m,a){let[g,y]=Oe(h);return a[h]=y,e(l[h],g)}return e(l[h])}}}var r_=!1;function Y(t,e){if(r_&&oe.context){let r=oe.context;Ti(jw());let i=ft(()=>t(e||{}));return Ti(r),i}return ft(()=>t(e||{}))}var gp=t=>`Stale read from <${t}>.`;function $i(t){let e="fallback"in t&&{fallback:()=>t.fallback};return xe(t_(()=>t.each,t.children,e||void 0))}function kt(t){let e=t.keyed,r=xe(()=>t.when,void 0,{equals:(i,o)=>e?i===o:!i==!o});return xe(()=>{let i=r();if(i){let o=t.children;return typeof o=="function"&&o.length>0?ft(()=>o(e?i:()=>{if(!ft(r))throw gp("Show");return t.when})):o}return t.fallback},void 0,void 0)}function kc(t){let e=!1,r=(s,n)=>(e?s[1]===n[1]:!s[1]==!n[1])&&s[2]===n[2],i=up(()=>t.children),o=xe(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let n=0;n<s.length;n++){let a=s[n].when;if(a)return e=!!s[n].keyed,[n,a,s[n]]}return[-1]},void 0,{equals:r});return xe(()=>{let[s,n,a]=o();if(s<0)return t.fallback;let l=a.children;return typeof l=="function"&&l.length>0?ft(()=>l(e?n:()=>{if(ft(o)[0]!==s)throw gp("Match");return a.when})):l},void 0,void 0)}function ga(t){return t}var ca;function Sc(t){let e;oe.context&&oe.load&&(e=oe.load(oe.getContextId()));let[r,i]=Oe(e,void 0);return ca||(ca=new Set),ca.add(i),Ss(()=>ca.delete(i)),xe(()=>{let o;if(o=r()){let s=t.fallback;return typeof s=="function"&&s.length?ft(()=>s(o,()=>i())):s}return Ww(()=>t.children,i)},void 0,void 0)}var i_=To();function Ir(t){let e=0,r,i,o,s,n,[a,l]=Oe(!1),c=Zw(),d={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},h=X();if(oe.context&&oe.load){let g=oe.getContextId(),y=oe.load(g);if(y&&(typeof y!="object"||y.status!=="success"?o=y:oe.gather(g)),o&&o!=="$$f"){let[b,_]=Oe(void 0,{equals:!1});s=b,o.then(()=>{if(oe.done)return _();oe.gather(g),Ti(i),_(),Ti()},w=>{n=w,_()})}}let f=Oi(i_);f&&(r=f.register(d.inFallback));let m;return Ss(()=>m&&m()),Y(c.Provider,{value:d,get children(){return xe(()=>{if(n)throw n;if(i=oe.context,s)return s(),s=void 0;i&&o==="$$f"&&Ti();let g=xe(()=>t.children);return xe(y=>{let b=d.inFallback(),{showContent:_=!0,showFallback:w=!0}=r?r():{};if((!b||o&&o!=="$$f")&&_)return d.resolved=!0,m&&m(),m=i=o=void 0,Kw(d.effects),g();if(w)return m?y:Ei(k=>(m=k,i&&(Ti({id:i.id+"F",count:0}),i=void 0),t.fallback),h)})})}})}var o_=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],E5=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...o_]);function s_(t,e,r){let i=r.length,o=e.length,s=i,n=0,a=0,l=e[o-1].nextSibling,c=null;for(;n<o||a<s;){if(e[n]===r[a]){n++,a++;continue}for(;e[o-1]===r[s-1];)o--,s--;if(o===n){let d=s<i?a?r[a-1].nextSibling:r[s-a]:l;for(;a<s;)t.insertBefore(r[a++],d)}else if(s===a)for(;n<o;)(!c||!c.has(e[n]))&&e[n].remove(),n++;else if(e[n]===r[s-1]&&r[a]===e[o-1]){let d=e[--o].nextSibling;t.insertBefore(r[a++],e[n++].nextSibling),t.insertBefore(r[--s],d),e[o]=r[s]}else{if(!c){c=new Map;let h=a;for(;h<s;)c.set(r[h],h++)}let d=c.get(e[n]);if(d!=null)if(a<d&&d<s){let h=n,f=1,m;for(;++h<o&&h<s&&!((m=c.get(e[h]))==null||m!==d+f);)f++;if(f>d-a){let g=e[n];for(;a<d;)t.insertBefore(r[a++],g)}else t.replaceChild(r[a++],e[n++])}else n++;else e[n++].remove()}}}var bp="_$DX_DELEGATE";function ne(t,e,r){let i,o=()=>{let n=document.createElement("template");return n.innerHTML=t,r?n.content.firstChild.firstChild:n.content.firstChild},s=e?()=>ft(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return s.cloneNode=s,s}function vp(t,e=window.document){let r=e[bp]||(e[bp]=new Set);for(let i=0,o=t.length;i<o;i++){let s=t[i];r.has(s)||(r.add(s),e.addEventListener(s,n_))}}function Tc(t,e,r){Ec(t)||(r==null?t.removeAttribute(e):t.setAttribute(e,r))}function $e(t,e){Ec(t)||(e==null?t.removeAttribute("class"):t.className=e)}function ve(t,e,r,i){if(i)Array.isArray(r)?(t[`$$${e}`]=r[0],t[`$$${e}Data`]=r[1]):t[`$$${e}`]=r;else if(Array.isArray(r)){let o=r[0];t.addEventListener(e,r[0]=s=>o.call(t,r[1],s))}else t.addEventListener(e,r,typeof r!="function"&&r)}function wp(t,e,r){if(!e)return r?Tc(t,"style"):e;let i=t.style;if(typeof e=="string")return i.cssText=e;typeof r=="string"&&(i.cssText=r=void 0),r||(r={}),e||(e={});let o,s;for(s in r)e[s]==null&&i.removeProperty(s),delete r[s];for(s in e)o=e[s],o!==r[s]&&(i.setProperty(s,o),r[s]=o);return r}function ee(t,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return ba(t,e,i,r);ke(o=>ba(t,e(),o,r),i)}function Ec(t){return!!oe.context&&!oe.done&&(!t||t.isConnected)}function n_(t){if(oe.registry&&oe.events&&oe.events.find(([l,c])=>c===t))return;let e=t.target,r=`$$${t.type}`,i=t.target,o=t.currentTarget,s=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),n=()=>{let l=e[r];if(l&&!e.disabled){let c=e[`${r}Data`];if(c!==void 0?l.call(e,c,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&s(e.host),!0},a=()=>{for(;n()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),oe.registry&&!oe.done&&(oe.done=_$HY.done=!0),t.composedPath){let l=t.composedPath();s(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!n());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===o)break}}else a();s(i)}function ba(t,e,r,i,o){let s=Ec(t);if(s){!r&&(r=[...t.childNodes]);let l=[];for(let c=0;c<r.length;c++){let d=r[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)}r=l}for(;typeof r=="function";)r=r();if(e===r)return r;let n=typeof e,a=i!==void 0;if(t=a&&r[0]&&r[0].parentNode||t,n==="string"||n==="number"){if(s||n==="number"&&(e=e.toString(),e===r))return r;if(a){let l=r[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),r=Ao(t,r,i,l)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||n==="boolean"){if(s)return r;r=Ao(t,r,i)}else{if(n==="function")return ke(()=>{let l=e();for(;typeof l=="function";)l=l();r=ba(t,l,r,i)}),()=>r;if(Array.isArray(e)){let l=[],c=r&&Array.isArray(r);if(Cc(l,e,r,o))return ke(()=>r=ba(t,l,r,i,!0)),()=>r;if(s){if(!l.length)return r;if(i===void 0)return r=[...t.childNodes];let d=l[0];if(d.parentNode!==t)return r;let h=[d];for(;(d=d.nextSibling)!==i;)h.push(d);return r=h}if(l.length===0){if(r=Ao(t,r,i),a)return r}else c?r.length===0?yp(t,l,i):s_(t,r,l):(r&&Ao(t),yp(t,l));r=l}else if(e.nodeType){if(s&&e.parentNode)return r=a?[e]:e;if(Array.isArray(r)){if(a)return r=Ao(t,r,i,e);Ao(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function Cc(t,e,r,i){let o=!1;for(let s=0,n=e.length;s<n;s++){let a=e[s],l=r&&r[t.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))o=Cc(t,a,l)||o;else if(c==="function")if(i){for(;typeof a=="function";)a=a();o=Cc(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else t.push(a),o=!0;else{let d=String(a);l&&l.nodeType===3&&l.data===d?t.push(l):t.push(document.createTextNode(d))}}return o}function yp(t,e,r=null){for(let i=0,o=e.length;i<o;i++)t.insertBefore(e[i],r)}function Ao(t,e,r,i){if(r===void 0)return t.textContent="";let o=i||document.createTextNode("");if(e.length){let s=!1;for(let n=e.length-1;n>=0;n--){let a=e[n];if(o!==a){let l=a.parentNode===t;!s&&!n?l?t.replaceChild(o,a):t.insertBefore(o,r):l&&a.remove()}else s=!0}}else t.insertBefore(o,r);return[o]}var A5=Symbol();function a_(t){let e=Object.keys(t),r={};for(let i=0;i<e.length;i++){let[o,s]=Oe(t[e[i]]);Object.defineProperty(r,e[i],{get:o,set(n){s(()=>n)}})}return r}function l_(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let e=t.parentNode;for(;e&&!e._$owner&&!(e.assignedSlot&&e.assignedSlot._$owner);)e=e.parentNode;return e&&e.assignedSlot?e.assignedSlot._$owner:t._$owner}function c_(t){return(e,r)=>{let{element:i}=r;return Ei(o=>{let s=a_(e);i.addPropertyChangedCallback((a,l)=>s[a]=l),i.addReleaseCallback(()=>{i.renderRoot.textContent="",o()});let n=t(s,r);return ee(i.renderRoot,n)},l_(i))}}function _p(t,e,r){return arguments.length===2&&(r=e,e={}),ep(t,e)(c_(r))}var De=la(zo(),1),Qc=De.default,kI=De.default.stringify,SI=De.default.fromJSON,CI=De.default.plugin,TI=De.default.parse,EI=De.default.list,AI=De.default.document,OI=De.default.comment,$I=De.default.atRule,II=De.default.rule,PI=De.default.decl,LI=De.default.root,zI=De.default.CssSyntaxError,RI=De.default.Declaration,DI=De.default.Container,MI=De.default.Processor,NI=De.default.Document,FI=De.default.Comment,UI=De.default.Warning,BI=De.default.AtRule,VI=De.default.Result,jI=De.default.Input,qI=De.default.Rule,HI=De.default.Root,WI=De.default.Node;var Ro=la(am(),1),su=Ro.default,tP=Ro.default.objectify,rP=Ro.default.parse,iP=Ro.default.async,oP=Ro.default.sync;var sd=la(_g()),Ri=(...t)=>t.join(" "),Ga=class{globalStyles;moduleStyles;styleCounter=0;prefix;theme;constructor(e,r="styler"){this.moduleStyles=new Map,this.globalStyles=new Map,this.prefix=r,this.theme=Object.freeze(e)}generateClassName(e){return`${this.prefix}-${e}-${this.styleCounter++}`}withTheme(e){return()=>e(this.theme)}setGlobals(e){if(this.globalStyles.size)throw new Error("gobalStyles can only be set once");for(let[r,i]of Object.entries(e(this.theme)))this.globalStyles.set(r,i)}css(e){let r={};for(let[i,o]of Object.entries(e)){let s=this.generateClassName(i);this.moduleStyles.set(s,o),r[i]=s}return r}resolveGlobals(){let e={};return this.globalStyles.forEach((i,o)=>{e[o]=i}),Qc([sd.default]).process(e,{parser:su}).css}resolveStyles(){let e=[];return this.moduleStyles.forEach((r,i)=>{let o=typeof r=="function"?r(this.theme):r,s={[`.${i}`]:o},n=Qc([sd.default]).process(s,{parser:su});e.push(n.css)}),e.join(`
`)}},xg=(t,e,r={})=>{let i=new FontFace(t,e,r);document.fonts.add(i)};xg("Playwrite HU","url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",{"font-optical-sizing":"auto","font-weight":"400","font-style":"normal"});var WC={colorPrimary:"var(--gifo-color-primary)",colorOnPrimary:"var(--gifo-color-on-primary)",colorAccent:"var(--gifo-color-accent)",fontSizeLg:"2rem",fontSizeMd:"1.2rem",fontSizeSm:"1.0rem",breakPointSm:"600px",gapMd:"var(--sl-spacing-medium)"},Di=new Ga(WC,"gifo");Di.setGlobals(t=>({":root":{"--breakpoint-sm":t.breakPointSm},"::-webkit-scrollbar":{width:"8px",height:"8px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",transition:"background-color 0.2s"},"::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},".scrollable-element":{scrollbarWidth:"thin",scrollbarColor:"rgba(0, 0, 0, 0.5) transparent"},"a, a:hover, a:visited":{textDecoration:"none",color:t.colorOnPrimary},fieldset:{border:"2px solid",borderColor:"var(--gifo-color-primary)",borderRadius:"5px"}}));var ot=Di.css.bind(Di),kg=Di.withTheme.bind(Di),Sg=()=>[Di.resolveGlobals(),Di.resolveStyles()].join(`
`);var Ka="0123456789abcdef",zr=class t{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new t(e)}static fromFieldsV7(e,r,i,o){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(i)||!Number.isInteger(o)||e<0||r<0||i<0||o<0||e>0xffffffffffff||r>4095||i>1073741823||o>4294967295)throw new RangeError("invalid field value");let s=new Uint8Array(16);return s[0]=e/2**40,s[1]=e/2**32,s[2]=e/2**24,s[3]=e/2**16,s[4]=e/2**8,s[5]=e,s[6]=112|r>>>8,s[7]=r,s[8]=128|i>>>24,s[9]=i>>>16,s[10]=i>>>8,s[11]=i,s[12]=o>>>24,s[13]=o>>>16,s[14]=o>>>8,s[15]=o,new t(s)}static parse(e){var r,i,o,s;let n;switch(e.length){case 32:n=(r=/^[0-9a-f]{32}$/i.exec(e))===null||r===void 0?void 0:r[0];break;case 36:n=(i=/^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||i===void 0?void 0:i.slice(1,6).join("");break;case 38:n=(o=/^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(e))===null||o===void 0?void 0:o.slice(1,6).join("");break;case 45:n=(s=/^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||s===void 0?void 0:s.slice(1,6).join("");break;default:break}if(n){let a=new Uint8Array(16);for(let l=0;l<16;l+=4){let c=parseInt(n.substring(2*l,2*l+8),16);a[l+0]=c>>>24,a[l+1]=c>>>16,a[l+2]=c>>>8,a[l+3]=c}return new t(a)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=Ka.charAt(this.bytes[r]>>>4),e+=Ka.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toHex(){let e="";for(let r=0;r<this.bytes.length;r++)e+=Ka.charAt(this.bytes[r]>>>4),e+=Ka.charAt(this.bytes[r]&15);return e}toJSON(){return this.toString()}getVariant(){let e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new t(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){let i=this.bytes[r]-e.bytes[r];if(i!==0)return Math.sign(i)}return 0}},Za=class{constructor(e){this.timestamp=0,this.counter=0,this.random=e??GC()}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let i=this.generateOrAbortCore(e,r);return i===void 0&&(this.timestamp=0,i=this.generateOrAbortCore(e,r)),i}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>=this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return zr.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}generateV4(){let e=new Uint8Array(Uint32Array.of(this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32()).buffer);return e[6]=64|e[6]>>>4,e[8]=128|e[8]>>>2,zr.ofInner(e)}},GC=()=>{if(typeof crypto<"u"&&typeof crypto.getRandomValues<"u")return new nd;if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");return{nextUint32:()=>Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536)}},nd=class{constructor(){this.buffer=new Uint32Array(8),this.cursor=65535}nextUint32(){return this.cursor>=this.buffer.length&&(crypto.getRandomValues(this.buffer),this.cursor=0),this.buffer[this.cursor++]}},Ya;var Cg=()=>(Ya||(Ya=new Za)).generate();var Tg=()=>(Ya||(Ya=new Za)).generateV4();function Eg(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}var Ag=Eg();var KC=Object.defineProperty,ZC=(t,e)=>{for(var r in e)KC(t,r,{get:e[r],enumerable:!0})},YC=class{collectable={};listeners={};interceptors;constructor({interceptors:t}={}){this.interceptors=t??{}}subscribe(t,e,r=!1){if(this.listeners[t]||(this.listeners[t]=[]),!this.isSubscribed(t,e)&&(this.listeners[t]?.push(e),r&&this.collectable[t])){let i=this.collectable[t];this.collectable[t]=[];for(let o of i)e(...o)}}subscribeOnce(t,e=!1){return new Promise(r=>{let i=!1,o=(...s)=>{i||(i=!0,this.unSubscribe(t,o),r(s))};this.subscribe(t,o,e)})}unSubscribe(t,e){if(this.listeners[t]){let r=this.listeners[t]?.findIndex(i=>i===e);r&&this.listeners[t]?.splice(r,1)}}isSubscribed(t,e){return!!this.listeners[t]?.includes(e)}async emit(t,e,r=!1){let i=this.interceptors[t],o=i?await i(...e):e;this.listeners[t]?.length===0&&r&&(this.collectable[t]||(this.collectable[t]=[]),this.collectable[t]?.push(e));for(let s of this.listeners[t]??[])s(...o)}reset({collectable:t,listeners:e}){if(Array.isArray(t))for(let r of t)delete this.collectable[r];else typeof t=="string"?delete this.collectable[t]:t!==!1&&(this.collectable={});if(Array.isArray(e))for(let r of e)delete this.listeners[r];else typeof e=="string"?delete this.listeners[e]:e!==!1&&(this.listeners={})}scanListeners(t){let e=Object.keys(this.listeners);return t&&(e=e.filter(t)),e}},bd=class{args=[];constructor(...t){this.args=t}fill(t){return[this,t]}hasDefault(){return this.args.length===1}get default(){return this.args[0]}},XC={};ZC(XC,{CborBreak:()=>Qa,CborError:()=>Mi,CborFillMissing:()=>pb,CborInvalidMajorError:()=>fl,CborNumberError:()=>ud,CborPartialDisabled:()=>hb,CborRangeError:()=>_r,Encoded:()=>yd,Gap:()=>bd,POW_2_53:()=>JC,POW_2_64:()=>cd,PartiallyEncoded:()=>vd,Reader:()=>dd,Tagged:()=>Ve,Writer:()=>yn,decode:()=>fb,encode:()=>Bo,infiniteBytes:()=>hd,partiallyEncodeObject:()=>wd});var JC=9007199254740992,cd=BigInt(18446744073709552e3),yd=class{constructor(t){this.encoded=t}},ze=class extends Error{},ei=class extends ze{name="NoActiveSocket";message="No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"};var db=class extends ze{name="EngineDisconnected";message="The engine reported the connection to SurrealDB has dropped"},Og=class extends ze{constructor(t){super(),this.response=t,this.message=`${t}`}name="UnexpectedServerResponse"},QC=class extends ze{constructor(t){super(),this.error=t,this.message=`${t}`}name="UnexpectedConnectionError"},e2=class extends ze{constructor(t){super(),this.engine=t}name="UnsupportedEngine";message="The engine you are trying to connect to is not supported or configured."};var ll=class extends ze{name="ConnectionUnavailable";message="There is no connection available at this moment."},t2=class extends ze{name="MissingNamespaceDatabase";message="There is no namespace and/or database selected."},r2=class extends ze{constructor(t,e,r,i){super(),this.message=t,this.status=e,this.statusText=r,this.buffer=i}name="HttpConnectionError"},Be=class extends ze{constructor(t){super(),this.message=t}name="ResponseError"},i2=class extends ze{name="NoNamespaceSpecified";message="Please specify a namespace to use."},o2=class extends ze{name="NoDatabaseSpecified";message="Please specify a database to use."},$g=class extends ze{name="NoTokenReturned";message="Did not receive an authentication token."},s2=class extends ze{name="UnsupportedVersion";version;supportedRange;constructor(t,e){super(),this.version=t,this.supportedRange=e,this.message=`The version "${t}" reported by the engine is not supported by this library, expected a version that satisfies "${e}".`}},Ig=class extends ze{constructor(t){super(),this.error=t}name="VersionRetrievalFailure";message="Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly."},Mi=class extends ze{message;constructor(t){super(),this.message=t}},ud=class extends Mi{name="CborNumberError"},_r=class extends Mi{name="CborRangeError"},fl=class extends Mi{name="CborInvalidMajorError"},Qa=class extends Mi{name="CborBreak";constructor(){super("Came across a break which was not intercepted by the decoder")}},hb=class extends Mi{name="CborPartialDisabled";constructor(){super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled")}},pb=class extends Mi{name="CborFillMissing";constructor(){super("Fill for a gap is missing, and gap has no default")}},yn=class{constructor(t=256){this.byteLength=t,this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf)}_chunks=[];_pos=0;_buf;_view;_byte;chunk(t){this._chunks.push([this._buf.slice(0,this._pos),t]),this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._pos=0}get chunks(){return this._chunks}get buffer(){return this._buf.slice(0,this._pos)}claim(t){let e=this._pos;if(this._pos+=t,this._pos<=this._buf.byteLength)return e;let r=this._buf.byteLength<<1;for(;r<this._pos;)r<<=1;if(r>this._buf.byteLength){let i=this._byte;this._buf=new ArrayBuffer(r),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(i)}return e}writeUint8(t){let e=this.claim(1);this._view.setUint8(e,t)}writeUint16(t){let e=this.claim(2);this._view.setUint16(e,t)}writeUint32(t){let e=this.claim(4);this._view.setUint32(e,t)}writeUint64(t){let e=this.claim(8);this._view.setBigUint64(e,t)}writeUint8Array(t){if(t.byteLength===0)return;let e=this.claim(t.byteLength);this._byte.set(t,e)}writeArrayBuffer(t){t.byteLength!==0&&this.writeUint8Array(new Uint8Array(t))}writePartiallyEncoded(t){for(let[e,r]of t.chunks)this.writeArrayBuffer(e),this.chunk(r);this.writeArrayBuffer(t.end)}writeFloat32(t){let e=this.claim(4);this._view.setFloat32(e,t)}writeFloat64(t){let e=this.claim(8);this._view.setFloat64(e,t)}writeMajor(t,e){let r=t<<5;e<24?this.writeUint8(r+Number(e)):e<256?(this.writeUint8(r+24),this.writeUint8(Number(e))):e<65536?(this.writeUint8(r+25),this.writeUint16(Number(e))):e<4294967296?(this.writeUint8(r+26),this.writeUint32(Number(e))):(this.writeUint8(r+27),this.writeUint64(BigInt(e)))}output(t,e){return t?new vd(this._chunks,this.buffer,e):this.buffer}},vd=class{constructor(t,e,r){this.chunks=t,this.end=e,this.replacer=r}build(t,e){let r=new yn,i=new Map(t);for(let[o,s]of this.chunks){let n=i.has(s)||s.hasDefault();if(!e&&!n)throw new pb;if(r.writeArrayBuffer(o),n){let a=i.get(s)??s.default;Bo(a,{writer:r,replacer:this.replacer})}else r.chunk(s)}return r.writeArrayBuffer(this.end),r.output(!!e,this.replacer)}};function wd(t,e){return Object.fromEntries(Object.entries(t).map(([r,i])=>[r,Bo(i,{...e,partial:!0})]))}var Ve=class{constructor(t,e){this.tag=t,this.value=e}},Pg;function Bo(t,e={}){let r=e.writer??new yn,i=new Map(e.fills??[]);function o(s){let n=e.replacer?e.replacer(s):s;if(n===void 0)return r.writeUint8(247);if(n===null)return r.writeUint8(246);if(n===!0)return r.writeUint8(245);if(n===!1)return r.writeUint8(244);switch(typeof n){case"number":{if(Number.isInteger(n))if(n>=0&&n<=9007199254740992)r.writeMajor(0,n);else if(n<0&&n>=-9007199254740992)r.writeMajor(1,-(n+1));else throw new ud("Number too big to be encoded");else r.writeUint8(251),r.writeFloat64(n);return}case"bigint":{if(n>=0&&n<cd)r.writeMajor(0,n);else if(n<=0&&n>=-cd)r.writeMajor(1,-(n+1n));else throw new ud("BigInt too big to be encoded");return}case"string":{Pg??=new TextEncoder;let a=Pg.encode(n);r.writeMajor(3,a.byteLength),r.writeUint8Array(a);return}default:{if(Array.isArray(n)){r.writeMajor(4,n.length);for(let l of n)o(l);return}if(n instanceof Ve){r.writeMajor(6,n.tag),o(n.value);return}if(n instanceof yd){r.writeArrayBuffer(n.encoded);return}if(n instanceof bd){if(i.has(n))o(i.get(n));else{if(!e.partial)throw new hb;r.chunk(n)}return}if(n instanceof vd){let l=n.build(e.fills??[],e.partial);e.partial?r.writePartiallyEncoded(l):r.writeArrayBuffer(l);return}if(n instanceof Uint8Array||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array||n instanceof Float32Array||n instanceof Float64Array||n instanceof ArrayBuffer){let l=new Uint8Array(n);r.writeMajor(2,l.byteLength),r.writeUint8Array(l);return}let a=n instanceof Map?Array.from(n.entries()):Object.entries(n);r.writeMajor(5,a.length);for(let l of a.flat())o(l)}}}return o(t),r.output(!!e.partial,e.replacer)}var dd=class{_buf;_view;_byte;_pos=0;constructor(t){this._buf=new ArrayBuffer(t.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(new Uint8Array(t))}read(t,e){return this._pos+=t,e}readUint8(){try{return this.read(1,this._view.getUint8(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readUint16(){try{return this.read(2,this._view.getUint16(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readUint32(){try{return this.read(4,this._view.getUint32(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readUint64(){try{return this.read(8,this._view.getBigUint64(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readFloat16(){let t=this.readUint16(),e=(t&32768)>>15,r=(t&31744)>>10,i=t&1023;return r===0?(e?-1:1)*2**-14*(i/2**10):r===31?i?Number.NaN:(e?-1:1)*Number.POSITIVE_INFINITY:(e?-1:1)*2**(r-15)*(1+i/2**10)}readFloat32(){try{return this.read(4,this._view.getFloat32(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readFloat64(){try{return this.read(8,this._view.getFloat64(this._pos))}catch(t){throw t instanceof RangeError?new _r(t.message):t}}readBytes(t){let e=this._byte.length-this._pos;if(e<t)throw new _r(`The argument must be between 0 and ${e}`);return this.read(t,this._byte.slice(this._pos,this._pos+t))}readMajor(){let t=this.readUint8(),e=t>>5;if(e<0||e>7)throw new fl("Received invalid major type");return[e,t&31]}readMajorLength(t){if(t<=23)return t;switch(t){case 24:return this.readUint8();case 25:return this.readUint16();case 26:return this.readUint32();case 27:{let e=this.readUint64();return e>9007199254740992?e:Number(e)}}throw new _r("Expected a final length")}};function hd(t,e){let r=new yn;for(;;){let[i,o]=t.readMajor();if(i===7&&o===31)break;if(i!==e)throw new fl(`Expected a resource of the same major (${e}) while processing an infinite resource`);if(o===31)throw new _r("Expected a finite resource while processing an infinite resource");r.writeUint8Array(t.readBytes(Number(t.readMajorLength(o))))}return r.buffer}var Lg;function fb(t,e={}){let r=t instanceof dd?t:new dd(t);function i(){let[s,n]=r.readMajor();switch(s){case 0:return r.readMajorLength(n);case 1:{let a=r.readMajorLength(n);return typeof a=="bigint"?-(a+1n):-(a+1)}case 2:return n===31?hd(r,2):r.readBytes(Number(r.readMajorLength(n))).buffer;case 3:{let a=n===31?hd(r,3):r.readBytes(Number(r.readMajorLength(n)));return Lg??=new TextDecoder,Lg.decode(a)}case 4:{if(n===31){let c=[];for(;;)try{c.push(o())}catch(d){if(d instanceof Qa)break;throw d}return c}let a=r.readMajorLength(n),l=Array(a);for(let c=0;c<a;c++)l[c]=o();return l}case 5:{let a=[];if(n===31)for(;;){let l;try{l=o()}catch(d){if(d instanceof Qa)break;throw d}let c=o();a.push([l,c])}else{let l=r.readMajorLength(n);for(let c=0;c<l;c++){let d=o(),h=o();a[c]=[d,h]}}return e.map==="map"?new Map(a):Object.fromEntries(a)}case 6:{let a=r.readMajorLength(n),l=o();return new Ve(a,l)}case 7:switch(n){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 25:return r.readFloat16();case 26:return r.readFloat32();case 27:return r.readFloat64();case 31:throw new Qa}}throw new fl(`Unable to decode value with major tag ${s}`)}function o(){return e.replacer?e.replacer(i()):i()}return o()}function n2(t){let e=Math.floor(t.getTime()/1e3),r=t.getTime()-e*1e3;return[e,r*1e6]}function a2([t,e]){let r=new Date(0);return r.setUTCSeconds(Number(t)),r.setMilliseconds(Math.floor(Number(e)/1e6)),r}var Ht=class{},cl=class mb extends Ht{decimal;constructor(e){super(),this.decimal=e.toString()}equals(e){return e instanceof mb?this.decimal===e.decimal:!1}toString(){return this.decimal}toJSON(){return this.decimal}},_d=1,Fo=_d/1e3,pd=Fo/1e3,ul=1e3*_d,dl=60*ul,hl=60*dl,pl=24*hl,fd=7*pl,xd=new Map([["ns",pd],["\xB5s",Fo],["\u03BCs",Fo],["us",Fo],["ms",_d],["s",ul],["m",dl],["h",hl],["d",pl],["w",fd]]),l2=Array.from(xd).reduce((t,[e,r])=>(t.set(r,e),t),new Map),c2=new RegExp(`^(\\d+)(${Array.from(xd.keys()).join("|")})`),el=class Dt extends Ht{_milliseconds;constructor(e){super(),e instanceof Dt?this._milliseconds=e._milliseconds:typeof e=="string"?this._milliseconds=Dt.parseString(e):this._milliseconds=e}static fromCompact([e,r]){e=e??0,r=r??0;let i=e*1e3+r/1e6;return new Dt(i)}equals(e){return e instanceof Dt?this._milliseconds===e._milliseconds:!1}toCompact(){let e=Math.floor(this._milliseconds/1e3),r=Math.floor((this._milliseconds-e*1e3)*1e6);return r>0?[e,r]:e>0?[e]:[]}toString(){let e=this._milliseconds,r="";function i(o){let s=Math.floor(e/o);return s>0&&(e=e%o),s}for(let[o,s]of Array.from(l2).reverse()){let n=i(o);n>0&&(r+=`${n}${s}`)}return r}toJSON(){return this.toString()}static parseString(e){let r=0,i=e;for(;i!=="";){let o=i.match(c2);if(o){let s=Number.parseInt(o[1]),n=xd.get(o[2]);if(n===void 0)throw new ze(`Invalid duration unit: ${o[2]}`);r+=s*n,i=i.slice(o[0].length);continue}throw new ze("Could not match a next duration part")}return r}static nanoseconds(e){return new Dt(Math.floor(e*pd))}static microseconds(e){return new Dt(Math.floor(e*Fo))}static milliseconds(e){return new Dt(e)}static seconds(e){return new Dt(e*ul)}static minutes(e){return new Dt(e*dl)}static hours(e){return new Dt(e*hl)}static days(e){return new Dt(e*pl)}static weeks(e){return new Dt(e*fd)}get microseconds(){return Math.floor(this._milliseconds/Fo)}get nanoseconds(){return Math.floor(this._milliseconds/pd)}get milliseconds(){return Math.floor(this._milliseconds)}get seconds(){return Math.floor(this._milliseconds/ul)}get minutes(){return Math.floor(this._milliseconds/dl)}get hours(){return Math.floor(this._milliseconds/hl)}get days(){return Math.floor(this._milliseconds/pl)}get weeks(){return Math.floor(this._milliseconds/fd)}},md=class gb extends Ht{constructor(e){super(),this.inner=e}equals(e){return e instanceof gb?this.inner===e.inner:!1}toJSON(){return this.toString()}toString(){return`<future> ${this.inner}`}},ii=class bb extends Ht{equals(e){return e instanceof bb?this.is(e):!1}toString(){return JSON.stringify(this.toJSON())}};function zg(t){return t instanceof cl?Number.parseFloat(t.decimal):t}var Rg=class tl extends ii{point;constructor(e){super(),e instanceof tl?this.point=e.clone().point:this.point=[zg(e[0]),zg(e[1])]}toJSON(){return{type:"Point",coordinates:this.coordinates}}get coordinates(){return this.point}is(e){return e instanceof tl?this.point[0]===e.point[0]&&this.point[1]===e.point[1]:!1}clone(){return new tl([...this.point])}},Dg=class rl extends ii{line;constructor(e){super(),this.line=e instanceof rl?e.clone().line:e}toJSON(){return{type:"LineString",coordinates:this.coordinates}}get coordinates(){return this.line.map(e=>e.coordinates)}close(){this.line[0].is(this.line.at(-1))||this.line.push(this.line[0])}is(e){if(!(e instanceof rl)||this.line.length!==e.line.length)return!1;for(let r=0;r<this.line.length;r++)if(!this.line[r].is(e.line[r]))return!1;return!0}clone(){return new rl(this.line.map(e=>e.clone()))}},Mg=class il extends ii{polygon;constructor(e){super(),this.polygon=e instanceof il?e.clone().polygon:e.map(r=>{let i=r.clone();return i.close(),i})}toJSON(){return{type:"Polygon",coordinates:this.coordinates}}get coordinates(){return this.polygon.map(e=>e.coordinates)}is(e){if(!(e instanceof il)||this.polygon.length!==e.polygon.length)return!1;for(let r=0;r<this.polygon.length;r++)if(!this.polygon[r].is(e.polygon[r]))return!1;return!0}clone(){return new il(this.polygon.map(e=>e.clone()))}},Ng=class ol extends ii{points;constructor(e){super(),this.points=e instanceof ol?e.points:e}toJSON(){return{type:"MultiPoint",coordinates:this.coordinates}}get coordinates(){return this.points.map(e=>e.coordinates)}is(e){if(!(e instanceof ol)||this.points.length!==e.points.length)return!1;for(let r=0;r<this.points.length;r++)if(!this.points[r].is(e.points[r]))return!1;return!0}clone(){return new ol(this.points.map(e=>e.clone()))}},Fg=class sl extends ii{lines;constructor(e){super(),this.lines=e instanceof sl?e.lines:e}toJSON(){return{type:"MultiLineString",coordinates:this.coordinates}}get coordinates(){return this.lines.map(e=>e.coordinates)}is(e){if(!(e instanceof sl)||this.lines.length!==e.lines.length)return!1;for(let r=0;r<this.lines.length;r++)if(!this.lines[r].is(e.lines[r]))return!1;return!0}clone(){return new sl(this.lines.map(e=>e.clone()))}},Ug=class nl extends ii{polygons;constructor(e){super(),this.polygons=e instanceof nl?e.polygons:e}toJSON(){return{type:"MultiPolygon",coordinates:this.coordinates}}get coordinates(){return this.polygons.map(e=>e.coordinates)}is(e){if(!(e instanceof nl)||this.polygons.length!==e.polygons.length)return!1;for(let r=0;r<this.polygons.length;r++)if(!this.polygons[r].is(e.polygons[r]))return!1;return!0}clone(){return new nl(this.polygons.map(e=>e.clone()))}},Bg=class al extends ii{collection;constructor(e){super(),this.collection=e instanceof al?e.collection:e}toJSON(){return{type:"GeometryCollection",geometries:this.geometries}}get geometries(){return this.collection.map(e=>e.toJSON())}is(e){if(!(e instanceof al)||this.collection.length!==e.collection.length)return!1;for(let r=0;r<this.collection.length;r++)if(!this.collection[r].is(e.collection[r]))return!1;return!0}clone(){return new al(this.collection.map(e=>e.clone()))}};function Vo(t,e){if(Object.is(t,e))return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.toString()===e.toString();if(t instanceof Ht&&e instanceof Ht)return t.equals(e);if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;let r=Reflect.ownKeys(t),i=Reflect.ownKeys(e);if(r.length!==i.length)return!1;for(let o=0;o<r.length;o++)if(!Reflect.has(e,r[o])||!Vo(t[r[o]],e[r[o]]))return!1;return!0}var u2=9223372036854775807n;function kd(t){if(h2(t))return`\u27E8${t}\u27E9`;let e,r,i;for(r=0,i=t.length;r<i;r++)if(e=t.charCodeAt(r),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123)&&e!==95)return`\u27E8${t.replaceAll("\u27E9","\\\u27E9")}\u27E9`;return t}function d2(t){return t<=u2?t.toString():`\u27E8${t}\u27E9`}function h2(t){let e=t.replace("_",""),r=Number.parseInt(e);return!Number.isNaN(r)&&r.toString()===e}var jo=class mn extends Ht{inner;constructor(e){super(),e instanceof ArrayBuffer?this.inner=zr.ofInner(new Uint8Array(e)):e instanceof Uint8Array?this.inner=zr.ofInner(e):e instanceof mn?this.inner=e.inner:e instanceof zr?this.inner=e:this.inner=zr.parse(e)}equals(e){return e instanceof mn?this.inner.equals(e.inner):!1}toString(){return this.inner.toString()}toJSON(){return this.inner.toString()}toUint8Array(){return this.inner.bytes}toBuffer(){return this.inner.bytes.buffer}static v4(){return new mn(Tg())}static v7(){return new mn(Cg())}},bn=class yb extends Ht{tb;id;constructor(e,r){if(super(),typeof e!="string")throw new ze("TB part is not valid");if(!vb(r))throw new ze("ID part is not valid");this.tb=e,this.id=r}equals(e){return e instanceof yb?this.tb===e.tb&&Vo(this.id,e.id):!1}toJSON(){return this.toString()}toString(){let e=kd(this.tb),r=wb(this.id);return`${e}:${r}`}},Sd=class gd extends Ht{rid;constructor(e){if(super(),e instanceof gd)this.rid=e.rid;else if(e instanceof bn)this.rid=e.toString();else if(typeof e=="string")this.rid=e;else throw new ze("String Record ID must be a string")}equals(e){return e instanceof gd?this.rid===e.rid:!1}toJSON(){return this.rid}toString(){return this.rid}};function vb(t){if(t instanceof jo)return!0;switch(typeof t){case"string":case"number":case"bigint":return!0;case"object":return Array.isArray(t)||t!==null;default:return!1}}function wb(t){return t instanceof jo?`u"${t}"`:typeof t=="string"?kd(t):typeof t=="bigint"||typeof t=="number"?d2(t):ri(t)}var Uo=class _b extends Ht{tb;constructor(e){if(super(),typeof e!="string")throw new ze("Table must be a string");this.tb=e}equals(e){return e instanceof _b?this.tb===e.tb:!1}toJSON(){return this.tb}toString(){return this.tb}};function ri(t){if(typeof t=="string")return`s${JSON.stringify(t)}`;if(t===null)return"NULL";if(t===void 0)return"NONE";if(typeof t=="object"){if(t instanceof Date)return`d${JSON.stringify(t.toISOString())}`;if(t instanceof jo)return`u${JSON.stringify(t.toString())}`;if(t instanceof bn||t instanceof Sd)return`r${JSON.stringify(t.toString())}`;if(t instanceof ii)return ri(t.toJSON());if(t instanceof cl||t instanceof el||t instanceof md||t instanceof gn||t instanceof Uo)return t.toJSON();switch(Object.getPrototypeOf(t)){case Object.prototype:{let e="{ ",r=Object.entries(t);for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${ri(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Map.prototype:{let e="{ ",r=Array.from(t.entries());for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${ri(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Array.prototype:return`[ ${t.map(ri).join(", ")} ]`;case Set.prototype:return`[ ${[...new Set([...t].map(ri))].join(", ")} ]`}}return`${t}`}var gn=class xb extends Ht{constructor(e,r){super(),this.beg=e,this.end=r}equals(e){return!(e instanceof xb)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:Vo(this.beg?.value,e.beg?.value)&&Vo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Hg(this.beg),r=Hg(this.end);return`${e}${Sb(this.beg,this.end)}${r}`}},vn=class{constructor(t){this.value=t}},wn=class{constructor(t){this.value=t}},Vg=class kb extends Ht{constructor(e,r,i){if(super(),this.tb=e,this.beg=r,this.end=i,typeof e!="string")throw new ze("TB part is not valid");if(!jg(r))throw new ze("Beg part is not valid");if(!jg(i))throw new ze("End part is not valid")}equals(e){return!(e instanceof kb)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:this.tb===e.tb&&Vo(this.beg?.value,e.beg?.value)&&Vo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=kd(this.tb),r=qg(this.beg),i=qg(this.end);return`${e}:${r}${Sb(this.beg,this.end)}${i}`}};function Sb(t,e){let r="";return t instanceof wn&&(r+=">"),r+="..",e instanceof vn&&(r+="="),r}function jg(t){return t instanceof vn||t instanceof wn?vb(t.value):!0}function qg(t){return t instanceof vn||t instanceof wn?wb(t.value):""}function Hg(t){if(t===void 0)return"";let e=t.value;return t instanceof gn?`(${ri(e)})`:ri(e)}function Wg([t,e]){function r(i){return i instanceof vn?new Ve(Cb,i.value):i instanceof wn?new Ve(Tb,i.value):null}return[r(t),r(e)]}function p2(t){function e(r){if(r!==null){if(r.tag===Cb)return new vn(r.value);if(r.tag===Tb)return new wn(r.value);throw new ze("Invalid bound tag")}}return[e(t[0]),e(t[1])]}var f2=0,Gg=37,Kg=6,Zg=7,Xa=8,m2=9,Yg=10,Xg=12,g2=13,Jg=14,Qg=15,ad=49,Cb=50,Tb=51,eb=88,tb=89,rb=90,ib=91,ob=92,sb=93,nb=94,qo={encode(t){return t instanceof Date?new Ve(Xg,n2(t)):t===void 0?new Ve(Kg,null):t instanceof jo?new Ve(Gg,t.toBuffer()):t instanceof cl?new Ve(Yg,t.toString()):t instanceof el?new Ve(Jg,t.toCompact()):t instanceof bn?new Ve(Xa,[t.tb,t.id]):t instanceof Sd?new Ve(Xa,t.rid):t instanceof Vg?new Ve(Xa,[t.tb,new Ve(ad,Wg([t.beg,t.end]))]):t instanceof Uo?new Ve(Zg,t.tb):t instanceof md?new Ve(Qg,t.inner):t instanceof gn?new Ve(ad,Wg([t.beg,t.end])):t instanceof Rg?new Ve(eb,t.point):t instanceof Dg?new Ve(tb,t.line):t instanceof Mg?new Ve(rb,t.polygon):t instanceof Ng?new Ve(ib,t.points):t instanceof Fg?new Ve(ob,t.lines):t instanceof Ug?new Ve(sb,t.polygons):t instanceof Bg?new Ve(nb,t.collection):t},decode(t){if(!(t instanceof Ve))return t;switch(t.tag){case f2:return new Date(t.value);case Gg:case m2:return new jo(t.value);case Xg:return a2(t.value);case Kg:return;case Yg:return new cl(t.value);case g2:return new el(t.value);case Jg:return el.fromCompact(t.value);case Zg:return new Uo(t.value);case Qg:return new md(t.value);case ad:return new gn(...p2(t.value));case Xa:return t.value[1]instanceof gn?new Vg(t.value[0],t.value[1].beg,t.value[1].end):new bn(t.value[0],t.value[1]);case eb:return new Rg(t.value);case tb:return new Dg(t.value);case rb:return new Mg(t.value);case ib:return new Ng(t.value);case ob:return new Fg(t.value);case sb:return new Ug(t.value);case nb:return new Bg(t.value)}}};Object.freeze(qo);function b2(t){return Bo(t,{replacer:qo.encode})}function y2(t){return fb(t,{replacer:qo.decode})}var Ja,v2=class{_query;_bindings;length;constructor(t,e){Ja??=new TextEncoder,this._query=Ja.encode(t),this._bindings=wd(e??{},{replacer:qo.encode}),this.length=Object.keys(this._bindings).length}get query(){let t=new yn(this._query.byteLength+9);return t.writeMajor(3,this._query.byteLength),t.writeUint8Array(this._query),new yd(t.output(!1))}get bindings(){return this._bindings}build(t){return Bo([this.query,this.bindings],{fills:t})}append(t,...e){let r=this.length;this.length+=e.length;let i=0,o=new Map,s=e.map((c,d)=>{if(c instanceof bd){let h=o.get(c);if(h!==void 0)return i++,[`bind___${h}`,c];o.set(c,d-i)}return[`bind___${r+d-i}`,c]});for(let[c,d]of s)this._bindings[c]=Bo(d,{replacer:qo.encode,partial:!0});let n=t.flatMap((c,d)=>{let h=s[d]?.[0];return[c,...h?[`$${h}`]:[]]}).join("");Ja??=new TextEncoder;let a=new Uint8Array(this._query),l=Ja.encode(n);return this._query=new Uint8Array(a.byteLength+l.byteLength),this._query.set(a),this._query.set(l,a.byteLength),this}};function ab(t){let e={},r=(i,o,s)=>{if(i in t)e[o]=`${t[i]}`,delete e[i];else if(s!==!0)throw new ze(`Key ${i} is missing from the authentication parameters`)};return"scope"in t?(e={...t},r("scope","sc"),r("namespace","ns"),r("database","db")):"variables"in t?(e={...t.variables},r("access","ac"),r("namespace","ns"),r("database","db")):(r("access","ac",!0),r("database","db",!0),r("namespace","ns",!("database"in t)),r("username","user"),r("password","pass")),e}var w2=["CREATE","UPDATE","DELETE"];function _2(t){return!(typeof t!="object"||t===null||!("id"in t&&"action"in t&&"result"in t)||!(t.id instanceof jo)||!w2.includes(t.action)||typeof t.result!="object"||t.result===null)}var x2=5e3,Cd="1.4.2",Td="3.0.0",EP=`>= ${Cd} < ${Td}`;function k2(t,e=Cd,r=Td){if(!S2(t,e,r))throw new s2(t,`>= ${e} < ${r}`);return!0}function S2(t,e=Cd,r=Td){return e.localeCompare(t,void 0,{numeric:!0})<=0&&r.localeCompare(t,void 0,{numeric:!0})===1}async function Eb(t,e){let r={"ws:":"http:","wss:":"https:","http:":"http:","https:":"https:"}[t.protocol];if(r){let i=t.pathname.slice(0,-4);t=new URL(t),t.pathname=`${i}/version`,t.protocol=r;let o=new AbortController,s=setTimeout(()=>o.abort(),e??x2),n="surrealdb-";return await fetch(t,{signal:o.signal}).then(a=>a.text()).then(a=>a.slice(n.length)).catch(a=>{throw new Ig(a)}).finally(()=>{clearTimeout(s)})}throw new Ig}var ld=0;function Ab(){return ld=(ld+1)%Number.MAX_SAFE_INTEGER,ld.toString()}var C2=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t.Error="error",t))(C2||{}),T2=class{emitter;encodeCbor;decodeCbor;constructor({emitter:t,encodeCbor:e,decodeCbor:r}){this.emitter=t,this.encodeCbor=e,this.decodeCbor=r}},Ob=class{context;ready;status="disconnected";connection={url:void 0,namespace:void 0,database:void 0,token:void 0};constructor(t){this.context=t}get emitter(){return this.context.emitter}get encodeCbor(){return this.context.encodeCbor}get decodeCbor(){return this.context.decodeCbor}async req_post(t,e,r){let i={"Content-Type":"application/cbor",Accept:"application/cbor",...r};this.connection.namespace&&(i["Surreal-NS"]=this.connection.namespace),this.connection.database&&(i["Surreal-DB"]=this.connection.database),this.connection.token&&(i.Authorization=`Bearer ${this.connection.token}`);let o=await fetch(`${e??this.connection.url}`,{method:"POST",headers:i,body:this.encodeCbor(t)}),s=await o.arrayBuffer();if(o.status===200)return s;let n=new TextDecoder("utf-8");throw new r2(n.decode(s),o.status,o.statusText,s)}};function lb(t,e){if("scope"in t||"access"in t&&"variables"in t&&t.variables){if(!t.namespace){if(!e?.namespace)throw new i2;t.namespace=e.namespace}if(!t.database){if(!e?.database)throw new o2;t.database=e.database}}return t}var E2=new Set(["signin","signup","authenticate","invalidate","version","use","let","unset","query"]),cb=class extends Ob{connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}};setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}version(t,e){return Eb(t,e)}connect(t){return this.setStatus("connecting"),this.connection.url=t,this.setStatus("connected"),this.ready=new Promise(e=>e()),this.ready}disconnect(){return this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}},this.ready=void 0,this.setStatus("disconnected"),new Promise(t=>t())}async rpc(t){if(await this.ready,!this.connection.url)throw new ll;if((!this.connection.namespace||!this.connection.database)&&!E2.has(t.method))throw new t2;if(t.method==="use"){let[o,s]=t.params;return o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s),{result:!0}}if(t.method==="let"){let[o,s]=t.params;return this.connection.variables[o]=s,{result:!0}}if(t.method==="unset"){let[o]=t.params;return delete this.connection.variables[o],{result:!0}}t.method==="query"&&(t.params=[t.params?.[0],{...this.connection.variables,...t.params?.[1]??{}}]);let e=Ab(),r=await this.req_post({id:e,...t}),i=this.decodeCbor(r);if("result"in i)switch(t.method){case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return this.emitter.emit(`rpc-${e}`,[i]),i}get connected(){return!!this.connection.url}async export(t){if(!this.connection.url)throw new ll;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},ub=class extends Ob{pinger;socket;constructor(t){super(t),this.emitter.subscribe("disconnected",()=>this.pinger?.stop())}setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}async requireStatus(t){return this.status!==t&&await this.emitter.subscribeOnce(t),!0}version(t,e){return Eb(t,e)}async connect(t){this.connection.url=t,this.setStatus("connecting");let e=new Ag(t.toString(),"cbor"),r=new Promise((i,o)=>{e.addEventListener("open",()=>{this.setStatus("connected"),i()}),e.addEventListener("error",s=>{let n=new QC("detail"in s?s.detail:"error"in s?s.error:"An unexpected error occurred");this.setStatus("error",n),o(n)}),e.addEventListener("close",()=>{this.setStatus("disconnected")}),e.addEventListener("message",async({data:s})=>{try{let n=this.decodeCbor(s instanceof ArrayBuffer?s:s instanceof Blob?await s.arrayBuffer():s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength));if(typeof n=="object"&&n!=null&&Object.getPrototypeOf(n)===Object.prototype)this.handleRpcResponse(n);else throw new Og(n)}catch(n){e.dispatchEvent(new CustomEvent("error",{detail:n}))}})});return this.ready=r,await r.then(()=>{this.socket=e,this.pinger?.stop(),this.pinger=new A2(3e4),this.pinger.start(()=>this.rpc({method:"ping"}))})}async disconnect(){this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0},await this.ready?.catch(()=>{}),this.socket?.close(),this.ready=void 0,this.socket=void 0,await Promise.any([this.requireStatus("disconnected"),this.requireStatus("error")])}async rpc(t){if(await this.ready,!this.socket)throw new ll;let e=Ab(),r=this.emitter.subscribeOnce(`rpc-${e}`);this.socket.send(this.encodeCbor({id:e,...t}));let[i]=await r;if(i instanceof db)throw i;if("result"in i)switch(t.method){case"use":{let[o,s]=t.params;o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s);break}case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return i}handleRpcResponse({id:t,...e}){if(t)this.emitter.emit(`rpc-${t}`,[e]);else if(e.error)this.setStatus("error",new Be(e.error));else if(_2(e.result)){let{id:r,action:i,result:o}=e.result;this.emitter.emit(`live-${r}`,[i,o],!0)}else this.setStatus("error",new Og({id:t,...e}))}get connected(){return!!this.socket}async export(t){if(!this.connection.url)throw new ll;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.protocol=e.protocol.replace("ws","http"),e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},A2=class{pinger;interval;constructor(t=3e4){this.interval=t}start(t){this.pinger=setInterval(t,this.interval)}stop(){clearInterval(this.pinger)}},$b=class{connection;ready;emitter;engines={ws:ub,wss:ub,http:cb,https:cb};constructor({engines:t}={}){this.emitter=new YC,this.emitter.subscribe("disconnected",()=>this.clean()),this.emitter.subscribe("error",()=>this.close()),t&&(this.engines={...this.engines,...t})}async connect(t,e={}){t=new URL(t),t.pathname.endsWith("/rpc")||(t.pathname.endsWith("/")||(t.pathname+="/"),t.pathname+="rpc");let r=t.protocol.slice(0,-1),i=this.engines[r];if(!i)throw new e2(r);let{prepare:o,auth:s,namespace:n,database:a}=e;await this.close();let l=new T2({emitter:this.emitter,encodeCbor:b2,decodeCbor:y2}),c=new i(l);if(e.versionCheck!==!1){let d=await c.version(t,e.versionCheckTimeout);k2(d)}return this.connection=c,this.ready=new Promise((d,h)=>c.connect(t).then(async()=>{(n||a)&&await this.use({namespace:n,database:a}),typeof s=="string"?await this.authenticate(s):s&&await this.signin(s),await o?.(this),d()}).catch(h)),await this.ready,!0}async close(){return this.clean(),await this.connection?.disconnect(),!0}clean(){let t=this.emitter.scanListeners(r=>r.startsWith("rpc-"));t.map(r=>this.emitter.emit(r,[new db]));let e=this.emitter.scanListeners(r=>r.startsWith("live-"));e.map(r=>this.emitter.emit(r,["CLOSE","disconnected"])),this.emitter.reset({collectable:!0,listeners:[...t,...e]})}get status(){return this.connection?.status??"disconnected"}async ping(){let{error:t}=await this.rpc("ping");if(t)throw new Be(t.message);return!0}async use({namespace:t,database:e}){if(!this.connection)throw new ei;if(t===null&&e!==null)throw new ze("Cannot unset namespace without unsetting database");let{error:r}=await this.rpc("use",[t,e]);if(r)throw new Be(r.message);return!0}async info(){await this.ready;let t=await this.rpc("info");if(t.error)throw new Be(t.error.message);return t.result??void 0}async signup(t){if(!this.connection)throw new ei;let e=lb(t,this.connection.connection),r=ab(e),i=await this.rpc("signup",[r]);if(i.error)throw new Be(i.error.message);if(!i.result)throw new $g;return i.result}async signin(t){if(!this.connection)throw new ei;let e=lb(t,this.connection.connection),r=ab(e),i=await this.rpc("signin",[r]);if(i.error)throw new Be(i.error.message);if(!i.result)throw new $g;return i.result}async authenticate(t){let e=await this.rpc("authenticate",[t]);if(e.error)throw new Be(e.error.message);return!0}async invalidate(){let t=await this.rpc("invalidate");if(t.error)throw new Be(t.error.message);return!0}async let(t,e){let r=await this.rpc("let",[t,e]);if(r.error)throw new Be(r.error.message);return!0}async unset(t){let e=await this.rpc("unset",[t]);if(e.error)throw new Be(e.error.message);return!0}async live(t,e,r){await this.ready;let i=await this.rpc("live",[t,r]);if(i.error)throw new Be(i.error.message);return e&&this.subscribeLive(i.result,e),i.result}async subscribeLive(t,e){if(await this.ready,!this.connection)throw new ei;this.connection.emitter.subscribe(`live-${t}`,e,!0)}async unSubscribeLive(t,e){if(await this.ready,!this.connection)throw new ei;this.connection.emitter.unSubscribe(`live-${t}`,e)}async kill(t){if(await this.ready,!this.connection)throw new ei;if(Array.isArray(t)){await Promise.all(t.map(r=>this.rpc("kill",[r])));let e=t.map(r=>`live-${r}`);e.map(r=>this.emitter.emit(r,["CLOSE","killed"])),this.connection.emitter.reset({collectable:e,listeners:e})}else await this.rpc("kill",[t]),this.emitter.emit(`live-${t}`,["CLOSE","killed"]),this.connection.emitter.reset({collectable:`live-${t}`,listeners:`live-${t}`})}async query(...t){return(await this.queryRaw(...t)).map(({status:e,result:r})=>{if(e==="ERR")throw new Be(r);return r})}async queryRaw(...[t,e]){let r=t instanceof v2?[t.query,wd(t.bindings,{fills:e,replacer:qo.encode})]:[t,e];await this.ready;let i=await this.rpc("query",r);if(i.error)throw new Be(i.error.message);return i.result}async query_raw(...t){return this.queryRaw(...t)}async select(t){await this.ready;let e=await this.rpc("select",[t]);if(e.error)throw new Be(e.error.message);return ti(t,e.result)}async create(t,e){await this.ready;let r=await this.rpc("create",[t,e]);if(r.error)throw new Be(r.error.message);return ti(t,r.result)}async insert(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Uo?[t,e]:[void 0,t],o=await this.rpc("insert",[r,i]);if(o.error)throw new Be(o.error.message);return o.result}async insertRelation(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Uo?[t,e]:[void 0,t],o=await this.rpc("insert_relation",[r,i]);if(o.error)throw new Be(o.error.message);return o.result}async insert_relation(t,e){return t instanceof Uo||typeof t=="string"?this.insertRelation(t,e):this.insertRelation(t)}async update(t,e){await this.ready;let r=await this.rpc("update",[t,e]);if(r.error)throw new Be(r.error.message);return ti(t,r.result)}async upsert(t,e){await this.ready;let r=await this.rpc("upsert",[t,e]);if(r.error)throw new Be(r.error.message);return ti(t,r.result)}async merge(t,e){await this.ready;let r=await this.rpc("merge",[t,e]);if(r.error)throw new Be(r.error.message);return ti(t,r.result)}async patch(t,e,r){await this.ready;let i=await this.rpc("patch",[t,e,r]);if(i.error)throw new Be(i.error.message);return r?i.result:ti(t,i.result)}async delete(t){await this.ready;let e=await this.rpc("delete",[t]);if(e.error)throw new Be(e.error.message);return ti(t,e.result)}async version(){await this.ready;let t=await this.rpc("version");if(t.error)throw new Be(t.error.message);return t.result}async run(t,e,r){await this.ready;let[i,o]=Array.isArray(e)?[void 0,e]:[e,r],s=await this.rpc("run",[t,i,o]);if(s.error)throw new Be(s.error.message);return s.result}async relate(t,e,r,i){await this.ready;let o=await this.rpc("relate",[t,e,r,i]);if(o.error)throw new Be(o.error.message);return ti(e,o.result)}rpc(t,e){if(!this.connection)throw new ei;return this.connection.rpc({method:t,params:e})}async export(t){if(await this.ready,!this.connection)throw new ei;return this.connection.export(t)}};function ti(t,e){return t instanceof bn||t instanceof Sd?Array.isArray(e)?e[0]:e:Array.isArray(e)?e:[e]}var ge;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function r(o){throw new Error}t.assertNever=r,t.arrayToEnum=o=>{let s={};for(let n of o)s[n]=n;return s},t.getValidEnumValues=o=>{let s=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),n={};for(let a of s)n[a]=o[a];return t.objectValues(n)},t.objectValues=o=>t.objectKeys(o).map(function(s){return o[s]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let s=[];for(let n in o)Object.prototype.hasOwnProperty.call(o,n)&&s.push(n);return s},t.find=(o,s)=>{for(let n of o)if(s(n))return n},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,s=" | "){return o.map(n=>typeof n=="string"?`'${n}'`:n).join(s)}t.joinValues=i,t.jsonStringifyReplacer=(o,s)=>typeof s=="bigint"?s.toString():s})(ge||(ge={}));var Ad;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(Ad||(Ad={}));var j=ge.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Dr=t=>{switch(typeof t){case"undefined":return j.undefined;case"string":return j.string;case"number":return isNaN(t)?j.nan:j.number;case"boolean":return j.boolean;case"function":return j.function;case"bigint":return j.bigint;case"symbol":return j.symbol;case"object":return Array.isArray(t)?j.array:t===null?j.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?j.promise:typeof Map<"u"&&t instanceof Map?j.map:typeof Set<"u"&&t instanceof Set?j.set:typeof Date<"u"&&t instanceof Date?j.date:j.object;default:return j.unknown}},I=ge.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),O2=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),Mt=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){let r=e||function(s){return s.message},i={_errors:[]},o=s=>{for(let n of s.issues)if(n.code==="invalid_union")n.unionErrors.map(o);else if(n.code==="invalid_return_type")o(n.returnTypeError);else if(n.code==="invalid_arguments")o(n.argumentsError);else if(n.path.length===0)i._errors.push(r(n));else{let a=i,l=0;for(;l<n.path.length;){let c=n.path[l];l===n.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(r(n))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),i}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ge.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){let r={},i=[];for(let o of this.issues)o.path.length>0?(r[o.path[0]]=r[o.path[0]]||[],r[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}};Mt.create=t=>new Mt(t);var Go=(t,e)=>{let r;switch(t.code){case I.invalid_type:t.received===j.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case I.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,ge.jsonStringifyReplacer)}`;break;case I.unrecognized_keys:r=`Unrecognized key(s) in object: ${ge.joinValues(t.keys,", ")}`;break;case I.invalid_union:r="Invalid input";break;case I.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ge.joinValues(t.options)}`;break;case I.invalid_enum_value:r=`Invalid enum value. Expected ${ge.joinValues(t.options)}, received '${t.received}'`;break;case I.invalid_arguments:r="Invalid function arguments";break;case I.invalid_return_type:r="Invalid function return type";break;case I.invalid_date:r="Invalid date";break;case I.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:ge.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case I.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case I.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case I.custom:r="Invalid input";break;case I.invalid_intersection_types:r="Intersection results could not be merged";break;case I.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case I.not_finite:r="Number must be finite";break;default:r=e.defaultError,ge.assertNever(t)}return{message:r}},Lb=Go;function $2(t){Lb=t}function ml(){return Lb}var gl=t=>{let{data:e,path:r,errorMaps:i,issueData:o}=t,s=[...r,...o.path||[]],n={...o,path:s};if(o.message!==void 0)return{...o,path:s,message:o.message};let a="",l=i.filter(c=>!!c).slice().reverse();for(let c of l)a=c(n,{data:e,defaultError:a}).message;return{...o,path:s,message:a}},I2=[];function U(t,e){let r=ml(),i=gl({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===Go?void 0:Go].filter(o=>!!o)});t.common.issues.push(i)}var mt=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let i=[];for(let o of r){if(o.status==="aborted")return re;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){let i=[];for(let o of r){let s=await o.key,n=await o.value;i.push({key:s,value:n})}return t.mergeObjectSync(e,i)}static mergeObjectSync(e,r){let i={};for(let o of r){let{key:s,value:n}=o;if(s.status==="aborted"||n.status==="aborted")return re;s.status==="dirty"&&e.dirty(),n.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof n.value<"u"||o.alwaysSet)&&(i[s.value]=n.value)}return{status:e.value,value:i}}},re=Object.freeze({status:"aborted"}),Wo=t=>({status:"dirty",value:t}),bt=t=>({status:"valid",value:t}),Od=t=>t.status==="aborted",$d=t=>t.status==="dirty",Ni=t=>t.status==="valid",kn=t=>typeof Promise<"u"&&t instanceof Promise;function bl(t,e,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(t):i?i.value:e.get(t)}function zb(t,e,r,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(t,r):o?o.value=r:e.set(t,r),r}var Z;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(Z||(Z={}));var _n,xn,Gt=class{constructor(e,r,i,o){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Ib=(t,e)=>{if(Ni(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new Mt(t.common.issues);return this._error=r,this._error}}};function ae(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:i,description:o}=t;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(n,a)=>{var l,c;let{message:d}=t;return n.code==="invalid_enum_value"?{message:d??a.defaultError}:typeof a.data>"u"?{message:(l=d??i)!==null&&l!==void 0?l:a.defaultError}:n.code!=="invalid_type"?{message:a.defaultError}:{message:(c=d??r)!==null&&c!==void 0?c:a.defaultError}},description:o}}var le=class{get description(){return this._def.description}_getType(e){return Dr(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mt,ctx:{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if(kn(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){var i;let o={common:{issues:[],async:(i=r?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},s=this._parseSync({data:e,path:o.path,parent:o});return Ib(o,s)}"~validate"(e){var r,i;let o={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)};if(!this["~standard"].async)try{let s=this._parseSync({data:e,path:[],parent:o});return Ni(s)?{value:s.value}:{issues:o.common.issues}}catch(s){!((i=(r=s?.message)===null||r===void 0?void 0:r.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),o.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:o}).then(s=>Ni(s)?{value:s.value}:{issues:o.common.issues})}async parseAsync(e,r){let i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){let i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},o=this._parse({data:e,path:i.path,parent:i}),s=await(kn(o)?o:Promise.resolve(o));return Ib(i,s)}refine(e,r){let i=o=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(o):r;return this._refinement((o,s)=>{let n=e(o),a=()=>s.addIssue({code:I.custom,...i(o)});return typeof Promise<"u"&&n instanceof Promise?n.then(l=>l?!0:(a(),!1)):n?!0:(a(),!1)})}refinement(e,r){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof r=="function"?r(i,o):r),!1))}_refinement(e){return new Nt({schema:this,typeName:te.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Wt.create(this,this._def)}nullable(){return kr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Nr.create(this)}promise(){return ni.create(this,this._def)}or(e){return Hi.create([this,e],this._def)}and(e){return Wi.create(this,e,this._def)}transform(e){return new Nt({...ae(this._def),schema:this,typeName:te.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let r=typeof e=="function"?e:()=>e;return new Xi({...ae(this._def),innerType:this,defaultValue:r,typeName:te.ZodDefault})}brand(){return new Sn({typeName:te.ZodBranded,type:this,...ae(this._def)})}catch(e){let r=typeof e=="function"?e:()=>e;return new Ji({...ae(this._def),innerType:this,catchValue:r,typeName:te.ZodCatch})}describe(e){let r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Cn.create(this,e)}readonly(){return Qi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},P2=/^c[^\s-]{8,}$/i,L2=/^[0-9a-z]+$/,z2=/^[0-9A-HJKMNP-TV-Z]{26}$/i,R2=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,D2=/^[a-z0-9_-]{21}$/i,M2=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,N2=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,F2=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,U2="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Ed,B2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,V2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,j2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,q2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,H2=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,W2=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Rb="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",G2=new RegExp(`^${Rb}$`);function Db(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function K2(t){return new RegExp(`^${Db(t)}$`)}function Mb(t){let e=`${Rb}T${Db(t)}`,r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function Z2(t,e){return!!((e==="v4"||!e)&&B2.test(t)||(e==="v6"||!e)&&j2.test(t))}function Y2(t,e){if(!M2.test(t))return!1;try{let[r]=t.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),o=JSON.parse(atob(i));return!(typeof o!="object"||o===null||!o.typ||!o.alg||e&&o.alg!==e)}catch{return!1}}function X2(t,e){return!!((e==="v4"||!e)&&V2.test(t)||(e==="v6"||!e)&&q2.test(t))}var oi=class t extends le{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==j.string){let s=this._getOrReturnCtx(e);return U(s,{code:I.invalid_type,expected:j.string,received:s.parsedType}),re}let i=new mt,o;for(let s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){let n=e.data.length>s.value,a=e.data.length<s.value;(n||a)&&(o=this._getOrReturnCtx(e,o),n?U(o,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&U(o,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")F2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"email",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Ed||(Ed=new RegExp(U2,"u")),Ed.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"emoji",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")R2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"uuid",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")D2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"nanoid",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")P2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")L2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid2",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")z2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ulid",code:I.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),U(o,{validation:"url",code:I.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"regex",code:I.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?Mb(s).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?G2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?K2(s).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:I.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?N2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"duration",code:I.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?Z2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ip",code:I.invalid_string,message:s.message}),i.dirty()):s.kind==="jwt"?Y2(e.data,s.alg)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"jwt",code:I.invalid_string,message:s.message}),i.dirty()):s.kind==="cidr"?X2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cidr",code:I.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?H2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"base64",code:I.invalid_string,message:s.message}),i.dirty()):s.kind==="base64url"?W2.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"base64url",code:I.invalid_string,message:s.message}),i.dirty()):ge.assertNever(s);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(o=>e.test(o),{validation:r,code:I.invalid_string,...Z.errToObj(i)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Z.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Z.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Z.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Z.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Z.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Z.errToObj(e)})}datetime(e){var r,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...Z.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Z.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Z.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...Z.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...Z.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...Z.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...Z.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...Z.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...Z.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...Z.errToObj(r)})}nonempty(e){return this.min(1,Z.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};oi.create=t=>{var e;return new oi({checks:[],typeName:te.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};function J2(t,e){let r=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=r>i?r:i,s=parseInt(t.toFixed(o).replace(".","")),n=parseInt(e.toFixed(o).replace(".",""));return s%n/Math.pow(10,o)}var Fi=class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==j.number){let s=this._getOrReturnCtx(e);return U(s,{code:I.invalid_type,expected:j.number,received:s.parsedType}),re}let i,o=new mt;for(let s of this._def.checks)s.kind==="int"?ge.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),U(i,{code:I.invalid_type,expected:"integer",received:"float",message:s.message}),o.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="multipleOf"?J2(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),U(i,{code:I.not_finite,message:s.message}),o.dirty()):ge.assertNever(s);return{status:o.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,Z.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Z.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Z.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Z.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Z.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Z.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:Z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Z.toString(e)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ge.isInteger(e.value))}get isFinite(){let e=null,r=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}};Fi.create=t=>new Fi({checks:[],typeName:te.ZodNumber,coerce:t?.coerce||!1,...ae(t)});var Ui=class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==j.bigint)return this._getInvalidInput(e);let i,o=new mt;for(let s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),U(i,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):ge.assertNever(s);return{status:o.value,value:e.data}}_getInvalidInput(e){let r=this._getOrReturnCtx(e);return U(r,{code:I.invalid_type,expected:j.bigint,received:r.parsedType}),re}gte(e,r){return this.setLimit("min",e,!0,Z.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Z.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Z.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Z.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Z.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(r)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};Ui.create=t=>{var e;return new Ui({checks:[],typeName:te.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};var Bi=class extends le{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==j.boolean){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.boolean,received:i.parsedType}),re}return bt(e.data)}};Bi.create=t=>new Bi({typeName:te.ZodBoolean,coerce:t?.coerce||!1,...ae(t)});var Vi=class t extends le{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==j.date){let s=this._getOrReturnCtx(e);return U(s,{code:I.invalid_type,expected:j.date,received:s.parsedType}),re}if(isNaN(e.data.getTime())){let s=this._getOrReturnCtx(e);return U(s,{code:I.invalid_date}),re}let i=new mt,o;for(let s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:I.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:I.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):ge.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:Z.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:Z.toString(r)})}get minDate(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}};Vi.create=t=>new Vi({checks:[],coerce:t?.coerce||!1,typeName:te.ZodDate,...ae(t)});var Ko=class extends le{_parse(e){if(this._getType(e)!==j.symbol){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.symbol,received:i.parsedType}),re}return bt(e.data)}};Ko.create=t=>new Ko({typeName:te.ZodSymbol,...ae(t)});var ji=class extends le{_parse(e){if(this._getType(e)!==j.undefined){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.undefined,received:i.parsedType}),re}return bt(e.data)}};ji.create=t=>new ji({typeName:te.ZodUndefined,...ae(t)});var qi=class extends le{_parse(e){if(this._getType(e)!==j.null){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.null,received:i.parsedType}),re}return bt(e.data)}};qi.create=t=>new qi({typeName:te.ZodNull,...ae(t)});var si=class extends le{constructor(){super(...arguments),this._any=!0}_parse(e){return bt(e.data)}};si.create=t=>new si({typeName:te.ZodAny,...ae(t)});var Mr=class extends le{constructor(){super(...arguments),this._unknown=!0}_parse(e){return bt(e.data)}};Mr.create=t=>new Mr({typeName:te.ZodUnknown,...ae(t)});var cr=class extends le{_parse(e){let r=this._getOrReturnCtx(e);return U(r,{code:I.invalid_type,expected:j.never,received:r.parsedType}),re}};cr.create=t=>new cr({typeName:te.ZodNever,...ae(t)});var Zo=class extends le{_parse(e){if(this._getType(e)!==j.undefined){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.void,received:i.parsedType}),re}return bt(e.data)}};Zo.create=t=>new Zo({typeName:te.ZodVoid,...ae(t)});var Nr=class t extends le{_parse(e){let{ctx:r,status:i}=this._processInputParams(e),o=this._def;if(r.parsedType!==j.array)return U(r,{code:I.invalid_type,expected:j.array,received:r.parsedType}),re;if(o.exactLength!==null){let n=r.data.length>o.exactLength.value,a=r.data.length<o.exactLength.value;(n||a)&&(U(r,{code:n?I.too_big:I.too_small,minimum:a?o.exactLength.value:void 0,maximum:n?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&r.data.length<o.minLength.value&&(U(r,{code:I.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&r.data.length>o.maxLength.value&&(U(r,{code:I.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((n,a)=>o.type._parseAsync(new Gt(r,n,r.path,a)))).then(n=>mt.mergeArray(i,n));let s=[...r.data].map((n,a)=>o.type._parseSync(new Gt(r,n,r.path,a)));return mt.mergeArray(i,s)}get element(){return this._def.type}min(e,r){return new t({...this._def,minLength:{value:e,message:Z.toString(r)}})}max(e,r){return new t({...this._def,maxLength:{value:e,message:Z.toString(r)}})}length(e,r){return new t({...this._def,exactLength:{value:e,message:Z.toString(r)}})}nonempty(e){return this.min(1,e)}};Nr.create=(t,e)=>new Nr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:te.ZodArray,...ae(e)});function Ho(t){if(t instanceof Ct){let e={};for(let r in t.shape){let i=t.shape[r];e[r]=Wt.create(Ho(i))}return new Ct({...t._def,shape:()=>e})}else return t instanceof Nr?new Nr({...t._def,type:Ho(t.element)}):t instanceof Wt?Wt.create(Ho(t.unwrap())):t instanceof kr?kr.create(Ho(t.unwrap())):t instanceof xr?xr.create(t.items.map(e=>Ho(e))):t}var Ct=class t extends le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),r=ge.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==j.object){let c=this._getOrReturnCtx(e);return U(c,{code:I.invalid_type,expected:j.object,received:c.parsedType}),re}let{status:i,ctx:o}=this._processInputParams(e),{shape:s,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof cr&&this._def.unknownKeys==="strip"))for(let c in o.data)n.includes(c)||a.push(c);let l=[];for(let c of n){let d=s[c],h=o.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new Gt(o,h,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof cr){let c=this._def.unknownKeys;if(c==="passthrough")for(let d of a)l.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(c==="strict")a.length>0&&(U(o,{code:I.unrecognized_keys,keys:a}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let d of a){let h=o.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new Gt(o,h,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let c=[];for(let d of l){let h=await d.key,f=await d.value;c.push({key:h,value:f,alwaysSet:d.alwaysSet})}return c}).then(c=>mt.mergeObjectSync(i,c)):mt.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return Z.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{var o,s,n,a;let l=(n=(s=(o=this._def).errorMap)===null||s===void 0?void 0:s.call(o,r,i).message)!==null&&n!==void 0?n:i.defaultError;return r.code==="unrecognized_keys"?{message:(a=Z.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:te.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let r={};return ge.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}omit(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{e[i]||(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}deepPartial(){return Ho(this)}partial(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{let o=this.shape[i];e&&!e[i]?r[i]=o:r[i]=o.optional()}),new t({...this._def,shape:()=>r})}required(e){let r={};return ge.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])r[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Wt;)s=s._def.innerType;r[i]=s}}),new t({...this._def,shape:()=>r})}keyof(){return Nb(ge.objectKeys(this.shape))}};Ct.create=(t,e)=>new Ct({shape:()=>t,unknownKeys:"strip",catchall:cr.create(),typeName:te.ZodObject,...ae(e)});Ct.strictCreate=(t,e)=>new Ct({shape:()=>t,unknownKeys:"strict",catchall:cr.create(),typeName:te.ZodObject,...ae(e)});Ct.lazycreate=(t,e)=>new Ct({shape:t,unknownKeys:"strip",catchall:cr.create(),typeName:te.ZodObject,...ae(e)});var Hi=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=this._def.options;function o(s){for(let a of s)if(a.result.status==="valid")return a.result;for(let a of s)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;let n=s.map(a=>new Mt(a.ctx.common.issues));return U(r,{code:I.invalid_union,unionErrors:n}),re}if(r.common.async)return Promise.all(i.map(async s=>{let n={...r,common:{...r.common,issues:[]},parent:null};return{result:await s._parseAsync({data:r.data,path:r.path,parent:n}),ctx:n}})).then(o);{let s,n=[];for(let l of i){let c={...r,common:{...r.common,issues:[]},parent:null},d=l._parseSync({data:r.data,path:r.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:c}),c.common.issues.length&&n.push(c.common.issues)}if(s)return r.common.issues.push(...s.ctx.common.issues),s.result;let a=n.map(l=>new Mt(l));return U(r,{code:I.invalid_union,unionErrors:a}),re}}get options(){return this._def.options}};Hi.create=(t,e)=>new Hi({options:t,typeName:te.ZodUnion,...ae(e)});var Rr=t=>t instanceof Gi?Rr(t.schema):t instanceof Nt?Rr(t.innerType()):t instanceof Ki?[t.value]:t instanceof Zi?t.options:t instanceof Yi?ge.objectValues(t.enum):t instanceof Xi?Rr(t._def.innerType):t instanceof ji?[void 0]:t instanceof qi?[null]:t instanceof Wt?[void 0,...Rr(t.unwrap())]:t instanceof kr?[null,...Rr(t.unwrap())]:t instanceof Sn||t instanceof Qi?Rr(t.unwrap()):t instanceof Ji?Rr(t._def.innerType):[],yl=class t extends le{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==j.object)return U(r,{code:I.invalid_type,expected:j.object,received:r.parsedType}),re;let i=this.discriminator,o=r.data[i],s=this.optionsMap.get(o);return s?r.common.async?s._parseAsync({data:r.data,path:r.path,parent:r}):s._parseSync({data:r.data,path:r.path,parent:r}):(U(r,{code:I.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,i){let o=new Map;for(let s of r){let n=Rr(s.shape[e]);if(!n.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of n){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,s)}}return new t({typeName:te.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:o,...ae(i)})}};function Id(t,e){let r=Dr(t),i=Dr(e);if(t===e)return{valid:!0,data:t};if(r===j.object&&i===j.object){let o=ge.objectKeys(e),s=ge.objectKeys(t).filter(a=>o.indexOf(a)!==-1),n={...t,...e};for(let a of s){let l=Id(t[a],e[a]);if(!l.valid)return{valid:!1};n[a]=l.data}return{valid:!0,data:n}}else if(r===j.array&&i===j.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let s=0;s<t.length;s++){let n=t[s],a=e[s],l=Id(n,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return r===j.date&&i===j.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var Wi=class extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=(s,n)=>{if(Od(s)||Od(n))return re;let a=Id(s.value,n.value);return a.valid?(($d(s)||$d(n))&&r.dirty(),{status:r.value,value:a.data}):(U(i,{code:I.invalid_intersection_types}),re)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,n])=>o(s,n)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}};Wi.create=(t,e,r)=>new Wi({left:t,right:e,typeName:te.ZodIntersection,...ae(r)});var xr=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==j.array)return U(i,{code:I.invalid_type,expected:j.array,received:i.parsedType}),re;if(i.data.length<this._def.items.length)return U(i,{code:I.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),re;!this._def.rest&&i.data.length>this._def.items.length&&(U(i,{code:I.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());let s=[...i.data].map((n,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new Gt(i,n,i.path,a)):null}).filter(n=>!!n);return i.common.async?Promise.all(s).then(n=>mt.mergeArray(r,n)):mt.mergeArray(r,s)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};xr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new xr({items:t,typeName:te.ZodTuple,rest:null,...ae(e)})};var vl=class t extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==j.object)return U(i,{code:I.invalid_type,expected:j.object,received:i.parsedType}),re;let o=[],s=this._def.keyType,n=this._def.valueType;for(let a in i.data)o.push({key:s._parse(new Gt(i,a,i.path,a)),value:n._parse(new Gt(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?mt.mergeObjectAsync(r,o):mt.mergeObjectSync(r,o)}get element(){return this._def.valueType}static create(e,r,i){return r instanceof le?new t({keyType:e,valueType:r,typeName:te.ZodRecord,...ae(i)}):new t({keyType:oi.create(),valueType:e,typeName:te.ZodRecord,...ae(r)})}},Yo=class extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==j.map)return U(i,{code:I.invalid_type,expected:j.map,received:i.parsedType}),re;let o=this._def.keyType,s=this._def.valueType,n=[...i.data.entries()].map(([a,l],c)=>({key:o._parse(new Gt(i,a,i.path,[c,"key"])),value:s._parse(new Gt(i,l,i.path,[c,"value"]))}));if(i.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of n){let c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return re;(c.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(c.value,d.value)}return{status:r.value,value:a}})}else{let a=new Map;for(let l of n){let c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return re;(c.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(c.value,d.value)}return{status:r.value,value:a}}}};Yo.create=(t,e,r)=>new Yo({valueType:e,keyType:t,typeName:te.ZodMap,...ae(r)});var Xo=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==j.set)return U(i,{code:I.invalid_type,expected:j.set,received:i.parsedType}),re;let o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(U(i,{code:I.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),r.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(U(i,{code:I.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),r.dirty());let s=this._def.valueType;function n(l){let c=new Set;for(let d of l){if(d.status==="aborted")return re;d.status==="dirty"&&r.dirty(),c.add(d.value)}return{status:r.value,value:c}}let a=[...i.data.values()].map((l,c)=>s._parse(new Gt(i,l,i.path,c)));return i.common.async?Promise.all(a).then(l=>n(l)):n(a)}min(e,r){return new t({...this._def,minSize:{value:e,message:Z.toString(r)}})}max(e,r){return new t({...this._def,maxSize:{value:e,message:Z.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}};Xo.create=(t,e)=>new Xo({valueType:t,minSize:null,maxSize:null,typeName:te.ZodSet,...ae(e)});var wl=class t extends le{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==j.function)return U(r,{code:I.invalid_type,expected:j.function,received:r.parsedType}),re;function i(a,l){return gl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,ml(),Go].filter(c=>!!c),issueData:{code:I.invalid_arguments,argumentsError:l}})}function o(a,l){return gl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,ml(),Go].filter(c=>!!c),issueData:{code:I.invalid_return_type,returnTypeError:l}})}let s={errorMap:r.common.contextualErrorMap},n=r.data;if(this._def.returns instanceof ni){let a=this;return bt(async function(...l){let c=new Mt([]),d=await a._def.args.parseAsync(l,s).catch(m=>{throw c.addIssue(i(l,m)),c}),h=await Reflect.apply(n,this,d);return await a._def.returns._def.type.parseAsync(h,s).catch(m=>{throw c.addIssue(o(h,m)),c})})}else{let a=this;return bt(function(...l){let c=a._def.args.safeParse(l,s);if(!c.success)throw new Mt([i(l,c.error)]);let d=Reflect.apply(n,this,c.data),h=a._def.returns.safeParse(d,s);if(!h.success)throw new Mt([o(d,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:xr.create(e).rest(Mr.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,i){return new t({args:e||xr.create([]).rest(Mr.create()),returns:r||Mr.create(),typeName:te.ZodFunction,...ae(i)})}},Gi=class extends le{get schema(){return this._def.getter()}_parse(e){let{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}};Gi.create=(t,e)=>new Gi({getter:t,typeName:te.ZodLazy,...ae(e)});var Ki=class extends le{_parse(e){if(e.data!==this._def.value){let r=this._getOrReturnCtx(e);return U(r,{received:r.data,code:I.invalid_literal,expected:this._def.value}),re}return{status:"valid",value:e.data}}get value(){return this._def.value}};Ki.create=(t,e)=>new Ki({value:t,typeName:te.ZodLiteral,...ae(e)});function Nb(t,e){return new Zi({values:t,typeName:te.ZodEnum,...ae(e)})}var Zi=class t extends le{constructor(){super(...arguments),_n.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let r=this._getOrReturnCtx(e),i=this._def.values;return U(r,{expected:ge.joinValues(i),received:r.parsedType,code:I.invalid_type}),re}if(bl(this,_n,"f")||zb(this,_n,new Set(this._def.values),"f"),!bl(this,_n,"f").has(e.data)){let r=this._getOrReturnCtx(e),i=this._def.values;return U(r,{received:r.data,code:I.invalid_enum_value,options:i}),re}return bt(e.data)}get options(){return this._def.values}get enum(){let e={};for(let r of this._def.values)e[r]=r;return e}get Values(){let e={};for(let r of this._def.values)e[r]=r;return e}get Enum(){let e={};for(let r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return t.create(e,{...this._def,...r})}exclude(e,r=this._def){return t.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}};_n=new WeakMap;Zi.create=Nb;var Yi=class extends le{constructor(){super(...arguments),xn.set(this,void 0)}_parse(e){let r=ge.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==j.string&&i.parsedType!==j.number){let o=ge.objectValues(r);return U(i,{expected:ge.joinValues(o),received:i.parsedType,code:I.invalid_type}),re}if(bl(this,xn,"f")||zb(this,xn,new Set(ge.getValidEnumValues(this._def.values)),"f"),!bl(this,xn,"f").has(e.data)){let o=ge.objectValues(r);return U(i,{received:i.data,code:I.invalid_enum_value,options:o}),re}return bt(e.data)}get enum(){return this._def.values}};xn=new WeakMap;Yi.create=(t,e)=>new Yi({values:t,typeName:te.ZodNativeEnum,...ae(e)});var ni=class extends le{unwrap(){return this._def.type}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==j.promise&&r.common.async===!1)return U(r,{code:I.invalid_type,expected:j.promise,received:r.parsedType}),re;let i=r.parsedType===j.promise?r.data:Promise.resolve(r.data);return bt(i.then(o=>this._def.type.parseAsync(o,{path:r.path,errorMap:r.common.contextualErrorMap})))}};ni.create=(t,e)=>new ni({type:t,typeName:te.ZodPromise,...ae(e)});var Nt=class extends le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===te.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=this._def.effect||null,s={addIssue:n=>{U(i,n),n.fatal?r.abort():r.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),o.type==="preprocess"){let n=o.transform(i.data,s);if(i.common.async)return Promise.resolve(n).then(async a=>{if(r.value==="aborted")return re;let l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?re:l.status==="dirty"||r.value==="dirty"?Wo(l.value):l});{if(r.value==="aborted")return re;let a=this._def.schema._parseSync({data:n,path:i.path,parent:i});return a.status==="aborted"?re:a.status==="dirty"||r.value==="dirty"?Wo(a.value):a}}if(o.type==="refinement"){let n=a=>{let l=o.refinement(a,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){let a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?re:(a.status==="dirty"&&r.dirty(),n(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?re:(a.status==="dirty"&&r.dirty(),n(a.value).then(()=>({status:r.value,value:a.value}))))}if(o.type==="transform")if(i.common.async===!1){let n=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ni(n))return n;let a=o.transform(n.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(n=>Ni(n)?Promise.resolve(o.transform(n.value,s)).then(a=>({status:r.value,value:a})):n);ge.assertNever(o)}};Nt.create=(t,e,r)=>new Nt({schema:t,typeName:te.ZodEffects,effect:e,...ae(r)});Nt.createWithPreprocess=(t,e,r)=>new Nt({schema:e,effect:{type:"preprocess",transform:t},typeName:te.ZodEffects,...ae(r)});var Wt=class extends le{_parse(e){return this._getType(e)===j.undefined?bt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Wt.create=(t,e)=>new Wt({innerType:t,typeName:te.ZodOptional,...ae(e)});var kr=class extends le{_parse(e){return this._getType(e)===j.null?bt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};kr.create=(t,e)=>new kr({innerType:t,typeName:te.ZodNullable,...ae(e)});var Xi=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return r.parsedType===j.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}};Xi.create=(t,e)=>new Xi({innerType:t,typeName:te.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ae(e)});var Ji=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return kn(o)?o.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Mt(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mt(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}};Ji.create=(t,e)=>new Ji({innerType:t,typeName:te.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ae(e)});var Jo=class extends le{_parse(e){if(this._getType(e)!==j.nan){let i=this._getOrReturnCtx(e);return U(i,{code:I.invalid_type,expected:j.nan,received:i.parsedType}),re}return{status:"valid",value:e.data}}};Jo.create=t=>new Jo({typeName:te.ZodNaN,...ae(t)});var Q2=Symbol("zod_brand"),Sn=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}},Cn=class t extends le{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{let s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?re:s.status==="dirty"?(r.dirty(),Wo(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{let o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?re:o.status==="dirty"?(r.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,r){return new t({in:e,out:r,typeName:te.ZodPipeline})}},Qi=class extends le{_parse(e){let r=this._def.innerType._parse(e),i=o=>(Ni(o)&&(o.value=Object.freeze(o.value)),o);return kn(r)?r.then(o=>i(o)):i(r)}unwrap(){return this._def.innerType}};Qi.create=(t,e)=>new Qi({innerType:t,typeName:te.ZodReadonly,...ae(e)});function Fb(t,e={},r){return t?si.create().superRefine((i,o)=>{var s,n;if(!t(i)){let a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(n=(s=a.fatal)!==null&&s!==void 0?s:r)!==null&&n!==void 0?n:!0,c=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...c,fatal:l})}}):si.create()}var eT={object:Ct.lazycreate},te;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(te||(te={}));var tT=(t,e={message:`Input not instance of ${t.name}`})=>Fb(r=>r instanceof t,e),Ub=oi.create,Bb=Fi.create,rT=Jo.create,iT=Ui.create,Vb=Bi.create,oT=Vi.create,sT=Ko.create,nT=ji.create,aT=qi.create,lT=si.create,cT=Mr.create,uT=cr.create,dT=Zo.create,hT=Nr.create,pT=Ct.create,fT=Ct.strictCreate,mT=Hi.create,gT=yl.create,bT=Wi.create,yT=xr.create,vT=vl.create,wT=Yo.create,_T=Xo.create,xT=wl.create,kT=Gi.create,ST=Ki.create,CT=Zi.create,TT=Yi.create,ET=ni.create,Pb=Nt.create,AT=Wt.create,OT=kr.create,$T=Nt.createWithPreprocess,IT=Cn.create,PT=()=>Ub().optional(),LT=()=>Bb().optional(),zT=()=>Vb().optional(),RT={string:t=>oi.create({...t,coerce:!0}),number:t=>Fi.create({...t,coerce:!0}),boolean:t=>Bi.create({...t,coerce:!0}),bigint:t=>Ui.create({...t,coerce:!0}),date:t=>Vi.create({...t,coerce:!0})},DT=re,G=Object.freeze({__proto__:null,defaultErrorMap:Go,setErrorMap:$2,getErrorMap:ml,makeIssue:gl,EMPTY_PATH:I2,addIssueToContext:U,ParseStatus:mt,INVALID:re,DIRTY:Wo,OK:bt,isAborted:Od,isDirty:$d,isValid:Ni,isAsync:kn,get util(){return ge},get objectUtil(){return Ad},ZodParsedType:j,getParsedType:Dr,ZodType:le,datetimeRegex:Mb,ZodString:oi,ZodNumber:Fi,ZodBigInt:Ui,ZodBoolean:Bi,ZodDate:Vi,ZodSymbol:Ko,ZodUndefined:ji,ZodNull:qi,ZodAny:si,ZodUnknown:Mr,ZodNever:cr,ZodVoid:Zo,ZodArray:Nr,ZodObject:Ct,ZodUnion:Hi,ZodDiscriminatedUnion:yl,ZodIntersection:Wi,ZodTuple:xr,ZodRecord:vl,ZodMap:Yo,ZodSet:Xo,ZodFunction:wl,ZodLazy:Gi,ZodLiteral:Ki,ZodEnum:Zi,ZodNativeEnum:Yi,ZodPromise:ni,ZodEffects:Nt,ZodTransformer:Nt,ZodOptional:Wt,ZodNullable:kr,ZodDefault:Xi,ZodCatch:Ji,ZodNaN:Jo,BRAND:Q2,ZodBranded:Sn,ZodPipeline:Cn,ZodReadonly:Qi,custom:Fb,Schema:le,ZodSchema:le,late:eT,get ZodFirstPartyTypeKind(){return te},coerce:RT,any:lT,array:hT,bigint:iT,boolean:Vb,date:oT,discriminatedUnion:gT,effect:Pb,enum:CT,function:xT,instanceof:tT,intersection:bT,lazy:kT,literal:ST,map:wT,nan:rT,nativeEnum:TT,never:uT,null:aT,nullable:OT,number:Bb,object:pT,oboolean:zT,onumber:LT,optional:AT,ostring:PT,pipeline:IT,preprocess:$T,promise:ET,record:vT,set:_T,strictObject:fT,string:Ub,symbol:sT,transformer:Pb,tuple:yT,undefined:nT,union:mT,unknown:cT,void:dT,NEVER:DT,ZodIssueCode:I,quotelessJson:O2,ZodError:Mt});var ai=class{_state;constructor(e){this._state=e}state=()=>({...this._state});setState=e=>{this._state=typeof e=="function"?e(this._state):{...this._state,...e}}};var Tn=(r=>(r.ALL="ALL",r.ANY="ANY",r))(Tn||{}),MT=G.object({text:G.string().optional().default(""),tagKeys:G.array(G.string()).optional().default([]),indexLetter:G.string().optional().default(""),tagsMatchType:G.nativeEnum(Tn).default("ALL")}),_l=class t extends ai{constructor(e){super(e)}static from(e){let r=MT.parse(e??{});return new t(r)}setText(e){this.setState({text:e})}setIndexLetter(e){let r=e.toLocaleLowerCase()!=this.state().indexLetter?e:"";this.setState({indexLetter:r.toLocaleLowerCase()})}setTag(e,r=!0){let i=this.state().tagKeys,o=i.indexOf(e),s=r?o<0?i.concat(e):[...i.slice(0,o),...i.slice(o+1)]:[e];this.setState({tagKeys:s})}setTagsMatchType(e){this.setState({tagsMatchType:e})}isActiveIndexLetter(e){return this.state().indexLetter===e.toLocaleLowerCase()}hasTag(e){return this.state().tagKeys.includes(e)}};var xl=class{config;client=new $b;constructor(e){let{namespace:r,database:i,url:o}=e;this.config={namespace:r,database:i,url:o},Object.freeze(this.config)}async initialize(){let{url:e,namespace:r,database:i}=this.config;try{await this.client.connect(e,{namespace:r,database:i})}catch(o){throw console.error("Failed to connect to SurrealDB:",o instanceof Error?o.message:String(o)),await this.client.close(),o}}async authenticate(e,r){let i=!1;try{i=await this.client.authenticate(e)}catch(o){r||console.error(o.message)}return i}async getListings(e){let r="",i=[];if(e?.indexLetter&&i.push(`string::starts_with(string::lowercase(title), '${e.indexLetter.toLocaleLowerCase()}')`),e?.tagKeys?.length){let n=e.tagKeys.map(a=>a).join("', '");e.tagsMatchType==="ALL"?i.push(`array::len(array::intersect(tags.key, ['${n}'])) = ${e.tagKeys.length}`):i.push(`tags[WHERE key IN ['${n}']];`)}i.length&&(r=` WHERE ${i.join(" AND ")}`);let o=`SELECT *, tags.*.* FROM listings${r};`;return console.log({query:o}),Qo(await this.client.query(o))}async getIndexLetters(){return Qo(await this.client.query("SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM listings GROUP BY letter;"))}async getTags(){let e=`
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;return console.log({query:e}),Qo(await this.client.query(e))}async getUserData(){let e="SELECT * FROM users;";console.log({query:e});let r=Qo(await this.client.query(e),2);return{...r,id:`${r.id.tb}:${r.id.id}`}}async getListingsByEmail(e){let r=`SELECT * FROM listings WHERE owner.email = '${e}';`;return console.log({query:r}),Qo(await this.client.query(r),2)}async createListing(e){let r=";";return console.log({query:r}),Qo(await this.client.query(r),2)}},Qo=(t,e=1)=>{let r=t;for(;e>0&&Array.isArray(r)&&r.length===1;)r=r[0],e--;return r};var jb=async t=>{let e=new xl(t);return await e.initialize(),e};var Wb=la(Hb());var eo=async(t=0,e)=>new Promise(r=>setTimeout(()=>r(e?e():void 0),t));var Pd=t=>(0,Wb.default)(t);var kl=class{configsUrl;constructor(e){this.configsUrl=e}async loadConfigs(){return console.log({configsUrl:this.configsUrl}),await eo(),{auth0:{domain:"intergate.eu.auth0.com",clientId:"d63m36lvjcGcQZoYjF06IIgczFdIHGqN",authorizationParams:{audience:"https://surrealdb.com/",redirect_uri:window.location.origin}},surreal:{namespace:"intergate",database:"gul-info",url:"https://127.0.0.1:7999/rpc"}}}};var Gb=async t=>await new kl(t).loadConfigs();var Kb=To(),Zb=t=>{let e=async()=>{let i=await Gb("https://intergate.io/configs/gul-info-hurdal"),o=await jb(i.surreal);return{configs:i,db:o}},[r]=xt(e);return Y(kt,{get when(){return r()},get children(){return Y(Kb.Provider,{get value(){return r()},get children(){return t.children}})}})},Yb=()=>{let t=Oi(Kb);if(!t)throw new Error("useSystem must be used within an CoreProvider");return t};function Sr(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]])}return r}var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Kd(t,e){return t(e={exports:{}},e.exports),e.exports}var to=Kd(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function i(){var o=this;this.locked=new Map,this.addToLocked=function(s,n){var a=o.locked.get(s);a===void 0?n===void 0?o.locked.set(s,[]):o.locked.set(s,[n]):n!==void 0&&(a.unshift(n),o.locked.set(s,a))},this.isLocked=function(s){return o.locked.has(s)},this.lock=function(s){return new Promise(function(n,a){o.isLocked(s)?o.addToLocked(s,n):(o.addToLocked(s),n())})},this.unlock=function(s){var n=o.locked.get(s);if(n!==void 0&&n.length!==0){var a=n.pop();o.locked.set(s,n),a!==void 0&&setTimeout(a,0)}else o.locked.delete(s)}}return i.getInstance=function(){return i.instance===void 0&&(i.instance=new i),i.instance},i}();e.default=function(){return r.getInstance()}});Gd(to);var NT=Gd(Kd(function(t,e){var r=ro&&ro.__awaiter||function(d,h,f,m){return new(f||(f=Promise))(function(g,y){function b(k){try{w(m.next(k))}catch(v){y(v)}}function _(k){try{w(m.throw(k))}catch(v){y(v)}}function w(k){k.done?g(k.value):new f(function(v){v(k.value)}).then(b,_)}w((m=m.apply(d,h||[])).next())})},i=ro&&ro.__generator||function(d,h){var f,m,g,y,b={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return y={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function _(w){return function(k){return function(v){if(f)throw new TypeError("Generator is already executing.");for(;b;)try{if(f=1,m&&(g=2&v[0]?m.return:v[0]?m.throw||((g=m.return)&&g.call(m),0):m.next)&&!(g=g.call(m,v[1])).done)return g;switch(m=0,g&&(v=[2&v[0],g.value]),v[0]){case 0:case 1:g=v;break;case 4:return b.label++,{value:v[1],done:!1};case 5:b.label++,m=v[1],v=[0];continue;case 7:v=b.ops.pop(),b.trys.pop();continue;default:if(g=b.trys,!((g=g.length>0&&g[g.length-1])||v[0]!==6&&v[0]!==2)){b=0;continue}if(v[0]===3&&(!g||v[1]>g[0]&&v[1]<g[3])){b.label=v[1];break}if(v[0]===6&&b.label<g[1]){b.label=g[1],g=v;break}if(g&&b.label<g[2]){b.label=g[2],b.ops.push(v);break}g[2]&&b.ops.pop(),b.trys.pop();continue}v=h.call(d,b)}catch(S){v=[6,S],m=0}finally{f=g=0}if(5&v[0])throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}([w,k])}}},o=ro;Object.defineProperty(e,"__esModule",{value:!0});var s="browser-tabs-lock-key",n={key:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},getItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},clear:function(){return r(o,void 0,void 0,function(){return i(this,function(d){return[2,window.localStorage.clear()]})})},removeItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},setItem:function(d,h){return r(o,void 0,void 0,function(){return i(this,function(f){throw new Error("Unsupported")})})},keySync:function(d){return window.localStorage.key(d)},getItemSync:function(d){return window.localStorage.getItem(d)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(d){return window.localStorage.removeItem(d)},setItemSync:function(d,h){return window.localStorage.setItem(d,h)}};function a(d){return new Promise(function(h){return setTimeout(h,d)})}function l(d){for(var h="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",f="",m=0;m<d;m++)f+=h[Math.floor(Math.random()*h.length)];return f}var c=function(){function d(h){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=h,d.waiters===void 0&&(d.waiters=[])}return d.prototype.acquireLock=function(h,f){return f===void 0&&(f=5e3),r(this,void 0,void 0,function(){var m,g,y,b,_,w,k;return i(this,function(v){switch(v.label){case 0:m=Date.now()+l(4),g=Date.now()+f,y=s+"-"+h,b=this.storageHandler===void 0?n:this.storageHandler,v.label=1;case 1:return Date.now()<g?[4,a(30)]:[3,8];case 2:return v.sent(),b.getItemSync(y)!==null?[3,5]:(_=this.id+"-"+h+"-"+m,[4,a(Math.floor(25*Math.random()))]);case 3:return v.sent(),b.setItemSync(y,JSON.stringify({id:this.id,iat:m,timeoutKey:_,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return v.sent(),(w=b.getItemSync(y))!==null&&(k=JSON.parse(w)).id===this.id&&k.iat===m?(this.acquiredIatSet.add(m),this.refreshLockWhileAcquired(y,m),[2,!0]):[3,7];case 5:return d.lockCorrector(this.storageHandler===void 0?n:this.storageHandler),[4,this.waitForSomethingToChange(g)];case 6:v.sent(),v.label=7;case 7:return m=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},d.prototype.refreshLockWhileAcquired=function(h,f){return r(this,void 0,void 0,function(){var m=this;return i(this,function(g){return setTimeout(function(){return r(m,void 0,void 0,function(){var y,b,_;return i(this,function(w){switch(w.label){case 0:return[4,to.default().lock(f)];case 1:return w.sent(),this.acquiredIatSet.has(f)?(y=this.storageHandler===void 0?n:this.storageHandler,(b=y.getItemSync(h))===null?(to.default().unlock(f),[2]):((_=JSON.parse(b)).timeRefreshed=Date.now(),y.setItemSync(h,JSON.stringify(_)),to.default().unlock(f),this.refreshLockWhileAcquired(h,f),[2])):(to.default().unlock(f),[2])}})})},1e3),[2]})})},d.prototype.waitForSomethingToChange=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,new Promise(function(m){var g=!1,y=Date.now(),b=!1;function _(){if(b||(window.removeEventListener("storage",_),d.removeFromWaiting(_),clearTimeout(w),b=!0),!g){g=!0;var k=50-(Date.now()-y);k>0?setTimeout(m,k):m(null)}}window.addEventListener("storage",_),d.addToWaiting(_);var w=setTimeout(_,Math.max(0,h-Date.now()))})];case 1:return f.sent(),[2]}})})},d.addToWaiting=function(h){this.removeFromWaiting(h),d.waiters!==void 0&&d.waiters.push(h)},d.removeFromWaiting=function(h){d.waiters!==void 0&&(d.waiters=d.waiters.filter(function(f){return f!==h}))},d.notifyWaiters=function(){d.waiters!==void 0&&d.waiters.slice().forEach(function(h){return h()})},d.prototype.releaseLock=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,this.releaseLock__private__(h)];case 1:return[2,f.sent()]}})})},d.prototype.releaseLock__private__=function(h){return r(this,void 0,void 0,function(){var f,m,g,y;return i(this,function(b){switch(b.label){case 0:return f=this.storageHandler===void 0?n:this.storageHandler,m=s+"-"+h,(g=f.getItemSync(m))===null?[2]:(y=JSON.parse(g)).id!==this.id?[3,2]:[4,to.default().lock(y.iat)];case 1:b.sent(),this.acquiredIatSet.delete(y.iat),f.removeItemSync(m),to.default().unlock(y.iat),d.notifyWaiters(),b.label=2;case 2:return[2]}})})},d.lockCorrector=function(h){for(var f=Date.now()-5e3,m=h,g=[],y=0;;){var b=m.keySync(y);if(b===null)break;g.push(b),y++}for(var _=!1,w=0;w<g.length;w++){var k=g[w];if(k.includes(s)){var v=m.getItemSync(k);if(v!==null){var S=JSON.parse(v);(S.timeRefreshed===void 0&&S.timeAcquired<f||S.timeRefreshed!==void 0&&S.timeRefreshed<f)&&(m.removeItemSync(k),_=!0)}}}_&&d.notifyWaiters()},d.waiters=void 0,d}();e.default=c})),FT={timeoutInSeconds:60},sy={name:"auth0-spa-js",version:"2.1.3"},ny=()=>Date.now(),yt=class t extends Error{constructor(e,r){super(r),this.error=e,this.error_description=r,Object.setPrototypeOf(this,t.prototype)}static fromPayload({error:e,error_description:r}){return new t(e,r)}},Md=class t extends yt{constructor(e,r,i,o=null){super(e,r),this.state=i,this.appState=o,Object.setPrototypeOf(this,t.prototype)}},An=class t extends yt{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,t.prototype)}},Nd=class t extends An{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Fd=class t extends yt{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Ud=class t extends yt{constructor(e,r,i){super(e,r),this.mfa_token=i,Object.setPrototypeOf(this,t.prototype)}},Tl=class t extends yt{constructor(e,r){super("missing_refresh_token",`Missing Refresh Token (audience: '${Xb(e,["default"])}', scope: '${Xb(r)}')`),this.audience=e,this.scope=r,Object.setPrototypeOf(this,t.prototype)}};function Xb(t,e=[]){return t&&!e.includes(t)?t:""}var Cl=()=>window.crypto,Ld=()=>{let t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",e="";return Array.from(Cl().getRandomValues(new Uint8Array(43))).forEach(r=>e+=t[r%t.length]),e},Jb=t=>btoa(t),Bd=t=>{var{clientId:e}=t,r=Sr(t,["clientId"]);return new URLSearchParams((i=>Object.keys(i).filter(o=>i[o]!==void 0).reduce((o,s)=>Object.assign(Object.assign({},o),{[s]:i[s]}),{}))(Object.assign({client_id:e},r))).toString()},Qb=t=>(e=>decodeURIComponent(atob(e).split("").map(r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g,"/").replace(/-/g,"+")),UT=async(t,e)=>{let r=await fetch(t,e);return{ok:r.ok,json:await r.json()}},BT=async(t,e,r)=>{let i=new AbortController,o;return e.signal=i.signal,Promise.race([UT(t,e),new Promise((s,n)=>{o=setTimeout(()=>{i.abort(),n(new Error("Timeout when executing 'fetch'"))},r)})]).finally(()=>{clearTimeout(o)})},VT=async(t,e,r,i,o,s,n)=>{return a={auth:{audience:e,scope:r},timeout:o,fetchUrl:t,fetchOptions:i,useFormData:n},l=s,new Promise(function(c,d){let h=new MessageChannel;h.port1.onmessage=function(f){f.data.error?d(new Error(f.data.error)):c(f.data),h.port1.close()},l.postMessage(a,[h.port2])});var a,l},jT=async(t,e,r,i,o,s,n=1e4)=>o?VT(t,e,r,i,n,o,s):BT(t,i,n);async function qT(t,e){var{baseUrl:r,timeout:i,audience:o,scope:s,auth0Client:n,useFormData:a}=t,l=Sr(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);let c=a?Bd(l):JSON.stringify(l);return await async function(d,h,f,m,g,y,b){let _,w=null;for(let B=0;B<3;B++)try{_=await jT(d,f,m,g,y,b,h),w=null;break}catch(q){w=q}if(w)throw w;let k=_.json,{error:v,error_description:S}=k,D=Sr(k,["error","error_description"]),{ok:K}=_;if(!K){let B=S||`HTTP error. Unable to fetch ${d}`;throw v==="mfa_required"?new Ud(v,B,D.mfa_token):v==="missing_refresh_token"?new Tl(f,m):new yt(v||"request_error",B)}return D}(`${r}/oauth/token`,i,o||"default",s,{method:"POST",body:c,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(n||sy))}},e,a)}var Sl=(...t)=>{return(e=t.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ");var e},Fr=class t{constructor(e,r="@@auth0spajs@@",i){this.prefix=r,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){let[r,i,o,s]=e.split("::");return new t({clientId:i,scope:s,audience:o},r)}static fromCacheEntry(e){let{scope:r,audience:i,client_id:o}=e;return new t({scope:r,audience:i,clientId:o})}},Vd=class{set(e,r){localStorage.setItem(e,JSON.stringify(r))}get(e){let r=window.localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch{return}}remove(e){localStorage.removeItem(e)}allKeys(){return Object.keys(window.localStorage).filter(e=>e.startsWith("@@auth0spajs@@"))}},El=class{constructor(){this.enclosedCache=function(){let e={};return{set(r,i){e[r]=i},get(r){let i=e[r];if(i)return i},remove(r){delete e[r]},allKeys:()=>Object.keys(e)}}()}},jd=class{constructor(e,r,i){this.cache=e,this.keyManifest=r,this.nowProvider=i||ny}async setIdToken(e,r,i){var o;let s=this.getIdTokenCacheKey(e);await this.cache.set(s,{id_token:r,decodedToken:i}),await((o=this.keyManifest)===null||o===void 0?void 0:o.add(s))}async getIdToken(e){let r=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!r&&e.scope&&e.audience){let i=await this.get(e);return!i||!i.id_token||!i.decodedToken?void 0:{id_token:i.id_token,decodedToken:i.decodedToken}}if(r)return{id_token:r.id_token,decodedToken:r.decodedToken}}async get(e,r=0){var i;let o=await this.cache.get(e.toKey());if(!o){let a=await this.getCacheKeys();if(!a)return;let l=this.matchExistingCacheKey(e,a);l&&(o=await this.cache.get(l))}if(!o)return;let s=await this.nowProvider(),n=Math.floor(s/1e3);return o.expiresAt-r<n?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},await this.cache.set(e.toKey(),o),o.body):(await this.cache.remove(e.toKey()),void await((i=this.keyManifest)===null||i===void 0?void 0:i.remove(e.toKey()))):o.body}async set(e){var r;let i=new Fr({clientId:e.client_id,scope:e.scope,audience:e.audience}),o=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),o),await((r=this.keyManifest)===null||r===void 0?void 0:r.add(i.toKey()))}async clear(e){var r;let i=await this.getCacheKeys();i&&(await i.filter(o=>!e||o.includes(e)).reduce(async(o,s)=>{await o,await this.cache.remove(s)},Promise.resolve()),await((r=this.keyManifest)===null||r===void 0?void 0:r.clear()))}async wrapCacheEntry(e){let r=await this.nowProvider();return{body:e,expiresAt:Math.floor(r/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?(e=await this.keyManifest.get())===null||e===void 0?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new Fr({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,r){return r.filter(i=>{var o;let s=Fr.fromKey(i),n=new Set(s.scope&&s.scope.split(" ")),a=((o=e.scope)===null||o===void 0?void 0:o.split(" "))||[],l=s.scope&&a.reduce((c,d)=>c&&n.has(d),!0);return s.prefix==="@@auth0spajs@@"&&s.clientId===e.clientId&&s.audience===e.audience&&l})[0]}},qd=class{constructor(e,r,i){this.storage=e,this.clientId=r,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}},En=t=>typeof t=="number",HT=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],WT=t=>{if(!t.id_token)throw new Error("ID token is required but missing");let e=(s=>{let n=s.split("."),[a,l,c]=n;if(n.length!==3||!a||!l||!c)throw new Error("ID token could not be decoded");let d=JSON.parse(Qb(l)),h={__raw:s},f={};return Object.keys(d).forEach(m=>{h[m]=d[m],HT.includes(m)||(f[m]=d[m])}),{encoded:{header:a,payload:l,signature:c},header:JSON.parse(Qb(a)),claims:h,user:f}})(t.id_token);if(!e.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(e.claims.iss!==t.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);if(!e.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(e.header.alg!=="RS256")throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!e.claims.aud||typeof e.claims.aud!="string"&&!Array.isArray(e.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(e.claims.aud)){if(!e.claims.aud.includes(t.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);if(e.claims.aud.length>1){if(!e.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(e.claims.azp!==t.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)}}else if(e.claims.aud!==t.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);if(t.nonce){if(!e.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(e.claims.nonce!==t.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)}if(t.max_age&&!En(e.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(e.claims.exp==null||!En(e.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!En(e.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");let r=t.leeway||60,i=new Date(t.now||Date.now()),o=new Date(0);if(o.setUTCSeconds(e.claims.exp+r),i>o)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${o})`);if(e.claims.nbf!=null&&En(e.claims.nbf)){let s=new Date(0);if(s.setUTCSeconds(e.claims.nbf-r),i<s)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${s}`)}if(e.claims.auth_time!=null&&En(e.claims.auth_time)){let s=new Date(0);if(s.setUTCSeconds(parseInt(e.claims.auth_time)+t.max_age+r),i>s)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${s}`)}if(t.organization){let s=t.organization.trim();if(s.startsWith("org_")){let n=s;if(!e.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(n!==e.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_id}"`)}else{let n=s.toLowerCase();if(!e.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(n!==e.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_name}"`)}}return e},io=Kd(function(t,e){var r=ro&&ro.__assign||function(){return r=Object.assign||function(l){for(var c,d=1,h=arguments.length;d<h;d++)for(var f in c=arguments[d])Object.prototype.hasOwnProperty.call(c,f)&&(l[f]=c[f]);return l},r.apply(this,arguments)};function i(l,c){if(!c)return"";var d="; "+l;return c===!0?d:d+"="+c}function o(l,c,d){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(c).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(h){if(typeof h.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*h.expires),h.expires=f}return i("Expires",h.expires?h.expires.toUTCString():"")+i("Domain",h.domain)+i("Path",h.path)+i("Secure",h.secure)+i("SameSite",h.sameSite)}(d)}function s(l){for(var c={},d=l?l.split("; "):[],h=/(%[\dA-F]{2})+/gi,f=0;f<d.length;f++){var m=d[f].split("="),g=m.slice(1).join("=");g.charAt(0)==='"'&&(g=g.slice(1,-1));try{c[m[0].replace(h,decodeURIComponent)]=g.replace(h,decodeURIComponent)}catch{}}return c}function n(){return s(document.cookie)}function a(l,c,d){document.cookie=o(l,c,r({path:"/"},d))}e.__esModule=!0,e.encode=o,e.parse=s,e.getAll=n,e.get=function(l){return n()[l]},e.set=a,e.remove=function(l,c){a(l,"",r(r({},c),{expires:-1}))}});Gd(io),io.encode,io.parse,io.getAll;var GT=io.get,ay=io.set,ly=io.remove,es={get(t){let e=GT(t);if(e!==void 0)return JSON.parse(e)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0,sameSite:"none"}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),ay(t,JSON.stringify(e),i)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),ly(t,r)}},KT={get(t){return es.get(t)||es.get(`_legacy_${t}`)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),ay(`_legacy_${t}`,JSON.stringify(e),i),es.save(t,e,r)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),ly(t,r),es.remove(t,e),es.remove(`_legacy_${t}`,e)}},ZT={get(t){if(typeof sessionStorage>"u")return;let e=sessionStorage.getItem(t);return e!=null?JSON.parse(e):void 0},save(t,e){sessionStorage.setItem(t,JSON.stringify(e))},remove(t){sessionStorage.removeItem(t)}};function YT(t,e,r){var i=e===void 0?null:e,o=function(l,c){var d=atob(l);if(c){for(var h=new Uint8Array(d.length),f=0,m=d.length;f<m;++f)h[f]=d.charCodeAt(f);return String.fromCharCode.apply(null,new Uint16Array(h.buffer))}return d}(t,r!==void 0&&r),s=o.indexOf(`
`,10)+1,n=o.substring(s)+(i?"//# sourceMappingURL="+i:""),a=new Blob([n],{type:"application/javascript"});return URL.createObjectURL(a)}var ey,ty,ry,zd,XT=(ey="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",ty=null,ry=!1,function(t){return zd=zd||YT(ey,ty,ry),new Worker(zd,t)}),Rd={},Hd=class{constructor(e,r){this.cache=e,this.clientId=r,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(e){var r;let i=new Set(((r=await this.cache.get(this.manifestKey))===null||r===void 0?void 0:r.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]})}async remove(e){let r=await this.cache.get(this.manifestKey);if(r){let i=new Set(r.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return`@@auth0spajs@@::${e}`}},JT={memory:()=>new El().enclosedCache,localstorage:()=>new Vd},iy=t=>JT[t],oy=t=>{let{openUrl:e,onRedirect:r}=t,i=Sr(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},i),{openUrl:e===!1||e?e:r})},Dd=new NT,Wd=class{constructor(e){let r,i;if(this.userCache=new El().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await Dd.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),typeof window<"u"&&(()=>{if(!Cl())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(Cl().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(r=e.cacheLocation||"memory",!iy(r))throw new Error(`Invalid cache location "${r}"`);i=iy(r)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=e.legacySameSiteCookie===!1?es:KT,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(n=>`auth0.${n}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;let o=e.useCookiesForTransactions?this.cookieStorage:ZT;var s;this.scope=Sl("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new qd(o,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||ny,this.cacheManager=new jd(i,i.allKeys?void 0:new Hd(i,this.options.clientId),this.nowProvider),this.domainUrl=(s=this.options.domain,/^https?:\/\//.test(s)?s:`https://${s}`),this.tokenIssuer=((n,a)=>n?n.startsWith("https://")?n:`https://${n}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&r==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new XT)}_url(e){let r=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||sy)));return`${this.domainUrl}${e}&auth0Client=${r}`}_authorizeUrl(e){return this._url(`/authorize?${Bd(e)}`)}async _verifyIdToken(e,r,i){let o=await this.nowProvider();return WT({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:r,organization:i,leeway:this.options.leeway,max_age:(s=this.options.authorizationParams.max_age,typeof s!="string"?s:parseInt(s,10)||void 0),now:o});var s}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(e,r,i){let o=Jb(Ld()),s=Jb(Ld()),n=Ld(),a=(d=>{let h=new Uint8Array(d);return(f=>{let m={"+":"-","/":"_","=":""};return f.replace(/[+/=]/g,g=>m[g])})(window.btoa(String.fromCharCode(...Array.from(h))))})(await(async d=>await Cl().subtle.digest({name:"SHA-256"},new TextEncoder().encode(d)))(n)),l=((d,h,f,m,g,y,b,_)=>Object.assign(Object.assign(Object.assign({client_id:d.clientId},d.authorizationParams),f),{scope:Sl(h,f.scope),response_type:"code",response_mode:_||"query",state:m,nonce:g,redirect_uri:b||d.authorizationParams.redirect_uri,code_challenge:y,code_challenge_method:"S256"}))(this.options,this.scope,e,o,s,a,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,r?.response_mode),c=this._authorizeUrl(l);return{nonce:s,code_verifier:n,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:o,url:c}}async loginWithPopup(e,r){var i;if(e=e||{},!(r=r||{}).popup&&(r.popup=(a=>{let l=window.screenX+(window.innerWidth-400)/2,c=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!r.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");let o=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);r.popup.location.href=o.url;let s=await(a=>new Promise((l,c)=>{let d,h=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(h),clearTimeout(f),window.removeEventListener("message",d,!1),c(new Fd(a.popup)))},1e3),f=setTimeout(()=>{clearInterval(h),c(new Nd(a.popup)),window.removeEventListener("message",d,!1)},1e3*(a.timeoutInSeconds||60));d=function(m){if(m.data&&m.data.type==="authorization_response"){if(clearTimeout(f),clearInterval(h),window.removeEventListener("message",d,!1),a.popup.close(),m.data.response.error)return c(yt.fromPayload(m.data.response));l(m.data.response)}},window.addEventListener("message",d)}))(Object.assign(Object.assign({},r),{timeoutInSeconds:r.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(o.state!==s.state)throw new yt("state_mismatch","Invalid state");let n=((i=e.authorizationParams)===null||i===void 0?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:o.audience,scope:o.scope,code_verifier:o.code_verifier,grant_type:"authorization_code",code:s.code,redirect_uri:o.redirect_uri},{nonceIn:o.nonce,organization:n})}async getUser(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.user}async getIdTokenClaims(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.claims}async loginWithRedirect(e={}){var r;let i=oy(e),{openUrl:o,fragment:s,appState:n}=i,a=Sr(i,["openUrl","fragment","appState"]),l=((r=a.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization,c=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:d}=c,h=Sr(c,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},h),{appState:n}),l&&{organization:l}));let f=s?`${d}#${s}`:d;o?await o(f):window.location.assign(f)}async handleRedirectCallback(e=window.location.href){let r=e.split("?").slice(1);if(r.length===0)throw new Error("There are no query params available for parsing.");let{state:i,code:o,error:s,error_description:n}=(h=>{h.indexOf("#")>-1&&(h=h.substring(0,h.indexOf("#")));let f=new URLSearchParams(h);return{state:f.get("state"),code:f.get("code")||void 0,error:f.get("error")||void 0,error_description:f.get("error_description")||void 0}})(r.join("")),a=this.transactionManager.get();if(!a)throw new yt("missing_transaction","Invalid state");if(this.transactionManager.remove(),s)throw new Md(s,n||s,i,a.appState);if(!a.code_verifier||a.state&&a.state!==i)throw new yt("state_mismatch","Invalid state");let l=a.organization,c=a.nonce,d=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:o},d?{redirect_uri:d}:{}),{nonceIn:c,organization:l}),{appState:a.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(e)}catch{}}async getTokenSilently(e={}){var r;let i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:Sl(this.scope,(r=e.authorizationParams)===null||r===void 0?void 0:r.scope)})}),o=await((s,n)=>{let a=Rd[n];return a||(a=s().finally(()=>{delete Rd[n],a=null}),Rd[n]=a),a})(()=>this._getTokenSilently(i),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?o:o?.access_token}async _getTokenSilently(e){let{cacheMode:r}=e,i=Sr(e,["cacheMode"]);if(r!=="off"){let o=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(o)return o}if(r!=="cache-only"){if(!await(async(o,s=3)=>{for(let n=0;n<s;n++)if(await o())return!0;return!1})(()=>Dd.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new An;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),r!=="off"){let c=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(c)return c}let o=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(i):await this._getTokenFromIFrame(i),{id_token:s,access_token:n,oauthTokenScope:a,expires_in:l}=o;return Object.assign(Object.assign({id_token:s,access_token:n},a?{scope:a}:null),{expires_in:l})}finally{await Dd.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(e={},r={}){var i;let o=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:Sl(this.scope,(i=e.authorizationParams)===null||i===void 0?void 0:i.scope)})});return r=Object.assign(Object.assign({},FT),r),await this.loginWithPopup(o,r),(await this.cacheManager.get(new Fr({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(e){e.clientId!==null?e.clientId=e.clientId||this.options.clientId:delete e.clientId;let r=e.logoutParams||{},{federated:i}=r,o=Sr(r,["federated"]),s=i?"&federated":"";return this._url(`/v2/logout?${Bd(Object.assign({clientId:e.clientId},o))}`)+s}async logout(e={}){let r=oy(e),{openUrl:i}=r,o=Sr(r,["openUrl"]);e.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(e.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");let s=this._buildLogoutUrl(o);i?await i(s):i!==!1&&window.location.assign(s)}async _getTokenFromIFrame(e){let r=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!r.organization&&(r.organization=i);let{url:o,state:s,nonce:n,code_verifier:a,redirect_uri:l,scope:c,audience:d}=await this._prepareAuthorizeUrl(r,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new yt("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");let h=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,f=await((g,y,b=60)=>new Promise((_,w)=>{let k=window.document.createElement("iframe");k.setAttribute("width","0"),k.setAttribute("height","0"),k.style.display="none";let v=()=>{window.document.body.contains(k)&&(window.document.body.removeChild(k),window.removeEventListener("message",S,!1))},S,D=setTimeout(()=>{w(new An),v()},1e3*b);S=function(K){if(K.origin!=y||!K.data||K.data.type!=="authorization_response")return;let B=K.source;B&&B.close(),K.data.response.error?w(yt.fromPayload(K.data.response)):_(K.data.response),clearTimeout(D),window.removeEventListener("message",S,!1),setTimeout(v,2e3)},window.addEventListener("message",S,!1),window.document.body.appendChild(k),k.setAttribute("src",g)}))(o,this.domainUrl,h);if(s!==f.state)throw new yt("state_mismatch","Invalid state");let m=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:a,code:f.code,grant_type:"authorization_code",redirect_uri:l,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:n,organization:r.organization});return Object.assign(Object.assign({},m),{scope:c,oauthTokenScope:m.scope,audience:d})}catch(h){throw h.error==="login_required"&&this.logout({openUrl:!1}),h}}async _getTokenUsingRefreshToken(e){let r=await this.cacheManager.get(new Fr({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(r&&r.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new Tl(e.authorizationParams.audience||"default",e.authorizationParams.scope)}let i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,o=typeof e.timeoutInSeconds=="number"?1e3*e.timeoutInSeconds:null;try{let s=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:r&&r.refresh_token,redirect_uri:i}),o&&{timeout:o}));return Object.assign(Object.assign({},s),{scope:e.authorizationParams.scope,oauthTokenScope:s.scope,audience:e.authorizationParams.audience||"default"})}catch(s){if((s.message.indexOf("Missing Refresh Token")>-1||s.message&&s.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw s}}async _saveEntryInCache(e){let{id_token:r,decodedToken:i}=e,o=Sr(e,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:r,decodedToken:i}),await this.cacheManager.setIdToken(this.options.clientId,e.id_token,e.decodedToken),await this.cacheManager.set(o)}async _getIdTokenFromCache(){let e=this.options.authorizationParams.audience||"default",r=await this.cacheManager.getIdToken(new Fr({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return r&&r.id_token===i?.id_token?i:(this.userCache.set("@@user@@",r),r)}async _getEntryFromCache({scope:e,audience:r,clientId:i}){let o=await this.cacheManager.get(new Fr({scope:e,audience:r,clientId:i}),60);if(o&&o.access_token){let{access_token:s,oauthTokenScope:n,expires_in:a}=o,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:s},n?{scope:n}:null),{expires_in:a})}}async _requestToken(e,r){let{nonceIn:i,organization:o}=r||{},s=await qT(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),n=await this._verifyIdToken(s.id_token,i,o);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},s),{decodedToken:n,scope:e.scope,audience:e.audience||"default"}),s.scope?{oauthTokenScope:s.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(o||n.claims.org_id),Object.assign(Object.assign({},s),{decodedToken:n})}};async function cy(t){let e=new Wd(t);return await e.checkSession(),e}var Al=class{config;client;constructor(e){this.config=e,Object.freeze(this.config)}async initialize(){let{domain:e,clientId:r,authorizationParams:i}=this.config;if(this.client=await cy({domain:e,clientId:r,authorizationParams:i}),window.location.search.includes("code=")||window.location.search.includes("error=")){try{let o=await this.client.handleRedirectCallback();console.log({result:o})}catch(o){let{error:s,error_description:n}=o;console.error("Error handling redirect callback:",{error:s,error_description:n})}window.history.replaceState({},document.title,window.location.pathname)}}async login(){return console.log("login"),await this.client.loginWithRedirect()}async logout(){this.client.logout({openUrl(e){window.location.replace(e)}})}async isAuthenticated(){return await this.client.isAuthenticated()}async getAuthData(){return await this.client.isAuthenticated()?await this.client.getIdTokenClaims():void 0}async getAccessToken(){return await this.client.getTokenSilently()}};var uy=async(t,e)=>{let r=new Al(e);return await r.initialize(),r};var Ol=t=>{if(!(t instanceof ai))throw new Error("Passed instance must extend `_State`");let[e,r]=Oe(t.state()),i=t.setState.bind(t);return new Proxy(t,{get(s,n){return n==="state"?e:n==="setState"&&typeof i=="function"?a=>{i(a),r(t.state())}:s[n]},set(s,n,a){if(n==="state"||n==="setState")throw new Error(`Cannot overwrite ${String(n)}.`);return s[n]=a,!0}})};function Cr(t){return function(e){let r=Object.keys(t.shape);return class extends e{constructor(...i){super(...i),r.forEach(o=>{Object.defineProperty(this,o,{get(){return this.data[o]}})})}}}}var $l=G.object({key:G.string(),name:G.string(),usageCount:G.number()}),li=class{data;constructor(e){this.data=e}static from(e){let r=$l.parse(e);return new li(r)}};li=yr([Cr($l)],li);var dy=G.object({title:G.string(),description:G.string(),address:G.string(),zip:G.string().regex(/^\d{4}$/),muncipiality:G.string(),phone:G.string(),email:G.string().email(),links:G.array(G.object({href:G.string()})),tags:G.array($l.omit({usageCount:!0}))}),ci=class{data;constructor(e){this.data=e}static from(e){let r=dy.parse(e);return new ci(r)}};ci=yr([Cr(dy)],ci);var hy=G.object({letter:G.string().length(1),count:G.number()}),ui=class{data;constructor(e){this.data=e}static from(e){let r=hy.parse(e);return new ui(r)}};ui=yr([Cr(hy)],ui);var Il=class{db;constructor(e){this.db=e}async loadIndexLetters(){return(await this.db.getIndexLetters()).sort((i,o)=>i.letter<o.letter?-1:1).map(i=>ui.from(i))}async loadTags(){return(await this.db.getTags()).filter(({usageCount:i})=>i).sort((i,o)=>i.name<o.name?-1:1).map(i=>li.from(i))}async loadListings(e){return await eo(),(await this.db.getListings(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>ci.from(o))}};var Pl=t=>t;var py=async t=>{let e=Ol(_l.from({tagsMatchType:"ANY"})),r=new Il(t),[i]=xt(()=>r.loadTags()),[o]=xt(()=>r.loadIndexLetters()),[s]=xt(()=>e.state()?e.state():!1,a=>r.loadListings(a));return Pl({resources:{tags:i,indexLetters:o,listings:s},filters:()=>e})};var Zd=G.object({href:G.string()}),QT=G.object({id:G.any(),owner:G.any(),title:G.string(),description:G.string(),address:G.string(),zip:G.string().regex(/^\d{4}$/),muncipiality:G.string(),phone:G.string(),email:G.string().email(),tags:G.array(G.any()),links:G.array(Zd)}),ts=class t extends ai{constructor(e){super(e)}static from(e){let r=QT.parse(e);return new t(r)}};var fy=G.object({id:G.any(),name:G.string(),email:G.string().email()}),di=class{data;constructor(e){this.data=e}static from(e){let r=fy.parse(e);return new di(r)}};di=yr([Cr(fy)],di);var Ll=class{db;constructor(e){this.db=e}async getUser(e){await eo(),await this.db.authenticate(e,!0);let r=await this.db.getUserData();return di.from(r)}async loadListingsByEmail(e){return await eo(),(await this.db.getListingsByEmail(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>ts.from(o))}async createListing(e){}async updateListing(e){}};var my=(t,e)=>{let r=new Ll(t),[i,o]=Oe(!1),[s]=xt(()=>i(),()=>e.isAuthenticated()),[n]=xt(()=>s(),async()=>await e.getAuthData()),a=xe(()=>n()?.email_verified?!1:n()?.email),[l]=xt(()=>{if(n()&&!a())return!0;o(!0)},async()=>{let h=await e.getAccessToken(),f=await r.getUser(h);return console.log({user:f}),f}),[c]=xt(()=>l(),async({email:h})=>(await r.loadListingsByEmail(h)).map(m=>Ol(m)));return Pl({resources:{user:l,listings:c},mustVerifyEmail:a,login:e.login.bind(e),logout:e.logout.bind(e)})};var gy=To(),by=t=>{let{db:e,configs:r}=Yb(),[i]=xt(()=>py(e)),[o]=xt(async()=>{let n=await uy(e,r.auth0);return my(e,n)}),s={directory:i,account:o};return Y(gy.Provider,{value:s,get children(){return t.children}})},Tr=()=>{let t=Oi(gy);if(!t)throw new Error("useService must be used within an ServiceProvider");return t};var eE=ne("<div><sl-spinner></sl-spinner><div>",!0,!1),yy=function(t){return t.small="small",t.medium="medium",t.large="large",t}(yy||{}),tE=ot({centered:t=>({textAlign:"center"})}),rE=kg(t=>({small:`font-size: ${t.fontSizeSm}; --trackwidth: 3px;`,medium:`font-size: ${t.fontSizeMd}; --trackwidth: 5px;`,large:`font-size: ${t.fontSizeLg}; --trackwidth: 10px;`})),hi=t=>{let e=t.size||yy.large,r=rE()[e];return(()=>{var i=eE(),o=i.firstChild,s=o.nextSibling;return o._$owner=X(),ee(s,()=>t.children),ke(n=>{var a=Ri("loading",tE.centered),l=r;return a!==n.e&&$e(i,n.e=a),n.t=wp(o,l,n.t),n},{e:void 0,t:void 0}),i})()};var iE=ne("<sl-button>Logout",!0,!1),vy=t=>{let{account:e}=Tr(),r=xe(()=>e()?.resources.user());return Y(Ir,{get fallback(){return Y(hi,{size:"large"})},get children(){return[xe(()=>t.children),Y(kt,{get when(){return r()},get children(){return[xe(()=>r()?.name),(()=>{var i=iE();return ve(i,"click",()=>e()?.logout()),i._$owner=X(),i})()]}})]}})};var sE=ne("<sl-icon-button style=font-size:20px;>",!0,!1),nE=ne("<div><section><div><h1></h1></div><div>"),aE=ne("<div>Error: "),On=ot({app:t=>({padding:"10px 15px",color:t.colorOnPrimary,backgroundColor:t.colorPrimary,font:"16px var(--sl-font-sans)",fontWeight:"var(--sl-font-weight-normal)"}),border:t=>({borderRadius:"10px",border:"5px solid",borderColor:t.colorAccent}),header:{display:"flex",justifyContent:"space-between"},title:t=>({fontFamily:"'Playwrite HU', sans-serif",fontSize:t.fontSizeLg,cursor:"pointer"}),user:{display:"flex",flexDirection:"column",alignItems:"end"}}),wy=t=>(()=>{var e=nE(),r=e.firstChild,i=r.firstChild,o=i.firstChild,s=i.nextSibling;return ve(o,"click",t.toggleMainPages),ee(o,()=>t.title),ee(s,Y(vy,{get children(){var n=sE();return ve(n,"click",t.toggleMainPages),n._$owner=X(),ke(()=>n.name=t.selectedPage==="PAGE_LISTINGS"?"person-circle":"arrow-left-circle"),n}})),ee(e,Y(Sc,{fallback:n=>(console.error(n),(()=>{var a=aE(),l=a.firstChild;return ee(a,()=>n.message,null),a})()),get children(){return Y(Ir,{get fallback(){return Y(hi,{children:"Layout"})},get children(){return t.children}})}}),null),ke(n=>{var a=Ri(On.app,On.border),l=On.header,c=On.title,d=On.user;return a!==n.e&&$e(e,n.e=a),l!==n.t&&$e(r,n.t=l),c!==n.a&&$e(o,n.a=c),d!==n.o&&$e(s,n.o=d),n},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var lE=ne("<span><sl-icon></sl-icon><span>",!0,!1),Yd=ot({wrapper:{display:"flex"},label:{paddingInlineStart:"var(--sl-spacing-2x-small)"},icon:{minWidth:"20px"}}),zl=t=>(()=>{var e=lE(),r=e.firstChild,i=r.nextSibling;return r._$owner=X(),ee(i,()=>t.children),ke(o=>{var s=Yd.wrapper,n=Yd.icon,a=t.icon,l=t.label,c=Yd.label;return s!==o.e&&$e(e,o.e=s),n!==o.t&&$e(r,o.t=n),a!==o.a&&(r.name=o.a=a),l!==o.o&&(r.label=o.o=l),c!==o.i&&$e(i,o.i=c),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();var cE=ne("<a target=_blank>"),_y=t=>{let{pathname:e,hostname:r}=new URL(t.link.href),i={icon:"globe",title:"Website"};return r.match(/facebook\.(no|com)/)?(i.icon="facebook",i.title="Facebook"):r.match(/instagram\.(no|com)/)?(i.icon="instagram",i.title=`@${e.split("/").pop()}`):r.match(/linkedin\.(no|com)/)&&(i.icon="linkedin",i.title="LinkedIn"),Y(zl,{get icon(){return i.icon},label:r,get children(){var o=cE();return ee(o,()=>i.title),ke(()=>Tc(o,"href",t.link.href)),o}})};var uE=ne("<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call",!0,!1),xy=t=>{let e=()=>{navigator.clipboard.writeText(t.phoneNumber)},r=()=>{window.location.href=`tel:${t.phoneNumber}`};return(()=>{var i=uE(),o=i.firstChild,s=o.firstChild,n=o.nextSibling,a=n.firstChild,l=a.firstChild,c=a.nextSibling,d=c.firstChild;return i._$owner=X(),o.slot="trigger",o.caret=!0,o._$owner=X(),s.name="telephone",s._$owner=X(),ee(o,()=>t.phoneNumber,null),n._$owner=X(),ve(a,"click",e),a._$owner=X(),l.name="copy",l._$owner=X(),ve(c,"click",r),c._$owner=X(),d.name="telephone",d._$owner=X(),i})()};var dE=ne("<br>"),ky=t=>[xe(()=>t.address),dE(),xe(()=>t.zip)," ",xe(()=>t.muncipiality)];var hE=ne("<div><div class=text>"),pE=ne("<sl-button><span>",!0,!1),Sy=ot({button:{marginTop:"5px",marginRight:"5px"},badge:{position:"absolute",top:"-2px",right:"-2px",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",borderWidth:"1px",borderStyle:"solid",borderRadius:"5px",backgroundColor:"var(--sl-color-primary-50)",borderColor:"var(--sl-color-primary-200)","& > .text":{fontSize:"8px",color:"var(--sl-color-primary-800)"}}}),Xd=t=>(()=>{var e=pE(),r=e.firstChild;return ve(e,"click",t.onClick,!0),e._$owner=X(),ee(r,()=>t.buttonLabel),ee(e,Y(kt,{get when(){return t.badgeLabel},get children(){var i=hE(),o=i.firstChild;return ee(o,()=>t.badgeLabel),ke(()=>$e(i,Sy.badge)),i}}),null),ke(i=>{var o=t.size||"medium",s=t.isActive?"primary":"default",n=Sy.button,a=t.disabled;return o!==i.e&&(e.size=i.e=o),s!==i.t&&(e.variant=i.t=s),n!==i.a&&$e(e,i.a=n),a!==i.o&&(e.disabled=i.o=a),i},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();vp(["click"]);var fE=ne("<section><div></div><div><sl-switch>:</sl-switch></div><div>",!0,!1),Jd=ot({section:t=>({display:"flex",flexDirection:"column",alignItems:"center",marginBottom:t.gapMd}),filter:t=>({display:"flex",overflowY:"hidden",overflowX:"scroll"})}),Cy=t=>{let{directory:e}=Tr(),r=()=>e()?.filters(),i=()=>e()?.resources.tags(),o=()=>e()?.resources.indexLetters(),s=()=>e()?.resources.listings.loading,n=()=>r()?.state().tagsMatchType==="ALL",a=()=>{let l=n()?"ANY":"ALL";r()?.setTagsMatchType(l)};return Yr(()=>console.log(r())),(()=>{var l=fE(),c=l.firstChild,d=c.nextSibling,h=d.firstChild,f=h.firstChild,m=d.nextSibling;return ee(c,()=>o()?.map(({letter:g,count:y})=>Y(Xd,{buttonLabel:g,badgeLabel:y,get isActive(){return!!r()?.isActiveIndexLetter(g)},get disabled(){return s()},onClick:()=>r()?.setIndexLetter(g)}))),ve(h,"click",()=>a()),h.size="small",h._$owner=X(),ee(h,()=>n()?"M\xE5 match alle valgte tagger":"Match p\xE5 minst \xE9n av valgte tager",f),ee(m,()=>i()?.map(g=>Y(Xd,{size:"small",get isActive(){return!!r()?.hasTag(g.key)},get buttonLabel(){return g.name},get badgeLabel(){return g.usageCount},get disabled(){return s()},onClick:()=>r()?.setTag(g.key,!0)}))),ee(l,()=>t.children,null),ke(g=>{var y=Jd.section,b=Jd.filter,_=n(),w=s(),k=Jd.filter;return y!==g.e&&$e(l,g.e=y),b!==g.t&&$e(c,g.t=b),_!==g.a&&(h.checked=g.a=_),w!==g.o&&(h.disabled=g.o=w),k!==g.i&&$e(m,g.i=k),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()};var mE=ne("<div> treff."),gE=ne("<section>"),bE=ne("<sl-card><div slot=header><div class=title></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>",!0,!1),yE=ne("<span><br>"),vE=ne("<sl-tag>",!0,!1),Qd=ot({card:{"--border-radius":"15px",width:"100%",marginBottom:"1rem","& .flex-middle > *":{justifySelf:"center"}},cardHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",position:"relative",alignItems:"center",rowGap:"1rem","> * ":{flex:"1 1 33.33%",minWidth:"200px",textAlign:"center","@media (min-width: 500px)":{"&:first-child":{textAlign:"left"}},"@media (min-width: 700px)":{"&:last-child":{textAlign:"right"}}},"& .title":{fontWeight:"bolder"}},cardBody:{display:"flex",justifyContent:"space-between"}}),Ty=()=>{let{directory:t}=Tr(),[e,r]=Oe(0),i=()=>t()?.filters(),o=()=>{let s=t()?.resources.listings();return r(s?.length||0),s};return(()=>{var s=gE();return ee(s,Y(Cy,{get children(){var n=mE(),a=n.firstChild;return ee(n,e,a),n}}),null),ee(s,Y(Ir,{get fallback(){return Y(hi,{children:"Listings"})},get children(){return Y($i,{get each(){return o()},children:n=>(()=>{var a=bE(),l=a.firstChild,c=l.firstChild,d=c.nextSibling,h=d.nextSibling,f=l.nextSibling,m=f.firstChild,g=m.firstChild,y=g.nextSibling,b=m.nextSibling;return a._$owner=X(),ee(c,()=>n.title),ee(d,Y(zl,{label:"beskrivelse",icon:"info-circle",get children(){return n.description}})),ee(h,Y(xy,{get phoneNumber(){return n.phone}})),ee(g,Y(ky,n)),ee(y,()=>n.links.map(_=>(()=>{var w=yE(),k=w.firstChild;return ee(w,Y(_y,{link:_}),k),w})())),ee(b,()=>n.tags.map(_=>(()=>{var w=vE();return ve(w,"click",()=>i()?.setTag(_.key)),w.style.setProperty("cursor","pointer"),w.variant="primary",w.size="small",w._$owner=X(),ee(w,()=>_.name),w})())),ke(_=>{var w=Qd.card,k=Qd.cardHeader,v=Qd.cardBody;return w!==_.e&&$e(a,_.e=w),k!==_.t&&$e(l,_.t=k),v!==_.a&&$e(m,_.a=v),_},{e:void 0,t:void 0,a:void 0}),a})()})}}),null),s})()};var Oy=Object.defineProperty,wE=Object.defineProperties,_E=Object.getOwnPropertyDescriptor,xE=Object.getOwnPropertyDescriptors,Ey=Object.getOwnPropertySymbols,kE=Object.prototype.hasOwnProperty,SE=Object.prototype.propertyIsEnumerable,eh=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),th=t=>{throw TypeError(t)},Ay=(t,e,r)=>e in t?Oy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,gt=(t,e)=>{for(var r in e||(e={}))kE.call(e,r)&&Ay(t,r,e[r]);if(Ey)for(var r of Ey(e))SE.call(e,r)&&Ay(t,r,e[r]);return t},Ur=(t,e)=>wE(t,xE(e)),u=(t,e,r,i)=>{for(var o=i>1?void 0:i?_E(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&Oy(e,r,o),o},$y=(t,e,r)=>e.has(t)||th("Cannot "+r),Iy=(t,e,r)=>($y(t,e,"read from private field"),r?r.call(t):e.get(t)),Py=(t,e,r)=>e.has(t)?th("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Ly=(t,e,r,i)=>($y(t,e,"write to private field"),i?i.call(t,r):e.set(t,r),r),CE=function(t,e){this[0]=t,this[1]=e},zy=t=>{var e=t[eh("asyncIterator")],r=!1,i,o={};return e==null?(e=t[eh("iterator")](),i=s=>o[s]=n=>e[s](n)):(e=e.call(t),i=s=>o[s]=n=>{if(r){if(r=!1,s==="throw")throw n;return n}return r=!0,{done:!1,value:new CE(new Promise(a=>{var l=e[s](n);l instanceof Object||th("Object expected"),a(l)}),1)}}),o[eh("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=s=>{throw s},"return"in e&&i("return"),o};var rs=new WeakMap,$n=new WeakMap,In=new WeakMap,rh=new WeakSet,Rl=new WeakMap,st=class{constructor(t,e){this.handleFormData=r=>{let i=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof o=="string"&&o.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{r.formData.append(o,a.toString())}):r.formData.append(o,s.toString()))},this.handleFormSubmit=r=>{var i;let o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=rs.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Rl.set(this.host,[])},this.handleInteraction=r=>{let i=Rl.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=gt({form:r=>{let i=r.form;if(i){let s=r.getRootNode().querySelector(`#${i}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Rl.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Rl.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,rs.has(this.form)?rs.get(this.form).add(this.host):rs.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$n.has(this.form)||($n.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),In.has(this.form)||(In.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=rs.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$n.has(this.form)&&(this.form.reportValidity=$n.get(this.form),$n.delete(this.form)),In.has(this.form)&&(this.form.checkValidity=In.get(this.form),In.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?rh.add(t):rh.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&r.setAttribute(i,e.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!rh.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},is=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ry=Object.freeze(Ur(gt({},is),{valid:!1,valueMissing:!0})),Dy=Object.freeze(Ur(gt({},is),{valid:!1,customError:!0}));function ih(t){let e=new FormData(t),r={};return e.forEach((i,o)=>{if(Reflect.has(r,o)){let s=r[o];Array.isArray(s)?s.push(i):r[o]=[r[o],i]}else r[o]=i}),r}var Dl=globalThis,Ml=Dl.ShadowRoot&&(Dl.ShadyCSS===void 0||Dl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oh=Symbol(),My=new WeakMap,Pn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==oh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Ml&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=My.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&My.set(r,e))}return e}toString(){return this.cssText}},Ny=t=>new Pn(typeof t=="string"?t:t+"",void 0,oh),A=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new Pn(r,t,oh)},sh=(t,e)=>{if(Ml)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),o=Dl.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},Nl=Ml?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Ny(r)})(t):t;var{is:TE,defineProperty:EE,getOwnPropertyDescriptor:AE,getOwnPropertyNames:OE,getOwnPropertySymbols:$E,getPrototypeOf:IE}=Object,Fl=globalThis,Fy=Fl.trustedTypes,PE=Fy?Fy.emptyScript:"",LE=Fl.reactiveElementPolyfillSupport,Ln=(t,e)=>t,pi={toAttribute(t,e){switch(e){case Boolean:t=t?PE:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ul=(t,e)=>!TE(t,e),Uy={attribute:!0,type:String,converter:pi,reflect:!1,hasChanged:Ul};Symbol.metadata??=Symbol("metadata"),Fl.litPropertyMetadata??=new WeakMap;var Br=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Uy){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&EE(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){let{get:o,set:s}=AE(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return o?.call(this)},set(n){let a=o?.call(this);s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Uy}static _$Ei(){if(this.hasOwnProperty(Ln("elementProperties")))return;let e=IE(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ln("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ln("properties"))){let r=this.properties,i=[...OE(r),...$E(r)];for(let o of i)this.createProperty(o,r[o])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)r.unshift(Nl(o))}else e!==void 0&&r.push(Nl(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:pi).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=i.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:pi;this._$Em=o,this[o]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Ul)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Br.elementStyles=[],Br.shadowRootOptions={mode:"open"},Br[Ln("elementProperties")]=new Map,Br[Ln("finalized")]=new Map,LE?.({ReactiveElement:Br}),(Fl.reactiveElementVersions??=[]).push("2.0.4");var ah=globalThis,Bl=ah.trustedTypes,By=Bl?Bl.createPolicy("lit-html",{createHTML:t=>t}):void 0,lh="$lit$",Vr=`lit$${Math.random().toFixed(9).slice(2)}$`,ch="?"+Vr,zE=`<${ch}>`,no=document,Rn=()=>no.createComment(""),Dn=t=>t===null||typeof t!="object"&&typeof t!="function",uh=Array.isArray,Gy=t=>uh(t)||typeof t?.[Symbol.iterator]=="function",nh=`[ 	
\f\r]`,zn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vy=/-->/g,jy=/>/g,oo=RegExp(`>|${nh}(?:([^\\s"'>=/]+)(${nh}*=${nh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qy=/'/g,Hy=/"/g,Ky=/^(?:script|style|textarea|title)$/i,dh=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x=dh(1),Zy=dh(2),Yy=dh(3),nt=Symbol.for("lit-noChange"),Ie=Symbol.for("lit-nothing"),Wy=new WeakMap,so=no.createTreeWalker(no,129);function Xy(t,e){if(!uh(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return By!==void 0?By.createHTML(e):e}var Jy=(t,e)=>{let r=t.length-1,i=[],o,s=e===2?"<svg>":e===3?"<math>":"",n=zn;for(let a=0;a<r;a++){let l=t[a],c,d,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,d=n.exec(l),d!==null);)f=n.lastIndex,n===zn?d[1]==="!--"?n=Vy:d[1]!==void 0?n=jy:d[2]!==void 0?(Ky.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=oo):d[3]!==void 0&&(n=oo):n===oo?d[0]===">"?(n=o??zn,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?oo:d[3]==='"'?Hy:qy):n===Hy||n===qy?n=oo:n===Vy||n===jy?n=zn:(n=oo,o=void 0);let m=n===oo&&t[a+1].startsWith("/>")?" ":"";s+=n===zn?l+zE:h>=0?(i.push(c),l.slice(0,h)+lh+l.slice(h)+Vr+m):l+Vr+(h===-2?a:m)}return[Xy(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Mn=class t{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,d]=Jy(e,r);if(this.el=t.createElement(c,i),so.currentNode=this.el.content,r===2||r===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=so.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(lh)){let f=d[n++],m=o.getAttribute(h).split(Vr),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?jl:g[1]==="?"?ql:g[1]==="@"?Hl:lo}),o.removeAttribute(h)}else h.startsWith(Vr)&&(l.push({type:6,index:s}),o.removeAttribute(h));if(Ky.test(o.tagName)){let h=o.textContent.split(Vr),f=h.length-1;if(f>0){o.textContent=Bl?Bl.emptyScript:"";for(let m=0;m<f;m++)o.append(h[m],Rn()),so.nextNode(),l.push({type:2,index:++s});o.append(h[f],Rn())}}}else if(o.nodeType===8)if(o.data===ch)l.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Vr,h+1))!==-1;)l.push({type:7,index:s}),h+=Vr.length-1}s++}}static createElement(e,r){let i=no.createElement("template");return i.innerHTML=e,i}};function ao(t,e,r=t,i){if(e===nt)return e;let o=i!==void 0?r._$Co?.[i]:r._$Cl,s=Dn(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=o:r._$Cl=o),o!==void 0&&(e=ao(t,o._$AS(t,e.values),o,i)),e}var Vl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,o=(e?.creationScope??no).importNode(r,!0);so.currentNode=o;let s=so.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new os(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Wl(s,this,e)),this._$AV.push(c),l=i[++a]}n!==l?.index&&(s=so.nextNode(),n++)}return so.currentNode=no,o}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},os=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,o){this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ao(this,e,r),Dn(e)?e===Ie||e==null||e===""?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):e!==this._$AH&&e!==nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gy(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ie&&Dn(this._$AH)?this._$AA.nextSibling.data=e:this.T(no.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Mn.createElement(Xy(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(r);else{let s=new Vl(o,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=Wy.get(e.strings);return r===void 0&&Wy.set(e.strings,r=new Mn(e)),r}k(e){uh(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,o=0;for(let s of e)o===r.length?r.push(i=new t(this.O(Rn()),this.O(Rn()),this,this.options)):i=r[o],i._$AI(s),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},lo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,s){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ie}_$AI(e,r=this,i,o){let s=this.strings,n=!1;if(s===void 0)e=ao(this,e,r,0),n=!Dn(e)||e!==this._$AH&&e!==nt,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=ao(this,a[i+l],r,l),c===nt&&(c=this._$AH[l]),n||=!Dn(c)||c!==this._$AH[l],c===Ie?e=Ie:e!==Ie&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},jl=class extends lo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ie?void 0:e}},ql=class extends lo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ie)}},Hl=class extends lo{constructor(e,r,i,o,s){super(e,r,i,o,s),this.type=5}_$AI(e,r=this){if((e=ao(this,e,r,0)??Ie)===nt)return;let i=this._$AH,o=e===Ie&&i!==Ie||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Ie&&(i===Ie||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Wl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ao(this,e)}},Qy={M:lh,P:Vr,A:ch,C:1,L:Jy,R:Vl,D:Gy,V:ao,I:os,H:lo,N:ql,U:Hl,B:jl,F:Wl},RE=ah.litHtmlPolyfillSupport;RE?.(Mn,os),(ah.litHtmlVersions??=[]).push("3.2.1");var ev=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(o===void 0){let s=r?.renderBefore??null;i._$litPart$=o=new os(e.insertBefore(Rn(),s),s,void 0,r??{})}return o._$AI(t),o};var fi=class extends Br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ev(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};fi._$litElement$=!0,fi.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:fi});var DE=globalThis.litElementPolyfillSupport;DE?.({LitElement:fi});(globalThis.litElementVersions??=[]).push("4.1.1");var tv=A`
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
`;var $=A`
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
`;var ME={attribute:!0,type:String,converter:pi,reflect:!1,hasChanged:Ul},NE=(t=ME,e,r)=>{let{kind:i,metadata:o}=r,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),i==="accessor"){let{name:n}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){let{name:n}=r;return function(a){let l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,r)=>typeof r=="object"?NE(t,e,r):((i,o,s)=>{let n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function R(t){return p({...t,state:!0,attribute:!1})}function Er(t){return(e,r)=>{let i=typeof e=="function"?e:e[r];Object.assign(i,t)}}var mi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function O(t,e){return(r,i,o)=>{let s=n=>n.renderRoot?.querySelector(t)??null;if(e){let{get:n,set:a}=typeof i=="object"?r:o??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return mi(r,i,{get(){let l=n.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return mi(r,i,{get(){return s(this)}})}}function rv(t){return(e,r)=>mi(e,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var Gl,T=class extends fi{constructor(){super(),Py(this,Gl,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let o=" (unknown version)",s=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(o&&s&&o===s)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,r){Iy(this,Gl)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Ly(this,Gl,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};Gl=new WeakMap;T.version="2.19.0";T.dependencies={};u([p()],T.prototype,"dir",2);u([p()],T.prototype,"lang",2);var Nn=class extends T{render(){return x` <slot></slot> `}};Nn.styles=[$,tv];Nn.define("sl-visually-hidden");var iv=A`
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
`;var ov=A`
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
`;var hh=new Set,ss=new Map,co,ph="ltr",fh="en",sv=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(sv){let t=new MutationObserver(nv);ph=document.documentElement.dir||"ltr",fh=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Fn(...t){t.map(e=>{let r=e.$code.toLowerCase();ss.has(r)?ss.set(r,Object.assign(Object.assign({},ss.get(r)),e)):ss.set(r,e),co||(co=e)}),nv()}function nv(){sv&&(ph=document.documentElement.dir||"ltr",fh=document.documentElement.lang||navigator.language),[...hh.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Kl=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){hh.add(this.host)}hostDisconnected(){hh.delete(this.host)}dir(){return`${this.host.dir||ph}`.toLowerCase()}lang(){return`${this.host.lang||fh}`.toLowerCase()}getTranslationData(e){var r,i;let o=new Intl.Locale(e.replace(/_/g,"-")),s=o?.language.toLowerCase(),n=(i=(r=o?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=ss.get(`${s}-${n}`),l=ss.get(s);return{locale:o,language:s,region:n,primary:a,secondary:l}}exists(e,r){var i;let{primary:o,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[e]||s&&s[e]||r.includeFallback&&co&&co[e])}term(e,...r){let{primary:i,secondary:o}=this.getTranslationData(this.lang()),s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(co&&co[e])s=co[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...r):s}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var av={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Fn(av);var lv=av;var W=class extends Kl{};Fn(lv);var Ar=Math.min,vt=Math.max,Bn=Math.round,Vn=Math.floor,ur=t=>({x:t,y:t}),FE={left:"right",right:"left",bottom:"top",top:"bottom"},UE={start:"end",end:"start"};function Yl(t,e,r){return vt(t,Ar(e,r))}function uo(t,e){return typeof t=="function"?t(e):t}function jr(t){return t.split("-")[0]}function ho(t){return t.split("-")[1]}function mh(t){return t==="x"?"y":"x"}function Xl(t){return t==="y"?"height":"width"}function gi(t){return["top","bottom"].includes(jr(t))?"y":"x"}function Jl(t){return mh(gi(t))}function cv(t,e,r){r===void 0&&(r=!1);let i=ho(t),o=Jl(t),s=Xl(o),n=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=Un(n)),[n,Un(n)]}function uv(t){let e=Un(t);return[Zl(t),e,Zl(e)]}function Zl(t){return t.replace(/start|end/g,e=>UE[e])}function BE(t,e,r){let i=["left","right"],o=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return r?e?o:i:e?i:o;case"left":case"right":return e?s:n;default:return[]}}function dv(t,e,r,i){let o=ho(t),s=BE(jr(t),r==="start",i);return o&&(s=s.map(n=>n+"-"+o),e&&(s=s.concat(s.map(Zl)))),s}function Un(t){return t.replace(/left|right|bottom|top/g,e=>FE[e])}function VE(t){return{top:0,right:0,bottom:0,left:0,...t}}function gh(t){return typeof t!="number"?VE(t):{top:t,right:t,bottom:t,left:t}}function po(t){let{x:e,y:r,width:i,height:o}=t;return{width:i,height:o,top:r,left:e,right:e+i,bottom:r+o,x:e,y:r}}function hv(t,e,r){let{reference:i,floating:o}=t,s=gi(e),n=Jl(e),a=Xl(n),l=jr(e),c=s==="y",d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2,m;switch(l){case"top":m={x:d,y:i.y-o.height};break;case"bottom":m={x:d,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:h};break;case"left":m={x:i.x-o.width,y:h};break;default:m={x:i.x,y:i.y}}switch(ho(e)){case"start":m[n]-=f*(r&&c?-1:1);break;case"end":m[n]+=f*(r&&c?-1:1);break}return m}var pv=async(t,e,r)=>{let{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:n}=r,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e)),c=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=hv(c,i,l),f=i,m={},g=0;for(let y=0;y<a.length;y++){let{name:b,fn:_}=a[y],{x:w,y:k,data:v,reset:S}=await _({x:d,y:h,initialPlacement:i,placement:f,strategy:o,middlewareData:m,rects:c,platform:n,elements:{reference:t,floating:e}});d=w??d,h=k??h,m={...m,[b]:{...m[b],...v}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):S.rects),{x:d,y:h}=hv(c,f,l)),y=-1)}return{x:d,y:h,placement:f,strategy:o,middlewareData:m}};async function Ql(t,e){var r;e===void 0&&(e={});let{x:i,y:o,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=uo(e,t),g=gh(m),b=a[f?h==="floating"?"reference":"floating":h],_=po(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(b)))==null||r?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),w=h==="floating"?{x:i,y:o,width:n.floating.width,height:n.floating.height}:n.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),v=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},S=po(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:k,strategy:l}):w);return{top:(_.top-S.top+g.top)/v.y,bottom:(S.bottom-_.bottom+g.bottom)/v.y,left:(_.left-S.left+g.left)/v.x,right:(S.right-_.right+g.right)/v.x}}var fv=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:i,placement:o,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=uo(t,e)||{};if(c==null)return{};let h=gh(d),f={x:r,y:i},m=Jl(o),g=Xl(m),y=await n.getDimensions(c),b=m==="y",_=b?"top":"left",w=b?"bottom":"right",k=b?"clientHeight":"clientWidth",v=s.reference[g]+s.reference[m]-f[m]-s.floating[g],S=f[m]-s.reference[m],D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c)),K=D?D[k]:0;(!K||!await(n.isElement==null?void 0:n.isElement(D)))&&(K=a.floating[k]||s.floating[g]);let B=v/2-S/2,q=K/2-y[g]/2-1,E=Ar(h[_],q),J=Ar(h[w],q),Q=E,he=K-y[g]-J,Te=K/2-y[g]/2+B,Re=Yl(Q,Te,he),ht=!l.arrow&&ho(o)!=null&&Te!==Re&&s.reference[g]/2-(Te<Q?E:J)-y[g]/2<0,pt=ht?Te<Q?Te-Q:Te-he:0;return{[m]:f[m]+pt,data:{[m]:Re,centerOffset:Te-Re-pt,...ht&&{alignmentOffset:pt}},reset:ht}}});var mv=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;let{placement:o,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...b}=uo(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};let _=jr(o),w=gi(a),k=jr(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=f||(k||!y?[Un(a)]:uv(a)),D=g!=="none";!f&&D&&S.push(...dv(a,y,g,v));let K=[a,...S],B=await Ql(e,b),q=[],E=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&q.push(B[_]),h){let Te=cv(o,n,v);q.push(B[Te[0]],B[Te[1]])}if(E=[...E,{placement:o,overflows:q}],!q.every(Te=>Te<=0)){var J,Q;let Te=(((J=s.flip)==null?void 0:J.index)||0)+1,Re=K[Te];if(Re)return{data:{index:Te,overflows:E},reset:{placement:Re}};let ht=(Q=E.filter(pt=>pt.overflows[0]<=0).sort((pt,_t)=>pt.overflows[1]-_t.overflows[1])[0])==null?void 0:Q.placement;if(!ht)switch(m){case"bestFit":{var he;let pt=(he=E.filter(_t=>{if(D){let nr=gi(_t.placement);return nr===w||nr==="y"}return!0}).map(_t=>[_t.placement,_t.overflows.filter(nr=>nr>0).reduce((nr,Aw)=>nr+Aw,0)]).sort((_t,nr)=>_t[1]-nr[1])[0])==null?void 0:he[0];pt&&(ht=pt);break}case"initialPlacement":ht=a;break}if(o!==ht)return{reset:{placement:ht}}}return{}}}};async function jE(t,e){let{placement:r,platform:i,elements:o}=t,s=await(i.isRTL==null?void 0:i.isRTL(o.floating)),n=jr(r),a=ho(r),l=gi(r)==="y",c=["left","top"].includes(n)?-1:1,d=s&&l?-1:1,h=uo(e,t),{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*d,y:f*c}:{x:f*c,y:m*d}}var gv=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;let{x:o,y:s,placement:n,middlewareData:a}=e,l=await jE(e,t);return n===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:n}}}}},bv=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:i,placement:o}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:b=>{let{x:_,y:w}=b;return{x:_,y:w}}},...l}=uo(t,e),c={x:r,y:i},d=await Ql(e,l),h=gi(jr(o)),f=mh(h),m=c[f],g=c[h];if(s){let b=f==="y"?"top":"left",_=f==="y"?"bottom":"right",w=m+d[b],k=m-d[_];m=Yl(w,m,k)}if(n){let b=h==="y"?"top":"left",_=h==="y"?"bottom":"right",w=g+d[b],k=g-d[_];g=Yl(w,g,k)}let y=a.fn({...e,[f]:m,[h]:g});return{...y,data:{x:y.x-r,y:y.y-i,enabled:{[f]:s,[h]:n}}}}}};var yv=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;let{placement:o,rects:s,platform:n,elements:a}=e,{apply:l=()=>{},...c}=uo(t,e),d=await Ql(e,c),h=jr(o),f=ho(o),m=gi(o)==="y",{width:g,height:y}=s.floating,b,_;h==="top"||h==="bottom"?(b=h,_=f===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=h,b=f==="end"?"top":"bottom");let w=y-d.top-d.bottom,k=g-d.left-d.right,v=Ar(y-d[b],w),S=Ar(g-d[_],k),D=!e.middlewareData.shift,K=v,B=S;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(B=k),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(K=w),D&&!f){let E=vt(d.left,0),J=vt(d.right,0),Q=vt(d.top,0),he=vt(d.bottom,0);m?B=g-2*(E!==0||J!==0?E+J:vt(d.left,d.right)):K=y-2*(Q!==0||he!==0?Q+he:vt(d.top,d.bottom))}await l({...e,availableWidth:B,availableHeight:K});let q=await n.getDimensions(a.floating);return g!==q.width||y!==q.height?{reset:{rects:!0}}:{}}}};function ec(){return typeof window<"u"}function fo(t){return wv(t)?(t.nodeName||"").toLowerCase():"#document"}function Tt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function dr(t){var e;return(e=(wv(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wv(t){return ec()?t instanceof Node||t instanceof Tt(t).Node:!1}function Kt(t){return ec()?t instanceof Element||t instanceof Tt(t).Element:!1}function hr(t){return ec()?t instanceof HTMLElement||t instanceof Tt(t).HTMLElement:!1}function vv(t){return!ec()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Tt(t).ShadowRoot}function as(t){let{overflow:e,overflowX:r,overflowY:i,display:o}=Zt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(o)}function _v(t){return["table","td","th"].includes(fo(t))}function jn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ls(t){let e=tc(),r=Kt(t)?Zt(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function xv(t){let e=qr(t);for(;hr(e)&&!mo(e);){if(ls(e))return e;if(jn(e))return null;e=qr(e)}return null}function tc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function mo(t){return["html","body","#document"].includes(fo(t))}function Zt(t){return Tt(t).getComputedStyle(t)}function qn(t){return Kt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function qr(t){if(fo(t)==="html")return t;let e=t.assignedSlot||t.parentNode||vv(t)&&t.host||dr(t);return vv(e)?e.host:e}function kv(t){let e=qr(t);return mo(e)?t.ownerDocument?t.ownerDocument.body:t.body:hr(e)&&as(e)?e:kv(e)}function ns(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);let o=kv(t),s=o===((i=t.ownerDocument)==null?void 0:i.body),n=Tt(o);if(s){let a=rc(n);return e.concat(n,n.visualViewport||[],as(o)?o:[],a&&r?ns(a):[])}return e.concat(o,ns(o,[],r))}function rc(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Tv(t){let e=Zt(t),r=parseFloat(e.width)||0,i=parseFloat(e.height)||0,o=hr(t),s=o?t.offsetWidth:r,n=o?t.offsetHeight:i,a=Bn(r)!==s||Bn(i)!==n;return a&&(r=s,i=n),{width:r,height:i,$:a}}function yh(t){return Kt(t)?t:t.contextElement}function cs(t){let e=yh(t);if(!hr(e))return ur(1);let r=e.getBoundingClientRect(),{width:i,height:o,$:s}=Tv(e),n=(s?Bn(r.width):r.width)/i,a=(s?Bn(r.height):r.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}var qE=ur(0);function Ev(t){let e=Tt(t);return!tc()||!e.visualViewport?qE:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function HE(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Tt(t)?!1:e}function go(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);let o=t.getBoundingClientRect(),s=yh(t),n=ur(1);e&&(i?Kt(i)&&(n=cs(i)):n=cs(t));let a=HE(s,r,i)?Ev(s):ur(0),l=(o.left+a.x)/n.x,c=(o.top+a.y)/n.y,d=o.width/n.x,h=o.height/n.y;if(s){let f=Tt(s),m=i&&Kt(i)?Tt(i):i,g=f,y=rc(g);for(;y&&i&&m!==g;){let b=cs(y),_=y.getBoundingClientRect(),w=Zt(y),k=_.left+(y.clientLeft+parseFloat(w.paddingLeft))*b.x,v=_.top+(y.clientTop+parseFloat(w.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,h*=b.y,l+=k,c+=v,g=Tt(y),y=rc(g)}}return po({width:d,height:h,x:l,y:c})}function vh(t,e){let r=qn(t).scrollLeft;return e?e.left+r:go(dr(t)).left+r}function Av(t,e,r){r===void 0&&(r=!1);let i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-(r?0:vh(t,i)),s=i.top+e.scrollTop;return{x:o,y:s}}function WE(t){let{elements:e,rect:r,offsetParent:i,strategy:o}=t,s=o==="fixed",n=dr(i),a=e?jn(e.floating):!1;if(i===n||a&&s)return r;let l={scrollLeft:0,scrollTop:0},c=ur(1),d=ur(0),h=hr(i);if((h||!h&&!s)&&((fo(i)!=="body"||as(n))&&(l=qn(i)),hr(i))){let m=go(i);c=cs(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}let f=n&&!h&&!s?Av(n,l,!0):ur(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+d.x+f.x,y:r.y*c.y-l.scrollTop*c.y+d.y+f.y}}function GE(t){return Array.from(t.getClientRects())}function KE(t){let e=dr(t),r=qn(t),i=t.ownerDocument.body,o=vt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=vt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),n=-r.scrollLeft+vh(t),a=-r.scrollTop;return Zt(i).direction==="rtl"&&(n+=vt(e.clientWidth,i.clientWidth)-o),{width:o,height:s,x:n,y:a}}function ZE(t,e){let r=Tt(t),i=dr(t),o=r.visualViewport,s=i.clientWidth,n=i.clientHeight,a=0,l=0;if(o){s=o.width,n=o.height;let c=tc();(!c||c&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:n,x:a,y:l}}function YE(t,e){let r=go(t,!0,e==="fixed"),i=r.top+t.clientTop,o=r.left+t.clientLeft,s=hr(t)?cs(t):ur(1),n=t.clientWidth*s.x,a=t.clientHeight*s.y,l=o*s.x,c=i*s.y;return{width:n,height:a,x:l,y:c}}function Sv(t,e,r){let i;if(e==="viewport")i=ZE(t,r);else if(e==="document")i=KE(dr(t));else if(Kt(e))i=YE(e,r);else{let o=Ev(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return po(i)}function Ov(t,e){let r=qr(t);return r===e||!Kt(r)||mo(r)?!1:Zt(r).position==="fixed"||Ov(r,e)}function XE(t,e){let r=e.get(t);if(r)return r;let i=ns(t,[],!1).filter(a=>Kt(a)&&fo(a)!=="body"),o=null,s=Zt(t).position==="fixed",n=s?qr(t):t;for(;Kt(n)&&!mo(n);){let a=Zt(n),l=ls(n);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||as(n)&&!l&&Ov(t,n))?i=i.filter(d=>d!==n):o=a,n=qr(n)}return e.set(t,i),i}function JE(t){let{element:e,boundary:r,rootBoundary:i,strategy:o}=t,n=[...r==="clippingAncestors"?jn(e)?[]:XE(e,this._c):[].concat(r),i],a=n[0],l=n.reduce((c,d)=>{let h=Sv(e,d,o);return c.top=vt(h.top,c.top),c.right=Ar(h.right,c.right),c.bottom=Ar(h.bottom,c.bottom),c.left=vt(h.left,c.left),c},Sv(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function QE(t){let{width:e,height:r}=Tv(t);return{width:e,height:r}}function eA(t,e,r){let i=hr(e),o=dr(e),s=r==="fixed",n=go(t,!0,s,e),a={scrollLeft:0,scrollTop:0},l=ur(0);if(i||!i&&!s)if((fo(e)!=="body"||as(o))&&(a=qn(e)),i){let f=go(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else o&&(l.x=vh(o));let c=o&&!i&&!s?Av(o,a):ur(0),d=n.left+a.scrollLeft-l.x-c.x,h=n.top+a.scrollTop-l.y-c.y;return{x:d,y:h,width:n.width,height:n.height}}function bh(t){return Zt(t).position==="static"}function Cv(t,e){if(!hr(t)||Zt(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return dr(t)===r&&(r=r.ownerDocument.body),r}function $v(t,e){let r=Tt(t);if(jn(t))return r;if(!hr(t)){let o=qr(t);for(;o&&!mo(o);){if(Kt(o)&&!bh(o))return o;o=qr(o)}return r}let i=Cv(t,e);for(;i&&_v(i)&&bh(i);)i=Cv(i,e);return i&&mo(i)&&bh(i)&&!ls(i)?r:i||xv(t)||r}var tA=async function(t){let e=this.getOffsetParent||$v,r=this.getDimensions,i=await r(t.floating);return{reference:eA(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function rA(t){return Zt(t).direction==="rtl"}var Hn={convertOffsetParentRelativeRectToViewportRelativeRect:WE,getDocumentElement:dr,getClippingRect:JE,getOffsetParent:$v,getElementRects:tA,getClientRects:GE,getDimensions:QE,getScale:cs,isElement:Kt,isRTL:rA};function iA(t,e){let r=null,i,o=dr(t);function s(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();let{left:c,top:d,width:h,height:f}=t.getBoundingClientRect();if(a||e(),!h||!f)return;let m=Vn(d),g=Vn(o.clientWidth-(c+h)),y=Vn(o.clientHeight-(d+f)),b=Vn(c),w={rootMargin:-m+"px "+-g+"px "+-y+"px "+-b+"px",threshold:vt(0,Ar(1,l))||1},k=!0;function v(S){let D=S[0].intersectionRatio;if(D!==l){if(!k)return n();D?n(!1,D):i=setTimeout(()=>{n(!1,1e-7)},1e3)}k=!1}try{r=new IntersectionObserver(v,{...w,root:o.ownerDocument})}catch{r=new IntersectionObserver(v,w)}r.observe(t)}return n(!0),s}function Iv(t,e,r,i){i===void 0&&(i={});let{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=yh(t),d=o||s?[...c?ns(c):[],...ns(e)]:[];d.forEach(_=>{o&&_.addEventListener("scroll",r,{passive:!0}),s&&_.addEventListener("resize",r)});let h=c&&a?iA(c,r):null,f=-1,m=null;n&&(m=new ResizeObserver(_=>{let[w]=_;w&&w.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var k;(k=m)==null||k.observe(e)})),r()}),c&&!l&&m.observe(c),m.observe(e));let g,y=l?go(t):null;l&&b();function b(){let _=go(t);y&&(_.x!==y.x||_.y!==y.y||_.width!==y.width||_.height!==y.height)&&r(),y=_,g=requestAnimationFrame(b)}return r(),()=>{var _;d.forEach(w=>{o&&w.removeEventListener("scroll",r),s&&w.removeEventListener("resize",r)}),h?.(),(_=m)==null||_.disconnect(),m=null,l&&cancelAnimationFrame(g)}}var Pv=gv;var Lv=bv,zv=mv,wh=yv;var Rv=fv;var Dv=(t,e,r)=>{let i=new Map,o={platform:Hn,...r},s={...o.platform,_c:i};return pv(t,e,{...o,platform:s})};var wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pr=t=>(...e)=>({_$litDirective$:t,values:e}),Yt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var L=pr(class extends Yt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return nt}});function Mv(t){return oA(t)}function _h(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function oA(t){for(let e=t;e;e=_h(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=_h(t);e;e=_h(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||ls(r)||e.tagName==="BODY"))return e}return null}function sA(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var me=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),i=0,o=0,s=0,n=0,a=0,l=0,c=0,d=0;r?t.top<e.top?(i=t.left,o=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,o=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,o=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,o=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||sA(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Iv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Pv({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(wh({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(zv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Lv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(wh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Rv({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>Hn.getOffsetParent(r,Mv):Hn.getOffsetParent;Dv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ur(gt({},Hn),{getOffsetParent:e})}).then(({x:r,y:i,middlewareData:o,placement:s})=>{let n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let l=o.arrow.x,c=o.arrow.y,d="",h="",f="",m="";if(this.arrowPlacement==="start"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":g,m=n?g:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:f,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return x`
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
    `}};me.styles=[$,ov];u([O(".popup")],me.prototype,"popup",2);u([O(".popup__arrow")],me.prototype,"arrowEl",2);u([p()],me.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],me.prototype,"active",2);u([p({reflect:!0})],me.prototype,"placement",2);u([p({reflect:!0})],me.prototype,"strategy",2);u([p({type:Number})],me.prototype,"distance",2);u([p({type:Number})],me.prototype,"skidding",2);u([p({type:Boolean})],me.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],me.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],me.prototype,"arrowPadding",2);u([p({type:Boolean})],me.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],me.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],me.prototype,"flipFallbackStrategy",2);u([p({type:Object})],me.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],me.prototype,"flipPadding",2);u([p({type:Boolean})],me.prototype,"shift",2);u([p({type:Object})],me.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],me.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],me.prototype,"autoSize",2);u([p()],me.prototype,"sync",2);u([p({type:Object})],me.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],me.prototype,"autoSizePadding",2);u([p({attribute:"hover-bridge",type:Boolean})],me.prototype,"hoverBridge",2);var Fv=new Map,nA=new WeakMap;function aA(t){return t??{keyframes:[],options:{duration:0}}}function Nv(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function de(t,e){Fv.set(t,aA(e))}function be(t,e,r){let i=nA.get(t);if(i?.[e])return Nv(i[e],r.dir);let o=Fv.get(e);return o?Nv(o,r.dir):{keyframes:[],options:{duration:0}}}function We(t,e){return new Promise(r=>{function i(o){o.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}function Se(t,e,r){return new Promise(i=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let o=t.animate(e,Ur(gt({},r),{duration:ic()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function xh(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function ic(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pe(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}function us(t,e){return t.map(r=>Ur(gt({},r),{height:r.height==="auto"?`${e}px`:r.height}))}function C(t,e){let r=gt({waitUntilFirstUpdate:!1},e);return(i,o)=>{let{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{let c=l;if(a.has(c)){let d=a.get(c),h=this[c];d!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,h)}}),s.call(this,a)}}}var Xe=class extends T{constructor(){super(),this.localize=new W(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=xh(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=xh(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Pe(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:r,options:i}=be(this,"tooltip.show",{dir:this.localize.dir()});await Se(this.popup.popup,r,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Pe(this.body);let{keyframes:r,options:i}=be(this,"tooltip.hide",{dir:this.localize.dir()});await Se(this.popup.popup,r,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,We(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,We(this,"sl-after-hide")}render(){return x`
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
    `}};Xe.styles=[$,iv];Xe.dependencies={"sl-popup":me};u([O("slot:not([name])")],Xe.prototype,"defaultSlot",2);u([O(".tooltip__body")],Xe.prototype,"body",2);u([O("sl-popup")],Xe.prototype,"popup",2);u([p()],Xe.prototype,"content",2);u([p()],Xe.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);u([p({type:Number})],Xe.prototype,"distance",2);u([p({type:Boolean,reflect:!0})],Xe.prototype,"open",2);u([p({type:Number})],Xe.prototype,"skidding",2);u([p()],Xe.prototype,"trigger",2);u([p({type:Boolean})],Xe.prototype,"hoist",2);u([C("open",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleOpenChange",1);u([C(["content","distance","hoist","placement","skidding"])],Xe.prototype,"handleOptionsChange",1);u([C("disabled")],Xe.prototype,"handleDisabledChange",1);de("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});de("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Xe.define("sl-tooltip");var Uv=A`
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
`;var Bv=A`
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
`;var Vv=A`
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
`;var Xt=(t="value")=>(e,r)=>{let i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,a){var l;let c=i.getPropertyOptions(t),d=typeof c.attribute=="string"?c.attribute:t;if(s===d){let h=c.converter||pi,m=(typeof h=="function"?h:(l=h?.fromAttribute)!=null?l:pi.fromAttribute)(a,c.type);this[t]!==m&&(this[r]=m)}o.call(this,s,n,a)}};var Et=A`
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
`;var Ce=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function jv(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),r="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var kh="";function ds(t){kh=t}function oc(t=""){if(!kh){let e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)ds(r.getAttribute("data-shoelace"));else{let i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),o="";i&&(o=i.getAttribute("src")),ds(o.split("/").slice(0,-1).join("/"))}}return kh.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var lA={name:"default",resolver:t=>oc(`assets/icons/${t}.svg`)},qv=lA;var Hv={caret:`
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
  `},cA={name:"system",resolver:t=>t in Hv?`data:image/svg+xml,${encodeURIComponent(Hv[t])}`:""},Wv=cA;var uA=[qv,Wv],Sh=[];function Gv(t){Sh.push(t)}function Kv(t){Sh=Sh.filter(e=>e!==t)}function Ch(t){return uA.find(e=>e.name===t)}var Zv=A`
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
`;var{I:I4}=Qy;var Yv=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var sc=t=>t.strings===void 0;var dA={},Xv=(t,e=dA)=>t._$AH=e;var Wn=Symbol(),nc=Symbol(),Th,Eh=new Map,ie=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e?.spriteSheet)return this.svg=x`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Wn:nc}catch{return nc}try{let o=document.createElement("div");o.innerHTML=await i.text();let s=o.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return Wn;Th||(Th=new DOMParser);let a=Th.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Wn}catch{return Wn}}connectedCallback(){super.connectedCallback(),Gv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Kv(this)}getIconSource(){let t=Ch(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:r}=this.getIconSource(),i=r?Ch(this.library):void 0;if(!e){this.svg=null;return}let o=Eh.get(e);if(o||(o=this.resolveIcon(e,i),Eh.set(e,o)),!this.initialRender)return;let s=await o;if(s===nc&&Eh.delete(e),e===this.getIconSource().url){if(Yv(s)){if(this.svg=s,i){await this.updateComplete;let n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(s){case nc:case Wn:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ie.styles=[$,Zv];u([R()],ie.prototype,"svg",2);u([p({reflect:!0})],ie.prototype,"name",2);u([p()],ie.prototype,"src",2);u([p()],ie.prototype,"label",2);u([p({reflect:!0})],ie.prototype,"library",2);u([C("label")],ie.prototype,"handleLabelChange",1);u([C(["name","src","library"])],ie.prototype,"setIcon",1);var M=t=>t??Ie;var Ft=pr(class extends Yt{constructor(t){if(super(t),t.type!==wt.PROPERTY&&t.type!==wt.ATTRIBUTE&&t.type!==wt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===nt||e===Ie)return e;let r=t.element,i=t.name;if(t.type===wt.PROPERTY){if(e===r[i])return nt}else if(t.type===wt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return nt}else if(t.type===wt.ATTRIBUTE&&r.getAttribute(i)===e+"")return nt;return Xv(t),e}});var Ze=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ce(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
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
            value=${M(this.value)}
            .indeterminate=${Ft(this.indeterminate)}
            .checked=${Ft(this.checked)}
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
    `}};Ze.styles=[$,Et,Vv];Ze.dependencies={"sl-icon":ie};u([O('input[type="checkbox"]')],Ze.prototype,"input",2);u([R()],Ze.prototype,"hasFocus",2);u([p()],Ze.prototype,"title",2);u([p()],Ze.prototype,"name",2);u([p()],Ze.prototype,"value",2);u([p({reflect:!0})],Ze.prototype,"size",2);u([p({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],Ze.prototype,"checked",2);u([p({type:Boolean,reflect:!0})],Ze.prototype,"indeterminate",2);u([Xt("checked")],Ze.prototype,"defaultChecked",2);u([p({reflect:!0})],Ze.prototype,"form",2);u([p({type:Boolean,reflect:!0})],Ze.prototype,"required",2);u([p({attribute:"help-text"})],Ze.prototype,"helpText",2);u([C("disabled",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleDisabledChange",1);u([C(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ze.prototype,"handleStateChange",1);var Jv=A`
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
`;var Hr=class extends T{constructor(){super(...arguments),this.localize=new W(this)}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Hr.styles=[$,Jv];function Ah(t,e,r){return t?e(t):r?.(t)}var Ke=class Oh extends T{constructor(){super(...arguments),this.localize=new W(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Pe(this.childrenContainer);let{keyframes:e,options:r}=be(this,"tree-item.collapse",{dir:this.localize.dir()});await Se(this.childrenContainer,us(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&Oh.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Pe(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:r}=be(this,"tree-item.expand",{dir:this.localize.dir()});await Se(this.childrenContainer,us(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Oh.isTreeItem(r)&&(e||!r.disabled)):[]}render(){let e=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return x`
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
            ${Ah(this.loading,()=>x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ah(this.selectable,()=>x`
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
                ?checked="${Ft(this.selected)}"
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
    `}};Ke.styles=[$,Bv];Ke.dependencies={"sl-checkbox":Ze,"sl-icon":ie,"sl-spinner":Hr};u([R()],Ke.prototype,"indeterminate",2);u([R()],Ke.prototype,"isLeaf",2);u([R()],Ke.prototype,"loading",2);u([R()],Ke.prototype,"selectable",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"expanded",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"selected",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],Ke.prototype,"lazy",2);u([O("slot:not([name])")],Ke.prototype,"defaultSlot",2);u([O("slot[name=children]")],Ke.prototype,"childrenSlot",2);u([O(".tree-item__item")],Ke.prototype,"itemElement",2);u([O(".tree-item__children")],Ke.prototype,"childrenContainer",2);u([O(".tree-item__expand-button slot")],Ke.prototype,"expandButtonSlot",2);u([C("loading",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleLoadingChange",1);u([C("disabled")],Ke.prototype,"handleDisabledChange",1);u([C("selected")],Ke.prototype,"handleSelectedChange",1);u([C("expanded",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleExpandedChange",1);u([C("expanded",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleExpandAnimation",1);u([C("lazy",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleLazyChange",1);var bo=Ke;de("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});de("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Fe(t,e,r){let i=o=>Object.is(o,-0)?0:o;return t<e?i(e):t>r?i(r):i(t)}function Qv(t,e=!1){function r(s){let n=s.getChildrenItems({includeDisabled:!1});if(n.length){let a=n.every(c=>c.selected),l=n.every(c=>!c.selected&&!c.indeterminate);s.selected=a,s.indeterminate=!a&&!l}}function i(s){let n=s.parentElement;bo.isTreeItem(n)&&(r(n),i(n))}function o(s){for(let n of s.getChildrenItems())n.selected=e?s.selected||n.selected:!n.disabled&&s.selected,o(n);e&&r(s)}o(t),i(t)}var bi=class extends T{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new W(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{let r=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(r===null?t.append(i):r.hasAttribute("data-default")&&r.replaceWith(i))})},this.handleTreeChanged=t=>{for(let e of t){let r=[...e.addedNodes].filter(bo.isTreeItem),i=[...e.removedNodes].filter(bo.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),bo.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){let r=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){let i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Qv(t);else if(this.selection==="single"||t.isLeaf){let i=this.getAllTreeItems();for(let o of i)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let r=this.selectedItems;(e.length!==r.length||r.some(i=>!e.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var s;return["input","textarea"].includes((s=o?.tagName)==null?void 0:s.toLowerCase())}))return;let e=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();let o=e.findIndex(l=>l.matches(":focus")),s=e[o],n=l=>{let c=e[Fe(l,0,e.length-1)];this.focusItem(c)},a=l=>{s.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(o+1):a(!0):r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(o-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){let e=t.target,r=e.closest("sl-tree-item"),i=t.composedPath().some(o=>{var s;return(s=o?.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||e!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(let r of e)r.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Qv(r,!0)))}get selectedItems(){let t=this.getAllTreeItems(),e=r=>r.selected;return t.filter(e)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(r=>{var i;if(r.disabled)return!1;let o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(r),!e.has(r)})}render(){return x`
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
    `}};bi.styles=[$,Uv];u([O("slot:not([name])")],bi.prototype,"defaultSlot",2);u([O("slot[name=expand-icon]")],bi.prototype,"expandedIconSlot",2);u([O("slot[name=collapse-icon]")],bi.prototype,"collapsedIconSlot",2);u([p()],bi.prototype,"selection",2);u([C("selection")],bi.prototype,"handleSelectionChange",1);bi.define("sl-tree");bo.define("sl-tree-item");var e0=A`
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
`;var hA=0,hs=class extends T{constructor(){super(...arguments),this.attrId=++hA,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return x`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};hs.styles=[$,e0];u([p({reflect:!0})],hs.prototype,"name",2);u([p({type:Boolean,reflect:!0})],hs.prototype,"active",2);u([C("active")],hs.prototype,"handleActiveChange",1);hs.define("sl-tab-panel");var t0=A`
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
`;var r0=A`
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
`;var o0=Symbol.for(""),pA=t=>{if(t?.r===o0)return t?._$litStatic$};var ps=(t,...e)=>({_$litStatic$:e.reduce((r,i,o)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:o0}),i0=new Map,$h=t=>(e,...r)=>{let i=r.length,o,s,n=[],a=[],l,c=0,d=!1;for(;c<i;){for(l=e[c];c<i&&(s=r[c],(o=pA(s))!==void 0);)l+=o+e[++c],d=!0;c!==i&&a.push(s),n.push(l),c++}if(c===i&&n.push(e[i]),d){let h=n.join("$$lit$$");(e=i0.get(h))===void 0&&(n.raw=n,i0.set(h,e=n)),r=a}return t(e,...r)},yi=$h(x),IN=$h(Zy),PN=$h(Yy);var Ue=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?ps`a`:ps`button`;return yi`
      <${e}
        part="base"
        class=${L({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${M(t?void 0:this.disabled)}
        type=${M(t?void 0:"button")}
        href=${M(t?this.href:void 0)}
        target=${M(t?this.target:void 0)}
        download=${M(t?this.download:void 0)}
        rel=${M(t&&this.target?"noreferrer noopener":void 0)}
        role=${M(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${M(this.name)}
          library=${M(this.library)}
          src=${M(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ue.styles=[$,r0];Ue.dependencies={"sl-icon":ie};u([O(".icon-button")],Ue.prototype,"button",2);u([R()],Ue.prototype,"hasFocus",2);u([p()],Ue.prototype,"name",2);u([p()],Ue.prototype,"library",2);u([p()],Ue.prototype,"src",2);u([p()],Ue.prototype,"href",2);u([p()],Ue.prototype,"target",2);u([p()],Ue.prototype,"download",2);u([p()],Ue.prototype,"label",2);u([p({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);var Or=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return x`
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
    `}};Or.styles=[$,t0];Or.dependencies={"sl-icon-button":Ue};u([p({reflect:!0})],Or.prototype,"variant",2);u([p({reflect:!0})],Or.prototype,"size",2);u([p({type:Boolean,reflect:!0})],Or.prototype,"pill",2);u([p({type:Boolean})],Or.prototype,"removable",2);Or.define("sl-tag");var s0=A`
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
`;var ye=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ce(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
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
              name=${M(this.name)}
              .value=${Ft(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              rows=${M(this.rows)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              autocapitalize=${M(this.autocapitalize)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${M(this.spellcheck)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
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
    `}};ye.styles=[$,Et,s0];u([O(".textarea__control")],ye.prototype,"input",2);u([O(".textarea__size-adjuster")],ye.prototype,"sizeAdjuster",2);u([R()],ye.prototype,"hasFocus",2);u([p()],ye.prototype,"title",2);u([p()],ye.prototype,"name",2);u([p()],ye.prototype,"value",2);u([p({reflect:!0})],ye.prototype,"size",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"filled",2);u([p()],ye.prototype,"label",2);u([p({attribute:"help-text"})],ye.prototype,"helpText",2);u([p()],ye.prototype,"placeholder",2);u([p({type:Number})],ye.prototype,"rows",2);u([p()],ye.prototype,"resize",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"readonly",2);u([p({reflect:!0})],ye.prototype,"form",2);u([p({type:Boolean,reflect:!0})],ye.prototype,"required",2);u([p({type:Number})],ye.prototype,"minlength",2);u([p({type:Number})],ye.prototype,"maxlength",2);u([p()],ye.prototype,"autocapitalize",2);u([p()],ye.prototype,"autocorrect",2);u([p()],ye.prototype,"autocomplete",2);u([p({type:Boolean})],ye.prototype,"autofocus",2);u([p()],ye.prototype,"enterkeyhint",2);u([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ye.prototype,"spellcheck",2);u([p()],ye.prototype,"inputmode",2);u([Xt()],ye.prototype,"defaultValue",2);u([C("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);u([C("rows",{waitUntilFirstUpdate:!0})],ye.prototype,"handleRowsChange",1);u([C("value",{waitUntilFirstUpdate:!0})],ye.prototype,"handleValueChange",1);ye.define("sl-textarea");var n0=A`
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
`;var fA=0,Jt=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.attrId=++fA,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,x`
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
    `}};Jt.styles=[$,n0];Jt.dependencies={"sl-icon-button":Ue};u([O(".tab")],Jt.prototype,"tab",2);u([p({reflect:!0})],Jt.prototype,"panel",2);u([p({type:Boolean,reflect:!0})],Jt.prototype,"active",2);u([p({type:Boolean,reflect:!0})],Jt.prototype,"closable",2);u([p({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);u([p({type:Number,reflect:!0})],Jt.prototype,"tabIndex",2);u([C("active")],Jt.prototype,"handleActiveChange",1);u([C("disabled")],Jt.prototype,"handleDisabledChange",1);Jt.define("sl-tab");var a0=A`
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
`;var l0=A`
  :host {
    display: contents;
  }
`;var yo=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};yo.styles=[$,l0];u([p({type:Boolean,reflect:!0})],yo.prototype,"disabled",2);u([C("disabled",{waitUntilFirstUpdate:!0})],yo.prototype,"handleDisabledChange",1);function mA(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ih=new Set;function gA(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function bA(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function vo(t){if(Ih.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=gA()+bA(),r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),e<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function wo(t){Ih.delete(t),Ih.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Gn(t,e,r="vertical",i="smooth"){let o=mA(t,e),s=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<c?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>d&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var at=class extends T{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new W(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let r=t.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){let r=t.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let o=this.tabs.find(a=>a.matches(":focus")),s=this.localize.dir()==="rtl",n=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Gn(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=gt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Gn(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null,i=e==="forward"?1:-1,o=t+i;for(;t<this.tabs.length;){if(r=this.tabs[o]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;o+=i}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return x`
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
    `}};at.styles=[$,a0];at.dependencies={"sl-icon-button":Ue,"sl-resize-observer":yo};u([O(".tab-group")],at.prototype,"tabGroup",2);u([O(".tab-group__body")],at.prototype,"body",2);u([O(".tab-group__nav")],at.prototype,"nav",2);u([O(".tab-group__indicator")],at.prototype,"indicator",2);u([R()],at.prototype,"hasScrollControls",2);u([R()],at.prototype,"shouldHideScrollStartButton",2);u([R()],at.prototype,"shouldHideScrollEndButton",2);u([p()],at.prototype,"placement",2);u([p()],at.prototype,"activation",2);u([p({attribute:"no-scroll-controls",type:Boolean})],at.prototype,"noScrollControls",2);u([p({attribute:"fixed-scroll-controls",type:Boolean})],at.prototype,"fixedScrollControls",2);u([Er({passive:!0})],at.prototype,"updateScrollButtons",1);u([C("noScrollControls",{waitUntilFirstUpdate:!0})],at.prototype,"updateScrollControls",1);u([C("placement",{waitUntilFirstUpdate:!0})],at.prototype,"syncIndicator",1);at.define("sl-tab-group");var c0=A`
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
`;var ac=class extends T{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${L({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ac.styles=[$,c0];u([p()],ac.prototype,"effect",2);ac.define("sl-skeleton");var u0=A`
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
`;function vi(t,e){function r(o){let s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=s.left+n.scrollX,l=s.top+n.scrollY,c=o.pageX-a,d=o.pageY-l;e?.onMove&&e.onMove(c,d)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&r(e.initialEvent)}var At=class extends T{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new W(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),vi(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),e&&!this.vertical&&(a=this.size-a),o>=a-this.snapThreshold&&o<=a+this.snapThreshold&&(o=a)}),this.position=Fe(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,r=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=r),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=r),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Fe(e,0,100)}}handleResize(t){let{width:e,height:r}=t[0].contentRect;this.size=this.vertical?r:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
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
        tabindex=${M(this.disabled?void 0:"0")}
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
    `}};At.styles=[$,u0];u([O(".divider")],At.prototype,"divider",2);u([p({type:Number,reflect:!0})],At.prototype,"position",2);u([p({attribute:"position-in-pixels",type:Number})],At.prototype,"positionInPixels",2);u([p({type:Boolean,reflect:!0})],At.prototype,"vertical",2);u([p({type:Boolean,reflect:!0})],At.prototype,"disabled",2);u([p()],At.prototype,"primary",2);u([p()],At.prototype,"snap",2);u([p({type:Number,attribute:"snap-threshold"})],At.prototype,"snapThreshold",2);u([C("position")],At.prototype,"handlePositionChange",1);u([C("positionInPixels")],At.prototype,"handlePositionInPixelsChange",1);u([C("vertical")],At.prototype,"handleVerticalChange",1);At.define("sl-split-panel");var d0=A`
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
`;var ut=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ce(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
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
            value=${M(this.value)}
            .checked=${Ft(this.checked)}
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
    `}};ut.styles=[$,Et,d0];u([O('input[type="checkbox"]')],ut.prototype,"input",2);u([R()],ut.prototype,"hasFocus",2);u([p()],ut.prototype,"title",2);u([p()],ut.prototype,"name",2);u([p()],ut.prototype,"value",2);u([p({reflect:!0})],ut.prototype,"size",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"checked",2);u([Xt("checked")],ut.prototype,"defaultChecked",2);u([p({reflect:!0})],ut.prototype,"form",2);u([p({type:Boolean,reflect:!0})],ut.prototype,"required",2);u([p({attribute:"help-text"})],ut.prototype,"helpText",2);u([C("checked",{waitUntilFirstUpdate:!0})],ut.prototype,"handleCheckedChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);ut.define("sl-switch");var h0=A`
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
`;var Kn=class extends Yt{constructor(e){if(super(e),this.it=Ie,e.type!==wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ie||e==null)return this._t=void 0,this.it=e;if(e===nt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Kn.directiveName="unsafeHTML",Kn.resultType=1;var fs=pr(Kn);var pe=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new W(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
          ${typeof r=="string"?fs(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return x`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){let r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=be(this,"select.show",{dir:this.localize.dir()});await Se(this.popup.popup,t,e),this.currentOption&&Gn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);let{keyframes:t,options:e}=be(this,"select.hide",{dir:this.localize.dir()});await Se(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,We(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,We(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return x`
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
    `}};pe.styles=[$,Et,h0];pe.dependencies={"sl-icon":ie,"sl-popup":me,"sl-tag":Or};u([O(".select")],pe.prototype,"popup",2);u([O(".select__combobox")],pe.prototype,"combobox",2);u([O(".select__display-input")],pe.prototype,"displayInput",2);u([O(".select__value-input")],pe.prototype,"valueInput",2);u([O(".select__listbox")],pe.prototype,"listbox",2);u([R()],pe.prototype,"hasFocus",2);u([R()],pe.prototype,"displayLabel",2);u([R()],pe.prototype,"currentOption",2);u([R()],pe.prototype,"selectedOptions",2);u([R()],pe.prototype,"valueHasChanged",2);u([p()],pe.prototype,"name",2);u([R()],pe.prototype,"value",1);u([p({attribute:"value"})],pe.prototype,"defaultValue",2);u([p({reflect:!0})],pe.prototype,"size",2);u([p()],pe.prototype,"placeholder",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"multiple",2);u([p({attribute:"max-options-visible",type:Number})],pe.prototype,"maxOptionsVisible",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);u([p({type:Boolean})],pe.prototype,"clearable",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"open",2);u([p({type:Boolean})],pe.prototype,"hoist",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"filled",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"pill",2);u([p()],pe.prototype,"label",2);u([p({reflect:!0})],pe.prototype,"placement",2);u([p({attribute:"help-text"})],pe.prototype,"helpText",2);u([p({reflect:!0})],pe.prototype,"form",2);u([p({type:Boolean,reflect:!0})],pe.prototype,"required",2);u([p()],pe.prototype,"getTag",2);u([C("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);u([C(["defaultValue","value"],{waitUntilFirstUpdate:!0})],pe.prototype,"handleValueChange",1);u([C("open",{waitUntilFirstUpdate:!0})],pe.prototype,"handleOpenChange",1);de("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});pe.define("sl-select");var yA=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],wi=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let r=e.getTime()-t.getTime(),{unit:i,value:o}=yA.find(s=>Math.abs(r)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=lc("second"):i==="hour"?s=lc("minute"):i==="day"?s=lc("hour"):s=lc("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};u([R()],wi.prototype,"isoTime",2);u([R()],wi.prototype,"relativeTime",2);u([p()],wi.prototype,"date",2);u([p()],wi.prototype,"format",2);u([p()],wi.prototype,"numeric",2);u([p({type:Boolean})],wi.prototype,"sync",2);function lc(t){let r={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return r-Date.now()%r}wi.define("sl-relative-time");Hr.define("sl-spinner");var p0=A`
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
`;var He=class extends T{constructor(){super(...arguments),this.formControlController=new st(this),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){let e=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",s=e*t;if(o){let n=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${i} / 2))`}else{let n=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
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
              name=${M(this.name)}
              ?disabled=${this.disabled}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Ft(this.value.toString())}
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
    `}};He.styles=[$,Et,p0];u([O(".range__control")],He.prototype,"input",2);u([O(".range__tooltip")],He.prototype,"output",2);u([R()],He.prototype,"hasFocus",2);u([R()],He.prototype,"hasTooltip",2);u([p()],He.prototype,"title",2);u([p()],He.prototype,"name",2);u([p({type:Number})],He.prototype,"value",2);u([p()],He.prototype,"label",2);u([p({attribute:"help-text"})],He.prototype,"helpText",2);u([p({type:Boolean,reflect:!0})],He.prototype,"disabled",2);u([p({type:Number})],He.prototype,"min",2);u([p({type:Number})],He.prototype,"max",2);u([p({type:Number})],He.prototype,"step",2);u([p()],He.prototype,"tooltip",2);u([p({attribute:!1})],He.prototype,"tooltipFormatter",2);u([p({reflect:!0})],He.prototype,"form",2);u([Xt()],He.prototype,"defaultValue",2);u([Er({passive:!0})],He.prototype,"handleThumbDragStart",1);u([C("value",{waitUntilFirstUpdate:!0})],He.prototype,"handleValueChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],He.prototype,"handleDisabledChange",1);u([C("hasTooltip",{waitUntilFirstUpdate:!0})],He.prototype,"syncRange",1);He.define("sl-range");var f0=A`
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
`;var m0="important",vA=" !"+m0,Je=pr(class extends Yt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{let i=t[r];return i==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(let i in e){let o=e[i];if(o!=null){this.ft.add(i);let s=typeof o=="string"&&o.endsWith(vA);i.includes("-")||s?r.setProperty(i,s?o.slice(0,-11):o,s?m0:""):r[i]=o}}return nt}});var dt=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/o*this.max,this.precision):this.roundToPrecision((t-r)/o*this.max,this.precision);return Fe(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"){let o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"){let o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let r=1/e;return Math.ceil(t*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys()),r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,x`
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
                    style=${Je({clipPath:t?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${fs(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Je({clipPath:t?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${fs(this.getSymbol(i+1))}
                  </div>
                </span>
              `:x`
              <span
                class=${L({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
              >
                ${fs(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};dt.styles=[$,f0];dt.dependencies={"sl-icon":ie};u([O(".rating")],dt.prototype,"rating",2);u([R()],dt.prototype,"hoverValue",2);u([R()],dt.prototype,"isHovering",2);u([p()],dt.prototype,"label",2);u([p({type:Number})],dt.prototype,"value",2);u([p({type:Number})],dt.prototype,"max",2);u([p({type:Number})],dt.prototype,"precision",2);u([p({type:Boolean,reflect:!0})],dt.prototype,"readonly",2);u([p({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);u([p()],dt.prototype,"getSymbol",2);u([Er({passive:!0})],dt.prototype,"handleTouchMove",1);u([C("hoverValue")],dt.prototype,"handleHoverValueChange",1);u([C("isHovering")],dt.prototype,"handleIsHoveringChange",1);dt.define("sl-rating");yo.define("sl-resize-observer");var g0=A`
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
`;var fr=class extends T{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${L({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};fr.styles=[$,g0];fr.dependencies={"sl-icon":ie};u([R()],fr.prototype,"checked",2);u([R()],fr.prototype,"hasFocus",2);u([p()],fr.prototype,"value",2);u([p({reflect:!0})],fr.prototype,"size",2);u([p({type:Boolean,reflect:!0})],fr.prototype,"disabled",2);u([C("checked")],fr.prototype,"handleCheckedChange",1);u([C("disabled",{waitUntilFirstUpdate:!0})],fr.prototype,"handleDisabledChange",1);fr.define("sl-radio");var b0=A`
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
`;var y0=A`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var $r=class extends T{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=Zn(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=Zn(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=Zn(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=Zn(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),i=Zn(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return x`
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
    `}};$r.styles=[$,y0];u([O("slot")],$r.prototype,"defaultSlot",2);u([R()],$r.prototype,"disableRole",2);u([p()],$r.prototype,"label",2);function Zn(t){var e;let r="sl-button, sl-radio-button";return(e=t.closest(r))!=null?e:t.querySelector(r)}var lt=class extends T{constructor(){super(...arguments),this.formControlController=new st(this),this.hasSlotController=new Ce(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?Dy:t?Ry:is}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,r.forEach(o=>o.checked=o===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(a=>!a.disabled),i=(e=r.find(a=>a.checked))!=null?e:r[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,n=r.indexOf(i)+o;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=r[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),r=e.find(s=>s.checked),i=e.find(s=>!s.disabled),o=r||i;o&&o.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=x`
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
    `}};lt.styles=[$,Et,b0];lt.dependencies={"sl-button-group":$r};u([O("slot:not([name])")],lt.prototype,"defaultSlot",2);u([O(".radio-group__validation-input")],lt.prototype,"validationInput",2);u([R()],lt.prototype,"hasButtonGroup",2);u([R()],lt.prototype,"errorMessage",2);u([R()],lt.prototype,"defaultValue",2);u([p()],lt.prototype,"label",2);u([p({attribute:"help-text"})],lt.prototype,"helpText",2);u([p()],lt.prototype,"name",2);u([p({reflect:!0})],lt.prototype,"value",2);u([p({reflect:!0})],lt.prototype,"size",2);u([p({reflect:!0})],lt.prototype,"form",2);u([p({type:Boolean,reflect:!0})],lt.prototype,"required",2);u([C("size",{waitUntilFirstUpdate:!0})],lt.prototype,"handleSizeChange",1);u([C("value")],lt.prototype,"handleValueChange",1);lt.define("sl-radio-group");me.define("sl-popup");var v0=A`
  :host {
    display: inline-block;
  }
`;var w0=null,cc=class{};cc.render=function(t,e){w0(t,e)};self.QrCreator=cc;(function(t){function e(a,l,c,d){var h={},f=t(c,l);f.u(a),f.J(),d=d||0;var m=f.h(),g=f.h()+2*d;return h.text=a,h.level=l,h.version=c,h.O=g,h.a=function(y,b){return y-=d,b-=d,0>y||y>=m||0>b||b>=m?!1:f.a(y,b)},h}function r(a,l,c,d,h,f,m,g,y,b){function _(w,k,v,S,D,K,B){w?(a.lineTo(k+K,v+B),a.arcTo(k,v,S,D,f)):a.lineTo(k,v)}m?a.moveTo(l+f,c):a.moveTo(l,c),_(g,d,c,d,h,-f,0),_(y,d,h,l,h,0,-f),_(b,l,h,l,c,f,0),_(m,l,c,d,c,0,f)}function i(a,l,c,d,h,f,m,g,y,b){function _(w,k,v,S){a.moveTo(w+v,k),a.lineTo(w,k),a.lineTo(w,k+S),a.arcTo(w,k,w+v,k,f)}m&&_(l,c,f,f),g&&_(d,c,-f,f),y&&_(d,h,-f,-f),b&&_(l,h,f,-f)}function o(a,l){var c=l.fill;if(typeof c=="string")a.fillStyle=c;else{var d=c.type,h=c.colorStops;if(c=c.position.map(m=>Math.round(m*l.size)),d==="linear-gradient")var f=a.createLinearGradient.apply(a,c);else if(d==="radial-gradient")f=a.createRadialGradient.apply(a,c);else throw Error("Unsupported fill");h.forEach(([m,g])=>{f.addColorStop(m,g)}),a.fillStyle=f}}function s(a,l){e:{var c=l.text,d=l.v,h=l.N,f=l.K,m=l.P;for(h=Math.max(1,h||1),f=Math.min(40,f||40);h<=f;h+=1)try{var g=e(c,d,h,m);break e}catch{}g=void 0}if(!g)return null;for(c=a.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),d=g.O,f=l.size/d,c.beginPath(),m=0;m<d;m+=1)for(h=0;h<d;h+=1){var y=c,b=l.left+h*f,_=l.top+m*f,w=m,k=h,v=g.a,S=b+f,D=_+f,K=w-1,B=w+1,q=k-1,E=k+1,J=Math.floor(Math.min(.5,Math.max(0,l.R))*f),Q=v(w,k),he=v(K,q),Te=v(K,k);K=v(K,E);var Re=v(w,E);E=v(B,E),k=v(B,k),B=v(B,q),w=v(w,q),b=Math.round(b),_=Math.round(_),S=Math.round(S),D=Math.round(D),Q?r(y,b,_,S,D,J,!Te&&!w,!Te&&!Re,!k&&!Re,!k&&!w):i(y,b,_,S,D,J,Te&&w&&he,Te&&Re&&K,k&&Re&&E,k&&w&&B)}return o(c,l),c.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};w0=function(a,l){var c={};Object.assign(c,n,a),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,c)):(a=document.createElement("canvas"),a.width=c.size,a.height=c.size,c=s(a,c),l.appendChild(c))}})(function(){function t(l){var c=r.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(d){for(var h=0;h<c.length;h+=1)d.put(c[h],8)}}}function e(){var l=[],c=0,d={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,f){for(var m=0;m<f;m+=1)d.m((h>>>f-m-1&1)==1)},f:function(){return c},m:function(h){var f=Math.floor(c/8);l.length<=f&&l.push(0),h&&(l[f]|=128>>>c%8),c+=1}};return d}function r(l,c){function d(w,k){for(var v=-1;7>=v;v+=1)if(!(-1>=w+v||g<=w+v))for(var S=-1;7>=S;S+=1)-1>=k+S||g<=k+S||(m[w+v][k+S]=0<=v&&6>=v&&(S==0||S==6)||0<=S&&6>=S&&(v==0||v==6)||2<=v&&4>=v&&2<=S&&4>=S)}function h(w,k){for(var v=g=4*l+17,S=Array(v),D=0;D<v;D+=1){S[D]=Array(v);for(var K=0;K<v;K+=1)S[D][K]=null}for(m=S,d(0,0),d(g-7,0),d(0,g-7),v=s.G(l),S=0;S<v.length;S+=1)for(D=0;D<v.length;D+=1){K=v[S];var B=v[D];if(m[K][B]==null)for(var q=-2;2>=q;q+=1)for(var E=-2;2>=E;E+=1)m[K+q][B+E]=q==-2||q==2||E==-2||E==2||q==0&&E==0}for(v=8;v<g-8;v+=1)m[v][6]==null&&(m[v][6]=v%2==0);for(v=8;v<g-8;v+=1)m[6][v]==null&&(m[6][v]=v%2==0);for(v=s.w(f<<3|k),S=0;15>S;S+=1)D=!w&&(v>>S&1)==1,m[6>S?S:8>S?S+1:g-15+S][8]=D,m[8][8>S?g-S-1:9>S?15-S:14-S]=D;if(m[g-8][8]=!w,7<=l){for(v=s.A(l),S=0;18>S;S+=1)D=!w&&(v>>S&1)==1,m[Math.floor(S/3)][S%3+g-8-3]=D;for(S=0;18>S;S+=1)D=!w&&(v>>S&1)==1,m[S%3+g-8-3][Math.floor(S/3)]=D}if(y==null){for(w=a.I(l,f),v=e(),S=0;S<b.length;S+=1)D=b[S],v.put(4,4),v.put(D.b(),s.f(4,l)),D.write(v);for(S=D=0;S<w.length;S+=1)D+=w[S].j;if(v.f()>8*D)throw Error("code length overflow. ("+v.f()+">"+8*D+")");for(v.f()+4<=8*D&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*D)&&(v.put(236,8),!(v.f()>=8*D));)v.put(17,8);var J=0;for(D=S=0,K=Array(w.length),B=Array(w.length),q=0;q<w.length;q+=1){var Q=w[q].j,he=w[q].o-Q;for(S=Math.max(S,Q),D=Math.max(D,he),K[q]=Array(Q),E=0;E<K[q].length;E+=1)K[q][E]=255&v.B()[E+J];for(J+=Q,E=s.C(he),Q=i(K[q],E.b()-1).l(E),B[q]=Array(E.b()-1),E=0;E<B[q].length;E+=1)he=E+Q.b()-B[q].length,B[q][E]=0<=he?Q.c(he):0}for(E=v=0;E<w.length;E+=1)v+=w[E].o;for(v=Array(v),E=J=0;E<S;E+=1)for(q=0;q<w.length;q+=1)E<K[q].length&&(v[J]=K[q][E],J+=1);for(E=0;E<D;E+=1)for(q=0;q<w.length;q+=1)E<B[q].length&&(v[J]=B[q][E],J+=1);y=v}for(w=y,v=-1,S=g-1,D=7,K=0,k=s.F(k),B=g-1;0<B;B-=2)for(B==6&&--B;;){for(q=0;2>q;q+=1)m[S][B-q]==null&&(E=!1,K<w.length&&(E=(w[K]>>>D&1)==1),k(S,B-q)&&(E=!E),m[S][B-q]=E,--D,D==-1&&(K+=1,D=7));if(S+=v,0>S||g<=S){S-=v,v=-v;break}}}var f=o[c],m=null,g=0,y=null,b=[],_={u:function(w){w=t(w),b.push(w),y=null},a:function(w,k){if(0>w||g<=w||0>k||g<=k)throw Error(w+","+k);return m[w][k]},h:function(){return g},J:function(){for(var w=0,k=0,v=0;8>v;v+=1){h(!0,v);var S=s.D(_);(v==0||w>S)&&(w=S,k=v)}h(!1,k)}};return _}function i(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var d=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var m=Array(l.length-f+c),g=0;g<l.length-f;g+=1)m[g]=l[g+f];return m}(),h={c:function(f){return d[f]},b:function(){return d.length},multiply:function(f){for(var m=Array(h.b()+f.b()-1),g=0;g<h.b();g+=1)for(var y=0;y<f.b();y+=1)m[g+y]^=n.i(n.g(h.c(g))+n.g(f.c(y)));return i(m,0)},l:function(f){if(0>h.b()-f.b())return h;for(var m=n.g(h.c(0))-n.g(f.c(0)),g=Array(h.b()),y=0;y<h.b();y+=1)g[y]=h.c(y);for(y=0;y<f.b();y+=1)g[y]^=n.i(n.g(f.c(y))+m);return i(g,0).l(f)}};return h}r.s=function(l){for(var c=[],d=0;d<l.length;d++){var h=l.charCodeAt(d);128>h?c.push(h):2048>h?c.push(192|h>>6,128|h&63):55296>h||57344<=h?c.push(224|h>>12,128|h>>6&63,128|h&63):(d++,h=65536+((h&1023)<<10|l.charCodeAt(d)&1023),c.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return c};var o={L:1,M:0,Q:3,H:2},s=function(){function l(h){for(var f=0;h!=0;)f+=1,h>>>=1;return f}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(h){for(var f=h<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(h<<10|f)^21522},A:function(h){for(var f=h<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return h<<12|f},G:function(h){return c[h-1]},F:function(h){switch(h){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var f=i([1],0),m=0;m<h;m+=1)f=f.multiply(i([1,n.i(m)],0));return f},f:function(h,f){if(h!=4||1>f||40<f)throw Error("mode: "+h+"; type: "+f);return 10>f?8:16},D:function(h){for(var f=h.h(),m=0,g=0;g<f;g+=1)for(var y=0;y<f;y+=1){for(var b=0,_=h.a(g,y),w=-1;1>=w;w+=1)if(!(0>g+w||f<=g+w))for(var k=-1;1>=k;k+=1)0>y+k||f<=y+k||(w!=0||k!=0)&&_==h.a(g+w,y+k)&&(b+=1);5<b&&(m+=3+b-5)}for(g=0;g<f-1;g+=1)for(y=0;y<f-1;y+=1)b=0,h.a(g,y)&&(b+=1),h.a(g+1,y)&&(b+=1),h.a(g,y+1)&&(b+=1),h.a(g+1,y+1)&&(b+=1),(b==0||b==4)&&(m+=3);for(g=0;g<f;g+=1)for(y=0;y<f-6;y+=1)h.a(g,y)&&!h.a(g,y+1)&&h.a(g,y+2)&&h.a(g,y+3)&&h.a(g,y+4)&&!h.a(g,y+5)&&h.a(g,y+6)&&(m+=40);for(y=0;y<f;y+=1)for(g=0;g<f-6;g+=1)h.a(g,y)&&!h.a(g+1,y)&&h.a(g+2,y)&&h.a(g+3,y)&&h.a(g+4,y)&&!h.a(g+5,y)&&h.a(g+6,y)&&(m+=40);for(y=b=0;y<f;y+=1)for(g=0;g<f;g+=1)h.a(g,y)&&(b+=1);return m+=Math.abs(100*b/f/f-50)/5*10}};return d}(),n=function(){for(var l=Array(256),c=Array(256),d=0;8>d;d+=1)l[d]=1<<d;for(d=8;256>d;d+=1)l[d]=l[d-4]^l[d-5]^l[d-6]^l[d-8];for(d=0;255>d;d+=1)c[l[d]]=d;return{g:function(h){if(1>h)throw Error("glog("+h+")");return c[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),a=function(){function l(h,f){switch(f){case o.L:return c[4*(h-1)];case o.M:return c[4*(h-1)+1];case o.Q:return c[4*(h-1)+2];case o.H:return c[4*(h-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(h,f){var m=l(h,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+f);h=m.length/3,f=[];for(var g=0;g<h;g+=1)for(var y=m[3*g],b=m[3*g+1],_=m[3*g+2],w=0;w<y;w+=1){var k=_,v={};v.o=b,v.j=k,f.push(v)}return f}};return d}();return r}());var _0=QrCreator;var Qt=class extends T{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&_0.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Je({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Qt.styles=[$,v0];u([O("canvas")],Qt.prototype,"canvas",2);u([p()],Qt.prototype,"value",2);u([p()],Qt.prototype,"label",2);u([p({type:Number})],Qt.prototype,"size",2);u([p()],Qt.prototype,"fill",2);u([p()],Qt.prototype,"background",2);u([p({type:Number})],Qt.prototype,"radius",2);u([p({attribute:"error-correction"})],Qt.prototype,"errorCorrection",2);u([C(["background","errorCorrection","fill","radius","size","value"])],Qt.prototype,"generate",1);Qt.define("sl-qr-code");var uc=A`
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
`;var x0=A`
  ${uc}

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
`;var er=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return yi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${L({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${M(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};er.styles=[$,x0];u([O(".button")],er.prototype,"input",2);u([O(".hidden-input")],er.prototype,"hiddenInput",2);u([R()],er.prototype,"hasFocus",2);u([p({type:Boolean,reflect:!0})],er.prototype,"checked",2);u([p()],er.prototype,"value",2);u([p({type:Boolean,reflect:!0})],er.prototype,"disabled",2);u([p({reflect:!0})],er.prototype,"size",2);u([p({type:Boolean,reflect:!0})],er.prototype,"pill",2);u([C("disabled",{waitUntilFirstUpdate:!0})],er.prototype,"handleDisabledChange",1);er.define("sl-radio-button");var k0=A`
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
`;var Ut=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return x`
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
    `}};Ut.styles=[$,k0];Ut.dependencies={"sl-icon":ie};u([O(".option__label")],Ut.prototype,"defaultSlot",2);u([R()],Ut.prototype,"current",2);u([R()],Ut.prototype,"selected",2);u([R()],Ut.prototype,"hasHover",2);u([p({reflect:!0})],Ut.prototype,"value",2);u([p({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);u([C("disabled")],Ut.prototype,"handleDisabledChange",1);u([C("selected")],Ut.prototype,"handleSelectedChange",1);u([C("value")],Ut.prototype,"handleValueChange",1);Ut.define("sl-option");var S0=A`
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
`;var _o=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*e,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return x`
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
    `}};_o.styles=[$,S0];u([O(".progress-ring__indicator")],_o.prototype,"indicator",2);u([R()],_o.prototype,"indicatorOffset",2);u([p({type:Number,reflect:!0})],_o.prototype,"value",2);u([p()],_o.prototype,"label",2);_o.define("sl-progress-ring");var C0=A`
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
`;var ms=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${L({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Je({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};ms.styles=[$,C0];u([p({type:Number,reflect:!0})],ms.prototype,"value",2);u([p({type:Boolean,reflect:!0})],ms.prototype,"indeterminate",2);u([p()],ms.prototype,"label",2);ms.define("sl-progress-bar");var T0=A`
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
`;var Ph=class extends T{render(){return x` <slot part="base" class="menu-label"></slot> `}};Ph.styles=[$,T0];Ph.define("sl-menu-label");var E0=A`
  :host {
    display: contents;
  }
`;var mr=class extends T{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return x` <slot></slot> `}};mr.styles=[$,E0];u([p({reflect:!0})],mr.prototype,"attr",2);u([p({attribute:"attr-old-value",type:Boolean,reflect:!0})],mr.prototype,"attrOldValue",2);u([p({attribute:"char-data",type:Boolean,reflect:!0})],mr.prototype,"charData",2);u([p({attribute:"char-data-old-value",type:Boolean,reflect:!0})],mr.prototype,"charDataOldValue",2);u([p({attribute:"child-list",type:Boolean,reflect:!0})],mr.prototype,"childList",2);u([p({type:Boolean,reflect:!0})],mr.prototype,"disabled",2);u([C("disabled")],mr.prototype,"handleDisabledChange",1);u([C("attr",{waitUntilFirstUpdate:!0}),C("attr-old-value",{waitUntilFirstUpdate:!0}),C("char-data",{waitUntilFirstUpdate:!0}),C("char-data-old-value",{waitUntilFirstUpdate:!0}),C("childList",{waitUntilFirstUpdate:!0})],mr.prototype,"handleChange",1);mr.define("sl-mutation-observer");var A0=A`
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
`;var se=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return x`
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
              name=${M(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Ft(this.value)}
              autocapitalize=${M(this.autocapitalize)}
              autocomplete=${M(this.autocomplete)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${M(this.pattern)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
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
    `}};se.styles=[$,Et,A0];se.dependencies={"sl-icon":ie};u([O(".input__control")],se.prototype,"input",2);u([R()],se.prototype,"hasFocus",2);u([p()],se.prototype,"title",2);u([p({reflect:!0})],se.prototype,"type",2);u([p()],se.prototype,"name",2);u([p()],se.prototype,"value",2);u([Xt()],se.prototype,"defaultValue",2);u([p({reflect:!0})],se.prototype,"size",2);u([p({type:Boolean,reflect:!0})],se.prototype,"filled",2);u([p({type:Boolean,reflect:!0})],se.prototype,"pill",2);u([p()],se.prototype,"label",2);u([p({attribute:"help-text"})],se.prototype,"helpText",2);u([p({type:Boolean})],se.prototype,"clearable",2);u([p({type:Boolean,reflect:!0})],se.prototype,"disabled",2);u([p()],se.prototype,"placeholder",2);u([p({type:Boolean,reflect:!0})],se.prototype,"readonly",2);u([p({attribute:"password-toggle",type:Boolean})],se.prototype,"passwordToggle",2);u([p({attribute:"password-visible",type:Boolean})],se.prototype,"passwordVisible",2);u([p({attribute:"no-spin-buttons",type:Boolean})],se.prototype,"noSpinButtons",2);u([p({reflect:!0})],se.prototype,"form",2);u([p({type:Boolean,reflect:!0})],se.prototype,"required",2);u([p()],se.prototype,"pattern",2);u([p({type:Number})],se.prototype,"minlength",2);u([p({type:Number})],se.prototype,"maxlength",2);u([p()],se.prototype,"min",2);u([p()],se.prototype,"max",2);u([p()],se.prototype,"step",2);u([p()],se.prototype,"autocapitalize",2);u([p()],se.prototype,"autocorrect",2);u([p()],se.prototype,"autocomplete",2);u([p({type:Boolean})],se.prototype,"autofocus",2);u([p()],se.prototype,"enterkeyhint",2);u([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],se.prototype,"spellcheck",2);u([p()],se.prototype,"inputmode",2);u([C("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);u([C("step",{waitUntilFirstUpdate:!0})],se.prototype,"handleStepChange",1);u([C("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);se.define("sl-input");var O0=A`
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
`;var dc=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath(),i=r.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;let n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),i=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===t?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};dc.styles=[$,O0];u([O("slot")],dc.prototype,"defaultSlot",2);dc.define("sl-menu");var $0=A`
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
`;var Yn=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),Yn(i,e);return!0},hc=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},I0=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),xA(e)}};function wA(t){this._$AN!==void 0?(hc(this),this._$AM=t,I0(this)):this._$AM=t}function _A(t,e=!1,r=0){let i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)Yn(i[s],!1),hc(i[s]);else i!=null&&(Yn(i,!1),hc(i));else Yn(this,t)}var xA=t=>{t.type==wt.CHILD&&(t._$AP??=_A,t._$AQ??=wA)},pc=class extends Yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),I0(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(Yn(this,e),hc(this))}setValue(e){if(sc(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var P0=()=>new zh,zh=class{},Lh=new WeakMap,L0=pr(class extends pc{render(t){return Ie}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Ie}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=Lh.get(e);r===void 0&&(r=new WeakMap,Lh.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Lh.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var z0=class{constructor(t,e){this.popupRef=P0(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break;default:break}},this.handleClick=r=>{var i;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(i=r.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{let r=this.host.renderRoot.querySelector("slot[name='submenu']"),i=r?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:s,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of e.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,s)=>{var n;let a=(n=e.get(s))!=null?n:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?x`
      <sl-popup
        ${L0(this.popupRef)}
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
    `:x` <slot name="submenu" hidden></slot> `}};var Ot=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ce(this,"submenu"),this.submenuController=new z0(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return jv(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return x`
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
    `}};Ot.styles=[$,$0];Ot.dependencies={"sl-icon":ie,"sl-popup":me,"sl-spinner":Hr};u([O("slot:not([name])")],Ot.prototype,"defaultSlot",2);u([O(".menu-item")],Ot.prototype,"menuItem",2);u([p()],Ot.prototype,"type",2);u([p({type:Boolean,reflect:!0})],Ot.prototype,"checked",2);u([p()],Ot.prototype,"value",2);u([p({type:Boolean,reflect:!0})],Ot.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);u([C("checked")],Ot.prototype,"handleCheckedChange",1);u([C("disabled")],Ot.prototype,"handleDisabledChange",1);u([C("type")],Ot.prototype,"handleTypeChange",1);Ot.define("sl-menu-item");var R0=A`
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
`;var _i=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.preventDefault(),vi(this.base,{onMove:i=>{this.position=parseFloat(Fe(i/e*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let i=t.shiftKey?10:1,o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight")&&(o-=i),(e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft")&&(o+=i),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=Fe(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){let t=this.localize.dir()==="rtl";return x`
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
            style=${Je({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Je({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};_i.styles=[$,R0];_i.scopedElement={"sl-icon":ie};u([O(".image-comparer")],_i.prototype,"base",2);u([O(".image-comparer__handle")],_i.prototype,"handle",2);u([p({type:Number,reflect:!0})],_i.prototype,"position",2);u([C("position",{waitUntilFirstUpdate:!0})],_i.prototype,"handlePositionChange",1);_i.define("sl-image-comparer");var D0=A`
  :host {
    display: block;
  }
`;var Rh=new Map;function M0(t,e="cors"){let r=Rh.get(t);if(r!==void 0)return Promise.resolve(r);let i=fetch(t,{mode:e}).then(async o=>{let s={ok:o.ok,status:o.status,html:await o.text()};return Rh.set(t,s),s});return Rh.set(t,i),i}var xo=class extends T{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(r=>e.setAttribute(r.name,r.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await M0(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return x`<slot></slot>`}};xo.styles=[$,D0];u([p()],xo.prototype,"src",2);u([p()],xo.prototype,"mode",2);u([p({attribute:"allow-scripts",type:Boolean})],xo.prototype,"allowScripts",2);u([C("src")],xo.prototype,"handleSrcChange",1);xo.define("sl-include");ie.define("sl-icon");Ue.define("sl-icon-button");var Xn=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:o,unitDisplay:this.display})}};u([p({type:Number})],Xn.prototype,"value",2);u([p()],Xn.prototype,"unit",2);u([p()],Xn.prototype,"display",2);Xn.define("sl-format-bytes");var $t=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return x`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};u([p()],$t.prototype,"date",2);u([p()],$t.prototype,"weekday",2);u([p()],$t.prototype,"era",2);u([p()],$t.prototype,"year",2);u([p()],$t.prototype,"month",2);u([p()],$t.prototype,"day",2);u([p()],$t.prototype,"hour",2);u([p()],$t.prototype,"minute",2);u([p()],$t.prototype,"second",2);u([p({attribute:"time-zone-name"})],$t.prototype,"timeZoneName",2);u([p({attribute:"time-zone"})],$t.prototype,"timeZone",2);u([p({attribute:"hour-format"})],$t.prototype,"hourFormat",2);$t.define("sl-format-date");var tr=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([p({type:Number})],tr.prototype,"value",2);u([p()],tr.prototype,"type",2);u([p({attribute:"no-grouping",type:Boolean})],tr.prototype,"noGrouping",2);u([p()],tr.prototype,"currency",2);u([p({attribute:"currency-display"})],tr.prototype,"currencyDisplay",2);u([p({attribute:"minimum-integer-digits",type:Number})],tr.prototype,"minimumIntegerDigits",2);u([p({attribute:"minimum-fraction-digits",type:Number})],tr.prototype,"minimumFractionDigits",2);u([p({attribute:"maximum-fraction-digits",type:Number})],tr.prototype,"maximumFractionDigits",2);u([p({attribute:"minimum-significant-digits",type:Number})],tr.prototype,"minimumSignificantDigits",2);u([p({attribute:"maximum-significant-digits",type:Number})],tr.prototype,"maximumSignificantDigits",2);tr.define("sl-format-number");var N0=A`
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
`;var Jn=class extends T{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Jn.styles=[$,N0];u([p({type:Boolean,reflect:!0})],Jn.prototype,"vertical",2);u([C("vertical")],Jn.prototype,"handleVerticalChange",1);Jn.define("sl-divider");var F0=A`
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
`;var U0=new WeakMap;function B0(t){let e=U0.get(t);return e||(e=window.getComputedStyle(t,null),U0.set(t,e)),e}function kA(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=B0(t);return e.visibility!=="hidden"&&e.display!=="none"}function SA(t){let e=B0(t),{overflowY:r,overflowX:i}=e;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&r==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function CA(t){let e=t.tagName.toLowerCase(),r=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!kA(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:SA(t)}function V0(t){var e,r;let i=fc(t),o=(e=i[0])!=null?e:null,s=(r=i[i.length-1])!=null?r:null;return{start:o,end:s}}function TA(t,e){var r;return((r=t.getRootNode({composed:!0}))==null?void 0:r.host)!==e}function fc(t){let e=new WeakMap,r=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!r.includes(o)&&CA(o)&&r.push(o),o instanceof HTMLSlotElement&&TA(o,t)&&o.assignedElements({flatten:!0}).forEach(s=>{i(s)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(let s of o.children)i(s)}return i(t),r.sort((o,s)=>{let n=Number(o.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}function*Dh(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*zy(Dh(t.shadowRoot.activeElement))))}function EA(){return[...Dh()].pop()}var Qn=[],mc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var r;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let i=EA();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let o=fc(this.element),s=o.findIndex(a=>a===i);this.previousFocus=this.currentFocus;let n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=o.length?s=0:s+n<0?s=o.length-1:s+=n,this.previousFocus=this.currentFocus;let a=o[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});let l=[...Dh()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Qn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Qn=Qn.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Qn[Qn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=fc(this.element);if(!this.element.matches(":focus-within")){let e=t[0],r=t[t.length-1],i=this.tabDirection==="forward"?e:r;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function j0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var It=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer"),this.localize=new W(this),this.modal=new mc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),vo(this)))}disconnectedCallback(){super.disconnectedCallback(),wo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=be(this,"drawer.denyClose",{dir:this.localize.dir()});Se(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),vo(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pe(this.drawer),Pe(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=be(this,`drawer.show${j0(this.placement)}`,{dir:this.localize.dir()}),r=be(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Se(this.panel,e.keyframes,e.options),Se(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),wo(this)),await Promise.all([Pe(this.drawer),Pe(this.overlay)]);let t=be(this,`drawer.hide${j0(this.placement)}`,{dir:this.localize.dir()}),e=be(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Se(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Se(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),vo(this)),this.open&&this.contained&&(this.modal.deactivate(),wo(this))}async show(){if(!this.open)return this.open=!0,We(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,We(this,"sl-after-hide")}render(){return x`
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
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
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
    `}};It.styles=[$,F0];It.dependencies={"sl-icon-button":Ue};u([O(".drawer")],It.prototype,"drawer",2);u([O(".drawer__panel")],It.prototype,"panel",2);u([O(".drawer__overlay")],It.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],It.prototype,"open",2);u([p({reflect:!0})],It.prototype,"label",2);u([p({reflect:!0})],It.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],It.prototype,"contained",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],It.prototype,"noHeader",2);u([C("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);u([C("contained",{waitUntilFirstUpdate:!0})],It.prototype,"handleNoModalChange",1);de("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});de("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});de("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});de("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});de("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});de("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});It.define("sl-drawer");var q0=A`
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
`;var Qe=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;let s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>V0(i).start),r;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=e.button;break;default:r=e}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,We(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,We(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=be(this,"dropdown.show",{dir:this.localize.dir()});await Se(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);let{keyframes:t,options:e}=be(this,"dropdown.hide",{dir:this.localize.dir()});await Se(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
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
        sync=${M(this.sync?this.sync:void 0)}
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
    `}};Qe.styles=[$,q0];Qe.dependencies={"sl-popup":me};u([O(".dropdown")],Qe.prototype,"popup",2);u([O(".dropdown__trigger")],Qe.prototype,"trigger",2);u([O(".dropdown__panel")],Qe.prototype,"panel",2);u([p({type:Boolean,reflect:!0})],Qe.prototype,"open",2);u([p({reflect:!0})],Qe.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);u([p({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Qe.prototype,"stayOpenOnSelect",2);u([p({attribute:!1})],Qe.prototype,"containingElement",2);u([p({type:Number})],Qe.prototype,"distance",2);u([p({type:Number})],Qe.prototype,"skidding",2);u([p({type:Boolean})],Qe.prototype,"hoist",2);u([p({reflect:!0})],Qe.prototype,"sync",2);u([C("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);de("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Qe.define("sl-dropdown");var H0=A`
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
`;var et=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]"),o=this.from,s="";r?[o,s]=this.from.trim().split("."):i&&([o,s]=this.from.trim().replace(/\]$/,"").split("["));let n="getElementById"in e?e.getElementById(o):null;n?i?t=n.getAttribute(s)||"":r?t=n[s]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,s=be(this,"copy.in",{dir:"ltr"}),n=be(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?r:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return x`
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
    `}};et.styles=[$,H0];et.dependencies={"sl-icon":ie,"sl-tooltip":Xe};u([O('slot[name="copy-icon"]')],et.prototype,"copyIcon",2);u([O('slot[name="success-icon"]')],et.prototype,"successIcon",2);u([O('slot[name="error-icon"]')],et.prototype,"errorIcon",2);u([O("sl-tooltip")],et.prototype,"tooltip",2);u([R()],et.prototype,"isCopying",2);u([R()],et.prototype,"status",2);u([p()],et.prototype,"value",2);u([p()],et.prototype,"from",2);u([p({type:Boolean,reflect:!0})],et.prototype,"disabled",2);u([p({attribute:"copy-label"})],et.prototype,"copyLabel",2);u([p({attribute:"success-label"})],et.prototype,"successLabel",2);u([p({attribute:"error-label"})],et.prototype,"errorLabel",2);u([p({attribute:"feedback-duration",type:Number})],et.prototype,"feedbackDuration",2);u([p({attribute:"tooltip-placement"})],et.prototype,"tooltipPlacement",2);u([p({type:Boolean})],et.prototype,"hoist",2);de("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});de("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});et.define("sl-copy-button");var W0=A`
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
`;var rr=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pe(this.body);let{keyframes:e,options:r}=be(this,"details.show",{dir:this.localize.dir()});await Se(this.body,us(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pe(this.body);let{keyframes:e,options:r}=be(this,"details.hide",{dir:this.localize.dir()});await Se(this.body,us(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,We(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,We(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return x`
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
    `}};rr.styles=[$,W0];rr.dependencies={"sl-icon":ie};u([O(".details")],rr.prototype,"details",2);u([O(".details__header")],rr.prototype,"header",2);u([O(".details__body")],rr.prototype,"body",2);u([O(".details__expand-icon-slot")],rr.prototype,"expandIconSlot",2);u([p({type:Boolean,reflect:!0})],rr.prototype,"open",2);u([p()],rr.prototype,"summary",2);u([p({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);u([C("open",{waitUntilFirstUpdate:!0})],rr.prototype,"handleOpenChange",1);de("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});de("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});rr.define("sl-details");var G0=A`
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
`;var gr=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer"),this.localize=new W(this),this.modal=new mc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),vo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),wo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=be(this,"dialog.denyClose",{dir:this.localize.dir()});Se(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),vo(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pe(this.dialog),Pe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=be(this,"dialog.show",{dir:this.localize.dir()}),r=be(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Se(this.panel,e.keyframes,e.options),Se(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Pe(this.dialog),Pe(this.overlay)]);let t=be(this,"dialog.hide",{dir:this.localize.dir()}),e=be(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Se(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Se(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,wo(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,We(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,We(this,"sl-after-hide")}render(){return x`
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
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
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
    `}};gr.styles=[$,G0];gr.dependencies={"sl-icon-button":Ue};u([O(".dialog")],gr.prototype,"dialog",2);u([O(".dialog__panel")],gr.prototype,"panel",2);u([O(".dialog__overlay")],gr.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],gr.prototype,"open",2);u([p({reflect:!0})],gr.prototype,"label",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],gr.prototype,"noHeader",2);u([C("open",{waitUntilFirstUpdate:!0})],gr.prototype,"handleOpenChange",1);de("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});de("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});de("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});gr.define("sl-dialog");Ze.define("sl-checkbox");var K0=A`
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
`;var we=class extends T{constructor(){super(...arguments),this.formControlController=new st(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ce(this,"[default]","prefix","suffix"),this.localize=new W(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:is}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?ps`a`:ps`button`;return yi`
      <${e}
        part="base"
        class=${L({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${M(t?void 0:this.disabled)}
        type=${M(t?void 0:this.type)}
        title=${this.title}
        name=${M(t?void 0:this.name)}
        value=${M(t?void 0:this.value)}
        href=${M(t&&!this.disabled?this.href:void 0)}
        target=${M(t?this.target:void 0)}
        download=${M(t?this.download:void 0)}
        rel=${M(t?this.rel:void 0)}
        role=${M(t?void 0:"button")}
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
        ${this.caret?yi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?yi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};we.styles=[$,uc];we.dependencies={"sl-icon":ie,"sl-spinner":Hr};u([O(".button")],we.prototype,"button",2);u([R()],we.prototype,"hasFocus",2);u([R()],we.prototype,"invalid",2);u([p()],we.prototype,"title",2);u([p({reflect:!0})],we.prototype,"variant",2);u([p({reflect:!0})],we.prototype,"size",2);u([p({type:Boolean,reflect:!0})],we.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],we.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],we.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],we.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],we.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],we.prototype,"circle",2);u([p()],we.prototype,"type",2);u([p()],we.prototype,"name",2);u([p()],we.prototype,"value",2);u([p()],we.prototype,"href",2);u([p()],we.prototype,"target",2);u([p()],we.prototype,"rel",2);u([p()],we.prototype,"download",2);u([p()],we.prototype,"form",2);u([p({attribute:"formaction"})],we.prototype,"formAction",2);u([p({attribute:"formenctype"})],we.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],we.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],we.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],we.prototype,"formTarget",2);u([C("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);function tt(t,e){AA(t)&&(t="100%");let r=OA(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function ea(t){return Math.min(1,Math.max(0,t))}function AA(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function OA(t){return typeof t=="string"&&t.indexOf("%")!==-1}function gc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ta(t){return Number(t)<=1?`${Number(t)*100}%`:t}function xi(t){return t.length===1?"0"+t:String(t)}function Z0(t,e,r){return{r:tt(t,255)*255,g:tt(e,255)*255,b:tt(r,255)*255}}function Nh(t,e,r){t=tt(t,255),e=tt(e,255),r=tt(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=0,a=(i+o)/2;if(i===o)n=0,s=0;else{let l=i-o;switch(n=a>.5?l/(2-i-o):l/(i+o),i){case t:s=(e-r)/l+(e<r?6:0);break;case e:s=(r-t)/l+2;break;case r:s=(t-e)/l+4;break;default:break}s/=6}return{h:s,s:n,l:a}}function Mh(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function Y0(t,e,r){let i,o,s;if(t=tt(t,360),e=tt(e,100),r=tt(r,100),e===0)o=r,s=r,i=r;else{let n=r<.5?r*(1+e):r+e-r*e,a=2*r-n;i=Mh(a,n,t+1/3),o=Mh(a,n,t),s=Mh(a,n,t-1/3)}return{r:i*255,g:o*255,b:s*255}}function Fh(t,e,r){t=tt(t,255),e=tt(e,255),r=tt(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=i,a=i-o,l=i===0?0:a/i;if(i===o)s=0;else{switch(i){case t:s=(e-r)/a+(e<r?6:0);break;case e:s=(r-t)/a+2;break;case r:s=(t-e)/a+4;break;default:break}s/=6}return{h:s,s:l,v:n}}function X0(t,e,r){t=tt(t,360)*6,e=tt(e,100),r=tt(r,100);let i=Math.floor(t),o=t-i,s=r*(1-e),n=r*(1-o*e),a=r*(1-(1-o)*e),l=i%6,c=[r,n,s,s,a,r][l],d=[a,r,r,n,s,s][l],h=[s,s,a,r,r,n][l];return{r:c*255,g:d*255,b:h*255}}function Uh(t,e,r,i){let o=[xi(Math.round(t).toString(16)),xi(Math.round(e).toString(16)),xi(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function J0(t,e,r,i,o){let s=[xi(Math.round(t).toString(16)),xi(Math.round(e).toString(16)),xi(Math.round(r).toString(16)),xi($A(i))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Q0(t,e,r,i){let o=t/100,s=e/100,n=r/100,a=i/100,l=255*(1-o)*(1-a),c=255*(1-s)*(1-a),d=255*(1-n)*(1-a);return{r:l,g:c,b:d}}function Bh(t,e,r){let i=1-t/255,o=1-e/255,s=1-r/255,n=Math.min(i,o,s);return n===1?(i=0,o=0,s=0):(i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100,s=(s-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(o),y:Math.round(s),k:Math.round(n)}}function $A(t){return Math.round(parseFloat(t)*255).toString(16)}function Vh(t){return Pt(t)/255}function Pt(t){return parseInt(t,16)}function ew(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var ra={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function tw(t){let e={r:0,g:0,b:0},r=1,i=null,o=null,s=null,n=!1,a=!1;return typeof t=="string"&&(t=LA(t)),typeof t=="object"&&(Bt(t.r)&&Bt(t.g)&&Bt(t.b)?(e=Z0(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Bt(t.h)&&Bt(t.s)&&Bt(t.v)?(i=ta(t.s),o=ta(t.v),e=X0(t.h,i,o),n=!0,a="hsv"):Bt(t.h)&&Bt(t.s)&&Bt(t.l)?(i=ta(t.s),s=ta(t.l),e=Y0(t.h,i,s),n=!0,a="hsl"):Bt(t.c)&&Bt(t.m)&&Bt(t.y)&&Bt(t.k)&&(e=Q0(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=gc(r),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var IA="[-\\+]?\\d+%?",PA="[-\\+]?\\d*\\.\\d+%?",ki="(?:"+PA+")|(?:"+IA+")",jh="[\\s|\\(]+("+ki+")[,|\\s]+("+ki+")[,|\\s]+("+ki+")\\s*\\)?",bc="[\\s|\\(]+("+ki+")[,|\\s]+("+ki+")[,|\\s]+("+ki+")[,|\\s]+("+ki+")\\s*\\)?",ir={CSS_UNIT:new RegExp(ki),rgb:new RegExp("rgb"+jh),rgba:new RegExp("rgba"+bc),hsl:new RegExp("hsl"+jh),hsla:new RegExp("hsla"+bc),hsv:new RegExp("hsv"+jh),hsva:new RegExp("hsva"+bc),cmyk:new RegExp("cmyk"+bc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function LA(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(ra[t])t=ra[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=ir.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=ir.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=ir.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=ir.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=ir.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=ir.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=ir.cmyk.exec(t),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:(r=ir.hex8.exec(t),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),a:Vh(r[4]),format:e?"name":"hex8"}:(r=ir.hex6.exec(t),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),format:e?"name":"hex"}:(r=ir.hex4.exec(t),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),a:Vh(r[4]+r[4]),format:e?"name":"hex8"}:(r=ir.hex3.exec(t),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),format:e?"name":"hex"}:!1))))))))))}function Bt(t){return typeof t=="number"?!Number.isNaN(t):ir.CSS_UNIT.test(t)}var ia=class t{constructor(e="",r={}){if(e instanceof t)return e;typeof e=="number"&&(e=ew(e)),this.originalInput=e;let i=tw(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),r,i,o,s=e.r/255,n=e.g/255,a=e.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=gc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Fh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Fh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${i}%, ${o}%)`:`hsva(${r}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let e=Nh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Nh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${i}%, ${o}%)`:`hsla(${r}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Uh(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return J0(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${r}, ${i})`:`rgba(${e}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){let e=r=>`${Math.round(tt(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=r=>Math.round(tt(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Bh(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:r,y:i,k:o}=Bh(this.r,this.g,this.b);return`cmyk(${e}, ${r}, ${i}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+Uh(this.r,this.g,this.b,!1);for(let[r,i]of Object.entries(ra))if(e===i)return r;return!1}toString(e){let r=!!e;e=e??this.format;let i=!1,o=this.a<1&&this.a>=0;return!r&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let r=this.toHsl();return r.l+=e/100,r.l=ea(r.l),new t(r)}brighten(e=10){let r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)}darken(e=10){let r=this.toHsl();return r.l-=e/100,r.l=ea(r.l),new t(r)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let r=this.toHsl();return r.s-=e/100,r.s=ea(r.s),new t(r)}saturate(e=10){let r=this.toHsl();return r.s+=e/100,r.s=ea(r.s),new t(r)}greyscale(){return this.desaturate(100)}spin(e){let r=this.toHsl(),i=(r.h+e)%360;return r.h=i<0?360+i:i,new t(r)}mix(e,r=50){let i=this.toRgb(),o=new t(e).toRgb(),s=r/100,n={r:(o.r-i.r)*s+i.r,g:(o.g-i.g)*s+i.g,b:(o.b-i.b)*s+i.b,a:(o.a-i.a)*s+i.a};return new t(n)}analogous(e=6,r=30){let i=this.toHsl(),o=360/r,s=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,s.push(new t(i));return s}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let r=this.toHsv(),{h:i}=r,{s:o}=r,{v:s}=r,n=[],a=1/e;for(;e--;)n.push(new t({h:i,s:o,v:s})),s=(s+a)%1;return n}splitcomplement(){let e=this.toHsl(),{h:r}=e;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]}onBackground(e){let r=this.toRgb(),i=new t(e).toRgb(),o=r.a+i.a*(1-r.a);return new t({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let r=this.toHsl(),{h:i}=r,o=[this],s=360/e;for(let n=1;n<e;n++)o.push(new t({h:(i+n*s)%360,s:r.s,l:r.l}));return o}equals(e){let r=new t(e);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}};var rw="EyeDropper"in window,fe=class extends T{constructor(){super(),this.formControlController=new st(this),this.isSafeValue=!1,this.localize=new W(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),vi(e,{onMove:n=>{this.alpha=Fe(n/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),vi(e,{onMove:n=>{this.hue=Fe(n/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),r=e.querySelector(".color-picker__grid-handle"),{width:i,height:o}=e.getBoundingClientRect(),s=this.value,n=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,vi(e,{onMove:(a,l)=>{this.saturation=Fe(a/i*100,0,100),this.brightness=Fe(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Fe(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Fe(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Fe(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Fe(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Fe(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Fe(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Fe(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Fe(this.brightness-e,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new ia(t);if(!e.isValid)return null;let r=e.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!rw)return;new EyeDropper().open().then(e=>{let r=this.value;this.setColor(e.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,r,i=100){let o=new ia(`hsva(${t}, ${e}%, ${r}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let r=this.parseColor(e);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=x`
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
          style=${Je({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${L({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Je({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${M(this.disabled?void 0:"0")}
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
                style=${Je({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${M(this.disabled?void 0:"0")}
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
                      style=${Je({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Je({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${M(this.disabled?void 0:"0")}
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
            style=${Je({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${rw?x`
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
                      tabindex=${M(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Je({backgroundColor:s.hexa})}
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
          style=${Je({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};fe.styles=[$,K0];fe.dependencies={"sl-button-group":$r,"sl-button":we,"sl-dropdown":Qe,"sl-icon":ie,"sl-input":se,"sl-visually-hidden":Nn};u([O('[part~="base"]')],fe.prototype,"base",2);u([O('[part~="input"]')],fe.prototype,"input",2);u([O(".color-dropdown")],fe.prototype,"dropdown",2);u([O('[part~="preview"]')],fe.prototype,"previewButton",2);u([O('[part~="trigger"]')],fe.prototype,"trigger",2);u([R()],fe.prototype,"hasFocus",2);u([R()],fe.prototype,"isDraggingGridHandle",2);u([R()],fe.prototype,"isEmpty",2);u([R()],fe.prototype,"inputValue",2);u([R()],fe.prototype,"hue",2);u([R()],fe.prototype,"saturation",2);u([R()],fe.prototype,"brightness",2);u([R()],fe.prototype,"alpha",2);u([p()],fe.prototype,"value",2);u([Xt()],fe.prototype,"defaultValue",2);u([p()],fe.prototype,"label",2);u([p()],fe.prototype,"format",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"inline",2);u([p({reflect:!0})],fe.prototype,"size",2);u([p({attribute:"no-format-toggle",type:Boolean})],fe.prototype,"noFormatToggle",2);u([p()],fe.prototype,"name",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);u([p({type:Boolean})],fe.prototype,"hoist",2);u([p({type:Boolean})],fe.prototype,"opacity",2);u([p({type:Boolean})],fe.prototype,"uppercase",2);u([p()],fe.prototype,"swatches",2);u([p({reflect:!0})],fe.prototype,"form",2);u([p({type:Boolean,reflect:!0})],fe.prototype,"required",2);u([Er({passive:!1})],fe.prototype,"handleTouchMove",1);u([C("format",{waitUntilFirstUpdate:!0})],fe.prototype,"handleFormatChange",1);u([C("opacity",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpacityChange",1);u([C("value")],fe.prototype,"handleValueChange",1);fe.define("sl-color-picker");var iw=A`
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
`;var qh=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${L({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};qh.styles=[$,iw];qh.define("sl-card");var ow=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var sw=A`
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
`;function*nw(t,e){if(t!==void 0){let r=0;for(let i of t)yield e(i,r++)}}function*aw(t,e,r=1){let i=e===void 0?0:t;e??=t;for(let o=i;r>0?o<e:e<o;o+=r)yield o}var Ge=class extends T{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new ow(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new W(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let i=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||r!==o)&&(t.scrollTo({left:i,top:o,behavior:ic()?"auto":"smooth"}),await We(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:r,loop:i}=this,o=i?t/r:(t-e)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),r=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+r*r)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,r=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!r&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!r&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;let a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{t.disconnect();for(let a of e){let l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}let r=e.find(a=>a.isIntersecting);if(!r)return;let i=this.getSlides({excludeClones:!1}),o=this.getSlides().length,s=i.indexOf(r.target),n=this.loop?s-this.slidesPerPage:s;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){let a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,r=t.slice(-e),i=t.slice(0,e);r.reverse().forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-s-1)),this.prepend(n)}),i.forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handleSlideChange(){let t=this.getSlides();t.forEach((e,r)=>{e.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((r,i)=>{(i+e)%e===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:r,loop:i}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!o.length)return;let n=i?(t+o.length)%o.length:Fe(t,0,o.length-r);this.activeSlide=n;let a=this.localize.dir()==="rtl",l=Fe(t+(i?r:0)+(a?r-1:0),0,s.length-1),c=s[l];this.scrollToSlide(c,ic()?"auto":e)}scrollToSlide(t,e="smooth"){let r=this.scrollContainer,i=r.getBoundingClientRect(),o=t.getBoundingClientRect(),s=o.left-i.left,n=o.top-i.top;(s||n)&&(this.pendingSlideChange=!0,r.scrollTo({left:s+r.scrollLeft,top:n+r.scrollTop,behavior:e}))}render(){let{slidesPerMove:t,scrolling:e}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return x`
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
                ${nw(aw(r),a=>{let l=a===i;return x`
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
    `}};Ge.styles=[$,sw];Ge.dependencies={"sl-icon":ie};u([p({type:Boolean,reflect:!0})],Ge.prototype,"loop",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"navigation",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"pagination",2);u([p({type:Boolean,reflect:!0})],Ge.prototype,"autoplay",2);u([p({type:Number,attribute:"autoplay-interval"})],Ge.prototype,"autoplayInterval",2);u([p({type:Number,attribute:"slides-per-page"})],Ge.prototype,"slidesPerPage",2);u([p({type:Number,attribute:"slides-per-move"})],Ge.prototype,"slidesPerMove",2);u([p()],Ge.prototype,"orientation",2);u([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Ge.prototype,"mouseDragging",2);u([O(".carousel__slides")],Ge.prototype,"scrollContainer",2);u([O(".carousel__pagination")],Ge.prototype,"paginationContainer",2);u([R()],Ge.prototype,"activeSlide",2);u([R()],Ge.prototype,"scrolling",2);u([R()],Ge.prototype,"dragging",2);u([Er({passive:!0})],Ge.prototype,"handleScroll",1);u([C("loop",{waitUntilFirstUpdate:!0}),C("slidesPerPage",{waitUntilFirstUpdate:!0})],Ge.prototype,"initializeSlides",1);u([C("activeSlide")],Ge.prototype,"handleSlideChange",1);u([C("slidesPerMove")],Ge.prototype,"updateSlidesSnap",1);u([C("autoplay")],Ge.prototype,"handleAutoplayChange",1);Ge.define("sl-carousel");var zA=(t,e)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...i)},e)}},lw=(t,e,r)=>{let i=t[e];t[e]=function(...o){i.call(this,...o),r.call(this,i,...o)}},RA="onscrollend"in window;if(!RA){let t=new Set,e=new WeakMap,r=o=>{for(let s of o.changedTouches)t.add(s.identifier)},i=o=>{for(let s of o.changedTouches)t.delete(s.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),lw(EventTarget.prototype,"addEventListener",function(o,s){if(s!=="scrollend")return;let n=zA(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),lw(EventTarget.prototype,"removeEventListener",function(o,s){if(s!=="scrollend")return;let n=e.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var cw=A`
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
`;var Hh=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return x` <slot></slot> `}};Hh.styles=[$,cw];Hh.define("sl-carousel-item");$r.define("sl-button-group");we.define("sl-button");var oa={};Lw(oa,{backInDown:()=>ZA,backInLeft:()=>YA,backInRight:()=>XA,backInUp:()=>JA,backOutDown:()=>QA,backOutLeft:()=>eO,backOutRight:()=>tO,backOutUp:()=>rO,bounce:()=>DA,bounceIn:()=>iO,bounceInDown:()=>oO,bounceInLeft:()=>sO,bounceInRight:()=>nO,bounceInUp:()=>aO,bounceOut:()=>lO,bounceOutDown:()=>cO,bounceOutLeft:()=>uO,bounceOutRight:()=>dO,bounceOutUp:()=>hO,easings:()=>Wh,fadeIn:()=>pO,fadeInBottomLeft:()=>fO,fadeInBottomRight:()=>mO,fadeInDown:()=>gO,fadeInDownBig:()=>bO,fadeInLeft:()=>yO,fadeInLeftBig:()=>vO,fadeInRight:()=>wO,fadeInRightBig:()=>_O,fadeInTopLeft:()=>xO,fadeInTopRight:()=>kO,fadeInUp:()=>SO,fadeInUpBig:()=>CO,fadeOut:()=>TO,fadeOutBottomLeft:()=>EO,fadeOutBottomRight:()=>AO,fadeOutDown:()=>OO,fadeOutDownBig:()=>$O,fadeOutLeft:()=>IO,fadeOutLeftBig:()=>PO,fadeOutRight:()=>LO,fadeOutRightBig:()=>zO,fadeOutTopLeft:()=>RO,fadeOutTopRight:()=>DO,fadeOutUp:()=>MO,fadeOutUpBig:()=>NO,flash:()=>MA,flip:()=>FO,flipInX:()=>UO,flipInY:()=>BO,flipOutX:()=>VO,flipOutY:()=>jO,headShake:()=>NA,heartBeat:()=>FA,hinge:()=>h$,jackInTheBox:()=>p$,jello:()=>UA,lightSpeedInLeft:()=>qO,lightSpeedInRight:()=>HO,lightSpeedOutLeft:()=>WO,lightSpeedOutRight:()=>GO,pulse:()=>BA,rollIn:()=>f$,rollOut:()=>m$,rotateIn:()=>KO,rotateInDownLeft:()=>ZO,rotateInDownRight:()=>YO,rotateInUpLeft:()=>XO,rotateInUpRight:()=>JO,rotateOut:()=>QO,rotateOutDownLeft:()=>e$,rotateOutDownRight:()=>t$,rotateOutUpLeft:()=>r$,rotateOutUpRight:()=>i$,rubberBand:()=>VA,shake:()=>jA,shakeX:()=>qA,shakeY:()=>HA,slideInDown:()=>o$,slideInLeft:()=>s$,slideInRight:()=>n$,slideInUp:()=>a$,slideOutDown:()=>l$,slideOutLeft:()=>c$,slideOutRight:()=>u$,slideOutUp:()=>d$,swing:()=>WA,tada:()=>GA,wobble:()=>KA,zoomIn:()=>g$,zoomInDown:()=>b$,zoomInLeft:()=>y$,zoomInRight:()=>v$,zoomInUp:()=>w$,zoomOut:()=>_$,zoomOutDown:()=>x$,zoomOutLeft:()=>k$,zoomOutRight:()=>S$,zoomOutUp:()=>C$});var DA=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var MA=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var NA=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var FA=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var UA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var BA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var VA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var jA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var qA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var HA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var WA=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var GA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var KA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var ZA=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var YA=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var XA=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var JA=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var QA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var eO=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var tO=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var rO=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var iO=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var oO=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sO=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var nO=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var aO=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var lO=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var cO=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var uO=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var dO=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var hO=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var pO=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var fO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var mO=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var gO=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var bO=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var yO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var vO=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var wO=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var _O=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var xO=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var kO=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var SO=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var CO=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var TO=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var EO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var AO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var OO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var $O=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var IO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var PO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var LO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var zO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var RO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var DO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var MO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var NO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var FO=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var UO=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var BO=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var VO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var jO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var qO=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var HO=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var WO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var GO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var KO=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var ZO=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var YO=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var XO=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var JO=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var QO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var e$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var t$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var r$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var i$=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var o$=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var s$=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var n$=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var a$=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var l$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var c$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var u$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var d$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var h$=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var p$=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var f$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var m$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var g$=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var b$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var y$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var v$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var w$=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var _$=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var x$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var k$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var S$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var C$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var Wh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var uw=A`
  :host {
    display: contents;
  }
`;var rt=class extends T{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let r=(t=oa.easings[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:oa[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!i?!1:(this.destroyAnimation(),this.animation=s.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};rt.styles=[$,uw];u([rv("slot")],rt.prototype,"defaultSlot",2);u([p()],rt.prototype,"name",2);u([p({type:Boolean,reflect:!0})],rt.prototype,"play",2);u([p({type:Number})],rt.prototype,"delay",2);u([p()],rt.prototype,"direction",2);u([p({type:Number})],rt.prototype,"duration",2);u([p()],rt.prototype,"easing",2);u([p({attribute:"end-delay",type:Number})],rt.prototype,"endDelay",2);u([p()],rt.prototype,"fill",2);u([p({type:Number})],rt.prototype,"iterations",2);u([p({attribute:"iteration-start",type:Number})],rt.prototype,"iterationStart",2);u([p({attribute:!1})],rt.prototype,"keyframes",2);u([p({attribute:"playback-rate",type:Number})],rt.prototype,"playbackRate",2);u([C(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],rt.prototype,"handleAnimationChange",1);u([C("play")],rt.prototype,"handlePlayChange",1);u([C("playbackRate")],rt.prototype,"handlePlaybackRateChange",1);rt.define("sl-animation");var dw=A`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var ko=class extends T{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,r)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ko.styles=[$,dw];ko.dependencies={"sl-icon":ie};u([O("slot")],ko.prototype,"defaultSlot",2);u([O('slot[name="separator"]')],ko.prototype,"separatorSlot",2);u([p()],ko.prototype,"label",2);ko.define("sl-breadcrumb");var hw=A`
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
`;var Wr=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return x`
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
                target="${M(this.target?this.target:void 0)}"
                rel=${M(this.target?this.rel:void 0)}
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
    `}};Wr.styles=[$,hw];u([O("slot:not([name])")],Wr.prototype,"defaultSlot",2);u([R()],Wr.prototype,"renderType",2);u([p()],Wr.prototype,"href",2);u([p()],Wr.prototype,"target",2);u([p()],Wr.prototype,"rel",2);u([C("href",{waitUntilFirstUpdate:!0})],Wr.prototype,"hrefChanged",1);Wr.define("sl-breadcrumb-item");var pw=A`
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
`;var br=class extends T{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=x`
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
    `}};br.styles=[$,pw];br.dependencies={"sl-icon":ie};u([R()],br.prototype,"hasError",2);u([p()],br.prototype,"image",2);u([p()],br.prototype,"label",2);u([p()],br.prototype,"initials",2);u([p()],br.prototype,"loading",2);u([p({reflect:!0})],br.prototype,"shape",2);u([C("image")],br.prototype,"handleImageChange",1);br.define("sl-avatar");var fw=A`
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
`;var or=class extends T{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:r}=this.animatedImage;t.width=e,t.height=r,t.getContext("2d").drawImage(this.animatedImage,0,0,e,r),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return x`
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
    `}};or.styles=[$,fw];or.dependencies={"sl-icon":ie};u([O(".animated-image__animated")],or.prototype,"animatedImage",2);u([R()],or.prototype,"frozenFrame",2);u([R()],or.prototype,"isLoaded",2);u([p()],or.prototype,"src",2);u([p()],or.prototype,"alt",2);u([p({type:Boolean,reflect:!0})],or.prototype,"play",2);u([C("play",{waitUntilFirstUpdate:!0})],or.prototype,"handlePlayChange",1);u([C("src")],or.prototype,"handleSrcChange",1);or.define("sl-animated-image");var mw=A`
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
`;var gs=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Lt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"icon","suffix"),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pe(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=be(this,"alert.show",{dir:this.localize.dir()});await Se(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Pe(this.base);let{keyframes:t,options:e}=be(this,"alert.hide",{dir:this.localize.dir()});await Se(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,We(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,We(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),gs.parentElement===null&&document.body.append(gs),gs.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{gs.removeChild(this),t(),gs.querySelector("sl-alert")===null&&gs.remove()},{once:!0})})}render(){return x`
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
    `}};Lt.styles=[$,mw];Lt.dependencies={"sl-icon-button":Ue};u([O('[part~="base"]')],Lt.prototype,"base",2);u([O(".alert__countdown-elapsed")],Lt.prototype,"countdownElement",2);u([p({type:Boolean,reflect:!0})],Lt.prototype,"open",2);u([p({type:Boolean,reflect:!0})],Lt.prototype,"closable",2);u([p({reflect:!0})],Lt.prototype,"variant",2);u([p({type:Number})],Lt.prototype,"duration",2);u([p({type:String,reflect:!0})],Lt.prototype,"countdown",2);u([R()],Lt.prototype,"remainingTime",2);u([C("open",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleOpenChange",1);u([C("duration")],Lt.prototype,"handleDurationChange",1);de("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Lt.define("sl-alert");var gw=A`
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
`;var bs=class extends T{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${L({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};bs.styles=[$,gw];u([p({reflect:!0})],bs.prototype,"variant",2);u([p({type:Boolean,reflect:!0})],bs.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],bs.prototype,"pulse",2);bs.define("sl-badge");var Gh=Symbol("store-raw"),vs=Symbol("store-node"),Gr=Symbol("store-has"),bw=Symbol("store-self");function yw(t){let e=t[Zr];if(!e&&(Object.defineProperty(t,Zr,{value:e=new Proxy(t,J$)}),!Array.isArray(t))){let r=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let o=0,s=r.length;o<s;o++){let n=r[o];i[n].get&&Object.defineProperty(t,n,{enumerable:i[n].enumerable,get:i[n].get.bind(e)})}}return e}function Si(t){let e;return t!=null&&typeof t=="object"&&(t[Zr]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function ws(t,e=new Set){let r,i,o,s;if(r=t!=null&&t[Gh])return r;if(!Si(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let n=0,a=t.length;n<a;n++)o=t[n],(i=ws(o,e))!==o&&(t[n]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);let n=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let l=0,c=n.length;l<c;l++)s=n[l],!a[s].get&&(o=t[s],(i=ws(o,e))!==o&&(t[s]=i))}return t}function yc(t,e){let r=t[e];return r||Object.defineProperty(t,e,{value:r=Object.create(null)}),r}function na(t,e,r){if(t[e])return t[e];let[i,o]=Oe(r,{equals:!1,internal:!0});return i.$=o,t[e]=i}function Y$(t,e){let r=Reflect.getOwnPropertyDescriptor(t,e);return!r||r.get||!r.configurable||e===Zr||e===vs||(delete r.value,delete r.writable,r.get=()=>t[Zr][e]),r}function vw(t){fa()&&na(yc(t,vs),bw)()}function X$(t){return vw(t),Reflect.ownKeys(t)}var J$={get(t,e,r){if(e===Gh)return t;if(e===Zr)return r;if(e===ha)return vw(t),r;let i=yc(t,vs),o=i[e],s=o?o():t[e];if(e===vs||e===Gr||e==="__proto__")return s;if(!o){let n=Object.getOwnPropertyDescriptor(t,e);fa()&&(typeof s!="function"||t.hasOwnProperty(e))&&!(n&&n.get)&&(s=na(i,e,s)())}return Si(s)?yw(s):s},has(t,e){return e===Gh||e===Zr||e===ha||e===vs||e===Gr||e==="__proto__"?!0:(fa()&&na(yc(t,Gr),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:X$,getOwnPropertyDescriptor:Y$};function sr(t,e,r,i=!1){if(!i&&t[e]===r)return;let o=t[e],s=t.length;r===void 0?(delete t[e],t[Gr]&&t[Gr][e]&&o!==void 0&&t[Gr][e].$()):(t[e]=r,t[Gr]&&t[Gr][e]&&o===void 0&&t[Gr][e].$());let n=yc(t,vs),a;if((a=na(n,e,o))&&a.$(()=>r),Array.isArray(t)&&t.length!==s){for(let l=t.length;l<s;l++)(a=n[l])&&a.$();(a=na(n,"length",s))&&a.$(t.length)}(a=n[bw])&&a.$()}function ww(t,e){let r=Object.keys(e);for(let i=0;i<r.length;i+=1){let o=r[i];sr(t,o,e[o])}}function Q$(t,e){if(typeof e=="function"&&(e=e(t)),e=ws(e),Array.isArray(e)){if(t===e)return;let r=0,i=e.length;for(;r<i;r++){let o=e[r];t[r]!==o&&sr(t,r,o)}sr(t,"length",i)}else ww(t,e)}function sa(t,e,r=[]){let i,o=t;if(e.length>1){i=e.shift();let n=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let l=0;l<i.length;l++)sa(t,[i[l]].concat(e),r);return}else if(a&&n==="function"){for(let l=0;l<t.length;l++)i(t[l],l)&&sa(t,[l].concat(e),r);return}else if(a&&n==="object"){let{from:l=0,to:c=t.length-1,by:d=1}=i;for(let h=l;h<=c;h+=d)sa(t,[h].concat(e),r);return}else if(e.length>1){sa(t[i],e,[i].concat(r));return}o=t[i],r=[i].concat(r)}let s=e[0];typeof s=="function"&&(s=s(o,r),s===o)||i===void 0&&s==null||(s=ws(s),i===void 0||Si(o)&&Si(s)&&!Array.isArray(s)?ww(o,s):sr(t,i,s))}function _w(...[t,e]){let r=ws(t||{}),i=Array.isArray(r),o=yw(r);function s(...n){cp(()=>{i&&n.length===1?Q$(r,n[0]):sa(r,n)})}return[o,s]}var Kh=Symbol("store-root");function ys(t,e,r,i,o){let s=e[r];if(t===s)return;let n=Array.isArray(t);if(r!==Kh&&(!Si(t)||!Si(s)||n!==Array.isArray(s)||o&&t[o]!==s[o])){sr(e,r,t);return}if(n){if(t.length&&s.length&&(!i||o&&t[0]&&t[0][o]!=null)){let c,d,h,f,m,g,y,b;for(h=0,f=Math.min(s.length,t.length);h<f&&(s[h]===t[h]||o&&s[h]&&t[h]&&s[h][o]===t[h][o]);h++)ys(t[h],s,h,i,o);let _=new Array(t.length),w=new Map;for(f=s.length-1,m=t.length-1;f>=h&&m>=h&&(s[f]===t[m]||o&&s[h]&&t[h]&&s[f][o]===t[m][o]);f--,m--)_[m]=s[f];if(h>m||h>f){for(d=h;d<=m;d++)sr(s,d,t[d]);for(;d<t.length;d++)sr(s,d,_[d]),ys(t[d],s,d,i,o);s.length>t.length&&sr(s,"length",t.length);return}for(y=new Array(m+1),d=m;d>=h;d--)g=t[d],b=o&&g?g[o]:g,c=w.get(b),y[d]=c===void 0?-1:c,w.set(b,d);for(c=h;c<=f;c++)g=s[c],b=o&&g?g[o]:g,d=w.get(b),d!==void 0&&d!==-1&&(_[d]=s[c],d=y[d],w.set(b,d));for(d=h;d<t.length;d++)d in _?(sr(s,d,_[d]),ys(t[d],s,d,i,o)):sr(s,d,t[d])}else for(let c=0,d=t.length;c<d;c++)ys(t[c],s,c,i,o);s.length>t.length&&sr(s,"length",t.length);return}let a=Object.keys(t);for(let c=0,d=a.length;c<d;c++)ys(t[a[c]],s,a[c],i,o);let l=Object.keys(s);for(let c=0,d=l.length;c<d;c++)t[l[c]]===void 0&&sr(s,l[c],void 0)}function xw(t,e={}){let{merge:r,key:i="id"}=e,o=ws(t);return s=>{if(!Si(s)||!Si(o))return o;let n=ys(o,{[Kh]:s},Kh,r,i);return n===void 0?s:n}}var e5=ne("<sl-card><form><sl-input></sl-input><sl-input class=break-flow></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><fieldset><legend>Knagger</legend></fieldset><fieldset><legend>Lenker</legend><sl-button>Legg til ny</sl-button></fieldset><div><sl-button-group><sl-button>Lagre</sl-button><sl-button>Avbryt",!0,!1),t5=ne("<div><sl-input></sl-input><sl-icon-button color=red>",!0,!1),Zh=ot({form:t=>({display:"flex",gap:t.gapMd,alignItems:"baseline",flexWrap:"wrap","> *":{minWidth:"225px",flex:"1 1 33.333%"},"> .break-flow":{flexBasis:"100%"}}),itemRow:t=>({display:"flex",alignItems:"end",marginBottom:t.gapMd,">:first-child":{flex:"1"},">:last-child":{flexShrink:"0"}}),controls:t=>({display:"flex",justifyContent:"center"})}),kw=t=>{let[e,r]=Oe(""),[i,o]=_w({});Yr(()=>{let d=t.model.state();r(Pd(d)),o(xw(d))}),Yr(()=>{let d=e(),h=Pd(i);t.setIsDirty(h!==d)});let s=(d,h)=>{o("links",d,"href",h)},n=()=>{o("links",i.links.length,{href:""})},a=d=>{o("links",h=>h.filter((f,m)=>m!==d))},l="small",c=d=>{d.preventDefault();let h=ih(d.currentTarget);h.links=i.links.filter(({href:f})=>f.trim().length>0),t.onSubmit(h)};return(()=>{var d=e5(),h=d.firstChild,f=h.firstChild,m=f.nextSibling,g=m.nextSibling,y=g.nextSibling,b=y.nextSibling,_=b.nextSibling,w=_.nextSibling,k=w.nextSibling,v=k.firstChild,S=v.nextSibling,D=k.nextSibling,K=D.firstChild,B=K.firstChild,q=B.nextSibling;return d._$owner=X(),h.addEventListener("submit",c),ve(f,"input",({target:E})=>o("title",E.value)),f.size="small",f.label="Virksomhetens navn",f.name="title",f.required=!0,f._$owner=X(),ve(m,"input",({target:E})=>o("description",E.value)),m.size="small",m.label="Beskrivelse av tjeneste eller produkt",m.name="description",m.required=!0,m._$owner=X(),ve(g,"input",({target:E})=>o("address",E.value)),g.size="small",g.label="Gateadresse",g.name="address",g.required=!0,g._$owner=X(),ve(y,"input",({target:E})=>o("zip",E.value)),y.size="small",y.label="Postnummer",y.name="zip",y.required=!0,y._$owner=X(),ve(b,"input",({target:E})=>o("phone",E.value)),b.size="small",b.label="Telefonnummer",b.name="phone",b.type="tel",b.required=!0,b._$owner=X(),ve(_,"input",({target:E})=>o("email",E.value)),_.size="small",_.label="Epostadresse",_.name="email",_.type="email",_.required=!0,_._$owner=X(),ee(k,Y($i,{get each(){return i.links},children:(E,J)=>(()=>{var Q=t5(),he=Q.firstChild,Te=he.nextSibling;return ve(he,"input",Re=>s(J(),Re.target.value)),he.size="small",he.type="url",he.required=!0,he._$owner=X(),ve(Te,"click",()=>a(J())),Te.name="trash",Te._$owner=X(),ke(Re=>{var ht=Zh.itemRow,pt=`Lenke ${J()+1}`,_t=`links[${J()}].href`,nr=E.href;return ht!==Re.e&&$e(Q,Re.e=ht),pt!==Re.t&&(he.label=Re.t=pt),_t!==Re.a&&(he.name=Re.a=_t),nr!==Re.o&&(he.value=Re.o=nr),Re},{e:void 0,t:void 0,a:void 0,o:void 0}),Q})()}),S),ve(S,"click",n),S.size="small",S.type="button",S.variant="primary",S._$owner=X(),K._$owner=X(),B.size="medium",B.type="submit",B.variant="primary",B._$owner=X(),ve(q,"click",t.onCancel),q.size="medium",q.type="button",q.variant="neutral",q._$owner=X(),ke(E=>{var J=Zh.form,Q=i.title,he=i.description,Te=i.address,Re=i.zip,ht=i.phone,pt=i.email,_t=Ri(Zh.controls,"break-flow");return J!==E.e&&$e(h,E.e=J),Q!==E.t&&(f.value=E.t=Q),he!==E.a&&(m.value=E.a=he),Te!==E.o&&(g.value=E.o=Te),Re!==E.i&&(y.value=E.i=Re),ht!==E.n&&(b.value=E.n=ht),pt!==E.s&&(_.value=E.s=pt),_t!==E.h&&$e(D,E.h=_t),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),d})()};var Sw=G.object({owner:G.string(),title:G.string().default(""),description:G.string().default(""),address:G.string().default(""),zip:G.string().default(""),muncipiality:G.string().default(""),phone:G.string().default(""),email:G.string().default(""),tags:G.array(G.any()).default([]),links:G.array(Zd).default([])}),Ci=class{data;constructor(e){this.data=e}static from(e){let r=Sw.parse(e);return new Ci(r)}};Ci=yr([Cr(Sw)],Ci);var r5=ne("<section><h2>Mine oppf\xF8ringer</h2><div><sl-button><sl-icon slot=prefix></sl-icon>Ny",!0,!1),i5=ne("<sl-button><sl-icon slot=prefix>",!0,!1),o5=ot({listings:t=>({display:"flex",flexWrap:"wrap",gap:t.gapMd,marginBottom:t.gapMd})}),Cw=t=>{let{account:e}=Tr(),[r,i]=Oe(!1),[o,s]=Oe(null),n=xe(()=>e()?.resources.listings()),a=()=>{let c=Ci.from({owner:e()?.resources.user().id});return new ts(c.data)},l=c=>{s(c),i(!1),console.log("setActiveListing",c?.state().title,c)};return Yr(()=>console.log("listing",n())),(()=>{var c=r5(),d=c.firstChild,h=d.nextSibling,f=h.firstChild,m=f.firstChild;return ee(h,Y($i,{get each(){return n()},children:(g,y)=>(()=>{var b=i5(),_=b.firstChild;return ve(b,"click",()=>l(g)),b.name="pencil",b._$owner=X(),_.name="pencil",_._$owner=X(),ee(b,()=>g.state().title,null),ke(()=>b.disabled=r()),b})()}),f),ve(f,"click",()=>l(a())),f.name="pencil",f._$owner=X(),m.name="plus-circle",m._$owner=X(),ee(c,Y(kt,{get when(){return o()},get children(){return Y(kw,{get model(){return o()},setIsDirty:i,onSubmit:g=>console.log(g),onCancel:()=>l(null)})}}),null),ke(g=>{var y=o5.listings,b=r();return y!==g.e&&$e(h,g.e=y),b!==g.t&&(f.disabled=g.t=b),g},{e:void 0,t:void 0}),c})()};var s5=ne("<sl-alert><sl-icon slot=icon></sl-icon><strong>Vi har sendt en verifiserings-e-post til <!>.</strong><br>Verifiser e-postadressen din der og fortsett deretter innlogging under.",!0,!1),n5=ne("<sl-button>Logg inn",!0,!1),a5=ne("<sl-button-group><sl-button>Fortsett innlogging</sl-button><sl-button>Avbryt / Log inn med en annen e-post",!0,!1),l5=ne("<div>"),c5=ne("<section>"),vne=ot({}),Tw=t=>{let{account:e}=Tr(),r=xe(()=>e()?.mustVerifyEmail()),i=xe(()=>e()?.resources.user());return(()=>{var o=c5();return ee(o,Y(kt,{get when(){return!i()},get children(){return[(()=>{var s=s5(),n=s.firstChild,a=n.nextSibling,l=a.firstChild,c=l.nextSibling,d=c.nextSibling;return s.variant="warning",s._$owner=X(),n.name="exclamation-triangle",n._$owner=X(),ee(a,r,c),ke(()=>s.open=!!r()),s})(),(()=>{var s=l5();return ee(s,Y(kt,{get when(){return!r()},get children(){var n=n5();return ve(n,"click",()=>e()?.login()),n._$owner=X(),n}}),null),ee(s,Y(kt,{get when(){return r()},get children(){var n=a5(),a=n.firstChild,l=a.nextSibling;return n.label="Alignment",n._$owner=X(),ve(a,"click",()=>e()?.login()),a.variant="primary",a._$owner=X(),ve(l,"click",()=>e()?.logout()),l._$owner=X(),n}}),null),s})()]}}),null),ee(o,Y(kt,{get when(){return i()},get children(){return Y(Cw,{})}}),null),o})()};var u5=ne("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>"),d5=ne("<style id=styler>"),h5=t=>{let e="pageKey",r=window.localStorage.getItem(e)||"PAGE_LISTINGS",[i,o]=Oe(r),s=n=>{window.localStorage.setItem(e,n),o(n)};return[u5(),(()=>{var n=d5();return ee(n,Sg),n})(),Y(Ir,{get fallback(){return Y(hi,{children:"Gul info laster..."})},get children(){return Y(Zb,{get children(){return Y(by,{get children(){return Y(wy,{get title(){return t.title},get selectedPage(){return i()},toggleMainPages:()=>s(i()==="PAGE_ACCOUNT"?"PAGE_LISTINGS":"PAGE_ACCOUNT"),get children(){return Y(kc,{get children(){return[Y(ga,{get when(){return i()==="PAGE_LISTINGS"},get children(){return Y(Ty,{})}}),Y(ga,{get when(){return i()==="PAGE_ACCOUNT"},get children(){return Y(Tw,{})}})]}})}})}})}})}})]},Ew=h5;ds("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");_p("gul-info",{title:"<title>",namespace:"<namespace>",database:"<database>",datapoint:"<datapoint>"},Ew);})();
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
