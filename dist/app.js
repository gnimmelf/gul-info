"use strict";(()=>{var Q0=Object.create;var Zn=Object.defineProperty;var Ih=Object.getOwnPropertyDescriptor;var ew=Object.getOwnPropertyNames;var tw=Object.getPrototypeOf,rw=Object.prototype.hasOwnProperty;var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),iw=(t,e)=>{for(var r in e)Zn(t,r,{get:e[r],enumerable:!0})},ow=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ew(e))!rw.call(t,o)&&o!==r&&Zn(t,o,{get:()=>e[o],enumerable:!(i=Ih(e,o))||i.enumerable});return t};var oc=(t,e,r)=>(r=t!=null?Q0(tw(t)):{},ow(e||!t||!t.__esModule?Zn(r,"default",{value:t,enumerable:!0}):r,t));var qr=(t,e,r,i)=>{for(var o=i>1?void 0:i?Ih(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&Zn(e,r,o),o};var ip=U((o5,fc)=>{var le=String,rp=function(){return{isColorSupported:!1,reset:le,bold:le,dim:le,italic:le,underline:le,inverse:le,hidden:le,strikethrough:le,black:le,red:le,green:le,yellow:le,blue:le,magenta:le,cyan:le,white:le,gray:le,bgBlack:le,bgRed:le,bgGreen:le,bgYellow:le,bgBlue:le,bgMagenta:le,bgCyan:le,bgWhite:le,blackBright:le,redBright:le,greenBright:le,yellowBright:le,blueBright:le,magentaBright:le,cyanBright:le,whiteBright:le,bgBlackBright:le,bgRedBright:le,bgGreenBright:le,bgYellowBright:le,bgBlueBright:le,bgMagentaBright:le,bgCyanBright:le,bgWhiteBright:le}};fc.exports=rp();fc.exports.createColors=rp});var mc=U(()=>{});var oa=U((a5,np)=>{"use strict";var op=ip(),sp=mc(),gs=class t extends Error{constructor(e,r,i,o,s,n){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),o&&(this.source=o),n&&(this.plugin=n),typeof r<"u"&&typeof i<"u"&&(typeof r=="number"?(this.line=r,this.column=i):(this.line=r.line,this.column=r.column,this.endLine=i.line,this.endColumn=i.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,t)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let r=this.source;e==null&&(e=op.isColorSupported);let i=d=>d,o=d=>d,s=d=>d;if(e){let{bold:d,gray:h,red:f}=op.createColors(!0);o=m=>d(f(m)),i=m=>h(m),sp&&(s=m=>sp(m))}let n=r.split(/\r?\n/),a=Math.max(this.line-3,0),l=Math.min(this.line+2,n.length),u=String(l).length;return n.slice(a,l).map((d,h)=>{let f=a+1+h,m=" "+(" "+f).slice(-u)+" | ";if(f===this.line){if(d.length>160){let v=20,y=Math.max(0,this.column-v),_=Math.max(this.column+v,this.endColumn+v),w=d.slice(y,_),k=i(m.replace(/\d/g," "))+d.slice(0,Math.min(this.column-1,v-1)).replace(/[^\t]/g," ");return o(">")+i(m)+s(w)+`
 `+k+o("^")}let g=i(m.replace(/\d/g," "))+d.slice(0,this.column-1).replace(/[^\t]/g," ");return o(">")+i(m)+s(d)+`
 `+g+o("^")}return" "+i(m)+s(d)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};np.exports=gs;gs.default=gs});var gc=U((l5,lp)=>{"use strict";var ap={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function Rw(t){return t[0].toUpperCase()+t.slice(1)}var bs=class{constructor(e){this.builder=e}atrule(e,r){let i="@"+e.name,o=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?i+=e.raws.afterName:o&&(i+=" "),e.nodes)this.block(e,i+o);else{let s=(e.raws.between||"")+(r?";":"");this.builder(i+o+s,e)}}beforeAfter(e,r){let i;e.type==="decl"?i=this.raw(e,null,"beforeDecl"):e.type==="comment"?i=this.raw(e,null,"beforeComment"):r==="before"?i=this.raw(e,null,"beforeRule"):i=this.raw(e,null,"beforeClose");let o=e.parent,s=0;for(;o&&o.type!=="root";)s+=1,o=o.parent;if(i.includes(`
`)){let n=this.raw(e,null,"indent");if(n.length)for(let a=0;a<s;a++)i+=n}return i}block(e,r){let i=this.raw(e,"between","beforeOpen");this.builder(r+i+"{",e,"start");let o;e.nodes&&e.nodes.length?(this.body(e),o=this.raw(e,"after")):o=this.raw(e,"after","emptyBody"),o&&this.builder(o),this.builder("}",e,"end")}body(e){let r=e.nodes.length-1;for(;r>0&&e.nodes[r].type==="comment";)r-=1;let i=this.raw(e,"semicolon");for(let o=0;o<e.nodes.length;o++){let s=e.nodes[o],n=this.raw(s,"before");n&&this.builder(n),this.stringify(s,r!==o||i)}}comment(e){let r=this.raw(e,"left","commentLeft"),i=this.raw(e,"right","commentRight");this.builder("/*"+r+e.text+i+"*/",e)}decl(e,r){let i=this.raw(e,"between","colon"),o=e.prop+i+this.rawValue(e,"value");e.important&&(o+=e.raws.important||" !important"),r&&(o+=";"),this.builder(o,e)}document(e){this.body(e)}raw(e,r,i){let o;if(i||(i=r),r&&(o=e.raws[r],typeof o<"u"))return o;let s=e.parent;if(i==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return ap[i];let n=e.root();if(n.rawCache||(n.rawCache={}),typeof n.rawCache[i]<"u")return n.rawCache[i];if(i==="before"||i==="after")return this.beforeAfter(e,i);{let a="raw"+Rw(i);this[a]?o=this[a](n,e):n.walk(l=>{if(o=l.raws[r],typeof o<"u")return!1})}return typeof o>"u"&&(o=ap[i]),n.rawCache[i]=o,o}rawBeforeClose(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length>0&&typeof i.raws.after<"u")return r=i.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(e,r){let i;return e.walkComments(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeDecl"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeDecl(e,r){let i;return e.walkDecls(o=>{if(typeof o.raws.before<"u")return i=o.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeRule"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeOpen(e){let r;return e.walk(i=>{if(i.type!=="decl"&&(r=i.raws.between,typeof r<"u"))return!1}),r}rawBeforeRule(e){let r;return e.walk(i=>{if(i.nodes&&(i.parent!==e||e.first!==i)&&typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(e){let r;return e.walkDecls(i=>{if(typeof i.raws.between<"u")return r=i.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length===0&&(r=i.raws.after,typeof r<"u"))return!1}),r}rawIndent(e){if(e.raws.indent)return e.raws.indent;let r;return e.walk(i=>{let o=i.parent;if(o&&o!==e&&o.parent&&o.parent===e&&typeof i.raws.before<"u"){let s=i.raws.before.split(`
`);return r=s[s.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length&&i.last.type==="decl"&&(r=i.raws.semicolon,typeof r<"u"))return!1}),r}rawValue(e,r){let i=e[r],o=e.raws[r];return o&&o.value===i?o.raw:i}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,r){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,r)}};lp.exports=bs;bs.default=bs});var ys=U((c5,cp)=>{"use strict";var Dw=gc();function bc(t,e){new Dw(e).stringify(t)}cp.exports=bc;bc.default=bc});var sa=U((u5,yc)=>{"use strict";yc.exports.isClean=Symbol("isClean");yc.exports.my=Symbol("my")});var xs=U((d5,up)=>{"use strict";var Mw=oa(),Nw=gc(),Fw=ys(),{isClean:vs,my:Uw}=sa();function vc(t,e){let r=new t.constructor;for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i)||i==="proxyCache")continue;let o=t[i],s=typeof o;i==="parent"&&s==="object"?e&&(r[i]=e):i==="source"?r[i]=o:Array.isArray(o)?r[i]=o.map(n=>vc(n,r)):(s==="object"&&o!==null&&(o=vc(o)),r[i]=o)}return r}function ws(t,e){if(e&&typeof e.offset<"u")return e.offset;let r=1,i=1,o=0;for(let s=0;s<t.length;s++){if(i===e.line&&r===e.column){o=s;break}t[s]===`
`?(r=1,i+=1):r+=1}return o}var _s=class{constructor(e={}){this.raws={},this[vs]=!1,this[Uw]=!0;for(let r in e)if(r==="nodes"){this.nodes=[];for(let i of e[r])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[r]=e[r]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let r=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${r.input.from}:${r.start.line}:${r.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let r in e)this[r]=e[r];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let r=vc(this);for(let i in e)r[i]=e[i];return r}cloneAfter(e={}){let r=this.clone(e);return this.parent.insertAfter(this,r),r}cloneBefore(e={}){let r=this.clone(e);return this.parent.insertBefore(this,r),r}error(e,r={}){if(this.source){let{end:i,start:o}=this.rangeBy(r);return this.source.input.error(e,{column:o.column,line:o.line},{column:i.column,line:i.line},r)}return new Mw(e)}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:r==="root"?()=>e.root().toProxy():e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="prop"||r==="value"||r==="name"||r==="params"||r==="important"||r==="text")&&e.markDirty()),!0}}}markClean(){this[vs]=!0}markDirty(){if(this[vs]){this[vs]=!1;let e=this;for(;e=e.parent;)e[vs]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let r=this.source.start;if(e.index)r=this.positionInside(e.index);else if(e.word){let o=this.source.input.css.slice(ws(this.source.input.css,this.source.start),ws(this.source.input.css,this.source.end)).indexOf(e.word);o!==-1&&(r=this.positionInside(o))}return r}positionInside(e){let r=this.source.start.column,i=this.source.start.line,o=ws(this.source.input.css,this.source.start),s=o+e;for(let n=o;n<s;n++)this.source.input.css[n]===`
`?(r=1,i+=1):r+=1;return{column:r,line:i}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let r={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:r.column+1,line:r.line};if(e.word){let s=this.source.input.css.slice(ws(this.source.input.css,this.source.start),ws(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(r=this.positionInside(s),i=this.positionInside(s+e.word.length))}else e.start?r={column:e.start.column,line:e.start.line}:e.index&&(r=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<r.line||i.line===r.line&&i.column<=r.column)&&(i={column:r.column+1,line:r.line}),{end:i,start:r}}raw(e,r){return new Nw().raw(this,e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let r=this,i=!1;for(let o of e)o===this?i=!0:i?(this.parent.insertAfter(r,o),r=o):this.parent.insertBefore(r,o);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,r){let i={},o=r==null;r=r||new Map;let s=0;for(let n in this){if(!Object.prototype.hasOwnProperty.call(this,n)||n==="parent"||n==="proxyCache")continue;let a=this[n];if(Array.isArray(a))i[n]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,r):l);else if(typeof a=="object"&&a.toJSON)i[n]=a.toJSON(null,r);else if(n==="source"){let l=r.get(a.input);l==null&&(l=s,r.set(a.input,s),s++),i[n]={end:a.end,inputId:l,start:a.start}}else i[n]=a}return o&&(i.inputs=[...r.keys()].map(n=>n.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=Fw){e.stringify&&(e=e.stringify);let r="";return e(this,i=>{r+=i}),r}warn(e,r,i){let o={node:this};for(let s in i)o[s]=i[s];return e.warn(r,o)}get proxyOf(){return this}};up.exports=_s;_s.default=_s});var Ss=U((h5,dp)=>{"use strict";var Bw=xs(),ks=class extends Bw{constructor(e){super(e),this.type="comment"}};dp.exports=ks;ks.default=ks});var Ts=U((p5,hp)=>{"use strict";var Vw=xs(),Cs=class extends Vw{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};hp.exports=Cs;Cs.default=Cs});var Hr=U((f5,_p)=>{"use strict";var pp=Ss(),fp=Ts(),qw=xs(),{isClean:mp,my:gp}=sa(),wc,bp,yp,_c;function vp(t){return t.map(e=>(e.nodes&&(e.nodes=vp(e.nodes)),delete e.source,e))}function wp(t){if(t[mp]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)wp(e)}var rr=class t extends qw{append(...e){for(let r of e){let i=this.normalize(r,this.last);for(let o of i)this.proxyOf.nodes.push(o)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let r of this.nodes)r.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let r=this.getIterator(),i,o;for(;this.indexes[r]<this.proxyOf.nodes.length&&(i=this.indexes[r],o=e(this.proxyOf.nodes[i],i),o!==!1);)this.indexes[r]+=1;return delete this.indexes[r],o}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:e[r]?r==="each"||typeof r=="string"&&r.startsWith("walk")?(...i)=>e[r](...i.map(o=>typeof o=="function"?(s,n)=>o(s.toProxy(),n):o)):r==="every"||r==="some"?i=>e[r]((o,...s)=>i(o.toProxy(),...s)):r==="root"?()=>e.root().toProxy():r==="nodes"?e.nodes.map(i=>i.toProxy()):r==="first"||r==="last"?e[r].toProxy():e[r]:e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="name"||r==="params"||r==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,r){let i=this.index(e),o=this.normalize(r,this.proxyOf.nodes[i]).reverse();i=this.index(e);for(let n of o)this.proxyOf.nodes.splice(i+1,0,n);let s;for(let n in this.indexes)s=this.indexes[n],i<s&&(this.indexes[n]=s+o.length);return this.markDirty(),this}insertBefore(e,r){let i=this.index(e),o=i===0?"prepend":!1,s=this.normalize(r,this.proxyOf.nodes[i],o).reverse();i=this.index(e);for(let a of s)this.proxyOf.nodes.splice(i,0,a);let n;for(let a in this.indexes)n=this.indexes[a],i<=n&&(this.indexes[a]=n+s.length);return this.markDirty(),this}normalize(e,r){if(typeof e=="string")e=vp(bp(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let o of e)o.parent&&o.parent.removeChild(o,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new fp(e)]}else if(e.selector||e.selectors)e=[new _c(e)];else if(e.name)e=[new wc(e)];else if(e.text)e=[new pp(e)];else throw new Error("Unknown node type in node creation");return e.map(o=>(o[gp]||t.rebuild(o),o=o.proxyOf,o.parent&&o.parent.removeChild(o),o[mp]&&wp(o),o.raws||(o.raws={}),typeof o.raws.before>"u"&&r&&typeof r.raws.before<"u"&&(o.raws.before=r.raws.before.replace(/\S/g,"")),o.parent=this.proxyOf,o))}prepend(...e){e=e.reverse();for(let r of e){let i=this.normalize(r,this.first,"prepend").reverse();for(let o of i)this.proxyOf.nodes.unshift(o);for(let o in this.indexes)this.indexes[o]=this.indexes[o]+i.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let r;for(let i in this.indexes)r=this.indexes[i],r>=e&&(this.indexes[i]=r-1);return this.markDirty(),this}replaceValues(e,r,i){return i||(i=r,r={}),this.walkDecls(o=>{r.props&&!r.props.includes(o.prop)||r.fast&&!o.value.includes(r.fast)||(o.value=o.value.replace(e,i))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((r,i)=>{let o;try{o=e(r,i)}catch(s){throw r.addToError(s)}return o!==!1&&r.walk&&(o=r.walk(e)),o})}walkAtRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="atrule"&&e.test(i.name))return r(i,o)}):this.walk((i,o)=>{if(i.type==="atrule"&&i.name===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="atrule")return r(i,o)}))}walkComments(e){return this.walk((r,i)=>{if(r.type==="comment")return e(r,i)})}walkDecls(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="decl"&&e.test(i.prop))return r(i,o)}):this.walk((i,o)=>{if(i.type==="decl"&&i.prop===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="decl")return r(i,o)}))}walkRules(e,r){return r?e instanceof RegExp?this.walk((i,o)=>{if(i.type==="rule"&&e.test(i.selector))return r(i,o)}):this.walk((i,o)=>{if(i.type==="rule"&&i.selector===e)return r(i,o)}):(r=e,this.walk((i,o)=>{if(i.type==="rule")return r(i,o)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};rr.registerParse=t=>{bp=t};rr.registerRule=t=>{_c=t};rr.registerAtRule=t=>{wc=t};rr.registerRoot=t=>{yp=t};_p.exports=rr;rr.default=rr;rr.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,wc.prototype):t.type==="rule"?Object.setPrototypeOf(t,_c.prototype):t.type==="decl"?Object.setPrototypeOf(t,fp.prototype):t.type==="comment"?Object.setPrototypeOf(t,pp.prototype):t.type==="root"&&Object.setPrototypeOf(t,yp.prototype),t[gp]=!0,t.nodes&&t.nodes.forEach(e=>{rr.rebuild(e)})}});var na=U((m5,kp)=>{"use strict";var xp=Hr(),_o=class extends xp{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};kp.exports=_o;_o.default=_o;xp.registerAtRule(_o)});var aa=U((g5,Tp)=>{"use strict";var jw=Hr(),Sp,Cp,Si=class extends jw{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new Sp(new Cp,this,e).stringify()}};Si.registerLazyResult=t=>{Sp=t};Si.registerProcessor=t=>{Cp=t};Tp.exports=Si;Si.default=Si});var Ap=U((b5,Ep)=>{var Hw="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Ww=(t,e=21)=>(r=e)=>{let i="",o=r|0;for(;o--;)i+=t[Math.random()*t.length|0];return i},Gw=(t=21)=>{let e="",r=t|0;for(;r--;)e+=Hw[Math.random()*64|0];return e};Ep.exports={nanoid:Gw,customAlphabet:Ww}});var la=U(()=>{});var ca=U(()=>{});var xc=U(()=>{});var Op=U(()=>{});var Sc=U((T5,Pp)=>{"use strict";var{existsSync:Kw,readFileSync:Yw}=Op(),{dirname:kc,join:Zw}=la(),{SourceMapConsumer:$p,SourceMapGenerator:Ip}=ca();function Xw(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}var Es=class{constructor(e,r){if(r.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let i=r.map?r.map.prev:void 0,o=this.loadMap(r.from,i);!this.mapFile&&r.from&&(this.mapFile=r.from),this.mapFile&&(this.root=kc(this.mapFile)),o&&(this.text=o)}consumer(){return this.consumerCache||(this.consumerCache=new $p(this.text)),this.consumerCache}decodeInline(e){let r=/^data:application\/json;charset=utf-?8;base64,/,i=/^data:application\/json;base64,/,o=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/,n=e.match(o)||e.match(s);if(n)return decodeURIComponent(e.substr(n[0].length));let a=e.match(r)||e.match(i);if(a)return Xw(e.substr(a[0].length));let l=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+l)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let r=e.match(/\/\*\s*# sourceMappingURL=/g);if(!r)return;let i=e.lastIndexOf(r.pop()),o=e.indexOf("*/",i);i>-1&&o>-1&&(this.annotation=this.getAnnotationURL(e.substring(i,o)))}loadFile(e){if(this.root=kc(e),Kw(e))return this.mapFile=e,Yw(e,"utf-8").toString().trim()}loadMap(e,r){if(r===!1)return!1;if(r){if(typeof r=="string")return r;if(typeof r=="function"){let i=r(e);if(i){let o=this.loadFile(i);if(!o)throw new Error("Unable to load previous source map: "+i.toString());return o}}else{if(r instanceof $p)return Ip.fromSourceMap(r).toString();if(r instanceof Ip)return r.toString();if(this.isMap(r))return JSON.stringify(r);throw new Error("Unsupported previous source map format: "+r.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let i=this.annotation;return e&&(i=Zw(kc(e),i)),this.loadFile(i)}}}startWith(e,r){return e?e.substr(0,r.length)===r:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};Pp.exports=Es;Es.default=Es});var As=U((E5,Dp)=>{"use strict";var{nanoid:Jw}=Ap(),{isAbsolute:Ec,resolve:Ac}=la(),{SourceMapConsumer:Qw,SourceMapGenerator:e_}=ca(),{fileURLToPath:Lp,pathToFileURL:ua}=xc(),zp=oa(),t_=Sc(),Cc=mc(),Tc=Symbol("fromOffsetCache"),r_=!!(Qw&&e_),Rp=!!(Ac&&Ec),xo=class{constructor(e,r={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,r.from&&(!Rp||/^\w+:\/\//.test(r.from)||Ec(r.from)?this.file=r.from:this.file=Ac(r.from)),Rp&&r_){let i=new t_(this.css,r);if(i.text){this.map=i;let o=i.consumer().file;!this.file&&o&&(this.file=this.mapResolve(o))}}this.file||(this.id="<input css "+Jw(6)+">"),this.map&&(this.map.file=this.from)}error(e,r,i,o={}){let s,n,a;if(r&&typeof r=="object"){let u=r,d=i;if(typeof u.offset=="number"){let h=this.fromOffset(u.offset);r=h.line,i=h.col}else r=u.line,i=u.column;if(typeof d.offset=="number"){let h=this.fromOffset(d.offset);n=h.line,s=h.col}else n=d.line,s=d.column}else if(!i){let u=this.fromOffset(r);r=u.line,i=u.col}let l=this.origin(r,i,n,s);return l?a=new zp(e,l.endLine===void 0?l.line:{column:l.column,line:l.line},l.endLine===void 0?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,o.plugin):a=new zp(e,n===void 0?r:{column:i,line:r},n===void 0?i:{column:s,line:n},this.css,this.file,o.plugin),a.input={column:i,endColumn:s,endLine:n,line:r,source:this.css},this.file&&(ua&&(a.input.url=ua(this.file).toString()),a.input.file=this.file),a}fromOffset(e){let r,i;if(this[Tc])i=this[Tc];else{let s=this.css.split(`
`);i=new Array(s.length);let n=0;for(let a=0,l=s.length;a<l;a++)i[a]=n,n+=s[a].length+1;this[Tc]=i}r=i[i.length-1];let o=0;if(e>=r)o=i.length-1;else{let s=i.length-2,n;for(;o<s;)if(n=o+(s-o>>1),e<i[n])s=n-1;else if(e>=i[n+1])o=n+1;else{o=n;break}}return{col:e-i[o]+1,line:o+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Ac(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,r,i,o){if(!this.map)return!1;let s=this.map.consumer(),n=s.originalPositionFor({column:r,line:e});if(!n.source)return!1;let a;typeof i=="number"&&(a=s.originalPositionFor({column:o,line:i}));let l;Ec(n.source)?l=ua(n.source):l=new URL(n.source,this.map.consumer().sourceRoot||ua(this.map.mapFile));let u={column:n.column,endColumn:a&&a.column,endLine:a&&a.line,line:n.line,url:l.toString()};if(l.protocol==="file:")if(Lp)u.file=Lp(l);else throw new Error("file: protocol is not available in this PostCSS build");let d=s.sourceContentFor(n.source);return d&&(u.source=d),u}toJSON(){let e={};for(let r of["hasBOM","css","file","id"])this[r]!=null&&(e[r]=this[r]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};Dp.exports=xo;xo.default=xo;Cc&&Cc.registerInput&&Cc.registerInput(xo)});var ko=U((A5,Up)=>{"use strict";var Mp=Hr(),Np,Fp,Wr=class extends Mp{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,r,i){let o=super.normalize(e);if(r){if(i==="prepend")this.nodes.length>1?r.raws.before=this.nodes[1].raws.before:delete r.raws.before;else if(this.first!==r)for(let s of o)s.raws.before=r.raws.before}return o}removeChild(e,r){let i=this.index(e);return!r&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(e)}toResult(e={}){return new Np(new Fp,this,e).stringify()}};Wr.registerLazyResult=t=>{Np=t};Wr.registerProcessor=t=>{Fp=t};Up.exports=Wr;Wr.default=Wr;Mp.registerRoot(Wr)});var Oc=U((O5,Bp)=>{"use strict";var Os={comma(t){return Os.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Os.split(t,e)},split(t,e,r){let i=[],o="",s=!1,n=0,a=!1,l="",u=!1;for(let d of t)u?u=!1:d==="\\"?u=!0:a?d===l&&(a=!1):d==='"'||d==="'"?(a=!0,l=d):d==="("?n+=1:d===")"?n>0&&(n-=1):n===0&&e.includes(d)&&(s=!0),s?(o!==""&&i.push(o.trim()),o="",s=!1):o+=d;return(r||o!=="")&&i.push(o.trim()),i}};Bp.exports=Os;Os.default=Os});var da=U(($5,qp)=>{"use strict";var Vp=Hr(),i_=Oc(),So=class extends Vp{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return i_.comma(this.selector)}set selectors(e){let r=this.selector?this.selector.match(/,\s*/):null,i=r?r[0]:","+this.raw("between","beforeOpen");this.selector=e.join(i)}};qp.exports=So;So.default=So;Vp.registerRule(So)});var Hp=U((I5,jp)=>{"use strict";var o_=na(),s_=Ss(),n_=Ts(),a_=As(),l_=Sc(),c_=ko(),u_=da();function $s(t,e){if(Array.isArray(t))return t.map(o=>$s(o));let{inputs:r,...i}=t;if(r){e=[];for(let o of r){let s={...o,__proto__:a_.prototype};s.map&&(s.map={...s.map,__proto__:l_.prototype}),e.push(s)}}if(i.nodes&&(i.nodes=t.nodes.map(o=>$s(o,e))),i.source){let{inputId:o,...s}=i.source;i.source=s,o!=null&&(i.source.input=e[o])}if(i.type==="root")return new c_(i);if(i.type==="decl")return new n_(i);if(i.type==="rule")return new u_(i);if(i.type==="comment")return new s_(i);if(i.type==="atrule")return new o_(i);throw new Error("Unknown node type: "+t.type)}jp.exports=$s;$s.default=$s});var Ic=U((P5,Xp)=>{"use strict";var{dirname:ha,relative:Gp,resolve:Kp,sep:Yp}=la(),{SourceMapConsumer:Zp,SourceMapGenerator:pa}=ca(),{pathToFileURL:Wp}=xc(),d_=As(),h_=!!(Zp&&pa),p_=!!(ha&&Kp&&Gp&&Yp),$c=class{constructor(e,r,i,o){this.stringify=e,this.mapOpts=i.map||{},this.root=r,this.opts=i,this.css=o,this.originalCSS=o,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let r=`
`;this.css.includes(`\r
`)&&(r=`\r
`),this.css+=r+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let r=this.toUrl(this.path(e.file)),i=e.root||ha(e.file),o;this.mapOpts.sourcesContent===!1?(o=new Zp(e.text),o.sourcesContent&&(o.sourcesContent=null)):o=e.consumer(),this.map.applySourceMap(o,r,this.toUrl(this.path(i)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let r=this.root.nodes.length-1;r>=0;r--)e=this.root.nodes[r],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(r)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),p_&&h_&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,r=>{e+=r}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=pa.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new pa({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new pa({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,r=1,i="<no source>",o={generated:{column:0,line:0},original:{column:0,line:0},source:""},s,n;this.stringify(this.root,(a,l,u)=>{if(this.css+=a,l&&u!=="end"&&(o.generated.line=e,o.generated.column=r-1,l.source&&l.source.start?(o.source=this.sourcePath(l),o.original.line=l.source.start.line,o.original.column=l.source.start.column-1,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,this.map.addMapping(o))),n=a.match(/\n/g),n?(e+=n.length,s=a.lastIndexOf(`
`),r=a.length-s):r+=a.length,l&&u!=="start"){let d=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==d.last||d.raws.semicolon)&&(l.source&&l.source.end?(o.source=this.sourcePath(l),o.original.line=l.source.end.line,o.original.column=l.source.end.column-1,o.generated.line=e,o.generated.column=r-2,this.map.addMapping(o)):(o.source=i,o.original.line=1,o.original.column=0,o.generated.line=e,o.generated.column=r-1,this.map.addMapping(o)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(r=>r.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let r=this.memoizedPaths.get(e);if(r)return r;let i=this.opts.to?ha(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(i=ha(Kp(i,this.mapOpts.annotation)));let o=Gp(i,e);return this.memoizedPaths.set(e,o),o}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let r=e.source.input.map;this.previousMaps.includes(r)||this.previousMaps.push(r)}});else{let e=new d_(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(r=>{if(r.source){let i=r.source.input.from;if(i&&!e[i]){e[i]=!0;let o=this.usesFileUrls?this.toFileUrl(i):this.toUrl(this.path(i));this.map.setSourceContent(o,r.source.input.css)}}});else if(this.css){let r=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(r,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let r=this.memoizedFileURLs.get(e);if(r)return r;if(Wp){let i=Wp(e).toString();return this.memoizedFileURLs.set(e,i),i}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let r=this.memoizedURLs.get(e);if(r)return r;Yp==="\\"&&(e=e.replace(/\\/g,"/"));let i=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,i),i}};Xp.exports=$c});var ef=U((L5,Qp)=>{"use strict";var fa=/[\t\n\f\r "#'()/;[\\\]{}]/g,ma=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,f_=/.[\r\n"'(/\\]/,Jp=/[\da-f]/i;Qp.exports=function(e,r={}){let i=e.css.valueOf(),o=r.ignoreErrors,s,n,a,l,u,d,h,f,m,g,v=i.length,y=0,_=[],w=[];function k(){return y}function b(B){throw e.error("Unclosed "+B,y)}function S(){return w.length===0&&y>=v}function z(B){if(w.length)return w.pop();if(y>=v)return;let j=B?B.ignoreUnclosed:!1;switch(s=i.charCodeAt(y),s){case 10:case 32:case 9:case 13:case 12:{l=y;do l+=1,s=i.charCodeAt(l);while(s===32||s===10||s===9||s===13||s===12);d=["space",i.slice(y,l)],y=l-1;break}case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let R=String.fromCharCode(s);d=[R,R,y];break}case 40:{if(g=_.length?_.pop()[1]:"",m=i.charCodeAt(y+1),g==="url"&&m!==39&&m!==34&&m!==32&&m!==10&&m!==9&&m!==12&&m!==13){l=y;do{if(h=!1,l=i.indexOf(")",l+1),l===-1)if(o||j){l=y;break}else b("bracket");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["brackets",i.slice(y,l+1),y,l],y=l}else l=i.indexOf(")",y+1),n=i.slice(y,l+1),l===-1||f_.test(n)?d=["(","(",y]:(d=["brackets",n,y,l],y=l);break}case 39:case 34:{u=s===39?"'":'"',l=y;do{if(h=!1,l=i.indexOf(u,l+1),l===-1)if(o||j){l=y+1;break}else b("string");for(f=l;i.charCodeAt(f-1)===92;)f-=1,h=!h}while(h);d=["string",i.slice(y,l+1),y,l],y=l;break}case 64:{fa.lastIndex=y+1,fa.test(i),fa.lastIndex===0?l=i.length-1:l=fa.lastIndex-2,d=["at-word",i.slice(y,l+1),y,l],y=l;break}case 92:{for(l=y,a=!0;i.charCodeAt(l+1)===92;)l+=1,a=!a;if(s=i.charCodeAt(l+1),a&&s!==47&&s!==32&&s!==10&&s!==9&&s!==13&&s!==12&&(l+=1,Jp.test(i.charAt(l)))){for(;Jp.test(i.charAt(l+1));)l+=1;i.charCodeAt(l+1)===32&&(l+=1)}d=["word",i.slice(y,l+1),y,l],y=l;break}default:{s===47&&i.charCodeAt(y+1)===42?(l=i.indexOf("*/",y+2)+1,l===0&&(o||j?l=i.length:b("comment")),d=["comment",i.slice(y,l+1),y,l],y=l):(ma.lastIndex=y+1,ma.test(i),ma.lastIndex===0?l=i.length-1:l=ma.lastIndex-2,d=["word",i.slice(y,l+1),y,l],_.push(d),y=l);break}}return y++,d}function H(B){w.push(B)}return{back:H,endOfFile:S,nextToken:z,position:k}}});var sf=U((z5,of)=>{"use strict";var m_=na(),g_=Ss(),b_=Ts(),y_=ko(),tf=da(),v_=ef(),rf={empty:!0,space:!0};function w_(t){for(let e=t.length-1;e>=0;e--){let r=t[e],i=r[3]||r[2];if(i)return i}}var Pc=class{constructor(e){this.input=e,this.root=new y_,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let r=new m_;r.name=e[1].slice(1),r.name===""&&this.unnamedAtrule(r,e),this.init(r,e[2]);let i,o,s,n=!1,a=!1,l=[],u=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),i=e[0],i==="("||i==="["?u.push(i==="("?")":"]"):i==="{"&&u.length>0?u.push("}"):i===u[u.length-1]&&u.pop(),u.length===0)if(i===";"){r.source.end=this.getPosition(e[2]),r.source.end.offset++,this.semicolon=!0;break}else if(i==="{"){a=!0;break}else if(i==="}"){if(l.length>0){for(s=l.length-1,o=l[s];o&&o[0]==="space";)o=l[--s];o&&(r.source.end=this.getPosition(o[3]||o[2]),r.source.end.offset++)}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){n=!0;break}}r.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(r.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(r,"params",l),n&&(e=l[l.length-1],r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++,this.spaces=r.raws.between,r.raws.between="")):(r.raws.afterName="",r.params=""),a&&(r.nodes=[],this.current=r)}checkMissedSemicolon(e){let r=this.colon(e);if(r===!1)return;let i=0,o;for(let s=r-1;s>=0&&(o=e[s],!(o[0]!=="space"&&(i+=1,i===2)));s--);throw this.input.error("Missed semicolon",o[0]==="word"?o[3]+1:o[2])}colon(e){let r=0,i,o,s;for(let[n,a]of e.entries()){if(o=a,s=o[0],s==="("&&(r+=1),s===")"&&(r-=1),r===0&&s===":")if(!i)this.doubleColon(o);else{if(i[0]==="word"&&i[1]==="progid")continue;return n}i=o}return!1}comment(e){let r=new g_;this.init(r,e[2]),r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++;let i=e[1].slice(2,-2);if(/^\s*$/.test(i))r.text="",r.raws.left=i,r.raws.right="";else{let o=i.match(/^(\s*)([^]*\S)(\s*)$/);r.text=o[2],r.raws.left=o[1],r.raws.right=o[3]}}createTokenizer(){this.tokenizer=v_(this.input)}decl(e,r){let i=new b_;this.init(i,e[0][2]);let o=e[e.length-1];for(o[0]===";"&&(this.semicolon=!0,e.pop()),i.source.end=this.getPosition(o[3]||o[2]||w_(e)),i.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),i.raws.before+=e.shift()[1];for(i.source.start=this.getPosition(e[0][2]),i.prop="";e.length;){let u=e[0][0];if(u===":"||u==="space"||u==="comment")break;i.prop+=e.shift()[1]}i.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){i.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),i.raws.between+=s[1];(i.prop[0]==="_"||i.prop[0]==="*")&&(i.raws.before+=i.prop[0],i.prop=i.prop.slice(1));let n=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)n.push(e.shift());this.precheckMissedSemicolon(e);for(let u=e.length-1;u>=0;u--){if(s=e[u],s[1].toLowerCase()==="!important"){i.important=!0;let d=this.stringFrom(e,u);d=this.spacesFromEnd(e)+d,d!==" !important"&&(i.raws.important=d);break}else if(s[1].toLowerCase()==="important"){let d=e.slice(0),h="";for(let f=u;f>0;f--){let m=d[f][0];if(h.trim().startsWith("!")&&m!=="space")break;h=d.pop()[1]+h}h.trim().startsWith("!")&&(i.important=!0,i.raws.important=h,e=d)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(u=>u[0]!=="space"&&u[0]!=="comment")&&(i.raws.between+=n.map(u=>u[1]).join(""),n=[]),this.raw(i,"value",n.concat(e),r),i.value.includes(":")&&!r&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let r=new tf;this.init(r,e[2]),r.selector="",r.raws.between="",this.current=r}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let r=this.current.nodes[this.current.nodes.length-1];r&&r.type==="rule"&&!r.raws.ownSemicolon&&(r.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let r=this.input.fromOffset(e);return{column:r.col,line:r.line,offset:e}}init(e,r){this.current.push(e),e.source={input:this.input,start:this.getPosition(r)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let r=!1,i=null,o=!1,s=null,n=[],a=e[1].startsWith("--"),l=[],u=e;for(;u;){if(i=u[0],l.push(u),i==="("||i==="[")s||(s=u),n.push(i==="("?")":"]");else if(a&&o&&i==="{")s||(s=u),n.push("}");else if(n.length===0)if(i===";")if(o){this.decl(l,a);return}else break;else if(i==="{"){this.rule(l);return}else if(i==="}"){this.tokenizer.back(l.pop()),r=!0;break}else i===":"&&(o=!0);else i===n[n.length-1]&&(n.pop(),n.length===0&&(s=null));u=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(r=!0),n.length>0&&this.unclosedBracket(s),r&&o){if(!a)for(;l.length&&(u=l[l.length-1][0],!(u!=="space"&&u!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,r,i,o){let s,n,a=i.length,l="",u=!0,d,h;for(let f=0;f<a;f+=1)s=i[f],n=s[0],n==="space"&&f===a-1&&!o?u=!1:n==="comment"?(h=i[f-1]?i[f-1][0]:"empty",d=i[f+1]?i[f+1][0]:"empty",!rf[h]&&!rf[d]?l.slice(-1)===","?u=!1:l+=s[1]:u=!1):l+=s[1];if(!u){let f=i.reduce((m,g)=>m+g[1],"");e.raws[r]={raw:f,value:l}}e[r]=l}rule(e){e.pop();let r=new tf;this.init(r,e[0][2]),r.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(r,"selector",e),this.current=r}spacesAndCommentsFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],!(r!=="space"&&r!=="comment"));)i=e.pop()[1]+i;return i}spacesAndCommentsFromStart(e){let r,i="";for(;e.length&&(r=e[0][0],!(r!=="space"&&r!=="comment"));)i+=e.shift()[1];return i}spacesFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],r==="space");)i=e.pop()[1]+i;return i}stringFrom(e,r){let i="";for(let o=r;o<e.length;o++)i+=e[o][1];return e.splice(r,e.length-r),i}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,r){throw this.input.error("At-rule without name",{offset:r[2]},{offset:r[2]+r[1].length})}};of.exports=Pc});var ba=U((R5,nf)=>{"use strict";var __=Hr(),x_=As(),k_=sf();function ga(t,e){let r=new x_(t,e),i=new k_(r);try{i.parse()}catch(o){throw o}return i.root}nf.exports=ga;ga.default=ga;__.registerParse(ga)});var Lc=U((D5,af)=>{"use strict";var Is=class{constructor(e,r={}){if(this.type="warning",this.text=e,r.node&&r.node.source){let i=r.node.rangeBy(r);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in r)this[i]=r[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};af.exports=Is;Is.default=Is});var ya=U((M5,lf)=>{"use strict";var S_=Lc(),Ps=class{constructor(e,r,i){this.processor=e,this.messages=[],this.root=r,this.opts=i,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,r={}){r.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(r.plugin=this.lastPlugin.postcssPlugin);let i=new S_(e,r);return this.messages.push(i),i}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};lf.exports=Ps;Ps.default=Ps});var zc=U((N5,uf)=>{"use strict";var cf={};uf.exports=function(e){cf[e]||(cf[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}});var Mc=U((U5,ff)=>{"use strict";var C_=Hr(),T_=aa(),E_=Ic(),A_=ba(),df=ya(),O_=ko(),$_=ys(),{isClean:mr,my:I_}=sa(),F5=zc(),P_={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},L_={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},z_={Once:!0,postcssPlugin:!0,prepare:!0},Co=0;function Ls(t){return typeof t=="object"&&typeof t.then=="function"}function pf(t){let e=!1,r=P_[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[r,r+"-"+e,Co,r+"Exit",r+"Exit-"+e]:e?[r,r+"-"+e,r+"Exit",r+"Exit-"+e]:t.append?[r,Co,r+"Exit"]:[r,r+"Exit"]}function hf(t){let e;return t.type==="document"?e=["Document",Co,"DocumentExit"]:t.type==="root"?e=["Root",Co,"RootExit"]:e=pf(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Rc(t){return t[mr]=!1,t.nodes&&t.nodes.forEach(e=>Rc(e)),t}var Dc={},Gr=class t{constructor(e,r,i){this.stringified=!1,this.processed=!1;let o;if(typeof r=="object"&&r!==null&&(r.type==="root"||r.type==="document"))o=Rc(r);else if(r instanceof t||r instanceof df)o=Rc(r.root),r.map&&(typeof i.map>"u"&&(i.map={}),i.map.inline||(i.map.inline=!1),i.map.prev=r.map);else{let s=A_;i.syntax&&(s=i.syntax.parse),i.parser&&(s=i.parser),s.parse&&(s=s.parse);try{o=s(r,i)}catch(n){this.processed=!0,this.error=n}o&&!o[I_]&&C_.rebuild(o)}this.result=new df(e,o,i),this.helpers={...Dc,postcss:Dc,result:this.result},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,r){let i=this.result.lastPlugin;try{r&&r.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=i.postcssPlugin,e.setMessage()):i.postcssVersion}catch(o){console&&console.error&&console.error(o)}return e}prepareVisitors(){this.listeners={};let e=(r,i,o)=>{this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push([r,o])};for(let r of this.plugins)if(typeof r=="object")for(let i in r){if(!L_[i]&&/^[A-Z]/.test(i))throw new Error(`Unknown event ${i} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!z_[i])if(typeof r[i]=="object")for(let o in r[i])o==="*"?e(r,i,r[i][o]):e(r,i+"-"+o.toLowerCase(),r[i][o]);else typeof r[i]=="function"&&e(r,i,r[i])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let r=this.plugins[e],i=this.runOnRoot(r);if(Ls(i))try{await i}catch(o){throw this.handleError(o)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[mr];){e[mr]=!0;let r=[hf(e)];for(;r.length>0;){let i=this.visitTick(r);if(Ls(i))try{await i}catch(o){let s=r[r.length-1].node;throw this.handleError(o,s)}}}if(this.listeners.OnceExit)for(let[r,i]of this.listeners.OnceExit){this.result.lastPlugin=r;try{if(e.type==="document"){let o=e.nodes.map(s=>i(s,this.helpers));await Promise.all(o)}else await i(e,this.helpers)}catch(o){throw this.handleError(o)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let r=this.result.root.nodes.map(i=>e.Once(i,this.helpers));return Ls(r[0])?Promise.all(r):r}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(r){throw this.handleError(r)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,r=$_;e.syntax&&(r=e.syntax.stringify),e.stringifier&&(r=e.stringifier),r.stringify&&(r=r.stringify);let o=new E_(r,this.result.root,this.result.opts).generate();return this.result.css=o[0],this.result.map=o[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let r=this.runOnRoot(e);if(Ls(r))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[mr];)e[mr]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let r of e.nodes)this.visitSync(this.listeners.OnceExit,r);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,r){return this.async().then(e,r)}toString(){return this.css}visitSync(e,r){for(let[i,o]of e){this.result.lastPlugin=i;let s;try{s=o(r,this.helpers)}catch(n){throw this.handleError(n,r.proxyOf)}if(r.type!=="root"&&r.type!=="document"&&!r.parent)return!0;if(Ls(s))throw this.getAsyncError()}}visitTick(e){let r=e[e.length-1],{node:i,visitors:o}=r;if(i.type!=="root"&&i.type!=="document"&&!i.parent){e.pop();return}if(o.length>0&&r.visitorIndex<o.length){let[n,a]=o[r.visitorIndex];r.visitorIndex+=1,r.visitorIndex===o.length&&(r.visitors=[],r.visitorIndex=0),this.result.lastPlugin=n;try{return a(i.toProxy(),this.helpers)}catch(l){throw this.handleError(l,i)}}if(r.iterator!==0){let n=r.iterator,a;for(;a=i.nodes[i.indexes[n]];)if(i.indexes[n]+=1,!a[mr]){a[mr]=!0,e.push(hf(a));return}r.iterator=0,delete i.indexes[n]}let s=r.events;for(;r.eventIndex<s.length;){let n=s[r.eventIndex];if(r.eventIndex+=1,n===Co){i.nodes&&i.nodes.length&&(i[mr]=!0,r.iterator=i.getIterator());return}else if(this.listeners[n]){r.visitors=this.listeners[n];return}}e.pop()}walkSync(e){e[mr]=!0;let r=pf(e);for(let i of r)if(i===Co)e.nodes&&e.each(o=>{o[mr]||this.walkSync(o)});else{let o=this.listeners[i];if(o&&this.visitSync(o,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};Gr.registerPostcss=t=>{Dc=t};ff.exports=Gr;Gr.default=Gr;O_.registerLazyResult(Gr);T_.registerLazyResult(Gr)});var gf=U((V5,mf)=>{"use strict";var R_=Ic(),D_=ba(),M_=ya(),N_=ys(),B5=zc(),zs=class{constructor(e,r,i){r=r.toString(),this.stringified=!1,this._processor=e,this._css=r,this._opts=i,this._map=void 0;let o,s=N_;this.result=new M_(this._processor,o,this._opts),this.result.css=r;let n=this;Object.defineProperty(this.result,"root",{get(){return n.root}});let a=new R_(s,o,this._opts,r);if(a.isMap()){let[l,u]=a.generate();l&&(this.result.css=l),u&&(this.result.map=u)}else a.clearAnnotation(),this.result.css=a.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,r){return this.async().then(e,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,r=D_;try{e=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};mf.exports=zs;zs.default=zs});var yf=U((q5,bf)=>{"use strict";var F_=aa(),U_=Mc(),B_=gf(),V_=ko(),Ci=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let r=[];for(let i of e)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(!(typeof i=="object"&&(i.parse||i.stringify)))throw new Error(i+" is not a PostCSS plugin");return r}process(e,r={}){return!this.plugins.length&&!r.parser&&!r.stringifier&&!r.syntax?new B_(this,e,r):new U_(this,e,r)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};bf.exports=Ci;Ci.default=Ci;V_.registerProcessor(Ci);F_.registerProcessor(Ci)});var To=U((j5,Cf)=>{"use strict";var vf=na(),wf=Ss(),q_=Hr(),j_=oa(),_f=Ts(),xf=aa(),H_=Hp(),W_=As(),G_=Mc(),K_=Oc(),Y_=xs(),Z_=ba(),Nc=yf(),X_=ya(),kf=ko(),Sf=da(),J_=ys(),Q_=Lc();function ke(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new Nc(t)}ke.plugin=function(e,r){let i=!1;function o(...n){console&&console.warn&&!i&&(i=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(e+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let a=r(...n);return a.postcssPlugin=e,a.postcssVersion=new Nc().version,a}let s;return Object.defineProperty(o,"postcss",{get(){return s||(s=o()),s}}),o.process=function(n,a,l){return ke([o(l)]).process(n,a)},o};ke.stringify=J_;ke.parse=Z_;ke.fromJSON=H_;ke.list=K_;ke.comment=t=>new wf(t);ke.atRule=t=>new vf(t);ke.decl=t=>new _f(t);ke.rule=t=>new Sf(t);ke.root=t=>new kf(t);ke.document=t=>new xf(t);ke.CssSyntaxError=j_;ke.Declaration=_f;ke.Container=q_;ke.Processor=Nc;ke.Document=xf;ke.Comment=wf;ke.Warning=Q_;ke.AtRule=vf;ke.Result=X_;ke.Input=W_;ke.Rule=Sf;ke.Root=kf;ke.Node=Y_;G_.registerPostcss(ke);Cf.exports=ke;ke.default=ke});var Of=U((gI,Af)=>{"use strict";var Tf=/-(\w|$)/g,Ef=function(e,r){return r.toUpperCase()},ex=function(e){return e=e.toLowerCase(),e==="float"?"cssFloat":e.charCodeAt(0)===45&&e.charCodeAt(1)===109&&e.charCodeAt(2)===115&&e.charCodeAt(3)===45?e.substr(1).replace(Tf,Ef):e.replace(Tf,Ef)};Af.exports=ex});var Vc=U((bI,$f)=>{var tx=Of(),rx={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function Uc(t){return typeof t.nodes>"u"?!0:Bc(t)}function Bc(t){let e,r={};return t.each(i=>{if(i.type==="atrule")e="@"+i.name,i.params&&(e+=" "+i.params),typeof r[e]>"u"?r[e]=Uc(i):Array.isArray(r[e])?r[e].push(Uc(i)):r[e]=[r[e],Uc(i)];else if(i.type==="rule"){let o=Bc(i);if(r[i.selector])for(let s in o)r[i.selector][s]=o[s];else r[i.selector]=o}else if(i.type==="decl"){i.prop[0]==="-"&&i.prop[1]==="-"||i.parent&&i.parent.selector===":export"?e=i.prop:e=tx(i.prop);let o=i.value;!isNaN(i.value)&&rx[e]&&(o=parseFloat(i.value)),i.important&&(o+=" !important"),typeof r[e]>"u"?r[e]=o:Array.isArray(r[e])?r[e].push(o):r[e]=[r[e],o]}}),r}$f.exports=Bc});var va=U((yI,zf)=>{var Rs=To(),If=/\s*!important\s*$/i,ix={"box-flex":!0,"box-flex-group":!0,"column-count":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0};function ox(t){return t.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function Pf(t,e,r){r===!1||r===null||(e.startsWith("--")||(e=ox(e)),typeof r=="number"&&(r===0||ix[e]?r=r.toString():r+="px"),e==="css-float"&&(e="float"),If.test(r)?(r=r.replace(If,""),t.push(Rs.decl({prop:e,value:r,important:!0}))):t.push(Rs.decl({prop:e,value:r})))}function Lf(t,e,r){let i=Rs.atRule({name:e[1],params:e[3]||""});typeof r=="object"&&(i.nodes=[],qc(r,i)),t.push(i)}function qc(t,e){let r,i,o;for(r in t)if(i=t[r],!(i===null||typeof i>"u"))if(r[0]==="@"){let s=r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);if(Array.isArray(i))for(let n of i)Lf(e,s,n);else Lf(e,s,i)}else if(Array.isArray(i))for(let s of i)Pf(e,r,s);else typeof i=="object"?(o=Rs.rule({selector:r}),qc(i,o),e.push(o)):Pf(e,r,i)}zf.exports=function(t){let e=Rs.root();return qc(t,e),e}});var jc=U((vI,Rf)=>{var sx=Vc();Rf.exports=function(e){return console&&console.warn&&e.warnings().forEach(r=>{let i=r.plugin||"PostCSS";console.warn(i+": "+r.text)}),sx(e.root)}});var Mf=U((wI,Df)=>{var nx=To(),ax=jc(),lx=va();Df.exports=function(e){let r=nx(e);return async i=>{let o=await r.process(i,{parser:lx,from:void 0});return ax(o)}}});var Ff=U((_I,Nf)=>{var cx=To(),ux=jc(),dx=va();Nf.exports=function(t){let e=cx(t);return r=>{let i=e.process(r,{parser:dx,from:void 0});return ux(i)}}});var Bf=U((xI,Uf)=>{var hx=Vc(),px=va(),fx=Mf(),mx=Ff();Uf.exports={objectify:hx,parse:px,async:fx,sync:mx}});var Wc=U((wa,Vf)=>{"use strict";wa.__esModule=!0;wa.default=yx;function gx(t){for(var e=t.toLowerCase(),r="",i=!1,o=0;o<6&&e[o]!==void 0;o++){var s=e.charCodeAt(o),n=s>=97&&s<=102||s>=48&&s<=57;if(i=s===32,!n)break;r+=e[o]}if(r.length!==0){var a=parseInt(r,16),l=a>=55296&&a<=57343;return l||a===0||a>1114111?["\uFFFD",r.length+(i?1:0)]:[String.fromCodePoint(a),r.length+(i?1:0)]}}var bx=/\\/;function yx(t){var e=bx.test(t);if(!e)return t;for(var r="",i=0;i<t.length;i++){if(t[i]==="\\"){var o=gx(t.slice(i+1,i+7));if(o!==void 0){r+=o[0],i+=o[1];continue}if(t[i+1]==="\\"){r+="\\",i++;continue}t.length===i+1&&(r+=t[i]);continue}r+=t[i]}return r}Vf.exports=wa.default});var jf=U((_a,qf)=>{"use strict";_a.__esModule=!0;_a.default=vx;function vx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();if(!t[o])return;t=t[o]}return t}qf.exports=_a.default});var Wf=U((xa,Hf)=>{"use strict";xa.__esModule=!0;xa.default=wx;function wx(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var o=r.shift();t[o]||(t[o]={}),t=t[o]}}Hf.exports=xa.default});var Kf=U((ka,Gf)=>{"use strict";ka.__esModule=!0;ka.default=_x;function _x(t){for(var e="",r=t.indexOf("/*"),i=0;r>=0;){e=e+t.slice(i,r);var o=t.indexOf("*/",r+2);if(o<0)return e;i=o+2,r=t.indexOf("/*",i)}return e=e+t.slice(i),e}Gf.exports=ka.default});var Ds=U(gr=>{"use strict";gr.__esModule=!0;gr.unesc=gr.stripComments=gr.getProp=gr.ensureObject=void 0;var xx=Sa(Wc());gr.unesc=xx.default;var kx=Sa(jf());gr.getProp=kx.default;var Sx=Sa(Wf());gr.ensureObject=Sx.default;var Cx=Sa(Kf());gr.stripComments=Cx.default;function Sa(t){return t&&t.__esModule?t:{default:t}}});var Tr=U((Ms,Xf)=>{"use strict";Ms.__esModule=!0;Ms.default=void 0;var Yf=Ds();function Zf(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Tx(t,e,r){return e&&Zf(t.prototype,e),r&&Zf(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Ex=function t(e,r){if(typeof e!="object"||e===null)return e;var i=new e.constructor;for(var o in e)if(e.hasOwnProperty(o)){var s=e[o],n=typeof s;o==="parent"&&n==="object"?r&&(i[o]=r):s instanceof Array?i[o]=s.map(function(a){return t(a,i)}):i[o]=t(s,i)}return i},Ax=function(){function t(r){r===void 0&&(r={}),Object.assign(this,r),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var e=t.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(i){i===void 0&&(i={});var o=Ex(this);for(var s in i)o[s]=i[s];return o},e.appendToPropertyAndEscape=function(i,o,s){this.raws||(this.raws={});var n=this[i],a=this.raws[i];this[i]=n+o,a||s!==o?this.raws[i]=(a||n)+s:delete this.raws[i]},e.setPropertyAndEscape=function(i,o,s){this.raws||(this.raws={}),this[i]=o,this.raws[i]=s},e.setPropertyWithoutEscape=function(i,o){this[i]=o,this.raws&&delete this.raws[i]},e.isAtPosition=function(i,o){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>o||this.source.end.line===i&&this.source.end.column<o)},e.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},Tx(t,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,Yf.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,Yf.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),t}();Ms.default=Ax;Xf.exports=Ms.default});var at=U(Ie=>{"use strict";Ie.__esModule=!0;Ie.UNIVERSAL=Ie.TAG=Ie.STRING=Ie.SELECTOR=Ie.ROOT=Ie.PSEUDO=Ie.NESTING=Ie.ID=Ie.COMMENT=Ie.COMBINATOR=Ie.CLASS=Ie.ATTRIBUTE=void 0;var Ox="tag";Ie.TAG=Ox;var $x="string";Ie.STRING=$x;var Ix="selector";Ie.SELECTOR=Ix;var Px="root";Ie.ROOT=Px;var Lx="pseudo";Ie.PSEUDO=Lx;var zx="nesting";Ie.NESTING=zx;var Rx="id";Ie.ID=Rx;var Dx="comment";Ie.COMMENT=Dx;var Mx="combinator";Ie.COMBINATOR=Mx;var Nx="class";Ie.CLASS=Nx;var Fx="attribute";Ie.ATTRIBUTE=Fx;var Ux="universal";Ie.UNIVERSAL=Ux});var Ca=U((Ns,tm)=>{"use strict";Ns.__esModule=!0;Ns.default=void 0;var Bx=qx(Tr()),Er=Vx(at());function em(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(em=function(o){return o?r:e})(t)}function Vx(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=em(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function qx(t){return t&&t.__esModule?t:{default:t}}function jx(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=Hx(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hx(t,e){if(t){if(typeof t=="string")return Jf(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Jf(t,e)}}function Jf(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function Qf(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Wx(t,e,r){return e&&Qf(t.prototype,e),r&&Qf(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Gx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Gc(t,e)}function Gc(t,e){return Gc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Gc(t,e)}var Kx=function(t){Gx(e,t);function e(i){var o;return o=t.call(this,i)||this,o.nodes||(o.nodes=[]),o}var r=e.prototype;return r.append=function(o){return o.parent=this,this.nodes.push(o),this},r.prepend=function(o){o.parent=this,this.nodes.unshift(o);for(var s in this.indexes)this.indexes[s]++;return this},r.at=function(o){return this.nodes[o]},r.index=function(o){return typeof o=="number"?o:this.nodes.indexOf(o)},r.removeChild=function(o){o=this.index(o),this.at(o).parent=void 0,this.nodes.splice(o,1);var s;for(var n in this.indexes)s=this.indexes[n],s>=o&&(this.indexes[n]=s-1);return this},r.removeAll=function(){for(var o=jx(this.nodes),s;!(s=o()).done;){var n=s.value;n.parent=void 0}return this.nodes=[],this},r.empty=function(){return this.removeAll()},r.insertAfter=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n+1,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],n<a&&(this.indexes[l]=a+1);return this},r.insertBefore=function(o,s){s.parent=this;var n=this.index(o);this.nodes.splice(n,0,s),s.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],a>=n&&(this.indexes[l]=a+1);return this},r._findChildAtPosition=function(o,s){var n=void 0;return this.each(function(a){if(a.atPosition){var l=a.atPosition(o,s);if(l)return n=l,!1}else if(a.isAtPosition(o,s))return n=a,!1}),n},r.atPosition=function(o,s){if(this.isAtPosition(o,s))return this._findChildAtPosition(o,s)||this},r._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},r.each=function(o){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var s=this.lastEach;if(this.indexes[s]=0,!!this.length){for(var n,a;this.indexes[s]<this.length&&(n=this.indexes[s],a=o(this.at(n),n),a!==!1);)this.indexes[s]+=1;if(delete this.indexes[s],a===!1)return!1}},r.walk=function(o){return this.each(function(s,n){var a=o(s,n);if(a!==!1&&s.length&&(a=s.walk(o)),a===!1)return!1})},r.walkAttributes=function(o){var s=this;return this.walk(function(n){if(n.type===Er.ATTRIBUTE)return o.call(s,n)})},r.walkClasses=function(o){var s=this;return this.walk(function(n){if(n.type===Er.CLASS)return o.call(s,n)})},r.walkCombinators=function(o){var s=this;return this.walk(function(n){if(n.type===Er.COMBINATOR)return o.call(s,n)})},r.walkComments=function(o){var s=this;return this.walk(function(n){if(n.type===Er.COMMENT)return o.call(s,n)})},r.walkIds=function(o){var s=this;return this.walk(function(n){if(n.type===Er.ID)return o.call(s,n)})},r.walkNesting=function(o){var s=this;return this.walk(function(n){if(n.type===Er.NESTING)return o.call(s,n)})},r.walkPseudos=function(o){var s=this;return this.walk(function(n){if(n.type===Er.PSEUDO)return o.call(s,n)})},r.walkTags=function(o){var s=this;return this.walk(function(n){if(n.type===Er.TAG)return o.call(s,n)})},r.walkUniversals=function(o){var s=this;return this.walk(function(n){if(n.type===Er.UNIVERSAL)return o.call(s,n)})},r.split=function(o){var s=this,n=[];return this.reduce(function(a,l,u){var d=o.call(s,l);return n.push(l),d?(a.push(n),n=[]):u===s.length-1&&a.push(n),a},[])},r.map=function(o){return this.nodes.map(o)},r.reduce=function(o,s){return this.nodes.reduce(o,s)},r.every=function(o){return this.nodes.every(o)},r.some=function(o){return this.nodes.some(o)},r.filter=function(o){return this.nodes.filter(o)},r.sort=function(o){return this.nodes.sort(o)},r.toString=function(){return this.map(String).join("")},Wx(e,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),e}(Bx.default);Ns.default=Kx;tm.exports=Ns.default});var Yc=U((Fs,im)=>{"use strict";Fs.__esModule=!0;Fs.default=void 0;var Yx=Xx(Ca()),Zx=at();function Xx(t){return t&&t.__esModule?t:{default:t}}function rm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Jx(t,e,r){return e&&rm(t.prototype,e),r&&rm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Kc(t,e)}function Kc(t,e){return Kc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Kc(t,e)}var e1=function(t){Qx(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=Zx.ROOT,o}var r=e.prototype;return r.toString=function(){var o=this.reduce(function(s,n){return s.push(String(n)),s},[]).join(",");return this.trailingComma?o+",":o},r.error=function(o,s){return this._error?this._error(o,s):new Error(o)},Jx(e,[{key:"errorGenerator",set:function(o){this._error=o}}]),e}(Yx.default);Fs.default=e1;im.exports=Fs.default});var Xc=U((Us,om)=>{"use strict";Us.__esModule=!0;Us.default=void 0;var t1=i1(Ca()),r1=at();function i1(t){return t&&t.__esModule?t:{default:t}}function o1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Zc(t,e)}function Zc(t,e){return Zc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Zc(t,e)}var s1=function(t){o1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=r1.SELECTOR,i}return e}(t1.default);Us.default=s1;om.exports=Us.default});var Ta=U(($I,sm)=>{"use strict";var n1={},a1=n1.hasOwnProperty,l1=function(e,r){if(!e)return r;var i={};for(var o in r)i[o]=a1.call(e,o)?e[o]:r[o];return i},c1=/[ -,\.\/:-@\[-\^`\{-~]/,u1=/[ -,\.\/:-@\[\]\^`\{-~]/,d1=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,Jc=function t(e,r){r=l1(r,t.options),r.quotes!="single"&&r.quotes!="double"&&(r.quotes="single");for(var i=r.quotes=="double"?'"':"'",o=r.isIdentifier,s=e.charAt(0),n="",a=0,l=e.length;a<l;){var u=e.charAt(a++),d=u.charCodeAt(),h=void 0;if(d<32||d>126){if(d>=55296&&d<=56319&&a<l){var f=e.charCodeAt(a++);(f&64512)==56320?d=((d&1023)<<10)+(f&1023)+65536:a--}h="\\"+d.toString(16).toUpperCase()+" "}else r.escapeEverything?c1.test(u)?h="\\"+u:h="\\"+d.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(u)?h="\\"+d.toString(16).toUpperCase()+" ":u=="\\"||!o&&(u=='"'&&i==u||u=="'"&&i==u)||o&&u1.test(u)?h="\\"+u:h=u;n+=h}return o&&(/^-[-\d]/.test(n)?n="\\-"+n.slice(1):/\d/.test(s)&&(n="\\3"+s+" "+n.slice(1))),n=n.replace(d1,function(m,g,v){return g&&g.length%2?m:(g||"")+v}),!o&&r.wrap?i+n+i:n};Jc.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};Jc.version="3.0.0";sm.exports=Jc});var eu=U((Bs,lm)=>{"use strict";Bs.__esModule=!0;Bs.default=void 0;var h1=am(Ta()),p1=Ds(),f1=am(Tr()),m1=at();function am(t){return t&&t.__esModule?t:{default:t}}function nm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g1(t,e,r){return e&&nm(t.prototype,e),r&&nm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function b1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Qc(t,e)}function Qc(t,e){return Qc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Qc(t,e)}var y1=function(t){b1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=m1.CLASS,o._constructed=!0,o}var r=e.prototype;return r.valueToString=function(){return"."+t.prototype.valueToString.call(this)},g1(e,[{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=(0,h1.default)(o,{isIdentifier:!0});s!==o?((0,p1.ensureObject)(this,"raws"),this.raws.value=s):this.raws&&delete this.raws.value}this._value=o}}]),e}(f1.default);Bs.default=y1;lm.exports=Bs.default});var ru=U((Vs,cm)=>{"use strict";Vs.__esModule=!0;Vs.default=void 0;var v1=_1(Tr()),w1=at();function _1(t){return t&&t.__esModule?t:{default:t}}function x1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,tu(t,e)}function tu(t,e){return tu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},tu(t,e)}var k1=function(t){x1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=w1.COMMENT,i}return e}(v1.default);Vs.default=k1;cm.exports=Vs.default});var ou=U((qs,um)=>{"use strict";qs.__esModule=!0;qs.default=void 0;var S1=T1(Tr()),C1=at();function T1(t){return t&&t.__esModule?t:{default:t}}function E1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,iu(t,e)}function iu(t,e){return iu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},iu(t,e)}var A1=function(t){E1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=C1.ID,o}var r=e.prototype;return r.valueToString=function(){return"#"+t.prototype.valueToString.call(this)},e}(S1.default);qs.default=A1;um.exports=qs.default});var Ea=U((js,pm)=>{"use strict";js.__esModule=!0;js.default=void 0;var O1=hm(Ta()),$1=Ds(),I1=hm(Tr());function hm(t){return t&&t.__esModule?t:{default:t}}function dm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function P1(t,e,r){return e&&dm(t.prototype,e),r&&dm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function L1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,su(t,e)}function su(t,e){return su=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},su(t,e)}var z1=function(t){L1(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.qualifiedName=function(o){return this.namespace?this.namespaceString+"|"+o:o},r.valueToString=function(){return this.qualifiedName(t.prototype.valueToString.call(this))},P1(e,[{key:"namespace",get:function(){return this._namespace},set:function(o){if(o===!0||o==="*"||o==="&"){this._namespace=o,this.raws&&delete this.raws.namespace;return}var s=(0,O1.default)(o,{isIdentifier:!0});this._namespace=o,s!==o?((0,$1.ensureObject)(this,"raws"),this.raws.namespace=s):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(o){this.namespace=o}},{key:"namespaceString",get:function(){if(this.namespace){var o=this.stringifyProperty("namespace");return o===!0?"":o}else return""}}]),e}(I1.default);js.default=z1;pm.exports=js.default});var au=U((Hs,fm)=>{"use strict";Hs.__esModule=!0;Hs.default=void 0;var R1=M1(Ea()),D1=at();function M1(t){return t&&t.__esModule?t:{default:t}}function N1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,nu(t,e)}function nu(t,e){return nu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},nu(t,e)}var F1=function(t){N1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=D1.TAG,i}return e}(R1.default);Hs.default=F1;fm.exports=Hs.default});var cu=U((Ws,mm)=>{"use strict";Ws.__esModule=!0;Ws.default=void 0;var U1=V1(Tr()),B1=at();function V1(t){return t&&t.__esModule?t:{default:t}}function q1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,lu(t,e)}function lu(t,e){return lu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},lu(t,e)}var j1=function(t){q1(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=B1.STRING,i}return e}(U1.default);Ws.default=j1;mm.exports=Ws.default});var du=U((Gs,gm)=>{"use strict";Gs.__esModule=!0;Gs.default=void 0;var H1=G1(Ca()),W1=at();function G1(t){return t&&t.__esModule?t:{default:t}}function K1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,uu(t,e)}function uu(t,e){return uu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},uu(t,e)}var Y1=function(t){K1(e,t);function e(i){var o;return o=t.call(this,i)||this,o.type=W1.PSEUDO,o}var r=e.prototype;return r.toString=function(){var o=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),o,this.rawSpaceAfter].join("")},e}(H1.default);Gs.default=Y1;gm.exports=Gs.default});var ym=U((II,bm)=>{bm.exports=Z1;function Z1(t,e){if(hu("noDeprecation"))return t;var r=!1;function i(){if(!r){if(hu("throwDeprecation"))throw new Error(e);hu("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}return i}function hu(t){try{if(!global.localStorage)return!1}catch{return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var yu=U(Zs=>{"use strict";Zs.__esModule=!0;Zs.default=void 0;Zs.unescapeValue=bu;var Ks=gu(Ta()),X1=gu(Wc()),J1=gu(Ea()),Q1=at(),pu;function gu(t){return t&&t.__esModule?t:{default:t}}function vm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ek(t,e,r){return e&&vm(t.prototype,e),r&&vm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function tk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,mu(t,e)}function mu(t,e){return mu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},mu(t,e)}var Ys=ym(),rk=/^('|")([^]*)\1$/,ik=Ys(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),ok=Ys(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),sk=Ys(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function bu(t){var e=!1,r=null,i=t,o=i.match(rk);return o&&(r=o[1],i=o[2]),i=(0,X1.default)(i),i!==t&&(e=!0),{deprecatedUsage:e,unescaped:i,quoteMark:r}}function nk(t){if(t.quoteMark!==void 0||t.value===void 0)return t;sk();var e=bu(t.value),r=e.quoteMark,i=e.unescaped;return t.raws||(t.raws={}),t.raws.value===void 0&&(t.raws.value=t.value),t.value=i,t.quoteMark=r,t}var Aa=function(t){tk(e,t);function e(i){var o;return i===void 0&&(i={}),o=t.call(this,nk(i))||this,o.type=Q1.ATTRIBUTE,o.raws=o.raws||{},Object.defineProperty(o.raws,"unquoted",{get:Ys(function(){return o.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:Ys(function(){return o.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),o._constructed=!0,o}var r=e.prototype;return r.getQuotedValue=function(o){o===void 0&&(o={});var s=this._determineQuoteMark(o),n=fu[s],a=(0,Ks.default)(this._value,n);return a},r._determineQuoteMark=function(o){return o.smart?this.smartQuoteMark(o):this.preferredQuoteMark(o)},r.setValue=function(o,s){s===void 0&&(s={}),this._value=o,this._quoteMark=this._determineQuoteMark(s),this._syncRawValue()},r.smartQuoteMark=function(o){var s=this.value,n=s.replace(/[^']/g,"").length,a=s.replace(/[^"]/g,"").length;if(n+a===0){var l=(0,Ks.default)(s,{isIdentifier:!0});if(l===s)return e.NO_QUOTE;var u=this.preferredQuoteMark(o);if(u===e.NO_QUOTE){var d=this.quoteMark||o.quoteMark||e.DOUBLE_QUOTE,h=fu[d],f=(0,Ks.default)(s,h);if(f.length<l.length)return d}return u}else return a===n?this.preferredQuoteMark(o):a<n?e.DOUBLE_QUOTE:e.SINGLE_QUOTE},r.preferredQuoteMark=function(o){var s=o.preferCurrentQuoteMark?this.quoteMark:o.quoteMark;return s===void 0&&(s=o.preferCurrentQuoteMark?o.quoteMark:this.quoteMark),s===void 0&&(s=e.DOUBLE_QUOTE),s},r._syncRawValue=function(){var o=(0,Ks.default)(this._value,fu[this.quoteMark]);o===this._value?this.raws&&delete this.raws.value:this.raws.value=o},r._handleEscapes=function(o,s){if(this._constructed){var n=(0,Ks.default)(s,{isIdentifier:!0});n!==s?this.raws[o]=n:delete this.raws[o]}},r._spacesFor=function(o){var s={before:"",after:""},n=this.spaces[o]||{},a=this.raws.spaces&&this.raws.spaces[o]||{};return Object.assign(s,n,a)},r._stringFor=function(o,s,n){s===void 0&&(s=o),n===void 0&&(n=wm);var a=this._spacesFor(s);return n(this.stringifyProperty(o),a)},r.offsetOf=function(o){var s=1,n=this._spacesFor("attribute");if(s+=n.before.length,o==="namespace"||o==="ns")return this.namespace?s:-1;if(o==="attributeNS"||(s+=this.namespaceString.length,this.namespace&&(s+=1),o==="attribute"))return s;s+=this.stringifyProperty("attribute").length,s+=n.after.length;var a=this._spacesFor("operator");s+=a.before.length;var l=this.stringifyProperty("operator");if(o==="operator")return l?s:-1;s+=l.length,s+=a.after.length;var u=this._spacesFor("value");s+=u.before.length;var d=this.stringifyProperty("value");if(o==="value")return d?s:-1;s+=d.length,s+=u.after.length;var h=this._spacesFor("insensitive");return s+=h.before.length,o==="insensitive"&&this.insensitive?s:-1},r.toString=function(){var o=this,s=[this.rawSpaceBefore,"["];return s.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(s.push(this._stringFor("operator")),s.push(this._stringFor("value")),s.push(this._stringFor("insensitiveFlag","insensitive",function(n,a){return n.length>0&&!o.quoted&&a.before.length===0&&!(o.spaces.value&&o.spaces.value.after)&&(a.before=" "),wm(n,a)}))),s.push("]"),s.push(this.rawSpaceAfter),s.join("")},ek(e,[{key:"quoted",get:function(){var o=this.quoteMark;return o==="'"||o==='"'},set:function(o){ok()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(o){if(!this._constructed){this._quoteMark=o;return}this._quoteMark!==o&&(this._quoteMark=o,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(o){if(this._constructed){var s=bu(o),n=s.deprecatedUsage,a=s.unescaped,l=s.quoteMark;if(n&&ik(),a===this._value&&l===this._quoteMark)return;this._value=a,this._quoteMark=l,this._syncRawValue()}else this._value=o}},{key:"insensitive",get:function(){return this._insensitive},set:function(o){o||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=o}},{key:"attribute",get:function(){return this._attribute},set:function(o){this._handleEscapes("attribute",o),this._attribute=o}}]),e}(J1.default);Zs.default=Aa;Aa.NO_QUOTE=null;Aa.SINGLE_QUOTE="'";Aa.DOUBLE_QUOTE='"';var fu=(pu={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},pu[null]={isIdentifier:!0},pu);function wm(t,e){return""+e.before+t+e.after}});var wu=U((Xs,_m)=>{"use strict";Xs.__esModule=!0;Xs.default=void 0;var ak=ck(Ea()),lk=at();function ck(t){return t&&t.__esModule?t:{default:t}}function uk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vu(t,e)}function vu(t,e){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},vu(t,e)}var dk=function(t){uk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=lk.UNIVERSAL,i.value="*",i}return e}(ak.default);Xs.default=dk;_m.exports=Xs.default});var xu=U((Js,xm)=>{"use strict";Js.__esModule=!0;Js.default=void 0;var hk=fk(Tr()),pk=at();function fk(t){return t&&t.__esModule?t:{default:t}}function mk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_u(t,e)}function _u(t,e){return _u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},_u(t,e)}var gk=function(t){mk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=pk.COMBINATOR,i}return e}(hk.default);Js.default=gk;xm.exports=Js.default});var Su=U((Qs,km)=>{"use strict";Qs.__esModule=!0;Qs.default=void 0;var bk=vk(Tr()),yk=at();function vk(t){return t&&t.__esModule?t:{default:t}}function wk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ku(t,e)}function ku(t,e){return ku=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},ku(t,e)}var _k=function(t){wk(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=yk.NESTING,i.value="&",i}return e}(bk.default);Qs.default=_k;km.exports=Qs.default});var Cm=U((Oa,Sm)=>{"use strict";Oa.__esModule=!0;Oa.default=xk;function xk(t){return t.sort(function(e,r){return e-r})}Sm.exports=Oa.default});var Cu=U(W=>{"use strict";W.__esModule=!0;W.word=W.tilde=W.tab=W.str=W.space=W.slash=W.singleQuote=W.semicolon=W.plus=W.pipe=W.openSquare=W.openParenthesis=W.newline=W.greaterThan=W.feed=W.equals=W.doubleQuote=W.dollar=W.cr=W.comment=W.comma=W.combinator=W.colon=W.closeSquare=W.closeParenthesis=W.caret=W.bang=W.backslash=W.at=W.asterisk=W.ampersand=void 0;var kk=38;W.ampersand=kk;var Sk=42;W.asterisk=Sk;var Ck=64;W.at=Ck;var Tk=44;W.comma=Tk;var Ek=58;W.colon=Ek;var Ak=59;W.semicolon=Ak;var Ok=40;W.openParenthesis=Ok;var $k=41;W.closeParenthesis=$k;var Ik=91;W.openSquare=Ik;var Pk=93;W.closeSquare=Pk;var Lk=36;W.dollar=Lk;var zk=126;W.tilde=zk;var Rk=94;W.caret=Rk;var Dk=43;W.plus=Dk;var Mk=61;W.equals=Mk;var Nk=124;W.pipe=Nk;var Fk=62;W.greaterThan=Fk;var Uk=32;W.space=Uk;var Tm=39;W.singleQuote=Tm;var Bk=34;W.doubleQuote=Bk;var Vk=47;W.slash=Vk;var qk=33;W.bang=qk;var jk=92;W.backslash=jk;var Hk=13;W.cr=Hk;var Wk=12;W.feed=Wk;var Gk=10;W.newline=Gk;var Kk=9;W.tab=Kk;var Yk=Tm;W.str=Yk;var Zk=-1;W.comment=Zk;var Xk=-2;W.word=Xk;var Jk=-3;W.combinator=Jk});var Om=U(en=>{"use strict";en.__esModule=!0;en.FIELDS=void 0;en.default=sS;var N=Qk(Cu()),Ao,Ae;function Am(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Am=function(o){return o?r:e})(t)}function Qk(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Am(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}var eS=(Ao={},Ao[N.tab]=!0,Ao[N.newline]=!0,Ao[N.cr]=!0,Ao[N.feed]=!0,Ao),tS=(Ae={},Ae[N.space]=!0,Ae[N.tab]=!0,Ae[N.newline]=!0,Ae[N.cr]=!0,Ae[N.feed]=!0,Ae[N.ampersand]=!0,Ae[N.asterisk]=!0,Ae[N.bang]=!0,Ae[N.comma]=!0,Ae[N.colon]=!0,Ae[N.semicolon]=!0,Ae[N.openParenthesis]=!0,Ae[N.closeParenthesis]=!0,Ae[N.openSquare]=!0,Ae[N.closeSquare]=!0,Ae[N.singleQuote]=!0,Ae[N.doubleQuote]=!0,Ae[N.plus]=!0,Ae[N.pipe]=!0,Ae[N.tilde]=!0,Ae[N.greaterThan]=!0,Ae[N.equals]=!0,Ae[N.dollar]=!0,Ae[N.caret]=!0,Ae[N.slash]=!0,Ae),Tu={},Em="0123456789abcdefABCDEF";for($a=0;$a<Em.length;$a++)Tu[Em.charCodeAt($a)]=!0;var $a;function rS(t,e){var r=e,i;do{if(i=t.charCodeAt(r),tS[i])return r-1;i===N.backslash?r=iS(t,r)+1:r++}while(r<t.length);return r-1}function iS(t,e){var r=e,i=t.charCodeAt(r+1);if(!eS[i])if(Tu[i]){var o=0;do r++,o++,i=t.charCodeAt(r+1);while(Tu[i]&&o<6);o<6&&i===N.space&&r++}else r++;return r}var oS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};en.FIELDS=oS;function sS(t){var e=[],r=t.css.valueOf(),i=r,o=i.length,s=-1,n=1,a=0,l=0,u,d,h,f,m,g,v,y,_,w,k,b,S;function z(H,B){if(t.safe)r+=B,_=r.length-1;else throw t.error("Unclosed "+H,n,a-s,a)}for(;a<o;){switch(u=r.charCodeAt(a),u===N.newline&&(s=a,n+=1),u){case N.space:case N.tab:case N.newline:case N.cr:case N.feed:_=a;do _+=1,u=r.charCodeAt(_),u===N.newline&&(s=_,n+=1);while(u===N.space||u===N.newline||u===N.tab||u===N.cr||u===N.feed);S=N.space,f=n,h=_-s-1,l=_;break;case N.plus:case N.greaterThan:case N.tilde:case N.pipe:_=a;do _+=1,u=r.charCodeAt(_);while(u===N.plus||u===N.greaterThan||u===N.tilde||u===N.pipe);S=N.combinator,f=n,h=a-s,l=_;break;case N.asterisk:case N.ampersand:case N.bang:case N.comma:case N.equals:case N.dollar:case N.caret:case N.openSquare:case N.closeSquare:case N.colon:case N.semicolon:case N.openParenthesis:case N.closeParenthesis:_=a,S=u,f=n,h=a-s,l=_+1;break;case N.singleQuote:case N.doubleQuote:b=u===N.singleQuote?"'":'"',_=a;do for(m=!1,_=r.indexOf(b,_+1),_===-1&&z("quote",b),g=_;r.charCodeAt(g-1)===N.backslash;)g-=1,m=!m;while(m);S=N.str,f=n,h=a-s,l=_+1;break;default:u===N.slash&&r.charCodeAt(a+1)===N.asterisk?(_=r.indexOf("*/",a+2)+1,_===0&&z("comment","*/"),d=r.slice(a,_+1),y=d.split(`
`),v=y.length-1,v>0?(w=n+v,k=_-y[v].length):(w=n,k=s),S=N.comment,n=w,f=w,h=_-k):u===N.slash?(_=a,S=u,f=n,h=a-s,l=_+1):(_=rS(r,a),S=N.word,f=n,h=_-s),l=_+1;break}e.push([S,n,a-s,f,h,a,l]),k&&(s=k,k=null),a=l}return e}});var Mm=U((tn,Dm)=>{"use strict";tn.__esModule=!0;tn.default=void 0;var nS=Nt(Yc()),Eu=Nt(Xc()),aS=Nt(eu()),$m=Nt(ru()),lS=Nt(ou()),cS=Nt(au()),Au=Nt(cu()),uS=Nt(du()),Im=Ia(yu()),dS=Nt(wu()),Ou=Nt(xu()),hS=Nt(Su()),pS=Nt(Cm()),I=Ia(Om()),V=Ia(Cu()),fS=Ia(at()),Fe=Ds(),Ti,$u;function Rm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Rm=function(o){return o?r:e})(t)}function Ia(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Rm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function Nt(t){return t&&t.__esModule?t:{default:t}}function Pm(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function mS(t,e,r){return e&&Pm(t.prototype,e),r&&Pm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var Lu=(Ti={},Ti[V.space]=!0,Ti[V.cr]=!0,Ti[V.feed]=!0,Ti[V.newline]=!0,Ti[V.tab]=!0,Ti),gS=Object.assign({},Lu,($u={},$u[V.comment]=!0,$u));function Lm(t){return{line:t[I.FIELDS.START_LINE],column:t[I.FIELDS.START_COL]}}function zm(t){return{line:t[I.FIELDS.END_LINE],column:t[I.FIELDS.END_COL]}}function Ei(t,e,r,i){return{start:{line:t,column:e},end:{line:r,column:i}}}function Oo(t){return Ei(t[I.FIELDS.START_LINE],t[I.FIELDS.START_COL],t[I.FIELDS.END_LINE],t[I.FIELDS.END_COL])}function Iu(t,e){if(t)return Ei(t[I.FIELDS.START_LINE],t[I.FIELDS.START_COL],e[I.FIELDS.END_LINE],e[I.FIELDS.END_COL])}function $o(t,e){var r=t[e];if(typeof r=="string")return r.indexOf("\\")!==-1&&((0,Fe.ensureObject)(t,"raws"),t[e]=(0,Fe.unesc)(r),t.raws[e]===void 0&&(t.raws[e]=r)),t}function Pu(t,e){for(var r=-1,i=[];(r=t.indexOf(e,r+1))!==-1;)i.push(r);return i}function bS(){var t=Array.prototype.concat.apply([],arguments);return t.filter(function(e,r){return r===t.indexOf(e)})}var yS=function(){function t(r,i){i===void 0&&(i={}),this.rule=r,this.options=Object.assign({lossy:!1,safe:!1},i),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,I.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var o=Iu(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new nS.default({source:o}),this.root.errorGenerator=this._errorGenerator();var s=new Eu.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(s),this.current=s,this.loop()}var e=t.prototype;return e._errorGenerator=function(){var i=this;return function(o,s){return typeof i.rule=="string"?new Error(o):i.rule.error(o,s)}},e.attribute=function(){var i=[],o=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[I.FIELDS.TYPE]!==V.closeSquare;)i.push(this.currToken),this.position++;if(this.currToken[I.FIELDS.TYPE]!==V.closeSquare)return this.expected("closing square bracket",this.currToken[I.FIELDS.START_POS]);var s=i.length,n={source:Ei(o[1],o[2],this.currToken[3],this.currToken[4]),sourceIndex:o[I.FIELDS.START_POS]};if(s===1&&!~[V.word].indexOf(i[0][I.FIELDS.TYPE]))return this.expected("attribute",i[0][I.FIELDS.START_POS]);for(var a=0,l="",u="",d=null,h=!1;a<s;){var f=i[a],m=this.content(f),g=i[a+1];switch(f[I.FIELDS.TYPE]){case V.space:if(h=!0,this.options.lossy)break;if(d){(0,Fe.ensureObject)(n,"spaces",d);var v=n.spaces[d].after||"";n.spaces[d].after=v+m;var y=(0,Fe.getProp)(n,"raws","spaces",d,"after")||null;y&&(n.raws.spaces[d].after=y+m)}else l=l+m,u=u+m;break;case V.asterisk:if(g[I.FIELDS.TYPE]===V.equals)n.operator=m,d="operator";else if((!n.namespace||d==="namespace"&&!h)&&g){l&&((0,Fe.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),u&&((0,Fe.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=l,u=""),n.namespace=(n.namespace||"")+m;var _=(0,Fe.getProp)(n,"raws","namespace")||null;_&&(n.raws.namespace+=m),d="namespace"}h=!1;break;case V.dollar:if(d==="value"){var w=(0,Fe.getProp)(n,"raws","value");n.value+="$",w&&(n.raws.value=w+"$");break}case V.caret:g[I.FIELDS.TYPE]===V.equals&&(n.operator=m,d="operator"),h=!1;break;case V.combinator:if(m==="~"&&g[I.FIELDS.TYPE]===V.equals&&(n.operator=m,d="operator"),m!=="|"){h=!1;break}g[I.FIELDS.TYPE]===V.equals?(n.operator=m,d="operator"):!n.namespace&&!n.attribute&&(n.namespace=!0),h=!1;break;case V.word:if(g&&this.content(g)==="|"&&i[a+2]&&i[a+2][I.FIELDS.TYPE]!==V.equals&&!n.operator&&!n.namespace)n.namespace=m,d="namespace";else if(!n.attribute||d==="attribute"&&!h){l&&((0,Fe.ensureObject)(n,"spaces","attribute"),n.spaces.attribute.before=l,l=""),u&&((0,Fe.ensureObject)(n,"raws","spaces","attribute"),n.raws.spaces.attribute.before=u,u=""),n.attribute=(n.attribute||"")+m;var k=(0,Fe.getProp)(n,"raws","attribute")||null;k&&(n.raws.attribute+=m),d="attribute"}else if(!n.value&&n.value!==""||d==="value"&&!(h||n.quoteMark)){var b=(0,Fe.unesc)(m),S=(0,Fe.getProp)(n,"raws","value")||"",z=n.value||"";n.value=z+b,n.quoteMark=null,(b!==m||S)&&((0,Fe.ensureObject)(n,"raws"),n.raws.value=(S||z)+m),d="value"}else{var H=m==="i"||m==="I";(n.value||n.value==="")&&(n.quoteMark||h)?(n.insensitive=H,(!H||m==="I")&&((0,Fe.ensureObject)(n,"raws"),n.raws.insensitiveFlag=m),d="insensitive",l&&((0,Fe.ensureObject)(n,"spaces","insensitive"),n.spaces.insensitive.before=l,l=""),u&&((0,Fe.ensureObject)(n,"raws","spaces","insensitive"),n.raws.spaces.insensitive.before=u,u="")):(n.value||n.value==="")&&(d="value",n.value+=m,n.raws.value&&(n.raws.value+=m))}h=!1;break;case V.str:if(!n.attribute||!n.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:f[I.FIELDS.START_POS]});var B=(0,Im.unescapeValue)(m),j=B.unescaped,R=B.quoteMark;n.value=j,n.quoteMark=R,d="value",(0,Fe.ensureObject)(n,"raws"),n.raws.value=m,h=!1;break;case V.equals:if(!n.attribute)return this.expected("attribute",f[I.FIELDS.START_POS],m);if(n.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:f[I.FIELDS.START_POS]});n.operator=n.operator?n.operator+m:m,d="operator",h=!1;break;case V.comment:if(d)if(h||g&&g[I.FIELDS.TYPE]===V.space||d==="insensitive"){var re=(0,Fe.getProp)(n,"spaces",d,"after")||"",ie=(0,Fe.getProp)(n,"raws","spaces",d,"after")||re;(0,Fe.ensureObject)(n,"raws","spaces",d),n.raws.spaces[d].after=ie+m}else{var Re=n[d]||"",We=(0,Fe.getProp)(n,"raws",d)||Re;(0,Fe.ensureObject)(n,"raws"),n.raws[d]=We+m}else u=u+m;break;default:return this.error('Unexpected "'+m+'" found.',{index:f[I.FIELDS.START_POS]})}a++}$o(n,"attribute"),$o(n,"namespace"),this.newNode(new Im.default(n)),this.position++},e.parseWhitespaceEquivalentTokens=function(i){i<0&&(i=this.tokens.length);var o=this.position,s=[],n="",a=void 0;do if(Lu[this.currToken[I.FIELDS.TYPE]])this.options.lossy||(n+=this.content());else if(this.currToken[I.FIELDS.TYPE]===V.comment){var l={};n&&(l.before=n,n=""),a=new $m.default({value:this.content(),source:Oo(this.currToken),sourceIndex:this.currToken[I.FIELDS.START_POS],spaces:l}),s.push(a)}while(++this.position<i);if(n){if(a)a.spaces.after=n;else if(!this.options.lossy){var u=this.tokens[o],d=this.tokens[this.position-1];s.push(new Au.default({value:"",source:Ei(u[I.FIELDS.START_LINE],u[I.FIELDS.START_COL],d[I.FIELDS.END_LINE],d[I.FIELDS.END_COL]),sourceIndex:u[I.FIELDS.START_POS],spaces:{before:n,after:""}}))}}return s},e.convertWhitespaceNodesToSpace=function(i,o){var s=this;o===void 0&&(o=!1);var n="",a="";i.forEach(function(u){var d=s.lossySpace(u.spaces.before,o),h=s.lossySpace(u.rawSpaceBefore,o);n+=d+s.lossySpace(u.spaces.after,o&&d.length===0),a+=d+u.value+s.lossySpace(u.rawSpaceAfter,o&&h.length===0)}),a===n&&(a=void 0);var l={space:n,rawSpace:a};return l},e.isNamedCombinator=function(i){return i===void 0&&(i=this.position),this.tokens[i+0]&&this.tokens[i+0][I.FIELDS.TYPE]===V.slash&&this.tokens[i+1]&&this.tokens[i+1][I.FIELDS.TYPE]===V.word&&this.tokens[i+2]&&this.tokens[i+2][I.FIELDS.TYPE]===V.slash},e.namedCombinator=function(){if(this.isNamedCombinator()){var i=this.content(this.tokens[this.position+1]),o=(0,Fe.unesc)(i).toLowerCase(),s={};o!==i&&(s.value="/"+i+"/");var n=new Ou.default({value:"/"+o+"/",source:Ei(this.currToken[I.FIELDS.START_LINE],this.currToken[I.FIELDS.START_COL],this.tokens[this.position+2][I.FIELDS.END_LINE],this.tokens[this.position+2][I.FIELDS.END_COL]),sourceIndex:this.currToken[I.FIELDS.START_POS],raws:s});return this.position=this.position+3,n}else this.unexpected()},e.combinator=function(){var i=this;if(this.content()==="|")return this.namespace();var o=this.locateNextMeaningfulToken(this.position);if(o<0||this.tokens[o][I.FIELDS.TYPE]===V.comma||this.tokens[o][I.FIELDS.TYPE]===V.closeParenthesis){var s=this.parseWhitespaceEquivalentTokens(o);if(s.length>0){var n=this.current.last;if(n){var a=this.convertWhitespaceNodesToSpace(s),l=a.space,u=a.rawSpace;u!==void 0&&(n.rawSpaceAfter+=u),n.spaces.after+=l}else s.forEach(function(S){return i.newNode(S)})}return}var d=this.currToken,h=void 0;o>this.position&&(h=this.parseWhitespaceEquivalentTokens(o));var f;if(this.isNamedCombinator()?f=this.namedCombinator():this.currToken[I.FIELDS.TYPE]===V.combinator?(f=new Ou.default({value:this.content(),source:Oo(this.currToken),sourceIndex:this.currToken[I.FIELDS.START_POS]}),this.position++):Lu[this.currToken[I.FIELDS.TYPE]]||h||this.unexpected(),f){if(h){var m=this.convertWhitespaceNodesToSpace(h),g=m.space,v=m.rawSpace;f.spaces.before=g,f.rawSpaceBefore=v}}else{var y=this.convertWhitespaceNodesToSpace(h,!0),_=y.space,w=y.rawSpace;w||(w=_);var k={},b={spaces:{}};_.endsWith(" ")&&w.endsWith(" ")?(k.before=_.slice(0,_.length-1),b.spaces.before=w.slice(0,w.length-1)):_.startsWith(" ")&&w.startsWith(" ")?(k.after=_.slice(1),b.spaces.after=w.slice(1)):b.value=w,f=new Ou.default({value:" ",source:Iu(d,this.tokens[this.position-1]),sourceIndex:d[I.FIELDS.START_POS],spaces:k,raws:b})}return this.currToken&&this.currToken[I.FIELDS.TYPE]===V.space&&(f.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(f)},e.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var i=new Eu.default({source:{start:Lm(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][I.FIELDS.START_POS]});this.current.parent.append(i),this.current=i,this.position++},e.comment=function(){var i=this.currToken;this.newNode(new $m.default({value:this.content(),source:Oo(i),sourceIndex:i[I.FIELDS.START_POS]})),this.position++},e.error=function(i,o){throw this.root.error(i,o)},e.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[I.FIELDS.START_POS]})},e.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[I.FIELDS.START_POS])},e.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[I.FIELDS.START_POS])},e.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[I.FIELDS.START_POS])},e.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[I.FIELDS.START_POS])},e.namespace=function(){var i=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[I.FIELDS.TYPE]===V.word)return this.position++,this.word(i);if(this.nextToken[I.FIELDS.TYPE]===V.asterisk)return this.position++,this.universal(i);this.unexpectedPipe()},e.nesting=function(){if(this.nextToken){var i=this.content(this.nextToken);if(i==="|"){this.position++;return}}var o=this.currToken;this.newNode(new hS.default({value:this.content(),source:Oo(o),sourceIndex:o[I.FIELDS.START_POS]})),this.position++},e.parentheses=function(){var i=this.current.last,o=1;if(this.position++,i&&i.type===fS.PSEUDO){var s=new Eu.default({source:{start:Lm(this.tokens[this.position])},sourceIndex:this.tokens[this.position][I.FIELDS.START_POS]}),n=this.current;for(i.append(s),this.current=s;this.position<this.tokens.length&&o;)this.currToken[I.FIELDS.TYPE]===V.openParenthesis&&o++,this.currToken[I.FIELDS.TYPE]===V.closeParenthesis&&o--,o?this.parse():(this.current.source.end=zm(this.currToken),this.current.parent.source.end=zm(this.currToken),this.position++);this.current=n}else{for(var a=this.currToken,l="(",u;this.position<this.tokens.length&&o;)this.currToken[I.FIELDS.TYPE]===V.openParenthesis&&o++,this.currToken[I.FIELDS.TYPE]===V.closeParenthesis&&o--,u=this.currToken,l+=this.parseParenthesisToken(this.currToken),this.position++;i?i.appendToPropertyAndEscape("value",l,l):this.newNode(new Au.default({value:l,source:Ei(a[I.FIELDS.START_LINE],a[I.FIELDS.START_COL],u[I.FIELDS.END_LINE],u[I.FIELDS.END_COL]),sourceIndex:a[I.FIELDS.START_POS]}))}if(o)return this.expected("closing parenthesis",this.currToken[I.FIELDS.START_POS])},e.pseudo=function(){for(var i=this,o="",s=this.currToken;this.currToken&&this.currToken[I.FIELDS.TYPE]===V.colon;)o+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[I.FIELDS.TYPE]===V.word)this.splitWord(!1,function(n,a){o+=n,i.newNode(new uS.default({value:o,source:Iu(s,i.currToken),sourceIndex:s[I.FIELDS.START_POS]})),a>1&&i.nextToken&&i.nextToken[I.FIELDS.TYPE]===V.openParenthesis&&i.error("Misplaced parenthesis.",{index:i.nextToken[I.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[I.FIELDS.START_POS])},e.space=function(){var i=this.content();this.position===0||this.prevToken[I.FIELDS.TYPE]===V.comma||this.prevToken[I.FIELDS.TYPE]===V.openParenthesis||this.current.nodes.every(function(o){return o.type==="comment"})?(this.spaces=this.optionalSpace(i),this.position++):this.position===this.tokens.length-1||this.nextToken[I.FIELDS.TYPE]===V.comma||this.nextToken[I.FIELDS.TYPE]===V.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(i),this.position++):this.combinator()},e.string=function(){var i=this.currToken;this.newNode(new Au.default({value:this.content(),source:Oo(i),sourceIndex:i[I.FIELDS.START_POS]})),this.position++},e.universal=function(i){var o=this.nextToken;if(o&&this.content(o)==="|")return this.position++,this.namespace();var s=this.currToken;this.newNode(new dS.default({value:this.content(),source:Oo(s),sourceIndex:s[I.FIELDS.START_POS]}),i),this.position++},e.splitWord=function(i,o){for(var s=this,n=this.nextToken,a=this.content();n&&~[V.dollar,V.caret,V.equals,V.word].indexOf(n[I.FIELDS.TYPE]);){this.position++;var l=this.content();if(a+=l,l.lastIndexOf("\\")===l.length-1){var u=this.nextToken;u&&u[I.FIELDS.TYPE]===V.space&&(a+=this.requiredSpace(this.content(u)),this.position++)}n=this.nextToken}var d=Pu(a,".").filter(function(g){var v=a[g-1]==="\\",y=/^\d+\.\d+%$/.test(a);return!v&&!y}),h=Pu(a,"#").filter(function(g){return a[g-1]!=="\\"}),f=Pu(a,"#{");f.length&&(h=h.filter(function(g){return!~f.indexOf(g)}));var m=(0,pS.default)(bS([0].concat(d,h)));m.forEach(function(g,v){var y=m[v+1]||a.length,_=a.slice(g,y);if(v===0&&o)return o.call(s,_,m.length);var w,k=s.currToken,b=k[I.FIELDS.START_POS]+m[v],S=Ei(k[1],k[2]+g,k[3],k[2]+(y-1));if(~d.indexOf(g)){var z={value:_.slice(1),source:S,sourceIndex:b};w=new aS.default($o(z,"value"))}else if(~h.indexOf(g)){var H={value:_.slice(1),source:S,sourceIndex:b};w=new lS.default($o(H,"value"))}else{var B={value:_,source:S,sourceIndex:b};$o(B,"value"),w=new cS.default(B)}s.newNode(w,i),i=null}),this.position++},e.word=function(i){var o=this.nextToken;return o&&this.content(o)==="|"?(this.position++,this.namespace()):this.splitWord(i)},e.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},e.parse=function(i){switch(this.currToken[I.FIELDS.TYPE]){case V.space:this.space();break;case V.comment:this.comment();break;case V.openParenthesis:this.parentheses();break;case V.closeParenthesis:i&&this.missingParenthesis();break;case V.openSquare:this.attribute();break;case V.dollar:case V.caret:case V.equals:case V.word:this.word();break;case V.colon:this.pseudo();break;case V.comma:this.comma();break;case V.asterisk:this.universal();break;case V.ampersand:this.nesting();break;case V.slash:case V.combinator:this.combinator();break;case V.str:this.string();break;case V.closeSquare:this.missingSquareBracket();case V.semicolon:this.missingBackslash();default:this.unexpected()}},e.expected=function(i,o,s){if(Array.isArray(i)){var n=i.pop();i=i.join(", ")+" or "+n}var a=/^[aeiou]/.test(i[0])?"an":"a";return s?this.error("Expected "+a+" "+i+', found "'+s+'" instead.',{index:o}):this.error("Expected "+a+" "+i+".",{index:o})},e.requiredSpace=function(i){return this.options.lossy?" ":i},e.optionalSpace=function(i){return this.options.lossy?"":i},e.lossySpace=function(i,o){return this.options.lossy?o?" ":"":i},e.parseParenthesisToken=function(i){var o=this.content(i);return i[I.FIELDS.TYPE]===V.space?this.requiredSpace(o):o},e.newNode=function(i,o){return o&&(/^ +$/.test(o)&&(this.options.lossy||(this.spaces=(this.spaces||"")+o),o=!0),i.namespace=o,$o(i,"namespace")),this.spaces&&(i.spaces.before=this.spaces,this.spaces=""),this.current.append(i)},e.content=function(i){return i===void 0&&(i=this.currToken),this.css.slice(i[I.FIELDS.START_POS],i[I.FIELDS.END_POS])},e.locateNextMeaningfulToken=function(i){i===void 0&&(i=this.position+1);for(var o=i;o<this.tokens.length;)if(gS[this.tokens[o][I.FIELDS.TYPE]]){o++;continue}else return o;return-1},mS(t,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),t}();tn.default=yS;Dm.exports=tn.default});var Fm=U((rn,Nm)=>{"use strict";rn.__esModule=!0;rn.default=void 0;var vS=wS(Mm());function wS(t){return t&&t.__esModule?t:{default:t}}var _S=function(){function t(r,i){this.func=r||function(){},this.funcRes=null,this.options=i}var e=t.prototype;return e._shouldUpdateSelector=function(i,o){o===void 0&&(o={});var s=Object.assign({},this.options,o);return s.updateSelector===!1?!1:typeof i!="string"},e._isLossy=function(i){i===void 0&&(i={});var o=Object.assign({},this.options,i);return o.lossless===!1},e._root=function(i,o){o===void 0&&(o={});var s=new vS.default(i,this._parseOptions(o));return s.root},e._parseOptions=function(i){return{lossy:this._isLossy(i)}},e._run=function(i,o){var s=this;return o===void 0&&(o={}),new Promise(function(n,a){try{var l=s._root(i,o);Promise.resolve(s.func(l)).then(function(u){var d=void 0;return s._shouldUpdateSelector(i,o)&&(d=l.toString(),i.selector=d),{transform:u,root:l,string:d}}).then(n,a)}catch(u){a(u);return}})},e._runSync=function(i,o){o===void 0&&(o={});var s=this._root(i,o),n=this.func(s);if(n&&typeof n.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return o.updateSelector&&typeof i!="string"&&(a=s.toString(),i.selector=a),{transform:n,root:s,string:a}},e.ast=function(i,o){return this._run(i,o).then(function(s){return s.root})},e.astSync=function(i,o){return this._runSync(i,o).root},e.transform=function(i,o){return this._run(i,o).then(function(s){return s.transform})},e.transformSync=function(i,o){return this._runSync(i,o).transform},e.process=function(i,o){return this._run(i,o).then(function(s){return s.string||s.root.toString()})},e.processSync=function(i,o){var s=this._runSync(i,o);return s.string||s.root.toString()},t}();rn.default=_S;Nm.exports=rn.default});var Um=U(Pe=>{"use strict";Pe.__esModule=!0;Pe.universal=Pe.tag=Pe.string=Pe.selector=Pe.root=Pe.pseudo=Pe.nesting=Pe.id=Pe.comment=Pe.combinator=Pe.className=Pe.attribute=void 0;var xS=Ft(yu()),kS=Ft(eu()),SS=Ft(xu()),CS=Ft(ru()),TS=Ft(ou()),ES=Ft(Su()),AS=Ft(du()),OS=Ft(Yc()),$S=Ft(Xc()),IS=Ft(cu()),PS=Ft(au()),LS=Ft(wu());function Ft(t){return t&&t.__esModule?t:{default:t}}var zS=function(e){return new xS.default(e)};Pe.attribute=zS;var RS=function(e){return new kS.default(e)};Pe.className=RS;var DS=function(e){return new SS.default(e)};Pe.combinator=DS;var MS=function(e){return new CS.default(e)};Pe.comment=MS;var NS=function(e){return new TS.default(e)};Pe.id=NS;var FS=function(e){return new ES.default(e)};Pe.nesting=FS;var US=function(e){return new AS.default(e)};Pe.pseudo=US;var BS=function(e){return new OS.default(e)};Pe.root=BS;var VS=function(e){return new $S.default(e)};Pe.selector=VS;var qS=function(e){return new IS.default(e)};Pe.string=qS;var jS=function(e){return new PS.default(e)};Pe.tag=jS;var HS=function(e){return new LS.default(e)};Pe.universal=HS});var jm=U(ve=>{"use strict";ve.__esModule=!0;ve.isComment=ve.isCombinator=ve.isClassName=ve.isAttribute=void 0;ve.isContainer=iC;ve.isIdentifier=void 0;ve.isNamespace=oC;ve.isNesting=void 0;ve.isNode=zu;ve.isPseudo=void 0;ve.isPseudoClass=rC;ve.isPseudoElement=qm;ve.isUniversal=ve.isTag=ve.isString=ve.isSelector=ve.isRoot=void 0;var Ue=at(),vt,WS=(vt={},vt[Ue.ATTRIBUTE]=!0,vt[Ue.CLASS]=!0,vt[Ue.COMBINATOR]=!0,vt[Ue.COMMENT]=!0,vt[Ue.ID]=!0,vt[Ue.NESTING]=!0,vt[Ue.PSEUDO]=!0,vt[Ue.ROOT]=!0,vt[Ue.SELECTOR]=!0,vt[Ue.STRING]=!0,vt[Ue.TAG]=!0,vt[Ue.UNIVERSAL]=!0,vt);function zu(t){return typeof t=="object"&&WS[t.type]}function Ut(t,e){return zu(e)&&e.type===t}var Bm=Ut.bind(null,Ue.ATTRIBUTE);ve.isAttribute=Bm;var GS=Ut.bind(null,Ue.CLASS);ve.isClassName=GS;var KS=Ut.bind(null,Ue.COMBINATOR);ve.isCombinator=KS;var YS=Ut.bind(null,Ue.COMMENT);ve.isComment=YS;var ZS=Ut.bind(null,Ue.ID);ve.isIdentifier=ZS;var XS=Ut.bind(null,Ue.NESTING);ve.isNesting=XS;var Ru=Ut.bind(null,Ue.PSEUDO);ve.isPseudo=Ru;var JS=Ut.bind(null,Ue.ROOT);ve.isRoot=JS;var QS=Ut.bind(null,Ue.SELECTOR);ve.isSelector=QS;var eC=Ut.bind(null,Ue.STRING);ve.isString=eC;var Vm=Ut.bind(null,Ue.TAG);ve.isTag=Vm;var tC=Ut.bind(null,Ue.UNIVERSAL);ve.isUniversal=tC;function qm(t){return Ru(t)&&t.value&&(t.value.startsWith("::")||t.value.toLowerCase()===":before"||t.value.toLowerCase()===":after"||t.value.toLowerCase()===":first-letter"||t.value.toLowerCase()===":first-line")}function rC(t){return Ru(t)&&!qm(t)}function iC(t){return!!(zu(t)&&t.walk)}function oC(t){return Bm(t)||Vm(t)}});var Hm=U(ir=>{"use strict";ir.__esModule=!0;var Du=at();Object.keys(Du).forEach(function(t){t==="default"||t==="__esModule"||t in ir&&ir[t]===Du[t]||(ir[t]=Du[t])});var Mu=Um();Object.keys(Mu).forEach(function(t){t==="default"||t==="__esModule"||t in ir&&ir[t]===Mu[t]||(ir[t]=Mu[t])});var Nu=jm();Object.keys(Nu).forEach(function(t){t==="default"||t==="__esModule"||t in ir&&ir[t]===Nu[t]||(ir[t]=Nu[t])})});var Km=U((on,Gm)=>{"use strict";on.__esModule=!0;on.default=void 0;var sC=lC(Fm()),nC=aC(Hm());function Wm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Wm=function(o){return o?r:e})(t)}function aC(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Wm(e);if(r&&r.has(t))return r.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var n=o?Object.getOwnPropertyDescriptor(t,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=t[s]}return i.default=t,r&&r.set(t,i),i}function lC(t){return t&&t.__esModule?t:{default:t}}var Fu=function(e){return new sC.default(e)};Object.assign(Fu,nC);delete Fu.__esModule;var cC=Fu;on.default=cC;Gm.exports=on.default});var tg=U((NI,ju)=>{var{AtRule:uC,Rule:Zm}=To(),Xm=Km();function Vu(t,e){let r;try{Xm(i=>{r=i}).processSync(t)}catch(i){throw t.includes(":")?e?e.error("Missed semicolon"):i:e?e.error(i.message):i}return r.at(0)}function Jm(t,e){let r=!1;return t.each(i=>{if(i.type==="nesting"){let o=e.clone({});i.value!=="&"?i.replaceWith(Vu(i.value.replace("&",o.toString()))):i.replaceWith(o),r=!0}else"nodes"in i&&i.nodes&&Jm(i,e)&&(r=!0)}),r}function Qm(t,e){let r=[];for(let i of t.selectors){let o=Vu(i,t);for(let s of e.selectors){if(!s)continue;let n=Vu(s,e);Jm(n,o)||(n.prepend(Xm.combinator({value:" "})),n.prepend(o.clone({}))),r.push(n.toString())}}return r}function Pa(t,e){if(t.prev()?.type!=="comment")return e.after(t),t;let r=t.prev(),i=/[*]\/ *\n.*{/;return t.parent.toString().match(i)?e.after(t).after(r):e.after(t),t}function dC(t){return function e(r,i,o,s=o){let n=[];if(i.each(a=>{a.type==="rule"&&o?s&&(a.selectors=Qm(r,a)):a.type==="atrule"&&a.nodes?t[a.name]?e(r,a,s):i[qu]!==!1&&n.push(a):n.push(a)}),o&&n.length){let a=r.clone({nodes:[]});for(let l of n)a.append(l);i.prepend(a)}}}function hC(t,e,r){let i=new Zm({nodes:[],selector:t});return i.append(e),r.after(i),i}function Uu(t,e,r,i=!0){return e.length?(r=hC(t,e,r),i&&(e=[]),[r,e]):[r,e]}function Ym(t,e=""){let r=t.concat(e),i={};for(let o of r)i[o.replace(/^@/,"")]=!0;return i}function pC(t){t=t.trim();let e=t.match(/^\((.*)\)$/);if(!e)return{selector:t,type:"basic"};let r=e[1].match(/^(with(?:out)?):(.+)$/);if(r){let i=r[1]==="with",o=Object.fromEntries(r[2].trim().split(/\s+/).map(n=>[n,!0]));if(i&&o.all)return{type:"noop"};let s=n=>!!o[n];return o.all?s=()=>!0:i&&(s=n=>n==="all"?!1:!o[n]),{escapes:s,type:"withrules"}}return{type:"unknown"}}function fC(t){let e=[],r=t.parent;for(;r&&r instanceof uC;)e.push(r),r=r.parent;return e}function mC(t){let e=t[eg];if(!e)t.after(t.nodes);else{let r=t.nodes,i,o=-1,s,n,a,l=fC(t);if(l.forEach((u,d)=>{if(e(u.name))i=u,o=d,n=a;else{let h=a;a=u.clone({nodes:[]}),h&&a.append(h),s=s||a}}),i?n?(s.append(r),i.after(n)):i.after(r):t.after(r),t.next()&&i){let u;l.slice(0,o+1).forEach((d,h,f)=>{let m=u;u=d.clone({nodes:[]}),m&&u.append(m);let g=[],y=(f[h-1]||t).next();for(;y;)g.push(y),y=y.next();u.append(g)}),u&&(n||r[r.length-1]).after(u)}}t.remove()}var qu=Symbol("rootRuleMergeSel"),eg=Symbol("rootRuleEscapes");function gC(t){let{params:e}=t,{escapes:r,selector:i,type:o}=pC(e);if(o==="unknown")throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);if(o==="basic"&&i){let s=new Zm({nodes:t.nodes,selector:i});t.removeAll(),t.append(s)}t[eg]=r,t[qu]=r?!r("all"):o==="noop"}var Bu=Symbol("hasRootRule");ju.exports=(t={})=>{let e=Ym(["media","supports","layer","container","starting-style"],t.bubble),r=dC(e),i=Ym(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],t.unwrap),o=(t.rootRuleName||"at-root").replace(/^@/,""),s=t.preserveEmpty;return{Once(n){n.walkAtRules(o,a=>{gC(a),n[Bu]=!0})},postcssPlugin:"postcss-nested",RootExit(n){n[Bu]&&(n.walkAtRules(o,mC),n[Bu]=!1)},Rule(n){let a=!1,l=n,u=!1,d=[];n.each(h=>{switch(h.type){case"atrule":[l,d]=Uu(n.selector,d,l),h.name===o?(a=!0,r(n,h,!0,h[qu]),l=Pa(h,l)):e[h.name]?(u=!0,a=!0,r(n,h,!0),l=Pa(h,l)):i[h.name]?(u=!0,a=!0,r(n,h,!1),l=Pa(h,l)):u&&d.push(h);break;case"decl":u&&d.push(h);break;case"rule":[l,d]=Uu(n.selector,d,l),u=!0,a=!0,h.selectors=Qm(n,h),l=Pa(h,l);break}}),Uu(n.selector,d,l,!1),a&&s!==!0&&(n.raws.semicolon=!0,n.nodes.length===0&&n.remove())}}};ju.exports.postcss=!0});function sw(t){return Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=Object.assign({},o),zh(o.value)&&!uw(o.value)&&!Array.isArray(o.value)&&(r[i].value=Object.assign({},o.value)),Array.isArray(o.value)&&(r[i].value=o.value.slice(0)),r},{})}function nw(t){return t?Object.keys(t).reduce((r,i)=>{let o=t[i];return r[i]=zh(o)&&"value"in o?o:{value:o},r[i].attribute||(r[i].attribute=cw(i)),r[i].parse="parse"in r[i]?r[i].parse:typeof r[i].value!="string",r},{}):{}}function aw(t){return Object.keys(t).reduce((r,i)=>(r[i]=t[i].value,r),{})}function lw(t,e){let r=sw(e);return Object.keys(e).forEach(o=>{let s=r[o],n=t.getAttribute(s.attribute),a=t[o];n!=null&&(s.value=s.parse?Lh(n):n),a!=null&&(s.value=Array.isArray(a)?a.slice(0):a),s.reflect&&Ph(t,s.attribute,s.value,!!s.parse),Object.defineProperty(t,o,{get(){return s.value},set(l){let u=s.value;s.value=l,s.reflect&&Ph(this,s.attribute,s.value,!!s.parse);for(let d=0,h=this.__propertyChangedCallbacks.length;d<h;d++)this.__propertyChangedCallbacks[d](o,l,u)},enumerable:!0,configurable:!0})}),r}function Lh(t){if(t)try{return JSON.parse(t)}catch{return t}}function Ph(t,e,r,i){if(r==null||r===!1)return t.removeAttribute(e);let o=i?JSON.stringify(r):r;t.__updating[e]=!0,o==="true"&&(o=""),t.setAttribute(e,o),Promise.resolve().then(()=>delete t.__updating[e])}function cw(t){return t.replace(/\.?([A-Z]+)/g,(e,r)=>"-"+r.toLowerCase()).replace("_","-").replace(/^-/,"")}function zh(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function uw(t){return Object.prototype.toString.call(t)==="[object Function]"}function dw(t){return typeof t=="function"&&t.toString().indexOf("class")===0}var sc;function hw(t,e){let r=Object.keys(e);return class extends t{static get observedAttributes(){return r.map(o=>e[o].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=lw(this,e);let o=aw(this.props),s=this.Component,n=sc;try{sc=this,this.__initialized=!0,dw(s)?new s(o,{element:this}):s(o,{element:this})}finally{sc=n}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let o=null;for(;o=this.__releaseCallbacks.pop();)o(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(o,s,n){if(this.__initialized&&!this.__updating[o]&&(o=this.lookupProp(o),o in e)){if(n==null&&!this[o])return;this[o]=e[o].parse?Lh(n):n}}lookupProp(o){if(e)return r.find(s=>o===s||o===e[s].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(o){this.__releaseCallbacks.push(o)}addPropertyChangedCallback(o){this.__propertyChangedCallbacks.push(o)}}}var D$=Symbol("element-context");function Rh(t,e={},r={}){let{BaseElement:i=HTMLElement,extension:o,customElements:s=window.customElements}=r;return n=>{if(!t)throw new Error("tag is required to register a Component");let a=s.get(t);return a?(a.prototype.Component=n,a):(a=hw(i,nw(e)),a.prototype.Component=n,a.prototype.registeredTag=t,s.define(t,a,o),a)}}var oe={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Dh(this.context.count)},getNextContextId(){return Dh(this.context.count++)}};function Dh(t){let e=String(t),r=e.length-1;return oe.context.id+(r?String.fromCharCode(96+r):"")+e}function wi(t){oe.context=t}function pw(){return{...oe.context,id:oe.getNextContextId(),count:0}}var fw=(t,e)=>t===e,N$=Symbol("solid-proxy");var mw=Symbol("solid-track"),F$=Symbol("solid-dev-component"),Jn={equals:fw},cs=null,Vh=Gh,Ot=1,us=2,qh={owned:null,cleanups:null,context:null,owner:null},nc={},ce=null,L=null,bo=null,go=null,Te=null,Ye=null,rt=null,ea=0;function _i(t,e){let r=Te,i=ce,o=t.length===0,s=e===void 0?i:e,n=o?qh:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=o?t:()=>t(()=>ut(()=>jr(n)));ce=n,Te=null;try{return Dt(a,!0)}finally{Te=r,ce=i}}function Ve(t,e){e=e?Object.assign({},Jn,e):Jn;let r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=o=>(typeof o=="function"&&(L&&L.running&&L.sources.has(r)?o=o(r.tValue):o=o(r.value)),Wh(r,o));return[Hh.bind(r),i]}function Mh(t,e,r){let i=fs(t,e,!0,Ot);bo&&L&&L.running?Ye.push(i):vo(i)}function Ee(t,e,r){let i=fs(t,e,!1,Ot);bo&&L&&L.running?Ye.push(i):vo(i)}function hs(t,e,r){Vh=kw;let i=fs(t,e,!1,Ot),o=xi&&ki(xi);o&&(i.suspense=o),(!r||!r.render)&&(i.user=!0),rt?rt.push(i):vo(i)}function we(t,e,r){r=r?Object.assign({},Jn,r):Jn;let i=fs(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,bo&&L&&L.running?(i.tState=Ot,Ye.push(i)):vo(i),Hh.bind(i)}function gw(t){return t&&typeof t=="object"&&"then"in t}function yt(t,e,r){let i,o,s;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,o=t,s=e||{}):(i=t,o=e,s=r||{});let n=null,a=nc,l=null,u=!1,d=!1,h="initialValue"in s,f=typeof i=="function"&&we(i),m=new Set,[g,v]=(s.storage||Ve)(s.initialValue),[y,_]=Ve(void 0),[w,k]=Ve(void 0,{equals:!1}),[b,S]=Ve(h?"ready":"unresolved");oe.context&&(l=oe.getNextContextId(),s.ssrLoadFrom==="initial"?a=s.initialValue:oe.load&&oe.has(l)&&(a=oe.load(l)));function z(R,re,ie,Re){return n===R&&(n=null,Re!==void 0&&(h=!0),(R===a||re===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(Re,{value:re})),a=nc,L&&R&&u?(L.promises.delete(R),u=!1,Dt(()=>{L.running=!0,H(re,ie)},!1)):H(re,ie)),re}function H(R,re){Dt(()=>{re===void 0&&v(()=>R),S(re!==void 0?"errored":h?"ready":"unresolved"),_(re);for(let ie of m.keys())ie.decrement();m.clear()},!1)}function B(){let R=xi&&ki(xi),re=g(),ie=y();if(ie!==void 0&&!n)throw ie;return Te&&!Te.user&&R&&Mh(()=>{w(),n&&(R.resolved&&L&&u?L.promises.add(n):m.has(R)||(R.increment(),m.add(R)))}),re}function j(R=!0){if(R!==!1&&d)return;d=!1;let re=f?f():i;if(u=L&&L.running,re==null||re===!1){z(n,ut(g));return}L&&n&&L.promises.delete(n);let ie=a!==nc?a:ut(()=>o(re,{value:g(),refetching:R}));return gw(ie)?(n=ie,"value"in ie?(ie.status==="success"?z(n,ie.value,void 0,re):z(n,void 0,ac(ie.value),re),ie):(d=!0,queueMicrotask(()=>d=!1),Dt(()=>{S(h?"refreshing":"pending"),k()},!1),ie.then(Re=>z(ie,Re,void 0,re),Re=>z(ie,void 0,ac(Re),re)))):(z(n,ie,void 0,re),ie)}return Object.defineProperties(B,{state:{get:()=>b()},error:{get:()=>y()},loading:{get(){let R=b();return R==="pending"||R==="refreshing"}},latest:{get(){if(!h)return B();let R=y();if(R&&!n)throw R;return g()}}}),f?Mh(()=>j(!1)):j(!1),[B,{refetch:j,mutate:v}]}function ut(t){if(!go&&Te===null)return t();let e=Te;Te=null;try{return go?go.untrack(t):t()}finally{Te=e}}function ps(t){return ce===null||(ce.cleanups===null?ce.cleanups=[t]:ce.cleanups.push(t)),t}function bw(t,e){cs||(cs=Symbol("error")),ce=fs(void 0,void 0,!0),ce.context={...ce.context,[cs]:[e]},L&&L.running&&L.sources.add(ce);try{return t()}catch(r){ta(r)}finally{ce=ce.owner}}function ee(){return ce}function yw(t){if(L&&L.running)return t(),L.done;let e=Te,r=ce;return Promise.resolve().then(()=>{Te=e,ce=r;let i;return(bo||xi)&&(i=L||(L={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(o=>i.resolve=o)),i.running=!0),Dt(t,!1),Te=ce=null,i?i.done:void 0})}var[U$,Nh]=Ve(!1);function vw(t){rt.push.apply(rt,t),t.length=0}function yo(t,e){let r=Symbol("context");return{id:r,Provider:Sw(r),defaultValue:t}}function ki(t){let e;return ce&&ce.context&&(e=ce.context[t.id])!==void 0?e:t.defaultValue}function jh(t){let e=we(t),r=we(()=>lc(e()));return r.toArray=()=>{let i=r();return Array.isArray(i)?i:i!=null?[i]:[]},r}var xi;function ww(){return xi||(xi=yo())}function Hh(){let t=L&&L.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===Ot)vo(this);else{let e=Ye;Ye=null,Dt(()=>Qn(this),!1),Ye=e}if(Te){let e=this.observers?this.observers.length:0;Te.sources?(Te.sources.push(this),Te.sourceSlots.push(e)):(Te.sources=[this],Te.sourceSlots=[e]),this.observers?(this.observers.push(Te),this.observerSlots.push(Te.sources.length-1)):(this.observers=[Te],this.observerSlots=[Te.sources.length-1])}return t&&L.sources.has(this)?this.tValue:this.value}function Wh(t,e,r){let i=L&&L.running&&L.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(i,e)){if(L){let o=L.running;(o||!r&&L.sources.has(t))&&(L.sources.add(t),t.tValue=e),o||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&Dt(()=>{for(let o=0;o<t.observers.length;o+=1){let s=t.observers[o],n=L&&L.running;n&&L.disposed.has(s)||((n?!s.tState:!s.state)&&(s.pure?Ye.push(s):rt.push(s),s.observers&&Kh(s)),n?s.tState=Ot:s.state=Ot)}if(Ye.length>1e6)throw Ye=[],new Error},!1)}return e}function vo(t){if(!t.fn)return;jr(t);let e=ea;Fh(t,L&&L.running&&L.sources.has(t)?t.tValue:t.value,e),L&&!L.running&&L.sources.has(t)&&queueMicrotask(()=>{Dt(()=>{L&&(L.running=!0),Te=ce=t,Fh(t,t.tValue,e),Te=ce=null},!1)})}function Fh(t,e,r){let i,o=ce,s=Te;Te=ce=t;try{i=t.fn(e)}catch(n){return t.pure&&(L&&L.running?(t.tState=Ot,t.tOwned&&t.tOwned.forEach(jr),t.tOwned=void 0):(t.state=Ot,t.owned&&t.owned.forEach(jr),t.owned=null)),t.updatedAt=r+1,ta(n)}finally{Te=s,ce=o}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?Wh(t,i,!0):L&&L.running&&t.pure?(L.sources.add(t),t.tValue=i):t.value=i,t.updatedAt=r)}function fs(t,e,r,i=Ot,o){let s={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ce,context:ce?ce.context:null,pure:r};if(L&&L.running&&(s.state=0,s.tState=i),ce===null||ce!==qh&&(L&&L.running&&ce.pure?ce.tOwned?ce.tOwned.push(s):ce.tOwned=[s]:ce.owned?ce.owned.push(s):ce.owned=[s]),go&&s.fn){let[n,a]=Ve(void 0,{equals:!1}),l=go.factory(s.fn,a);ps(()=>l.dispose());let u=()=>yw(a).then(()=>d.dispose()),d=go.factory(s.fn,u);s.fn=h=>(n(),L&&L.running?d.track(h):l.track(h))}return s}function ds(t){let e=L&&L.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===us)return Qn(t);if(t.suspense&&ut(t.suspense.inFallback))return t.suspense.effects.push(t);let r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<ea);){if(e&&L.disposed.has(t))return;(e?t.tState:t.state)&&r.push(t)}for(let i=r.length-1;i>=0;i--){if(t=r[i],e){let o=t,s=r[i+1];for(;(o=o.owner)&&o!==s;)if(L.disposed.has(o))return}if((e?t.tState:t.state)===Ot)vo(t);else if((e?t.tState:t.state)===us){let o=Ye;Ye=null,Dt(()=>Qn(t,r[0]),!1),Ye=o}}}function Dt(t,e){if(Ye)return t();let r=!1;e||(Ye=[]),rt?r=!0:rt=[],ea++;try{let i=t();return _w(r),i}catch(i){r||(rt=null),Ye=null,ta(i)}}function _w(t){if(Ye&&(bo&&L&&L.running?xw(Ye):Gh(Ye),Ye=null),t)return;let e;if(L){if(!L.promises.size&&!L.queue.size){let i=L.sources,o=L.disposed;rt.push.apply(rt,L.effects),e=L.resolve;for(let s of rt)"tState"in s&&(s.state=s.tState),delete s.tState;L=null,Dt(()=>{for(let s of o)jr(s);for(let s of i){if(s.value=s.tValue,s.owned)for(let n=0,a=s.owned.length;n<a;n++)jr(s.owned[n]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}Nh(!1)},!1)}else if(L.running){L.running=!1,L.effects.push.apply(L.effects,rt),rt=null,Nh(!0);return}}let r=rt;rt=null,r.length&&Dt(()=>Vh(r),!1),e&&e()}function Gh(t){for(let e=0;e<t.length;e++)ds(t[e])}function xw(t){for(let e=0;e<t.length;e++){let r=t[e],i=L.queue;i.has(r)||(i.add(r),bo(()=>{i.delete(r),Dt(()=>{L.running=!0,ds(r)},!1),L&&(L.running=!1)}))}}function kw(t){let e,r=0;for(e=0;e<t.length;e++){let i=t[e];i.user?t[r++]=i:ds(i)}if(oe.context){if(oe.count){oe.effects||(oe.effects=[]),oe.effects.push(...t.slice(0,r));return}wi()}for(oe.effects&&(oe.done||!oe.count)&&(t=[...oe.effects,...t],r+=oe.effects.length,delete oe.effects),e=0;e<r;e++)ds(t[e])}function Qn(t,e){let r=L&&L.running;r?t.tState=0:t.state=0;for(let i=0;i<t.sources.length;i+=1){let o=t.sources[i];if(o.sources){let s=r?o.tState:o.state;s===Ot?o!==e&&(!o.updatedAt||o.updatedAt<ea)&&ds(o):s===us&&Qn(o,e)}}}function Kh(t){let e=L&&L.running;for(let r=0;r<t.observers.length;r+=1){let i=t.observers[r];(e?!i.tState:!i.state)&&(e?i.tState=us:i.state=us,i.pure?Ye.push(i):rt.push(i),i.observers&&Kh(i))}}function jr(t){let e;if(t.sources)for(;t.sources.length;){let r=t.sources.pop(),i=t.sourceSlots.pop(),o=r.observers;if(o&&o.length){let s=o.pop(),n=r.observerSlots.pop();i<o.length&&(s.sourceSlots[n]=i,o[i]=s,r.observerSlots[i]=n)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)jr(t.tOwned[e]);delete t.tOwned}if(L&&L.running&&t.pure)Yh(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)jr(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}L&&L.running?t.tState=0:t.state=0}function Yh(t,e){if(e||(t.tState=0,L.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)Yh(t.owned[r])}function ac(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function Uh(t,e,r){try{for(let i of e)i(t)}catch(i){ta(i,r&&r.owner||null)}}function ta(t,e=ce){let r=cs&&e&&e.context&&e.context[cs],i=ac(t);if(!r)throw i;rt?rt.push({fn(){Uh(i,r,e)},state:Ot}):Uh(i,r,e)}function lc(t){if(typeof t=="function"&&!t.length)return lc(t());if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=lc(t[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function Sw(t,e){return function(i){let o;return Ee(()=>o=ut(()=>(ce.context={...ce.context,[t]:i.value},jh(()=>i.children))),void 0),o}}var Cw=Symbol("fallback");function Bh(t){for(let e=0;e<t.length;e++)t[e]()}function Tw(t,e,r={}){let i=[],o=[],s=[],n=0,a=e.length>1?[]:null;return ps(()=>Bh(s)),()=>{let l=t()||[],u=l.length,d,h;return l[mw],ut(()=>{let m,g,v,y,_,w,k,b,S;if(u===0)n!==0&&(Bh(s),s=[],i=[],o=[],n=0,a&&(a=[])),r.fallback&&(i=[Cw],o[0]=_i(z=>(s[0]=z,r.fallback())),n=1);else if(n===0){for(o=new Array(u),h=0;h<u;h++)i[h]=l[h],o[h]=_i(f);n=u}else{for(v=new Array(u),y=new Array(u),a&&(_=new Array(u)),w=0,k=Math.min(n,u);w<k&&i[w]===l[w];w++);for(k=n-1,b=u-1;k>=w&&b>=w&&i[k]===l[b];k--,b--)v[b]=o[k],y[b]=s[k],a&&(_[b]=a[k]);for(m=new Map,g=new Array(b+1),h=b;h>=w;h--)S=l[h],d=m.get(S),g[h]=d===void 0?-1:d,m.set(S,h);for(d=w;d<=k;d++)S=i[d],h=m.get(S),h!==void 0&&h!==-1?(v[h]=o[d],y[h]=s[d],a&&(_[h]=a[d]),h=g[h],m.set(S,h)):s[d]();for(h=w;h<u;h++)h in v?(o[h]=v[h],s[h]=y[h],a&&(a[h]=_[h],a[h](h))):o[h]=_i(f);o=o.slice(0,n=u),i=l.slice(0)}return o});function f(m){if(s[h]=m,a){let[g,v]=Ve(h);return a[h]=v,e(l[h],g)}return e(l[h])}}}var Ew=!1;function Y(t,e){if(Ew&&oe.context){let r=oe.context;wi(pw());let i=ut(()=>t(e||{}));return wi(r),i}return ut(()=>t(e||{}))}var Zh=t=>`Stale read from <${t}>.`;function ms(t){let e="fallback"in t&&{fallback:()=>t.fallback};return we(Tw(()=>t.each,t.children,e||void 0))}function Mt(t){let e=t.keyed,r=we(()=>t.when,void 0,{equals:(i,o)=>e?i===o:!i==!o});return we(()=>{let i=r();if(i){let o=t.children;return typeof o=="function"&&o.length>0?ut(()=>o(e?i:()=>{if(!ut(r))throw Zh("Show");return t.when})):o}return t.fallback},void 0,void 0)}function cc(t){let e=!1,r=(s,n)=>(e?s[1]===n[1]:!s[1]==!n[1])&&s[2]===n[2],i=jh(()=>t.children),o=we(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let n=0;n<s.length;n++){let a=s[n].when;if(a)return e=!!s[n].keyed,[n,a,s[n]]}return[-1]},void 0,{equals:r});return we(()=>{let[s,n,a]=o();if(s<0)return t.fallback;let l=a.children;return typeof l=="function"&&l.length>0?ut(()=>l(e?n:()=>{if(ut(o)[0]!==s)throw Zh("Match");return a.when})):l},void 0,void 0)}function ra(t){return t}var Xn;function uc(t){let e;oe.context&&oe.load&&(e=oe.load(oe.getContextId()));let[r,i]=Ve(e,void 0);return Xn||(Xn=new Set),Xn.add(i),ps(()=>Xn.delete(i)),we(()=>{let o;if(o=r()){let s=t.fallback;return typeof s=="function"&&s.length?ut(()=>s(o,()=>i())):s}return bw(()=>t.children,i)},void 0,void 0)}var Aw=yo();function Cr(t){let e=0,r,i,o,s,n,[a,l]=Ve(!1),u=ww(),d={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},h=ee();if(oe.context&&oe.load){let g=oe.getContextId(),v=oe.load(g);if(v&&(typeof v!="object"||v.status!=="success"?o=v:oe.gather(g)),o&&o!=="$$f"){let[y,_]=Ve(void 0,{equals:!1});s=y,o.then(()=>{if(oe.done)return _();oe.gather(g),wi(i),_(),wi()},w=>{n=w,_()})}}let f=ki(Aw);f&&(r=f.register(d.inFallback));let m;return ps(()=>m&&m()),Y(u.Provider,{value:d,get children(){return we(()=>{if(n)throw n;if(i=oe.context,s)return s(),s=void 0;i&&o==="$$f"&&wi();let g=we(()=>t.children);return we(v=>{let y=d.inFallback(),{showContent:_=!0,showFallback:w=!0}=r?r():{};if((!y||o&&o!=="$$f")&&_)return d.resolved=!0,m&&m(),m=i=o=void 0,vw(d.effects),g();if(w)return m?v:_i(k=>(m=k,i&&(wi({id:i.id+"F",count:0}),i=void 0),t.fallback),h)})})}})}var Ow=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Y$=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ow]);function $w(t,e,r){let i=r.length,o=e.length,s=i,n=0,a=0,l=e[o-1].nextSibling,u=null;for(;n<o||a<s;){if(e[n]===r[a]){n++,a++;continue}for(;e[o-1]===r[s-1];)o--,s--;if(o===n){let d=s<i?a?r[a-1].nextSibling:r[s-a]:l;for(;a<s;)t.insertBefore(r[a++],d)}else if(s===a)for(;n<o;)(!u||!u.has(e[n]))&&e[n].remove(),n++;else if(e[n]===r[s-1]&&r[a]===e[o-1]){let d=e[--o].nextSibling;t.insertBefore(r[a++],e[n++].nextSibling),t.insertBefore(r[--s],d),e[o]=r[s]}else{if(!u){u=new Map;let h=a;for(;h<s;)u.set(r[h],h++)}let d=u.get(e[n]);if(d!=null)if(a<d&&d<s){let h=n,f=1,m;for(;++h<o&&h<s&&!((m=u.get(e[h]))==null||m!==d+f);)f++;if(f>d-a){let g=e[n];for(;a<d;)t.insertBefore(r[a++],g)}else t.replaceChild(r[a++],e[n++])}else n++;else e[n++].remove()}}}var Xh="_$DX_DELEGATE";function ue(t,e,r){let i,o=()=>{let n=document.createElement("template");return n.innerHTML=t,r?n.content.firstChild.firstChild:n.content.firstChild},s=e?()=>ut(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return s.cloneNode=s,s}function Qh(t,e=window.document){let r=e[Xh]||(e[Xh]=new Set);for(let i=0,o=t.length;i<o;i++){let s=t[i];r.has(s)||(r.add(s),e.addEventListener(s,Iw))}}function hc(t,e,r){pc(t)||(r==null?t.removeAttribute(e):t.setAttribute(e,r))}function Ne(t,e){pc(t)||(e==null?t.removeAttribute("class"):t.className=e)}function qe(t,e,r,i){if(i)Array.isArray(r)?(t[`$$${e}`]=r[0],t[`$$${e}Data`]=r[1]):t[`$$${e}`]=r;else if(Array.isArray(r)){let o=r[0];t.addEventListener(e,r[0]=s=>o.call(t,r[1],s))}else t.addEventListener(e,r,typeof r!="function"&&r)}function ep(t,e,r){if(!e)return r?hc(t,"style"):e;let i=t.style;if(typeof e=="string")return i.cssText=e;typeof r=="string"&&(i.cssText=r=void 0),r||(r={}),e||(e={});let o,s;for(s in r)e[s]==null&&i.removeProperty(s),delete r[s];for(s in e)o=e[s],o!==r[s]&&(i.setProperty(s,o),r[s]=o);return r}function Q(t,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return ia(t,e,i,r);Ee(o=>ia(t,e(),o,r),i)}function pc(t){return!!oe.context&&!oe.done&&(!t||t.isConnected)}function Iw(t){if(oe.registry&&oe.events&&oe.events.find(([l,u])=>u===t))return;let e=t.target,r=`$$${t.type}`,i=t.target,o=t.currentTarget,s=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),n=()=>{let l=e[r];if(l&&!e.disabled){let u=e[`${r}Data`];if(u!==void 0?l.call(e,u,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&s(e.host),!0},a=()=>{for(;n()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),oe.registry&&!oe.done&&(oe.done=_$HY.done=!0),t.composedPath){let l=t.composedPath();s(l[0]);for(let u=0;u<l.length-2&&(e=l[u],!!n());u++){if(e._$host){e=e._$host,a();break}if(e.parentNode===o)break}}else a();s(i)}function ia(t,e,r,i,o){let s=pc(t);if(s){!r&&(r=[...t.childNodes]);let l=[];for(let u=0;u<r.length;u++){let d=r[u];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)}r=l}for(;typeof r=="function";)r=r();if(e===r)return r;let n=typeof e,a=i!==void 0;if(t=a&&r[0]&&r[0].parentNode||t,n==="string"||n==="number"){if(s||n==="number"&&(e=e.toString(),e===r))return r;if(a){let l=r[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),r=wo(t,r,i,l)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||n==="boolean"){if(s)return r;r=wo(t,r,i)}else{if(n==="function")return Ee(()=>{let l=e();for(;typeof l=="function";)l=l();r=ia(t,l,r,i)}),()=>r;if(Array.isArray(e)){let l=[],u=r&&Array.isArray(r);if(dc(l,e,r,o))return Ee(()=>r=ia(t,l,r,i,!0)),()=>r;if(s){if(!l.length)return r;if(i===void 0)return r=[...t.childNodes];let d=l[0];if(d.parentNode!==t)return r;let h=[d];for(;(d=d.nextSibling)!==i;)h.push(d);return r=h}if(l.length===0){if(r=wo(t,r,i),a)return r}else u?r.length===0?Jh(t,l,i):$w(t,r,l):(r&&wo(t),Jh(t,l));r=l}else if(e.nodeType){if(s&&e.parentNode)return r=a?[e]:e;if(Array.isArray(r)){if(a)return r=wo(t,r,i,e);wo(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function dc(t,e,r,i){let o=!1;for(let s=0,n=e.length;s<n;s++){let a=e[s],l=r&&r[t.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))o=dc(t,a,l)||o;else if(u==="function")if(i){for(;typeof a=="function";)a=a();o=dc(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else t.push(a),o=!0;else{let d=String(a);l&&l.nodeType===3&&l.data===d?t.push(l):t.push(document.createTextNode(d))}}return o}function Jh(t,e,r=null){for(let i=0,o=e.length;i<o;i++)t.insertBefore(e[i],r)}function wo(t,e,r,i){if(r===void 0)return t.textContent="";let o=i||document.createTextNode("");if(e.length){let s=!1;for(let n=e.length-1;n>=0;n--){let a=e[n];if(o!==a){let l=a.parentNode===t;!s&&!n?l?t.replaceChild(o,a):t.insertBefore(o,r):l&&a.remove()}else s=!0}}else t.insertBefore(o,r);return[o]}var Z$=Symbol();function Pw(t){let e=Object.keys(t),r={};for(let i=0;i<e.length;i++){let[o,s]=Ve(t[e[i]]);Object.defineProperty(r,e[i],{get:o,set(n){s(()=>n)}})}return r}function Lw(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let e=t.parentNode;for(;e&&!e._$owner&&!(e.assignedSlot&&e.assignedSlot._$owner);)e=e.parentNode;return e&&e.assignedSlot?e.assignedSlot._$owner:t._$owner}function zw(t){return(e,r)=>{let{element:i}=r;return _i(o=>{let s=Pw(e);i.addPropertyChangedCallback((a,l)=>s[a]=l),i.addReleaseCallback(()=>{i.renderRoot.textContent="",o()});let n=t(s,r);return Q(i.renderRoot,n)},Lw(i))}}function tp(t,e,r){return arguments.length===2&&(r=e,e={}),Rh(t,e)(zw(r))}var $e=oc(To(),1),Fc=$e.default,H5=$e.default.stringify,W5=$e.default.fromJSON,G5=$e.default.plugin,K5=$e.default.parse,Y5=$e.default.list,Z5=$e.default.document,X5=$e.default.comment,J5=$e.default.atRule,Q5=$e.default.rule,eI=$e.default.decl,tI=$e.default.root,rI=$e.default.CssSyntaxError,iI=$e.default.Declaration,oI=$e.default.Container,sI=$e.default.Processor,nI=$e.default.Document,aI=$e.default.Comment,lI=$e.default.Warning,cI=$e.default.AtRule,uI=$e.default.Result,dI=$e.default.Input,hI=$e.default.Rule,pI=$e.default.Root,fI=$e.default.Node;var Eo=oc(Bf(),1),Hc=Eo.default,kI=Eo.default.objectify,SI=Eo.default.parse,CI=Eo.default.async,TI=Eo.default.sync;var Hu=oc(tg()),sn=(...t)=>t.join(" "),La=class{globalStyles;moduleStyles;styleCounter=0;prefix;theme;constructor(e,r="styler"){this.moduleStyles=new Map,this.globalStyles=new Map,this.prefix=r,this.theme=Object.freeze(e)}generateClassName(e){return`${this.prefix}-${e}-${this.styleCounter++}`}withTheme(e){return()=>e(this.theme)}setGlobals(e){if(this.globalStyles.size)throw new Error("gobalStyles can only be set once");for(let[r,i]of Object.entries(e(this.theme)))this.globalStyles.set(r,i)}css(e){let r={};for(let[i,o]of Object.entries(e)){let s=this.generateClassName(i);this.moduleStyles.set(s,o),r[i]=s}return r}resolveGlobals(){let e={};return this.globalStyles.forEach((i,o)=>{e[o]=i}),Fc([Hu.default]).process(e,{parser:Hc}).css}resolveStyles(){let e=[];return this.moduleStyles.forEach((r,i)=>{let o=typeof r=="function"?r(this.theme):r,s={[`.${i}`]:o},n=Fc([Hu.default]).process(s,{parser:Hc});e.push(n.css)}),e.join(`
`)}},rg=(t,e,r={})=>{let i=new FontFace(t,e,r);document.fonts.add(i)};rg("Playwrite HU","url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",{"font-optical-sizing":"auto","font-weight":"400","font-style":"normal"});var bC={colorPrimary:"var(--gifo-color-primary)",colorOnPrimary:"var(--gifo-color-on-primary)",colorAccent:"var(--gifo-color-accent)",fontSizeLg:"2rem",fontSizeMd:"1.2rem",fontSizeSm:"1.0rem",breakPointSm:"600px",spaceY:"var(--sl-spacing-medium)"},Ai=new La(bC);Ai.setGlobals(t=>({":root":{"--breakpoint-sm":t.breakPointSm},"::-webkit-scrollbar":{width:"8px",height:"8px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",transition:"background-color 0.2s"},"::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},".scrollable-element":{scrollbarWidth:"thin",scrollbarColor:"rgba(0, 0, 0, 0.5) transparent"},"a, a:hover, a:visited":{textDecoration:"none",color:t.colorOnPrimary}}));var dt=Ai.css.bind(Ai),ig=Ai.withTheme.bind(Ai),og=()=>[Ai.resolveGlobals(),Ai.resolveStyles()].join(`
`);var za="0123456789abcdef",Ar=class t{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new t(e)}static fromFieldsV7(e,r,i,o){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(i)||!Number.isInteger(o)||e<0||r<0||i<0||o<0||e>0xffffffffffff||r>4095||i>1073741823||o>4294967295)throw new RangeError("invalid field value");let s=new Uint8Array(16);return s[0]=e/2**40,s[1]=e/2**32,s[2]=e/2**24,s[3]=e/2**16,s[4]=e/2**8,s[5]=e,s[6]=112|r>>>8,s[7]=r,s[8]=128|i>>>24,s[9]=i>>>16,s[10]=i>>>8,s[11]=i,s[12]=o>>>24,s[13]=o>>>16,s[14]=o>>>8,s[15]=o,new t(s)}static parse(e){var r,i,o,s;let n;switch(e.length){case 32:n=(r=/^[0-9a-f]{32}$/i.exec(e))===null||r===void 0?void 0:r[0];break;case 36:n=(i=/^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||i===void 0?void 0:i.slice(1,6).join("");break;case 38:n=(o=/^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(e))===null||o===void 0?void 0:o.slice(1,6).join("");break;case 45:n=(s=/^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||s===void 0?void 0:s.slice(1,6).join("");break;default:break}if(n){let a=new Uint8Array(16);for(let l=0;l<16;l+=4){let u=parseInt(n.substring(2*l,2*l+8),16);a[l+0]=u>>>24,a[l+1]=u>>>16,a[l+2]=u>>>8,a[l+3]=u}return new t(a)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=za.charAt(this.bytes[r]>>>4),e+=za.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toHex(){let e="";for(let r=0;r<this.bytes.length;r++)e+=za.charAt(this.bytes[r]>>>4),e+=za.charAt(this.bytes[r]&15);return e}toJSON(){return this.toString()}getVariant(){let e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new t(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){let i=this.bytes[r]-e.bytes[r];if(i!==0)return Math.sign(i)}return 0}},Ra=class{constructor(e){this.timestamp=0,this.counter=0,this.random=e??yC()}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let i=this.generateOrAbortCore(e,r);return i===void 0&&(this.timestamp=0,i=this.generateOrAbortCore(e,r)),i}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>=this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return Ar.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}generateV4(){let e=new Uint8Array(Uint32Array.of(this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32()).buffer);return e[6]=64|e[6]>>>4,e[8]=128|e[8]>>>2,Ar.ofInner(e)}},yC=()=>{if(typeof crypto<"u"&&typeof crypto.getRandomValues<"u")return new Wu;if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");return{nextUint32:()=>Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536)}},Wu=class{constructor(){this.buffer=new Uint32Array(8),this.cursor=65535}nextUint32(){return this.cursor>=this.buffer.length&&(crypto.getRandomValues(this.buffer),this.cursor=0),this.buffer[this.cursor++]}},Da;var sg=()=>(Da||(Da=new Ra)).generate();var ng=()=>(Da||(Da=new Ra)).generateV4();function ag(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}var lg=ag();var vC=Object.defineProperty,wC=(t,e)=>{for(var r in e)vC(t,r,{get:e[r],enumerable:!0})},_C=class{collectable={};listeners={};interceptors;constructor({interceptors:t}={}){this.interceptors=t??{}}subscribe(t,e,r=!1){if(this.listeners[t]||(this.listeners[t]=[]),!this.isSubscribed(t,e)&&(this.listeners[t]?.push(e),r&&this.collectable[t])){let i=this.collectable[t];this.collectable[t]=[];for(let o of i)e(...o)}}subscribeOnce(t,e=!1){return new Promise(r=>{let i=!1,o=(...s)=>{i||(i=!0,this.unSubscribe(t,o),r(s))};this.subscribe(t,o,e)})}unSubscribe(t,e){if(this.listeners[t]){let r=this.listeners[t]?.findIndex(i=>i===e);r&&this.listeners[t]?.splice(r,1)}}isSubscribed(t,e){return!!this.listeners[t]?.includes(e)}async emit(t,e,r=!1){let i=this.interceptors[t],o=i?await i(...e):e;this.listeners[t]?.length===0&&r&&(this.collectable[t]||(this.collectable[t]=[]),this.collectable[t]?.push(e));for(let s of this.listeners[t]??[])s(...o)}reset({collectable:t,listeners:e}){if(Array.isArray(t))for(let r of t)delete this.collectable[r];else typeof t=="string"?delete this.collectable[t]:t!==!1&&(this.collectable={});if(Array.isArray(e))for(let r of e)delete this.listeners[r];else typeof e=="string"?delete this.listeners[e]:e!==!1&&(this.listeners={})}scanListeners(t){let e=Object.keys(this.listeners);return t&&(e=e.filter(t)),e}},id=class{args=[];constructor(...t){this.args=t}fill(t){return[this,t]}hasDefault(){return this.args.length===1}get default(){return this.args[0]}},xC={};wC(xC,{CborBreak:()=>Fa,CborError:()=>Oi,CborFillMissing:()=>Gg,CborInvalidMajorError:()=>el,CborNumberError:()=>Zu,CborPartialDisabled:()=>Wg,CborRangeError:()=>br,Encoded:()=>od,Gap:()=>id,POW_2_53:()=>kC,POW_2_64:()=>Yu,PartiallyEncoded:()=>sd,Reader:()=>Xu,Tagged:()=>Me,Writer:()=>cn,decode:()=>Kg,encode:()=>Lo,infiniteBytes:()=>Ju,partiallyEncodeObject:()=>nd});var kC=9007199254740992,Yu=BigInt(18446744073709552e3),od=class{constructor(t){this.encoded=t}},Oe=class extends Error{},Kr=class extends Oe{name="NoActiveSocket";message="No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"};var Hg=class extends Oe{name="EngineDisconnected";message="The engine reported the connection to SurrealDB has dropped"},cg=class extends Oe{constructor(t){super(),this.response=t,this.message=`${t}`}name="UnexpectedServerResponse"},SC=class extends Oe{constructor(t){super(),this.error=t,this.message=`${t}`}name="UnexpectedConnectionError"},CC=class extends Oe{constructor(t){super(),this.engine=t}name="UnsupportedEngine";message="The engine you are trying to connect to is not supported or configured."};var Ka=class extends Oe{name="ConnectionUnavailable";message="There is no connection available at this moment."},TC=class extends Oe{name="MissingNamespaceDatabase";message="There is no namespace and/or database selected."},EC=class extends Oe{constructor(t,e,r,i){super(),this.message=t,this.status=e,this.statusText=r,this.buffer=i}name="HttpConnectionError"},De=class extends Oe{constructor(t){super(),this.message=t}name="ResponseError"},AC=class extends Oe{name="NoNamespaceSpecified";message="Please specify a namespace to use."},OC=class extends Oe{name="NoDatabaseSpecified";message="Please specify a database to use."},ug=class extends Oe{name="NoTokenReturned";message="Did not receive an authentication token."},$C=class extends Oe{name="UnsupportedVersion";version;supportedRange;constructor(t,e){super(),this.version=t,this.supportedRange=e,this.message=`The version "${t}" reported by the engine is not supported by this library, expected a version that satisfies "${e}".`}},dg=class extends Oe{constructor(t){super(),this.error=t}name="VersionRetrievalFailure";message="Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly."},Oi=class extends Oe{message;constructor(t){super(),this.message=t}},Zu=class extends Oi{name="CborNumberError"},br=class extends Oi{name="CborRangeError"},el=class extends Oi{name="CborInvalidMajorError"},Fa=class extends Oi{name="CborBreak";constructor(){super("Came across a break which was not intercepted by the decoder")}},Wg=class extends Oi{name="CborPartialDisabled";constructor(){super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled")}},Gg=class extends Oi{name="CborFillMissing";constructor(){super("Fill for a gap is missing, and gap has no default")}},cn=class{constructor(t=256){this.byteLength=t,this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf)}_chunks=[];_pos=0;_buf;_view;_byte;chunk(t){this._chunks.push([this._buf.slice(0,this._pos),t]),this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._pos=0}get chunks(){return this._chunks}get buffer(){return this._buf.slice(0,this._pos)}claim(t){let e=this._pos;if(this._pos+=t,this._pos<=this._buf.byteLength)return e;let r=this._buf.byteLength<<1;for(;r<this._pos;)r<<=1;if(r>this._buf.byteLength){let i=this._byte;this._buf=new ArrayBuffer(r),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(i)}return e}writeUint8(t){let e=this.claim(1);this._view.setUint8(e,t)}writeUint16(t){let e=this.claim(2);this._view.setUint16(e,t)}writeUint32(t){let e=this.claim(4);this._view.setUint32(e,t)}writeUint64(t){let e=this.claim(8);this._view.setBigUint64(e,t)}writeUint8Array(t){if(t.byteLength===0)return;let e=this.claim(t.byteLength);this._byte.set(t,e)}writeArrayBuffer(t){t.byteLength!==0&&this.writeUint8Array(new Uint8Array(t))}writePartiallyEncoded(t){for(let[e,r]of t.chunks)this.writeArrayBuffer(e),this.chunk(r);this.writeArrayBuffer(t.end)}writeFloat32(t){let e=this.claim(4);this._view.setFloat32(e,t)}writeFloat64(t){let e=this.claim(8);this._view.setFloat64(e,t)}writeMajor(t,e){let r=t<<5;e<24?this.writeUint8(r+Number(e)):e<256?(this.writeUint8(r+24),this.writeUint8(Number(e))):e<65536?(this.writeUint8(r+25),this.writeUint16(Number(e))):e<4294967296?(this.writeUint8(r+26),this.writeUint32(Number(e))):(this.writeUint8(r+27),this.writeUint64(BigInt(e)))}output(t,e){return t?new sd(this._chunks,this.buffer,e):this.buffer}},sd=class{constructor(t,e,r){this.chunks=t,this.end=e,this.replacer=r}build(t,e){let r=new cn,i=new Map(t);for(let[o,s]of this.chunks){let n=i.has(s)||s.hasDefault();if(!e&&!n)throw new Gg;if(r.writeArrayBuffer(o),n){let a=i.get(s)??s.default;Lo(a,{writer:r,replacer:this.replacer})}else r.chunk(s)}return r.writeArrayBuffer(this.end),r.output(!!e,this.replacer)}};function nd(t,e){return Object.fromEntries(Object.entries(t).map(([r,i])=>[r,Lo(i,{...e,partial:!0})]))}var Me=class{constructor(t,e){this.tag=t,this.value=e}},hg;function Lo(t,e={}){let r=e.writer??new cn,i=new Map(e.fills??[]);function o(s){let n=e.replacer?e.replacer(s):s;if(n===void 0)return r.writeUint8(247);if(n===null)return r.writeUint8(246);if(n===!0)return r.writeUint8(245);if(n===!1)return r.writeUint8(244);switch(typeof n){case"number":{if(Number.isInteger(n))if(n>=0&&n<=9007199254740992)r.writeMajor(0,n);else if(n<0&&n>=-9007199254740992)r.writeMajor(1,-(n+1));else throw new Zu("Number too big to be encoded");else r.writeUint8(251),r.writeFloat64(n);return}case"bigint":{if(n>=0&&n<Yu)r.writeMajor(0,n);else if(n<=0&&n>=-Yu)r.writeMajor(1,-(n+1n));else throw new Zu("BigInt too big to be encoded");return}case"string":{hg??=new TextEncoder;let a=hg.encode(n);r.writeMajor(3,a.byteLength),r.writeUint8Array(a);return}default:{if(Array.isArray(n)){r.writeMajor(4,n.length);for(let l of n)o(l);return}if(n instanceof Me){r.writeMajor(6,n.tag),o(n.value);return}if(n instanceof od){r.writeArrayBuffer(n.encoded);return}if(n instanceof id){if(i.has(n))o(i.get(n));else{if(!e.partial)throw new Wg;r.chunk(n)}return}if(n instanceof sd){let l=n.build(e.fills??[],e.partial);e.partial?r.writePartiallyEncoded(l):r.writeArrayBuffer(l);return}if(n instanceof Uint8Array||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array||n instanceof Float32Array||n instanceof Float64Array||n instanceof ArrayBuffer){let l=new Uint8Array(n);r.writeMajor(2,l.byteLength),r.writeUint8Array(l);return}let a=n instanceof Map?Array.from(n.entries()):Object.entries(n);r.writeMajor(5,a.length);for(let l of a.flat())o(l)}}}return o(t),r.output(!!e.partial,e.replacer)}var Xu=class{_buf;_view;_byte;_pos=0;constructor(t){this._buf=new ArrayBuffer(t.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(new Uint8Array(t))}read(t,e){return this._pos+=t,e}readUint8(){try{return this.read(1,this._view.getUint8(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readUint16(){try{return this.read(2,this._view.getUint16(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readUint32(){try{return this.read(4,this._view.getUint32(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readUint64(){try{return this.read(8,this._view.getBigUint64(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readFloat16(){let t=this.readUint16(),e=(t&32768)>>15,r=(t&31744)>>10,i=t&1023;return r===0?(e?-1:1)*2**-14*(i/2**10):r===31?i?Number.NaN:(e?-1:1)*Number.POSITIVE_INFINITY:(e?-1:1)*2**(r-15)*(1+i/2**10)}readFloat32(){try{return this.read(4,this._view.getFloat32(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readFloat64(){try{return this.read(8,this._view.getFloat64(this._pos))}catch(t){throw t instanceof RangeError?new br(t.message):t}}readBytes(t){let e=this._byte.length-this._pos;if(e<t)throw new br(`The argument must be between 0 and ${e}`);return this.read(t,this._byte.slice(this._pos,this._pos+t))}readMajor(){let t=this.readUint8(),e=t>>5;if(e<0||e>7)throw new el("Received invalid major type");return[e,t&31]}readMajorLength(t){if(t<=23)return t;switch(t){case 24:return this.readUint8();case 25:return this.readUint16();case 26:return this.readUint32();case 27:{let e=this.readUint64();return e>9007199254740992?e:Number(e)}}throw new br("Expected a final length")}};function Ju(t,e){let r=new cn;for(;;){let[i,o]=t.readMajor();if(i===7&&o===31)break;if(i!==e)throw new el(`Expected a resource of the same major (${e}) while processing an infinite resource`);if(o===31)throw new br("Expected a finite resource while processing an infinite resource");r.writeUint8Array(t.readBytes(Number(t.readMajorLength(o))))}return r.buffer}var pg;function Kg(t,e={}){let r=t instanceof Xu?t:new Xu(t);function i(){let[s,n]=r.readMajor();switch(s){case 0:return r.readMajorLength(n);case 1:{let a=r.readMajorLength(n);return typeof a=="bigint"?-(a+1n):-(a+1)}case 2:return n===31?Ju(r,2):r.readBytes(Number(r.readMajorLength(n))).buffer;case 3:{let a=n===31?Ju(r,3):r.readBytes(Number(r.readMajorLength(n)));return pg??=new TextDecoder,pg.decode(a)}case 4:{if(n===31){let u=[];for(;;)try{u.push(o())}catch(d){if(d instanceof Fa)break;throw d}return u}let a=r.readMajorLength(n),l=Array(a);for(let u=0;u<a;u++)l[u]=o();return l}case 5:{let a=[];if(n===31)for(;;){let l;try{l=o()}catch(d){if(d instanceof Fa)break;throw d}let u=o();a.push([l,u])}else{let l=r.readMajorLength(n);for(let u=0;u<l;u++){let d=o(),h=o();a[u]=[d,h]}}return e.map==="map"?new Map(a):Object.fromEntries(a)}case 6:{let a=r.readMajorLength(n),l=o();return new Me(a,l)}case 7:switch(n){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 25:return r.readFloat16();case 26:return r.readFloat32();case 27:return r.readFloat64();case 31:throw new Fa}}throw new el(`Unable to decode value with major tag ${s}`)}function o(){return e.replacer?e.replacer(i()):i()}return o()}function IC(t){let e=Math.floor(t.getTime()/1e3),r=t.getTime()-e*1e3;return[e,r*1e6]}function PC([t,e]){let r=new Date(0);return r.setUTCSeconds(Number(t)),r.setMilliseconds(Math.floor(Number(e)/1e6)),r}var Bt=class{},Ya=class Yg extends Bt{decimal;constructor(e){super(),this.decimal=e.toString()}equals(e){return e instanceof Yg?this.decimal===e.decimal:!1}toString(){return this.decimal}toJSON(){return this.decimal}},ad=1,Io=ad/1e3,Qu=Io/1e3,Za=1e3*ad,Xa=60*Za,Ja=60*Xa,Qa=24*Ja,ed=7*Qa,ld=new Map([["ns",Qu],["\xB5s",Io],["\u03BCs",Io],["us",Io],["ms",ad],["s",Za],["m",Xa],["h",Ja],["d",Qa],["w",ed]]),LC=Array.from(ld).reduce((t,[e,r])=>(t.set(r,e),t),new Map),zC=new RegExp(`^(\\d+)(${Array.from(ld.keys()).join("|")})`),Ua=class $t extends Bt{_milliseconds;constructor(e){super(),e instanceof $t?this._milliseconds=e._milliseconds:typeof e=="string"?this._milliseconds=$t.parseString(e):this._milliseconds=e}static fromCompact([e,r]){e=e??0,r=r??0;let i=e*1e3+r/1e6;return new $t(i)}equals(e){return e instanceof $t?this._milliseconds===e._milliseconds:!1}toCompact(){let e=Math.floor(this._milliseconds/1e3),r=Math.floor((this._milliseconds-e*1e3)*1e6);return r>0?[e,r]:e>0?[e]:[]}toString(){let e=this._milliseconds,r="";function i(o){let s=Math.floor(e/o);return s>0&&(e=e%o),s}for(let[o,s]of Array.from(LC).reverse()){let n=i(o);n>0&&(r+=`${n}${s}`)}return r}toJSON(){return this.toString()}static parseString(e){let r=0,i=e;for(;i!=="";){let o=i.match(zC);if(o){let s=Number.parseInt(o[1]),n=ld.get(o[2]);if(n===void 0)throw new Oe(`Invalid duration unit: ${o[2]}`);r+=s*n,i=i.slice(o[0].length);continue}throw new Oe("Could not match a next duration part")}return r}static nanoseconds(e){return new $t(Math.floor(e*Qu))}static microseconds(e){return new $t(Math.floor(e*Io))}static milliseconds(e){return new $t(e)}static seconds(e){return new $t(e*Za)}static minutes(e){return new $t(e*Xa)}static hours(e){return new $t(e*Ja)}static days(e){return new $t(e*Qa)}static weeks(e){return new $t(e*ed)}get microseconds(){return Math.floor(this._milliseconds/Io)}get nanoseconds(){return Math.floor(this._milliseconds/Qu)}get milliseconds(){return Math.floor(this._milliseconds)}get seconds(){return Math.floor(this._milliseconds/Za)}get minutes(){return Math.floor(this._milliseconds/Xa)}get hours(){return Math.floor(this._milliseconds/Ja)}get days(){return Math.floor(this._milliseconds/Qa)}get weeks(){return Math.floor(this._milliseconds/ed)}},td=class Zg extends Bt{constructor(e){super(),this.inner=e}equals(e){return e instanceof Zg?this.inner===e.inner:!1}toJSON(){return this.toString()}toString(){return`<future> ${this.inner}`}},Xr=class Xg extends Bt{equals(e){return e instanceof Xg?this.is(e):!1}toString(){return JSON.stringify(this.toJSON())}};function fg(t){return t instanceof Ya?Number.parseFloat(t.decimal):t}var mg=class Ba extends Xr{point;constructor(e){super(),e instanceof Ba?this.point=e.clone().point:this.point=[fg(e[0]),fg(e[1])]}toJSON(){return{type:"Point",coordinates:this.coordinates}}get coordinates(){return this.point}is(e){return e instanceof Ba?this.point[0]===e.point[0]&&this.point[1]===e.point[1]:!1}clone(){return new Ba([...this.point])}},gg=class Va extends Xr{line;constructor(e){super(),this.line=e instanceof Va?e.clone().line:e}toJSON(){return{type:"LineString",coordinates:this.coordinates}}get coordinates(){return this.line.map(e=>e.coordinates)}close(){this.line[0].is(this.line.at(-1))||this.line.push(this.line[0])}is(e){if(!(e instanceof Va)||this.line.length!==e.line.length)return!1;for(let r=0;r<this.line.length;r++)if(!this.line[r].is(e.line[r]))return!1;return!0}clone(){return new Va(this.line.map(e=>e.clone()))}},bg=class qa extends Xr{polygon;constructor(e){super(),this.polygon=e instanceof qa?e.clone().polygon:e.map(r=>{let i=r.clone();return i.close(),i})}toJSON(){return{type:"Polygon",coordinates:this.coordinates}}get coordinates(){return this.polygon.map(e=>e.coordinates)}is(e){if(!(e instanceof qa)||this.polygon.length!==e.polygon.length)return!1;for(let r=0;r<this.polygon.length;r++)if(!this.polygon[r].is(e.polygon[r]))return!1;return!0}clone(){return new qa(this.polygon.map(e=>e.clone()))}},yg=class ja extends Xr{points;constructor(e){super(),this.points=e instanceof ja?e.points:e}toJSON(){return{type:"MultiPoint",coordinates:this.coordinates}}get coordinates(){return this.points.map(e=>e.coordinates)}is(e){if(!(e instanceof ja)||this.points.length!==e.points.length)return!1;for(let r=0;r<this.points.length;r++)if(!this.points[r].is(e.points[r]))return!1;return!0}clone(){return new ja(this.points.map(e=>e.clone()))}},vg=class Ha extends Xr{lines;constructor(e){super(),this.lines=e instanceof Ha?e.lines:e}toJSON(){return{type:"MultiLineString",coordinates:this.coordinates}}get coordinates(){return this.lines.map(e=>e.coordinates)}is(e){if(!(e instanceof Ha)||this.lines.length!==e.lines.length)return!1;for(let r=0;r<this.lines.length;r++)if(!this.lines[r].is(e.lines[r]))return!1;return!0}clone(){return new Ha(this.lines.map(e=>e.clone()))}},wg=class Wa extends Xr{polygons;constructor(e){super(),this.polygons=e instanceof Wa?e.polygons:e}toJSON(){return{type:"MultiPolygon",coordinates:this.coordinates}}get coordinates(){return this.polygons.map(e=>e.coordinates)}is(e){if(!(e instanceof Wa)||this.polygons.length!==e.polygons.length)return!1;for(let r=0;r<this.polygons.length;r++)if(!this.polygons[r].is(e.polygons[r]))return!1;return!0}clone(){return new Wa(this.polygons.map(e=>e.clone()))}},_g=class Ga extends Xr{collection;constructor(e){super(),this.collection=e instanceof Ga?e.collection:e}toJSON(){return{type:"GeometryCollection",geometries:this.geometries}}get geometries(){return this.collection.map(e=>e.toJSON())}is(e){if(!(e instanceof Ga)||this.collection.length!==e.collection.length)return!1;for(let r=0;r<this.collection.length;r++)if(!this.collection[r].is(e.collection[r]))return!1;return!0}clone(){return new Ga(this.collection.map(e=>e.clone()))}};function zo(t,e){if(Object.is(t,e))return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.toString()===e.toString();if(t instanceof Bt&&e instanceof Bt)return t.equals(e);if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;let r=Reflect.ownKeys(t),i=Reflect.ownKeys(e);if(r.length!==i.length)return!1;for(let o=0;o<r.length;o++)if(!Reflect.has(e,r[o])||!zo(t[r[o]],e[r[o]]))return!1;return!0}var RC=9223372036854775807n;function cd(t){if(MC(t))return`\u27E8${t}\u27E9`;let e,r,i;for(r=0,i=t.length;r<i;r++)if(e=t.charCodeAt(r),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123)&&e!==95)return`\u27E8${t.replaceAll("\u27E9","\\\u27E9")}\u27E9`;return t}function DC(t){return t<=RC?t.toString():`\u27E8${t}\u27E9`}function MC(t){let e=t.replace("_",""),r=Number.parseInt(e);return!Number.isNaN(r)&&r.toString()===e}var Ro=class nn extends Bt{inner;constructor(e){super(),e instanceof ArrayBuffer?this.inner=Ar.ofInner(new Uint8Array(e)):e instanceof Uint8Array?this.inner=Ar.ofInner(e):e instanceof nn?this.inner=e.inner:e instanceof Ar?this.inner=e:this.inner=Ar.parse(e)}equals(e){return e instanceof nn?this.inner.equals(e.inner):!1}toString(){return this.inner.toString()}toJSON(){return this.inner.toString()}toUint8Array(){return this.inner.bytes}toBuffer(){return this.inner.bytes.buffer}static v4(){return new nn(ng())}static v7(){return new nn(sg())}},ln=class Jg extends Bt{tb;id;constructor(e,r){if(super(),typeof e!="string")throw new Oe("TB part is not valid");if(!Qg(r))throw new Oe("ID part is not valid");this.tb=e,this.id=r}equals(e){return e instanceof Jg?this.tb===e.tb&&zo(this.id,e.id):!1}toJSON(){return this.toString()}toString(){let e=cd(this.tb),r=eb(this.id);return`${e}:${r}`}},ud=class rd extends Bt{rid;constructor(e){if(super(),e instanceof rd)this.rid=e.rid;else if(e instanceof ln)this.rid=e.toString();else if(typeof e=="string")this.rid=e;else throw new Oe("String Record ID must be a string")}equals(e){return e instanceof rd?this.rid===e.rid:!1}toJSON(){return this.rid}toString(){return this.rid}};function Qg(t){if(t instanceof Ro)return!0;switch(typeof t){case"string":case"number":case"bigint":return!0;case"object":return Array.isArray(t)||t!==null;default:return!1}}function eb(t){return t instanceof Ro?`u"${t}"`:typeof t=="string"?cd(t):typeof t=="bigint"||typeof t=="number"?DC(t):Zr(t)}var Po=class tb extends Bt{tb;constructor(e){if(super(),typeof e!="string")throw new Oe("Table must be a string");this.tb=e}equals(e){return e instanceof tb?this.tb===e.tb:!1}toJSON(){return this.tb}toString(){return this.tb}};function Zr(t){if(typeof t=="string")return`s${JSON.stringify(t)}`;if(t===null)return"NULL";if(t===void 0)return"NONE";if(typeof t=="object"){if(t instanceof Date)return`d${JSON.stringify(t.toISOString())}`;if(t instanceof Ro)return`u${JSON.stringify(t.toString())}`;if(t instanceof ln||t instanceof ud)return`r${JSON.stringify(t.toString())}`;if(t instanceof Xr)return Zr(t.toJSON());if(t instanceof Ya||t instanceof Ua||t instanceof td||t instanceof an||t instanceof Po)return t.toJSON();switch(Object.getPrototypeOf(t)){case Object.prototype:{let e="{ ",r=Object.entries(t);for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${Zr(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Map.prototype:{let e="{ ",r=Array.from(t.entries());for(let[i,[o,s]]of r.entries())e+=`${JSON.stringify(o)}: ${Zr(s)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Array.prototype:return`[ ${t.map(Zr).join(", ")} ]`;case Set.prototype:return`[ ${[...new Set([...t].map(Zr))].join(", ")} ]`}}return`${t}`}var an=class rb extends Bt{constructor(e,r){super(),this.beg=e,this.end=r}equals(e){return!(e instanceof rb)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:zo(this.beg?.value,e.beg?.value)&&zo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Cg(this.beg),r=Cg(this.end);return`${e}${ob(this.beg,this.end)}${r}`}},un=class{constructor(t){this.value=t}},dn=class{constructor(t){this.value=t}},xg=class ib extends Bt{constructor(e,r,i){if(super(),this.tb=e,this.beg=r,this.end=i,typeof e!="string")throw new Oe("TB part is not valid");if(!kg(r))throw new Oe("Beg part is not valid");if(!kg(i))throw new Oe("End part is not valid")}equals(e){return!(e instanceof ib)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:this.tb===e.tb&&zo(this.beg?.value,e.beg?.value)&&zo(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=cd(this.tb),r=Sg(this.beg),i=Sg(this.end);return`${e}:${r}${ob(this.beg,this.end)}${i}`}};function ob(t,e){let r="";return t instanceof dn&&(r+=">"),r+="..",e instanceof un&&(r+="="),r}function kg(t){return t instanceof un||t instanceof dn?Qg(t.value):!0}function Sg(t){return t instanceof un||t instanceof dn?eb(t.value):""}function Cg(t){if(t===void 0)return"";let e=t.value;return t instanceof an?`(${Zr(e)})`:Zr(e)}function Tg([t,e]){function r(i){return i instanceof un?new Me(sb,i.value):i instanceof dn?new Me(nb,i.value):null}return[r(t),r(e)]}function NC(t){function e(r){if(r!==null){if(r.tag===sb)return new un(r.value);if(r.tag===nb)return new dn(r.value);throw new Oe("Invalid bound tag")}}return[e(t[0]),e(t[1])]}var FC=0,Eg=37,Ag=6,Og=7,Ma=8,UC=9,$g=10,Ig=12,BC=13,Pg=14,Lg=15,Gu=49,sb=50,nb=51,zg=88,Rg=89,Dg=90,Mg=91,Ng=92,Fg=93,Ug=94,Do={encode(t){return t instanceof Date?new Me(Ig,IC(t)):t===void 0?new Me(Ag,null):t instanceof Ro?new Me(Eg,t.toBuffer()):t instanceof Ya?new Me($g,t.toString()):t instanceof Ua?new Me(Pg,t.toCompact()):t instanceof ln?new Me(Ma,[t.tb,t.id]):t instanceof ud?new Me(Ma,t.rid):t instanceof xg?new Me(Ma,[t.tb,new Me(Gu,Tg([t.beg,t.end]))]):t instanceof Po?new Me(Og,t.tb):t instanceof td?new Me(Lg,t.inner):t instanceof an?new Me(Gu,Tg([t.beg,t.end])):t instanceof mg?new Me(zg,t.point):t instanceof gg?new Me(Rg,t.line):t instanceof bg?new Me(Dg,t.polygon):t instanceof yg?new Me(Mg,t.points):t instanceof vg?new Me(Ng,t.lines):t instanceof wg?new Me(Fg,t.polygons):t instanceof _g?new Me(Ug,t.collection):t},decode(t){if(!(t instanceof Me))return t;switch(t.tag){case FC:return new Date(t.value);case Eg:case UC:return new Ro(t.value);case Ig:return PC(t.value);case Ag:return;case $g:return new Ya(t.value);case BC:return new Ua(t.value);case Pg:return Ua.fromCompact(t.value);case Og:return new Po(t.value);case Lg:return new td(t.value);case Gu:return new an(...NC(t.value));case Ma:return t.value[1]instanceof an?new xg(t.value[0],t.value[1].beg,t.value[1].end):new ln(t.value[0],t.value[1]);case zg:return new mg(t.value);case Rg:return new gg(t.value);case Dg:return new bg(t.value);case Mg:return new yg(t.value);case Ng:return new vg(t.value);case Fg:return new wg(t.value);case Ug:return new _g(t.value)}}};Object.freeze(Do);function VC(t){return Lo(t,{replacer:Do.encode})}function qC(t){return Kg(t,{replacer:Do.decode})}var Na,jC=class{_query;_bindings;length;constructor(t,e){Na??=new TextEncoder,this._query=Na.encode(t),this._bindings=nd(e??{},{replacer:Do.encode}),this.length=Object.keys(this._bindings).length}get query(){let t=new cn(this._query.byteLength+9);return t.writeMajor(3,this._query.byteLength),t.writeUint8Array(this._query),new od(t.output(!1))}get bindings(){return this._bindings}build(t){return Lo([this.query,this.bindings],{fills:t})}append(t,...e){let r=this.length;this.length+=e.length;let i=0,o=new Map,s=e.map((u,d)=>{if(u instanceof id){let h=o.get(u);if(h!==void 0)return i++,[`bind___${h}`,u];o.set(u,d-i)}return[`bind___${r+d-i}`,u]});for(let[u,d]of s)this._bindings[u]=Lo(d,{replacer:Do.encode,partial:!0});let n=t.flatMap((u,d)=>{let h=s[d]?.[0];return[u,...h?[`$${h}`]:[]]}).join("");Na??=new TextEncoder;let a=new Uint8Array(this._query),l=Na.encode(n);return this._query=new Uint8Array(a.byteLength+l.byteLength),this._query.set(a),this._query.set(l,a.byteLength),this}};function Bg(t){let e={},r=(i,o,s)=>{if(i in t)e[o]=`${t[i]}`,delete e[i];else if(s!==!0)throw new Oe(`Key ${i} is missing from the authentication parameters`)};return"scope"in t?(e={...t},r("scope","sc"),r("namespace","ns"),r("database","db")):"variables"in t?(e={...t.variables},r("access","ac"),r("namespace","ns"),r("database","db")):(r("access","ac",!0),r("database","db",!0),r("namespace","ns",!("database"in t)),r("username","user"),r("password","pass")),e}var HC=["CREATE","UPDATE","DELETE"];function WC(t){return!(typeof t!="object"||t===null||!("id"in t&&"action"in t&&"result"in t)||!(t.id instanceof Ro)||!HC.includes(t.action)||typeof t.result!="object"||t.result===null)}var GC=5e3,dd="1.4.2",hd="3.0.0",YI=`>= ${dd} < ${hd}`;function KC(t,e=dd,r=hd){if(!YC(t,e,r))throw new $C(t,`>= ${e} < ${r}`);return!0}function YC(t,e=dd,r=hd){return e.localeCompare(t,void 0,{numeric:!0})<=0&&r.localeCompare(t,void 0,{numeric:!0})===1}async function ab(t,e){let r={"ws:":"http:","wss:":"https:","http:":"http:","https:":"https:"}[t.protocol];if(r){let i=t.pathname.slice(0,-4);t=new URL(t),t.pathname=`${i}/version`,t.protocol=r;let o=new AbortController,s=setTimeout(()=>o.abort(),e??GC),n="surrealdb-";return await fetch(t,{signal:o.signal}).then(a=>a.text()).then(a=>a.slice(n.length)).catch(a=>{throw new dg(a)}).finally(()=>{clearTimeout(s)})}throw new dg}var Ku=0;function lb(){return Ku=(Ku+1)%Number.MAX_SAFE_INTEGER,Ku.toString()}var ZC=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t.Error="error",t))(ZC||{}),XC=class{emitter;encodeCbor;decodeCbor;constructor({emitter:t,encodeCbor:e,decodeCbor:r}){this.emitter=t,this.encodeCbor=e,this.decodeCbor=r}},cb=class{context;ready;status="disconnected";connection={url:void 0,namespace:void 0,database:void 0,token:void 0};constructor(t){this.context=t}get emitter(){return this.context.emitter}get encodeCbor(){return this.context.encodeCbor}get decodeCbor(){return this.context.decodeCbor}async req_post(t,e,r){let i={"Content-Type":"application/cbor",Accept:"application/cbor",...r};this.connection.namespace&&(i["Surreal-NS"]=this.connection.namespace),this.connection.database&&(i["Surreal-DB"]=this.connection.database),this.connection.token&&(i.Authorization=`Bearer ${this.connection.token}`);let o=await fetch(`${e??this.connection.url}`,{method:"POST",headers:i,body:this.encodeCbor(t)}),s=await o.arrayBuffer();if(o.status===200)return s;let n=new TextDecoder("utf-8");throw new EC(n.decode(s),o.status,o.statusText,s)}};function Vg(t,e){if("scope"in t||"access"in t&&"variables"in t&&t.variables){if(!t.namespace){if(!e?.namespace)throw new AC;t.namespace=e.namespace}if(!t.database){if(!e?.database)throw new OC;t.database=e.database}}return t}var JC=new Set(["signin","signup","authenticate","invalidate","version","use","let","unset","query"]),qg=class extends cb{connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}};setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}version(t,e){return ab(t,e)}connect(t){return this.setStatus("connecting"),this.connection.url=t,this.setStatus("connected"),this.ready=new Promise(e=>e()),this.ready}disconnect(){return this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}},this.ready=void 0,this.setStatus("disconnected"),new Promise(t=>t())}async rpc(t){if(await this.ready,!this.connection.url)throw new Ka;if((!this.connection.namespace||!this.connection.database)&&!JC.has(t.method))throw new TC;if(t.method==="use"){let[o,s]=t.params;return o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s),{result:!0}}if(t.method==="let"){let[o,s]=t.params;return this.connection.variables[o]=s,{result:!0}}if(t.method==="unset"){let[o]=t.params;return delete this.connection.variables[o],{result:!0}}t.method==="query"&&(t.params=[t.params?.[0],{...this.connection.variables,...t.params?.[1]??{}}]);let e=lb(),r=await this.req_post({id:e,...t}),i=this.decodeCbor(r);if("result"in i)switch(t.method){case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return this.emitter.emit(`rpc-${e}`,[i]),i}get connected(){return!!this.connection.url}async export(t){if(!this.connection.url)throw new Ka;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},jg=class extends cb{pinger;socket;constructor(t){super(t),this.emitter.subscribe("disconnected",()=>this.pinger?.stop())}setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}async requireStatus(t){return this.status!==t&&await this.emitter.subscribeOnce(t),!0}version(t,e){return ab(t,e)}async connect(t){this.connection.url=t,this.setStatus("connecting");let e=new lg(t.toString(),"cbor"),r=new Promise((i,o)=>{e.addEventListener("open",()=>{this.setStatus("connected"),i()}),e.addEventListener("error",s=>{let n=new SC("detail"in s?s.detail:"error"in s?s.error:"An unexpected error occurred");this.setStatus("error",n),o(n)}),e.addEventListener("close",()=>{this.setStatus("disconnected")}),e.addEventListener("message",async({data:s})=>{try{let n=this.decodeCbor(s instanceof ArrayBuffer?s:s instanceof Blob?await s.arrayBuffer():s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength));if(typeof n=="object"&&n!=null&&Object.getPrototypeOf(n)===Object.prototype)this.handleRpcResponse(n);else throw new cg(n)}catch(n){e.dispatchEvent(new CustomEvent("error",{detail:n}))}})});return this.ready=r,await r.then(()=>{this.socket=e,this.pinger?.stop(),this.pinger=new QC(3e4),this.pinger.start(()=>this.rpc({method:"ping"}))})}async disconnect(){this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0},await this.ready?.catch(()=>{}),this.socket?.close(),this.ready=void 0,this.socket=void 0,await Promise.any([this.requireStatus("disconnected"),this.requireStatus("error")])}async rpc(t){if(await this.ready,!this.socket)throw new Ka;let e=lb(),r=this.emitter.subscribeOnce(`rpc-${e}`);this.socket.send(this.encodeCbor({id:e,...t}));let[i]=await r;if(i instanceof Hg)throw i;if("result"in i)switch(t.method){case"use":{let[o,s]=t.params;o===null&&(this.connection.namespace=void 0),s===null&&(this.connection.database=void 0),o&&(this.connection.namespace=o),s&&(this.connection.database=s);break}case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[o]=t.params;this.connection.token=o;break}case"invalidate":{this.connection.token=void 0;break}}return i}handleRpcResponse({id:t,...e}){if(t)this.emitter.emit(`rpc-${t}`,[e]);else if(e.error)this.setStatus("error",new De(e.error));else if(WC(e.result)){let{id:r,action:i,result:o}=e.result;this.emitter.emit(`live-${r}`,[i,o],!0)}else this.setStatus("error",new cg({id:t,...e}))}get connected(){return!!this.socket}async export(t){if(!this.connection.url)throw new Ka;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.protocol=e.protocol.replace("ws","http"),e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},QC=class{pinger;interval;constructor(t=3e4){this.interval=t}start(t){this.pinger=setInterval(t,this.interval)}stop(){clearInterval(this.pinger)}},ub=class{connection;ready;emitter;engines={ws:jg,wss:jg,http:qg,https:qg};constructor({engines:t}={}){this.emitter=new _C,this.emitter.subscribe("disconnected",()=>this.clean()),this.emitter.subscribe("error",()=>this.close()),t&&(this.engines={...this.engines,...t})}async connect(t,e={}){t=new URL(t),t.pathname.endsWith("/rpc")||(t.pathname.endsWith("/")||(t.pathname+="/"),t.pathname+="rpc");let r=t.protocol.slice(0,-1),i=this.engines[r];if(!i)throw new CC(r);let{prepare:o,auth:s,namespace:n,database:a}=e;await this.close();let l=new XC({emitter:this.emitter,encodeCbor:VC,decodeCbor:qC}),u=new i(l);if(e.versionCheck!==!1){let d=await u.version(t,e.versionCheckTimeout);KC(d)}return this.connection=u,this.ready=new Promise((d,h)=>u.connect(t).then(async()=>{(n||a)&&await this.use({namespace:n,database:a}),typeof s=="string"?await this.authenticate(s):s&&await this.signin(s),await o?.(this),d()}).catch(h)),await this.ready,!0}async close(){return this.clean(),await this.connection?.disconnect(),!0}clean(){let t=this.emitter.scanListeners(r=>r.startsWith("rpc-"));t.map(r=>this.emitter.emit(r,[new Hg]));let e=this.emitter.scanListeners(r=>r.startsWith("live-"));e.map(r=>this.emitter.emit(r,["CLOSE","disconnected"])),this.emitter.reset({collectable:!0,listeners:[...t,...e]})}get status(){return this.connection?.status??"disconnected"}async ping(){let{error:t}=await this.rpc("ping");if(t)throw new De(t.message);return!0}async use({namespace:t,database:e}){if(!this.connection)throw new Kr;if(t===null&&e!==null)throw new Oe("Cannot unset namespace without unsetting database");let{error:r}=await this.rpc("use",[t,e]);if(r)throw new De(r.message);return!0}async info(){await this.ready;let t=await this.rpc("info");if(t.error)throw new De(t.error.message);return t.result??void 0}async signup(t){if(!this.connection)throw new Kr;let e=Vg(t,this.connection.connection),r=Bg(e),i=await this.rpc("signup",[r]);if(i.error)throw new De(i.error.message);if(!i.result)throw new ug;return i.result}async signin(t){if(!this.connection)throw new Kr;let e=Vg(t,this.connection.connection),r=Bg(e),i=await this.rpc("signin",[r]);if(i.error)throw new De(i.error.message);if(!i.result)throw new ug;return i.result}async authenticate(t){let e=await this.rpc("authenticate",[t]);if(e.error)throw new De(e.error.message);return!0}async invalidate(){let t=await this.rpc("invalidate");if(t.error)throw new De(t.error.message);return!0}async let(t,e){let r=await this.rpc("let",[t,e]);if(r.error)throw new De(r.error.message);return!0}async unset(t){let e=await this.rpc("unset",[t]);if(e.error)throw new De(e.error.message);return!0}async live(t,e,r){await this.ready;let i=await this.rpc("live",[t,r]);if(i.error)throw new De(i.error.message);return e&&this.subscribeLive(i.result,e),i.result}async subscribeLive(t,e){if(await this.ready,!this.connection)throw new Kr;this.connection.emitter.subscribe(`live-${t}`,e,!0)}async unSubscribeLive(t,e){if(await this.ready,!this.connection)throw new Kr;this.connection.emitter.unSubscribe(`live-${t}`,e)}async kill(t){if(await this.ready,!this.connection)throw new Kr;if(Array.isArray(t)){await Promise.all(t.map(r=>this.rpc("kill",[r])));let e=t.map(r=>`live-${r}`);e.map(r=>this.emitter.emit(r,["CLOSE","killed"])),this.connection.emitter.reset({collectable:e,listeners:e})}else await this.rpc("kill",[t]),this.emitter.emit(`live-${t}`,["CLOSE","killed"]),this.connection.emitter.reset({collectable:`live-${t}`,listeners:`live-${t}`})}async query(...t){return(await this.queryRaw(...t)).map(({status:e,result:r})=>{if(e==="ERR")throw new De(r);return r})}async queryRaw(...[t,e]){let r=t instanceof jC?[t.query,nd(t.bindings,{fills:e,replacer:Do.encode})]:[t,e];await this.ready;let i=await this.rpc("query",r);if(i.error)throw new De(i.error.message);return i.result}async query_raw(...t){return this.queryRaw(...t)}async select(t){await this.ready;let e=await this.rpc("select",[t]);if(e.error)throw new De(e.error.message);return Yr(t,e.result)}async create(t,e){await this.ready;let r=await this.rpc("create",[t,e]);if(r.error)throw new De(r.error.message);return Yr(t,r.result)}async insert(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Po?[t,e]:[void 0,t],o=await this.rpc("insert",[r,i]);if(o.error)throw new De(o.error.message);return o.result}async insertRelation(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof Po?[t,e]:[void 0,t],o=await this.rpc("insert_relation",[r,i]);if(o.error)throw new De(o.error.message);return o.result}async insert_relation(t,e){return t instanceof Po||typeof t=="string"?this.insertRelation(t,e):this.insertRelation(t)}async update(t,e){await this.ready;let r=await this.rpc("update",[t,e]);if(r.error)throw new De(r.error.message);return Yr(t,r.result)}async upsert(t,e){await this.ready;let r=await this.rpc("upsert",[t,e]);if(r.error)throw new De(r.error.message);return Yr(t,r.result)}async merge(t,e){await this.ready;let r=await this.rpc("merge",[t,e]);if(r.error)throw new De(r.error.message);return Yr(t,r.result)}async patch(t,e,r){await this.ready;let i=await this.rpc("patch",[t,e,r]);if(i.error)throw new De(i.error.message);return r?i.result:Yr(t,i.result)}async delete(t){await this.ready;let e=await this.rpc("delete",[t]);if(e.error)throw new De(e.error.message);return Yr(t,e.result)}async version(){await this.ready;let t=await this.rpc("version");if(t.error)throw new De(t.error.message);return t.result}async run(t,e,r){await this.ready;let[i,o]=Array.isArray(e)?[void 0,e]:[e,r],s=await this.rpc("run",[t,i,o]);if(s.error)throw new De(s.error.message);return s.result}async relate(t,e,r,i){await this.ready;let o=await this.rpc("relate",[t,e,r,i]);if(o.error)throw new De(o.error.message);return Yr(e,o.result)}rpc(t,e){if(!this.connection)throw new Kr;return this.connection.rpc({method:t,params:e})}async export(t){if(await this.ready,!this.connection)throw new Kr;return this.connection.export(t)}};function Yr(t,e){return t instanceof ln||t instanceof ud?Array.isArray(e)?e[0]:e:Array.isArray(e)?e:[e]}var me;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function r(o){throw new Error}t.assertNever=r,t.arrayToEnum=o=>{let s={};for(let n of o)s[n]=n;return s},t.getValidEnumValues=o=>{let s=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),n={};for(let a of s)n[a]=o[a];return t.objectValues(n)},t.objectValues=o=>t.objectKeys(o).map(function(s){return o[s]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let s=[];for(let n in o)Object.prototype.hasOwnProperty.call(o,n)&&s.push(n);return s},t.find=(o,s)=>{for(let n of o)if(s(n))return n},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,s=" | "){return o.map(n=>typeof n=="string"?`'${n}'`:n).join(s)}t.joinValues=i,t.jsonStringifyReplacer=(o,s)=>typeof s=="bigint"?s.toString():s})(me||(me={}));var fd;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(fd||(fd={}));var q=me.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),$r=t=>{switch(typeof t){case"undefined":return q.undefined;case"string":return q.string;case"number":return isNaN(t)?q.nan:q.number;case"boolean":return q.boolean;case"function":return q.function;case"bigint":return q.bigint;case"symbol":return q.symbol;case"object":return Array.isArray(t)?q.array:t===null?q.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?q.promise:typeof Map<"u"&&t instanceof Map?q.map:typeof Set<"u"&&t instanceof Set?q.set:typeof Date<"u"&&t instanceof Date?q.date:q.object;default:return q.unknown}},$=me.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),e2=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),It=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){let r=e||function(s){return s.message},i={_errors:[]},o=s=>{for(let n of s.issues)if(n.code==="invalid_union")n.unionErrors.map(o);else if(n.code==="invalid_return_type")o(n.returnTypeError);else if(n.code==="invalid_arguments")o(n.argumentsError);else if(n.path.length===0)i._errors.push(r(n));else{let a=i,l=0;for(;l<n.path.length;){let u=n.path[l];l===n.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(r(n))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return o(this),i}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,me.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){let r={},i=[];for(let o of this.issues)o.path.length>0?(r[o.path[0]]=r[o.path[0]]||[],r[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}};It.create=t=>new It(t);var Fo=(t,e)=>{let r;switch(t.code){case $.invalid_type:t.received===q.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case $.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,me.jsonStringifyReplacer)}`;break;case $.unrecognized_keys:r=`Unrecognized key(s) in object: ${me.joinValues(t.keys,", ")}`;break;case $.invalid_union:r="Invalid input";break;case $.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${me.joinValues(t.options)}`;break;case $.invalid_enum_value:r=`Invalid enum value. Expected ${me.joinValues(t.options)}, received '${t.received}'`;break;case $.invalid_arguments:r="Invalid function arguments";break;case $.invalid_return_type:r="Invalid function return type";break;case $.invalid_date:r="Invalid date";break;case $.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:me.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case $.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case $.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case $.custom:r="Invalid input";break;case $.invalid_intersection_types:r="Intersection results could not be merged";break;case $.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case $.not_finite:r="Number must be finite";break;default:r=e.defaultError,me.assertNever(t)}return{message:r}},pb=Fo;function t2(t){pb=t}function tl(){return pb}var rl=t=>{let{data:e,path:r,errorMaps:i,issueData:o}=t,s=[...r,...o.path||[]],n={...o,path:s};if(o.message!==void 0)return{...o,path:s,message:o.message};let a="",l=i.filter(u=>!!u).slice().reverse();for(let u of l)a=u(n,{data:e,defaultError:a}).message;return{...o,path:s,message:a}},r2=[];function F(t,e){let r=tl(),i=rl({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===Fo?void 0:Fo].filter(o=>!!o)});t.common.issues.push(i)}var ht=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let i=[];for(let o of r){if(o.status==="aborted")return X;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){let i=[];for(let o of r){let s=await o.key,n=await o.value;i.push({key:s,value:n})}return t.mergeObjectSync(e,i)}static mergeObjectSync(e,r){let i={};for(let o of r){let{key:s,value:n}=o;if(s.status==="aborted"||n.status==="aborted")return X;s.status==="dirty"&&e.dirty(),n.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof n.value<"u"||o.alwaysSet)&&(i[s.value]=n.value)}return{status:e.value,value:i}}},X=Object.freeze({status:"aborted"}),No=t=>({status:"dirty",value:t}),ft=t=>({status:"valid",value:t}),md=t=>t.status==="aborted",gd=t=>t.status==="dirty",$i=t=>t.status==="valid",fn=t=>typeof Promise<"u"&&t instanceof Promise;function il(t,e,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(t):i?i.value:e.get(t)}function fb(t,e,r,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(t,r):o?o.value=r:e.set(t,r),r}var K;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(K||(K={}));var hn,pn,qt=class{constructor(e,r,i,o){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},db=(t,e)=>{if($i(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new It(t.common.issues);return this._error=r,this._error}}};function ne(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:i,description:o}=t;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(n,a)=>{var l,u;let{message:d}=t;return n.code==="invalid_enum_value"?{message:d??a.defaultError}:typeof a.data>"u"?{message:(l=d??i)!==null&&l!==void 0?l:a.defaultError}:n.code!=="invalid_type"?{message:a.defaultError}:{message:(u=d??r)!==null&&u!==void 0?u:a.defaultError}},description:o}}var ae=class{get description(){return this._def.description}_getType(e){return $r(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:$r(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ht,ctx:{common:e.parent.common,data:e.data,parsedType:$r(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if(fn(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){var i;let o={common:{issues:[],async:(i=r?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$r(e)},s=this._parseSync({data:e,path:o.path,parent:o});return db(o,s)}"~validate"(e){var r,i;let o={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$r(e)};if(!this["~standard"].async)try{let s=this._parseSync({data:e,path:[],parent:o});return $i(s)?{value:s.value}:{issues:o.common.issues}}catch(s){!((i=(r=s?.message)===null||r===void 0?void 0:r.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),o.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:o}).then(s=>$i(s)?{value:s.value}:{issues:o.common.issues})}async parseAsync(e,r){let i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){let i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$r(e)},o=this._parse({data:e,path:i.path,parent:i}),s=await(fn(o)?o:Promise.resolve(o));return db(i,s)}refine(e,r){let i=o=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(o):r;return this._refinement((o,s)=>{let n=e(o),a=()=>s.addIssue({code:$.custom,...i(o)});return typeof Promise<"u"&&n instanceof Promise?n.then(l=>l?!0:(a(),!1)):n?!0:(a(),!1)})}refinement(e,r){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof r=="function"?r(i,o):r),!1))}_refinement(e){return new Pt({schema:this,typeName:Z.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Vt.create(this,this._def)}nullable(){return vr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Pr.create(this)}promise(){return ei.create(this,this._def)}or(e){return Mi.create([this,e],this._def)}and(e){return Ni.create(this,e,this._def)}transform(e){return new Pt({...ne(this._def),schema:this,typeName:Z.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let r=typeof e=="function"?e:()=>e;return new qi({...ne(this._def),innerType:this,defaultValue:r,typeName:Z.ZodDefault})}brand(){return new mn({typeName:Z.ZodBranded,type:this,...ne(this._def)})}catch(e){let r=typeof e=="function"?e:()=>e;return new ji({...ne(this._def),innerType:this,catchValue:r,typeName:Z.ZodCatch})}describe(e){let r=this.constructor;return new r({...this._def,description:e})}pipe(e){return gn.create(this,e)}readonly(){return Hi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},i2=/^c[^\s-]{8,}$/i,o2=/^[0-9a-z]+$/,s2=/^[0-9A-HJKMNP-TV-Z]{26}$/i,n2=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,a2=/^[a-z0-9_-]{21}$/i,l2=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,c2=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,u2=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,d2="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",pd,h2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,p2=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,f2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,m2=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,g2=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,b2=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,mb="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",y2=new RegExp(`^${mb}$`);function gb(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function v2(t){return new RegExp(`^${gb(t)}$`)}function bb(t){let e=`${mb}T${gb(t)}`,r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function w2(t,e){return!!((e==="v4"||!e)&&h2.test(t)||(e==="v6"||!e)&&f2.test(t))}function _2(t,e){if(!l2.test(t))return!1;try{let[r]=t.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),o=JSON.parse(atob(i));return!(typeof o!="object"||o===null||!o.typ||!o.alg||e&&o.alg!==e)}catch{return!1}}function x2(t,e){return!!((e==="v4"||!e)&&p2.test(t)||(e==="v6"||!e)&&m2.test(t))}var Jr=class t extends ae{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==q.string){let s=this._getOrReturnCtx(e);return F(s,{code:$.invalid_type,expected:q.string,received:s.parsedType}),X}let i=new ht,o;for(let s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(o=this._getOrReturnCtx(e,o),F(o,{code:$.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(o=this._getOrReturnCtx(e,o),F(o,{code:$.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){let n=e.data.length>s.value,a=e.data.length<s.value;(n||a)&&(o=this._getOrReturnCtx(e,o),n?F(o,{code:$.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&F(o,{code:$.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")u2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"email",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")pd||(pd=new RegExp(d2,"u")),pd.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"emoji",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")n2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"uuid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")a2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"nanoid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")i2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"cuid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")o2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"cuid2",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")s2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"ulid",code:$.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),F(o,{validation:"url",code:$.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"regex",code:$.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?bb(s).test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?y2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?v2(s).test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{code:$.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?c2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"duration",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?w2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"ip",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="jwt"?_2(e.data,s.alg)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"jwt",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="cidr"?x2(e.data,s.version)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"cidr",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?g2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"base64",code:$.invalid_string,message:s.message}),i.dirty()):s.kind==="base64url"?b2.test(e.data)||(o=this._getOrReturnCtx(e,o),F(o,{validation:"base64url",code:$.invalid_string,message:s.message}),i.dirty()):me.assertNever(s);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(o=>e.test(o),{validation:r,code:$.invalid_string,...K.errToObj(i)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...K.errToObj(e)})}url(e){return this._addCheck({kind:"url",...K.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...K.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...K.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...K.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...K.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...K.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...K.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...K.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...K.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...K.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...K.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...K.errToObj(e)})}datetime(e){var r,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...K.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...K.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...K.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...K.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...K.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...K.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...K.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...K.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...K.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...K.errToObj(r)})}nonempty(e){return this.min(1,K.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};Jr.create=t=>{var e;return new Jr({checks:[],typeName:Z.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ne(t)})};function k2(t,e){let r=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=r>i?r:i,s=parseInt(t.toFixed(o).replace(".","")),n=parseInt(e.toFixed(o).replace(".",""));return s%n/Math.pow(10,o)}var Ii=class t extends ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==q.number){let s=this._getOrReturnCtx(e);return F(s,{code:$.invalid_type,expected:q.number,received:s.parsedType}),X}let i,o=new ht;for(let s of this._def.checks)s.kind==="int"?me.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),F(i,{code:$.invalid_type,expected:"integer",received:"float",message:s.message}),o.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),o.dirty()):s.kind==="multipleOf"?k2(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),F(i,{code:$.not_finite,message:s.message}),o.dirty()):me.assertNever(s);return{status:o.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,K.toString(r))}gt(e,r){return this.setLimit("min",e,!1,K.toString(r))}lte(e,r){return this.setLimit("max",e,!0,K.toString(r))}lt(e,r){return this.setLimit("max",e,!1,K.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:K.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:K.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:K.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:K.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:K.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:K.toString(e)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&me.isInteger(e.value))}get isFinite(){let e=null,r=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}};Ii.create=t=>new Ii({checks:[],typeName:Z.ZodNumber,coerce:t?.coerce||!1,...ne(t)});var Pi=class t extends ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==q.bigint)return this._getInvalidInput(e);let i,o=new ht;for(let s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),o.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),F(i,{code:$.not_multiple_of,multipleOf:s.value,message:s.message}),o.dirty()):me.assertNever(s);return{status:o.value,value:e.data}}_getInvalidInput(e){let r=this._getOrReturnCtx(e);return F(r,{code:$.invalid_type,expected:q.bigint,received:r.parsedType}),X}gte(e,r){return this.setLimit("min",e,!0,K.toString(r))}gt(e,r){return this.setLimit("min",e,!1,K.toString(r))}lte(e,r){return this.setLimit("max",e,!0,K.toString(r))}lt(e,r){return this.setLimit("max",e,!1,K.toString(r))}setLimit(e,r,i,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:K.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:K.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(r)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};Pi.create=t=>{var e;return new Pi({checks:[],typeName:Z.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...ne(t)})};var Li=class extends ae{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==q.boolean){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.boolean,received:i.parsedType}),X}return ft(e.data)}};Li.create=t=>new Li({typeName:Z.ZodBoolean,coerce:t?.coerce||!1,...ne(t)});var zi=class t extends ae{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==q.date){let s=this._getOrReturnCtx(e);return F(s,{code:$.invalid_type,expected:q.date,received:s.parsedType}),X}if(isNaN(e.data.getTime())){let s=this._getOrReturnCtx(e);return F(s,{code:$.invalid_date}),X}let i=new ht,o;for(let s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(o=this._getOrReturnCtx(e,o),F(o,{code:$.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(o=this._getOrReturnCtx(e,o),F(o,{code:$.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):me.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:K.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:K.toString(r)})}get minDate(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}};zi.create=t=>new zi({checks:[],coerce:t?.coerce||!1,typeName:Z.ZodDate,...ne(t)});var Uo=class extends ae{_parse(e){if(this._getType(e)!==q.symbol){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.symbol,received:i.parsedType}),X}return ft(e.data)}};Uo.create=t=>new Uo({typeName:Z.ZodSymbol,...ne(t)});var Ri=class extends ae{_parse(e){if(this._getType(e)!==q.undefined){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.undefined,received:i.parsedType}),X}return ft(e.data)}};Ri.create=t=>new Ri({typeName:Z.ZodUndefined,...ne(t)});var Di=class extends ae{_parse(e){if(this._getType(e)!==q.null){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.null,received:i.parsedType}),X}return ft(e.data)}};Di.create=t=>new Di({typeName:Z.ZodNull,...ne(t)});var Qr=class extends ae{constructor(){super(...arguments),this._any=!0}_parse(e){return ft(e.data)}};Qr.create=t=>new Qr({typeName:Z.ZodAny,...ne(t)});var Ir=class extends ae{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ft(e.data)}};Ir.create=t=>new Ir({typeName:Z.ZodUnknown,...ne(t)});var or=class extends ae{_parse(e){let r=this._getOrReturnCtx(e);return F(r,{code:$.invalid_type,expected:q.never,received:r.parsedType}),X}};or.create=t=>new or({typeName:Z.ZodNever,...ne(t)});var Bo=class extends ae{_parse(e){if(this._getType(e)!==q.undefined){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.void,received:i.parsedType}),X}return ft(e.data)}};Bo.create=t=>new Bo({typeName:Z.ZodVoid,...ne(t)});var Pr=class t extends ae{_parse(e){let{ctx:r,status:i}=this._processInputParams(e),o=this._def;if(r.parsedType!==q.array)return F(r,{code:$.invalid_type,expected:q.array,received:r.parsedType}),X;if(o.exactLength!==null){let n=r.data.length>o.exactLength.value,a=r.data.length<o.exactLength.value;(n||a)&&(F(r,{code:n?$.too_big:$.too_small,minimum:a?o.exactLength.value:void 0,maximum:n?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&r.data.length<o.minLength.value&&(F(r,{code:$.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&r.data.length>o.maxLength.value&&(F(r,{code:$.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((n,a)=>o.type._parseAsync(new qt(r,n,r.path,a)))).then(n=>ht.mergeArray(i,n));let s=[...r.data].map((n,a)=>o.type._parseSync(new qt(r,n,r.path,a)));return ht.mergeArray(i,s)}get element(){return this._def.type}min(e,r){return new t({...this._def,minLength:{value:e,message:K.toString(r)}})}max(e,r){return new t({...this._def,maxLength:{value:e,message:K.toString(r)}})}length(e,r){return new t({...this._def,exactLength:{value:e,message:K.toString(r)}})}nonempty(e){return this.min(1,e)}};Pr.create=(t,e)=>new Pr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Z.ZodArray,...ne(e)});function Mo(t){if(t instanceof wt){let e={};for(let r in t.shape){let i=t.shape[r];e[r]=Vt.create(Mo(i))}return new wt({...t._def,shape:()=>e})}else return t instanceof Pr?new Pr({...t._def,type:Mo(t.element)}):t instanceof Vt?Vt.create(Mo(t.unwrap())):t instanceof vr?vr.create(Mo(t.unwrap())):t instanceof yr?yr.create(t.items.map(e=>Mo(e))):t}var wt=class t extends ae{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),r=me.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==q.object){let u=this._getOrReturnCtx(e);return F(u,{code:$.invalid_type,expected:q.object,received:u.parsedType}),X}let{status:i,ctx:o}=this._processInputParams(e),{shape:s,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof or&&this._def.unknownKeys==="strip"))for(let u in o.data)n.includes(u)||a.push(u);let l=[];for(let u of n){let d=s[u],h=o.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new qt(o,h,o.path,u)),alwaysSet:u in o.data})}if(this._def.catchall instanceof or){let u=this._def.unknownKeys;if(u==="passthrough")for(let d of a)l.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(u==="strict")a.length>0&&(F(o,{code:$.unrecognized_keys,keys:a}),i.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let u=this._def.catchall;for(let d of a){let h=o.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new qt(o,h,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let u=[];for(let d of l){let h=await d.key,f=await d.value;u.push({key:h,value:f,alwaysSet:d.alwaysSet})}return u}).then(u=>ht.mergeObjectSync(i,u)):ht.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return K.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{var o,s,n,a;let l=(n=(s=(o=this._def).errorMap)===null||s===void 0?void 0:s.call(o,r,i).message)!==null&&n!==void 0?n:i.defaultError;return r.code==="unrecognized_keys"?{message:(a=K.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Z.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let r={};return me.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}omit(e){let r={};return me.objectKeys(this.shape).forEach(i=>{e[i]||(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}deepPartial(){return Mo(this)}partial(e){let r={};return me.objectKeys(this.shape).forEach(i=>{let o=this.shape[i];e&&!e[i]?r[i]=o:r[i]=o.optional()}),new t({...this._def,shape:()=>r})}required(e){let r={};return me.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])r[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Vt;)s=s._def.innerType;r[i]=s}}),new t({...this._def,shape:()=>r})}keyof(){return yb(me.objectKeys(this.shape))}};wt.create=(t,e)=>new wt({shape:()=>t,unknownKeys:"strip",catchall:or.create(),typeName:Z.ZodObject,...ne(e)});wt.strictCreate=(t,e)=>new wt({shape:()=>t,unknownKeys:"strict",catchall:or.create(),typeName:Z.ZodObject,...ne(e)});wt.lazycreate=(t,e)=>new wt({shape:t,unknownKeys:"strip",catchall:or.create(),typeName:Z.ZodObject,...ne(e)});var Mi=class extends ae{_parse(e){let{ctx:r}=this._processInputParams(e),i=this._def.options;function o(s){for(let a of s)if(a.result.status==="valid")return a.result;for(let a of s)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;let n=s.map(a=>new It(a.ctx.common.issues));return F(r,{code:$.invalid_union,unionErrors:n}),X}if(r.common.async)return Promise.all(i.map(async s=>{let n={...r,common:{...r.common,issues:[]},parent:null};return{result:await s._parseAsync({data:r.data,path:r.path,parent:n}),ctx:n}})).then(o);{let s,n=[];for(let l of i){let u={...r,common:{...r.common,issues:[]},parent:null},d=l._parseSync({data:r.data,path:r.path,parent:u});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:u}),u.common.issues.length&&n.push(u.common.issues)}if(s)return r.common.issues.push(...s.ctx.common.issues),s.result;let a=n.map(l=>new It(l));return F(r,{code:$.invalid_union,unionErrors:a}),X}}get options(){return this._def.options}};Mi.create=(t,e)=>new Mi({options:t,typeName:Z.ZodUnion,...ne(e)});var Or=t=>t instanceof Fi?Or(t.schema):t instanceof Pt?Or(t.innerType()):t instanceof Ui?[t.value]:t instanceof Bi?t.options:t instanceof Vi?me.objectValues(t.enum):t instanceof qi?Or(t._def.innerType):t instanceof Ri?[void 0]:t instanceof Di?[null]:t instanceof Vt?[void 0,...Or(t.unwrap())]:t instanceof vr?[null,...Or(t.unwrap())]:t instanceof mn||t instanceof Hi?Or(t.unwrap()):t instanceof ji?Or(t._def.innerType):[],ol=class t extends ae{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.object)return F(r,{code:$.invalid_type,expected:q.object,received:r.parsedType}),X;let i=this.discriminator,o=r.data[i],s=this.optionsMap.get(o);return s?r.common.async?s._parseAsync({data:r.data,path:r.path,parent:r}):s._parseSync({data:r.data,path:r.path,parent:r}):(F(r,{code:$.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),X)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,i){let o=new Map;for(let s of r){let n=Or(s.shape[e]);if(!n.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of n){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,s)}}return new t({typeName:Z.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:o,...ne(i)})}};function bd(t,e){let r=$r(t),i=$r(e);if(t===e)return{valid:!0,data:t};if(r===q.object&&i===q.object){let o=me.objectKeys(e),s=me.objectKeys(t).filter(a=>o.indexOf(a)!==-1),n={...t,...e};for(let a of s){let l=bd(t[a],e[a]);if(!l.valid)return{valid:!1};n[a]=l.data}return{valid:!0,data:n}}else if(r===q.array&&i===q.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let s=0;s<t.length;s++){let n=t[s],a=e[s],l=bd(n,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return r===q.date&&i===q.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var Ni=class extends ae{_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=(s,n)=>{if(md(s)||md(n))return X;let a=bd(s.value,n.value);return a.valid?((gd(s)||gd(n))&&r.dirty(),{status:r.value,value:a.data}):(F(i,{code:$.invalid_intersection_types}),X)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,n])=>o(s,n)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}};Ni.create=(t,e,r)=>new Ni({left:t,right:e,typeName:Z.ZodIntersection,...ne(r)});var yr=class t extends ae{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.array)return F(i,{code:$.invalid_type,expected:q.array,received:i.parsedType}),X;if(i.data.length<this._def.items.length)return F(i,{code:$.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),X;!this._def.rest&&i.data.length>this._def.items.length&&(F(i,{code:$.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());let s=[...i.data].map((n,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new qt(i,n,i.path,a)):null}).filter(n=>!!n);return i.common.async?Promise.all(s).then(n=>ht.mergeArray(r,n)):ht.mergeArray(r,s)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};yr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yr({items:t,typeName:Z.ZodTuple,rest:null,...ne(e)})};var sl=class t extends ae{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.object)return F(i,{code:$.invalid_type,expected:q.object,received:i.parsedType}),X;let o=[],s=this._def.keyType,n=this._def.valueType;for(let a in i.data)o.push({key:s._parse(new qt(i,a,i.path,a)),value:n._parse(new qt(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?ht.mergeObjectAsync(r,o):ht.mergeObjectSync(r,o)}get element(){return this._def.valueType}static create(e,r,i){return r instanceof ae?new t({keyType:e,valueType:r,typeName:Z.ZodRecord,...ne(i)}):new t({keyType:Jr.create(),valueType:e,typeName:Z.ZodRecord,...ne(r)})}},Vo=class extends ae{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.map)return F(i,{code:$.invalid_type,expected:q.map,received:i.parsedType}),X;let o=this._def.keyType,s=this._def.valueType,n=[...i.data.entries()].map(([a,l],u)=>({key:o._parse(new qt(i,a,i.path,[u,"key"])),value:s._parse(new qt(i,l,i.path,[u,"value"]))}));if(i.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of n){let u=await l.key,d=await l.value;if(u.status==="aborted"||d.status==="aborted")return X;(u.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(u.value,d.value)}return{status:r.value,value:a}})}else{let a=new Map;for(let l of n){let u=l.key,d=l.value;if(u.status==="aborted"||d.status==="aborted")return X;(u.status==="dirty"||d.status==="dirty")&&r.dirty(),a.set(u.value,d.value)}return{status:r.value,value:a}}}};Vo.create=(t,e,r)=>new Vo({valueType:e,keyType:t,typeName:Z.ZodMap,...ne(r)});var qo=class t extends ae{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==q.set)return F(i,{code:$.invalid_type,expected:q.set,received:i.parsedType}),X;let o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(F(i,{code:$.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),r.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(F(i,{code:$.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),r.dirty());let s=this._def.valueType;function n(l){let u=new Set;for(let d of l){if(d.status==="aborted")return X;d.status==="dirty"&&r.dirty(),u.add(d.value)}return{status:r.value,value:u}}let a=[...i.data.values()].map((l,u)=>s._parse(new qt(i,l,i.path,u)));return i.common.async?Promise.all(a).then(l=>n(l)):n(a)}min(e,r){return new t({...this._def,minSize:{value:e,message:K.toString(r)}})}max(e,r){return new t({...this._def,maxSize:{value:e,message:K.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}};qo.create=(t,e)=>new qo({valueType:t,minSize:null,maxSize:null,typeName:Z.ZodSet,...ne(e)});var nl=class t extends ae{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.function)return F(r,{code:$.invalid_type,expected:q.function,received:r.parsedType}),X;function i(a,l){return rl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,tl(),Fo].filter(u=>!!u),issueData:{code:$.invalid_arguments,argumentsError:l}})}function o(a,l){return rl({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,tl(),Fo].filter(u=>!!u),issueData:{code:$.invalid_return_type,returnTypeError:l}})}let s={errorMap:r.common.contextualErrorMap},n=r.data;if(this._def.returns instanceof ei){let a=this;return ft(async function(...l){let u=new It([]),d=await a._def.args.parseAsync(l,s).catch(m=>{throw u.addIssue(i(l,m)),u}),h=await Reflect.apply(n,this,d);return await a._def.returns._def.type.parseAsync(h,s).catch(m=>{throw u.addIssue(o(h,m)),u})})}else{let a=this;return ft(function(...l){let u=a._def.args.safeParse(l,s);if(!u.success)throw new It([i(l,u.error)]);let d=Reflect.apply(n,this,u.data),h=a._def.returns.safeParse(d,s);if(!h.success)throw new It([o(d,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:yr.create(e).rest(Ir.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,i){return new t({args:e||yr.create([]).rest(Ir.create()),returns:r||Ir.create(),typeName:Z.ZodFunction,...ne(i)})}},Fi=class extends ae{get schema(){return this._def.getter()}_parse(e){let{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}};Fi.create=(t,e)=>new Fi({getter:t,typeName:Z.ZodLazy,...ne(e)});var Ui=class extends ae{_parse(e){if(e.data!==this._def.value){let r=this._getOrReturnCtx(e);return F(r,{received:r.data,code:$.invalid_literal,expected:this._def.value}),X}return{status:"valid",value:e.data}}get value(){return this._def.value}};Ui.create=(t,e)=>new Ui({value:t,typeName:Z.ZodLiteral,...ne(e)});function yb(t,e){return new Bi({values:t,typeName:Z.ZodEnum,...ne(e)})}var Bi=class t extends ae{constructor(){super(...arguments),hn.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let r=this._getOrReturnCtx(e),i=this._def.values;return F(r,{expected:me.joinValues(i),received:r.parsedType,code:$.invalid_type}),X}if(il(this,hn,"f")||fb(this,hn,new Set(this._def.values),"f"),!il(this,hn,"f").has(e.data)){let r=this._getOrReturnCtx(e),i=this._def.values;return F(r,{received:r.data,code:$.invalid_enum_value,options:i}),X}return ft(e.data)}get options(){return this._def.values}get enum(){let e={};for(let r of this._def.values)e[r]=r;return e}get Values(){let e={};for(let r of this._def.values)e[r]=r;return e}get Enum(){let e={};for(let r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return t.create(e,{...this._def,...r})}exclude(e,r=this._def){return t.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}};hn=new WeakMap;Bi.create=yb;var Vi=class extends ae{constructor(){super(...arguments),pn.set(this,void 0)}_parse(e){let r=me.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==q.string&&i.parsedType!==q.number){let o=me.objectValues(r);return F(i,{expected:me.joinValues(o),received:i.parsedType,code:$.invalid_type}),X}if(il(this,pn,"f")||fb(this,pn,new Set(me.getValidEnumValues(this._def.values)),"f"),!il(this,pn,"f").has(e.data)){let o=me.objectValues(r);return F(i,{received:i.data,code:$.invalid_enum_value,options:o}),X}return ft(e.data)}get enum(){return this._def.values}};pn=new WeakMap;Vi.create=(t,e)=>new Vi({values:t,typeName:Z.ZodNativeEnum,...ne(e)});var ei=class extends ae{unwrap(){return this._def.type}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==q.promise&&r.common.async===!1)return F(r,{code:$.invalid_type,expected:q.promise,received:r.parsedType}),X;let i=r.parsedType===q.promise?r.data:Promise.resolve(r.data);return ft(i.then(o=>this._def.type.parseAsync(o,{path:r.path,errorMap:r.common.contextualErrorMap})))}};ei.create=(t,e)=>new ei({type:t,typeName:Z.ZodPromise,...ne(e)});var Pt=class extends ae{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:r,ctx:i}=this._processInputParams(e),o=this._def.effect||null,s={addIssue:n=>{F(i,n),n.fatal?r.abort():r.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),o.type==="preprocess"){let n=o.transform(i.data,s);if(i.common.async)return Promise.resolve(n).then(async a=>{if(r.value==="aborted")return X;let l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?X:l.status==="dirty"||r.value==="dirty"?No(l.value):l});{if(r.value==="aborted")return X;let a=this._def.schema._parseSync({data:n,path:i.path,parent:i});return a.status==="aborted"?X:a.status==="dirty"||r.value==="dirty"?No(a.value):a}}if(o.type==="refinement"){let n=a=>{let l=o.refinement(a,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){let a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?X:(a.status==="dirty"&&r.dirty(),n(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?X:(a.status==="dirty"&&r.dirty(),n(a.value).then(()=>({status:r.value,value:a.value}))))}if(o.type==="transform")if(i.common.async===!1){let n=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!$i(n))return n;let a=o.transform(n.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(n=>$i(n)?Promise.resolve(o.transform(n.value,s)).then(a=>({status:r.value,value:a})):n);me.assertNever(o)}};Pt.create=(t,e,r)=>new Pt({schema:t,typeName:Z.ZodEffects,effect:e,...ne(r)});Pt.createWithPreprocess=(t,e,r)=>new Pt({schema:e,effect:{type:"preprocess",transform:t},typeName:Z.ZodEffects,...ne(r)});var Vt=class extends ae{_parse(e){return this._getType(e)===q.undefined?ft(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Vt.create=(t,e)=>new Vt({innerType:t,typeName:Z.ZodOptional,...ne(e)});var vr=class extends ae{_parse(e){return this._getType(e)===q.null?ft(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};vr.create=(t,e)=>new vr({innerType:t,typeName:Z.ZodNullable,...ne(e)});var qi=class extends ae{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return r.parsedType===q.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}};qi.create=(t,e)=>new qi({innerType:t,typeName:Z.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ne(e)});var ji=class extends ae{_parse(e){let{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return fn(o)?o.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new It(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new It(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}};ji.create=(t,e)=>new ji({innerType:t,typeName:Z.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ne(e)});var jo=class extends ae{_parse(e){if(this._getType(e)!==q.nan){let i=this._getOrReturnCtx(e);return F(i,{code:$.invalid_type,expected:q.nan,received:i.parsedType}),X}return{status:"valid",value:e.data}}};jo.create=t=>new jo({typeName:Z.ZodNaN,...ne(t)});var S2=Symbol("zod_brand"),mn=class extends ae{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}},gn=class t extends ae{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{let s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?X:s.status==="dirty"?(r.dirty(),No(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{let o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?X:o.status==="dirty"?(r.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,r){return new t({in:e,out:r,typeName:Z.ZodPipeline})}},Hi=class extends ae{_parse(e){let r=this._def.innerType._parse(e),i=o=>($i(o)&&(o.value=Object.freeze(o.value)),o);return fn(r)?r.then(o=>i(o)):i(r)}unwrap(){return this._def.innerType}};Hi.create=(t,e)=>new Hi({innerType:t,typeName:Z.ZodReadonly,...ne(e)});function vb(t,e={},r){return t?Qr.create().superRefine((i,o)=>{var s,n;if(!t(i)){let a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(n=(s=a.fatal)!==null&&s!==void 0?s:r)!==null&&n!==void 0?n:!0,u=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...u,fatal:l})}}):Qr.create()}var C2={object:wt.lazycreate},Z;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Z||(Z={}));var T2=(t,e={message:`Input not instance of ${t.name}`})=>vb(r=>r instanceof t,e),wb=Jr.create,_b=Ii.create,E2=jo.create,A2=Pi.create,xb=Li.create,O2=zi.create,$2=Uo.create,I2=Ri.create,P2=Di.create,L2=Qr.create,z2=Ir.create,R2=or.create,D2=Bo.create,M2=Pr.create,N2=wt.create,F2=wt.strictCreate,U2=Mi.create,B2=ol.create,V2=Ni.create,q2=yr.create,j2=sl.create,H2=Vo.create,W2=qo.create,G2=nl.create,K2=Fi.create,Y2=Ui.create,Z2=Bi.create,X2=Vi.create,J2=ei.create,hb=Pt.create,Q2=Vt.create,eT=vr.create,tT=Pt.createWithPreprocess,rT=gn.create,iT=()=>wb().optional(),oT=()=>_b().optional(),sT=()=>xb().optional(),nT={string:t=>Jr.create({...t,coerce:!0}),number:t=>Ii.create({...t,coerce:!0}),boolean:t=>Li.create({...t,coerce:!0}),bigint:t=>Pi.create({...t,coerce:!0}),date:t=>zi.create({...t,coerce:!0})},aT=X,J=Object.freeze({__proto__:null,defaultErrorMap:Fo,setErrorMap:t2,getErrorMap:tl,makeIssue:rl,EMPTY_PATH:r2,addIssueToContext:F,ParseStatus:ht,INVALID:X,DIRTY:No,OK:ft,isAborted:md,isDirty:gd,isValid:$i,isAsync:fn,get util(){return me},get objectUtil(){return fd},ZodParsedType:q,getParsedType:$r,ZodType:ae,datetimeRegex:bb,ZodString:Jr,ZodNumber:Ii,ZodBigInt:Pi,ZodBoolean:Li,ZodDate:zi,ZodSymbol:Uo,ZodUndefined:Ri,ZodNull:Di,ZodAny:Qr,ZodUnknown:Ir,ZodNever:or,ZodVoid:Bo,ZodArray:Pr,ZodObject:wt,ZodUnion:Mi,ZodDiscriminatedUnion:ol,ZodIntersection:Ni,ZodTuple:yr,ZodRecord:sl,ZodMap:Vo,ZodSet:qo,ZodFunction:nl,ZodLazy:Fi,ZodLiteral:Ui,ZodEnum:Bi,ZodNativeEnum:Vi,ZodPromise:ei,ZodEffects:Pt,ZodTransformer:Pt,ZodOptional:Vt,ZodNullable:vr,ZodDefault:qi,ZodCatch:ji,ZodNaN:jo,BRAND:S2,ZodBranded:mn,ZodPipeline:gn,ZodReadonly:Hi,custom:vb,Schema:ae,ZodSchema:ae,late:C2,get ZodFirstPartyTypeKind(){return Z},coerce:nT,any:L2,array:M2,bigint:A2,boolean:xb,date:O2,discriminatedUnion:B2,effect:hb,enum:Z2,function:G2,instanceof:T2,intersection:V2,lazy:K2,literal:Y2,map:H2,nan:E2,nativeEnum:X2,never:R2,null:P2,nullable:eT,number:_b,object:N2,oboolean:sT,onumber:oT,optional:Q2,ostring:iT,pipeline:rT,preprocess:tT,promise:J2,record:j2,set:W2,strictObject:F2,string:wb,symbol:$2,transformer:hb,tuple:q2,undefined:I2,union:U2,unknown:z2,void:D2,NEVER:aT,ZodIssueCode:$,quotelessJson:e2,ZodError:It});var ti=class{_state;constructor(e){this._state=e}state=()=>(console.log("state()",this._state),{...this._state});setState=e=>{this._state=typeof e=="function"?e(this._state):{...this._state,...e}}};var bn=(r=>(r.ALL="ALL",r.ANY="ANY",r))(bn||{}),lT=J.object({text:J.string().optional().default(""),tagKeys:J.array(J.string()).optional().default([]),indexLetter:J.string().optional().default(""),tagsMatchType:J.nativeEnum(bn).default("ALL")}),al=class t extends ti{constructor(e){super(e)}static from(e){let r=lT.parse(e??{});return new t(r)}setText(e){this.setState({text:e})}setIndexLetter(e){let r=e.toLocaleLowerCase()!=this.state().indexLetter?e:"";this.setState({indexLetter:r.toLocaleLowerCase()})}setTag(e,r=!0){let i=this.state().tagKeys,o=i.indexOf(e),s=r?o<0?i.concat(e):[...i.slice(0,o),...i.slice(o+1)]:[e];this.setState({tagKeys:s})}setTagsMatchType(e){this.setState({tagsMatchType:e})}isActiveIndexLetter(e){return this.state().indexLetter===e.toLocaleLowerCase()}hasTag(e){return this.state().tagKeys.includes(e)}};var ll=class{config;client=new ub;constructor(e){let{namespace:r,database:i,url:o}=e;this.config={namespace:r,database:i,url:o},Object.freeze(this.config)}async initialize(){let{url:e,namespace:r,database:i}=this.config;try{await this.client.connect(e,{namespace:r,database:i})}catch(o){throw console.error("Failed to connect to SurrealDB:",o instanceof Error?o.message:String(o)),await this.client.close(),o}}async authenticate(e,r){let i=!1;try{i=await this.client.authenticate(e)}catch(o){r||console.error(o.message)}return i}async getListings(e){let r="",i=[];if(e?.indexLetter&&i.push(`string::starts_with(string::lowercase(title), '${e.indexLetter.toLocaleLowerCase()}')`),e?.tagKeys?.length){let n=e.tagKeys.map(a=>a).join("', '");e.tagsMatchType==="ALL"?i.push(`array::len(array::intersect(tags.key, ['${n}'])) = ${e.tagKeys.length}`):i.push(`tags[WHERE key IN ['${n}']];`)}i.length&&(r=` WHERE ${i.join(" AND ")}`);let o=`SELECT *, tags.*.* FROM listings${r};`;return console.log({query:o}),Ho(await this.client.query(o))}async getIndexLetters(){return Ho(await this.client.query("SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM listings GROUP BY letter;"))}async getTags(){let e=`
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;return console.log({query:e}),Ho(await this.client.query(e))}async getUserData(){let e="SELECT * FROM users;";return console.log({query:e}),Ho(await this.client.query(e),2)}async getListingsByEmail(e){let r=`SELECT * FROM listings WHERE owner.email = '${e}';`;return console.log({query:r}),Ho(await this.client.query(r),2)}async createListing(e){let r=";";return console.log({query:r}),Ho(await this.client.query(r),2)}},Ho=(t,e=1)=>{let r=t;for(;e>0&&Array.isArray(r)&&r.length===1;)r=r[0],e--;return r};var kb=async t=>{let e=new ll(t);return await e.initialize(),e};var Wi=async(t=0,e)=>new Promise(r=>setTimeout(()=>r(e?e():void 0),t));var cl=class{configsUrl;constructor(e){this.configsUrl=e}async loadConfigs(){return console.log({configsUrl:this.configsUrl}),await Wi(),{auth0:{domain:"intergate.eu.auth0.com",clientId:"d63m36lvjcGcQZoYjF06IIgczFdIHGqN",authorizationParams:{audience:"https://surrealdb.com/",redirect_uri:window.location.origin}},surreal:{namespace:"intergate",database:"gul-info",url:"https://127.0.0.1:7999/rpc"}}}};var Sb=async t=>await new cl(t).loadConfigs();var Cb=yo(),Tb=t=>{let e=async()=>{let i=await Sb("https://intergate.io/configs/gul-info-hurdal"),o=await kb(i.surreal);return{configs:i,db:o}},[r]=yt(e);return Y(Mt,{get when(){return r()},get children(){return Y(Cb.Provider,{get value(){return r()},get children(){return t.children}})}})},Eb=()=>{let t=ki(Cb);if(!t)throw new Error("useSystem must be used within an CoreProvider");return t};function wr(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]])}return r}var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ld(t,e){return t(e={exports:{}},e.exports),e.exports}var Gi=Ld(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function i(){var o=this;this.locked=new Map,this.addToLocked=function(s,n){var a=o.locked.get(s);a===void 0?n===void 0?o.locked.set(s,[]):o.locked.set(s,[n]):n!==void 0&&(a.unshift(n),o.locked.set(s,a))},this.isLocked=function(s){return o.locked.has(s)},this.lock=function(s){return new Promise(function(n,a){o.isLocked(s)?o.addToLocked(s,n):(o.addToLocked(s),n())})},this.unlock=function(s){var n=o.locked.get(s);if(n!==void 0&&n.length!==0){var a=n.pop();o.locked.set(s,n),a!==void 0&&setTimeout(a,0)}else o.locked.delete(s)}}return i.getInstance=function(){return i.instance===void 0&&(i.instance=new i),i.instance},i}();e.default=function(){return r.getInstance()}});Pd(Gi);var cT=Pd(Ld(function(t,e){var r=Ki&&Ki.__awaiter||function(d,h,f,m){return new(f||(f=Promise))(function(g,v){function y(k){try{w(m.next(k))}catch(b){v(b)}}function _(k){try{w(m.throw(k))}catch(b){v(b)}}function w(k){k.done?g(k.value):new f(function(b){b(k.value)}).then(y,_)}w((m=m.apply(d,h||[])).next())})},i=Ki&&Ki.__generator||function(d,h){var f,m,g,v,y={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return v={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function _(w){return function(k){return function(b){if(f)throw new TypeError("Generator is already executing.");for(;y;)try{if(f=1,m&&(g=2&b[0]?m.return:b[0]?m.throw||((g=m.return)&&g.call(m),0):m.next)&&!(g=g.call(m,b[1])).done)return g;switch(m=0,g&&(b=[2&b[0],g.value]),b[0]){case 0:case 1:g=b;break;case 4:return y.label++,{value:b[1],done:!1};case 5:y.label++,m=b[1],b=[0];continue;case 7:b=y.ops.pop(),y.trys.pop();continue;default:if(g=y.trys,!((g=g.length>0&&g[g.length-1])||b[0]!==6&&b[0]!==2)){y=0;continue}if(b[0]===3&&(!g||b[1]>g[0]&&b[1]<g[3])){y.label=b[1];break}if(b[0]===6&&y.label<g[1]){y.label=g[1],g=b;break}if(g&&y.label<g[2]){y.label=g[2],y.ops.push(b);break}g[2]&&y.ops.pop(),y.trys.pop();continue}b=h.call(d,y)}catch(S){b=[6,S],m=0}finally{f=g=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([w,k])}}},o=Ki;Object.defineProperty(e,"__esModule",{value:!0});var s="browser-tabs-lock-key",n={key:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},getItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},clear:function(){return r(o,void 0,void 0,function(){return i(this,function(d){return[2,window.localStorage.clear()]})})},removeItem:function(d){return r(o,void 0,void 0,function(){return i(this,function(h){throw new Error("Unsupported")})})},setItem:function(d,h){return r(o,void 0,void 0,function(){return i(this,function(f){throw new Error("Unsupported")})})},keySync:function(d){return window.localStorage.key(d)},getItemSync:function(d){return window.localStorage.getItem(d)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(d){return window.localStorage.removeItem(d)},setItemSync:function(d,h){return window.localStorage.setItem(d,h)}};function a(d){return new Promise(function(h){return setTimeout(h,d)})}function l(d){for(var h="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",f="",m=0;m<d;m++)f+=h[Math.floor(Math.random()*h.length)];return f}var u=function(){function d(h){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=h,d.waiters===void 0&&(d.waiters=[])}return d.prototype.acquireLock=function(h,f){return f===void 0&&(f=5e3),r(this,void 0,void 0,function(){var m,g,v,y,_,w,k;return i(this,function(b){switch(b.label){case 0:m=Date.now()+l(4),g=Date.now()+f,v=s+"-"+h,y=this.storageHandler===void 0?n:this.storageHandler,b.label=1;case 1:return Date.now()<g?[4,a(30)]:[3,8];case 2:return b.sent(),y.getItemSync(v)!==null?[3,5]:(_=this.id+"-"+h+"-"+m,[4,a(Math.floor(25*Math.random()))]);case 3:return b.sent(),y.setItemSync(v,JSON.stringify({id:this.id,iat:m,timeoutKey:_,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return b.sent(),(w=y.getItemSync(v))!==null&&(k=JSON.parse(w)).id===this.id&&k.iat===m?(this.acquiredIatSet.add(m),this.refreshLockWhileAcquired(v,m),[2,!0]):[3,7];case 5:return d.lockCorrector(this.storageHandler===void 0?n:this.storageHandler),[4,this.waitForSomethingToChange(g)];case 6:b.sent(),b.label=7;case 7:return m=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},d.prototype.refreshLockWhileAcquired=function(h,f){return r(this,void 0,void 0,function(){var m=this;return i(this,function(g){return setTimeout(function(){return r(m,void 0,void 0,function(){var v,y,_;return i(this,function(w){switch(w.label){case 0:return[4,Gi.default().lock(f)];case 1:return w.sent(),this.acquiredIatSet.has(f)?(v=this.storageHandler===void 0?n:this.storageHandler,(y=v.getItemSync(h))===null?(Gi.default().unlock(f),[2]):((_=JSON.parse(y)).timeRefreshed=Date.now(),v.setItemSync(h,JSON.stringify(_)),Gi.default().unlock(f),this.refreshLockWhileAcquired(h,f),[2])):(Gi.default().unlock(f),[2])}})})},1e3),[2]})})},d.prototype.waitForSomethingToChange=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,new Promise(function(m){var g=!1,v=Date.now(),y=!1;function _(){if(y||(window.removeEventListener("storage",_),d.removeFromWaiting(_),clearTimeout(w),y=!0),!g){g=!0;var k=50-(Date.now()-v);k>0?setTimeout(m,k):m(null)}}window.addEventListener("storage",_),d.addToWaiting(_);var w=setTimeout(_,Math.max(0,h-Date.now()))})];case 1:return f.sent(),[2]}})})},d.addToWaiting=function(h){this.removeFromWaiting(h),d.waiters!==void 0&&d.waiters.push(h)},d.removeFromWaiting=function(h){d.waiters!==void 0&&(d.waiters=d.waiters.filter(function(f){return f!==h}))},d.notifyWaiters=function(){d.waiters!==void 0&&d.waiters.slice().forEach(function(h){return h()})},d.prototype.releaseLock=function(h){return r(this,void 0,void 0,function(){return i(this,function(f){switch(f.label){case 0:return[4,this.releaseLock__private__(h)];case 1:return[2,f.sent()]}})})},d.prototype.releaseLock__private__=function(h){return r(this,void 0,void 0,function(){var f,m,g,v;return i(this,function(y){switch(y.label){case 0:return f=this.storageHandler===void 0?n:this.storageHandler,m=s+"-"+h,(g=f.getItemSync(m))===null?[2]:(v=JSON.parse(g)).id!==this.id?[3,2]:[4,Gi.default().lock(v.iat)];case 1:y.sent(),this.acquiredIatSet.delete(v.iat),f.removeItemSync(m),Gi.default().unlock(v.iat),d.notifyWaiters(),y.label=2;case 2:return[2]}})})},d.lockCorrector=function(h){for(var f=Date.now()-5e3,m=h,g=[],v=0;;){var y=m.keySync(v);if(y===null)break;g.push(y),v++}for(var _=!1,w=0;w<g.length;w++){var k=g[w];if(k.includes(s)){var b=m.getItemSync(k);if(b!==null){var S=JSON.parse(b);(S.timeRefreshed===void 0&&S.timeAcquired<f||S.timeRefreshed!==void 0&&S.timeRefreshed<f)&&(m.removeItemSync(k),_=!0)}}}_&&d.notifyWaiters()},d.waiters=void 0,d}();e.default=u})),uT={timeoutInSeconds:60},Db={name:"auth0-spa-js",version:"2.1.3"},Mb=()=>Date.now(),mt=class t extends Error{constructor(e,r){super(r),this.error=e,this.error_description=r,Object.setPrototypeOf(this,t.prototype)}static fromPayload({error:e,error_description:r}){return new t(e,r)}},xd=class t extends mt{constructor(e,r,i,o=null){super(e,r),this.state=i,this.appState=o,Object.setPrototypeOf(this,t.prototype)}},vn=class t extends mt{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,t.prototype)}},kd=class t extends vn{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Sd=class t extends mt{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},Cd=class t extends mt{constructor(e,r,i){super(e,r),this.mfa_token=i,Object.setPrototypeOf(this,t.prototype)}},hl=class t extends mt{constructor(e,r){super("missing_refresh_token",`Missing Refresh Token (audience: '${Ab(e,["default"])}', scope: '${Ab(r)}')`),this.audience=e,this.scope=r,Object.setPrototypeOf(this,t.prototype)}};function Ab(t,e=[]){return t&&!e.includes(t)?t:""}var dl=()=>window.crypto,yd=()=>{let t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",e="";return Array.from(dl().getRandomValues(new Uint8Array(43))).forEach(r=>e+=t[r%t.length]),e},Ob=t=>btoa(t),Td=t=>{var{clientId:e}=t,r=wr(t,["clientId"]);return new URLSearchParams((i=>Object.keys(i).filter(o=>i[o]!==void 0).reduce((o,s)=>Object.assign(Object.assign({},o),{[s]:i[s]}),{}))(Object.assign({client_id:e},r))).toString()},$b=t=>(e=>decodeURIComponent(atob(e).split("").map(r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g,"/").replace(/-/g,"+")),dT=async(t,e)=>{let r=await fetch(t,e);return{ok:r.ok,json:await r.json()}},hT=async(t,e,r)=>{let i=new AbortController,o;return e.signal=i.signal,Promise.race([dT(t,e),new Promise((s,n)=>{o=setTimeout(()=>{i.abort(),n(new Error("Timeout when executing 'fetch'"))},r)})]).finally(()=>{clearTimeout(o)})},pT=async(t,e,r,i,o,s,n)=>{return a={auth:{audience:e,scope:r},timeout:o,fetchUrl:t,fetchOptions:i,useFormData:n},l=s,new Promise(function(u,d){let h=new MessageChannel;h.port1.onmessage=function(f){f.data.error?d(new Error(f.data.error)):u(f.data),h.port1.close()},l.postMessage(a,[h.port2])});var a,l},fT=async(t,e,r,i,o,s,n=1e4)=>o?pT(t,e,r,i,n,o,s):hT(t,i,n);async function mT(t,e){var{baseUrl:r,timeout:i,audience:o,scope:s,auth0Client:n,useFormData:a}=t,l=wr(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);let u=a?Td(l):JSON.stringify(l);return await async function(d,h,f,m,g,v,y){let _,w=null;for(let B=0;B<3;B++)try{_=await fT(d,f,m,g,v,y,h),w=null;break}catch(j){w=j}if(w)throw w;let k=_.json,{error:b,error_description:S}=k,z=wr(k,["error","error_description"]),{ok:H}=_;if(!H){let B=S||`HTTP error. Unable to fetch ${d}`;throw b==="mfa_required"?new Cd(b,B,z.mfa_token):b==="missing_refresh_token"?new hl(f,m):new mt(b||"request_error",B)}return z}(`${r}/oauth/token`,i,o||"default",s,{method:"POST",body:u,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(n||Db))}},e,a)}var ul=(...t)=>{return(e=t.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ");var e},Lr=class t{constructor(e,r="@@auth0spajs@@",i){this.prefix=r,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){let[r,i,o,s]=e.split("::");return new t({clientId:i,scope:s,audience:o},r)}static fromCacheEntry(e){let{scope:r,audience:i,client_id:o}=e;return new t({scope:r,audience:i,clientId:o})}},Ed=class{set(e,r){localStorage.setItem(e,JSON.stringify(r))}get(e){let r=window.localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch{return}}remove(e){localStorage.removeItem(e)}allKeys(){return Object.keys(window.localStorage).filter(e=>e.startsWith("@@auth0spajs@@"))}},pl=class{constructor(){this.enclosedCache=function(){let e={};return{set(r,i){e[r]=i},get(r){let i=e[r];if(i)return i},remove(r){delete e[r]},allKeys:()=>Object.keys(e)}}()}},Ad=class{constructor(e,r,i){this.cache=e,this.keyManifest=r,this.nowProvider=i||Mb}async setIdToken(e,r,i){var o;let s=this.getIdTokenCacheKey(e);await this.cache.set(s,{id_token:r,decodedToken:i}),await((o=this.keyManifest)===null||o===void 0?void 0:o.add(s))}async getIdToken(e){let r=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!r&&e.scope&&e.audience){let i=await this.get(e);return!i||!i.id_token||!i.decodedToken?void 0:{id_token:i.id_token,decodedToken:i.decodedToken}}if(r)return{id_token:r.id_token,decodedToken:r.decodedToken}}async get(e,r=0){var i;let o=await this.cache.get(e.toKey());if(!o){let a=await this.getCacheKeys();if(!a)return;let l=this.matchExistingCacheKey(e,a);l&&(o=await this.cache.get(l))}if(!o)return;let s=await this.nowProvider(),n=Math.floor(s/1e3);return o.expiresAt-r<n?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},await this.cache.set(e.toKey(),o),o.body):(await this.cache.remove(e.toKey()),void await((i=this.keyManifest)===null||i===void 0?void 0:i.remove(e.toKey()))):o.body}async set(e){var r;let i=new Lr({clientId:e.client_id,scope:e.scope,audience:e.audience}),o=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),o),await((r=this.keyManifest)===null||r===void 0?void 0:r.add(i.toKey()))}async clear(e){var r;let i=await this.getCacheKeys();i&&(await i.filter(o=>!e||o.includes(e)).reduce(async(o,s)=>{await o,await this.cache.remove(s)},Promise.resolve()),await((r=this.keyManifest)===null||r===void 0?void 0:r.clear()))}async wrapCacheEntry(e){let r=await this.nowProvider();return{body:e,expiresAt:Math.floor(r/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?(e=await this.keyManifest.get())===null||e===void 0?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new Lr({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,r){return r.filter(i=>{var o;let s=Lr.fromKey(i),n=new Set(s.scope&&s.scope.split(" ")),a=((o=e.scope)===null||o===void 0?void 0:o.split(" "))||[],l=s.scope&&a.reduce((u,d)=>u&&n.has(d),!0);return s.prefix==="@@auth0spajs@@"&&s.clientId===e.clientId&&s.audience===e.audience&&l})[0]}},Od=class{constructor(e,r,i){this.storage=e,this.clientId=r,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}},yn=t=>typeof t=="number",gT=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],bT=t=>{if(!t.id_token)throw new Error("ID token is required but missing");let e=(s=>{let n=s.split("."),[a,l,u]=n;if(n.length!==3||!a||!l||!u)throw new Error("ID token could not be decoded");let d=JSON.parse($b(l)),h={__raw:s},f={};return Object.keys(d).forEach(m=>{h[m]=d[m],gT.includes(m)||(f[m]=d[m])}),{encoded:{header:a,payload:l,signature:u},header:JSON.parse($b(a)),claims:h,user:f}})(t.id_token);if(!e.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(e.claims.iss!==t.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);if(!e.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(e.header.alg!=="RS256")throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!e.claims.aud||typeof e.claims.aud!="string"&&!Array.isArray(e.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(e.claims.aud)){if(!e.claims.aud.includes(t.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);if(e.claims.aud.length>1){if(!e.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(e.claims.azp!==t.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)}}else if(e.claims.aud!==t.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);if(t.nonce){if(!e.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(e.claims.nonce!==t.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)}if(t.max_age&&!yn(e.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(e.claims.exp==null||!yn(e.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!yn(e.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");let r=t.leeway||60,i=new Date(t.now||Date.now()),o=new Date(0);if(o.setUTCSeconds(e.claims.exp+r),i>o)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${o})`);if(e.claims.nbf!=null&&yn(e.claims.nbf)){let s=new Date(0);if(s.setUTCSeconds(e.claims.nbf-r),i<s)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${s}`)}if(e.claims.auth_time!=null&&yn(e.claims.auth_time)){let s=new Date(0);if(s.setUTCSeconds(parseInt(e.claims.auth_time)+t.max_age+r),i>s)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${s}`)}if(t.organization){let s=t.organization.trim();if(s.startsWith("org_")){let n=s;if(!e.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(n!==e.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_id}"`)}else{let n=s.toLowerCase();if(!e.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(n!==e.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${n}", found "${e.claims.org_name}"`)}}return e},Yi=Ld(function(t,e){var r=Ki&&Ki.__assign||function(){return r=Object.assign||function(l){for(var u,d=1,h=arguments.length;d<h;d++)for(var f in u=arguments[d])Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f]);return l},r.apply(this,arguments)};function i(l,u){if(!u)return"";var d="; "+l;return u===!0?d:d+"="+u}function o(l,u,d){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(u).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(h){if(typeof h.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*h.expires),h.expires=f}return i("Expires",h.expires?h.expires.toUTCString():"")+i("Domain",h.domain)+i("Path",h.path)+i("Secure",h.secure)+i("SameSite",h.sameSite)}(d)}function s(l){for(var u={},d=l?l.split("; "):[],h=/(%[\dA-F]{2})+/gi,f=0;f<d.length;f++){var m=d[f].split("="),g=m.slice(1).join("=");g.charAt(0)==='"'&&(g=g.slice(1,-1));try{u[m[0].replace(h,decodeURIComponent)]=g.replace(h,decodeURIComponent)}catch{}}return u}function n(){return s(document.cookie)}function a(l,u,d){document.cookie=o(l,u,r({path:"/"},d))}e.__esModule=!0,e.encode=o,e.parse=s,e.getAll=n,e.get=function(l){return n()[l]},e.set=a,e.remove=function(l,u){a(l,"",r(r({},u),{expires:-1}))}});Pd(Yi),Yi.encode,Yi.parse,Yi.getAll;var yT=Yi.get,Nb=Yi.set,Fb=Yi.remove,Wo={get(t){let e=yT(t);if(e!==void 0)return JSON.parse(e)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0,sameSite:"none"}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),Nb(t,JSON.stringify(e),i)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),Fb(t,r)}},vT={get(t){return Wo.get(t)||Wo.get(`_legacy_${t}`)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),Nb(`_legacy_${t}`,JSON.stringify(e),i),Wo.save(t,e,r)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),Fb(t,r),Wo.remove(t,e),Wo.remove(`_legacy_${t}`,e)}},wT={get(t){if(typeof sessionStorage>"u")return;let e=sessionStorage.getItem(t);return e!=null?JSON.parse(e):void 0},save(t,e){sessionStorage.setItem(t,JSON.stringify(e))},remove(t){sessionStorage.removeItem(t)}};function _T(t,e,r){var i=e===void 0?null:e,o=function(l,u){var d=atob(l);if(u){for(var h=new Uint8Array(d.length),f=0,m=d.length;f<m;++f)h[f]=d.charCodeAt(f);return String.fromCharCode.apply(null,new Uint16Array(h.buffer))}return d}(t,r!==void 0&&r),s=o.indexOf(`
`,10)+1,n=o.substring(s)+(i?"//# sourceMappingURL="+i:""),a=new Blob([n],{type:"application/javascript"});return URL.createObjectURL(a)}var Ib,Pb,Lb,vd,xT=(Ib="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",Pb=null,Lb=!1,function(t){return vd=vd||_T(Ib,Pb,Lb),new Worker(vd,t)}),wd={},$d=class{constructor(e,r){this.cache=e,this.clientId=r,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(e){var r;let i=new Set(((r=await this.cache.get(this.manifestKey))===null||r===void 0?void 0:r.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]})}async remove(e){let r=await this.cache.get(this.manifestKey);if(r){let i=new Set(r.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return`@@auth0spajs@@::${e}`}},kT={memory:()=>new pl().enclosedCache,localstorage:()=>new Ed},zb=t=>kT[t],Rb=t=>{let{openUrl:e,onRedirect:r}=t,i=wr(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},i),{openUrl:e===!1||e?e:r})},_d=new cT,Id=class{constructor(e){let r,i;if(this.userCache=new pl().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await _d.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),typeof window<"u"&&(()=>{if(!dl())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(dl().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(r=e.cacheLocation||"memory",!zb(r))throw new Error(`Invalid cache location "${r}"`);i=zb(r)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=e.legacySameSiteCookie===!1?Wo:vT,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(n=>`auth0.${n}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;let o=e.useCookiesForTransactions?this.cookieStorage:wT;var s;this.scope=ul("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new Od(o,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||Mb,this.cacheManager=new Ad(i,i.allKeys?void 0:new $d(i,this.options.clientId),this.nowProvider),this.domainUrl=(s=this.options.domain,/^https?:\/\//.test(s)?s:`https://${s}`),this.tokenIssuer=((n,a)=>n?n.startsWith("https://")?n:`https://${n}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&r==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new xT)}_url(e){let r=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||Db)));return`${this.domainUrl}${e}&auth0Client=${r}`}_authorizeUrl(e){return this._url(`/authorize?${Td(e)}`)}async _verifyIdToken(e,r,i){let o=await this.nowProvider();return bT({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:r,organization:i,leeway:this.options.leeway,max_age:(s=this.options.authorizationParams.max_age,typeof s!="string"?s:parseInt(s,10)||void 0),now:o});var s}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(e,r,i){let o=Ob(yd()),s=Ob(yd()),n=yd(),a=(d=>{let h=new Uint8Array(d);return(f=>{let m={"+":"-","/":"_","=":""};return f.replace(/[+/=]/g,g=>m[g])})(window.btoa(String.fromCharCode(...Array.from(h))))})(await(async d=>await dl().subtle.digest({name:"SHA-256"},new TextEncoder().encode(d)))(n)),l=((d,h,f,m,g,v,y,_)=>Object.assign(Object.assign(Object.assign({client_id:d.clientId},d.authorizationParams),f),{scope:ul(h,f.scope),response_type:"code",response_mode:_||"query",state:m,nonce:g,redirect_uri:y||d.authorizationParams.redirect_uri,code_challenge:v,code_challenge_method:"S256"}))(this.options,this.scope,e,o,s,a,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,r?.response_mode),u=this._authorizeUrl(l);return{nonce:s,code_verifier:n,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:o,url:u}}async loginWithPopup(e,r){var i;if(e=e||{},!(r=r||{}).popup&&(r.popup=(a=>{let l=window.screenX+(window.innerWidth-400)/2,u=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!r.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");let o=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);r.popup.location.href=o.url;let s=await(a=>new Promise((l,u)=>{let d,h=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(h),clearTimeout(f),window.removeEventListener("message",d,!1),u(new Sd(a.popup)))},1e3),f=setTimeout(()=>{clearInterval(h),u(new kd(a.popup)),window.removeEventListener("message",d,!1)},1e3*(a.timeoutInSeconds||60));d=function(m){if(m.data&&m.data.type==="authorization_response"){if(clearTimeout(f),clearInterval(h),window.removeEventListener("message",d,!1),a.popup.close(),m.data.response.error)return u(mt.fromPayload(m.data.response));l(m.data.response)}},window.addEventListener("message",d)}))(Object.assign(Object.assign({},r),{timeoutInSeconds:r.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(o.state!==s.state)throw new mt("state_mismatch","Invalid state");let n=((i=e.authorizationParams)===null||i===void 0?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:o.audience,scope:o.scope,code_verifier:o.code_verifier,grant_type:"authorization_code",code:s.code,redirect_uri:o.redirect_uri},{nonceIn:o.nonce,organization:n})}async getUser(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.user}async getIdTokenClaims(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.claims}async loginWithRedirect(e={}){var r;let i=Rb(e),{openUrl:o,fragment:s,appState:n}=i,a=wr(i,["openUrl","fragment","appState"]),l=((r=a.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization,u=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:d}=u,h=wr(u,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},h),{appState:n}),l&&{organization:l}));let f=s?`${d}#${s}`:d;o?await o(f):window.location.assign(f)}async handleRedirectCallback(e=window.location.href){let r=e.split("?").slice(1);if(r.length===0)throw new Error("There are no query params available for parsing.");let{state:i,code:o,error:s,error_description:n}=(h=>{h.indexOf("#")>-1&&(h=h.substring(0,h.indexOf("#")));let f=new URLSearchParams(h);return{state:f.get("state"),code:f.get("code")||void 0,error:f.get("error")||void 0,error_description:f.get("error_description")||void 0}})(r.join("")),a=this.transactionManager.get();if(!a)throw new mt("missing_transaction","Invalid state");if(this.transactionManager.remove(),s)throw new xd(s,n||s,i,a.appState);if(!a.code_verifier||a.state&&a.state!==i)throw new mt("state_mismatch","Invalid state");let l=a.organization,u=a.nonce,d=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:o},d?{redirect_uri:d}:{}),{nonceIn:u,organization:l}),{appState:a.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(e)}catch{}}async getTokenSilently(e={}){var r;let i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:ul(this.scope,(r=e.authorizationParams)===null||r===void 0?void 0:r.scope)})}),o=await((s,n)=>{let a=wd[n];return a||(a=s().finally(()=>{delete wd[n],a=null}),wd[n]=a),a})(()=>this._getTokenSilently(i),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?o:o?.access_token}async _getTokenSilently(e){let{cacheMode:r}=e,i=wr(e,["cacheMode"]);if(r!=="off"){let o=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(o)return o}if(r!=="cache-only"){if(!await(async(o,s=3)=>{for(let n=0;n<s;n++)if(await o())return!0;return!1})(()=>_d.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new vn;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),r!=="off"){let u=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(u)return u}let o=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(i):await this._getTokenFromIFrame(i),{id_token:s,access_token:n,oauthTokenScope:a,expires_in:l}=o;return Object.assign(Object.assign({id_token:s,access_token:n},a?{scope:a}:null),{expires_in:l})}finally{await _d.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(e={},r={}){var i;let o=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:ul(this.scope,(i=e.authorizationParams)===null||i===void 0?void 0:i.scope)})});return r=Object.assign(Object.assign({},uT),r),await this.loginWithPopup(o,r),(await this.cacheManager.get(new Lr({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(e){e.clientId!==null?e.clientId=e.clientId||this.options.clientId:delete e.clientId;let r=e.logoutParams||{},{federated:i}=r,o=wr(r,["federated"]),s=i?"&federated":"";return this._url(`/v2/logout?${Td(Object.assign({clientId:e.clientId},o))}`)+s}async logout(e={}){let r=Rb(e),{openUrl:i}=r,o=wr(r,["openUrl"]);e.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(e.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");let s=this._buildLogoutUrl(o);i?await i(s):i!==!1&&window.location.assign(s)}async _getTokenFromIFrame(e){let r=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!r.organization&&(r.organization=i);let{url:o,state:s,nonce:n,code_verifier:a,redirect_uri:l,scope:u,audience:d}=await this._prepareAuthorizeUrl(r,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new mt("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");let h=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,f=await((g,v,y=60)=>new Promise((_,w)=>{let k=window.document.createElement("iframe");k.setAttribute("width","0"),k.setAttribute("height","0"),k.style.display="none";let b=()=>{window.document.body.contains(k)&&(window.document.body.removeChild(k),window.removeEventListener("message",S,!1))},S,z=setTimeout(()=>{w(new vn),b()},1e3*y);S=function(H){if(H.origin!=v||!H.data||H.data.type!=="authorization_response")return;let B=H.source;B&&B.close(),H.data.response.error?w(mt.fromPayload(H.data.response)):_(H.data.response),clearTimeout(z),window.removeEventListener("message",S,!1),setTimeout(b,2e3)},window.addEventListener("message",S,!1),window.document.body.appendChild(k),k.setAttribute("src",g)}))(o,this.domainUrl,h);if(s!==f.state)throw new mt("state_mismatch","Invalid state");let m=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:a,code:f.code,grant_type:"authorization_code",redirect_uri:l,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:n,organization:r.organization});return Object.assign(Object.assign({},m),{scope:u,oauthTokenScope:m.scope,audience:d})}catch(h){throw h.error==="login_required"&&this.logout({openUrl:!1}),h}}async _getTokenUsingRefreshToken(e){let r=await this.cacheManager.get(new Lr({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(r&&r.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new hl(e.authorizationParams.audience||"default",e.authorizationParams.scope)}let i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,o=typeof e.timeoutInSeconds=="number"?1e3*e.timeoutInSeconds:null;try{let s=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:r&&r.refresh_token,redirect_uri:i}),o&&{timeout:o}));return Object.assign(Object.assign({},s),{scope:e.authorizationParams.scope,oauthTokenScope:s.scope,audience:e.authorizationParams.audience||"default"})}catch(s){if((s.message.indexOf("Missing Refresh Token")>-1||s.message&&s.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw s}}async _saveEntryInCache(e){let{id_token:r,decodedToken:i}=e,o=wr(e,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:r,decodedToken:i}),await this.cacheManager.setIdToken(this.options.clientId,e.id_token,e.decodedToken),await this.cacheManager.set(o)}async _getIdTokenFromCache(){let e=this.options.authorizationParams.audience||"default",r=await this.cacheManager.getIdToken(new Lr({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return r&&r.id_token===i?.id_token?i:(this.userCache.set("@@user@@",r),r)}async _getEntryFromCache({scope:e,audience:r,clientId:i}){let o=await this.cacheManager.get(new Lr({scope:e,audience:r,clientId:i}),60);if(o&&o.access_token){let{access_token:s,oauthTokenScope:n,expires_in:a}=o,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:s},n?{scope:n}:null),{expires_in:a})}}async _requestToken(e,r){let{nonceIn:i,organization:o}=r||{},s=await mT(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),n=await this._verifyIdToken(s.id_token,i,o);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},s),{decodedToken:n,scope:e.scope,audience:e.audience||"default"}),s.scope?{oauthTokenScope:s.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(o||n.claims.org_id),Object.assign(Object.assign({},s),{decodedToken:n})}};async function Ub(t){let e=new Id(t);return await e.checkSession(),e}var fl=class{config;client;constructor(e){this.config=e,Object.freeze(this.config)}async initialize(){let{domain:e,clientId:r,authorizationParams:i}=this.config;if(this.client=await Ub({domain:e,clientId:r,authorizationParams:i}),window.location.search.includes("code=")||window.location.search.includes("error=")){try{let o=await this.client.handleRedirectCallback();console.log({result:o})}catch(o){let{error:s,error_description:n}=o;console.error("Error handling redirect callback:",{error:s,error_description:n})}window.history.replaceState({},document.title,window.location.pathname)}}async login(){return console.log("login"),await this.client.loginWithRedirect()}async logout(){this.client.logout({openUrl(e){window.location.replace(e)}})}async isAuthenticated(){return await this.client.isAuthenticated()}async getAuthData(){return await this.client.isAuthenticated()?await this.client.getIdTokenClaims():void 0}async getAccessToken(){return await this.client.getTokenSilently()}};var Bb=async(t,e)=>{let r=new fl(e);return await r.initialize(),r};var Vb=t=>{if(!(t instanceof ti))throw new Error("Passed instanc must extend `_State`");let[e,r]=Ve(t.state()),i=t.setState.bind(t);return new Proxy(t,{get(s,n){return n==="state"?e:n==="setState"&&typeof i=="function"?a=>{i(a),r(t.state())}:s[n]},set(s,n,a){if(n==="state"||n==="setState")throw new Error(`Cannot overwrite ${String(n)}.`);return s[n]=a,!0}})};function ri(t){return function(e){let r=Object.keys(t.shape);return class extends e{constructor(...i){super(...i),r.forEach(o=>{Object.defineProperty(this,o,{get(){return this.data[o]}})})}}}}var ml=J.object({key:J.string(),name:J.string(),usageCount:J.number()}),ii=class{data;constructor(e){this.data=e}static from(e){let r=ml.parse(e);return new ii(r)}};ii=qr([ri(ml)],ii);var qb=J.object({title:J.string(),description:J.string(),address:J.string(),zip:J.string().regex(/^\d{4}$/),muncipiality:J.string(),phone:J.string(),email:J.string().email(),links:J.array(J.object({href:J.string()})),tags:J.array(ml.omit({usageCount:!0}))}),oi=class{data;constructor(e){this.data=e}static from(e){let r=qb.parse(e);return new oi(r)}};oi=qr([ri(qb)],oi);var jb=J.object({letter:J.string().length(1),count:J.number()}),si=class{data;constructor(e){this.data=e}static from(e){let r=jb.parse(e);return new si(r)}};si=qr([ri(jb)],si);var gl=class{db;constructor(e){this.db=e}async loadIndexLetters(){return(await this.db.getIndexLetters()).sort((i,o)=>i.letter<o.letter?-1:1).map(i=>si.from(i))}async loadTags(){return(await this.db.getTags()).filter(({usageCount:i})=>i).sort((i,o)=>i.name<o.name?-1:1).map(i=>ii.from(i))}async loadListings(e){return await Wi(),(await this.db.getListings(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>oi.from(o))}};var bl=t=>t;var Hb=async t=>{let e=Vb(al.from({tagsMatchType:"ANY"})),r=new gl(t),[i]=yt(()=>r.loadTags()),[o]=yt(()=>r.loadIndexLetters()),[s]=yt(()=>e.state()?e.state():!1,a=>r.loadListings(a));return bl({resources:{tags:i,indexLetters:o,listings:s},filters:()=>e})};var ST=J.object({id:J.any(),owner:J.any(),title:J.string(),description:J.string(),address:J.string(),zip:J.string().regex(/^\d{4}$/),muncipiality:J.string(),phone:J.string(),email:J.string().email(),links:J.array(J.object({href:J.string()}))}),yl=class t extends ti{constructor(e){super(e)}static from(e){let r=ST.parse(e);return new t(r)}};var Wb=J.object({id:J.any(),name:J.string(),email:J.string().email()}),ni=class{data;constructor(e){this.data=e}static from(e){let r=Wb.parse(e);return new ni(r)}};ni=qr([ri(Wb)],ni);var vl=class{db;constructor(e){this.db=e}async getUser(e){await Wi(),await this.db.authenticate(e,!0);let r=await this.db.getUserData();return ni.from(r)}async loadListingsByEmail(e){return await Wi(),(await this.db.getListingsByEmail(e)).sort((o,s)=>o.title<s.title?-1:1).map(o=>yl.from(o))}async createListing(e){}async updateListing(e){}};var Gb=(t,e)=>{let r=new vl(t),[i,o]=Ve(!1),[s]=yt(()=>i(),()=>e.isAuthenticated()),[n]=yt(()=>s(),async()=>await e.getAuthData()),a=we(()=>n()?.email_verified?!1:n()?.email),[l]=yt(()=>{if(n()&&!a())return!0;o(!0)},async()=>{let h=await e.getAccessToken();return await r.getUser(h)});hs(()=>console.log(l()));let[u]=yt(()=>l(),({email:h})=>r.loadListingsByEmail(h));return bl({resources:{user:l,listings:u},mustVerifyEmail:a,login:e.login.bind(e),logout:e.logout.bind(e)})};var Kb=yo(),Yb=t=>{let{db:e,configs:r}=Eb(),[i]=yt(()=>Hb(e)),[o]=yt(async()=>{let n=await Bb(e,r.auth0);return Gb(e,n)}),s={directory:i,account:o};return Y(Kb.Provider,{value:s,get children(){return t.children}})},ai=()=>{let t=ki(Kb);if(!t)throw new Error("useService must be used within an ServiceProvider");return t};var CT=ue("<div><sl-spinner></sl-spinner><div>",!0,!1),Zb=function(t){return t.small="small",t.medium="medium",t.large="large",t}(Zb||{}),TT=dt({centered:t=>({textAlign:"center"})}),ET=ig(t=>({small:`font-size: ${t.fontSizeSm}; --trackwidth: 3px;`,medium:`font-size: ${t.fontSizeMd}; --trackwidth: 5px;`,large:`font-size: ${t.fontSizeLg}; --trackwidth: 10px;`})),li=t=>{let e=t.size||Zb.large,r=ET()[e];return(()=>{var i=CT(),o=i.firstChild,s=o.nextSibling;return o._$owner=ee(),Q(s,()=>t.children),Ee(n=>{var a=sn("loading",TT.centered),l=r;return a!==n.e&&Ne(i,n.e=a),n.t=ep(o,l,n.t),n},{e:void 0,t:void 0}),i})()};var AT=ue("<sl-button>Logout",!0,!1),Xb=t=>{let{account:e}=ai(),r=we(()=>e()?.resources.user());return Y(Cr,{get fallback(){return Y(li,{size:"large"})},get children(){return[we(()=>t.children),Y(Mt,{get when(){return r()},get children(){return[we(()=>r()?.name),(()=>{var i=AT();return qe(i,"click",()=>e()?.logout()),i._$owner=ee(),i})()]}})]}})};var $T=ue("<sl-icon-button style=font-size:20px;>",!0,!1),IT=ue("<div><section><div><h1></h1></div><div>"),PT=ue("<div>Error: "),wn=dt({app:t=>({padding:"10px 15px",color:t.colorOnPrimary,backgroundColor:t.colorPrimary,font:"16px var(--sl-font-sans)",fontWeight:"var(--sl-font-weight-normal)"}),border:t=>({borderRadius:"10px",border:"5px solid",borderColor:t.colorAccent}),header:{display:"flex",justifyContent:"space-between"},title:t=>({fontFamily:"'Playwrite HU', sans-serif",fontSize:t.fontSizeLg,cursor:"pointer"}),user:{display:"flex",flexDirection:"column",alignItems:"end"}}),Jb=t=>(()=>{var e=IT(),r=e.firstChild,i=r.firstChild,o=i.firstChild,s=i.nextSibling;return qe(o,"click",t.toggleMainPages),Q(o,()=>t.title),Q(s,Y(Xb,{get children(){var n=$T();return qe(n,"click",t.toggleMainPages),n._$owner=ee(),Ee(()=>n.name=t.selectedPage==="PAGE_LISTINGS"?"person-circle":"arrow-left-circle"),n}})),Q(e,Y(uc,{fallback:n=>(console.error(n),(()=>{var a=PT(),l=a.firstChild;return Q(a,()=>n.message,null),a})()),get children(){return Y(Cr,{get fallback(){return Y(li,{children:"Layout"})},get children(){return t.children}})}}),null),Ee(n=>{var a=sn(wn.app,wn.border),l=wn.header,u=wn.title,d=wn.user;return a!==n.e&&Ne(e,n.e=a),l!==n.t&&Ne(r,n.t=l),u!==n.a&&Ne(o,n.a=u),d!==n.o&&Ne(s,n.o=d),n},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var LT=ue("<span><sl-icon></sl-icon><span>",!0,!1),zd=dt({wrapper:{display:"flex"},label:{paddingInlineStart:"var(--sl-spacing-2x-small)"},icon:{minWidth:"20px"}}),wl=t=>(()=>{var e=LT(),r=e.firstChild,i=r.nextSibling;return r._$owner=ee(),Q(i,()=>t.children),Ee(o=>{var s=zd.wrapper,n=zd.icon,a=t.icon,l=t.label,u=zd.label;return s!==o.e&&Ne(e,o.e=s),n!==o.t&&Ne(r,o.t=n),a!==o.a&&(r.name=o.a=a),l!==o.o&&(r.label=o.o=l),u!==o.i&&Ne(i,o.i=u),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();var zT=ue("<a target=_blank>"),Qb=t=>{let{pathname:e,hostname:r}=new URL(t.link.href),i={icon:"globe",title:"Website"};return r.match(/facebook\.(no|com)/)?(i.icon="facebook",i.title="Facebook"):r.match(/instagram\.(no|com)/)?(i.icon="instagram",i.title=`@${e.split("/").pop()}`):r.match(/linkedin\.(no|com)/)&&(i.icon="linkedin",i.title="LinkedIn"),Y(wl,{get icon(){return i.icon},label:r,get children(){var o=zT();return Q(o,()=>i.title),Ee(()=>hc(o,"href",t.link.href)),o}})};var RT=ue("<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call",!0,!1),ey=t=>{let e=()=>{navigator.clipboard.writeText(t.phoneNumber)},r=()=>{window.location.href=`tel:${t.phoneNumber}`};return(()=>{var i=RT(),o=i.firstChild,s=o.firstChild,n=o.nextSibling,a=n.firstChild,l=a.firstChild,u=a.nextSibling,d=u.firstChild;return i._$owner=ee(),o.slot="trigger",o.caret=!0,o._$owner=ee(),s.name="telephone",s._$owner=ee(),Q(o,()=>t.phoneNumber,null),n._$owner=ee(),qe(a,"click",e),a._$owner=ee(),l.name="copy",l._$owner=ee(),qe(u,"click",r),u._$owner=ee(),d.name="telephone",d._$owner=ee(),i})()};var DT=ue("<br>"),ty=t=>[we(()=>t.address),DT(),we(()=>t.zip)," ",we(()=>t.muncipiality)];var MT=ue("<div><div class=text>"),NT=ue("<sl-button><span>",!0,!1),ry=dt({button:{marginTop:"5px",marginRight:"5px"},badge:{position:"absolute",top:"-2px",right:"-2px",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",borderWidth:"1px",borderStyle:"solid",borderRadius:"5px",backgroundColor:"var(--sl-color-primary-50)",borderColor:"var(--sl-color-primary-200)","& > .text":{fontSize:"8px",color:"var(--sl-color-primary-800)"}}}),Rd=t=>(()=>{var e=NT(),r=e.firstChild;return qe(e,"click",t.onClick,!0),e._$owner=ee(),Q(r,()=>t.buttonLabel),Q(e,Y(Mt,{get when(){return t.badgeLabel},get children(){var i=MT(),o=i.firstChild;return Q(o,()=>t.badgeLabel),Ee(()=>Ne(i,ry.badge)),i}}),null),Ee(i=>{var o=t.size||"medium",s=t.isActive?"primary":"default",n=ry.button,a=t.disabled;return o!==i.e&&(e.size=i.e=o),s!==i.t&&(e.variant=i.t=s),n!==i.a&&Ne(e,i.a=n),a!==i.o&&(e.disabled=i.o=a),i},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();Qh(["click"]);var FT=ue("<section><div></div><div><sl-switch>:</sl-switch></div><div>",!0,!1),Dd=dt({section:t=>({display:"flex",flexDirection:"column",alignItems:"center",marginBottom:t.spaceY}),filter:t=>({display:"flex",overflowY:"hidden",overflowX:"scroll"})}),iy=t=>{let{directory:e}=ai(),r=()=>e()?.filters(),i=()=>e()?.resources.tags(),o=()=>e()?.resources.indexLetters(),s=()=>e()?.resources.listings.loading,n=()=>r()?.state().tagsMatchType==="ALL",a=()=>{let l=n()?"ANY":"ALL";r()?.setTagsMatchType(l)};return hs(()=>console.log(r())),(()=>{var l=FT(),u=l.firstChild,d=u.nextSibling,h=d.firstChild,f=h.firstChild,m=d.nextSibling;return Q(u,()=>o()?.map(({letter:g,count:v})=>Y(Rd,{buttonLabel:g,badgeLabel:v,get isActive(){return!!r()?.isActiveIndexLetter(g)},get disabled(){return s()},onClick:()=>r()?.setIndexLetter(g)}))),qe(h,"click",()=>a()),h.size="small",h._$owner=ee(),Q(h,()=>n()?"M\xE5 match alle valgte tagger":"Match p\xE5 minst \xE9n av valgte tager",f),Q(m,()=>i()?.map(g=>Y(Rd,{size:"small",get isActive(){return!!r()?.hasTag(g.key)},get buttonLabel(){return g.name},get badgeLabel(){return g.usageCount},get disabled(){return s()},onClick:()=>r()?.setTag(g.key,!0)}))),Q(l,()=>t.children,null),Ee(g=>{var v=Dd.section,y=Dd.filter,_=n(),w=s(),k=Dd.filter;return v!==g.e&&Ne(l,g.e=v),y!==g.t&&Ne(u,g.t=y),_!==g.a&&(h.checked=g.a=_),w!==g.o&&(h.disabled=g.o=w),k!==g.i&&Ne(m,g.i=k),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()};var UT=ue("<div> treff."),BT=ue("<section>"),VT=ue("<sl-card><div slot=header><div class=title></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>",!0,!1),qT=ue("<span><br>"),jT=ue("<sl-tag>",!0,!1),Md=dt({card:{"--border-radius":"15px",width:"100%",marginBottom:"1rem","& .flex-middle > *":{justifySelf:"center"}},cardHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",position:"relative",alignItems:"center",rowGap:"1rem","> * ":{flex:"1 1 33.33%",minWidth:"200px",textAlign:"center","@media (min-width: 500px)":{"&:first-child":{textAlign:"left"}},"@media (min-width: 700px)":{"&:last-child":{textAlign:"right"}}},"& .title":{fontWeight:"bolder"}},cardBody:{display:"flex",justifyContent:"space-between"}}),oy=()=>{let{directory:t}=ai(),[e,r]=Ve(0),i=()=>t()?.filters(),o=()=>{let s=t()?.resources.listings();return r(s?.length||0),s};return(()=>{var s=BT();return Q(s,Y(iy,{get children(){var n=UT(),a=n.firstChild;return Q(n,e,a),n}}),null),Q(s,Y(Cr,{get fallback(){return Y(li,{children:"Listings"})},get children(){return Y(ms,{get each(){return o()},children:n=>(()=>{var a=VT(),l=a.firstChild,u=l.firstChild,d=u.nextSibling,h=d.nextSibling,f=l.nextSibling,m=f.firstChild,g=m.firstChild,v=g.nextSibling,y=m.nextSibling;return a._$owner=ee(),Q(u,()=>n.title),Q(d,Y(wl,{label:"beskrivelse",icon:"info-circle",get children(){return n.description}})),Q(h,Y(ey,{get phoneNumber(){return n.phone}})),Q(g,Y(ty,n)),Q(v,()=>n.links.map(_=>(()=>{var w=qT(),k=w.firstChild;return Q(w,Y(Qb,{link:_}),k),w})())),Q(y,()=>n.tags.map(_=>(()=>{var w=jT();return qe(w,"click",()=>i()?.setTag(_.key)),w.style.setProperty("cursor","pointer"),w.variant="primary",w.size="small",w._$owner=ee(),Q(w,()=>_.name),w})())),Ee(_=>{var w=Md.card,k=Md.cardHeader,b=Md.cardBody;return w!==_.e&&Ne(a,_.e=w),k!==_.t&&Ne(l,_.t=k),b!==_.a&&Ne(m,_.a=b),_},{e:void 0,t:void 0,a:void 0}),a})()})}}),null),s})()};var ay=Object.defineProperty,HT=Object.defineProperties,WT=Object.getOwnPropertyDescriptor,GT=Object.getOwnPropertyDescriptors,sy=Object.getOwnPropertySymbols,KT=Object.prototype.hasOwnProperty,YT=Object.prototype.propertyIsEnumerable,Nd=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Fd=t=>{throw TypeError(t)},ny=(t,e,r)=>e in t?ay(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,pt=(t,e)=>{for(var r in e||(e={}))KT.call(e,r)&&ny(t,r,e[r]);if(sy)for(var r of sy(e))YT.call(e,r)&&ny(t,r,e[r]);return t},zr=(t,e)=>HT(t,GT(e)),c=(t,e,r,i)=>{for(var o=i>1?void 0:i?WT(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&ay(e,r,o),o},ly=(t,e,r)=>e.has(t)||Fd("Cannot "+r),cy=(t,e,r)=>(ly(t,e,"read from private field"),r?r.call(t):e.get(t)),uy=(t,e,r)=>e.has(t)?Fd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),dy=(t,e,r,i)=>(ly(t,e,"write to private field"),i?i.call(t,r):e.set(t,r),r),ZT=function(t,e){this[0]=t,this[1]=e},hy=t=>{var e=t[Nd("asyncIterator")],r=!1,i,o={};return e==null?(e=t[Nd("iterator")](),i=s=>o[s]=n=>e[s](n)):(e=e.call(t),i=s=>o[s]=n=>{if(r){if(r=!1,s==="throw")throw n;return n}return r=!0,{done:!1,value:new ZT(new Promise(a=>{var l=e[s](n);l instanceof Object||Fd("Object expected"),a(l)}),1)}}),o[Nd("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=s=>{throw s},"return"in e&&i("return"),o};var Go=new WeakMap,_n=new WeakMap,xn=new WeakMap,Ud=new WeakSet,_l=new WeakMap,it=class{constructor(t,e){this.handleFormData=r=>{let i=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof o=="string"&&o.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{r.formData.append(o,a.toString())}):r.formData.append(o,s.toString()))},this.handleFormSubmit=r=>{var i;let o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Go.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),_l.set(this.host,[])},this.handleInteraction=r=>{let i=_l.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=pt({form:r=>{let i=r.form;if(i){let s=r.getRootNode().querySelector(`#${i}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),_l.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_l.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Go.has(this.form)?Go.get(this.form).add(this.host):Go.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_n.has(this.form)||(_n.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),xn.has(this.form)||(xn.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=Go.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_n.has(this.form)&&(this.form.reportValidity=_n.get(this.form),_n.delete(this.form)),xn.has(this.form)&&(this.form.checkValidity=xn.get(this.form),xn.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ud.add(t):Ud.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&r.setAttribute(i,e.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!Ud.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ko=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),py=Object.freeze(zr(pt({},Ko),{valid:!1,valueMissing:!0})),fy=Object.freeze(zr(pt({},Ko),{valid:!1,customError:!0}));function Bd(t){let e=new FormData(t),r={};return e.forEach((i,o)=>{if(Reflect.has(r,o)){let s=r[o];Array.isArray(s)?s.push(i):r[o]=[r[o],i]}else r[o]=i}),r}var xl=globalThis,kl=xl.ShadowRoot&&(xl.ShadyCSS===void 0||xl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vd=Symbol(),my=new WeakMap,kn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Vd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(kl&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=my.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&my.set(r,e))}return e}toString(){return this.cssText}},gy=t=>new kn(typeof t=="string"?t:t+"",void 0,Vd),E=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new kn(r,t,Vd)},qd=(t,e)=>{if(kl)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),o=xl.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},Sl=kl?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return gy(r)})(t):t;var{is:XT,defineProperty:JT,getOwnPropertyDescriptor:QT,getOwnPropertyNames:eE,getOwnPropertySymbols:tE,getPrototypeOf:rE}=Object,Cl=globalThis,by=Cl.trustedTypes,iE=by?by.emptyScript:"",oE=Cl.reactiveElementPolyfillSupport,Sn=(t,e)=>t,ci={toAttribute(t,e){switch(e){case Boolean:t=t?iE:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Tl=(t,e)=>!XT(t,e),yy={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:Tl};Symbol.metadata??=Symbol("metadata"),Cl.litPropertyMetadata??=new WeakMap;var Rr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=yy){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&JT(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){let{get:o,set:s}=QT(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return o?.call(this)},set(n){let a=o?.call(this);s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??yy}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;let e=rE(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){let r=this.properties,i=[...eE(r),...tE(r)];for(let o of i)this.createProperty(o,r[o])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)r.unshift(Sl(o))}else e!==void 0&&r.push(Sl(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qd(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:ci).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=i.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ci;this._$Em=o,this[o]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Tl)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Rr.elementStyles=[],Rr.shadowRootOptions={mode:"open"},Rr[Sn("elementProperties")]=new Map,Rr[Sn("finalized")]=new Map,oE?.({ReactiveElement:Rr}),(Cl.reactiveElementVersions??=[]).push("2.0.4");var Hd=globalThis,El=Hd.trustedTypes,vy=El?El.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wd="$lit$",Dr=`lit$${Math.random().toFixed(9).slice(2)}$`,Gd="?"+Dr,sE=`<${Gd}>`,Ji=document,Tn=()=>Ji.createComment(""),En=t=>t===null||typeof t!="object"&&typeof t!="function",Kd=Array.isArray,Cy=t=>Kd(t)||typeof t?.[Symbol.iterator]=="function",jd=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wy=/-->/g,_y=/>/g,Zi=RegExp(`>|${jd}(?:([^\\s"'>=/]+)(${jd}*=${jd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xy=/'/g,ky=/"/g,Ty=/^(?:script|style|textarea|title)$/i,Yd=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x=Yd(1),Ey=Yd(2),Ay=Yd(3),ot=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),Sy=new WeakMap,Xi=Ji.createTreeWalker(Ji,129);function Oy(t,e){if(!Kd(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return vy!==void 0?vy.createHTML(e):e}var $y=(t,e)=>{let r=t.length-1,i=[],o,s=e===2?"<svg>":e===3?"<math>":"",n=Cn;for(let a=0;a<r;a++){let l=t[a],u,d,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,d=n.exec(l),d!==null);)f=n.lastIndex,n===Cn?d[1]==="!--"?n=wy:d[1]!==void 0?n=_y:d[2]!==void 0?(Ty.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=Zi):d[3]!==void 0&&(n=Zi):n===Zi?d[0]===">"?(n=o??Cn,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,u=d[1],n=d[3]===void 0?Zi:d[3]==='"'?ky:xy):n===ky||n===xy?n=Zi:n===wy||n===_y?n=Cn:(n=Zi,o=void 0);let m=n===Zi&&t[a+1].startsWith("/>")?" ":"";s+=n===Cn?l+sE:h>=0?(i.push(u),l.slice(0,h)+Wd+l.slice(h)+Dr+m):l+Dr+(h===-2?a:m)}return[Oy(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},An=class t{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[u,d]=$y(e,r);if(this.el=t.createElement(u,i),Xi.currentNode=this.el.content,r===2||r===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Xi.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Wd)){let f=d[n++],m=o.getAttribute(h).split(Dr),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Ol:g[1]==="?"?$l:g[1]==="@"?Il:eo}),o.removeAttribute(h)}else h.startsWith(Dr)&&(l.push({type:6,index:s}),o.removeAttribute(h));if(Ty.test(o.tagName)){let h=o.textContent.split(Dr),f=h.length-1;if(f>0){o.textContent=El?El.emptyScript:"";for(let m=0;m<f;m++)o.append(h[m],Tn()),Xi.nextNode(),l.push({type:2,index:++s});o.append(h[f],Tn())}}}else if(o.nodeType===8)if(o.data===Gd)l.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Dr,h+1))!==-1;)l.push({type:7,index:s}),h+=Dr.length-1}s++}}static createElement(e,r){let i=Ji.createElement("template");return i.innerHTML=e,i}};function Qi(t,e,r=t,i){if(e===ot)return e;let o=i!==void 0?r._$Co?.[i]:r._$Cl,s=En(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=o:r._$Cl=o),o!==void 0&&(e=Qi(t,o._$AS(t,e.values),o,i)),e}var Al=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,o=(e?.creationScope??Ji).importNode(r,!0);Xi.currentNode=o;let s=Xi.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new Yo(s,s.nextSibling,this,e):l.type===1?u=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(u=new Pl(s,this,e)),this._$AV.push(u),l=i[++a]}n!==l?.index&&(s=Xi.nextNode(),n++)}return Xi.currentNode=Ji,o}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},Yo=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,o){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Qi(this,e,r),En(e)?e===Se||e==null||e===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):e!==this._$AH&&e!==ot&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cy(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Se&&En(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ji.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=An.createElement(Oy(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(r);else{let s=new Al(o,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=Sy.get(e.strings);return r===void 0&&Sy.set(e.strings,r=new An(e)),r}k(e){Kd(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,o=0;for(let s of e)o===r.length?r.push(i=new t(this.O(Tn()),this.O(Tn()),this,this.options)):i=r[o],i._$AI(s),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},eo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,s){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Se}_$AI(e,r=this,i,o){let s=this.strings,n=!1;if(s===void 0)e=Qi(this,e,r,0),n=!En(e)||e!==this._$AH&&e!==ot,n&&(this._$AH=e);else{let a=e,l,u;for(e=s[0],l=0;l<s.length-1;l++)u=Qi(this,a[i+l],r,l),u===ot&&(u=this._$AH[l]),n||=!En(u)||u!==this._$AH[l],u===Se?e=Se:e!==Se&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}n&&!o&&this.j(e)}j(e){e===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ol=class extends eo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Se?void 0:e}},$l=class extends eo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Se)}},Il=class extends eo{constructor(e,r,i,o,s){super(e,r,i,o,s),this.type=5}_$AI(e,r=this){if((e=Qi(this,e,r,0)??Se)===ot)return;let i=this._$AH,o=e===Se&&i!==Se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Se&&(i===Se||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Qi(this,e)}},Iy={M:Wd,P:Dr,A:Gd,C:1,L:$y,R:Al,D:Cy,V:Qi,I:Yo,H:eo,N:$l,U:Il,B:Ol,F:Pl},nE=Hd.litHtmlPolyfillSupport;nE?.(An,Yo),(Hd.litHtmlVersions??=[]).push("3.2.1");var Py=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(o===void 0){let s=r?.renderBefore??null;i._$litPart$=o=new Yo(e.insertBefore(Tn(),s),s,void 0,r??{})}return o._$AI(t),o};var ui=class extends Rr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Py(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}};ui._$litElement$=!0,ui.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ui});var aE=globalThis.litElementPolyfillSupport;aE?.({LitElement:ui});(globalThis.litElementVersions??=[]).push("4.1.1");var Ly=E`
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
`;var lE={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:Tl},cE=(t=lE,e,r)=>{let{kind:i,metadata:o}=r,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),i==="accessor"){let{name:n}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){let{name:n}=r;return function(a){let l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,r)=>typeof r=="object"?cE(t,e,r):((i,o,s)=>{let n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function D(t){return p({...t,state:!0,attribute:!1})}function _r(t){return(e,r)=>{let i=typeof e=="function"?e:e[r];Object.assign(i,t)}}var di=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function A(t,e){return(r,i,o)=>{let s=n=>n.renderRoot?.querySelector(t)??null;if(e){let{get:n,set:a}=typeof i=="object"?r:o??(()=>{let l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return di(r,i,{get(){let l=n.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return di(r,i,{get(){return s(this)}})}}function zy(t){return(e,r)=>di(e,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var Ll,T=class extends ui{constructor(){super(),uy(this,Ll,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let o=" (unknown version)",s=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(o&&s&&o===s)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,r){cy(this,Ll)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),dy(this,Ll,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};Ll=new WeakMap;T.version="2.19.0";T.dependencies={};c([p()],T.prototype,"dir",2);c([p()],T.prototype,"lang",2);var On=class extends T{render(){return x` <slot></slot> `}};On.styles=[O,Ly];On.define("sl-visually-hidden");var Ry=E`
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
`;var Dy=E`
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
`;var Zd=new Set,Zo=new Map,to,Xd="ltr",Jd="en",My=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(My){let t=new MutationObserver(Ny);Xd=document.documentElement.dir||"ltr",Jd=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function $n(...t){t.map(e=>{let r=e.$code.toLowerCase();Zo.has(r)?Zo.set(r,Object.assign(Object.assign({},Zo.get(r)),e)):Zo.set(r,e),to||(to=e)}),Ny()}function Ny(){My&&(Xd=document.documentElement.dir||"ltr",Jd=document.documentElement.lang||navigator.language),[...Zd.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var zl=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Zd.add(this.host)}hostDisconnected(){Zd.delete(this.host)}dir(){return`${this.host.dir||Xd}`.toLowerCase()}lang(){return`${this.host.lang||Jd}`.toLowerCase()}getTranslationData(e){var r,i;let o=new Intl.Locale(e.replace(/_/g,"-")),s=o?.language.toLowerCase(),n=(i=(r=o?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=Zo.get(`${s}-${n}`),l=Zo.get(s);return{locale:o,language:s,region:n,primary:a,secondary:l}}exists(e,r){var i;let{primary:o,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[e]||s&&s[e]||r.includeFallback&&to&&to[e])}term(e,...r){let{primary:i,secondary:o}=this.getTranslationData(this.lang()),s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(to&&to[e])s=to[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...r):s}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var Fy={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$n(Fy);var Uy=Fy;var G=class extends zl{};$n(Uy);var xr=Math.min,gt=Math.max,Pn=Math.round,Ln=Math.floor,sr=t=>({x:t,y:t}),uE={left:"right",right:"left",bottom:"top",top:"bottom"},dE={start:"end",end:"start"};function Dl(t,e,r){return gt(t,xr(e,r))}function ro(t,e){return typeof t=="function"?t(e):t}function Mr(t){return t.split("-")[0]}function io(t){return t.split("-")[1]}function Qd(t){return t==="x"?"y":"x"}function Ml(t){return t==="y"?"height":"width"}function hi(t){return["top","bottom"].includes(Mr(t))?"y":"x"}function Nl(t){return Qd(hi(t))}function By(t,e,r){r===void 0&&(r=!1);let i=io(t),o=Nl(t),s=Ml(o),n=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=In(n)),[n,In(n)]}function Vy(t){let e=In(t);return[Rl(t),e,Rl(e)]}function Rl(t){return t.replace(/start|end/g,e=>dE[e])}function hE(t,e,r){let i=["left","right"],o=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return r?e?o:i:e?i:o;case"left":case"right":return e?s:n;default:return[]}}function qy(t,e,r,i){let o=io(t),s=hE(Mr(t),r==="start",i);return o&&(s=s.map(n=>n+"-"+o),e&&(s=s.concat(s.map(Rl)))),s}function In(t){return t.replace(/left|right|bottom|top/g,e=>uE[e])}function pE(t){return{top:0,right:0,bottom:0,left:0,...t}}function eh(t){return typeof t!="number"?pE(t):{top:t,right:t,bottom:t,left:t}}function oo(t){let{x:e,y:r,width:i,height:o}=t;return{width:i,height:o,top:r,left:e,right:e+i,bottom:r+o,x:e,y:r}}function jy(t,e,r){let{reference:i,floating:o}=t,s=hi(e),n=Nl(e),a=Ml(n),l=Mr(e),u=s==="y",d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2,m;switch(l){case"top":m={x:d,y:i.y-o.height};break;case"bottom":m={x:d,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:h};break;case"left":m={x:i.x-o.width,y:h};break;default:m={x:i.x,y:i.y}}switch(io(e)){case"start":m[n]-=f*(r&&u?-1:1);break;case"end":m[n]+=f*(r&&u?-1:1);break}return m}var Hy=async(t,e,r)=>{let{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:n}=r,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e)),u=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=jy(u,i,l),f=i,m={},g=0;for(let v=0;v<a.length;v++){let{name:y,fn:_}=a[v],{x:w,y:k,data:b,reset:S}=await _({x:d,y:h,initialPlacement:i,placement:f,strategy:o,middlewareData:m,rects:u,platform:n,elements:{reference:t,floating:e}});d=w??d,h=k??h,m={...m,[y]:{...m[y],...b}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(u=S.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):S.rects),{x:d,y:h}=jy(u,f,l)),v=-1)}return{x:d,y:h,placement:f,strategy:o,middlewareData:m}};async function Fl(t,e){var r;e===void 0&&(e={});let{x:i,y:o,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=ro(e,t),g=eh(m),y=a[f?h==="floating"?"reference":"floating":h],_=oo(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(y)))==null||r?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),w=h==="floating"?{x:i,y:o,width:n.floating.width,height:n.floating.height}:n.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),b=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},S=oo(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:k,strategy:l}):w);return{top:(_.top-S.top+g.top)/b.y,bottom:(S.bottom-_.bottom+g.bottom)/b.y,left:(_.left-S.left+g.left)/b.x,right:(S.right-_.right+g.right)/b.x}}var Wy=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:i,placement:o,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:u,padding:d=0}=ro(t,e)||{};if(u==null)return{};let h=eh(d),f={x:r,y:i},m=Nl(o),g=Ml(m),v=await n.getDimensions(u),y=m==="y",_=y?"top":"left",w=y?"bottom":"right",k=y?"clientHeight":"clientWidth",b=s.reference[g]+s.reference[m]-f[m]-s.floating[g],S=f[m]-s.reference[m],z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u)),H=z?z[k]:0;(!H||!await(n.isElement==null?void 0:n.isElement(z)))&&(H=a.floating[k]||s.floating[g]);let B=b/2-S/2,j=H/2-v[g]/2-1,R=xr(h[_],j),re=xr(h[w],j),ie=R,Re=H-v[g]-re,We=H/2-v[g]/2+B,tr=Dl(ie,We,Re),pr=!l.arrow&&io(o)!=null&&We!==tr&&s.reference[g]/2-(We<ie?R:re)-v[g]/2<0,fr=pr?We<ie?We-ie:We-Re:0;return{[m]:f[m]+fr,data:{[m]:tr,centerOffset:We-tr-fr,...pr&&{alignmentOffset:fr}},reset:pr}}});var Gy=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;let{placement:o,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:u}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=ro(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};let _=Mr(o),w=hi(a),k=Mr(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(u.floating)),S=f||(k||!v?[In(a)]:Vy(a)),z=g!=="none";!f&&z&&S.push(...qy(a,v,g,b));let H=[a,...S],B=await Fl(e,y),j=[],R=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&j.push(B[_]),h){let We=By(o,n,b);j.push(B[We[0]],B[We[1]])}if(R=[...R,{placement:o,overflows:j}],!j.every(We=>We<=0)){var re,ie;let We=(((re=s.flip)==null?void 0:re.index)||0)+1,tr=H[We];if(tr)return{data:{index:We,overflows:R},reset:{placement:tr}};let pr=(ie=R.filter(fr=>fr.overflows[0]<=0).sort((fr,Br)=>fr.overflows[1]-Br.overflows[1])[0])==null?void 0:ie.placement;if(!pr)switch(m){case"bestFit":{var Re;let fr=(Re=R.filter(Br=>{if(z){let Vr=hi(Br.placement);return Vr===w||Vr==="y"}return!0}).map(Br=>[Br.placement,Br.overflows.filter(Vr=>Vr>0).reduce((Vr,J0)=>Vr+J0,0)]).sort((Br,Vr)=>Br[1]-Vr[1])[0])==null?void 0:Re[0];fr&&(pr=fr);break}case"initialPlacement":pr=a;break}if(o!==pr)return{reset:{placement:pr}}}return{}}}};async function fE(t,e){let{placement:r,platform:i,elements:o}=t,s=await(i.isRTL==null?void 0:i.isRTL(o.floating)),n=Mr(r),a=io(r),l=hi(r)==="y",u=["left","top"].includes(n)?-1:1,d=s&&l?-1:1,h=ro(e,t),{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*d,y:f*u}:{x:f*u,y:m*d}}var Ky=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;let{x:o,y:s,placement:n,middlewareData:a}=e,l=await fE(e,t);return n===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:n}}}}},Yy=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:i,placement:o}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:y=>{let{x:_,y:w}=y;return{x:_,y:w}}},...l}=ro(t,e),u={x:r,y:i},d=await Fl(e,l),h=hi(Mr(o)),f=Qd(h),m=u[f],g=u[h];if(s){let y=f==="y"?"top":"left",_=f==="y"?"bottom":"right",w=m+d[y],k=m-d[_];m=Dl(w,m,k)}if(n){let y=h==="y"?"top":"left",_=h==="y"?"bottom":"right",w=g+d[y],k=g-d[_];g=Dl(w,g,k)}let v=a.fn({...e,[f]:m,[h]:g});return{...v,data:{x:v.x-r,y:v.y-i,enabled:{[f]:s,[h]:n}}}}}};var Zy=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;let{placement:o,rects:s,platform:n,elements:a}=e,{apply:l=()=>{},...u}=ro(t,e),d=await Fl(e,u),h=Mr(o),f=io(o),m=hi(o)==="y",{width:g,height:v}=s.floating,y,_;h==="top"||h==="bottom"?(y=h,_=f===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=h,y=f==="end"?"top":"bottom");let w=v-d.top-d.bottom,k=g-d.left-d.right,b=xr(v-d[y],w),S=xr(g-d[_],k),z=!e.middlewareData.shift,H=b,B=S;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(B=k),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(H=w),z&&!f){let R=gt(d.left,0),re=gt(d.right,0),ie=gt(d.top,0),Re=gt(d.bottom,0);m?B=g-2*(R!==0||re!==0?R+re:gt(d.left,d.right)):H=v-2*(ie!==0||Re!==0?ie+Re:gt(d.top,d.bottom))}await l({...e,availableWidth:B,availableHeight:H});let j=await n.getDimensions(a.floating);return g!==j.width||v!==j.height?{reset:{rects:!0}}:{}}}};function Ul(){return typeof window<"u"}function so(t){return Jy(t)?(t.nodeName||"").toLowerCase():"#document"}function _t(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function nr(t){var e;return(e=(Jy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Jy(t){return Ul()?t instanceof Node||t instanceof _t(t).Node:!1}function jt(t){return Ul()?t instanceof Element||t instanceof _t(t).Element:!1}function ar(t){return Ul()?t instanceof HTMLElement||t instanceof _t(t).HTMLElement:!1}function Xy(t){return!Ul()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _t(t).ShadowRoot}function Jo(t){let{overflow:e,overflowX:r,overflowY:i,display:o}=Ht(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(o)}function Qy(t){return["table","td","th"].includes(so(t))}function zn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Qo(t){let e=Bl(),r=jt(t)?Ht(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function ev(t){let e=Nr(t);for(;ar(e)&&!no(e);){if(Qo(e))return e;if(zn(e))return null;e=Nr(e)}return null}function Bl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function no(t){return["html","body","#document"].includes(so(t))}function Ht(t){return _t(t).getComputedStyle(t)}function Rn(t){return jt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Nr(t){if(so(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Xy(t)&&t.host||nr(t);return Xy(e)?e.host:e}function tv(t){let e=Nr(t);return no(e)?t.ownerDocument?t.ownerDocument.body:t.body:ar(e)&&Jo(e)?e:tv(e)}function Xo(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);let o=tv(t),s=o===((i=t.ownerDocument)==null?void 0:i.body),n=_t(o);if(s){let a=Vl(n);return e.concat(n,n.visualViewport||[],Jo(o)?o:[],a&&r?Xo(a):[])}return e.concat(o,Xo(o,[],r))}function Vl(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ov(t){let e=Ht(t),r=parseFloat(e.width)||0,i=parseFloat(e.height)||0,o=ar(t),s=o?t.offsetWidth:r,n=o?t.offsetHeight:i,a=Pn(r)!==s||Pn(i)!==n;return a&&(r=s,i=n),{width:r,height:i,$:a}}function rh(t){return jt(t)?t:t.contextElement}function es(t){let e=rh(t);if(!ar(e))return sr(1);let r=e.getBoundingClientRect(),{width:i,height:o,$:s}=ov(e),n=(s?Pn(r.width):r.width)/i,a=(s?Pn(r.height):r.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}var mE=sr(0);function sv(t){let e=_t(t);return!Bl()||!e.visualViewport?mE:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gE(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==_t(t)?!1:e}function ao(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);let o=t.getBoundingClientRect(),s=rh(t),n=sr(1);e&&(i?jt(i)&&(n=es(i)):n=es(t));let a=gE(s,r,i)?sv(s):sr(0),l=(o.left+a.x)/n.x,u=(o.top+a.y)/n.y,d=o.width/n.x,h=o.height/n.y;if(s){let f=_t(s),m=i&&jt(i)?_t(i):i,g=f,v=Vl(g);for(;v&&i&&m!==g;){let y=es(v),_=v.getBoundingClientRect(),w=Ht(v),k=_.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,b=_.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,u*=y.y,d*=y.x,h*=y.y,l+=k,u+=b,g=_t(v),v=Vl(g)}}return oo({width:d,height:h,x:l,y:u})}function ih(t,e){let r=Rn(t).scrollLeft;return e?e.left+r:ao(nr(t)).left+r}function nv(t,e,r){r===void 0&&(r=!1);let i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-(r?0:ih(t,i)),s=i.top+e.scrollTop;return{x:o,y:s}}function bE(t){let{elements:e,rect:r,offsetParent:i,strategy:o}=t,s=o==="fixed",n=nr(i),a=e?zn(e.floating):!1;if(i===n||a&&s)return r;let l={scrollLeft:0,scrollTop:0},u=sr(1),d=sr(0),h=ar(i);if((h||!h&&!s)&&((so(i)!=="body"||Jo(n))&&(l=Rn(i)),ar(i))){let m=ao(i);u=es(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}let f=n&&!h&&!s?nv(n,l,!0):sr(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+d.x+f.x,y:r.y*u.y-l.scrollTop*u.y+d.y+f.y}}function yE(t){return Array.from(t.getClientRects())}function vE(t){let e=nr(t),r=Rn(t),i=t.ownerDocument.body,o=gt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=gt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),n=-r.scrollLeft+ih(t),a=-r.scrollTop;return Ht(i).direction==="rtl"&&(n+=gt(e.clientWidth,i.clientWidth)-o),{width:o,height:s,x:n,y:a}}function wE(t,e){let r=_t(t),i=nr(t),o=r.visualViewport,s=i.clientWidth,n=i.clientHeight,a=0,l=0;if(o){s=o.width,n=o.height;let u=Bl();(!u||u&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:n,x:a,y:l}}function _E(t,e){let r=ao(t,!0,e==="fixed"),i=r.top+t.clientTop,o=r.left+t.clientLeft,s=ar(t)?es(t):sr(1),n=t.clientWidth*s.x,a=t.clientHeight*s.y,l=o*s.x,u=i*s.y;return{width:n,height:a,x:l,y:u}}function rv(t,e,r){let i;if(e==="viewport")i=wE(t,r);else if(e==="document")i=vE(nr(t));else if(jt(e))i=_E(e,r);else{let o=sv(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return oo(i)}function av(t,e){let r=Nr(t);return r===e||!jt(r)||no(r)?!1:Ht(r).position==="fixed"||av(r,e)}function xE(t,e){let r=e.get(t);if(r)return r;let i=Xo(t,[],!1).filter(a=>jt(a)&&so(a)!=="body"),o=null,s=Ht(t).position==="fixed",n=s?Nr(t):t;for(;jt(n)&&!no(n);){let a=Ht(n),l=Qo(n);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Jo(n)&&!l&&av(t,n))?i=i.filter(d=>d!==n):o=a,n=Nr(n)}return e.set(t,i),i}function kE(t){let{element:e,boundary:r,rootBoundary:i,strategy:o}=t,n=[...r==="clippingAncestors"?zn(e)?[]:xE(e,this._c):[].concat(r),i],a=n[0],l=n.reduce((u,d)=>{let h=rv(e,d,o);return u.top=gt(h.top,u.top),u.right=xr(h.right,u.right),u.bottom=xr(h.bottom,u.bottom),u.left=gt(h.left,u.left),u},rv(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function SE(t){let{width:e,height:r}=ov(t);return{width:e,height:r}}function CE(t,e,r){let i=ar(e),o=nr(e),s=r==="fixed",n=ao(t,!0,s,e),a={scrollLeft:0,scrollTop:0},l=sr(0);if(i||!i&&!s)if((so(e)!=="body"||Jo(o))&&(a=Rn(e)),i){let f=ao(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else o&&(l.x=ih(o));let u=o&&!i&&!s?nv(o,a):sr(0),d=n.left+a.scrollLeft-l.x-u.x,h=n.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:n.width,height:n.height}}function th(t){return Ht(t).position==="static"}function iv(t,e){if(!ar(t)||Ht(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return nr(t)===r&&(r=r.ownerDocument.body),r}function lv(t,e){let r=_t(t);if(zn(t))return r;if(!ar(t)){let o=Nr(t);for(;o&&!no(o);){if(jt(o)&&!th(o))return o;o=Nr(o)}return r}let i=iv(t,e);for(;i&&Qy(i)&&th(i);)i=iv(i,e);return i&&no(i)&&th(i)&&!Qo(i)?r:i||ev(t)||r}var TE=async function(t){let e=this.getOffsetParent||lv,r=this.getDimensions,i=await r(t.floating);return{reference:CE(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function EE(t){return Ht(t).direction==="rtl"}var Dn={convertOffsetParentRelativeRectToViewportRelativeRect:bE,getDocumentElement:nr,getClippingRect:kE,getOffsetParent:lv,getElementRects:TE,getClientRects:yE,getDimensions:SE,getScale:es,isElement:jt,isRTL:EE};function AE(t,e){let r=null,i,o=nr(t);function s(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();let{left:u,top:d,width:h,height:f}=t.getBoundingClientRect();if(a||e(),!h||!f)return;let m=Ln(d),g=Ln(o.clientWidth-(u+h)),v=Ln(o.clientHeight-(d+f)),y=Ln(u),w={rootMargin:-m+"px "+-g+"px "+-v+"px "+-y+"px",threshold:gt(0,xr(1,l))||1},k=!0;function b(S){let z=S[0].intersectionRatio;if(z!==l){if(!k)return n();z?n(!1,z):i=setTimeout(()=>{n(!1,1e-7)},1e3)}k=!1}try{r=new IntersectionObserver(b,{...w,root:o.ownerDocument})}catch{r=new IntersectionObserver(b,w)}r.observe(t)}return n(!0),s}function cv(t,e,r,i){i===void 0&&(i={});let{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=rh(t),d=o||s?[...u?Xo(u):[],...Xo(e)]:[];d.forEach(_=>{o&&_.addEventListener("scroll",r,{passive:!0}),s&&_.addEventListener("resize",r)});let h=u&&a?AE(u,r):null,f=-1,m=null;n&&(m=new ResizeObserver(_=>{let[w]=_;w&&w.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var k;(k=m)==null||k.observe(e)})),r()}),u&&!l&&m.observe(u),m.observe(e));let g,v=l?ao(t):null;l&&y();function y(){let _=ao(t);v&&(_.x!==v.x||_.y!==v.y||_.width!==v.width||_.height!==v.height)&&r(),v=_,g=requestAnimationFrame(y)}return r(),()=>{var _;d.forEach(w=>{o&&w.removeEventListener("scroll",r),s&&w.removeEventListener("resize",r)}),h?.(),(_=m)==null||_.disconnect(),m=null,l&&cancelAnimationFrame(g)}}var uv=Ky;var dv=Yy,hv=Gy,oh=Zy;var pv=Wy;var fv=(t,e,r)=>{let i=new Map,o={platform:Dn,...r},s={...o.platform,_c:i};return Hy(t,e,{...o,platform:s})};var bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lr=t=>(...e)=>({_$litDirective$:t,values:e}),Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var P=lr(class extends Wt{constructor(t){if(super(t),t.type!==bt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return ot}});function mv(t){return OE(t)}function sh(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function OE(t){for(let e=t;e;e=sh(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=sh(t);e;e=sh(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||Qo(r)||e.tagName==="BODY"))return e}return null}function $E(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var fe=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),i=0,o=0,s=0,n=0,a=0,l=0,u=0,d=0;r?t.top<e.top?(i=t.left,o=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,u=e.right,d=e.top):(i=e.left,o=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,u=t.right,d=t.top):t.left<e.left?(i=t.right,o=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,u=e.left,d=e.bottom):(i=e.right,o=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,u=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||$E(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=cv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[uv({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(oh({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(hv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(dv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(oh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(pv({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>Dn.getOffsetParent(r,mv):Dn.getOffsetParent;fv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:zr(pt({},Dn),{getOffsetParent:e})}).then(({x:r,y:i,middlewareData:o,placement:s})=>{let n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let l=o.arrow.x,u=o.arrow.y,d="",h="",f="",m="";if(this.arrowPlacement==="start"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){let g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":g,m=n?g:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",d=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:f,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${P({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${P({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};fe.styles=[O,Dy];c([A(".popup")],fe.prototype,"popup",2);c([A(".popup__arrow")],fe.prototype,"arrowEl",2);c([p()],fe.prototype,"anchor",2);c([p({type:Boolean,reflect:!0})],fe.prototype,"active",2);c([p({reflect:!0})],fe.prototype,"placement",2);c([p({reflect:!0})],fe.prototype,"strategy",2);c([p({type:Number})],fe.prototype,"distance",2);c([p({type:Number})],fe.prototype,"skidding",2);c([p({type:Boolean})],fe.prototype,"arrow",2);c([p({attribute:"arrow-placement"})],fe.prototype,"arrowPlacement",2);c([p({attribute:"arrow-padding",type:Number})],fe.prototype,"arrowPadding",2);c([p({type:Boolean})],fe.prototype,"flip",2);c([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],fe.prototype,"flipFallbackPlacements",2);c([p({attribute:"flip-fallback-strategy"})],fe.prototype,"flipFallbackStrategy",2);c([p({type:Object})],fe.prototype,"flipBoundary",2);c([p({attribute:"flip-padding",type:Number})],fe.prototype,"flipPadding",2);c([p({type:Boolean})],fe.prototype,"shift",2);c([p({type:Object})],fe.prototype,"shiftBoundary",2);c([p({attribute:"shift-padding",type:Number})],fe.prototype,"shiftPadding",2);c([p({attribute:"auto-size"})],fe.prototype,"autoSize",2);c([p()],fe.prototype,"sync",2);c([p({type:Object})],fe.prototype,"autoSizeBoundary",2);c([p({attribute:"auto-size-padding",type:Number})],fe.prototype,"autoSizePadding",2);c([p({attribute:"hover-bridge",type:Boolean})],fe.prototype,"hoverBridge",2);var bv=new Map,IE=new WeakMap;function PE(t){return t??{keyframes:[],options:{duration:0}}}function gv(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function de(t,e){bv.set(t,PE(e))}function ge(t,e,r){let i=IE.get(t);if(i?.[e])return gv(i[e],r.dir);let o=bv.get(e);return o?gv(o,r.dir):{keyframes:[],options:{duration:0}}}function je(t,e){return new Promise(r=>{function i(o){o.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}function _e(t,e,r){return new Promise(i=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let o=t.animate(e,zr(pt({},r),{duration:ql()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function nh(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function ql(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ce(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}function ts(t,e){return t.map(r=>zr(pt({},r),{height:r.height==="auto"?`${e}px`:r.height}))}function C(t,e){let r=pt({waitUntilFirstUpdate:!1},e);return(i,o)=>{let{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{let u=l;if(a.has(u)){let d=a.get(u),h=this[u];d!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,h)}}),s.call(this,a)}}}var Ze=class extends T{constructor(){super(),this.localize=new G(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=nh(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=nh(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ce(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:r,options:i}=ge(this,"tooltip.show",{dir:this.localize.dir()});await _e(this.popup.popup,r,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ce(this.body);let{keyframes:r,options:i}=ge(this,"tooltip.hide",{dir:this.localize.dir()});await _e(this.popup.popup,r,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${P({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ze.styles=[O,Ry];Ze.dependencies={"sl-popup":fe};c([A("slot:not([name])")],Ze.prototype,"defaultSlot",2);c([A(".tooltip__body")],Ze.prototype,"body",2);c([A("sl-popup")],Ze.prototype,"popup",2);c([p()],Ze.prototype,"content",2);c([p()],Ze.prototype,"placement",2);c([p({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);c([p({type:Number})],Ze.prototype,"distance",2);c([p({type:Boolean,reflect:!0})],Ze.prototype,"open",2);c([p({type:Number})],Ze.prototype,"skidding",2);c([p()],Ze.prototype,"trigger",2);c([p({type:Boolean})],Ze.prototype,"hoist",2);c([C("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);c([C(["content","distance","hoist","placement","skidding"])],Ze.prototype,"handleOptionsChange",1);c([C("disabled")],Ze.prototype,"handleDisabledChange",1);de("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});de("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ze.define("sl-tooltip");var yv=E`
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
`;var vv=E`
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
`;var wv=E`
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
`;var Gt=(t="value")=>(e,r)=>{let i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,a){var l;let u=i.getPropertyOptions(t),d=typeof u.attribute=="string"?u.attribute:t;if(s===d){let h=u.converter||ci,m=(typeof h=="function"?h:(l=h?.fromAttribute)!=null?l:ci.fromAttribute)(a,u.type);this[t]!==m&&(this[r]=m)}o.call(this,s,n,a)}};var xt=E`
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
`;var xe=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function _v(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),r="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var ah="";function rs(t){ah=t}function jl(t=""){if(!ah){let e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)rs(r.getAttribute("data-shoelace"));else{let i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),o="";i&&(o=i.getAttribute("src")),rs(o.split("/").slice(0,-1).join("/"))}}return ah.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var LE={name:"default",resolver:t=>jl(`assets/icons/${t}.svg`)},xv=LE;var kv={caret:`
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
  `},zE={name:"system",resolver:t=>t in kv?`data:image/svg+xml,${encodeURIComponent(kv[t])}`:""},Sv=zE;var RE=[xv,Sv],lh=[];function Cv(t){lh.push(t)}function Tv(t){lh=lh.filter(e=>e!==t)}function ch(t){return RE.find(e=>e.name===t)}var Ev=E`
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
`;var{I:XM}=Iy;var Av=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Hl=t=>t.strings===void 0;var DE={},Ov=(t,e=DE)=>t._$AH=e;var Mn=Symbol(),Wl=Symbol(),uh,dh=new Map,te=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e?.spriteSheet)return this.svg=x`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Mn:Wl}catch{return Wl}try{let o=document.createElement("div");o.innerHTML=await i.text();let s=o.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return Mn;uh||(uh=new DOMParser);let a=uh.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Mn}catch{return Mn}}connectedCallback(){super.connectedCallback(),Cv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Tv(this)}getIconSource(){let t=ch(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:r}=this.getIconSource(),i=r?ch(this.library):void 0;if(!e){this.svg=null;return}let o=dh.get(e);if(o||(o=this.resolveIcon(e,i),dh.set(e,o)),!this.initialRender)return;let s=await o;if(s===Wl&&dh.delete(e),e===this.getIconSource().url){if(Av(s)){if(this.svg=s,i){await this.updateComplete;let n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(s){case Wl:case Mn:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};te.styles=[O,Ev];c([D()],te.prototype,"svg",2);c([p({reflect:!0})],te.prototype,"name",2);c([p()],te.prototype,"src",2);c([p()],te.prototype,"label",2);c([p({reflect:!0})],te.prototype,"library",2);c([C("label")],te.prototype,"handleLabelChange",1);c([C(["name","src","library"])],te.prototype,"setIcon",1);var M=t=>t??Se;var Lt=lr(class extends Wt{constructor(t){if(super(t),t.type!==bt.PROPERTY&&t.type!==bt.ATTRIBUTE&&t.type!==bt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hl(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ot||e===Se)return e;let r=t.element,i=t.name;if(t.type===bt.PROPERTY){if(e===r[i])return ot}else if(t.type===bt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return ot}else if(t.type===bt.ATTRIBUTE&&r.getAttribute(i)===e+"")return ot;return Ov(t),e}});var Ke=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${P({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${M(this.value)}
            .indeterminate=${Lt(this.indeterminate)}
            .checked=${Lt(this.checked)}
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
    `}};Ke.styles=[O,xt,wv];Ke.dependencies={"sl-icon":te};c([A('input[type="checkbox"]')],Ke.prototype,"input",2);c([D()],Ke.prototype,"hasFocus",2);c([p()],Ke.prototype,"title",2);c([p()],Ke.prototype,"name",2);c([p()],Ke.prototype,"value",2);c([p({reflect:!0})],Ke.prototype,"size",2);c([p({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],Ke.prototype,"checked",2);c([p({type:Boolean,reflect:!0})],Ke.prototype,"indeterminate",2);c([Gt("checked")],Ke.prototype,"defaultChecked",2);c([p({reflect:!0})],Ke.prototype,"form",2);c([p({type:Boolean,reflect:!0})],Ke.prototype,"required",2);c([p({attribute:"help-text"})],Ke.prototype,"helpText",2);c([C("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);c([C(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ke.prototype,"handleStateChange",1);var $v=E`
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
`;var Fr=class extends T{constructor(){super(...arguments),this.localize=new G(this)}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Fr.styles=[O,$v];function hh(t,e,r){return t?e(t):r?.(t)}var Ge=class ph extends T{constructor(){super(...arguments),this.localize=new G(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ce(this.childrenContainer);let{keyframes:e,options:r}=ge(this,"tree-item.collapse",{dir:this.localize.dir()});await _e(this.childrenContainer,ts(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&ph.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ce(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:r}=ge(this,"tree-item.expand",{dir:this.localize.dir()});await _e(this.childrenContainer,ts(e,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>ph.isTreeItem(r)&&(e||!r.disabled)):[]}render(){let e=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return x`
      <div
        part="base"
        class="${P({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${P({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${hh(this.loading,()=>x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${hh(this.selectable,()=>x`
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
                ?checked="${Lt(this.selected)}"
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
    `}};Ge.styles=[O,vv];Ge.dependencies={"sl-checkbox":Ke,"sl-icon":te,"sl-spinner":Fr};c([D()],Ge.prototype,"indeterminate",2);c([D()],Ge.prototype,"isLeaf",2);c([D()],Ge.prototype,"loading",2);c([D()],Ge.prototype,"selectable",2);c([p({type:Boolean,reflect:!0})],Ge.prototype,"expanded",2);c([p({type:Boolean,reflect:!0})],Ge.prototype,"selected",2);c([p({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],Ge.prototype,"lazy",2);c([A("slot:not([name])")],Ge.prototype,"defaultSlot",2);c([A("slot[name=children]")],Ge.prototype,"childrenSlot",2);c([A(".tree-item__item")],Ge.prototype,"itemElement",2);c([A(".tree-item__children")],Ge.prototype,"childrenContainer",2);c([A(".tree-item__expand-button slot")],Ge.prototype,"expandButtonSlot",2);c([C("loading",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLoadingChange",1);c([C("disabled")],Ge.prototype,"handleDisabledChange",1);c([C("selected")],Ge.prototype,"handleSelectedChange",1);c([C("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandedChange",1);c([C("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandAnimation",1);c([C("lazy",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLazyChange",1);var lo=Ge;de("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});de("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Le(t,e,r){let i=o=>Object.is(o,-0)?0:o;return t<e?i(e):t>r?i(r):i(t)}function Iv(t,e=!1){function r(s){let n=s.getChildrenItems({includeDisabled:!1});if(n.length){let a=n.every(u=>u.selected),l=n.every(u=>!u.selected&&!u.indeterminate);s.selected=a,s.indeterminate=!a&&!l}}function i(s){let n=s.parentElement;lo.isTreeItem(n)&&(r(n),i(n))}function o(s){for(let n of s.getChildrenItems())n.selected=e?s.selected||n.selected:!n.disabled&&s.selected,o(n);e&&r(s)}o(t),i(t)}var pi=class extends T{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new G(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{let r=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(r===null?t.append(i):r.hasAttribute("data-default")&&r.replaceWith(i))})},this.handleTreeChanged=t=>{for(let e of t){let r=[...e.addedNodes].filter(lo.isTreeItem),i=[...e.removedNodes].filter(lo.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),lo.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){let r=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){let i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Iv(t);else if(this.selection==="single"||t.isLeaf){let i=this.getAllTreeItems();for(let o of i)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let r=this.selectedItems;(e.length!==r.length||r.some(i=>!e.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var s;return["input","textarea"].includes((s=o?.tagName)==null?void 0:s.toLowerCase())}))return;let e=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();let o=e.findIndex(l=>l.matches(":focus")),s=e[o],n=l=>{let u=e[Le(l,0,e.length-1)];this.focusItem(u)},a=l=>{s.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(o+1):a(!0):r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(o-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){let e=t.target,r=e.closest("sl-tree-item"),i=t.composedPath().some(o=>{var s;return(s=o?.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||e!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(let r of e)r.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Iv(r,!0)))}get selectedItems(){let t=this.getAllTreeItems(),e=r=>r.selected;return t.filter(e)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(r=>{var i;if(r.disabled)return!1;let o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(r),!e.has(r)})}render(){return x`
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
    `}};pi.styles=[O,yv];c([A("slot:not([name])")],pi.prototype,"defaultSlot",2);c([A("slot[name=expand-icon]")],pi.prototype,"expandedIconSlot",2);c([A("slot[name=collapse-icon]")],pi.prototype,"collapsedIconSlot",2);c([p()],pi.prototype,"selection",2);c([C("selection")],pi.prototype,"handleSelectionChange",1);pi.define("sl-tree");lo.define("sl-tree-item");var Pv=E`
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
`;var ME=0,is=class extends T{constructor(){super(...arguments),this.attrId=++ME,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return x`
      <slot
        part="base"
        class=${P({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};is.styles=[O,Pv];c([p({reflect:!0})],is.prototype,"name",2);c([p({type:Boolean,reflect:!0})],is.prototype,"active",2);c([C("active")],is.prototype,"handleActiveChange",1);is.define("sl-tab-panel");var Lv=E`
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
`;var zv=E`
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
`;var Dv=Symbol.for(""),NE=t=>{if(t?.r===Dv)return t?._$litStatic$};var os=(t,...e)=>({_$litStatic$:e.reduce((r,i,o)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Dv}),Rv=new Map,fh=t=>(e,...r)=>{let i=r.length,o,s,n=[],a=[],l,u=0,d=!1;for(;u<i;){for(l=e[u];u<i&&(s=r[u],(o=NE(s))!==void 0);)l+=o+e[++u],d=!0;u!==i&&a.push(s),n.push(l),u++}if(u===i&&n.push(e[i]),d){let h=n.join("$$lit$$");(e=Rv.get(h))===void 0&&(n.raw=n,Rv.set(h,e=n)),r=a}return t(e,...r)},fi=fh(x),X6=fh(Ey),J6=fh(Ay);var ze=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?os`a`:os`button`;return fi`
      <${e}
        part="base"
        class=${P({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};ze.styles=[O,zv];ze.dependencies={"sl-icon":te};c([A(".icon-button")],ze.prototype,"button",2);c([D()],ze.prototype,"hasFocus",2);c([p()],ze.prototype,"name",2);c([p()],ze.prototype,"library",2);c([p()],ze.prototype,"src",2);c([p()],ze.prototype,"href",2);c([p()],ze.prototype,"target",2);c([p()],ze.prototype,"download",2);c([p()],ze.prototype,"label",2);c([p({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);var kr=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return x`
      <span
        part="base"
        class=${P({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};kr.styles=[O,Lv];kr.dependencies={"sl-icon-button":ze};c([p({reflect:!0})],kr.prototype,"variant",2);c([p({reflect:!0})],kr.prototype,"size",2);c([p({type:Boolean,reflect:!0})],kr.prototype,"pill",2);c([p({type:Boolean})],kr.prototype,"removable",2);kr.define("sl-tag");var Mv=E`
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
`;var be=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${P({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${M(this.name)}
              .value=${Lt(this.value)}
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
    `}};be.styles=[O,xt,Mv];c([A(".textarea__control")],be.prototype,"input",2);c([A(".textarea__size-adjuster")],be.prototype,"sizeAdjuster",2);c([D()],be.prototype,"hasFocus",2);c([p()],be.prototype,"title",2);c([p()],be.prototype,"name",2);c([p()],be.prototype,"value",2);c([p({reflect:!0})],be.prototype,"size",2);c([p({type:Boolean,reflect:!0})],be.prototype,"filled",2);c([p()],be.prototype,"label",2);c([p({attribute:"help-text"})],be.prototype,"helpText",2);c([p()],be.prototype,"placeholder",2);c([p({type:Number})],be.prototype,"rows",2);c([p()],be.prototype,"resize",2);c([p({type:Boolean,reflect:!0})],be.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],be.prototype,"readonly",2);c([p({reflect:!0})],be.prototype,"form",2);c([p({type:Boolean,reflect:!0})],be.prototype,"required",2);c([p({type:Number})],be.prototype,"minlength",2);c([p({type:Number})],be.prototype,"maxlength",2);c([p()],be.prototype,"autocapitalize",2);c([p()],be.prototype,"autocorrect",2);c([p()],be.prototype,"autocomplete",2);c([p({type:Boolean})],be.prototype,"autofocus",2);c([p()],be.prototype,"enterkeyhint",2);c([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],be.prototype,"spellcheck",2);c([p()],be.prototype,"inputmode",2);c([Gt()],be.prototype,"defaultValue",2);c([C("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);c([C("rows",{waitUntilFirstUpdate:!0})],be.prototype,"handleRowsChange",1);c([C("value",{waitUntilFirstUpdate:!0})],be.prototype,"handleValueChange",1);be.define("sl-textarea");var Nv=E`
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
`;var FE=0,Kt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.attrId=++FE,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,x`
      <div
        part="base"
        class=${P({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};Kt.styles=[O,Nv];Kt.dependencies={"sl-icon-button":ze};c([A(".tab")],Kt.prototype,"tab",2);c([p({reflect:!0})],Kt.prototype,"panel",2);c([p({type:Boolean,reflect:!0})],Kt.prototype,"active",2);c([p({type:Boolean,reflect:!0})],Kt.prototype,"closable",2);c([p({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);c([p({type:Number,reflect:!0})],Kt.prototype,"tabIndex",2);c([C("active")],Kt.prototype,"handleActiveChange",1);c([C("disabled")],Kt.prototype,"handleDisabledChange",1);Kt.define("sl-tab");var Fv=E`
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
`;var Uv=E`
  :host {
    display: contents;
  }
`;var co=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};co.styles=[O,Uv];c([p({type:Boolean,reflect:!0})],co.prototype,"disabled",2);c([C("disabled",{waitUntilFirstUpdate:!0})],co.prototype,"handleDisabledChange",1);function UE(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var mh=new Set;function BE(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function VE(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function uo(t){if(mh.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=BE()+VE(),r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),e<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function ho(t){mh.delete(t),mh.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Nn(t,e,r="vertical",i="smooth"){let o=UE(t,e),s=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,u=e.scrollTop,d=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<u?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>d&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var st=class extends T{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new G(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let r=t.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){let r=t.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let o=this.tabs.find(a=>a.matches(":focus")),s=this.localize.dir()==="rtl",n=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Nn(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=pt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Nn(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null,i=e==="forward"?1:-1,o=t+i;for(;t<this.tabs.length;){if(r=this.tabs[o]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;o+=i}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        class=${P({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${P({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${P({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};st.styles=[O,Fv];st.dependencies={"sl-icon-button":ze,"sl-resize-observer":co};c([A(".tab-group")],st.prototype,"tabGroup",2);c([A(".tab-group__body")],st.prototype,"body",2);c([A(".tab-group__nav")],st.prototype,"nav",2);c([A(".tab-group__indicator")],st.prototype,"indicator",2);c([D()],st.prototype,"hasScrollControls",2);c([D()],st.prototype,"shouldHideScrollStartButton",2);c([D()],st.prototype,"shouldHideScrollEndButton",2);c([p()],st.prototype,"placement",2);c([p()],st.prototype,"activation",2);c([p({attribute:"no-scroll-controls",type:Boolean})],st.prototype,"noScrollControls",2);c([p({attribute:"fixed-scroll-controls",type:Boolean})],st.prototype,"fixedScrollControls",2);c([_r({passive:!0})],st.prototype,"updateScrollButtons",1);c([C("noScrollControls",{waitUntilFirstUpdate:!0})],st.prototype,"updateScrollControls",1);c([C("placement",{waitUntilFirstUpdate:!0})],st.prototype,"syncIndicator",1);st.define("sl-tab-group");var Bv=E`
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
`;var Gl=class extends T{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${P({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Gl.styles=[O,Bv];c([p()],Gl.prototype,"effect",2);Gl.define("sl-skeleton");var Vv=E`
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
`;function mi(t,e){function r(o){let s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=s.left+n.scrollX,l=s.top+n.scrollY,u=o.pageX-a,d=o.pageY-l;e?.onMove&&e.onMove(u,d)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&r(e.initialEvent)}var kt=class extends T{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new G(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),mi(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),e&&!this.vertical&&(a=this.size-a),o>=a-this.snapThreshold&&o<=a+this.snapThreshold&&(o=a)}),this.position=Le(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,r=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=r),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=r),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Le(e,0,100)}}handleResize(t){let{width:e,height:r}=t[0].contentRect;this.size=this.vertical?r:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
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
    `}};kt.styles=[O,Vv];c([A(".divider")],kt.prototype,"divider",2);c([p({type:Number,reflect:!0})],kt.prototype,"position",2);c([p({attribute:"position-in-pixels",type:Number})],kt.prototype,"positionInPixels",2);c([p({type:Boolean,reflect:!0})],kt.prototype,"vertical",2);c([p({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);c([p()],kt.prototype,"primary",2);c([p()],kt.prototype,"snap",2);c([p({type:Number,attribute:"snap-threshold"})],kt.prototype,"snapThreshold",2);c([C("position")],kt.prototype,"handlePositionChange",1);c([C("positionInPixels")],kt.prototype,"handlePositionInPixelsChange",1);c([C("vertical")],kt.prototype,"handleVerticalChange",1);kt.define("sl-split-panel");var qv=E`
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
`;var lt=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${P({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${M(this.value)}
            .checked=${Lt(this.checked)}
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
    `}};lt.styles=[O,xt,qv];c([A('input[type="checkbox"]')],lt.prototype,"input",2);c([D()],lt.prototype,"hasFocus",2);c([p()],lt.prototype,"title",2);c([p()],lt.prototype,"name",2);c([p()],lt.prototype,"value",2);c([p({reflect:!0})],lt.prototype,"size",2);c([p({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],lt.prototype,"checked",2);c([Gt("checked")],lt.prototype,"defaultChecked",2);c([p({reflect:!0})],lt.prototype,"form",2);c([p({type:Boolean,reflect:!0})],lt.prototype,"required",2);c([p({attribute:"help-text"})],lt.prototype,"helpText",2);c([C("checked",{waitUntilFirstUpdate:!0})],lt.prototype,"handleCheckedChange",1);c([C("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);lt.define("sl-switch");var jv=E`
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
`;var Fn=class extends Wt{constructor(e){if(super(e),this.it=Se,e.type!==bt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Se||e==null)return this._t=void 0,this.it=e;if(e===ot)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Fn.directiveName="unsafeHTML",Fn.resultType=1;var ss=lr(Fn);var he=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new G(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
          ${typeof r=="string"?ss(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return x`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){let r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ce(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=ge(this,"select.show",{dir:this.localize.dir()});await _e(this.popup.popup,t,e),this.currentOption&&Nn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ce(this);let{keyframes:t,options:e}=ge(this,"select.hide",{dir:this.localize.dir()});await _e(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,je(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,je(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return x`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${P({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};he.styles=[O,xt,jv];he.dependencies={"sl-icon":te,"sl-popup":fe,"sl-tag":kr};c([A(".select")],he.prototype,"popup",2);c([A(".select__combobox")],he.prototype,"combobox",2);c([A(".select__display-input")],he.prototype,"displayInput",2);c([A(".select__value-input")],he.prototype,"valueInput",2);c([A(".select__listbox")],he.prototype,"listbox",2);c([D()],he.prototype,"hasFocus",2);c([D()],he.prototype,"displayLabel",2);c([D()],he.prototype,"currentOption",2);c([D()],he.prototype,"selectedOptions",2);c([D()],he.prototype,"valueHasChanged",2);c([p()],he.prototype,"name",2);c([D()],he.prototype,"value",1);c([p({attribute:"value"})],he.prototype,"defaultValue",2);c([p({reflect:!0})],he.prototype,"size",2);c([p()],he.prototype,"placeholder",2);c([p({type:Boolean,reflect:!0})],he.prototype,"multiple",2);c([p({attribute:"max-options-visible",type:Number})],he.prototype,"maxOptionsVisible",2);c([p({type:Boolean,reflect:!0})],he.prototype,"disabled",2);c([p({type:Boolean})],he.prototype,"clearable",2);c([p({type:Boolean,reflect:!0})],he.prototype,"open",2);c([p({type:Boolean})],he.prototype,"hoist",2);c([p({type:Boolean,reflect:!0})],he.prototype,"filled",2);c([p({type:Boolean,reflect:!0})],he.prototype,"pill",2);c([p()],he.prototype,"label",2);c([p({reflect:!0})],he.prototype,"placement",2);c([p({attribute:"help-text"})],he.prototype,"helpText",2);c([p({reflect:!0})],he.prototype,"form",2);c([p({type:Boolean,reflect:!0})],he.prototype,"required",2);c([p()],he.prototype,"getTag",2);c([C("disabled",{waitUntilFirstUpdate:!0})],he.prototype,"handleDisabledChange",1);c([C(["defaultValue","value"],{waitUntilFirstUpdate:!0})],he.prototype,"handleValueChange",1);c([C("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);de("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});he.define("sl-select");var qE=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],gi=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let r=e.getTime()-t.getTime(),{unit:i,value:o}=qE.find(s=>Math.abs(r)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=Kl("second"):i==="hour"?s=Kl("minute"):i==="day"?s=Kl("hour"):s=Kl("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([D()],gi.prototype,"isoTime",2);c([D()],gi.prototype,"relativeTime",2);c([p()],gi.prototype,"date",2);c([p()],gi.prototype,"format",2);c([p()],gi.prototype,"numeric",2);c([p({type:Boolean})],gi.prototype,"sync",2);function Kl(t){let r={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return r-Date.now()%r}gi.define("sl-relative-time");Fr.define("sl-spinner");var Hv=E`
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
`;var Be=class extends T{constructor(){super(...arguments),this.formControlController=new it(this),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){let e=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",s=e*t;if(o){let n=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${i} / 2))`}else{let n=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${P({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${Lt(this.value.toString())}
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
    `}};Be.styles=[O,xt,Hv];c([A(".range__control")],Be.prototype,"input",2);c([A(".range__tooltip")],Be.prototype,"output",2);c([D()],Be.prototype,"hasFocus",2);c([D()],Be.prototype,"hasTooltip",2);c([p()],Be.prototype,"title",2);c([p()],Be.prototype,"name",2);c([p({type:Number})],Be.prototype,"value",2);c([p()],Be.prototype,"label",2);c([p({attribute:"help-text"})],Be.prototype,"helpText",2);c([p({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);c([p({type:Number})],Be.prototype,"min",2);c([p({type:Number})],Be.prototype,"max",2);c([p({type:Number})],Be.prototype,"step",2);c([p()],Be.prototype,"tooltip",2);c([p({attribute:!1})],Be.prototype,"tooltipFormatter",2);c([p({reflect:!0})],Be.prototype,"form",2);c([Gt()],Be.prototype,"defaultValue",2);c([_r({passive:!0})],Be.prototype,"handleThumbDragStart",1);c([C("value",{waitUntilFirstUpdate:!0})],Be.prototype,"handleValueChange",1);c([C("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1);c([C("hasTooltip",{waitUntilFirstUpdate:!0})],Be.prototype,"syncRange",1);Be.define("sl-range");var Wv=E`
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
`;var Gv="important",jE=" !"+Gv,Xe=lr(class extends Wt{constructor(t){if(super(t),t.type!==bt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{let i=t[r];return i==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(let i in e){let o=e[i];if(o!=null){this.ft.add(i);let s=typeof o=="string"&&o.endsWith(jE);i.includes("-")||s?r.setProperty(i,s?o.slice(0,-11):o,s?Gv:""):r[i]=o}}return ot}});var ct=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/o*this.max,this.precision):this.roundToPrecision((t-r)/o*this.max,this.precision);return Le(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"){let o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"){let o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let r=1/e;return Math.ceil(t*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys()),r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,x`
      <div
        part="base"
        class=${P({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
                  class=${P({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Xe({clipPath:t?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${ss(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Xe({clipPath:t?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${ss(this.getSymbol(i+1))}
                  </div>
                </span>
              `:x`
              <span
                class=${P({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
              >
                ${ss(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};ct.styles=[O,Wv];ct.dependencies={"sl-icon":te};c([A(".rating")],ct.prototype,"rating",2);c([D()],ct.prototype,"hoverValue",2);c([D()],ct.prototype,"isHovering",2);c([p()],ct.prototype,"label",2);c([p({type:Number})],ct.prototype,"value",2);c([p({type:Number})],ct.prototype,"max",2);c([p({type:Number})],ct.prototype,"precision",2);c([p({type:Boolean,reflect:!0})],ct.prototype,"readonly",2);c([p({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);c([p()],ct.prototype,"getSymbol",2);c([_r({passive:!0})],ct.prototype,"handleTouchMove",1);c([C("hoverValue")],ct.prototype,"handleHoverValueChange",1);c([C("isHovering")],ct.prototype,"handleIsHoveringChange",1);ct.define("sl-rating");co.define("sl-resize-observer");var Kv=E`
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
`;var cr=class extends T{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${P({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};cr.styles=[O,Kv];cr.dependencies={"sl-icon":te};c([D()],cr.prototype,"checked",2);c([D()],cr.prototype,"hasFocus",2);c([p()],cr.prototype,"value",2);c([p({reflect:!0})],cr.prototype,"size",2);c([p({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);c([C("checked")],cr.prototype,"handleCheckedChange",1);c([C("disabled",{waitUntilFirstUpdate:!0})],cr.prototype,"handleDisabledChange",1);cr.define("sl-radio");var Yv=E`
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
`;var Zv=E`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Sr=class extends T{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=Un(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=Un(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=Un(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=Un(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),i=Un(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return x`
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
    `}};Sr.styles=[O,Zv];c([A("slot")],Sr.prototype,"defaultSlot",2);c([D()],Sr.prototype,"disableRole",2);c([p()],Sr.prototype,"label",2);function Un(t){var e;let r="sl-button, sl-radio-button";return(e=t.closest(r))!=null?e:t.querySelector(r)}var nt=class extends T{constructor(){super(...arguments),this.formControlController=new it(this),this.hasSlotController=new xe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?fy:t?py:Ko}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,r.forEach(o=>o.checked=o===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(a=>!a.disabled),i=(e=r.find(a=>a.checked))!=null?e:r[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,n=r.indexOf(i)+o;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=r[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),r=e.find(s=>s.checked),i=e.find(s=>!s.disabled),o=r||i;o&&o.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,o=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
    `}};nt.styles=[O,xt,Yv];nt.dependencies={"sl-button-group":Sr};c([A("slot:not([name])")],nt.prototype,"defaultSlot",2);c([A(".radio-group__validation-input")],nt.prototype,"validationInput",2);c([D()],nt.prototype,"hasButtonGroup",2);c([D()],nt.prototype,"errorMessage",2);c([D()],nt.prototype,"defaultValue",2);c([p()],nt.prototype,"label",2);c([p({attribute:"help-text"})],nt.prototype,"helpText",2);c([p()],nt.prototype,"name",2);c([p({reflect:!0})],nt.prototype,"value",2);c([p({reflect:!0})],nt.prototype,"size",2);c([p({reflect:!0})],nt.prototype,"form",2);c([p({type:Boolean,reflect:!0})],nt.prototype,"required",2);c([C("size",{waitUntilFirstUpdate:!0})],nt.prototype,"handleSizeChange",1);c([C("value")],nt.prototype,"handleValueChange",1);nt.define("sl-radio-group");fe.define("sl-popup");var Xv=E`
  :host {
    display: inline-block;
  }
`;var Jv=null,Yl=class{};Yl.render=function(t,e){Jv(t,e)};self.QrCreator=Yl;(function(t){function e(a,l,u,d){var h={},f=t(u,l);f.u(a),f.J(),d=d||0;var m=f.h(),g=f.h()+2*d;return h.text=a,h.level=l,h.version=u,h.O=g,h.a=function(v,y){return v-=d,y-=d,0>v||v>=m||0>y||y>=m?!1:f.a(v,y)},h}function r(a,l,u,d,h,f,m,g,v,y){function _(w,k,b,S,z,H,B){w?(a.lineTo(k+H,b+B),a.arcTo(k,b,S,z,f)):a.lineTo(k,b)}m?a.moveTo(l+f,u):a.moveTo(l,u),_(g,d,u,d,h,-f,0),_(v,d,h,l,h,0,-f),_(y,l,h,l,u,f,0),_(m,l,u,d,u,0,f)}function i(a,l,u,d,h,f,m,g,v,y){function _(w,k,b,S){a.moveTo(w+b,k),a.lineTo(w,k),a.lineTo(w,k+S),a.arcTo(w,k,w+b,k,f)}m&&_(l,u,f,f),g&&_(d,u,-f,f),v&&_(d,h,-f,-f),y&&_(l,h,f,-f)}function o(a,l){var u=l.fill;if(typeof u=="string")a.fillStyle=u;else{var d=u.type,h=u.colorStops;if(u=u.position.map(m=>Math.round(m*l.size)),d==="linear-gradient")var f=a.createLinearGradient.apply(a,u);else if(d==="radial-gradient")f=a.createRadialGradient.apply(a,u);else throw Error("Unsupported fill");h.forEach(([m,g])=>{f.addColorStop(m,g)}),a.fillStyle=f}}function s(a,l){e:{var u=l.text,d=l.v,h=l.N,f=l.K,m=l.P;for(h=Math.max(1,h||1),f=Math.min(40,f||40);h<=f;h+=1)try{var g=e(u,d,h,m);break e}catch{}g=void 0}if(!g)return null;for(u=a.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),d=g.O,f=l.size/d,u.beginPath(),m=0;m<d;m+=1)for(h=0;h<d;h+=1){var v=u,y=l.left+h*f,_=l.top+m*f,w=m,k=h,b=g.a,S=y+f,z=_+f,H=w-1,B=w+1,j=k-1,R=k+1,re=Math.floor(Math.min(.5,Math.max(0,l.R))*f),ie=b(w,k),Re=b(H,j),We=b(H,k);H=b(H,R);var tr=b(w,R);R=b(B,R),k=b(B,k),B=b(B,j),w=b(w,j),y=Math.round(y),_=Math.round(_),S=Math.round(S),z=Math.round(z),ie?r(v,y,_,S,z,re,!We&&!w,!We&&!tr,!k&&!tr,!k&&!w):i(v,y,_,S,z,re,We&&w&&Re,We&&tr&&H,k&&tr&&R,k&&w&&B)}return o(u,l),u.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Jv=function(a,l){var u={};Object.assign(u,n,a),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,u)):(a=document.createElement("canvas"),a.width=u.size,a.height=u.size,u=s(a,u),l.appendChild(u))}})(function(){function t(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(d){for(var h=0;h<u.length;h+=1)d.put(u[h],8)}}}function e(){var l=[],u=0,d={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,f){for(var m=0;m<f;m+=1)d.m((h>>>f-m-1&1)==1)},f:function(){return u},m:function(h){var f=Math.floor(u/8);l.length<=f&&l.push(0),h&&(l[f]|=128>>>u%8),u+=1}};return d}function r(l,u){function d(w,k){for(var b=-1;7>=b;b+=1)if(!(-1>=w+b||g<=w+b))for(var S=-1;7>=S;S+=1)-1>=k+S||g<=k+S||(m[w+b][k+S]=0<=b&&6>=b&&(S==0||S==6)||0<=S&&6>=S&&(b==0||b==6)||2<=b&&4>=b&&2<=S&&4>=S)}function h(w,k){for(var b=g=4*l+17,S=Array(b),z=0;z<b;z+=1){S[z]=Array(b);for(var H=0;H<b;H+=1)S[z][H]=null}for(m=S,d(0,0),d(g-7,0),d(0,g-7),b=s.G(l),S=0;S<b.length;S+=1)for(z=0;z<b.length;z+=1){H=b[S];var B=b[z];if(m[H][B]==null)for(var j=-2;2>=j;j+=1)for(var R=-2;2>=R;R+=1)m[H+j][B+R]=j==-2||j==2||R==-2||R==2||j==0&&R==0}for(b=8;b<g-8;b+=1)m[b][6]==null&&(m[b][6]=b%2==0);for(b=8;b<g-8;b+=1)m[6][b]==null&&(m[6][b]=b%2==0);for(b=s.w(f<<3|k),S=0;15>S;S+=1)z=!w&&(b>>S&1)==1,m[6>S?S:8>S?S+1:g-15+S][8]=z,m[8][8>S?g-S-1:9>S?15-S:14-S]=z;if(m[g-8][8]=!w,7<=l){for(b=s.A(l),S=0;18>S;S+=1)z=!w&&(b>>S&1)==1,m[Math.floor(S/3)][S%3+g-8-3]=z;for(S=0;18>S;S+=1)z=!w&&(b>>S&1)==1,m[S%3+g-8-3][Math.floor(S/3)]=z}if(v==null){for(w=a.I(l,f),b=e(),S=0;S<y.length;S+=1)z=y[S],b.put(4,4),b.put(z.b(),s.f(4,l)),z.write(b);for(S=z=0;S<w.length;S+=1)z+=w[S].j;if(b.f()>8*z)throw Error("code length overflow. ("+b.f()+">"+8*z+")");for(b.f()+4<=8*z&&b.put(0,4);b.f()%8!=0;)b.m(!1);for(;!(b.f()>=8*z)&&(b.put(236,8),!(b.f()>=8*z));)b.put(17,8);var re=0;for(z=S=0,H=Array(w.length),B=Array(w.length),j=0;j<w.length;j+=1){var ie=w[j].j,Re=w[j].o-ie;for(S=Math.max(S,ie),z=Math.max(z,Re),H[j]=Array(ie),R=0;R<H[j].length;R+=1)H[j][R]=255&b.B()[R+re];for(re+=ie,R=s.C(Re),ie=i(H[j],R.b()-1).l(R),B[j]=Array(R.b()-1),R=0;R<B[j].length;R+=1)Re=R+ie.b()-B[j].length,B[j][R]=0<=Re?ie.c(Re):0}for(R=b=0;R<w.length;R+=1)b+=w[R].o;for(b=Array(b),R=re=0;R<S;R+=1)for(j=0;j<w.length;j+=1)R<H[j].length&&(b[re]=H[j][R],re+=1);for(R=0;R<z;R+=1)for(j=0;j<w.length;j+=1)R<B[j].length&&(b[re]=B[j][R],re+=1);v=b}for(w=v,b=-1,S=g-1,z=7,H=0,k=s.F(k),B=g-1;0<B;B-=2)for(B==6&&--B;;){for(j=0;2>j;j+=1)m[S][B-j]==null&&(R=!1,H<w.length&&(R=(w[H]>>>z&1)==1),k(S,B-j)&&(R=!R),m[S][B-j]=R,--z,z==-1&&(H+=1,z=7));if(S+=b,0>S||g<=S){S-=b,b=-b;break}}}var f=o[u],m=null,g=0,v=null,y=[],_={u:function(w){w=t(w),y.push(w),v=null},a:function(w,k){if(0>w||g<=w||0>k||g<=k)throw Error(w+","+k);return m[w][k]},h:function(){return g},J:function(){for(var w=0,k=0,b=0;8>b;b+=1){h(!0,b);var S=s.D(_);(b==0||w>S)&&(w=S,k=b)}h(!1,k)}};return _}function i(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var d=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var m=Array(l.length-f+u),g=0;g<l.length-f;g+=1)m[g]=l[g+f];return m}(),h={c:function(f){return d[f]},b:function(){return d.length},multiply:function(f){for(var m=Array(h.b()+f.b()-1),g=0;g<h.b();g+=1)for(var v=0;v<f.b();v+=1)m[g+v]^=n.i(n.g(h.c(g))+n.g(f.c(v)));return i(m,0)},l:function(f){if(0>h.b()-f.b())return h;for(var m=n.g(h.c(0))-n.g(f.c(0)),g=Array(h.b()),v=0;v<h.b();v+=1)g[v]=h.c(v);for(v=0;v<f.b();v+=1)g[v]^=n.i(n.g(f.c(v))+m);return i(g,0).l(f)}};return h}r.s=function(l){for(var u=[],d=0;d<l.length;d++){var h=l.charCodeAt(d);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(d++,h=65536+((h&1023)<<10|l.charCodeAt(d)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var o={L:1,M:0,Q:3,H:2},s=function(){function l(h){for(var f=0;h!=0;)f+=1,h>>>=1;return f}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(h){for(var f=h<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(h<<10|f)^21522},A:function(h){for(var f=h<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return h<<12|f},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var f=i([1],0),m=0;m<h;m+=1)f=f.multiply(i([1,n.i(m)],0));return f},f:function(h,f){if(h!=4||1>f||40<f)throw Error("mode: "+h+"; type: "+f);return 10>f?8:16},D:function(h){for(var f=h.h(),m=0,g=0;g<f;g+=1)for(var v=0;v<f;v+=1){for(var y=0,_=h.a(g,v),w=-1;1>=w;w+=1)if(!(0>g+w||f<=g+w))for(var k=-1;1>=k;k+=1)0>v+k||f<=v+k||(w!=0||k!=0)&&_==h.a(g+w,v+k)&&(y+=1);5<y&&(m+=3+y-5)}for(g=0;g<f-1;g+=1)for(v=0;v<f-1;v+=1)y=0,h.a(g,v)&&(y+=1),h.a(g+1,v)&&(y+=1),h.a(g,v+1)&&(y+=1),h.a(g+1,v+1)&&(y+=1),(y==0||y==4)&&(m+=3);for(g=0;g<f;g+=1)for(v=0;v<f-6;v+=1)h.a(g,v)&&!h.a(g,v+1)&&h.a(g,v+2)&&h.a(g,v+3)&&h.a(g,v+4)&&!h.a(g,v+5)&&h.a(g,v+6)&&(m+=40);for(v=0;v<f;v+=1)for(g=0;g<f-6;g+=1)h.a(g,v)&&!h.a(g+1,v)&&h.a(g+2,v)&&h.a(g+3,v)&&h.a(g+4,v)&&!h.a(g+5,v)&&h.a(g+6,v)&&(m+=40);for(v=y=0;v<f;v+=1)for(g=0;g<f;g+=1)h.a(g,v)&&(y+=1);return m+=Math.abs(100*y/f/f-50)/5*10}};return d}(),n=function(){for(var l=Array(256),u=Array(256),d=0;8>d;d+=1)l[d]=1<<d;for(d=8;256>d;d+=1)l[d]=l[d-4]^l[d-5]^l[d-6]^l[d-8];for(d=0;255>d;d+=1)u[l[d]]=d;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),a=function(){function l(h,f){switch(f){case o.L:return u[4*(h-1)];case o.M:return u[4*(h-1)+1];case o.Q:return u[4*(h-1)+2];case o.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(h,f){var m=l(h,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+f);h=m.length/3,f=[];for(var g=0;g<h;g+=1)for(var v=m[3*g],y=m[3*g+1],_=m[3*g+2],w=0;w<v;w+=1){var k=_,b={};b.o=y,b.j=k,f.push(b)}return f}};return d}();return r}());var Qv=QrCreator;var Yt=class extends T{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Qv.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Xe({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Yt.styles=[O,Xv];c([A("canvas")],Yt.prototype,"canvas",2);c([p()],Yt.prototype,"value",2);c([p()],Yt.prototype,"label",2);c([p({type:Number})],Yt.prototype,"size",2);c([p()],Yt.prototype,"fill",2);c([p()],Yt.prototype,"background",2);c([p({type:Number})],Yt.prototype,"radius",2);c([p({attribute:"error-correction"})],Yt.prototype,"errorCorrection",2);c([C(["background","errorCorrection","fill","radius","size","value"])],Yt.prototype,"generate",1);Yt.define("sl-qr-code");var Zl=E`
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
`;var e0=E`
  ${Zl}

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
`;var Zt=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return fi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${P({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Zt.styles=[O,e0];c([A(".button")],Zt.prototype,"input",2);c([A(".hidden-input")],Zt.prototype,"hiddenInput",2);c([D()],Zt.prototype,"hasFocus",2);c([p({type:Boolean,reflect:!0})],Zt.prototype,"checked",2);c([p()],Zt.prototype,"value",2);c([p({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);c([p({reflect:!0})],Zt.prototype,"size",2);c([p({type:Boolean,reflect:!0})],Zt.prototype,"pill",2);c([C("disabled",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleDisabledChange",1);Zt.define("sl-radio-button");var t0=E`
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
`;var zt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return x`
      <div
        part="base"
        class=${P({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};zt.styles=[O,t0];zt.dependencies={"sl-icon":te};c([A(".option__label")],zt.prototype,"defaultSlot",2);c([D()],zt.prototype,"current",2);c([D()],zt.prototype,"selected",2);c([D()],zt.prototype,"hasHover",2);c([p({reflect:!0})],zt.prototype,"value",2);c([p({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);c([C("disabled")],zt.prototype,"handleDisabledChange",1);c([C("selected")],zt.prototype,"handleSelectedChange",1);c([C("value")],zt.prototype,"handleValueChange",1);zt.define("sl-option");var r0=E`
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
`;var po=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*e,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return x`
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
    `}};po.styles=[O,r0];c([A(".progress-ring__indicator")],po.prototype,"indicator",2);c([D()],po.prototype,"indicatorOffset",2);c([p({type:Number,reflect:!0})],po.prototype,"value",2);c([p()],po.prototype,"label",2);po.define("sl-progress-ring");var i0=E`
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
`;var ns=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${P({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Xe({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};ns.styles=[O,i0];c([p({type:Number,reflect:!0})],ns.prototype,"value",2);c([p({type:Boolean,reflect:!0})],ns.prototype,"indeterminate",2);c([p()],ns.prototype,"label",2);ns.define("sl-progress-bar");var o0=E`
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
`;var gh=class extends T{render(){return x` <slot part="base" class="menu-label"></slot> `}};gh.styles=[O,o0];gh.define("sl-menu-label");var s0=E`
  :host {
    display: contents;
  }
`;var ur=class extends T{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return x` <slot></slot> `}};ur.styles=[O,s0];c([p({reflect:!0})],ur.prototype,"attr",2);c([p({attribute:"attr-old-value",type:Boolean,reflect:!0})],ur.prototype,"attrOldValue",2);c([p({attribute:"char-data",type:Boolean,reflect:!0})],ur.prototype,"charData",2);c([p({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ur.prototype,"charDataOldValue",2);c([p({attribute:"child-list",type:Boolean,reflect:!0})],ur.prototype,"childList",2);c([p({type:Boolean,reflect:!0})],ur.prototype,"disabled",2);c([C("disabled")],ur.prototype,"handleDisabledChange",1);c([C("attr",{waitUntilFirstUpdate:!0}),C("attr-old-value",{waitUntilFirstUpdate:!0}),C("char-data",{waitUntilFirstUpdate:!0}),C("char-data-old-value",{waitUntilFirstUpdate:!0}),C("childList",{waitUntilFirstUpdate:!0})],ur.prototype,"handleChange",1);ur.define("sl-mutation-observer");var n0=E`
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
`;var se=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let o=e??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(t,o,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return x`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${P({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Lt(this.value)}
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
    `}};se.styles=[O,xt,n0];se.dependencies={"sl-icon":te};c([A(".input__control")],se.prototype,"input",2);c([D()],se.prototype,"hasFocus",2);c([p()],se.prototype,"title",2);c([p({reflect:!0})],se.prototype,"type",2);c([p()],se.prototype,"name",2);c([p()],se.prototype,"value",2);c([Gt()],se.prototype,"defaultValue",2);c([p({reflect:!0})],se.prototype,"size",2);c([p({type:Boolean,reflect:!0})],se.prototype,"filled",2);c([p({type:Boolean,reflect:!0})],se.prototype,"pill",2);c([p()],se.prototype,"label",2);c([p({attribute:"help-text"})],se.prototype,"helpText",2);c([p({type:Boolean})],se.prototype,"clearable",2);c([p({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([p()],se.prototype,"placeholder",2);c([p({type:Boolean,reflect:!0})],se.prototype,"readonly",2);c([p({attribute:"password-toggle",type:Boolean})],se.prototype,"passwordToggle",2);c([p({attribute:"password-visible",type:Boolean})],se.prototype,"passwordVisible",2);c([p({attribute:"no-spin-buttons",type:Boolean})],se.prototype,"noSpinButtons",2);c([p({reflect:!0})],se.prototype,"form",2);c([p({type:Boolean,reflect:!0})],se.prototype,"required",2);c([p()],se.prototype,"pattern",2);c([p({type:Number})],se.prototype,"minlength",2);c([p({type:Number})],se.prototype,"maxlength",2);c([p()],se.prototype,"min",2);c([p()],se.prototype,"max",2);c([p()],se.prototype,"step",2);c([p()],se.prototype,"autocapitalize",2);c([p()],se.prototype,"autocorrect",2);c([p()],se.prototype,"autocomplete",2);c([p({type:Boolean})],se.prototype,"autofocus",2);c([p()],se.prototype,"enterkeyhint",2);c([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],se.prototype,"spellcheck",2);c([p()],se.prototype,"inputmode",2);c([C("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);c([C("step",{waitUntilFirstUpdate:!0})],se.prototype,"handleStepChange",1);c([C("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);se.define("sl-input");var a0=E`
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
`;var Xl=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath(),i=r.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;let n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),i=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===t?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Xl.styles=[O,a0];c([A("slot")],Xl.prototype,"defaultSlot",2);Xl.define("sl-menu");var l0=E`
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
`;var Bn=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),Bn(i,e);return!0},Jl=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},c0=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),GE(e)}};function HE(t){this._$AN!==void 0?(Jl(this),this._$AM=t,c0(this)):this._$AM=t}function WE(t,e=!1,r=0){let i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)Bn(i[s],!1),Jl(i[s]);else i!=null&&(Bn(i,!1),Jl(i));else Bn(this,t)}var GE=t=>{t.type==bt.CHILD&&(t._$AP??=WE,t._$AQ??=HE)},Ql=class extends Wt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),c0(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(Bn(this,e),Jl(this))}setValue(e){if(Hl(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var u0=()=>new yh,yh=class{},bh=new WeakMap,d0=lr(class extends Ql{render(t){return Se}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Se}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=bh.get(e);r===void 0&&(r=new WeakMap,bh.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?bh.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var h0=class{constructor(t,e){this.popupRef=u0(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break;default:break}},this.handleClick=r=>{var i;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(i=r.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{let r=this.host.renderRoot.querySelector("slot[name='submenu']"),i=r?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:s,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of e.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,s)=>{var n;let a=(n=e.get(s))!=null?n:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?x`
      <sl-popup
        ${d0(this.popupRef)}
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
    `:x` <slot name="submenu" hidden></slot> `}};var St=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new xe(this,"submenu"),this.submenuController=new h0(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return _v(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return x`
      <div
        id="anchor"
        part="base"
        class=${P({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}};St.styles=[O,l0];St.dependencies={"sl-icon":te,"sl-popup":fe,"sl-spinner":Fr};c([A("slot:not([name])")],St.prototype,"defaultSlot",2);c([A(".menu-item")],St.prototype,"menuItem",2);c([p()],St.prototype,"type",2);c([p({type:Boolean,reflect:!0})],St.prototype,"checked",2);c([p()],St.prototype,"value",2);c([p({type:Boolean,reflect:!0})],St.prototype,"loading",2);c([p({type:Boolean,reflect:!0})],St.prototype,"disabled",2);c([C("checked")],St.prototype,"handleCheckedChange",1);c([C("disabled")],St.prototype,"handleDisabledChange",1);c([C("type")],St.prototype,"handleTypeChange",1);St.define("sl-menu-item");var p0=E`
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
`;var bi=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.preventDefault(),mi(this.base,{onMove:i=>{this.position=parseFloat(Le(i/e*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let i=t.shiftKey?10:1,o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight")&&(o-=i),(e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft")&&(o+=i),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=Le(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){let t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        id="image-comparer"
        class=${P({"image-comparer":!0,"image-comparer--rtl":t})}
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
    `}};bi.styles=[O,p0];bi.scopedElement={"sl-icon":te};c([A(".image-comparer")],bi.prototype,"base",2);c([A(".image-comparer__handle")],bi.prototype,"handle",2);c([p({type:Number,reflect:!0})],bi.prototype,"position",2);c([C("position",{waitUntilFirstUpdate:!0})],bi.prototype,"handlePositionChange",1);bi.define("sl-image-comparer");var f0=E`
  :host {
    display: block;
  }
`;var vh=new Map;function m0(t,e="cors"){let r=vh.get(t);if(r!==void 0)return Promise.resolve(r);let i=fetch(t,{mode:e}).then(async o=>{let s={ok:o.ok,status:o.status,html:await o.text()};return vh.set(t,s),s});return vh.set(t,i),i}var fo=class extends T{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(r=>e.setAttribute(r.name,r.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await m0(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return x`<slot></slot>`}};fo.styles=[O,f0];c([p()],fo.prototype,"src",2);c([p()],fo.prototype,"mode",2);c([p({attribute:"allow-scripts",type:Boolean})],fo.prototype,"allowScripts",2);c([C("src")],fo.prototype,"handleSrcChange",1);fo.define("sl-include");te.define("sl-icon");ze.define("sl-icon-button");var Vn=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:o,unitDisplay:this.display})}};c([p({type:Number})],Vn.prototype,"value",2);c([p()],Vn.prototype,"unit",2);c([p()],Vn.prototype,"display",2);Vn.define("sl-format-bytes");var Ct=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return x`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};c([p()],Ct.prototype,"date",2);c([p()],Ct.prototype,"weekday",2);c([p()],Ct.prototype,"era",2);c([p()],Ct.prototype,"year",2);c([p()],Ct.prototype,"month",2);c([p()],Ct.prototype,"day",2);c([p()],Ct.prototype,"hour",2);c([p()],Ct.prototype,"minute",2);c([p()],Ct.prototype,"second",2);c([p({attribute:"time-zone-name"})],Ct.prototype,"timeZoneName",2);c([p({attribute:"time-zone"})],Ct.prototype,"timeZone",2);c([p({attribute:"hour-format"})],Ct.prototype,"hourFormat",2);Ct.define("sl-format-date");var Xt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([p({type:Number})],Xt.prototype,"value",2);c([p()],Xt.prototype,"type",2);c([p({attribute:"no-grouping",type:Boolean})],Xt.prototype,"noGrouping",2);c([p()],Xt.prototype,"currency",2);c([p({attribute:"currency-display"})],Xt.prototype,"currencyDisplay",2);c([p({attribute:"minimum-integer-digits",type:Number})],Xt.prototype,"minimumIntegerDigits",2);c([p({attribute:"minimum-fraction-digits",type:Number})],Xt.prototype,"minimumFractionDigits",2);c([p({attribute:"maximum-fraction-digits",type:Number})],Xt.prototype,"maximumFractionDigits",2);c([p({attribute:"minimum-significant-digits",type:Number})],Xt.prototype,"minimumSignificantDigits",2);c([p({attribute:"maximum-significant-digits",type:Number})],Xt.prototype,"maximumSignificantDigits",2);Xt.define("sl-format-number");var g0=E`
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
`;var qn=class extends T{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};qn.styles=[O,g0];c([p({type:Boolean,reflect:!0})],qn.prototype,"vertical",2);c([C("vertical")],qn.prototype,"handleVerticalChange",1);qn.define("sl-divider");var b0=E`
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
`;var y0=new WeakMap;function v0(t){let e=y0.get(t);return e||(e=window.getComputedStyle(t,null),y0.set(t,e)),e}function KE(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=v0(t);return e.visibility!=="hidden"&&e.display!=="none"}function YE(t){let e=v0(t),{overflowY:r,overflowX:i}=e;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&r==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function ZE(t){let e=t.tagName.toLowerCase(),r=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!KE(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:YE(t)}function w0(t){var e,r;let i=ec(t),o=(e=i[0])!=null?e:null,s=(r=i[i.length-1])!=null?r:null;return{start:o,end:s}}function XE(t,e){var r;return((r=t.getRootNode({composed:!0}))==null?void 0:r.host)!==e}function ec(t){let e=new WeakMap,r=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!r.includes(o)&&ZE(o)&&r.push(o),o instanceof HTMLSlotElement&&XE(o,t)&&o.assignedElements({flatten:!0}).forEach(s=>{i(s)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(let s of o.children)i(s)}return i(t),r.sort((o,s)=>{let n=Number(o.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}function*wh(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*hy(wh(t.shadowRoot.activeElement))))}function JE(){return[...wh()].pop()}var jn=[],tc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var r;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let i=JE();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let o=ec(this.element),s=o.findIndex(a=>a===i);this.previousFocus=this.currentFocus;let n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=o.length?s=0:s+n<0?s=o.length-1:s+=n,this.previousFocus=this.currentFocus;let a=o[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});let l=[...wh()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){jn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){jn=jn.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return jn[jn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=ec(this.element);if(!this.element.matches(":focus-within")){let e=t[0],r=t[t.length-1],i=this.tabDirection==="forward"?e:r;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function _0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Tt=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new G(this),this.modal=new tc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),uo(this)))}disconnectedCallback(){super.disconnectedCallback(),ho(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=ge(this,"drawer.denyClose",{dir:this.localize.dir()});_e(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),uo(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ce(this.drawer),Ce(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=ge(this,`drawer.show${_0(this.placement)}`,{dir:this.localize.dir()}),r=ge(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([_e(this.panel,e.keyframes,e.options),_e(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ho(this)),await Promise.all([Ce(this.drawer),Ce(this.overlay)]);let t=ge(this,`drawer.hide${_0(this.placement)}`,{dir:this.localize.dir()}),e=ge(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([_e(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),_e(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),uo(this)),this.open&&this.contained&&(this.modal.deactivate(),ho(this))}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${P({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
    `}};Tt.styles=[O,b0];Tt.dependencies={"sl-icon-button":ze};c([A(".drawer")],Tt.prototype,"drawer",2);c([A(".drawer__panel")],Tt.prototype,"panel",2);c([A(".drawer__overlay")],Tt.prototype,"overlay",2);c([p({type:Boolean,reflect:!0})],Tt.prototype,"open",2);c([p({reflect:!0})],Tt.prototype,"label",2);c([p({reflect:!0})],Tt.prototype,"placement",2);c([p({type:Boolean,reflect:!0})],Tt.prototype,"contained",2);c([p({attribute:"no-header",type:Boolean,reflect:!0})],Tt.prototype,"noHeader",2);c([C("open",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleOpenChange",1);c([C("contained",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleNoModalChange",1);de("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});de("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});de("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});de("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});de("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});de("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});de("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});de("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Tt.define("sl-drawer");var x0=E`
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
`;var Je=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;let s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>w0(i).start),r;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=e.button;break;default:r=e}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ce(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=ge(this,"dropdown.show",{dir:this.localize.dir()});await _e(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ce(this);let{keyframes:t,options:e}=ge(this,"dropdown.hide",{dir:this.localize.dir()});await _e(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
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
        class=${P({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Je.styles=[O,x0];Je.dependencies={"sl-popup":fe};c([A(".dropdown")],Je.prototype,"popup",2);c([A(".dropdown__trigger")],Je.prototype,"trigger",2);c([A(".dropdown__panel")],Je.prototype,"panel",2);c([p({type:Boolean,reflect:!0})],Je.prototype,"open",2);c([p({reflect:!0})],Je.prototype,"placement",2);c([p({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);c([p({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Je.prototype,"stayOpenOnSelect",2);c([p({attribute:!1})],Je.prototype,"containingElement",2);c([p({type:Number})],Je.prototype,"distance",2);c([p({type:Number})],Je.prototype,"skidding",2);c([p({type:Boolean})],Je.prototype,"hoist",2);c([p({reflect:!0})],Je.prototype,"sync",2);c([C("open",{waitUntilFirstUpdate:!0})],Je.prototype,"handleOpenChange",1);de("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});de("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Je.define("sl-dropdown");var k0=E`
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
`;var Qe=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]"),o=this.from,s="";r?[o,s]=this.from.trim().split("."):i&&([o,s]=this.from.trim().replace(/\]$/,"").split("["));let n="getElementById"in e?e.getElementById(o):null;n?i?t=n.getAttribute(s)||"":r?t=n[s]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,s=ge(this,"copy.in",{dir:"ltr"}),n=ge(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?r:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return x`
      <sl-tooltip
        class=${P({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Qe.styles=[O,k0];Qe.dependencies={"sl-icon":te,"sl-tooltip":Ze};c([A('slot[name="copy-icon"]')],Qe.prototype,"copyIcon",2);c([A('slot[name="success-icon"]')],Qe.prototype,"successIcon",2);c([A('slot[name="error-icon"]')],Qe.prototype,"errorIcon",2);c([A("sl-tooltip")],Qe.prototype,"tooltip",2);c([D()],Qe.prototype,"isCopying",2);c([D()],Qe.prototype,"status",2);c([p()],Qe.prototype,"value",2);c([p()],Qe.prototype,"from",2);c([p({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);c([p({attribute:"copy-label"})],Qe.prototype,"copyLabel",2);c([p({attribute:"success-label"})],Qe.prototype,"successLabel",2);c([p({attribute:"error-label"})],Qe.prototype,"errorLabel",2);c([p({attribute:"feedback-duration",type:Number})],Qe.prototype,"feedbackDuration",2);c([p({attribute:"tooltip-placement"})],Qe.prototype,"tooltipPlacement",2);c([p({type:Boolean})],Qe.prototype,"hoist",2);de("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});de("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Qe.define("sl-copy-button");var S0=E`
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
`;var Jt=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ce(this.body);let{keyframes:e,options:r}=ge(this,"details.show",{dir:this.localize.dir()});await _e(this.body,ts(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ce(this.body);let{keyframes:e,options:r}=ge(this,"details.hide",{dir:this.localize.dir()});await _e(this.body,ts(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,je(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,je(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return x`
      <details
        part="base"
        class=${P({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};Jt.styles=[O,S0];Jt.dependencies={"sl-icon":te};c([A(".details")],Jt.prototype,"details",2);c([A(".details__header")],Jt.prototype,"header",2);c([A(".details__body")],Jt.prototype,"body",2);c([A(".details__expand-icon-slot")],Jt.prototype,"expandIconSlot",2);c([p({type:Boolean,reflect:!0})],Jt.prototype,"open",2);c([p()],Jt.prototype,"summary",2);c([p({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([C("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);de("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});de("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Jt.define("sl-details");var C0=E`
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
`;var dr=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new G(this),this.modal=new tc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),uo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ho(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=ge(this,"dialog.denyClose",{dir:this.localize.dir()});_e(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),uo(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ce(this.dialog),Ce(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=ge(this,"dialog.show",{dir:this.localize.dir()}),r=ge(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([_e(this.panel,e.keyframes,e.options),_e(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ce(this.dialog),Ce(this.overlay)]);let t=ge(this,"dialog.hide",{dir:this.localize.dir()}),e=ge(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([_e(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),_e(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ho(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${P({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
    `}};dr.styles=[O,C0];dr.dependencies={"sl-icon-button":ze};c([A(".dialog")],dr.prototype,"dialog",2);c([A(".dialog__panel")],dr.prototype,"panel",2);c([A(".dialog__overlay")],dr.prototype,"overlay",2);c([p({type:Boolean,reflect:!0})],dr.prototype,"open",2);c([p({reflect:!0})],dr.prototype,"label",2);c([p({attribute:"no-header",type:Boolean,reflect:!0})],dr.prototype,"noHeader",2);c([C("open",{waitUntilFirstUpdate:!0})],dr.prototype,"handleOpenChange",1);de("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});de("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});de("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});de("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});dr.define("sl-dialog");Ke.define("sl-checkbox");var T0=E`
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
`;var ye=class extends T{constructor(){super(...arguments),this.formControlController=new it(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.localize=new G(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ko}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?os`a`:os`button`;return fi`
      <${e}
        part="base"
        class=${P({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?fi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?fi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};ye.styles=[O,Zl];ye.dependencies={"sl-icon":te,"sl-spinner":Fr};c([A(".button")],ye.prototype,"button",2);c([D()],ye.prototype,"hasFocus",2);c([D()],ye.prototype,"invalid",2);c([p()],ye.prototype,"title",2);c([p({reflect:!0})],ye.prototype,"variant",2);c([p({reflect:!0})],ye.prototype,"size",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"caret",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"loading",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"outline",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"pill",2);c([p({type:Boolean,reflect:!0})],ye.prototype,"circle",2);c([p()],ye.prototype,"type",2);c([p()],ye.prototype,"name",2);c([p()],ye.prototype,"value",2);c([p()],ye.prototype,"href",2);c([p()],ye.prototype,"target",2);c([p()],ye.prototype,"rel",2);c([p()],ye.prototype,"download",2);c([p()],ye.prototype,"form",2);c([p({attribute:"formaction"})],ye.prototype,"formAction",2);c([p({attribute:"formenctype"})],ye.prototype,"formEnctype",2);c([p({attribute:"formmethod"})],ye.prototype,"formMethod",2);c([p({attribute:"formnovalidate",type:Boolean})],ye.prototype,"formNoValidate",2);c([p({attribute:"formtarget"})],ye.prototype,"formTarget",2);c([C("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);function et(t,e){QE(t)&&(t="100%");let r=eA(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Hn(t){return Math.min(1,Math.max(0,t))}function QE(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function eA(t){return typeof t=="string"&&t.indexOf("%")!==-1}function rc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Wn(t){return Number(t)<=1?`${Number(t)*100}%`:t}function yi(t){return t.length===1?"0"+t:String(t)}function E0(t,e,r){return{r:et(t,255)*255,g:et(e,255)*255,b:et(r,255)*255}}function xh(t,e,r){t=et(t,255),e=et(e,255),r=et(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=0,a=(i+o)/2;if(i===o)n=0,s=0;else{let l=i-o;switch(n=a>.5?l/(2-i-o):l/(i+o),i){case t:s=(e-r)/l+(e<r?6:0);break;case e:s=(r-t)/l+2;break;case r:s=(t-e)/l+4;break;default:break}s/=6}return{h:s,s:n,l:a}}function _h(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function A0(t,e,r){let i,o,s;if(t=et(t,360),e=et(e,100),r=et(r,100),e===0)o=r,s=r,i=r;else{let n=r<.5?r*(1+e):r+e-r*e,a=2*r-n;i=_h(a,n,t+1/3),o=_h(a,n,t),s=_h(a,n,t-1/3)}return{r:i*255,g:o*255,b:s*255}}function kh(t,e,r){t=et(t,255),e=et(e,255),r=et(r,255);let i=Math.max(t,e,r),o=Math.min(t,e,r),s=0,n=i,a=i-o,l=i===0?0:a/i;if(i===o)s=0;else{switch(i){case t:s=(e-r)/a+(e<r?6:0);break;case e:s=(r-t)/a+2;break;case r:s=(t-e)/a+4;break;default:break}s/=6}return{h:s,s:l,v:n}}function O0(t,e,r){t=et(t,360)*6,e=et(e,100),r=et(r,100);let i=Math.floor(t),o=t-i,s=r*(1-e),n=r*(1-o*e),a=r*(1-(1-o)*e),l=i%6,u=[r,n,s,s,a,r][l],d=[a,r,r,n,s,s][l],h=[s,s,a,r,r,n][l];return{r:u*255,g:d*255,b:h*255}}function Sh(t,e,r,i){let o=[yi(Math.round(t).toString(16)),yi(Math.round(e).toString(16)),yi(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function $0(t,e,r,i,o){let s=[yi(Math.round(t).toString(16)),yi(Math.round(e).toString(16)),yi(Math.round(r).toString(16)),yi(tA(i))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function I0(t,e,r,i){let o=t/100,s=e/100,n=r/100,a=i/100,l=255*(1-o)*(1-a),u=255*(1-s)*(1-a),d=255*(1-n)*(1-a);return{r:l,g:u,b:d}}function Ch(t,e,r){let i=1-t/255,o=1-e/255,s=1-r/255,n=Math.min(i,o,s);return n===1?(i=0,o=0,s=0):(i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100,s=(s-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(o),y:Math.round(s),k:Math.round(n)}}function tA(t){return Math.round(parseFloat(t)*255).toString(16)}function Th(t){return Et(t)/255}function Et(t){return parseInt(t,16)}function P0(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Gn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function L0(t){let e={r:0,g:0,b:0},r=1,i=null,o=null,s=null,n=!1,a=!1;return typeof t=="string"&&(t=oA(t)),typeof t=="object"&&(Rt(t.r)&&Rt(t.g)&&Rt(t.b)?(e=E0(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Rt(t.h)&&Rt(t.s)&&Rt(t.v)?(i=Wn(t.s),o=Wn(t.v),e=O0(t.h,i,o),n=!0,a="hsv"):Rt(t.h)&&Rt(t.s)&&Rt(t.l)?(i=Wn(t.s),s=Wn(t.l),e=A0(t.h,i,s),n=!0,a="hsl"):Rt(t.c)&&Rt(t.m)&&Rt(t.y)&&Rt(t.k)&&(e=I0(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=rc(r),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var rA="[-\\+]?\\d+%?",iA="[-\\+]?\\d*\\.\\d+%?",vi="(?:"+iA+")|(?:"+rA+")",Eh="[\\s|\\(]+("+vi+")[,|\\s]+("+vi+")[,|\\s]+("+vi+")\\s*\\)?",ic="[\\s|\\(]+("+vi+")[,|\\s]+("+vi+")[,|\\s]+("+vi+")[,|\\s]+("+vi+")\\s*\\)?",Qt={CSS_UNIT:new RegExp(vi),rgb:new RegExp("rgb"+Eh),rgba:new RegExp("rgba"+ic),hsl:new RegExp("hsl"+Eh),hsla:new RegExp("hsla"+ic),hsv:new RegExp("hsv"+Eh),hsva:new RegExp("hsva"+ic),cmyk:new RegExp("cmyk"+ic),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function oA(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Gn[t])t=Gn[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Qt.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=Qt.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Qt.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=Qt.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Qt.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=Qt.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Qt.cmyk.exec(t),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:(r=Qt.hex8.exec(t),r?{r:Et(r[1]),g:Et(r[2]),b:Et(r[3]),a:Th(r[4]),format:e?"name":"hex8"}:(r=Qt.hex6.exec(t),r?{r:Et(r[1]),g:Et(r[2]),b:Et(r[3]),format:e?"name":"hex"}:(r=Qt.hex4.exec(t),r?{r:Et(r[1]+r[1]),g:Et(r[2]+r[2]),b:Et(r[3]+r[3]),a:Th(r[4]+r[4]),format:e?"name":"hex8"}:(r=Qt.hex3.exec(t),r?{r:Et(r[1]+r[1]),g:Et(r[2]+r[2]),b:Et(r[3]+r[3]),format:e?"name":"hex"}:!1))))))))))}function Rt(t){return typeof t=="number"?!Number.isNaN(t):Qt.CSS_UNIT.test(t)}var Kn=class t{constructor(e="",r={}){if(e instanceof t)return e;typeof e=="number"&&(e=P0(e)),this.originalInput=e;let i=L0(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),r,i,o,s=e.r/255,n=e.g/255,a=e.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=rc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=kh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=kh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${i}%, ${o}%)`:`hsva(${r}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let e=xh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=xh(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${i}%, ${o}%)`:`hsla(${r}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Sh(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return $0(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${r}, ${i})`:`rgba(${e}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){let e=r=>`${Math.round(et(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=r=>Math.round(et(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ch(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:r,y:i,k:o}=Ch(this.r,this.g,this.b);return`cmyk(${e}, ${r}, ${i}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+Sh(this.r,this.g,this.b,!1);for(let[r,i]of Object.entries(Gn))if(e===i)return r;return!1}toString(e){let r=!!e;e=e??this.format;let i=!1,o=this.a<1&&this.a>=0;return!r&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let r=this.toHsl();return r.l+=e/100,r.l=Hn(r.l),new t(r)}brighten(e=10){let r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)}darken(e=10){let r=this.toHsl();return r.l-=e/100,r.l=Hn(r.l),new t(r)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let r=this.toHsl();return r.s-=e/100,r.s=Hn(r.s),new t(r)}saturate(e=10){let r=this.toHsl();return r.s+=e/100,r.s=Hn(r.s),new t(r)}greyscale(){return this.desaturate(100)}spin(e){let r=this.toHsl(),i=(r.h+e)%360;return r.h=i<0?360+i:i,new t(r)}mix(e,r=50){let i=this.toRgb(),o=new t(e).toRgb(),s=r/100,n={r:(o.r-i.r)*s+i.r,g:(o.g-i.g)*s+i.g,b:(o.b-i.b)*s+i.b,a:(o.a-i.a)*s+i.a};return new t(n)}analogous(e=6,r=30){let i=this.toHsl(),o=360/r,s=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,s.push(new t(i));return s}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let r=this.toHsv(),{h:i}=r,{s:o}=r,{v:s}=r,n=[],a=1/e;for(;e--;)n.push(new t({h:i,s:o,v:s})),s=(s+a)%1;return n}splitcomplement(){let e=this.toHsl(),{h:r}=e;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]}onBackground(e){let r=this.toRgb(),i=new t(e).toRgb(),o=r.a+i.a*(1-r.a);return new t({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let r=this.toHsl(),{h:i}=r,o=[this],s=360/e;for(let n=1;n<e;n++)o.push(new t({h:(i+n*s)%360,s:r.s,l:r.l}));return o}equals(e){let r=new t(e);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}};var z0="EyeDropper"in window,pe=class extends T{constructor(){super(),this.formControlController=new it(this),this.isSafeValue=!1,this.localize=new G(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),mi(e,{onMove:n=>{this.alpha=Le(n/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),t.preventDefault(),mi(e,{onMove:n=>{this.hue=Le(n/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),r=e.querySelector(".color-picker__grid-handle"),{width:i,height:o}=e.getBoundingClientRect(),s=this.value,n=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,mi(e,{onMove:(a,l)=>{this.saturation=Le(a/i*100,0,100),this.brightness=Le(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Le(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Le(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Le(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Le(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Le(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Le(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Le(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Le(this.brightness-e,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new Kn(t);if(!e.isValid)return null;let r=e.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!z0)return;new EyeDropper().open().then(e=>{let r=this.value;this.setColor(e.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,r,i=100){let o=new Kn(`hsva(${t}, ${e}%, ${r}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let r=this.parseColor(e);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=x`
      <div
        part="base"
        class=${P({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
            class=${P({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Xe({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${Xe({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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
            ${z0?x`
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
          class=${P({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Xe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};pe.styles=[O,T0];pe.dependencies={"sl-button-group":Sr,"sl-button":ye,"sl-dropdown":Je,"sl-icon":te,"sl-input":se,"sl-visually-hidden":On};c([A('[part~="base"]')],pe.prototype,"base",2);c([A('[part~="input"]')],pe.prototype,"input",2);c([A(".color-dropdown")],pe.prototype,"dropdown",2);c([A('[part~="preview"]')],pe.prototype,"previewButton",2);c([A('[part~="trigger"]')],pe.prototype,"trigger",2);c([D()],pe.prototype,"hasFocus",2);c([D()],pe.prototype,"isDraggingGridHandle",2);c([D()],pe.prototype,"isEmpty",2);c([D()],pe.prototype,"inputValue",2);c([D()],pe.prototype,"hue",2);c([D()],pe.prototype,"saturation",2);c([D()],pe.prototype,"brightness",2);c([D()],pe.prototype,"alpha",2);c([p()],pe.prototype,"value",2);c([Gt()],pe.prototype,"defaultValue",2);c([p()],pe.prototype,"label",2);c([p()],pe.prototype,"format",2);c([p({type:Boolean,reflect:!0})],pe.prototype,"inline",2);c([p({reflect:!0})],pe.prototype,"size",2);c([p({attribute:"no-format-toggle",type:Boolean})],pe.prototype,"noFormatToggle",2);c([p()],pe.prototype,"name",2);c([p({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);c([p({type:Boolean})],pe.prototype,"hoist",2);c([p({type:Boolean})],pe.prototype,"opacity",2);c([p({type:Boolean})],pe.prototype,"uppercase",2);c([p()],pe.prototype,"swatches",2);c([p({reflect:!0})],pe.prototype,"form",2);c([p({type:Boolean,reflect:!0})],pe.prototype,"required",2);c([_r({passive:!1})],pe.prototype,"handleTouchMove",1);c([C("format",{waitUntilFirstUpdate:!0})],pe.prototype,"handleFormatChange",1);c([C("opacity",{waitUntilFirstUpdate:!0})],pe.prototype,"handleOpacityChange",1);c([C("value")],pe.prototype,"handleValueChange",1);pe.define("sl-color-picker");var R0=E`
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
`;var Ah=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${P({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ah.styles=[O,R0];Ah.define("sl-card");var D0=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var M0=E`
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
`;function*N0(t,e){if(t!==void 0){let r=0;for(let i of t)yield e(i,r++)}}function*F0(t,e,r=1){let i=e===void 0?0:t;e??=t;for(let o=i;r>0?o<e:e<o;o+=r)yield o}var He=class extends T{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new D0(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new G(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let i=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||r!==o)&&(t.scrollTo({left:i,top:o,behavior:ql()?"auto":"smooth"}),await je(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:r,loop:i}=this,o=i?t/r:(t-e)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),r=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+r*r)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,r=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!r&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!r&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;let a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{t.disconnect();for(let a of e){let l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}let r=e.find(a=>a.isIntersecting);if(!r)return;let i=this.getSlides({excludeClones:!1}),o=this.getSlides().length,s=i.indexOf(r.target),n=this.loop?s-this.slidesPerPage:s;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){let a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,r=t.slice(-e),i=t.slice(0,e);r.reverse().forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-s-1)),this.prepend(n)}),i.forEach((o,s)=>{let n=o.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handleSlideChange(){let t=this.getSlides();t.forEach((e,r)=>{e.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((r,i)=>{(i+e)%e===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:r,loop:i}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!o.length)return;let n=i?(t+o.length)%o.length:Le(t,0,o.length-r);this.activeSlide=n;let a=this.localize.dir()==="rtl",l=Le(t+(i?r:0)+(a?r-1:0),0,s.length-1),u=s[l];this.scrollToSlide(u,ql()?"auto":e)}scrollToSlide(t,e="smooth"){let r=this.scrollContainer,i=r.getBoundingClientRect(),o=t.getBoundingClientRect(),s=o.left-i.left,n=o.top-i.top;(s||n)&&(this.pendingSlideChange=!0,r.scrollTo({left:s+r.scrollLeft,top:n+r.scrollTop,behavior:e}))}render(){let{slidesPerMove:t,scrolling:e}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return x`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${P({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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
                  class="${P({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
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
                  class=${P({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
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
                ${N0(F0(r),a=>{let l=a===i;return x`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${P({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
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
    `}};He.styles=[O,M0];He.dependencies={"sl-icon":te};c([p({type:Boolean,reflect:!0})],He.prototype,"loop",2);c([p({type:Boolean,reflect:!0})],He.prototype,"navigation",2);c([p({type:Boolean,reflect:!0})],He.prototype,"pagination",2);c([p({type:Boolean,reflect:!0})],He.prototype,"autoplay",2);c([p({type:Number,attribute:"autoplay-interval"})],He.prototype,"autoplayInterval",2);c([p({type:Number,attribute:"slides-per-page"})],He.prototype,"slidesPerPage",2);c([p({type:Number,attribute:"slides-per-move"})],He.prototype,"slidesPerMove",2);c([p()],He.prototype,"orientation",2);c([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],He.prototype,"mouseDragging",2);c([A(".carousel__slides")],He.prototype,"scrollContainer",2);c([A(".carousel__pagination")],He.prototype,"paginationContainer",2);c([D()],He.prototype,"activeSlide",2);c([D()],He.prototype,"scrolling",2);c([D()],He.prototype,"dragging",2);c([_r({passive:!0})],He.prototype,"handleScroll",1);c([C("loop",{waitUntilFirstUpdate:!0}),C("slidesPerPage",{waitUntilFirstUpdate:!0})],He.prototype,"initializeSlides",1);c([C("activeSlide")],He.prototype,"handleSlideChange",1);c([C("slidesPerMove")],He.prototype,"updateSlidesSnap",1);c([C("autoplay")],He.prototype,"handleAutoplayChange",1);He.define("sl-carousel");var sA=(t,e)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...i)},e)}},U0=(t,e,r)=>{let i=t[e];t[e]=function(...o){i.call(this,...o),r.call(this,i,...o)}},nA="onscrollend"in window;if(!nA){let t=new Set,e=new WeakMap,r=o=>{for(let s of o.changedTouches)t.add(s.identifier)},i=o=>{for(let s of o.changedTouches)t.delete(s.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),U0(EventTarget.prototype,"addEventListener",function(o,s){if(s!=="scrollend")return;let n=sA(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),U0(EventTarget.prototype,"removeEventListener",function(o,s){if(s!=="scrollend")return;let n=e.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var B0=E`
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
`;var Oh=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return x` <slot></slot> `}};Oh.styles=[O,B0];Oh.define("sl-carousel-item");Sr.define("sl-button-group");ye.define("sl-button");var Yn={};iw(Yn,{backInDown:()=>wA,backInLeft:()=>_A,backInRight:()=>xA,backInUp:()=>kA,backOutDown:()=>SA,backOutLeft:()=>CA,backOutRight:()=>TA,backOutUp:()=>EA,bounce:()=>aA,bounceIn:()=>AA,bounceInDown:()=>OA,bounceInLeft:()=>$A,bounceInRight:()=>IA,bounceInUp:()=>PA,bounceOut:()=>LA,bounceOutDown:()=>zA,bounceOutLeft:()=>RA,bounceOutRight:()=>DA,bounceOutUp:()=>MA,easings:()=>$h,fadeIn:()=>NA,fadeInBottomLeft:()=>FA,fadeInBottomRight:()=>UA,fadeInDown:()=>BA,fadeInDownBig:()=>VA,fadeInLeft:()=>qA,fadeInLeftBig:()=>jA,fadeInRight:()=>HA,fadeInRightBig:()=>WA,fadeInTopLeft:()=>GA,fadeInTopRight:()=>KA,fadeInUp:()=>YA,fadeInUpBig:()=>ZA,fadeOut:()=>XA,fadeOutBottomLeft:()=>JA,fadeOutBottomRight:()=>QA,fadeOutDown:()=>eO,fadeOutDownBig:()=>tO,fadeOutLeft:()=>rO,fadeOutLeftBig:()=>iO,fadeOutRight:()=>oO,fadeOutRightBig:()=>sO,fadeOutTopLeft:()=>nO,fadeOutTopRight:()=>aO,fadeOutUp:()=>lO,fadeOutUpBig:()=>cO,flash:()=>lA,flip:()=>uO,flipInX:()=>dO,flipInY:()=>hO,flipOutX:()=>pO,flipOutY:()=>fO,headShake:()=>cA,heartBeat:()=>uA,hinge:()=>MO,jackInTheBox:()=>NO,jello:()=>dA,lightSpeedInLeft:()=>mO,lightSpeedInRight:()=>gO,lightSpeedOutLeft:()=>bO,lightSpeedOutRight:()=>yO,pulse:()=>hA,rollIn:()=>FO,rollOut:()=>UO,rotateIn:()=>vO,rotateInDownLeft:()=>wO,rotateInDownRight:()=>_O,rotateInUpLeft:()=>xO,rotateInUpRight:()=>kO,rotateOut:()=>SO,rotateOutDownLeft:()=>CO,rotateOutDownRight:()=>TO,rotateOutUpLeft:()=>EO,rotateOutUpRight:()=>AO,rubberBand:()=>pA,shake:()=>fA,shakeX:()=>mA,shakeY:()=>gA,slideInDown:()=>OO,slideInLeft:()=>$O,slideInRight:()=>IO,slideInUp:()=>PO,slideOutDown:()=>LO,slideOutLeft:()=>zO,slideOutRight:()=>RO,slideOutUp:()=>DO,swing:()=>bA,tada:()=>yA,wobble:()=>vA,zoomIn:()=>BO,zoomInDown:()=>VO,zoomInLeft:()=>qO,zoomInRight:()=>jO,zoomInUp:()=>HO,zoomOut:()=>WO,zoomOutDown:()=>GO,zoomOutLeft:()=>KO,zoomOutRight:()=>YO,zoomOutUp:()=>ZO});var aA=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var lA=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var cA=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var uA=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var dA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var hA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var pA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var fA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var mA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var gA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var bA=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var yA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var vA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var wA=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var _A=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var xA=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var kA=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var SA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var CA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var TA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var EA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var AA=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var OA=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var $A=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var IA=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var PA=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var LA=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var zA=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var RA=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var DA=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var MA=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var NA=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var FA=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var UA=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var BA=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var VA=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var qA=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var jA=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var HA=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var WA=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var GA=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var KA=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var YA=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ZA=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var XA=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var JA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var QA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var eO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var tO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var rO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var iO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var oO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var sO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var nO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var aO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var lO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var cO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var uO=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var dO=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var hO=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var pO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var fO=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var mO=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var gO=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var bO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var yO=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var vO=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var wO=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var _O=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var xO=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var kO=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var SO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var CO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var TO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var EO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var AO=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var OO=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var $O=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var IO=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var PO=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var LO=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var zO=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var RO=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var DO=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var MO=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var NO=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var FO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var UO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var BO=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var VO=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var qO=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var jO=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var HO=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var WO=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var GO=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var KO=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var YO=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var ZO=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var $h={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var V0=E`
  :host {
    display: contents;
  }
`;var tt=class extends T{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let r=(t=Yn.easings[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:Yn[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!i?!1:(this.destroyAnimation(),this.animation=s.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};tt.styles=[O,V0];c([zy("slot")],tt.prototype,"defaultSlot",2);c([p()],tt.prototype,"name",2);c([p({type:Boolean,reflect:!0})],tt.prototype,"play",2);c([p({type:Number})],tt.prototype,"delay",2);c([p()],tt.prototype,"direction",2);c([p({type:Number})],tt.prototype,"duration",2);c([p()],tt.prototype,"easing",2);c([p({attribute:"end-delay",type:Number})],tt.prototype,"endDelay",2);c([p()],tt.prototype,"fill",2);c([p({type:Number})],tt.prototype,"iterations",2);c([p({attribute:"iteration-start",type:Number})],tt.prototype,"iterationStart",2);c([p({attribute:!1})],tt.prototype,"keyframes",2);c([p({attribute:"playback-rate",type:Number})],tt.prototype,"playbackRate",2);c([C(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],tt.prototype,"handleAnimationChange",1);c([C("play")],tt.prototype,"handlePlayChange",1);c([C("playbackRate")],tt.prototype,"handlePlaybackRateChange",1);tt.define("sl-animation");var q0=E`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var mo=class extends T{constructor(){super(...arguments),this.localize=new G(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,r)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};mo.styles=[O,q0];mo.dependencies={"sl-icon":te};c([A("slot")],mo.prototype,"defaultSlot",2);c([A('slot[name="separator"]')],mo.prototype,"separatorSlot",2);c([p()],mo.prototype,"label",2);mo.define("sl-breadcrumb");var j0=E`
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
`;var Ur=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return x`
      <div
        part="base"
        class=${P({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Ur.styles=[O,j0];c([A("slot:not([name])")],Ur.prototype,"defaultSlot",2);c([D()],Ur.prototype,"renderType",2);c([p()],Ur.prototype,"href",2);c([p()],Ur.prototype,"target",2);c([p()],Ur.prototype,"rel",2);c([C("href",{waitUntilFirstUpdate:!0})],Ur.prototype,"hrefChanged",1);Ur.define("sl-breadcrumb-item");var H0=E`
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
`;var hr=class extends T{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=x`
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
        class=${P({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};hr.styles=[O,H0];hr.dependencies={"sl-icon":te};c([D()],hr.prototype,"hasError",2);c([p()],hr.prototype,"image",2);c([p()],hr.prototype,"label",2);c([p()],hr.prototype,"initials",2);c([p()],hr.prototype,"loading",2);c([p({reflect:!0})],hr.prototype,"shape",2);c([C("image")],hr.prototype,"handleImageChange",1);hr.define("sl-avatar");var W0=E`
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
`;var er=class extends T{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:r}=this.animatedImage;t.width=e,t.height=r,t.getContext("2d").drawImage(this.animatedImage,0,0,e,r),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return x`
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
    `}};er.styles=[O,W0];er.dependencies={"sl-icon":te};c([A(".animated-image__animated")],er.prototype,"animatedImage",2);c([D()],er.prototype,"frozenFrame",2);c([D()],er.prototype,"isLoaded",2);c([p()],er.prototype,"src",2);c([p()],er.prototype,"alt",2);c([p({type:Boolean,reflect:!0})],er.prototype,"play",2);c([C("play",{waitUntilFirstUpdate:!0})],er.prototype,"handlePlayChange",1);c([C("src")],er.prototype,"handleSrcChange",1);er.define("sl-animated-image");var G0=E`
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
`;var as=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),At=class extends T{constructor(){super(...arguments),this.hasSlotController=new xe(this,"icon","suffix"),this.localize=new G(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ce(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=ge(this,"alert.show",{dir:this.localize.dir()});await _e(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ce(this.base);let{keyframes:t,options:e}=ge(this,"alert.hide",{dir:this.localize.dir()});await _e(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),as.parentElement===null&&document.body.append(as),as.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{as.removeChild(this),t(),as.querySelector("sl-alert")===null&&as.remove()},{once:!0})})}render(){return x`
      <div
        part="base"
        class=${P({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${P({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};At.styles=[O,G0];At.dependencies={"sl-icon-button":ze};c([A('[part~="base"]')],At.prototype,"base",2);c([A(".alert__countdown-elapsed")],At.prototype,"countdownElement",2);c([p({type:Boolean,reflect:!0})],At.prototype,"open",2);c([p({type:Boolean,reflect:!0})],At.prototype,"closable",2);c([p({reflect:!0})],At.prototype,"variant",2);c([p({type:Number})],At.prototype,"duration",2);c([p({type:String,reflect:!0})],At.prototype,"countdown",2);c([D()],At.prototype,"remainingTime",2);c([C("open",{waitUntilFirstUpdate:!0})],At.prototype,"handleOpenChange",1);c([C("duration")],At.prototype,"handleDurationChange",1);de("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});de("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});At.define("sl-alert");var K0=E`
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
`;var ls=class extends T{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${P({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ls.styles=[O,K0];c([p({reflect:!0})],ls.prototype,"variant",2);c([p({type:Boolean,reflect:!0})],ls.prototype,"pill",2);c([p({type:Boolean,reflect:!0})],ls.prototype,"pulse",2);ls.define("sl-badge");var _$=ue("<form><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><sl-input></sl-input><fieldset><legend>Lenker</legend><sl-button>Legg til ny</sl-button></fieldset><div><sl-button>Lagre",!0,!1),x$=ue("<div><sl-input></sl-input><sl-button>Fjern",!0,!1),k$=ue("<sl-button>Avbryt",!0,!1),S$=dt({form:t=>({display:"flex",flexGap:t.spaceY})}),C$=t=>{let[e,r]=Ve([{href:""}]),i=()=>{r(a=>[...a,{href:""}])},o=a=>{r(l=>l.filter((u,d)=>d!==a))},s=(a,l)=>{r(u=>u.map((d,h)=>h===a?{href:l}:d))},n=a=>{a.preventDefault();let l=Bd(a.currentTarget);l.links=e(),t.onSubmit(l)};return(()=>{var a=_$(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,h=d.nextSibling,f=h.nextSibling,m=f.nextSibling,g=m.nextSibling,v=g.firstChild,y=v.nextSibling,_=g.nextSibling,w=_.firstChild;return a.addEventListener("submit",n),l.label="Foretakets navn",l.name="title",l.required=!0,l._$owner=ee(),u.label="Beskrivelse av tjeneste eller produkt",u.name="description",u.required=!0,u._$owner=ee(),d.label="Gateadresse",d.name="address",d.required=!0,d._$owner=ee(),h.label="Postnummer",h.name="zip",h.pattern="^d{4}$",h.required=!0,h._$owner=ee(),f.label="Telefonnummer",f.name="phone",f.type="tel",f.required=!0,f._$owner=ee(),m.label="Epostadresse",m.name="email",m.type="email",m.required=!0,m._$owner=ee(),Q(g,Y(ms,{get each(){return e()},children:(k,b)=>(()=>{var S=x$(),z=S.firstChild,H=z.nextSibling;return qe(z,"input",B=>s(b(),B.target.value)),z.type="url",z.required=!0,z._$owner=ee(),qe(H,"click",()=>o(b())),H.type="button",H.variant="danger",H._$owner=ee(),Ee(B=>{var j=`Lenke ${b()+1}`,R=`links[${b()}].href`,re=k.href;return j!==B.e&&(z.label=B.e=j),R!==B.t&&(z.name=B.t=R),re!==B.a&&(z.value=B.a=re),B},{e:void 0,t:void 0,a:void 0}),S})()}),y),qe(y,"click",i),y.type="button",y.variant="primary",y._$owner=ee(),w.size="medium",w.type="submit",w.variant="primary",w._$owner=ee(),Q(_,(()=>{var k=we(()=>!!t.onCancel);return()=>k()&&(()=>{var b=k$();return qe(b,"click",t.onCancel),b.size="medium",b.type="button",b.variant="neutral",b._$owner=ee(),b})()})(),null),Ee(()=>Ne(a,S$.form)),a})()},Y0=C$;var T$=ue("<sl-alert><sl-icon slot=icon></sl-icon><strong>Vi har sendt en verifiserings-e-post til <!>.</strong><br>Verifiser e-postadressen din der og fortsett deretter innlogging under.",!0,!1),E$=ue("<sl-button>Logg inn",!0,!1),A$=ue("<sl-button-group><sl-button>Fortsett innlogging</sl-button><sl-button>Avbryt / Log inn med en annen e-post",!0,!1),O$=ue("<div>"),$$=ue("<section>"),bse=dt({}),Z0=t=>{let{account:e}=ai(),r=we(()=>e()?.mustVerifyEmail()),i=we(()=>e()?.resources.user());return(()=>{var o=$$();return Q(o,Y(Mt,{get when(){return!i()},get children(){return[(()=>{var s=T$(),n=s.firstChild,a=n.nextSibling,l=a.firstChild,u=l.nextSibling,d=u.nextSibling;return s.variant="warning",s._$owner=ee(),n.name="exclamation-triangle",n._$owner=ee(),Q(a,r,u),Ee(()=>s.open=!!r()),s})(),(()=>{var s=O$();return Q(s,Y(Mt,{get when(){return!r()},get children(){var n=E$();return qe(n,"click",()=>e()?.login()),n._$owner=ee(),n}}),null),Q(s,Y(Mt,{get when(){return r()},get children(){var n=A$(),a=n.firstChild,l=a.nextSibling;return n.label="Alignment",n._$owner=ee(),qe(a,"click",()=>e()?.login()),a.variant="primary",a._$owner=ee(),qe(l,"click",()=>e()?.logout()),l._$owner=ee(),n}}),null),s})()]}}),null),Q(o,Y(Mt,{get when(){return i()},get children(){return Y(Y0,{get model(){return e()?.resources.user()},mode:"create",onSubmit:s=>console.log(s),onCancel:()=>console.log("Cancel")})}}),null),o})()};var I$=ue("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>"),P$=ue("<style id=styler>"),L$=t=>{let e="pageKey",r=window.localStorage.getItem(e)||"PAGE_LISTINGS",[i,o]=Ve(r),s=n=>{window.localStorage.setItem(e,n),o(n)};return[I$(),(()=>{var n=P$();return Q(n,og),n})(),Y(Cr,{get fallback(){return Y(li,{children:"Gul info laster..."})},get children(){return Y(Tb,{get children(){return Y(Yb,{get children(){return Y(Jb,{get title(){return t.title},get selectedPage(){return i()},toggleMainPages:()=>s(i()==="PAGE_ACCOUNT"?"PAGE_LISTINGS":"PAGE_ACCOUNT"),get children(){return Y(cc,{get children(){return[Y(ra,{get when(){return i()==="PAGE_LISTINGS"},get children(){return Y(oy,{})}}),Y(ra,{get when(){return i()==="PAGE_ACCOUNT"},get children(){return Y(Z0,{})}})]}})}})}})}})}})]},X0=L$;rs("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");tp("gul-info",{title:"<title>",namespace:"<namespace>",database:"<database>",datapoint:"<datapoint>"},X0);})();
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
