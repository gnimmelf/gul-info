"use strict";(()=>{var Zv=Object.create;var Pl=Object.defineProperty;var Jd=Object.getOwnPropertyDescriptor;var Gv=Object.getOwnPropertyNames;var Kv=Object.getPrototypeOf,Yv=Object.prototype.hasOwnProperty;var A=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Jv=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Gv(e))!Yv.call(t,s)&&s!==r&&Pl(t,s,{get:()=>e[s],enumerable:!(i=Jd(e,s))||i.enumerable});return t};var xo=(t,e,r)=>(r=t!=null?Zv(Kv(t)):{},Jv(e||!t||!t.__esModule?Pl(r,"default",{value:t,enumerable:!0}):r,t));var mt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jd(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Pl(e,r,s),s};var kh=A((tO,Vl)=>{var te=String,Sh=function(){return{isColorSupported:!1,reset:te,bold:te,dim:te,italic:te,underline:te,inverse:te,hidden:te,strikethrough:te,black:te,red:te,green:te,yellow:te,blue:te,magenta:te,cyan:te,white:te,gray:te,bgBlack:te,bgRed:te,bgGreen:te,bgYellow:te,bgBlue:te,bgMagenta:te,bgCyan:te,bgWhite:te,blackBright:te,redBright:te,greenBright:te,yellowBright:te,blueBright:te,magentaBright:te,cyanBright:te,whiteBright:te,bgBlackBright:te,bgRedBright:te,bgGreenBright:te,bgYellowBright:te,bgBlueBright:te,bgMagentaBright:te,bgCyanBright:te,bgWhiteBright:te}};Vl.exports=Sh();Vl.exports.createColors=Sh});var Bl=A(()=>{});var Po=A((sO,Th)=>{"use strict";var Ch=kh(),Eh=Bl(),Fs=class t extends Error{constructor(e,r,i,s,n,o){super(e),this.name="CssSyntaxError",this.reason=e,n&&(this.file=n),s&&(this.source=s),o&&(this.plugin=o),typeof r<"u"&&typeof i<"u"&&(typeof r=="number"?(this.line=r,this.column=i):(this.line=r.line,this.column=r.column,this.endLine=i.line,this.endColumn=i.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,t)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let r=this.source;e==null&&(e=Ch.isColorSupported);let i=u=>u,s=u=>u,n=u=>u;if(e){let{bold:u,gray:d,red:p}=Ch.createColors(!0);s=f=>u(p(f)),i=f=>d(f),Eh&&(n=f=>Eh(f))}let o=r.split(/\r?\n/),a=Math.max(this.line-3,0),l=Math.min(this.line+2,o.length),c=String(l).length;return o.slice(a,l).map((u,d)=>{let p=a+1+d,f=" "+(" "+p).slice(-c)+" | ";if(p===this.line){if(u.length>160){let _=20,y=Math.max(0,this.column-_),v=Math.max(this.column+_,this.endColumn+_),x=u.slice(y,v),w=i(f.replace(/\d/g," "))+u.slice(0,Math.min(this.column-1,_-1)).replace(/[^\t]/g," ");return s(">")+i(f)+n(x)+`
 `+w+s("^")}let m=i(f.replace(/\d/g," "))+u.slice(0,this.column-1).replace(/[^\t]/g," ");return s(">")+i(f)+n(u)+`
 `+m+s("^")}return" "+i(f)+n(u)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};Th.exports=Fs;Fs.default=Fs});var ql=A((nO,Oh)=>{"use strict";var Ah={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function Tw(t){return t[0].toUpperCase()+t.slice(1)}var Us=class{constructor(e){this.builder=e}atrule(e,r){let i="@"+e.name,s=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?i+=e.raws.afterName:s&&(i+=" "),e.nodes)this.block(e,i+s);else{let n=(e.raws.between||"")+(r?";":"");this.builder(i+s+n,e)}}beforeAfter(e,r){let i;e.type==="decl"?i=this.raw(e,null,"beforeDecl"):e.type==="comment"?i=this.raw(e,null,"beforeComment"):r==="before"?i=this.raw(e,null,"beforeRule"):i=this.raw(e,null,"beforeClose");let s=e.parent,n=0;for(;s&&s.type!=="root";)n+=1,s=s.parent;if(i.includes(`
`)){let o=this.raw(e,null,"indent");if(o.length)for(let a=0;a<n;a++)i+=o}return i}block(e,r){let i=this.raw(e,"between","beforeOpen");this.builder(r+i+"{",e,"start");let s;e.nodes&&e.nodes.length?(this.body(e),s=this.raw(e,"after")):s=this.raw(e,"after","emptyBody"),s&&this.builder(s),this.builder("}",e,"end")}body(e){let r=e.nodes.length-1;for(;r>0&&e.nodes[r].type==="comment";)r-=1;let i=this.raw(e,"semicolon");for(let s=0;s<e.nodes.length;s++){let n=e.nodes[s],o=this.raw(n,"before");o&&this.builder(o),this.stringify(n,r!==s||i)}}comment(e){let r=this.raw(e,"left","commentLeft"),i=this.raw(e,"right","commentRight");this.builder("/*"+r+e.text+i+"*/",e)}decl(e,r){let i=this.raw(e,"between","colon"),s=e.prop+i+this.rawValue(e,"value");e.important&&(s+=e.raws.important||" !important"),r&&(s+=";"),this.builder(s,e)}document(e){this.body(e)}raw(e,r,i){let s;if(i||(i=r),r&&(s=e.raws[r],typeof s<"u"))return s;let n=e.parent;if(i==="before"&&(!n||n.type==="root"&&n.first===e||n&&n.type==="document"))return"";if(!n)return Ah[i];let o=e.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[i]<"u")return o.rawCache[i];if(i==="before"||i==="after")return this.beforeAfter(e,i);{let a="raw"+Tw(i);this[a]?s=this[a](o,e):o.walk(l=>{if(s=l.raws[r],typeof s<"u")return!1})}return typeof s>"u"&&(s=Ah[i]),o.rawCache[i]=s,s}rawBeforeClose(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length>0&&typeof i.raws.after<"u")return r=i.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(e,r){let i;return e.walkComments(s=>{if(typeof s.raws.before<"u")return i=s.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeDecl"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeDecl(e,r){let i;return e.walkDecls(s=>{if(typeof s.raws.before<"u")return i=s.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),typeof i>"u"?i=this.raw(r,null,"beforeRule"):i&&(i=i.replace(/\S/g,"")),i}rawBeforeOpen(e){let r;return e.walk(i=>{if(i.type!=="decl"&&(r=i.raws.between,typeof r<"u"))return!1}),r}rawBeforeRule(e){let r;return e.walk(i=>{if(i.nodes&&(i.parent!==e||e.first!==i)&&typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(e){let r;return e.walkDecls(i=>{if(typeof i.raws.between<"u")return r=i.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length===0&&(r=i.raws.after,typeof r<"u"))return!1}),r}rawIndent(e){if(e.raws.indent)return e.raws.indent;let r;return e.walk(i=>{let s=i.parent;if(s&&s!==e&&s.parent&&s.parent===e&&typeof i.raws.before<"u"){let n=i.raws.before.split(`
`);return r=n[n.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(e){let r;return e.walk(i=>{if(i.nodes&&i.nodes.length&&i.last.type==="decl"&&(r=i.raws.semicolon,typeof r<"u"))return!1}),r}rawValue(e,r){let i=e[r],s=e.raws[r];return s&&s.value===i?s.raw:i}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,r){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,r)}};Oh.exports=Us;Us.default=Us});var js=A((oO,$h)=>{"use strict";var Aw=ql();function Wl(t,e){new Aw(e).stringify(t)}$h.exports=Wl;Wl.default=Wl});var Lo=A((aO,Hl)=>{"use strict";Hl.exports.isClean=Symbol("isClean");Hl.exports.my=Symbol("my")});var Ws=A((lO,Ih)=>{"use strict";var Ow=Po(),$w=ql(),Iw=js(),{isClean:Vs,my:Pw}=Lo();function Zl(t,e){let r=new t.constructor;for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i)||i==="proxyCache")continue;let s=t[i],n=typeof s;i==="parent"&&n==="object"?e&&(r[i]=e):i==="source"?r[i]=s:Array.isArray(s)?r[i]=s.map(o=>Zl(o,r)):(n==="object"&&s!==null&&(s=Zl(s)),r[i]=s)}return r}function Bs(t,e){if(e&&typeof e.offset<"u")return e.offset;let r=1,i=1,s=0;for(let n=0;n<t.length;n++){if(i===e.line&&r===e.column){s=n;break}t[n]===`
`?(r=1,i+=1):r+=1}return s}var qs=class{constructor(e={}){this.raws={},this[Vs]=!1,this[Pw]=!0;for(let r in e)if(r==="nodes"){this.nodes=[];for(let i of e[r])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[r]=e[r]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let r=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${r.input.from}:${r.start.line}:${r.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let r in e)this[r]=e[r];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let r=Zl(this);for(let i in e)r[i]=e[i];return r}cloneAfter(e={}){let r=this.clone(e);return this.parent.insertAfter(this,r),r}cloneBefore(e={}){let r=this.clone(e);return this.parent.insertBefore(this,r),r}error(e,r={}){if(this.source){let{end:i,start:s}=this.rangeBy(r);return this.source.input.error(e,{column:s.column,line:s.line},{column:i.column,line:i.line},r)}return new Ow(e)}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:r==="root"?()=>e.root().toProxy():e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="prop"||r==="value"||r==="name"||r==="params"||r==="important"||r==="text")&&e.markDirty()),!0}}}markClean(){this[Vs]=!0}markDirty(){if(this[Vs]){this[Vs]=!1;let e=this;for(;e=e.parent;)e[Vs]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let r=this.source.start;if(e.index)r=this.positionInside(e.index);else if(e.word){let s=this.source.input.css.slice(Bs(this.source.input.css,this.source.start),Bs(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(r=this.positionInside(s))}return r}positionInside(e){let r=this.source.start.column,i=this.source.start.line,s=Bs(this.source.input.css,this.source.start),n=s+e;for(let o=s;o<n;o++)this.source.input.css[o]===`
`?(r=1,i+=1):r+=1;return{column:r,line:i}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let r={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:r.column+1,line:r.line};if(e.word){let n=this.source.input.css.slice(Bs(this.source.input.css,this.source.start),Bs(this.source.input.css,this.source.end)).indexOf(e.word);n!==-1&&(r=this.positionInside(n),i=this.positionInside(n+e.word.length))}else e.start?r={column:e.start.column,line:e.start.line}:e.index&&(r=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<r.line||i.line===r.line&&i.column<=r.column)&&(i={column:r.column+1,line:r.line}),{end:i,start:r}}raw(e,r){return new $w().raw(this,e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let r=this,i=!1;for(let s of e)s===this?i=!0:i?(this.parent.insertAfter(r,s),r=s):this.parent.insertBefore(r,s);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,r){let i={},s=r==null;r=r||new Map;let n=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let a=this[o];if(Array.isArray(a))i[o]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,r):l);else if(typeof a=="object"&&a.toJSON)i[o]=a.toJSON(null,r);else if(o==="source"){let l=r.get(a.input);l==null&&(l=n,r.set(a.input,n),n++),i[o]={end:a.end,inputId:l,start:a.start}}else i[o]=a}return s&&(i.inputs=[...r.keys()].map(o=>o.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=Iw){e.stringify&&(e=e.stringify);let r="";return e(this,i=>{r+=i}),r}warn(e,r,i){let s={node:this};for(let n in i)s[n]=i[n];return e.warn(r,s)}get proxyOf(){return this}};Ih.exports=qs;qs.default=qs});var Zs=A((cO,Ph)=>{"use strict";var Lw=Ws(),Hs=class extends Lw{constructor(e){super(e),this.type="comment"}};Ph.exports=Hs;Hs.default=Hs});var Ks=A((uO,Lh)=>{"use strict";var Rw=Ws(),Gs=class extends Rw{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};Lh.exports=Gs;Gs.default=Gs});var xr=A((dO,Vh)=>{"use strict";var Rh=Zs(),Dh=Ks(),Dw=Ws(),{isClean:Nh,my:Mh}=Lo(),Gl,zh,Fh,Kl;function Uh(t){return t.map(e=>(e.nodes&&(e.nodes=Uh(e.nodes)),delete e.source,e))}function jh(t){if(t[Nh]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)jh(e)}var Lt=class t extends Dw{append(...e){for(let r of e){let i=this.normalize(r,this.last);for(let s of i)this.proxyOf.nodes.push(s)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let r of this.nodes)r.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let r=this.getIterator(),i,s;for(;this.indexes[r]<this.proxyOf.nodes.length&&(i=this.indexes[r],s=e(this.proxyOf.nodes[i],i),s!==!1);)this.indexes[r]+=1;return delete this.indexes[r],s}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,r){return r==="proxyOf"?e:e[r]?r==="each"||typeof r=="string"&&r.startsWith("walk")?(...i)=>e[r](...i.map(s=>typeof s=="function"?(n,o)=>s(n.toProxy(),o):s)):r==="every"||r==="some"?i=>e[r]((s,...n)=>i(s.toProxy(),...n)):r==="root"?()=>e.root().toProxy():r==="nodes"?e.nodes.map(i=>i.toProxy()):r==="first"||r==="last"?e[r].toProxy():e[r]:e[r]},set(e,r,i){return e[r]===i||(e[r]=i,(r==="name"||r==="params"||r==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,r){let i=this.index(e),s=this.normalize(r,this.proxyOf.nodes[i]).reverse();i=this.index(e);for(let o of s)this.proxyOf.nodes.splice(i+1,0,o);let n;for(let o in this.indexes)n=this.indexes[o],i<n&&(this.indexes[o]=n+s.length);return this.markDirty(),this}insertBefore(e,r){let i=this.index(e),s=i===0?"prepend":!1,n=this.normalize(r,this.proxyOf.nodes[i],s).reverse();i=this.index(e);for(let a of n)this.proxyOf.nodes.splice(i,0,a);let o;for(let a in this.indexes)o=this.indexes[a],i<=o&&(this.indexes[a]=o+n.length);return this.markDirty(),this}normalize(e,r){if(typeof e=="string")e=Uh(zh(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let s of e)s.parent&&s.parent.removeChild(s,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let s of e)s.parent&&s.parent.removeChild(s,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new Dh(e)]}else if(e.selector||e.selectors)e=[new Kl(e)];else if(e.name)e=[new Gl(e)];else if(e.text)e=[new Rh(e)];else throw new Error("Unknown node type in node creation");return e.map(s=>(s[Mh]||t.rebuild(s),s=s.proxyOf,s.parent&&s.parent.removeChild(s),s[Nh]&&jh(s),s.raws||(s.raws={}),typeof s.raws.before>"u"&&r&&typeof r.raws.before<"u"&&(s.raws.before=r.raws.before.replace(/\S/g,"")),s.parent=this.proxyOf,s))}prepend(...e){e=e.reverse();for(let r of e){let i=this.normalize(r,this.first,"prepend").reverse();for(let s of i)this.proxyOf.nodes.unshift(s);for(let s in this.indexes)this.indexes[s]=this.indexes[s]+i.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let r;for(let i in this.indexes)r=this.indexes[i],r>=e&&(this.indexes[i]=r-1);return this.markDirty(),this}replaceValues(e,r,i){return i||(i=r,r={}),this.walkDecls(s=>{r.props&&!r.props.includes(s.prop)||r.fast&&!s.value.includes(r.fast)||(s.value=s.value.replace(e,i))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((r,i)=>{let s;try{s=e(r,i)}catch(n){throw r.addToError(n)}return s!==!1&&r.walk&&(s=r.walk(e)),s})}walkAtRules(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="atrule"&&e.test(i.name))return r(i,s)}):this.walk((i,s)=>{if(i.type==="atrule"&&i.name===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="atrule")return r(i,s)}))}walkComments(e){return this.walk((r,i)=>{if(r.type==="comment")return e(r,i)})}walkDecls(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="decl"&&e.test(i.prop))return r(i,s)}):this.walk((i,s)=>{if(i.type==="decl"&&i.prop===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="decl")return r(i,s)}))}walkRules(e,r){return r?e instanceof RegExp?this.walk((i,s)=>{if(i.type==="rule"&&e.test(i.selector))return r(i,s)}):this.walk((i,s)=>{if(i.type==="rule"&&i.selector===e)return r(i,s)}):(r=e,this.walk((i,s)=>{if(i.type==="rule")return r(i,s)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};Lt.registerParse=t=>{zh=t};Lt.registerRule=t=>{Kl=t};Lt.registerAtRule=t=>{Gl=t};Lt.registerRoot=t=>{Fh=t};Vh.exports=Lt;Lt.default=Lt;Lt.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,Gl.prototype):t.type==="rule"?Object.setPrototypeOf(t,Kl.prototype):t.type==="decl"?Object.setPrototypeOf(t,Dh.prototype):t.type==="comment"?Object.setPrototypeOf(t,Rh.prototype):t.type==="root"&&Object.setPrototypeOf(t,Fh.prototype),t[Mh]=!0,t.nodes&&t.nodes.forEach(e=>{Lt.rebuild(e)})}});var Ro=A((hO,qh)=>{"use strict";var Bh=xr(),Hi=class extends Bh{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};qh.exports=Hi;Hi.default=Hi;Bh.registerAtRule(Hi)});var Do=A((fO,Zh)=>{"use strict";var Nw=xr(),Wh,Hh,Qr=class extends Nw{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new Wh(new Hh,this,e).stringify()}};Qr.registerLazyResult=t=>{Wh=t};Qr.registerProcessor=t=>{Hh=t};Zh.exports=Qr;Qr.default=Qr});var Kh=A((pO,Gh)=>{var Mw="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",zw=(t,e=21)=>(r=e)=>{let i="",s=r|0;for(;s--;)i+=t[Math.random()*t.length|0];return i},Fw=(t=21)=>{let e="",r=t|0;for(;r--;)e+=Mw[Math.random()*64|0];return e};Gh.exports={nanoid:Fw,customAlphabet:zw}});var No=A(()=>{});var Mo=A(()=>{});var Yl=A(()=>{});var Yh=A(()=>{});var Xl=A((SO,Qh)=>{"use strict";var{existsSync:Uw,readFileSync:jw}=Yh(),{dirname:Jl,join:Vw}=No(),{SourceMapConsumer:Jh,SourceMapGenerator:Xh}=Mo();function Bw(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}var Ys=class{constructor(e,r){if(r.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let i=r.map?r.map.prev:void 0,s=this.loadMap(r.from,i);!this.mapFile&&r.from&&(this.mapFile=r.from),this.mapFile&&(this.root=Jl(this.mapFile)),s&&(this.text=s)}consumer(){return this.consumerCache||(this.consumerCache=new Jh(this.text)),this.consumerCache}decodeInline(e){let r=/^data:application\/json;charset=utf-?8;base64,/,i=/^data:application\/json;base64,/,s=/^data:application\/json;charset=utf-?8,/,n=/^data:application\/json,/,o=e.match(s)||e.match(n);if(o)return decodeURIComponent(e.substr(o[0].length));let a=e.match(r)||e.match(i);if(a)return Bw(e.substr(a[0].length));let l=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+l)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let r=e.match(/\/\*\s*# sourceMappingURL=/g);if(!r)return;let i=e.lastIndexOf(r.pop()),s=e.indexOf("*/",i);i>-1&&s>-1&&(this.annotation=this.getAnnotationURL(e.substring(i,s)))}loadFile(e){if(this.root=Jl(e),Uw(e))return this.mapFile=e,jw(e,"utf-8").toString().trim()}loadMap(e,r){if(r===!1)return!1;if(r){if(typeof r=="string")return r;if(typeof r=="function"){let i=r(e);if(i){let s=this.loadFile(i);if(!s)throw new Error("Unable to load previous source map: "+i.toString());return s}}else{if(r instanceof Jh)return Xh.fromSourceMap(r).toString();if(r instanceof Xh)return r.toString();if(this.isMap(r))return JSON.stringify(r);throw new Error("Unsupported previous source map format: "+r.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let i=this.annotation;return e&&(i=Vw(Jl(e),i)),this.loadFile(i)}}}startWith(e,r){return e?e.substr(0,r.length)===r:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};Qh.exports=Ys;Ys.default=Ys});var Js=A((kO,sf)=>{"use strict";var{nanoid:qw}=Kh(),{isAbsolute:tc,resolve:rc}=No(),{SourceMapConsumer:Ww,SourceMapGenerator:Hw}=Mo(),{fileURLToPath:ef,pathToFileURL:zo}=Yl(),tf=Po(),Zw=Xl(),Ql=Bl(),ec=Symbol("fromOffsetCache"),Gw=!!(Ww&&Hw),rf=!!(rc&&tc),Zi=class{constructor(e,r={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,r.from&&(!rf||/^\w+:\/\//.test(r.from)||tc(r.from)?this.file=r.from:this.file=rc(r.from)),rf&&Gw){let i=new Zw(this.css,r);if(i.text){this.map=i;let s=i.consumer().file;!this.file&&s&&(this.file=this.mapResolve(s))}}this.file||(this.id="<input css "+qw(6)+">"),this.map&&(this.map.file=this.from)}error(e,r,i,s={}){let n,o,a;if(r&&typeof r=="object"){let c=r,u=i;if(typeof c.offset=="number"){let d=this.fromOffset(c.offset);r=d.line,i=d.col}else r=c.line,i=c.column;if(typeof u.offset=="number"){let d=this.fromOffset(u.offset);o=d.line,n=d.col}else o=u.line,n=u.column}else if(!i){let c=this.fromOffset(r);r=c.line,i=c.col}let l=this.origin(r,i,o,n);return l?a=new tf(e,l.endLine===void 0?l.line:{column:l.column,line:l.line},l.endLine===void 0?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,s.plugin):a=new tf(e,o===void 0?r:{column:i,line:r},o===void 0?i:{column:n,line:o},this.css,this.file,s.plugin),a.input={column:i,endColumn:n,endLine:o,line:r,source:this.css},this.file&&(zo&&(a.input.url=zo(this.file).toString()),a.input.file=this.file),a}fromOffset(e){let r,i;if(this[ec])i=this[ec];else{let n=this.css.split(`
`);i=new Array(n.length);let o=0;for(let a=0,l=n.length;a<l;a++)i[a]=o,o+=n[a].length+1;this[ec]=i}r=i[i.length-1];let s=0;if(e>=r)s=i.length-1;else{let n=i.length-2,o;for(;s<n;)if(o=s+(n-s>>1),e<i[o])n=o-1;else if(e>=i[o+1])s=o+1;else{s=o;break}}return{col:e-i[s]+1,line:s+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:rc(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,r,i,s){if(!this.map)return!1;let n=this.map.consumer(),o=n.originalPositionFor({column:r,line:e});if(!o.source)return!1;let a;typeof i=="number"&&(a=n.originalPositionFor({column:s,line:i}));let l;tc(o.source)?l=zo(o.source):l=new URL(o.source,this.map.consumer().sourceRoot||zo(this.map.mapFile));let c={column:o.column,endColumn:a&&a.column,endLine:a&&a.line,line:o.line,url:l.toString()};if(l.protocol==="file:")if(ef)c.file=ef(l);else throw new Error("file: protocol is not available in this PostCSS build");let u=n.sourceContentFor(o.source);return u&&(c.source=u),c}toJSON(){let e={};for(let r of["hasBOM","css","file","id"])this[r]!=null&&(e[r]=this[r]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};sf.exports=Zi;Zi.default=Zi;Ql&&Ql.registerInput&&Ql.registerInput(Zi)});var Gi=A((CO,lf)=>{"use strict";var nf=xr(),of,af,Sr=class extends nf{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,r,i){let s=super.normalize(e);if(r){if(i==="prepend")this.nodes.length>1?r.raws.before=this.nodes[1].raws.before:delete r.raws.before;else if(this.first!==r)for(let n of s)n.raws.before=r.raws.before}return s}removeChild(e,r){let i=this.index(e);return!r&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(e)}toResult(e={}){return new of(new af,this,e).stringify()}};Sr.registerLazyResult=t=>{of=t};Sr.registerProcessor=t=>{af=t};lf.exports=Sr;Sr.default=Sr;nf.registerRoot(Sr)});var ic=A((EO,cf)=>{"use strict";var Xs={comma(t){return Xs.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Xs.split(t,e)},split(t,e,r){let i=[],s="",n=!1,o=0,a=!1,l="",c=!1;for(let u of t)c?c=!1:u==="\\"?c=!0:a?u===l&&(a=!1):u==='"'||u==="'"?(a=!0,l=u):u==="("?o+=1:u===")"?o>0&&(o-=1):o===0&&e.includes(u)&&(n=!0),n?(s!==""&&i.push(s.trim()),s="",n=!1):s+=u;return(r||s!=="")&&i.push(s.trim()),i}};cf.exports=Xs;Xs.default=Xs});var Fo=A((TO,df)=>{"use strict";var uf=xr(),Kw=ic(),Ki=class extends uf{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return Kw.comma(this.selector)}set selectors(e){let r=this.selector?this.selector.match(/,\s*/):null,i=r?r[0]:","+this.raw("between","beforeOpen");this.selector=e.join(i)}};df.exports=Ki;Ki.default=Ki;uf.registerRule(Ki)});var ff=A((AO,hf)=>{"use strict";var Yw=Ro(),Jw=Zs(),Xw=Ks(),Qw=Js(),e_=Xl(),t_=Gi(),r_=Fo();function Qs(t,e){if(Array.isArray(t))return t.map(s=>Qs(s));let{inputs:r,...i}=t;if(r){e=[];for(let s of r){let n={...s,__proto__:Qw.prototype};n.map&&(n.map={...n.map,__proto__:e_.prototype}),e.push(n)}}if(i.nodes&&(i.nodes=t.nodes.map(s=>Qs(s,e))),i.source){let{inputId:s,...n}=i.source;i.source=n,s!=null&&(i.source.input=e[s])}if(i.type==="root")return new t_(i);if(i.type==="decl")return new Xw(i);if(i.type==="rule")return new r_(i);if(i.type==="comment")return new Jw(i);if(i.type==="atrule")return new Yw(i);throw new Error("Unknown node type: "+t.type)}hf.exports=Qs;Qs.default=Qs});var nc=A((OO,vf)=>{"use strict";var{dirname:Uo,relative:mf,resolve:gf,sep:bf}=No(),{SourceMapConsumer:yf,SourceMapGenerator:jo}=Mo(),{pathToFileURL:pf}=Yl(),i_=Js(),s_=!!(yf&&jo),n_=!!(Uo&&gf&&mf&&bf),sc=class{constructor(e,r,i,s){this.stringify=e,this.mapOpts=i.map||{},this.root=r,this.opts=i,this.css=s,this.originalCSS=s,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let r=`
`;this.css.includes(`\r
`)&&(r=`\r
`),this.css+=r+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let r=this.toUrl(this.path(e.file)),i=e.root||Uo(e.file),s;this.mapOpts.sourcesContent===!1?(s=new yf(e.text),s.sourcesContent&&(s.sourcesContent=null)):s=e.consumer(),this.map.applySourceMap(s,r,this.toUrl(this.path(i)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let r=this.root.nodes.length-1;r>=0;r--)e=this.root.nodes[r],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(r)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),n_&&s_&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,r=>{e+=r}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=jo.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new jo({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new jo({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,r=1,i="<no source>",s={generated:{column:0,line:0},original:{column:0,line:0},source:""},n,o;this.stringify(this.root,(a,l,c)=>{if(this.css+=a,l&&c!=="end"&&(s.generated.line=e,s.generated.column=r-1,l.source&&l.source.start?(s.source=this.sourcePath(l),s.original.line=l.source.start.line,s.original.column=l.source.start.column-1,this.map.addMapping(s)):(s.source=i,s.original.line=1,s.original.column=0,this.map.addMapping(s))),o=a.match(/\n/g),o?(e+=o.length,n=a.lastIndexOf(`
`),r=a.length-n):r+=a.length,l&&c!=="start"){let u=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==u.last||u.raws.semicolon)&&(l.source&&l.source.end?(s.source=this.sourcePath(l),s.original.line=l.source.end.line,s.original.column=l.source.end.column-1,s.generated.line=e,s.generated.column=r-2,this.map.addMapping(s)):(s.source=i,s.original.line=1,s.original.column=0,s.generated.line=e,s.generated.column=r-1,this.map.addMapping(s)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(r=>r.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let r=this.memoizedPaths.get(e);if(r)return r;let i=this.opts.to?Uo(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(i=Uo(gf(i,this.mapOpts.annotation)));let s=mf(i,e);return this.memoizedPaths.set(e,s),s}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let r=e.source.input.map;this.previousMaps.includes(r)||this.previousMaps.push(r)}});else{let e=new i_(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(r=>{if(r.source){let i=r.source.input.from;if(i&&!e[i]){e[i]=!0;let s=this.usesFileUrls?this.toFileUrl(i):this.toUrl(this.path(i));this.map.setSourceContent(s,r.source.input.css)}}});else if(this.css){let r=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(r,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let r=this.memoizedFileURLs.get(e);if(r)return r;if(pf){let i=pf(e).toString();return this.memoizedFileURLs.set(e,i),i}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let r=this.memoizedURLs.get(e);if(r)return r;bf==="\\"&&(e=e.replace(/\\/g,"/"));let i=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,i),i}};vf.exports=sc});var xf=A(($O,_f)=>{"use strict";var Vo=/[\t\n\f\r "#'()/;[\\\]{}]/g,Bo=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,o_=/.[\r\n"'(/\\]/,wf=/[\da-f]/i;_f.exports=function(e,r={}){let i=e.css.valueOf(),s=r.ignoreErrors,n,o,a,l,c,u,d,p,f,m,_=i.length,y=0,v=[],x=[];function w(){return y}function b(U){throw e.error("Unclosed "+U,y)}function S(){return x.length===0&&y>=_}function z(U){if(x.length)return x.pop();if(y>=_)return;let le=U?U.ignoreUnclosed:!1;switch(n=i.charCodeAt(y),n){case 10:case 32:case 9:case 13:case 12:{l=y;do l+=1,n=i.charCodeAt(l);while(n===32||n===10||n===9||n===13||n===12);u=["space",i.slice(y,l)],y=l-1;break}case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let ee=String.fromCharCode(n);u=[ee,ee,y];break}case 40:{if(m=v.length?v.pop()[1]:"",f=i.charCodeAt(y+1),m==="url"&&f!==39&&f!==34&&f!==32&&f!==10&&f!==9&&f!==12&&f!==13){l=y;do{if(d=!1,l=i.indexOf(")",l+1),l===-1)if(s||le){l=y;break}else b("bracket");for(p=l;i.charCodeAt(p-1)===92;)p-=1,d=!d}while(d);u=["brackets",i.slice(y,l+1),y,l],y=l}else l=i.indexOf(")",y+1),o=i.slice(y,l+1),l===-1||o_.test(o)?u=["(","(",y]:(u=["brackets",o,y,l],y=l);break}case 39:case 34:{c=n===39?"'":'"',l=y;do{if(d=!1,l=i.indexOf(c,l+1),l===-1)if(s||le){l=y+1;break}else b("string");for(p=l;i.charCodeAt(p-1)===92;)p-=1,d=!d}while(d);u=["string",i.slice(y,l+1),y,l],y=l;break}case 64:{Vo.lastIndex=y+1,Vo.test(i),Vo.lastIndex===0?l=i.length-1:l=Vo.lastIndex-2,u=["at-word",i.slice(y,l+1),y,l],y=l;break}case 92:{for(l=y,a=!0;i.charCodeAt(l+1)===92;)l+=1,a=!a;if(n=i.charCodeAt(l+1),a&&n!==47&&n!==32&&n!==10&&n!==9&&n!==13&&n!==12&&(l+=1,wf.test(i.charAt(l)))){for(;wf.test(i.charAt(l+1));)l+=1;i.charCodeAt(l+1)===32&&(l+=1)}u=["word",i.slice(y,l+1),y,l],y=l;break}default:{n===47&&i.charCodeAt(y+1)===42?(l=i.indexOf("*/",y+2)+1,l===0&&(s||le?l=i.length:b("comment")),u=["comment",i.slice(y,l+1),y,l],y=l):(Bo.lastIndex=y+1,Bo.test(i),Bo.lastIndex===0?l=i.length-1:l=Bo.lastIndex-2,u=["word",i.slice(y,l+1),y,l],v.push(u),y=l);break}}return y++,u}function R(U){x.push(U)}return{back:R,endOfFile:S,nextToken:z,position:w}}});var Ef=A((IO,Cf)=>{"use strict";var a_=Ro(),l_=Zs(),c_=Ks(),u_=Gi(),Sf=Fo(),d_=xf(),kf={empty:!0,space:!0};function h_(t){for(let e=t.length-1;e>=0;e--){let r=t[e],i=r[3]||r[2];if(i)return i}}var oc=class{constructor(e){this.input=e,this.root=new u_,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let r=new a_;r.name=e[1].slice(1),r.name===""&&this.unnamedAtrule(r,e),this.init(r,e[2]);let i,s,n,o=!1,a=!1,l=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),i=e[0],i==="("||i==="["?c.push(i==="("?")":"]"):i==="{"&&c.length>0?c.push("}"):i===c[c.length-1]&&c.pop(),c.length===0)if(i===";"){r.source.end=this.getPosition(e[2]),r.source.end.offset++,this.semicolon=!0;break}else if(i==="{"){a=!0;break}else if(i==="}"){if(l.length>0){for(n=l.length-1,s=l[n];s&&s[0]==="space";)s=l[--n];s&&(r.source.end=this.getPosition(s[3]||s[2]),r.source.end.offset++)}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){o=!0;break}}r.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(r.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(r,"params",l),o&&(e=l[l.length-1],r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++,this.spaces=r.raws.between,r.raws.between="")):(r.raws.afterName="",r.params=""),a&&(r.nodes=[],this.current=r)}checkMissedSemicolon(e){let r=this.colon(e);if(r===!1)return;let i=0,s;for(let n=r-1;n>=0&&(s=e[n],!(s[0]!=="space"&&(i+=1,i===2)));n--);throw this.input.error("Missed semicolon",s[0]==="word"?s[3]+1:s[2])}colon(e){let r=0,i,s,n;for(let[o,a]of e.entries()){if(s=a,n=s[0],n==="("&&(r+=1),n===")"&&(r-=1),r===0&&n===":")if(!i)this.doubleColon(s);else{if(i[0]==="word"&&i[1]==="progid")continue;return o}i=s}return!1}comment(e){let r=new l_;this.init(r,e[2]),r.source.end=this.getPosition(e[3]||e[2]),r.source.end.offset++;let i=e[1].slice(2,-2);if(/^\s*$/.test(i))r.text="",r.raws.left=i,r.raws.right="";else{let s=i.match(/^(\s*)([^]*\S)(\s*)$/);r.text=s[2],r.raws.left=s[1],r.raws.right=s[3]}}createTokenizer(){this.tokenizer=d_(this.input)}decl(e,r){let i=new c_;this.init(i,e[0][2]);let s=e[e.length-1];for(s[0]===";"&&(this.semicolon=!0,e.pop()),i.source.end=this.getPosition(s[3]||s[2]||h_(e)),i.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),i.raws.before+=e.shift()[1];for(i.source.start=this.getPosition(e[0][2]),i.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;i.prop+=e.shift()[1]}i.raws.between="";let n;for(;e.length;)if(n=e.shift(),n[0]===":"){i.raws.between+=n[1];break}else n[0]==="word"&&/\w/.test(n[1])&&this.unknownWord([n]),i.raws.between+=n[1];(i.prop[0]==="_"||i.prop[0]==="*")&&(i.raws.before+=i.prop[0],i.prop=i.prop.slice(1));let o=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)o.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(n=e[c],n[1].toLowerCase()==="!important"){i.important=!0;let u=this.stringFrom(e,c);u=this.spacesFromEnd(e)+u,u!==" !important"&&(i.raws.important=u);break}else if(n[1].toLowerCase()==="important"){let u=e.slice(0),d="";for(let p=c;p>0;p--){let f=u[p][0];if(d.trim().startsWith("!")&&f!=="space")break;d=u.pop()[1]+d}d.trim().startsWith("!")&&(i.important=!0,i.raws.important=d,e=u)}if(n[0]!=="space"&&n[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(i.raws.between+=o.map(c=>c[1]).join(""),o=[]),this.raw(i,"value",o.concat(e),r),i.value.includes(":")&&!r&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let r=new Sf;this.init(r,e[2]),r.selector="",r.raws.between="",this.current=r}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let r=this.current.nodes[this.current.nodes.length-1];r&&r.type==="rule"&&!r.raws.ownSemicolon&&(r.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let r=this.input.fromOffset(e);return{column:r.col,line:r.line,offset:e}}init(e,r){this.current.push(e),e.source={input:this.input,start:this.getPosition(r)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let r=!1,i=null,s=!1,n=null,o=[],a=e[1].startsWith("--"),l=[],c=e;for(;c;){if(i=c[0],l.push(c),i==="("||i==="[")n||(n=c),o.push(i==="("?")":"]");else if(a&&s&&i==="{")n||(n=c),o.push("}");else if(o.length===0)if(i===";")if(s){this.decl(l,a);return}else break;else if(i==="{"){this.rule(l);return}else if(i==="}"){this.tokenizer.back(l.pop()),r=!0;break}else i===":"&&(s=!0);else i===o[o.length-1]&&(o.pop(),o.length===0&&(n=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(r=!0),o.length>0&&this.unclosedBracket(n),r&&s){if(!a)for(;l.length&&(c=l[l.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,r,i,s){let n,o,a=i.length,l="",c=!0,u,d;for(let p=0;p<a;p+=1)n=i[p],o=n[0],o==="space"&&p===a-1&&!s?c=!1:o==="comment"?(d=i[p-1]?i[p-1][0]:"empty",u=i[p+1]?i[p+1][0]:"empty",!kf[d]&&!kf[u]?l.slice(-1)===","?c=!1:l+=n[1]:c=!1):l+=n[1];if(!c){let p=i.reduce((f,m)=>f+m[1],"");e.raws[r]={raw:p,value:l}}e[r]=l}rule(e){e.pop();let r=new Sf;this.init(r,e[0][2]),r.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(r,"selector",e),this.current=r}spacesAndCommentsFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],!(r!=="space"&&r!=="comment"));)i=e.pop()[1]+i;return i}spacesAndCommentsFromStart(e){let r,i="";for(;e.length&&(r=e[0][0],!(r!=="space"&&r!=="comment"));)i+=e.shift()[1];return i}spacesFromEnd(e){let r,i="";for(;e.length&&(r=e[e.length-1][0],r==="space");)i=e.pop()[1]+i;return i}stringFrom(e,r){let i="";for(let s=r;s<e.length;s++)i+=e[s][1];return e.splice(r,e.length-r),i}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,r){throw this.input.error("At-rule without name",{offset:r[2]},{offset:r[2]+r[1].length})}};Cf.exports=oc});var Wo=A((PO,Tf)=>{"use strict";var f_=xr(),p_=Js(),m_=Ef();function qo(t,e){let r=new p_(t,e),i=new m_(r);try{i.parse()}catch(s){throw s}return i.root}Tf.exports=qo;qo.default=qo;f_.registerParse(qo)});var ac=A((LO,Af)=>{"use strict";var en=class{constructor(e,r={}){if(this.type="warning",this.text=e,r.node&&r.node.source){let i=r.node.rangeBy(r);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in r)this[i]=r[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};Af.exports=en;en.default=en});var Ho=A((RO,Of)=>{"use strict";var g_=ac(),tn=class{constructor(e,r,i){this.processor=e,this.messages=[],this.root=r,this.opts=i,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,r={}){r.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(r.plugin=this.lastPlugin.postcssPlugin);let i=new g_(e,r);return this.messages.push(i),i}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};Of.exports=tn;tn.default=tn});var lc=A((DO,If)=>{"use strict";var $f={};If.exports=function(e){$f[e]||($f[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}});var dc=A((MO,Df)=>{"use strict";var b_=xr(),y_=Do(),v_=nc(),w_=Wo(),Pf=Ho(),__=Gi(),x_=js(),{isClean:jt,my:S_}=Lo(),NO=lc(),k_={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},C_={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},E_={Once:!0,postcssPlugin:!0,prepare:!0},Yi=0;function rn(t){return typeof t=="object"&&typeof t.then=="function"}function Rf(t){let e=!1,r=k_[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[r,r+"-"+e,Yi,r+"Exit",r+"Exit-"+e]:e?[r,r+"-"+e,r+"Exit",r+"Exit-"+e]:t.append?[r,Yi,r+"Exit"]:[r,r+"Exit"]}function Lf(t){let e;return t.type==="document"?e=["Document",Yi,"DocumentExit"]:t.type==="root"?e=["Root",Yi,"RootExit"]:e=Rf(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function cc(t){return t[jt]=!1,t.nodes&&t.nodes.forEach(e=>cc(e)),t}var uc={},kr=class t{constructor(e,r,i){this.stringified=!1,this.processed=!1;let s;if(typeof r=="object"&&r!==null&&(r.type==="root"||r.type==="document"))s=cc(r);else if(r instanceof t||r instanceof Pf)s=cc(r.root),r.map&&(typeof i.map>"u"&&(i.map={}),i.map.inline||(i.map.inline=!1),i.map.prev=r.map);else{let n=w_;i.syntax&&(n=i.syntax.parse),i.parser&&(n=i.parser),n.parse&&(n=n.parse);try{s=n(r,i)}catch(o){this.processed=!0,this.error=o}s&&!s[S_]&&b_.rebuild(s)}this.result=new Pf(e,s,i),this.helpers={...uc,postcss:uc,result:this.result},this.plugins=this.processor.plugins.map(n=>typeof n=="object"&&n.prepare?{...n,...n.prepare(this.result)}:n)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,r){let i=this.result.lastPlugin;try{r&&r.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=i.postcssPlugin,e.setMessage()):i.postcssVersion}catch(s){console&&console.error&&console.error(s)}return e}prepareVisitors(){this.listeners={};let e=(r,i,s)=>{this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push([r,s])};for(let r of this.plugins)if(typeof r=="object")for(let i in r){if(!C_[i]&&/^[A-Z]/.test(i))throw new Error(`Unknown event ${i} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!E_[i])if(typeof r[i]=="object")for(let s in r[i])s==="*"?e(r,i,r[i][s]):e(r,i+"-"+s.toLowerCase(),r[i][s]);else typeof r[i]=="function"&&e(r,i,r[i])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let r=this.plugins[e],i=this.runOnRoot(r);if(rn(i))try{await i}catch(s){throw this.handleError(s)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[jt];){e[jt]=!0;let r=[Lf(e)];for(;r.length>0;){let i=this.visitTick(r);if(rn(i))try{await i}catch(s){let n=r[r.length-1].node;throw this.handleError(s,n)}}}if(this.listeners.OnceExit)for(let[r,i]of this.listeners.OnceExit){this.result.lastPlugin=r;try{if(e.type==="document"){let s=e.nodes.map(n=>i(n,this.helpers));await Promise.all(s)}else await i(e,this.helpers)}catch(s){throw this.handleError(s)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let r=this.result.root.nodes.map(i=>e.Once(i,this.helpers));return rn(r[0])?Promise.all(r):r}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(r){throw this.handleError(r)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,r=x_;e.syntax&&(r=e.syntax.stringify),e.stringifier&&(r=e.stringifier),r.stringify&&(r=r.stringify);let s=new v_(r,this.result.root,this.result.opts).generate();return this.result.css=s[0],this.result.map=s[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let r=this.runOnRoot(e);if(rn(r))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[jt];)e[jt]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let r of e.nodes)this.visitSync(this.listeners.OnceExit,r);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,r){return this.async().then(e,r)}toString(){return this.css}visitSync(e,r){for(let[i,s]of e){this.result.lastPlugin=i;let n;try{n=s(r,this.helpers)}catch(o){throw this.handleError(o,r.proxyOf)}if(r.type!=="root"&&r.type!=="document"&&!r.parent)return!0;if(rn(n))throw this.getAsyncError()}}visitTick(e){let r=e[e.length-1],{node:i,visitors:s}=r;if(i.type!=="root"&&i.type!=="document"&&!i.parent){e.pop();return}if(s.length>0&&r.visitorIndex<s.length){let[o,a]=s[r.visitorIndex];r.visitorIndex+=1,r.visitorIndex===s.length&&(r.visitors=[],r.visitorIndex=0),this.result.lastPlugin=o;try{return a(i.toProxy(),this.helpers)}catch(l){throw this.handleError(l,i)}}if(r.iterator!==0){let o=r.iterator,a;for(;a=i.nodes[i.indexes[o]];)if(i.indexes[o]+=1,!a[jt]){a[jt]=!0,e.push(Lf(a));return}r.iterator=0,delete i.indexes[o]}let n=r.events;for(;r.eventIndex<n.length;){let o=n[r.eventIndex];if(r.eventIndex+=1,o===Yi){i.nodes&&i.nodes.length&&(i[jt]=!0,r.iterator=i.getIterator());return}else if(this.listeners[o]){r.visitors=this.listeners[o];return}}e.pop()}walkSync(e){e[jt]=!0;let r=Rf(e);for(let i of r)if(i===Yi)e.nodes&&e.each(s=>{s[jt]||this.walkSync(s)});else{let s=this.listeners[i];if(s&&this.visitSync(s,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};kr.registerPostcss=t=>{uc=t};Df.exports=kr;kr.default=kr;__.registerLazyResult(kr);y_.registerLazyResult(kr)});var Mf=A((FO,Nf)=>{"use strict";var T_=nc(),A_=Wo(),O_=Ho(),$_=js(),zO=lc(),sn=class{constructor(e,r,i){r=r.toString(),this.stringified=!1,this._processor=e,this._css=r,this._opts=i,this._map=void 0;let s,n=$_;this.result=new O_(this._processor,s,this._opts),this.result.css=r;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let a=new T_(n,s,this._opts,r);if(a.isMap()){let[l,c]=a.generate();l&&(this.result.css=l),c&&(this.result.map=c)}else a.clearAnnotation(),this.result.css=a.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,r){return this.async().then(e,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,r=A_;try{e=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};Nf.exports=sn;sn.default=sn});var Ff=A((UO,zf)=>{"use strict";var I_=Do(),P_=dc(),L_=Mf(),R_=Gi(),ei=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let r=[];for(let i of e)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(!(typeof i=="object"&&(i.parse||i.stringify)))throw new Error(i+" is not a PostCSS plugin");return r}process(e,r={}){return!this.plugins.length&&!r.parser&&!r.stringifier&&!r.syntax?new L_(this,e,r):new P_(this,e,r)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};zf.exports=ei;ei.default=ei;R_.registerProcessor(ei);I_.registerProcessor(ei)});var Ji=A((jO,Hf)=>{"use strict";var Uf=Ro(),jf=Zs(),D_=xr(),N_=Po(),Vf=Ks(),Bf=Do(),M_=ff(),z_=Js(),F_=dc(),U_=ic(),j_=Ws(),V_=Wo(),hc=Ff(),B_=Ho(),qf=Gi(),Wf=Fo(),q_=js(),W_=ac();function ye(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new hc(t)}ye.plugin=function(e,r){let i=!1;function s(...o){console&&console.warn&&!i&&(i=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(e+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let a=r(...o);return a.postcssPlugin=e,a.postcssVersion=new hc().version,a}let n;return Object.defineProperty(s,"postcss",{get(){return n||(n=s()),n}}),s.process=function(o,a,l){return ye([s(l)]).process(o,a)},s};ye.stringify=q_;ye.parse=V_;ye.fromJSON=M_;ye.list=U_;ye.comment=t=>new jf(t);ye.atRule=t=>new Uf(t);ye.decl=t=>new Vf(t);ye.rule=t=>new Wf(t);ye.root=t=>new qf(t);ye.document=t=>new Bf(t);ye.CssSyntaxError=N_;ye.Declaration=Vf;ye.Container=D_;ye.Processor=hc;ye.Document=Bf;ye.Comment=jf;ye.Warning=W_;ye.AtRule=Uf;ye.Result=B_;ye.Input=z_;ye.Rule=Wf;ye.Root=qf;ye.Node=j_;F_.registerPostcss(ye);Hf.exports=ye;ye.default=ye});var Yf=A((f$,Kf)=>{"use strict";var Zf=/-(\w|$)/g,Gf=function(e,r){return r.toUpperCase()},H_=function(e){return e=e.toLowerCase(),e==="float"?"cssFloat":e.charCodeAt(0)===45&&e.charCodeAt(1)===109&&e.charCodeAt(2)===115&&e.charCodeAt(3)===45?e.substr(1).replace(Zf,Gf):e.replace(Zf,Gf)};Kf.exports=H_});var gc=A((p$,Jf)=>{var Z_=Yf(),G_={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function pc(t){return typeof t.nodes>"u"?!0:mc(t)}function mc(t){let e,r={};return t.each(i=>{if(i.type==="atrule")e="@"+i.name,i.params&&(e+=" "+i.params),typeof r[e]>"u"?r[e]=pc(i):Array.isArray(r[e])?r[e].push(pc(i)):r[e]=[r[e],pc(i)];else if(i.type==="rule"){let s=mc(i);if(r[i.selector])for(let n in s)r[i.selector][n]=s[n];else r[i.selector]=s}else if(i.type==="decl"){i.prop[0]==="-"&&i.prop[1]==="-"||i.parent&&i.parent.selector===":export"?e=i.prop:e=Z_(i.prop);let s=i.value;!isNaN(i.value)&&G_[e]&&(s=parseFloat(i.value)),i.important&&(s+=" !important"),typeof r[e]>"u"?r[e]=s:Array.isArray(r[e])?r[e].push(s):r[e]=[r[e],s]}}),r}Jf.exports=mc});var Zo=A((m$,tp)=>{var nn=Ji(),Xf=/\s*!important\s*$/i,K_={"box-flex":!0,"box-flex-group":!0,"column-count":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0};function Y_(t){return t.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function Qf(t,e,r){r===!1||r===null||(e.startsWith("--")||(e=Y_(e)),typeof r=="number"&&(r===0||K_[e]?r=r.toString():r+="px"),e==="css-float"&&(e="float"),Xf.test(r)?(r=r.replace(Xf,""),t.push(nn.decl({prop:e,value:r,important:!0}))):t.push(nn.decl({prop:e,value:r})))}function ep(t,e,r){let i=nn.atRule({name:e[1],params:e[3]||""});typeof r=="object"&&(i.nodes=[],bc(r,i)),t.push(i)}function bc(t,e){let r,i,s;for(r in t)if(i=t[r],!(i===null||typeof i>"u"))if(r[0]==="@"){let n=r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);if(Array.isArray(i))for(let o of i)ep(e,n,o);else ep(e,n,i)}else if(Array.isArray(i))for(let n of i)Qf(e,r,n);else typeof i=="object"?(s=nn.rule({selector:r}),bc(i,s),e.push(s)):Qf(e,r,i)}tp.exports=function(t){let e=nn.root();return bc(t,e),e}});var yc=A((g$,rp)=>{var J_=gc();rp.exports=function(e){return console&&console.warn&&e.warnings().forEach(r=>{let i=r.plugin||"PostCSS";console.warn(i+": "+r.text)}),J_(e.root)}});var sp=A((b$,ip)=>{var X_=Ji(),Q_=yc(),e0=Zo();ip.exports=function(e){let r=X_(e);return async i=>{let s=await r.process(i,{parser:e0,from:void 0});return Q_(s)}}});var op=A((y$,np)=>{var t0=Ji(),r0=yc(),i0=Zo();np.exports=function(t){let e=t0(t);return r=>{let i=e.process(r,{parser:i0,from:void 0});return r0(i)}}});var lp=A((v$,ap)=>{var s0=gc(),n0=Zo(),o0=sp(),a0=op();ap.exports={objectify:s0,parse:n0,async:o0,sync:a0}});var wc=A((Go,cp)=>{"use strict";Go.__esModule=!0;Go.default=u0;function l0(t){for(var e=t.toLowerCase(),r="",i=!1,s=0;s<6&&e[s]!==void 0;s++){var n=e.charCodeAt(s),o=n>=97&&n<=102||n>=48&&n<=57;if(i=n===32,!o)break;r+=e[s]}if(r.length!==0){var a=parseInt(r,16),l=a>=55296&&a<=57343;return l||a===0||a>1114111?["\uFFFD",r.length+(i?1:0)]:[String.fromCodePoint(a),r.length+(i?1:0)]}}var c0=/\\/;function u0(t){var e=c0.test(t);if(!e)return t;for(var r="",i=0;i<t.length;i++){if(t[i]==="\\"){var s=l0(t.slice(i+1,i+7));if(s!==void 0){r+=s[0],i+=s[1];continue}if(t[i+1]==="\\"){r+="\\",i++;continue}t.length===i+1&&(r+=t[i]);continue}r+=t[i]}return r}cp.exports=Go.default});var dp=A((Ko,up)=>{"use strict";Ko.__esModule=!0;Ko.default=d0;function d0(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var s=r.shift();if(!t[s])return;t=t[s]}return t}up.exports=Ko.default});var fp=A((Yo,hp)=>{"use strict";Yo.__esModule=!0;Yo.default=h0;function h0(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(;r.length>0;){var s=r.shift();t[s]||(t[s]={}),t=t[s]}}hp.exports=Yo.default});var mp=A((Jo,pp)=>{"use strict";Jo.__esModule=!0;Jo.default=f0;function f0(t){for(var e="",r=t.indexOf("/*"),i=0;r>=0;){e=e+t.slice(i,r);var s=t.indexOf("*/",r+2);if(s<0)return e;i=s+2,r=t.indexOf("/*",i)}return e=e+t.slice(i),e}pp.exports=Jo.default});var on=A(Vt=>{"use strict";Vt.__esModule=!0;Vt.unesc=Vt.stripComments=Vt.getProp=Vt.ensureObject=void 0;var p0=Xo(wc());Vt.unesc=p0.default;var m0=Xo(dp());Vt.getProp=m0.default;var g0=Xo(fp());Vt.ensureObject=g0.default;var b0=Xo(mp());Vt.stripComments=b0.default;function Xo(t){return t&&t.__esModule?t:{default:t}}});var tr=A((an,yp)=>{"use strict";an.__esModule=!0;an.default=void 0;var gp=on();function bp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y0(t,e,r){return e&&bp(t.prototype,e),r&&bp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var v0=function t(e,r){if(typeof e!="object"||e===null)return e;var i=new e.constructor;for(var s in e)if(e.hasOwnProperty(s)){var n=e[s],o=typeof n;s==="parent"&&o==="object"?r&&(i[s]=r):n instanceof Array?i[s]=n.map(function(a){return t(a,i)}):i[s]=t(n,i)}return i},w0=function(){function t(r){r===void 0&&(r={}),Object.assign(this,r),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var e=t.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(i){i===void 0&&(i={});var s=v0(this);for(var n in i)s[n]=i[n];return s},e.appendToPropertyAndEscape=function(i,s,n){this.raws||(this.raws={});var o=this[i],a=this.raws[i];this[i]=o+s,a||n!==s?this.raws[i]=(a||o)+n:delete this.raws[i]},e.setPropertyAndEscape=function(i,s,n){this.raws||(this.raws={}),this[i]=s,this.raws[i]=n},e.setPropertyWithoutEscape=function(i,s){this[i]=s,this.raws&&delete this.raws[i]},e.isAtPosition=function(i,s){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>s||this.source.end.line===i&&this.source.end.column<s)},e.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},y0(t,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,gp.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,gp.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),t}();an.default=w0;yp.exports=an.default});var Ve=A(Ce=>{"use strict";Ce.__esModule=!0;Ce.UNIVERSAL=Ce.TAG=Ce.STRING=Ce.SELECTOR=Ce.ROOT=Ce.PSEUDO=Ce.NESTING=Ce.ID=Ce.COMMENT=Ce.COMBINATOR=Ce.CLASS=Ce.ATTRIBUTE=void 0;var _0="tag";Ce.TAG=_0;var x0="string";Ce.STRING=x0;var S0="selector";Ce.SELECTOR=S0;var k0="root";Ce.ROOT=k0;var C0="pseudo";Ce.PSEUDO=C0;var E0="nesting";Ce.NESTING=E0;var T0="id";Ce.ID=T0;var A0="comment";Ce.COMMENT=A0;var O0="combinator";Ce.COMBINATOR=O0;var $0="class";Ce.CLASS=$0;var I0="attribute";Ce.ATTRIBUTE=I0;var P0="universal";Ce.UNIVERSAL=P0});var Qo=A((ln,xp)=>{"use strict";ln.__esModule=!0;ln.default=void 0;var L0=D0(tr()),rr=R0(Ve());function _p(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(_p=function(s){return s?r:e})(t)}function R0(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=_p(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function D0(t){return t&&t.__esModule?t:{default:t}}function N0(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=M0(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M0(t,e){if(t){if(typeof t=="string")return vp(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return vp(t,e)}}function vp(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function wp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function z0(t,e,r){return e&&wp(t.prototype,e),r&&wp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function F0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_c(t,e)}function _c(t,e){return _c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},_c(t,e)}var U0=function(t){F0(e,t);function e(i){var s;return s=t.call(this,i)||this,s.nodes||(s.nodes=[]),s}var r=e.prototype;return r.append=function(s){return s.parent=this,this.nodes.push(s),this},r.prepend=function(s){s.parent=this,this.nodes.unshift(s);for(var n in this.indexes)this.indexes[n]++;return this},r.at=function(s){return this.nodes[s]},r.index=function(s){return typeof s=="number"?s:this.nodes.indexOf(s)},r.removeChild=function(s){s=this.index(s),this.at(s).parent=void 0,this.nodes.splice(s,1);var n;for(var o in this.indexes)n=this.indexes[o],n>=s&&(this.indexes[o]=n-1);return this},r.removeAll=function(){for(var s=N0(this.nodes),n;!(n=s()).done;){var o=n.value;o.parent=void 0}return this.nodes=[],this},r.empty=function(){return this.removeAll()},r.insertAfter=function(s,n){n.parent=this;var o=this.index(s);this.nodes.splice(o+1,0,n),n.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],o<a&&(this.indexes[l]=a+1);return this},r.insertBefore=function(s,n){n.parent=this;var o=this.index(s);this.nodes.splice(o,0,n),n.parent=this;var a;for(var l in this.indexes)a=this.indexes[l],a>=o&&(this.indexes[l]=a+1);return this},r._findChildAtPosition=function(s,n){var o=void 0;return this.each(function(a){if(a.atPosition){var l=a.atPosition(s,n);if(l)return o=l,!1}else if(a.isAtPosition(s,n))return o=a,!1}),o},r.atPosition=function(s,n){if(this.isAtPosition(s,n))return this._findChildAtPosition(s,n)||this},r._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},r.each=function(s){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var n=this.lastEach;if(this.indexes[n]=0,!!this.length){for(var o,a;this.indexes[n]<this.length&&(o=this.indexes[n],a=s(this.at(o),o),a!==!1);)this.indexes[n]+=1;if(delete this.indexes[n],a===!1)return!1}},r.walk=function(s){return this.each(function(n,o){var a=s(n,o);if(a!==!1&&n.length&&(a=n.walk(s)),a===!1)return!1})},r.walkAttributes=function(s){var n=this;return this.walk(function(o){if(o.type===rr.ATTRIBUTE)return s.call(n,o)})},r.walkClasses=function(s){var n=this;return this.walk(function(o){if(o.type===rr.CLASS)return s.call(n,o)})},r.walkCombinators=function(s){var n=this;return this.walk(function(o){if(o.type===rr.COMBINATOR)return s.call(n,o)})},r.walkComments=function(s){var n=this;return this.walk(function(o){if(o.type===rr.COMMENT)return s.call(n,o)})},r.walkIds=function(s){var n=this;return this.walk(function(o){if(o.type===rr.ID)return s.call(n,o)})},r.walkNesting=function(s){var n=this;return this.walk(function(o){if(o.type===rr.NESTING)return s.call(n,o)})},r.walkPseudos=function(s){var n=this;return this.walk(function(o){if(o.type===rr.PSEUDO)return s.call(n,o)})},r.walkTags=function(s){var n=this;return this.walk(function(o){if(o.type===rr.TAG)return s.call(n,o)})},r.walkUniversals=function(s){var n=this;return this.walk(function(o){if(o.type===rr.UNIVERSAL)return s.call(n,o)})},r.split=function(s){var n=this,o=[];return this.reduce(function(a,l,c){var u=s.call(n,l);return o.push(l),u?(a.push(o),o=[]):c===n.length-1&&a.push(o),a},[])},r.map=function(s){return this.nodes.map(s)},r.reduce=function(s,n){return this.nodes.reduce(s,n)},r.every=function(s){return this.nodes.every(s)},r.some=function(s){return this.nodes.some(s)},r.filter=function(s){return this.nodes.filter(s)},r.sort=function(s){return this.nodes.sort(s)},r.toString=function(){return this.map(String).join("")},z0(e,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),e}(L0.default);ln.default=U0;xp.exports=ln.default});var Sc=A((cn,kp)=>{"use strict";cn.__esModule=!0;cn.default=void 0;var j0=B0(Qo()),V0=Ve();function B0(t){return t&&t.__esModule?t:{default:t}}function Sp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function q0(t,e,r){return e&&Sp(t.prototype,e),r&&Sp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function W0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,xc(t,e)}function xc(t,e){return xc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},xc(t,e)}var H0=function(t){W0(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=V0.ROOT,s}var r=e.prototype;return r.toString=function(){var s=this.reduce(function(n,o){return n.push(String(o)),n},[]).join(",");return this.trailingComma?s+",":s},r.error=function(s,n){return this._error?this._error(s,n):new Error(s)},q0(e,[{key:"errorGenerator",set:function(s){this._error=s}}]),e}(j0.default);cn.default=H0;kp.exports=cn.default});var Cc=A((un,Cp)=>{"use strict";un.__esModule=!0;un.default=void 0;var Z0=K0(Qo()),G0=Ve();function K0(t){return t&&t.__esModule?t:{default:t}}function Y0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,kc(t,e)}function kc(t,e){return kc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},kc(t,e)}var J0=function(t){Y0(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=G0.SELECTOR,i}return e}(Z0.default);un.default=J0;Cp.exports=un.default});var ea=A((T$,Ep)=>{"use strict";var X0={},Q0=X0.hasOwnProperty,ex=function(e,r){if(!e)return r;var i={};for(var s in r)i[s]=Q0.call(e,s)?e[s]:r[s];return i},tx=/[ -,\.\/:-@\[-\^`\{-~]/,rx=/[ -,\.\/:-@\[\]\^`\{-~]/,ix=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,Ec=function t(e,r){r=ex(r,t.options),r.quotes!="single"&&r.quotes!="double"&&(r.quotes="single");for(var i=r.quotes=="double"?'"':"'",s=r.isIdentifier,n=e.charAt(0),o="",a=0,l=e.length;a<l;){var c=e.charAt(a++),u=c.charCodeAt(),d=void 0;if(u<32||u>126){if(u>=55296&&u<=56319&&a<l){var p=e.charCodeAt(a++);(p&64512)==56320?u=((u&1023)<<10)+(p&1023)+65536:a--}d="\\"+u.toString(16).toUpperCase()+" "}else r.escapeEverything?tx.test(c)?d="\\"+c:d="\\"+u.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(c)?d="\\"+u.toString(16).toUpperCase()+" ":c=="\\"||!s&&(c=='"'&&i==c||c=="'"&&i==c)||s&&rx.test(c)?d="\\"+c:d=c;o+=d}return s&&(/^-[-\d]/.test(o)?o="\\-"+o.slice(1):/\d/.test(n)&&(o="\\3"+n+" "+o.slice(1))),o=o.replace(ix,function(f,m,_){return m&&m.length%2?f:(m||"")+_}),!s&&r.wrap?i+o+i:o};Ec.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};Ec.version="3.0.0";Ep.exports=Ec});var Ac=A((dn,Op)=>{"use strict";dn.__esModule=!0;dn.default=void 0;var sx=Ap(ea()),nx=on(),ox=Ap(tr()),ax=Ve();function Ap(t){return t&&t.__esModule?t:{default:t}}function Tp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function lx(t,e,r){return e&&Tp(t.prototype,e),r&&Tp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function cx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Tc(t,e)}function Tc(t,e){return Tc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Tc(t,e)}var ux=function(t){cx(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=ax.CLASS,s._constructed=!0,s}var r=e.prototype;return r.valueToString=function(){return"."+t.prototype.valueToString.call(this)},lx(e,[{key:"value",get:function(){return this._value},set:function(s){if(this._constructed){var n=(0,sx.default)(s,{isIdentifier:!0});n!==s?((0,nx.ensureObject)(this,"raws"),this.raws.value=n):this.raws&&delete this.raws.value}this._value=s}}]),e}(ox.default);dn.default=ux;Op.exports=dn.default});var $c=A((hn,$p)=>{"use strict";hn.__esModule=!0;hn.default=void 0;var dx=fx(tr()),hx=Ve();function fx(t){return t&&t.__esModule?t:{default:t}}function px(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Oc(t,e)}function Oc(t,e){return Oc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Oc(t,e)}var mx=function(t){px(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=hx.COMMENT,i}return e}(dx.default);hn.default=mx;$p.exports=hn.default});var Pc=A((fn,Ip)=>{"use strict";fn.__esModule=!0;fn.default=void 0;var gx=yx(tr()),bx=Ve();function yx(t){return t&&t.__esModule?t:{default:t}}function vx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ic(t,e)}function Ic(t,e){return Ic=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ic(t,e)}var wx=function(t){vx(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=bx.ID,s}var r=e.prototype;return r.valueToString=function(){return"#"+t.prototype.valueToString.call(this)},e}(gx.default);fn.default=wx;Ip.exports=fn.default});var ta=A((pn,Rp)=>{"use strict";pn.__esModule=!0;pn.default=void 0;var _x=Lp(ea()),xx=on(),Sx=Lp(tr());function Lp(t){return t&&t.__esModule?t:{default:t}}function Pp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function kx(t,e,r){return e&&Pp(t.prototype,e),r&&Pp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Cx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Lc(t,e)}function Lc(t,e){return Lc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Lc(t,e)}var Ex=function(t){Cx(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.qualifiedName=function(s){return this.namespace?this.namespaceString+"|"+s:s},r.valueToString=function(){return this.qualifiedName(t.prototype.valueToString.call(this))},kx(e,[{key:"namespace",get:function(){return this._namespace},set:function(s){if(s===!0||s==="*"||s==="&"){this._namespace=s,this.raws&&delete this.raws.namespace;return}var n=(0,_x.default)(s,{isIdentifier:!0});this._namespace=s,n!==s?((0,xx.ensureObject)(this,"raws"),this.raws.namespace=n):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(s){this.namespace=s}},{key:"namespaceString",get:function(){if(this.namespace){var s=this.stringifyProperty("namespace");return s===!0?"":s}else return""}}]),e}(Sx.default);pn.default=Ex;Rp.exports=pn.default});var Dc=A((mn,Dp)=>{"use strict";mn.__esModule=!0;mn.default=void 0;var Tx=Ox(ta()),Ax=Ve();function Ox(t){return t&&t.__esModule?t:{default:t}}function $x(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Rc(t,e)}function Rc(t,e){return Rc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Rc(t,e)}var Ix=function(t){$x(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Ax.TAG,i}return e}(Tx.default);mn.default=Ix;Dp.exports=mn.default});var Mc=A((gn,Np)=>{"use strict";gn.__esModule=!0;gn.default=void 0;var Px=Rx(tr()),Lx=Ve();function Rx(t){return t&&t.__esModule?t:{default:t}}function Dx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Nc(t,e)}function Nc(t,e){return Nc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Nc(t,e)}var Nx=function(t){Dx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=Lx.STRING,i}return e}(Px.default);gn.default=Nx;Np.exports=gn.default});var Fc=A((bn,Mp)=>{"use strict";bn.__esModule=!0;bn.default=void 0;var Mx=Fx(Qo()),zx=Ve();function Fx(t){return t&&t.__esModule?t:{default:t}}function Ux(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,zc(t,e)}function zc(t,e){return zc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},zc(t,e)}var jx=function(t){Ux(e,t);function e(i){var s;return s=t.call(this,i)||this,s.type=zx.PSEUDO,s}var r=e.prototype;return r.toString=function(){var s=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),s,this.rawSpaceAfter].join("")},e}(Mx.default);bn.default=jx;Mp.exports=bn.default});var Fp=A((A$,zp)=>{zp.exports=Vx;function Vx(t,e){if(Uc("noDeprecation"))return t;var r=!1;function i(){if(!r){if(Uc("throwDeprecation"))throw new Error(e);Uc("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}return i}function Uc(t){try{if(!global.localStorage)return!1}catch{return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var Hc=A(wn=>{"use strict";wn.__esModule=!0;wn.default=void 0;wn.unescapeValue=Wc;var yn=qc(ea()),Bx=qc(wc()),qx=qc(ta()),Wx=Ve(),jc;function qc(t){return t&&t.__esModule?t:{default:t}}function Up(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Hx(t,e,r){return e&&Up(t.prototype,e),r&&Up(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Zx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Bc(t,e)}function Bc(t,e){return Bc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Bc(t,e)}var vn=Fp(),Gx=/^('|")([^]*)\1$/,Kx=vn(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),Yx=vn(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),Jx=vn(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function Wc(t){var e=!1,r=null,i=t,s=i.match(Gx);return s&&(r=s[1],i=s[2]),i=(0,Bx.default)(i),i!==t&&(e=!0),{deprecatedUsage:e,unescaped:i,quoteMark:r}}function Xx(t){if(t.quoteMark!==void 0||t.value===void 0)return t;Jx();var e=Wc(t.value),r=e.quoteMark,i=e.unescaped;return t.raws||(t.raws={}),t.raws.value===void 0&&(t.raws.value=t.value),t.value=i,t.quoteMark=r,t}var ra=function(t){Zx(e,t);function e(i){var s;return i===void 0&&(i={}),s=t.call(this,Xx(i))||this,s.type=Wx.ATTRIBUTE,s.raws=s.raws||{},Object.defineProperty(s.raws,"unquoted",{get:vn(function(){return s.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:vn(function(){return s.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),s._constructed=!0,s}var r=e.prototype;return r.getQuotedValue=function(s){s===void 0&&(s={});var n=this._determineQuoteMark(s),o=Vc[n],a=(0,yn.default)(this._value,o);return a},r._determineQuoteMark=function(s){return s.smart?this.smartQuoteMark(s):this.preferredQuoteMark(s)},r.setValue=function(s,n){n===void 0&&(n={}),this._value=s,this._quoteMark=this._determineQuoteMark(n),this._syncRawValue()},r.smartQuoteMark=function(s){var n=this.value,o=n.replace(/[^']/g,"").length,a=n.replace(/[^"]/g,"").length;if(o+a===0){var l=(0,yn.default)(n,{isIdentifier:!0});if(l===n)return e.NO_QUOTE;var c=this.preferredQuoteMark(s);if(c===e.NO_QUOTE){var u=this.quoteMark||s.quoteMark||e.DOUBLE_QUOTE,d=Vc[u],p=(0,yn.default)(n,d);if(p.length<l.length)return u}return c}else return a===o?this.preferredQuoteMark(s):a<o?e.DOUBLE_QUOTE:e.SINGLE_QUOTE},r.preferredQuoteMark=function(s){var n=s.preferCurrentQuoteMark?this.quoteMark:s.quoteMark;return n===void 0&&(n=s.preferCurrentQuoteMark?s.quoteMark:this.quoteMark),n===void 0&&(n=e.DOUBLE_QUOTE),n},r._syncRawValue=function(){var s=(0,yn.default)(this._value,Vc[this.quoteMark]);s===this._value?this.raws&&delete this.raws.value:this.raws.value=s},r._handleEscapes=function(s,n){if(this._constructed){var o=(0,yn.default)(n,{isIdentifier:!0});o!==n?this.raws[s]=o:delete this.raws[s]}},r._spacesFor=function(s){var n={before:"",after:""},o=this.spaces[s]||{},a=this.raws.spaces&&this.raws.spaces[s]||{};return Object.assign(n,o,a)},r._stringFor=function(s,n,o){n===void 0&&(n=s),o===void 0&&(o=jp);var a=this._spacesFor(n);return o(this.stringifyProperty(s),a)},r.offsetOf=function(s){var n=1,o=this._spacesFor("attribute");if(n+=o.before.length,s==="namespace"||s==="ns")return this.namespace?n:-1;if(s==="attributeNS"||(n+=this.namespaceString.length,this.namespace&&(n+=1),s==="attribute"))return n;n+=this.stringifyProperty("attribute").length,n+=o.after.length;var a=this._spacesFor("operator");n+=a.before.length;var l=this.stringifyProperty("operator");if(s==="operator")return l?n:-1;n+=l.length,n+=a.after.length;var c=this._spacesFor("value");n+=c.before.length;var u=this.stringifyProperty("value");if(s==="value")return u?n:-1;n+=u.length,n+=c.after.length;var d=this._spacesFor("insensitive");return n+=d.before.length,s==="insensitive"&&this.insensitive?n:-1},r.toString=function(){var s=this,n=[this.rawSpaceBefore,"["];return n.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(n.push(this._stringFor("operator")),n.push(this._stringFor("value")),n.push(this._stringFor("insensitiveFlag","insensitive",function(o,a){return o.length>0&&!s.quoted&&a.before.length===0&&!(s.spaces.value&&s.spaces.value.after)&&(a.before=" "),jp(o,a)}))),n.push("]"),n.push(this.rawSpaceAfter),n.join("")},Hx(e,[{key:"quoted",get:function(){var s=this.quoteMark;return s==="'"||s==='"'},set:function(s){Yx()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(s){if(!this._constructed){this._quoteMark=s;return}this._quoteMark!==s&&(this._quoteMark=s,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(s){if(this._constructed){var n=Wc(s),o=n.deprecatedUsage,a=n.unescaped,l=n.quoteMark;if(o&&Kx(),a===this._value&&l===this._quoteMark)return;this._value=a,this._quoteMark=l,this._syncRawValue()}else this._value=s}},{key:"insensitive",get:function(){return this._insensitive},set:function(s){s||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=s}},{key:"attribute",get:function(){return this._attribute},set:function(s){this._handleEscapes("attribute",s),this._attribute=s}}]),e}(qx.default);wn.default=ra;ra.NO_QUOTE=null;ra.SINGLE_QUOTE="'";ra.DOUBLE_QUOTE='"';var Vc=(jc={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},jc[null]={isIdentifier:!0},jc);function jp(t,e){return""+e.before+t+e.after}});var Gc=A((_n,Vp)=>{"use strict";_n.__esModule=!0;_n.default=void 0;var Qx=tS(ta()),eS=Ve();function tS(t){return t&&t.__esModule?t:{default:t}}function rS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Zc(t,e)}function Zc(t,e){return Zc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Zc(t,e)}var iS=function(t){rS(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=eS.UNIVERSAL,i.value="*",i}return e}(Qx.default);_n.default=iS;Vp.exports=_n.default});var Yc=A((xn,Bp)=>{"use strict";xn.__esModule=!0;xn.default=void 0;var sS=oS(tr()),nS=Ve();function oS(t){return t&&t.__esModule?t:{default:t}}function aS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Kc(t,e)}function Kc(t,e){return Kc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Kc(t,e)}var lS=function(t){aS(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=nS.COMBINATOR,i}return e}(sS.default);xn.default=lS;Bp.exports=xn.default});var Xc=A((Sn,qp)=>{"use strict";Sn.__esModule=!0;Sn.default=void 0;var cS=dS(tr()),uS=Ve();function dS(t){return t&&t.__esModule?t:{default:t}}function hS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Jc(t,e)}function Jc(t,e){return Jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Jc(t,e)}var fS=function(t){hS(e,t);function e(r){var i;return i=t.call(this,r)||this,i.type=uS.NESTING,i.value="&",i}return e}(cS.default);Sn.default=fS;qp.exports=Sn.default});var Hp=A((ia,Wp)=>{"use strict";ia.__esModule=!0;ia.default=pS;function pS(t){return t.sort(function(e,r){return e-r})}Wp.exports=ia.default});var Qc=A(M=>{"use strict";M.__esModule=!0;M.word=M.tilde=M.tab=M.str=M.space=M.slash=M.singleQuote=M.semicolon=M.plus=M.pipe=M.openSquare=M.openParenthesis=M.newline=M.greaterThan=M.feed=M.equals=M.doubleQuote=M.dollar=M.cr=M.comment=M.comma=M.combinator=M.colon=M.closeSquare=M.closeParenthesis=M.caret=M.bang=M.backslash=M.at=M.asterisk=M.ampersand=void 0;var mS=38;M.ampersand=mS;var gS=42;M.asterisk=gS;var bS=64;M.at=bS;var yS=44;M.comma=yS;var vS=58;M.colon=vS;var wS=59;M.semicolon=wS;var _S=40;M.openParenthesis=_S;var xS=41;M.closeParenthesis=xS;var SS=91;M.openSquare=SS;var kS=93;M.closeSquare=kS;var CS=36;M.dollar=CS;var ES=126;M.tilde=ES;var TS=94;M.caret=TS;var AS=43;M.plus=AS;var OS=61;M.equals=OS;var $S=124;M.pipe=$S;var IS=62;M.greaterThan=IS;var PS=32;M.space=PS;var Zp=39;M.singleQuote=Zp;var LS=34;M.doubleQuote=LS;var RS=47;M.slash=RS;var DS=33;M.bang=DS;var NS=92;M.backslash=NS;var MS=13;M.cr=MS;var zS=12;M.feed=zS;var FS=10;M.newline=FS;var US=9;M.tab=US;var jS=Zp;M.str=jS;var VS=-1;M.comment=VS;var BS=-2;M.word=BS;var qS=-3;M.combinator=qS});var Yp=A(kn=>{"use strict";kn.__esModule=!0;kn.FIELDS=void 0;kn.default=JS;var T=WS(Qc()),Qi,_e;function Kp(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Kp=function(s){return s?r:e})(t)}function WS(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Kp(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}var HS=(Qi={},Qi[T.tab]=!0,Qi[T.newline]=!0,Qi[T.cr]=!0,Qi[T.feed]=!0,Qi),ZS=(_e={},_e[T.space]=!0,_e[T.tab]=!0,_e[T.newline]=!0,_e[T.cr]=!0,_e[T.feed]=!0,_e[T.ampersand]=!0,_e[T.asterisk]=!0,_e[T.bang]=!0,_e[T.comma]=!0,_e[T.colon]=!0,_e[T.semicolon]=!0,_e[T.openParenthesis]=!0,_e[T.closeParenthesis]=!0,_e[T.openSquare]=!0,_e[T.closeSquare]=!0,_e[T.singleQuote]=!0,_e[T.doubleQuote]=!0,_e[T.plus]=!0,_e[T.pipe]=!0,_e[T.tilde]=!0,_e[T.greaterThan]=!0,_e[T.equals]=!0,_e[T.dollar]=!0,_e[T.caret]=!0,_e[T.slash]=!0,_e),eu={},Gp="0123456789abcdefABCDEF";for(sa=0;sa<Gp.length;sa++)eu[Gp.charCodeAt(sa)]=!0;var sa;function GS(t,e){var r=e,i;do{if(i=t.charCodeAt(r),ZS[i])return r-1;i===T.backslash?r=KS(t,r)+1:r++}while(r<t.length);return r-1}function KS(t,e){var r=e,i=t.charCodeAt(r+1);if(!HS[i])if(eu[i]){var s=0;do r++,s++,i=t.charCodeAt(r+1);while(eu[i]&&s<6);s<6&&i===T.space&&r++}else r++;return r}var YS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};kn.FIELDS=YS;function JS(t){var e=[],r=t.css.valueOf(),i=r,s=i.length,n=-1,o=1,a=0,l=0,c,u,d,p,f,m,_,y,v,x,w,b,S;function z(R,U){if(t.safe)r+=U,v=r.length-1;else throw t.error("Unclosed "+R,o,a-n,a)}for(;a<s;){switch(c=r.charCodeAt(a),c===T.newline&&(n=a,o+=1),c){case T.space:case T.tab:case T.newline:case T.cr:case T.feed:v=a;do v+=1,c=r.charCodeAt(v),c===T.newline&&(n=v,o+=1);while(c===T.space||c===T.newline||c===T.tab||c===T.cr||c===T.feed);S=T.space,p=o,d=v-n-1,l=v;break;case T.plus:case T.greaterThan:case T.tilde:case T.pipe:v=a;do v+=1,c=r.charCodeAt(v);while(c===T.plus||c===T.greaterThan||c===T.tilde||c===T.pipe);S=T.combinator,p=o,d=a-n,l=v;break;case T.asterisk:case T.ampersand:case T.bang:case T.comma:case T.equals:case T.dollar:case T.caret:case T.openSquare:case T.closeSquare:case T.colon:case T.semicolon:case T.openParenthesis:case T.closeParenthesis:v=a,S=c,p=o,d=a-n,l=v+1;break;case T.singleQuote:case T.doubleQuote:b=c===T.singleQuote?"'":'"',v=a;do for(f=!1,v=r.indexOf(b,v+1),v===-1&&z("quote",b),m=v;r.charCodeAt(m-1)===T.backslash;)m-=1,f=!f;while(f);S=T.str,p=o,d=a-n,l=v+1;break;default:c===T.slash&&r.charCodeAt(a+1)===T.asterisk?(v=r.indexOf("*/",a+2)+1,v===0&&z("comment","*/"),u=r.slice(a,v+1),y=u.split(`
`),_=y.length-1,_>0?(x=o+_,w=v-y[_].length):(x=o,w=n),S=T.comment,o=x,p=x,d=v-w):c===T.slash?(v=a,S=c,p=o,d=a-n,l=v+1):(v=GS(r,a),S=T.word,p=o,d=v-n),l=v+1;break}e.push([S,o,a-n,p,d,a,l]),w&&(n=w,w=null),a=l}return e}});var sm=A((Cn,im)=>{"use strict";Cn.__esModule=!0;Cn.default=void 0;var XS=gt(Sc()),tu=gt(Cc()),QS=gt(Ac()),Jp=gt($c()),ek=gt(Pc()),tk=gt(Dc()),ru=gt(Mc()),rk=gt(Fc()),Xp=na(Hc()),ik=gt(Gc()),iu=gt(Yc()),sk=gt(Xc()),nk=gt(Hp()),C=na(Yp()),P=na(Qc()),ok=na(Ve()),Ie=on(),ti,su;function rm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(rm=function(s){return s?r:e})(t)}function na(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=rm(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function gt(t){return t&&t.__esModule?t:{default:t}}function Qp(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ak(t,e,r){return e&&Qp(t.prototype,e),r&&Qp(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var au=(ti={},ti[P.space]=!0,ti[P.cr]=!0,ti[P.feed]=!0,ti[P.newline]=!0,ti[P.tab]=!0,ti),lk=Object.assign({},au,(su={},su[P.comment]=!0,su));function em(t){return{line:t[C.FIELDS.START_LINE],column:t[C.FIELDS.START_COL]}}function tm(t){return{line:t[C.FIELDS.END_LINE],column:t[C.FIELDS.END_COL]}}function ri(t,e,r,i){return{start:{line:t,column:e},end:{line:r,column:i}}}function es(t){return ri(t[C.FIELDS.START_LINE],t[C.FIELDS.START_COL],t[C.FIELDS.END_LINE],t[C.FIELDS.END_COL])}function nu(t,e){if(t)return ri(t[C.FIELDS.START_LINE],t[C.FIELDS.START_COL],e[C.FIELDS.END_LINE],e[C.FIELDS.END_COL])}function ts(t,e){var r=t[e];if(typeof r=="string")return r.indexOf("\\")!==-1&&((0,Ie.ensureObject)(t,"raws"),t[e]=(0,Ie.unesc)(r),t.raws[e]===void 0&&(t.raws[e]=r)),t}function ou(t,e){for(var r=-1,i=[];(r=t.indexOf(e,r+1))!==-1;)i.push(r);return i}function ck(){var t=Array.prototype.concat.apply([],arguments);return t.filter(function(e,r){return r===t.indexOf(e)})}var uk=function(){function t(r,i){i===void 0&&(i={}),this.rule=r,this.options=Object.assign({lossy:!1,safe:!1},i),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,C.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var s=nu(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new XS.default({source:s}),this.root.errorGenerator=this._errorGenerator();var n=new tu.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(n),this.current=n,this.loop()}var e=t.prototype;return e._errorGenerator=function(){var i=this;return function(s,n){return typeof i.rule=="string"?new Error(s):i.rule.error(s,n)}},e.attribute=function(){var i=[],s=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[C.FIELDS.TYPE]!==P.closeSquare;)i.push(this.currToken),this.position++;if(this.currToken[C.FIELDS.TYPE]!==P.closeSquare)return this.expected("closing square bracket",this.currToken[C.FIELDS.START_POS]);var n=i.length,o={source:ri(s[1],s[2],this.currToken[3],this.currToken[4]),sourceIndex:s[C.FIELDS.START_POS]};if(n===1&&!~[P.word].indexOf(i[0][C.FIELDS.TYPE]))return this.expected("attribute",i[0][C.FIELDS.START_POS]);for(var a=0,l="",c="",u=null,d=!1;a<n;){var p=i[a],f=this.content(p),m=i[a+1];switch(p[C.FIELDS.TYPE]){case P.space:if(d=!0,this.options.lossy)break;if(u){(0,Ie.ensureObject)(o,"spaces",u);var _=o.spaces[u].after||"";o.spaces[u].after=_+f;var y=(0,Ie.getProp)(o,"raws","spaces",u,"after")||null;y&&(o.raws.spaces[u].after=y+f)}else l=l+f,c=c+f;break;case P.asterisk:if(m[C.FIELDS.TYPE]===P.equals)o.operator=f,u="operator";else if((!o.namespace||u==="namespace"&&!d)&&m){l&&((0,Ie.ensureObject)(o,"spaces","attribute"),o.spaces.attribute.before=l,l=""),c&&((0,Ie.ensureObject)(o,"raws","spaces","attribute"),o.raws.spaces.attribute.before=l,c=""),o.namespace=(o.namespace||"")+f;var v=(0,Ie.getProp)(o,"raws","namespace")||null;v&&(o.raws.namespace+=f),u="namespace"}d=!1;break;case P.dollar:if(u==="value"){var x=(0,Ie.getProp)(o,"raws","value");o.value+="$",x&&(o.raws.value=x+"$");break}case P.caret:m[C.FIELDS.TYPE]===P.equals&&(o.operator=f,u="operator"),d=!1;break;case P.combinator:if(f==="~"&&m[C.FIELDS.TYPE]===P.equals&&(o.operator=f,u="operator"),f!=="|"){d=!1;break}m[C.FIELDS.TYPE]===P.equals?(o.operator=f,u="operator"):!o.namespace&&!o.attribute&&(o.namespace=!0),d=!1;break;case P.word:if(m&&this.content(m)==="|"&&i[a+2]&&i[a+2][C.FIELDS.TYPE]!==P.equals&&!o.operator&&!o.namespace)o.namespace=f,u="namespace";else if(!o.attribute||u==="attribute"&&!d){l&&((0,Ie.ensureObject)(o,"spaces","attribute"),o.spaces.attribute.before=l,l=""),c&&((0,Ie.ensureObject)(o,"raws","spaces","attribute"),o.raws.spaces.attribute.before=c,c=""),o.attribute=(o.attribute||"")+f;var w=(0,Ie.getProp)(o,"raws","attribute")||null;w&&(o.raws.attribute+=f),u="attribute"}else if(!o.value&&o.value!==""||u==="value"&&!(d||o.quoteMark)){var b=(0,Ie.unesc)(f),S=(0,Ie.getProp)(o,"raws","value")||"",z=o.value||"";o.value=z+b,o.quoteMark=null,(b!==f||S)&&((0,Ie.ensureObject)(o,"raws"),o.raws.value=(S||z)+f),u="value"}else{var R=f==="i"||f==="I";(o.value||o.value==="")&&(o.quoteMark||d)?(o.insensitive=R,(!R||f==="I")&&((0,Ie.ensureObject)(o,"raws"),o.raws.insensitiveFlag=f),u="insensitive",l&&((0,Ie.ensureObject)(o,"spaces","insensitive"),o.spaces.insensitive.before=l,l=""),c&&((0,Ie.ensureObject)(o,"raws","spaces","insensitive"),o.raws.spaces.insensitive.before=c,c="")):(o.value||o.value==="")&&(u="value",o.value+=f,o.raws.value&&(o.raws.value+=f))}d=!1;break;case P.str:if(!o.attribute||!o.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:p[C.FIELDS.START_POS]});var U=(0,Xp.unescapeValue)(f),le=U.unescaped,ee=U.quoteMark;o.value=le,o.quoteMark=ee,u="value",(0,Ie.ensureObject)(o,"raws"),o.raws.value=f,d=!1;break;case P.equals:if(!o.attribute)return this.expected("attribute",p[C.FIELDS.START_POS],f);if(o.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:p[C.FIELDS.START_POS]});o.operator=o.operator?o.operator+f:f,u="operator",d=!1;break;case P.comment:if(u)if(d||m&&m[C.FIELDS.TYPE]===P.space||u==="insensitive"){var de=(0,Ie.getProp)(o,"spaces",u,"after")||"",ce=(0,Ie.getProp)(o,"raws","spaces",u,"after")||de;(0,Ie.ensureObject)(o,"raws","spaces",u),o.raws.spaces[u].after=ce+f}else{var Re=o[u]||"",De=(0,Ie.getProp)(o,"raws",u)||Re;(0,Ie.ensureObject)(o,"raws"),o.raws[u]=De+f}else c=c+f;break;default:return this.error('Unexpected "'+f+'" found.',{index:p[C.FIELDS.START_POS]})}a++}ts(o,"attribute"),ts(o,"namespace"),this.newNode(new Xp.default(o)),this.position++},e.parseWhitespaceEquivalentTokens=function(i){i<0&&(i=this.tokens.length);var s=this.position,n=[],o="",a=void 0;do if(au[this.currToken[C.FIELDS.TYPE]])this.options.lossy||(o+=this.content());else if(this.currToken[C.FIELDS.TYPE]===P.comment){var l={};o&&(l.before=o,o=""),a=new Jp.default({value:this.content(),source:es(this.currToken),sourceIndex:this.currToken[C.FIELDS.START_POS],spaces:l}),n.push(a)}while(++this.position<i);if(o){if(a)a.spaces.after=o;else if(!this.options.lossy){var c=this.tokens[s],u=this.tokens[this.position-1];n.push(new ru.default({value:"",source:ri(c[C.FIELDS.START_LINE],c[C.FIELDS.START_COL],u[C.FIELDS.END_LINE],u[C.FIELDS.END_COL]),sourceIndex:c[C.FIELDS.START_POS],spaces:{before:o,after:""}}))}}return n},e.convertWhitespaceNodesToSpace=function(i,s){var n=this;s===void 0&&(s=!1);var o="",a="";i.forEach(function(c){var u=n.lossySpace(c.spaces.before,s),d=n.lossySpace(c.rawSpaceBefore,s);o+=u+n.lossySpace(c.spaces.after,s&&u.length===0),a+=u+c.value+n.lossySpace(c.rawSpaceAfter,s&&d.length===0)}),a===o&&(a=void 0);var l={space:o,rawSpace:a};return l},e.isNamedCombinator=function(i){return i===void 0&&(i=this.position),this.tokens[i+0]&&this.tokens[i+0][C.FIELDS.TYPE]===P.slash&&this.tokens[i+1]&&this.tokens[i+1][C.FIELDS.TYPE]===P.word&&this.tokens[i+2]&&this.tokens[i+2][C.FIELDS.TYPE]===P.slash},e.namedCombinator=function(){if(this.isNamedCombinator()){var i=this.content(this.tokens[this.position+1]),s=(0,Ie.unesc)(i).toLowerCase(),n={};s!==i&&(n.value="/"+i+"/");var o=new iu.default({value:"/"+s+"/",source:ri(this.currToken[C.FIELDS.START_LINE],this.currToken[C.FIELDS.START_COL],this.tokens[this.position+2][C.FIELDS.END_LINE],this.tokens[this.position+2][C.FIELDS.END_COL]),sourceIndex:this.currToken[C.FIELDS.START_POS],raws:n});return this.position=this.position+3,o}else this.unexpected()},e.combinator=function(){var i=this;if(this.content()==="|")return this.namespace();var s=this.locateNextMeaningfulToken(this.position);if(s<0||this.tokens[s][C.FIELDS.TYPE]===P.comma||this.tokens[s][C.FIELDS.TYPE]===P.closeParenthesis){var n=this.parseWhitespaceEquivalentTokens(s);if(n.length>0){var o=this.current.last;if(o){var a=this.convertWhitespaceNodesToSpace(n),l=a.space,c=a.rawSpace;c!==void 0&&(o.rawSpaceAfter+=c),o.spaces.after+=l}else n.forEach(function(S){return i.newNode(S)})}return}var u=this.currToken,d=void 0;s>this.position&&(d=this.parseWhitespaceEquivalentTokens(s));var p;if(this.isNamedCombinator()?p=this.namedCombinator():this.currToken[C.FIELDS.TYPE]===P.combinator?(p=new iu.default({value:this.content(),source:es(this.currToken),sourceIndex:this.currToken[C.FIELDS.START_POS]}),this.position++):au[this.currToken[C.FIELDS.TYPE]]||d||this.unexpected(),p){if(d){var f=this.convertWhitespaceNodesToSpace(d),m=f.space,_=f.rawSpace;p.spaces.before=m,p.rawSpaceBefore=_}}else{var y=this.convertWhitespaceNodesToSpace(d,!0),v=y.space,x=y.rawSpace;x||(x=v);var w={},b={spaces:{}};v.endsWith(" ")&&x.endsWith(" ")?(w.before=v.slice(0,v.length-1),b.spaces.before=x.slice(0,x.length-1)):v.startsWith(" ")&&x.startsWith(" ")?(w.after=v.slice(1),b.spaces.after=x.slice(1)):b.value=x,p=new iu.default({value:" ",source:nu(u,this.tokens[this.position-1]),sourceIndex:u[C.FIELDS.START_POS],spaces:w,raws:b})}return this.currToken&&this.currToken[C.FIELDS.TYPE]===P.space&&(p.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(p)},e.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var i=new tu.default({source:{start:em(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][C.FIELDS.START_POS]});this.current.parent.append(i),this.current=i,this.position++},e.comment=function(){var i=this.currToken;this.newNode(new Jp.default({value:this.content(),source:es(i),sourceIndex:i[C.FIELDS.START_POS]})),this.position++},e.error=function(i,s){throw this.root.error(i,s)},e.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[C.FIELDS.START_POS]})},e.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[C.FIELDS.START_POS])},e.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[C.FIELDS.START_POS])},e.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[C.FIELDS.START_POS])},e.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[C.FIELDS.START_POS])},e.namespace=function(){var i=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[C.FIELDS.TYPE]===P.word)return this.position++,this.word(i);if(this.nextToken[C.FIELDS.TYPE]===P.asterisk)return this.position++,this.universal(i);this.unexpectedPipe()},e.nesting=function(){if(this.nextToken){var i=this.content(this.nextToken);if(i==="|"){this.position++;return}}var s=this.currToken;this.newNode(new sk.default({value:this.content(),source:es(s),sourceIndex:s[C.FIELDS.START_POS]})),this.position++},e.parentheses=function(){var i=this.current.last,s=1;if(this.position++,i&&i.type===ok.PSEUDO){var n=new tu.default({source:{start:em(this.tokens[this.position])},sourceIndex:this.tokens[this.position][C.FIELDS.START_POS]}),o=this.current;for(i.append(n),this.current=n;this.position<this.tokens.length&&s;)this.currToken[C.FIELDS.TYPE]===P.openParenthesis&&s++,this.currToken[C.FIELDS.TYPE]===P.closeParenthesis&&s--,s?this.parse():(this.current.source.end=tm(this.currToken),this.current.parent.source.end=tm(this.currToken),this.position++);this.current=o}else{for(var a=this.currToken,l="(",c;this.position<this.tokens.length&&s;)this.currToken[C.FIELDS.TYPE]===P.openParenthesis&&s++,this.currToken[C.FIELDS.TYPE]===P.closeParenthesis&&s--,c=this.currToken,l+=this.parseParenthesisToken(this.currToken),this.position++;i?i.appendToPropertyAndEscape("value",l,l):this.newNode(new ru.default({value:l,source:ri(a[C.FIELDS.START_LINE],a[C.FIELDS.START_COL],c[C.FIELDS.END_LINE],c[C.FIELDS.END_COL]),sourceIndex:a[C.FIELDS.START_POS]}))}if(s)return this.expected("closing parenthesis",this.currToken[C.FIELDS.START_POS])},e.pseudo=function(){for(var i=this,s="",n=this.currToken;this.currToken&&this.currToken[C.FIELDS.TYPE]===P.colon;)s+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[C.FIELDS.TYPE]===P.word)this.splitWord(!1,function(o,a){s+=o,i.newNode(new rk.default({value:s,source:nu(n,i.currToken),sourceIndex:n[C.FIELDS.START_POS]})),a>1&&i.nextToken&&i.nextToken[C.FIELDS.TYPE]===P.openParenthesis&&i.error("Misplaced parenthesis.",{index:i.nextToken[C.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[C.FIELDS.START_POS])},e.space=function(){var i=this.content();this.position===0||this.prevToken[C.FIELDS.TYPE]===P.comma||this.prevToken[C.FIELDS.TYPE]===P.openParenthesis||this.current.nodes.every(function(s){return s.type==="comment"})?(this.spaces=this.optionalSpace(i),this.position++):this.position===this.tokens.length-1||this.nextToken[C.FIELDS.TYPE]===P.comma||this.nextToken[C.FIELDS.TYPE]===P.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(i),this.position++):this.combinator()},e.string=function(){var i=this.currToken;this.newNode(new ru.default({value:this.content(),source:es(i),sourceIndex:i[C.FIELDS.START_POS]})),this.position++},e.universal=function(i){var s=this.nextToken;if(s&&this.content(s)==="|")return this.position++,this.namespace();var n=this.currToken;this.newNode(new ik.default({value:this.content(),source:es(n),sourceIndex:n[C.FIELDS.START_POS]}),i),this.position++},e.splitWord=function(i,s){for(var n=this,o=this.nextToken,a=this.content();o&&~[P.dollar,P.caret,P.equals,P.word].indexOf(o[C.FIELDS.TYPE]);){this.position++;var l=this.content();if(a+=l,l.lastIndexOf("\\")===l.length-1){var c=this.nextToken;c&&c[C.FIELDS.TYPE]===P.space&&(a+=this.requiredSpace(this.content(c)),this.position++)}o=this.nextToken}var u=ou(a,".").filter(function(m){var _=a[m-1]==="\\",y=/^\d+\.\d+%$/.test(a);return!_&&!y}),d=ou(a,"#").filter(function(m){return a[m-1]!=="\\"}),p=ou(a,"#{");p.length&&(d=d.filter(function(m){return!~p.indexOf(m)}));var f=(0,nk.default)(ck([0].concat(u,d)));f.forEach(function(m,_){var y=f[_+1]||a.length,v=a.slice(m,y);if(_===0&&s)return s.call(n,v,f.length);var x,w=n.currToken,b=w[C.FIELDS.START_POS]+f[_],S=ri(w[1],w[2]+m,w[3],w[2]+(y-1));if(~u.indexOf(m)){var z={value:v.slice(1),source:S,sourceIndex:b};x=new QS.default(ts(z,"value"))}else if(~d.indexOf(m)){var R={value:v.slice(1),source:S,sourceIndex:b};x=new ek.default(ts(R,"value"))}else{var U={value:v,source:S,sourceIndex:b};ts(U,"value"),x=new tk.default(U)}n.newNode(x,i),i=null}),this.position++},e.word=function(i){var s=this.nextToken;return s&&this.content(s)==="|"?(this.position++,this.namespace()):this.splitWord(i)},e.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},e.parse=function(i){switch(this.currToken[C.FIELDS.TYPE]){case P.space:this.space();break;case P.comment:this.comment();break;case P.openParenthesis:this.parentheses();break;case P.closeParenthesis:i&&this.missingParenthesis();break;case P.openSquare:this.attribute();break;case P.dollar:case P.caret:case P.equals:case P.word:this.word();break;case P.colon:this.pseudo();break;case P.comma:this.comma();break;case P.asterisk:this.universal();break;case P.ampersand:this.nesting();break;case P.slash:case P.combinator:this.combinator();break;case P.str:this.string();break;case P.closeSquare:this.missingSquareBracket();case P.semicolon:this.missingBackslash();default:this.unexpected()}},e.expected=function(i,s,n){if(Array.isArray(i)){var o=i.pop();i=i.join(", ")+" or "+o}var a=/^[aeiou]/.test(i[0])?"an":"a";return n?this.error("Expected "+a+" "+i+', found "'+n+'" instead.',{index:s}):this.error("Expected "+a+" "+i+".",{index:s})},e.requiredSpace=function(i){return this.options.lossy?" ":i},e.optionalSpace=function(i){return this.options.lossy?"":i},e.lossySpace=function(i,s){return this.options.lossy?s?" ":"":i},e.parseParenthesisToken=function(i){var s=this.content(i);return i[C.FIELDS.TYPE]===P.space?this.requiredSpace(s):s},e.newNode=function(i,s){return s&&(/^ +$/.test(s)&&(this.options.lossy||(this.spaces=(this.spaces||"")+s),s=!0),i.namespace=s,ts(i,"namespace")),this.spaces&&(i.spaces.before=this.spaces,this.spaces=""),this.current.append(i)},e.content=function(i){return i===void 0&&(i=this.currToken),this.css.slice(i[C.FIELDS.START_POS],i[C.FIELDS.END_POS])},e.locateNextMeaningfulToken=function(i){i===void 0&&(i=this.position+1);for(var s=i;s<this.tokens.length;)if(lk[this.tokens[s][C.FIELDS.TYPE]]){s++;continue}else return s;return-1},ak(t,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),t}();Cn.default=uk;im.exports=Cn.default});var om=A((En,nm)=>{"use strict";En.__esModule=!0;En.default=void 0;var dk=hk(sm());function hk(t){return t&&t.__esModule?t:{default:t}}var fk=function(){function t(r,i){this.func=r||function(){},this.funcRes=null,this.options=i}var e=t.prototype;return e._shouldUpdateSelector=function(i,s){s===void 0&&(s={});var n=Object.assign({},this.options,s);return n.updateSelector===!1?!1:typeof i!="string"},e._isLossy=function(i){i===void 0&&(i={});var s=Object.assign({},this.options,i);return s.lossless===!1},e._root=function(i,s){s===void 0&&(s={});var n=new dk.default(i,this._parseOptions(s));return n.root},e._parseOptions=function(i){return{lossy:this._isLossy(i)}},e._run=function(i,s){var n=this;return s===void 0&&(s={}),new Promise(function(o,a){try{var l=n._root(i,s);Promise.resolve(n.func(l)).then(function(c){var u=void 0;return n._shouldUpdateSelector(i,s)&&(u=l.toString(),i.selector=u),{transform:c,root:l,string:u}}).then(o,a)}catch(c){a(c);return}})},e._runSync=function(i,s){s===void 0&&(s={});var n=this._root(i,s),o=this.func(n);if(o&&typeof o.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return s.updateSelector&&typeof i!="string"&&(a=n.toString(),i.selector=a),{transform:o,root:n,string:a}},e.ast=function(i,s){return this._run(i,s).then(function(n){return n.root})},e.astSync=function(i,s){return this._runSync(i,s).root},e.transform=function(i,s){return this._run(i,s).then(function(n){return n.transform})},e.transformSync=function(i,s){return this._runSync(i,s).transform},e.process=function(i,s){return this._run(i,s).then(function(n){return n.string||n.root.toString()})},e.processSync=function(i,s){var n=this._runSync(i,s);return n.string||n.root.toString()},t}();En.default=fk;nm.exports=En.default});var am=A(Ee=>{"use strict";Ee.__esModule=!0;Ee.universal=Ee.tag=Ee.string=Ee.selector=Ee.root=Ee.pseudo=Ee.nesting=Ee.id=Ee.comment=Ee.combinator=Ee.className=Ee.attribute=void 0;var pk=bt(Hc()),mk=bt(Ac()),gk=bt(Yc()),bk=bt($c()),yk=bt(Pc()),vk=bt(Xc()),wk=bt(Fc()),_k=bt(Sc()),xk=bt(Cc()),Sk=bt(Mc()),kk=bt(Dc()),Ck=bt(Gc());function bt(t){return t&&t.__esModule?t:{default:t}}var Ek=function(e){return new pk.default(e)};Ee.attribute=Ek;var Tk=function(e){return new mk.default(e)};Ee.className=Tk;var Ak=function(e){return new gk.default(e)};Ee.combinator=Ak;var Ok=function(e){return new bk.default(e)};Ee.comment=Ok;var $k=function(e){return new yk.default(e)};Ee.id=$k;var Ik=function(e){return new vk.default(e)};Ee.nesting=Ik;var Pk=function(e){return new wk.default(e)};Ee.pseudo=Pk;var Lk=function(e){return new _k.default(e)};Ee.root=Lk;var Rk=function(e){return new xk.default(e)};Ee.selector=Rk;var Dk=function(e){return new Sk.default(e)};Ee.string=Dk;var Nk=function(e){return new kk.default(e)};Ee.tag=Nk;var Mk=function(e){return new Ck.default(e)};Ee.universal=Mk});var dm=A(me=>{"use strict";me.__esModule=!0;me.isComment=me.isCombinator=me.isClassName=me.isAttribute=void 0;me.isContainer=Kk;me.isIdentifier=void 0;me.isNamespace=Yk;me.isNesting=void 0;me.isNode=lu;me.isPseudo=void 0;me.isPseudoClass=Gk;me.isPseudoElement=um;me.isUniversal=me.isTag=me.isString=me.isSelector=me.isRoot=void 0;var Pe=Ve(),tt,zk=(tt={},tt[Pe.ATTRIBUTE]=!0,tt[Pe.CLASS]=!0,tt[Pe.COMBINATOR]=!0,tt[Pe.COMMENT]=!0,tt[Pe.ID]=!0,tt[Pe.NESTING]=!0,tt[Pe.PSEUDO]=!0,tt[Pe.ROOT]=!0,tt[Pe.SELECTOR]=!0,tt[Pe.STRING]=!0,tt[Pe.TAG]=!0,tt[Pe.UNIVERSAL]=!0,tt);function lu(t){return typeof t=="object"&&zk[t.type]}function yt(t,e){return lu(e)&&e.type===t}var lm=yt.bind(null,Pe.ATTRIBUTE);me.isAttribute=lm;var Fk=yt.bind(null,Pe.CLASS);me.isClassName=Fk;var Uk=yt.bind(null,Pe.COMBINATOR);me.isCombinator=Uk;var jk=yt.bind(null,Pe.COMMENT);me.isComment=jk;var Vk=yt.bind(null,Pe.ID);me.isIdentifier=Vk;var Bk=yt.bind(null,Pe.NESTING);me.isNesting=Bk;var cu=yt.bind(null,Pe.PSEUDO);me.isPseudo=cu;var qk=yt.bind(null,Pe.ROOT);me.isRoot=qk;var Wk=yt.bind(null,Pe.SELECTOR);me.isSelector=Wk;var Hk=yt.bind(null,Pe.STRING);me.isString=Hk;var cm=yt.bind(null,Pe.TAG);me.isTag=cm;var Zk=yt.bind(null,Pe.UNIVERSAL);me.isUniversal=Zk;function um(t){return cu(t)&&t.value&&(t.value.startsWith("::")||t.value.toLowerCase()===":before"||t.value.toLowerCase()===":after"||t.value.toLowerCase()===":first-letter"||t.value.toLowerCase()===":first-line")}function Gk(t){return cu(t)&&!um(t)}function Kk(t){return!!(lu(t)&&t.walk)}function Yk(t){return lm(t)||cm(t)}});var hm=A(Rt=>{"use strict";Rt.__esModule=!0;var uu=Ve();Object.keys(uu).forEach(function(t){t==="default"||t==="__esModule"||t in Rt&&Rt[t]===uu[t]||(Rt[t]=uu[t])});var du=am();Object.keys(du).forEach(function(t){t==="default"||t==="__esModule"||t in Rt&&Rt[t]===du[t]||(Rt[t]=du[t])});var hu=dm();Object.keys(hu).forEach(function(t){t==="default"||t==="__esModule"||t in Rt&&Rt[t]===hu[t]||(Rt[t]=hu[t])})});var mm=A((Tn,pm)=>{"use strict";Tn.__esModule=!0;Tn.default=void 0;var Jk=eC(om()),Xk=Qk(hm());function fm(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(fm=function(s){return s?r:e})(t)}function Qk(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=fm(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var o=s?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}function eC(t){return t&&t.__esModule?t:{default:t}}var fu=function(e){return new Jk.default(e)};Object.assign(fu,Xk);delete fu.__esModule;var tC=fu;Tn.default=tC;pm.exports=Tn.default});var xm=A((D$,yu)=>{var{AtRule:rC,Rule:bm}=Ji(),ym=mm();function gu(t,e){let r;try{ym(i=>{r=i}).processSync(t)}catch(i){throw t.includes(":")?e?e.error("Missed semicolon"):i:e?e.error(i.message):i}return r.at(0)}function vm(t,e){let r=!1;return t.each(i=>{if(i.type==="nesting"){let s=e.clone({});i.value!=="&"?i.replaceWith(gu(i.value.replace("&",s.toString()))):i.replaceWith(s),r=!0}else"nodes"in i&&i.nodes&&vm(i,e)&&(r=!0)}),r}function wm(t,e){let r=[];for(let i of t.selectors){let s=gu(i,t);for(let n of e.selectors){if(!n)continue;let o=gu(n,e);vm(o,s)||(o.prepend(ym.combinator({value:" "})),o.prepend(s.clone({}))),r.push(o.toString())}}return r}function oa(t,e){if(t.prev()?.type!=="comment")return e.after(t),t;let r=t.prev(),i=/[*]\/ *\n.*{/;return t.parent.toString().match(i)?e.after(t).after(r):e.after(t),t}function iC(t){return function e(r,i,s,n=s){let o=[];if(i.each(a=>{a.type==="rule"&&s?n&&(a.selectors=wm(r,a)):a.type==="atrule"&&a.nodes?t[a.name]?e(r,a,n):i[bu]!==!1&&o.push(a):o.push(a)}),s&&o.length){let a=r.clone({nodes:[]});for(let l of o)a.append(l);i.prepend(a)}}}function sC(t,e,r){let i=new bm({nodes:[],selector:t});return i.append(e),r.after(i),i}function pu(t,e,r,i=!0){return e.length?(r=sC(t,e,r),i&&(e=[]),[r,e]):[r,e]}function gm(t,e=""){let r=t.concat(e),i={};for(let s of r)i[s.replace(/^@/,"")]=!0;return i}function nC(t){t=t.trim();let e=t.match(/^\((.*)\)$/);if(!e)return{selector:t,type:"basic"};let r=e[1].match(/^(with(?:out)?):(.+)$/);if(r){let i=r[1]==="with",s=Object.fromEntries(r[2].trim().split(/\s+/).map(o=>[o,!0]));if(i&&s.all)return{type:"noop"};let n=o=>!!s[o];return s.all?n=()=>!0:i&&(n=o=>o==="all"?!1:!s[o]),{escapes:n,type:"withrules"}}return{type:"unknown"}}function oC(t){let e=[],r=t.parent;for(;r&&r instanceof rC;)e.push(r),r=r.parent;return e}function aC(t){let e=t[_m];if(!e)t.after(t.nodes);else{let r=t.nodes,i,s=-1,n,o,a,l=oC(t);if(l.forEach((c,u)=>{if(e(c.name))i=c,s=u,o=a;else{let d=a;a=c.clone({nodes:[]}),d&&a.append(d),n=n||a}}),i?o?(n.append(r),i.after(o)):i.after(r):t.after(r),t.next()&&i){let c;l.slice(0,s+1).forEach((u,d,p)=>{let f=c;c=u.clone({nodes:[]}),f&&c.append(f);let m=[],y=(p[d-1]||t).next();for(;y;)m.push(y),y=y.next();c.append(m)}),c&&(o||r[r.length-1]).after(c)}}t.remove()}var bu=Symbol("rootRuleMergeSel"),_m=Symbol("rootRuleEscapes");function lC(t){let{params:e}=t,{escapes:r,selector:i,type:s}=nC(e);if(s==="unknown")throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);if(s==="basic"&&i){let n=new bm({nodes:t.nodes,selector:i});t.removeAll(),t.append(n)}t[_m]=r,t[bu]=r?!r("all"):s==="noop"}var mu=Symbol("hasRootRule");yu.exports=(t={})=>{let e=gm(["media","supports","layer","container","starting-style"],t.bubble),r=iC(e),i=gm(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],t.unwrap),s=(t.rootRuleName||"at-root").replace(/^@/,""),n=t.preserveEmpty;return{Once(o){o.walkAtRules(s,a=>{lC(a),o[mu]=!0})},postcssPlugin:"postcss-nested",RootExit(o){o[mu]&&(o.walkAtRules(s,aC),o[mu]=!1)},Rule(o){let a=!1,l=o,c=!1,u=[];o.each(d=>{switch(d.type){case"atrule":[l,u]=pu(o.selector,u,l),d.name===s?(a=!0,r(o,d,!0,d[bu]),l=oa(d,l)):e[d.name]?(c=!0,a=!0,r(o,d,!0),l=oa(d,l)):i[d.name]?(c=!0,a=!0,r(o,d,!1),l=oa(d,l)):c&&u.push(d);break;case"decl":c&&u.push(d);break;case"rule":[l,u]=pu(o.selector,u,l),c=!0,a=!0,d.selectors=wm(o,d),l=oa(d,l);break}}),pu(o.selector,u,l,!1),a&&n!==!0&&(o.raws.semicolon=!0,o.nodes.length===0&&o.remove())}}};yu.exports.postcss=!0});var Kg=A((sP,Gg)=>{"use strict";Gg.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var i,s,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(s=i;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(s of e.entries())if(!r.has(s[0]))return!1;for(s of e.entries())if(!t(s[1],r.get(s[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(s of e.entries())if(!r.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=r.length)return!1;for(s=i;s--!==0;)if(e[s]!==r[s])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),i=n.length,i!==Object.keys(r).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=i;s--!==0;){var o=n[s];if(!t(e[o],r[o]))return!1}return!0}return e!==e&&r!==r}});function Xv(t){return Object.keys(t).reduce((r,i)=>{let s=t[i];return r[i]=Object.assign({},s),eh(s.value)&&!iw(s.value)&&!Array.isArray(s.value)&&(r[i].value=Object.assign({},s.value)),Array.isArray(s.value)&&(r[i].value=s.value.slice(0)),r},{})}function Qv(t){return t?Object.keys(t).reduce((r,i)=>{let s=t[i];return r[i]=eh(s)&&"value"in s?s:{value:s},r[i].attribute||(r[i].attribute=rw(i)),r[i].parse="parse"in r[i]?r[i].parse:typeof r[i].value!="string",r},{}):{}}function ew(t){return Object.keys(t).reduce((r,i)=>(r[i]=t[i].value,r),{})}function tw(t,e){let r=Xv(e);return Object.keys(e).forEach(s=>{let n=r[s],o=t.getAttribute(n.attribute),a=t[s];o!=null&&(n.value=n.parse?Qd(o):o),a!=null&&(n.value=Array.isArray(a)?a.slice(0):a),n.reflect&&Xd(t,n.attribute,n.value,!!n.parse),Object.defineProperty(t,s,{get(){return n.value},set(l){let c=n.value;n.value=l,n.reflect&&Xd(this,n.attribute,n.value,!!n.parse);for(let u=0,d=this.__propertyChangedCallbacks.length;u<d;u++)this.__propertyChangedCallbacks[u](s,l,c)},enumerable:!0,configurable:!0})}),r}function Qd(t){if(t)try{return JSON.parse(t)}catch{return t}}function Xd(t,e,r,i){if(r==null||r===!1)return t.removeAttribute(e);let s=i?JSON.stringify(r):r;t.__updating[e]=!0,s==="true"&&(s=""),t.setAttribute(e,s),Promise.resolve().then(()=>delete t.__updating[e])}function rw(t){return t.replace(/\.?([A-Z]+)/g,(e,r)=>"-"+r.toLowerCase()).replace("_","-").replace(/^-/,"")}function eh(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function iw(t){return Object.prototype.toString.call(t)==="[object Function]"}function sw(t){return typeof t=="function"&&t.toString().indexOf("class")===0}var Ll;function nw(t,e){let r=Object.keys(e);return class extends t{static get observedAttributes(){return r.map(s=>e[s].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=tw(this,e);let s=ew(this.props),n=this.Component,o=Ll;try{Ll=this,this.__initialized=!0,sw(n)?new n(s,{element:this}):n(s,{element:this})}finally{Ll=o}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let s=null;for(;s=this.__releaseCallbacks.pop();)s(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(s,n,o){if(this.__initialized&&!this.__updating[s]&&(s=this.lookupProp(s),s in e)){if(o==null&&!this[s])return;this[s]=e[s].parse?Qd(o):o}}lookupProp(s){if(e)return r.find(n=>s===n||s===e[n].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(s){this.__releaseCallbacks.push(s)}addPropertyChangedCallback(s){this.__propertyChangedCallbacks.push(s)}}}var RA=Symbol("element-context");function th(t,e={},r={}){let{BaseElement:i=HTMLElement,extension:s,customElements:n=window.customElements}=r;return o=>{if(!t)throw new Error("tag is required to register a Component");let a=n.get(t);return a?(a.prototype.Component=o,a):(a=nw(i,Qv(e)),a.prototype.Component=o,a.prototype.registeredTag=t,n.define(t,a,s),a)}}var J={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return rh(this.context.count)},getNextContextId(){return rh(this.context.count++)}};function rh(t){let e=String(t),r=e.length-1;return J.context.id+(r?String.fromCharCode(96+r):"")+e}function Gr(t){J.context=t}function ow(){return{...J.context,id:J.getNextContextId(),count:0}}var aw=(t,e)=>t===e,_r=Symbol("solid-proxy");var Eo=Symbol("solid-track"),NA=Symbol("solid-dev-component"),ko={equals:aw},Rs=null,lh=ph,lt=1,Ds=2,ch={owned:null,cleanups:null,context:null,owner:null},Rl={},se=null,E=null,ji=null,Ui=null,ve=null,Ne=null,Me=null,To=0;function Kr(t,e){let r=ve,i=se,s=t.length===0,n=e===void 0?i:e,o=s?ch:{owned:null,cleanups:null,context:n?n.context:null,owner:n},a=s?t:()=>t(()=>We(()=>wr(o)));se=o,ve=null;try{return at(a,!0)}finally{ve=r,se=i}}function Se(t,e){e=e?Object.assign({},ko,e):ko;let r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(E&&E.running&&E.sources.has(r)?s=s(r.tValue):s=s(r.value)),fh(r,s));return[hh.bind(r),i]}function ih(t,e,r){let i=zs(t,e,!0,lt);ji&&E&&E.running?Ne.push(i):qi(i)}function oe(t,e,r){let i=zs(t,e,!1,lt);ji&&E&&E.running?Ne.push(i):qi(i)}function Vi(t,e,r){lh=mw;let i=zs(t,e,!1,lt),s=Yr&&Jr(Yr);s&&(i.suspense=s),(!r||!r.render)&&(i.user=!0),Me?Me.push(i):qi(i)}function fe(t,e,r){r=r?Object.assign({},ko,r):ko;let i=zs(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,ji&&E&&E.running?(i.tState=lt,Ne.push(i)):qi(i),hh.bind(i)}function lw(t){return t&&typeof t=="object"&&"then"in t}function et(t,e,r){let i,s,n;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,s=t,n=e||{}):(i=t,s=e,n=r||{});let o=null,a=Rl,l=null,c=!1,u=!1,d="initialValue"in n,p=typeof i=="function"&&fe(i),f=new Set,[m,_]=(n.storage||Se)(n.initialValue),[y,v]=Se(void 0),[x,w]=Se(void 0,{equals:!1}),[b,S]=Se(d?"ready":"unresolved");J.context&&(l=J.getNextContextId(),n.ssrLoadFrom==="initial"?a=n.initialValue:J.load&&J.has(l)&&(a=J.load(l)));function z(ee,de,ce,Re){return o===ee&&(o=null,Re!==void 0&&(d=!0),(ee===a||de===a)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(Re,{value:de})),a=Rl,E&&ee&&c?(E.promises.delete(ee),c=!1,at(()=>{E.running=!0,R(de,ce)},!1)):R(de,ce)),de}function R(ee,de){at(()=>{de===void 0&&_(()=>ee),S(de!==void 0?"errored":d?"ready":"unresolved"),v(de);for(let ce of f.keys())ce.decrement();f.clear()},!1)}function U(){let ee=Yr&&Jr(Yr),de=m(),ce=y();if(ce!==void 0&&!o)throw ce;return ve&&!ve.user&&ee&&ih(()=>{x(),o&&(ee.resolved&&E&&c?E.promises.add(o):f.has(ee)||(ee.increment(),f.add(ee)))}),de}function le(ee=!0){if(ee!==!1&&u)return;u=!1;let de=p?p():i;if(c=E&&E.running,de==null||de===!1){z(o,We(m));return}E&&o&&E.promises.delete(o);let ce=a!==Rl?a:We(()=>s(de,{value:m(),refetching:ee}));return lw(ce)?(o=ce,"value"in ce?(ce.status==="success"?z(o,ce.value,void 0,de):z(o,void 0,Dl(ce.value),de),ce):(u=!0,queueMicrotask(()=>u=!1),at(()=>{S(d?"refreshing":"pending"),w()},!1),ce.then(Re=>z(ce,Re,void 0,de),Re=>z(ce,void 0,Dl(Re),de)))):(z(o,ce,void 0,de),ce)}return Object.defineProperties(U,{state:{get:()=>b()},error:{get:()=>y()},loading:{get(){let ee=b();return ee==="pending"||ee==="refreshing"}},latest:{get(){if(!d)return U();let ee=y();if(ee&&!o)throw ee;return m()}}}),p?ih(()=>le(!1)):le(!1),[U,{refetch:le,mutate:_}]}function uh(t){return at(t,!1)}function We(t){if(!Ui&&ve===null)return t();let e=ve;ve=null;try{return Ui?Ui.untrack(t):t()}finally{ve=e}}function Ms(t){return se===null||(se.cleanups===null?se.cleanups=[t]:se.cleanups.push(t)),t}function cw(t,e){Rs||(Rs=Symbol("error")),se=zs(void 0,void 0,!0),se.context={...se.context,[Rs]:[e]},E&&E.running&&E.sources.add(se);try{return t()}catch(r){Oo(r)}finally{se=se.owner}}function Ao(){return ve}function B(){return se}function uw(t){if(E&&E.running)return t(),E.done;let e=ve,r=se;return Promise.resolve().then(()=>{ve=e,se=r;let i;return(ji||Yr)&&(i=E||(E={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(s=>i.resolve=s)),i.running=!0),at(t,!1),ve=se=null,i?i.done:void 0})}var[MA,sh]=Se(!1);function dw(t){Me.push.apply(Me,t),t.length=0}function Bi(t,e){let r=Symbol("context");return{id:r,Provider:gw(r),defaultValue:t}}function Jr(t){let e;return se&&se.context&&(e=se.context[t.id])!==void 0?e:t.defaultValue}function dh(t){let e=fe(t),r=fe(()=>Nl(e()));return r.toArray=()=>{let i=r();return Array.isArray(i)?i:i!=null?[i]:[]},r}var Yr;function hw(){return Yr||(Yr=Bi())}function hh(){let t=E&&E.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===lt)qi(this);else{let e=Ne;Ne=null,at(()=>Co(this),!1),Ne=e}if(ve){let e=this.observers?this.observers.length:0;ve.sources?(ve.sources.push(this),ve.sourceSlots.push(e)):(ve.sources=[this],ve.sourceSlots=[e]),this.observers?(this.observers.push(ve),this.observerSlots.push(ve.sources.length-1)):(this.observers=[ve],this.observerSlots=[ve.sources.length-1])}return t&&E.sources.has(this)?this.tValue:this.value}function fh(t,e,r){let i=E&&E.running&&E.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(i,e)){if(E){let s=E.running;(s||!r&&E.sources.has(t))&&(E.sources.add(t),t.tValue=e),s||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&at(()=>{for(let s=0;s<t.observers.length;s+=1){let n=t.observers[s],o=E&&E.running;o&&E.disposed.has(n)||((o?!n.tState:!n.state)&&(n.pure?Ne.push(n):Me.push(n),n.observers&&mh(n)),o?n.tState=lt:n.state=lt)}if(Ne.length>1e6)throw Ne=[],new Error},!1)}return e}function qi(t){if(!t.fn)return;wr(t);let e=To;nh(t,E&&E.running&&E.sources.has(t)?t.tValue:t.value,e),E&&!E.running&&E.sources.has(t)&&queueMicrotask(()=>{at(()=>{E&&(E.running=!0),ve=se=t,nh(t,t.tValue,e),ve=se=null},!1)})}function nh(t,e,r){let i,s=se,n=ve;ve=se=t;try{i=t.fn(e)}catch(o){return t.pure&&(E&&E.running?(t.tState=lt,t.tOwned&&t.tOwned.forEach(wr),t.tOwned=void 0):(t.state=lt,t.owned&&t.owned.forEach(wr),t.owned=null)),t.updatedAt=r+1,Oo(o)}finally{ve=n,se=s}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?fh(t,i,!0):E&&E.running&&t.pure?(E.sources.add(t),t.tValue=i):t.value=i,t.updatedAt=r)}function zs(t,e,r,i=lt,s){let n={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:se,context:se?se.context:null,pure:r};if(E&&E.running&&(n.state=0,n.tState=i),se===null||se!==ch&&(E&&E.running&&se.pure?se.tOwned?se.tOwned.push(n):se.tOwned=[n]:se.owned?se.owned.push(n):se.owned=[n]),Ui&&n.fn){let[o,a]=Se(void 0,{equals:!1}),l=Ui.factory(n.fn,a);Ms(()=>l.dispose());let c=()=>uw(a).then(()=>u.dispose()),u=Ui.factory(n.fn,c);n.fn=d=>(o(),E&&E.running?u.track(d):l.track(d))}return n}function Ns(t){let e=E&&E.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===Ds)return Co(t);if(t.suspense&&We(t.suspense.inFallback))return t.suspense.effects.push(t);let r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<To);){if(e&&E.disposed.has(t))return;(e?t.tState:t.state)&&r.push(t)}for(let i=r.length-1;i>=0;i--){if(t=r[i],e){let s=t,n=r[i+1];for(;(s=s.owner)&&s!==n;)if(E.disposed.has(s))return}if((e?t.tState:t.state)===lt)qi(t);else if((e?t.tState:t.state)===Ds){let s=Ne;Ne=null,at(()=>Co(t,r[0]),!1),Ne=s}}}function at(t,e){if(Ne)return t();let r=!1;e||(Ne=[]),Me?r=!0:Me=[],To++;try{let i=t();return fw(r),i}catch(i){r||(Me=null),Ne=null,Oo(i)}}function fw(t){if(Ne&&(ji&&E&&E.running?pw(Ne):ph(Ne),Ne=null),t)return;let e;if(E){if(!E.promises.size&&!E.queue.size){let i=E.sources,s=E.disposed;Me.push.apply(Me,E.effects),e=E.resolve;for(let n of Me)"tState"in n&&(n.state=n.tState),delete n.tState;E=null,at(()=>{for(let n of s)wr(n);for(let n of i){if(n.value=n.tValue,n.owned)for(let o=0,a=n.owned.length;o<a;o++)wr(n.owned[o]);n.tOwned&&(n.owned=n.tOwned),delete n.tValue,delete n.tOwned,n.tState=0}sh(!1)},!1)}else if(E.running){E.running=!1,E.effects.push.apply(E.effects,Me),Me=null,sh(!0);return}}let r=Me;Me=null,r.length&&at(()=>lh(r),!1),e&&e()}function ph(t){for(let e=0;e<t.length;e++)Ns(t[e])}function pw(t){for(let e=0;e<t.length;e++){let r=t[e],i=E.queue;i.has(r)||(i.add(r),ji(()=>{i.delete(r),at(()=>{E.running=!0,Ns(r)},!1),E&&(E.running=!1)}))}}function mw(t){let e,r=0;for(e=0;e<t.length;e++){let i=t[e];i.user?t[r++]=i:Ns(i)}if(J.context){if(J.count){J.effects||(J.effects=[]),J.effects.push(...t.slice(0,r));return}Gr()}for(J.effects&&(J.done||!J.count)&&(t=[...J.effects,...t],r+=J.effects.length,delete J.effects),e=0;e<r;e++)Ns(t[e])}function Co(t,e){let r=E&&E.running;r?t.tState=0:t.state=0;for(let i=0;i<t.sources.length;i+=1){let s=t.sources[i];if(s.sources){let n=r?s.tState:s.state;n===lt?s!==e&&(!s.updatedAt||s.updatedAt<To)&&Ns(s):n===Ds&&Co(s,e)}}}function mh(t){let e=E&&E.running;for(let r=0;r<t.observers.length;r+=1){let i=t.observers[r];(e?!i.tState:!i.state)&&(e?i.tState=Ds:i.state=Ds,i.pure?Ne.push(i):Me.push(i),i.observers&&mh(i))}}function wr(t){let e;if(t.sources)for(;t.sources.length;){let r=t.sources.pop(),i=t.sourceSlots.pop(),s=r.observers;if(s&&s.length){let n=s.pop(),o=r.observerSlots.pop();i<s.length&&(n.sourceSlots[o]=i,s[i]=n,r.observerSlots[i]=o)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)wr(t.tOwned[e]);delete t.tOwned}if(E&&E.running&&t.pure)gh(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)wr(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}E&&E.running?t.tState=0:t.state=0}function gh(t,e){if(e||(t.tState=0,E.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)gh(t.owned[r])}function Dl(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function oh(t,e,r){try{for(let i of e)i(t)}catch(i){Oo(i,r&&r.owner||null)}}function Oo(t,e=se){let r=Rs&&e&&e.context&&e.context[Rs],i=Dl(t);if(!r)throw i;Me?Me.push({fn(){oh(i,r,e)},state:lt}):oh(i,r,e)}function Nl(t){if(typeof t=="function"&&!t.length)return Nl(t());if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=Nl(t[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function gw(t,e){return function(i){let s;return oe(()=>s=We(()=>(se.context={...se.context,[t]:i.value},dh(()=>i.children))),void 0),s}}var bw=Symbol("fallback");function ah(t){for(let e=0;e<t.length;e++)t[e]()}function yw(t,e,r={}){let i=[],s=[],n=[],o=0,a=e.length>1?[]:null;return Ms(()=>ah(n)),()=>{let l=t()||[],c=l.length,u,d;return l[Eo],We(()=>{let f,m,_,y,v,x,w,b,S;if(c===0)o!==0&&(ah(n),n=[],i=[],s=[],o=0,a&&(a=[])),r.fallback&&(i=[bw],s[0]=Kr(z=>(n[0]=z,r.fallback())),o=1);else if(o===0){for(s=new Array(c),d=0;d<c;d++)i[d]=l[d],s[d]=Kr(p);o=c}else{for(_=new Array(c),y=new Array(c),a&&(v=new Array(c)),x=0,w=Math.min(o,c);x<w&&i[x]===l[x];x++);for(w=o-1,b=c-1;w>=x&&b>=x&&i[w]===l[b];w--,b--)_[b]=s[w],y[b]=n[w],a&&(v[b]=a[w]);for(f=new Map,m=new Array(b+1),d=b;d>=x;d--)S=l[d],u=f.get(S),m[d]=u===void 0?-1:u,f.set(S,d);for(u=x;u<=w;u++)S=i[u],d=f.get(S),d!==void 0&&d!==-1?(_[d]=s[u],y[d]=n[u],a&&(v[d]=a[u]),d=m[d],f.set(S,d)):n[u]();for(d=x;d<c;d++)d in _?(s[d]=_[d],n[d]=y[d],a&&(a[d]=v[d],a[d](d))):s[d]=Kr(p);s=s.slice(0,o=c),i=l.slice(0)}return s});function p(f){if(n[d]=f,a){let[m,_]=Se(d);return a[d]=_,e(l[d],m)}return e(l[d])}}}var vw=!1;function D(t,e){if(vw&&J.context){let r=J.context;Gr(ow());let i=We(()=>t(e||{}));return Gr(r),i}return We(()=>t(e||{}))}var bh=t=>`Stale read from <${t}>.`;function Xr(t){let e="fallback"in t&&{fallback:()=>t.fallback};return fe(yw(()=>t.each,t.children,e||void 0))}function He(t){let e=t.keyed,r=fe(()=>t.when,void 0,{equals:(i,s)=>e?i===s:!i==!s});return fe(()=>{let i=r();if(i){let s=t.children;return typeof s=="function"&&s.length>0?We(()=>s(e?i:()=>{if(!We(r))throw bh("Show");return t.when})):s}return t.fallback},void 0,void 0)}function Ml(t){let e=!1,r=(n,o)=>(e?n[1]===o[1]:!n[1]==!o[1])&&n[2]===o[2],i=dh(()=>t.children),s=fe(()=>{let n=i();Array.isArray(n)||(n=[n]);for(let o=0;o<n.length;o++){let a=n[o].when;if(a)return e=!!n[o].keyed,[o,a,n[o]]}return[-1]},void 0,{equals:r});return fe(()=>{let[n,o,a]=s();if(n<0)return t.fallback;let l=a.children;return typeof l=="function"&&l.length>0?We(()=>l(e?o:()=>{if(We(s)[0]!==n)throw bh("Match");return a.when})):l},void 0,void 0)}function $o(t){return t}var So;function zl(t){let e;J.context&&J.load&&(e=J.load(J.getContextId()));let[r,i]=Se(e,void 0);return So||(So=new Set),So.add(i),Ms(()=>So.delete(i)),fe(()=>{let s;if(s=r()){let n=t.fallback;return typeof n=="function"&&n.length?We(()=>n(s,()=>i())):n}return cw(()=>t.children,i)},void 0,void 0)}var ww=Bi();function er(t){let e=0,r,i,s,n,o,[a,l]=Se(!1),c=hw(),u={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},d=B();if(J.context&&J.load){let m=J.getContextId(),_=J.load(m);if(_&&(typeof _!="object"||_.status!=="success"?s=_:J.gather(m)),s&&s!=="$$f"){let[y,v]=Se(void 0,{equals:!1});n=y,s.then(()=>{if(J.done)return v();J.gather(m),Gr(i),v(),Gr()},x=>{o=x,v()})}}let p=Jr(ww);p&&(r=p.register(u.inFallback));let f;return Ms(()=>f&&f()),D(c.Provider,{value:u,get children(){return fe(()=>{if(o)throw o;if(i=J.context,n)return n(),n=void 0;i&&s==="$$f"&&Gr();let m=fe(()=>t.children);return fe(_=>{let y=u.inFallback(),{showContent:v=!0,showFallback:x=!0}=r?r():{};if((!y||s&&s!=="$$f")&&v)return u.resolved=!0,f&&f(),f=i=s=void 0,dw(u.effects),m();if(x)return f?_:Kr(w=>(f=w,i&&(Gr({id:i.id+"F",count:0}),i=void 0),t.fallback),d)})})}})}var _w=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],HA=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._w]);function xw(t,e,r){let i=r.length,s=e.length,n=i,o=0,a=0,l=e[s-1].nextSibling,c=null;for(;o<s||a<n;){if(e[o]===r[a]){o++,a++;continue}for(;e[s-1]===r[n-1];)s--,n--;if(s===o){let u=n<i?a?r[a-1].nextSibling:r[n-a]:l;for(;a<n;)t.insertBefore(r[a++],u)}else if(n===a)for(;o<s;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===r[n-1]&&r[a]===e[s-1]){let u=e[--s].nextSibling;t.insertBefore(r[a++],e[o++].nextSibling),t.insertBefore(r[--n],u),e[s]=r[n]}else{if(!c){c=new Map;let d=a;for(;d<n;)c.set(r[d],d++)}let u=c.get(e[o]);if(u!=null)if(a<u&&u<n){let d=o,p=1,f;for(;++d<s&&d<n&&!((f=c.get(e[d]))==null||f!==u+p);)p++;if(p>u-a){let m=e[o];for(;a<u;)t.insertBefore(r[a++],m)}else t.replaceChild(r[a++],e[o++])}else o++;else e[o++].remove()}}}var yh="_$DX_DELEGATE";function H(t,e,r){let i,s=()=>{let o=document.createElement("template");return o.innerHTML=t,r?o.content.firstChild.firstChild:o.content.firstChild},n=e?()=>We(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return n.cloneNode=n,n}function wh(t,e=window.document){let r=e[yh]||(e[yh]=new Set);for(let i=0,s=t.length;i<s;i++){let n=t[i];r.has(n)||(r.add(n),e.addEventListener(n,Sw))}}function Ul(t,e,r){jl(t)||(r==null?t.removeAttribute(e):t.setAttribute(e,r))}function pe(t,e){jl(t)||(e==null?t.removeAttribute("class"):t.className=e)}function ne(t,e,r,i){if(i)Array.isArray(r)?(t[`$$${e}`]=r[0],t[`$$${e}Data`]=r[1]):t[`$$${e}`]=r;else if(Array.isArray(r)){let s=r[0];t.addEventListener(e,r[0]=n=>s.call(t,r[1],n))}else t.addEventListener(e,r,typeof r!="function"&&r)}function _h(t,e,r){if(!e)return r?Ul(t,"style"):e;let i=t.style;if(typeof e=="string")return i.cssText=e;typeof r=="string"&&(i.cssText=r=void 0),r||(r={}),e||(e={});let s,n;for(n in r)e[n]==null&&i.removeProperty(n),delete r[n];for(n in e)s=e[n],s!==r[n]&&(i.setProperty(n,s),r[n]=s);return r}function N(t,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return Io(t,e,i,r);oe(s=>Io(t,e(),s,r),i)}function jl(t){return!!J.context&&!J.done&&(!t||t.isConnected)}function Sw(t){if(J.registry&&J.events&&J.events.find(([l,c])=>c===t))return;let e=t.target,r=`$$${t.type}`,i=t.target,s=t.currentTarget,n=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),o=()=>{let l=e[r];if(l&&!e.disabled){let c=e[`${r}Data`];if(c!==void 0?l.call(e,c,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&n(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),J.registry&&!J.done&&(J.done=_$HY.done=!0),t.composedPath){let l=t.composedPath();n(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!o());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();n(i)}function Io(t,e,r,i,s){let n=jl(t);if(n){!r&&(r=[...t.childNodes]);let l=[];for(let c=0;c<r.length;c++){let u=r[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}r=l}for(;typeof r=="function";)r=r();if(e===r)return r;let o=typeof e,a=i!==void 0;if(t=a&&r[0]&&r[0].parentNode||t,o==="string"||o==="number"){if(n||o==="number"&&(e=e.toString(),e===r))return r;if(a){let l=r[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),r=Wi(t,r,i,l)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||o==="boolean"){if(n)return r;r=Wi(t,r,i)}else{if(o==="function")return oe(()=>{let l=e();for(;typeof l=="function";)l=l();r=Io(t,l,r,i)}),()=>r;if(Array.isArray(e)){let l=[],c=r&&Array.isArray(r);if(Fl(l,e,r,s))return oe(()=>r=Io(t,l,r,i,!0)),()=>r;if(n){if(!l.length)return r;if(i===void 0)return r=[...t.childNodes];let u=l[0];if(u.parentNode!==t)return r;let d=[u];for(;(u=u.nextSibling)!==i;)d.push(u);return r=d}if(l.length===0){if(r=Wi(t,r,i),a)return r}else c?r.length===0?vh(t,l,i):xw(t,r,l):(r&&Wi(t),vh(t,l));r=l}else if(e.nodeType){if(n&&e.parentNode)return r=a?[e]:e;if(Array.isArray(r)){if(a)return r=Wi(t,r,i,e);Wi(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function Fl(t,e,r,i){let s=!1;for(let n=0,o=e.length;n<o;n++){let a=e[n],l=r&&r[t.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))s=Fl(t,a,l)||s;else if(c==="function")if(i){for(;typeof a=="function";)a=a();s=Fl(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else t.push(a),s=!0;else{let u=String(a);l&&l.nodeType===3&&l.data===u?t.push(l):t.push(document.createTextNode(u))}}return s}function vh(t,e,r=null){for(let i=0,s=e.length;i<s;i++)t.insertBefore(e[i],r)}function Wi(t,e,r,i){if(r===void 0)return t.textContent="";let s=i||document.createTextNode("");if(e.length){let n=!1;for(let o=e.length-1;o>=0;o--){let a=e[o];if(s!==a){let l=a.parentNode===t;!n&&!o?l?t.replaceChild(s,a):t.insertBefore(s,r):l&&a.remove()}else n=!0}}else t.insertBefore(s,r);return[s]}var ZA=Symbol();function kw(t){let e=Object.keys(t),r={};for(let i=0;i<e.length;i++){let[s,n]=Se(t[e[i]]);Object.defineProperty(r,e[i],{get:s,set(o){n(()=>o)}})}return r}function Cw(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let e=t.parentNode;for(;e&&!e._$owner&&!(e.assignedSlot&&e.assignedSlot._$owner);)e=e.parentNode;return e&&e.assignedSlot?e.assignedSlot._$owner:t._$owner}function Ew(t){return(e,r)=>{let{element:i}=r;return Kr(s=>{let n=kw(e);i.addPropertyChangedCallback((a,l)=>n[a]=l),i.addReleaseCallback(()=>{i.renderRoot.textContent="",s()});let o=t(n,r);return N(i.renderRoot,o)},Cw(i))}}function xh(t,e,r){return arguments.length===2&&(r=e,e={}),th(t,e)(Ew(r))}var ke=xo(Ji(),1),fc=ke.default,VO=ke.default.stringify,BO=ke.default.fromJSON,qO=ke.default.plugin,WO=ke.default.parse,HO=ke.default.list,ZO=ke.default.document,GO=ke.default.comment,KO=ke.default.atRule,YO=ke.default.rule,JO=ke.default.decl,XO=ke.default.root,QO=ke.default.CssSyntaxError,e$=ke.default.Declaration,t$=ke.default.Container,r$=ke.default.Processor,i$=ke.default.Document,s$=ke.default.Comment,n$=ke.default.Warning,o$=ke.default.AtRule,a$=ke.default.Result,l$=ke.default.Input,c$=ke.default.Rule,u$=ke.default.Root,d$=ke.default.Node;var Xi=xo(lp(),1),vc=Xi.default,w$=Xi.default.objectify,_$=Xi.default.parse,x$=Xi.default.async,S$=Xi.default.sync;var vu=xo(xm()),Cr=(...t)=>t.join(" "),aa=class{globalStyles;moduleStyles;styleCounter=0;prefix;theme;constructor(e,r="styler"){this.moduleStyles=new Map,this.globalStyles=new Map,this.prefix=r,this.theme=Object.freeze(e)}generateClassName(e){return`${this.prefix}-${e}-${this.styleCounter++}`}withTheme(e){return()=>e(this.theme)}setGlobals(e){if(this.globalStyles.size)throw new Error("gobalStyles can only be set once");for(let[r,i]of Object.entries(e(this.theme)))this.globalStyles.set(r,i)}css(e){let r={};for(let[i,s]of Object.entries(e)){let n=this.generateClassName(i);this.moduleStyles.set(n,s),r[i]=n}return r}resolveGlobals(){let e={};return this.globalStyles.forEach((i,s)=>{e[s]=i}),fc([vu.default]).process(e,{parser:vc}).css}resolveStyles(){let e=[];return this.moduleStyles.forEach((r,i)=>{let s=typeof r=="function"?r(this.theme):r,n={[`.${i}`]:s},o=fc([vu.default]).process(n,{parser:vc});e.push(o.css)}),e.join(`
`)}},Sm=(t,e,r={})=>{let i=new FontFace(t,e,r);document.fonts.add(i)};var km=t=>({"sl-input, sl-select, sl-checkbox":{display:"block",marginBottom:"var(--sl-spacing-medium)"},"sl-input.user-error::part(base), sl-select.user-error::part(combobox), sl-checkbox.user-error::part(control)":{borderColor:"var(--sl-color-danger-600)"},".user-error::part(form-control-label), .user-error::part(form-control-help-text), sl-checkbox.user-error::part(label)":{color:"var(--sl-color-danger-700)"},"sl-checkbox.user-error::part(control)":{outline:"none"},"sl-input:focus-within.user-error::part(base), sl-select:focus-within.user-error::part(combobox), sl-checkbox:focus-within.user-error::part(control)":{borderColor:"var(--sl-color-danger-600)",boxShadow:"0 0 0 var(--sl-focus-ring-width) var(--sl-color-danger-300)"},"sl-input.user-valid::part(base), sl-select.user-valid::part(combobox), sl-checkbox.user-valid::part(control)":{borderColor:"var(--sl-color-success-600)"},".user-valid::part(form-control-label), .user-valid::part(form-control-help-text), sl-checkbox.user-valid::part(label)":{color:"var(--sl-color-success-700)"},"sl-checkbox.user-valid::part(control)":{backgroundColor:"var(--sl-color-success-600)",outline:"none"},"sl-input:focus-within.user-valid::part(base), sl-select:focus-within.user-valid::part(combobox), sl-checkbox:focus-within.user-valid::part(control)":{borderColor:"var(--sl-color-success-600)",boxShadow:"0 0 0 var(--sl-focus-ring-width) var(--sl-color-success-300)"}});Sm("Playwrite HU","url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",{"font-optical-sizing":"auto","font-weight":"400","font-style":"normal"});var cC={colorPrimary:"var(--gifo-color-primary)",colorOnPrimary:"var(--gifo-color-on-primary)",colorAccent:"var(--gifo-color-accent)",fontSizeLg:"2rem",fontSizeMd:"1.2rem",fontSizeSm:"1.0rem",breakPointSm:"600px",gapMd:"var(--sl-spacing-medium)"},ii=new aa(cC,"gifo");ii.setGlobals(t=>({":root":{"--breakpoint-sm":t.breakPointSm},"::-webkit-scrollbar":{width:"8px",height:"8px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",transition:"background-color 0.2s"},"::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},".scrollable-element":{scrollbarWidth:"thin",scrollbarColor:"rgba(0, 0, 0, 0.5) transparent"},"a, a:hover, a:visited":{textDecoration:"none",color:t.colorOnPrimary},fieldset:{border:"2px solid",borderColor:"var(--gifo-color-primary)",borderRadius:"5px"},...km(t)}));var ze=ii.css.bind(ii),Cm=ii.withTheme.bind(ii),Em=()=>[ii.resolveGlobals(),ii.resolveStyles()].join(`
`);var la="0123456789abcdef",ir=class t{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new t(e)}static fromFieldsV7(e,r,i,s){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(i)||!Number.isInteger(s)||e<0||r<0||i<0||s<0||e>0xffffffffffff||r>4095||i>1073741823||s>4294967295)throw new RangeError("invalid field value");let n=new Uint8Array(16);return n[0]=e/2**40,n[1]=e/2**32,n[2]=e/2**24,n[3]=e/2**16,n[4]=e/2**8,n[5]=e,n[6]=112|r>>>8,n[7]=r,n[8]=128|i>>>24,n[9]=i>>>16,n[10]=i>>>8,n[11]=i,n[12]=s>>>24,n[13]=s>>>16,n[14]=s>>>8,n[15]=s,new t(n)}static parse(e){var r,i,s,n;let o;switch(e.length){case 32:o=(r=/^[0-9a-f]{32}$/i.exec(e))===null||r===void 0?void 0:r[0];break;case 36:o=(i=/^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||i===void 0?void 0:i.slice(1,6).join("");break;case 38:o=(s=/^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(e))===null||s===void 0?void 0:s.slice(1,6).join("");break;case 45:o=(n=/^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(e))===null||n===void 0?void 0:n.slice(1,6).join("");break;default:break}if(o){let a=new Uint8Array(16);for(let l=0;l<16;l+=4){let c=parseInt(o.substring(2*l,2*l+8),16);a[l+0]=c>>>24,a[l+1]=c>>>16,a[l+2]=c>>>8,a[l+3]=c}return new t(a)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=la.charAt(this.bytes[r]>>>4),e+=la.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toHex(){let e="";for(let r=0;r<this.bytes.length;r++)e+=la.charAt(this.bytes[r]>>>4),e+=la.charAt(this.bytes[r]&15);return e}toJSON(){return this.toString()}getVariant(){let e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new t(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){let i=this.bytes[r]-e.bytes[r];if(i!==0)return Math.sign(i)}return 0}},ca=class{constructor(e){this.timestamp=0,this.counter=0,this.random=e??uC()}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let i=this.generateOrAbortCore(e,r);return i===void 0&&(this.timestamp=0,i=this.generateOrAbortCore(e,r)),i}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>=this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return ir.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}generateV4(){let e=new Uint8Array(Uint32Array.of(this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32(),this.random.nextUint32()).buffer);return e[6]=64|e[6]>>>4,e[8]=128|e[8]>>>2,ir.ofInner(e)}},uC=()=>{if(typeof crypto<"u"&&typeof crypto.getRandomValues<"u")return new wu;if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");return{nextUint32:()=>Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536)}},wu=class{constructor(){this.buffer=new Uint32Array(8),this.cursor=65535}nextUint32(){return this.cursor>=this.buffer.length&&(crypto.getRandomValues(this.buffer),this.cursor=0),this.buffer[this.cursor++]}},ua;var Tm=()=>(ua||(ua=new ca)).generate();var Am=()=>(ua||(ua=new ca)).generateV4();function Om(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}var $m=Om();var dC=Object.defineProperty,hC=(t,e)=>{for(var r in e)dC(t,r,{get:e[r],enumerable:!0})},fC=class{collectable={};listeners={};interceptors;constructor({interceptors:t}={}){this.interceptors=t??{}}subscribe(t,e,r=!1){if(this.listeners[t]||(this.listeners[t]=[]),!this.isSubscribed(t,e)&&(this.listeners[t]?.push(e),r&&this.collectable[t])){let i=this.collectable[t];this.collectable[t]=[];for(let s of i)e(...s)}}subscribeOnce(t,e=!1){return new Promise(r=>{let i=!1,s=(...n)=>{i||(i=!0,this.unSubscribe(t,s),r(n))};this.subscribe(t,s,e)})}unSubscribe(t,e){if(this.listeners[t]){let r=this.listeners[t]?.findIndex(i=>i===e);r&&this.listeners[t]?.splice(r,1)}}isSubscribed(t,e){return!!this.listeners[t]?.includes(e)}async emit(t,e,r=!1){let i=this.interceptors[t],s=i?await i(...e):e;this.listeners[t]?.length===0&&r&&(this.collectable[t]||(this.collectable[t]=[]),this.collectable[t]?.push(e));for(let n of this.listeners[t]??[])n(...s)}reset({collectable:t,listeners:e}){if(Array.isArray(t))for(let r of t)delete this.collectable[r];else typeof t=="string"?delete this.collectable[t]:t!==!1&&(this.collectable={});if(Array.isArray(e))for(let r of e)delete this.listeners[r];else typeof e=="string"?delete this.listeners[e]:e!==!1&&(this.listeners={})}scanListeners(t){let e=Object.keys(this.listeners);return t&&(e=e.filter(t)),e}},Iu=class{args=[];constructor(...t){this.args=t}fill(t){return[this,t]}hasDefault(){return this.args.length===1}get default(){return this.args[0]}},pC={};hC(pC,{CborBreak:()=>fa,CborError:()=>si,CborFillMissing:()=>mg,CborInvalidMajorError:()=>Aa,CborNumberError:()=>ku,CborPartialDisabled:()=>pg,CborRangeError:()=>Bt,Encoded:()=>Pu,Gap:()=>Iu,POW_2_53:()=>mC,POW_2_64:()=>Su,PartiallyEncoded:()=>Lu,Reader:()=>Cu,Tagged:()=>$e,Writer:()=>In,decode:()=>gg,encode:()=>ss,infiniteBytes:()=>Eu,partiallyEncodeObject:()=>Ru});var mC=9007199254740992,Su=BigInt(18446744073709552e3),Pu=class{constructor(t){this.encoded=t}},xe=class extends Error{},Er=class extends xe{name="NoActiveSocket";message="No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!"};var fg=class extends xe{name="EngineDisconnected";message="The engine reported the connection to SurrealDB has dropped"},Im=class extends xe{constructor(t){super(),this.response=t,this.message=`${t}`}name="UnexpectedServerResponse"},gC=class extends xe{constructor(t){super(),this.error=t,this.message=`${t}`}name="UnexpectedConnectionError"},bC=class extends xe{constructor(t){super(),this.engine=t}name="UnsupportedEngine";message="The engine you are trying to connect to is not supported or configured."};var xa=class extends xe{name="ConnectionUnavailable";message="There is no connection available at this moment."},yC=class extends xe{name="MissingNamespaceDatabase";message="There is no namespace and/or database selected."},vC=class extends xe{constructor(t,e,r,i){super(),this.message=t,this.status=e,this.statusText=r,this.buffer=i}name="HttpConnectionError"},Oe=class extends xe{constructor(t){super(),this.message=t}name="ResponseError"},wC=class extends xe{name="NoNamespaceSpecified";message="Please specify a namespace to use."},_C=class extends xe{name="NoDatabaseSpecified";message="Please specify a database to use."},Pm=class extends xe{name="NoTokenReturned";message="Did not receive an authentication token."},xC=class extends xe{name="UnsupportedVersion";version;supportedRange;constructor(t,e){super(),this.version=t,this.supportedRange=e,this.message=`The version "${t}" reported by the engine is not supported by this library, expected a version that satisfies "${e}".`}},Lm=class extends xe{constructor(t){super(),this.error=t}name="VersionRetrievalFailure";message="Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly."},si=class extends xe{message;constructor(t){super(),this.message=t}},ku=class extends si{name="CborNumberError"},Bt=class extends si{name="CborRangeError"},Aa=class extends si{name="CborInvalidMajorError"},fa=class extends si{name="CborBreak";constructor(){super("Came across a break which was not intercepted by the decoder")}},pg=class extends si{name="CborPartialDisabled";constructor(){super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled")}},mg=class extends si{name="CborFillMissing";constructor(){super("Fill for a gap is missing, and gap has no default")}},In=class{constructor(t=256){this.byteLength=t,this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf)}_chunks=[];_pos=0;_buf;_view;_byte;chunk(t){this._chunks.push([this._buf.slice(0,this._pos),t]),this._buf=new ArrayBuffer(this.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._pos=0}get chunks(){return this._chunks}get buffer(){return this._buf.slice(0,this._pos)}claim(t){let e=this._pos;if(this._pos+=t,this._pos<=this._buf.byteLength)return e;let r=this._buf.byteLength<<1;for(;r<this._pos;)r<<=1;if(r>this._buf.byteLength){let i=this._byte;this._buf=new ArrayBuffer(r),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(i)}return e}writeUint8(t){let e=this.claim(1);this._view.setUint8(e,t)}writeUint16(t){let e=this.claim(2);this._view.setUint16(e,t)}writeUint32(t){let e=this.claim(4);this._view.setUint32(e,t)}writeUint64(t){let e=this.claim(8);this._view.setBigUint64(e,t)}writeUint8Array(t){if(t.byteLength===0)return;let e=this.claim(t.byteLength);this._byte.set(t,e)}writeArrayBuffer(t){t.byteLength!==0&&this.writeUint8Array(new Uint8Array(t))}writePartiallyEncoded(t){for(let[e,r]of t.chunks)this.writeArrayBuffer(e),this.chunk(r);this.writeArrayBuffer(t.end)}writeFloat32(t){let e=this.claim(4);this._view.setFloat32(e,t)}writeFloat64(t){let e=this.claim(8);this._view.setFloat64(e,t)}writeMajor(t,e){let r=t<<5;e<24?this.writeUint8(r+Number(e)):e<256?(this.writeUint8(r+24),this.writeUint8(Number(e))):e<65536?(this.writeUint8(r+25),this.writeUint16(Number(e))):e<4294967296?(this.writeUint8(r+26),this.writeUint32(Number(e))):(this.writeUint8(r+27),this.writeUint64(BigInt(e)))}output(t,e){return t?new Lu(this._chunks,this.buffer,e):this.buffer}},Lu=class{constructor(t,e,r){this.chunks=t,this.end=e,this.replacer=r}build(t,e){let r=new In,i=new Map(t);for(let[s,n]of this.chunks){let o=i.has(n)||n.hasDefault();if(!e&&!o)throw new mg;if(r.writeArrayBuffer(s),o){let a=i.get(n)??n.default;ss(a,{writer:r,replacer:this.replacer})}else r.chunk(n)}return r.writeArrayBuffer(this.end),r.output(!!e,this.replacer)}};function Ru(t,e){return Object.fromEntries(Object.entries(t).map(([r,i])=>[r,ss(i,{...e,partial:!0})]))}var $e=class{constructor(t,e){this.tag=t,this.value=e}},Rm;function ss(t,e={}){let r=e.writer??new In,i=new Map(e.fills??[]);function s(n){let o=e.replacer?e.replacer(n):n;if(o===void 0)return r.writeUint8(247);if(o===null)return r.writeUint8(246);if(o===!0)return r.writeUint8(245);if(o===!1)return r.writeUint8(244);switch(typeof o){case"number":{if(Number.isInteger(o))if(o>=0&&o<=9007199254740992)r.writeMajor(0,o);else if(o<0&&o>=-9007199254740992)r.writeMajor(1,-(o+1));else throw new ku("Number too big to be encoded");else r.writeUint8(251),r.writeFloat64(o);return}case"bigint":{if(o>=0&&o<Su)r.writeMajor(0,o);else if(o<=0&&o>=-Su)r.writeMajor(1,-(o+1n));else throw new ku("BigInt too big to be encoded");return}case"string":{Rm??=new TextEncoder;let a=Rm.encode(o);r.writeMajor(3,a.byteLength),r.writeUint8Array(a);return}default:{if(Array.isArray(o)){r.writeMajor(4,o.length);for(let l of o)s(l);return}if(o instanceof $e){r.writeMajor(6,o.tag),s(o.value);return}if(o instanceof Pu){r.writeArrayBuffer(o.encoded);return}if(o instanceof Iu){if(i.has(o))s(i.get(o));else{if(!e.partial)throw new pg;r.chunk(o)}return}if(o instanceof Lu){let l=o.build(e.fills??[],e.partial);e.partial?r.writePartiallyEncoded(l):r.writeArrayBuffer(l);return}if(o instanceof Uint8Array||o instanceof Uint16Array||o instanceof Uint32Array||o instanceof Int8Array||o instanceof Int16Array||o instanceof Int32Array||o instanceof Float32Array||o instanceof Float64Array||o instanceof ArrayBuffer){let l=new Uint8Array(o);r.writeMajor(2,l.byteLength),r.writeUint8Array(l);return}let a=o instanceof Map?Array.from(o.entries()):Object.entries(o);r.writeMajor(5,a.length);for(let l of a.flat())s(l)}}}return s(t),r.output(!!e.partial,e.replacer)}var Cu=class{_buf;_view;_byte;_pos=0;constructor(t){this._buf=new ArrayBuffer(t.byteLength),this._view=new DataView(this._buf),this._byte=new Uint8Array(this._buf),this._byte.set(new Uint8Array(t))}read(t,e){return this._pos+=t,e}readUint8(){try{return this.read(1,this._view.getUint8(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readUint16(){try{return this.read(2,this._view.getUint16(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readUint32(){try{return this.read(4,this._view.getUint32(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readUint64(){try{return this.read(8,this._view.getBigUint64(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readFloat16(){let t=this.readUint16(),e=(t&32768)>>15,r=(t&31744)>>10,i=t&1023;return r===0?(e?-1:1)*2**-14*(i/2**10):r===31?i?Number.NaN:(e?-1:1)*Number.POSITIVE_INFINITY:(e?-1:1)*2**(r-15)*(1+i/2**10)}readFloat32(){try{return this.read(4,this._view.getFloat32(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readFloat64(){try{return this.read(8,this._view.getFloat64(this._pos))}catch(t){throw t instanceof RangeError?new Bt(t.message):t}}readBytes(t){let e=this._byte.length-this._pos;if(e<t)throw new Bt(`The argument must be between 0 and ${e}`);return this.read(t,this._byte.slice(this._pos,this._pos+t))}readMajor(){let t=this.readUint8(),e=t>>5;if(e<0||e>7)throw new Aa("Received invalid major type");return[e,t&31]}readMajorLength(t){if(t<=23)return t;switch(t){case 24:return this.readUint8();case 25:return this.readUint16();case 26:return this.readUint32();case 27:{let e=this.readUint64();return e>9007199254740992?e:Number(e)}}throw new Bt("Expected a final length")}};function Eu(t,e){let r=new In;for(;;){let[i,s]=t.readMajor();if(i===7&&s===31)break;if(i!==e)throw new Aa(`Expected a resource of the same major (${e}) while processing an infinite resource`);if(s===31)throw new Bt("Expected a finite resource while processing an infinite resource");r.writeUint8Array(t.readBytes(Number(t.readMajorLength(s))))}return r.buffer}var Dm;function gg(t,e={}){let r=t instanceof Cu?t:new Cu(t);function i(){let[n,o]=r.readMajor();switch(n){case 0:return r.readMajorLength(o);case 1:{let a=r.readMajorLength(o);return typeof a=="bigint"?-(a+1n):-(a+1)}case 2:return o===31?Eu(r,2):r.readBytes(Number(r.readMajorLength(o))).buffer;case 3:{let a=o===31?Eu(r,3):r.readBytes(Number(r.readMajorLength(o)));return Dm??=new TextDecoder,Dm.decode(a)}case 4:{if(o===31){let c=[];for(;;)try{c.push(s())}catch(u){if(u instanceof fa)break;throw u}return c}let a=r.readMajorLength(o),l=Array(a);for(let c=0;c<a;c++)l[c]=s();return l}case 5:{let a=[];if(o===31)for(;;){let l;try{l=s()}catch(u){if(u instanceof fa)break;throw u}let c=s();a.push([l,c])}else{let l=r.readMajorLength(o);for(let c=0;c<l;c++){let u=s(),d=s();a[c]=[u,d]}}return e.map==="map"?new Map(a):Object.fromEntries(a)}case 6:{let a=r.readMajorLength(o),l=s();return new $e(a,l)}case 7:switch(o){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 25:return r.readFloat16();case 26:return r.readFloat32();case 27:return r.readFloat64();case 31:throw new fa}}throw new Aa(`Unable to decode value with major tag ${n}`)}function s(){return e.replacer?e.replacer(i()):i()}return s()}function SC(t){let e=Math.floor(t.getTime()/1e3),r=t.getTime()-e*1e3;return[e,r*1e6]}function kC([t,e]){let r=new Date(0);return r.setUTCSeconds(Number(t)),r.setMilliseconds(Math.floor(Number(e)/1e6)),r}var vt=class{},Sa=class bg extends vt{decimal;constructor(e){super(),this.decimal=e.toString()}equals(e){return e instanceof bg?this.decimal===e.decimal:!1}toString(){return this.decimal}toJSON(){return this.decimal}},Du=1,rs=Du/1e3,Tu=rs/1e3,ka=1e3*Du,Ca=60*ka,Ea=60*Ca,Ta=24*Ea,Au=7*Ta,Nu=new Map([["ns",Tu],["\xB5s",rs],["\u03BCs",rs],["us",rs],["ms",Du],["s",ka],["m",Ca],["h",Ea],["d",Ta],["w",Au]]),CC=Array.from(Nu).reduce((t,[e,r])=>(t.set(r,e),t),new Map),EC=new RegExp(`^(\\d+)(${Array.from(Nu.keys()).join("|")})`),pa=class ct extends vt{_milliseconds;constructor(e){super(),e instanceof ct?this._milliseconds=e._milliseconds:typeof e=="string"?this._milliseconds=ct.parseString(e):this._milliseconds=e}static fromCompact([e,r]){e=e??0,r=r??0;let i=e*1e3+r/1e6;return new ct(i)}equals(e){return e instanceof ct?this._milliseconds===e._milliseconds:!1}toCompact(){let e=Math.floor(this._milliseconds/1e3),r=Math.floor((this._milliseconds-e*1e3)*1e6);return r>0?[e,r]:e>0?[e]:[]}toString(){let e=this._milliseconds,r="";function i(s){let n=Math.floor(e/s);return n>0&&(e=e%s),n}for(let[s,n]of Array.from(CC).reverse()){let o=i(s);o>0&&(r+=`${o}${n}`)}return r}toJSON(){return this.toString()}static parseString(e){let r=0,i=e;for(;i!=="";){let s=i.match(EC);if(s){let n=Number.parseInt(s[1]),o=Nu.get(s[2]);if(o===void 0)throw new xe(`Invalid duration unit: ${s[2]}`);r+=n*o,i=i.slice(s[0].length);continue}throw new xe("Could not match a next duration part")}return r}static nanoseconds(e){return new ct(Math.floor(e*Tu))}static microseconds(e){return new ct(Math.floor(e*rs))}static milliseconds(e){return new ct(e)}static seconds(e){return new ct(e*ka)}static minutes(e){return new ct(e*Ca)}static hours(e){return new ct(e*Ea)}static days(e){return new ct(e*Ta)}static weeks(e){return new ct(e*Au)}get microseconds(){return Math.floor(this._milliseconds/rs)}get nanoseconds(){return Math.floor(this._milliseconds/Tu)}get milliseconds(){return Math.floor(this._milliseconds)}get seconds(){return Math.floor(this._milliseconds/ka)}get minutes(){return Math.floor(this._milliseconds/Ca)}get hours(){return Math.floor(this._milliseconds/Ea)}get days(){return Math.floor(this._milliseconds/Ta)}get weeks(){return Math.floor(this._milliseconds/Au)}},Ou=class yg extends vt{constructor(e){super(),this.inner=e}equals(e){return e instanceof yg?this.inner===e.inner:!1}toJSON(){return this.toString()}toString(){return`<future> ${this.inner}`}},Or=class vg extends vt{equals(e){return e instanceof vg?this.is(e):!1}toString(){return JSON.stringify(this.toJSON())}};function Nm(t){return t instanceof Sa?Number.parseFloat(t.decimal):t}var Mm=class ma extends Or{point;constructor(e){super(),e instanceof ma?this.point=e.clone().point:this.point=[Nm(e[0]),Nm(e[1])]}toJSON(){return{type:"Point",coordinates:this.coordinates}}get coordinates(){return this.point}is(e){return e instanceof ma?this.point[0]===e.point[0]&&this.point[1]===e.point[1]:!1}clone(){return new ma([...this.point])}},zm=class ga extends Or{line;constructor(e){super(),this.line=e instanceof ga?e.clone().line:e}toJSON(){return{type:"LineString",coordinates:this.coordinates}}get coordinates(){return this.line.map(e=>e.coordinates)}close(){this.line[0].is(this.line.at(-1))||this.line.push(this.line[0])}is(e){if(!(e instanceof ga)||this.line.length!==e.line.length)return!1;for(let r=0;r<this.line.length;r++)if(!this.line[r].is(e.line[r]))return!1;return!0}clone(){return new ga(this.line.map(e=>e.clone()))}},Fm=class ba extends Or{polygon;constructor(e){super(),this.polygon=e instanceof ba?e.clone().polygon:e.map(r=>{let i=r.clone();return i.close(),i})}toJSON(){return{type:"Polygon",coordinates:this.coordinates}}get coordinates(){return this.polygon.map(e=>e.coordinates)}is(e){if(!(e instanceof ba)||this.polygon.length!==e.polygon.length)return!1;for(let r=0;r<this.polygon.length;r++)if(!this.polygon[r].is(e.polygon[r]))return!1;return!0}clone(){return new ba(this.polygon.map(e=>e.clone()))}},Um=class ya extends Or{points;constructor(e){super(),this.points=e instanceof ya?e.points:e}toJSON(){return{type:"MultiPoint",coordinates:this.coordinates}}get coordinates(){return this.points.map(e=>e.coordinates)}is(e){if(!(e instanceof ya)||this.points.length!==e.points.length)return!1;for(let r=0;r<this.points.length;r++)if(!this.points[r].is(e.points[r]))return!1;return!0}clone(){return new ya(this.points.map(e=>e.clone()))}},jm=class va extends Or{lines;constructor(e){super(),this.lines=e instanceof va?e.lines:e}toJSON(){return{type:"MultiLineString",coordinates:this.coordinates}}get coordinates(){return this.lines.map(e=>e.coordinates)}is(e){if(!(e instanceof va)||this.lines.length!==e.lines.length)return!1;for(let r=0;r<this.lines.length;r++)if(!this.lines[r].is(e.lines[r]))return!1;return!0}clone(){return new va(this.lines.map(e=>e.clone()))}},Vm=class wa extends Or{polygons;constructor(e){super(),this.polygons=e instanceof wa?e.polygons:e}toJSON(){return{type:"MultiPolygon",coordinates:this.coordinates}}get coordinates(){return this.polygons.map(e=>e.coordinates)}is(e){if(!(e instanceof wa)||this.polygons.length!==e.polygons.length)return!1;for(let r=0;r<this.polygons.length;r++)if(!this.polygons[r].is(e.polygons[r]))return!1;return!0}clone(){return new wa(this.polygons.map(e=>e.clone()))}},Bm=class _a extends Or{collection;constructor(e){super(),this.collection=e instanceof _a?e.collection:e}toJSON(){return{type:"GeometryCollection",geometries:this.geometries}}get geometries(){return this.collection.map(e=>e.toJSON())}is(e){if(!(e instanceof _a)||this.collection.length!==e.collection.length)return!1;for(let r=0;r<this.collection.length;r++)if(!this.collection[r].is(e.collection[r]))return!1;return!0}clone(){return new _a(this.collection.map(e=>e.clone()))}};function ns(t,e){if(Object.is(t,e))return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.toString()===e.toString();if(t instanceof vt&&e instanceof vt)return t.equals(e);if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;let r=Reflect.ownKeys(t),i=Reflect.ownKeys(e);if(r.length!==i.length)return!1;for(let s=0;s<r.length;s++)if(!Reflect.has(e,r[s])||!ns(t[r[s]],e[r[s]]))return!1;return!0}var TC=9223372036854775807n;function Mu(t){if(OC(t))return`\u27E8${t}\u27E9`;let e,r,i;for(r=0,i=t.length;r<i;r++)if(e=t.charCodeAt(r),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123)&&e!==95)return`\u27E8${t.replaceAll("\u27E9","\\\u27E9")}\u27E9`;return t}function AC(t){return t<=TC?t.toString():`\u27E8${t}\u27E9`}function OC(t){let e=t.replace("_",""),r=Number.parseInt(e);return!Number.isNaN(r)&&r.toString()===e}var os=class An extends vt{inner;constructor(e){super(),e instanceof ArrayBuffer?this.inner=ir.ofInner(new Uint8Array(e)):e instanceof Uint8Array?this.inner=ir.ofInner(e):e instanceof An?this.inner=e.inner:e instanceof ir?this.inner=e:this.inner=ir.parse(e)}equals(e){return e instanceof An?this.inner.equals(e.inner):!1}toString(){return this.inner.toString()}toJSON(){return this.inner.toString()}toUint8Array(){return this.inner.bytes}toBuffer(){return this.inner.bytes.buffer}static v4(){return new An(Am())}static v7(){return new An(Tm())}},$n=class wg extends vt{tb;id;constructor(e,r){if(super(),typeof e!="string")throw new xe("TB part is not valid");if(!_g(r))throw new xe("ID part is not valid");this.tb=e,this.id=r}equals(e){return e instanceof wg?this.tb===e.tb&&ns(this.id,e.id):!1}toJSON(){return this.toString()}toString(){let e=Mu(this.tb),r=xg(this.id);return`${e}:${r}`}},zu=class $u extends vt{rid;constructor(e){if(super(),e instanceof $u)this.rid=e.rid;else if(e instanceof $n)this.rid=e.toString();else if(typeof e=="string")this.rid=e;else throw new xe("String Record ID must be a string")}equals(e){return e instanceof $u?this.rid===e.rid:!1}toJSON(){return this.rid}toString(){return this.rid}};function _g(t){if(t instanceof os)return!0;switch(typeof t){case"string":case"number":case"bigint":return!0;case"object":return Array.isArray(t)||t!==null;default:return!1}}function xg(t){return t instanceof os?`u"${t}"`:typeof t=="string"?Mu(t):typeof t=="bigint"||typeof t=="number"?AC(t):Ar(t)}var is=class Sg extends vt{tb;constructor(e){if(super(),typeof e!="string")throw new xe("Table must be a string");this.tb=e}equals(e){return e instanceof Sg?this.tb===e.tb:!1}toJSON(){return this.tb}toString(){return this.tb}};function Ar(t){if(typeof t=="string")return`s${JSON.stringify(t)}`;if(t===null)return"NULL";if(t===void 0)return"NONE";if(typeof t=="object"){if(t instanceof Date)return`d${JSON.stringify(t.toISOString())}`;if(t instanceof os)return`u${JSON.stringify(t.toString())}`;if(t instanceof $n||t instanceof zu)return`r${JSON.stringify(t.toString())}`;if(t instanceof Or)return Ar(t.toJSON());if(t instanceof Sa||t instanceof pa||t instanceof Ou||t instanceof On||t instanceof is)return t.toJSON();switch(Object.getPrototypeOf(t)){case Object.prototype:{let e="{ ",r=Object.entries(t);for(let[i,[s,n]]of r.entries())e+=`${JSON.stringify(s)}: ${Ar(n)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Map.prototype:{let e="{ ",r=Array.from(t.entries());for(let[i,[s,n]]of r.entries())e+=`${JSON.stringify(s)}: ${Ar(n)}`,i<r.length-1&&(e+=", ");return e+=" }",e}case Array.prototype:return`[ ${t.map(Ar).join(", ")} ]`;case Set.prototype:return`[ ${[...new Set([...t].map(Ar))].join(", ")} ]`}}return`${t}`}var On=class kg extends vt{constructor(e,r){super(),this.beg=e,this.end=r}equals(e){return!(e instanceof kg)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:ns(this.beg?.value,e.beg?.value)&&ns(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Zm(this.beg),r=Zm(this.end);return`${e}${Eg(this.beg,this.end)}${r}`}},Pn=class{constructor(t){this.value=t}},Ln=class{constructor(t){this.value=t}},qm=class Cg extends vt{constructor(e,r,i){if(super(),this.tb=e,this.beg=r,this.end=i,typeof e!="string")throw new xe("TB part is not valid");if(!Wm(r))throw new xe("Beg part is not valid");if(!Wm(i))throw new xe("End part is not valid")}equals(e){return!(e instanceof Cg)||this.beg?.constructor!==e.beg?.constructor||this.end?.constructor!==e.end?.constructor?!1:this.tb===e.tb&&ns(this.beg?.value,e.beg?.value)&&ns(this.end?.value,e.end?.value)}toJSON(){return this.toString()}toString(){let e=Mu(this.tb),r=Hm(this.beg),i=Hm(this.end);return`${e}:${r}${Eg(this.beg,this.end)}${i}`}};function Eg(t,e){let r="";return t instanceof Ln&&(r+=">"),r+="..",e instanceof Pn&&(r+="="),r}function Wm(t){return t instanceof Pn||t instanceof Ln?_g(t.value):!0}function Hm(t){return t instanceof Pn||t instanceof Ln?xg(t.value):""}function Zm(t){if(t===void 0)return"";let e=t.value;return t instanceof On?`(${Ar(e)})`:Ar(e)}function Gm([t,e]){function r(i){return i instanceof Pn?new $e(Tg,i.value):i instanceof Ln?new $e(Ag,i.value):null}return[r(t),r(e)]}function $C(t){function e(r){if(r!==null){if(r.tag===Tg)return new Pn(r.value);if(r.tag===Ag)return new Ln(r.value);throw new xe("Invalid bound tag")}}return[e(t[0]),e(t[1])]}var IC=0,Km=37,Ym=6,Jm=7,da=8,PC=9,Xm=10,Qm=12,LC=13,eg=14,tg=15,_u=49,Tg=50,Ag=51,rg=88,ig=89,sg=90,ng=91,og=92,ag=93,lg=94,as={encode(t){return t instanceof Date?new $e(Qm,SC(t)):t===void 0?new $e(Ym,null):t instanceof os?new $e(Km,t.toBuffer()):t instanceof Sa?new $e(Xm,t.toString()):t instanceof pa?new $e(eg,t.toCompact()):t instanceof $n?new $e(da,[t.tb,t.id]):t instanceof zu?new $e(da,t.rid):t instanceof qm?new $e(da,[t.tb,new $e(_u,Gm([t.beg,t.end]))]):t instanceof is?new $e(Jm,t.tb):t instanceof Ou?new $e(tg,t.inner):t instanceof On?new $e(_u,Gm([t.beg,t.end])):t instanceof Mm?new $e(rg,t.point):t instanceof zm?new $e(ig,t.line):t instanceof Fm?new $e(sg,t.polygon):t instanceof Um?new $e(ng,t.points):t instanceof jm?new $e(og,t.lines):t instanceof Vm?new $e(ag,t.polygons):t instanceof Bm?new $e(lg,t.collection):t},decode(t){if(!(t instanceof $e))return t;switch(t.tag){case IC:return new Date(t.value);case Km:case PC:return new os(t.value);case Qm:return kC(t.value);case Ym:return;case Xm:return new Sa(t.value);case LC:return new pa(t.value);case eg:return pa.fromCompact(t.value);case Jm:return new is(t.value);case tg:return new Ou(t.value);case _u:return new On(...$C(t.value));case da:return t.value[1]instanceof On?new qm(t.value[0],t.value[1].beg,t.value[1].end):new $n(t.value[0],t.value[1]);case rg:return new Mm(t.value);case ig:return new zm(t.value);case sg:return new Fm(t.value);case ng:return new Um(t.value);case og:return new jm(t.value);case ag:return new Vm(t.value);case lg:return new Bm(t.value)}}};Object.freeze(as);function RC(t){return ss(t,{replacer:as.encode})}function DC(t){return gg(t,{replacer:as.decode})}var ha,NC=class{_query;_bindings;length;constructor(t,e){ha??=new TextEncoder,this._query=ha.encode(t),this._bindings=Ru(e??{},{replacer:as.encode}),this.length=Object.keys(this._bindings).length}get query(){let t=new In(this._query.byteLength+9);return t.writeMajor(3,this._query.byteLength),t.writeUint8Array(this._query),new Pu(t.output(!1))}get bindings(){return this._bindings}build(t){return ss([this.query,this.bindings],{fills:t})}append(t,...e){let r=this.length;this.length+=e.length;let i=0,s=new Map,n=e.map((c,u)=>{if(c instanceof Iu){let d=s.get(c);if(d!==void 0)return i++,[`bind___${d}`,c];s.set(c,u-i)}return[`bind___${r+u-i}`,c]});for(let[c,u]of n)this._bindings[c]=ss(u,{replacer:as.encode,partial:!0});let o=t.flatMap((c,u)=>{let d=n[u]?.[0];return[c,...d?[`$${d}`]:[]]}).join("");ha??=new TextEncoder;let a=new Uint8Array(this._query),l=ha.encode(o);return this._query=new Uint8Array(a.byteLength+l.byteLength),this._query.set(a),this._query.set(l,a.byteLength),this}};function cg(t){let e={},r=(i,s,n)=>{if(i in t)e[s]=`${t[i]}`,delete e[i];else if(n!==!0)throw new xe(`Key ${i} is missing from the authentication parameters`)};return"scope"in t?(e={...t},r("scope","sc"),r("namespace","ns"),r("database","db")):"variables"in t?(e={...t.variables},r("access","ac"),r("namespace","ns"),r("database","db")):(r("access","ac",!0),r("database","db",!0),r("namespace","ns",!("database"in t)),r("username","user"),r("password","pass")),e}var MC=["CREATE","UPDATE","DELETE"];function zC(t){return!(typeof t!="object"||t===null||!("id"in t&&"action"in t&&"result"in t)||!(t.id instanceof os)||!MC.includes(t.action)||typeof t.result!="object"||t.result===null)}var FC=5e3,Fu="1.4.2",Uu="3.0.0",G$=`>= ${Fu} < ${Uu}`;function UC(t,e=Fu,r=Uu){if(!jC(t,e,r))throw new xC(t,`>= ${e} < ${r}`);return!0}function jC(t,e=Fu,r=Uu){return e.localeCompare(t,void 0,{numeric:!0})<=0&&r.localeCompare(t,void 0,{numeric:!0})===1}async function Og(t,e){let r={"ws:":"http:","wss:":"https:","http:":"http:","https:":"https:"}[t.protocol];if(r){let i=t.pathname.slice(0,-4);t=new URL(t),t.pathname=`${i}/version`,t.protocol=r;let s=new AbortController,n=setTimeout(()=>s.abort(),e??FC),o="surrealdb-";return await fetch(t,{signal:s.signal}).then(a=>a.text()).then(a=>a.slice(o.length)).catch(a=>{throw new Lm(a)}).finally(()=>{clearTimeout(n)})}throw new Lm}var xu=0;function $g(){return xu=(xu+1)%Number.MAX_SAFE_INTEGER,xu.toString()}var VC=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t.Error="error",t))(VC||{}),BC=class{emitter;encodeCbor;decodeCbor;constructor({emitter:t,encodeCbor:e,decodeCbor:r}){this.emitter=t,this.encodeCbor=e,this.decodeCbor=r}},Ig=class{context;ready;status="disconnected";connection={url:void 0,namespace:void 0,database:void 0,token:void 0};constructor(t){this.context=t}get emitter(){return this.context.emitter}get encodeCbor(){return this.context.encodeCbor}get decodeCbor(){return this.context.decodeCbor}async req_post(t,e,r){let i={"Content-Type":"application/cbor",Accept:"application/cbor",...r};this.connection.namespace&&(i["Surreal-NS"]=this.connection.namespace),this.connection.database&&(i["Surreal-DB"]=this.connection.database),this.connection.token&&(i.Authorization=`Bearer ${this.connection.token}`);let s=await fetch(`${e??this.connection.url}`,{method:"POST",headers:i,body:this.encodeCbor(t)}),n=await s.arrayBuffer();if(s.status===200)return n;let o=new TextDecoder("utf-8");throw new vC(o.decode(n),s.status,s.statusText,n)}};function ug(t,e){if("scope"in t||"access"in t&&"variables"in t&&t.variables){if(!t.namespace){if(!e?.namespace)throw new wC;t.namespace=e.namespace}if(!t.database){if(!e?.database)throw new _C;t.database=e.database}}return t}var qC=new Set(["signin","signup","authenticate","invalidate","version","use","let","unset","query"]),dg=class extends Ig{connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}};setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}version(t,e){return Og(t,e)}connect(t){return this.setStatus("connecting"),this.connection.url=t,this.setStatus("connected"),this.ready=new Promise(e=>e()),this.ready}disconnect(){return this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0,variables:{}},this.ready=void 0,this.setStatus("disconnected"),new Promise(t=>t())}async rpc(t){if(await this.ready,!this.connection.url)throw new xa;if((!this.connection.namespace||!this.connection.database)&&!qC.has(t.method))throw new yC;if(t.method==="use"){let[s,n]=t.params;return s===null&&(this.connection.namespace=void 0),n===null&&(this.connection.database=void 0),s&&(this.connection.namespace=s),n&&(this.connection.database=n),{result:!0}}if(t.method==="let"){let[s,n]=t.params;return this.connection.variables[s]=n,{result:!0}}if(t.method==="unset"){let[s]=t.params;return delete this.connection.variables[s],{result:!0}}t.method==="query"&&(t.params=[t.params?.[0],{...this.connection.variables,...t.params?.[1]??{}}]);let e=$g(),r=await this.req_post({id:e,...t}),i=this.decodeCbor(r);if("result"in i)switch(t.method){case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[s]=t.params;this.connection.token=s;break}case"invalidate":{this.connection.token=void 0;break}}return this.emitter.emit(`rpc-${e}`,[i]),i}get connected(){return!!this.connection.url}async export(t){if(!this.connection.url)throw new xa;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},hg=class extends Ig{pinger;socket;constructor(t){super(t),this.emitter.subscribe("disconnected",()=>this.pinger?.stop())}setStatus(t,...e){this.status=t,this.emitter.emit(t,e)}async requireStatus(t){return this.status!==t&&await this.emitter.subscribeOnce(t),!0}version(t,e){return Og(t,e)}async connect(t){this.connection.url=t,this.setStatus("connecting");let e=new $m(t.toString(),"cbor"),r=new Promise((i,s)=>{e.addEventListener("open",()=>{this.setStatus("connected"),i()}),e.addEventListener("error",n=>{let o=new gC("detail"in n?n.detail:"error"in n?n.error:"An unexpected error occurred");this.setStatus("error",o),s(o)}),e.addEventListener("close",()=>{this.setStatus("disconnected")}),e.addEventListener("message",async({data:n})=>{try{let o=this.decodeCbor(n instanceof ArrayBuffer?n:n instanceof Blob?await n.arrayBuffer():n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength));if(typeof o=="object"&&o!=null&&Object.getPrototypeOf(o)===Object.prototype)this.handleRpcResponse(o);else throw new Im(o)}catch(o){e.dispatchEvent(new CustomEvent("error",{detail:o}))}})});return this.ready=r,await r.then(()=>{this.socket=e,this.pinger?.stop(),this.pinger=new WC(3e4),this.pinger.start(()=>this.rpc({method:"ping"}))})}async disconnect(){this.connection={url:void 0,namespace:void 0,database:void 0,token:void 0},await this.ready?.catch(()=>{}),this.socket?.close(),this.ready=void 0,this.socket=void 0,await Promise.any([this.requireStatus("disconnected"),this.requireStatus("error")])}async rpc(t){if(await this.ready,!this.socket)throw new xa;let e=$g(),r=this.emitter.subscribeOnce(`rpc-${e}`);this.socket.send(this.encodeCbor({id:e,...t}));let[i]=await r;if(i instanceof fg)throw i;if("result"in i)switch(t.method){case"use":{let[s,n]=t.params;s===null&&(this.connection.namespace=void 0),n===null&&(this.connection.database=void 0),s&&(this.connection.namespace=s),n&&(this.connection.database=n);break}case"signin":case"signup":{this.connection.token=i.result;break}case"authenticate":{let[s]=t.params;this.connection.token=s;break}case"invalidate":{this.connection.token=void 0;break}}return i}handleRpcResponse({id:t,...e}){if(t)this.emitter.emit(`rpc-${t}`,[e]);else if(e.error)this.setStatus("error",new Oe(e.error));else if(zC(e.result)){let{id:r,action:i,result:s}=e.result;this.emitter.emit(`live-${r}`,[i,s],!0)}else this.setStatus("error",new Im({id:t,...e}))}get connected(){return!!this.socket}async export(t){if(!this.connection.url)throw new xa;let e=new URL(this.connection.url),r=e.pathname.slice(0,-4);e.protocol=e.protocol.replace("ws","http"),e.pathname=`${r}/export`;let i=await this.req_post(t??{},e,{Accept:"plain/text"});return new TextDecoder("utf-8").decode(i)}},WC=class{pinger;interval;constructor(t=3e4){this.interval=t}start(t){this.pinger=setInterval(t,this.interval)}stop(){clearInterval(this.pinger)}},Pg=class{connection;ready;emitter;engines={ws:hg,wss:hg,http:dg,https:dg};constructor({engines:t}={}){this.emitter=new fC,this.emitter.subscribe("disconnected",()=>this.clean()),this.emitter.subscribe("error",()=>this.close()),t&&(this.engines={...this.engines,...t})}async connect(t,e={}){t=new URL(t),t.pathname.endsWith("/rpc")||(t.pathname.endsWith("/")||(t.pathname+="/"),t.pathname+="rpc");let r=t.protocol.slice(0,-1),i=this.engines[r];if(!i)throw new bC(r);let{prepare:s,auth:n,namespace:o,database:a}=e;await this.close();let l=new BC({emitter:this.emitter,encodeCbor:RC,decodeCbor:DC}),c=new i(l);if(e.versionCheck!==!1){let u=await c.version(t,e.versionCheckTimeout);UC(u)}return this.connection=c,this.ready=new Promise((u,d)=>c.connect(t).then(async()=>{(o||a)&&await this.use({namespace:o,database:a}),typeof n=="string"?await this.authenticate(n):n&&await this.signin(n),await s?.(this),u()}).catch(d)),await this.ready,!0}async close(){return this.clean(),await this.connection?.disconnect(),!0}clean(){let t=this.emitter.scanListeners(r=>r.startsWith("rpc-"));t.map(r=>this.emitter.emit(r,[new fg]));let e=this.emitter.scanListeners(r=>r.startsWith("live-"));e.map(r=>this.emitter.emit(r,["CLOSE","disconnected"])),this.emitter.reset({collectable:!0,listeners:[...t,...e]})}get status(){return this.connection?.status??"disconnected"}async ping(){let{error:t}=await this.rpc("ping");if(t)throw new Oe(t.message);return!0}async use({namespace:t,database:e}){if(!this.connection)throw new Er;if(t===null&&e!==null)throw new xe("Cannot unset namespace without unsetting database");let{error:r}=await this.rpc("use",[t,e]);if(r)throw new Oe(r.message);return!0}async info(){await this.ready;let t=await this.rpc("info");if(t.error)throw new Oe(t.error.message);return t.result??void 0}async signup(t){if(!this.connection)throw new Er;let e=ug(t,this.connection.connection),r=cg(e),i=await this.rpc("signup",[r]);if(i.error)throw new Oe(i.error.message);if(!i.result)throw new Pm;return i.result}async signin(t){if(!this.connection)throw new Er;let e=ug(t,this.connection.connection),r=cg(e),i=await this.rpc("signin",[r]);if(i.error)throw new Oe(i.error.message);if(!i.result)throw new Pm;return i.result}async authenticate(t){let e=await this.rpc("authenticate",[t]);if(e.error)throw new Oe(e.error.message);return!0}async invalidate(){let t=await this.rpc("invalidate");if(t.error)throw new Oe(t.error.message);return!0}async let(t,e){let r=await this.rpc("let",[t,e]);if(r.error)throw new Oe(r.error.message);return!0}async unset(t){let e=await this.rpc("unset",[t]);if(e.error)throw new Oe(e.error.message);return!0}async live(t,e,r){await this.ready;let i=await this.rpc("live",[t,r]);if(i.error)throw new Oe(i.error.message);return e&&this.subscribeLive(i.result,e),i.result}async subscribeLive(t,e){if(await this.ready,!this.connection)throw new Er;this.connection.emitter.subscribe(`live-${t}`,e,!0)}async unSubscribeLive(t,e){if(await this.ready,!this.connection)throw new Er;this.connection.emitter.unSubscribe(`live-${t}`,e)}async kill(t){if(await this.ready,!this.connection)throw new Er;if(Array.isArray(t)){await Promise.all(t.map(r=>this.rpc("kill",[r])));let e=t.map(r=>`live-${r}`);e.map(r=>this.emitter.emit(r,["CLOSE","killed"])),this.connection.emitter.reset({collectable:e,listeners:e})}else await this.rpc("kill",[t]),this.emitter.emit(`live-${t}`,["CLOSE","killed"]),this.connection.emitter.reset({collectable:`live-${t}`,listeners:`live-${t}`})}async query(...t){return(await this.queryRaw(...t)).map(({status:e,result:r})=>{if(e==="ERR")throw new Oe(r);return r})}async queryRaw(...[t,e]){let r=t instanceof NC?[t.query,Ru(t.bindings,{fills:e,replacer:as.encode})]:[t,e];await this.ready;let i=await this.rpc("query",r);if(i.error)throw new Oe(i.error.message);return i.result}async query_raw(...t){return this.queryRaw(...t)}async select(t){await this.ready;let e=await this.rpc("select",[t]);if(e.error)throw new Oe(e.error.message);return Tr(t,e.result)}async create(t,e){await this.ready;let r=await this.rpc("create",[t,e]);if(r.error)throw new Oe(r.error.message);return Tr(t,r.result)}async insert(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof is?[t,e]:[void 0,t],s=await this.rpc("insert",[r,i]);if(s.error)throw new Oe(s.error.message);return s.result}async insertRelation(t,e){await this.ready;let[r,i]=typeof t=="string"||t instanceof is?[t,e]:[void 0,t],s=await this.rpc("insert_relation",[r,i]);if(s.error)throw new Oe(s.error.message);return s.result}async insert_relation(t,e){return t instanceof is||typeof t=="string"?this.insertRelation(t,e):this.insertRelation(t)}async update(t,e){await this.ready;let r=await this.rpc("update",[t,e]);if(r.error)throw new Oe(r.error.message);return Tr(t,r.result)}async upsert(t,e){await this.ready;let r=await this.rpc("upsert",[t,e]);if(r.error)throw new Oe(r.error.message);return Tr(t,r.result)}async merge(t,e){await this.ready;let r=await this.rpc("merge",[t,e]);if(r.error)throw new Oe(r.error.message);return Tr(t,r.result)}async patch(t,e,r){await this.ready;let i=await this.rpc("patch",[t,e,r]);if(i.error)throw new Oe(i.error.message);return r?i.result:Tr(t,i.result)}async delete(t){await this.ready;let e=await this.rpc("delete",[t]);if(e.error)throw new Oe(e.error.message);return Tr(t,e.result)}async version(){await this.ready;let t=await this.rpc("version");if(t.error)throw new Oe(t.error.message);return t.result}async run(t,e,r){await this.ready;let[i,s]=Array.isArray(e)?[void 0,e]:[e,r],n=await this.rpc("run",[t,i,s]);if(n.error)throw new Oe(n.error.message);return n.result}async relate(t,e,r,i){await this.ready;let s=await this.rpc("relate",[t,e,r,i]);if(s.error)throw new Oe(s.error.message);return Tr(e,s.result)}rpc(t,e){if(!this.connection)throw new Er;return this.connection.rpc({method:t,params:e})}async export(t){if(await this.ready,!this.connection)throw new Er;return this.connection.export(t)}};function Tr(t,e){return t instanceof $n||t instanceof zu?Array.isArray(e)?e[0]:e:Array.isArray(e)?e:[e]}var he;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function r(s){throw new Error}t.assertNever=r,t.arrayToEnum=s=>{let n={};for(let o of s)n[o]=o;return n},t.getValidEnumValues=s=>{let n=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(let a of n)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(n){return s[n]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{let n=[];for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&n.push(o);return n},t.find=(s,n)=>{for(let o of s)if(n(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function i(s,n=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(n)}t.joinValues=i,t.jsonStringifyReplacer=(s,n)=>typeof n=="bigint"?n.toString():n})(he||(he={}));var Vu;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(Vu||(Vu={}));var L=he.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),nr=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}},k=he.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),HC=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),ut=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){let r=e||function(n){return n.message},i={_errors:[]},s=n=>{for(let o of n.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)i._errors.push(r(o));else{let a=i,l=0;for(;l<o.path.length;){let c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(r(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return s(this),i}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,he.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){let r={},i=[];for(let s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(e(s))):i.push(e(s));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}};ut.create=t=>new ut(t);var us=(t,e)=>{let r;switch(t.code){case k.invalid_type:t.received===L.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case k.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,he.jsonStringifyReplacer)}`;break;case k.unrecognized_keys:r=`Unrecognized key(s) in object: ${he.joinValues(t.keys,", ")}`;break;case k.invalid_union:r="Invalid input";break;case k.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${he.joinValues(t.options)}`;break;case k.invalid_enum_value:r=`Invalid enum value. Expected ${he.joinValues(t.options)}, received '${t.received}'`;break;case k.invalid_arguments:r="Invalid function arguments";break;case k.invalid_return_type:r="Invalid function return type";break;case k.invalid_date:r="Invalid date";break;case k.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:he.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case k.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case k.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case k.custom:r="Invalid input";break;case k.invalid_intersection_types:r="Intersection results could not be merged";break;case k.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case k.not_finite:r="Number must be finite";break;default:r=e.defaultError,he.assertNever(t)}return{message:r}},Dg=us;function ZC(t){Dg=t}function Oa(){return Dg}var $a=t=>{let{data:e,path:r,errorMaps:i,issueData:s}=t,n=[...r,...s.path||[]],o={...s,path:n};if(s.message!==void 0)return{...s,path:n,message:s.message};let a="",l=i.filter(c=>!!c).slice().reverse();for(let c of l)a=c(o,{data:e,defaultError:a}).message;return{...s,path:n,message:a}},GC=[];function O(t,e){let r=Oa(),i=$a({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===us?void 0:us].filter(s=>!!s)});t.common.issues.push(i)}var Ze=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let i=[];for(let s of r){if(s.status==="aborted")return K;s.status==="dirty"&&e.dirty(),i.push(s.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){let i=[];for(let s of r){let n=await s.key,o=await s.value;i.push({key:n,value:o})}return t.mergeObjectSync(e,i)}static mergeObjectSync(e,r){let i={};for(let s of r){let{key:n,value:o}=s;if(n.status==="aborted"||o.status==="aborted")return K;n.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),n.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(i[n.value]=o.value)}return{status:e.value,value:i}}},K=Object.freeze({status:"aborted"}),cs=t=>({status:"dirty",value:t}),Ye=t=>({status:"valid",value:t}),Bu=t=>t.status==="aborted",qu=t=>t.status==="dirty",ni=t=>t.status==="valid",Nn=t=>typeof Promise<"u"&&t instanceof Promise;function Ia(t,e,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(t):i?i.value:e.get(t)}function Ng(t,e,r,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(t,r):s?s.value=r:e.set(t,r),r}var F;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(F||(F={}));var Rn,Dn,_t=class{constructor(e,r,i,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Lg=(t,e)=>{if(ni(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new ut(t.common.issues);return this._error=r,this._error}}};function X(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:i,description:s}=t;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>{var l,c;let{message:u}=t;return o.code==="invalid_enum_value"?{message:u??a.defaultError}:typeof a.data>"u"?{message:(l=u??i)!==null&&l!==void 0?l:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(c=u??r)!==null&&c!==void 0?c:a.defaultError}},description:s}}var Q=class{get description(){return this._def.description}_getType(e){return nr(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ze,ctx:{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if(Nn(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){var i;let s={common:{issues:[],async:(i=r?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},n=this._parseSync({data:e,path:s.path,parent:s});return Lg(s,n)}"~validate"(e){var r,i;let s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)};if(!this["~standard"].async)try{let n=this._parseSync({data:e,path:[],parent:s});return ni(n)?{value:n.value}:{issues:s.common.issues}}catch(n){!((i=(r=n?.message)===null||r===void 0?void 0:r.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:s}).then(n=>ni(n)?{value:n.value}:{issues:s.common.issues})}async parseAsync(e,r){let i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){let i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},s=this._parse({data:e,path:i.path,parent:i}),n=await(Nn(s)?s:Promise.resolve(s));return Lg(i,n)}refine(e,r){let i=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,n)=>{let o=e(s),a=()=>n.addIssue({code:k.custom,...i(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,r){return this._refinement((i,s)=>e(i)?!0:(s.addIssue(typeof r=="function"?r(i,s):r),!1))}_refinement(e){return new dt({schema:this,typeName:G.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return wt.create(this,this._def)}nullable(){return Wt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ar.create(this)}promise(){return Pr.create(this,this._def)}or(e){return hi.create([this,e],this._def)}and(e){return fi.create(this,e,this._def)}transform(e){return new dt({...X(this._def),schema:this,typeName:G.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let r=typeof e=="function"?e:()=>e;return new yi({...X(this._def),innerType:this,defaultValue:r,typeName:G.ZodDefault})}brand(){return new Mn({typeName:G.ZodBranded,type:this,...X(this._def)})}catch(e){let r=typeof e=="function"?e:()=>e;return new vi({...X(this._def),innerType:this,catchValue:r,typeName:G.ZodCatch})}describe(e){let r=this.constructor;return new r({...this._def,description:e})}pipe(e){return zn.create(this,e)}readonly(){return wi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},KC=/^c[^\s-]{8,}$/i,YC=/^[0-9a-z]+$/,JC=/^[0-9A-HJKMNP-TV-Z]{26}$/i,XC=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,QC=/^[a-z0-9_-]{21}$/i,e1=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,t1=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,r1=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,i1="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",ju,s1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,n1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,o1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,a1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,l1=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,c1=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Mg="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",u1=new RegExp(`^${Mg}$`);function zg(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function d1(t){return new RegExp(`^${zg(t)}$`)}function Fg(t){let e=`${Mg}T${zg(t)}`,r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function h1(t,e){return!!((e==="v4"||!e)&&s1.test(t)||(e==="v6"||!e)&&o1.test(t))}function f1(t,e){if(!e1.test(t))return!1;try{let[r]=t.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(i));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function p1(t,e){return!!((e==="v4"||!e)&&n1.test(t)||(e==="v6"||!e)&&a1.test(t))}var $r=class t extends Q{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){let n=this._getOrReturnCtx(e);return O(n,{code:k.invalid_type,expected:L.string,received:n.parsedType}),K}let i=new Ze,s;for(let n of this._def.checks)if(n.kind==="min")e.data.length<n.value&&(s=this._getOrReturnCtx(e,s),O(s,{code:k.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),i.dirty());else if(n.kind==="max")e.data.length>n.value&&(s=this._getOrReturnCtx(e,s),O(s,{code:k.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),i.dirty());else if(n.kind==="length"){let o=e.data.length>n.value,a=e.data.length<n.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?O(s,{code:k.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):a&&O(s,{code:k.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),i.dirty())}else if(n.kind==="email")r1.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"email",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="emoji")ju||(ju=new RegExp(i1,"u")),ju.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"emoji",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="uuid")XC.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"uuid",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="nanoid")QC.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"nanoid",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="cuid")KC.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"cuid",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="cuid2")YC.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"cuid2",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="ulid")JC.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"ulid",code:k.invalid_string,message:n.message}),i.dirty());else if(n.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),O(s,{validation:"url",code:k.invalid_string,message:n.message}),i.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"regex",code:k.invalid_string,message:n.message}),i.dirty())):n.kind==="trim"?e.data=e.data.trim():n.kind==="includes"?e.data.includes(n.value,n.position)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),i.dirty()):n.kind==="toLowerCase"?e.data=e.data.toLowerCase():n.kind==="toUpperCase"?e.data=e.data.toUpperCase():n.kind==="startsWith"?e.data.startsWith(n.value)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:{startsWith:n.value},message:n.message}),i.dirty()):n.kind==="endsWith"?e.data.endsWith(n.value)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:{endsWith:n.value},message:n.message}),i.dirty()):n.kind==="datetime"?Fg(n).test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:"datetime",message:n.message}),i.dirty()):n.kind==="date"?u1.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:"date",message:n.message}),i.dirty()):n.kind==="time"?d1(n).test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{code:k.invalid_string,validation:"time",message:n.message}),i.dirty()):n.kind==="duration"?t1.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"duration",code:k.invalid_string,message:n.message}),i.dirty()):n.kind==="ip"?h1(e.data,n.version)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"ip",code:k.invalid_string,message:n.message}),i.dirty()):n.kind==="jwt"?f1(e.data,n.alg)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"jwt",code:k.invalid_string,message:n.message}),i.dirty()):n.kind==="cidr"?p1(e.data,n.version)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"cidr",code:k.invalid_string,message:n.message}),i.dirty()):n.kind==="base64"?l1.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"base64",code:k.invalid_string,message:n.message}),i.dirty()):n.kind==="base64url"?c1.test(e.data)||(s=this._getOrReturnCtx(e,s),O(s,{validation:"base64url",code:k.invalid_string,message:n.message}),i.dirty()):he.assertNever(n);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(s=>e.test(s),{validation:r,code:k.invalid_string,...F.errToObj(i)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...F.errToObj(e)})}url(e){return this._addCheck({kind:"url",...F.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...F.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...F.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...F.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...F.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...F.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...F.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...F.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...F.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...F.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...F.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...F.errToObj(e)})}datetime(e){var r,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...F.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...F.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...F.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...F.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...F.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...F.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...F.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...F.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...F.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...F.errToObj(r)})}nonempty(e){return this.min(1,F.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};$r.create=t=>{var e;return new $r({checks:[],typeName:G.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...X(t)})};function m1(t,e){let r=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,s=r>i?r:i,n=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return n%o/Math.pow(10,s)}var oi=class t extends Q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){let n=this._getOrReturnCtx(e);return O(n,{code:k.invalid_type,expected:L.number,received:n.parsedType}),K}let i,s=new Ze;for(let n of this._def.checks)n.kind==="int"?he.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),O(i,{code:k.invalid_type,expected:"integer",received:"float",message:n.message}),s.dirty()):n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),s.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),s.dirty()):n.kind==="multipleOf"?m1(e.data,n.value)!==0&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.not_multiple_of,multipleOf:n.value,message:n.message}),s.dirty()):n.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),O(i,{code:k.not_finite,message:n.message}),s.dirty()):he.assertNever(n);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,F.toString(r))}gt(e,r){return this.setLimit("min",e,!1,F.toString(r))}lte(e,r){return this.setLimit("max",e,!0,F.toString(r))}lt(e,r){return this.setLimit("max",e,!1,F.toString(r))}setLimit(e,r,i,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:F.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:F.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:F.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:F.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:F.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:F.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:F.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:F.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:F.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:F.toString(e)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&he.isInteger(e.value))}get isFinite(){let e=null,r=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}};oi.create=t=>new oi({checks:[],typeName:G.ZodNumber,coerce:t?.coerce||!1,...X(t)});var ai=class t extends Q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==L.bigint)return this._getInvalidInput(e);let i,s=new Ze;for(let n of this._def.checks)n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),s.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),s.dirty()):n.kind==="multipleOf"?e.data%n.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),O(i,{code:k.not_multiple_of,multipleOf:n.value,message:n.message}),s.dirty()):he.assertNever(n);return{status:s.value,value:e.data}}_getInvalidInput(e){let r=this._getOrReturnCtx(e);return O(r,{code:k.invalid_type,expected:L.bigint,received:r.parsedType}),K}gte(e,r){return this.setLimit("min",e,!0,F.toString(r))}gt(e,r){return this.setLimit("min",e,!1,F.toString(r))}lte(e,r){return this.setLimit("max",e,!0,F.toString(r))}lt(e,r){return this.setLimit("max",e,!1,F.toString(r))}setLimit(e,r,i,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:F.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:F.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:F.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:F.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:F.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:F.toString(r)})}get minValue(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}};ai.create=t=>{var e;return new ai({checks:[],typeName:G.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...X(t)})};var li=class extends Q{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.boolean,received:i.parsedType}),K}return Ye(e.data)}};li.create=t=>new li({typeName:G.ZodBoolean,coerce:t?.coerce||!1,...X(t)});var ci=class t extends Q{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){let n=this._getOrReturnCtx(e);return O(n,{code:k.invalid_type,expected:L.date,received:n.parsedType}),K}if(isNaN(e.data.getTime())){let n=this._getOrReturnCtx(e);return O(n,{code:k.invalid_date}),K}let i=new Ze,s;for(let n of this._def.checks)n.kind==="min"?e.data.getTime()<n.value&&(s=this._getOrReturnCtx(e,s),O(s,{code:k.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),i.dirty()):n.kind==="max"?e.data.getTime()>n.value&&(s=this._getOrReturnCtx(e,s),O(s,{code:k.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),i.dirty()):he.assertNever(n);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:F.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:F.toString(r)})}get minDate(){let e=null;for(let r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}};ci.create=t=>new ci({checks:[],coerce:t?.coerce||!1,typeName:G.ZodDate,...X(t)});var ds=class extends Q{_parse(e){if(this._getType(e)!==L.symbol){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.symbol,received:i.parsedType}),K}return Ye(e.data)}};ds.create=t=>new ds({typeName:G.ZodSymbol,...X(t)});var ui=class extends Q{_parse(e){if(this._getType(e)!==L.undefined){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.undefined,received:i.parsedType}),K}return Ye(e.data)}};ui.create=t=>new ui({typeName:G.ZodUndefined,...X(t)});var di=class extends Q{_parse(e){if(this._getType(e)!==L.null){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.null,received:i.parsedType}),K}return Ye(e.data)}};di.create=t=>new di({typeName:G.ZodNull,...X(t)});var Ir=class extends Q{constructor(){super(...arguments),this._any=!0}_parse(e){return Ye(e.data)}};Ir.create=t=>new Ir({typeName:G.ZodAny,...X(t)});var or=class extends Q{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ye(e.data)}};or.create=t=>new or({typeName:G.ZodUnknown,...X(t)});var Dt=class extends Q{_parse(e){let r=this._getOrReturnCtx(e);return O(r,{code:k.invalid_type,expected:L.never,received:r.parsedType}),K}};Dt.create=t=>new Dt({typeName:G.ZodNever,...X(t)});var hs=class extends Q{_parse(e){if(this._getType(e)!==L.undefined){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.void,received:i.parsedType}),K}return Ye(e.data)}};hs.create=t=>new hs({typeName:G.ZodVoid,...X(t)});var ar=class t extends Q{_parse(e){let{ctx:r,status:i}=this._processInputParams(e),s=this._def;if(r.parsedType!==L.array)return O(r,{code:k.invalid_type,expected:L.array,received:r.parsedType}),K;if(s.exactLength!==null){let o=r.data.length>s.exactLength.value,a=r.data.length<s.exactLength.value;(o||a)&&(O(r,{code:o?k.too_big:k.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),i.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(O(r,{code:k.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),i.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(O(r,{code:k.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((o,a)=>s.type._parseAsync(new _t(r,o,r.path,a)))).then(o=>Ze.mergeArray(i,o));let n=[...r.data].map((o,a)=>s.type._parseSync(new _t(r,o,r.path,a)));return Ze.mergeArray(i,n)}get element(){return this._def.type}min(e,r){return new t({...this._def,minLength:{value:e,message:F.toString(r)}})}max(e,r){return new t({...this._def,maxLength:{value:e,message:F.toString(r)}})}length(e,r){return new t({...this._def,exactLength:{value:e,message:F.toString(r)}})}nonempty(e){return this.min(1,e)}};ar.create=(t,e)=>new ar({type:t,minLength:null,maxLength:null,exactLength:null,typeName:G.ZodArray,...X(e)});function ls(t){if(t instanceof rt){let e={};for(let r in t.shape){let i=t.shape[r];e[r]=wt.create(ls(i))}return new rt({...t._def,shape:()=>e})}else return t instanceof ar?new ar({...t._def,type:ls(t.element)}):t instanceof wt?wt.create(ls(t.unwrap())):t instanceof Wt?Wt.create(ls(t.unwrap())):t instanceof qt?qt.create(t.items.map(e=>ls(e))):t}var rt=class t extends Q{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),r=he.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==L.object){let c=this._getOrReturnCtx(e);return O(c,{code:k.invalid_type,expected:L.object,received:c.parsedType}),K}let{status:i,ctx:s}=this._processInputParams(e),{shape:n,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Dt&&this._def.unknownKeys==="strip"))for(let c in s.data)o.includes(c)||a.push(c);let l=[];for(let c of o){let u=n[c],d=s.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new _t(s,d,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof Dt){let c=this._def.unknownKeys;if(c==="passthrough")for(let u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(c==="strict")a.length>0&&(O(s,{code:k.unrecognized_keys,keys:a}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let u of a){let d=s.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new _t(s,d,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{let c=[];for(let u of l){let d=await u.key,p=await u.value;c.push({key:d,value:p,alwaysSet:u.alwaysSet})}return c}).then(c=>Ze.mergeObjectSync(i,c)):Ze.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return F.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{var s,n,o,a;let l=(o=(n=(s=this._def).errorMap)===null||n===void 0?void 0:n.call(s,r,i).message)!==null&&o!==void 0?o:i.defaultError;return r.code==="unrecognized_keys"?{message:(a=F.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:G.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let r={};return he.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}omit(e){let r={};return he.objectKeys(this.shape).forEach(i=>{e[i]||(r[i]=this.shape[i])}),new t({...this._def,shape:()=>r})}deepPartial(){return ls(this)}partial(e){let r={};return he.objectKeys(this.shape).forEach(i=>{let s=this.shape[i];e&&!e[i]?r[i]=s:r[i]=s.optional()}),new t({...this._def,shape:()=>r})}required(e){let r={};return he.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])r[i]=this.shape[i];else{let n=this.shape[i];for(;n instanceof wt;)n=n._def.innerType;r[i]=n}}),new t({...this._def,shape:()=>r})}keyof(){return Ug(he.objectKeys(this.shape))}};rt.create=(t,e)=>new rt({shape:()=>t,unknownKeys:"strip",catchall:Dt.create(),typeName:G.ZodObject,...X(e)});rt.strictCreate=(t,e)=>new rt({shape:()=>t,unknownKeys:"strict",catchall:Dt.create(),typeName:G.ZodObject,...X(e)});rt.lazycreate=(t,e)=>new rt({shape:t,unknownKeys:"strip",catchall:Dt.create(),typeName:G.ZodObject,...X(e)});var hi=class extends Q{_parse(e){let{ctx:r}=this._processInputParams(e),i=this._def.options;function s(n){for(let a of n)if(a.result.status==="valid")return a.result;for(let a of n)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;let o=n.map(a=>new ut(a.ctx.common.issues));return O(r,{code:k.invalid_union,unionErrors:o}),K}if(r.common.async)return Promise.all(i.map(async n=>{let o={...r,common:{...r.common,issues:[]},parent:null};return{result:await n._parseAsync({data:r.data,path:r.path,parent:o}),ctx:o}})).then(s);{let n,o=[];for(let l of i){let c={...r,common:{...r.common,issues:[]},parent:null},u=l._parseSync({data:r.data,path:r.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!n&&(n={result:u,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(n)return r.common.issues.push(...n.ctx.common.issues),n.result;let a=o.map(l=>new ut(l));return O(r,{code:k.invalid_union,unionErrors:a}),K}}get options(){return this._def.options}};hi.create=(t,e)=>new hi({options:t,typeName:G.ZodUnion,...X(e)});var sr=t=>t instanceof pi?sr(t.schema):t instanceof dt?sr(t.innerType()):t instanceof mi?[t.value]:t instanceof gi?t.options:t instanceof bi?he.objectValues(t.enum):t instanceof yi?sr(t._def.innerType):t instanceof ui?[void 0]:t instanceof di?[null]:t instanceof wt?[void 0,...sr(t.unwrap())]:t instanceof Wt?[null,...sr(t.unwrap())]:t instanceof Mn||t instanceof wi?sr(t.unwrap()):t instanceof vi?sr(t._def.innerType):[],Pa=class t extends Q{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return O(r,{code:k.invalid_type,expected:L.object,received:r.parsedType}),K;let i=this.discriminator,s=r.data[i],n=this.optionsMap.get(s);return n?r.common.async?n._parseAsync({data:r.data,path:r.path,parent:r}):n._parseSync({data:r.data,path:r.path,parent:r}):(O(r,{code:k.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),K)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,i){let s=new Map;for(let n of r){let o=sr(n.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,n)}}return new t({typeName:G.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:s,...X(i)})}};function Wu(t,e){let r=nr(t),i=nr(e);if(t===e)return{valid:!0,data:t};if(r===L.object&&i===L.object){let s=he.objectKeys(e),n=he.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(let a of n){let l=Wu(t[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(r===L.array&&i===L.array){if(t.length!==e.length)return{valid:!1};let s=[];for(let n=0;n<t.length;n++){let o=t[n],a=e[n],l=Wu(o,a);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return r===L.date&&i===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var fi=class extends Q{_parse(e){let{status:r,ctx:i}=this._processInputParams(e),s=(n,o)=>{if(Bu(n)||Bu(o))return K;let a=Wu(n.value,o.value);return a.valid?((qu(n)||qu(o))&&r.dirty(),{status:r.value,value:a.data}):(O(i,{code:k.invalid_intersection_types}),K)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([n,o])=>s(n,o)):s(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}};fi.create=(t,e,r)=>new fi({left:t,right:e,typeName:G.ZodIntersection,...X(r)});var qt=class t extends Q{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.array)return O(i,{code:k.invalid_type,expected:L.array,received:i.parsedType}),K;if(i.data.length<this._def.items.length)return O(i,{code:k.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),K;!this._def.rest&&i.data.length>this._def.items.length&&(O(i,{code:k.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());let n=[...i.data].map((o,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new _t(i,o,i.path,a)):null}).filter(o=>!!o);return i.common.async?Promise.all(n).then(o=>Ze.mergeArray(r,o)):Ze.mergeArray(r,n)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};qt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new qt({items:t,typeName:G.ZodTuple,rest:null,...X(e)})};var La=class t extends Q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.object)return O(i,{code:k.invalid_type,expected:L.object,received:i.parsedType}),K;let s=[],n=this._def.keyType,o=this._def.valueType;for(let a in i.data)s.push({key:n._parse(new _t(i,a,i.path,a)),value:o._parse(new _t(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?Ze.mergeObjectAsync(r,s):Ze.mergeObjectSync(r,s)}get element(){return this._def.valueType}static create(e,r,i){return r instanceof Q?new t({keyType:e,valueType:r,typeName:G.ZodRecord,...X(i)}):new t({keyType:$r.create(),valueType:e,typeName:G.ZodRecord,...X(r)})}},fs=class extends Q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.map)return O(i,{code:k.invalid_type,expected:L.map,received:i.parsedType}),K;let s=this._def.keyType,n=this._def.valueType,o=[...i.data.entries()].map(([a,l],c)=>({key:s._parse(new _t(i,a,i.path,[c,"key"])),value:n._parse(new _t(i,l,i.path,[c,"value"]))}));if(i.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of o){let c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return K;(c.status==="dirty"||u.status==="dirty")&&r.dirty(),a.set(c.value,u.value)}return{status:r.value,value:a}})}else{let a=new Map;for(let l of o){let c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return K;(c.status==="dirty"||u.status==="dirty")&&r.dirty(),a.set(c.value,u.value)}return{status:r.value,value:a}}}};fs.create=(t,e,r)=>new fs({valueType:e,keyType:t,typeName:G.ZodMap,...X(r)});var ps=class t extends Q{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==L.set)return O(i,{code:k.invalid_type,expected:L.set,received:i.parsedType}),K;let s=this._def;s.minSize!==null&&i.data.size<s.minSize.value&&(O(i,{code:k.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&i.data.size>s.maxSize.value&&(O(i,{code:k.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());let n=this._def.valueType;function o(l){let c=new Set;for(let u of l){if(u.status==="aborted")return K;u.status==="dirty"&&r.dirty(),c.add(u.value)}return{status:r.value,value:c}}let a=[...i.data.values()].map((l,c)=>n._parse(new _t(i,l,i.path,c)));return i.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,r){return new t({...this._def,minSize:{value:e,message:F.toString(r)}})}max(e,r){return new t({...this._def,maxSize:{value:e,message:F.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}};ps.create=(t,e)=>new ps({valueType:t,minSize:null,maxSize:null,typeName:G.ZodSet,...X(e)});var Ra=class t extends Q{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.function)return O(r,{code:k.invalid_type,expected:L.function,received:r.parsedType}),K;function i(a,l){return $a({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Oa(),us].filter(c=>!!c),issueData:{code:k.invalid_arguments,argumentsError:l}})}function s(a,l){return $a({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Oa(),us].filter(c=>!!c),issueData:{code:k.invalid_return_type,returnTypeError:l}})}let n={errorMap:r.common.contextualErrorMap},o=r.data;if(this._def.returns instanceof Pr){let a=this;return Ye(async function(...l){let c=new ut([]),u=await a._def.args.parseAsync(l,n).catch(f=>{throw c.addIssue(i(l,f)),c}),d=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(d,n).catch(f=>{throw c.addIssue(s(d,f)),c})})}else{let a=this;return Ye(function(...l){let c=a._def.args.safeParse(l,n);if(!c.success)throw new ut([i(l,c.error)]);let u=Reflect.apply(o,this,c.data),d=a._def.returns.safeParse(u,n);if(!d.success)throw new ut([s(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:qt.create(e).rest(or.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,i){return new t({args:e||qt.create([]).rest(or.create()),returns:r||or.create(),typeName:G.ZodFunction,...X(i)})}},pi=class extends Q{get schema(){return this._def.getter()}_parse(e){let{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}};pi.create=(t,e)=>new pi({getter:t,typeName:G.ZodLazy,...X(e)});var mi=class extends Q{_parse(e){if(e.data!==this._def.value){let r=this._getOrReturnCtx(e);return O(r,{received:r.data,code:k.invalid_literal,expected:this._def.value}),K}return{status:"valid",value:e.data}}get value(){return this._def.value}};mi.create=(t,e)=>new mi({value:t,typeName:G.ZodLiteral,...X(e)});function Ug(t,e){return new gi({values:t,typeName:G.ZodEnum,...X(e)})}var gi=class t extends Q{constructor(){super(...arguments),Rn.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let r=this._getOrReturnCtx(e),i=this._def.values;return O(r,{expected:he.joinValues(i),received:r.parsedType,code:k.invalid_type}),K}if(Ia(this,Rn,"f")||Ng(this,Rn,new Set(this._def.values),"f"),!Ia(this,Rn,"f").has(e.data)){let r=this._getOrReturnCtx(e),i=this._def.values;return O(r,{received:r.data,code:k.invalid_enum_value,options:i}),K}return Ye(e.data)}get options(){return this._def.values}get enum(){let e={};for(let r of this._def.values)e[r]=r;return e}get Values(){let e={};for(let r of this._def.values)e[r]=r;return e}get Enum(){let e={};for(let r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return t.create(e,{...this._def,...r})}exclude(e,r=this._def){return t.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}};Rn=new WeakMap;gi.create=Ug;var bi=class extends Q{constructor(){super(...arguments),Dn.set(this,void 0)}_parse(e){let r=he.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==L.string&&i.parsedType!==L.number){let s=he.objectValues(r);return O(i,{expected:he.joinValues(s),received:i.parsedType,code:k.invalid_type}),K}if(Ia(this,Dn,"f")||Ng(this,Dn,new Set(he.getValidEnumValues(this._def.values)),"f"),!Ia(this,Dn,"f").has(e.data)){let s=he.objectValues(r);return O(i,{received:i.data,code:k.invalid_enum_value,options:s}),K}return Ye(e.data)}get enum(){return this._def.values}};Dn=new WeakMap;bi.create=(t,e)=>new bi({values:t,typeName:G.ZodNativeEnum,...X(e)});var Pr=class extends Q{unwrap(){return this._def.type}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==L.promise&&r.common.async===!1)return O(r,{code:k.invalid_type,expected:L.promise,received:r.parsedType}),K;let i=r.parsedType===L.promise?r.data:Promise.resolve(r.data);return Ye(i.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}};Pr.create=(t,e)=>new Pr({type:t,typeName:G.ZodPromise,...X(e)});var dt=class extends Q{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===G.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:r,ctx:i}=this._processInputParams(e),s=this._def.effect||null,n={addIssue:o=>{O(i,o),o.fatal?r.abort():r.dirty()},get path(){return i.path}};if(n.addIssue=n.addIssue.bind(n),s.type==="preprocess"){let o=s.transform(i.data,n);if(i.common.async)return Promise.resolve(o).then(async a=>{if(r.value==="aborted")return K;let l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?K:l.status==="dirty"||r.value==="dirty"?cs(l.value):l});{if(r.value==="aborted")return K;let a=this._def.schema._parseSync({data:o,path:i.path,parent:i});return a.status==="aborted"?K:a.status==="dirty"||r.value==="dirty"?cs(a.value):a}}if(s.type==="refinement"){let o=a=>{let l=s.refinement(a,n);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){let a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?K:(a.status==="dirty"&&r.dirty(),o(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?K:(a.status==="dirty"&&r.dirty(),o(a.value).then(()=>({status:r.value,value:a.value}))))}if(s.type==="transform")if(i.common.async===!1){let o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!ni(o))return o;let a=s.transform(o.value,n);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>ni(o)?Promise.resolve(s.transform(o.value,n)).then(a=>({status:r.value,value:a})):o);he.assertNever(s)}};dt.create=(t,e,r)=>new dt({schema:t,typeName:G.ZodEffects,effect:e,...X(r)});dt.createWithPreprocess=(t,e,r)=>new dt({schema:e,effect:{type:"preprocess",transform:t},typeName:G.ZodEffects,...X(r)});var wt=class extends Q{_parse(e){return this._getType(e)===L.undefined?Ye(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};wt.create=(t,e)=>new wt({innerType:t,typeName:G.ZodOptional,...X(e)});var Wt=class extends Q{_parse(e){return this._getType(e)===L.null?Ye(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Wt.create=(t,e)=>new Wt({innerType:t,typeName:G.ZodNullable,...X(e)});var yi=class extends Q{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return r.parsedType===L.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}};yi.create=(t,e)=>new yi({innerType:t,typeName:G.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...X(e)});var vi=class extends Q{_parse(e){let{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Nn(s)?s.then(n=>({status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new ut(i.common.issues)},input:i.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ut(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}};vi.create=(t,e)=>new vi({innerType:t,typeName:G.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...X(e)});var ms=class extends Q{_parse(e){if(this._getType(e)!==L.nan){let i=this._getOrReturnCtx(e);return O(i,{code:k.invalid_type,expected:L.nan,received:i.parsedType}),K}return{status:"valid",value:e.data}}};ms.create=t=>new ms({typeName:G.ZodNaN,...X(t)});var g1=Symbol("zod_brand"),Mn=class extends Q{_parse(e){let{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}},zn=class t extends Q{_parse(e){let{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{let n=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return n.status==="aborted"?K:n.status==="dirty"?(r.dirty(),cs(n.value)):this._def.out._parseAsync({data:n.value,path:i.path,parent:i})})();{let s=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?K:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:i.path,parent:i})}}static create(e,r){return new t({in:e,out:r,typeName:G.ZodPipeline})}},wi=class extends Q{_parse(e){let r=this._def.innerType._parse(e),i=s=>(ni(s)&&(s.value=Object.freeze(s.value)),s);return Nn(r)?r.then(s=>i(s)):i(r)}unwrap(){return this._def.innerType}};wi.create=(t,e)=>new wi({innerType:t,typeName:G.ZodReadonly,...X(e)});function jg(t,e={},r){return t?Ir.create().superRefine((i,s)=>{var n,o;if(!t(i)){let a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(o=(n=a.fatal)!==null&&n!==void 0?n:r)!==null&&o!==void 0?o:!0,c=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...c,fatal:l})}}):Ir.create()}var b1={object:rt.lazycreate},G;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(G||(G={}));var y1=(t,e={message:`Input not instance of ${t.name}`})=>jg(r=>r instanceof t,e),Vg=$r.create,Bg=oi.create,v1=ms.create,w1=ai.create,qg=li.create,_1=ci.create,x1=ds.create,S1=ui.create,k1=di.create,C1=Ir.create,E1=or.create,T1=Dt.create,A1=hs.create,O1=ar.create,$1=rt.create,I1=rt.strictCreate,P1=hi.create,L1=Pa.create,R1=fi.create,D1=qt.create,N1=La.create,M1=fs.create,z1=ps.create,F1=Ra.create,U1=pi.create,j1=mi.create,V1=gi.create,B1=bi.create,q1=Pr.create,Rg=dt.create,W1=wt.create,H1=Wt.create,Z1=dt.createWithPreprocess,G1=zn.create,K1=()=>Vg().optional(),Y1=()=>Bg().optional(),J1=()=>qg().optional(),X1={string:t=>$r.create({...t,coerce:!0}),number:t=>oi.create({...t,coerce:!0}),boolean:t=>li.create({...t,coerce:!0}),bigint:t=>ai.create({...t,coerce:!0}),date:t=>ci.create({...t,coerce:!0})},Q1=K,I=Object.freeze({__proto__:null,defaultErrorMap:us,setErrorMap:ZC,getErrorMap:Oa,makeIssue:$a,EMPTY_PATH:GC,addIssueToContext:O,ParseStatus:Ze,INVALID:K,DIRTY:cs,OK:Ye,isAborted:Bu,isDirty:qu,isValid:ni,isAsync:Nn,get util(){return he},get objectUtil(){return Vu},ZodParsedType:L,getParsedType:nr,ZodType:Q,datetimeRegex:Fg,ZodString:$r,ZodNumber:oi,ZodBigInt:ai,ZodBoolean:li,ZodDate:ci,ZodSymbol:ds,ZodUndefined:ui,ZodNull:di,ZodAny:Ir,ZodUnknown:or,ZodNever:Dt,ZodVoid:hs,ZodArray:ar,ZodObject:rt,ZodUnion:hi,ZodDiscriminatedUnion:Pa,ZodIntersection:fi,ZodTuple:qt,ZodRecord:La,ZodMap:fs,ZodSet:ps,ZodFunction:Ra,ZodLazy:pi,ZodLiteral:mi,ZodEnum:gi,ZodNativeEnum:bi,ZodPromise:Pr,ZodEffects:dt,ZodTransformer:dt,ZodOptional:wt,ZodNullable:Wt,ZodDefault:yi,ZodCatch:vi,ZodNaN:ms,BRAND:g1,ZodBranded:Mn,ZodPipeline:zn,ZodReadonly:wi,custom:jg,Schema:Q,ZodSchema:Q,late:b1,get ZodFirstPartyTypeKind(){return G},coerce:X1,any:C1,array:O1,bigint:w1,boolean:qg,date:_1,discriminatedUnion:L1,effect:Rg,enum:V1,function:F1,instanceof:y1,intersection:R1,lazy:U1,literal:j1,map:M1,nan:v1,nativeEnum:B1,never:T1,null:k1,nullable:H1,number:Bg,object:$1,oboolean:J1,onumber:Y1,optional:W1,ostring:K1,pipeline:G1,preprocess:Z1,promise:q1,record:N1,set:z1,strictObject:I1,string:Vg,symbol:x1,transformer:Rg,tuple:D1,undefined:S1,union:P1,unknown:E1,void:A1,NEVER:Q1,ZodIssueCode:k,quotelessJson:HC,ZodError:ut});var Lr=class{_state;constructor(e){this._state=e}state=()=>({...this._state});setState=e=>{this._state=typeof e=="function"?e(this._state):{...this._state,...e}}};var Wg=Fn;function Fn(t){let e=t;var r={}.toString.call(t).slice(8,-1);if(r=="Set")return new Set([...t].map(s=>Fn(s)));if(r=="Map")return new Map([...t].map(s=>[Fn(s[0]),Fn(s[1])]));if(r=="Date")return new Date(t.getTime());if(r=="RegExp")return RegExp(t.source,eE(t));if(r=="Array"||r=="Object"){e=Array.isArray(t)?[]:{};for(var i in t)e[i]=Fn(t[i])}return e}function eE(t){if(typeof t.source.flags=="string")return t.source.flags;var e=[];return t.global&&e.push("g"),t.ignoreCase&&e.push("i"),t.multiline&&e.push("m"),t.sticky&&e.push("y"),t.unicode&&e.push("u"),e.join("")}function tE(t,e){return nE(t)||sE(t,e)||iE(t,e)||rE()}function rE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iE(t,e){if(t){if(typeof t=="string")return Hg(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Hg(t,e):void 0}}function Hg(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function sE(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,s,n,o,a=[],l=!0,c=!1;try{if(n=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(i=n.call(r)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,s=u}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw s}}return a}}function nE(t){if(Array.isArray(t))return t}function ht(t){let e=t._def;if(t.isNullable()&&e.typeName!=="ZodDefault")return null;switch(e.typeName){case"ZodObject":{let i={};for(let s of Object.entries(e.shape())){var r=tE(s,2);let n=r[0],o=r[1];i[n]=ht(o)}return i}case"ZodRecord":return{};case"ZodString":{if(e.checks){for(let i of e.checks)if(i.kind==="uuid")return crypto.randomUUID()}return""}case"ZodNumber":for(let i of e.checks||[])if(["min","max"].includes(i.kind))return i.value;return 0;case"ZodBigInt":return 0;case"ZodBoolean":return!1;case"ZodDate":return new Date;case"ZodLiteral":return e.value;case"ZodEffects":return ht(e.schema);case"ZodArray":return[];case"ZodTuple":return e.items.map(i=>ht(i));case"ZodSet":return new Set;case"ZodMap":return new Map;case"ZodEnum":return e.values[0];case"ZodNativeEnum":return Object.values(e.values).filter(i=>typeof e.values[i]!="number")[0];case"ZodUnion":return ht(e.options[0]);case"ZodDiscriminatedUnion":return ht(Array.from(e.options.values())[0]);case"ZodIntersection":return Object.assign(ht(e.left),ht(e.right));case"ZodFunction":return(...i)=>ht(e.returns);case"ZodLazy":return ht(e.getter());case"ZodPipeline":return ht(e.in);case"ZodDefault":return e.innerType._def.typeName==="ZodFunction"?e.defaultValue():Wg(e.defaultValue());case"ZodNaN":return Number.NaN;case"ZodNull":case"ZodAny":return null;case"ZodOptional":return ht(e.innerType);default:return}}function Na(t){for(;t instanceof I.ZodOptional||t instanceof I.ZodNullable||t instanceof I.ZodDefault||t instanceof I.ZodEffects||t instanceof I.ZodCatch||t instanceof I.ZodLazy;)t=t._def.innerType;return t}function oE(t){return Na(t)instanceof I.ZodObject}function aE(t){return Na(t)instanceof I.ZodArray}function Hu(t,e){if(t=Na(t),!oE(t))throw new Error("Not a Zod object");let r=t.shape?.[e];if(!r)throw new Error(`${e} does not exist on schema with keys: ${Object.keys(t.shape)}`);return r}function lE(t){if(t=Na(t),!aE(t))throw new Error("Not a Zod Array");return t.element}function Da(t,e){if(e==="")return t;let r=/\[\d+\]/g,i=e.search(r),s=e.indexOf("."),n=i!==-1,o=s!==-1;if(n&&o&&i<s||n&&!o){let a=e.split(r),l=a.slice(1).join("[0]");return i!==0?Da(Hu(t,a[0]),`[0]${l}`):Da(lE(t),l.charAt(0)==="."?l.slice(1):l)}if(o){let a=e.split("."),l=a.slice(1).join(".");return Da(Hu(t,a[0]),l)}return Hu(t,e)}var Zu=Da;var Gu=(t,e)=>{let i={...ht(t),...e};return console.log(i),i},Rr=(t,e)=>{let r=Gu(t,e);return t.parse(r)};var Un=(r=>(r.ALL="ALL",r.ANY="ANY",r))(Un||{}),cE=I.object({text:I.string().optional().default(""),tagKeys:I.array(I.string()).optional().default([]),indexLetter:I.string().optional().default(""),tagsMatchType:I.nativeEnum(Un).default("ALL")}),Ma=class t extends Lr{constructor(e){super(e)}static from(e){let r=Rr(cE,e);return new t(r)}setText(e){this.setState({text:e})}setIndexLetter(e){let r=e.toLocaleLowerCase()!=this.state().indexLetter?e:"";this.setState({indexLetter:r.toLocaleLowerCase()})}setTag(e,r=!0){let i=this.state().tagKeys,s=i.indexOf(e),n=r?s<0?i.concat(e):[...i.slice(0,s),...i.slice(s+1)]:[e];this.setState({tagKeys:n})}setTagsMatchType(e){this.setState({tagsMatchType:e})}isActiveIndexLetter(e){return this.state().indexLetter===e.toLocaleLowerCase()}hasTag(e){return this.state().tagKeys.includes(e)}};var za=class{config;client=new Pg;constructor(e){let{namespace:r,database:i,url:s}=e;this.config={namespace:r,database:i,url:s},Object.freeze(this.config)}async initialize(){let{url:e,namespace:r,database:i}=this.config;try{await this.client.connect(e,{namespace:r,database:i})}catch(s){throw console.error("Failed to connect to SurrealDB:",s instanceof Error?s.message:String(s)),await this.client.close(),s}}async authenticate(e,r){let i=!1;try{i=await this.client.authenticate(e)}catch(s){r||console.error(s.message)}return i}async getListings(e){let r="",i=[];if(e?.indexLetter&&i.push(`string::starts_with(string::lowercase(title), '${e.indexLetter.toLocaleLowerCase()}')`),e?.tagKeys?.length){let o=e.tagKeys.map(a=>a).join("', '");e.tagsMatchType==="ALL"?i.push(`array::len(array::intersect(tags.key, ['${o}'])) = ${e.tagKeys.length}`):i.push(`tags[WHERE key IN ['${o}']];`)}i.length&&(r=` WHERE ${i.join(" AND ")}`);let s=`SELECT *, tags.*.* FROM listings${r};`;return console.log({query:s}),gs(await this.client.query(s)).map(jn)}async getIndexLetters(){return gs(await this.client.query("SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM listings GROUP BY letter;"))}async getTags(){let e=`
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;return console.log({query:e}),gs(await this.client.query(e)).map(jn)}async getUserData(){let e="SELECT * FROM users;";console.log({query:e});let r=gs(await this.client.query(e),2);return jn(r)}async getListingsByEmail(e){let r=`SELECT * FROM listings WHERE owner.email = '${e}';`;return console.log({query:r}),gs(await this.client.query(r),2).map(jn)}async createListing(e){let r=";";return console.log({query:r}),gs(await this.client.query(r),2).map(jn)}},gs=(t,e=1)=>{let r=t;for(;e>0&&Array.isArray(r)&&r.length===1;)r=r[0],e--;return r},jn=t=>t.id!==void 0?{...t,id:`${t.id.tb}:${t.id.id}`}:t;var Zg=async t=>{let e=new za(t);return await e.initialize(),e};var uE=xo(Kg()),_i=async(t=0,e)=>new Promise(r=>setTimeout(()=>r(e?e():void 0),t)),Vn=t=>JSON.parse(JSON.stringify(t)),lr=(...t)=>t.flatMap(e=>e).map((e,r)=>typeof e=="number"?`[${e}]`:r===0?e:`.${e}`).join(""),Bn=t=>t.split(/\.|\[(\d+)\]/).filter(Boolean).map(e=>e.match(/^\d+$/)?Number(e):e),Yg=t=>t===null||typeof t!="object"&&typeof t!="function";var Fa=class{configsUrl;constructor(e){this.configsUrl=e}async loadConfigs(){return console.log({configsUrl:this.configsUrl}),await _i(),{auth0:{domain:"intergate.eu.auth0.com",clientId:"d63m36lvjcGcQZoYjF06IIgczFdIHGqN",authorizationParams:{audience:"https://surrealdb.com/",redirect_uri:window.location.origin}},surreal:{namespace:"intergate",database:"gul-info",url:"https://127.0.0.1:7999/rpc"}}}};var Jg=async t=>await new Fa(t).loadConfigs();var Xg=Bi(),Qg=t=>{let e=async()=>{let i=await Jg("https://intergate.io/configs/gul-info-hurdal"),s=await Zg(i.surreal);return{configs:i,db:s}},[r]=et(e);return D(He,{get when(){return r()},get children(){return D(Xg.Provider,{get value(){return r()},get children(){return t.children}})}})},eb=()=>{let t=Jr(Xg);if(!t)throw new Error("useSystem must be used within an CoreProvider");return t};function Ht(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]])}return r}var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ud(t,e){return t(e={exports:{}},e.exports),e.exports}var xi=ud(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function i(){var s=this;this.locked=new Map,this.addToLocked=function(n,o){var a=s.locked.get(n);a===void 0?o===void 0?s.locked.set(n,[]):s.locked.set(n,[o]):o!==void 0&&(a.unshift(o),s.locked.set(n,a))},this.isLocked=function(n){return s.locked.has(n)},this.lock=function(n){return new Promise(function(o,a){s.isLocked(n)?s.addToLocked(n,o):(s.addToLocked(n),o())})},this.unlock=function(n){var o=s.locked.get(n);if(o!==void 0&&o.length!==0){var a=o.pop();s.locked.set(n,o),a!==void 0&&setTimeout(a,0)}else s.locked.delete(n)}}return i.getInstance=function(){return i.instance===void 0&&(i.instance=new i),i.instance},i}();e.default=function(){return r.getInstance()}});cd(xi);var dE=cd(ud(function(t,e){var r=Si&&Si.__awaiter||function(u,d,p,f){return new(p||(p=Promise))(function(m,_){function y(w){try{x(f.next(w))}catch(b){_(b)}}function v(w){try{x(f.throw(w))}catch(b){_(b)}}function x(w){w.done?m(w.value):new p(function(b){b(w.value)}).then(y,v)}x((f=f.apply(u,d||[])).next())})},i=Si&&Si.__generator||function(u,d){var p,f,m,_,y={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return _={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function v(x){return function(w){return function(b){if(p)throw new TypeError("Generator is already executing.");for(;y;)try{if(p=1,f&&(m=2&b[0]?f.return:b[0]?f.throw||((m=f.return)&&m.call(f),0):f.next)&&!(m=m.call(f,b[1])).done)return m;switch(f=0,m&&(b=[2&b[0],m.value]),b[0]){case 0:case 1:m=b;break;case 4:return y.label++,{value:b[1],done:!1};case 5:y.label++,f=b[1],b=[0];continue;case 7:b=y.ops.pop(),y.trys.pop();continue;default:if(m=y.trys,!((m=m.length>0&&m[m.length-1])||b[0]!==6&&b[0]!==2)){y=0;continue}if(b[0]===3&&(!m||b[1]>m[0]&&b[1]<m[3])){y.label=b[1];break}if(b[0]===6&&y.label<m[1]){y.label=m[1],m=b;break}if(m&&y.label<m[2]){y.label=m[2],y.ops.push(b);break}m[2]&&y.ops.pop(),y.trys.pop();continue}b=d.call(u,y)}catch(S){b=[6,S],f=0}finally{p=m=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([x,w])}}},s=Si;Object.defineProperty(e,"__esModule",{value:!0});var n="browser-tabs-lock-key",o={key:function(u){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},getItem:function(u){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},clear:function(){return r(s,void 0,void 0,function(){return i(this,function(u){return[2,window.localStorage.clear()]})})},removeItem:function(u){return r(s,void 0,void 0,function(){return i(this,function(d){throw new Error("Unsupported")})})},setItem:function(u,d){return r(s,void 0,void 0,function(){return i(this,function(p){throw new Error("Unsupported")})})},keySync:function(u){return window.localStorage.key(u)},getItemSync:function(u){return window.localStorage.getItem(u)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(u){return window.localStorage.removeItem(u)},setItemSync:function(u,d){return window.localStorage.setItem(u,d)}};function a(u){return new Promise(function(d){return setTimeout(d,u)})}function l(u){for(var d="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",p="",f=0;f<u;f++)p+=d[Math.floor(Math.random()*d.length)];return p}var c=function(){function u(d){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=d,u.waiters===void 0&&(u.waiters=[])}return u.prototype.acquireLock=function(d,p){return p===void 0&&(p=5e3),r(this,void 0,void 0,function(){var f,m,_,y,v,x,w;return i(this,function(b){switch(b.label){case 0:f=Date.now()+l(4),m=Date.now()+p,_=n+"-"+d,y=this.storageHandler===void 0?o:this.storageHandler,b.label=1;case 1:return Date.now()<m?[4,a(30)]:[3,8];case 2:return b.sent(),y.getItemSync(_)!==null?[3,5]:(v=this.id+"-"+d+"-"+f,[4,a(Math.floor(25*Math.random()))]);case 3:return b.sent(),y.setItemSync(_,JSON.stringify({id:this.id,iat:f,timeoutKey:v,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return b.sent(),(x=y.getItemSync(_))!==null&&(w=JSON.parse(x)).id===this.id&&w.iat===f?(this.acquiredIatSet.add(f),this.refreshLockWhileAcquired(_,f),[2,!0]):[3,7];case 5:return u.lockCorrector(this.storageHandler===void 0?o:this.storageHandler),[4,this.waitForSomethingToChange(m)];case 6:b.sent(),b.label=7;case 7:return f=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},u.prototype.refreshLockWhileAcquired=function(d,p){return r(this,void 0,void 0,function(){var f=this;return i(this,function(m){return setTimeout(function(){return r(f,void 0,void 0,function(){var _,y,v;return i(this,function(x){switch(x.label){case 0:return[4,xi.default().lock(p)];case 1:return x.sent(),this.acquiredIatSet.has(p)?(_=this.storageHandler===void 0?o:this.storageHandler,(y=_.getItemSync(d))===null?(xi.default().unlock(p),[2]):((v=JSON.parse(y)).timeRefreshed=Date.now(),_.setItemSync(d,JSON.stringify(v)),xi.default().unlock(p),this.refreshLockWhileAcquired(d,p),[2])):(xi.default().unlock(p),[2])}})})},1e3),[2]})})},u.prototype.waitForSomethingToChange=function(d){return r(this,void 0,void 0,function(){return i(this,function(p){switch(p.label){case 0:return[4,new Promise(function(f){var m=!1,_=Date.now(),y=!1;function v(){if(y||(window.removeEventListener("storage",v),u.removeFromWaiting(v),clearTimeout(x),y=!0),!m){m=!0;var w=50-(Date.now()-_);w>0?setTimeout(f,w):f(null)}}window.addEventListener("storage",v),u.addToWaiting(v);var x=setTimeout(v,Math.max(0,d-Date.now()))})];case 1:return p.sent(),[2]}})})},u.addToWaiting=function(d){this.removeFromWaiting(d),u.waiters!==void 0&&u.waiters.push(d)},u.removeFromWaiting=function(d){u.waiters!==void 0&&(u.waiters=u.waiters.filter(function(p){return p!==d}))},u.notifyWaiters=function(){u.waiters!==void 0&&u.waiters.slice().forEach(function(d){return d()})},u.prototype.releaseLock=function(d){return r(this,void 0,void 0,function(){return i(this,function(p){switch(p.label){case 0:return[4,this.releaseLock__private__(d)];case 1:return[2,p.sent()]}})})},u.prototype.releaseLock__private__=function(d){return r(this,void 0,void 0,function(){var p,f,m,_;return i(this,function(y){switch(y.label){case 0:return p=this.storageHandler===void 0?o:this.storageHandler,f=n+"-"+d,(m=p.getItemSync(f))===null?[2]:(_=JSON.parse(m)).id!==this.id?[3,2]:[4,xi.default().lock(_.iat)];case 1:y.sent(),this.acquiredIatSet.delete(_.iat),p.removeItemSync(f),xi.default().unlock(_.iat),u.notifyWaiters(),y.label=2;case 2:return[2]}})})},u.lockCorrector=function(d){for(var p=Date.now()-5e3,f=d,m=[],_=0;;){var y=f.keySync(_);if(y===null)break;m.push(y),_++}for(var v=!1,x=0;x<m.length;x++){var w=m[x];if(w.includes(n)){var b=f.getItemSync(w);if(b!==null){var S=JSON.parse(b);(S.timeRefreshed===void 0&&S.timeAcquired<p||S.timeRefreshed!==void 0&&S.timeRefreshed<p)&&(f.removeItemSync(w),v=!0)}}}v&&u.notifyWaiters()},u.waiters=void 0,u}();e.default=c})),hE={timeoutInSeconds:60},cb={name:"auth0-spa-js",version:"2.1.3"},ub=()=>Date.now(),Je=class t extends Error{constructor(e,r){super(r),this.error=e,this.error_description=r,Object.setPrototypeOf(this,t.prototype)}static fromPayload({error:e,error_description:r}){return new t(e,r)}},Qu=class t extends Je{constructor(e,r,i,s=null){super(e,r),this.state=i,this.appState=s,Object.setPrototypeOf(this,t.prototype)}},Wn=class t extends Je{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,t.prototype)}},ed=class t extends Wn{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},td=class t extends Je{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,t.prototype)}},rd=class t extends Je{constructor(e,r,i){super(e,r),this.mfa_token=i,Object.setPrototypeOf(this,t.prototype)}},Va=class t extends Je{constructor(e,r){super("missing_refresh_token",`Missing Refresh Token (audience: '${tb(e,["default"])}', scope: '${tb(r)}')`),this.audience=e,this.scope=r,Object.setPrototypeOf(this,t.prototype)}};function tb(t,e=[]){return t&&!e.includes(t)?t:""}var ja=()=>window.crypto,Ku=()=>{let t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",e="";return Array.from(ja().getRandomValues(new Uint8Array(43))).forEach(r=>e+=t[r%t.length]),e},rb=t=>btoa(t),id=t=>{var{clientId:e}=t,r=Ht(t,["clientId"]);return new URLSearchParams((i=>Object.keys(i).filter(s=>i[s]!==void 0).reduce((s,n)=>Object.assign(Object.assign({},s),{[n]:i[n]}),{}))(Object.assign({client_id:e},r))).toString()},ib=t=>(e=>decodeURIComponent(atob(e).split("").map(r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g,"/").replace(/-/g,"+")),fE=async(t,e)=>{let r=await fetch(t,e);return{ok:r.ok,json:await r.json()}},pE=async(t,e,r)=>{let i=new AbortController,s;return e.signal=i.signal,Promise.race([fE(t,e),new Promise((n,o)=>{s=setTimeout(()=>{i.abort(),o(new Error("Timeout when executing 'fetch'"))},r)})]).finally(()=>{clearTimeout(s)})},mE=async(t,e,r,i,s,n,o)=>{return a={auth:{audience:e,scope:r},timeout:s,fetchUrl:t,fetchOptions:i,useFormData:o},l=n,new Promise(function(c,u){let d=new MessageChannel;d.port1.onmessage=function(p){p.data.error?u(new Error(p.data.error)):c(p.data),d.port1.close()},l.postMessage(a,[d.port2])});var a,l},gE=async(t,e,r,i,s,n,o=1e4)=>s?mE(t,e,r,i,o,s,n):pE(t,i,o);async function bE(t,e){var{baseUrl:r,timeout:i,audience:s,scope:n,auth0Client:o,useFormData:a}=t,l=Ht(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);let c=a?id(l):JSON.stringify(l);return await async function(u,d,p,f,m,_,y){let v,x=null;for(let U=0;U<3;U++)try{v=await gE(u,p,f,m,_,y,d),x=null;break}catch(le){x=le}if(x)throw x;let w=v.json,{error:b,error_description:S}=w,z=Ht(w,["error","error_description"]),{ok:R}=v;if(!R){let U=S||`HTTP error. Unable to fetch ${u}`;throw b==="mfa_required"?new rd(b,U,z.mfa_token):b==="missing_refresh_token"?new Va(p,f):new Je(b||"request_error",U)}return z}(`${r}/oauth/token`,i,s||"default",n,{method:"POST",body:c,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(o||cb))}},e,a)}var Ua=(...t)=>{return(e=t.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ");var e},cr=class t{constructor(e,r="@@auth0spajs@@",i){this.prefix=r,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){let[r,i,s,n]=e.split("::");return new t({clientId:i,scope:n,audience:s},r)}static fromCacheEntry(e){let{scope:r,audience:i,client_id:s}=e;return new t({scope:r,audience:i,clientId:s})}},sd=class{set(e,r){localStorage.setItem(e,JSON.stringify(r))}get(e){let r=window.localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch{return}}remove(e){localStorage.removeItem(e)}allKeys(){return Object.keys(window.localStorage).filter(e=>e.startsWith("@@auth0spajs@@"))}},Ba=class{constructor(){this.enclosedCache=function(){let e={};return{set(r,i){e[r]=i},get(r){let i=e[r];if(i)return i},remove(r){delete e[r]},allKeys:()=>Object.keys(e)}}()}},nd=class{constructor(e,r,i){this.cache=e,this.keyManifest=r,this.nowProvider=i||ub}async setIdToken(e,r,i){var s;let n=this.getIdTokenCacheKey(e);await this.cache.set(n,{id_token:r,decodedToken:i}),await((s=this.keyManifest)===null||s===void 0?void 0:s.add(n))}async getIdToken(e){let r=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!r&&e.scope&&e.audience){let i=await this.get(e);return!i||!i.id_token||!i.decodedToken?void 0:{id_token:i.id_token,decodedToken:i.decodedToken}}if(r)return{id_token:r.id_token,decodedToken:r.decodedToken}}async get(e,r=0){var i;let s=await this.cache.get(e.toKey());if(!s){let a=await this.getCacheKeys();if(!a)return;let l=this.matchExistingCacheKey(e,a);l&&(s=await this.cache.get(l))}if(!s)return;let n=await this.nowProvider(),o=Math.floor(n/1e3);return s.expiresAt-r<o?s.body.refresh_token?(s.body={refresh_token:s.body.refresh_token},await this.cache.set(e.toKey(),s),s.body):(await this.cache.remove(e.toKey()),void await((i=this.keyManifest)===null||i===void 0?void 0:i.remove(e.toKey()))):s.body}async set(e){var r;let i=new cr({clientId:e.client_id,scope:e.scope,audience:e.audience}),s=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),s),await((r=this.keyManifest)===null||r===void 0?void 0:r.add(i.toKey()))}async clear(e){var r;let i=await this.getCacheKeys();i&&(await i.filter(s=>!e||s.includes(e)).reduce(async(s,n)=>{await s,await this.cache.remove(n)},Promise.resolve()),await((r=this.keyManifest)===null||r===void 0?void 0:r.clear()))}async wrapCacheEntry(e){let r=await this.nowProvider();return{body:e,expiresAt:Math.floor(r/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?(e=await this.keyManifest.get())===null||e===void 0?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new cr({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,r){return r.filter(i=>{var s;let n=cr.fromKey(i),o=new Set(n.scope&&n.scope.split(" ")),a=((s=e.scope)===null||s===void 0?void 0:s.split(" "))||[],l=n.scope&&a.reduce((c,u)=>c&&o.has(u),!0);return n.prefix==="@@auth0spajs@@"&&n.clientId===e.clientId&&n.audience===e.audience&&l})[0]}},od=class{constructor(e,r,i){this.storage=e,this.clientId=r,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}},qn=t=>typeof t=="number",yE=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],vE=t=>{if(!t.id_token)throw new Error("ID token is required but missing");let e=(n=>{let o=n.split("."),[a,l,c]=o;if(o.length!==3||!a||!l||!c)throw new Error("ID token could not be decoded");let u=JSON.parse(ib(l)),d={__raw:n},p={};return Object.keys(u).forEach(f=>{d[f]=u[f],yE.includes(f)||(p[f]=u[f])}),{encoded:{header:a,payload:l,signature:c},header:JSON.parse(ib(a)),claims:d,user:p}})(t.id_token);if(!e.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(e.claims.iss!==t.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);if(!e.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(e.header.alg!=="RS256")throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!e.claims.aud||typeof e.claims.aud!="string"&&!Array.isArray(e.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(e.claims.aud)){if(!e.claims.aud.includes(t.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);if(e.claims.aud.length>1){if(!e.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(e.claims.azp!==t.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)}}else if(e.claims.aud!==t.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);if(t.nonce){if(!e.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(e.claims.nonce!==t.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)}if(t.max_age&&!qn(e.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(e.claims.exp==null||!qn(e.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!qn(e.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");let r=t.leeway||60,i=new Date(t.now||Date.now()),s=new Date(0);if(s.setUTCSeconds(e.claims.exp+r),i>s)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${s})`);if(e.claims.nbf!=null&&qn(e.claims.nbf)){let n=new Date(0);if(n.setUTCSeconds(e.claims.nbf-r),i<n)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${n}`)}if(e.claims.auth_time!=null&&qn(e.claims.auth_time)){let n=new Date(0);if(n.setUTCSeconds(parseInt(e.claims.auth_time)+t.max_age+r),i>n)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${n}`)}if(t.organization){let n=t.organization.trim();if(n.startsWith("org_")){let o=n;if(!e.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(o!==e.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_id}"`)}else{let o=n.toLowerCase();if(!e.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(o!==e.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_name}"`)}}return e},ki=ud(function(t,e){var r=Si&&Si.__assign||function(){return r=Object.assign||function(l){for(var c,u=1,d=arguments.length;u<d;u++)for(var p in c=arguments[u])Object.prototype.hasOwnProperty.call(c,p)&&(l[p]=c[p]);return l},r.apply(this,arguments)};function i(l,c){if(!c)return"";var u="; "+l;return c===!0?u:u+"="+c}function s(l,c,u){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(c).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(d){if(typeof d.expires=="number"){var p=new Date;p.setMilliseconds(p.getMilliseconds()+864e5*d.expires),d.expires=p}return i("Expires",d.expires?d.expires.toUTCString():"")+i("Domain",d.domain)+i("Path",d.path)+i("Secure",d.secure)+i("SameSite",d.sameSite)}(u)}function n(l){for(var c={},u=l?l.split("; "):[],d=/(%[\dA-F]{2})+/gi,p=0;p<u.length;p++){var f=u[p].split("="),m=f.slice(1).join("=");m.charAt(0)==='"'&&(m=m.slice(1,-1));try{c[f[0].replace(d,decodeURIComponent)]=m.replace(d,decodeURIComponent)}catch{}}return c}function o(){return n(document.cookie)}function a(l,c,u){document.cookie=s(l,c,r({path:"/"},u))}e.__esModule=!0,e.encode=s,e.parse=n,e.getAll=o,e.get=function(l){return o()[l]},e.set=a,e.remove=function(l,c){a(l,"",r(r({},c),{expires:-1}))}});cd(ki),ki.encode,ki.parse,ki.getAll;var wE=ki.get,db=ki.set,hb=ki.remove,bs={get(t){let e=wE(t);if(e!==void 0)return JSON.parse(e)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0,sameSite:"none"}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),db(t,JSON.stringify(e),i)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),hb(t,r)}},_E={get(t){return bs.get(t)||bs.get(`_legacy_${t}`)},save(t,e,r){let i={};window.location.protocol==="https:"&&(i={secure:!0}),r?.daysUntilExpire&&(i.expires=r.daysUntilExpire),r?.cookieDomain&&(i.domain=r.cookieDomain),db(`_legacy_${t}`,JSON.stringify(e),i),bs.save(t,e,r)},remove(t,e){let r={};e?.cookieDomain&&(r.domain=e.cookieDomain),hb(t,r),bs.remove(t,e),bs.remove(`_legacy_${t}`,e)}},xE={get(t){if(typeof sessionStorage>"u")return;let e=sessionStorage.getItem(t);return e!=null?JSON.parse(e):void 0},save(t,e){sessionStorage.setItem(t,JSON.stringify(e))},remove(t){sessionStorage.removeItem(t)}};function SE(t,e,r){var i=e===void 0?null:e,s=function(l,c){var u=atob(l);if(c){for(var d=new Uint8Array(u.length),p=0,f=u.length;p<f;++p)d[p]=u.charCodeAt(p);return String.fromCharCode.apply(null,new Uint16Array(d.buffer))}return u}(t,r!==void 0&&r),n=s.indexOf(`
`,10)+1,o=s.substring(n)+(i?"//# sourceMappingURL="+i:""),a=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(a)}var sb,nb,ob,Yu,kE=(sb="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",nb=null,ob=!1,function(t){return Yu=Yu||SE(sb,nb,ob),new Worker(Yu,t)}),Ju={},ad=class{constructor(e,r){this.cache=e,this.clientId=r,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(e){var r;let i=new Set(((r=await this.cache.get(this.manifestKey))===null||r===void 0?void 0:r.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]})}async remove(e){let r=await this.cache.get(this.manifestKey);if(r){let i=new Set(r.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return`@@auth0spajs@@::${e}`}},CE={memory:()=>new Ba().enclosedCache,localstorage:()=>new sd},ab=t=>CE[t],lb=t=>{let{openUrl:e,onRedirect:r}=t,i=Ht(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},i),{openUrl:e===!1||e?e:r})},Xu=new dE,ld=class{constructor(e){let r,i;if(this.userCache=new Ba().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await Xu.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),typeof window<"u"&&(()=>{if(!ja())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(ja().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(r=e.cacheLocation||"memory",!ab(r))throw new Error(`Invalid cache location "${r}"`);i=ab(r)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=e.legacySameSiteCookie===!1?bs:_E,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(o=>`auth0.${o}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;let s=e.useCookiesForTransactions?this.cookieStorage:xE;var n;this.scope=Ua("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new od(s,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||ub,this.cacheManager=new nd(i,i.allKeys?void 0:new ad(i,this.options.clientId),this.nowProvider),this.domainUrl=(n=this.options.domain,/^https?:\/\//.test(n)?n:`https://${n}`),this.tokenIssuer=((o,a)=>o?o.startsWith("https://")?o:`https://${o}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&r==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new kE)}_url(e){let r=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||cb)));return`${this.domainUrl}${e}&auth0Client=${r}`}_authorizeUrl(e){return this._url(`/authorize?${id(e)}`)}async _verifyIdToken(e,r,i){let s=await this.nowProvider();return vE({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:r,organization:i,leeway:this.options.leeway,max_age:(n=this.options.authorizationParams.max_age,typeof n!="string"?n:parseInt(n,10)||void 0),now:s});var n}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(e,r,i){let s=rb(Ku()),n=rb(Ku()),o=Ku(),a=(u=>{let d=new Uint8Array(u);return(p=>{let f={"+":"-","/":"_","=":""};return p.replace(/[+/=]/g,m=>f[m])})(window.btoa(String.fromCharCode(...Array.from(d))))})(await(async u=>await ja().subtle.digest({name:"SHA-256"},new TextEncoder().encode(u)))(o)),l=((u,d,p,f,m,_,y,v)=>Object.assign(Object.assign(Object.assign({client_id:u.clientId},u.authorizationParams),p),{scope:Ua(d,p.scope),response_type:"code",response_mode:v||"query",state:f,nonce:m,redirect_uri:y||u.authorizationParams.redirect_uri,code_challenge:_,code_challenge_method:"S256"}))(this.options,this.scope,e,s,n,a,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,r?.response_mode),c=this._authorizeUrl(l);return{nonce:n,code_verifier:o,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:s,url:c}}async loginWithPopup(e,r){var i;if(e=e||{},!(r=r||{}).popup&&(r.popup=(a=>{let l=window.screenX+(window.innerWidth-400)/2,c=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!r.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");let s=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);r.popup.location.href=s.url;let n=await(a=>new Promise((l,c)=>{let u,d=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(d),clearTimeout(p),window.removeEventListener("message",u,!1),c(new td(a.popup)))},1e3),p=setTimeout(()=>{clearInterval(d),c(new ed(a.popup)),window.removeEventListener("message",u,!1)},1e3*(a.timeoutInSeconds||60));u=function(f){if(f.data&&f.data.type==="authorization_response"){if(clearTimeout(p),clearInterval(d),window.removeEventListener("message",u,!1),a.popup.close(),f.data.response.error)return c(Je.fromPayload(f.data.response));l(f.data.response)}},window.addEventListener("message",u)}))(Object.assign(Object.assign({},r),{timeoutInSeconds:r.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(s.state!==n.state)throw new Je("state_mismatch","Invalid state");let o=((i=e.authorizationParams)===null||i===void 0?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:s.audience,scope:s.scope,code_verifier:s.code_verifier,grant_type:"authorization_code",code:n.code,redirect_uri:s.redirect_uri},{nonceIn:s.nonce,organization:o})}async getUser(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.user}async getIdTokenClaims(){var e;let r=await this._getIdTokenFromCache();return(e=r?.decodedToken)===null||e===void 0?void 0:e.claims}async loginWithRedirect(e={}){var r;let i=lb(e),{openUrl:s,fragment:n,appState:o}=i,a=Ht(i,["openUrl","fragment","appState"]),l=((r=a.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization,c=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:u}=c,d=Ht(c,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},d),{appState:o}),l&&{organization:l}));let p=n?`${u}#${n}`:u;s?await s(p):window.location.assign(p)}async handleRedirectCallback(e=window.location.href){let r=e.split("?").slice(1);if(r.length===0)throw new Error("There are no query params available for parsing.");let{state:i,code:s,error:n,error_description:o}=(d=>{d.indexOf("#")>-1&&(d=d.substring(0,d.indexOf("#")));let p=new URLSearchParams(d);return{state:p.get("state"),code:p.get("code")||void 0,error:p.get("error")||void 0,error_description:p.get("error_description")||void 0}})(r.join("")),a=this.transactionManager.get();if(!a)throw new Je("missing_transaction","Invalid state");if(this.transactionManager.remove(),n)throw new Qu(n,o||n,i,a.appState);if(!a.code_verifier||a.state&&a.state!==i)throw new Je("state_mismatch","Invalid state");let l=a.organization,c=a.nonce,u=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:s},u?{redirect_uri:u}:{}),{nonceIn:c,organization:l}),{appState:a.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(e)}catch{}}async getTokenSilently(e={}){var r;let i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:Ua(this.scope,(r=e.authorizationParams)===null||r===void 0?void 0:r.scope)})}),s=await((n,o)=>{let a=Ju[o];return a||(a=n().finally(()=>{delete Ju[o],a=null}),Ju[o]=a),a})(()=>this._getTokenSilently(i),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?s:s?.access_token}async _getTokenSilently(e){let{cacheMode:r}=e,i=Ht(e,["cacheMode"]);if(r!=="off"){let s=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(s)return s}if(r!=="cache-only"){if(!await(async(s,n=3)=>{for(let o=0;o<n;o++)if(await s())return!0;return!1})(()=>Xu.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new Wn;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),r!=="off"){let c=await this._getEntryFromCache({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId});if(c)return c}let s=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(i):await this._getTokenFromIFrame(i),{id_token:n,access_token:o,oauthTokenScope:a,expires_in:l}=s;return Object.assign(Object.assign({id_token:n,access_token:o},a?{scope:a}:null),{expires_in:l})}finally{await Xu.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(e={},r={}){var i;let s=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:Ua(this.scope,(i=e.authorizationParams)===null||i===void 0?void 0:i.scope)})});return r=Object.assign(Object.assign({},hE),r),await this.loginWithPopup(s,r),(await this.cacheManager.get(new cr({scope:s.authorizationParams.scope,audience:s.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(e){e.clientId!==null?e.clientId=e.clientId||this.options.clientId:delete e.clientId;let r=e.logoutParams||{},{federated:i}=r,s=Ht(r,["federated"]),n=i?"&federated":"";return this._url(`/v2/logout?${id(Object.assign({clientId:e.clientId},s))}`)+n}async logout(e={}){let r=lb(e),{openUrl:i}=r,s=Ht(r,["openUrl"]);e.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(e.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");let n=this._buildLogoutUrl(s);i?await i(n):i!==!1&&window.location.assign(n)}async _getTokenFromIFrame(e){let r=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!r.organization&&(r.organization=i);let{url:s,state:n,nonce:o,code_verifier:a,redirect_uri:l,scope:c,audience:u}=await this._prepareAuthorizeUrl(r,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new Je("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");let d=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,p=await((m,_,y=60)=>new Promise((v,x)=>{let w=window.document.createElement("iframe");w.setAttribute("width","0"),w.setAttribute("height","0"),w.style.display="none";let b=()=>{window.document.body.contains(w)&&(window.document.body.removeChild(w),window.removeEventListener("message",S,!1))},S,z=setTimeout(()=>{x(new Wn),b()},1e3*y);S=function(R){if(R.origin!=_||!R.data||R.data.type!=="authorization_response")return;let U=R.source;U&&U.close(),R.data.response.error?x(Je.fromPayload(R.data.response)):v(R.data.response),clearTimeout(z),window.removeEventListener("message",S,!1),setTimeout(b,2e3)},window.addEventListener("message",S,!1),window.document.body.appendChild(w),w.setAttribute("src",m)}))(s,this.domainUrl,d);if(n!==p.state)throw new Je("state_mismatch","Invalid state");let f=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:a,code:p.code,grant_type:"authorization_code",redirect_uri:l,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:o,organization:r.organization});return Object.assign(Object.assign({},f),{scope:c,oauthTokenScope:f.scope,audience:u})}catch(d){throw d.error==="login_required"&&this.logout({openUrl:!1}),d}}async _getTokenUsingRefreshToken(e){let r=await this.cacheManager.get(new cr({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(r&&r.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new Va(e.authorizationParams.audience||"default",e.authorizationParams.scope)}let i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,s=typeof e.timeoutInSeconds=="number"?1e3*e.timeoutInSeconds:null;try{let n=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:r&&r.refresh_token,redirect_uri:i}),s&&{timeout:s}));return Object.assign(Object.assign({},n),{scope:e.authorizationParams.scope,oauthTokenScope:n.scope,audience:e.authorizationParams.audience||"default"})}catch(n){if((n.message.indexOf("Missing Refresh Token")>-1||n.message&&n.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw n}}async _saveEntryInCache(e){let{id_token:r,decodedToken:i}=e,s=Ht(e,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:r,decodedToken:i}),await this.cacheManager.setIdToken(this.options.clientId,e.id_token,e.decodedToken),await this.cacheManager.set(s)}async _getIdTokenFromCache(){let e=this.options.authorizationParams.audience||"default",r=await this.cacheManager.getIdToken(new cr({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return r&&r.id_token===i?.id_token?i:(this.userCache.set("@@user@@",r),r)}async _getEntryFromCache({scope:e,audience:r,clientId:i}){let s=await this.cacheManager.get(new cr({scope:e,audience:r,clientId:i}),60);if(s&&s.access_token){let{access_token:n,oauthTokenScope:o,expires_in:a}=s,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:n},o?{scope:o}:null),{expires_in:a})}}async _requestToken(e,r){let{nonceIn:i,organization:s}=r||{},n=await bE(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),o=await this._verifyIdToken(n.id_token,i,s);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},n),{decodedToken:o,scope:e.scope,audience:e.audience||"default"}),n.scope?{oauthTokenScope:n.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(s||o.claims.org_id),Object.assign(Object.assign({},n),{decodedToken:o})}};async function fb(t){let e=new ld(t);return await e.checkSession(),e}var qa=class{config;client;constructor(e){this.config=e,Object.freeze(this.config)}async initialize(){let{domain:e,clientId:r,authorizationParams:i}=this.config;if(this.client=await fb({domain:e,clientId:r,authorizationParams:i}),window.location.search.includes("code=")||window.location.search.includes("error=")){try{let s=await this.client.handleRedirectCallback();console.log({result:s})}catch(s){let{error:n,error_description:o}=s;console.error("Error handling redirect callback:",{error:n,error_description:o})}window.history.replaceState({},document.title,window.location.pathname)}}async login(){return console.log("login"),await this.client.loginWithRedirect()}async logout(){this.client.logout({openUrl(e){window.location.replace(e)}})}async isAuthenticated(){return await this.client.isAuthenticated()}async getAuthData(){return await this.client.isAuthenticated()?await this.client.getIdTokenClaims():void 0}async getAccessToken(){return await this.client.getTokenSilently()}};var pb=async(t,e)=>{let r=new qa(e);return await r.initialize(),r};var Wa=t=>{if(!(t instanceof Lr))throw new Error("Passed instance must extend `_State`");let[e,r]=Se(t.state()),i=t.setState.bind(t);return new Proxy(t,{get(n,o){return o==="state"?e:o==="setState"&&typeof i=="function"?a=>{i(a),r(t.state())}:n[o]},set(n,o,a){if(o==="state"||o==="setState")throw new Error(`Cannot overwrite ${String(o)}.`);return n[o]=a,!0}})};function xt(t){return function(e){let r=Object.keys(t.shape);return class extends e{constructor(...i){super(...i),r.forEach(s=>{Object.defineProperty(this,s,{get(){return this.data[s]}})})}}}}var Ha=I.object({key:I.string(),name:I.string(),usageCount:I.number()}),Dr=class{data;constructor(e){this.data=e}static from(e){let r=Ha.parse(e);return new Dr(r)}};Dr=mt([xt(Ha)],Dr);var mb=I.object({title:I.string(),description:I.string(),address:I.string(),zip:I.string(),muncipiality:I.string(),phone:I.string(),email:I.string().email(),links:I.array(I.object({href:I.string()})),tags:I.array(Ha.omit({usageCount:!0}))}),Nr=class{data;constructor(e){this.data=e}static from(e){let r=Rr(mb,e);return new Nr(r)}};Nr=mt([xt(mb)],Nr);var gb=I.object({letter:I.string().length(1),count:I.number()}),Mr=class{data;constructor(e){this.data=e}static from(e){let r=gb.parse(e);return new Mr(r)}};Mr=mt([xt(gb)],Mr);var Za=class{db;constructor(e){this.db=e}async loadIndexLetters(){return(await this.db.getIndexLetters()).sort((i,s)=>i.letter<s.letter?-1:1).map(i=>Mr.from(i))}async loadTags(){return(await this.db.getTags()).filter(({usageCount:i})=>i).sort((i,s)=>i.name<s.name?-1:1).map(i=>Dr.from(i))}async loadListings(e){return await _i(),(await this.db.getListings(e)).sort((s,n)=>s.title<n.title?-1:1).map(s=>Nr.from(s))}};var Ga=t=>t;var bb=async t=>{let e=Wa(Ma.from({tagsMatchType:"ANY"})),r=new Za(t),[i]=et(()=>r.loadTags()),[s]=et(()=>r.loadIndexLetters()),[n]=et(()=>e.state()?e.state():!1,a=>r.loadListings(a));return Ga({resources:{tags:i,indexLetters:s,listings:n},filters:()=>e})};var dd=I.object({href:I.string().url()}),vs=I.object({id:I.any(),owner:I.any(),title:I.string(),description:I.string(),address:I.string(),zip:I.string(),muncipiality:I.string(),phone:I.string(),email:I.string(),tags:I.array(I.any()),links:I.array(dd)}),ys=class t extends Lr{constructor(e){super(e)}static from(e){let r=Rr(vs,e);return new t(r)}};var yb=I.object({id:I.any(),name:I.string(),email:I.string().email()}),zr=class{data;constructor(e){this.data=e}static from(e){let r=yb.parse(e);return new zr(r)}};zr=mt([xt(yb)],zr);var Ka=class{db;constructor(e){this.db=e}async getUser(e){await _i(),await this.db.authenticate(e,!0);let r=await this.db.getUserData();return zr.from(r)}async loadListingsByEmail(e){return await _i(),(await this.db.getListingsByEmail(e)).sort((s,n)=>s.title<n.title?-1:1).map(s=>ys.from(s))}async createListing(e){}async updateListing(e){}};var vb=(t,e)=>{let r=new Ka(t),[i,s]=Se(!1),[n]=et(()=>i(),()=>e.isAuthenticated()),[o]=et(()=>n(),async()=>await e.getAuthData()),a=fe(()=>o()?.email_verified?!1:o()?.email),[l]=et(()=>{if(o()&&!a())return!0;s(!0)},async()=>{let d=await e.getAccessToken(),p=await r.getUser(d);return console.log({user:p}),p}),[c]=et(()=>l(),async({email:d})=>(await r.loadListingsByEmail(d)).map(f=>Wa(f)));return Ga({resources:{user:l,listings:c},mustVerifyEmail:a,login:e.login.bind(e),logout:e.logout.bind(e)})};var wb=Bi(),_b=t=>{let{db:e,configs:r}=eb(),[i]=et(()=>bb(e)),[s]=et(async()=>{let o=await pb(e,r.auth0);return vb(e,o)}),n={directory:i,account:s};return D(wb.Provider,{value:n,get children(){return t.children}})},Zt=()=>{let t=Jr(wb);if(!t)throw new Error("useService must be used within an ServiceProvider");return t};var EE=H("<div><sl-spinner></sl-spinner><div>",!0,!1),xb=function(t){return t.small="small",t.medium="medium",t.large="large",t}(xb||{}),TE=ze({centered:t=>({textAlign:"center"})}),AE=Cm(t=>({small:`font-size: ${t.fontSizeSm}; --trackwidth: 3px;`,medium:`font-size: ${t.fontSizeMd}; --trackwidth: 5px;`,large:`font-size: ${t.fontSizeLg}; --trackwidth: 10px;`})),Fr=t=>{let e=t.size||xb.large,r=AE()[e];return(()=>{var i=EE(),s=i.firstChild,n=s.nextSibling;return s._$owner=B(),N(n,()=>t.children),oe(o=>{var a=Cr("loading",TE.centered),l=r;return a!==o.e&&pe(i,o.e=a),o.t=_h(s,l,o.t),o},{e:void 0,t:void 0}),i})()};var OE=H("<sl-button>Logout",!0,!1),Sb=t=>{let{account:e}=Zt(),r=fe(()=>e()?.resources.user());return D(er,{get fallback(){return D(Fr,{size:"large"})},get children(){return[fe(()=>t.children),D(He,{get when(){return r()},get children(){return[fe(()=>r()?.name),(()=>{var i=OE();return ne(i,"click",()=>e()?.logout()),i._$owner=B(),i})()]}})]}})};var IE=H("<sl-icon-button style=font-size:20px;>",!0,!1),PE=H("<div><section><div><h1></h1></div><div>"),LE=H("<div>Error: "),Hn=ze({app:t=>({padding:"10px 15px",color:t.colorOnPrimary,backgroundColor:t.colorPrimary,font:"16px var(--sl-font-sans)",fontWeight:"var(--sl-font-weight-normal)"}),border:t=>({borderRadius:"10px",border:"5px solid",borderColor:t.colorAccent}),header:{display:"flex",justifyContent:"space-between"},title:t=>({fontFamily:"'Playwrite HU', sans-serif",fontSize:t.fontSizeLg,cursor:"pointer"}),user:{display:"flex",flexDirection:"column",alignItems:"end"}}),kb=t=>(()=>{var e=PE(),r=e.firstChild,i=r.firstChild,s=i.firstChild,n=i.nextSibling;return ne(s,"click",t.toggleMainPages),N(s,()=>t.title),N(n,D(Sb,{get children(){var o=IE();return ne(o,"click",t.toggleMainPages),o._$owner=B(),oe(()=>o.name=t.selectedPage==="PAGE_LISTINGS"?"person-circle":"arrow-left-circle"),o}})),N(e,D(zl,{fallback:o=>(console.error(o),(()=>{var a=LE(),l=a.firstChild;return N(a,()=>o.message,null),a})()),get children(){return D(er,{get fallback(){return D(Fr,{children:"Layout"})},get children(){return t.children}})}}),null),oe(o=>{var a=Cr(Hn.app,Hn.border),l=Hn.header,c=Hn.title,u=Hn.user;return a!==o.e&&pe(e,o.e=a),l!==o.t&&pe(r,o.t=l),c!==o.a&&pe(s,o.a=c),u!==o.o&&pe(n,o.o=u),o},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var RE=H("<span><sl-icon></sl-icon><span>",!0,!1),hd=ze({wrapper:{display:"flex"},label:{paddingInlineStart:"var(--sl-spacing-2x-small)"},icon:{minWidth:"20px"}}),Ya=t=>(()=>{var e=RE(),r=e.firstChild,i=r.nextSibling;return r._$owner=B(),N(i,()=>t.children),oe(s=>{var n=hd.wrapper,o=hd.icon,a=t.icon,l=t.label,c=hd.label;return n!==s.e&&pe(e,s.e=n),o!==s.t&&pe(r,s.t=o),a!==s.a&&(r.name=s.a=a),l!==s.o&&(r.label=s.o=l),c!==s.i&&pe(i,s.i=c),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();var DE=H("<a target=_blank>"),Cb=t=>{let{pathname:e,hostname:r}=new URL(t.link.href),i={icon:"globe",title:"Website"};return r.match(/facebook\.(no|com)/)?(i.icon="facebook",i.title="Facebook"):r.match(/instagram\.(no|com)/)?(i.icon="instagram",i.title=`@${e.split("/").pop()}`):r.match(/linkedin\.(no|com)/)&&(i.icon="linkedin",i.title="LinkedIn"),D(Ya,{get icon(){return i.icon},label:r,get children(){var s=DE();return N(s,()=>i.title),oe(()=>Ul(s,"href",t.link.href)),s}})};var NE=H("<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call",!0,!1),Eb=t=>{let e=()=>{navigator.clipboard.writeText(t.phoneNumber)},r=()=>{window.location.href=`tel:${t.phoneNumber}`};return(()=>{var i=NE(),s=i.firstChild,n=s.firstChild,o=s.nextSibling,a=o.firstChild,l=a.firstChild,c=a.nextSibling,u=c.firstChild;return i._$owner=B(),s.slot="trigger",s.caret=!0,s._$owner=B(),n.name="telephone",n._$owner=B(),N(s,()=>t.phoneNumber,null),o._$owner=B(),ne(a,"click",e),a._$owner=B(),l.name="copy",l._$owner=B(),ne(c,"click",r),c._$owner=B(),u.name="telephone",u._$owner=B(),i})()};var ME=H("<br>"),Tb=t=>[fe(()=>t.address),ME(),fe(()=>t.zip)," ",fe(()=>t.muncipiality)];var zE=H("<div><div class=text>"),FE=H("<sl-button><span>",!0,!1),Ab=ze({button:{marginTop:"5px",marginRight:"5px"},badge:{position:"absolute",top:"-2px",right:"-2px",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",borderWidth:"1px",borderStyle:"solid",borderRadius:"5px",backgroundColor:"var(--sl-color-primary-50)",borderColor:"var(--sl-color-primary-200)","& > .text":{fontSize:"8px",color:"var(--sl-color-primary-800)"}}}),fd=t=>(()=>{var e=FE(),r=e.firstChild;return ne(e,"click",t.onClick,!0),e._$owner=B(),N(r,()=>t.buttonLabel),N(e,D(He,{get when(){return t.badgeLabel},get children(){var i=zE(),s=i.firstChild;return N(s,()=>t.badgeLabel),oe(()=>pe(i,Ab.badge)),i}}),null),oe(i=>{var s=t.size||"medium",n=t.isActive?"primary":"default",o=Ab.button,a=t.disabled;return s!==i.e&&(e.size=i.e=s),n!==i.t&&(e.variant=i.t=n),o!==i.a&&pe(e,i.a=o),a!==i.o&&(e.disabled=i.o=a),i},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();wh(["click"]);var UE=H("<section><div></div><div><sl-switch>:</sl-switch></div><div>",!0,!1),pd=ze({section:t=>({display:"flex",flexDirection:"column",alignItems:"center",marginBottom:t.gapMd}),filter:t=>({display:"flex",overflowY:"hidden",overflowX:"scroll"})}),Ob=t=>{let{directory:e}=Zt(),r=()=>e()?.filters(),i=()=>e()?.resources.tags(),s=()=>e()?.resources.indexLetters(),n=()=>e()?.resources.listings.loading,o=()=>r()?.state().tagsMatchType==="ALL",a=()=>{let l=o()?"ANY":"ALL";r()?.setTagsMatchType(l)};return Vi(()=>console.log(r())),(()=>{var l=UE(),c=l.firstChild,u=c.nextSibling,d=u.firstChild,p=d.firstChild,f=u.nextSibling;return N(c,()=>s()?.map(({letter:m,count:_})=>D(fd,{buttonLabel:m,badgeLabel:_,get isActive(){return!!r()?.isActiveIndexLetter(m)},get disabled(){return n()},onClick:()=>r()?.setIndexLetter(m)}))),ne(d,"click",()=>a()),d.size="small",d._$owner=B(),N(d,()=>o()?"M\xE5 match alle valgte tagger":"Match p\xE5 minst \xE9n av valgte tager",p),N(f,()=>i()?.map(m=>D(fd,{size:"small",get isActive(){return!!r()?.hasTag(m.key)},get buttonLabel(){return m.name},get badgeLabel(){return m.usageCount},get disabled(){return n()},onClick:()=>r()?.setTag(m.key,!0)}))),N(l,()=>t.children,null),oe(m=>{var _=pd.section,y=pd.filter,v=o(),x=n(),w=pd.filter;return _!==m.e&&pe(l,m.e=_),y!==m.t&&pe(c,m.t=y),v!==m.a&&(d.checked=m.a=v),x!==m.o&&(d.disabled=m.o=x),w!==m.i&&pe(f,m.i=w),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()};var jE=H("<div> treff."),VE=H("<section>"),BE=H("<sl-card><div slot=header><div class=title></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>",!0,!1),qE=H("<span><br>"),WE=H("<sl-tag>",!0,!1),md=ze({card:{"--border-radius":"15px",width:"100%",marginBottom:"1rem","& .flex-middle > *":{justifySelf:"center"}},cardHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",position:"relative",alignItems:"center",rowGap:"1rem","> * ":{flex:"1 1 33.33%",minWidth:"200px",textAlign:"center","@media (min-width: 500px)":{"&:first-child":{textAlign:"left"}},"@media (min-width: 700px)":{"&:last-child":{textAlign:"right"}}},"& .title":{fontWeight:"bolder"}},cardBody:{display:"flex",justifyContent:"space-between"}}),$b=()=>{let{directory:t}=Zt(),[e,r]=Se(0),i=()=>t()?.filters(),s=()=>{let n=t()?.resources.listings();return r(n?.length||0),n};return(()=>{var n=VE();return N(n,D(Ob,{get children(){var o=jE(),a=o.firstChild;return N(o,e,a),o}}),null),N(n,D(er,{get fallback(){return D(Fr,{children:"Listings"})},get children(){return D(Xr,{get each(){return s()},children:o=>(()=>{var a=BE(),l=a.firstChild,c=l.firstChild,u=c.nextSibling,d=u.nextSibling,p=l.nextSibling,f=p.firstChild,m=f.firstChild,_=m.nextSibling,y=f.nextSibling;return a._$owner=B(),N(c,()=>o.title),N(u,D(Ya,{label:"beskrivelse",icon:"info-circle",get children(){return o.description}})),N(d,D(Eb,{get phoneNumber(){return o.phone}})),N(m,D(Tb,o)),N(_,()=>o.links.map(v=>(()=>{var x=qE(),w=x.firstChild;return N(x,D(Cb,{link:v}),w),x})())),N(y,()=>o.tags.map(v=>(()=>{var x=WE();return ne(x,"click",()=>i()?.setTag(v.key)),x.style.setProperty("cursor","pointer"),x.variant="primary",x.size="small",x._$owner=B(),N(x,()=>v.name),x})())),oe(v=>{var x=md.card,w=md.cardHeader,b=md.cardBody;return x!==v.e&&pe(a,v.e=x),w!==v.t&&pe(l,v.t=w),b!==v.a&&pe(f,v.a=b),v},{e:void 0,t:void 0,a:void 0}),a})()})}}),null),n})()};var Ja=Symbol("store-raw"),_s=Symbol("store-node"),ur=Symbol("store-has"),Ib=Symbol("store-self");function Pb(t){let e=t[_r];if(!e&&(Object.defineProperty(t,_r,{value:e=new Proxy(t,GE)}),!Array.isArray(t))){let r=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let s=0,n=r.length;s<n;s++){let o=r[s];i[o].get&&Object.defineProperty(t,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function Gt(t){let e;return t!=null&&typeof t=="object"&&(t[_r]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function dr(t,e=new Set){let r,i,s,n;if(r=t!=null&&t[Ja])return r;if(!Gt(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,a=t.length;o<a;o++)s=t[o],(i=dr(s,e))!==s&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);let o=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let l=0,c=o.length;l<c;l++)n=o[l],!a[n].get&&(s=t[n],(i=dr(s,e))!==s&&(t[n]=i))}return t}function Xa(t,e){let r=t[e];return r||Object.defineProperty(t,e,{value:r=Object.create(null)}),r}function Gn(t,e,r){if(t[e])return t[e];let[i,s]=Se(r,{equals:!1,internal:!0});return i.$=s,t[e]=i}function HE(t,e){let r=Reflect.getOwnPropertyDescriptor(t,e);return!r||r.get||!r.configurable||e===_r||e===_s||(delete r.value,delete r.writable,r.get=()=>t[_r][e]),r}function Lb(t){Ao()&&Gn(Xa(t,_s),Ib)()}function ZE(t){return Lb(t),Reflect.ownKeys(t)}var GE={get(t,e,r){if(e===Ja)return t;if(e===_r)return r;if(e===Eo)return Lb(t),r;let i=Xa(t,_s),s=i[e],n=s?s():t[e];if(e===_s||e===ur||e==="__proto__")return n;if(!s){let o=Object.getOwnPropertyDescriptor(t,e);Ao()&&(typeof n!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(n=Gn(i,e,n)())}return Gt(n)?Pb(n):n},has(t,e){return e===Ja||e===_r||e===Eo||e===_s||e===ur||e==="__proto__"?!0:(Ao()&&Gn(Xa(t,ur),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ZE,getOwnPropertyDescriptor:HE};function it(t,e,r,i=!1){if(!i&&t[e]===r)return;let s=t[e],n=t.length;r===void 0?(delete t[e],t[ur]&&t[ur][e]&&s!==void 0&&t[ur][e].$()):(t[e]=r,t[ur]&&t[ur][e]&&s===void 0&&t[ur][e].$());let o=Xa(t,_s),a;if((a=Gn(o,e,s))&&a.$(()=>r),Array.isArray(t)&&t.length!==n){for(let l=t.length;l<n;l++)(a=o[l])&&a.$();(a=Gn(o,"length",n))&&a.$(t.length)}(a=o[Ib])&&a.$()}function Rb(t,e){let r=Object.keys(e);for(let i=0;i<r.length;i+=1){let s=r[i];it(t,s,e[s])}}function KE(t,e){if(typeof e=="function"&&(e=e(t)),e=dr(e),Array.isArray(e)){if(t===e)return;let r=0,i=e.length;for(;r<i;r++){let s=e[r];t[r]!==s&&it(t,r,s)}it(t,"length",i)}else Rb(t,e)}function Zn(t,e,r=[]){let i,s=t;if(e.length>1){i=e.shift();let o=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let l=0;l<i.length;l++)Zn(t,[i[l]].concat(e),r);return}else if(a&&o==="function"){for(let l=0;l<t.length;l++)i(t[l],l)&&Zn(t,[l].concat(e),r);return}else if(a&&o==="object"){let{from:l=0,to:c=t.length-1,by:u=1}=i;for(let d=l;d<=c;d+=u)Zn(t,[d].concat(e),r);return}else if(e.length>1){Zn(t[i],e,[i].concat(r));return}s=t[i],r=[i].concat(r)}let n=e[0];typeof n=="function"&&(n=n(s,r),n===s)||i===void 0&&n==null||(n=dr(n),i===void 0||Gt(s)&&Gt(n)&&!Array.isArray(n)?Rb(s,n):it(t,i,n))}function bd(...[t,e]){let r=dr(t||{}),i=Array.isArray(r),s=Pb(r);function n(...o){uh(()=>{i&&o.length===1?KE(r,o[0]):Zn(r,o)})}return[s,n]}var gd=Symbol("store-root");function ws(t,e,r,i,s){let n=e[r];if(t===n)return;let o=Array.isArray(t);if(r!==gd&&(!Gt(t)||!Gt(n)||o!==Array.isArray(n)||s&&t[s]!==n[s])){it(e,r,t);return}if(o){if(t.length&&n.length&&(!i||s&&t[0]&&t[0][s]!=null)){let c,u,d,p,f,m,_,y;for(d=0,p=Math.min(n.length,t.length);d<p&&(n[d]===t[d]||s&&n[d]&&t[d]&&n[d][s]===t[d][s]);d++)ws(t[d],n,d,i,s);let v=new Array(t.length),x=new Map;for(p=n.length-1,f=t.length-1;p>=d&&f>=d&&(n[p]===t[f]||s&&n[d]&&t[d]&&n[p][s]===t[f][s]);p--,f--)v[f]=n[p];if(d>f||d>p){for(u=d;u<=f;u++)it(n,u,t[u]);for(;u<t.length;u++)it(n,u,v[u]),ws(t[u],n,u,i,s);n.length>t.length&&it(n,"length",t.length);return}for(_=new Array(f+1),u=f;u>=d;u--)m=t[u],y=s&&m?m[s]:m,c=x.get(y),_[u]=c===void 0?-1:c,x.set(y,u);for(c=d;c<=p;c++)m=n[c],y=s&&m?m[s]:m,u=x.get(y),u!==void 0&&u!==-1&&(v[u]=n[c],u=_[u],x.set(y,u));for(u=d;u<t.length;u++)u in v?(it(n,u,v[u]),ws(t[u],n,u,i,s)):it(n,u,t[u])}else for(let c=0,u=t.length;c<u;c++)ws(t[c],n,c,i,s);n.length>t.length&&it(n,"length",t.length);return}let a=Object.keys(t);for(let c=0,u=a.length;c<u;c++)ws(t[a[c]],n,a[c],i,s);let l=Object.keys(n);for(let c=0,u=l.length;c<u;c++)t[l[c]]===void 0&&it(n,l[c],void 0)}function Db(t,e={}){let{merge:r,key:i="id"}=e,s=dr(t);return n=>{if(!Gt(n)||!Gt(s))return s;let o=ws(s,{[gd]:n},gd,r,i);return o===void 0?n:o}}var Qa=new WeakMap,Nb={get(t,e){if(e===Ja)return t;let r=t[e],i;return Gt(r)?Qa.get(r)||(Qa.set(r,i=new Proxy(r,Nb)),i):r},set(t,e,r){return it(t,e,dr(r)),!0},deleteProperty(t,e){return it(t,e,void 0,!0),!0}};function Kn(t){return e=>{if(Gt(e)){let r;(r=Qa.get(e))||Qa.set(e,r=new Proxy(e,Nb)),t(r)}return e}}var YE=t=>{let e=typeof t;return t!==null&&(e==="object"||e==="function")};var yd=new Set(["__proto__","prototype","constructor"]),JE=new Set("0123456789");function XE(t){let e=[],r="",i="start",s=!1;for(let n of t)switch(n){case"\\":{if(i==="index")throw new Error("Invalid character in an index");if(i==="indexEnd")throw new Error("Invalid character after an index");s&&(r+=n),i="property",s=!s;break}case".":{if(i==="index")throw new Error("Invalid character in an index");if(i==="indexEnd"){i="property";break}if(s){s=!1,r+=n;break}if(yd.has(r))return[];e.push(r),r="",i="property";break}case"[":{if(i==="index")throw new Error("Invalid character in an index");if(i==="indexEnd"){i="index";break}if(s){s=!1,r+=n;break}if(i==="property"){if(yd.has(r))return[];e.push(r),r=""}i="index";break}case"]":{if(i==="index"){e.push(Number.parseInt(r,10)),r="",i="indexEnd";break}if(i==="indexEnd")throw new Error("Invalid character after an index")}default:{if(i==="index"&&!JE.has(n))throw new Error("Invalid character in an index");if(i==="indexEnd")throw new Error("Invalid character after an index");i==="start"&&(i="property"),s&&(s=!1,r+="\\"),r+=n}}switch(s&&(r+="\\"),i){case"property":{if(yd.has(r))return[];e.push(r);break}case"index":throw new Error("Index was not closed");case"start":{e.push("");break}}return e}function QE(t,e){if(typeof e!="number"&&Array.isArray(t)){let r=Number.parseInt(e,10);return Number.isInteger(r)&&t[r]===t[e]}return!1}function vd(t,e,r){if(!YE(t)||typeof e!="string")return r===void 0?t:r;let i=XE(e);if(i.length===0)return r;for(let s=0;s<i.length;s++){let n=i[s];if(QE(t,n)?t=s===i.length-1?void 0:null:t=t[n],t==null){if(s!==i.length-1)return r;break}}return t===void 0?r:t}var el=class{_schema;_initialValues;_values;_setValues;_state;_setState;constructor(){[this._values,this._setValues]=bd({}),[this._state,this._setState]=bd({})}initialize(e,r){this._schema=r,this._initialValues=Vn(e),this._setValues(Db(Vn(e))),this._setState({isDirty:!1,didValidateAll:!1,errors:[],touchedFields:[],validatingFields:[],validatedFields:[]})}getStore(){return[this._values,this.setValue.bind(this)]}setIsTouched(e,r){this._setState("touchedFields",Kn(i=>{if(r)i.indexOf(e)===-1&&i.push(e);else{let s=i.indexOf(e);s!==-1&&i.splice(s,1)}})),this._setState("isDirty",this._state.touchedFields.length>0),this._s}setIsValidating(e,r){this._setState("validatingFields",Kn(i=>{if(r)i.indexOf(e)===-1&&i.push(e);else{let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}))}setIsValidated(e,r){this._setState("validatedFields",Kn(i=>{if(r)i.indexOf(e)===-1&&i.push(e);else{let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}))}setValue(e,r){let i=Bn(e);if(this._setValues(...i,r),Yg(r)){let n=vd(this._initialValues,e,"")!==r;this.setIsTouched(e,n),this.hasErrors(e)&&this.validateField(e)}}validateField(e){let r=this.isTouched(e);if(!r)this.setIsValidating(e,!1),this.setIsValidated(e,!1),this._setState("errors",i=>i.filter(({path:s})=>lr(...s)!==e));else{let i=vd(this._values,e),n=Zu(this._schema,e).safeParse(i);this._setState("errors",Kn(a=>{let l=a.findIndex(c=>lr(c.path)===e);if(n.success)l>-1&&a.splice(l,1);else if(l===-1){let c={...n.error.issues[0],path:Bn(e)};a.unshift(c)}}));let o=this.hasErrors(e);this.setIsValidating(e,r&&o),this.setIsValidated(e,!o)}}validateAll(){this._setState({didValidateAll:!0});let e=this._schema.safeParse(dr(this._values));return e.success?this._setState("errors",[]):this._setState("errors",e.error.issues),e.success}isDirty(){return this._state.isDirty}isTouched(e){return this._state.touchedFields?.indexOf(e)>-1}isValidated(e){return this._state.validatedFields?.indexOf(e)>-1}isValidating(e){return this._state.validatingFields?.indexOf(e)>-1}isValid(e){return this.isTouched(e)&&this.isValidated(e)&&!this.isValidating(e)}showFieldError(e){return this.isValidating(e)||this._state.didValidateAll&&this.hasErrors(e)}hasErrors(e){let r=Bn(e);return this._state.errors?.some(({path:i})=>i.length<r.length?!1:r.every((s,n)=>i[n]===s))}getFieldError(e){return this._state.errors?.find(({path:r})=>lr(r)===e)?.message}getErrorMessages(e){let r=Bn(e);return[...new Set(this._state.errors?.filter(({path:i})=>i.length<r.length?!1:r.every((s,n)=>i[n]===s)).map(({message:i})=>i)||[])]}};var eT=new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u),tT=new RegExp(/^([\+][1-9]{2})?[ ]?([0-9 ]{8})$/),rT=new RegExp(/^[\p{L}'][ \p{L}\p{N}'-,]{8,}$/u),iT=new RegExp(/^\d{4}$/),Mb=I.string().trim().email("Must be a valid email address"),_R=I.string().trim().regex(eT,"Must be a valid name"),zb=I.string().trim().regex(rT,"Must be a valid street address"),Fb=I.string().trim().regex(iT,"Must be a valid zip code"),Ub=I.preprocess(t=>t?.split(" ").join(""),I.string().trim().regex(tT,"Must be a valid phone number"));var Xe=vs.extend({title:vs.shape.title.min(3).max(70),description:vs.shape.description.min(15).max(150),address:zb,zip:Fb,muncipiality:vs.shape.muncipiality,phone:Ub,email:Mb,tags:I.array(I.any()).min(1).default([]),links:I.array(dd).default([])}),xs=class{data;constructor(e){this.data=e}static from(e){let r=Rr(Xe,e);return new xs(r)}};xs=mt([xt(Xe)],xs);var tl=Xe.extend({title:Xe.shape.title.default(""),description:Xe.shape.description.default(""),address:Xe.shape.address.default(""),zip:Xe.shape.zip.default(""),muncipiality:Xe.shape.muncipiality.default(""),phone:Xe.shape.phone.default(""),email:Xe.shape.email.default(""),tags:Xe.shape.tags,links:Xe.shape.links}).omit({id:!0}).partial(),Ur=class{data;constructor(e){this.data=e}static from(e){let r=Gu(tl,e);return new Ur(r)}};Ur=mt([xt(tl)],Ur);var jb=H("<div>"),jr=t=>(()=>{var e=jb();return N(e,()=>t.children(t.key),null),N(e,D(He,{get when(){return fe(()=>!t.hideError)()&&t.formState.showFieldError(t.key)},get children(){var r=jb();return N(r,()=>t.formState.getFieldError(t.key)),r}}),null),oe(()=>pe(e,t.class||"")),e})();var aT=H("<pre>Errors: "),lT=H("<pre>Touched:"),cT=H("<pre>Validating:"),uT=H("<pre>Validated:"),dT=H("<sl-card><form><fieldset><legend>Knagger</legend></fieldset><fieldset><legend>Lenker</legend><sl-button>Legg til ny</sl-button></fieldset><div><sl-button-group><sl-button>Lagre</sl-button><sl-button>Avbryt",!0,!1),Yn=H("<sl-input>",!0,!1),hT=H("<sl-input class=break-flow>",!0,!1),fT=H("<div><sl-input></sl-input><sl-icon-button color=red>",!0,!1),wd=ze({form:t=>({display:"flex",gap:t.gapMd,alignItems:"baseline",flexWrap:"wrap","> *":{minWidth:"225px",flex:"1 1 33.333%"},"> .break-flow":{flexBasis:"100%"}}),itemRow:t=>({display:"flex",alignItems:"end",marginBottom:t.gapMd,">:first-child":{flex:"1"},">:last-child":{flexShrink:"0"}}),controls:t=>({display:"flex",justifyContent:"center"})}),pT={CRUD_CREATE:tl,CRUD_UPDATE:Xe},Vb=t=>{let e="small",r=new el,[i,s]=r.getStore();Vi(()=>{r.initialize(t.model.state(),pT[t.mode])}),Vi(()=>{t.setIsDirty(r.isDirty())});let n=(c,u)=>{s(lr("links",c,"href"),u)},o=()=>{s(lr("links",i.links.length),{href:""})},a=c=>{s("links",u=>u.filter((d,p)=>p!==c))},l=()=>{if(r.validateAll(),!r.errors){let c=Vn(i);t.onSubmit(c)}};return[(()=>{var c=aT(),u=c.firstChild;return N(c,()=>JSON.stringify(r._state.errors?.map(({path:d})=>lr(d)),null,2),null),c})(),(()=>{var c=lT(),u=c.firstChild;return N(c,()=>JSON.stringify(r._state.touchedFields,null,2),null),c})(),(()=>{var c=cT(),u=c.firstChild;return N(c,()=>JSON.stringify(r._state.validatingFields,null,2),null),c})(),(()=>{var c=uT(),u=c.firstChild;return N(c,()=>JSON.stringify(r._state.validatedFields,null,2),null),c})(),(()=>{var c=dT(),u=c.firstChild,d=u.firstChild,p=d.nextSibling,f=p.firstChild,m=f.nextSibling,_=p.nextSibling,y=_.firstChild,v=y.firstChild,x=v.nextSibling;return c._$owner=B(),N(u,D(jr,{key:"title",formState:r,children:w=>(()=>{var b=Yn();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Virksomhetens navn",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(u,D(jr,{key:"description",formState:r,children:w=>(()=>{var b=hT();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Beskrivelse av tjeneste eller produkt",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(u,D(jr,{key:"address",formState:r,children:w=>(()=>{var b=Yn();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Gateadresse",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(u,D(jr,{key:"zip",formState:r,children:w=>(()=>{var b=Yn();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Postnummer",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(u,D(jr,{key:"phone",formState:r,children:w=>(()=>{var b=Yn();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Telefonnummer",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(u,D(jr,{key:"email",formState:r,children:w=>(()=>{var b=Yn();return ne(b,"blur",()=>r.validateField(w)),ne(b,"input",({target:S})=>s(w,S.value)),b.label="Epostadresse",b.size="small",b.name=w,b.required=!0,b._$owner=B(),oe(S=>{var z=!!r.hasErrors(w),R=!!r.isValid(w),U=i[w];return z!==S.e&&b.classList.toggle("user-error",S.e=z),R!==S.t&&b.classList.toggle("user-valid",S.t=R),U!==S.a&&(b.value=S.a=U),S},{e:void 0,t:void 0,a:void 0}),b})()}),d),N(p,D(Xr,{get each(){return i.links},children:(w,b)=>D(jr,{get key(){return lr("links",b(),"href")},formState:r,hideError:!0,children:S=>(()=>{var z=fT(),R=z.firstChild,U=R.nextSibling;return ne(R,"blur",()=>r.validateField(S)),ne(R,"input",le=>n(b(),le.target.value)),R.size="small",R.name=S,R.type="url",R.required=!0,R._$owner=B(),ne(U,"click",()=>a(b())),U.name="trash",U._$owner=B(),oe(le=>{var ee=wd.itemRow,de=!!r.hasErrors(S),ce=!!r.isValid(S),Re=`Lenke ${b()+1}`,De=w.href;return ee!==le.e&&pe(z,le.e=ee),de!==le.t&&R.classList.toggle("user-error",le.t=de),ce!==le.a&&R.classList.toggle("user-valid",le.a=ce),Re!==le.o&&(R.label=le.o=Re),De!==le.i&&(R.value=le.i=De),le},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),z})()})}),m),ne(m,"click",o),m.size="small",m.type="button",m.variant="primary",m._$owner=B(),y._$owner=B(),ne(v,"click",l),v.size="medium",v.type="button",v.variant="primary",v._$owner=B(),ne(x,"click",t.onCancel),x.size="medium",x.type="button",x.variant="neutral",x._$owner=B(),oe(w=>{var b=Cr(wd.form,"validity-styles"),S=r.hasErrors("links")?"error":"",z=i.links?.length===3,R=Cr(wd.controls,"break-flow");return b!==w.e&&pe(u,w.e=b),S!==w.t&&pe(f,w.t=S),z!==w.a&&(m.disabled=w.a=z),R!==w.o&&pe(_,w.o=R),w},{e:void 0,t:void 0,a:void 0,o:void 0}),c})()]};var mT=H("<section><h2>Mine oppf\xF8ringer</h2><div><sl-button><sl-icon slot=prefix></sl-icon>Ny",!0,!1),gT=H("<sl-button><sl-icon slot=prefix>",!0,!1),bT=ze({listings:t=>({display:"flex",flexWrap:"wrap",gap:t.gapMd,marginBottom:t.gapMd})}),Bb=t=>{let{account:e}=Zt(),[r,i]=Se(!1),[s,n]=Se(null),o=fe(()=>e()?.resources.listings()),a=()=>{let u=Ur.from({owner:e()?.resources.user().id});return new ys(u.data)},l=(u,d)=>{n(u?{listing:u,mode:d}:null),i(!1),console.log("setActiveListing",u?.state().title,u)},c=u=>{console.log(u)};return(()=>{var u=mT(),d=u.firstChild,p=d.nextSibling,f=p.firstChild,m=f.firstChild;return N(p,D(Xr,{get each(){return o()},children:(_,y)=>(()=>{var v=gT(),x=v.firstChild;return ne(v,"click",()=>l(_,"CRUD_UPDATE")),v.name="pencil",v._$owner=B(),x.name="pencil",x._$owner=B(),N(v,()=>_.state().title,null),oe(()=>v.disabled=r()),v})()}),f),ne(f,"click",()=>l(a(),"CRUD_CREATE")),f.name="pencil",f._$owner=B(),m.name="plus-circle",m._$owner=B(),N(u,D(He,{get when(){return s()},get children(){return D(Vb,{get model(){return s().listing},get mode(){return s().mode},setIsDirty:i,onSubmit:c,onCancel:()=>l(null)})}}),null),oe(_=>{var y=bT.listings,v=r();return y!==_.e&&pe(p,_.e=y),v!==_.t&&(f.disabled=_.t=v),_},{e:void 0,t:void 0}),u})()};var yT=H("<sl-alert><sl-icon slot=icon></sl-icon><strong>Vi har sendt en verifiserings-e-post til <!>.</strong><br>Verifiser e-postadressen din der og fortsett deretter innlogging under.",!0,!1),vT=H("<sl-button>Logg inn",!0,!1),wT=H("<sl-button-group><sl-button>Fortsett innlogging</sl-button><sl-button>Avbryt / Log inn med en annen e-post",!0,!1),_T=H("<div>"),xT=H("<section>"),$D=ze({}),qb=t=>{let{account:e}=Zt(),r=fe(()=>e()?.mustVerifyEmail()),i=fe(()=>e()?.resources.user());return(()=>{var s=xT();return N(s,D(He,{get when(){return!i()},get children(){return[(()=>{var n=yT(),o=n.firstChild,a=o.nextSibling,l=a.firstChild,c=l.nextSibling,u=c.nextSibling;return n.variant="warning",n._$owner=B(),o.name="exclamation-triangle",o._$owner=B(),N(a,r,c),oe(()=>n.open=!!r()),n})(),(()=>{var n=_T();return N(n,D(He,{get when(){return!r()},get children(){var o=vT();return ne(o,"click",()=>e()?.login()),o._$owner=B(),o}}),null),N(n,D(He,{get when(){return r()},get children(){var o=wT(),a=o.firstChild,l=a.nextSibling;return o.label="Alignment",o._$owner=B(),ne(a,"click",()=>e()?.login()),a.variant="primary",a._$owner=B(),ne(l,"click",()=>e()?.logout()),l._$owner=B(),o}}),null),n})()]}}),null),N(s,D(He,{get when(){return i()},get children(){return D(Bb,{})}}),null),s})()};var ST=H("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>"),kT=H("<style id=styler>"),CT=t=>{let e="pageKey",r=window.localStorage.getItem(e)||"PAGE_LISTINGS",[i,s]=Se(r),n=o=>{window.localStorage.setItem(e,o),s(o)};return[ST(),(()=>{var o=kT();return N(o,Em),o})(),D(er,{get fallback(){return D(Fr,{children:"Gul info laster..."})},get children(){return D(Qg,{get children(){return D(_b,{get children(){return D(kb,{get title(){return t.title},get selectedPage(){return i()},toggleMainPages:()=>n(i()==="PAGE_ACCOUNT"?"PAGE_LISTINGS":"PAGE_ACCOUNT"),get children(){return D(Ml,{get children(){return[D($o,{get when(){return i()==="PAGE_LISTINGS"},get children(){return D($b,{})}}),D($o,{get when(){return i()==="PAGE_ACCOUNT"},get children(){return D(qb,{})}})]}})}})}})}})}})]},Wb=CT;var _d="";function Jn(t){_d=t}function xd(t=""){if(!_d){let e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)Jn(r.getAttribute("data-shoelace"));else{let i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src)),s="";i&&(s=i.getAttribute("src")),Jn(s.split("/").slice(0,-1).join("/"))}}return _d.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ET={name:"default",resolver:t=>xd(`assets/icons/${t}.svg`)},Hb=ET;var Zb={caret:`
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
  `},TT={name:"system",resolver:t=>t in Zb?`data:image/svg+xml,${encodeURIComponent(Zb[t])}`:""},Gb=TT;var AT=[Hb,Gb],Sd=[];function Kb(t){Sd.push(t)}function Yb(t){Sd=Sd.filter(e=>e!==t)}function kd(t){return AT.find(e=>e.name===t)}var rl=globalThis,il=rl.ShadowRoot&&(rl.ShadyCSS===void 0||rl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cd=Symbol(),Jb=new WeakMap,Xn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Cd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(il&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=Jb.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Jb.set(r,e))}return e}toString(){return this.cssText}},Xb=t=>new Xn(typeof t=="string"?t:t+"",void 0,Cd),j=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Xn(r,t,Cd)},Ed=(t,e)=>{if(il)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),s=rl.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},sl=il?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Xb(r)})(t):t;var{is:OT,defineProperty:$T,getOwnPropertyDescriptor:IT,getOwnPropertyNames:PT,getOwnPropertySymbols:LT,getPrototypeOf:RT}=Object,nl=globalThis,Qb=nl.trustedTypes,DT=Qb?Qb.emptyScript:"",NT=nl.reactiveElementPolyfillSupport,Qn=(t,e)=>t,Vr={toAttribute(t,e){switch(e){case Boolean:t=t?DT:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ol=(t,e)=>!OT(t,e),ey={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:ol};Symbol.metadata??=Symbol("metadata"),nl.litPropertyMetadata??=new WeakMap;var hr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ey){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&$T(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){let{get:s,set:n}=IT(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s?.call(this)},set(o){let a=s?.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ey}static _$Ei(){if(this.hasOwnProperty(Qn("elementProperties")))return;let e=RT(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qn("properties"))){let r=this.properties,i=[...PT(r),...LT(r)];for(let s of i)this.createProperty(s,r[s])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)r.unshift(sl(s))}else e!==void 0&&r.push(sl(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ed(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:Vr).toAttribute(r,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,r){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Vr;this._$Em=s,this[s]=o.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??ol)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};hr.elementStyles=[],hr.shadowRootOptions={mode:"open"},hr[Qn("elementProperties")]=new Map,hr[Qn("finalized")]=new Map,NT?.({ReactiveElement:hr}),(nl.reactiveElementVersions??=[]).push("2.0.4");var Ad=globalThis,al=Ad.trustedTypes,ty=al?al.createPolicy("lit-html",{createHTML:t=>t}):void 0,Od="$lit$",fr=`lit$${Math.random().toFixed(9).slice(2)}$`,$d="?"+fr,MT=`<${$d}>`,Ti=document,to=()=>Ti.createComment(""),ro=t=>t===null||typeof t!="object"&&typeof t!="function",Id=Array.isArray,ay=t=>Id(t)||typeof t?.[Symbol.iterator]=="function",Td=`[ 	
\f\r]`,eo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ry=/-->/g,iy=/>/g,Ci=RegExp(`>|${Td}(?:([^\\s"'>=/]+)(${Td}*=${Td}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sy=/'/g,ny=/"/g,ly=/^(?:script|style|textarea|title)$/i,Pd=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),$=Pd(1),cy=Pd(2),uy=Pd(3),Ge=Symbol.for("lit-noChange"),we=Symbol.for("lit-nothing"),oy=new WeakMap,Ei=Ti.createTreeWalker(Ti,129);function dy(t,e){if(!Id(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ty!==void 0?ty.createHTML(e):e}var hy=(t,e)=>{let r=t.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=eo;for(let a=0;a<r;a++){let l=t[a],c,u,d=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===eo?u[1]==="!--"?o=ry:u[1]!==void 0?o=iy:u[2]!==void 0?(ly.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Ci):u[3]!==void 0&&(o=Ci):o===Ci?u[0]===">"?(o=s??eo,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Ci:u[3]==='"'?ny:sy):o===ny||o===sy?o=Ci:o===ry||o===iy?o=eo:(o=Ci,s=void 0);let f=o===Ci&&t[a+1].startsWith("/>")?" ":"";n+=o===eo?l+MT:d>=0?(i.push(c),l.slice(0,d)+Od+l.slice(d)+fr+f):l+fr+(d===-2?a:f)}return[dy(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},io=class t{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0,a=e.length-1,l=this.parts,[c,u]=hy(e,r);if(this.el=t.createElement(c,i),Ei.currentNode=this.el.content,r===2||r===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Ei.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Od)){let p=u[o++],f=s.getAttribute(d).split(fr),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?cl:m[1]==="?"?ul:m[1]==="@"?dl:Oi}),s.removeAttribute(d)}else d.startsWith(fr)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(ly.test(s.tagName)){let d=s.textContent.split(fr),p=d.length-1;if(p>0){s.textContent=al?al.emptyScript:"";for(let f=0;f<p;f++)s.append(d[f],to()),Ei.nextNode(),l.push({type:2,index:++n});s.append(d[p],to())}}}else if(s.nodeType===8)if(s.data===$d)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(fr,d+1))!==-1;)l.push({type:7,index:n}),d+=fr.length-1}n++}}static createElement(e,r){let i=Ti.createElement("template");return i.innerHTML=e,i}};function Ai(t,e,r=t,i){if(e===Ge)return e;let s=i!==void 0?r._$Co?.[i]:r._$Cl,n=ro(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=s:r._$Cl=s),s!==void 0&&(e=Ai(t,s._$AS(t,e.values),s,i)),e}var ll=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,s=(e?.creationScope??Ti).importNode(r,!0);Ei.currentNode=s;let n=Ei.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Ss(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new hl(n,this,e)),this._$AV.push(c),l=i[++a]}o!==l?.index&&(n=Ei.nextNode(),o++)}return Ei.currentNode=Ti,s}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},Ss=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=we,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ai(this,e,r),ro(e)?e===we||e==null||e===""?(this._$AH!==we&&this._$AR(),this._$AH=we):e!==this._$AH&&e!==Ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ay(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==we&&ro(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ti.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=io.createElement(dy(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let n=new ll(s,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=oy.get(e.strings);return r===void 0&&oy.set(e.strings,r=new io(e)),r}k(e){Id(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let n of e)s===r.length?r.push(i=new t(this.O(to()),this.O(to()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=we,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=we}_$AI(e,r=this,i,s){let n=this.strings,o=!1;if(n===void 0)e=Ai(this,e,r,0),o=!ro(e)||e!==this._$AH&&e!==Ge,o&&(this._$AH=e);else{let a=e,l,c;for(e=n[0],l=0;l<n.length-1;l++)c=Ai(this,a[i+l],r,l),c===Ge&&(c=this._$AH[l]),o||=!ro(c)||c!==this._$AH[l],c===we?e=we:e!==we&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===we?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},cl=class extends Oi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===we?void 0:e}},ul=class extends Oi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==we)}},dl=class extends Oi{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Ai(this,e,r,0)??we)===Ge)return;let i=this._$AH,s=e===we&&i!==we||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==we&&(i===we||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},hl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ai(this,e)}},fy={M:Od,P:fr,A:$d,C:1,L:hy,R:ll,D:ay,V:Ai,I:Ss,H:Oi,N:ul,U:dl,B:cl,F:hl},zT=Ad.litHtmlPolyfillSupport;zT?.(io,Ss),(Ad.litHtmlVersions??=[]).push("3.2.1");var py=(t,e,r)=>{let i=r?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=r?.renderBefore??null;i._$litPart$=s=new Ss(e.insertBefore(to(),n),n,void 0,r??{})}return s._$AI(t),s};var Br=class extends hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=py(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ge}};Br._$litElement$=!0,Br.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Br});var FT=globalThis.litElementPolyfillSupport;FT?.({LitElement:Br});(globalThis.litElementVersions??=[]).push("4.1.1");var my=j`
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
`;var yy=Object.defineProperty,UT=Object.defineProperties,jT=Object.getOwnPropertyDescriptor,VT=Object.getOwnPropertyDescriptors,gy=Object.getOwnPropertySymbols,BT=Object.prototype.hasOwnProperty,qT=Object.prototype.propertyIsEnumerable;var vy=t=>{throw TypeError(t)},by=(t,e,r)=>e in t?yy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ke=(t,e)=>{for(var r in e||(e={}))BT.call(e,r)&&by(t,r,e[r]);if(gy)for(var r of gy(e))qT.call(e,r)&&by(t,r,e[r]);return t},pr=(t,e)=>UT(t,VT(e)),h=(t,e,r,i)=>{for(var s=i>1?void 0:i?jT(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&yy(e,r,s),s},wy=(t,e,r)=>e.has(t)||vy("Cannot "+r),_y=(t,e,r)=>(wy(t,e,"read from private field"),r?r.call(t):e.get(t)),xy=(t,e,r)=>e.has(t)?vy("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Sy=(t,e,r,i)=>(wy(t,e,"write to private field"),i?i.call(t,r):e.set(t,r),r);function Z(t,e){let r=Ke({waitUntilFirstUpdate:!1},e);return(i,s)=>{let{update:n}=i,o=Array.isArray(t)?t:[t];i.update=function(a){o.forEach(l=>{let c=l;if(a.has(c)){let u=a.get(c),d=this[c];u!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](u,d)}}),n.call(this,a)}}}var q=j`
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
`;var WT={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:ol},HT=(t=WT,e,r)=>{let{kind:i,metadata:s}=r,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){let{name:o}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t)},init(a){return a!==void 0&&this.P(o,void 0,t),a}}}if(i==="setter"){let{name:o}=r;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+i)};function g(t){return(e,r)=>typeof r=="object"?HT(t,e,r):((i,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}function ae(t){return g({...t,state:!0,attribute:!1})}function ky(t){return(e,r)=>{let i=typeof e=="function"?e:e[r];Object.assign(i,t)}}var $i=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function W(t,e){return(r,i,s)=>{let n=o=>o.renderRoot?.querySelector(t)??null;if(e){let{get:o,set:a}=typeof i=="object"?r:s??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return $i(r,i,{get(){let l=o.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return $i(r,i,{get(){return n(this)}})}}var fl,V=class extends Br{constructor(){super(),xy(this,fl,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,Ke({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let s=" (unknown version)",n=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,r){_y(this,fl)||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),Sy(this,fl,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};fl=new WeakMap;V.version="2.19.0";V.dependencies={};h([g()],V.prototype,"dir",2);h([g()],V.prototype,"lang",2);var{I:tM}=fy;var Cy=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var pl=t=>t.strings===void 0;var ZT={},Ey=(t,e=ZT)=>t._$AH=e;var so=Symbol(),ml=Symbol(),Ld,Rd=new Map,Te=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e?.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?so:ml}catch{return ml}try{let s=document.createElement("div");s.innerHTML=await i.text();let n=s.firstElementChild;if(((r=n?.tagName)==null?void 0:r.toLowerCase())!=="svg")return so;Ld||(Ld=new DOMParser);let a=Ld.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):so}catch{return so}}connectedCallback(){super.connectedCallback(),Kb(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yb(this)}getIconSource(){let t=kd(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:r}=this.getIconSource(),i=r?kd(this.library):void 0;if(!e){this.svg=null;return}let s=Rd.get(e);if(s||(s=this.resolveIcon(e,i),Rd.set(e,s)),!this.initialRender)return;let n=await s;if(n===ml&&Rd.delete(e),e===this.getIconSource().url){if(Cy(n)){if(this.svg=n,i){await this.updateComplete;let o=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&o&&i.mutator(o)}return}switch(n){case ml:case so:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Te.styles=[q,my];h([ae()],Te.prototype,"svg",2);h([g({reflect:!0})],Te.prototype,"name",2);h([g()],Te.prototype,"src",2);h([g()],Te.prototype,"label",2);h([g({reflect:!0})],Te.prototype,"library",2);h([Z("label")],Te.prototype,"handleLabelChange",1);h([Z(["name","src","library"])],Te.prototype,"setIcon",1);Te.define("sl-icon");var Ty=j`
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
`;var ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mr=t=>(...e)=>({_$litDirective$:t,values:e}),Kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var Y=mr(class extends Kt{constructor(t){if(super(t),t.type!==ft.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Ge}});var Oy=Symbol.for(""),GT=t=>{if(t?.r===Oy)return t?._$litStatic$};var ks=(t,...e)=>({_$litStatic$:e.reduce((r,i,s)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Oy}),Ay=new Map,Dd=t=>(e,...r)=>{let i=r.length,s,n,o=[],a=[],l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(n=r[c],(s=GT(n))!==void 0);)l+=s+e[++c],u=!0;c!==i&&a.push(n),o.push(l),c++}if(c===i&&o.push(e[i]),u){let d=o.join("$$lit$$");(e=Ay.get(d))===void 0&&(o.raw=o,Ay.set(d,e=o)),r=a}return t(e,...r)},qr=Dd($),jM=Dd(cy),VM=Dd(uy);var re=t=>t??we;var Le=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?ks`a`:ks`button`;return qr`
      <${e}
        part="base"
        class=${Y({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${re(t?void 0:this.disabled)}
        type=${re(t?void 0:"button")}
        href=${re(t?this.href:void 0)}
        target=${re(t?this.target:void 0)}
        download=${re(t?this.download:void 0)}
        rel=${re(t&&this.target?"noreferrer noopener":void 0)}
        role=${re(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${re(this.name)}
          library=${re(this.library)}
          src=${re(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Le.styles=[q,Ty];Le.dependencies={"sl-icon":Te};h([W(".icon-button")],Le.prototype,"button",2);h([ae()],Le.prototype,"hasFocus",2);h([g()],Le.prototype,"name",2);h([g()],Le.prototype,"library",2);h([g()],Le.prototype,"src",2);h([g()],Le.prototype,"href",2);h([g()],Le.prototype,"target",2);h([g()],Le.prototype,"download",2);h([g()],Le.prototype,"label",2);h([g({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);var Iy=new Map,KT=new WeakMap;function YT(t){return t??{keyframes:[],options:{duration:0}}}function $y(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function St(t,e){Iy.set(t,YT(e))}function kt(t,e,r){let i=KT.get(t);if(i?.[e])return $y(i[e],r.dir);let s=Iy.get(e);return s?$y(s,r.dir):{keyframes:[],options:{duration:0}}}function Ct(t,e){return new Promise(r=>{function i(s){s.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}function Et(t,e,r){return new Promise(i=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let s=t.animate(e,pr(Ke({},r),{duration:JT()?0:r.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function JT(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tt(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}function Nd(t,e){return t.map(r=>pr(Ke({},r),{height:r.height==="auto"?`${e}px`:r.height}))}var Md=new Set,Cs=new Map,Ii,zd="ltr",Fd="en",Py=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Py){let t=new MutationObserver(Ly);zd=document.documentElement.dir||"ltr",Fd=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function no(...t){t.map(e=>{let r=e.$code.toLowerCase();Cs.has(r)?Cs.set(r,Object.assign(Object.assign({},Cs.get(r)),e)):Cs.set(r,e),Ii||(Ii=e)}),Ly()}function Ly(){Py&&(zd=document.documentElement.dir||"ltr",Fd=document.documentElement.lang||navigator.language),[...Md.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var gl=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Md.add(this.host)}hostDisconnected(){Md.delete(this.host)}dir(){return`${this.host.dir||zd}`.toLowerCase()}lang(){return`${this.host.lang||Fd}`.toLowerCase()}getTranslationData(e){var r,i;let s=new Intl.Locale(e.replace(/_/g,"-")),n=s?.language.toLowerCase(),o=(i=(r=s?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=Cs.get(`${n}-${o}`),l=Cs.get(n);return{locale:s,language:n,region:o,primary:a,secondary:l}}exists(e,r){var i;let{primary:s,secondary:n}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(s&&s[e]||n&&n[e]||r.includeFallback&&Ii&&Ii[e])}term(e,...r){let{primary:i,secondary:s}=this.getTranslationData(this.lang()),n;if(i&&i[e])n=i[e];else if(s&&s[e])n=s[e];else if(Ii&&Ii[e])n=Ii[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...r):n}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var Ry={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};no(Ry);var Dy=Ry;var Ae=class extends gl{};no(Dy);var Fe=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ny(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),r="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var My=j`
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
`;var Es=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),st=class extends V{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"icon","suffix"),this.localize=new Ae(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Tt(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=kt(this,"alert.show",{dir:this.localize.dir()});await Et(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Tt(this.base);let{keyframes:t,options:e}=kt(this,"alert.hide",{dir:this.localize.dir()});await Et(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ct(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Es.parentElement===null&&document.body.append(Es),Es.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Es.removeChild(this),t(),Es.querySelector("sl-alert")===null&&Es.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${Y({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${Y({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};st.styles=[q,My];st.dependencies={"sl-icon-button":Le};h([W('[part~="base"]')],st.prototype,"base",2);h([W(".alert__countdown-elapsed")],st.prototype,"countdownElement",2);h([g({type:Boolean,reflect:!0})],st.prototype,"open",2);h([g({type:Boolean,reflect:!0})],st.prototype,"closable",2);h([g({reflect:!0})],st.prototype,"variant",2);h([g({type:Number})],st.prototype,"duration",2);h([g({type:String,reflect:!0})],st.prototype,"countdown",2);h([ae()],st.prototype,"remainingTime",2);h([Z("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);h([Z("duration")],st.prototype,"handleDurationChange",1);St("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});St("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});st.define("sl-alert");var zy=j`
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
`;var Pi=class extends V{constructor(){super(...arguments),this.localize=new Ae(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Pi.styles=[q,zy];var oo=new WeakMap,ao=new WeakMap,lo=new WeakMap,Ud=new WeakSet,bl=new WeakMap,Yt=class{constructor(t,e){this.handleFormData=r=>{let i=this.options.disabled(this.host),s=this.options.name(this.host),n=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!o&&typeof s=="string"&&s.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{r.formData.append(s,a.toString())}):r.formData.append(s,n.toString()))},this.handleFormSubmit=r=>{var i;let s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=oo.get(this.form))==null||i.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),bl.set(this.host,[])},this.handleInteraction=r=>{let i=bl.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ke({form:r=>{let i=r.form;if(i){let n=r.getRootNode().querySelector(`#${i}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),bl.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),bl.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,oo.has(this.form)?oo.get(this.form).add(this.host):oo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ao.has(this.form)||(ao.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),lo.has(this.form)||(lo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=oo.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ao.has(this.form)&&(this.form.reportValidity=ao.get(this.form),ao.delete(this.form)),lo.has(this.form)&&(this.form.checkValidity=lo.get(this.form),lo.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ud.add(t):Ud.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&r.setAttribute(i,e.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!Ud.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ts=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Fy=Object.freeze(pr(Ke({},Ts),{valid:!1,valueMissing:!0})),Uy=Object.freeze(pr(Ke({},Ts),{valid:!1,customError:!0}));var yl=j`
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
`;var be=class extends V{constructor(){super(...arguments),this.formControlController=new Yt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Fe(this,"[default]","prefix","suffix"),this.localize=new Ae(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ts}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?ks`a`:ks`button`;return qr`
      <${e}
        part="base"
        class=${Y({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${re(t?void 0:this.disabled)}
        type=${re(t?void 0:this.type)}
        title=${this.title}
        name=${re(t?void 0:this.name)}
        value=${re(t?void 0:this.value)}
        href=${re(t&&!this.disabled?this.href:void 0)}
        target=${re(t?this.target:void 0)}
        download=${re(t?this.download:void 0)}
        rel=${re(t?this.rel:void 0)}
        role=${re(t?void 0:"button")}
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
        ${this.caret?qr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};be.styles=[q,yl];be.dependencies={"sl-icon":Te,"sl-spinner":Pi};h([W(".button")],be.prototype,"button",2);h([ae()],be.prototype,"hasFocus",2);h([ae()],be.prototype,"invalid",2);h([g()],be.prototype,"title",2);h([g({reflect:!0})],be.prototype,"variant",2);h([g({reflect:!0})],be.prototype,"size",2);h([g({type:Boolean,reflect:!0})],be.prototype,"caret",2);h([g({type:Boolean,reflect:!0})],be.prototype,"disabled",2);h([g({type:Boolean,reflect:!0})],be.prototype,"loading",2);h([g({type:Boolean,reflect:!0})],be.prototype,"outline",2);h([g({type:Boolean,reflect:!0})],be.prototype,"pill",2);h([g({type:Boolean,reflect:!0})],be.prototype,"circle",2);h([g()],be.prototype,"type",2);h([g()],be.prototype,"name",2);h([g()],be.prototype,"value",2);h([g()],be.prototype,"href",2);h([g()],be.prototype,"target",2);h([g()],be.prototype,"rel",2);h([g()],be.prototype,"download",2);h([g()],be.prototype,"form",2);h([g({attribute:"formaction"})],be.prototype,"formAction",2);h([g({attribute:"formenctype"})],be.prototype,"formEnctype",2);h([g({attribute:"formmethod"})],be.prototype,"formMethod",2);h([g({attribute:"formnovalidate",type:Boolean})],be.prototype,"formNoValidate",2);h([g({attribute:"formtarget"})],be.prototype,"formTarget",2);h([Z("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);be.define("sl-button");var jy=j`
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
`;var vl=(t="value")=>(e,r)=>{let i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,o,a){var l;let c=i.getPropertyOptions(t),u=typeof c.attribute=="string"?c.attribute:t;if(n===u){let d=c.converter||Vr,f=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:Vr.fromAttribute)(a,c.type);this[t]!==f&&(this[r]=f)}s.call(this,n,o,a)}};var Wr=j`
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
`;var wl=mr(class extends Kt{constructor(t){if(super(t),t.type!==ft.PROPERTY&&t.type!==ft.ATTRIBUTE&&t.type!==ft.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!pl(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ge||e===we)return e;let r=t.element,i=t.name;if(t.type===ft.PROPERTY){if(e===r[i])return Ge}else if(t.type===ft.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return Ge}else if(t.type===ft.ATTRIBUTE&&r.getAttribute(i)===e+"")return Ge;return Ey(t),e}});var ie=class extends V{constructor(){super(...arguments),this.formControlController=new Yt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Fe(this,"help-text","label"),this.localize=new Ae(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){let s=e??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(t,s,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${Y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${Y({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${re(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${re(this.placeholder)}
              minlength=${re(this.minlength)}
              maxlength=${re(this.maxlength)}
              min=${re(this.min)}
              max=${re(this.max)}
              step=${re(this.step)}
              .value=${wl(this.value)}
              autocapitalize=${re(this.autocapitalize)}
              autocomplete=${re(this.autocomplete)}
              autocorrect=${re(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${re(this.pattern)}
              enterkeyhint=${re(this.enterkeyhint)}
              inputmode=${re(this.inputmode)}
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
    `}};ie.styles=[q,Wr,jy];ie.dependencies={"sl-icon":Te};h([W(".input__control")],ie.prototype,"input",2);h([ae()],ie.prototype,"hasFocus",2);h([g()],ie.prototype,"title",2);h([g({reflect:!0})],ie.prototype,"type",2);h([g()],ie.prototype,"name",2);h([g()],ie.prototype,"value",2);h([vl()],ie.prototype,"defaultValue",2);h([g({reflect:!0})],ie.prototype,"size",2);h([g({type:Boolean,reflect:!0})],ie.prototype,"filled",2);h([g({type:Boolean,reflect:!0})],ie.prototype,"pill",2);h([g()],ie.prototype,"label",2);h([g({attribute:"help-text"})],ie.prototype,"helpText",2);h([g({type:Boolean})],ie.prototype,"clearable",2);h([g({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);h([g()],ie.prototype,"placeholder",2);h([g({type:Boolean,reflect:!0})],ie.prototype,"readonly",2);h([g({attribute:"password-toggle",type:Boolean})],ie.prototype,"passwordToggle",2);h([g({attribute:"password-visible",type:Boolean})],ie.prototype,"passwordVisible",2);h([g({attribute:"no-spin-buttons",type:Boolean})],ie.prototype,"noSpinButtons",2);h([g({reflect:!0})],ie.prototype,"form",2);h([g({type:Boolean,reflect:!0})],ie.prototype,"required",2);h([g()],ie.prototype,"pattern",2);h([g({type:Number})],ie.prototype,"minlength",2);h([g({type:Number})],ie.prototype,"maxlength",2);h([g()],ie.prototype,"min",2);h([g()],ie.prototype,"max",2);h([g()],ie.prototype,"step",2);h([g()],ie.prototype,"autocapitalize",2);h([g()],ie.prototype,"autocorrect",2);h([g()],ie.prototype,"autocomplete",2);h([g({type:Boolean})],ie.prototype,"autofocus",2);h([g()],ie.prototype,"enterkeyhint",2);h([g({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ie.prototype,"spellcheck",2);h([g()],ie.prototype,"inputmode",2);h([Z("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1);h([Z("step",{waitUntilFirstUpdate:!0})],ie.prototype,"handleStepChange",1);h([Z("value",{waitUntilFirstUpdate:!0})],ie.prototype,"handleValueChange",1);ie.define("sl-input");var Vy=j`
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
`;var Nt=class extends V{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=$`
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
        class=${Y({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Nt.styles=[q,Vy];Nt.dependencies={"sl-icon":Te};h([ae()],Nt.prototype,"hasError",2);h([g()],Nt.prototype,"image",2);h([g()],Nt.prototype,"label",2);h([g()],Nt.prototype,"initials",2);h([g()],Nt.prototype,"loading",2);h([g({reflect:!0})],Nt.prototype,"shape",2);h([Z("image")],Nt.prototype,"handleImageChange",1);Nt.define("sl-avatar");Pi.define("sl-spinner");var By=j`
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
`;var jd=class extends V{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${Y({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};jd.styles=[q,By];jd.define("sl-card");var qy=j`
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
`;var At=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Tt(this.body);let{keyframes:e,options:r}=kt(this,"details.show",{dir:this.localize.dir()});await Et(this.body,Nd(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Tt(this.body);let{keyframes:e,options:r}=kt(this,"details.hide",{dir:this.localize.dir()});await Et(this.body,Nd(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ct(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${Y({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};At.styles=[q,qy];At.dependencies={"sl-icon":Te};h([W(".details")],At.prototype,"details",2);h([W(".details__header")],At.prototype,"header",2);h([W(".details__body")],At.prototype,"body",2);h([W(".details__expand-icon-slot")],At.prototype,"expandIconSlot",2);h([g({type:Boolean,reflect:!0})],At.prototype,"open",2);h([g()],At.prototype,"summary",2);h([g({type:Boolean,reflect:!0})],At.prototype,"disabled",2);h([Z("open",{waitUntilFirstUpdate:!0})],At.prototype,"handleOpenChange",1);St("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});St("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});At.define("sl-details");var Wy=j`
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
`;var co=class extends V{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};co.styles=[q,Wy];h([g({type:Boolean,reflect:!0})],co.prototype,"vertical",2);h([Z("vertical")],co.prototype,"handleVerticalChange",1);co.define("sl-divider");var Hy=j`
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
`;var Jt=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${Y({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};Jt.styles=[q,Hy];Jt.dependencies={"sl-icon-button":Le};h([g({reflect:!0})],Jt.prototype,"variant",2);h([g({reflect:!0})],Jt.prototype,"size",2);h([g({type:Boolean,reflect:!0})],Jt.prototype,"pill",2);h([g({type:Boolean})],Jt.prototype,"removable",2);Jt.define("sl-tag");var Zy=j`
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
`;var Gy=new WeakMap;function Ky(t){let e=Gy.get(t);return e||(e=window.getComputedStyle(t,null),Gy.set(t,e)),e}function XT(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Ky(t);return e.visibility!=="hidden"&&e.display!=="none"}function QT(t){let e=Ky(t),{overflowY:r,overflowX:i}=e;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&r==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function eA(t){let e=t.tagName.toLowerCase(),r=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!XT(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:QT(t)}function Yy(t){var e,r;let i=rA(t),s=(e=i[0])!=null?e:null,n=(r=i[i.length-1])!=null?r:null;return{start:s,end:n}}function tA(t,e){var r;return((r=t.getRootNode({composed:!0}))==null?void 0:r.host)!==e}function rA(t){let e=new WeakMap,r=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!r.includes(s)&&eA(s)&&r.push(s),s instanceof HTMLSlotElement&&tA(s,t)&&s.assignedElements({flatten:!0}).forEach(n=>{i(n)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(let n of s.children)i(n)}return i(t),r.sort((s,n)=>{let o=Number(s.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}var Jy=j`
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
`;var Xt=Math.min,Qe=Math.max,ho=Math.round,fo=Math.floor,Mt=t=>({x:t,y:t}),iA={left:"right",right:"left",bottom:"top",top:"bottom"},sA={start:"end",end:"start"};function xl(t,e,r){return Qe(t,Xt(e,r))}function Li(t,e){return typeof t=="function"?t(e):t}function gr(t){return t.split("-")[0]}function Ri(t){return t.split("-")[1]}function Vd(t){return t==="x"?"y":"x"}function Sl(t){return t==="y"?"height":"width"}function Hr(t){return["top","bottom"].includes(gr(t))?"y":"x"}function kl(t){return Vd(Hr(t))}function Xy(t,e,r){r===void 0&&(r=!1);let i=Ri(t),s=kl(t),n=Sl(s),o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=uo(o)),[o,uo(o)]}function Qy(t){let e=uo(t);return[_l(t),e,_l(e)]}function _l(t){return t.replace(/start|end/g,e=>sA[e])}function nA(t,e,r){let i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function ev(t,e,r,i){let s=Ri(t),n=nA(gr(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(_l)))),n}function uo(t){return t.replace(/left|right|bottom|top/g,e=>iA[e])}function oA(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bd(t){return typeof t!="number"?oA(t):{top:t,right:t,bottom:t,left:t}}function Di(t){let{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function tv(t,e,r){let{reference:i,floating:s}=t,n=Hr(e),o=kl(e),a=Sl(o),l=gr(e),c=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[a]/2-s[a]/2,f;switch(l){case"top":f={x:u,y:i.y-s.height};break;case"bottom":f={x:u,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:d};break;case"left":f={x:i.x-s.width,y:d};break;default:f={x:i.x,y:i.y}}switch(Ri(e)){case"start":f[o]-=p*(r&&c?-1:1);break;case"end":f[o]+=p*(r&&c?-1:1);break}return f}var rv=async(t,e,r)=>{let{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,a=n.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e)),c=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:d}=tv(c,i,l),p=i,f={},m=0;for(let _=0;_<a.length;_++){let{name:y,fn:v}=a[_],{x,y:w,data:b,reset:S}=await v({x:u,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:f,rects:c,platform:o,elements:{reference:t,floating:e}});u=x??u,d=w??d,f={...f,[y]:{...f[y],...b}},S&&m<=50&&(m++,typeof S=="object"&&(S.placement&&(p=S.placement),S.rects&&(c=S.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):S.rects),{x:u,y:d}=tv(c,p,l)),_=-1)}return{x:u,y:d,placement:p,strategy:s,middlewareData:f}};async function Cl(t,e){var r;e===void 0&&(e={});let{x:i,y:s,platform:n,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Li(e,t),m=Bd(f),y=a[p?d==="floating"?"reference":"floating":d],v=Di(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(y)))==null||r?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),x=d==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,w=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),b=await(n.isElement==null?void 0:n.isElement(w))?await(n.getScale==null?void 0:n.getScale(w))||{x:1,y:1}:{x:1,y:1},S=Di(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:w,strategy:l}):x);return{top:(v.top-S.top+m.top)/b.y,bottom:(S.bottom-v.bottom+m.bottom)/b.y,left:(v.left-S.left+m.left)/b.x,right:(S.right-v.right+m.right)/b.x}}var iv=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:i,placement:s,rects:n,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=Li(t,e)||{};if(c==null)return{};let d=Bd(u),p={x:r,y:i},f=kl(s),m=Sl(f),_=await o.getDimensions(c),y=f==="y",v=y?"top":"left",x=y?"bottom":"right",w=y?"clientHeight":"clientWidth",b=n.reference[m]+n.reference[f]-p[f]-n.floating[m],S=p[f]-n.reference[f],z=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c)),R=z?z[w]:0;(!R||!await(o.isElement==null?void 0:o.isElement(z)))&&(R=a.floating[w]||n.floating[m]);let U=b/2-S/2,le=R/2-_[m]/2-1,ee=Xt(d[v],le),de=Xt(d[x],le),ce=ee,Re=R-_[m]-de,De=R/2-_[m]/2+U,Fi=xl(ce,De,Re),Qt=!l.arrow&&Ri(s)!=null&&De!==Fi&&n.reference[m]/2-(De<ce?ee:de)-_[m]/2<0,Ut=Qt?De<ce?De-ce:De-Re:0;return{[f]:p[f]+Ut,data:{[f]:Fi,centerOffset:De-Fi-Ut,...Qt&&{alignmentOffset:Ut}},reset:Qt}}});var sv=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;let{placement:s,middlewareData:n,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:_=!0,...y}=Li(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};let v=gr(s),x=Hr(a),w=gr(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=p||(w||!_?[uo(a)]:Qy(a)),z=m!=="none";!p&&z&&S.push(...ev(a,_,m,b));let R=[a,...S],U=await Cl(e,y),le=[],ee=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&le.push(U[v]),d){let De=Xy(s,o,b);le.push(U[De[0]],U[De[1]])}if(ee=[...ee,{placement:s,overflows:le}],!le.every(De=>De<=0)){var de,ce;let De=(((de=n.flip)==null?void 0:de.index)||0)+1,Fi=R[De];if(Fi)return{data:{index:De,overflows:ee},reset:{placement:Fi}};let Qt=(ce=ee.filter(Ut=>Ut.overflows[0]<=0).sort((Ut,yr)=>Ut.overflows[1]-yr.overflows[1])[0])==null?void 0:ce.placement;if(!Qt)switch(f){case"bestFit":{var Re;let Ut=(Re=ee.filter(yr=>{if(z){let vr=Hr(yr.placement);return vr===x||vr==="y"}return!0}).map(yr=>[yr.placement,yr.overflows.filter(vr=>vr>0).reduce((vr,Hv)=>vr+Hv,0)]).sort((yr,vr)=>yr[1]-vr[1])[0])==null?void 0:Re[0];Ut&&(Qt=Ut);break}case"initialPlacement":Qt=a;break}if(s!==Qt)return{reset:{placement:Qt}}}return{}}}};async function aA(t,e){let{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=gr(r),a=Ri(r),l=Hr(r)==="y",c=["left","top"].includes(o)?-1:1,u=n&&l?-1:1,d=Li(e,t),{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),l?{x:f*u,y:p*c}:{x:p*c,y:f*u}}var nv=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;let{x:s,y:n,placement:o,middlewareData:a}=e,l=await aA(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:o}}}}},ov=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:a={fn:y=>{let{x:v,y:x}=y;return{x:v,y:x}}},...l}=Li(t,e),c={x:r,y:i},u=await Cl(e,l),d=Hr(gr(s)),p=Vd(d),f=c[p],m=c[d];if(n){let y=p==="y"?"top":"left",v=p==="y"?"bottom":"right",x=f+u[y],w=f-u[v];f=xl(x,f,w)}if(o){let y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",x=m+u[y],w=m-u[v];m=xl(x,m,w)}let _=a.fn({...e,[p]:f,[d]:m});return{..._,data:{x:_.x-r,y:_.y-i,enabled:{[p]:n,[d]:o}}}}}};var av=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;let{placement:s,rects:n,platform:o,elements:a}=e,{apply:l=()=>{},...c}=Li(t,e),u=await Cl(e,c),d=gr(s),p=Ri(s),f=Hr(s)==="y",{width:m,height:_}=n.floating,y,v;d==="top"||d==="bottom"?(y=d,v=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=p==="end"?"top":"bottom");let x=_-u.top-u.bottom,w=m-u.left-u.right,b=Xt(_-u[y],x),S=Xt(m-u[v],w),z=!e.middlewareData.shift,R=b,U=S;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(U=w),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(R=x),z&&!p){let ee=Qe(u.left,0),de=Qe(u.right,0),ce=Qe(u.top,0),Re=Qe(u.bottom,0);f?U=m-2*(ee!==0||de!==0?ee+de:Qe(u.left,u.right)):R=_-2*(ce!==0||Re!==0?ce+Re:Qe(u.top,u.bottom))}await l({...e,availableWidth:U,availableHeight:R});let le=await o.getDimensions(a.floating);return m!==le.width||_!==le.height?{reset:{rects:!0}}:{}}}};function El(){return typeof window<"u"}function Ni(t){return cv(t)?(t.nodeName||"").toLowerCase():"#document"}function nt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function zt(t){var e;return(e=(cv(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function cv(t){return El()?t instanceof Node||t instanceof nt(t).Node:!1}function Ot(t){return El()?t instanceof Element||t instanceof nt(t).Element:!1}function Ft(t){return El()?t instanceof HTMLElement||t instanceof nt(t).HTMLElement:!1}function lv(t){return!El()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof nt(t).ShadowRoot}function Os(t){let{overflow:e,overflowX:r,overflowY:i,display:s}=$t(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function uv(t){return["table","td","th"].includes(Ni(t))}function po(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function $s(t){let e=Tl(),r=Ot(t)?$t(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function dv(t){let e=br(t);for(;Ft(e)&&!Mi(e);){if($s(e))return e;if(po(e))return null;e=br(e)}return null}function Tl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mi(t){return["html","body","#document"].includes(Ni(t))}function $t(t){return nt(t).getComputedStyle(t)}function mo(t){return Ot(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function br(t){if(Ni(t)==="html")return t;let e=t.assignedSlot||t.parentNode||lv(t)&&t.host||zt(t);return lv(e)?e.host:e}function hv(t){let e=br(t);return Mi(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ft(e)&&Os(e)?e:hv(e)}function As(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);let s=hv(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=nt(s);if(n){let a=Al(o);return e.concat(o,o.visualViewport||[],Os(s)?s:[],a&&r?As(a):[])}return e.concat(s,As(s,[],r))}function Al(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function mv(t){let e=$t(t),r=parseFloat(e.width)||0,i=parseFloat(e.height)||0,s=Ft(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,a=ho(r)!==n||ho(i)!==o;return a&&(r=n,i=o),{width:r,height:i,$:a}}function Wd(t){return Ot(t)?t:t.contextElement}function Is(t){let e=Wd(t);if(!Ft(e))return Mt(1);let r=e.getBoundingClientRect(),{width:i,height:s,$:n}=mv(e),o=(n?ho(r.width):r.width)/i,a=(n?ho(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}var lA=Mt(0);function gv(t){let e=nt(t);return!Tl()||!e.visualViewport?lA:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function cA(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==nt(t)?!1:e}function zi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);let s=t.getBoundingClientRect(),n=Wd(t),o=Mt(1);e&&(i?Ot(i)&&(o=Is(i)):o=Is(t));let a=cA(n,r,i)?gv(n):Mt(0),l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,d=s.height/o.y;if(n){let p=nt(n),f=i&&Ot(i)?nt(i):i,m=p,_=Al(m);for(;_&&i&&f!==m;){let y=Is(_),v=_.getBoundingClientRect(),x=$t(_),w=v.left+(_.clientLeft+parseFloat(x.paddingLeft))*y.x,b=v.top+(_.clientTop+parseFloat(x.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=w,c+=b,m=nt(_),_=Al(m)}}return Di({width:u,height:d,x:l,y:c})}function Hd(t,e){let r=mo(t).scrollLeft;return e?e.left+r:zi(zt(t)).left+r}function bv(t,e,r){r===void 0&&(r=!1);let i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-(r?0:Hd(t,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function uA(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t,n=s==="fixed",o=zt(i),a=e?po(e.floating):!1;if(i===o||a&&n)return r;let l={scrollLeft:0,scrollTop:0},c=Mt(1),u=Mt(0),d=Ft(i);if((d||!d&&!n)&&((Ni(i)!=="body"||Os(o))&&(l=mo(i)),Ft(i))){let f=zi(i);c=Is(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}let p=o&&!d&&!n?bv(o,l,!0):Mt(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:r.y*c.y-l.scrollTop*c.y+u.y+p.y}}function dA(t){return Array.from(t.getClientRects())}function hA(t){let e=zt(t),r=mo(t),i=t.ownerDocument.body,s=Qe(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Qe(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),o=-r.scrollLeft+Hd(t),a=-r.scrollTop;return $t(i).direction==="rtl"&&(o+=Qe(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:a}}function fA(t,e){let r=nt(t),i=zt(t),s=r.visualViewport,n=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){n=s.width,o=s.height;let c=Tl();(!c||c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:n,height:o,x:a,y:l}}function pA(t,e){let r=zi(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Ft(t)?Is(t):Mt(1),o=t.clientWidth*n.x,a=t.clientHeight*n.y,l=s*n.x,c=i*n.y;return{width:o,height:a,x:l,y:c}}function fv(t,e,r){let i;if(e==="viewport")i=fA(t,r);else if(e==="document")i=hA(zt(t));else if(Ot(e))i=pA(e,r);else{let s=gv(t);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Di(i)}function yv(t,e){let r=br(t);return r===e||!Ot(r)||Mi(r)?!1:$t(r).position==="fixed"||yv(r,e)}function mA(t,e){let r=e.get(t);if(r)return r;let i=As(t,[],!1).filter(a=>Ot(a)&&Ni(a)!=="body"),s=null,n=$t(t).position==="fixed",o=n?br(t):t;for(;Ot(o)&&!Mi(o);){let a=$t(o),l=$s(o);!l&&a.position==="fixed"&&(s=null),(n?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Os(o)&&!l&&yv(t,o))?i=i.filter(u=>u!==o):s=a,o=br(o)}return e.set(t,i),i}function gA(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t,o=[...r==="clippingAncestors"?po(e)?[]:mA(e,this._c):[].concat(r),i],a=o[0],l=o.reduce((c,u)=>{let d=fv(e,u,s);return c.top=Qe(d.top,c.top),c.right=Xt(d.right,c.right),c.bottom=Xt(d.bottom,c.bottom),c.left=Qe(d.left,c.left),c},fv(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function bA(t){let{width:e,height:r}=mv(t);return{width:e,height:r}}function yA(t,e,r){let i=Ft(e),s=zt(e),n=r==="fixed",o=zi(t,!0,n,e),a={scrollLeft:0,scrollTop:0},l=Mt(0);if(i||!i&&!n)if((Ni(e)!=="body"||Os(s))&&(a=mo(e)),i){let p=zi(e,!0,n,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&(l.x=Hd(s));let c=s&&!i&&!n?bv(s,a):Mt(0),u=o.left+a.scrollLeft-l.x-c.x,d=o.top+a.scrollTop-l.y-c.y;return{x:u,y:d,width:o.width,height:o.height}}function qd(t){return $t(t).position==="static"}function pv(t,e){if(!Ft(t)||$t(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return zt(t)===r&&(r=r.ownerDocument.body),r}function vv(t,e){let r=nt(t);if(po(t))return r;if(!Ft(t)){let s=br(t);for(;s&&!Mi(s);){if(Ot(s)&&!qd(s))return s;s=br(s)}return r}let i=pv(t,e);for(;i&&uv(i)&&qd(i);)i=pv(i,e);return i&&Mi(i)&&qd(i)&&!$s(i)?r:i||dv(t)||r}var vA=async function(t){let e=this.getOffsetParent||vv,r=this.getDimensions,i=await r(t.floating);return{reference:yA(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function wA(t){return $t(t).direction==="rtl"}var go={convertOffsetParentRelativeRectToViewportRelativeRect:uA,getDocumentElement:zt,getClippingRect:gA,getOffsetParent:vv,getElementRects:vA,getClientRects:dA,getDimensions:bA,getScale:Is,isElement:Ot,isRTL:wA};function _A(t,e){let r=null,i,s=zt(t);function n(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();let{left:c,top:u,width:d,height:p}=t.getBoundingClientRect();if(a||e(),!d||!p)return;let f=fo(u),m=fo(s.clientWidth-(c+d)),_=fo(s.clientHeight-(u+p)),y=fo(c),x={rootMargin:-f+"px "+-m+"px "+-_+"px "+-y+"px",threshold:Qe(0,Xt(1,l))||1},w=!0;function b(S){let z=S[0].intersectionRatio;if(z!==l){if(!w)return o();z?o(!1,z):i=setTimeout(()=>{o(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(b,{...x,root:s.ownerDocument})}catch{r=new IntersectionObserver(b,x)}r.observe(t)}return o(!0),n}function wv(t,e,r,i){i===void 0&&(i={});let{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Wd(t),u=s||n?[...c?As(c):[],...As(e)]:[];u.forEach(v=>{s&&v.addEventListener("scroll",r,{passive:!0}),n&&v.addEventListener("resize",r)});let d=c&&a?_A(c,r):null,p=-1,f=null;o&&(f=new ResizeObserver(v=>{let[x]=v;x&&x.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var w;(w=f)==null||w.observe(e)})),r()}),c&&!l&&f.observe(c),f.observe(e));let m,_=l?zi(t):null;l&&y();function y(){let v=zi(t);_&&(v.x!==_.x||v.y!==_.y||v.width!==_.width||v.height!==_.height)&&r(),_=v,m=requestAnimationFrame(y)}return r(),()=>{var v;u.forEach(x=>{s&&x.removeEventListener("scroll",r),n&&x.removeEventListener("resize",r)}),d?.(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(m)}}var _v=nv;var xv=ov,Sv=sv,Zd=av;var kv=iv;var Cv=(t,e,r)=>{let i=new Map,s={platform:go,...r},n={...s.platform,_c:i};return rv(t,e,{...s,platform:n})};function Ev(t){return xA(t)}function Gd(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function xA(t){for(let e=t;e;e=Gd(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Gd(t);e;e=Gd(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||$s(r)||e.tagName==="BODY"))return e}return null}function SA(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var ge=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),i=0,s=0,n=0,o=0,a=0,l=0,c=0,u=0;r?t.top<e.top?(i=t.left,s=t.bottom,n=t.right,o=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):(i=e.left,s=e.bottom,n=e.right,o=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):t.left<e.left?(i=t.right,s=t.top,n=e.left,o=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom):(i=e.right,s=e.top,n=t.left,o=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||SA(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=wv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[_v({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Zd({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=s?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Sv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(xv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Zd({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(kv({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>go.getOffsetParent(r,Ev):go.getOffsetParent;Cv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:pr(Ke({},go),{getOffsetParent:e})}).then(({x:r,y:i,middlewareData:s,placement:n})=>{let o=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let l=s.arrow.x,c=s.arrow.y,u="",d="",p="",f="";if(this.arrowPlacement==="start"){let m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?m:"",f=o?"":m}else if(this.arrowPlacement==="end"){let m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":m,f=o?m:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:p,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Y({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Y({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ge.styles=[q,Jy];h([W(".popup")],ge.prototype,"popup",2);h([W(".popup__arrow")],ge.prototype,"arrowEl",2);h([g()],ge.prototype,"anchor",2);h([g({type:Boolean,reflect:!0})],ge.prototype,"active",2);h([g({reflect:!0})],ge.prototype,"placement",2);h([g({reflect:!0})],ge.prototype,"strategy",2);h([g({type:Number})],ge.prototype,"distance",2);h([g({type:Number})],ge.prototype,"skidding",2);h([g({type:Boolean})],ge.prototype,"arrow",2);h([g({attribute:"arrow-placement"})],ge.prototype,"arrowPlacement",2);h([g({attribute:"arrow-padding",type:Number})],ge.prototype,"arrowPadding",2);h([g({type:Boolean})],ge.prototype,"flip",2);h([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ge.prototype,"flipFallbackPlacements",2);h([g({attribute:"flip-fallback-strategy"})],ge.prototype,"flipFallbackStrategy",2);h([g({type:Object})],ge.prototype,"flipBoundary",2);h([g({attribute:"flip-padding",type:Number})],ge.prototype,"flipPadding",2);h([g({type:Boolean})],ge.prototype,"shift",2);h([g({type:Object})],ge.prototype,"shiftBoundary",2);h([g({attribute:"shift-padding",type:Number})],ge.prototype,"shiftPadding",2);h([g({attribute:"auto-size"})],ge.prototype,"autoSize",2);h([g()],ge.prototype,"sync",2);h([g({type:Object})],ge.prototype,"autoSizeBoundary",2);h([g({attribute:"auto-size-padding",type:Number})],ge.prototype,"autoSizePadding",2);h([g({attribute:"hover-bridge",type:Boolean})],ge.prototype,"hoverBridge",2);var Be=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,s;let n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(s=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||n?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),i=r[0],s=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>Yy(i).start),r;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=e.button;break;default:r=e}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ct(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Tt(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=kt(this,"dropdown.show",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tt(this);let{keyframes:t,options:e}=kt(this,"dropdown.hide",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
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
        sync=${re(this.sync?this.sync:void 0)}
        class=${Y({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Be.styles=[q,Zy];Be.dependencies={"sl-popup":ge};h([W(".dropdown")],Be.prototype,"popup",2);h([W(".dropdown__trigger")],Be.prototype,"trigger",2);h([W(".dropdown__panel")],Be.prototype,"panel",2);h([g({type:Boolean,reflect:!0})],Be.prototype,"open",2);h([g({reflect:!0})],Be.prototype,"placement",2);h([g({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);h([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Be.prototype,"stayOpenOnSelect",2);h([g({attribute:!1})],Be.prototype,"containingElement",2);h([g({type:Number})],Be.prototype,"distance",2);h([g({type:Number})],Be.prototype,"skidding",2);h([g({type:Boolean})],Be.prototype,"hoist",2);h([g({reflect:!0})],Be.prototype,"sync",2);h([Z("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);St("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});St("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Be.define("sl-dropdown");var Tv=j`
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
`;var Ps=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${Y({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ps.styles=[q,Tv];h([g({reflect:!0})],Ps.prototype,"variant",2);h([g({type:Boolean,reflect:!0})],Ps.prototype,"pill",2);h([g({type:Boolean,reflect:!0})],Ps.prototype,"pulse",2);Ps.define("sl-badge");var Av=j`
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
`;var qe=class extends V{constructor(){super(...arguments),this.formControlController=new Yt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Fe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return $`
      <div
        class=${Y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Y({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${re(this.value)}
            .checked=${wl(this.checked)}
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
    `}};qe.styles=[q,Wr,Av];h([W('input[type="checkbox"]')],qe.prototype,"input",2);h([ae()],qe.prototype,"hasFocus",2);h([g()],qe.prototype,"title",2);h([g()],qe.prototype,"name",2);h([g()],qe.prototype,"value",2);h([g({reflect:!0})],qe.prototype,"size",2);h([g({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);h([g({type:Boolean,reflect:!0})],qe.prototype,"checked",2);h([vl("checked")],qe.prototype,"defaultChecked",2);h([g({reflect:!0})],qe.prototype,"form",2);h([g({type:Boolean,reflect:!0})],qe.prototype,"required",2);h([g({attribute:"help-text"})],qe.prototype,"helpText",2);h([Z("checked",{waitUntilFirstUpdate:!0})],qe.prototype,"handleCheckedChange",1);h([Z("disabled",{waitUntilFirstUpdate:!0})],qe.prototype,"handleDisabledChange",1);qe.define("sl-switch");var Ov=j`
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
`;var bo=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),bo(i,e);return!0},Ol=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},$v=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),EA(e)}};function kA(t){this._$AN!==void 0?(Ol(this),this._$AM=t,$v(this)):this._$AM=t}function CA(t,e=!1,r=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)bo(i[n],!1),Ol(i[n]);else i!=null&&(bo(i,!1),Ol(i));else bo(this,t)}var EA=t=>{t.type==ft.CHILD&&(t._$AP??=CA,t._$AQ??=kA)},$l=class extends Kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),$v(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(bo(this,e),Ol(this))}setValue(e){if(pl(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var Iv=()=>new Yd,Yd=class{},Kd=new WeakMap,Pv=mr(class extends $l{render(t){return we}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),we}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=Kd.get(e);r===void 0&&(r=new WeakMap,Kd.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Kd.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Lv=class{constructor(t,e){this.popupRef=Iv(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break;default:break}},this.handleClick=r=>{var i;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(i=r.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{let r=this.host.renderRoot.querySelector("slot[name='submenu']"),i=r?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:n,top:o,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of e.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,n)=>{var o;let a=(o=e.get(n))!=null?o:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return s-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?$`
      <sl-popup
        ${Pv(this.popupRef)}
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
    `:$` <slot name="submenu" hidden></slot> `}};var ot=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Fe(this,"submenu"),this.submenuController=new Lv(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ny(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${Y({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}};ot.styles=[q,Ov];ot.dependencies={"sl-icon":Te,"sl-popup":ge,"sl-spinner":Pi};h([W("slot:not([name])")],ot.prototype,"defaultSlot",2);h([W(".menu-item")],ot.prototype,"menuItem",2);h([g()],ot.prototype,"type",2);h([g({type:Boolean,reflect:!0})],ot.prototype,"checked",2);h([g()],ot.prototype,"value",2);h([g({type:Boolean,reflect:!0})],ot.prototype,"loading",2);h([g({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);h([Z("checked")],ot.prototype,"handleCheckedChange",1);h([Z("disabled")],ot.prototype,"handleDisabledChange",1);h([Z("type")],ot.prototype,"handleTypeChange",1);ot.define("sl-menu-item");var Rv=j`
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
`;var Il=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath(),i=r.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;let o=i;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),i=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===t?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Il.styles=[q,Rv];h([W("slot")],Il.prototype,"defaultSlot",2);Il.define("sl-menu");Le.define("sl-icon-button");var Dv=j`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Zr=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=yo(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=yo(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=yo(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=yo(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),i=yo(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
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
    `}};Zr.styles=[q,Dv];h([W("slot")],Zr.prototype,"defaultSlot",2);h([ae()],Zr.prototype,"disableRole",2);h([g()],Zr.prototype,"label",2);function yo(t){var e;let r="sl-button, sl-radio-button";return(e=t.closest(r))!=null?e:t.querySelector(r)}Zr.define("sl-button-group");var Nv=j`
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
`;function TA(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function vo(t,e,r="vertical",i="smooth"){let s=TA(t,e),n=s.top+e.scrollTop,o=s.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,u=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(o<a?e.scrollTo({left:o,behavior:i}):o+t.clientWidth>l&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<c?e.scrollTo({top:n,behavior:i}):n+t.clientHeight>u&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:i}))}var wo=class extends Kt{constructor(e){if(super(e),this.it=we,e.type!==ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===we||e==null)return this._t=void 0,this.it=e;if(e===Ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};wo.directiveName="unsafeHTML",wo.resultType=1;var Mv=mr(wo);var ue=class extends V{constructor(){super(...arguments),this.formControlController=new Yt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Fe(this,"help-text","label"),this.localize=new Ae(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>$`
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
          ${typeof r=="string"?Mv(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return $``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){let r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Tt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=kt(this,"select.show",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.currentOption&&vo(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tt(this);let{keyframes:t,options:e}=kt(this,"select.hide",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ct(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return $`
      <div
        part="form-control"
        class=${Y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${Y({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};ue.styles=[q,Wr,Nv];ue.dependencies={"sl-icon":Te,"sl-popup":ge,"sl-tag":Jt};h([W(".select")],ue.prototype,"popup",2);h([W(".select__combobox")],ue.prototype,"combobox",2);h([W(".select__display-input")],ue.prototype,"displayInput",2);h([W(".select__value-input")],ue.prototype,"valueInput",2);h([W(".select__listbox")],ue.prototype,"listbox",2);h([ae()],ue.prototype,"hasFocus",2);h([ae()],ue.prototype,"displayLabel",2);h([ae()],ue.prototype,"currentOption",2);h([ae()],ue.prototype,"selectedOptions",2);h([ae()],ue.prototype,"valueHasChanged",2);h([g()],ue.prototype,"name",2);h([ae()],ue.prototype,"value",1);h([g({attribute:"value"})],ue.prototype,"defaultValue",2);h([g({reflect:!0})],ue.prototype,"size",2);h([g()],ue.prototype,"placeholder",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"multiple",2);h([g({attribute:"max-options-visible",type:Number})],ue.prototype,"maxOptionsVisible",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);h([g({type:Boolean})],ue.prototype,"clearable",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"open",2);h([g({type:Boolean})],ue.prototype,"hoist",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"filled",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"pill",2);h([g()],ue.prototype,"label",2);h([g({reflect:!0})],ue.prototype,"placement",2);h([g({attribute:"help-text"})],ue.prototype,"helpText",2);h([g({reflect:!0})],ue.prototype,"form",2);h([g({type:Boolean,reflect:!0})],ue.prototype,"required",2);h([g()],ue.prototype,"getTag",2);h([Z("disabled",{waitUntilFirstUpdate:!0})],ue.prototype,"handleDisabledChange",1);h([Z(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ue.prototype,"handleValueChange",1);h([Z("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);St("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});St("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ue.define("sl-select");var zv=j`
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
`;var pt=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return $`
      <div
        part="base"
        class=${Y({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};pt.styles=[q,zv];pt.dependencies={"sl-icon":Te};h([W(".option__label")],pt.prototype,"defaultSlot",2);h([ae()],pt.prototype,"current",2);h([ae()],pt.prototype,"selected",2);h([ae()],pt.prototype,"hasHover",2);h([g({reflect:!0})],pt.prototype,"value",2);h([g({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);h([Z("disabled")],pt.prototype,"handleDisabledChange",1);h([Z("selected")],pt.prototype,"handleSelectedChange",1);h([Z("value")],pt.prototype,"handleValueChange",1);pt.define("sl-option");var Fv=j`
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
`;var Uv=j`
  :host {
    display: contents;
  }
`;var _o=class extends V{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};_o.styles=[q,Uv];h([g({type:Boolean,reflect:!0})],_o.prototype,"disabled",2);h([Z("disabled",{waitUntilFirstUpdate:!0})],_o.prototype,"handleDisabledChange",1);var Ue=class extends V{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Ae(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((r,i)=>{var s;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let r=t.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){let r=t.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let s=this.tabs.find(a=>a.matches(":focus")),n=this.localize.dir()==="rtl",o=null;if(s?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")o=this.focusableTabs[0];else if(t.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let a=this.tabs.findIndex(l=>l===s);o=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let a=this.tabs.findIndex(l=>l===s);o=this.findNextFocusableTab(a,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===o?0:-1}),["top","bottom"].includes(this.placement)&&vo(o,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Ke({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var s;return i.active=i.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&vo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,i=this.localize.dir()==="rtl",s=this.getAllTabs(),o=s.slice(0,s.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let r=null,i=e==="forward"?1:-1,s=t+i;for(;t<this.tabs.length;){if(r=this.tabs[s]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;s+=i}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${Y({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Y({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${Y({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Ue.styles=[q,Fv];Ue.dependencies={"sl-icon-button":Le,"sl-resize-observer":_o};h([W(".tab-group")],Ue.prototype,"tabGroup",2);h([W(".tab-group__body")],Ue.prototype,"body",2);h([W(".tab-group__nav")],Ue.prototype,"nav",2);h([W(".tab-group__indicator")],Ue.prototype,"indicator",2);h([ae()],Ue.prototype,"hasScrollControls",2);h([ae()],Ue.prototype,"shouldHideScrollStartButton",2);h([ae()],Ue.prototype,"shouldHideScrollEndButton",2);h([g()],Ue.prototype,"placement",2);h([g()],Ue.prototype,"activation",2);h([g({attribute:"no-scroll-controls",type:Boolean})],Ue.prototype,"noScrollControls",2);h([g({attribute:"fixed-scroll-controls",type:Boolean})],Ue.prototype,"fixedScrollControls",2);h([ky({passive:!0})],Ue.prototype,"updateScrollButtons",1);h([Z("noScrollControls",{waitUntilFirstUpdate:!0})],Ue.prototype,"updateScrollControls",1);h([Z("placement",{waitUntilFirstUpdate:!0})],Ue.prototype,"syncIndicator",1);Ue.define("sl-tab-group");var AA=(t,e)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...i)},e)}},jv=(t,e,r)=>{let i=t[e];t[e]=function(...s){i.call(this,...s),r.call(this,i,...s)}},OA="onscrollend"in window;if(!OA){let t=new Set,e=new WeakMap,r=s=>{for(let n of s.changedTouches)t.add(n.identifier)},i=s=>{for(let n of s.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),jv(EventTarget.prototype,"addEventListener",function(s,n){if(n!=="scrollend")return;let o=AA(()=>{t.size?o():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",o,{passive:!0}),e.set(this,o)}),jv(EventTarget.prototype,"removeEventListener",function(s,n){if(n!=="scrollend")return;let o=e.get(this);o&&s.call(this,"scroll",o,{passive:!0})})}var Vv=j`
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
`;var $A=0,It=class extends V{constructor(){super(...arguments),this.localize=new Ae(this),this.attrId=++$A,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${Y({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};It.styles=[q,Vv];It.dependencies={"sl-icon-button":Le};h([W(".tab")],It.prototype,"tab",2);h([g({reflect:!0})],It.prototype,"panel",2);h([g({type:Boolean,reflect:!0})],It.prototype,"active",2);h([g({type:Boolean,reflect:!0})],It.prototype,"closable",2);h([g({type:Boolean,reflect:!0})],It.prototype,"disabled",2);h([g({type:Number,reflect:!0})],It.prototype,"tabIndex",2);h([Z("active")],It.prototype,"handleActiveChange",1);h([Z("disabled")],It.prototype,"handleDisabledChange",1);It.define("sl-tab");var Bv=j`
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
`;var IA=0,Ls=class extends V{constructor(){super(...arguments),this.attrId=++IA,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${Y({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ls.styles=[q,Bv];h([g({reflect:!0})],Ls.prototype,"name",2);h([g({type:Boolean,reflect:!0})],Ls.prototype,"active",2);h([Z("active")],Ls.prototype,"handleActiveChange",1);Ls.define("sl-tab-panel");var qv=j`
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
`;var je=class extends V{constructor(){super(...arguments),this.formControlController=new Yt(this),this.hasSlotController=new Fe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?Uy:t?Fy:Ts}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,r.forEach(s=>s.checked=s===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(a=>!a.disabled),i=(e=r.find(a=>a.checked))!=null?e:r[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value,o=r.indexOf(i)+s;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[o].value,r[o].checked=!0,this.hasButtonGroup?r[o].shadowRoot.querySelector("button").focus():(r[o].setAttribute("tabindex","0"),r[o].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=r[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),r=e.find(n=>n.checked),i=e.find(n=>!n.disabled),s=r||i;s&&s.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${Y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
    `}};je.styles=[q,Wr,qv];je.dependencies={"sl-button-group":Zr};h([W("slot:not([name])")],je.prototype,"defaultSlot",2);h([W(".radio-group__validation-input")],je.prototype,"validationInput",2);h([ae()],je.prototype,"hasButtonGroup",2);h([ae()],je.prototype,"errorMessage",2);h([ae()],je.prototype,"defaultValue",2);h([g()],je.prototype,"label",2);h([g({attribute:"help-text"})],je.prototype,"helpText",2);h([g()],je.prototype,"name",2);h([g({reflect:!0})],je.prototype,"value",2);h([g({reflect:!0})],je.prototype,"size",2);h([g({reflect:!0})],je.prototype,"form",2);h([g({type:Boolean,reflect:!0})],je.prototype,"required",2);h([Z("size",{waitUntilFirstUpdate:!0})],je.prototype,"handleSizeChange",1);h([Z("value")],je.prototype,"handleValueChange",1);je.define("sl-radio-group");var Wv=j`
  ${yl}

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
`;var Pt=class extends V{constructor(){super(...arguments),this.hasSlotController=new Fe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return qr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Y({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${re(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Pt.styles=[q,Wv];h([W(".button")],Pt.prototype,"input",2);h([W(".hidden-input")],Pt.prototype,"hiddenInput",2);h([ae()],Pt.prototype,"hasFocus",2);h([g({type:Boolean,reflect:!0})],Pt.prototype,"checked",2);h([g()],Pt.prototype,"value",2);h([g({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);h([g({reflect:!0})],Pt.prototype,"size",2);h([g({type:Boolean,reflect:!0})],Pt.prototype,"pill",2);h([Z("disabled",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleDisabledChange",1);Pt.define("sl-radio-button");Jn("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");xh("gul-info",{title:"<title>",namespace:"<namespace>",database:"<database>",datapoint:"<datapoint>"},Wb);})();
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
